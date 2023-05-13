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
                v-for="(org, i) in pendents" 
                :key="i"
                :pendent=org
                @emitReload="actualitzar()"
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

            function actualitzar() {
                console.log("emit and act");
                simpleFetch("usuaris/organitzadorspendents", "GET", "").then((data) => pendents.value = data);
            }
         
            return {
                actualitzar,
                pendents,
            }
        },
        mounted() {
            simpleFetch("usuaris/organitzadorspendents", "GET", "").then((data) => this.pendents = data);
        }
    }
  </script>
  
  <style scoped>
  
  </style>
  