(this.webpackJsonpbreakingbad=this.webpackJsonpbreakingbad||[]).push([[0],{30:function(e,t,n){},49:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var i,c,a,r,s,o,j,d,b,h,l,u,O=n(1),p=n.n(O),g=n(20),m=n.n(g),x=(n(30),n(8)),f=n.n(x),v=n(21),k=n(5),w=n(22),y=n.n(w),S=(n(49),n.p+"static/media/logo.e6ecab44.png"),B=n(2),C=n(3),F=C.a.header(i||(i=Object(B.a)(["\n    height: 200px;\n"]))),L=C.a.img(c||(c=Object(B.a)(["\n    margin-top: 2em;\n    width: 200px;\n"]))),z=n(0),N=function(){return Object(z.jsx)(F,{children:Object(z.jsx)(L,{src:S,alt:"breaking-bad logo"})})},A=C.a.div(a||(a=Object(B.a)(["\n    cursor: pointer;\n    background-color: transparent;\n    height: 300px;\n    perspective: 1000px;\n"]))),E=C.a.div(r||(r=Object(B.a)(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    transition: transform 0.8s;\n    transform-style: preserve-3d;\n\n    &:hover {\n        transform: rotateY(180deg);\n    }\n"]))),I=C.a.div(s||(s=Object(B.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n"]))),J=C.a.div(o||(o=Object(B.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    background-color: #333;\n    color: white;\n    padding: 20px;\n    transform: rotateY(180deg);\n"]))),P=C.a.img(j||(j=Object(B.a)(["\n    width: 250px;\n    height: 300px;\n    object-fit: cover;\n"]))),Q=C.a.p(d||(d=Object(B.a)(["\n    font-size: 1.5rem;\n    margin-bottom: 1.5em;\n"]))),T=C.a.div(b||(b=Object(B.a)(["\n    display: flex;\n    justify-content: space-between;\n    width: 95%;\n    margin: 0 auto;\n    border-bottom: 1px solid white;\n    margin-bottom: .75em;\n"]))),Y=C.a.p(h||(h=Object(B.a)(["\n    font-size: 1rem;\n    margin-bottom: .75em;\n    \n"]))),D=function(e){var t=e.item;return Object(z.jsx)(A,{children:Object(z.jsxs)(E,{children:[Object(z.jsx)(I,{children:Object(z.jsx)(P,{src:t.img,alt:""})}),Object(z.jsxs)(J,{children:[Object(z.jsx)(Q,{children:t.name}),Object(z.jsxs)(T,{children:[Object(z.jsx)(Y,{children:Object(z.jsx)("strong",{children:"Actor Name:"})}),Object(z.jsx)(Y,{children:t.portrayed})]}),Object(z.jsxs)(T,{children:[Object(z.jsx)(Y,{children:Object(z.jsx)("strong",{children:"Nickname:"})}),Object(z.jsx)(Y,{children:t.nickname})]}),Object(z.jsxs)(T,{children:[Object(z.jsx)(Y,{children:Object(z.jsx)("strong",{children:"Birthday:"})}),Object(z.jsx)(Y,{children:t.birthday})]}),Object(z.jsxs)(T,{children:[Object(z.jsx)(Y,{children:Object(z.jsx)("strong",{children:"Status:"})}),Object(z.jsx)(Y,{children:t.status})]})]})]})})},M=C.a.div(l||(l=Object(B.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));\n    gap: 2rem;\n    padding-bottom: 3em;\n    margin: 2em;\n"]))),q=n.p+"static/media/spinner.11d9cde8.gif",G=function(){return Object(z.jsx)("div",{children:Object(z.jsx)("img",{src:q,alt:"loading",style:{width:"200px",margin:"auto",display:"block"}})})},H=function(e){var t=e.items;return e.isLoading?Object(z.jsx)(G,{}):Object(z.jsx)(M,{children:t.map((function(e){return Object(z.jsx)(D,{item:e})}))})},K=C.a.input(u||(u=Object(B.a)(["\n    margin: 2em;\n    padding: .5rem;\n    font-size: 1.3rem;\n    margin-top: 0;\n"]))),R=function(e){var t=e.placeholder,n=e.getQuery,i=Object(O.useState)(""),c=Object(k.a)(i,2),a=c[0],r=c[1];return Object(z.jsx)("div",{children:Object(z.jsx)(K,{type:"text",placeholder:t,value:a,onChange:function(e){return t=e.target.value,r(t),void n(t);var t},autofocus:!0})})};var U=function(){var e=Object(O.useState)([]),t=Object(k.a)(e,2),n=t[0],i=t[1],c=Object(O.useState)(""),a=Object(k.a)(c,2),r=a[0],s=a[1],o=Object(O.useState)(!0),j=Object(k.a)(o,2),d=j[0],b=j[1];return Object(O.useEffect)((function(){(function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()("https://www.breakingbadapi.com/api/characters?name=".concat(r));case 2:t=e.sent,console.log(t.data),i(t.data),b(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)(N,{}),Object(z.jsx)(R,{placeholder:"search characters",getQuery:function(e){return s(e)}}),Object(z.jsx)(H,{isLoading:d,items:n}),Object(z.jsx)("h1",{children:"Breaking Bad"})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};m.a.render(Object(z.jsx)(p.a.StrictMode,{children:Object(z.jsx)(U,{})}),document.getElementById("root")),V()}},[[52,1,2]]]);
//# sourceMappingURL=main.6ac384da.chunk.js.map