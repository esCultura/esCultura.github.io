<template>
    <v-alert v-if="estat === 'validada-ok'" title="El checkin ha estat realitzat correctament" type="success"/>
    <v-alert v-else-if="estat === 'pre-ok'" title="El checkin ja havia estat realitzat!" type="warning"/>
    <v-alert v-else-if="estat === 'validada-ko'" title="Hi ha hagut un error realitzant el checkin" type="error"/>
    <v-alert v-else title="No es pot mostrar aquesta entrada" type="error"/>

    <br><br>



    <!--<v-descriptions
        v-if="estat === 'ok' || estat === 'validada-ok' || estat === 'pre-ok'"
        class="margin-top"
        :column="1"
        border
    >
        <el-descriptions-item>
            <template #label>
                <div class="cell-item">
                    <el-icon :style="iconStyle">
                        <i class="fa fa-user"></i>
                    </el-icon>
                    {{ $t('Nom i cognoms') }}
                </div>
            </template>
            {{ entrada.nom }} {{ entrada.cognoms }}
        </el-descriptions-item>
        <el-descriptions-item>
            <template #label>
                <div class="cell-item">
                    <el-icon :style="iconStyle">
                    </el-icon>
                    {{ $t('Seient') }}
                </div>
            </template>
            {{ entrada.seient }}
        </el-descriptions-item>
        <el-descriptions-item>
            <template #label>
                <div class="cell-item">
                    <el-icon :style="iconStyle">
                    </el-icon>
                    {{ $t('Box') }}
                </div>
            </template>
            {{ entrada.box }}
        </el-descriptions-item>
    </v-descriptions>-->

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
            simpleFetch("assistencies", "GET", "").then((data) => this.entrada = data);
            if (! this.entrada) this.estat = 'ko'
        },
        async checkin() {
            //if (this.$store.getters.isAdmin) {
                // Si no havia estat validada
                if (!this.entrada.dataValidacio) {
                    let dades = {
                        uuid: this.entrada.uuid,
                        dataValidacio: new Date(),
                    }
                    simpleFetch("assistencies", "PATCH", dades).then((data) => this.entrada = data);
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
