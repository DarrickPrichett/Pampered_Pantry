(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/spinner.ab497855.gif"},73:function(e,t,a){e.exports=a(87)},78:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(60),i=a.n(c),o=(a(78),a(8)),l=a(10),s=a(6),m=a(67),u=a(70),d=a(99),p=a(97),g=a(66),E=a(11);function f(e,t,a){return new Promise((function(n,r){var c,i,o,l=window.indexedDB.open("shop-shop",1);l.onupgradeneeded=function(e){var t=l.result;t.createObjectStore("recipes",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"})},l.onerror=function(e){console.log("There was an error")},l.onsuccess=function(r){switch(c=l.result,i=c.transaction(e,"readwrite"),o=i.objectStore(e),c.onerror=function(e){console.log("error",e)},t){case"put":o.put(a),n(a);break;case"get":var s=o.getAll();s.onsuccess=function(){n(s.result)};break;case"delete":o.delete(a._id);break;default:console.log("No valid method")}i.oncomplete=function(){c.close()}}}))}var b=function(e){var t=e.image,a=e.name,n=e._id,c=e.quantity;return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(l.b,{to:"/recipes/".concat(n)},r.a.createElement("img",{alt:a,src:"/images/".concat(t)}),r.a.createElement("p",null,a)),r.a.createElement("div",null,r.a.createElement("div",null,c," ",function(e,t){return 1===t?e:e+"s"}("item",c)," in stock")))},h=a(68),v=a(52),w=function(e,t){switch(t.type){case"UPDATE_RECIPES":return Object(o.a)(Object(o.a)({},e),{},{recipes:Object(v.a)(t.recipes)});case"UPDATE_CATEGORIES":return Object(o.a)(Object(o.a)({},e),{},{categories:Object(v.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(o.a)(Object(o.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var y,O,j,N,k=["value"],x=Object(n.createContext)(),S=x.Provider,_=function(e){e.value;var t,a=Object(h.a)(e,k),c=(t={recipes:[],categories:[],currentCategory:""},Object(n.useReducer)(w,t)),i=Object(E.a)(c,2),o=i[0],l=i[1];return r.a.createElement(S,Object.assign({value:[o,l]},a))},C=function(){return Object(n.useContext)(x)},P=a(91),T=a(22),R=a(98),A=Object(R.a)(y||(y=Object(T.a)(["\n  query getProducts($category: ID) {\n    recipes(category: $category) {\n      _id\n      name\n      description\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),U=(Object(R.a)(O||(O=Object(T.a)(["\n  {\n    recipes {\n      _id\n      name\n      description\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(R.a)(j||(j=Object(T.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),D=(Object(R.a)(N||(N=Object(T.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        recipes {\n          _id\n          name\n          description\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),a(41)),I=a.n(D);var $=function(){var e=C(),t=Object(E.a)(e,2),a=t[0],c=t[1],i=a.currentCategory,o=Object(P.a)(A),l=o.loading,s=o.data;return Object(n.useEffect)((function(){s?(c({type:"UPDATE_RECIPES",recipes:s.recipes}),s.recipes.forEach((function(e){f("recipes","put",e)}))):l||f("recipes","get").then((function(e){c({type:"UPDATE_RECIPES",recipes:e})}))}),[s,l,c]),r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Our Recipes:"),a.recipes.length?r.a.createElement("div",{className:"flex-row"},(i?a.recipes.filter((function(e){return e.category._id===i})):a.recipes).map((function(e){return r.a.createElement(b,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):r.a.createElement("h3",null,"You haven't added any recipes yet!"),l?r.a.createElement("img",{src:I.a,alt:"loading"}):null)};var F=function(){var e=C(),t=Object(E.a)(e,2),a=t[0],c=t[1],i=a.categories,o=Object(P.a)(U),l=o.loading,s=o.data;return Object(n.useEffect)((function(){s?(c({type:"UPDATE_CATEGORIES",categories:s.categories}),s.categories.forEach((function(e){f("categories","put",e)}))):l||f("categories","get").then((function(e){c({type:"UPDATE_CATEGORIES",categories:e})}))}),[s,l,c]),r.a.createElement("div",null,r.a.createElement("h2",null,"Choose a Category:"),i.map((function(e){return r.a.createElement("button",{key:e._id,onClick:function(){var t;t=e._id,c({type:"UPDATE_CURRENT_CATEGORY",currentCategory:t})}},e.name)})))},W=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(F,null),r.a.createElement($,null))};var q=function(){var e=C(),t=Object(E.a)(e,2),a=t[0],c=t[1],i=Object(s.f)().id,o=Object(n.useState)({}),m=Object(E.a)(o,2),u=m[0],d=m[1],p=Object(P.a)(A),g=p.loading,b=p.data,h=a.recipes;return Object(n.useEffect)((function(){h.length?d(h.find((function(e){return e._id===i}))):b?(c({type:"UPDATE_RECIPES",recipes:b.recipes}),b.recipes.forEach((function(e){f("recipes","put",e)}))):g||f("recipes","get").then((function(e){c({type:"UPDATE_RECIPES",recipes:e})}))}),[h,b,g,c,i]),r.a.createElement(r.a.Fragment,null,u?r.a.createElement("div",{className:"container my-1"},r.a.createElement(l.b,{to:"/"},"\u2190 Back to Recipes"),r.a.createElement("h2",null,u.name),r.a.createElement("p",null,u.description),r.a.createElement("img",{src:"/images/".concat(u.image),alt:u.name})):null,g?r.a.createElement("img",{src:I.a,alt:"loading"}):null)};var L,G,B=function(e){var t=e.children;return r.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},Y=function(){return r.a.createElement("div",null,r.a.createElement(B,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},J=a(28),M=a(30),z=a.n(M),H=a(44),K=a(96),Q=Object(R.a)(L||(L=Object(T.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),V=Object(R.a)(G||(G=Object(T.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),X=a(64),Z=a(65),ee=a(51),te=a.n(ee),ae=new(function(){function e(){Object(X.a)(this,e)}return Object(Z.a)(e,[{key:"getProfile",value:function(){return te()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return te()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}());var ne=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(E.a)(t,2),c=a[0],i=a[1],s=Object(K.a)(Q),m=Object(E.a)(s,2),u=m[0],d=m[1].error,p=function(){var e=Object(H.a)(z.a.mark((function e(t){var a,n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,ae.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.target,a=t.name,n=t.value;i(Object(o.a)(Object(o.a)({},c),{},Object(J.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(l.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:p},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:g})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:g})),d?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var re=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(E.a)(t,2),c=a[0],i=a[1],s=Object(K.a)(V),m=Object(E.a)(s,1)[0],u=function(){var e=Object(H.a)(z.a.mark((function e(t){var a,n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:a=e.sent,n=a.data.addUser.token,ae.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,a=t.name,n=t.value;i(Object(o.a)(Object(o.a)({},c),{},Object(J.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(l.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:u},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var ce=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83e\uddd1\u200d\ud83c\udf73\ud83e\udd58"),"Pampered Pantry")),r.a.createElement("nav",null,ae.loggedIn()?r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(l.b,{to:"/myRecipes"},"My Recipe")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:function(){return ae.logout()}},"Logout"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(l.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(l.b,{to:"/login"},"Login")))))},ie=Object(m.a)({uri:"/graphql"}),oe=Object(g.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(o.a)(Object(o.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),le=new u.a({link:oe.concat(ie),cache:new d.a});var se=function(){return r.a.createElement(p.a,{client:le},r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(_,null,r.a.createElement(ce,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:W}),r.a.createElement(s.a,{exact:!0,path:"/login",component:ne}),r.a.createElement(s.a,{exact:!0,path:"/signup",component:re}),r.a.createElement(s.a,{exact:!0,path:"/recipes/:id",component:q}),r.a.createElement(s.a,{component:Y}))))))},me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");me?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ue(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ue(t,e)}))}}()}},[[73,1,2]]]);
//# sourceMappingURL=main.7e444946.chunk.js.map