(this["webpackJsonpcountry-table"]=this["webpackJsonpcountry-table"]||[]).push([[0],{25:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(17),o=n.n(a),s=(n(25),n(3)),i=n(18),j=n.n(i),u=n(20),l=n(0),d=function(e){var t=e.countryData,n=c.a.useRef(null),r=c.a.useState(t),a=Object(s.a)(r,2),o=a[0],i=a[1],j=c.a.useState({category:"name",order:"asc"}),d=Object(s.a)(j,2),h=d[0],b=d[1],O=function(e,t){var n=h.category,r="asc"===h.order?e[n]:t[n],c="asc"===h.order?t[n]:e[n];return"string"===typeof r?r.localeCompare(c):r-c},x=function(e){e===h.category?b({category:e,order:"asc"===h.order?"desc":"asc"}):b({category:e,order:"asc"})};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{ref:n,onChange:function(){var e=n.current.value.toLowerCase();i(t.filter((function(t){return t.name.toLowerCase().includes(e)||t.region.toLowerCase().includes(e)})).sort(O))},placeholder:"Search for coutries or regions..."}),Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{}),Object(l.jsx)("th",{onClick:function(){return x("name")},children:"Name"}),Object(l.jsx)("th",{onClick:function(){return x("region")},children:"Region"}),Object(l.jsx)("th",{onClick:function(){return x("area")},children:"Area"}),Object(l.jsx)("th",{onClick:function(){return x("population")},children:"Population"})]})}),Object(l.jsx)("tbody",{children:o.sort(O).map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(u.a)(e.alpha2Code)}),Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.region}),Object(l.jsx)("td",{children:e.area?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("strong",{children:(t=e.area,Math.round(t/.386102))})," square miles"]}):Object(l.jsx)("em",{children:"Unknown"})}),Object(l.jsxs)("td",{children:[Object(l.jsx)("strong",{children:Math.round(e.population/1e5)/10})," ","milion"]})]},e.alpha2Code);var t}))})]})]})},h=n(19),b=function(e){var t=e.countryData,n=c.a.useState({}),r=Object(s.a)(n,2),a=r[0],o=r[1];return c.a.useEffect((function(){var e={};t.forEach((function(t){t.languages.forEach((function(n){e[n.name]=[].concat(Object(h.a)(e[n.name]||[]),[t.name])}))})),o(e)}),[t]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Language"}),Object(l.jsx)("th",{children:"Countries"})]})}),Object(l.jsx)("tbody",{children:Object.entries(a).map((function(e){var t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:n})}),Object(l.jsx)("td",{children:r.join(", ")})]},n)}))})]})})},O=function(e){var t,n=e.countryData;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{children:["Average population per country:"," ",Object(l.jsx)("strong",{children:(t=n,Math.round(t.reduce((function(e,n){return e+n.population/t.length}),0)))})]}),Object(l.jsxs)("p",{children:["Biggest country: ",Object(l.jsx)("strong",{children:n.filter((function(e){return e.area})).reduce((function(e,t){return e.area>t.area?e:t})).name})]}),Object(l.jsxs)("p",{children:["Smallest country: ",Object(l.jsx)("strong",{children:n.filter((function(e){return e.area})).reduce((function(e,t){return e.area<t.area?e:t})).name})]})]})};n(45);var x=function(){var e=c.a.useState(),t=Object(s.a)(e,2),n=t[0],r=t[1];return c.a.useEffect((function(){j.a.get("https://restcountries.com/v2/all").then((function(e){r(e.data)}))}),[]),Object(l.jsx)("div",{className:"App",children:n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{countryData:n}),Object(l.jsx)(b,{countryData:n}),Object(l.jsx)(O,{countryData:n})]}):Object(l.jsx)("h1",{children:"Loading..."})})};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.0d7a17cc.chunk.js.map