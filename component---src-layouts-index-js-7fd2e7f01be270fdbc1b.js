webpackJsonp([0x67ef26645b2a,60335399758886],{120:function(t,e){t.exports={layoutContext:{}}},211:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r=n(2),i=a(r),u=n(214),l=a(u),c=n(120),s=a(c);e.default=function(t){return i.default.createElement(l.default,o({},t,s.default))},t.exports=e.default},217:function(t,e,n){t.exports={default:n(227),__esModule:!0}},219:function(t,e,n){t.exports={default:n(229),__esModule:!0}},223:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(217),r=a(o);e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}},224:function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){var n={};for(var a in t)e.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n}},227:function(t,e,n){n(252),t.exports=n(19).Object.assign},229:function(t,e,n){n(254),t.exports=n(19).Object.keys},242:function(t,e,n){"use strict";var a=n(44),o=n(94),r=n(57),i=n(99),u=n(149),l=Object.assign;t.exports=!l||n(29)(function(){var t={},e={},n=Symbol(),a="abcdefghijklmnopqrst";return t[n]=7,a.split("").forEach(function(t){e[t]=t}),7!=l({},t)[n]||Object.keys(l({},e)).join("")!=a})?function(t,e){for(var n=i(t),l=arguments.length,c=1,s=o.f,f=r.f;l>c;)for(var d,p=u(arguments[c++]),h=s?a(p).concat(s(p)):a(p),v=h.length,m=0;v>m;)f.call(p,d=h[m++])&&(n[d]=p[d]);return n}:l},246:function(t,e,n){var a=n(28),o=n(19),r=n(29);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],i={};i[t]=e(n),a(a.S+a.F*r(function(){n(1)}),"Object",i)}},252:function(t,e,n){var a=n(28);a(a.S+a.F,"Object",{assign:n(242)})},254:function(t,e,n){var a=n(99),o=n(44);n(246)("keys",function(){return function(t){return o(a(t))}})},314:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function o(t){return r(j+t)}function r(t){return t.replace(/^\/\//g,"/")}function i(t,e){var n=(0,x.createLocation)(t,null,null,e.location);return n.pathname=o(n.pathname),n}e.__esModule=!0,e.navigateTo=void 0;var u=n(223),l=a(u),c=n(219),s=a(c),f=n(224),d=a(f),p=n(56),h=a(p),v=n(87),m=a(v),y=n(86),g=a(y);e.withPrefix=o;var _=n(2),b=a(_),k=n(72),w=n(8),O=a(w),x=n(119),j="/",E={activeClassName:O.default.string,activeStyle:O.default.object,exact:O.default.bool,strict:O.default.bool,isActive:O.default.func,location:O.default.object},M=function(t,e){var n=new window.IntersectionObserver(function(a){a.forEach(function(a){t===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),e())})});n.observe(t)},R=function(t){function e(n,a){(0,h.default)(this,e);var o=(0,m.default)(this,t.call(this)),r=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0);var u=a.router.history,l=i(n.to,u);return o.state={path:(0,x.createPath)(l),to:l,IOSupported:r},o.handleRef=o.handleRef.bind(o),o}return(0,g.default)(e,t),e.prototype.componentWillReceiveProps=function(t){if(this.props.to!==t.to){var e=i(t.to,history);this.setState({path:(0,x.createPath)(e),to:e}),this.state.IOSupported||___loader.enqueue(this.state.path)}},e.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.path)},e.prototype.handleRef=function(t){var e=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&M(t,function(){___loader.enqueue(e.state.path)})},e.prototype.render=function(){var t=this,e=this.props,n=e.onClick,a=(0,d.default)(e,["onClick"]),o=void 0;return o=(0,s.default)(E).some(function(e){return t.props[e]})?k.NavLink:k.Link,b.default.createElement(o,(0,l.default)({onClick:function(e){if(n&&n(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){var a=t.state.path;if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a===window.location.pathname){var o=t.state.path.split("#").slice(1).join("#"),r=document.getElementById(o);return null!==r?(r.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}e.preventDefault(),window.___navigateTo(t.state.to)}return!0}},a,{to:this.state.to,innerRef:this.handleRef}))},e}(b.default.Component);R.propTypes=(0,l.default)({},E,{innerRef:O.default.func,onClick:O.default.func,to:O.default.oneOfType([O.default.string,O.default.object]).isRequired}),R.contextTypes={router:O.default.object},e.default=R;e.navigateTo=function(t){window.___navigateTo(t)}},214:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(2),r=a(o),i=n(314),u=a(i),l=n(113),c=a(l),s=function(t){return r.default.createElement("div",{className:c.default["nav-link"]},r.default.createElement(u.default,{to:t.to,activeClassName:c.default["link-active"]},t.children))};e.default=function(t){var e=t.children;return r.default.createElement("div",{className:c.default["two-column"]},r.default.createElement("div",{className:c.default.nav},r.default.createElement(u.default,{className:c.default["link-secondary"],to:"/"},r.default.createElement("h1",null,"OTKit Style Guide")),r.default.createElement(s,{to:"/otkit-colors/"},"Colors"),r.default.createElement(s,{to:"/otkit-typography"},"Typography"),r.default.createElement(s,{to:"/otkit-spacing/"},"Spacing"),r.default.createElement(s,{to:"/otkit-borders/"},"Borders"),r.default.createElement(s,{to:"/otkit-breakpoints/"},"Breakpoints"),r.default.createElement(s,{to:"/otkit-shadows/"},"Shadows"),r.default.createElement("div",{className:c.default["nav-link"]},r.default.createElement("a",{href:"https://github.com/opentable/design-tokens",target:"_blank"},"Github repo / design-tokens"))),r.default.createElement("div",{className:c.default.main},e()))},t.exports=e.default},113:function(t,e){t.exports={"spacing-medium":"16px","spacing-large":"32px","spacing-xlarge":"64px","color-primary":"rgb(218, 55, 67)","color-gray-primary":"rgb(51, 51, 51)","font-weight-medium":"undefined","link-secondary":"src-styles----index-module---link-secondary---ffkBd","nav-link":"src-styles----index-module---nav-link---1neRi"}}});
//# sourceMappingURL=component---src-layouts-index-js-7fd2e7f01be270fdbc1b.js.map