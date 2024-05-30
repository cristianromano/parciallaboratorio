import{a as M,b as p,c as P,d as O,e as S,f as g,g as E,i as D,j as N,o as R}from"./chunk-BYBGR5XA.js";import{a as j}from"./chunk-YUODEZBQ.js";import{b as y,d as F,f as k}from"./chunk-DUCZA3NO.js";import{E as u,F as v,Ha as _,K as c,La as x,M as i,N as o,O as d,Q as s,T as n,X as w,d as V,ga as C,p as m,s as h}from"./chunk-Z23AUV36.js";var f=V(j());var B=(()=>{let r=class r{constructor(e){this.router=e,this.firestore=m(y),this.subscriptions=[],this.auth=m(_),this.userFormulario=new S({email:new g("",p.required),password:new g("",p.required)})}ngOnInit(){}login(){x(this.auth,this.userFormulario.get("email")?.value??"",this.userFormulario.get("password")?.value??"").then(e=>{let t=e.user;this.router.navigate(["/home"]),f.default.fire({toast:!0,icon:"success",title:`Bienvenido ${t?.email}`,position:"top-end"})}).catch(e=>{let t=this.firebaseErrors(e.code);f.default.fire({icon:"error",title:t})})}registro(){this.router.navigate(["/registro"])}getData(){let e=F(k(this.firestore,"users")).subscribe(t=>{console.log(t)});this.subscriptions.push(e)}firebaseErrors(e){switch(e){case"auth/email-already-in-use":return"Direcci\xF3n de correo electr\xF3nico en uso.";case"auth/weak-password":return"contrase\xF1a debil ingrese una mas segura.";case"auth/user-not-found":return"Usuario no encontrado.";case"auth/invalid-credential":return"Credenciales invalidas.";default:return"Ocurri\xF3 un error. Por favor, int\xE9ntelo nuevamente m\xE1s tarde."}}loginRapidoUno(){this.userFormulario.setValue({email:"cristianromano2@gmail.com",password:"asdasd123"})}loginRapidoDos(){this.userFormulario.setValue({email:"chatgpt@gmail.com",password:"asdasd123"})}loginRapidoTres(){this.userFormulario.setValue({email:"anonimo@anonimo.com",password:"444444"})}};r.\u0275fac=function(t){return new(t||r)(v(C))},r.\u0275cmp=h({type:r,selectors:[["app-login"]],standalone:!0,features:[w],decls:20,vars:2,consts:[[1,"full-background"],[1,"position-relative","position-absolute","top-50","start-50","translate-middle",3,"ngSubmit","formGroup"],[1,"mb-3"],["for","exampleInputEmail1",1,"form-label"],["type","email","id","email","aria-describedby","emailHelp","formControlName","email",1,"form-control"],["id","emailHelp",1,"form-text"],["for","exampleInputPassword1",1,"form-label"],["type","password","id","password","formControlName","password",1,"form-control"],[1,"d-flex","justify-content-evenly","p-5"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"d-flex","justify-content-center"],["type","button",1,"btn","btn","btn-warning","me-3",3,"click"],["type","button",1,"btn","btn","btn-warning",3,"click"]],template:function(t,a){t&1&&(i(0,"div",0)(1,"form",1),s("ngSubmit",function(){return a.login()}),i(2,"div",2)(3,"label",3),n(4,"Email"),o(),d(5,"input",4),i(6,"div",5),n(7," Nunca compartiremos tu correo electr\xF3nico con nadie m\xE1s. "),o()(),i(8,"div",2)(9,"label",6),n(10,"Contrase\xF1a"),o(),d(11,"input",7),o(),i(12,"div",8)(13,"button",9),n(14," Login "),o()(),i(15,"div",10)(16,"button",11),s("click",function(){return a.loginRapidoUno()}),n(17," Admin "),o(),i(18,"button",12),s("click",function(){return a.loginRapidoDos()}),n(19," User "),o()()()()),t&2&&(u(),c("formGroup",a.userFormulario),u(12),c("disabled",!a.userFormulario.valid))},dependencies:[R,E,M,P,O,D,N],styles:["[_nghost-%COMP%]{background-color:#000}.position-relative[_ngcontent-%COMP%]{width:600px;height:400px;background-image:url(/assets/mario.jpg);background-color:#fff;padding:20px;border-radius:10px;box-shadow:0 0 10px #0000001a}.full-background[_ngcontent-%COMP%]{width:100vw;height:100vh}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}[_nghost-%COMP%]{display:block;background-image:url(/assets/helados.png)}@media (max-width: 768px){.full-background[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:90%;margin:0 auto}.position-relative[_ngcontent-%COMP%]{position:static}.d-flex[_ngcontent-%COMP%]{flex-direction:column}.btn[_ngcontent-%COMP%]{margin-bottom:10px;width:100%}}@media (max-width: 480px){.full-background[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:95%}}"]});let l=r;return l})();export{B as LoginComponent};