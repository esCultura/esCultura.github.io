<template>
    <div class="background">
        <v-card
        height="600"
        width="500"
        style="border-radius: 40px;"
        >
        <v-card-title class="text-center mt-3">Sing Up</v-card-title>
        <v-card-text>
            <v-text-field v-model="username" label="Username" required style="margin-top: 50px;"></v-text-field>
            <v-text-field v-model="email" label="Email" required style="margin-top: 20px;"></v-text-field>
            <v-text-field v-model="password" label="Password" type="password" required style="margin-top: 20px;"></v-text-field>
            <v-text-field @keydown.enter="doSingUp()" v-model="password2" label="Password2" type="password" required style="margin-top: 20px;"></v-text-field>
            <v-btn @click="doSingUp()" color="#2eca5a" class="mx-auto d-block mt-8" >Sing Up</v-btn>
        </v-card-text>
        </v-card>
    </div>

</template>

<script>
  import {ref} from 'vue';

  export default {
      
      name: "RegistrarOrg",
      setup() {

            let email = ref("");
            let username = ref("");
            let password = ref("");
            let password2 = ref("");

            let host = 'http://deploy-env.eba-6a6b2amf.us-west-2.elasticbeanstalk.com/';


            async function doSingUp() {
                console.log("do SingUp");
                let response = await fetch(host+"usuaris/sing_up/organitzadors",  {   
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({email:  email.value, username: username.value, password: password.value, password2: password2}),
                })
                console.log("response: ", response);
                let dataD = await response.json();
                console.log("sing up org data: ", dataD);
            }

          return {
              email,
              username,
              password,
              password2,
              doSingUp
          }
      }
  }
</script>

<style scoped>
    .background {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to left top, #2eca5a, #00FFFF);
    }

</style>
