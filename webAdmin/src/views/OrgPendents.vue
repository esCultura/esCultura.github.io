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
         
            return {
                pendents
            }
        },
        mounted() {
            simpleFetch("usuaris/organitzadorspendents", "GET", "").then((data) => this.pendents = data);
        }
    }
  </script>
  
  <style scoped>
  
  </style>
  