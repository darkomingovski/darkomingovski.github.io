(this.webpackJsonpteletrader_project=this.webpackJsonpteletrader_project||[]).push([[0],{29:function(e,c,a){},33:function(e,c,a){"use strict";a.r(c);var t=a(1),r=a(0),n=a.n(r),i=a(10),s=a.n(i),o=a(5),l=a(8),j=a(7),u=a(3);var b=a(19),d=Object(l.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoggedIn:!1,toggleProfile:!1,toggleAvatar:!1,currencies:[]},c=arguments.length>1?arguments[1]:void 0,a=c.type,t=c.payload;switch(a){case"SET_LOGIN":return Object(u.a)(Object(u.a)({},e),{},{isLoggedIn:t});case"TOGGLE_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{toggleProfile:t});case"TOGGLE_AVATAR":return Object(u.a)(Object(u.a)({},e),{},{toggleAvatar:t});case"CURRENCIES":return Object(u.a)(Object(u.a)({},e),{},{currencies:Object(u.a)(Object(u.a)({},e.currencies),t)});case"UPDATE_CURRENCIES":return Object(u.a)(Object(u.a)({},e),{},{currencies:Object(u.a)(Object(u.a)({},e.currencies),{},Object(j.a)({},t[0],Object(u.a)(Object(u.a)({},e.currencies[t[0]]),t[1])))});default:return e}}),Object(l.c)(Object(l.a)(b.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__({trace:!0,traceLimit:25}):function(e){return e})),O=(a(29),function(e){return{type:"TOGGLE_PROFILE",payload:e}}),_=function(e){return{type:"TOGGLE_AVATAR",payload:e}},p=function(e){return e.isLoggedIn},f=function(e){return e.toggleProfile},m=function(e){return e.toggleAvatar},h=function(e){return e.currencies},N=a(6),v=a.n(N),x=function(){var e=Object(o.b)(),c=Object(o.c)(m);return Object(t.jsxs)("div",{className:v.a.Profile,children:[c?Object(t.jsx)("div",{className:v.a.ProfileImage,children:Object(t.jsx)("img",{src:"https://picsum.photos/285/285",alt:"img"})}):Object(t.jsx)("div",{className:v.a.ProfileImage,children:Object(t.jsx)("img",{src:"https://api.hello-avatar.com/adorables/285/%3cYOUR_EMAIL",alt:"img"})}),Object(t.jsx)("div",{className:v.a.ProfileName,children:"John Doe"}),Object(t.jsx)("div",{className:v.a.ProfileData,children:"john.doe@gmail.com"}),Object(t.jsx)("div",{className:v.a.ProfileData,children:"johndoe.com"}),Object(t.jsx)("div",{className:v.a.Button,onClick:function(){e(_(!c))},children:"Toggle avatar"})]})},g=a(11),E=a(12),y=a(4),P=a.n(y),C=function(){var e=Object(o.b)(),c=Object(o.c)(f),a=Object(o.c)(p),n=Object(o.c)(h),i=function(c){e(function(e){return{type:"CURRENCIES",payload:Object(j.a)({},e.chanId,Object(u.a)({},e))}}(c))};return Object(r.useEffect)((function(){var c=new WebSocket("wss://api-pub.bitfinex.com/ws/2");return["tBTCUSD","tBTCEUR","tETHUSD","tETHEUR","tEOSUSD"].forEach((function(e){var a=JSON.stringify({event:"subscribe",channel:"ticker",symbol:e});setTimeout(c.onopen=function(){c.send(a)},300),c.onclose=function(){c.close()}})),c.onmessage=function(c){var a=JSON.parse(c.data);if("subscribed"===a.event){if(!n.findIndex((function(e){return e[1].pair===a.pair})))return;i(a)}a[1]&&function(c){e(function(e){return{type:"UPDATE_CURRENCIES",payload:e}}(c))}(a)},function(){c.close()}}),[]),Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{className:P.a.Navbar,children:[Object(t.jsx)("div",{className:P.a.Button,onClick:function(){e(O(!1))},children:Object(t.jsx)(g.a,{icon:E.a,size:"lg"})}),a&&Object(t.jsx)("div",{className:P.a.Button,onClick:function(){e(O(!0))},children:Object(t.jsx)(g.a,{icon:E.c,size:"lg"})}),!a&&Object(t.jsx)("div",{className:P.a.Button,onClick:function(){e({type:"SET_LOGIN",payload:!0})},children:Object(t.jsx)(g.a,{icon:E.b,size:"lg"})})]}),!c&&Object(t.jsxs)("div",{className:P.a.Container,children:[Object(t.jsxs)("div",{className:P.a.CurrencyBoard,children:[Object(t.jsx)("div",{className:P.a.Hash,children:"#"}),Object(t.jsx)("div",{className:P.a.Symbol,children:"Symbol"}),Object(t.jsx)("div",{className:P.a.Daily,children:"Daily change"}),Object(t.jsx)("div",{className:P.a.Volume,children:"Volume"}),Object(t.jsx)("div",{className:P.a.Price,children:"Last price"})]}),Object(t.jsx)("div",{className:P.a.CurrencyContainer,children:Object.entries(n).map((function(e){return Object(t.jsxs)("div",{className:P.a.CurrencyWrapper,children:[Object(t.jsx)("div",{className:P.a.Hash,children:e[0]}),Object(t.jsx)("div",{className:P.a.Symbol,children:e[1].pair}),Object(t.jsxs)("div",{className:P.a.Daily,children:[e[1][5],"%"]}),Object(t.jsx)("div",{className:P.a.Volume,children:e[1][7]}),Object(t.jsx)("div",{className:P.a.Price,children:e[1][6]})]},e[0])}))})]}),c&&Object(t.jsx)(x,{})]})};s.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(o.a,{store:d,children:Object(t.jsx)(C,{})})}),document.getElementById("root"))},4:function(e,c,a){e.exports={Navbar:"App_Navbar__3EPhN",Container:"App_Container__2Nb89",CurrencyBoard:"App_CurrencyBoard__VWlgB",CurrencyWrapper:"App_CurrencyWrapper__3hNI2",CurrencyContainer:"App_CurrencyContainer__1ub8q",Hash:"App_Hash__1Bh8i",Symbol:"App_Symbol__1Zax3",Daily:"App_Daily__3R8zo",Volume:"App_Volume__32N8j",Price:"App_Price__xo6zX",Button:"App_Button__S4tsB"}},6:function(e,c,a){e.exports={Profile:"Profile_Profile__3_KL_",ProfileImage:"Profile_ProfileImage__2XW-V",ProfileData:"Profile_ProfileData__PwaVc",ProfileName:"Profile_ProfileName__2CsI7",Button:"Profile_Button__2oyok"}}},[[33,1,2]]]);
//# sourceMappingURL=main.94c31a45.chunk.js.map