(this["webpackJsonpmetamask-auth"]=this["webpackJsonpmetamask-auth"]||[]).push([[43],{517:function(n,t,e){"use strict";e.r(t);var a=e(9),r=e.n(a),c=(e(79),e(115));e(39),e(81),e(80);function i(n,t,e,a,r,c,i){try{var u=n[c](i),o=u.value}catch(s){return void e(s)}u.done?t(o):Promise.resolve(o).then(a,r)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(a,r){var c=n.apply(t,e);function u(n){i(c,a,r,u,o,"next",n)}function o(n){i(c,a,r,u,o,"throw",n)}u(void 0)}))}}t.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{minimumBalance:"0"},t=n.minimumBalance,e=n.heading,a=n.description,i=n.icon,o=n.html,s=n.button;return function(){var n=u(r.a.mark((function n(u){var l,h,m,f;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(l=u.balance,h=u.BigNumber,m=u.stateSyncStatus,f=u.stateStore,null!==l){n.next=10;break}if(!m.balance){n.next=10;break}return n.prev=3,n.next=6,m.balance;case 6:n.next=10;break;case 8:n.prev=8,n.t0=n.catch(3);case 10:if(!h(f.balance.get()).lt(h(t))){n.next=12;break}return n.abrupt("return",{heading:e||"Get Some ETH",description:a||"Your current account has less than the necessary minimum balance of ".concat(h(t).div(h("1000000000000000000")).toString(10)," ETH."),eventCode:"nsfFail",icon:i||c.d,html:o,button:s});case 12:case"end":return n.stop()}}),n,null,[[3,8]])})));return function(t){return n.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=43.6e7d03ad.chunk.js.map