"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[566],{854:function(t,n,r){r.d(n,{Z:function(){return c}});var e=r(4039),a=r(184);function c(){return(0,a.jsx)(e.W0,{color:"pink",height:80,width:80,wrapperStyle:{justifyContent:"center"}})}},8623:function(t,n,r){r.d(n,{Df:function(){return p},TP:function(){return l},V0:function(){return f},tx:function(){return v},zv:function(){return d}});var e=r(5861),a=r(7757),c=r.n(a),u=r(4569),i=r.n(u),o=r(8235);i().defaults.baseURL="https://api.themoviedb.org/3";var s="30b880cb8af36a78b014f41021bfb163",p=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("/trending/all/day?api_key=".concat(s));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),o.Am.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("/search/movie?api_key=".concat(s,"&query=").concat(n));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),o.Am.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("/movie/".concat(n,"?api_key=").concat(s));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),o.Am.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("/movie/".concat(n,"/credits?api_key=").concat(s));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 7:t.prev=7,t.t0=t.catch(0),o.Am.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("/movie/".concat(n,"/reviews?api_key=").concat(s));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),o.Am.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}()},566:function(t,n,r){r.r(n),r.d(n,{default:function(){return v}});var e=r(5861),a=r(885),c=r(7757),u=r.n(c),i=r(854),o=r(2791),s=r(6871),p=r(4549),f=r(8623),l=r(7388),d=r(184);function v(){var t=(0,o.useState)(null),n=(0,a.Z)(t,2),r=n[0],c=n[1],v=(0,s.UO)().movieId;return(0,o.useEffect)((function(){var t=function(){var t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.zv(v);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[v]),(0,d.jsxs)(d.Fragment,{children:[!r&&(0,d.jsx)(i.Z,{}),0===(null===r||void 0===r?void 0:r.length)&&(0,d.jsx)("p",{children:"We don't have any casters info for the movie"}),(null===r||void 0===r?void 0:r.length)>0&&(0,d.jsx)(p.RO,{children:(0,d.jsx)("ul",{children:r.map((function(t){return(0,d.jsxs)(l.H,{children:[t.profile_path?(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.profile_path),alt:r.original_name}):(0,d.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png",alt:"Unknown",width:200,height:300}),(0,d.jsx)("p",{children:t.original_name}),(0,d.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})})]})}},7388:function(t,n,r){r.d(n,{H:function(){return c}});var e,a=r(168),c=r(1223).Z.li(e||(e=(0,a.Z)(["\n  padding: 5px 0px;\n"])))},4549:function(t,n,r){r.d(n,{RO:function(){return o},Zx:function(){return s},j0:function(){return p}});var e,a,c,u=r(168),i=r(1223),o=i.Z.div(e||(e=(0,u.Z)(["\n  display: flex;\n  margin-top: 10px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #2a363b;\n"]))),s=i.Z.div(a||(a=(0,u.Z)(["\n  margin-left: 20px;\n"]))),p=i.Z.ul(c||(c=(0,u.Z)(["\n  padding-bottom: 20px;\n  border-bottom: 1px solid #2a363b;\n"])))}}]);
//# sourceMappingURL=566.b0ca0727.chunk.js.map