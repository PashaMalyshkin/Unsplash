(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{85:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(26),r=n.n(a),s=n(18),o=(n(85),n(6)),i=n(9),l=n.n(i),u=n(16),j=n(5),b="https://api.unsplash.com/";var h,O=function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return t&&(n.body=JSON.stringify(t),n.headers={"Content-Type":"application/json; charset=UTF-8"}),fetch(b+e,n).then((function(e){if(!e.ok)throw new Error;return e.json()}))}(e)},d="bcDhzcaEEYWmOiZeRwb9uGdH6A030heChfgIr16bQFI",m="photos?client_id=".concat(d),p="search/photos?&client_id=".concat(d),x=("search/collections?&client_id=".concat(d),function(e){return O("".concat(m,"&page=").concat(e))}),f=function(e,t){return O("".concat(p,"&query=").concat(e,"&page=").concat(t))};!function(e){e.UNABLE_SEARCH="Unable to search images",e.UNABLE_LOAD="Unable to load images",e.UNABLE_LOAD_ONE="Unable to load one images"}(h||(h={}));var g=n(1),v=function(){var e=Object(o.m)().pathname,t=Object(c.useState)(null),n=Object(j.a)(t,2),a=n[0],r=n[1],i=function(){var t=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O("".concat(e,"/?client_id=").concat(d));case 3:n=t.sent,r(n),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),new Error(h.UNABLE_LOAD_ONE);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){i()}),[]),a&&a.urls?Object(g.jsxs)("div",{className:"modal",children:[Object(g.jsxs)("div",{className:"modal__content",children:[Object(g.jsxs)("div",{className:"modal__user",children:[Object(g.jsx)("img",{src:a.user.profile_image.medium,alt:a.user.name,className:"modal__user-img"}),Object(g.jsx)("div",{children:a.user.name})]}),Object(g.jsxs)("div",{className:"modal__info",children:[Object(g.jsx)("div",{children:"Downloads: ".concat(a.downloads)}),Object(g.jsx)("div",{children:"Likes: ".concat(a.likes)}),Object(g.jsx)("div",{children:"Views: ".concat(a.views)})]})]}),Object(g.jsx)("img",{src:a.urls.regular,alt:a.alt_description,className:"modal__image"}),Object(g.jsx)("div",{className:"modal__tags",children:a.tags.slice(0,5).map((function(e){return Object(g.jsx)(s.b,{to:"/collection/".concat(e.title),className:"modal__tag-link",children:e.title},e.title)}))})]}):null},_=function(e){var t=e.query,n=e.onSearch;return Object(g.jsx)("input",{type:"text",name:"search",className:"search__input",placeholder:"Search high-resolution images",value:t,onChange:function(e){return n(e.target.value)},required:!0,title:"Search Unsplash"})};function w(e,t){var n=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(j.a)(e,2),c=t[0],a=t[1];null===a?n.delete(c):Array.isArray(a)?(n.delete(c),a.forEach((function(e){n.append(c,e)}))):n.set(c,a)})),n.toString()}var N=Object(c.memo)((function(){return Object(g.jsx)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet",children:Object(g.jsxs)("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none",children:[Object(g.jsx)("path",{d:"M1812 3948 l3 -533 745 0 745 0 3 533 2 532 -750 0 -750 0 2 -532z"}),Object(g.jsx)("path",{d:"M640 1705 l0 -1065 1920 0 1920 0 0 1065 0 1065 -585 0 -585 0 0\n-530 0 -530 -750 0 -750 0 0 530 0 530 -585 0 -585 0 0 -1065z"})]})})})),C=Object(c.memo)((function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(s.c)(),i=Object(j.a)(r,2),b=i[0],h=i[1],O=Object(o.o)(),d=b.get("query")||"",m=b.get("page")||"",p=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,f(d,Number(m));case 4:d!==n&&h(w(b,{query:n||null})),O("/search?query=".concat(n)),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error("Unable to Search Images");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){w(b,{query:null})}}),[b]),Object(g.jsx)("div",{className:"search",children:Object(g.jsxs)("form",{className:"search__form",onSubmit:p,children:[Object(g.jsx)(s.b,{to:"/",className:"logo",children:Object(g.jsx)(N,{})}),Object(g.jsx)(_,{query:n,onSearch:a}),Object(g.jsx)("button",{type:"submit",className:"search__button",title:"Search",children:"Search"})]})})})),E=n(70),y=Object(c.memo)((function(e){var t=e.image;return Object(g.jsx)("div",{children:Object(g.jsx)(s.b,{to:"/photos/".concat(t.id),className:"gallery__image-link",children:Object(g.jsx)("img",{src:t.urls.small,alt:t.alt_description},t.id)})})})),S=Object(c.memo)((function(){var e=Object(s.c)(),t=Object(j.a)(e,1)[0],n=t.get("page")||"1";return Object(g.jsxs)("div",{className:"pagination",children:[Object(g.jsx)(s.b,{className:"pagination__button-prev pagination__button",to:{search:w(t,{page:(+n-1).toString()})},onClick:function(){return window.scrollTo(0,0)}}),Object(g.jsx)(s.b,{className:"pagination__button-next pagination__button",to:{search:w(t,{page:(+n+1).toString()})},onClick:function(){return window.scrollTo(0,0)}})]})})),k=n(135),A=n(136),U=function(e){var t=e.columnsCount,n=e.onChangeColumnsCount;return Object(g.jsx)("div",{className:"gallery__dropdown",children:Object(g.jsxs)(k.a,{sx:{bgcolor:"white",width:176,height:40,padding:2},variant:"standard",value:t,onChange:function(e){return n(+e.target.value)},MenuProps:{PaperProps:{sx:{bgcolor:"#fff"}}},children:[Object(g.jsx)(A.a,{value:3,children:"3 Columns"}),Object(g.jsx)(A.a,{value:5,children:"5 Columns"})]})})},L=function(e){var t=e.images,n=e.columnsCount,a=e.onChangeColumn,r=Object(c.useMemo)((function(){return{350:1,500:2,900:n}}),[n]);return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("section",{className:"gallery",children:[Object(g.jsx)(U,{columnsCount:n,onChangeColumnsCount:a}),Object(g.jsx)(E.a,{columnsCountBreakPoints:r,className:"gallery__container",children:Object(g.jsx)(E.b,{gutter:"20px",children:null===t||void 0===t?void 0:t.map((function(e){return Object(g.jsx)(y,{image:e},e.id)}))})}),Object(g.jsx)(S,{})]})})},q=function(){var e=Object(s.c)(),t=Object(j.a)(e,1)[0],n=t.get("query")||"",a=t.get("page")||"1",r=Object(c.useState)(null),o=Object(j.a)(r,2),i=o[0],b=o[1],O=Object(c.useState)(3),d=Object(j.a)(O,2),m=d[0],p=d[1],x=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(n,+a);case 3:t=e.sent,b(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(h.UNABLE_SEARCH);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){t.set("page","1")}),[n]),Object(c.useEffect)((function(){x()}),[n,a]),i?Object(g.jsxs)("section",{className:"searching-page",children:[Object(g.jsx)(C,{}),Object(g.jsx)(L,{images:i.results,columnsCount:m,onChangeColumn:p})]}):null},B=Object(c.memo)((function(){return Object(g.jsx)("header",{className:"header",children:Object(g.jsx)("div",{className:"header__content",children:Object(g.jsx)(C,{})})})}));B.displayName="Header";var D=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(3),o=Object(j.a)(r,2),i=o[0],b=o[1],O=Object(s.c)(),d=Object(j.a)(O,1)[0].get("page")||"1",m=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(+d);case 3:t=e.sent,a(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(h.UNABLE_LOAD);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){m()}),[d]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(B,{}),Object(g.jsx)(L,{images:n,columnsCount:i,onChangeColumn:b})]})},F=function(){var e=Object(o.m)().pathname,t=Object(s.c)(),n=Object(j.a)(t,1)[0],a=n.get("query")||"",r=n.get("page")||"1",i=Object(c.useState)(null),b=Object(j.a)(i,2),O=b[0],d=b[1],m=Object(c.useState)(3),p=Object(j.a)(m,2),x=p[0],v=p[1],_=function(){var t=Object(u.a)(l.a.mark((function t(){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.split("/").pop()||"",t.next=4,f(n,+r);case 4:c=t.sent,d(c),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(0),new Error(h.UNABLE_SEARCH);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){n.set("page","1")}),[a]),Object(c.useEffect)((function(){_()}),[a,r]),O?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{children:"Collection"}),Object(g.jsx)(L,{images:O.results,columnsCount:x,onChangeColumn:v})]}):null},M=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(o.d,{children:[Object(g.jsx)(o.b,{path:"/home",element:Object(g.jsx)(o.a,{to:"/",replace:!0})}),Object(g.jsx)(o.b,{path:"/",element:Object(g.jsx)(D,{})}),Object(g.jsxs)(o.b,{path:"/photos",children:[Object(g.jsx)(o.b,{index:!0,element:Object(g.jsx)(D,{})}),Object(g.jsx)(o.b,{path:":id",element:Object(g.jsx)(v,{})})]}),Object(g.jsx)(o.b,{path:"/collection",element:Object(g.jsx)(F,{}),children:Object(g.jsx)(o.b,{path:":tag",element:Object(g.jsx)(F,{})})}),Object(g.jsx)(o.b,{path:"/search",element:Object(g.jsx)(q,{}),children:Object(g.jsx)(o.b,{index:!0,element:Object(g.jsx)(q,{})})}),Object(g.jsx)(o.b,{path:"*",element:Object(g.jsx)("h1",{children:"Page not Fount"})})]})})};r.a.render(Object(g.jsx)(s.a,{children:Object(g.jsx)(M,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.cbcc6b12.chunk.js.map