<template> 
    <v-card
        class="my-5 mx-10"
    >
        <v-row justify="space-between" style="height: 75px;">
            <v-card-title>CRUD Esdeveniment comp {{ pendent.username }}</v-card-title>
            <div style="display: flex; justify-content: left;" class="mt-5">

                <v-btn @click="donarAcces(pendent.user)" color="#2eca5a" class="mr-5" >Aceptar</v-btn>

                <v-dialog
                    v-model="dialogDelete"
                    persistent
                    width="auto"
                    >
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" color="red" class="mr-8" >Eliminar</v-btn>
                    </template>
                    <v-card>
                        <v-card-title class="text-h5">
                            Segur que vols eliminar {{ pendent.username }}
                        </v-card-title>
                        <v-card-text> 
                            si elimines no ho podras recuperar
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
                            @click="deleteOrg(pendent.user)"
                        >
                            SI
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </v-row>
    </v-card>
  </template>
  
  <script>
    import {simpleFetch} from '../utils/utilFunctions';
    import {ref} from 'vue';
  
    export default {
        
        name: "RowPendent",
        props: {
            pendent: Object,
        },
        setup() {
            let dialogDelete = ref(false);
            console.log("pendent row: ");

            function deleteOrg(user) {
                dialogDelete.value = false;
                console.log("sha eliminat el org");
                let endpoint = "usuaris/organitzadors/pendents/"+user+"/delete/";
                console.log("user: ", user);
                simpleFetch(endpoint, "POST", {}).then(data => console.log(data));
            }
  
            return {
                dialogDelete,
                deleteOrg,
            }
        },
    }
  </script>
  
  <style scoped>
  
  </style>
  