import{s as r}from"./utilFunctions-f43fb729.js";import{_ as a,r as c,o as i,f as l,a as d,w as _,d as f,b as p}from"./index-203b30c8.js";const u={name:"OrgPendents",setup(){async function s(){let e;r("issues/","GET","").then(t=>e=t),console.log("issues: ",e)}return{fetchUser:s}}},m=f("div",null," ORG PENDENTS ",-1);function v(s,e,t,n,h,x){const o=c("v-btn");return i(),l("div",null,[d(o,{onClick:e[0]||(e[0]=N=>n.fetchUser())},{default:_(()=>[p("A")]),_:1}),m])}const b=a(u,[["render",v]]);export{b as default};