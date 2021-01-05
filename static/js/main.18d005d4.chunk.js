(this["webpackJsonpmovie-suggestion-app"]=this["webpackJsonpmovie-suggestion-app"]||[]).push([[0],{87:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),o=n.n(c),i=n(13),r=n.n(i),s=n(19),l=(n(87),n(48)),j=n(10),b=n(16),u=Object(c.createContext)(),d=function(e){var t=Object(c.useState)((function(){for(var e=[],t=Object.keys(localStorage),n=t.length;n--;)e.push(JSON.parse(localStorage.getItem(t[n])));return console.log("imported nominees from storage",e),e})),n=Object(b.a)(t,2),o=n[0],i=n[1];return Object(a.jsx)(u.Provider,{value:[o,i],children:e.children})},h=n(132),m=n(21),p=n(133),O=n(134),g=n(135),x=n(148),f=n(149),v=n(136),w=n(137),I=n(70),y=n.n(I),N=n(49),k=n.n(N);n(88).config();var S=Object(h.a)((function(e){return{title:Object(s.a)({textDecoration:"none",color:"white",display:"none"},e.breakpoints.up("sm"),{display:"block"}),searchDiv:{marginLeft:"auto"},search:Object(s.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(m.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(m.b)(e.palette.common.white,.25)},right:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(s.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),nominationIcon:{marginLeft:7}}}));var C,D=function(){var e=S(),t=Object(c.useState)(""),n=Object(b.a)(t,2),o=n[0],i=n[1],r=Object(c.useContext)(u),s=Object(b.a)(r,2),d=s[0],h=(s[1],Object(j.g)());return Object(a.jsx)(p.a,{position:"static",children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(l.b,{to:"".concat($),className:e.title,children:Object(a.jsx)(g.a,{variant:"h6",noWrap:!0,children:"Movie Nomination"})}),Object(a.jsx)("div",{className:e.searchDiv,children:Object(a.jsxs)("div",{className:e.search,children:[Object(a.jsx)("div",{className:e.searchIcon,children:Object(a.jsx)(y.a,{})}),Object(a.jsx)(x.a,{value:o,onChange:function(e){i(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&h.push("".concat($,"/search/").concat(o))},placeholder:"Search\u2026",autoFocus:!0,classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})}),Object(a.jsx)(f.a,{TransitionComponent:v.a,title:"".concat(d.length," Movies Nominated"),children:Object(a.jsx)(w.a,{color:"secondary",badgeContent:d.length,children:Object(a.jsx)(k.a,{className:e.nominationIcon})})})]})})},R=n(74),T=n(138),E=n(139),L=n(140),P=n(146),z=Object(h.a)({card:(C={margin:"auto",borderRadius:"1rem",boxShadow:"none",position:"relative",width:270,height:360,transition:"transform 0.3s"},Object(s.a)(C,"boxShadow","0 4px 8px rgba(0,0,0,0.35);"),Object(s.a)(C,"&:hover",{transform:"translate(0, -5px)"}),Object(s.a)(C,"&:after",{content:'""',display:"block",position:"absolute",width:"100%",height:"64%",bottom:0,zIndex:1,background:"linear-gradient(to top, #000, rgba(0,0,0,0))"}),C),content:{position:"absolute",zIndex:2,left:0,bottom:0,width:222},movieTitle:{fontFamily:"Spartan",fontWeight:700,color:"white",marginTop:0,marginBottom:8},movieYear:{color:"white",fontWeight:400,marginTop:0,marginBottom:0},cardImg:{verticalAlign:"text-top",width:270,height:360},nominateButton:{margin:8,position:"absolute",zIndex:2,color:"white",top:0,right:0}});var B=function(e){var t=z(),n=Object(c.useContext)(u),o=Object(b.a)(n,2),i=o[0],r=o[1],s=e.movie,l=Object(c.useState)((function(){return i.some((function(e){return e.imdbID===s.imdbID}))})),j=Object(b.a)(l,2),d=j[0],h=j[1];return Object(a.jsx)("div",{children:Object(a.jsxs)(T.a,{className:t.card,children:["N/A"!==s.Poster&&Object(a.jsx)(E.a,{className:t.cardImg,component:"img",alt:s.Title,image:s.Poster,title:s.Title}),Object(a.jsx)(L.a,{className:t.nominateButton,variant:"outlined",value:"Nominate",selected:d,onClick:function(){localStorage.length>=5&&!d?alert("You have nominated 5 movies!"):(d?(r((function(e){return e.filter((function(e){return e.imdbID!==s.imdbID}))})),localStorage.removeItem(s.imdbID)):(-1===i.findIndex((function(e){return e.imdbID===s.imdbID}))&&r((function(e){return[].concat(Object(R.a)(e),[s])})),localStorage.setItem(s.imdbID,JSON.stringify(s))),h(!d))},children:Object(a.jsx)(f.a,{TransitionComponent:v.a,title:"Nominate",enterDelay:500,children:Object(a.jsx)(k.a,{fontSize:"large",color:d?"secondary":"primary"})})}),Object(a.jsxs)(P.a,{py:3,px:3,className:t.content,children:[Object(a.jsx)("h2",{className:t.movieTitle,children:s.Title}),Object(a.jsx)("h3",{className:t.movieYear,children:s.Year})]})]})})},J=n(141),M=Object(h.a)((function(e){return{gridItem:{width:"350px"}}}));var W=function(e){var t=M();return Object(a.jsx)(J.a,{container:!0,justify:"center",spacing:3,direction:"row",alignItems:"flex-start",children:e.movieList.map((function(e){return Object(a.jsx)(J.a,{className:t.gridItem,item:!0,lg:3,children:Object(a.jsx)(B,{movie:e})},e.imdbID)}))})};var Y=function(){var e=Object(c.useContext)(u),t=Object(b.a)(e,2),n=t[0];return t[1],Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Nominations:"}),Object(a.jsx)(W,{movieList:n})]})},A=n(56),F=n.n(A),K=n(72),q=n(142),G=n(147),H=Object(h.a)((function(e){return{searchResult:Object(s.a)({},e.breakpoints.up("sm"),{display:"block"}),CircularProgress:{},pageSelector:{margin:"35px 0",display:"flex",justifyContent:"center"}}}));var Q=function(e){var t=H(),n=e.match.params.id,o=Object(c.useState)({}),i=Object(b.a)(o,2),r=i[0],s=i[1],l=Object(c.useState)(1),j=Object(b.a)(l,2),u=j[0],d=j[1],h=Object(c.useState)(4),m=Object(b.a)(h,2),p=m[0],O=m[1];return Object(c.useEffect)((function(){(function(){var e=Object(K.a)(F.a.mark((function e(){var t,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?apikey=".concat("3405c1cf","&s=").concat(n,"&page=").concat(u));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(a),O(Math.ceil(a.totalResults/10));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n,u]),Object(c.useEffect)((function(){d(1)}),[n]),Object(a.jsx)("div",{className:t.searchResult,children:"True"===r.Response?Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{children:[r.totalResults," results found for ",n]}),Object(a.jsx)(W,{movieList:r.Search}),p>1&&Object(a.jsx)(G.a,{count:p,page:u,onChange:function(e,t){d(t),window.scrollTo(0,0)},className:t.pageSelector,color:"secondary",size:"large"})]}):"False"===r.Response?Object(a.jsxs)("h2",{children:["Error: ",r.Error]}):Object(a.jsx)(q.a,{color:"secondary"})})},U=n(143),V=n(73),X=n(144),Z=n(145),$="/movie-search-app",_=Object(h.a)((function(e){return{page:Object(s.a)({maxWidth:1500,margin:"0 auto"},e.breakpoints.up("sm"),{})}}));var ee=function(){var e=_(),t=Object(U.a)("(prefers-color-scheme: dark)"),n=o.a.useMemo((function(){return Object(V.a)({palette:{type:t?"dark":"light",primary:{light:"#00818a",main:"#8f1eff",dark:"#8f1eff"}}})}),[t]);return Object(a.jsxs)(X.a,{theme:n,children:[Object(a.jsx)(Z.a,{}),Object(a.jsx)(d,{children:Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(D,{}),Object(a.jsx)(j.d,{children:Object(a.jsxs)("div",{className:e.page,children:[Object(a.jsx)(j.b,{path:"".concat($),exact:!0,component:Y}),Object(a.jsx)(j.b,{path:"".concat($,"/search/:id"),component:Q}),Object(a.jsx)(j.b,{path:"*",children:Object(a.jsx)(j.a,{to:"".concat($)})})]})})]})})})]})};r.a.render(Object(a.jsx)(ee,{}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.18d005d4.chunk.js.map