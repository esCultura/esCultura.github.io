<template>
<v-app>
    <v-app-bar>
        <v-app-bar-title>
            Crear i gestionar esdeveniments
        </v-app-bar-title>
    </v-app-bar>

    <div v-if="esdeveniments" style="margin-top: 40px;">

        <v-row class="mt-8 mx- 5">
            <v-text-field v-model="buscar" label="Buscar" class="mt-5 ml-5 mr-14"></v-text-field>
            <!-- dialog de crear esdeveniment -->
            <v-dialog
                    v-model="dialogAdd"
                    persistent
                    max-width="100%"
                    >
                    <template v-slot:activator="{ props }">
                        <v-btn
                            @click="$router.push({name:'qrValidator'})"
                            class="mr-10 mt-7"
                        >Llegir QR</v-btn>
                        <v-btn
                            v-bind="props"
                            class="mr-10 mt-7"
                        >Afegir</v-btn>
                    </template>
                    <v-card>
                        <form @submit.prevent="addEsdeveniment()">
                        <v-card-title class="text-h5">
                            Registrar un nou esdeveniment
                        </v-card-title>
                        <v-card-text>
                            <v-text-field v-model="nom" label="Nom" type="text" required></v-text-field>
                            <v-textarea v-model="descripcio" label="Descripció"></v-textarea>
                            <v-text-field v-model="dataIni" label="Data d'inici" type="date" required></v-text-field>
                            <v-text-field v-model="dataFi" label="Data de final" type="date" required></v-text-field>
                            <v-textarea v-model="horari" label="Horari"></v-textarea>
                            <v-text-field v-model="espai" label="Espai"></v-text-field>
                            <v-text-field v-model="url" label="Enllaç a l'esdeveniment" type="text" pattern="https?://.+"></v-text-field>
                            <v-text-field v-model="latitud" label="Latitud" type="number" step="0.1"></v-text-field>
                            <v-text-field v-model="longitud" label="Longitud" type="number" step="0.1"></v-text-field>

                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red"
                            @click="dialogAdd = false"
                        >
                            Cancel·lar
                        </v-btn>
                        <button class="v-btn v-theme--light text-green"
                            type="submit"
                        >
                            Crear
                        </button>
                        </v-card-actions>
                        </form>
                    </v-card>
            </v-dialog>
        </v-row>

        <RowEditEsde
            v-for="(esdeveniment, i) of esdevenimentsFiltrats" :key="i"
            :esdeveniment=esdeveniment
            @update_esdeveniment="update_esdeveniment"
            @delete_esdeveniment="delete_esdeveniment"
        ></RowEditEsde>
    </div>
</v-app>
</template>

<script>
    import {simpleFetch} from '../utils/utilFunctions';
    import { onMounted, ref } from 'vue';
    import RowEditEsde from './RowEditEsde.vue';

    export default {
        
        name: "CRUDEsdeveniment",
        components: {
            RowEditEsde
        },
        computed: {
            esdevenimentsFiltrats() {
                return this.esdeveniments.filter(esdeveniment => {
                    return esdeveniment.nom.toLowerCase().includes(this.buscar.toLowerCase())
                })
            }
        },
        setup() {
            let esdeveniments = ref();
            let buscar = ref("");
            let dialogAdd = ref(false);

            let nom = ref('');
            let descripcio = ref()
            let dataIni = ref();
            let dataFi = ref();
            let horari = ref();
            let espai = ref();
            let url = ref();
            let latitud = ref();
            let longitud = ref();

            return {
                esdeveniments,
                buscar,
                dialogAdd,

                nom,
                descripcio,
                dataIni,
                dataFi,
                horari,
                espai,
                url,
                latitud,
                longitud,
            }
        },
        methods: {
            update_esdeveniment(nouEsdeveniment) {
                const index = this.esdeveniments.findIndex(e => e.codi === nouEsdeveniment.codi);
                this.esdeveniments.splice(index, 1, nouEsdeveniment);
            },
            delete_esdeveniment(codi_esdeveniment) {
                const index = this.esdeveniments.findIndex(e => e.codi === codi_esdeveniment);
                this.esdeveniments.splice(index, 1);
            },
            async addEsdeveniment() {
                this.dialogAdd = false;
                console.log("sha creat un esdeveniment")
                let data = {
                    'nom': this.nom,
                    'descripcio': this.descripcio,
                    'dataIni': this.dataIni,
                    'dataFi': this.dataFi,
                    'horari': this.horari,
                    'espai': this.espai,
                    'url': this.url,
                    'latitud': this.latitud,
                    'longitud': this.longitud
                }
                await simpleFetch("esdeveniments/", "POST", data).then((data) => this.esdeveniments.unshift(data));
            }
        },
        mounted() {
            simpleFetch("esdeveniments/", "GET", "").then((data) => this.esdeveniments = data);
        }
    }
</script>

<style scoped>

</style>
