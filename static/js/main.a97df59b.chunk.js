(this.webpackJsonpewce=this.webpackJsonpewce||[]).push([[0],{81:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),r=t(27),i=t.n(r),a=t(34),s=t(15),l=t(12),d=t(120),u=t(118),h=t(116),j=t(117),f=t(2);var b=function(){var e=Object(o.useState)(),n=Object(l.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(),i=Object(l.a)(r,2),a=i[0],b=i[1],g=Object(o.useState)(!1),w=Object(l.a)(g,2),v=w[0],p=w[1],x=Object(o.useState)(""),O=Object(l.a)(x,2),m=O[0],k=O[1],S=Object(s.f)();Object(o.useEffect)((function(){c(""),b(""),p(!1),k("")}),[]);var y=function(e){"test"===t&&"password"===a?(k("Login Success"),p(!0),S.push("/home")):k(""===t?"*** Username required ***":""===a?"*** Password required ***":"Incorrect Username or Password")};return Object(f.jsx)(d.a,{sx:{textAlign:"center"},children:Object(f.jsxs)(u.a,{container:!0,spacing:2,children:[Object(f.jsx)(u.a,{item:!0,xs:12,children:Object(f.jsx)(h.a,{id:"username_login",label:"Username",helperText:"Enter test",onChange:function(e){c(e.target.value),k("")},onKeyPress:function(e){"Enter"===e.key&&y()}})}),Object(f.jsx)(u.a,{item:!0,xs:12,children:Object(f.jsx)(h.a,{id:"password_login",label:"Password",helperText:"Enter password",onChange:function(e){b(e.target.value),k("")},type:"password",onKeyPress:function(e){"Enter"===e.key&&y()}})}),Object(f.jsx)(u.a,{item:!0,xs:12,children:Object(f.jsx)(j.a,{onClick:y,variant:"contained",children:"Login"})}),Object(f.jsx)(u.a,{item:!0,xs:12,children:v?Object(f.jsx)("div",{}):Object(f.jsx)("div",{children:m})})]})})};var g=function(){return Object(f.jsx)("div",{children:"Successfully login"})};var w=function(){return Object(f.jsx)(a.a,{children:Object(f.jsxs)(s.c,{children:[Object(f.jsx)(s.a,{exact:!0,path:"/ewce",component:b}),Object(f.jsx)(s.a,{exact:!0,path:"/home",component:g})]})})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,121)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),o(e),c(e),r(e),i(e)}))},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(a.a,{children:Object(f.jsx)(w,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ewce",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/ewce","/service-worker.js");p?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):x(n,e)}))}}(),v()}},[[81,1,2]]]);
//# sourceMappingURL=main.a97df59b.chunk.js.map