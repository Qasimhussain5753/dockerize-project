_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[82],{FepX:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin-cover",function(){return a("pXxe")}])},IN3C:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var r=a("q1tI"),n=a.n(r),o=a("iuhU"),i=a("R/WZ"),s=a("wb2y"),c=a("HALo"),l=a("dhJC"),u=a("cpVT"),m=a("lO0E"),p=a("kbOB"),d=n.a.createElement,h=Object(i.a)((function(e){return{toolbar:Object(u.a)({maxWidth:e.layout.contentWidth,width:"100%",margin:"0 auto",padding:e.spacing(0,2)},e.breakpoints.up("sm"),{padding:e.spacing(0,8)}),logoContainer:Object(u.a)({width:100,height:28},e.breakpoints.up("md"),{width:120,height:32}),logoImage:{width:"100%",height:"100%"}}})),g=function(e){var t=e.themeMode,a=e.className,r=Object(l.a)(e,["themeMode","className"]),n=h();return d(m.a,Object(c.a)({className:Object(o.a)(n.toolbar,a)},r),d("div",{className:n.logoContainer},d("a",{href:"/",title:"thefront"},d(p.d,{className:n.logoImage,src:"light"===t?"https://assets.maccarianagency.com/the-front/logos/logo.svg":"https://assets.maccarianagency.com/the-front/logos/logo-negative.svg",alt:"thefront",lazy:!1}))))},f=n.a.createElement,b=Object(i.a)((function(){return{root:{},content:{height:"100%"}}})),v=function(e){var t=e.themeMode,a=e.children,r=e.className,n=b();return f("div",{className:Object(o.a)(n.root,r)},f(g,{themeMode:t}),f(s.a,null),f("main",{className:n.content},a))}},pXxe:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),o=a("cpVT"),i=a("R/WZ"),s=a("xvhg"),c=a("tRbT"),l=a("r9w1"),u=a("ofer"),m=a("Z3vd"),p=a("a1gY"),d=a.n(p),h=a("kbOB"),g=n.a.createElement;function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v=Object(i.a)((function(e){return{root:{width:"100%"}}})),w={email:{presence:{allowEmpty:!1,message:"is required"},email:!0,length:{maximum:300}},password:{presence:{allowEmpty:!1,message:"is required"},length:{minimum:8}}},O=function(){var e=v(),t=n.a.useState({isValid:!1,values:{},touched:{},errors:{}}),a=Object(s.a)(t,2),r=a[0],i=a[1];n.a.useEffect((function(){var e=d()(r.values,w);i((function(t){return b(b({},t),{},{isValid:!e,errors:e||{}})}))}),[r.values]);var p=function(e){e.persist(),i((function(t){return b(b({},t),{},{values:b(b({},t.values),{},Object(o.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:b(b({},t.touched),{},Object(o.a)({},e.target.name,!0))})}))},f=function(e){return!(!r.touched[e]||!r.errors[e])};return g("div",{className:e.root},g("form",{name:"password-reset-form",method:"post",onSubmit:function(e){e.preventDefault(),r.isValid&&window.location.replace("/"),i((function(e){return b(b({},e),{},{touched:b(b({},e.touched),e.errors)})}))}},g(c.a,{container:!0,spacing:2},g(c.a,{item:!0,xs:12},g(l.a,{placeholder:"E-mail",label:"E-mail *",variant:"outlined",size:"medium",name:"email",fullWidth:!0,helperText:f("email")?r.errors.email[0]:null,error:f("email"),onChange:p,type:"email",value:r.values.email||""})),g(c.a,{item:!0,xs:12},g(l.a,{placeholder:"Password",label:"Password *",variant:"outlined",size:"medium",name:"password",fullWidth:!0,helperText:f("password")?r.errors.password[0]:null,error:f("password"),onChange:p,type:"password",value:r.values.password||""})),g(c.a,{item:!0,xs:12},g("i",null,g(u.a,{variant:"subtitle2"},"Fields that are marked with * sign are required."))),g(c.a,{item:!0,xs:12},g(m.a,{size:"large",variant:"contained",type:"submit",color:"primary",fullWidth:!0},"Send")),g(c.a,{item:!0,xs:12},g(u.a,{variant:"subtitle1",color:"textSecondary",align:"center"},"Forgot your password?"," ",g(h.e,{title:"Reset password",href:"/password-reset-cover"}))))))},y=a("Jc4N"),j=a("41Hj"),x=n.a.createElement,N=Object(i.a)((function(e){return{root:{"& .hero-shaped":{borderBottom:0},"& .hero-shaped__wrapper":Object(o.a)({},e.breakpoints.up("md"),{minHeight:"calc(100vh - ".concat(e.mixins.toolbar["@media (min-width:600px)"].minHeight,"px)")})},formContainer:Object(o.a)({height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},e.breakpoints.down("sm"),{maxWidth:500,margin:"0 auto"}),image:{objectFit:"cover"}}})),E=function(){var e=N();return x("div",{className:e.root},x(j.p,{leftSide:x("div",{className:e.formContainer},x(y.e,{title:"Sign in",subtitle:x("span",null,"Don\u2019t have an account?"," ",x(h.e,{title:"Sign up.",href:"/signup-cover",typographyProps:{variant:"h6"}})),titleProps:{variant:"h3"}}),x(O,null)),rightSide:x(h.d,{src:"https://assets.maccarianagency.com/the-front/photos/account/cover-1.png",className:e.image,lazy:!1})}))},P=a("IN3C"),_=a("69Y9"),k=n.a.createElement;t.default=function(){return k(_.a,{component:E,layout:P.a})}}},[["FepX",0,1,2,4,3]]]);