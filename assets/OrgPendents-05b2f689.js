import{s as m}from"./utilFunctions-c00a1675.js";import{_ as k,f as P,r as o,o as _,c as x,w as t,a as n,b as d,t as O,e as z,m as R,g as b,F as V,j,k as C}from"./index-63607c6c.js";const D={name:"RowPendent",props:{pendent:Object},emits:["emitReload"],setup(c,e){let s=P(!1);console.log("pendent row: ");async function a(i){s.value=!1,console.log("sha eliminat el org");let r="usuaris/organitzadorspendents/"+i+"/reject/";console.log("user: ",i),await m(r,"POST",{}).then(l=>console.log("post reject",l)),e.emit("emitReload")}async function f(i){console.log("sha donat acces el org");let r="usuaris/organitzadorspendents/"+i+"/accept/";console.log("user: ",i),await m(r,"POST",{}).then(l=>console.log("post accept",l)),e.emit("emitReload")}return{dialogDelete:s,donarAcces:f,deleteOrg:a}}},E={style:{display:"flex","justify-content":"left"},class:"mt-5"};function N(c,e,s,a,f,i){const r=o("v-card-title"),l=o("v-btn"),g=o("v-card-text"),v=o("v-spacer"),w=o("v-card-actions"),u=o("v-card"),y=o("v-dialog"),h=o("v-row");return _(),x(u,{class:"my-5 mx-10"},{default:t(()=>[n(h,{justify:"space-between",style:{height:"75px"}},{default:t(()=>[n(r,null,{default:t(()=>[d("Organitzador pendent: "+O(s.pendent.username),1)]),_:1}),z("div",E,[n(l,{onClick:e[0]||(e[0]=p=>a.donarAcces(s.pendent.user)),color:"#2eca5a",class:"mr-5"},{default:t(()=>[d("Aceptar")]),_:1}),n(y,{modelValue:a.dialogDelete,"onUpdate:modelValue":e[3]||(e[3]=p=>a.dialogDelete=p),persistent:"",width:"auto"},{activator:t(({props:p})=>[n(l,R(p,{color:"red",class:"mr-8"}),{default:t(()=>[d("Eliminar")]),_:2},1040)]),default:t(()=>[n(u,null,{default:t(()=>[n(r,{class:"text-h5"},{default:t(()=>[d(" Segur que vols eliminar "+O(s.pendent.username),1)]),_:1}),n(g,null,{default:t(()=>[d(" si elimines no ho podras recuperar ")]),_:1}),n(w,null,{default:t(()=>[n(v),n(l,{color:"green",onClick:e[1]||(e[1]=p=>a.dialogDelete=!1)},{default:t(()=>[d(" NO ")]),_:1}),n(l,{color:"red",onClick:e[2]||(e[2]=p=>a.deleteOrg(s.pendent.user))},{default:t(()=>[d(" SI ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})]),_:1})}const S=k(D,[["render",N]]),T={name:"OrgPendents",components:{RowPendent:S},setup(){let c=P();function e(){console.log("emit and act"),m("usuaris/organitzadorspendents","GET","").then(s=>c.value=s)}return{actualitzar:e,pendents:c}},mounted(){m("usuaris/organitzadorspendents","GET","").then(c=>this.pendents=c)}},B={key:0,style:{"margin-top":"80px"}};function A(c,e,s,a,f,i){const r=o("v-app-bar-title"),l=o("v-app-bar"),g=o("RowPendent"),v=o("v-app");return _(),x(v,null,{default:t(()=>[n(l,null,{default:t(()=>[n(r,null,{default:t(()=>[d(" Organitzadors pendents ")]),_:1})]),_:1}),a.pendents?(_(),b("div",B,[(_(!0),b(V,null,j(a.pendents,(w,u)=>(_(),x(g,{key:u,pendent:w,onEmitReload:e[0]||(e[0]=y=>a.actualitzar())},null,8,["pendent"]))),128))])):C("",!0)]),_:1})}const G=k(T,[["render",A]]);export{G as default};