(this.webpackJsonpguappjolotas=this.webpackJsonpguappjolotas||[]).push([[0],{62:function(e,n,t){},85:function(e,n,t){"use strict";t.r(n);var a,c,r,o,i,s,l,d,j,u,b,p,x,h,g,O,m,f,y,v,w,k,A,C,B,S,N,I,T,E,L,G,Q,Z,P,K,F,X,D,M,R,W,U,J,V,q=t(1),H=t(38),z=t.n(H),Y=(t(62),t(34)),_=t(37),$=t(49),ee=t(7),ne="[Auth] login",te="[Auth] register",ae="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.c,ce=Object(_.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return n.type===ne?Object(ee.a)(Object(ee.a)({},e),{},{id:n.payload.id,name:n.payload.displayname}):e},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return n.type===te?Object(ee.a)(Object(ee.a)({},e),{},{email:n.payload.email,password:n.payload.password,name:n.playload.name}):e}}),re=Object(_.d)(ce,ae(Object(_.a)($.a))),oe=t(21),ie=t(12),se=t(11),le=t(9),de=t(10),je=de.a.div(a||(a=Object(le.a)(["\n    display: flex;\n    flex-direction:column;\n    align-items:center\n"]))),ue=de.a.div(c||(c=Object(le.a)(["\n    \n    text-align: center;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    width: 500px;\n    height: 110px;\n    padding: 20px;\n    margin: 20px 20px 10px 20px;\n    border-radius: 20px;\n    justify-content: normal;\n    align-items: normal;\n    align-content:normal;\n    background-color: #e7e7e7;\n"]))),be=de.a.div(r||(r=Object(le.a)(["\n    display: inline-block;\n"]))),pe=de.a.img(o||(o=Object(le.a)(["\n    height: 4.3rem;\n    margin: auto;\n"]))),xe=de.a.h4(i||(i=Object(le.a)(["\n    \n    color: black;\n"]))),he=de.a.h4(s||(s=Object(le.a)(["\n    color: #fa4a0c;\n"]))),ge=de.a.div(l||(l=Object(le.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),Oe=(de.a.div(d||(d=Object(le.a)(["\n    width: 190px;\n    height: 72px;\n    border-radius: 20px;\n    background-color: #e7e7e7;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    text-align: center;\n    margin-bottom: 20px;\n    margin-top: 15px;\n"]))),de.a.button(j||(j=Object(le.a)([" \n    outline: black;\n    width: 33.33px;\n    height: 33.33px;\n    border-radius: 20px;\n    margin: auto;\n    border: 2px solid black;\n\n"])))),me=de.a.button(u||(u=Object(le.a)(["\n    width: 200px;\n    height: 70px;\n    background-color: #fa4a0c;\n    color: #fff;\n    border-radius: 25px;\n    outline: none;\n    margin-bottom: 50px;\n    border: 1px solid #fa4a0c;\n    cursor: pointer;\n"]))),fe=t(2),ye=function(){var e=Object(q.useState)([]),n=Object(se.a)(e,2),t=n[0],a=n[1],c={removeFromCart:function(e,n,t){var a=n.filter((function(n){return n.id!==e}));localStorage.setItem("Cart",JSON.stringify(a)),t(a)}},r=c.removeFromCart;return Object(q.useEffect)((function(){localStorage.getItem("Cart")&&a(JSON.parse(localStorage.getItem("Cart")))}),[]),console.log(t),console.log(typeof t),Object(fe.jsxs)("div",{children:[Object(fe.jsx)(je,{children:t.map((function(e){return Object(fe.jsxs)(ue,{children:[Object(fe.jsx)(pe,{src:e.image,alt:e.name}),Object(fe.jsxs)(be,{children:[Object(fe.jsx)(xe,{children:e.name}),Object(fe.jsxs)(he,{children:["$ ",e.price," x ",e.quantity]})]}),Object(fe.jsx)(Oe,{onClick:function(){return r(e.id,t,a)},children:"x"})]},e.id)}))}),Object(fe.jsx)(ge,{children:Object(fe.jsx)(me,{children:"Purchase"})})]})},ve=t(0),we=t.n(ve),ke=t(4),Ae=function(){var e=Object(ke.a)(we.a.mark((function e(n){var t,a,c;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api-guajalotas-1.herokuapp.com/products/".concat(n),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(ke.a)(we.a.mark((function e(){var n,t;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api-guajalotas-2.herokuapp.com/flavors",e.next=3,fetch("https://api-guajalotas-2.herokuapp.com/flavors");case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Be=function(){var e=Object(ke.a)(we.a.mark((function e(){var n,t;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api-guajalotas-1.herokuapp.com/products/",e.next=3,fetch("https://api-guajalotas-1.herokuapp.com/products/");case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Se=t(24),Ne=t(40),Ie=de.a.div(b||(b=Object(le.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),Te=de.a.h2(p||(p=Object(le.a)(["\n    color: #f4aa0c;\n"]))),Ee=de.a.div(x||(x=Object(le.a)(["\n    width: 190px;\n    height: 72px;\n    border-radius: 20px;\n    background-color: #e7e7e7;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    text-align: center;\n    margin-bottom: 20px;\n    margin-top: 15px;\n\n"]))),Le=de.a.div(h||(h=Object(le.a)(["\n    margin: auto;\n"]))),Ge=de.a.button(g||(g=Object(le.a)([" \n    outline: black;\n    width: 33.33px;\n    height: 33.33px;\n    border-radius:20px;\n    margin:auto;\n    border: 2px solid black;\n"]))),Qe=de.a.div(O||(O=Object(le.a)(["\n    flex-wrap: wrap;\n"]))),Ze=de.a.h3(m||(m=Object(le.a)(["\n    text-align: center;\n    margin-bottom: 20px;\n"]))),Pe=de.a.h3(f||(f=Object(le.a)(["\n    text-align: center;\n    margin-bottom: 20px;\n"]))),Ke=de.a.div(y||(y=Object(le.a)(["\n    flex-wrap: wrap;\n"]))),Fe=de.a.div(v||(v=Object(le.a)([" \n    display: flex;\n    flex-wrap: wrap;\n    width: auto;\n"]))),Xe=de.a.div(w||(w=Object(le.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    text-align: center;\n    margin: 20px;\n"]))),De=de.a.h5(k||(k=Object(le.a)(["\n    align-self: flex-start;\n"]))),Me=de.a.button(A||(A=Object(le.a)(["\n    width: 280px;\n    height: 70px;\n    background-color: #fa4a0c;\n    color: white;\n    border-radius: 25px;\n    outline: none;\n    margin-bottom: 50px;\n    border: 1px solid #fa4a0c;\n    cursor: pointer;\n"]))),Re=function(){var e=Object(q.useState)(null),n=Object(se.a)(e,2),t=n[0],a=n[1],c=Object(q.useState)(null),r=Object(se.a)(c,2),o=r[0],i=r[1],s=Object(ie.h)().id,l=Object(q.useState)([]),d=Object(se.a)(l,2),j=d[0],u=d[1],b=function(){var e=Object(Ne.useState)(0),n=Object(se.a)(e,2),t=n[0],a=n[1];return{counter:t,handleDecrement:function(){a(t<=0?0:t-1)},handleIncrement:function(){a(t+1)}}}(),p=b.counter,x=b.handleDecrement,h=b.handleIncrement,g=function(){var e=Object(Ne.useState)([]),n=Object(se.a)(e,2),t=n[0],a=n[1];return{checkedProduct:t,handleCheckOn:function(e){a([].concat(Object(Se.a)(t),[e]))},handleCheckOff:function(e){var n=t.filter((function(n){return n!==e}));a(n)}}}(),O=g.checkedProduct,m=g.handleCheckOn,f=g.handleCheckOff;Object(q.useEffect)((function(){Be().then((function(e){a(e)})),Ce().then((function(e){var n=e.map((function(e){return e}));i(n[0])})),Ae(s).then((function(e){u(e)}))}),[s]);var y=function(e){return e.map((function(e){return Object(fe.jsx)("img",{src:e.image,alt:e.flavor},e.id)}))},v=function(e){var n=t.filter((function(n){return n.category===e}));return console.log(n),w(n)},w=function(e){return console.log(e),e.map((function(e){return Object(fe.jsx)(Xe,{children:Object(fe.jsxs)("label",{children:[Object(fe.jsx)("img",{src:e.image,alt:e.name}),Object(fe.jsx)(De,{children:e.name}),Object(fe.jsxs)("h5",{children:["+$ ",e.price," MXN"]}),Object(fe.jsx)("input",{type:"checkbox",onChange:function(n){return n.target.checked?m(e):f(e)}})]})},e.id)}))},k=[],A=[];return Object(fe.jsxs)(Ie,{children:[Object(fe.jsxs)(fe.Fragment,{children:[Object(fe.jsx)("img",{src:j.image,alt:j.name}),Object(fe.jsx)("h1",{children:j.name}),Object(fe.jsxs)(Te,{children:["$ ",j.price," MXN"]}),Object(fe.jsxs)(Ee,{children:[Object(fe.jsx)(Ge,{onClick:x,children:"-"}),Object(fe.jsx)(Le,{children:p}),Object(fe.jsx)(Ge,{onClick:h,children:"+"})]})]}),Object(fe.jsxs)(Qe,{children:[Object(fe.jsx)(Ze,{children:"Flavor"}),Object(fe.jsx)("div",{children:function(){if(console.log(j.flavorType),console.log(o),console.log(j.flavorType!={}&&""!=o),j.flavorType&&o)return"Tamale"===j.flavorType?y(o.tamal):"Drink"===j.flavorType?y(o.drink):console.error("It doesn't exist")}()})]}),Object(fe.jsxs)(Ke,{children:[Object(fe.jsx)(Pe,{children:"GuajoloCombo"}),Object(fe.jsx)(Fe,{children:function(){if(j.flavorType!={}&&""!=t)return"Tamale"===j.flavorType?v("Drinks"):"Drink"===j.flavorType?v("Guajolotas"):console.error("It doesn't exist")}()})]}),Object(fe.jsx)(oe.b,{to:"/cart",children:Object(fe.jsxs)(Me,{onClick:function(){var e=O,n={name:j.name,id:j.id,price:j.price,image:j.image,quantity:p};console.log(e),console.log(O),k.push(n);for(var a=function(n){A.push(t.filter((function(t){return t.name===e[n].name}))[0]),console.log(A),k.push({name:A[n].name,id:A[n].id,price:A[n].price,image:A[n].image,quantity:1})},c=0;c<e.length;c++)a(c);console.log(k),localStorage.setItem("Cart",JSON.stringify(k))},children:[" Add ",p," To Cart  $ ",p*j.price," "]})})]})},We=de.a.button(C||(C=Object(le.a)(["\n    border: none;\n    margin-right: 20px;\n    color: black;\n    background-color: transparent;\n    font-size: 1rem;\n    \n\n    :hover{\n        color: #fa4a0c;\n        cursor: pointer;\n        text-underline-position: under;\n        text-decoration: underline;\n    }\n"]))),Ue=function(e){var n=e.products,t=e.setCategories,a=function(e){var a=n.filter((function(n){return n.category===e.target.innerText}));t(a)};return Object(fe.jsxs)("nav",{children:[Object(fe.jsx)(We,{onClick:a,children:"Guajolotas"}),Object(fe.jsx)(We,{onClick:a,children:"Drinks"}),Object(fe.jsx)(We,{onClick:a,children:"Tamales"})]})},Je=de.a.div(B||(B=Object(le.a)(["\n    width: 100%;\n    margin-right: auto;\n    margin-left: auto; \n    padding-left: 50px;\n    padding-right: 50px;\n    text-align: center;\n"]))),Ve=de.a.div(S||(S=Object(le.a)([" \n    display: flex;\n    flex-direction: column;\n    \n    justify-content: center;\n    align-items: center;\n    align-content:normal;\n    margin: 20px 0px 200px 0px;\n"]))),qe=Object(de.a)(oe.c)(N||(N=Object(le.a)(["\n    text-decoration: none;\n"]))),He=de.a.div(I||(I=Object(le.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    width: 500px;\n    height: 110px;\n    padding: 20px;\n    margin: 20px 20px 10px 20px;\n    border-radius: 20px;\n    justify-content: normal;\n    align-items: normal;\n    align-content:normal;\n    background-color: #e7e7e7;\n"]))),ze=de.a.div(T||(T=Object(le.a)(["\n    width: 65px;\n    height: 75px;\n    display: flex;\n    align-self: flex-start;\n    \n    background-size: 100% 100%;\n"]))),Ye=de.a.div(E||(E=Object(le.a)(["\n    padding-left:20px;\n    width: 80%;\n    height: 46px;\n    top: 33px;\n    left: 112px\n"]))),_e=de.a.h3(L||(L=Object(le.a)(["\n    background-color: transparent;\n    color: #484747;\n    margin-top: 8px;  \n    font-size: 21px;\n    text-align: left;\n"]))),$e=de.a.h3(G||(G=Object(le.a)(["\n    background: transparent;\n    color: #FA4A0C;\n    text-align: left;\n    font-family: 'Inter', sans-serif;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 26px;\n"]))),en=de.a.p(Q||(Q=Object(le.a)(["\n    margin:32px auto;\n    font-size: 44px;\n    line-height:50px;\n    text-align:center;\n    text-shadow: 2px 2px 2px #ddd;\n    font-weight: 428;\n    font-family: 'Inter', sans-serif;\n"]))),nn=de.a.form(Z||(Z=Object(le.a)(["\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n"]))),tn=de.a.input(P||(P=Object(le.a)(["\n    padding: 10px 20px;\n    border-radius: 2px;\n    margin-right: 10px;\n    outline: none;\n    width: 300px;\n    margin-bottom: 20px;\n    background-color: #e7e7e7;\n    border-radius: 30px;\n    color: #9a9a9d;\n    border: none;\n    font-size: 14px;\n"]))),an=t(53),cn=t.n(an),rn=function(){var e=Object(ke.a)(we.a.mark((function e(){var n,t,a,c,r=arguments;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"",t="https://api-guajalotas-1.herokuapp.com/products/",e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:if(c=e.sent,0!==n.length){e.next=10;break}return e.abrupt("return",[]);case 10:return n=n.toLocaleLowerCase(),e.abrupt("return",c.filter((function(e){return e.name.toLocaleLowerCase().includes(n)})));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),on=t(3),sn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(q.useState)(e),t=Object(se.a)(n,2),a=t[0],c=t[1],r=function(){c(e)},o=function(e){var n=e.target;c(Object(ee.a)(Object(ee.a)({},a),{},Object(on.a)({},n.name,n.value)))};return[a,o,r]},ln=function(e){var n=e.setCategories,t=Object(ie.g)(),a=Object(ie.f)(),c=cn.a.parse(a.search).q,r=void 0===c?"":c,o=sn({searchText:r}),i=Object(se.a)(o,2),s=i[0],l=i[1],d=s.searchText;Object(q.useEffect)((function(){rn(r).then((function(e){n(e)}))}),[r]);return Object(fe.jsx)(fe.Fragment,{children:Object(fe.jsx)(nn,{onSubmit:function(e){e.preventDefault(),t("?q=".concat(d))},children:Object(fe.jsx)(tn,{type:"text",placeholder:"Flavor of guajalota, drink ...",name:"searchText",autoComplete:"off",value:d,onChange:l})})})},dn=function(){var e=Object(q.useState)([]),n=Object(se.a)(e,2),t=n[0],a=n[1],c=Object(q.useState)([]),r=Object(se.a)(c,2),o=r[0],i=r[1];return Object(q.useEffect)((function(){Be().then((function(e){a(e);var n=e.filter((function(e){return"Guajolotas"==e.category}));i(n)}))}),[]),console.log(o),console.log(typeof o),Object(fe.jsx)(fe.Fragment,{children:Object(fe.jsxs)(Je,{children:[Object(fe.jsxs)(en,{children:["Nothing like   a ",Object(fe.jsx)("br",{}),"Guajolota to",Object(fe.jsx)("br",{}),"  start the day"]}),Object(fe.jsxs)(Ve,{children:[Object(fe.jsx)(ln,{setCategories:i}),Object(fe.jsx)(Ue,{products:t,setCategories:i}),o.map((function(e){return Object(fe.jsx)(qe,{to:"/details/".concat(e.id),children:Object(fe.jsxs)(He,{children:[Object(fe.jsx)(ze,{style:{backgroundImage:"url(".concat(e.image,")")}}),Object(fe.jsxs)(Ye,{children:[Object(fe.jsx)(_e,{children:e.name}),Object(fe.jsxs)($e,{children:["$ ",e.price," MXN"]})]})]})},e.id)}))]})]})})},jn=t(87),un=t(86),bn=t(88),pn=t(25),xn=t(54),hn=t(55),gn=(Object(xn.a)({apiKey:"AIzaSyA-LsWwjIm5jy7hOKQh8Q51wkFZfX6dpEU",authDomain:"guajolotasapp.firebaseapp.com",projectId:"guajolotasapp",storageBucket:"guajolotasapp.appspot.com",messagingSenderId:"953043757093",appId:"1:953043757093:web:1273ec3bb149c7f7a837cc"}),new hn.a),On=function(e,n){return{type:ne,payload:{id:e,displayname:n}}},mn=(t(46),function(){var e=Object(Y.b)(),n=sn({email:"",password:""}),t=Object(se.a)(n,3),a=t[0],c=t[1],r=t[2],o=a.email,i=a.password;return Object(fe.jsx)("div",{className:"container-card",children:Object(fe.jsx)(jn.a,{children:Object(fe.jsxs)(jn.a.Body,{children:[Object(fe.jsx)(jn.a.Title,{children:"Log-In Form"}),Object(fe.jsxs)(un.a,{onSubmit:function(n){n.preventDefault(),r(),e(function(e,n){return function(t){var a=Object(pn.c)();Object(pn.d)(a,e,n).then((function(e){var n=e.user;t(On(n.uid,n.displayName)),console.log("Welcome"+n.displayName)})).catch((function(e){console.log(e),console.log("Username does not exist")}))}}(o,i))},children:[Object(fe.jsxs)(un.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(fe.jsx)(un.a.Label,{children:"E-mail"}),Object(fe.jsx)(un.a.Control,{type:"email",placeholder:"Email",name:"email",value:o,onChange:c})]}),Object(fe.jsxs)(un.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(fe.jsx)(un.a.Label,{children:"Password"}),Object(fe.jsx)(un.a.Control,{type:"password",placeholder:"Password",name:"password",value:i,onChange:c})]}),Object(fe.jsxs)("div",{className:"container-botom",children:[Object(fe.jsx)(bn.a,{variant:"danger",type:"submit",className:"btn-orange",children:"LOGIN"}),Object(fe.jsx)("span",{children:" o "}),Object(fe.jsx)(bn.a,{variant:"outline-warning",type:"submit",onClick:function(){e((function(e){var n=Object(pn.c)();Object(pn.e)(n,gn).then((function(n){var t=n.user;e(On(t.uid,t.displayName))})).catch((function(e){console.log(e)}))}))},children:Object(fe.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(fe.jsx)("hr",{}),Object(fe.jsxs)("span",{children:[" Don't have an account? ",Object(fe.jsx)(oe.b,{to:"/signIn",children:" Sign up"})]})]})]})]})})})}),fn=de.a.nav(K||(K=Object(le.a)(["\n    background: #fff;\n    height: 95px;\n    width:100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 0.9rem;\n    max-width: 600px;\n    margin: auto;\n    padding: 0 10px 0 80px ;\n    /* position: sticky; */\n    top:0;\n"]))),yn=de.a.div(F||(F=Object(le.a)(["\n    display: flex;\n    width:100%;\n    justify-content: space-between;\n    height: 80px;\n    padding: 30px;\n"]))),vn=Object(de.a)(oe.c)(X||(X=Object(le.a)(["\n    justify-self: flex-start;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n"]))),wn=de.a.div(D||(D=Object(le.a)(["\n    width: 85px;\n    height:65px;\n    background: url(",") 0 45% no-repeat;\n    background-size: 100% 100%;\n    cursor: pointer;\n\n"])),"data:image/png;base64,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"),kn=de.a.ul(M||(M=Object(le.a)(["\n    display: flex;\n    align-items: center;\n    list-style: none;\n    text-align: center;\n"]))),An=de.a.div(R||(R=Object(le.a)(["\n    height: 80px;\n    padding-bottom: 8px;\n\n"]))),Cn=de.a.div(W||(W=Object(le.a)(["\n    padding-top: 10px;\n    padding-right:20px;\n    font-size: 25px\n"]))),Bn=Object(de.a)(oe.c)(U||(U=Object(le.a)(["\n    color: #fa4a0c;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n"]))),Sn=(de.a.div(J||(J=Object(le.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-decoration: none;\n    padding: 8px 16px;\n    height: 100%;\n    width: 100%;\n    border: none;\n    outline: none;\n"]))),de.a.div(V||(V=Object(le.a)(["\npadding-top:30px;\nfont-size: 35px; \n\n \n"])))),Nn=function(){var e=Object(q.useState)(!1),n=Object(se.a)(e,2),t=n[0],a=n[1],c=function(){return a(!1)};return Object(fe.jsx)(fn,{children:Object(fe.jsxs)(yn,{children:[Object(fe.jsx)(vn,{to:"/home",children:Object(fe.jsx)(wn,{})}),Object(fe.jsxs)(kn,{onClick:function(){return a(!t)},click:t,children:[Object(fe.jsx)(Cn,{children:Object(fe.jsx)(Bn,{to:"/login",onClick:c,children:"Login"})}),Object(fe.jsx)(An,{children:Object(fe.jsx)(Bn,{to:"/cart",onClick:c,children:Object(fe.jsx)(Sn,{children:Object(fe.jsx)("i",{className:"fa fa-shopping-cart",style:{color:"coral"}})})})})]})]})})},In=function(e,n,t){return{type:te,payload:{email:e,password:n,name:t}}},Tn=function(){var e=Object(Y.b)(),n=sn({name:"",email:"",pass1:"",pass2:""}),t=Object(se.a)(n,3),a=t[0],c=t[1],r=t[2],o=a.name,i=a.email,s=a.pass1,l=a.pass2;return Object(fe.jsx)("div",{className:"container-card",children:Object(fe.jsx)(jn.a,{children:Object(fe.jsxs)(jn.a.Body,{children:[Object(fe.jsx)(jn.a.Title,{children:"Sign-In Form"}),Object(fe.jsxs)(un.a,{onSubmit:function(n){n.preventDefault(),s===l?e(function(e,n,t){return function(a){var c=Object(pn.c)();Object(pn.b)(c,e,n).then(function(){var e=Object(ke.a)(we.a.mark((function e(n){var r;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.user,e.next=3,Object(pn.f)(c.currentUser,{displayName:t});case 3:a(In(r.email,r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}}(i,s,o)):console.log("Passwords are not the same"),r()},children:[Object(fe.jsxs)(un.a.Group,{className:"mb-3",controlId:"formBasicName",children:[Object(fe.jsx)(un.a.Label,{children:"Name"}),Object(fe.jsx)(un.a.Control,{type:"text",placeholder:"Enter your name",name:"name",value:o,onChange:c})]}),Object(fe.jsxs)(un.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(fe.jsx)(un.a.Label,{children:"E-Mail"}),Object(fe.jsx)(un.a.Control,{type:"email",placeholder:"Enter your email",name:"email",value:i,onChange:c})]}),Object(fe.jsxs)(un.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(fe.jsx)(un.a.Label,{children:"Password"}),Object(fe.jsx)(un.a.Control,{type:"password",placeholder:"Enter your password",name:"pass1",value:s,onChange:c})]}),Object(fe.jsxs)(un.a.Group,{className:"mb-3",controlId:"formBasicRepitPassword",children:[Object(fe.jsx)(un.a.Label,{children:"Repeat password"}),Object(fe.jsx)(un.a.Control,{type:"password",placeholder:"Enter your password",name:"pass2",value:l,onChange:c})]}),Object(fe.jsxs)("div",{className:"container-botom",children:[Object(fe.jsx)(bn.a,{variant:"danger",type:"submit",className:"btn-orange",children:"Sign In"}),Object(fe.jsx)("hr",{}),Object(fe.jsxs)("span",{children:[" Already have an account? ",Object(fe.jsx)(oe.b,{to:"/login",children:" LOG IN"})]})]})]})]})})})};var En=function(){return Object(fe.jsxs)(oe.a,{children:[Object(fe.jsx)(Nn,{}),Object(fe.jsxs)(ie.d,{children:[Object(fe.jsx)(ie.b,{exact:!0,path:"/Guappjolotas/",element:Object(fe.jsx)(ie.a,{to:"/home"})}),Object(fe.jsx)(ie.b,{exact:!0,path:"/",element:Object(fe.jsx)(ie.a,{to:"/home"})}),Object(fe.jsx)(ie.b,{path:"/home",element:Object(fe.jsx)(dn,{})}),Object(fe.jsx)(ie.b,{path:"/login",element:Object(fe.jsx)(mn,{})}),Object(fe.jsx)(ie.b,{path:"/signIn",element:Object(fe.jsx)(Tn,{})}),Object(fe.jsx)(ie.b,{path:"/details/:id",element:Object(fe.jsx)(Re,{})}),Object(fe.jsx)(ie.b,{path:"/cart",element:Object(fe.jsx)(ye,{})})]})]})};z.a.render(Object(fe.jsx)(Y.a,{store:re,children:Object(fe.jsx)(En,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.dd8fce18.chunk.js.map