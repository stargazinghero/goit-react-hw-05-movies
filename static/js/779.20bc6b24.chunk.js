"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{854:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(4039),a=t(184);function i(){return(0,a.jsx)(r.W0,{color:"pink",height:80,width:80,wrapperStyle:{justifyContent:"center"}})}},8623:function(e,n,t){t.d(n,{Df:function(){return p},TP:function(){return l},V0:function(){return d},tx:function(){return f},zv:function(){return m}});var r=t(5861),a=t(7757),i=t.n(a),c=t(4569),s=t.n(c),o=t(8235);s().defaults.baseURL="https://api.themoviedb.org/3";var u="30b880cb8af36a78b014f41021bfb163",p=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/trending/all/day?api_key=".concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),o.Am.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/search/movie?api_key=".concat(u,"&query=").concat(n));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),o.Am.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(n,"?api_key=").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),o.Am.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(n,"/credits?api_key=").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),o.Am.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(n,"/reviews?api_key=").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),o.Am.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},7388:function(e,n,t){t.d(n,{H:function(){return i}});var r,a=t(168),i=t(1223).Z.li(r||(r=(0,a.Z)(["\n  padding: 5px 0px;\n"])))},4549:function(e,n,t){t.d(n,{RO:function(){return o},Zx:function(){return u},j0:function(){return p}});var r,a,i,c=t(168),s=t(1223),o=s.Z.div(r||(r=(0,c.Z)(["\n  display: flex;\n  margin-top: 10px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #2a363b;\n"]))),u=s.Z.div(a||(a=(0,c.Z)(["\n  margin-left: 20px;\n"]))),p=s.Z.ul(i||(i=(0,c.Z)(["\n  padding-bottom: 20px;\n  border-bottom: 1px solid #2a363b;\n"])))},4779:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(5861),a=t(885),i=t(7757),c=t.n(i),s=t(854),o=t(2791),u=t(3504),p=t(6871),d=t(8623),l=t(7762),m=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function f(e){var n,t=[],r=(0,l.Z)(m);try{for(r.s();!(n=r.n()).done;){var a=n.value;e.includes(a.id)&&t.push(a.name)}}catch(i){r.e(i)}finally{r.f()}return e.length>2&&t.splice(2,t.length-2,"Other"),t.join(", ")}var v=t(4549),h=t(7388),x=t(184);function g(){var e,n=(0,o.useState)({}),t=(0,a.Z)(n,2),i=t[0],l=t[1],m=(0,p.UO)().movieId,g=(0,p.s0)(),w=(0,p.TH)();(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.TP(m);case 2:n=e.sent,l(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[m]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("button",{type:"button",onClick:function(){return function(){var e,n;if(w.pathname.includes("cast")||w.pathname.includes("reviews")||null!==w&&void 0!==w&&null!==(e=w.state)&&void 0!==e&&null!==(n=e.from)&&void 0!==n&&n.search)return g(w.state.from.pathname+w.state.from.search);g("/")}()},children:"Go Back"}),!i&&(0,x.jsx)(s.Z,{}),i&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(v.RO,{children:[i.poster_path?(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(i.poster_path),alt:i.original_title}):(0,x.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png",alt:"Unknown"}),(0,x.jsxs)(v.Zx,{children:[(0,x.jsxs)("h1",{children:[i.title," (",null===i||void 0===i||null===(e=i.release_date)||void 0===e?void 0:e.split("-")[0],")"]}),(0,x.jsxs)("p",{children:["User score: ",10*i.vote_average,"%"]}),(0,x.jsx)("h2",{children:"Overview"}),(0,x.jsx)("p",{children:i.overview}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("p",{children:f(m)})]})]}),(0,x.jsx)("p",{children:"Additional information"}),(0,x.jsxs)(v.j0,{children:[(0,x.jsx)(h.H,{children:(0,x.jsx)(u.OL,{to:"cast",state:w.state,children:"Cast"})}),(0,x.jsx)(h.H,{children:(0,x.jsx)(u.OL,{to:"reviews",state:w.state,children:"Reviews"})})]}),(0,x.jsx)(p.j3,{})]})]})}}}]);
//# sourceMappingURL=779.20bc6b24.chunk.js.map