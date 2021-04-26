_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[33],{"7SZd":function(e,a,t){"use strict";var i=t("wx14"),o=t("Ff2n"),n=t("q1tI"),s=(t("17x9"),t("iuhU")),r=t("ofer"),c=t("H2TA"),l=t("4hqb"),m=n.forwardRef((function(e,a){var t=e.children,c=e.classes,m=e.className,p=e.component,u=void 0===p?"div":p,d=e.disablePointerEvents,g=void 0!==d&&d,b=e.disableTypography,h=void 0!==b&&b,f=e.position,y=e.variant,v=Object(o.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),j=Object(l.b)()||{},x=y;return y&&j.variant,j&&!x&&(x=j.variant),n.createElement(l.a.Provider,{value:null},n.createElement(u,Object(i.a)({className:Object(s.a)(c.root,m,g&&c.disablePointerEvents,j.hiddenLabel&&c.hiddenLabel,"filled"===x&&c.filled,{start:c.positionStart,end:c.positionEnd}[f],"dense"===j.margin&&c.marginDense),ref:a},v),"string"!==typeof t||h?t:n.createElement(r.a,{color:"textSecondary"},t)))}));a.a=Object(c.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(m)},Ar94:function(e,a,t){"use strict";t.r(a);var i=t("q1tI"),o=t.n(i),n=t("R/WZ"),s=t("wb2y"),r=t("41Hj"),c=t("cpVT"),l=t("iuhU"),m=t("tr08"),p=t("TTf+"),u=t("lopY"),d=t("tRbT"),g=t("ofer"),b=t("r9w1"),h=t("7SZd"),f=t("Bf0q"),y=t("Z3vd"),v=o.a.createElement,j=Object(n.a)((function(e){return{hero:{background:e.palette.alternate.dark},heroWrapper:{position:"relative"},heroImageContainer:Object(c.a)({position:"absolute",left:0,top:0,bottom:0,height:"100%",width:"100%",background:"url(https://assets.maccarianagency.com/the-front/photos/people/designer.png) no-repeat right bottom",backgroundSize:"contain",display:"none"},e.breakpoints.up("sm"),{display:"block"}),heroGrid:{maxWidth:926},searchGrid:{zIndex:3},searchGridText:{maxWidth:605},textField:{width:"100%"},searchButton:{width:"100%",height:"100%"},searchIcon:{color:p.a.grey[600]},title:{fontWeight:"bold"}}})),x=function(){var e=j(),a=Object(m.a)(),t=Object(u.a)(a.breakpoints.up("md"),{defaultMatches:!0});return v("section",{className:e.hero},v(r.u,{className:e.heroWrapper},v(d.a,{container:!0,spacing:t?6:4,className:e.heroGrid},v(d.a,{item:!0,xs:12,className:e.searchGridText},v(g.a,{variant:"h2",color:"textSecondary",className:e.title},"Find the most exciting startup jobs")),v(d.a,{item:!0,xs:12,className:e.searchGrid},v(r.b,{variant:"outlined",withShadow:!0,liftUp:!0},v(d.a,{container:!0,spacing:2},v(d.a,{item:!0,xs:12,md:4},v(b.a,{label:"Job title or keyword",variant:"outlined",className:e.textField,size:t?"medium":"small",InputProps:{startAdornment:v(h.a,{position:"start"},v(f.a,null,v("i",{className:Object(l.a)("fas fa-search",e.searchIcon)})))}})),v(d.a,{item:!0,xs:12,md:4},v(b.a,{label:"Location",variant:"outlined",className:e.textField,size:t?"medium":"small",InputProps:{startAdornment:v(h.a,{position:"start"},v(f.a,null,v("i",{className:Object(l.a)("fas fa-map-marker-alt",e.searchIcon)})))}})),v(d.a,{item:!0,xs:12,md:4},v(y.a,{className:e.searchButton,size:"large",variant:"contained",color:"primary"},"Search"))))),v(d.a,{item:!0,xs:12,className:e.searchGridText},v(g.a,{variant:"subtitle1",color:"textPrimary"},"Please clearly mention our portal when applying to the jobs."))),v("div",{className:e.heroImageContainer})))},N=t("HALo"),k=t("dhJC"),O=t("kbOB"),w=o.a.createElement,S=Object(n.a)((function(e){return{root:{width:"100%"},copy:{textAlign:"center"},title:{fontWeight:900},logoImg:{width:"100%",maxWidth:100}}})),L=function(e){var a=e.data,t=e.className,i=Object(k.a)(e,["data","className"]),o=S(),n=Object(m.a)(),s=Object(u.a)(n.breakpoints.up("md"),{defaultMatches:!0});return w("div",Object(N.a)({className:Object(l.a)(o.root,t)},i),w(d.a,{container:!0,spacing:s?0:1},w(d.a,{item:!0,xs:12,md:4},w(g.a,{variant:"h6",color:"textSecondary",align:s?"left":"center",className:o.title},"Companies we have helped build:")),w(d.a,{item:!0,container:!0,justify:s?"center":"space-between",xs:12,md:8},a.map((function(e,a){return w(d.a,{item:!0,container:!0,justify:"center",xs:6,sm:2,key:a},w(O.d,{src:e.logo,alt:e.name,className:o.logoImg,lazy:!1}))})))))},C=t("Jc4N"),E=o.a.createElement,T=function(e){e.data;var a=e.className,t=Object(k.a)(e,["data","className"]);return E("div",Object(N.a)({className:a},t),E(d.a,{container:!0,spacing:4},E(d.a,{item:!0,xs:12,sm:12,md:6},E(C.e,{label:"process",title:E("span",null,E(g.a,{component:"span",variant:"inherit",color:"primary"},"Our process")," ","to find you a new job is fast and you can do it from home."),subtitle:"We keep everything as simple as possible by standardizing the application process for all jobs.",align:"left",disableGutter:!0})),E(d.a,{item:!0,container:!0,alignContent:"center",xs:12,sm:12,md:6,"data-aos":"fade-up"},E(C.d,{image1:{src:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1@2x.jpg 2x",alt:"..."},image2:{src:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2@2x.jpg 2x",alt:"..."},image3:{src:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3.jpg",srcSet:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3@2x.jpg 2x",alt:"..."}}))))},F=o.a.createElement,I=Object(n.a)((function(e){return{typed:{fontWeight:"bold"}}})),A=function(e){var a=e.data,t=e.className,i=Object(k.a)(e,["data","className"]),n=I(),s=Object(m.a)(),c=Object(u.a)(s.breakpoints.up("md"),{defaultMatches:!0});return F("div",Object(N.a)({className:t},i),F(C.e,{title:F(o.a.Fragment,null,"Explore by category ",F("br",null)," and find the best jobs"," ",c?null:F("br",null)," for\xa0",F(C.h,{component:"span",variant:"h4",color:"secondary",className:n.typed,typedProps:{strings:["Web Developers.","UI/UX Designers.","Business Analists.","Scrum Masters.","Finance & Sales"],typeSpeed:50,loop:!0}})),align:"left"}),F(d.a,{container:!0,spacing:c?4:1},a.map((function(e,a){return F(d.a,{key:a,item:!0,container:!0,alignItems:"center",direction:"column",xs:6,sm:6,md:3,"data-aos":"fade-up"},F(r.c,{variant:"outlined",liftUp:!0,align:"left",title:e.title,icon:F(C.c,{fontIconClass:e.icon,size:"medium",color:e.iconColor})}))}))))},M=o.a.createElement,P=Object(n.a)((function(){return{title:{fontWeight:700}}})),G=function(e){e.data;var a=e.className,t=Object(k.a)(e,["data","className"]),i=P(),o=Object(m.a)(),n=Object(u.a)(o.breakpoints.up("md"),{defaultMatches:!0});return M("div",Object(N.a)({className:a},t),M(d.a,{container:!0,spacing:n?4:2},M(d.a,{item:!0,xs:12,sm:6,"data-aos":"fade-up"},M(g.a,{variant:"h6",align:"left",className:i.title,gutterBottom:!0,color:"primary"},"What is it about?"),M(g.a,{variant:"subtitle1",align:"left",color:"textSecondary"},"Fill out our standardized application on our platform. Most applicants finish in under an hour.")),M(d.a,{item:!0,xs:12,sm:6,"data-aos":"fade-up"},M(g.a,{variant:"h6",align:"left",className:i.title,gutterBottom:!0,color:"primary"},"Who is it for?"),M(g.a,{variant:"subtitle1",color:"textSecondary",align:"left"},"Fill out our standardized application on our platform. Most applicants finish in under an hour."))))},q=o.a.createElement,R=function(e){var a=e.data,t=e.className,i=Object(k.a)(e,["data","className"]),n=Object(m.a)(),s=Object(u.a)(n.breakpoints.up("md"),{defaultMatches:!0});return q("div",Object(N.a)({className:t},i),q(C.e,{title:"Jobs",subtitle:q(o.a.Fragment,null,"Find a job you love.",q(O.e,{title:"\xa0Set career interests",variant:"h6"})),align:"left"}),q(d.a,{container:!0,spacing:s?4:2},a.map((function(e,a){return q(d.a,{key:a,item:!0,container:!0,alignItems:"center",direction:"column",xs:12,sm:6,md:4,"data-aos":"fade-up"},q(r.e,{variant:"outlined",liftUp:!0,jobTitle:e.jobTitle,badgeColor:e.color,badgeTitle:e.title,jobLocation:e.location,jobType:e.type,jobDate:e.date,companyName:e.companyName,companyLogo:e.companyLogo}))})),q(d.a,{item:!0,container:!0,justify:"center",xs:12,"data-aos":"fade-up"},q(y.a,{variant:"contained",color:"primary",size:"large"},"See all jobs"))))},W=o.a.createElement,z=Object(n.a)((function(e){return{title:{fontWeight:500},placementGrid:{display:"flex",marginTop:e.spacing(3)},placementGridItemMiddle:{margin:"0 ".concat(e.spacing(3),"px")}}})),B=function(e){e.data;var a=e.className,t=Object(k.a)(e,["data","className"]),i=z();return W("div",Object(N.a)({className:a},t),W(d.a,{container:!0,spacing:1,"data-aos":"fade-up"},W(d.a,{item:!0,xs:12},W(C.e,{label:"PLACEMENT RATES",title:W("span",null,W(g.a,{component:"span",variant:"inherit",color:"primary"},"TheFront is the leading job placement site")," ","with the highest rate of success of any tech job board."),subtitle:"We keep everything as simple as possible by standardizing the application process for all jobs.",align:"left",disableGutter:!0,titleClasses:i.title})),W(d.a,{item:!0,xs:12},W("div",{className:i.placementGrid},W("div",null,W(C.a,{end:112,suffix:"K",label:"Placement",textColor:"primary"})),W("div",{className:i.placementGridItemMiddle},W(C.a,{end:120,suffix:"K",label:"Positions",textColor:"primary"})),W("div",null,W(C.a,{end:168,suffix:"K",label:"Partners",textColor:"primary"}))))))},D=o.a.createElement,_=Object(n.a)((function(){return{typed:{fontWeight:"bold"}}})),U=function(e){var a=e.data,t=e.className,i=Object(k.a)(e,["data","className"]),n=_(),s=Object(m.a)(),c=Object(u.a)(s.breakpoints.up("md"),{defaultMatches:!0});return D("div",Object(N.a)({className:t},i),D(C.e,{title:D(o.a.Fragment,null,"Companies ",c?null:D("br",null)," you love \xa0",D(C.h,{component:"span",variant:"h4",color:"secondary",className:n.typed,typedProps:{strings:["Atlassian","Google","Slack","Mailchimp","Dropbox"],typeSpeed:50,loop:!0}})),subtitle:D(o.a.Fragment,null,"Find your second home.",D(O.e,{title:"\xa0Set career interests",variant:"h6"})),align:"left"}),D(d.a,{container:!0,spacing:c?4:2},a.map((function(e,a){return D(d.a,{key:a,item:!0,container:!0,alignItems:"center",direction:"column",xs:12,sm:6,md:4,"data-aos":"fade-up"},D(r.f,{variant:"outlined",liftUp:!0,jobTitle:e.title,jobLocation:e.location,companyLogo:e.companyLogo,companyName:e.companyName,jobsCount:e.jobs,companyInfo:e.subtitle}))})),D(d.a,{item:!0,container:!0,justify:"center",xs:12,"data-aos":"fade-up"},D(y.a,{variant:"contained",color:"secondary",size:"large"},"See all jobs"))))},J=o.a.createElement,H=function(e){var a=e.className,t=Object(k.a)(e,["className"]);return J("div",Object(N.a)({className:a},t),J(C.e,{title:"Keep your job applications organized and up to date",subtitle:"TheFront centralizes all your job applications, resumes, and work, whether they're from our platform or through another site or service.",fadeUp:!0,align:"left"}),J(C.b,{title:"Apply in 15 minutes",subtitle:"Get your dream job without the hassle.",primaryCta:J(y.a,{variant:"outlined",color:"primary",size:"large"},"Learn More"),secondaryCta:J(y.a,{variant:"contained",color:"primary",size:"large"},"Apply now"),align:"left"}))},Y=o.a.createElement,Z=function(e){var a=e.data,t=e.className,i=Object(k.a)(e,["data","className"]);return Y("div",Object(N.a)({className:t},i),Y(C.e,{title:"We are here to help",subtitle:"Checkout our F.A.Q. if you have some questions.",fadeUp:!0}),Y(r.a,{items:a}))},K=[{name:"Airbnb",logo:"https://assets.maccarianagency.com/the-front/logos/airbnb.svg"},{name:"Coinbase",logo:"https://assets.maccarianagency.com/the-front/logos/coinbase.svg"},{name:"Dribbble",logo:"https://assets.maccarianagency.com/the-front/logos/dribbble.svg"},{name:"Instagram",logo:"https://assets.maccarianagency.com/the-front/logos/instagram.svg"},{name:"Netflix",logo:"https://assets.maccarianagency.com/the-front/logos/netflix.svg"},{name:"Pinterest",logo:"https://assets.maccarianagency.com/the-front/logos/pinterest.svg"}],V=[{iconColor:p.a.blue,iconBg:p.a.blue,icon:"fas fa-pen-nib",title:"Web Design"},{iconColor:p.a.purple,iconBg:p.a.purple,icon:"fas fa-book-open",title:"Business Analytics"},{iconColor:p.a.amber,iconBg:p.a.amber,icon:"fas fa-camera-retro",title:"Photography"},{iconColor:p.a.indigo,iconBg:p.a.indigo,icon:"fas fa-video",title:"Video Creating"},{iconColor:p.a.pink,iconBg:p.a.pink,icon:"fas fa-heartbeat",title:"Health & Fitness"},{iconColor:p.a.green,iconBg:p.a.green,icon:"fas fa-bullhorn",title:"Marketing"},{iconColor:p.a.deepOrange,iconBg:p.a.deepOrange,icon:"fas fa-funnel-dollar",title:"Finances & Sales"},{iconColor:p.a.red,iconBg:p.a.red,icon:"fas fa-paint-brush",title:"Graphic Design"}],X=[{color:p.a.blue[500],title:"web design",jobTitle:"Web designer internship",type:"Full time",location:"Milan, Italy",date:"3 days ago",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",companyName:"Slack"},{color:p.a.purple[500],title:"business analytics",jobTitle:"Senior business analysts",type:"Full time",location:"Rome, Italy",date:"Just now",companyLogo:"https://assets.maccarianagency.com/the-front/logos/google-ad-manager.svg",companyName:"Google Ads"},{color:p.a.amber[500],title:"photography",jobTitle:"Mid-level photographer",type:"Remote",location:"Yerevan, Armenia",date:"1 week ago",companyLogo:"https://assets.maccarianagency.com/the-front/logos/atlassian.svg",companyName:"Atlassian"},{color:p.a.indigo[500],title:"video creating",jobTitle:"Senior video creator",type:"Part time",location:"Paris, France",date:"2 days ago",companyLogo:"https://assets.maccarianagency.com/the-front/logos/dropbox.svg",companyName:"Dropbox"},{color:p.a.pink[500],title:"health & fitness",jobTitle:"Expert fitness consultant",type:"Remote",location:"Yerevan, Armenia",date:"1 month ago",companyLogo:"https://assets.maccarianagency.com/the-front/logos/google-ad-manager.svg",companyName:"Google Ads"},{color:p.a.green[500],title:"marketing",jobTitle:"Senior digital marketing specialist",type:"Full time",location:"Milan, Italy",date:"4 days ago",companyLogo:"https://assets.maccarianagency.com/the-front/logos/google-drive.svg",companyName:"Google Drive"},{color:p.a.deepOrange[500],title:"finances & sales",jobTitle:"Senior sales manager",type:"Part Time",location:"Paris, France",date:"5 days ago",companyLogo:"https://assets.maccarianagency.com/the-front/logos/mailchimp.svg",companyName:"Mail Chimp"},{color:p.a.red[500],title:"graphic design",jobTitle:"Junior graphic designer",type:"Remote",location:"Milan, Italy",date:"2 weeks ago",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",companyName:"Slack"},{color:p.a.purple[500],title:"business analytics",jobTitle:"Senior business analysts",type:"Full time",location:"Rome, Italy",date:"Just now",companyLogo:"https://assets.maccarianagency.com/the-front/logos/google-ad-manager.svg",companyName:"Google Ads"}],$=[{title:"Photography",location:"Yerevan, Armenia",jobs:"3 jobs",companyLogo:"https://assets.maccarianagency.com/the-front/logos/atlassian.svg",companyName:"Atlassian",subtitle:"Keep your entire team in sync with development and easily manage tasks, goals, and deadlines."},{title:"Video Creating",location:"Paris, France",jobs:"4 jobs",companyLogo:"https://assets.maccarianagency.com/the-front/logos/dropbox.svg",companyName:"Dropbox",subtitle:"Sync any file store to Dropbox for automated sharing with people outside the company."},{title:"Health & Fitness",location:"Yerevan, Armenia",jobs:"10 jobs",companyLogo:"https://assets.maccarianagency.com/the-front/logos/google-ad-manager.svg",companyName:"Google Ads",subtitle:"Easily manage and edit any Adwords campaign inline to improve ROI with constant review."},{title:"Marketing",location:"Milan, Italy",jobs:"3 jobs",companyLogo:"https://assets.maccarianagency.com/the-front/logos/google-drive.svg",companyName:"Google Drive",subtitle:"Sync any file store to Google Drive for automated sharing with people outside the company."},{title:"Finances & Sales",location:"Paris, France",jobs:"2 jobs",companyLogo:"https://assets.maccarianagency.com/the-front/logos/mailchimp.svg",companyName:"Mail Chimp",subtitle:"Communicate important messages to your users through TheFront using Mailchimp as the delivery service."},{title:"Graphic Design",location:"Milan, Italy",jobs:"8 jobs",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",companyName:"Slack",subtitle:"Sync your team's work and activity to share automatically in a channel with a simple plugin."}],Q=[{id:"faq-1",title:"Flexible access to facilities.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",link:"Check it out"},{id:"faq-2",title:"Snacks, drinks, coffee, and more.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",link:"Check it out"},{id:"faq-3",title:"On site tech support.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",link:"Check it out"},{id:"faq-4",title:"Flexible access to facilities.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",link:"Check it out"},{id:"faq-5",title:"Snacks, drinks, coffee, and more.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",link:"Check it out"},{id:"faq-6",title:"On site tech support.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",link:"Check it out"}],ee=o.a.createElement,ae=Object(n.a)((function(e){return{root:{height:"100%",width:"100%"},sectionAlternate:{background:"transparent",backgroundImage:"linear-gradient(180deg, ".concat(e.palette.background.paper," 400px, ").concat(e.palette.primary.dark," 0%)")}}})),te=function(){var e=ae();return ee("div",{className:e.root},ee(x,null),ee(r.v,null,ee(L,{data:K})),ee(r.u,null,ee(T,null)),ee(s.a,null),ee(r.u,null,ee(A,{data:V})),ee(r.v,null,ee(G,null)),ee(r.u,null,ee(R,{data:X})),ee(r.v,null,ee(B,null)),ee(r.u,null,ee(U,{data:$})),ee(r.v,null,ee(H,null)),ee(r.v,{innerNarrowed:!0,className:e.sectionAlternate},ee(Z,{data:Q})))},ie=t("Exl5"),oe=t("69Y9"),ne=o.a.createElement;a.default=function(){return ne(oe.a,{component:te,layout:ie.a})}},b53Z:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/career-listing",function(){return t("Ar94")}])}},[["b53Z",0,1,2,4,3,5,6]]]);