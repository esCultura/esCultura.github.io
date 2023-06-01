<template>
    <v-app>        
        <v-app-bar

        >    
            <v-app-bar-title>
                ésCultura
            </v-app-bar-title>

            <RouterLink to="/Login">
                <v-btn> Login </v-btn>
            </RouterLink>  

            <RouterLink to="/singUp">
                <v-btn> Registrar organització </v-btn>
            </RouterLink>
        </v-app-bar>

        <div style="margin-top: auto; margin-left: auto; margin-bottom: auto; margin-right: auto;" >
          <!-- Section 1 -->
          <section style="margin-top: 50px; margin-right: 10px; margin-left: 10px; margin-bottom: 10px;">
            <div style="display: flex; justify-content: space-between;">
              <img src="https://www.nikita-events.com/wp-content/uploads/2016/01/eventos-culturales-deportivos_post-727x409.jpg" width="400">
                <div>
                    <h4>Vols descobrir els esdeveniments més destacats de Catalunya?</h4>
                    <h4>Vols planificar trobades en esdeveniments amb els teus coneguts?</h4>
                    <h4>Vols guanyar trofeus i recompenses per assistir a esdeveniments del país?</h4>
                    <h4>Uneix-te a ésCultura!</h4>
                    <p>
                        Pots descarregar-te la nostra aplicació mòbil, registrar-te i... ja ho tens! Podràs començar a
                        buscar què es fa a prop teu, quines activitats es fan al teu poble, què organitza el teu ajuntament, la Generalitat o qualsevol
                        altra entitat. Així de senzill!
                        A més, podràs parlar amb els teus amics i amigues, planificar sortides junts i, a més, tot això et donarà
                        trofeus a l'aplicació.
                    </p>
                    <h4>Entra-hi, t'hi esperem!</h4>
                </div>
            </div>
          </section>
            <br><br>
          <!-- Section 2 -->
          <section style="margin: 10px;">
            <div style="display: flex; justify-content: space-between;">
              <div>
                  <h4>Ets el representant d'un ajuntament, una associació o una agrupació?</h4>
                  <h4>Vols registrar esdeveniments?</h4>
                  <p>
                      Aquesta pàgina web és la que estaves buscant! Registra't com a organitzador: dona'ns les teves dades i
                      ens posarem en contacte amb tu! De seguida un administrador t'acceptarà la petició i podràs començar
                      a afegir esdeveniments per la ciutadania. Així segur que seran tot un èxit!
                  </p>
                  <br>
                  <h4>A més, t'ajudem el dia de l'esdeveniment!</h4>
                  <p>
                      Podràs controlar qui assisteix als teus esdeveniments! Els usuaris podran aconseguir una entrada pel
                      teu esdeveniment. Aquesta entrada tindrà un codi QR que tu podràs fer servir, el dia de l'esdeveniment,
                      per validar-ne l'assistència!
                  </p>
              </div>
              <img width="500" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/08/codigo-qr-2449145.jpg" alt="Description of the image">
            </div>
          </section>
          <!-- Section 3 -->
          <section style="margin: 10px;">
            <div style="display: flex; justify-content: space-between;">
              <!-- <img src="path/to/your/image.jpg" alt="Description of the image"> -->
              <p>
                  Per a més informació, podeu contacta amb nosaltres a la <a href="mailto:esculturanoreply@gmail.com">nostra bústia de correu electrònic.</a>
              </p>
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
    p,h4 {
        margin:10px
    }
  </style>
  