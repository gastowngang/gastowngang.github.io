webpackJsonp([0x620f737b6699],{226:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=n(2),i=r(u),f=n(82),c=r(f),p=n(28),s=(r(p),n(76)),d=r(s),h=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=(0,d.default)(this.props,"data.site.siteMetadata.title");return i.default.createElement("div",null,i.default.createElement(c.default,{title:e.frontmatter.title+" | "+t}),i.default.createElement("h1",null,e.frontmatter.title),i.default.createElement("p",null,e.frontmatter.date),i.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))},t}(i.default.Component);t.default=h;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-blog-post-js-7fe71406c2e765c56166.js.map