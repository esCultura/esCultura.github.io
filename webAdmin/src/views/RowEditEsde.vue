<template>
    <v-card class="my-5 mx-10">
        <v-row justify="space-between" style="height: 75px;">
            <v-card-title>{{ esdeveniment.nom }}</v-card-title>
            <div style="display: flex; justify-content: left;" class="mt-5">

                <!-- En el botó d'editar -->
                <v-dialog
                    v-model="dialogEdit"
                    persistent
                    max-width="100%"
                    >
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" color="#2eca5a" class="mr-5" >Modificar</v-btn>
                    </template>
                    <v-card>
                        <v-card-title class="text-h5">
                            Edició de {{ esdeveniment.nom }}
                        </v-card-title>
                        <v-card-text>
                            <v-text-field v-model="nom" label="Nom" required></v-text-field>
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
                            @click="dialogEdit = false"
                        >
                            Cancel·lar
                        </v-btn>
                        <v-btn
                            color="green"
                            @click="saveEdit()"
                        >
                            Actualitzar
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>


                <v-dialog
                    v-model="dialogDelete"
                    persistent
                    width="auto"
                    >
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" color="red" class="mr-8" >Esborrar</v-btn>
                    </template>
                    <v-card>
                        <v-card-title class="text-h5">
                            Segur que vols aquest esdeveniment?
                        </v-card-title>
                        <v-card-text> 
                            Si elimines l'esdeveniment no el podràs recuperar, i deixarà d'estar disponible per a la ciutadania.
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="green"
                            @click="dialogDelete = false"
                        >
                            NO
                        </v-btn>
                        <v-btn
                            color="red"
                            @click="deleteEsdeveniment()"
                        >
                            SÍ
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

                
            </div>
        </v-row>
    </v-card>

</template>

<script>
    import {ref} from 'vue';
    import {simpleFetch} from "@/utils/utilFunctions";

    export default {
        
        name: "RowEditEsde",
        props: {
            esdeveniment: Object,
        },
        methods: {
            async saveEdit() {
                this.dialogEdit = false;
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
                let response = await simpleFetch("esdeveniments/" + this.esdeveniment.codi + "/", "PUT", data);
                await this.$emit('update_esdeveniment', response)
            },
            async deleteEsdeveniment() {
                this.dialogDelete = false;
                let codi = this.esdeveniment.codi;
                await simpleFetch("esdeveniments/" + codi + "/", "DELETE", "");
                await this.$emit('delete_esdeveniment', codi)
            }
        },
        emits: ['update_esdeveniment', 'delete_esdeveniment'],
        setup(props) {

            let dialogEdit = ref(false);
            let dialogDelete = ref(false);

            let nom = ref(props.esdeveniment.nom);
            let descripcio = ref(props.esdeveniment.descripcio)
            let dataIni = ref(new Date(props.esdeveniment.dataIni).toISOString().slice(0, 10))
            let dataFi = ref(new Date(props.esdeveniment.dataFi).toISOString().slice(0, 10))
            let horari = ref(props.esdeveniment.horari)
            let espai = ref(props.esdeveniment.espai)
            let url = ref(props.esdeveniment.url)
            let latitud = ref(props.esdeveniment.latitud)
            let longitud = ref(props.esdeveniment.longitud)

            return {
                dialogEdit,
                dialogDelete,

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
        }
    }
</script>

<style scoped>

</style>
