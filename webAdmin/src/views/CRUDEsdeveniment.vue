<template>

    <div v-if="esdeveniments">

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
                            v-bind="props"
                            class="mr-10 mt-7"
                        >ADD</v-btn>
                    </template>
                    <v-card>
                        <v-card-title class="text-h5">
                            Registrar un nou esdeveniment
                        </v-card-title>
                        <v-card-text> 
                            Text inputs necesaris per crear
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red"
                            @click="dialogAdd = false"
                        >
                            Cancel·lar
                        </v-btn>
                        <v-btn
                            color="green"
                            @click="addEsde()" 
                        >
                            Crear
                        </v-btn>
                        </v-card-actions>
                    </v-card>
            </v-dialog>
        </v-row>

        <RowEditEsde
            v-for="esdeveniment of esdeveniments"
            :esdeveniment=esdeveniment
        ></RowEditEsde>
    </div>

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
        setup() {
            let esdeveniments = ref();
            let buscar = ref("");
            let dialogAdd = ref(false);


            function addEsde() {
                dialogAdd.value = false;
                console.log("sha creat un esdeveniment")
                //simpleFetch("esdeveniments/?limit=1", "GET", "").then((data) => this.esdeveniments = data);
            }

            return {
                esdeveniments,
                buscar,
                dialogAdd,
                addEsde
            }
        },
        mounted() {
            simpleFetch("esdeveniments/", "GET", "").then((data) => this.esdeveniments = data);
        }
    }
</script>

<style scoped>

</style>
