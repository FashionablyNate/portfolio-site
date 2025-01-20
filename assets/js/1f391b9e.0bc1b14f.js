"use strict";(self.webpackChunkportfolio_site=self.webpackChunkportfolio_site||[]).push([[61],{8467:(e,n,t)=>{t.d(n,{A:()=>v});t(6540);var i=t(4164),a=t(539),s=t(7143),l=t(4848);function r(){return(0,l.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,l.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,l.jsx)(s.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,l.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function m(){return(0,l.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var u=t(204),f=t(2362);function h(e){let{className:n}=e;return(0,l.jsx)(f.A,{type:"caution",title:(0,l.jsx)(d,{}),className:(0,i.A)(n,u.G.common.draftBanner),children:(0,l.jsx)(m,{})})}function x(e){let{className:n}=e;return(0,l.jsx)(f.A,{type:"caution",title:(0,l.jsx)(r,{}),className:(0,i.A)(n,u.G.common.unlistedBanner),children:(0,l.jsx)(c,{})})}function g(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{}),(0,l.jsx)(x,{...e})]})}function v(e){let{metadata:n}=e;const{unlisted:t,frontMatter:i}=n;return(0,l.jsxs)(l.Fragment,{children:[(t||i.unlisted)&&(0,l.jsx)(g,{}),i.draft&&(0,l.jsx)(h,{})]})}},9181:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(6540);var i=t(4164),a=t(1082),s=t(204),l=t(8969),r=t(4522),c=t(5432),o=t(8467),d=t(5783);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(4848);function f(e){const{content:n}=e,{metadata:t,assets:f}=n,{title:h,editUrl:x,description:g,frontMatter:v,lastUpdatedBy:p,lastUpdatedAt:j}=t,{keywords:b,wrapperClassName:L,hide_table_of_contents:A}=v,N=f.image??v.image,C=!!(x||j||p);return(0,u.jsx)(a.e3,{className:(0,i.A)(L??s.G.wrapper.mdxPages,s.G.page.mdxPage),children:(0,u.jsxs)(l.A,{children:[(0,u.jsx)(a.be,{title:h,description:g,keywords:b,image:N}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,i.A)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,i.A)("col",!A&&"col--8"),children:[(0,u.jsx)(o.A,{metadata:t}),(0,u.jsx)("article",{children:(0,u.jsx)(r.A,{children:(0,u.jsx)(n,{})})}),C&&(0,u.jsx)(d.A,{className:(0,i.A)("margin-top--sm",s.G.pages.pageFooterEditMetaRow),editUrl:x,lastUpdatedAt:j,lastUpdatedBy:p})]}),!A&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(c.A,{toc:n.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level})})]})})]})})}},5432:(e,n,t)=>{t.d(n,{A:()=>b});var i=t(6540),a=t(4164),s=t(3115);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>c(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function d(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){const n=(0,i.useRef)(void 0),t=d();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),c=o(r,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var u=t(6289),f=t(4848);function h(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,f.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,f.jsxs)("li",{children:[(0,f.jsx)(u.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,f.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const x=i.memo(h);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:d,...u}=e;const h=(0,s.p)(),g=o??h.tableOfContents.minHeadingLevel,v=d??h.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>r({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:g,maxHeadingLevel:v});return m((0,i.useMemo)((()=>{if(a&&c)return{linkClassName:a,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:v}}),[a,c,g,v])),(0,f.jsx)(x,{toc:p,className:t,linkClassName:a,...u})}const v={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},p="table-of-contents__link toc-highlight",j="table-of-contents__link--active";function b(e){let{className:n,...t}=e;return(0,f.jsx)("div",{className:(0,a.A)(v.tableOfContents,"thin-scrollbar",n),children:(0,f.jsx)(g,{...t,linkClassName:p,linkActiveClassName:j})})}}}]);