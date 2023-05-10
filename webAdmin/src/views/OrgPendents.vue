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
            <RowPendent 
                v-for="org of pendents" 
                :pendent=org 
            />

        </div>
    </v-app>

  </template>
  
  <script>
    import {simpleFetch} from '../utils/utilFunctions';
    import RowPendent from './RowPendent.vue';
    import {ref} from 'vue';
  
    export default {
        
        name: "OrgPendents",
        components: {
            RowPendent
        },
        setup() {
            let pendents = ref();
         
            function donarAcces(user) {
                console.log("sha donat acces el org");
                let endpoint = "usuaris/organitzadorspendents/"+user+"/accept";
                console.log("user: ", user);
                simpleFetch(endpoint, "POST", {}).then(data => console.log(data));
            }
           
            return {
                pendents,
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
  