<template>

  <div class="background">
    <v-card
      height="600"
      width="500"
      style="border-radius: 40px;"
    >
      <v-card-title class="text-center mt-3">Login</v-card-title>
      <v-card-text>
        <v-text-field v-model="username" label="Username" required style="margin-top: 100px;"></v-text-field>
        <v-text-field @keydown.enter="doLogin()" v-model="password" label="Password" type="password" required style="margin-top: 30px;"></v-text-field>
        <v-switch v-model="admin" label="Admin" color="success"></v-switch>
        <v-btn @click="doLogin()" color="#2eca5a" class="mx-auto d-block mt-16" >Login</v-btn>
      </v-card-text>
    </v-card>
  </div>

</template>

<script>

  import {ref} from 'vue';
  import {setToken} from '../utils/utilFunctions';
  import { useRouter } from 'vue-router';

  export default {
      
      name: "Login",

      setup() {
        const router = useRouter();

        let username = ref('');
        let password = ref('');
        let admin = ref(false);

        async function doLogin() {
          let data;
          let host = 'http://deploy-env.eba-6a6b2amf.us-west-2.elasticbeanstalk.com/';

          if (admin.value) {
            let response = await fetch(host+"usuaris/login/admins",  {   
              method: "POST",
              headers: {
                  'Accept': 'application/json',
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({username: username.value, password: password.value}),
            })
            console.log("response: ", response);
            let dataD = await response.json();
            console.log("login admin data: ", dataD);
            setToken(dataD.token);

            //redirect path --> /Review
            router.push('/Review');
          }
          else {
            let response =  await fetch(host+"usuaris/login/organitzadors",  {   
              method: "POST",
              headers: {
                  'Accept': 'application/json',
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({username: username.value, password: password.value}),
            })
            console.log("response: ", response);
            let dataD;
            dataD = await response.json();
            console.log("login org data: ", dataD);
            setToken(dataD.token);

            //redirect path  --> /edit
            router.push('/edit');
          }

        }


        return {
          username,
          password,
          admin,
          doLogin
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
