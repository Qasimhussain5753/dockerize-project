_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[70],{"7SZd":function(t,e,a){"use strict";var o=a("wx14"),i=a("Ff2n"),s=a("q1tI"),n=(a("17x9"),a("iuhU")),r=a("ofer"),c=a("H2TA"),l=a("4hqb"),p=s.forwardRef((function(t,e){var a=t.children,c=t.classes,p=t.className,u=t.component,m=void 0===u?"div":u,d=t.disablePointerEvents,g=void 0!==d&&d,h=t.disableTypography,b=void 0!==h&&h,f=t.position,y=t.variant,v=Object(i.a)(t,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),x=Object(l.b)()||{},j=y;return y&&x.variant,x&&!j&&(j=x.variant),s.createElement(l.a.Provider,{value:null},s.createElement(m,Object(o.a)({className:Object(n.a)(c.root,p,g&&c.disablePointerEvents,x.hiddenLabel&&c.hiddenLabel,"filled"===j&&c.filled,{start:c.positionStart,end:c.positionEnd}[f],"dense"===x.margin&&c.marginDense),ref:e},v),"string"!==typeof a||b?a:s.createElement(r.a,{color:"textSecondary"},a)))}));e.a=Object(c.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(p)},ILX5:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio-grid",function(){return a("PG+G")}])},"PG+G":function(t,e,a){"use strict";a.r(e);var o=a("q1tI"),i=a.n(o),s=a("41Hj"),n=a("HALo"),r=a("dhJC"),c=a("cpVT"),l=a("iuhU"),p=a("R/WZ"),u=a("ADg1"),m=a("KmP9"),d=a("7SZd"),g=a("TTf+"),h=a("Z3vd"),b=a("kbOB"),f=a("Jc4N"),y=i.a.createElement,v=Object(p.a)((function(t){return{pagePaddingTop:Object(c.a)({paddingTop:t.spacing(3)},t.breakpoints.up("md"),{paddingTop:t.spacing(5)}),sectionContainer:{backgroundColor:t.palette.primary.dark,borderRadius:"0 0 100% 0"},textWhite:{color:"white"},fontWeightBold:{fontWeight:"bold"},sectionNoPaddingTop:{paddingTop:0},searchInputContainer:Object(c.a)({background:t.palette.background.paper,padding:t.spacing(2),boxShadow:"0 4px 14px 0 rgba(0, 0, 0, 0.11)",borderRadius:t.spacing(1),width:"100%",height:"100%",display:"flex",alignItems:"center","& .MuiOutlinedInput-notchedOutline":{border:"0 !important"},"& .MuiInputAdornment-positionStart":{marginRight:t.spacing(2)},"& .MuiOutlinedInput-adornedStart":{paddingLeft:0},"& .MuiOutlinedInput-input":{padding:0}},t.breakpoints.down("sm"),{padding:t.spacing(1)}),searchButton:Object(c.a)({maxHeight:45,minWidth:135},t.breakpoints.down("sm"),{minWidth:"auto"})}})),x=function(t){var e=t.className,a=Object(r.a)(t,["className"]),o=v();return y("div",Object(n.a)({className:e},a),y("div",{className:o.sectionContainer},y(s.u,{narrow:!0},y(i.a.Fragment,null,y(f.e,{title:"Our Work",subtitle:"We design & build products, tools, apps, and sites for companies trying to do great things for our planet.",titleProps:{className:Object(l.a)(o.textWhite,o.fontWeightBold),variant:"h2"},subtitleProps:{className:o.textWhite},"data-aos":"fade-up"}),y("div",{className:o.searchInputContainer,"data-aos":"fade-up"},y(u.a,{fullWidth:!0,variant:"outlined"},y(m.a,{startAdornment:y(d.a,{position:"start"},y(b.b,{fontIconClass:"fas fa-search",fontIconColor:g.a.blueGrey[900]})),placeholder:"Search for the article"})),y(h.a,{color:"primary",variant:"contained",size:"large",className:o.searchButton},"Search"))))))},j=a("ofer"),N=i.a.createElement,O=Object(p.a)((function(t){var e,a;return{folioItem:(e={position:"relative",overflow:"hidden",margin:t.spacing(1,0),boxShadow:"0 1.5rem 4rem rgba(22,28,45,.05)",borderRadius:t.spacing(2)},Object(c.a)(e,t.breakpoints.up("sm"),{margin:t.spacing(2)}),Object(c.a)(e,"&:last-child",Object(c.a)({},t.breakpoints.up("md"),{marginBottom:0})),e),image:{objectFit:"cover",height:450},folioInfoWrapper:{padding:t.spacing(4,2)},folioTitle:{fontWeight:"bold"},folioSubtitle:{textTransform:"capitalize",margin:t.spacing(1,0)},grid:(a={display:"flex",flexDirection:"column"},Object(c.a)(a,t.breakpoints.up("sm"),{maxWidth:500,margin:"0 auto"}),Object(c.a)(a,t.breakpoints.up("md"),{flexDirection:"row",maxWidth:"100%"}),a),gridWrapper:{display:"flex",flexDirection:"column"}}})),w=function(t){var e=t.data,a=t.className,o=Object(r.a)(t,["data","className"]),i=O(),s=[e.slice(0,4),e.slice(4,8),e.slice(8)];return N("div",Object(n.a)({className:a},o),N("div",{className:i.grid},s.map((function(t,e){return N("div",{className:i.gridWrapper,key:e},t.map((function(t,e){return N("div",{className:i.folioItem,key:e,"data-aos":"fade-up"},N(b.d,{src:t.cover,alt:t.title,className:Object(l.a)("folio__image",i.image),lazy:!1}),N("div",{className:Object(l.a)("folio__info-wrapper",i.folioInfoWrapper)},N("div",null,N(j.a,{variant:"h5",className:i.folioTitle,color:"textPrimary"},t.title),N(j.a,{variant:"body1",className:i.folioSubtitle,color:"textSecondary"},t.subtitle))))})))}))))},S=a("tRbT"),T=i.a.createElement,k=Object(p.a)((function(t){return{root:{width:"100%"},noBg:{background:"transparent"},copy:Object(c.a)({textAlign:"center",maxWidth:700,margin:"0 auto",padding:t.spacing(2,2,0,2)},t.breakpoints.up("md"),{padding:t.spacing(4,2,0,2)}),title:{marginBottom:t.spacing(2)},logoImg:{maxWidth:100},fontWeight700:{fontWeight:700}}})),I=function(t){var e=t.data,a=t.className,o=Object(r.a)(t,["data","className"]),i=k();return T("div",Object(n.a)({className:Object(l.a)(i.root,a),"data-aos":"fade-up"},o),T("div",{className:i.copy},T(f.e,{title:"Our work has been featured",subtitle:"We design & build products, tools, apps, and sites for companies trying to do great things for our planet.","data-aos":"fade-up",align:"center"}),T(S.a,{container:!0,justify:"space-between"},e.map((function(t,e){return T(S.a,{item:!0,xs:6,sm:2,key:e},T(b.d,{src:t.logo,alt:t.name,className:i.logoImg,lazy:!1}))})))))},P=a("tr08"),W=a("lopY"),E=a("eD//"),q=a("tVbE"),D=a("SLcR"),_=a("469l"),R=a("IsqK"),C=a("r9w1"),B=i.a.createElement,L=Object(p.a)((function(t){var e;return{list:Object(c.a)({display:"flex",flexDirection:"column"},t.breakpoints.up("md"),{flexDirection:"row"}),listItemText:{display:"flex",flexDirection:"column",flex:"0 0 auto"},listItem:Object(c.a)({justifyContent:"flex-start"},t.breakpoints.up("md"),{justifyContent:"center"}),icon:{background:"transparent",borderRadius:0},form:(e={maxWidth:550,margin:"0 auto",marginTop:t.spacing(5)},Object(c.a)(e,t.breakpoints.up("md"),{marginTop:t.spacing(10)}),Object(c.a)(e,"& .MuiTextField-root",{background:t.palette.background.paper}),Object(c.a)(e,"& .MuiOutlinedInput-input",{background:t.palette.background.paper}),e),inputTitle:{fontWeight:700,marginBottom:t.spacing(1)}}})),G=function(t){var e=t.className,a=Object(r.a)(t,["className"]),o=L(),i=Object(P.a)(),s=Object(W.a)(i.breakpoints.up("md"),{defaultMatches:!0});return B("div",Object(n.a)({className:e},a),B(f.e,{title:"Have a project to discuss? Contact us.",subtitle:"Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.",subtitleProps:{variant:"body1",color:"textPrimary"},"data-aos":"fade-up",align:s?"center":"left"}),B(E.a,{disablePadding:!0,className:o.list},B(q.a,{disableGutters:!0,"data-aos":"fade-up",className:o.listItem},B(D.a,null,B(_.a,{src:"https://assets.maccarianagency.com/the-front/illustrations/contact-icon-phone.png",srcSet:"https://assets.maccarianagency.com/the-front/illustrations/contact-icon-phone@2x.png 2x",className:o.icon})),B(R.a,{className:o.listItemText,primary:"Phone",secondary:"+39 659-657-0133",primaryTypographyProps:{className:o.title,variant:"subtitle1",color:"textSecondary"},secondaryTypographyProps:{variant:"subtitle1",color:"textPrimary",component:"span"}})),B(q.a,{disableGutters:!0,"data-aos":"fade-up",className:o.listItem},B(D.a,null,B(_.a,{src:"https://assets.maccarianagency.com/the-front/illustrations/contact-icon-mail.png",srcSet:"https://assets.maccarianagency.com/the-front/illustrations/contact-icon-mail@2x.png 2x",className:o.icon})),B(R.a,{className:o.listItemText,primary:"Email",secondary:"hi@maccarianagency.com",primaryTypographyProps:{variant:"subtitle1",color:"textSecondary"},secondaryTypographyProps:{variant:"subtitle1",color:"textPrimary"}})),B(q.a,{disableGutters:!0,"data-aos":"fade-up",className:o.listItem},B(D.a,null,B(_.a,{src:"https://assets.maccarianagency.com/the-front/illustrations/contact-icon-pin.png",srcSet:"https://assets.maccarianagency.com/the-front/illustrations/contact-icon-pin@2x.png 2x",className:o.icon})),B(R.a,{className:o.listItemText,primary:"Head Office",secondary:"Via E. Golla 4",primaryTypographyProps:{variant:"subtitle1",color:"textSecondary"},secondaryTypographyProps:{variant:"subtitle1",color:"textPrimary"}}))),B("div",{className:o.form},B(S.a,{container:!0,spacing:s?4:2},B(S.a,{item:!0,xs:12,"data-aos":"fade-up"},B(j.a,{variant:"subtitle1",color:"textPrimary",className:o.inputTitle},"Full name"),B(C.a,{placeholder:"Your full name",variant:"outlined",size:"medium",name:"fullname",fullWidth:!0,type:"text"})),B(S.a,{item:!0,xs:12,"data-aos":"fade-up"},B(j.a,{variant:"subtitle1",color:"textPrimary",className:o.inputTitle},"E-mail"),B(C.a,{placeholder:"Your e-mail address",variant:"outlined",size:"medium",name:"email",fullWidth:!0,type:"email"})),B(S.a,{item:!0,xs:12,"data-aos":"fade-up"},B(j.a,{variant:"subtitle1",color:"textPrimary",className:o.inputTitle},"Message"),B(C.a,{placeholder:"Your question about our services",variant:"outlined",name:"message",fullWidth:!0,multiline:!0,rows:4})),B(S.a,{item:!0,container:!0,justify:"center",xs:12},B(h.a,{variant:"contained",type:"submit",color:"primary",size:"large"},"Send a request")))))},M=[{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg",title:"Design component systems, not pages.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:420},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg",title:"Run your business on profit, not credit.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:300},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg",title:"Write documentation for everything.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:550},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg",title:"Run your business on profit, not credit.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:494},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg",title:"Build a culture where everyone designs.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:350},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg",title:"Detach your worth from your work.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:550},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg",title:"Designers can learn from interior design.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:350},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg",title:"Build a culture where everyone designs.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:518},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg",title:"Detach your worth from your work.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:550},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg",title:"Write documentation for everything.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:450},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg",title:"Design component systems, not pages.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:450},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg",title:"Run your business on profit, not credit.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:320}],A=[{name:"Airbnb",logo:"https://assets.maccarianagency.com/the-front/logos/airbnb.svg"},{name:"Coinbase",logo:"https://assets.maccarianagency.com/the-front/logos/coinbase.svg"},{name:"Dribbble",logo:"https://assets.maccarianagency.com/the-front/logos/dribbble.svg"},{name:"Instagram",logo:"https://assets.maccarianagency.com/the-front/logos/instagram.svg"},{name:"Netflix",logo:"https://assets.maccarianagency.com/the-front/logos/netflix.svg"},{name:"Pinterest",logo:"https://assets.maccarianagency.com/the-front/logos/pinterest.svg"}],z=i.a.createElement,H=function(){return z("div",null,z(x,null),z(I,{data:A}),z(s.u,null,z(w,{data:M})),z(s.v,null,z(G,null)))},F=a("Exl5"),Y=a("69Y9"),J=i.a.createElement;e.default=function(){return J(Y.a,{component:H,layout:F.a})}}},[["ILX5",0,1,2,4,3,5,6]]]);