_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[55],{RHQs:function(e,t,a){"use strict";var o=a("wx14"),s=a("Ff2n"),n=a("q1tI"),r=(a("TOwV"),a("17x9"),a("iuhU")),i=a("H2TA"),c=n.forwardRef((function(e,t){var a=e.cellHeight,i=void 0===a?180:a,c=e.children,l=e.classes,m=e.className,p=e.cols,h=void 0===p?2:p,u=e.component,g=void 0===u?"ul":u,d=e.spacing,f=void 0===d?4:d,b=e.style,y=Object(s.a)(e,["cellHeight","children","classes","className","cols","component","spacing","style"]);return n.createElement(g,Object(o.a)({className:Object(r.a)(l.root,m),ref:t,style:Object(o.a)({margin:-f/2},b)},y),n.Children.map(c,(function(e){if(!n.isValidElement(e))return null;var t=e.props.cols||1,a=e.props.rows||1;return n.cloneElement(e,{style:Object(o.a)({width:"".concat(100/h*t,"%"),height:"auto"===i?"auto":i*a+f,padding:f/2},e.props.style)})})))}));t.a=Object(i.a)({root:{display:"flex",flexWrap:"wrap",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"}},{name:"MuiGridList"})(c)},fiyQ:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/expo",function(){return a("w6CU")}])},kKik:function(e,t,a){"use strict";var o=a("wx14"),s=a("Ff2n"),n=a("KQm4"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("l3Wi"),l=a("H2TA"),m=a("ucBr"),p=function(e,t){var a,o,s,r;e&&e.complete&&(e.width/e.height>e.parentElement.offsetWidth/e.parentElement.offsetHeight?((a=e.classList).remove.apply(a,Object(n.a)(t.imgFullWidth.split(" "))),(o=e.classList).add.apply(o,Object(n.a)(t.imgFullHeight.split(" ")))):((s=e.classList).remove.apply(s,Object(n.a)(t.imgFullHeight.split(" "))),(r=e.classList).add.apply(r,Object(n.a)(t.imgFullWidth.split(" ")))))};var h=r.forwardRef((function(e,t){var a=e.children,n=e.classes,l=e.className,h=(e.cols,e.component),u=void 0===h?"li":h,g=(e.rows,Object(s.a)(e,["children","classes","className","cols","component","rows"])),d=r.useRef(null);return r.useEffect((function(){!function(e,t){e&&(e.complete?p(e,t):e.addEventListener("load",(function(){p(e,t)})))}(d.current,n)})),r.useEffect((function(){var e=Object(c.a)((function(){p(d.current,n)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[n]),r.createElement(u,Object(o.a)({className:Object(i.a)(n.root,l),ref:t},g),r.createElement("div",{className:n.tile},r.Children.map(a,(function(e){return r.isValidElement(e)?"img"===e.type||Object(m.a)(e,["Image"])?r.cloneElement(e,{ref:d}):e:null}))))}));t.a=Object(l.a)({root:{boxSizing:"border-box",flexShrink:0},tile:{position:"relative",display:"block",height:"100%",overflow:"hidden"},imgFullHeight:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"},imgFullWidth:{width:"100%",position:"relative",transform:"translateY(-50%)",top:"50%"}},{name:"MuiGridListTile"})(h)},w6CU:function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),s=a.n(o),n=a("R/WZ"),r=a("TTf+"),i=a("wb2y"),c=a("41Hj"),l=a("HALo"),m=a("dhJC"),p=a("iuhU"),h=a("tr08"),u=a("lopY"),g=a("tRbT"),d=a("ofer"),f=s.a.createElement,b=Object(n.a)((function(){return{fontWeight700:{fontWeight:700},textWhite:{color:"white"}}})),y=function(e){var t=e.data,a=e.className,o=Object(m.a)(e,["data","className"]),s=b(),n=Object(h.a)(),r=Object(u.a)(n.breakpoints.up("md"),{defaultMatches:!0});return f("div",Object(l.a)({className:a,"data-aos":"fade-up"},o),t.map((function(e,t){return f(c.q,{imageSrc:e.image.src,imageSrcSet:e.image.srcSet,reverse:t%2===0,key:t},f(g.a,{container:!0,spacing:2},f(g.a,{item:!0,xs:12},f(d.a,{variant:r?"h4":"h5",color:"primary",className:Object(p.a)(r?"":s.textWhite,s.fontWeight700)},e.title)),f(g.a,{item:!0,xs:12},f(d.a,{variant:r?"h6":"body1",className:Object(p.a)(r?"":s.textWhite,s.fontWeight700)},e.subtitle)),f(g.a,{item:!0,xs:12},f(d.a,{variant:r?"body1":"body2",color:"textSecondary",className:r?"":s.textWhite},e.description))))})))},v=a("Jc4N"),x=s.a.createElement,j=function(e){var t=e.data,a=e.className,o=Object(m.a)(e,["data","className"]);return x("div",Object(l.a)({className:a},o),x(g.a,{container:!0,spacing:4},t.map((function(e,t){return x(g.a,{key:t,item:!0,xs:12,md:3,"data-aos":"fade-up"},x(c.n,{title:e.title,subtitle:e.subtitle,icon:x(v.c,{fontIconClass:e.icon,size:"medium",color:r.a.indigo}),align:"left"}))}))))},w=s.a.createElement,N=function(e){var t=e.className,a=Object(m.a)(e,["className"]);return w("div",Object(l.a)({className:t},a),w(c.b,{withShadow:!0,"data-aos":"fade-up"},w(c.m,null)))},O=s.a.createElement,k=Object(n.a)((function(){return{textWhite:{color:"white"},title:{fontWeight:"bold"}}})),S=function(e){var t=e.className,a=Object(m.a)(e,["className"]),o=k();return O("div",Object(l.a)({className:t},a),O(g.a,{container:!0,spacing:2},O(g.a,{item:!0,xs:12},O(d.a,{variant:"h4",className:Object(p.a)(o.textWhite,o.title)},"Milan: the city of rising IT engineering")),O(g.a,{item:!0,xs:12},O(d.a,{variant:"h6",component:"p",className:o.textWhite},"Milan is Italy's financial and industrial capital, as well one of the world's leading cities of creative field. Having an important business history and being the largest Italian industrial center, Milan is definitely an attractive destination, with a big business opportunities, for tech companies"))))},W=a("RHQs"),E=a("kKik"),A=a("kbOB"),I=s.a.createElement,P=Object(n.a)((function(){return{image:{objectFit:"cover"}}})),T=function(e){var t=e.data,a=e.className,o=Object(m.a)(e,["data","className"]),s=P(),n=Object(h.a)(),r=Object(u.a)(n.breakpoints.up("md"),{defaultMatches:!0});return I("div",Object(l.a)({className:a},o),I(W.a,{cellHeight:r?300:100,cols:4,spacing:0},t.map((function(e,t){return I(E.a,{key:t,cols:e.cols||1},I(A.d,Object(l.a)({},e.image,{alt:e.title,lazyProps:{width:"100%",height:"100%"},className:s.image})))}))))},F=a("Z3vd"),H=s.a.createElement,M=Object(n.a)((function(){return{textWhite:{color:"white"},title:{fontWeight:"bold"}}})),C=function(e){var t=e.className,a=Object(m.a)(e,["className"]),o=M(),s=Object(h.a)(),n=Object(u.a)(s.breakpoints.up("md"),{defaultMatches:!0});return H("div",Object(l.a)({className:t},a),H(c.o,{backgroundImg:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3@2x.jpg"},H(g.a,{container:!0,spacing:4},H(g.a,{item:!0,xs:12},H(d.a,{variant:"h3",className:Object(p.a)(o.textWhite,o.title)},"Join the world's leading companies at TheFront 2020")),H(g.a,{item:!0,xs:12,md:6},H(d.a,{variant:"h5",className:o.textWhite,gutterBottom:!0},"Whether it\u2019s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners."),H(d.a,{variant:"h5",className:o.textWhite},"Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020.")),H(g.a,{item:!0,xs:12,md:6},H(F.a,{size:n?"large":"medium",variant:"contained"},"Download exhibitor overview")))))},L=s.a.createElement,z=function(e){var t=e.data,a=e.className,o=Object(m.a)(e,["data","className"]);return L("div",Object(l.a)({className:a},o),L(v.g,{items:t}))},G=s.a.createElement,R=Object(n.a)((function(){return{sectionHeadlineStars:{maxWidth:120}}})),_=function(e){var t=e.data,a=e.className,o=Object(m.a)(e,["data","className"]),s=R(),n=Object(h.a)(),i=Object(u.a)(n.breakpoints.up("md"),{defaultMatches:!0});return G("div",Object(l.a)({className:a},o),G(v.e,{overline:G(A.d,{src:"https://assets.maccarianagency.com/the-front/illustrations/rated-by-our-customer.png",alt:"rating",className:s.sectionHeadlineStars,width:"auto"}),title:G("span",null,G(d.a,{color:"secondary",variant:"inherit",component:"span"},"Rated 5 out of 5")," stars by our customers!"),subtitle:"Companies from across the globe have had fantastic experiences using TheFront. Here\u2019s what they have to say.",fadeUp:!0}),G(g.a,{container:!0,spacing:i?4:2},t.map((function(e,t){return G(g.a,{key:t,item:!0,container:!0,alignItems:"center",direction:"column",xs:12,md:4,"data-aos":"fade-up"},G(c.l,{variant:"outlined",text:e.feedback,icon:G(v.c,{color:r.a.indigo,fontIconClass:"fas fa-quote-right"}),authorName:e.authorName,authorTitle:e.authorOccupation,authorPhoto:e.authorPhoto}))})),G(g.a,{item:!0,container:!0,xs:12,justify:"center"},G(F.a,{variant:"contained",size:i?"large":"medium",color:"secondary"},"See all reviews"))))},q=a("469l"),B=s.a.createElement,U=Object(n.a)((function(e){return{webinarAvatar:{width:200,height:200,border:"".concat(e.spacing(1),"px solid ").concat(e.palette.background.paper),boxShadow:"0 2px 10px 0 ".concat(e.palette.cardShadow),borderRadius:e.spacing(2)},listGrid:{overflow:"hidden",marginBottom:e.spacing(3),"&:last-child":{marginBottom:e.spacing(0)}}}})),D=function(e){var t=e.data,a=e.className,o=Object(m.a)(e,["data","className"]),s=U(),n=Object(h.a)(),r=Object(u.a)(n.breakpoints.up("md"),{defaultMatches:!0});return B("div",Object(l.a)({className:a},o),B(v.e,{title:"Meet Our Speakers",subtitle:"Book a place to participate to the upcoming webinars organised by our top management team.",ctaGroup:[B(A.e,{title:"See all speakers",variant:"h6",color:"primary"})],fadeUp:!0}),B(g.a,{container:!0,justify:"center"},t.map((function(e,t){return B(g.a,{key:t,item:!0,container:!0,"data-aos":"fade-up",justify:"space-between",spacing:r?4:2,className:s.listGrid,direction:"row-reverse"},B(g.a,{item:!0,xs:12,sm:12,md:8},B(v.e,{label:e.authorName,titleVariant:"h5",title:e.title,subtitle:e.description,ctaGroup:[B(F.a,{variant:"contained",color:"primary",size:r?"large":"medium",fullWidth:!0},"Book now"),B(F.a,{variant:"outlined",color:"primary",size:r?"large":"medium",fullWidth:!0},"Learn More")],align:r?"left":"center",disableGutter:!0})),B(g.a,{item:!0,container:!0,xs:12,sm:12,md:4,justify:r?"flex-end":"center",alignItems:"center"},B(q.a,Object(l.a)({},e.authorPhoto,{alt:e.authorName,className:s.webinarAvatar}))))}))))},J=s.a.createElement,V=Object(n.a)((function(e){return{videoIframe:{boxShadow:"0 5px 12px 0 ".concat(e.palette.cardShadow),borderRadius:e.spacing(1)},listGrid:{overflow:"hidden"},partnerImage:{maxWidth:120}}})),K=function(e){var t=e.data,a=e.className,o=Object(m.a)(e,["data","className"]),s=V(),n=Object(h.a)(),r=Object(u.a)(n.breakpoints.up("md"),{defaultMatches:!0});return J("div",Object(l.a)({className:a},o),J(g.a,{container:!0,justify:"space-between",spacing:r?4:2,className:s.listGrid},J(g.a,{item:!0,xs:12,md:6,"data-aos":"fade-up"},J(g.a,{container:!0,spacing:2,alignItems:"flex-start"},J(g.a,{item:!0,xs:12},J(v.e,{title:"Why partner with TheFront?",subtitle:"This is a time of great uncertainty for industries across the world. At TheFront, we gather the founders and CEOs of technology companies.",ctaGroup:[J(F.a,{variant:"contained",color:"primary",size:r?"large":"medium"},"Exhibit"),J(F.a,{variant:"outlined",color:"primary",size:r?"large":"medium"},"Attend")],align:r?"left":"center",disableGutter:!0})),J(g.a,{item:!0,xs:12},J(g.a,{container:!0,spacing:2,"data-aos":"fade-up"},J(g.a,{item:!0,xs:12},J(d.a,{variant:"h6",color:"primary",align:r?"left":"center"},"Our sponsors and partners")),J(g.a,{item:!0,container:!0,justify:"space-between",xs:12},t.map((function(e,t){return J(g.a,{item:!0,container:!0,justify:"center",xs:6,sm:2,key:t},J(A.d,{src:e.logo,alt:e.name,className:s.partnerImage,lazy:!1}))}))))))),J(g.a,{item:!0,xs:12,md:6,"data-aos":"fade-up"},J(g.a,{container:!0,justify:"center"},J("iframe",{className:s.videoIframe,title:"video",width:"100%",height:"315",src:"https://www.youtube.com/embed/ClIbn_IF31U",frameBorder:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture"})))))},Q=[{title:"attendees",number:"70,000+"},{title:"countries",number:"160+"},{title:"speakers",number:"1,200+"},{title:"journalists",number:"2,500+"},{title:"CEO's",number:"11,000+"},{title:"fimale",number:"46%"},{title:"investors",number:"1,200+"}],Y=[{icon:"fas fa-rocket",title:"Brand awareness",subtitle:"We bring over 2,500 journalists from the world\u2019s leading publications to TheFront. They\u2019re part of the reason why the event has a global reach of over three billion. We can also work with you on bespoke content packages that will tell your story on a global scale."},{icon:"fas fa-brain",title:"Thought leadership",subtitle:"Maybe you want to place your company front and centre of an industry issue. Maybe you\u2019ve got a new product to launch. We can set up roundtables and workshops for you to host. You\u2019ll be right in the middle of the action, leading discussions with targeted demographics on the topics that matter most to you."},{icon:"far fa-comments",title:"Networking",subtitle:"We have dedicated stages for every industry. Whether you want to hire tech\u2019s top talent, meet with the policymakers influencing your industry, or exchange notes with your peers and competitors, we have the stage, lounge, and evening event for you."},{icon:"fas fa-bullhorn",title:"Lead generation",subtitle:"70,000 people will be joining us at Web Summit this November. They're deeply embedded in the fabric of their respective industries \u2013 the trendsetters dictating how quickly new technologies are adopted."}],X=[{name:"Airbnb",logo:"https://assets.maccarianagency.com/the-front/logos/airbnb.svg"},{name:"Coinbase",logo:"https://assets.maccarianagency.com/the-front/logos/coinbase.svg"},{name:"Dribbble",logo:"https://assets.maccarianagency.com/the-front/logos/dribbble.svg"},{name:"Instagram",logo:"https://assets.maccarianagency.com/the-front/logos/instagram.svg"},{name:"Netflix",logo:"https://assets.maccarianagency.com/the-front/logos/netflix.svg"},{name:"Pinterest",logo:"https://assets.maccarianagency.com/the-front/logos/pinterest.svg"}],Z=[{title:"Manage Service Providers",description:"Add new recurring revenue streams to existing managed WiFi networks.",authorPhoto:{src:"https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x"},authorName:"Veronica Adams"},{title:"Value Added Resellers",description:"Add Social WiFi Marketing to your software bundles and suite of services.",authorPhoto:{src:"https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x"},authorName:"Akachi Luccini"},{title:"Digital Services Agencies",description:"Help local business owners generate leads and build customer loyalty.",authorPhoto:{src:"https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x"},authorName:"Jack Smith"},{title:"Internet Service Providers",description:"Upsell Social WiFi as a Service to business Internet subscribers.",authorPhoto:{src:"https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x"},authorName:"Kate Segelson"},{title:"SaaS Aplications",description:"A lightweight Social WiFi API solution integrate deep into existing platforms.",authorPhoto:{src:"https://assets.maccarianagency.com/the-front/photos/people/alex-johnson.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/alex-johnson@2x.jpg 2x"},authorName:"Alex Johnson"},{title:"Advertising Network",description:"Generate affiliate commissions by referring new reseller partners to us.",authorPhoto:{src:"https://assets.maccarianagency.com/the-front/photos/people/valeria-kogan.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/valeria-kogan@2x.jpg 2x"},authorName:"Valeria Kogan"}],$=[{authorPhoto:{src:"https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x"},authorName:"Veronica Adams",authorOccupation:"Growth Marketer, Crealytics",feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{authorPhoto:{src:"https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x"},authorName:"Akachi Luccini",authorOccupation:"Lead Generation, Alternative Capital",feedback:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{authorPhoto:{src:"https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x"},authorName:"Jack Smith",authorOccupation:"Head of Operations, Parkfield Commerce",feedback:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}],ee=[{image:{src:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1@2x.jpg 2x"},title:"gallery",cols:1},{image:{src:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2@2x.jpg 2x"},title:"gallery",cols:3},{image:{src:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3@2x.jpg 2x"},title:"gallery",cols:2},{image:{src:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1@2x.jpg 2x"},title:"gallery",cols:1},{image:{src:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2@2x.jpg 2x"},title:"gallery",cols:1},{image:{src:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3@2x.jpg 2x"},title:"gallery",cols:1},{image:{src:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1@2x.jpg 2x"},title:"gallery",cols:2},{image:{src:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2@2x.jpg 2x"},title:"gallery",cols:1}],te=[{image:{src:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1@2x.jpg 2x"},title:"The New Era of Tech Companies",subtitle:"Drawing thousands of the world's technology leaders together to learn and do business",description:"Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica."},{image:{src:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2@2x.jpg 2x"},title:"We have top executive & start up here",subtitle:"Drawing thousands of the world's technology leaders together to learn and do business",description:"Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica."}],ae=s.a.createElement,oe=Object(n.a)((function(e){return{sectionDescription:{background:r.a.blue[900]},sectionAlternateForm:{background:"transparent",backgroundImage:"linear-gradient(180deg, ".concat(e.palette.background.paper," 300px, ").concat(e.palette.primary.dark," 0%)")}}})),se=function(){var e=oe();return ae("div",null,ae(C,null),ae(c.v,{className:e.sectionDescription},ae(S,null)),ae(c.u,null,ae(z,{data:Q})),ae(i.a,null),ae(c.u,null,ae(j,{data:Y})),ae(c.v,null,ae(K,{data:X})),ae(y,{data:te}),ae(c.u,{narrow:!0},ae(D,{data:Z})),ae(i.a,null),ae(c.u,null,ae(_,{data:$})),ae(T,{data:ee}),ae("div",{className:e.sectionAlternateForm},ae(c.u,{narrow:!0},ae(N,null))))},ne=a("Exl5"),re=a("69Y9"),ie=s.a.createElement;t.default=function(){return ie(re.a,{component:se,layout:ne.a})}}},[["fiyQ",0,1,2,4,3,5,6]]]);