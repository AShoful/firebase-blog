(this["webpackJsonpfirebase-react"]=this["webpackJsonpfirebase-react"]||[]).push([[0],{100:function(e,t,a){e.exports=a(150)},105:function(e,t,a){},130:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),c=a(15),l=(a(105),a(33)),u=a(16),s=a(78);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=a(189),d=a(85),p=a.n(d),f=a(176),g=a(178),E=a(88),h=a(180),v=a(89),b=a(154),A=a(151);function y(e){var t=e.children,a=e.window,n=Object(f.a)({disableHysteresis:!0,threshold:0,target:a?a():void 0});return r.a.cloneElement(t,{elevation:n?4:0})}var S=Object(A.a)((function(){return{root:{maxHeight:60},top:{display:"flex",justifyContent:"space-between"}}})),T=function(e){var t=e.authenticated,a=S();return r.a.createElement(y,e,r.a.createElement(g.a,{position:"sticky",className:a.root},r.a.createElement(E.a,null,r.a.createElement(h.a,{className:a.top},t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(v.a,{color:"inherit",component:c.b,to:"/"},"Home"),r.a.createElement(v.a,{color:"inherit",component:c.b,to:"/addpost"},"Addpost")),r.a.createElement("div",null,r.a.createElement(b.a,{title:"Logout"},r.a.createElement(v.a,{color:"inherit",component:c.b,to:"/logout"},t)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(v.a,{color:"inherit",component:c.b,to:"/"},"Home")),r.a.createElement("div",null,r.a.createElement(v.a,{color:"inherit",component:c.b,to:"/registr"},"Signup")))))))};T.defaultProps={authenticated:"anonim"};var w=T,C=a(20),O=a.n(C),j=a(36),x=a(52),k=a.n(x);function I(e,t){return{type:"AUTH_SUCCESS",token:e,name:t}}function R(e){return function(t){setTimeout((function(){return t(N())}),1e3*e)}}function N(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationDate"),localStorage.removeItem("name"),{type:"AUTH_LOGOUT"}}var _=function(e){var t=e.authenticated,a=e.autoLogin;return r.a.useEffect((function(){return a()}),[a]),r.a.createElement(w,{authenticated:t})};_.defaultProps={authenticated:"",autoLogin:function(){}};var F=Object(u.b)((function(e){return{authenticated:e.auth.authenticated}}),(function(e){return{autoLogin:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var a=localStorage.getItem("name"),n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(N()):(e(I(t,a)),e(R((n.getTime()-(new Date).getTime())/1e3)))}else e(N())}))}}}))(_),M=a(35),P=a(14),U=a(56),D=a.n(U),z=a(182),H=a(183),L=a(192),q=a(38),V=a(90),X=a(190),W=a(84),K=a.n(W),B=function(){return r.a.createElement(z.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ".concat((new Date).getFullYear(),"."))},J=Object(A.a)((function(e){return{loading:{filter:"blur(2px)"},paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{marginTop:e.spacing(3),marginBottom:e.spacing(2)},error:{textAlign:"center",textDecoration:"underline"}}}));function G(e){var t=Object(n.useState)(""),a=Object(P.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)(""),u=Object(P.a)(l,2),s=u[0],m=u[1],d=Object(n.useState)(!1),p=Object(P.a)(d,2),f=p[0],g=p[1],h=J(),b=e.name,A=e.linkName,y=e.link,S=e.isLogin,T=e.auth,w=e.error,C=e.loading;return r.a.createElement(E.a,{component:"main",maxWidth:"xs",className:C?h.loading:null},r.a.createElement(H.a,null),r.a.createElement("div",{className:h.paper},r.a.createElement(L.a,{className:h.avatar},r.a.createElement(K.a,null)),r.a.createElement(z.a,{component:"h1",variant:"h5"},b),r.a.createElement("form",{className:h.form,noValidate:!0},r.a.createElement(q.a,{container:!0,spacing:2},r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(V.a,{error:!!o&&!D.a.validate(o),helperText:o&&!D.a.validate(o)?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b":null,variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:o,onChange:function(e){i(e.target.value),g(!0)}})),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(V.a,{error:!S&&!!s&&s.length<6,helperText:!S&&s.length<6&&s?"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432":null,variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:s,onChange:function(e){m(e.target.value),g(!0)}}))),w&&!f?r.a.createElement(X.a,{p:1,className:h.error,color:"secondary.main"},S?"\u041f\u0430\u0440\u043e\u043b\u044c \u0438\u043b\u0438 \u043b\u043e\u0433\u0438\u043d \u043d\u0435\u0432\u0435\u0440\u043d\u044b":"\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u0441 \u0442\u0430\u043a\u0438\u043c \u0430\u0434\u0440\u0435\u0441\u043e\u043c \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"):null,r.a.createElement(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:!D.a.validate(o)||!S&&s.length<6,className:h.submit,onClick:function(e){return function(e,t,a,n){n.preventDefault(),T({email:e,password:t,isLogin:a}),i(""),m(""),g(!1)}(o,s,S,e)}},b),r.a.createElement(q.a,{container:!0,justify:"flex-end"},r.a.createElement(q.a,{item:!0},r.a.createElement(c.b,{to:y,variant:"body2"},A))))),r.a.createElement(X.a,{p:3},r.a.createElement(B,null)))}G.defaultProps={name:"name",linkName:"linkName",link:"/",isLogin:!1,error:"",loading:!1,auth:function(){}};var Z=function(e){return e.authenticated?r.a.createElement(M.a,{to:"/"}):r.a.createElement(G,e)};Z.defaultProps={authenticated:""};var Q=Object(u.b)((function(e){return{authenticated:e.auth.authenticated,error:e.auth.error,loading:e.auth.loading}}),(function(e){return{auth:function(t){return e(function(e){var t=e.email,a=e.password,n=e.isLogin;return(function(){var e=Object(j.a)(O.a.mark((function e(r){var o,i,c,l,u,s,m,d,p;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"AUTH_START"}),o={email:t,password:a,returnSecureToken:!0},i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCopqgTR8loKNkzzclcfxaPb4002RauomM",n||(i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCopqgTR8loKNkzzclcfxaPb4002RauomM"),e.prev=4,e.next=7,k.a.post(i,o);case 7:c=e.sent,l=c.data,u=l.idToken,s=l.expiresIn,m=l.localId,d=l.email,p=new Date((new Date).getTime()+1e3*s),localStorage.setItem("token",u),localStorage.setItem("userId",m),localStorage.setItem("expirationDate",p),localStorage.setItem("name",d),r(I(u,d)),r(R(s)),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),r({type:"AUTH_ERROR"});case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}())}(t))}}}))(Z),Y=a(184),$=a(152),ee=a(185),te=a(186),ae=a(187),ne=a(188),re=Object(A.a)({root:{width:"80%",margin:"5px auto",display:"flex",justifyContent:"space-between"},container:{display:"flex",justifyContent:"space-around"},area:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"70%"},CardMedia:{width:180,marginBottom:5,height:150,objectFit:"cover",borderRadius:10}});function oe(e){var t=e.item,a=e.remove,o=re(),i=Object(n.useState)(!1),l=Object(P.a)(i,2),u=l[0],s=l[1],m=t.id,d=t.title,p=t.discription,f=t.image,g=void 0===f?"data:image/png;base64,iVBORw0KGgoAAAANS\nUhEUgAAASYAAACrCAMAAAD8Q8FaAAAAMFBMVEXMzMz////JycnX19fv7+/g4ODm\n5ubw8PDj4+P7+/vQ0NDZ2dns7OzU1NTz8/PR0dFLlFx7AAACXUlEQVR4nO3c6XK\nDIBRAYXcRUN//bRvJ4toEJI6t93z/mpk6wxkXNJIkAQAAAAAAAAAAAAAAAAAAAA\nAAAAAAACCEbvM4rT57CMfTxjZpnMaas0dxNF3GRnKhyrPHcTDzjUq3Ttfen3r7l\nUppai99fsqHnanpihid20Z79lCOZIY9odNZDN0NG8nPHsqRXKYii9pGVpDJQ1aL\nyzQcRKHbEJdJm1KpMnTA0jLltnPXvSrsqiUsk+mek6AiqJOsTPmr0u2TPmAbojL\np2Xw85B5NVCbTTTPVAbuTpExZObtF++3eYyuGqExqfiu7PWrVqfWHZFpQTdqsO0\nnKlMwfz20edMo9Clh1EpUpn53C7cYpXN1DrjqJypRU00wbDyPVc3dbdpKVqS/GS\ntX6WaQaD8pFJ1mZktb6VVp2EpYp0WXRuK+TVpWW18FZJ2mZhm8227Zf70rLSvNO\n8jJtW1eadSKTs1Vp2olMg+1Kk05iM03//q3SzaOT2EyTVyfeVHp2kprJjrPwt5U\nenYRmcrPMe6cPldK0zKRmeszFh04fK6VKaqbXHYvxqCQ10/SLg/xzJaGZdOjrTi\nIzBVcSmSm8ksRMOyoJzLSnkrxMuyqJy+QxRyITmd4jkxcyeSGTFzJ5GTNV73uQ6\nfG2XGHDFe6plKRMya71Ku4fRWXajUxepCztqVko9sF92aGtYtjrLzvs613zgLWg\ndQn/z1cWjl9+SXSiq68ssFeXXhGdDK/I1dE/11CXV69005oyjrn06XsUNR8IX/U\nKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Ek/izofeZ5mEPoAAAAASUVORK5CYI\nI=":f,h=t.author,A=t.date,y=localStorage.getItem("name");return r.a.createElement(E.a,{className:o.container},r.a.createElement(Y.a,{className:o.root},r.a.createElement($.a,{className:o.CardMedia,component:"img",alt:"Contemplative Reptile",image:g,title:"Contemplative Reptile"}),r.a.createElement("div",{className:o.area},r.a.createElement(ee.a,{onClick:function(){return s(!u)}},r.a.createElement(te.a,null,r.a.createElement(z.a,{gutterBottom:!0,variant:"subtitle1",component:"h4"},d),r.a.createElement(z.a,{gutterBottom:!0,variant:"caption",component:"h6"},new Date(A).toLocaleDateString().split(" ")[0]),r.a.createElement(b.a,{title:u?"collapse":"See more"},r.a.createElement(z.a,{variant:"subtitle1",color:"textSecondary",component:"p"},u||p.length<100?p:"".concat(p.slice(0,100),"..."))))),y===h&&r.a.createElement(ae.a,{className:o.container},r.a.createElement(v.a,{size:"small",color:"primary",variant:"outlined",component:c.b,to:"/post/edit/".concat(m)},"edit"),r.a.createElement(v.a,{size:"small",color:"secondary",variant:"outlined",onClick:function(){a(m)}},"delete"))),r.a.createElement(ne.a,null)))}oe.defaultProps={item:{id:"",title:"title",discription:"discription",author:"",date:0},remove:function(){}};var ie=Object(A.a)((function(e){return{card:{display:"flex",marginBottom:20,borderBottom:"2px solid rgba(0,0,0, 0.2)"},cardContent:{width:"100%",flexDirection:"column",padding:25},cover:{minWidth:200,objectFit:"cover"},handle:{width:60,height:18,backgroundColor:e.palette.primary.main,marginBottom:7},date:{height:14,width:100,backgroundColor:"rgba(0,0,0, 0.3)",marginBottom:10},fullLine:{height:15,width:"90%",backgroundColor:"rgba(0,0,0, 0.2)",marginBottom:10},halfLine:{height:15,width:"50%",backgroundColor:"rgba(0,0,0, 0.2)",marginBottom:10}}})),ce=function(){var e=ie(),t=Array.from({length:5}).map((function(t,a){return r.a.createElement("div",{className:e.card,key:a},r.a.createElement("div",{className:e.cover}),r.a.createElement("div",{className:e.cardContent},r.a.createElement("div",{className:e.handle}),r.a.createElement("div",{className:e.date}),r.a.createElement("div",{className:e.fullLine}),r.a.createElement("div",{className:e.fullLine}),r.a.createElement("div",{className:e.halfLine})))}));return r.a.createElement(r.a.Fragment,null,t)},le=a(19),ue=k.a.create({baseURL:"https://react-quiz-5cb66.firebaseio.com/quizesBase/"}),se=function(){return ue.get("/quizes.json")},me=function(e){return ue.get("/quizes/".concat(e,".json"))},de=function(e){return ue.delete("/quizes/".concat(e,".json"))},pe=function(e){return ue.post("/quizes.json",e)},fe=function(e,t){return ue.patch("/quizes/".concat(t,".json"),e)};function ge(e){return{type:"FETCH_ITEMS_ERROR",error:e,loading:!1}}function Ee(e){return{type:"FETCH_ITEM_SUCCESS",payload:e}}function he(e){return{type:"FETCH_ITEM_REMOVE",payload:e}}function ve(){return{type:"FETCH_SUCCESS"}}var be=function(e){var t=e.fetchPosts,a=e.cards,n=e.isLoading,o=e.fetchRemove;return r.a.useEffect((function(){t()}),[t]),r.a.createElement(r.a.Fragment,null,n?r.a.createElement(ce,null):a.map((function(e){return r.a.createElement(oe,{key:e.id||1,item:e,remove:o})})))};be.defaultProps={fetchPosts:function(){},cards:[],isLoading:!1,fetchRemove:function(){}};var Ae=Object(u.b)((function(e){return{cards:e.posts.items,isLoading:e.posts.loading}}),(function(e){return{fetchPosts:function(){return e(function(){var e=Object(j.a)(O.a.mark((function e(a){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"FETCH_ITEMS_START"}),e.next=3,se(t);case 3:n=e.sent;try{r=Object.entries(n.data).map((function(e){return Object(le.a)({},e[1],{id:e[0]})})),a({type:"FETCH_ITEMS_SUCCESS",items:r,loading:!1})}catch(o){a(ge(o))}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var t},fetchRemove:function(t){return e(function(e){return function(){var t=Object(j.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,de(e);case 2:try{a(he(e)),window.alert("\u041f\u043e\u0441\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d!")}catch(n){a(ge(n))}case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(be),ye=function(e){var t=e.logout;return Object(n.useEffect)((function(){t()}),[t]),r.a.createElement(M.a,{to:"/"})};ye.defaultProps={logout:function(){}};var Se=Object(u.b)(null,(function(e){return{logout:function(){return e(N())}}}))(ye),Te=a(55),we=function(e){var t=e.fetchPostItem,a=e.loading;return r.a.createElement(Te.a,{handleSubmitFetch:t,loading:a})};we.defaultProps={fetchPostItem:function(){},loading:!1};var Ce=Object(u.b)((function(e){return{loading:e.posts.loading}}),(function(e){return{fetchPostItem:function(t){return e(function(e){return function(){var t=Object(j.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"FETCH_ITEMS_START"}),t.next=3,pe(e);case 3:try{a(ve()),window.alert("\u041f\u043e\u0441\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d!")}catch(n){a(ge(n)),window.alert("\u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435")}case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(we),Oe=function(e){var t=e.getItem,a=e.fetchPatchItem,n=e.post,o=e.postId,i=e.loading;return r.a.useEffect((function(){n.title||t(o)}),[t,n,o]),r.a.createElement(Te.a,{handleSubmitFetch:a,post:n,postId:o,loading:i})};Oe.defaultProps={fetchPatchItem:function(){},getItem:function(){},postId:"",loading:!1,post:{title:"",discription:"",image:null}};var je=Object(u.b)((function(e,t){var a=t.match;return{postId:a.params.id,post:e.posts.items.filter((function(e){return e.id===a.params.id}))[0],loading:e.posts.loading}}),(function(e){return{fetchPatchItem:function(t,a){return e(function(e,t){return function(){var a=Object(j.a)(O.a.mark((function a(n){return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"FETCH_ITEMS_START"}),console.log("patch",t),a.next=4,fe(e,t);case 4:try{n(ve()),window.alert("\u041f\u043e\u0441\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d!")}catch(r){n(ge(r)),window.alert("\u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435")}case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t,a))},getItem:function(t){return e(function(e){return function(){var t=Object(j.a)(O.a.mark((function t(a){var n,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"FETCH_ITEMS_START"}),t.next=3,me(e);case 3:n=t.sent;try{(r=n.data).id=e,a(Ee(r))}catch(o){a(ge(o))}case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(Oe),xe=function(){var e=r.a.createElement(Q,{name:"Sing in",linkName:"Don't have an account? Sign Up",link:"/registr",isLogin:!0}),t=r.a.createElement(Q,{name:"Sing up",linkName:"Already have an account? Sign in",link:"/auth",isLogin:!1});return r.a.createElement(M.d,null,r.a.createElement(M.b,{path:"/",exact:!0,component:Ae}),r.a.createElement(M.b,{path:"/auth",render:function(){return e}}),r.a.createElement(M.b,{path:"/registr",render:function(){return t}}),r.a.createElement(M.b,{path:"/addpost",component:Ce}),r.a.createElement(M.b,{path:"/logout",component:Se}),r.a.createElement(M.b,{path:"/post/edit/:id",component:je}),r.a.createElement(M.a,{to:"/"}))},ke=(a(130),p()({palette:{primary:{light:"#33c9dc",main:"#00bcd4",dark:"#008394",contrastText:"#fff"},secondary:{light:"#ff6333",main:"#ff3d00",dark:"#b22a00",contrastText:"#fff"}},typography:{useNextVariants:!0,fontSize:8}}));var Ie=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{theme:ke},r.a.createElement(F,null),r.a.createElement(xe,null)))},Re=a(17),Ne={items:[],loading:!1,error:null},_e={token:null,authenticated:"",error:null,loading:!1};var Fe=Object(l.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ITEMS_START":return Object(le.a)({},e,{loading:!0});case"FETCH_ITEMS_SUCCESS":return Object(le.a)({},e,{items:t.items,loading:!1});case"FETCH_ITEM_SUCCESS":return Object(le.a)({},e,{items:e.items?[].concat(Object(Re.a)(e.items),[t.payload]):[t.payload],loading:!1});case"FETCH_ITEMS_ERROR":return Object(le.a)({},e,{error:t.payload,loading:!1});case"FETCH_ITEM_REMOVE":return Object(le.a)({},e,{items:e.items.filter((function(e){return e.id!==t.payload}))});case"FETCH_SUCCESS":return Object(le.a)({},e,{loading:!1});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return Object(le.a)({},e,{token:t.login,authenticated:t.name,error:null,loading:!1});case"AUTH_START":return Object(le.a)({},e,{loading:!0});case"AUTH_LOGOUT":return Object(le.a)({},e,{token:null,authenticated:""});case"AUTH_ERROR":return Object(le.a)({},e,{error:!0,loading:!1});default:return e}}}),Me="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):l.d,Pe=Object(l.e)(Fe,Me(Object(l.a)(s.a))),Ue=r.a.createElement(u.a,{store:Pe},r.a.createElement(c.a,null,r.a.createElement(Ie,null)));i.a.render(Ue,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return f}));var n=a(14),r=a(0),o=a.n(r),i=a(151),c=a(88),l=a(38),u=a(90),s=a(152),m=a(154),d=a(89),p=Object(i.a)((function(e){return{root:{marginTop:e.spacing(1),width:"80%"},loading:{filter:"blur(2px)"},CardMedia:{marginBottom:5,objectFit:"cover"}}}));function f(t){var a=t.id,r=t.handleSubmitFetch,i=t.postId,f=t.loading,g=t.post,E=p(),h=o.a.useState(g?g.title:""),v=Object(n.a)(h,2),b=v[0],A=v[1],y=o.a.useState(g?g.discription:""),S=Object(n.a)(y,2),T=S[0],w=S[1],C=o.a.useState(g?g.image:null),O=Object(n.a)(C,2),j=O[0],x=O[1],k=Date.now(),I=localStorage.getItem("name"),R={id:a,title:b,discription:T,image:j,date:k,author:I};o.a.useEffect((function(){g&&g.title&&(A(g.title),w(g.discription),x(g.image))}),[g]);return o.a.createElement(c.a,{component:"main",maxWidth:"md",pt:3,className:E.root},o.a.createElement("form",{className:f?E.loading:null,noValidate:!0,autoComplete:"off"},o.a.createElement(l.a,{container:!0,spacing:2},o.a.createElement(l.a,{item:!0,xs:12},o.a.createElement(u.a,{variant:"outlined",label:"Title",name:"title",value:b,onChange:function(e){return A(e.target.value)},required:!0,fullWidth:!0,id:"title"})),o.a.createElement(l.a,{item:!0,xs:12},o.a.createElement(u.a,{variant:"outlined",required:!0,fullWidth:!0,id:"discription",label:"Discription",name:"discription",multiline:!0,rows:"10",onChange:function(e){return w(e.target.value)},value:T})),o.a.createElement("input",{type:"file",id:"imageInput",hidden:"hidden",onChange:function(){return function(t){var a=t.files[0];if(a.size<2e5){var n=new Blob([a],{type:"image/jpg"}),r=new FileReader;r.readAsDataURL(n),r.onload=function(){x(r.result)},r.onerror=function(){console.log(r.error)}}else e.alert("\u0420\u0430\u0437\u043c\u0435\u0440 \u0440\u0438\u0441\u0443\u043d\u043a\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c 200 \u043a\u0411")}(document.querySelector("#imageInput"))}}),o.a.createElement(c.a,{maxWidth:"xs"},j&&o.a.createElement(l.a,{item:!0,xs:12},o.a.createElement(s.a,{className:E.CardMedia,component:"img",alt:"Contemplative Reptile",image:j,title:"Contemplative Reptile"})),o.a.createElement(l.a,{item:!0,xs:12},o.a.createElement(l.a,{item:!0,xs:12},o.a.createElement(m.a,{title:"Add your foto"},o.a.createElement(d.a,{fullWidth:!0,onClick:function(){document.getElementById("imageInput").click()},color:"primary",variant:"outlined"},g&&g.title?"Edit foto":"Add foto"))),o.a.createElement(l.a,{item:!0,xs:12},o.a.createElement(d.a,{type:"submit",variant:"contained",fullWidth:!0,color:"primary",className:E.submit,disabled:!b||!T||!I,onClick:function(e){return function(e,t){t.preventDefault(),r(e,i)}(R,e)}},"Send")))))))}}).call(this,a(46))}},[[100,1,2]]]);
//# sourceMappingURL=main.ffb56a4b.chunk.js.map