import{_ as b,e as n,r as i,o as V,f as E,d as x,g as v,v as w,a as l,w as c,b as y,h as U}from"./index-a014c7ed.js";const S={name:"RegistrarOrg",setup(){let u=n(""),t=n(""),_=n(""),e=n(""),m=n(""),p=n(""),s=n(""),g="http://deploy-env.eba-6a6b2amf.us-west-2.elasticbeanstalk.com/";async function d(){m.value="",p.value="",s.value="";let o=await(await fetch(g+"usuaris/sign_up/organitzadors/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:u.value,username:t.value,password:_.value,password2:e.value})})).json();if(o.email&&!o.message){let r="";for(let a of o.email)r+=a+`
`;p.value=r}if(o.password&&!o.message){let r="";for(let a of o.password)r+=a+`
`;s.value=r}else o.message&&(m.value=o.message)}return{email:u,username:t,password:_,password2:e,msgAlert:m,msgErrorEmail:p,msgErrorPassword:s,doSingUp:d}}},k={class:"background"},P={class:"fomrStyle"};function A(u,t,_,e,m,p){const s=i("v-alert"),g=i("v-card-title"),d=i("v-text-field"),f=i("v-btn"),o=i("v-card-text"),r=i("v-card");return V(),E("div",k,[x("div",null,[v(l(s,{class:"mx-3 my-3",density:"compact",type:"info",title:"Alert",text:e.msgAlert},null,8,["text"]),[[w,e.msgAlert!=""]]),v(l(s,{class:"mx-3 my-3",density:"compact",type:"error",title:"Error password",text:e.msgErrorPassword},null,8,["text"]),[[w,e.msgErrorPassword!=""]]),v(l(s,{class:"mx-3 my-3",density:"compact",type:"error",title:"Error email",text:e.msgErrorEmail},null,8,["text"]),[[w,e.msgErrorEmail!=""]])]),x("div",P,[l(r,{height:"600",width:"500",style:{"border-radius":"40px"}},{default:c(()=>[l(g,{class:"text-center mt-3"},{default:c(()=>[y("Sing Up")]),_:1}),l(o,null,{default:c(()=>[l(d,{modelValue:e.username,"onUpdate:modelValue":t[0]||(t[0]=a=>e.username=a),label:"Username",required:"",style:{"margin-top":"50px"}},null,8,["modelValue"]),l(d,{modelValue:e.email,"onUpdate:modelValue":t[1]||(t[1]=a=>e.email=a),label:"Email",required:"",style:{"margin-top":"20px"}},null,8,["modelValue"]),l(d,{modelValue:e.password,"onUpdate:modelValue":t[2]||(t[2]=a=>e.password=a),label:"Password",type:"password",required:"",style:{"margin-top":"20px"}},null,8,["modelValue"]),l(d,{onKeydown:t[3]||(t[3]=U(a=>e.doSingUp(),["enter"])),modelValue:e.password2,"onUpdate:modelValue":t[4]||(t[4]=a=>e.password2=a),label:"Password2",type:"password",required:"",style:{"margin-top":"20px"}},null,8,["modelValue"]),l(f,{onClick:t[5]||(t[5]=a=>e.doSingUp()),color:"#2eca5a",class:"mx-auto d-block mt-8"},{default:c(()=>[y("Sing Up")]),_:1})]),_:1})]),_:1})])])}const h=b(S,[["render",A],["__scopeId","data-v-54bc8a81"]]);export{h as default};