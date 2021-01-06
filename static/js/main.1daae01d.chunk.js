(this["webpackJsonpmovie-suggestion-app"]=this["webpackJsonpmovie-suggestion-app"]||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),o=n.n(c),i=n(14),r=n.n(i),s=n(21),l=(n(96),n(43)),j=n(10),b=n(16),d=Object(c.createContext)(),u=function(e){var t=e.children,n=Object(c.useState)((function(){for(var e=[],t=Object.keys(localStorage),n=t.length;n--;)e.push(JSON.parse(localStorage.getItem(t[n])));return console.log("imported nominees from storage",e),e})),o=Object(b.a)(n,2),i=o[0],r=o[1];return Object(a.jsx)(d.Provider,{value:[i,r],children:t})},h=n(140),m=n(26),p=n(141),O=n(142),x=n(83),f=n(161),g=n(143),v=n(162),w=n(145),I=n(146),y=n(76),N=n.n(y),k=n(54),S=n.n(k);n(97).config();var C=Object(h.a)((function(e){return{title:Object(s.a)({textDecoration:"none",color:"white",display:"none"},e.breakpoints.up("sm"),{display:"block"}),searchDiv:{marginLeft:"auto"},search:Object(s.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(m.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(m.b)(e.palette.common.white,.25)},right:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(s.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));var T,D=function(){var e=C(),t=Object(c.useContext)(d),n=Object(b.a)(t,2),o=n[0],i=(n[1],Object(c.useState)("")),r=Object(b.a)(i,2),s=r[0],u=r[1],h=Object(j.g)();return Object(a.jsx)(p.a,{position:"static",children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(l.b,{to:"".concat(ae),className:e.title,children:Object(a.jsx)(x.a,{variant:"h6",noWrap:!0,children:"Movie Nomination"})}),Object(a.jsx)("div",{className:e.searchDiv,children:Object(a.jsxs)("div",{className:e.search,children:[Object(a.jsx)("div",{className:e.searchIcon,children:Object(a.jsx)(N.a,{})}),Object(a.jsx)(f.a,{value:s,onChange:function(e){u(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&h.push("".concat(ae,"/search/").concat(s))},placeholder:"Search\u2026",autoFocus:!0,classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})}),Object(a.jsx)(l.b,{to:"".concat(ae),children:Object(a.jsx)(g.a,{"aria-label":"Nominations",children:Object(a.jsx)(v.a,{TransitionComponent:w.a,title:"".concat(o.length," Movies Nominated"),children:Object(a.jsx)(I.a,{color:"secondary",badgeContent:o.length,children:Object(a.jsx)(S.a,{className:e.nominationIcon})})})})})]})})},R=n(80),L=n(147),E=n(148),B=n(159),M=n(151),P=n(152),z=n(150),A=n(158),J=n(149),W=Object(h.a)({card:(T={margin:"auto",borderRadius:"1rem",boxShadow:"none",position:"relative",width:270,height:360,transition:"transform 0.3s"},Object(s.a)(T,"boxShadow","0 4px 8px rgba(0,0,0,0.35);"),Object(s.a)(T,"&:hover",{transform:"translate(0, -5px)"}),Object(s.a)(T,"&:after",{content:'""',display:"block",position:"absolute",width:"100%",height:"64%",bottom:0,zIndex:1,background:"linear-gradient(to top, #000, rgba(0,0,0,0))"}),T),content:{position:"absolute",zIndex:2,left:0,bottom:0,width:222},movieTitle:{fontFamily:"Spartan",fontWeight:700,color:"white",marginTop:0,marginBottom:8},movieYear:{color:"white",fontWeight:400,marginTop:0,marginBottom:0},cardImg:{verticalAlign:"text-top",width:270,height:360},nominateButton:{margin:8,position:"absolute",zIndex:2,color:"white",top:0,right:0}});var Y=function(e){var t=e.movie,n=W(),o=Object(c.useContext)(d),i=Object(b.a)(o,2),r=i[0],s=i[1],l=Object(c.useState)(!1),j=Object(b.a)(l,2),u=j[0],h=j[1],m=Object(c.useState)((function(){return r.some((function(e){return e.imdbID===t.imdbID}))})),p=Object(b.a)(m,2),O=p[0],x=p[1];return Object(a.jsxs)("div",{children:[Object(a.jsxs)(L.a,{className:n.card,children:["N/A"!==t.Poster&&Object(a.jsx)(E.a,{className:n.cardImg,component:"img",alt:t.Title,image:t.Poster,title:t.Title}),Object(a.jsx)(g.a,{className:n.nominateButton,variant:"outlined",value:"Nominate",selected:O,onClick:function(){localStorage.length>=5&&!O?h(!0):(O?(s((function(e){return e.filter((function(e){return e.imdbID!==t.imdbID}))})),localStorage.removeItem(t.imdbID)):(-1===r.findIndex((function(e){return e.imdbID===t.imdbID}))&&s((function(e){return[].concat(Object(R.a)(e),[t])})),localStorage.setItem(t.imdbID,JSON.stringify(t))),x(!O))},children:Object(a.jsx)(v.a,{TransitionComponent:w.a,title:"Nominate",enterDelay:500,children:Object(a.jsx)(S.a,{fontSize:"large",color:O?"secondary":"primary"})})}),Object(a.jsx)(J.a,{onClick:function(){return window.open("https://www.imdb.com/title/".concat(t.imdbID,"/"),"_blank")},children:Object(a.jsxs)(A.a,{py:3,px:3,className:n.content,children:[Object(a.jsx)("h2",{className:n.movieTitle,children:t.Title}),Object(a.jsx)("h3",{className:n.movieYear,children:t.Year})]})})]}),Object(a.jsxs)(B.a,{open:u,onClose:function(){h(!1)},"aria-labelledby":"Max Nominations Reached",children:[Object(a.jsx)(z.a,{id:"alert-dialog-title",children:"Alert:"}),Object(a.jsx)(M.a,{children:Object(a.jsx)(P.a,{id:"alert-dialog-description",children:"You have nominated ".concat(5," movies, please remove some of your nominations to be able to add this movie.")})})]})]})},F=n(153);var K=function(e){var t=e.movieList;return Object(a.jsx)(F.a,{container:!0,justify:"center",spacing:3,direction:"row",alignItems:"flex-start",children:t.map((function(e){return Object(a.jsx)(F.a,{item:!0,lg:3,children:Object(a.jsx)(Y,{movie:e})},e.imdbID)}))})},_=Object(h.a)((function(e){return{pageTitle:{marginLeft:15}}}));var q=function(){var e=_(),t=Object(c.useContext)(d),n=Object(b.a)(t,2),o=n[0];return n[1],Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:e.pageTitle,children:"Nominations:"}),Object(a.jsx)(K,{movieList:o})]})},G=n(61),H=n.n(G),Q=n(78),U=n(154),V=n(160),X=Object(h.a)((function(e){return{searchResult:Object(s.a)({},e.breakpoints.up("sm"),{display:"block"}),pageSelector:{margin:"35px 0",display:"flex",justifyContent:"center"},searchInfoText:{marginLeft:15}}}));var Z=function(e){var t=e.match,n=X(),o=t.params.id,i=Object(c.useState)({}),r=Object(b.a)(i,2),s=r[0],l=r[1],j=Object(c.useState)(1),d=Object(b.a)(j,2),u=d[0],h=d[1],m=Object(c.useState)(4),p=Object(b.a)(m,2),O=p[0],x=p[1];return Object(c.useEffect)((function(){(function(){var e=Object(Q.a)(H.a.mark((function e(){var t,n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?apikey=".concat("3405c1cf","&s=").concat(o,"&page=").concat(u));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n),x(Math.ceil(n.totalResults/10));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o,u]),Object(c.useEffect)((function(){h(1)}),[o]),Object(a.jsx)("div",{className:n.searchResult,children:"True"===s.Response?Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{className:n.searchInfoText,children:[s.totalResults," results found for ",o]}),Object(a.jsx)(K,{movieList:s.Search}),O>1&&Object(a.jsx)(V.a,{count:O,page:u,onChange:function(e,t){h(t),window.scrollTo(0,0)},className:n.pageSelector,color:"secondary"})]}):"False"===s.Response?Object(a.jsxs)("h2",{className:n.searchInfoText,children:["Error: ",s.Error]}):Object(a.jsx)(U.a,{color:"secondary"})})},$=n(155),ee=n(79),te=n(156),ne=n(157),ae="/movie-search-app",ce=Object(h.a)((function(e){return{page:Object(s.a)({maxWidth:1500,margin:"0 auto"},e.breakpoints.up("sm"),{})}}));var oe=function(){var e=ce(),t=Object($.a)("(prefers-color-scheme: dark)"),n=o.a.useMemo((function(){return Object(ee.a)({palette:{type:t?"dark":"light",primary:{light:"#00818a",main:"#8f1eff",dark:"#8f1eff"}}})}),[t]);return Object(a.jsxs)(te.a,{theme:n,children:[Object(a.jsx)(ne.a,{}),Object(a.jsx)(u,{children:Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(D,{}),Object(a.jsx)(j.d,{children:Object(a.jsxs)("div",{className:e.page,children:[Object(a.jsx)(j.b,{path:"".concat(ae),exact:!0,component:q}),Object(a.jsx)(j.b,{path:"".concat(ae,"/search/:id"),component:Z}),Object(a.jsx)(j.b,{path:"*",children:Object(a.jsx)(j.a,{to:"".concat(ae)})})]})})]})})})]})};r.a.render(Object(a.jsx)(oe,{}),document.getElementById("root"))},96:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.1daae01d.chunk.js.map