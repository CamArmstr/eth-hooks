"use strict";(self.webpackChunketh_hooks=self.webpackChunketh_hooks||[]).push([[1731],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||s;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3054:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],i={},u=void 0,c={unversionedId:"main/hooks/useResolveEnsName",id:"main/hooks/useResolveEnsName",title:"useResolveEnsName",description:"One sentence description",source:"@site/docs/main/hooks/useResolveEnsName.mdx",sourceDirName:"main/hooks",slug:"/main/hooks/useResolveEnsName",permalink:"/eth-hooks/docs/main/hooks/useResolveEnsName",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main/hooks/useResolveEnsName.mdx",tags:[],version:"current",frontMatter:{},sidebar:"overview",previous:{title:"useResolveEnsAddress",permalink:"/eth-hooks/docs/main/hooks/useResolveEnsAddress"},next:{title:"useSignerAddress",permalink:"/eth-hooks/docs/main/hooks/useSignerAddress"}},l=[{value:"How to import",id:"how-to-import",children:[],level:2},{value:"How to use",id:"how-to-use",children:[],level:2}],p={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"One sentence description"),(0,s.kt)("h2",{id:"how-to-import"},"How to import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useResolveEnsName } from 'eth-hooks';\n")),(0,s.kt)("h2",{id:"how-to-use"},"How to use"),(0,s.kt)("p",null,"To get started:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../../api/modules/Hooks#useresolveensname"},"Go here for this hooks full API documentation"),"."))}m.isMDXComponent=!0}}]);