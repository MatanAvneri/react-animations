(this.webpackJsonpreact_animation=this.webpackJsonpreact_animation||[]).push([[0],{11:function(e,t,n){e.exports={TransitionGroup:"TransitionGroup_TransitionGroup__2RL-U",TransitionGroup__modal:"TransitionGroup_TransitionGroup__modal__2iwhE","Modal--enter":"TransitionGroup_Modal--enter__1ywxW","Modal--enter-active":"TransitionGroup_Modal--enter-active__2p7ti","Modal--exit":"TransitionGroup_Modal--exit__11S4r","Modal--exit-active":"TransitionGroup_Modal--exit-active__PABbH"}},14:function(e,t,n){e.exports={unstyled:"style_unstyled__yL-PY",sidebar:"style_sidebar__1BMGg",swing:"style_swing__1SYFR","main-nav":"style_main-nav__bZVlY","list-hover-slide":"style_list-hover-slide__1YC9y"}},22:function(e,t,n){e.exports={ReactSpring:"ReactSpring_ReactSpring__3nxcz",ReactSpring__modal:"ReactSpring_ReactSpring__modal__3b8cM"}},27:function(e,t,n){e.exports={Native:"Native_Native__23ntv",move:"Native_move__3mRsV"}},34:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(13),r=n.n(a),s=(n(34),n(17)),o=n(24),j=n(4),l=n(8),b=n(46),d=n(25),h=n.n(d),u=n(14),x=n.n(u),O=n(1),_=function(){return Object(O.jsxs)("header",{className:x.a.sidebar,role:"banner",children:[Object(O.jsx)("h1",{children:"React Animations"}),Object(O.jsx)("div",{className:x.a["nav-wrap"],children:Object(O.jsx)("nav",{className:x.a["main-nav"],role:"navigation",children:Object(O.jsxs)("ul",{className:h()(x.a.unstyled,x.a["list-hover-slide"]),children:[Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"#native",children:"Native"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"#transition-group",children:"Transition Group"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"#react-spring",children:"React Spring"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"#greensock",children:"GreenSock"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"#threejs",children:"Threejs"})})]})})})]})},p=n(27),m=n.n(p),v=function(){return Object(O.jsx)("div",{className:m.a.Native})},g=n(16),f=n(11),N=n.n(f),S=function(){return Object(O.jsx)("div",{className:N.a.TransitionGroup__modal,children:"Lorem ipsum dolor sit amet"})},T=function(){var e=Object(i.useState)(!1),t=Object(g.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!0),r=Object(g.a)(a,2),s=r[0],o=r[1];return Object(O.jsxs)("div",{className:N.a.TransitionGroup,children:[Object(O.jsx)("input",{id:"transition-check",checked:s,onChange:function(){return o(!s)},type:"checkbox"}),Object(O.jsx)("label",{htmlFor:"transition-check",children:"With Transition Group"}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{onClick:function(){return c(!n)},children:"Open Modal"}),Object(O.jsx)("br",{}),!s&&n&&Object(O.jsx)(S,{}),s&&Object(O.jsx)(b.a,{timeout:300,in:n,classNames:{enter:N.a["Modal--enter"],enterActive:N.a["Modal--enter-active"],exit:N.a["Modal--exit"],exitActive:N.a["Modal--exit-active"]},unmountOnExit:!0,children:Object(O.jsx)(S,{})}),Object(O.jsx)("br",{}),"bottom content"]})},G=n(23),M=n(22),y=n.n(M),R=function(){return Object(O.jsx)("div",{className:y.a.ReactSpring__modal,children:"Lorem ipsum dolor sit amet"})},k=function(){var e=Object(i.useState)(!1),t=Object(g.a)(e,2),n=t[0],c=t[1],a=Object(G.b)({from:{height:0,opacity:0,transform:"scale(0);translateX(0)"},to:{height:n?90:0,opacity:n?1:0,transform:"scale(".concat(n?1:0,");translateX(0)")},config:{duration:300}});return console.log("props",a),Object(O.jsxs)("div",{className:y.a.ReactSpring,children:[Object(O.jsx)("button",{onClick:function(){return c(!n)},children:"Open Modal"}),Object(O.jsx)("br",{}),Object(O.jsx)(G.a.div,{style:Object(s.a)({},a),children:Object(O.jsx)(R,{})}),"bottom content"]})},w=function(){return Object(O.jsx)("div",{children:"GreenSock"})},C=function(){return Object(O.jsx)("div",{children:"Three JS"})},A=(n(44),function(e){var t=e.hash,n=Object(o.a)(e,["hash"]);return Object(O.jsx)(j.a,{render:function(e){var i=e.location.hash==="#".concat(t);return Object(O.jsx)(b.a,{in:i,timeout:300,classNames:"page",unmountOnExit:!0,children:Object(O.jsx)("div",{className:"page",children:i&&Object(O.jsx)(j.a,Object(s.a)({},n))})})}})});var F=function(){return Object(O.jsx)(l.a,{basename:"react-animations",children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(_,{}),Object(O.jsxs)("div",{className:"App__content",children:[Object(O.jsx)(A,{hash:"native",children:Object(O.jsx)(v,{})}),Object(O.jsx)(A,{hash:"transition-group",children:Object(O.jsx)(T,{})}),Object(O.jsx)(A,{hash:"react-spring",children:Object(O.jsx)(k,{})}),Object(O.jsx)(A,{hash:"greensock",children:Object(O.jsx)(w,{})}),Object(O.jsx)(A,{hash:"threejs",children:Object(O.jsx)(C,{})})]})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root")),L()}},[[45,1,2]]]);
//# sourceMappingURL=main.183816e4.chunk.js.map