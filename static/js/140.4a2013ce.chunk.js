"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[140],{600:function(n,e,t){t.d(e,{Df:function(){return o},M1:function(){return s},TP:function(){return u},tx:function(){return d},z1:function(){return a}});var c=t(243),i="ccc2edcdb92f9b2d49f8d4ee31d7d307",r="https://api.themoviedb.org/3",o=function(){return c.Z.get("".concat(r,"/trending/movie/day?api_key=").concat(i))},a=function(n){return c.Z.get("".concat(r,"/search/movie?api_key=").concat(i,"&query=").concat(n))},u=function(n){return c.Z.get("".concat(r,"/movie/").concat(n,"?api_key=").concat(i))},s=function(n){return c.Z.get("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(i))},d=function(n){return c.Z.get("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(i))}},425:function(n,e,t){t.d(e,{Z:function(){return i}});t(791);var c=t(184);function i(){return(0,c.jsx)("div",{className:"header",children:(0,c.jsxs)("ul",{className:"header__list",children:[(0,c.jsx)("li",{className:"header__item",children:"Home"}),(0,c.jsx)("li",{className:"header__item",children:"Movies"})]})})}},140:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var c=t(791),i=t(439),r=t(425),o=t(600),a=t(87),u=t(184);function s(){var n=(0,c.useState)([]),e=(0,i.Z)(n,2),t=e[0],s=e[1];return(0,c.useEffect)((function(){(0,o.Df)().then((function(n){s(n.data.results)})).catch((function(n){console.error("Error ",n)}))}),[]),(0,u.jsxs)("div",{className:"main",children:[(0,u.jsx)(r.Z,{}),(0,u.jsx)("h2",{className:"main__title",children:"Trending today"}),(0,u.jsx)("ul",{children:t.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})}function d(){return(0,u.jsx)("div",{children:(0,u.jsx)(s,{})})}}}]);
//# sourceMappingURL=140.4a2013ce.chunk.js.map