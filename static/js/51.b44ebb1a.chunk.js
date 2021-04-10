(this["webpackJsonpmetamask-auth"]=this["webpackJsonpmetamask-auth"]||[]).push([[51],{501:function(e,r,n){"use strict";n.r(r);var t=n(9),a=n.n(t);function u(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],t=!0,a=!1,u=void 0;try{for(var o,s=e[Symbol.iterator]();!(t=(o=s.next()).done)&&(n.push(o.value),!r||n.length!==r);t=!0);}catch(c){a=!0,u=c}finally{try{t||null==s.return||s.return()}finally{if(a)throw u}}return n}(e,r)||s(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,r){if(e){if("string"===typeof e)return c(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,r):void 0}}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function i(e,r,n,t,a,u,o){try{var s=e[u](o),c=s.value}catch(i){return void n(i)}s.done?r(c):Promise.resolve(c).then(t,a)}function l(e){return function(){var r=this,n=arguments;return new Promise((function(t,a){var u=e.apply(r,n);function o(e){i(u,t,a,o,s,"next",e)}function s(e){i(u,t,a,o,s,"throw",e)}o(void 0)}))}}function p(e){return f.apply(this,arguments)}function f(){return(f=l(a.a.mark((function e(r){var t,s,c,i,p,f,h,d,w,m,v,y,b,g,x,k,P,A,S,E,L,T,C,M,I,z,N,U,B,j,O,V,D,K,W,Z,J,_,G,H,$,q,F,Q,R,X,Y,ee;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ee=function(){return(ee=l(a.a.mark((function e(r){var n,t,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==L.size){e.next=3;break}return e.next=3,j();case 3:return n=u(o(L.entries())[0],2),t=n[0],s=n[1],e.abrupt("return",new Promise((function(e,n){w.ethereumSignMessage({path:s,message:c.stripHexPrefix(r.data),hex:!0}).then((function(r){if(r.success){r.payload.address!==c.toChecksumAddress(t)&&n(new Error("signature doesnt match the right address"));var a="0x".concat(r.payload.signature);e(a)}else n(new Error(r.payload&&r.payload.error||"There was an error signing a message"))}))})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},Y=function(e){return ee.apply(this,arguments)},X=function(){return(X=l(a.a.mark((function e(r){var n,t,u,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==L.size){e.next=3;break}return e.next=3,j();case 3:return n=o(L.values())[0],t=new s.Transaction(r,{chain:A(b)}),e.next=7,Q(n,r);case 7:if((u=e.sent).success){e.next=10;break}throw new Error(u.payload.error);case 10:return c=u.payload,t.v=c.v,t.r=c.r,t.s=c.s,e.abrupt("return","0x".concat(t.serialize().toString("hex")));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)},R=function(e){return X.apply(this,arguments)},Q=function(e,r){var n=r.nonce,t=r.gasPrice,a=r.gas,u=r.to,o=r.value,s=r.data;return w.ethereumSignTransaction({path:e,transaction:{nonce:n,gasPrice:t,gasLimit:a,to:u,value:o||"",data:s||"",chainId:b}})},F=function(e){return new Promise((function(r,n){I.sendAsync({jsonrpc:"2.0",method:"eth_getBalance",params:[e,"latest"],id:42},(function(e,t){e&&n(e);var a=t&&t.result;r(null!=a?new P(a).toString(10):null)}))}))},q=function(e){return Promise.all(e.map((function(e){return new Promise(function(){var r=l(a.a.mark((function r(n){var t;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,F(e);case 2:t=r.sent,n({address:e,balance:t});case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())})))},$=function(){return($=l(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T){e.next=2;break}return e.abrupt("return",[void 0]);case 2:if(!(L.size>0)||r){e.next=4;break}return e.abrupt("return",D());case 4:if(""===E&&(E=y),M){e.next=15;break}return e.prev=6,e.next=9,W();case 9:M=e.sent,e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(6),e.t0;case 15:return h(M,L.size).forEach((function(e){var r=e.dPath,n=e.address;L.set(n,r)})),e.abrupt("return",D());case 18:case"end":return e.stop()}}),e,null,[[6,12]])})))).apply(this,arguments)},H=function(e){return $.apply(this,arguments)},G=function(){return(G=l(a.a.mark((function e(){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(!0);case 2:return r=e.sent,e.abrupt("return",q(r));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},_=function(){return G.apply(this,arguments)},J=function(){return T?D()[0]:void 0},Z=function(){return(Z=l(a.a.mark((function e(){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E){e.next=2;break}throw new Error("a derivation path is needed to get the public key");case 2:return e.prev=2,e.next=5,w.getPublicKey({path:E,coin:"eth"});case 5:if((r=e.sent).success){e.next=8;break}throw new Error(r.payload.error);case 8:return M={publicKey:r.payload.publicKey,chainCode:r.payload.chainCode,path:r.payload.serializedPath},e.abrupt("return",M);case 12:throw e.prev=12,e.t0=e.catch(2),new Error("There was an error accessing your Trezor accounts.");case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)},W=function(){return Z.apply(this,arguments)},K=function(e){var r=o(L.entries()),n=r.findIndex((function(r){return u(r,1)[0]===e}));r.unshift(r.splice(n,1)[0]),L=new Map(r)},D=function(){return Array.from(L.keys())},V=function(){return(V=l(a.a.mark((function e(r){var n,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="Unable to derive address from path ".concat(r),e.prev=1,e.next=4,w.ethereumGetAddress({path:r,showOnTrezor:!1});case 4:if((t=e.sent).success){e.next=7;break}throw new Error(n);case 7:return e.abrupt("return",t.payload.address);case 10:throw e.prev=10,e.t0=e.catch(1),new Error(n);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)},O=function(e){return V.apply(this,arguments)},j=function(){return T=!0,H()},B=function(){return C},U=function(){return(U=l(a.a.mark((function e(r,n){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d(r)){e.next=2;break}return e.abrupt("return",!1);case 2:if(r!==E&&(L=new Map),!n){e.next=17;break}return e.prev=4,e.next=7,O(r);case 7:return t=e.sent,L.set(t,r),E=r,C=!0,e.abrupt("return",!0);case 14:throw e.prev=14,e.t0=e.catch(4),new Error("There was a problem deriving an address from path ".concat(r));case 17:return C=!1,E=r,e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[4,14]])})))).apply(this,arguments)},N=function(e,r){return U.apply(this,arguments)},z=function(){E="",L=new Map,T=!1,I.stop()},e.next=25,n.e(17).then(n.t.bind(null,1066,7));case 25:return t=e.sent,e.next=28,Promise.all([n.e(4),n.e(5)]).then(n.t.bind(null,676,7));case 28:return s=e.sent,e.next=31,Promise.all([n.e(3),n.e(8)]).then(n.t.bind(null,679,7));case 31:return c=e.sent,e.next=34,Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,540));case 34:return i=e.sent,p=i.default,e.next=38,Promise.all([n.e(3),n.e(6),n.e(9)]).then(n.bind(null,792));case 38:return f=e.sent,h=f.generateAddresses,d=f.isValidPath,w=t.default,m=t.DEVICE_EVENT,v=t.DEVICE,y="m/44'/60'/0'/0",b=r.networkId,g=r.email,x=r.appUrl,k=r.rpcUrl,P=r.BigNumber,A=r.networkName,S=r.resetWalletState,E="",L=new Map,T=!1,C=!1,w.manifest({email:g,appUrl:x}),I=p({getAccounts:function(e){H().then((function(r){return e(null,r)})).catch((function(r){return e(r,null)}))},signTransaction:function(e,r){R(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},processMessage:function(e,r){Y(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},processPersonalMessage:function(e,r){Y(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},signMessage:function(e,r){Y(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},signPersonalMessage:function(e,r){Y(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},rpcUrl:k}),w.on(m,(function(e){e.type===v.DISCONNECT&&(I.stop(),S({disconnected:!0,walletName:"Trezor"}))})),I.setPath=N,I.dPath=E,I.enable=j,I.setPrimaryAccount=K,I.getPrimaryAddress=J,I.getAccounts=H,I.getMoreAccounts=_,I.getBalance=F,I.getBalances=q,I.send=I.sendAsync,I.disconnect=z,I.isCustomPath=B,e.abrupt("return",I);case 64:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.default=function(e){var r=e.rpcUrl,n=e.networkId,t=e.email,u=e.appUrl,o=e.preferred,s=e.label,c=e.iconSrc;return{name:s||"Trezor",svg:e.svg||'\n\t<svg width="40px" height="40px" viewBox="0 0 114 166" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\t\t<g id="Styles" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n\t\t\t<path d="M17,51.453125 L17,40 C17,17.90861 34.90861,-1.0658141e-14 57,-1.0658141e-14 C79.09139,-1.0658141e-14 97,17.90861 97,40 L97,51.453125 L113.736328,51.453125 L113.736328,139.193359 L57.5,166 L0,139.193359 L0,51.453125 L17,51.453125 Z M37,51.453125 L77,51.453125 L77,40 L76.9678398,40 C76.3750564,29.406335 67.6617997,21 57,21 C46.3382003,21 37.6249436,29.406335 37.0321602,40 L37,40 L37,51.453125 Z M23,72 L23,125 L56.8681641,140.966797 L91,125 L91,72 L23,72 Z" id="Trezor-logo" fill="currentColor"></path>\n\t\t</g>\n\t</svg>\n',iconSrc:c,wallet:function(){var e=l(a.a.mark((function e(o){var s,c,i,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=o.BigNumber,c=o.networkName,i=o.resetWalletState,e.next=3,p({rpcUrl:r,networkId:n,email:t,appUrl:u,BigNumber:s,networkName:c,resetWalletState:i});case 3:return f=e.sent,e.abrupt("return",{provider:f,interface:{name:"Trezor",connect:f.enable,disconnect:f.disconnect,address:{get:function(){var e=l(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.getPrimaryAddress());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},network:{get:function(){var e=l(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},balance:{get:function(){var e=l(a.a.mark((function e(){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=f.getPrimaryAddress(),e.abrupt("return",r&&f.getBalance(r));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}});case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),type:"hardware",desktop:!0,mobile:!0,osExclusions:["iOS"],preferred:o}}}}]);
//# sourceMappingURL=51.b44ebb1a.chunk.js.map