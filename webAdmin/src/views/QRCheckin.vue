<template>
    <v-alert v-if="estat === 'validada-ok'" title="El checkin ha estat realitzat correctament" type="success"/>
    <v-alert v-else-if="estat === 'pre-ok'" title="El checkin ja havia estat realitzat!" type="warning"/>
    <v-alert v-else-if="estat === 'validada-ko'" title="Hi ha hagut un error realitzant el checkin" type="error"/>
    <v-alert v-else title="No es pot mostrar aquesta entrada" type="error"/>

    <br><br>

    <button class="v-btn v-theme--light"
            @click="$router.push({name: 'qrValidator'})"
    >ESCANEJAR UNA ALTRA ENTRADA</button>

</template>

<script>

import {simpleFetch} from "@/utils/utilFunctions";

export default {
    name: "QRCheckin",
    data() {
        return {
            entrada: {},
            estat: ''
        }
    },
    methods: {
        async refrescaEntrada() {
            await simpleFetch("assistencies/?uuid=" + this.$route.params.id_entrada, "GET", "").then((data) => this.entrada = data[0]);
            if (this.entrada.qr === null) this.estat = 'ko'
        },
        async checkin() {
            //if (this.$store.getters.isAdmin) {
                // Si no havia estat validada
                if (!this.entrada.dataValidacio) {
                    console.log("hola")
                    let dades = {
                        uuid: this.entrada.uuid,
                        dataValidacio: new Date(),
                    }
                    simpleFetch("assistencies/" + this.entrada.uuid + "/", "PATCH", dades).then((data) => this.entrada = data);
                    this.estat = 'validada-ok'
                    /*if (response.status == 200) {
                        this.entrada = response.data
                        this.estat = 'validada-ok'
                    } else this.estat = 'validada-ko'*/
                } else this.estat = 'pre-ok'
            //}
        }
    },
    async mounted() {
        await this.refrescaEntrada()
        await this.checkin()
    }
}
</script>

<style scoped>

</style>
