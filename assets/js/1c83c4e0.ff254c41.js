"use strict";(self.webpackChunketh_hooks=self.webpackChunketh_hooks||[]).push([[7560],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||s;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7955:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),a=["components"],i={},c=void 0,u={unversionedId:"main/hooks/useContractExistsAtAddress",id:"main/hooks/useContractExistsAtAddress",title:"useContractExistsAtAddress",description:"One sentence description",source:"@site/docs/main/hooks/useContractExistsAtAddress.mdx",sourceDirName:"main/hooks",slug:"/main/hooks/useContractExistsAtAddress",permalink:"/eth-hooks/docs/main/hooks/useContractExistsAtAddress",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main/hooks/useContractExistsAtAddress.mdx",tags:[],version:"current",frontMatter:{},sidebar:"overview",previous:{title:"useConnectAppContracts",permalink:"/eth-hooks/docs/main/hooks/useConnectAppContracts"},next:{title:"useContractLoader",permalink:"/eth-hooks/docs/main/hooks/useContractLoader"}},p=[{value:"How to import",id:"how-to-import",children:[],level:2},{value:"How to use",id:"how-to-use",children:[],level:2}],l={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"One sentence description"),(0,s.kt)("h2",{id:"how-to-import"},"How to import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useContractExistsAtAddress } from 'eth-hooks';\n")),(0,s.kt)("h2",{id:"how-to-use"},"How to use"),(0,s.kt)("p",null,"To get started:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../../api/modules/Hooks#usecontractexistsataddress"},"Go here for this hooks full API documentation"),"."))}d.isMDXComponent=!0}}]);