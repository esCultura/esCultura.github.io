<template>

    <v-app>        
        <v-app-bar>
            <v-app-bar-title>
                Organitzadors pendents
            </v-app-bar-title>
        </v-app-bar>
        <div 
            v-if="pendents"
            style="margin-top: 80px;"
        >
            
            <v-card 
                v-for="org of pendents"
                class="my-5 mx-10"
            >
                <v-row justify="space-between" style="height: 75px;">
                    <v-card-title>CRUD Esdeveniment comp {{ org.username }}</v-card-title>
                    <div style="display: flex; justify-content: left;" class="mt-5">

                        <v-btn @click="donarAcces(org.user)" color="#2eca5a" class="mr-5" >Aceptar</v-btn>

                        <!-- possar v-if per evitar molts dialogs -->
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
                                    Segur que vols eliminar {{ org.username }}
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
                                    @click="deleteOrg(org.user)"
                                >
                                    SI
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>

                        
                    </div>
                </v-row>
            </v-card>

        </div>
    </v-app>

  </template>
  
  <script>
    import {simpleFetch} from '../utils/utilFunctions';
    import {ref} from 'vue';
  
    export default {
        
        name: "OrgPendents",
        
        setup() {
            //let pendents = ref(["org1", "org2", "org3"]);
            let pendents = ref();
            let dialogDelete = ref(false);
            
            function deleteOrg(user) {
                dialogDelete.value = false;
                console.log("sha eliminat el org");
                let endpoint = "usuaris/organitzadors/pendents/"+user+"/delete";
                console.log("user: ", user);
                //simpleFetch(endpoint, "POST", "").then(data => console.log(data));
                //fetch delete eliminar
            }

            function donarAcces(user) {
                console.log("sha donat acces el org");
                let endpoint = "usuaris/organitzadorspendents/"+user+"/accept";
                console.log("user: ", user);
                simpleFetch(endpoint, "POST", {}).then(data => console.log(data));
            }
           
  
            return {
                pendents,
                dialogDelete,
                deleteOrg,
                donarAcces
            }
        },
        mounted() {
            simpleFetch("usuaris/organitzadorspendents", "GET", "").then((data) => this.pendents = data);
        }
    }
  </script>
  
  <style scoped>
  
  </style>
  