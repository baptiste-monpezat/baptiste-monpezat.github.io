(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"96B7":function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"58e5f485-f4ef-5b36-9153-aef651ed74be","excerpt":"Stochastic Gradient Descent is today’s standard optimization method for large-scale machine learning problems. It is used for the training…","timeToRead":7,"frontmatter":{"title":"Stochastic Gradient Descent for machine learning clearly explained","date":"April 27, 2019","tags":["Data Science","Statistics","Stochastic Gradient Descent"]},"fields":{"slug":"/blog/stochastic-gradient-descent-for-machine-learning-clearly-explained"}}}]}}}')},MIjj:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"group":[{"fieldValue":"Data Science","totalCount":1},{"fieldValue":"Statistics","totalCount":1},{"fieldValue":"Stochastic Gradient Descent","totalCount":1}]}}}')},PBHM:function(e,t,a){a("SRfc");e.exports=function(e){return e&&e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-")}},ZPSe:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"58e5f485-f4ef-5b36-9153-aef651ed74be","frontmatter":{"title":"Stochastic Gradient Descent for machine learning clearly explained"},"fields":{"slug":"/blog/stochastic-gradient-descent-for-machine-learning-clearly-explained"}}}],"totalCount":1}}}')},cgSC:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a("q1tI"),r=a.n(n),o=a("+ZDr"),l=a.n(o),i=a("vOnD"),c=a("IP2g"),d=a("kByy"),u=a("PBHM"),s=a.n(u),m=i.d.article.withConfig({displayName:"BlogCard__PostWrapper",componentId:"sc-4iowlm-0"})(["overflow:auto;margin-bottom:70px;padding:30px 30px;border-top:5px solid ",";border-radius:10px;box-shadow:",";background-color:",";&:hover{box-shadow:0 5px 10px rgba(0,0,0,0.1);}span{font-size:13px;color:gray;}"],(function(e){return e.theme.dark?e.theme.accentColor:e.theme.primaryColor}),(function(e){return e.theme.shadowSmall}),(function(e){return e.theme.secondaryColor})),f=function(e){var t=e.date,a=e.readtime;return r.a.createElement("span",{style:{fontSize:13,color:"gray"}},r.a.createElement("span",{"aria-label":"publish date "+t},r.a.createElement(c.a,{color:"gray",icon:"calendar-alt"}),"  ",t),"   ",r.a.createElement("span",{"aria-label":a+" minutes read"},r.a.createElement(c.a,{color:"gray",icon:"clock"}),"  ",a,"min read"))};t.b=function(e){var t=e.date,a=e.readtime,n=e.title,o=e.excerpt,i=e.slug,c=e.tags;return r.a.createElement(l.a,{to:i,"aria-label":n+" - read time "+a+" minutes"},r.a.createElement(m,null,r.a.createElement(f,{date:t,readtime:a}),r.a.createElement("h2",null,n),r.a.createElement("p",null,o),r.a.createElement("div",{style:{marginTop:20}},c.map((function(e){return r.a.createElement(d.a,{key:e,"aria-label":e+" tag",to:"/blog/tags/"+s()(e)+"/"},e)})))))}},kByy:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("MIjj"),r=a("q1tI"),o=a.n(r),l=a("vOnD"),i=a("Wbzz"),c=a("PBHM"),d=a.n(c),u=Object(l.d)(i.Link).withConfig({displayName:"Tags__TagBreadcrumb",componentId:"p98pqd-0"})(["float:left;border:1px solid ",";border-radius:50px;padding:8px 13px;line-height:10px;margin:5px;font-size:12px;&:hover{background:",";color:",";}"],(function(e){return e.theme.dark?e.theme.primaryColor:"#d9e0ff"}),(function(e){return e.theme.dark?e.theme.primaryColor:"#d9e0ff"}),(function(e){return e.theme.dark?"#d9e0ff":"#6D83F2"}));t.b=function(){var e=n.data;return o.a.createElement("section",{style:{overflow:"auto"}},e.allMarkdownRemark.group.map((function(e){return o.a.createElement(u,{key:e.fieldValue,to:"/blog/tags/"+d()(e.fieldValue)+"/","aria-label":e.totalCount+" posts tagged with "+e.fieldValue},e.fieldValue,", ",e.totalCount)})))}},u2mt:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("+ZDr"),l=a.n(o),i=a("kByy"),c=a("how0"),d=a("ZPSe"),u=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},s=function(){var e=d.data,t=e.allMarkdownRemark.edges[u(0,e.allMarkdownRemark.totalCount-1)];if("undefined"!=typeof window)for(;t.node.fields.slug===window.location.pathname;){t=e.allMarkdownRemark.edges[u(0,e.allMarkdownRemark.totalCount-1)];break}return{randomSlug:t.node.fields.slug,randomTitle:t.node.frontmatter.title}};t.a=function(e){var t=e.children,a=e.sharerSection,n=s(),o=n.randomSlug,d=n.randomTitle;return r.a.createElement(c.a,{content:t,aside:r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement("h4",null,"Random post"),r.a.createElement(l.a,{style:{fontSize:"16px"},to:o},d),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("section",null,r.a.createElement("h4",null,"Tags"),r.a.createElement(i.b,null),r.a.createElement("br",null)),a&&a)})}},vx99:function(e,t,a){"use strict";a.r(t);var n=a("96B7"),r=a("q1tI"),o=a.n(r),l=a("yBb5"),i=a("vrFN"),c=a("cgSC"),d=a("u2mt");t.default=function(){var e=n.data;return o.a.createElement(l.a,null,o.a.createElement(i.a,{title:"Blog | Baptiste Monpezat"}),o.a.createElement(d.a,null,e.allMarkdownRemark.edges.map((function(e){var t=e.node;return o.a.createElement(c.b,{key:t.id,slug:t.fields.slug,title:t.frontmatter.title,date:t.frontmatter.date,tags:t.frontmatter.tags,readtime:t.timeToRead,excerpt:t.excerpt})}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-32cbc9f3e78f8e1aa6e5.js.map