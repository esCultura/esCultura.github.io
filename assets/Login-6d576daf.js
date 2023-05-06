import{_ as y,u as x,e as p,r as l,o as b,f as V,a as s,w as r,b as m,g as h}from"./index-203b30c8.js";import{a as _}from"./utilFunctions-f43fb729.js";const k={name:"Login",setup(){const i=x();let e=p(""),d=p(""),o=p(!1);async function u(){let c="http://deploy-env.eba-6a6b2amf.us-west-2.elasticbeanstalk.com/";if(o.value){let a=await fetch(c+"usuaris/login/admins",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e.value,password:d.value})});console.log("response: ",a);let t=await a.json();console.log("login admin data: ",t),_(t.token),i.push("/Review")}else{let a=await fetch(c+"usuaris/login/organitzadors",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e.value,password:d.value})});console.log("response: ",a);let t;t=await a.json(),console.log("login org data: ",t),_(t.token),i.push("/edit")}}return{username:e,password:d,admin:o,doLogin:u}}},L={class:"background"};function j(i,e,d,o,u,c){const a=l("v-card-title"),t=l("v-text-field"),g=l("v-switch"),v=l("v-btn"),f=l("v-card-text"),w=l("v-card");return b(),V("div",L,[s(w,{height:"600",width:"500",style:{"border-radius":"40px"}},{default:r(()=>[s(a,{class:"text-center mt-3"},{default:r(()=>[m("LoginP")]),_:1}),s(f,null,{default:r(()=>[s(t,{modelValue:o.username,"onUpdate:modelValue":e[0]||(e[0]=n=>o.username=n),label:"Username",required:"",style:{"margin-top":"100px"}},null,8,["modelValue"]),s(t,{onKeydown:e[1]||(e[1]=h(n=>o.doLogin(),["enter"])),modelValue:o.password,"onUpdate:modelValue":e[2]||(e[2]=n=>o.password=n),label:"Password",type:"password",required:"",style:{"margin-top":"30px"}},null,8,["modelValue"]),s(g,{modelValue:o.admin,"onUpdate:modelValue":e[3]||(e[3]=n=>o.admin=n),label:"Admin",color:"success"},null,8,["modelValue"]),s(v,{onClick:e[4]||(e[4]=n=>o.doLogin()),color:"#2eca5a",class:"mx-auto d-block mt-16"},{default:r(()=>[m("Login")]),_:1})]),_:1})]),_:1})])}const N=y(k,[["render",j],["__scopeId","data-v-6c5ca3e9"]]);export{N as default};
