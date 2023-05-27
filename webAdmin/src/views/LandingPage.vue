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

        <div style="margin-top: auto; margin-left: auto; margin-bottom: auto; margin-right: auto;" >
          Landing page amb explicacio de l'app i perque serveix
          <!-- Section 1 -->
          <section style="margin-top: 50px; margin-right: 10px; margin-left: 10px; margin-bottom: 10px;">
            <div style="display: flex; justify-content: space-between;">
              <img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/08/codigo-qr-2449145.jpg" width="600" height="400">
              <p style="margin-left: 10px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.
At vero eos et accusamus et iusto odio dignissimos ducimus.
Qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.
Et harum quidem rerum facilis est et expedita distinctio.</p>
            </div>
          </section>
          <!-- Section 2 -->
          <section style="margin: 10px;">
            <div style="display: flex; justify-content: space-between;">
              <p style="margin-left: 10px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.
At vero eos et accusamus et iusto odio dignissimos ducimus.
Qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.
Et harum quidem rerum facilis est et expedita distinctio.</p>
              <img src="https://www.nikita-events.com/wp-content/uploads/2016/01/eventos-culturales-deportivos_post-727x409.jpg" alt="Description of the image">
            </div>
          </section>
          <!-- Section 3 -->
          <section style="margin: 10px;">
            <div style="display: flex; justify-content: space-between;">
              <img src="path/to/your/image.jpg" alt="Description of the image">
              <p style="margin-left: 10px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.
At vero eos et accusamus et iusto odio dignissimos ducimus.
Qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.
Et harum quidem rerum facilis est et expedita distinctio.</p>
            </div>
          </section>
        </div>
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
  