(this["webpackJsonpfriday-project"]=this["webpackJsonpfriday-project"]||[]).push([[0],{17:function(e,n,t){e.exports={superInput:"SuperInputText_superInput__2hGi2",errorInput:"SuperInputText_errorInput__6Ytxa",error:"SuperInputText_error__3foco"}},21:function(e,n,t){e.exports={checkbox:"SuperCheckbox_checkbox__35R1J",spanClassName:"SuperCheckbox_spanClassName__358u0"}},22:function(e,n,t){e.exports={default:"SuperButton_default__gXJTT",red:"SuperButton_red__2IxsO"}},35:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);t(0);var c=t(16),r=t.n(c),a=(t(35),t(4)),s=t(15),j=t(5),o=t(3),i=t(1);var b,u,x,l,d,O,h,p=function(){return Object(i.jsx)("h1",{style:{textAlign:"center",fontSize:"50px"},children:"404: PAGE NOT FOUND"})},f=j.a.div(b||(b=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n"]))),g=function(){return Object(i.jsx)(f,{children:Object(i.jsx)("h3",{children:"Login page"})})},y=j.a.div(u||(u=Object(a.a)(["\n      display: flex;\n      justify-content: center;\n    "]))),v=function(){return Object(i.jsx)(y,{children:Object(i.jsx)("h3",{children:"Profile page"})})},C=j.a.div(x||(x=Object(a.a)(["\n      display: flex;\n      justify-content: center;\n    "]))),m=function(){return Object(i.jsx)(C,{children:Object(i.jsx)("h3",{children:"Registration page"})})},N=j.a.div(l||(l=Object(a.a)(["\n      display: flex;\n      justify-content: center;\n    "]))),_=function(){return Object(i.jsx)(N,{children:Object(i.jsx)("h3",{children:"Recovery page"})})},T=j.a.div(d||(d=Object(a.a)(["\n      display: flex;\n      justify-content: center;\n    "]))),k=function(){return Object(i.jsx)(T,{children:Object(i.jsx)("h3",{children:"NewPassword page"})})},P=t(13),w=t(14),I=t(17),S=t.n(I),E=function(e){e.type;var n=e.onChange,t=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=(e.className,e.spanClassName),j=Object(w.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(S.a.error," ").concat(s||""),b="".concat(a?S.a.errorInput:S.a.superInput);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",Object(P.a)({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),"Enter"===e.key&&r&&r()},className:b},j)),a&&Object(i.jsx)("span",{className:o,children:a})]})},F=t(21),R=t.n(F),B=function(e){e.type;var n=e.onChange,t=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(w.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(R.a.checkbox," ").concat(c||"");return Object(i.jsxs)("label",{children:[Object(i.jsx)("input",Object(P.a)({type:"checkbox",onChange:function(e){n&&n(e),t&&t(e.currentTarget.checked)},className:s},a)),r&&Object(i.jsx)("span",{className:R.a.spanClassName,children:r})]})},J=t(22),L=t.n(J),K=function(e){var n=e.red,t=e.className,c=Object(w.a)(e,["red","className"]),r="".concat(n?L.a.red:L.a.default," ").concat(t);return Object(i.jsx)("button",Object(P.a)({className:r},c))},A=j.a.div(O||(O=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),D=j.a.div(h||(h=Object(a.a)(["\n"]))),G=function(){return Object(i.jsxs)(A,{children:[Object(i.jsx)("h3",{children:"Test Page"}),Object(i.jsxs)(D,{children:[Object(i.jsx)(E,{}),Object(i.jsx)(B,{}),Object(i.jsx)(K,{})]})]})},z="/login",U="/registration",X="/recoveryPassword",Y="/newPassword",q="/profile",H="/test";var M,Q,V,W=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(o.d,{children:[Object(i.jsx)(o.b,{path:"/",exact:!0,render:function(){return Object(i.jsx)(v,{})}}),Object(i.jsx)(o.b,{path:z,exact:!0,render:function(){return Object(i.jsx)(g,{})}}),Object(i.jsx)(o.b,{path:U,exact:!0,render:function(){return Object(i.jsx)(m,{})}}),Object(i.jsx)(o.b,{path:X,exact:!0,render:function(){return Object(i.jsx)(_,{})}}),Object(i.jsx)(o.b,{path:Y,exact:!0,render:function(){return Object(i.jsx)(k,{})}}),Object(i.jsx)(o.b,{path:q,exact:!0,render:function(){return Object(i.jsx)(v,{})}}),Object(i.jsx)(o.b,{path:H,exact:!0,render:function(){return Object(i.jsx)(G,{})}}),Object(i.jsx)(o.b,{path:"/404",render:function(){return Object(i.jsx)(p,{})}}),Object(i.jsx)(o.a,{from:"*",to:"/404"})]})})},Z=j.a.div(M||(M=Object(a.a)(["\n  height: 80px;\n  background-color: #9ac4ce;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n"]))),$=j.a.nav(Q||(Q=Object(a.a)(["\n"]))),ee=Object(j.a)(s.b)(V||(V=Object(a.a)(["\n  color: black;\n  padding: 10px;\n  text-decoration: none;\n\n  &.active {\n    color: indianred;\n  }\n\n  &:hover {\n    color: white\n  }\n;\n"]))),ne=function(){return Object(i.jsx)(Z,{children:Object(i.jsxs)($,{children:[Object(i.jsx)(ee,{to:q,children:"Profile"}),Object(i.jsx)(ee,{to:z,children:"Login"}),Object(i.jsx)(ee,{to:U,children:"Registration"}),Object(i.jsx)(ee,{to:X,children:"Recovery Password"}),Object(i.jsx)(ee,{to:Y,children:"Change Password"}),Object(i.jsx)(ee,{to:H,children:"TEST page"})]})})};var te=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(ne,{}),Object(i.jsx)(W,{})]})},ce=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),r(e),a(e),s(e)}))},re=t(30),ae=t(18),se=t(29),je={},oe=Object(ae.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je;return e}}),ie=Object(ae.c)(oe,Object(ae.a)(se.a));r.a.render(Object(i.jsx)(s.a,{children:Object(i.jsx)(re.a,{store:ie,children:Object(i.jsx)(te,{})})}),document.getElementById("root")),ce()}},[[43,1,2]]]);
//# sourceMappingURL=main.e3e7ddd5.chunk.js.map