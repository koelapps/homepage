(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),i=n("lwAK"),c=n("FYa8"),l=n("/0+H");function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=u;var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,l=p.length;c<l;c++){var u=p[c];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var s=o.props[u],d=r[u]||new Set;d.has(s)?a=!1:(d.add(s),r[u]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var f=a.default();function h(e){var t=e.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(f,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}h.rewind=f.rewind,t.default=h},"B+6J":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),c=n("8Kt/"),l=n.n(c),u=n("Q0LR"),s=n("Ff2n"),p=n("wx14"),d=(n("17x9"),n("iuhU")),f=n("H2TA"),h=n("ye/S"),b=n("i8i4"),m=n("bfFb"),v="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;function y(e){var t=r.useRef(e);return v((function(){t.current=e})),r.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}var g=n("G7As"),x=n("KQm4"),w=n("zLVn"),k=n("JX7q"),S=n("dI71"),O=o.a.createContext(null);function E(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(r.isValidElement)(e)?t(e):e}(e)})),n}function j(e,t,n){return null!=n[t]?n[t]:e.props[t]}function C(e,t,n){var o=E(e.children),a=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),a=[];for(var i in e)i in t?a.length&&(o[i]=a,a=[]):a.push(i);var c={};for(var l in t){if(o[l])for(r=0;r<o[l].length;r++){var u=o[l][r];c[o[l][r]]=n(u)}c[l]=n(l)}for(r=0;r<a.length;r++)c[a[r]]=n(a[r]);return c}(t,o);return Object.keys(a).forEach((function(i){var c=a[i];if(Object(r.isValidElement)(c)){var l=i in t,u=i in o,s=t[i],p=Object(r.isValidElement)(s)&&!s.props.in;!u||l&&!p?u||!l||p?u&&l&&Object(r.isValidElement)(s)&&(a[i]=Object(r.cloneElement)(c,{onExited:n.bind(null,c),in:s.props.in,exit:j(c,"exit",e),enter:j(c,"enter",e)})):a[i]=Object(r.cloneElement)(c,{in:!1}):a[i]=Object(r.cloneElement)(c,{onExited:n.bind(null,c),in:!0,exit:j(c,"exit",e),enter:j(c,"enter",e)})}})),a}var R=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},M=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(Object(k.a)(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}Object(S.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,o,a=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,o=i,E(n.children,(function(e){return Object(r.cloneElement)(e,{onExited:o.bind(null,e),in:!0,appear:j(e,"appear",n),enter:j(e,"enter",n),exit:j(e,"exit",n)})}))):C(e,a,i),firstRender:!1}},n.handleExited=function(e,t){var n=E(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(p.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=Object(w.a)(e,["component","childFactory"]),a=this.state.contextValue,i=R(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?o.a.createElement(O.Provider,{value:a},i):o.a.createElement(O.Provider,{value:a},o.a.createElement(t,r,i))},t}(o.a.Component);M.propTypes={},M.defaultProps={component:"div",childFactory:function(e){return e}};var T=M,I="undefined"===typeof window?r.useEffect:r.useLayoutEffect;var P=function(e){var t=e.classes,n=e.pulsate,o=void 0!==n&&n,a=e.rippleX,i=e.rippleY,c=e.rippleSize,l=e.in,u=e.onExited,s=void 0===u?function(){}:u,p=e.timeout,f=r.useState(!1),h=f[0],b=f[1],m=Object(d.a)(t.ripple,t.rippleVisible,o&&t.ripplePulsate),v={width:c,height:c,top:-c/2+i,left:-c/2+a},g=Object(d.a)(t.child,h&&t.childLeaving,o&&t.childPulsate),x=y(s);return I((function(){if(!l){b(!0);var e=setTimeout(x,p);return function(){clearTimeout(e)}}}),[x,l,p]),r.createElement("span",{className:m,style:v},r.createElement("span",{className:g}))},z=r.forwardRef((function(e,t){var n=e.center,o=void 0!==n&&n,a=e.classes,i=e.className,c=Object(s.a)(e,["center","classes","className"]),l=r.useState([]),u=l[0],f=l[1],h=r.useRef(0),b=r.useRef(null);r.useEffect((function(){b.current&&(b.current(),b.current=null)}),[u]);var m=r.useRef(!1),v=r.useRef(null),y=r.useRef(null),g=r.useRef(null);r.useEffect((function(){return function(){clearTimeout(v.current)}}),[]);var w=r.useCallback((function(e){var t=e.pulsate,n=e.rippleX,o=e.rippleY,i=e.rippleSize,c=e.cb;f((function(e){return[].concat(Object(x.a)(e),[r.createElement(P,{key:h.current,classes:a,timeout:550,pulsate:t,rippleX:n,rippleY:o,rippleSize:i})])})),h.current+=1,b.current=c}),[a]),k=r.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.pulsate,a=void 0!==r&&r,i=t.center,c=void 0===i?o||t.pulsate:i,l=t.fakeElement,u=void 0!==l&&l;if("mousedown"===e.type&&m.current)m.current=!1;else{"touchstart"===e.type&&(m.current=!0);var s,p,d,f=u?null:g.current,h=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(c||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)s=Math.round(h.width/2),p=Math.round(h.height/2);else{var b=e.touches?e.touches[0]:e,x=b.clientX,k=b.clientY;s=Math.round(x-h.left),p=Math.round(k-h.top)}if(c)(d=Math.sqrt((2*Math.pow(h.width,2)+Math.pow(h.height,2))/3))%2===0&&(d+=1);else{var S=2*Math.max(Math.abs((f?f.clientWidth:0)-s),s)+2,O=2*Math.max(Math.abs((f?f.clientHeight:0)-p),p)+2;d=Math.sqrt(Math.pow(S,2)+Math.pow(O,2))}e.touches?null===y.current&&(y.current=function(){w({pulsate:a,rippleX:s,rippleY:p,rippleSize:d,cb:n})},v.current=setTimeout((function(){y.current&&(y.current(),y.current=null)}),80)):w({pulsate:a,rippleX:s,rippleY:p,rippleSize:d,cb:n})}}),[o,w]),S=r.useCallback((function(){k({},{pulsate:!0})}),[k]),O=r.useCallback((function(e,t){if(clearTimeout(v.current),"touchend"===e.type&&y.current)return e.persist(),y.current(),y.current=null,void(v.current=setTimeout((function(){O(e,t)})));y.current=null,f((function(e){return e.length>0?e.slice(1):e})),b.current=t}),[]);return r.useImperativeHandle(t,(function(){return{pulsate:S,start:k,stop:O}}),[S,k,O]),r.createElement("span",Object(p.a)({className:Object(d.a)(a.root,i),ref:g},c),r.createElement(T,{component:null,exit:!0},u))})),_=Object(f.a)((function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(r.memo(z)),D=r.forwardRef((function(e,t){var n=e.action,o=e.buttonRef,a=e.centerRipple,i=void 0!==a&&a,c=e.children,l=e.classes,u=e.className,f=e.component,h=void 0===f?"button":f,v=e.disabled,x=void 0!==v&&v,w=e.disableRipple,k=void 0!==w&&w,S=e.disableTouchRipple,O=void 0!==S&&S,E=e.focusRipple,j=void 0!==E&&E,C=e.focusVisibleClassName,R=e.onBlur,M=e.onClick,T=e.onFocus,I=e.onFocusVisible,P=e.onKeyDown,z=e.onKeyUp,D=e.onMouseDown,N=e.onMouseLeave,L=e.onMouseUp,V=e.onTouchEnd,A=e.onTouchMove,F=e.onTouchStart,U=e.onDragLeave,q=e.tabIndex,B=void 0===q?0:q,$=e.TouchRippleProps,W=e.type,K=void 0===W?"button":W,X=Object(s.a)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),H=r.useRef(null);var Y=r.useRef(null),J=r.useState(!1),Q=J[0],G=J[1];x&&Q&&G(!1);var Z=Object(g.a)(),ee=Z.isFocusVisible,te=Z.onBlurVisible,ne=Z.ref;function re(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:O;return y((function(r){return t&&t(r),!n&&Y.current&&Y.current[e](r),!0}))}r.useImperativeHandle(n,(function(){return{focusVisible:function(){G(!0),H.current.focus()}}}),[]),r.useEffect((function(){Q&&j&&!k&&Y.current.pulsate()}),[k,j,Q]);var oe=re("start",D),ae=re("stop",U),ie=re("stop",L),ce=re("stop",(function(e){Q&&e.preventDefault(),N&&N(e)})),le=re("start",F),ue=re("stop",V),se=re("stop",A),pe=re("stop",(function(e){Q&&(te(e),G(!1)),R&&R(e)}),!1),de=y((function(e){H.current||(H.current=e.currentTarget),ee(e)&&(G(!0),I&&I(e)),T&&T(e)})),fe=function(){var e=b.findDOMNode(H.current);return h&&"button"!==h&&!("A"===e.tagName&&e.href)},he=r.useRef(!1),be=y((function(e){j&&!he.current&&Q&&Y.current&&" "===e.key&&(he.current=!0,e.persist(),Y.current.stop(e,(function(){Y.current.start(e)}))),e.target===e.currentTarget&&fe()&&" "===e.key&&e.preventDefault(),P&&P(e),e.target===e.currentTarget&&fe()&&"Enter"===e.key&&!x&&(e.preventDefault(),M&&M(e))})),me=y((function(e){j&&" "===e.key&&Y.current&&Q&&!e.defaultPrevented&&(he.current=!1,e.persist(),Y.current.stop(e,(function(){Y.current.pulsate(e)}))),z&&z(e),M&&e.target===e.currentTarget&&fe()&&" "===e.key&&!e.defaultPrevented&&M(e)})),ve=h;"button"===ve&&X.href&&(ve="a");var ye={};"button"===ve?(ye.type=K,ye.disabled=x):("a"===ve&&X.href||(ye.role="button"),ye["aria-disabled"]=x);var ge=Object(m.a)(o,t),xe=Object(m.a)(ne,H),we=Object(m.a)(ge,xe),ke=r.useState(!1),Se=ke[0],Oe=ke[1];r.useEffect((function(){Oe(!0)}),[]);var Ee=Se&&!k&&!x;return r.createElement(ve,Object(p.a)({className:Object(d.a)(l.root,u,Q&&[l.focusVisible,C],x&&l.disabled),onBlur:pe,onClick:M,onFocus:de,onKeyDown:be,onKeyUp:me,onMouseDown:oe,onMouseLeave:ce,onMouseUp:ie,onDragLeave:ae,onTouchEnd:ue,onTouchMove:se,onTouchStart:le,ref:we,tabIndex:x?-1:B},ye,X),c,Ee?r.createElement(_,Object(p.a)({ref:Y,center:i},$)):null)})),N=Object(f.a)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(D),L=n("NqtD"),V=r.forwardRef((function(e,t){var n=e.children,o=e.classes,a=e.className,i=e.color,c=void 0===i?"default":i,l=e.component,u=void 0===l?"button":l,f=e.disabled,h=void 0!==f&&f,b=e.disableElevation,m=void 0!==b&&b,v=e.disableFocusRipple,y=void 0!==v&&v,g=e.endIcon,x=e.focusVisibleClassName,w=e.fullWidth,k=void 0!==w&&w,S=e.size,O=void 0===S?"medium":S,E=e.startIcon,j=e.type,C=void 0===j?"button":j,R=e.variant,M=void 0===R?"text":R,T=Object(s.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),I=E&&r.createElement("span",{className:Object(d.a)(o.startIcon,o["iconSize".concat(Object(L.a)(O))])},E),P=g&&r.createElement("span",{className:Object(d.a)(o.endIcon,o["iconSize".concat(Object(L.a)(O))])},g);return r.createElement(N,Object(p.a)({className:Object(d.a)(o.root,o[M],a,"inherit"===c?o.colorInherit:"default"!==c&&o["".concat(M).concat(Object(L.a)(c))],"medium"!==O&&[o["".concat(M,"Size").concat(Object(L.a)(O))],o["size".concat(Object(L.a)(O))]],m&&o.disableElevation,h&&o.disabled,k&&o.fullWidth),component:u,disabled:h,focusRipple:!y,focusVisibleClassName:Object(d.a)(o.focusVisible,x),ref:t,type:C},T),r.createElement("span",{className:o.label},I,n,P))})),A=Object(f.a)((function(e){return{root:Object(p.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(h.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(h.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(h.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(h.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(h.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(h.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(h.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(V),F=o.a.createElement;t.default=function(){return F(u.default,null,F(l.a,null,F("title",null,"First Post")),F("h1",null,"First Post"),F("h2",null,F(A,{variant:"contained",color:"primary"},"New button"),F(i.a,{href:"/"},"Back to home")))}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.HeadManagerContext=o.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},Q0LR:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r).a.createElement;t.default=function(e){var t=e.children;return o("div",null,t)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||a()}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),i=n("7W2i"),c=n("a1gu"),l=n("Nsbk"),u=n("RIqP");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var p=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){i(u,c);var l=s(u);function u(e){var a;return r(this,u),a=l.call(this,e),d&&(t.add(o(a)),n(o(a))),a}return a(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(p.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var u=n("TqRt"),s=n("284h");t.__esModule=!0,t.default=void 0;var p,d=s(n("q1tI")),f=n("QmWs"),h=n("g/15"),b=u(n("nOHt")),m=n("elyg");function v(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var y=new Map,g=window.IntersectionObserver,x={};function w(){return p||(g?p=new g((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){a(n,e);var t=l(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:(0,m.addBasePath)(v(e)),as:t?(0,m.addBasePath)(v(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,c=a.as;if(function(e){var t=(0,f.parse)(e,!1,!0),n=(0,f.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var l=window.location.pathname;i=(0,f.resolve)(l,i),c=c?(0,f.resolve)(l,c):i,e.preventDefault();var u=o.props.scroll;null==u&&(u=c.indexOf("#")<0),b.default[o.props.replace?"replace":"push"](i,c,{shallow:o.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,f.resolve)(e,n);return[o,r?(0,f.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),x[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();b.default.prefetch(t[0],t[1],e).catch((function(e){0})),x[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var a=d.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),d.default.cloneElement(a,i)}}]),n}(d.Component);t.default=k},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},u7dL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/first-post",function(){return n("B+6J")}])}},[["u7dL",0,1,2,3]]]);