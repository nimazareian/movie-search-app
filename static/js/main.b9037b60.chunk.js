(this["webpackJsonpmovie-suggestion-app"]=this["webpackJsonpmovie-suggestion-app"]||[]).push([[0],{87:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),o=n.n(c),r=n(13),i=n.n(r),s=(n(87),n(48)),l=n(10),j=n(16),b=n(22),u=Object(c.createContext)(),d=function(e){var t=Object(c.useState)((function(){for(var e=[],t=Object.keys(localStorage),n=t.length;n--;)e.push(JSON.parse(localStorage.getItem(t[n])));return console.log("imported nominees from storage",e),e})),n=Object(j.a)(t,2),o=n[0],r=n[1];return Object(a.jsx)(u.Provider,{value:[o,r],children:e.children})},h=n(134),m=n(20),p=n(135),O=n(136),g=n(137),f=n(150),x=n(138),v=n(139),w=n(70),I=n.n(w),y=n(49),k=n.n(y);n(88).config();var N=Object(h.a)((function(e){return{title:Object(b.a)({textDecoration:"none",color:"white",display:"none"},e.breakpoints.up("sm"),{display:"block"}),searchDiv:{marginLeft:"auto"},search:Object(b.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(m.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(m.b)(e.palette.common.white,.25)},right:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(b.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));var S,C=function(){var e=N(),t=Object(c.useState)(""),n=Object(j.a)(t,2),o=n[0],r=n[1],i=Object(c.useContext)(u),b=Object(j.a)(i,2),d=b[0],h=(b[1],Object(l.f)());return Object(l.g)(),Object(a.jsx)(p.a,{position:"static",children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(s.b,{to:"/",className:e.title,children:Object(a.jsx)(g.a,{variant:"h6",noWrap:!0,children:"Movie Nomination"})}),Object(a.jsx)("div",{className:e.searchDiv,children:Object(a.jsxs)("div",{className:e.search,children:[Object(a.jsx)("div",{className:e.searchIcon,children:Object(a.jsx)(I.a,{})}),Object(a.jsx)(f.a,{value:o,onChange:function(e){r(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&h.push("/search/".concat(o))},placeholder:"Search\u2026",autoFocus:!0,classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})}),Object(a.jsx)(x.a,{"aria-label":"Close",color:"inherit",onClick:function(){console.log("nominations",d)},children:Object(a.jsx)(v.a,{color:"secondary",badgeContent:d.length,children:Object(a.jsx)(k.a,{})})},"close")]})})},D=n(74),R=n(140),T=n(141),E=n(148),L=n(151),P=n(142),z=Object(h.a)({card:(S={margin:"auto",borderRadius:"1rem",boxShadow:"none",position:"relative",width:270,height:360,transition:"transform 0.3s"},Object(b.a)(S,"boxShadow","0 4px 8px rgba(0,0,0,0.35);"),Object(b.a)(S,"&:hover",{transform:"translate(0, -5px)"}),Object(b.a)(S,"&:after",{content:'""',display:"block",position:"absolute",width:"100%",height:"64%",bottom:0,zIndex:1,background:"linear-gradient(to top, #000, rgba(0,0,0,0))"}),S),content:{position:"absolute",zIndex:2,left:0,bottom:0,width:222},movieTitle:{fontFamily:"Spartan",fontWeight:700,color:"white",marginTop:0,marginBottom:8},movieYear:{color:"white",fontWeight:400,marginTop:0,marginBottom:0},cardImg:{verticalAlign:"text-top",width:270,height:360},nominateButton:{margin:8,position:"absolute",zIndex:2,color:"white",top:0,right:0}});var B=function(e){var t=z(),n=Object(c.useContext)(u),o=Object(j.a)(n,2),r=o[0],i=o[1],s=e.movie,l=Object(c.useState)((function(){return r.some((function(e){return e.imdbID===s.imdbID}))})),b=Object(j.a)(l,2),d=b[0],h=b[1];return Object(a.jsx)("div",{children:Object(a.jsxs)(R.a,{className:t.card,children:["N/A"!==s.Poster&&Object(a.jsx)(T.a,{className:t.cardImg,component:"img",alt:s.Title,image:s.Poster,title:s.Title}),Object(a.jsx)(x.a,{className:t.nominateButton,variant:"outlined",value:"Nominate",selected:d,onClick:function(){localStorage.length>=5&&!d?alert("You have nominated 5 movies!"):(d?(i((function(e){return e.filter((function(e){return e.imdbID!==s.imdbID}))})),localStorage.removeItem(s.imdbID)):(-1===r.findIndex((function(e){return e.imdbID===s.imdbID}))&&i((function(e){return[].concat(Object(D.a)(e),[s])})),localStorage.setItem(s.imdbID,JSON.stringify(s))),h(!d))},children:Object(a.jsx)(L.a,{TransitionComponent:P.a,title:"Nominate",enterDelay:500,children:Object(a.jsx)(k.a,{fontSize:"large",color:d?"secondary":"primary"})})}),Object(a.jsxs)(E.a,{py:3,px:3,className:t.content,children:[Object(a.jsx)("h2",{className:t.movieTitle,children:s.Title}),Object(a.jsx)("h3",{className:t.movieYear,children:s.Year})]})]})})},J=n(143),Y=Object(h.a)((function(e){return{gridItem:{width:"350px"}}}));var A=function(e){var t=Y();return Object(a.jsx)(J.a,{container:!0,justify:"center",spacing:3,direction:"row",alignItems:"flex-start",children:e.movieList.map((function(e){return Object(a.jsx)(J.a,{className:t.gridItem,item:!0,lg:3,children:Object(a.jsx)(B,{movie:e})},e.imdbID)}))})};var F=function(){var e=Object(c.useContext)(u),t=Object(j.a)(e,2),n=t[0];return t[1],Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Nominations:"}),Object(a.jsx)(A,{movieList:n})]})},M=n(55),W=n.n(M),K=n(72),q=n(144),G=n(149),H=Object(h.a)((function(e){return{searchResult:Object(b.a)({},e.breakpoints.up("sm"),{display:"block"}),CircularProgress:{},pageSelector:{margin:"35px 0",display:"flex",justifyContent:"center"}}}));var Q=function(e){var t=H(),n=e.match.params.id,o=Object(c.useState)({}),r=Object(j.a)(o,2),i=r[0],s=r[1],l=Object(c.useState)(1),b=Object(j.a)(l,2),u=b[0],d=b[1],h=Object(c.useState)(4),m=Object(j.a)(h,2),p=m[0],O=m[1];Object(c.useEffect)((function(){g()}),[n,u]),Object(c.useEffect)((function(){d(1)}),[n]);var g=function(){var e=Object(K.a)(W.a.mark((function e(){var t,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?apikey=".concat("3405c1cf","&s=").concat(n,"&page=").concat(u));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(a),O(Math.ceil(a.totalResults/10));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:t.searchResult,children:"True"===i.Response?Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{children:[i.totalResults," results found for ",n]}),Object(a.jsx)(A,{movieList:i.Search}),p>1&&Object(a.jsx)(G.a,{count:p,page:u,onChange:function(e,t){d(t),window.scrollTo(0,0),console.log(u)},className:t.pageSelector,color:"secondary",size:"large"})]}):"False"===i.Response?Object(a.jsxs)("h2",{children:["Error: ",i.Error]}):Object(a.jsx)(q.a,{color:"secondary"})})},U=n(145),V=n(73),X=n(146),Z=n(147);var $=function(){var e=Object(U.a)("(prefers-color-scheme: dark)"),t=o.a.useMemo((function(){return Object(V.a)({palette:{type:e?"dark":"light",primary:{light:"#00818a",main:"#8f1eff",dark:"#8f1eff"}}})}),[e]);return Object(a.jsxs)(X.a,{theme:t,children:[Object(a.jsx)(Z.a,{}),Object(a.jsx)(d,{children:Object(a.jsx)(s.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(C,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/",exact:!0,component:F}),Object(a.jsx)(l.a,{path:"/search/:id",component:Q})]})]})})})]})};i.a.render(Object(a.jsx)($,{}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.b9037b60.chunk.js.map