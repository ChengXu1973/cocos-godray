System.register(["./_virtual_cc-CWXRCc1B.js"],(function(n){"use strict";var t,r;return{setters:[function(n){t=n.g,r=n._}],execute:function(){function e(n,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(r){if("default"!==r&&!(r in n)){var e=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,e.get?e:{enumerable:!0,get:function(){return t[r]}})}}))})),Object.freeze(n)}var i,o,u,a={exports:{}};i=a,o="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,u=function(n){void 0===n&&(n={});var t,e,i=void 0!==n?n:{};i.ready=new Promise((function(n,r){t=n,e=r}));var u=Object.assign({},i),a="";"undefined"!=typeof document&&document.currentScript&&(a=document.currentScript.src),o&&(a=o),a=0!==a.indexOf("blob:")?a.substr(0,a.replace(/[?#].*/,"").lastIndexOf("/")+1):"",i.print||console.log.bind(console);var f,c,s=i.printErr||console.error.bind(console);Object.assign(i,u),u=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(f=i.wasmBinary),i.noExitRuntime,"object"!=typeof WebAssembly&&_("no native wasm support detected");var v,l,h,d,p,y,m,w,b,g=!1;function A(){var n=c.buffer;i.HEAP8=v=new Int8Array(n),i.HEAP16=h=new Int16Array(n),i.HEAP32=p=new Int32Array(n),i.HEAPU8=l=new Uint8Array(n),i.HEAPU16=d=new Uint16Array(n),i.HEAPU32=y=new Uint32Array(n),i.HEAPF32=m=new Float32Array(n),i.HEAPF64=w=new Float64Array(n)}var T=[],P=[],k=[];function j(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)n=i.preRun.shift(),T.unshift(n);var n;V(T)}function C(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)n=i.postRun.shift(),k.unshift(n);var n;V(k)}var O,F,W=0,S=null;function U(){if(W--,i.monitorRunDependencies&&i.monitorRunDependencies(W),0==W&&S){var n=S;S=null,n()}}function _(n){i.onAbort&&i.onAbort(n),s(n="Aborted("+n+")"),g=!0,n+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(n);throw e(t),t}function E(n){return n.startsWith("data:application/octet-stream;base64,")}function x(n){try{if(n==O&&f)return new Uint8Array(f);throw"both async and sync fetching of the wasm failed"}catch(n){_(n)}}function $(n){return f||"function"!=typeof fetch?Promise.resolve().then((function(){return x(n)})):fetch(n,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+n+"'";return t.arrayBuffer()})).catch((function(){return x(n)}))}function I(n,t,r){return $(n).then((function(n){return WebAssembly.instantiate(n,t)})).then((function(n){return n})).then(r,(function(n){s("failed to asynchronously prepare wasm: "+n),_(n)}))}function V(n){for(;n.length>0;)n.shift()(i)}function z(n){if(void 0===n)return"_unknown";var t=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return t>=48&&t<=57?"_"+n:n}function D(n,t){var r;return(r={},r[n=z(n)]=function(){return t.apply(this,arguments)},r)[n]}E(O="bullet.release.wasm.wasm")||(F=O,O=i.locateFile?i.locateFile(F,a):a+F);var M=new function(){this.allocated=[void 0],this.freelist=[],this.get=function(n){return this.allocated[n]},this.has=function(n){return void 0!==this.allocated[n]},this.allocate=function(n){var t=this.freelist.pop()||this.allocated.length;return this.allocated[t]=n,t},this.free=function(n){this.allocated[n]=void 0,this.freelist.push(n)}};function R(n,t){var r=D(t,(function(n){this.name=t,this.message=n;var r=new Error(n).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(n.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var B=void 0;function q(n){throw new B(n)}var H=function(n){return n||q("Cannot use deleted val. handle = "+n),M.get(n).value},J=function(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return M.allocate({refcount:1,value:n})}},N=void 0,Z=void 0;function G(n){for(var t="",r=n;l[r];)t+=Z[l[r++]];return t}var K=[];function L(){for(;K.length;){var n=K.pop();n.$$.deleteScheduled=!1,n.delete()}}var Q=void 0;var X={};function Y(n,t){for(void 0===t&&q("ptr should not be undefined");n.baseClass;)t=n.upcast(t),n=n.baseClass;return t}var nn={};function tn(n){var t=lt(n),r=G(t);return vt(t),r}function rn(n,t){var r=nn[n];return void 0===r&&q(t+" has unknown type "+tn(n)),r}function en(){}var on=!1;function un(n){n.smartPtr?n.smartPtrType.rawDestructor(n.smartPtr):n.ptrType.registeredClass.rawDestructor(n.ptr)}function an(n){n.count.value-=1,0===n.count.value&&un(n)}function fn(n,t,r){if(t===r)return n;if(void 0===r.baseClass)return null;var e=fn(n,t,r.baseClass);return null===e?null:r.downcast(e)}var cn={};function sn(n,t){return t=Y(n,t),X[t]}var vn=void 0;function ln(n){throw new vn(n)}function hn(n,t){return t.ptrType&&t.ptr||ln("makeClassHandle requires ptr and ptrType"),!!t.smartPtrType!=!!t.smartPtr&&ln("Both smartPtrType and smartPtr must be specified"),t.count={value:1},dn(Object.create(n,{$$:{value:t}}))}function dn(n){return"undefined"==typeof FinalizationRegistry?(dn=function(n){return n},n):(on=new FinalizationRegistry((function(n){an(n.$$)})),dn=function(n){var t=n.$$;if(t.smartPtr){var r={$$:t};on.register(n,r,n)}return n},en=function(n){return on.unregister(n)},dn(n))}function pn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var yn={},mn={};function wn(n,t,r){function e(t){var e=r(t);e.length!==n.length&&ln("Mismatched type converter count");for(var i=0;i<n.length;++i)bn(n[i],e[i])}n.forEach((function(n){mn[n]=t}));var i=new Array(t.length),o=[],u=0;t.forEach((function(n,t){nn.hasOwnProperty(n)?i[t]=nn[n]:(o.push(n),yn.hasOwnProperty(n)||(yn[n]=[]),yn[n].push((function(){i[t]=nn[n],++u===o.length&&e(i)})))})),0===o.length&&e(i)}function bn(n,t,r){if(void 0===r&&(r={}),!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=t.name;if(n||q('type "'+e+'" must have a positive integer typeid pointer'),nn.hasOwnProperty(n)){if(r.ignoreDuplicateRegistrations)return;q("Cannot register type '"+e+"' twice")}if(nn[n]=t,delete mn[n],yn.hasOwnProperty(n)){var i=yn[n];delete yn[n],i.forEach((function(n){return n()}))}}function gn(n){q(n.$$.ptrType.registeredClass.name+" instance already deleted")}function An(){}function Tn(n,t,r){if(void 0===n[t].overloadTable){var e=n[t];n[t]=function(){return n[t].overloadTable.hasOwnProperty(arguments.length)||q("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[t].overloadTable+")!"),n[t].overloadTable[arguments.length].apply(this,arguments)},n[t].overloadTable=[],n[t].overloadTable[e.argCount]=e}}function Pn(n,t,r){i.hasOwnProperty(n)?((void 0===r||void 0!==i[n].overloadTable&&void 0!==i[n].overloadTable[r])&&q("Cannot register public name '"+n+"' twice"),Tn(i,n,n),i.hasOwnProperty(r)&&q("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),i[n].overloadTable[r]=t):(i[n]=t,void 0!==r&&(i[n].numArguments=r))}function kn(n,t,r,e,i,o,u,a){this.name=n,this.constructor=t,this.instancePrototype=r,this.rawDestructor=e,this.baseClass=i,this.getActualType=o,this.upcast=u,this.downcast=a,this.pureVirtualFunctions=[]}function jn(n,t,r){for(;t!==r;)t.upcast||q("Expected null or instance of "+r.name+", got an instance of "+t.name),n=t.upcast(n),t=t.baseClass;return n}function Cn(n,t){if(null===t)return this.isReference&&q("null is not a valid "+this.name),0;t.$$||q('Cannot pass "'+qn(t)+'" as a '+this.name),t.$$.ptr||q("Cannot pass deleted object as a pointer of type "+this.name);var r=t.$$.ptrType.registeredClass;return jn(t.$$.ptr,r,this.registeredClass)}function On(n,t){var r;if(null===t)return this.isReference&&q("null is not a valid "+this.name),this.isSmartPointer?(r=this.rawConstructor(),null!==n&&n.push(this.rawDestructor,r),r):0;t.$$||q('Cannot pass "'+qn(t)+'" as a '+this.name),t.$$.ptr||q("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&t.$$.ptrType.isConst&&q("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name);var e=t.$$.ptrType.registeredClass;if(r=jn(t.$$.ptr,e,this.registeredClass),this.isSmartPointer)switch(void 0===t.$$.smartPtr&&q("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:t.$$.smartPtrType===this?r=t.$$.smartPtr:q("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:r=t.$$.smartPtr;break;case 2:if(t.$$.smartPtrType===this)r=t.$$.smartPtr;else{var i=t.clone();r=this.rawShare(r,J((function(){i.delete()}))),null!==n&&n.push(this.rawDestructor,r)}break;default:q("Unsupporting sharing policy")}return r}function Fn(n,t){if(null===t)return this.isReference&&q("null is not a valid "+this.name),0;t.$$||q('Cannot pass "'+qn(t)+'" as a '+this.name),t.$$.ptr||q("Cannot pass deleted object as a pointer of type "+this.name),t.$$.ptrType.isConst&&q("Cannot convert argument of type "+t.$$.ptrType.name+" to parameter type "+this.name);var r=t.$$.ptrType.registeredClass;return jn(t.$$.ptr,r,this.registeredClass)}function Wn(n){return this.fromWireType(p[n>>2])}function Sn(n,t,r,e,i,o,u,a,f,c,s){this.name=n,this.registeredClass=t,this.isReference=r,this.isConst=e,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=u,this.rawGetPointee=a,this.rawConstructor=f,this.rawShare=c,this.rawDestructor=s,i||void 0!==t.baseClass?this.toWireType=On:e?(this.toWireType=Cn,this.destructorFunction=null):(this.toWireType=Fn,this.destructorFunction=null)}function Un(n,t,r){i.hasOwnProperty(n)||ln("Replacing nonexistant public symbol"),void 0!==i[n].overloadTable&&void 0!==r?i[n].overloadTable[r]=t:(i[n]=t,i[n].argCount=r)}function _n(n,t,r){var e=i["dynCall_"+n];return r&&r.length?e.apply(null,[t].concat(r)):e.call(null,t)}var En=[];function xn(n){var t=En[n];return t||(n>=En.length&&(En.length=n+1),En[n]=t=b.get(n)),t}function $n(n,t,r){return n.includes("j")?_n(n,t,r):xn(t).apply(null,r)}function In(n,t){var r,e,i,o=(n=G(n)).includes("j")?(r=n,e=t,i=[],function(){return i.length=0,Object.assign(i,arguments),$n(r,e,i)}):xn(t);return"function"!=typeof o&&q("unknown function pointer with signature "+n+": "+t),o}var Vn=void 0;function zn(n,t){var r=[],e={};throw t.forEach((function n(t){e[t]||nn[t]||(mn[t]?mn[t].forEach(n):(r.push(t),e[t]=!0))})),new Vn(n+": "+r.map(tn).join([", "]))}function Dn(n){for(;n.length;){var t=n.pop();n.pop()(t)}}function Mn(n,t,r,e,i){var o=t.length;o<2&&q("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var u=null!==t[1]&&null!==r,a=!1,f=1;f<t.length;++f)if(null!==t[f]&&void 0===t[f].destructorFunction){a=!0;break}var c="void"!==t[0].name,s=o-2,v=new Array(s),l=[],h=[];return function(){var r;arguments.length!==s&&q("function "+n+" called with "+arguments.length+" arguments, expected "+s+" args!"),h.length=0,l.length=u?2:1,l[0]=i,u&&(r=t[1].toWireType(h,this),l[1]=r);for(var o=0;o<s;++o)v[o]=t[o+2].toWireType(h,arguments[o]),l.push(v[o]);return function(n){if(a)Dn(h);else for(var e=u?1:2;e<t.length;e++){var i=1===e?r:v[e-2];null!==t[e].destructorFunction&&t[e].destructorFunction(i)}if(c)return t[0].fromWireType(n)}(e.apply(null,l))}}function Rn(n,t){for(var r=[],e=0;e<n;e++)r.push(y[t+4*e>>2]);return r}function Bn(n){n>=M.reserved&&0==--M.get(n).refcount&&M.free(n)}function qn(n){if(null===n)return"null";var t=typeof n;return"object"===t||"array"===t||"function"===t?n.toString():""+n}function Hn(n,t){switch(t){case 2:return function(n){return this.fromWireType(m[n>>2])};case 3:return function(n){return this.fromWireType(w[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function Jn(n,t,r){switch(t){case 0:return r?function(n){return v[n]}:function(n){return l[n]};case 1:return r?function(n){return h[n>>1]}:function(n){return d[n>>1]};case 2:return r?function(n){return p[n>>2]}:function(n){return y[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}function Nn(n,t,r,e){if(!(e>0))return 0;for(var i=r,o=r+e-1,u=0;u<n.length;++u){var a=n.charCodeAt(u);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++u)),a<=127){if(r>=o)break;t[r++]=a}else if(a<=2047){if(r+1>=o)break;t[r++]=192|a>>6,t[r++]=128|63&a}else if(a<=65535){if(r+2>=o)break;t[r++]=224|a>>12,t[r++]=128|a>>6&63,t[r++]=128|63&a}else{if(r+3>=o)break;t[r++]=240|a>>18,t[r++]=128|a>>12&63,t[r++]=128|a>>6&63,t[r++]=128|63&a}}return t[r]=0,r-i}function Zn(n){for(var t=0,r=0;r<n.length;++r){var e=n.charCodeAt(r);e<=127?t++:e<=2047?t+=2:e>=55296&&e<=57343?(t+=4,++r):t+=3}return t}var Gn="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function Kn(n,t,r){for(var e=t+r,i=t;n[i]&&!(i>=e);)++i;if(i-t>16&&n.buffer&&Gn)return Gn.decode(n.subarray(t,i));for(var o="";t<i;){var u=n[t++];if(128&u){var a=63&n[t++];if(192!=(224&u)){var f=63&n[t++];if((u=224==(240&u)?(15&u)<<12|a<<6|f:(7&u)<<18|a<<12|f<<6|63&n[t++])<65536)o+=String.fromCharCode(u);else{var c=u-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&u)<<6|a)}else o+=String.fromCharCode(u)}return o}var Ln="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function Qn(n,t){for(var r=n,e=r>>1,i=e+t/2;!(e>=i)&&d[e];)++e;if((r=e<<1)-n>32&&Ln)return Ln.decode(l.subarray(n,r));for(var o="",u=0;!(u>=t/2);++u){var a=h[n+2*u>>1];if(0==a)break;o+=String.fromCharCode(a)}return o}function Xn(n,t,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var e=t,i=(r-=2)<2*n.length?r/2:n.length,o=0;o<i;++o){var u=n.charCodeAt(o);h[t>>1]=u,t+=2}return h[t>>1]=0,t-e}function Yn(n){return 2*n.length}function nt(n,t){for(var r=0,e="";!(r>=t/4);){var i=p[n+4*r>>2];if(0==i)break;if(++r,i>=65536){var o=i-65536;e+=String.fromCharCode(55296|o>>10,56320|1023&o)}else e+=String.fromCharCode(i)}return e}function tt(n,t,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var e=t,i=e+r-4,o=0;o<n.length;++o){var u=n.charCodeAt(o);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&n.charCodeAt(++o)),p[t>>2]=u,(t+=4)+4>i)break}return p[t>>2]=0,t-e}function rt(n){for(var t=0,r=0;r<n.length;++r){var e=n.charCodeAt(r);e>=55296&&e<=57343&&++r,t+=4}return t}var et={},it=[];function ot(n,t){for(var r=new Array(n),e=0;e<n;++e)r[e]=rn(y[t+4*e>>2],"parameter "+e);return r}var ut=[];function at(n){var t=n-c.buffer.byteLength+65535>>>16;try{return c.grow(t),A(),1}catch(n){}}B=i.BindingError=R(Error,"BindingError"),M.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),M.reserved=M.allocated.length,i.count_emval_handles=function(){for(var n=0,t=M.reserved;t<M.allocated.length;++t)void 0!==M.allocated[t]&&++n;return n},N=i.PureVirtualError=R(Error,"PureVirtualError"),function(){for(var n=new Array(256),t=0;t<256;++t)n[t]=String.fromCharCode(t);Z=n}(),i.getInheritedInstanceCount=function(){return Object.keys(X).length},i.getLiveInheritedInstances=function(){var n=[];for(var t in X)X.hasOwnProperty(t)&&n.push(X[t]);return n},i.flushPendingDeletes=L,i.setDelayFunction=function(n){Q=n,K.length&&Q&&Q(L)},vn=i.InternalError=R(Error,"InternalError"),An.prototype.isAliasOf=function(n){if(!(this instanceof An))return!1;if(!(n instanceof An))return!1;for(var t=this.$$.ptrType.registeredClass,r=this.$$.ptr,e=n.$$.ptrType.registeredClass,i=n.$$.ptr;t.baseClass;)r=t.upcast(r),t=t.baseClass;for(;e.baseClass;)i=e.upcast(i),e=e.baseClass;return t===e&&r===i},An.prototype.clone=function(){if(this.$$.ptr||gn(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var n,t=dn(Object.create(Object.getPrototypeOf(this),{$$:{value:(n=this.$$,{count:n.count,deleteScheduled:n.deleteScheduled,preservePointerOnDelete:n.preservePointerOnDelete,ptr:n.ptr,ptrType:n.ptrType,smartPtr:n.smartPtr,smartPtrType:n.smartPtrType})}}));return t.$$.count.value+=1,t.$$.deleteScheduled=!1,t},An.prototype.delete=function(){this.$$.ptr||gn(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&q("Object already scheduled for deletion"),en(this),an(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},An.prototype.isDeleted=function(){return!this.$$.ptr},An.prototype.deleteLater=function(){return this.$$.ptr||gn(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&q("Object already scheduled for deletion"),K.push(this),1===K.length&&Q&&Q(L),this.$$.deleteScheduled=!0,this},Sn.prototype.getPointee=function(n){return this.rawGetPointee&&(n=this.rawGetPointee(n)),n},Sn.prototype.destructor=function(n){this.rawDestructor&&this.rawDestructor(n)},Sn.prototype.argPackAdvance=8,Sn.prototype.readValueFromPointer=Wn,Sn.prototype.deleteObject=function(n){null!==n&&n.delete()},Sn.prototype.fromWireType=function(n){var t=this.getPointee(n);if(!t)return this.destructor(n),null;var r=sn(this.registeredClass,t);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=t,r.$$.smartPtr=n,r.clone();var e=r.clone();return this.destructor(n),e}function i(){return this.isSmartPointer?hn(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:t,smartPtrType:this,smartPtr:n}):hn(this.registeredClass.instancePrototype,{ptrType:this,ptr:n})}var o,u=this.registeredClass.getActualType(t),a=cn[u];if(!a)return i.call(this);o=this.isConst?a.constPointerType:a.pointerType;var f=fn(t,this.registeredClass,o.registeredClass);return null===f?i.call(this):this.isSmartPointer?hn(o.registeredClass.instancePrototype,{ptrType:o,ptr:f,smartPtrType:this,smartPtr:n}):hn(o.registeredClass.instancePrototype,{ptrType:o,ptr:f})},Vn=i.UnboundTypeError=R(Error,"UnboundTypeError");var ft={k:function(n,t,r){n=G(n),t=rn(t,"wrapper"),r=H(r);var e=[].slice,i=t.registeredClass,o=i.instancePrototype,u=i.baseClass.instancePrototype,a=i.baseClass.constructor,f=D(n,(function(){i.baseClass.pureVirtualFunctions.forEach(function(n){if(this[n]===u[n])throw new N("Pure virtual function "+n+" must be implemented in JavaScript")}.bind(this)),Object.defineProperty(this,"__parent",{value:o}),this.__construct.apply(this,e.call(arguments))}));for(var c in o.__construct=function(){this===o&&q("Pass correct 'this' to __construct");var n=a.implement.apply(void 0,[this].concat(e.call(arguments)));en(n);var t,r=n.$$;n.notifyOnDestruction(),r.preservePointerOnDelete=!0,Object.defineProperties(this,{$$:{value:r}}),dn(this),t=Y(i,t=r.ptr),X.hasOwnProperty(t)?q("Tried to register registered instance: "+t):X[t]=this},o.__destruct=function(){var n;this===o&&q("Pass correct 'this' to __destruct"),en(this),n=Y(i,n=this.$$.ptr),X.hasOwnProperty(n)?delete X[n]:q("Tried to unregister unregistered instance: "+n)},f.prototype=Object.create(o),r)f.prototype[c]=r[c];return J(f)},p:function(){},t:function(n,t,r,e,i){var o=pn(r);bn(n,{name:t=G(t),fromWireType:function(n){return!!n},toWireType:function(n,t){return t?e:i},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===r)e=v;else if(2===r)e=h;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+t);e=p}return this.fromWireType(e[n>>o])},destructorFunction:null})},i:function(n,t,r,e,i,o,u,a,f,c,s,v,l){s=G(s),o=In(i,o),a&&(a=In(u,a)),c&&(c=In(f,c)),l=In(v,l);var h=z(s);Pn(h,(function(){zn("Cannot construct "+s+" due to unbound types",[e])})),wn([n,t,r],e?[e]:[],(function(t){var r,i;t=t[0],i=e?(r=t.registeredClass).instancePrototype:An.prototype;var u=D(h,(function(){if(Object.getPrototypeOf(this)!==f)throw new B("Use 'new' to construct "+s);if(void 0===v.constructor_body)throw new B(s+" has no accessible constructor");var n=v.constructor_body[arguments.length];if(void 0===n)throw new B("Tried to invoke ctor of "+s+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(v.constructor_body).toString()+") parameters instead!");return n.apply(this,arguments)})),f=Object.create(i,{constructor:{value:u}});u.prototype=f;var v=new kn(s,u,f,l,r,o,a,c);v.baseClass&&(void 0===v.baseClass.__derivedClasses&&(v.baseClass.__derivedClasses=[]),v.baseClass.__derivedClasses.push(v));var d=new Sn(s,v,!0,!1,!1),p=new Sn(s+"*",v,!1,!1,!1),y=new Sn(s+" const*",v,!1,!0,!1);return cn[n]={pointerType:p,constPointerType:y},Un(h,u),[d,p,y]}))},h:function(n,t,e,i,o,u,a){var f=Rn(e,i);t=G(t),u=In(o,u),wn([],[n],(function(n){var i=(n=n[0]).name+"."+t;function o(){zn("Cannot call "+i+" due to unbound types",f)}t.startsWith("@@")&&(t=Symbol[t.substring(2)]);var c=n.registeredClass.constructor;return void 0===c[t]?(o.argCount=e-1,c[t]=o):(Tn(c,t,i),c[t].overloadTable[e-1]=o),wn([],f,(function(o){var f=[o[0],null].concat(o.slice(1)),s=Mn(i,f,null,u,a);if(void 0===c[t].overloadTable?(s.argCount=e-1,c[t]=s):c[t].overloadTable[e-1]=s,n.registeredClass.__derivedClasses)for(var v,l=r(n.registeredClass.__derivedClasses);!(v=l()).done;){var h=v.value;h.constructor.hasOwnProperty(t)||(h.constructor[t]=s)}return[]})),[]}))},g:function(n,t,r,e,i,o,u,a){var f=Rn(r,e);t=G(t),o=In(i,o),wn([],[n],(function(n){var e=(n=n[0]).name+"."+t;function i(){zn("Cannot call "+e+" due to unbound types",f)}t.startsWith("@@")&&(t=Symbol[t.substring(2)]),a&&n.registeredClass.pureVirtualFunctions.push(t);var c=n.registeredClass.instancePrototype,s=c[t];return void 0===s||void 0===s.overloadTable&&s.className!==n.name&&s.argCount===r-2?(i.argCount=r-2,i.className=n.name,c[t]=i):(Tn(c,t,e),c[t].overloadTable[r-2]=i),wn([],f,(function(i){var a=Mn(e,i,n,o,u);return void 0===c[t].overloadTable?(a.argCount=r-2,c[t]=a):c[t].overloadTable[r-2]=a,[]})),[]}))},s:function(n,t){bn(n,{name:t=G(t),fromWireType:function(n){var t=H(n);return Bn(n),t},toWireType:function(n,t){return J(t)},argPackAdvance:8,readValueFromPointer:Wn,destructorFunction:null})},n:function(n,t,r){var e=pn(r);bn(n,{name:t=G(t),fromWireType:function(n){return n},toWireType:function(n,t){return t},argPackAdvance:8,readValueFromPointer:Hn(t,e),destructorFunction:null})},a:function(n,t,r,e,i,o){var u=Rn(t,r);n=G(n),i=In(e,i),Pn(n,(function(){zn("Cannot call "+n+" due to unbound types",u)}),t-1),wn([],u,(function(r){var e=[r[0],null].concat(r.slice(1));return Un(n,Mn(n,e,null,i,o),t-1),[]}))},f:function(n,t,r,e){t=G(t);var i=pn(r),o=function(n){return n};if(0===e){var u=32-8*r;o=function(n){return n<<u>>>u}}var a=t.includes("unsigned");bn(n,{name:t,fromWireType:o,toWireType:a?function(n,t){return this.name,t>>>0}:function(n,t){return this.name,t},argPackAdvance:8,readValueFromPointer:Jn(t,i,0!==e),destructorFunction:null})},b:function(n,t,r){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];function i(n){var t=y,r=t[n>>=2],i=t[n+1];return new e(t.buffer,i,r)}bn(n,{name:r=G(r),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},m:function(n,t){var r="std::string"===(t=G(t));bn(n,{name:t,fromWireType:function(n){var t,e,i=y[n>>2],o=n+4;if(r)for(var u=o,a=0;a<=i;++a){var f=o+a;if(a==i||0==l[f]){var c=(e=u)?Kn(l,e,f-u):"";void 0===t?t=c:(t+=String.fromCharCode(0),t+=c),u=f+1}}else{var s=new Array(i);for(a=0;a<i;++a)s[a]=String.fromCharCode(l[o+a]);t=s.join("")}return vt(n),t},toWireType:function(n,t){var e;t instanceof ArrayBuffer&&(t=new Uint8Array(t));var i="string"==typeof t;i||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||q("Cannot pass non-string to std::string"),e=r&&i?Zn(t):t.length;var o=st(4+e+1),u=o+4;if(y[o>>2]=e,r&&i)Nn(t,l,u,e+1);else if(i)for(var a=0;a<e;++a){var f=t.charCodeAt(a);f>255&&(vt(u),q("String has UTF-16 code units that do not fit in 8 bits")),l[u+a]=f}else for(a=0;a<e;++a)l[u+a]=t[a];return null!==n&&n.push(vt,o),o},argPackAdvance:8,readValueFromPointer:Wn,destructorFunction:function(n){vt(n)}})},l:function(n,t,r){var e,i,o,u,a;r=G(r),2===t?(e=Qn,i=Xn,u=Yn,o=function(){return d},a=1):4===t&&(e=nt,i=tt,u=rt,o=function(){return y},a=2),bn(n,{name:r,fromWireType:function(n){for(var r,i=y[n>>2],u=o(),f=n+4,c=0;c<=i;++c){var s=n+4+c*t;if(c==i||0==u[s>>a]){var v=e(f,s-f);void 0===r?r=v:(r+=String.fromCharCode(0),r+=v),f=s+t}}return vt(n),r},toWireType:function(n,e){"string"!=typeof e&&q("Cannot pass non-string to C++ string type "+r);var o=u(e),f=st(4+o+t);return y[f>>2]=o>>a,i(e,f+4,o+t),null!==n&&n.push(vt,f),f},argPackAdvance:8,readValueFromPointer:Wn,destructorFunction:function(n){vt(n)}})},u:function(n,t){bn(n,{isVoid:!0,name:t=G(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},c:function(n,t,r,e){var i,o;(n=it[n])(t=H(t),r=void 0===(o=et[i=r])?G(i):o,null,e)},e:Bn,d:function(n,t){var r=ot(n,t),e=r[0],i=e.name+"_$"+r.slice(1).map((function(n){return n.name})).join("_")+"$",o=ut[i];if(void 0!==o)return o;var u,a,f=new Array(n-1);return u=function(t,i,o,u){for(var a=0,c=0;c<n-1;++c)f[c]=r[c+1].readValueFromPointer(u+a),a+=r[c+1].argPackAdvance;var s=t[i].apply(t,f);for(c=0;c<n-1;++c)r[c+1].deleteObject&&r[c+1].deleteObject(f[c]);if(!e.isVoid)return e.toWireType(o,s)},a=it.length,it.push(u),o=a,ut[i]=o,o},o:function(n){n>4&&(M.get(n).refcount+=1)},j:function(){_("")},r:function(n,t,r){l.copyWithin(n,t,t+r)},q:function(n){var t=l.length,r=2147483648;if((n>>>=0)>r)return!1;for(var e,i=1;i<=4;i*=2){var o=t*(1+.2/i);if(o=Math.min(o,n+100663296),at(Math.min(r,(e=Math.max(n,o))+(65536-e%65536)%65536)))return!0}return!1}};!function(){var n,t,r,o,u={a:ft};function a(n){var t,r=n.exports;return i.asm=r,c=i.asm.v,A(),b=i.asm.z,t=i.asm.w,P.unshift(t),U(),r}if(W++,i.monitorRunDependencies&&i.monitorRunDependencies(W),i.instantiateWasm)try{return i.instantiateWasm(u,a)}catch(n){s("Module.instantiateWasm callback failed with error: "+n),e(n)}(n=f,t=O,r=u,o=function(n){a(n.instance)},n||"function"!=typeof WebAssembly.instantiateStreaming||E(t)||"function"!=typeof fetch?I(t,r,o):fetch(t,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,r).then(o,(function(n){return s("wasm streaming compile failed: "+n),s("falling back to ArrayBuffer instantiation"),I(t,r,o)}))}))).catch(e)}();var ct,st=function(){return(st=i.asm.x).apply(null,arguments)},vt=function(){return(vt=i.asm.y).apply(null,arguments)},lt=function(){return(lt=i.asm.A).apply(null,arguments)};function ht(){function n(){ct||(ct=!0,i.calledRun=!0,g||(V(P),t(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),C()))}W>0||(j(),W>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),n()}),1)):n()))}if(i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm.B).apply(null,arguments)},S=function n(){ct||ht(),ct||(S=n)},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return ht(),n.ready},i.exports=u;var f=a.exports,c=t(f);n("b",e({__proto__:null,default:c},[f]))}}}));