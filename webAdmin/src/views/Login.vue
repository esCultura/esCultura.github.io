<template>

  <div class="background">
    <div>
      <v-alert
        v-show="msgErrorLogin != ''"
        class="mx-3 my-3"
        density="compact"
        type="error"
        title="Error login"
        :text= msgErrorLogin
      ></v-alert>
    </div>
    <div class="fomrStyle">
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

        let msgErrorLogin = ref('');

        function setCookie(cname, cvalue, exdays) {
          const d = new Date();
          d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
          let expires = "expires="+d.toUTCString();
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        async function doLogin() {
          let data;
          let host = 'http://127.0.0.1:8000/';

          if (admin.value) {
            msgErrorLogin.value = '';

            let response = await fetch(host+"usuaris/login/admins/",  {   
              method: "POST",
              headers: {
                  'Accept': 'application/json',
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({username: username.value, password: password.value}),
            })
            let data = await response.json();
            console.log("data: ", data);
            if (data.non_field_errors) {
              let str = '';
              for (let string of data.non_field_errors) {
                str += string + '\n';
              }
              msgErrorLogin.value = str;
            }
            else if (data.token) {
              setCookie("Token", data.token, 1);
              setToken(data.token);
              //redirect path --> /Review
              router.push('/Review');
            }
          }
          else {
            msgErrorLogin.value = '';

            let response =  await fetch(host+"usuaris/login/organitzadors/",  {   
              method: "POST",
              headers: {
                  'Accept': 'application/json',
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({username: username.value, password: password.value}),
            })
            console.log("response: ", response);
            
            let data = await response.json();
            console.log("login org data: ", data);
            if (data.non_field_errors) {
              let str = '';
              for (let string of data.non_field_errors) {
                str += string + '\n';
              }
              msgErrorLogin.value = str;
            }
            else if (data.token) {
              setCookie("Token", data.token, 1);
              //document.cookie = `${data.token}; max-age=${60000 * 30};`;
              setToken(data.token);
              //redirect path  --> /edit
              router.push('/edit');
            }
          }

        }

        return {
          username,
          password,
          admin,
          msgErrorLogin,
          doLogin
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
