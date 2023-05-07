<template>
    <v-app>        
        <v-app-bar

        >    
            <v-app-bar-title>
                esCulturaaa
            </v-app-bar-title>

            <RouterLink to="/Login">
                <v-btn> Login </v-btn>
            </RouterLink>  

            <RouterLink to="/singUp">
                <v-btn> Registrar organitzacio </v-btn>
            </RouterLink>
        </v-app-bar>

        <div style="margin-top: auto; margin-left: auto; margin-bottom: auto; margin-right: auto;" >Landing page amb explicacio de l'app i perque serveix</div>
    </v-app>
  </template>
  
  
  <script>
    import { RouterLink, RouterView } from 'vue-router'
    import {simpleFetch} from '../utils/utilFunctions';
  
    export default {
        name: "LandingPage",
        setup() {
  
        function doFetch() {
          let endpoint = 'esdeveniments/';
          simpleFetch(endpoint, "GET", "").then((data) => console.log("Data: ", data)) 
        }
  
        return {
          doFetch
        }
      }
    }
  </script>
  
  <style scoped>
  </style>
  