(function(e){function t(t){for(var c,r,i=t[0],s=t[1],u=t[2],d=0,l=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(c=!1)}c&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},r={app:0},a={app:0},o=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-051acc8e":"f06017d2","chunk-05402370":"0515aa38","chunk-2980528d":"66f71bbb","chunk-2dd9bd07":"bb23f7e4","chunk-5d7a0b22":"a8014e8d","chunk-75d63804":"4b4148ce"}[e]+".js"}function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-051acc8e":1,"chunk-05402370":1,"chunk-2980528d":1,"chunk-2dd9bd07":1,"chunk-5d7a0b22":1,"chunk-75d63804":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-051acc8e":"fec2c097","chunk-05402370":"8cd5515c","chunk-2980528d":"62938bfc","chunk-2dd9bd07":"1993d4c1","chunk-5d7a0b22":"3d078534","chunk-75d63804":"2cdeb5df"}[e]+".css",a=s.p+c,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===c||d===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===c||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var c=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)t.push(c[2]);else{var o=new Promise((function(t,n){c=a[e]=[t,n]}));t.push(c[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",l.name="ChunkLoadError",l.type=c,l.request=r,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c12":function(e,t,n){},"10c7":function(e,t,n){},"2dcf":function(e,t,n){},"3e07":function(e,t,n){"use strict";n("10c7")},4771:function(e,t,n){"use strict";n("c927")},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var c,r=n("7a23"),a=n("5502"),o=(n("a4d3"),n("e01a"),n("99af"),n("5530")),i=(n("96cf"),n("1da1")),s={registerCoach:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var c,r,a,i,s,u,d,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=e.rootGetters.userId,r={firstName:t.coachData.firstName,lastName:t.coachData.lastName,description:t.coachData.description,hourlyRate:t.coachData.rate,areas:t.coachData.areas},a=e.rootGetters.token,i="https://vue-coaches-271ed.firebaseio.com/coaches/".concat(c,".json?auth=").concat(a),s={method:"PUT",body:JSON.stringify(r)},n.next=7,fetch(i,s);case 7:return u=n.sent,n.next=10,u.json();case 10:if(d=n.sent,u.ok){n.next=14;break}throw l=new Error(d.message||"Failed to fetch coaches"),l;case 14:e.commit("registerCoach",Object(o["a"])({id:c},r));case 15:case"end":return n.stop()}}),n)})))()},loadCoaches:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var c,r,a,o,i,s,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.forceRefresh||e.getters.shouldUpdate){n.next=2;break}return n.abrupt("return");case 2:return c="https://vue-coaches-271ed.firebaseio.com/coaches.json",n.next=5,fetch(c);case 5:return r=n.sent,n.next=8,r.json();case 8:if(a=n.sent,r.ok){n.next=12;break}throw o=new Error(a.message||"Failed to fetch!"),o;case 12:for(s in i=[],a)u={id:s,firstName:a[s].firstName,lastName:a[s].lastName,description:a[s].description,hourlyRate:a[s].hourlyRate,areas:a[s].areas},i.push(u);e.commit("setFetchTimeStamp"),e.commit("setCoaches",i);case 16:case"end":return n.stop()}}),n)})))()}},u={registerCoach:function(e,t){e.coaches.push(t)},setCoaches:function(e,t){e.coaches=t},setFetchTimeStamp:function(e){e.lastFetch=(new Date).getTime()}},d=(n("45fc"),{getCoaches:function(e){return e.coaches},hasCoaches:function(e){return e.coaches&&e.coaches.length>0},isCoach:function(e,t,n){var c=t.getCoaches,r=n.userId,a=c.some((function(e){return e.id===r}));return a},shouldUpdate:function(e){var t=e.lastFetch;if(!t)return!0;var n=(new Date).getTime();return(n-t)/1e3>60}}),l={namespaced:!0,state:function(){return{lastFetch:null,coaches:[]}},mutations:u,getters:d,actions:s},f=(n("b0c0"),{registerRequest:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var c,r,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c={message:t.message,email:t.email},n.next=3,fetch("https://vue-coaches-271ed.firebaseio.com/requests/".concat(t.coachId,".json"),{method:"POST",body:JSON.stringify(c)});case 3:return r=n.sent,n.next=6,r.json();case 6:if(a=n.sent,r.ok){n.next=10;break}throw i=new Error(a.message||"Failed to send request."),i;case 10:c=Object(o["a"])({id:a.name,coachId:t.coachId},c),e.commit("registerRequest",c);case 12:case"end":return n.stop()}}),n)})))()},fetchRequests:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,c,r,a,o,i,s,u,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.rootGetters.userId,c=e.rootGetters.token,r="https://vue-coaches-271ed.firebaseio.com/requests/".concat(n,".json?auth=").concat(c),t.next=5,fetch(r);case 5:return a=t.sent,t.next=8,a.json();case 8:if(o=t.sent,a.ok){t.next=12;break}throw i=new Error(o.message||"Failed to fetch requests"),i;case 12:for(u in s=[],o)d={id:u,coachId:n,message:o[u].message,email:o[u].email},s.push(d);e.commit("setRequests",s);case 15:case"end":return t.stop()}}),t)})))()}}),h={registerRequest:function(e,t){e.requests.push(t)},setRequests:function(e,t){e.requests=t}},b=(n("4de4"),{requests:function(e,t,n){var c=n.auth.userId,r=e.requests.filter((function(e){return e.coachId===c}));return r},hasRequests:function(e,t){var n=t["requests"];return n&&n.length>0}}),j={namespaced:!0,state:function(){return{requests:[]}},mutations:h,getters:b,actions:f},p={login:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",e.dispatch("auth",Object(o["a"])({mode:"login"},t)));case 1:case"end":return n.stop()}}),n)})))()},signup:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",e.dispatch("auth",Object(o["a"])({mode:"signup"},t)));case 1:case"end":return n.stop()}}),n)})))()},logout:function(e){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("tokenExpiration"),clearTimeout(c),e.commit("setUser",{token:null,userId:null,tokenExpiration:null})},auth:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,s,u,d,l,f,h;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.mode,a="AIzaSyAi8n5WmPYOFImCVZzh88B5DZdUdl85EgI",o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(a),"signup"===r&&(o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(a)),i={method:"POST",body:JSON.stringify({email:t.email,password:t.password,returnSecureToken:!0})},n.next=7,fetch(o,i);case 7:return s=n.sent,n.next=10,s.json();case 10:if(u=n.sent,s.ok){n.next=14;break}throw d=new Error(u.message||"Failed to authenticate.check you login data."),d;case 14:l=1e3*+u.expiresIn,f=(new Date).getTime()+l,h={token:u.idToken,userId:u.localId,tokenExpiration:f},localStorage.setItem("token",u.idToken),localStorage.setItem("userId",u.localId),localStorage.setItem("tokenExpiration",f),c=setTimeout((function(){e.dispatch("autoLogout")}),l),e.commit("setUser",h);case 22:case"end":return n.stop()}}),n)})))()},tryLogin:function(e){var t=localStorage.getItem("token"),n=localStorage.getItem("userId"),r=localStorage.getItem("tokenExpiration"),a=+r-(new Date).getTime();a<0||(c=setTimeout((function(){e.dispatch("autoLogout")}),a),t&&n&&e.commit("setUser",{token:t,userId:n,tokenExpiration:r}))},autoLogout:function(e){e.dispatch("logout"),e.commit("setAutoLogout")}},O={setUser:function(e,t){e.token=t.token,e.userId=t.userId,e.tokenExpiration=t.tokenExpiration},setAutoLogout:function(e){e.didAutoLogout=!0}},m={userId:function(e){return e.userId},token:function(e){return e.token},isAuthenticated:function(e){return!!e.token},didAutoLogout:function(e){return e.didAutoLogout}},g={state:function(){return{userId:null,token:null,tokenExpiration:null,didAutoLogout:!1}},mutations:O,getters:m,actions:p},v=Object(a["a"])({modules:{coaches:l,requests:j,auth:g}}),k=v,y=n("6c02"),w=Object(r["L"])("data-v-ad8890a4");Object(r["v"])("data-v-ad8890a4");var I={class:"controls"},C=Object(r["h"])("Refresh"),x=Object(r["h"])("Login to register as a coach"),L=Object(r["h"])("Register as Coach"),_={key:0},A={key:0},R={key:1};Object(r["t"])();var q=w((function(e,t,n,c,a,o){var i=Object(r["A"])("base-dialog"),s=Object(r["A"])("coach-filter"),u=Object(r["A"])("base-button"),d=Object(r["A"])("base-spinner"),l=Object(r["A"])("coach-item"),f=Object(r["A"])("base-card");return Object(r["s"])(),Object(r["f"])("div",null,[Object(r["i"])(i,{show:!!a.error,title:"An error Ocurred",onClose:o.closeErrorModal},{default:w((function(){return[Object(r["i"])("p",null,Object(r["D"])(a.error),1)]})),_:1},8,["show","onClose"]),Object(r["i"])("section",null,[Object(r["i"])(s,{onChangeFilter:o.setFilters},null,8,["onChangeFilter"])]),Object(r["i"])("section",null,[Object(r["i"])(f,null,{default:w((function(){return[Object(r["i"])("div",I,[Object(r["i"])(u,{mode:"outline",onClick:t[1]||(t[1]=function(e){return o.loadCoaches(!0)})},{default:w((function(){return[C]})),_:1}),o.isLoggedIn?Object(r["g"])("",!0):(Object(r["s"])(),Object(r["f"])(u,{key:0,link:"",to:"/auth?redirect=register"},{default:w((function(){return[x]})),_:1})),o.showRegisterBtn?(Object(r["s"])(),Object(r["f"])(u,{key:1,link:!0,to:"/register",mode:"flat"},{default:w((function(){return[L]})),_:1})):Object(r["g"])("",!0)]),a.isLoading?(Object(r["s"])(),Object(r["f"])("div",_,[Object(r["i"])(d)])):Object(r["g"])("",!0),Object(r["i"])("div",null,[o.hasCoaches?(Object(r["s"])(),Object(r["f"])("ul",A,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(o.filteredCoaches,(function(e){return Object(r["s"])(),Object(r["f"])(l,{key:e.id,id:e.id,firstName:e.firstName,lastName:e.lastName,rate:e.hourlyRate,areas:e.areas},null,8,["id","firstName","lastName","rate","areas"])})),128))])):(Object(r["s"])(),Object(r["f"])("h3",R,"No Coaches were found"))])]})),_:1})])])})),F=(n("caad"),n("2532"),Object(r["L"])("data-v-bfaacfe4"));Object(r["v"])("data-v-bfaacfe4");var S={class:"coach-item"},N={class:"coach-item-div"},E={class:"actions coach-item-div"},T=Object(r["h"])("Contact"),D=Object(r["h"])("View Details");Object(r["t"])();var $=F((function(e,t,n,c,a,o){var i=Object(r["A"])("base-badge"),s=Object(r["A"])("base-button");return Object(r["s"])(),Object(r["f"])("li",S,[Object(r["i"])("h3",null,Object(r["D"])(o.fullname),1),Object(r["i"])("h4",null,"$"+Object(r["D"])(n.rate)+"/hour",1),Object(r["i"])("div",N,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(n.areas,(function(e){return Object(r["s"])(),Object(r["f"])(i,{key:e,type:e,title:e},null,8,["type","title"])})),128))]),Object(r["i"])("div",E,[Object(r["i"])(s,{link:!0,to:o.coachContactLink,mode:"outline"},{default:F((function(){return[T]})),_:1},8,["to"]),Object(r["i"])(s,{link:!0,to:o.coachViewDetails,mode:"flat"},{default:F((function(){return[D]})),_:1},8,["to"])])])})),P={props:["id","firstName","lastName","rate","areas"],computed:{fullname:function(){return"".concat(this.firstName,", ").concat(this.lastName)},coachContactLink:function(){return"".concat(this.$route.path,"/").concat(this.id,"/contact")},coachViewDetails:function(){return"".concat(this.$route.path,"/").concat(this.id)}}};n("61f5");P.render=$,P.__scopeId="data-v-bfaacfe4";var U=P,B=Object(r["L"])("data-v-14195782");Object(r["v"])("data-v-14195782");var M=Object(r["i"])("h2",null,"Find your Coach:",-1),z={class:"filter-option"},J={class:"form-control"},G=Object(r["i"])("label",{for:"frontend"},"Frontend",-1),V={class:"form-control"},H=Object(r["i"])("label",{for:"backend"},"Backend",-1),W={class:"form-control"},Z=Object(r["i"])("label",{for:"career"},"Career",-1);Object(r["t"])();var K=B((function(e,t,n,c,a,o){var i=Object(r["A"])("base-card");return Object(r["s"])(),Object(r["f"])(i,null,{default:B((function(){return[M,Object(r["i"])("span",z,[Object(r["i"])("div",J,[Object(r["i"])("input",{type:"checkbox",id:"frontend",checked:"",onChange:t[1]||(t[1]=function(){return o.setFilter.apply(o,arguments)})},null,32),G]),Object(r["i"])("div",V,[Object(r["i"])("input",{type:"checkbox",id:"backend",checked:"",onChange:t[2]||(t[2]=function(){return o.setFilter.apply(o,arguments)})},null,32),H]),Object(r["i"])("div",W,[Object(r["i"])("input",{type:"checkbox",id:"career",checked:"",onChange:t[3]||(t[3]=function(){return o.setFilter.apply(o,arguments)})},null,32),Z])])]})),_:1})})),Y=n("ade3"),Q={emits:["change-filter"],data:function(){return{filters:{frontend:!0,backend:!0,career:!0}}},methods:{setFilter:function(e){var t=e.target.id,n=e.target.checked,c=Object(o["a"])(Object(o["a"])({},this.filters),{},Object(Y["a"])({},t,n));this.filters=c,this.$emit("change-filter",c)}}};n("b18e");Q.render=K,Q.__scopeId="data-v-14195782";var X=Q,ee={components:{CoachItem:U,CoachFilter:X},data:function(){return{isLoading:!1,error:"",activeFilters:{frontend:!0,backend:!0,career:!0}}},computed:{filteredCoaches:function(){var e=this,t=this.$store.getters["coaches/getCoaches"];return t.filter((function(t){return!(!e.activeFilters.frontend||!t.areas.includes("frontend"))||(!(!e.activeFilters.backend||!t.areas.includes("backend"))||!(!e.activeFilters.career||!t.areas.includes("career")))}))},hasCoaches:function(){return!this.isLoading&&this.$store.getters["coaches/hasCoaches"]},isCoach:function(){return this.$store.getters["coaches/isCoach"]},isLoggedIn:function(){return this.$store.getters.isAuthenticated},showRegisterBtn:function(){return this.isLoggedIn&&!this.isLoading&&!this.isCoach}},methods:{setFilters:function(e){this.activeFilters=e},loadCoaches:function(){var e=arguments,t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=e.length>0&&void 0!==e[0]&&e[0],t.isLoading=!0,n.prev=2,n.next=5,t.$store.dispatch("coaches/loadCoaches",{forceRefresh:c}).then((function(){t.isLoading=!1}));case 5:n.next=12;break;case 7:n.prev=7,n.t0=n["catch"](2),t.isLoading=!1,t.error=n.t0.message||"Something went wrong!",console.log("error",t.error);case 12:case"end":return n.stop()}}),n,null,[[2,7]])})))()},closeErrorModal:function(){this.error=null}},created:function(){this.loadCoaches()}};n("8090");ee.render=q,ee.__scopeId="data-v-ad8890a4";var te=ee,ne=Object(r["L"])("data-v-09370440");Object(r["v"])("data-v-09370440");var ce=Object(r["i"])("h2",null,"Page Not Found",-1),re=Object(r["h"])(" This page could not be found - maybe check out all our "),ae=Object(r["h"])("coaches");Object(r["t"])();var oe=ne((function(e,t,n,c,a,o){var i=Object(r["A"])("router-link"),s=Object(r["A"])("base-card");return Object(r["s"])(),Object(r["f"])("div",null,[Object(r["i"])("section",null,[Object(r["i"])(s,null,{default:ne((function(){return[ce,Object(r["i"])("p",null,[re,Object(r["i"])(i,{to:"/"},{default:ne((function(){return[ae]})),_:1})])]})),_:1})])])})),ie={data:function(){return{}},methods:{}};n("8a9f");ie.render=oe,ie.__scopeId="data-v-09370440";var se=ie,ue=Object(r["j"])((function(){return n.e("chunk-05402370").then(n.bind(null,"591c"))})),de=Object(r["j"])((function(){return n.e("chunk-051acc8e").then(n.bind(null,"7956"))})),le=Object(r["j"])((function(){return n.e("chunk-75d63804").then(n.bind(null,"a980"))})),fe=Object(r["j"])((function(){return n.e("chunk-2dd9bd07").then(n.bind(null,"416f"))})),he=Object(r["j"])((function(){return n.e("chunk-5d7a0b22").then(n.bind(null,"212c"))})),be=Object(y["a"])({history:Object(y["b"])(),routes:[{path:"/",redirect:"/coaches"},{path:"/coaches",component:te},{path:"/coaches/:id",component:ue,props:!0,children:[{path:"contact",component:le}]},{path:"/register",component:de,meta:{requiresAuth:!0}},{path:"/requests",component:fe,meta:{requiresAuth:!0}},{path:"/auth",component:he,meta:{requiresUnauth:!0}},{path:"/:notFound(.*)",component:se}]});be.beforeEach((function(e,t,n){e.meta.requiresAuth&&!k.getters.isAuthenticated?n("/auth"):e.meta.requiresUnauth&&k.getters.isAuthenticated?n("/coaches"):n()}));var je=be;function pe(e,t,n,c,a,o){var i=Object(r["A"])("the-header"),s=Object(r["A"])("router-view");return Object(r["s"])(),Object(r["f"])("div",null,[Object(r["i"])(i),Object(r["i"])(s,null,{default:Object(r["I"])((function(e){return[Object(r["i"])(r["c"],{name:"route",mode:"out-in"},{default:Object(r["I"])((function(){return[(Object(r["s"])(),Object(r["f"])(Object(r["B"])(e.Component)))]})),_:2},1024)]})),_:1})])}n("ac1f"),n("5319");var Oe=Object(r["L"])("data-v-7a3651cf");Object(r["v"])("data-v-7a3651cf");var me=Object(r["i"])("span",{class:"header-span"},"Find a Coach",-1),ge=Object(r["i"])("span",{class:"header-span"},"All Coaches",-1),ve={key:0},ke=Object(r["i"])("span",{class:"header-span"},"Requests",-1),ye={key:1},we=Object(r["i"])("span",{class:"header-span"},"Login",-1),Ie={key:2},Ce=Object(r["i"])("span",{class:"header-span"},"Logout",-1);Object(r["t"])();var xe=Oe((function(e,t,n,c,a,o){var i=Object(r["A"])("router-link"),s=Object(r["A"])("base-button");return Object(r["s"])(),Object(r["f"])("header",null,[Object(r["i"])("nav",null,[Object(r["i"])("h1",null,[Object(r["i"])(i,{to:"/"},{default:Oe((function(){return[me]})),_:1})]),Object(r["i"])("ul",null,[Object(r["i"])("li",null,[Object(r["i"])(i,{to:"/coaches"},{default:Oe((function(){return[ge]})),_:1})]),o.isLoggedIn?(Object(r["s"])(),Object(r["f"])("li",ve,[Object(r["i"])(i,{to:"/requests"},{default:Oe((function(){return[ke]})),_:1})])):(Object(r["s"])(),Object(r["f"])("li",ye,[Object(r["i"])(i,{to:"/auth"},{default:Oe((function(){return[we]})),_:1})])),o.isLoggedIn?(Object(r["s"])(),Object(r["f"])("li",Ie,[Object(r["i"])(s,{onClick:t[1]||(t[1]=function(e){return o.logout()})},{default:Oe((function(){return[Ce]})),_:1})])):Object(r["g"])("",!0)])])])})),Le={computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated}},methods:{logout:function(){this.$store.dispatch("logout"),this.$router.replace("/")}}};n("942c");Le.render=xe,Le.__scopeId="data-v-7a3651cf";var _e=Le,Ae={components:{TheHeader:_e},created:function(){this.$store.dispatch("tryLogin")},computed:{didAutoLogOut:function(){return this.$store.getters.didAutoLogout}},watch:{didAutoLogOut:function(e,t){e&&e!==t&&this.$router.replace("/coaches")}}};n("64be");Ae.render=pe;var Re=Ae,qe=Object(r["L"])("data-v-17217690");Object(r["v"])("data-v-17217690");var Fe={class:"card"};Object(r["t"])();var Se=qe((function(e,t,n,c,a,o){return Object(r["s"])(),Object(r["f"])("div",Fe,[Object(r["z"])(e.$slots,"default")])}));n("d156");const Ne={};Ne.render=Se,Ne.__scopeId="data-v-17217690";var Ee=Ne,Te=(n("9911"),Object(r["L"])("data-v-12907e66"));Object(r["v"])("data-v-12907e66");var De={class:"base-button-div"};Object(r["t"])();var $e=Te((function(e,t,n,c,a,o){var i=Object(r["A"])("router-link");return Object(r["s"])(),Object(r["f"])("div",De,[n.link?(Object(r["s"])(),Object(r["f"])(i,{key:1,to:n.to,class:n.mode},{default:Te((function(){return[Object(r["z"])(e.$slots,"default")]})),_:3},8,["to","class"])):(Object(r["s"])(),Object(r["f"])("button",{key:0,class:n.mode},[Object(r["z"])(e.$slots,"default")],2))])})),Pe={props:{link:{type:Boolean,required:!1,default:!1},mode:{type:String,required:!1,default:"flat"},to:{type:String,required:!1,default:""}}};n("3e07");Pe.render=$e,Pe.__scopeId="data-v-12907e66";var Ue=Pe,Be=Object(r["L"])("data-v-307dc83a"),Me=Be((function(e,t,n,c,a,o){return Object(r["s"])(),Object(r["f"])("span",{class:["badge",n.type]},Object(r["D"])(o.text),3)})),ze={props:["type","title"],computed:{text:function(){return this.title.toUpperCase()}}};n("4771");ze.render=Me,ze.__scopeId="data-v-307dc83a";var Je=ze,Ge=Object(r["L"])("data-v-05edc46e");Object(r["v"])("data-v-05edc46e");var Ve={class:"spinner"},He=Object(r["i"])("div",{class:"lds-roller"},[Object(r["i"])("div"),Object(r["i"])("div"),Object(r["i"])("div"),Object(r["i"])("div"),Object(r["i"])("div"),Object(r["i"])("div"),Object(r["i"])("div"),Object(r["i"])("div")],-1);Object(r["t"])();var We=Ge((function(e,t,n,c,a,o){return Object(r["s"])(),Object(r["f"])("div",Ve,[He])}));n("c9af");const Ze={};Ze.render=We,Ze.__scopeId="data-v-05edc46e";var Ke=Ze,Ye=Object(r["j"])((function(){return n.e("chunk-2980528d").then(n.bind(null,"d086"))})),Qe=Object(r["e"])(Re);Qe.component("base-card",Ee),Qe.component("base-button",Ue),Qe.component("base-badge",Je),Qe.component("base-spinner",Ke),Qe.component("base-dialog",Ye),Qe.use(je),Qe.use(k),Qe.mount("#app")},"61f5":function(e,t,n){"use strict";n("2dcf")},"64be":function(e,t,n){"use strict";n("c894")},8090:function(e,t,n){"use strict";n("f5c3")},"8a9f":function(e,t,n){"use strict";n("bdd6")},"8b3c":function(e,t,n){},"942c":function(e,t,n){"use strict";n("0c12")},"96d7":function(e,t,n){},b18e:function(e,t,n){"use strict";n("8b3c")},bdd6:function(e,t,n){},c894:function(e,t,n){},c927:function(e,t,n){},c9af:function(e,t,n){"use strict";n("96d7")},d156:function(e,t,n){"use strict";n("f175")},f175:function(e,t,n){},f5c3:function(e,t,n){}});
//# sourceMappingURL=app.a1d4b03c.js.map