_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"7SZd":function(t,a,e){"use strict";var o=e("wx14"),s=e("Ff2n"),r=e("q1tI"),n=(e("17x9"),e("iuhU")),i=e("ofer"),c=e("H2TA"),l=e("4hqb"),p=r.forwardRef((function(t,a){var e=t.children,c=t.classes,p=t.className,m=t.component,g=void 0===m?"div":m,h=t.disablePointerEvents,d=void 0!==h&&h,u=t.disableTypography,f=void 0!==u&&u,b=t.position,y=t.variant,v=Object(s.a)(t,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),j=Object(l.b)()||{},x=y;return y&&j.variant,j&&!x&&(x=j.variant),r.createElement(l.a.Provider,{value:null},r.createElement(g,Object(o.a)({className:Object(n.a)(c.root,p,d&&c.disablePointerEvents,j.hiddenLabel&&c.hiddenLabel,"filled"===x&&c.filled,{start:c.positionStart,end:c.positionEnd}[b],"dense"===j.margin&&c.marginDense),ref:a},v),"string"!==typeof e||f?e:r.createElement(i.a,{color:"textSecondary"},e)))}));a.a=Object(c.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(p)},SLmN:function(t,a,e){"use strict";e.r(a);var o=e("q1tI"),s=e.n(o),r=e("cpVT"),n=e("R/WZ"),i=e("tr08"),c=e("lopY"),l=e("tRbT"),p=e("41Hj"),m=e("HALo"),g=e("dhJC"),h=e("ofer"),d=e("kbOB"),u=e("Jc4N"),f=s.a.createElement,b=Object(n.a)((function(t){return{cardProduct:{display:"flex",flexDirection:"column",alignItems:"center",height:"100%",boxShadow:"none",borderRadius:0,"& .card-product__content":{padding:t.spacing(2,0,0,0)},"& .card-product__media":{height:160,"& img":{height:160}}},image:{objectFit:"cover"},blogContent:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"},blogTitle:{fontWeight:700},sectionTitle:Object(r.a)({fontWeight:"bold",marginBottom:t.spacing(2)},t.breakpoints.up("md"),{marginBottom:t.spacing(3)})}})),y=function(t){var a=t.data,e=t.className,o=Object(g.a)(t,["data","className"]),s=b(),r=function(t){return f(d.d,Object(m.a)({},t,{className:s.image}))},n=function(t){return f("div",{className:s.blogContent},f(h.a,{variant:"body2",color:"textPrimary",className:s.blogTitle,gutterBottom:!0},t.title),f(h.a,{variant:"caption",color:"textPrimary"},f("i",null,t.author.name," - ",t.date)))};return f("div",Object(m.a)({className:e},o),f(u.e,{title:"Archived news","data-aos":"fade-up",align:"left"}),f(l.a,{container:!0,spacing:2},a.map((function(t,a){return f(l.a,{item:!0,xs:6,md:3,key:a,"data-aos":"fade-up"},f(p.j,{className:s.cardProduct,mediaContent:f(r,Object(m.a)({},t.cover,{alt:t.title})),cardContent:f(n,{title:t.title,subtitle:t.subtitle,author:t.author,date:t.date,tags:t.tags})}))}))))},v=e("Z3vd"),j=s.a.createElement,x=Object(n.a)((function(t){return{cardProduct:{display:"flex",flexDirection:"column",borderRadius:t.spacing(1),boxShadow:"none",background:"transparent",paddingBottom:t.spacing(2),"& .card-product__content":{padding:t.spacing(4),zIndex:1,background:t.palette.background.paper,width:"90%",margin:"0 auto",marginTop:t.spacing(-6),borderRadius:t.spacing(1),boxShadow:"0 3px 10px 2px rgba(0, 0, 0, 0.1)"},"& .card-product__media":{minHeight:300,"& img":{transitionDuration:".7s",transform:"scale(1.0)"}},"&:hover":{"& .card-product__media img":{transform:"scale(1.2)"}}},image:{objectFit:"cover"},blogTitle:{fontWeight:700},tags:{display:"flex",flexWrap:"wrap"},tag:Object(r.a)({padding:t.spacing(.5,1),borderRadius:t.spacing(.5),background:t.palette.primary.main,color:"white",margin:t.spacing(0,1,1,0)},t.breakpoints.up("md"),{margin:t.spacing(0,2,2,0)}),author:Object(r.a)({margin:t.spacing(1,0)},t.breakpoints.up("md"),{margin:t.spacing(2,0)}),title:{fontWeight:"bold"},descriptionCta:Object(r.a)({marginBottom:t.spacing(3)},t.breakpoints.up("md"),{marginBottom:t.spacing(4)})}})),k=function(t){var a=t.data,e=t.className,o=Object(g.a)(t,["data","className"]),s=x(),r=Object(i.a)(),n=Object(c.a)(r.breakpoints.up("md"),{defaultMatches:!0}),f=function(t){return j(d.d,Object(m.a)({},t,{className:s.image,lazyProps:{width:"100%",height:"100%"}}))},b=function(t){return j("div",null,j("div",{className:s.tags},t.tags.map((function(t,a){return j(h.a,{variant:"caption",className:s.tag,key:a},t)}))),j(h.a,{variant:"h6",color:"textPrimary",className:s.blogTitle},t.title),j(h.a,{variant:"body2",color:"textPrimary",className:s.author},j("i",null,t.author.name," - ",t.date)),j(h.a,{variant:"body1",color:"textPrimary"},t.subtitle))};return j("div",Object(m.a)({className:e},o),j(u.b,{title:"Featured articles",subtitle:"Keep track of what's happening with your data, change permissions.",primaryCta:j(v.a,{variant:"outlined",color:"primary",size:"large"},"View more"),align:"left",titleProps:{variant:"h4",color:"textPrimary",className:s.title},subtitleProps:{color:"textPrimary",noWrap:!1},className:s.descriptionCta,"data-aos":"fade-up"}),j(l.a,{container:!0,spacing:n?4:2},a.map((function(t,a){return j(l.a,{item:!0,xs:12,sm:6,key:a,"data-aos":"fade-up"},j(p.j,{className:s.cardProduct,mediaContent:j(f,Object(m.a)({},t.cover,{alt:t.title})),cardContent:j(b,{title:t.title,subtitle:t.subtitle,author:t.author,date:t.date,tags:t.tags})}))}))))},N=e("ADg1"),w=e("KmP9"),O=e("7SZd"),S=e("TTf+"),A=s.a.createElement,P=Object(n.a)((function(){return{textWhite:{color:"white"},inputContainer:{display:"flex",justifyContent:"flex-start"},formControl:{maxWidth:400,"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"white"}},"& .MuiInputBase-root":{color:"white"},"& .MuiInputAdornment-root i":{color:"white !important"}},image:{maxWidth:400}}})),T=function(t){t.data;var a=t.className,e=Object(g.a)(t,["data","className"]),o=P();return A("div",Object(m.a)({className:a},e),A(l.a,{container:!0,spacing:4},A(l.a,{item:!0,xs:12,sm:6,container:!0},A(d.d,{src:"https://assets.maccarianagency.com/the-front/illustrations/relax-in-sofa.svg",className:o.image})),A(l.a,{item:!0,xs:12,sm:6,container:!0,alignItems:"center"},A("div",null,A(u.e,{title:A("span",{className:o.textWhite},"Subscribe To Our Newsletter"),subtitle:A("span",{className:o.textWhite},"Don't lose a chance to be among the firsts to know about our upcoming news and updates."),fadeUp:!0,align:"left"}),A("div",{className:o.inputContainer},A(N.a,{fullWidth:!0,variant:"outlined","data-aos":"fade-up",className:o.formControl},A(w.a,{endAdornment:A(O.a,{position:"end"},A(d.b,{fontIconClass:"fas fa-paper-plane",fontIconColor:S.a.indigo[900]})),placeholder:"Enter your email"})))))))},C=e("iuhU"),W=s.a.createElement,B=Object(n.a)((function(t){return{root:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},image:Object(r.a)({minHeight:400,objectFit:"cover"},t.breakpoints.down("sm"),{width:"auto"}),textWhite:{color:"white"},title:{fontWeight:"bold"},section:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",paddingTop:0,paddingBottom:0},searchInputContainer:Object(r.a)({background:t.palette.background.paper,padding:t.spacing(2),boxShadow:"0 4px 14px 0 rgba(0, 0, 0, 0.11)",borderRadius:t.spacing(1),width:"100%",height:"100%",display:"flex",alignItems:"center","& .MuiOutlinedInput-notchedOutline":{border:"0 !important"},"& .MuiInputAdornment-positionStart":{marginRight:t.spacing(2)},"& .MuiOutlinedInput-adornedStart":{paddingLeft:0},"& .MuiOutlinedInput-input":{padding:0}},t.breakpoints.down("sm"),{padding:t.spacing(1)}),searchButton:Object(r.a)({maxHeight:45,minWidth:135},t.breakpoints.down("sm"),{minWidth:"auto"})}})),_=function(t){var a=t.className,e=Object(g.a)(t,["className"]),o=B();return W("div",Object(m.a)({className:Object(C.a)(o.root,a)},e),W(d.d,{src:"https://assets.maccarianagency.com/the-front/photos/about/hero-image.png",srcSet:"https://assets.maccarianagency.com/the-front/photos/about/hero-image.png 2x",alt:"About",className:o.image,lazyProps:{width:"100%",height:"100%"}}),W(p.u,{className:o.section},W(s.a.Fragment,null,W(u.e,{title:"Our Newsroom",subtitle:"We are founded by a leading academic and researcher in the field of Industrial Systems Engineering.",align:"left","data-aos":"fade-up",titleProps:{className:Object(C.a)(o.title,o.textWhite),variant:"h3"},subtitleProps:{className:o.textWhite}}),W("div",{className:o.searchInputContainer,"data-aos":"fade-up"},W(N.a,{fullWidth:!0,variant:"outlined"},W(w.a,{startAdornment:W(O.a,{position:"start"},W(d.b,{fontIconClass:"fas fa-search",fontIconColor:S.a.blueGrey[900]})),placeholder:"Search for the article"})),W(v.a,{color:"primary",variant:"contained",size:"large",className:o.searchButton},"Search")))))},E=s.a.createElement,I=Object(n.a)((function(t){return{cardProduct:{display:"flex",flexDirection:"column",borderRadius:t.spacing(1),"& .card-product__content":{padding:t.spacing(2)},"& .card-product__media":{minHeight:300}},image:{objectFit:"cover"},blogTitle:{fontWeight:700},tags:{display:"flex",flexWrap:"wrap",justifyContent:"center"},tag:{fontWeight:700,margin:t.spacing(0,1,1,0)},author:Object(r.a)({margin:t.spacing(1,0)},t.breakpoints.up("md"),{margin:t.spacing(2,0)}),title:{fontWeight:"bold"},descriptionCta:Object(r.a)({marginBottom:t.spacing(3)},t.breakpoints.up("md"),{marginBottom:t.spacing(4)})}})),R=function(t){var a=t.data,e=t.className,o=Object(g.a)(t,["data","className"]),s=I(),r=function(t){return E(d.d,Object(m.a)({},t,{className:s.image,lazyProps:{width:"100%",height:"100%"}}))},n=function(t){return E("div",null,E("div",{className:s.tags},t.tags.map((function(t,a){return E(h.a,{variant:"overline",color:"primary",className:s.tag,key:a},t)}))),E(h.a,{variant:"h6",color:"textPrimary",className:s.blogTitle,align:"center"},t.title),E(h.a,{variant:"body2",color:"textPrimary",className:s.author,align:"center"},E("i",null,t.author.name," - ",t.date)),E(h.a,{variant:"body1",color:"textPrimary",align:"center"},t.subtitle))};return E("div",Object(m.a)({className:e},o),E(u.b,{title:"Latest stories",primaryCta:E(v.a,{variant:"outlined",color:"primary",size:"large"},"View all"),align:"left",titleProps:{variant:"h4",color:"textPrimary",className:s.title},className:s.descriptionCta,"data-aos":"fade-up"}),E(l.a,{container:!0,spacing:2},a.map((function(t,a){return E(l.a,{item:!0,xs:12,sm:6,key:a,"data-aos":"fade-up"},E(p.j,{withShadow:!0,liftUp:!0,className:s.cardProduct,mediaContent:E(r,Object(m.a)({},t.cover,{alt:t.title})),cardContent:E(n,{title:t.title,subtitle:t.subtitle,author:t.author,date:t.date,tags:t.tags})}))}))))},L=s.a.createElement,z=Object(n.a)((function(t){var a,e;return{root:Object(r.a)({},t.breakpoints.down("xs"),{marginLeft:t.spacing(-2),marginRight:t.spacing(-2)}),gridItem:(a={marginBottom:t.spacing(2),paddingBottom:t.spacing(2)},Object(r.a)(a,t.breakpoints.up("md"),{marginBottom:t.spacing(3),paddingBottom:t.spacing(3),borderBottom:"1px solid ".concat(S.a.grey[200])}),Object(r.a)(a,"&:last-child",{marginBottom:0,borderBottom:0,paddingBottom:0}),a),cardProduct:Object(r.a)({display:"flex",alignItems:"center",height:"100%",borderRadius:0,boxShadow:"none",background:"transparent","& .card-product__content":Object(r.a)({padding:t.spacing(2,2,0,2)},t.breakpoints.up("sm"),{padding:t.spacing(0,0,0,2)}),"& .card-product__media":Object(r.a)({},t.breakpoints.up("sm"),{height:170,width:170,"& img":{height:170,width:170}})},t.breakpoints.down("sm"),{flexDirection:"column !important","& .card-product__content":{flex:"1 1 100%"},"& .card-product__media":{flex:"1 1 100%",width:"100%"}}),image:{objectFit:"cover"},blogContent:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"},button:{marginTop:t.spacing(1),alignSelf:"flex-start"},blogTitle:{fontWeight:700},author:{margin:t.spacing(1,0)},title:{fontWeight:"bold"},descriptionCta:(e={maxWidth:"100%",marginBottom:t.spacing(3),padding:t.spacing(0,2)},Object(r.a)(e,t.breakpoints.up("md"),{marginBottom:t.spacing(4),padding:0}),Object(r.a)(e,t.breakpoints.up("sm"),{padding:0}),e)}})),F=function(t){var a=t.data,e=t.className,o=Object(g.a)(t,["data","className"]),s=z(),r=function(t){return L(d.d,Object(m.a)({},t,{className:s.image,lazyProps:{width:"100%",height:"100%"}}))},n=function(t){return L("div",{className:s.blogContent},L(h.a,{variant:"h6",color:"textPrimary",className:s.blogTitle},t.title),L(h.a,{variant:"body2",color:"textPrimary",className:s.author},L("i",null,t.author.name," - ",t.date)),L(h.a,{variant:"subtitle1",color:"textPrimary"},t.subtitle),L(d.e,{title:"Learn more",variant:"body1",className:s.button}))};return L("div",Object(m.a)({className:Object(C.a)(s.root,e)},o),L(u.b,{title:"Most viewed",primaryCta:L(v.a,{variant:"outlined",color:"primary",size:"large"},"View all"),align:"left",titleProps:{variant:"h4",color:"textPrimary",className:s.title,noWrap:!1},className:s.descriptionCta,"data-aos":"fade-up"}),L(l.a,{container:!0,spacing:0},a.map((function(t,a){return L(l.a,{item:!0,xs:12,key:a,"data-aos":"fade-up",className:s.gridItem},L(p.j,{className:s.cardProduct,mediaContent:L(r,Object(m.a)({},t.cover,{alt:t.title})),cardContent:L(n,{title:t.title,subtitle:t.subtitle,author:t.author,date:t.date,tags:t.tags})}))}))))},M=s.a.createElement,D=Object(n.a)((function(t){return{cardProduct:Object(r.a)({display:"flex",alignItems:"center",height:"100%",borderRadius:t.spacing(1),boxShadow:"none","& .card-product__content":{paddingTop:t.spacing(2),paddingBottom:t.spacing(2),flex:"1 1 50%"},"& .card-product__media":{minHeight:300,height:"100%",flex:"1 1 50%"}},t.breakpoints.down("sm"),{flexDirection:"column !important","& .card-product__content":{flex:"1 1 100%"},"& .card-product__media":{flex:"1 1 100%",width:"100%"}}),cardProductReverse:{flexDirection:"row-reverse"},image:{objectFit:"cover"},blogContent:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"},button:Object(r.a)({marginTop:t.spacing(2),alignSelf:"flex-start"},t.breakpoints.up("md"),{marginTop:t.spacing(3)}),blogTitle:{textTransform:"uppercase",fontWeight:700},tags:{display:"flex",flexWrap:"wrap"},tag:Object(r.a)({padding:t.spacing(.5,1),borderRadius:t.spacing(.5),background:t.palette.primary.main,color:"white",margin:t.spacing(0,1,1,0)},t.breakpoints.up("md"),{margin:t.spacing(0,2,2,0)}),author:Object(r.a)({margin:t.spacing(1,0)},t.breakpoints.up("md"),{margin:t.spacing(2,0)})}})),K=function(t){var a=t.data,e=t.className,o=Object(g.a)(t,["data","className"]),s=D(),r=Object(i.a)(),n=Object(c.a)(r.breakpoints.up("md"),{defaultMatches:!0}),f=function(t){return M(d.d,Object(m.a)({},t,{className:s.image,lazyProps:{width:"100%",height:"100%"}}))},b=function(t){return M("div",{className:s.blogContent},M("div",{className:s.tags},t.tags.map((function(t,a){return M(h.a,{variant:"caption",className:s.tag,key:a},t)}))),M(h.a,{variant:"h6",color:"textPrimary",className:s.blogTitle},t.title),M(h.a,{variant:"body2",color:"textPrimary",className:s.author},M("i",null,t.author.name," - ",t.date)),M(h.a,{variant:"subtitle1",color:"textPrimary"},t.subtitle),M(v.a,{variant:"outlined",color:"primary",size:"large",className:s.button},"Read more"))};return M("div",Object(m.a)({className:e},o),M(u.e,{title:"The most popular news",subtitle:"Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.",subtitleProps:{color:"textPrimary"},"data-aos":"fade-up"}),M(l.a,{container:!0,spacing:n?4:2},a.map((function(t,a){return M(l.a,{item:!0,xs:12,key:a,"data-aos":"fade-up"},M(p.j,{className:Object(C.a)(s.cardProduct,a%2===1?s.cardProductReverse:{}),mediaContent:M(f,Object(m.a)({},t.cover,{alt:t.title})),cardContent:M(b,{title:t.title,subtitle:t.subtitle,author:t.author,date:t.date,tags:t.tags})}))}))))},H=s.a.createElement,V=Object(n.a)((function(t){return{root:Object(r.a)({padding:t.spacing(3,2),border:"1px solid ".concat(S.a.grey[200]),borderRadius:t.spacing(2)},t.breakpoints.up("md"),{padding:t.spacing(3)}),gridItem:{marginBottom:t.spacing(2),paddingBottom:t.spacing(2),borderBottom:"1px solid ".concat(S.a.grey[200]),"&:last-child":{marginBottom:0,borderBottom:0,paddingBottom:0}},cardProduct:{display:"flex",alignItems:"center",height:"100%",boxShadow:"none",borderRadius:0,"& .card-product__content":{padding:0,paddingLeft:t.spacing(2)},"& .card-product__media":{height:90,width:90,"& img":{height:90,width:90}}},image:{objectFit:"cover"},blogContent:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"},blogTitle:{fontWeight:700},tags:{display:"flex",flexWrap:"wrap"},tag:{margin:t.spacing(0,.5,.5,0),textTransform:"uppercase",fontWeight:700},sectionTitle:Object(r.a)({fontWeight:"bold",marginBottom:t.spacing(2)},t.breakpoints.up("md"),{marginBottom:t.spacing(3)})}})),q=function(t){var a=t.data,e=t.className,o=Object(g.a)(t,["data","className"]),s=V(),r=function(t){return H(d.d,Object(m.a)({},t,{className:s.image,lazyProps:{width:"100%",height:"100%"}}))},n=function(t){return H("div",{className:s.blogContent},H("div",{className:s.tags},t.tags.map((function(t,a){return H(h.a,{variant:"caption",color:"primary",className:s.tag,key:a},t)}))),H(h.a,{variant:"body2",color:"textPrimary",className:s.blogTitle,gutterBottom:!0},t.title),H(h.a,{variant:"caption",color:"textPrimary"},H("i",null,t.author.name," - ",t.date)))};return H("div",Object(m.a)({className:Object(C.a)(s.root,e)},o),H(h.a,{variant:"h6",color:"textPrimary",gutterBottom:!0,className:s.sectionTitle},"Upcoming updates"),H(l.a,{container:!0,spacing:0},a.map((function(t,a){return H(l.a,{item:!0,xs:12,key:a,"data-aos":"fade-up",className:s.gridItem},H(p.j,{className:s.cardProduct,mediaContent:H(r,Object(m.a)({},t.cover,{alt:t.title})),cardContent:H(n,{title:t.title,subtitle:t.subtitle,author:t.author,date:t.date,tags:t.tags})}))}))))},J=e("r9w1"),U=s.a.createElement,Y=Object(n.a)((function(t){return{root:Object(r.a)({padding:t.spacing(3,2),border:"1px solid ".concat(t.palette.alternate.dark),borderRadius:t.spacing(2)},t.breakpoints.up("md"),{padding:t.spacing(3)}),cover:{width:200,height:200,display:"flex",justifyContent:"center",alignItems:"center",margin:"0 auto",marginBottom:t.spacing(3)},form:{"& .MuiTextField-root":{background:t.palette.background.paper},"& .MuiOutlinedInput-input":{background:t.palette.background.paper}},inputTitle:{fontWeight:700,marginBottom:t.spacing(1)}}})),Q=function(t){var a=t.className,e=Object(g.a)(t,["className"]),o=Y(),s=Object(i.a)(),r=Object(c.a)(s.breakpoints.up("md"),{defaultMatches:!0});return U("div",Object(m.a)({className:Object(C.a)(o.root,a)},e),U("div",{className:o.cover},U(d.d,{src:"https://assets.maccarianagency.com/the-front/illustrations/want-to-work.svg"})),U(u.e,{title:"Email newsletter",subtitle:"Subscribe to our Newsletter for new blog posts, tips & new photos",titleProps:{variant:"h4",color:"textPrimary"},subtitleProps:{variant:"body1",color:"textPrimary"},"data-aos":"fade-up",align:"left"}),U("div",{className:o.form},U(l.a,{container:!0,spacing:r?4:2},U(l.a,{item:!0,xs:12,"data-aos":"fade-up"},U(h.a,{variant:"subtitle1",color:"textPrimary",className:o.inputTitle},"Full name"),U(J.a,{placeholder:"Your full name",variant:"outlined",size:"medium",name:"fullname",fullWidth:!0,type:"text"})),U(l.a,{item:!0,xs:12,"data-aos":"fade-up"},U(h.a,{variant:"subtitle1",color:"textPrimary",className:o.inputTitle},"E-mail"),U(J.a,{placeholder:"Your e-mail address",variant:"outlined",size:"medium",name:"email",fullWidth:!0,type:"email"})),U(l.a,{item:!0,container:!0,justify:"center",xs:12},U(v.a,{variant:"contained",type:"submit",color:"primary",size:"large"},"Subscribe")),U(l.a,{item:!0,container:!0,justify:"center",xs:12},U(h.a,{variant:"caption",color:"textSecondary"},"Subscribe to our Newsletter for new blog posts, tips & new photos.")))))},G=s.a.createElement,Z=Object(n.a)((function(t){var a;return{tags:{display:"flex",flexWrap:"wrap"},tag:(a={padding:t.spacing(.5,1),border:"1px solid ".concat(t.palette.primary.main),borderRadius:t.spacing(1),background:"transparent",margin:t.spacing(0,1,1,0),cursor:"pointer"},Object(r.a)(a,t.breakpoints.up("md"),{margin:t.spacing(0,2,2,0),padding:t.spacing(1,2)}),Object(r.a)(a,"&:hover",{color:"white",background:t.palette.primary.main}),a),sectionTitle:Object(r.a)({fontWeight:"bold",marginBottom:t.spacing(2)},t.breakpoints.up("md"),{marginBottom:t.spacing(3)})}})),X=function(t){var a=t.data,e=t.className,o=Object(g.a)(t,["data","className"]),s=Z();return G("div",Object(m.a)({className:e},o),G(h.a,{variant:"h6",color:"textPrimary",gutterBottom:!0,className:s.sectionTitle},"Tag cloud"),G("div",{className:s.tags},a.map((function(t,a){return G(h.a,{variant:"body2",color:"primary",className:s.tag,key:a},t)}))))},$=[{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg 2x"},title:"Simple approach to Australian cafe",subtitle:"Independent holistic & healthy caf\xe9 | Simple approach to Australian cafe culture in a relaxed environment",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x"},name:"Veronica Adams"},date:"04 Aug",tags:["coffee","cups","morning coffee","breakfast"]},{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg 2x"},title:"Adidas will release your favourite shoes",subtitle:"Get your favourite adidas shoes, clothing & accessories at the official website! adidas Training.",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x"},name:"Akachi Luccini"},date:"04 Aug",tags:["adidas","sport","shop","training"]}],tt=[{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg 2x"},title:"NIKE Online Store launches the website\u200e",subtitle:"Be Your Best Every Time With Nike Shoes And Clothing. Shop Online. The Official Website. Home Of Everything Nike. Shop The Latest Releases Today! Types: Shoes, Tops.",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x"},name:"Jack Smith"},date:"04 Aug",tags:["nike","sport","shop","training"]},{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg 2x"},title:"LARQ | World's First Self-cleaning Water Bottle\u200e",subtitle:"A self-cleaning water bottle that'll help you reach your hydration goal. Neutralizes up to 99%* of harmful, odor-causing bacteria using UV-C light.",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x"},name:"Kate Segelson"},date:"04 Aug",tags:["larq","bottle","shop","drinks","eco","self washing"]}],at=[{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg 2x"},title:"Simple approach to Australian cafe",subtitle:"Independent holistic & healthy caf\xe9 | Simple approach to Australian cafe culture in a relaxed environment",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x"},name:"Veronica Adams"},date:"04 Aug",tags:["coffee","cups","morning coffee","breakfast"]},{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg 2x"},title:"Adidas will release your favourite shoes",subtitle:"Get your favourite adidas shoes, clothing & accessories at the official website! adidas Training.",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x"},name:"Akachi Luccini"},date:"04 Aug",tags:["adidas","sport","shop","training"]},{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg 2x"},title:"NIKE Online Store launches the website\u200e",subtitle:"Be Your Best Every Time With Nike Shoes And Clothing. Shop Online. The Official Website. Home Of Everything Nike. Shop The Latest Releases Today! Types: Shoes, Tops.",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x"},name:"Jack Smith"},date:"04 Aug",tags:["nike","sport","shop","training"]},{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg 2x"},title:"LARQ | World's First Self-cleaning Water Bottle\u200e",subtitle:"A self-cleaning water bottle that'll help you reach your hydration goal. Neutralizes up to 99%* of harmful, odor-causing bacteria using UV-C light.",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x"},name:"Kate Segelson"},date:"04 Aug",tags:["larq","bottle","shop","drinks","eco","self washing"]}],et=[{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg 2x"},title:"LARQ | World's First Self-cleaning Water Bottle\u200e",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x"},name:"Kate Segelson"},date:"04 Aug",tags:["larq","bottle","shop","drinks","eco","self washing"]},{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg 2x"},title:"NIKE Online Store launches the website\u200e",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x"},name:"Jack Smith"},date:"04 Aug",tags:["nike","sport","shop","training"]},{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg 2x"},title:"Adidas will release your favourite shoes",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x"},name:"Akachi Luccini"},date:"04 Aug",tags:["adidas","sport","shop","training"]},{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg 2x"},title:"Simple approach to Australian cafe",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x"},name:"Veronica Adams"},date:"04 Aug",tags:["coffee","cups","morning coffee","breakfast"]}],ot=[{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg 2x"},title:"Simple approach to Australian cafe",subtitle:"Independent holistic & healthy caf\xe9 | Simple approach to Australian cafe culture in a relaxed environment",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x"},name:"Veronica Adams"},date:"04 Aug",tags:["coffee","cups","morning coffee","breakfast"]},{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg 2x"},title:"Adidas will release your favourite shoes",subtitle:"Get your favourite adidas shoes, clothing & accessories at the official website! adidas Training.",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x"},name:"Akachi Luccini"},date:"04 Aug",tags:["adidas","sport","shop","training"]},{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg 2x"},title:"NIKE Online Store launches the website\u200e",subtitle:"Be Your Best Every Time With Nike Shoes And Clothing. Shop Online. The Official Website. Home Of Everything Nike. Shop The Latest Releases Today! Types: Shoes, Tops.",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x"},name:"Jack Smith"},date:"04 Aug",tags:["nike","sport","shop","training"]},{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg 2x"},title:"LARQ | World's First Self-cleaning Water Bottle\u200e",subtitle:"A self-cleaning water bottle that'll help you reach your hydration goal. Neutralizes up to 99%* of harmful, odor-causing bacteria using UV-C light.",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x"},name:"Kate Segelson"},date:"04 Aug",tags:["larq","bottle","shop","drinks","eco","self washing"]}],st=[{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg 2x"},title:"LARQ | World's First Self-cleaning Water Bottle\u200e",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x"},name:"Kate Segelson"},date:"04 Aug",tags:["larq","bottle","shop","drinks","eco","self washing"]},{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg 2x"},title:"NIKE Online Store launches the website\u200e",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x"},name:"Jack Smith"},date:"04 Aug",tags:["nike","sport","shop","training"]},{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg 2x"},title:"Adidas will release your favourite shoes",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x"},name:"Akachi Luccini"},date:"04 Aug",tags:["adidas","sport","shop","training"]},{cover:{src:"https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg 2x"},title:"Simple approach to Australian cafe",author:{photo:{src:"https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x"},name:"Veronica Adams"},date:"04 Aug",tags:["coffee","cups","morning coffee","breakfast"]}],rt=["coffee","cups","morning coffee","breakfast","nike","adidas","sport","shop","training","larq","bottle","shop","drinks","eco","self washing"],nt=s.a.createElement,it=Object(n.a)((function(t){return{root:{height:"100%",width:"100%"},sidebarNewsletter:Object(r.a)({},t.breakpoints.down("sm"),{marginTop:t.spacing(3)}),footerNewsletterSection:{background:t.palette.primary.dark}}})),ct=function(){var t=it(),a=Object(i.a)(),e=Object(c.a)(a.breakpoints.up("md"),{defaultMatches:!0});return nt("div",{className:t.root},nt(_,null),nt(p.u,null,nt(K,{data:$})),nt(p.v,null,nt(k,{data:tt})),nt(p.u,null,nt(l.a,{container:!0,spacing:e?4:2},nt(l.a,{item:!0,xs:12,md:8},nt(R,{data:at})),nt(l.a,{item:!0,xs:12,md:4},nt(q,{data:et})))),nt(p.v,null,nt(l.a,{container:!0,spacing:e?4:0},nt(l.a,{item:!0,xs:12,md:8},nt(F,{data:ot})),nt(l.a,{item:!0,xs:12,md:4},nt(Q,{className:t.sidebarNewsletter})))),nt(p.u,null,nt(l.a,{container:!0,spacing:e?4:2},nt(l.a,{item:!0,xs:12,md:8},nt(y,{data:st})),nt(l.a,{item:!0,xs:12,md:4},nt(X,{data:rt})))),nt(p.v,{className:t.footerNewsletterSection},nt(T,null)))},lt=e("Exl5"),pt=e("69Y9"),mt=s.a.createElement;a.default=function(){return mt(pt.a,{component:ct,layout:lt.a})}},hnfC:function(t,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-newsroom",function(){return e("SLmN")}])}},[["hnfC",0,1,2,4,3,5,6]]]);