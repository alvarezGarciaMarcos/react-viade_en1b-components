(this.webpackJsonpviade_0=this.webpackJsonpviade_0||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),l=a(35),i=a(22),u=(a(75),a(113)),s=a(117),d=a(112),m=a(47),h=(a(76),a(63)),p=r.a.memo((function(e){var t=[{id:0,text:"My routes",href:"/routes",icon:r.a.createElement(m.b,{className:"icon"}),testId:" navbar-my-routes"},{id:1,text:"Upload route",href:"/routes/upload",icon:r.a.createElement(m.a,{className:"icon"}),testId:"navbar-upload-route"}];return r.a.createElement(u.a,{className:"bg-light",fixed:"top",bg:"light",expand:"lg"},r.a.createElement(u.a.Brand,{"data-testid":"navbar-brand",href:"/dashboard"},e.brandName),r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{className:"justify-content-end",id:"basic-navbar-nav"},r.a.createElement(s.a,{className:"justify-content-end",activeKey:"/home"},t.map((function(t){return r.a.createElement("span",{key:t.id},r.a.createElement(s.a.Link,{"data-testid":t.testId,key:t.id,className:(a=t.href,e.location.pathname===a?"nav-link active":"nav-link"),href:t.href},t.icon,t.text));var a})),r.a.createElement(d.a,{variant:"secondary",drop:"left",title:r.a.createElement(m.c,{className:"icon"})},[{id:0,text:"My Profile",href:"/profile",testId:"navbar-my-profile"},{id:1,text:"Log Out",href:"/",testId:"navbar-logout"}].map((function(e){return r.a.createElement(d.a.Item,{"data-testid":e.testId,key:e.id,href:e.href},1===e.id?r.a.createElement(h.a,null,e.text):e.text)}))))))})),f=p=Object(i.g)(p);function E(){return r.a.createElement("div",null)}var b=a(118),v=a(111);a(101);var g=function(e){return r.a.createElement("div",{id:"container"},r.a.createElement("div",{className:"background-image"}),r.a.createElement("div",{className:"background-div"}),r.a.createElement("h1",{"data-testid":"login-header"},"Login"),r.a.createElement(b.a,{popup:"https://solid.github.io/solid-auth-client/dist/popup.html",login:"Login here!",logout:"Log me out"}),r.a.createElement(v.a,null,r.a.createElement(i.a,{to:"/dashboard"})))},y=a(115),k=a(114),O=(a(102),function(){return r.a.createElement("div",{id:"mapContainer",className:"leaflet-container"},r.a.createElement(y.a,{zoomControl:!1,center:[43.3605977,-5.8448989],zoom:15},r.a.createElement(k.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})))}),C=(a(103),a(116));a(104);var N=function(e){var t=e.route,a=e.onClickHandle;return r.a.createElement(C.a,{id:e.id,onClick:function(){return a(t)}},r.a.createElement("div",{id:"blurryBackground"}),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,null,t.name),r.a.createElement(C.a.Subtitle,null,t.author)))},x=(a(105),r.a.memo((function(e){var t=e.routes,a=e.onClick,n=e.currentMap,o=t.map((function(e){return n?r.a.createElement(N,{key:e.id,id:e.id===n.id?"active":"",onClickHandle:a,route:e}):r.a.createElement(N,{key:e.id,onClickHandle:a,route:e})}));return r.a.createElement("div",{id:"routeList"},o)}))),R=a(44),j=a(42),w=a.n(j),F=a(20),H=a.n(F);var I=Object(R.b)((function(e){return{routes:e.route.routes,selectedRoute:e.route.selectedRoute}}),(function(e){return{showRoute:function(t){return e(function(e){return function(t,a){a().route.selectedRoute=e,console.log(a()),t({type:"SHOW_ROUTE",route:e})}}(t))}}}))((function(e){var t=e.routes,a=e.selectedRoute,n=e.showRoute;(function(){var e;return w.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.awrap(H.a.currentSession());case 2:if(!(e=t.sent)){t.next=5;break}return t.abrupt("return",e.webId);case 5:return t.abrupt("return",e);case 6:case"end":return t.stop()}}))})().then((function(e){return console.log(e)}));var o=null==a?r.a.createElement("div",{id:"titleHolder"},r.a.createElement("h1",null,"Routes List")):r.a.createElement("div",{id:"titleHolder"},r.a.createElement("h1",null,a.name)," ",r.a.createElement("p",null," by ",a.author));return r.a.createElement("div",{className:"dashboard container"},o,r.a.createElement(x,{currentMap:a,routes:t,onClick:n}),r.a.createElement(O,null))})),_={green:{"--color-secondary":"white","--color-primary":"#008080"},red:{"--color-secondary":"white","--color-primary":"#E85165"},purple:{"--color-secondary":"white","--color-primary":"#A875FF"},yellow:{"--color-secondary":"black","--color-primary":"#FFEE5E"},pink:{"--color-secondary":"black","--color-primary":"#FF65C7"},lightBlue:{"--color-secondary":"black","--color-primary":"#82A2FF"},lightGreen:{"--color-secondary":"black","--color-primary":"#BDF600"},lightOrange:{"--color-secondary":"white","--color-primary":"#FF8E54"}},L=Object(n.createContext)(_.lightOrange),M=a(45),S=function(e){var t=Object(n.useContext)(L);Object(n.useEffect)((function(){Object.keys(t).map((function(e){var a=t[e];return document.documentElement.style.setProperty(e,a)}))}));var a=!0===Object(M.a)()?r.a.createElement(f,{brandName:"Viade_en1b"}):null;return r.a.createElement(l.a,{basename:"/react-viade_en1b-components"},r.a.createElement("div",{className:"App"},a,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/react-viade_en1b-components/",render:function(e){return r.a.createElement(g,e)}}),r.a.createElement(i.b,{path:"/react-viade_en1b-components/profile",render:function(){return r.a.createElement(E,e)}}),r.a.createElement(i.b,{exact:!0,path:"/react-viade_en1b-components/dashboard",render:function(){return r.a.createElement(I,e)}}))))},B=(a(107),a(26)),T=a(33),P={userWebId:null},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN":return console.log("user loggedin",t.userWebId),Object(T.a)({},e);case"LOG_OUT":return console.log("user loggedOUT"),Object(T.a)({},e);default:return e}},W={routes:[{id:0,name:"Hiking Naranco ",author:"C\xe9sar"},{id:1,name:"Hiking Ruta de las Xanas",author:"Marcos"},{id:2,name:"Senda del Oso",author:"C\xe9sar"},{id:3,name:"Hiking Naranco",author:"C\xe9sar"},{id:4,name:"Senda del Oso",author:"C\xe9sar"},{id:5,name:"Ruta de las Xanas",author:"Ra\xfal"},{id:6,name:"Pista Finaldesa",author:"Marcos"},{id:7,name:"Hiking Naranco ",author:"C\xe9sar"},{id:8,name:"Hiking Ruta de las Xanas",author:"Marcos"},{id:9,name:"Senda del Oso",author:"C\xe9sar"},{id:10,name:"Hiking Naranco",author:"C\xe9sar"},{id:11,name:"Senda del Oso",author:"C\xe9sar"},{id:12,name:"Ruta de las Xanas",author:"Ra\xfal"},{id:13,name:"Pista Finaldesa",author:"Marcos"}],selectedRoute:null},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_ROUTE":return console.log("routed shown",t.route),Object(T.a)({},e);default:return e}},z=Object(B.c)({auth:U,route:X}),A=a(68),G=Object(B.d)(z,Object(B.a)(A.a));c.a.render(r.a.createElement(L.Provider,{value:_.purple},r.a.createElement(R.a,{store:G},r.a.createElement(S,null))),document.getElementById("root"))},70:function(e,t,a){e.exports=a(108)},75:function(e,t,a){},76:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.936af265.chunk.js.map