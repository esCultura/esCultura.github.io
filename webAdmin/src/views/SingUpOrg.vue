<template>
    <div class="background">
        <div>
            <v-alert
                v-show="msgAlert != ''"
                class="mx-3 my-3"
                density="compact"
                type="info"
                title="Alert"
                :text= msgAlert
            ></v-alert>

            <v-alert
                v-show="msgErrorPassword != ''"
                class="mx-3 my-3"
                density="compact"
                type="error"
                title="Error password"
                :text= msgErrorPassword
            ></v-alert>

            <v-alert
                v-show="msgErrorEmail != ''"
                class="mx-3 my-3"
                density="compact"
                type="error"
                title="Error email"
                :text= msgErrorEmail
            ></v-alert>
        </div>

        <div class="fomrStyle" >
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

            let msgAlert = ref('');
            let msgErrorEmail = ref('');
            let msgErrorPassword = ref('');

            let host = 'http://deploy-env.eba-6a6b2amf.us-west-2.elasticbeanstalk.com/';


            async function doSingUp() {
                msgAlert.value = '';
                msgErrorEmail.value = '';
                msgErrorPassword.value = '';


                let response = await fetch(host+"usuaris/sign_up/organitzadors/",  {   
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({email:  email.value, username: username.value, password: password.value, password2: password2.value}),
                })
                let data = await response.json();

                if (data.email && !data.message) {
                    let str = '';
                    for (let string of data.email) {
                        str += string + '\n';
                    }
                    msgErrorEmail.value = str;
                }
                if (data.password && !data.message) {
                    let str = '';
                    for (let string of data.password) {
                        str += string +'\n';
                    }
                    msgErrorPassword.value = str;
                }
                else if (data.message) {
                    msgAlert.value = data.message;
                }
            }

          return {
              email,
              username,
              password,
              password2,
              msgAlert,
              msgErrorEmail,
              msgErrorPassword,
              doSingUp
          }
      }
  }
</script>

<style scoped>
    .background {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: linear-gradient(to left top, #2eca5a, #00FFFF);
    }

    .fomrStyle {
        display: flex; 
        justify-content: center; 
        margin-top: auto; 
        margin-bottom: auto;
    }

</style>
