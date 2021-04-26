(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[126],{"7LjA":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("HALo"),o=n("q1tI"),i=n.n(o),s=n("hlFM"),m=n("VPqE"),p=n("Jc4N"),a=i.a.createElement,l=[{name:"items",type:"object[]",default:"",description:"The array of numbers object which should consist of number and title"},{name:"className",type:"string",default:"",description:"External classes"},{name:"labelProps",type:"object",default:"",description:"The additional properties to pass to the label Typography component"},{name:"numberProps",type:"object",default:"",description:"The additional properties to pass to the number Typography component"}],u=function(e){var t=Object(r.a)({},e);return a("div",t,a(m.e,{title:"Description",gutterBottom:!0},a(m.b,{title:"SwiperNumber",path:"src/components/molecules/SwiperNumber/SwiperNumber.js",description:"Component to display the number swiper"})),a(m.e,{title:"Import",gutterBottom:!0},a(m.a,{code:"\nimport { SwiperNumber } from 'components/molecules';\n// or\nimport SwiperNumber from 'components/molecules/SwiperNumber';\n"})),a(m.e,{title:"Props & Methods",gutterBottom:!0},a(m.d,{dataProperties:l})),a(m.e,{title:"Example",gutterBottom:!0},a(i.a.Fragment,null,a(s.a,{marginBottom:2,display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:2,border:"1px solid #ccc",borderRadius:"4px"},a(p.g,{items:[{title:"attendees",number:"70,000+"},{title:"countries",number:"160+"},{title:"speakers",number:"1,200+"},{title:"journalists",number:"2,500+"},{title:"CEO's",number:"11,000+"},{title:"fimale",number:"46%"},{title:"investors",number:"1,200+"}]})),a(m.a,{code:"\nimport React from 'react';\nimport { Box } from '@material-ui/core';\nimport { SwiperNumber } from 'components/molecules';\nimport 'swiper/css/swiper.min.css';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display=\"flex\" justifyContent=\"space-evenly\" alignItems=\"center\" padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <SwiperNumber\n        items={[{\n            title: 'attendees',\n            number: '70,000+'\n        }, {\n            title: 'countries',\n            number: '160+'\n        }, {\n            title: 'speakers',\n            number: '1,200+'\n        }, {\n            title: 'journalists',\n            number: '2,500+'\n        }, {\n            title: 'CEO's',\n            number: '11,000+'\n        }, {\n            title: 'fimale',\n            number: '46%'\n        }, {\n            title: 'investors',\n            number: '1,200+'\n        }]}\n      />\n    </Box>\n  );\n}\n"}))))}}}]);