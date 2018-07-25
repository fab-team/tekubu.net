(function(){var t=this;(function(){(function(){this.Rails={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",buttonClickSelector:{selector:"button[data-remote]:not([form]), button[data-confirm]:not([form])",exclude:"form button"},inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",formDisableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",formEnableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",fileInputSelector:"input[name][type=file]:not([disabled])",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]"}}).call(this)}).call(t);var y=t.Rails;(function(){(function(){var o,n;n=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector,y.matches=function(t,e){return null!=e.exclude?n.call(t,e.selector)&&!n.call(t,e.exclude):n.call(t,e)},o="_ujsData",y.getData=function(t,e){var n;return null!=(n=t[o])?n[e]:void 0},y.setData=function(t,e,n){return null==t[o]&&(t[o]={}),t[o][e]=n},y.$=function(t){return Array.prototype.slice.call(document.querySelectorAll(t))}}).call(this),function(){var n,o,i;n=y.$,i=y.csrfToken=function(){var t;return(t=document.querySelector("meta[name=csrf-token]"))&&t.content},o=y.csrfParam=function(){var t;return(t=document.querySelector("meta[name=csrf-param]"))&&t.content},y.CSRFProtection=function(t){var e;if(null!=(e=i()))return t.setRequestHeader("X-CSRF-Token",e)},y.refreshCSRFTokens=function(){var t,e;if(e=i(),t=o(),null!=e&&null!=t)return n('form input[name="'+t+'"]').forEach(function(t){return t.value=e})}}.call(this),function(){var i,e,r;r=y.matches,"function"!=typeof(i=window.CustomEvent)&&((i=function(t,e){var n;return(n=document.createEvent("CustomEvent")).initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}).prototype=window.Event.prototype),e=y.fire=function(t,e,n){var o;return o=new i(e,{bubbles:!0,cancelable:!0,detail:n}),t.dispatchEvent(o),!o.defaultPrevented},y.stopEverything=function(t){return e(t.target,"ujs:everythingStopped"),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()},y.delegate=function(t,n,e,o){return t.addEventListener(e,function(t){var e;for(e=t.target;e instanceof Element&&!r(e,n);)e=e.parentNode;if(e instanceof Element&&!1===o.call(e,t))return t.preventDefault(),t.stopPropagation()})}}.call(this),function(){var e,o,t,i,r;o=y.CSRFProtection,y.fire,e={"*":"*/*",text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript",script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},y.ajax=function(e){var n;return e=i(e),n=t(e,function(){var t;return t=r(n.response,n.getResponseHeader("Content-Type")),2===Math.floor(n.status/100)?"function"==typeof e.success&&e.success(t,n.statusText,n):"function"==typeof e.error&&e.error(t,n.statusText,n),"function"==typeof e.complete?e.complete(n,n.statusText):void 0}),!("function"!=typeof e.beforeSend||!e.beforeSend(n,e))&&(n.readyState===XMLHttpRequest.OPENED?n.send(e.data):void 0)},i=function(t){return t.url=t.url||location.href,t.type=t.type.toUpperCase(),"GET"===t.type&&t.data&&(t.url.indexOf("?")<0?t.url+="?"+t.data:t.url+="&"+t.data),null==e[t.dataType]&&(t.dataType="*"),t.accept=e[t.dataType],"*"!==t.dataType&&(t.accept+=", */*; q=0.01"),t},t=function(t,e){var n;return(n=new XMLHttpRequest).open(t.type,t.url,!0),n.setRequestHeader("Accept",t.accept),"string"==typeof t.data&&n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),t.crossDomain||n.setRequestHeader("X-Requested-With","XMLHttpRequest"),o(n),n.withCredentials=!!t.withCredentials,n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE)return e(n)},n},r=function(t,e){var n,o;if("string"==typeof t&&"string"==typeof e)if(e.match(/\bjson\b/))try{t=JSON.parse(t)}catch(i){}else if(e.match(/\b(?:java|ecma)script\b/))(o=document.createElement("script")).text=t,document.head.appendChild(o).parentNode.removeChild(o);else if(e.match(/\b(xml|html|svg)\b/)){n=new DOMParser,e=e.replace(/;.+/,"");try{t=n.parseFromString(t,e)}catch(i){}}return t},y.href=function(t){return t.href},y.isCrossDomain=function(t){var e,n;(e=document.createElement("a")).href=location.href,n=document.createElement("a");try{return n.href=t,!((!n.protocol||":"===n.protocol)&&!n.host||e.protocol+"//"+e.host==n.protocol+"//"+n.host)}catch(o){return o,!0}}}.call(this),function(){var i,r;i=y.matches,r=function(t){return Array.prototype.slice.call(t)},y.serializeElement=function(t,e){var n,o;return n=[t],i(t,"form")&&(n=r(t.elements)),o=[],n.forEach(function(e){if(e.name&&!e.disabled)return i(e,"select")?r(e.options).forEach(function(t){if(t.selected)return o.push({name:e.name,value:t.value})}):e.checked||-1===["radio","checkbox","submit"].indexOf(e.type)?o.push({name:e.name,value:e.value}):void 0}),e&&o.push(e),o.map(function(t){return null!=t.name?encodeURIComponent(t.name)+"="+encodeURIComponent(t.value):t}).join("&")},y.formElements=function(t,e){return i(t,"form")?r(t.elements).filter(function(t){return i(t,e)}):r(t.querySelectorAll(e))}}.call(this),function(){var e,r,n;r=y.fire,n=y.stopEverything,y.handleConfirm=function(t){if(!e(this))return n(t)},e=function(t){var e,n,o;if(!(o=t.getAttribute("data-confirm")))return!0;if(e=!1,r(t,"confirm")){try{e=confirm(o)}catch(i){}n=r(t,"confirm:complete",[e])}return e&&n}}.call(this),function(){var n,o,i,r,a,c,e,s,l,u,d;l=y.matches,s=y.getData,u=y.setData,d=y.stopEverything,e=y.formElements,y.handleDisabledElement=function(t){if(this.disabled)return d(t)},y.enableElement=function(t){var e;return e=t instanceof Event?t.target:t,l(e,y.linkDisableSelector)?c(e):l(e,y.buttonDisableSelector)||l(e,y.formEnableSelector)?r(e):l(e,y.formSubmitSelector)?a(e):void 0},y.disableElement=function(t){var e;return e=t instanceof Event?t.target:t,l(e,y.linkDisableSelector)?i(e):l(e,y.buttonDisableSelector)||l(e,y.formDisableSelector)?n(e):l(e,y.formSubmitSelector)?o(e):void 0},i=function(t){var e;return null!=(e=t.getAttribute("data-disable-with"))&&(u(t,"ujs:enable-with",t.innerHTML),t.innerHTML=e),t.addEventListener("click",d),u(t,"ujs:disabled",!0)},c=function(t){var e;return null!=(e=s(t,"ujs:enable-with"))&&(t.innerHTML=e,u(t,"ujs:enable-with",null)),t.removeEventListener("click",d),u(t,"ujs:disabled",null)},o=function(t){return e(t,y.formDisableSelector).forEach(n)},n=function(t){var e;return null!=(e=t.getAttribute("data-disable-with"))&&(l(t,"button")?(u(t,"ujs:enable-with",t.innerHTML),t.innerHTML=e):(u(t,"ujs:enable-with",t.value),t.value=e)),t.disabled=!0,u(t,"ujs:disabled",!0)},a=function(t){return e(t,y.formEnableSelector).forEach(r)},r=function(t){var e;return null!=(e=s(t,"ujs:enable-with"))&&(l(t,"button")?t.innerHTML=e:t.value=e,u(t,"ujs:enable-with",null)),t.disabled=!1,u(t,"ujs:disabled",null)}}.call(this),function(){var s;s=y.stopEverything,y.handleMethod=function(t){var e,n,o,i,r,a,c;if(c=(a=this).getAttribute("data-method"))return r=y.href(a),n=y.csrfToken(),e=y.csrfParam(),o=document.createElement("form"),i="<input name='_method' value='"+c+"' type='hidden' />",null==e||null==n||y.isCrossDomain(r)||(i+="<input name='"+e+"' value='"+n+"' type='hidden' />"),i+='<input type="submit" />',o.method="post",o.action=r,o.target=a.target,o.innerHTML=i,o.style.display="none",document.body.appendChild(o),o.querySelector('[type="submit"]').click(),s(t)}}.call(this),function(){var s,l,u,d,f,p,h,m,b,v=[].slice;p=y.matches,u=y.getData,m=y.setData,l=y.fire,b=y.stopEverything,s=y.ajax,d=y.isCrossDomain,h=y.serializeElement,f=function(t){var e;return null!=(e=t.getAttribute("data-remote"))&&"false"!==e},y.handleRemote=function(t){var e,n,o,i,r,a,c;return!f(i=this)||(l(i,"ajax:before")?(c=i.getAttribute("data-with-credentials"),o=i.getAttribute("data-type")||"script",p(i,y.formSubmitSelector)?(e=u(i,"ujs:submit-button"),r=u(i,"ujs:submit-button-formmethod")||i.method,a=u(i,"ujs:submit-button-formaction")||i.getAttribute("action")||location.href,"GET"===r.toUpperCase()&&(a=a.replace(/\?.*$/,"")),"multipart/form-data"===i.enctype?(n=new FormData(i),null!=e&&n.append(e.name,e.value)):n=h(i,e),m(i,"ujs:submit-button",null),m(i,"ujs:submit-button-formmethod",null),m(i,"ujs:submit-button-formaction",null)):p(i,y.buttonClickSelector)||p(i,y.inputChangeSelector)?(r=i.getAttribute("data-method"),a=i.getAttribute("data-url"),n=h(i,i.getAttribute("data-params"))):(r=i.getAttribute("data-method"),a=y.href(i),n=i.getAttribute("data-params")),s({type:r||"GET",url:a,data:n,dataType:o,beforeSend:function(t,e){return l(i,"ajax:beforeSend",[t,e])?l(i,"ajax:send",[t]):(l(i,"ajax:stopped"),!1)},success:function(){var t;return t=1<=arguments.length?v.call(arguments,0):[],l(i,"ajax:success",t)},error:function(){var t;return t=1<=arguments.length?v.call(arguments,0):[],l(i,"ajax:error",t)},complete:function(){var t;return t=1<=arguments.length?v.call(arguments,0):[],l(i,"ajax:complete",t)},crossDomain:d(a),withCredentials:null!=c&&"false"!==c}),b(t)):(l(i,"ajax:stopped"),!1))},y.formSubmitButtonClick=function(){var t,e;if(e=(t=this).form)return t.name&&m(e,"ujs:submit-button",{name:t.name,value:t.value}),m(e,"ujs:formnovalidate-button",t.formNoValidate),m(e,"ujs:submit-button-formaction",t.getAttribute("formaction")),m(e,"ujs:submit-button-formmethod",t.getAttribute("formmethod"))},y.handleMetaClick=function(t){var e,n,o;if(o=((n=this).getAttribute("data-method")||"GET").toUpperCase(),e=n.getAttribute("data-params"),(t.metaKey||t.ctrlKey)&&"GET"===o&&!e)return t.stopImmediatePropagation()}}.call(this),function(){var t,o,e,n,i,r,a,c,s,l,u,d,f,p;r=y.fire,e=y.delegate,c=y.getData,t=y.$,p=y.refreshCSRFTokens,o=y.CSRFProtection,i=y.enableElement,n=y.disableElement,l=y.handleDisabledElement,s=y.handleConfirm,f=y.handleRemote,a=y.formSubmitButtonClick,u=y.handleMetaClick,d=y.handleMethod,"undefined"==typeof jQuery||null===jQuery||null==jQuery.ajax||jQuery.rails||(jQuery.rails=y,jQuery.ajaxPrefilter(function(t,e,n){if(!t.crossDomain)return o(n)})),y.start=function(){if(window._rails_loaded)throw new Error("rails-ujs has already been loaded!");return window.addEventListener("pageshow",function(){return t(y.formEnableSelector).forEach(function(t){if(c(t,"ujs:disabled"))return i(t)}),t(y.linkDisableSelector).forEach(function(t){if(c(t,"ujs:disabled"))return i(t)})}),e(document,y.linkDisableSelector,"ajax:complete",i),e(document,y.linkDisableSelector,"ajax:stopped",i),e(document,y.buttonDisableSelector,"ajax:complete",i),e(document,y.buttonDisableSelector,"ajax:stopped",i),e(document,y.linkClickSelector,"click",l),e(document,y.linkClickSelector,"click",s),e(document,y.linkClickSelector,"click",u),e(document,y.linkClickSelector,"click",n),e(document,y.linkClickSelector,"click",f),e(document,y.linkClickSelector,"click",d),e(document,y.buttonClickSelector,"click",l),e(document,y.buttonClickSelector,"click",s),e(document,y.buttonClickSelector,"click",n),e(document,y.buttonClickSelector,"click",f),e(document,y.inputChangeSelector,"change",l),e(document,y.inputChangeSelector,"change",s),e(document,y.inputChangeSelector,"change",f),e(document,y.formSubmitSelector,"submit",l),e(document,y.formSubmitSelector,"submit",s),e(document,y.formSubmitSelector,"submit",f),e(document,y.formSubmitSelector,"submit",function(t){return setTimeout(function(){return n(t)},13)}),e(document,y.formSubmitSelector,"ajax:send",n),e(document,y.formSubmitSelector,"ajax:complete",i),e(document,y.formInputClickSelector,"click",l),e(document,y.formInputClickSelector,"click",s),e(document,y.formInputClickSelector,"click",a),document.addEventListener("DOMContentLoaded",p),window._rails_loaded=!0},window.Rails===y&&r(document,"rails:attachBindings")&&y.start()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=y:"function"==typeof define&&define.amd&&define(y)}).call(this),function(){var t=this;(function(){(function(){var n=[].slice;this.ActionCable={INTERNAL:{message_types:{welcome:"welcome",ping:"ping",confirmation:"confirm_subscription",rejection:"reject_subscription"},default_mount_path:"/cable",protocols:["actioncable-v1-json","actioncable-unsupported"]},WebSocket:window.WebSocket,logger:window.console,createConsumer:function(t){var e;return null==t&&(t=null!=(e=this.getConfig("url"))?e:this.INTERNAL.default_mount_path),new s.Consumer(this.createWebSocketURL(t))},getConfig:function(t){var e;return null!=(e=document.head.querySelector("meta[name='action-cable-"+t+"']"))?e.getAttribute("content"):void 0},createWebSocketURL:function(t){var e;return t&&!/^wss?:/i.test(t)?((e=document.createElement("a")).href=t,e.href=e.href,e.protocol=e.protocol.replace("http","ws"),e.href):t},startDebugging:function(){return this.debugging=!0},stopDebugging:function(){return this.debugging=null},log:function(){var t,e;if(t=1<=arguments.length?n.call(arguments,0):[],this.debugging)return t.push(Date.now()),(e=this.logger).log.apply(e,["[ActionCable]"].concat(n.call(t)))}}}).call(this)}).call(t);var s=t.ActionCable;(function(){(function(){var o=function(t,e){return function(){return t.apply(e,arguments)}};s.ConnectionMonitor=function(){function t(t){this.connection=t,this.visibilityDidChange=o(this.visibilityDidChange,this),this.reconnectAttempts=0}var i,e,n;return t.pollInterval={min:3,max:30},t.staleThreshold=6,t.prototype.start=function(){if(!this.isRunning())return this.startedAt=e(),delete this.stoppedAt,this.startPolling(),document.addEventListener("visibilitychange",this.visibilityDidChange),s.log("ConnectionMonitor started. pollInterval = "+this.getPollInterval()+" ms")},t.prototype.stop=function(){if(this.isRunning())return this.stoppedAt=e(),this.stopPolling(),document.removeEventListener("visibilitychange",this.visibilityDidChange),s.log("ConnectionMonitor stopped")},t.prototype.isRunning=function(){return null!=this.startedAt&&null==this.stoppedAt},t.prototype.recordPing=function(){return this.pingedAt=e()},t.prototype.recordConnect=function(){return this.reconnectAttempts=0,this.recordPing(),delete this.disconnectedAt,s.log("ConnectionMonitor recorded connect")},t.prototype.recordDisconnect=function(){return this.disconnectedAt=e(),s.log("ConnectionMonitor recorded disconnect")},t.prototype.startPolling=function(){return this.stopPolling(),this.poll()},t.prototype.stopPolling=function(){return clearTimeout(this.pollTimeout)},t.prototype.poll=function(){return this.pollTimeout=setTimeout((t=this,function(){return t.reconnectIfStale(),t.poll()}),this.getPollInterval());var t},t.prototype.getPollInterval=function(){var t,e,n,o;return n=(o=this.constructor.pollInterval).min,e=o.max,t=5*Math.log(this.reconnectAttempts+1),Math.round(1e3*i(t,n,e))},t.prototype.reconnectIfStale=function(){if(this.connectionIsStale())return s.log("ConnectionMonitor detected stale connection. reconnectAttempts = "+this.reconnectAttempts+", pollInterval = "+this.getPollInterval()+" ms, time disconnected = "+n(this.disconnectedAt)+" s, stale threshold = "+this.constructor.staleThreshold+" s"),this.reconnectAttempts++,this.disconnectedRecently()?s.log("ConnectionMonitor skipping reopening recent disconnect"):(s.log("ConnectionMonitor reopening"),this.connection.reopen())},t.prototype.connectionIsStale=function(){var t;return n(null!=(t=this.pingedAt)?t:this.startedAt)>this.constructor.staleThreshold},t.prototype.disconnectedRecently=function(){return this.disconnectedAt&&n(this.disconnectedAt)<this.constructor.staleThreshold},t.prototype.visibilityDidChange=function(){if("visible"===document.visibilityState)return setTimeout((t=this,function(){if(t.connectionIsStale()||!t.connection.isOpen())return s.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = "+document.visibilityState),t.connection.reopen()}),200);var t},e=function(){return(new Date).getTime()},n=function(t){return(e()-t)/1e3},i=function(t,e,n){return Math.max(e,Math.min(n,t))},t}()}).call(this),function(){var t,i,e,n,o,r=[].slice,a=function(t,e){return function(){return t.apply(e,arguments)}},c=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};n=s.INTERNAL,i=n.message_types,e=n.protocols,o=2<=e.length?r.call(e,0,t=e.length-1):(t=0,[]),e[t++],s.Connection=function(){function t(t){this.consumer=t,this.open=a(this.open,this),this.subscriptions=this.consumer.subscriptions,this.monitor=new s.ConnectionMonitor(this),this.disconnected=!0}return t.reopenDelay=500,t.prototype.send=function(t){return!!this.isOpen()&&(this.webSocket.send(JSON.stringify(t)),!0)},t.prototype.open=function(){return this.isActive()?(s.log("Attempted to open WebSocket, but existing socket is "+this.getState()),!1):(s.log("Opening WebSocket, current state is "+this.getState()+", subprotocols: "+e),null!=this.webSocket&&this.uninstallEventHandlers(),this.webSocket=new s.WebSocket(this.consumer.url,e),this.installEventHandlers(),this.monitor.start(),!0)},t.prototype.close=function(t){var e;if((null!=t?t:{allowReconnect:!0}).allowReconnect||this.monitor.stop(),this.isActive())return null!=(e=this.webSocket)?e.close():void 0},t.prototype.reopen=function(){var t;if(s.log("Reopening WebSocket, current state is "+this.getState()),!this.isActive())return this.open();try{return this.close()}catch(e){return t=e,s.log("Failed to reopen WebSocket",t)}finally{s.log("Reopening WebSocket in "+this.constructor.reopenDelay+"ms"),setTimeout(this.open,this.constructor.reopenDelay)}},t.prototype.getProtocol=function(){var t;return null!=(t=this.webSocket)?t.protocol:void 0},t.prototype.isOpen=function(){return this.isState("open")},t.prototype.isActive=function(){return this.isState("open","connecting")},t.prototype.isProtocolSupported=function(){var t;return t=this.getProtocol(),0<=c.call(o,t)},t.prototype.isState=function(){var t,e;return e=1<=arguments.length?r.call(arguments,0):[],t=this.getState(),0<=c.call(e,t)},t.prototype.getState=function(){var t,e;for(e in WebSocket)if(WebSocket[e]===(null!=(t=this.webSocket)?t.readyState:void 0))return e.toLowerCase();return null},t.prototype.installEventHandlers=function(){var t,e;for(t in this.events)e=this.events[t].bind(this),this.webSocket["on"+t]=e},t.prototype.uninstallEventHandlers=function(){var t;for(t in this.events)this.webSocket["on"+t]=function(){}},t.prototype.events={message:function(t){var e,n,o;if(this.isProtocolSupported())switch(e=(o=JSON.parse(t.data)).identifier,n=o.message,o.type){case i.welcome:return this.monitor.recordConnect(),this.subscriptions.reload();case i.ping:return this.monitor.recordPing();case i.confirmation:return this.subscriptions.notify(e,"connected");case i.rejection:return this.subscriptions.reject(e);default:return this.subscriptions.notify(e,"received",n)}},open:function(){if(s.log("WebSocket onopen event, using '"+this.getProtocol()+"' subprotocol"),this.disconnected=!1,!this.isProtocolSupported())return s.log("Protocol is unsupported. Stopping monitor and disconnecting."),this.close({allowReconnect:!1})},close:function(){if(s.log("WebSocket onclose event"),!this.disconnected)return this.disconnected=!0,this.monitor.recordDisconnect(),this.subscriptions.notifyAll("disconnected",{willAttemptReconnect:this.monitor.isRunning()})},error:function(){return s.log("WebSocket onerror event")}},t}()}.call(this),function(){var l=[].slice;s.Subscriptions=function(){function t(t){this.consumer=t,this.subscriptions=[]}return t.prototype.create=function(t,e){var n,o,i;return o="object"==typeof(n=t)?n:{channel:n},i=new s.Subscription(this.consumer,o,e),this.add(i)},t.prototype.add=function(t){return this.subscriptions.push(t),this.consumer.ensureActiveConnection(),this.notify(t,"initialized"),this.sendCommand(t,"subscribe"),t},t.prototype.remove=function(t){return this.forget(t),this.findAll(t.identifier).length||this.sendCommand(t,"unsubscribe"),t},t.prototype.reject=function(t){var e,n,o,i,r;for(i=[],e=0,n=(o=this.findAll(t)).length;e<n;e++)r=o[e],this.forget(r),this.notify(r,"rejected"),i.push(r);return i},t.prototype.forget=function(i){var r;return this.subscriptions=function(){var t,e,n,o;for(o=[],t=0,e=(n=this.subscriptions).length;t<e;t++)(r=n[t])!==i&&o.push(r);return o}.call(this),i},t.prototype.findAll=function(t){var e,n,o,i,r;for(i=[],e=0,n=(o=this.subscriptions).length;e<n;e++)(r=o[e]).identifier===t&&i.push(r);return i},t.prototype.reload=function(){var t,e,n,o,i;for(o=[],t=0,e=(n=this.subscriptions).length;t<e;t++)i=n[t],o.push(this.sendCommand(i,"subscribe"));return o},t.prototype.notifyAll=function(t){var e,n,o,i,r,a,c;for(n=t,e=2<=arguments.length?l.call(arguments,1):[],a=[],o=0,i=(r=this.subscriptions).length;o<i;o++)c=r[o],a.push(this.notify.apply(this,[c,n].concat(l.call(e))));return a},t.prototype.notify=function(t,e){var n,o,i,r,a,c,s;for(c=t,o=e,n=3<=arguments.length?l.call(arguments,2):[],a=[],i=0,r=(s="string"==typeof c?this.findAll(c):[c]).length;i<r;i++)c=s[i],a.push("function"==typeof c[o]?c[o].apply(c,n):void 0);return a},t.prototype.sendCommand=function(t,e){var n;return n=t.identifier,this.consumer.send({command:e,identifier:n})},t}()}.call(this),function(){s.Subscription=function(){function t(t,e,n){this.consumer=t,null==e&&(e={}),this.identifier=JSON.stringify(e),o(this,n)}var o;return t.prototype.perform=function(t,e){return null==e&&(e={}),e.action=t,this.send(e)},t.prototype.send=function(t){return this.consumer.send({command:"message",identifier:this.identifier,data:JSON.stringify(t)})},t.prototype.unsubscribe=function(){return this.consumer.subscriptions.remove(this)},o=function(t,e){var n,o;if(null!=e)for(n in e)o=e[n],t[n]=o;return t},t}()}.call(this),function(){s.Consumer=function(){function t(t){this.url=t,this.subscriptions=new s.Subscriptions(this),this.connection=new s.Connection(this)}return t.prototype.send=function(t){return this.connection.send(t)},t.prototype.connect=function(){return this.connection.open()},t.prototype.disconnect=function(){return this.connection.close({allowReconnect:!1})},t.prototype.ensureActiveConnection=function(){if(!this.connection.isActive())return this.connection.open()},t}()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=s:"function"==typeof define&&define.amd&&define(s)}.call(this),function(){this.App||(this.App={}),App.cable=ActionCable.createConsumer()}.call(this),$(document).on("turbolinks:load",function(){$(".p-header__menu__btn").on("click",function(){$(this).hasClass("is_active")?($(this).removeClass("is_active"),$(".p-header__menu").fadeOut()):($(this).addClass("is_active"),$(".p-header__menu").fadeIn())}),$(".js-sharebtn").on("click",function(t){t.preventDefault();var e=undefined,n=undefined,o=undefined,i=undefined,r=650,a=450,c=undefined,s=undefined,l=undefined,u="",d=(location.protocol,location.host),f=$(this).find(".c-button__sns__title").text(),p=$(this).find(".c-button__sns__link").text(),h=encodeURIComponent(d+p);console.log(f),u+="\u30aa\u30b9\u30b9\u30e1\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u672c",u+="\n",u+="\u300c",u+=$(this).find(".c-button__sns__title").text(),u+="\u300d",u+="\n\n","undefined"!=typeof window.screenLeft?(e=window.screenLeft,n=window.screenTop):(e=window.screen.left,n=window.screen.top),"undefined"!=typeof window.innerWidth?(o=window.innerWidth,i=window.innerHeight):"undefined"!=typeof document.documentElement&&"undefined"!=typeof document.documentElement.clientWidth?(o=document.documentElement.clientWidth,o=document.documentElement.clientHeight):(o=window.screen.width,o=window.screen.height),s=o/2-r/2+e,c=i/2-a/2+n,l="http://twitter.com/share?url=http://"+h+"&text="+encodeURIComponent(u)+"&hashtags="+encodeURIComponent("Tekubu")+","+encodeURIComponent("\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0")+","+encodeURIComponent("\u30aa\u30b9\u30b9\u30e1\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u672c\u3092\u3054\u7d39\u4ecb"),window.open(l,"twitter","width="+r+", height="+a+", top="+c+", left="+s)})}),function(){}.call(this),function(){}.call(this),function(e,n){"function"==typeof define&&define.amd?define(["jquery"],function(t){return n(e,t)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=n(e,require("jquery")):e.lity=n(e,e.jQuery||e.Zepto)}("undefined"!=typeof window?window:this,function(t,d){"use strict";function f(t){var e=A();return q&&t.length?(t.one(q,e.resolve),setTimeout(e.resolve,500)):e.resolve(),e.promise()}function p(t,e,n){if(1===arguments.length)return d.extend({},t);if("string"==typeof e){if(void 0===n)return void 0===t[e]?null:t[e];t[e]=n}else d.extend(t,e);return this}function n(t){for(var e,n=decodeURI(t.split("#")[0]).split("&"),o={},i=0,r=n.length;i<r;i++)n[i]&&(o[(e=n[i].split("="))[0]]=e[1]);return o}function o(t,e){return t+(-1<t.indexOf("?")?"&":"?")+d.param(e)}function i(t,e){var n=t.indexOf("#");return-1===n?e:(0<n&&(t=t.substr(n)),e+t)}function a(t){return d('<span class="lity-error"/>').append(t)}function e(t,e){var n=e.opener()&&e.opener().data("lity-desc")||"Image with no description",o=d('<img src="'+t+'" alt="'+n+'"/>'),i=A(),r=function(){i.reject(a("Failed loading image"))};return o.on("load",function(){if(0===this.naturalWidth)return r();i.resolve(o)}).on("error",r),i.promise()}function r(t,e){var n,o,i;try{n=d(t)}catch(t){return!1}return!!n.length&&(o=d('<i style="display:none !important"/>'),i=n.hasClass("lity-hide"),e.element().one("lity:remove",function(){o.before(n).remove(),i&&!n.closest(".lity-content").length&&n.addClass("lity-hide")}),n.removeClass("lity-hide").after(o))}function c(t){var e=L.exec(t);return!!e&&h(i(t,o("https://www.youtube"+(e[2]||"")+".com/embed/"+e[4],d.extend({autoplay:1},n(e[5]||"")))))}function s(t){var e=H.exec(t);return!!e&&h(i(t,o("https://player.vimeo.com/video/"+e[3],d.extend({autoplay:1},n(e[4]||"")))))}function l(t){var e=O.exec(t);return!!e&&(0!==t.indexOf("http")&&(t="https:"+t),h(i(t,o("https://www.facebook.com/plugins/video.php?href="+t,d.extend({autoplay:1},n(e[4]||""))))))}function u(t){var e=W.exec(t);return!!e&&h(i(t,o("https://www.google."+e[3]+"/maps?"+e[6],{output:0<e[6].indexOf("layer=c")?"svembed":"embed"})))}function h(t){return'<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="'+t+'"/></div>'}function m(){return E.documentElement.clientHeight?E.documentElement.clientHeight:Math.round(j.height())}function b(t){var e=w();e&&(27===t.keyCode&&e.options("esc")&&e.close(),9===t.keyCode&&v(t,e))}function v(t,e){var n=e.element().find(_),o=n.index(E.activeElement);t.shiftKey&&o<=0?(n.get(n.length-1).focus(),t.preventDefault()):t.shiftKey||o!==n.length-1||(n.get(0).focus(),t.preventDefault())}function y(){d.each(T,function(t,e){e.resize()})}function g(t){1===T.unshift(t)&&(D.addClass("lity-active"),j.on({resize:y,keydown:b})),d("body > *").not(t.element()).addClass("lity-hidden").each(function(){var t=d(this);void 0===t.data(M)&&t.data(M,t.attr(R)||null)}).attr(R,"true")}function S(e){e.element().attr(R,"true"),1===T.length&&(D.removeClass("lity-active"),j.off({resize:y,keydown:b})),((T=d.grep(T,function(t){return e!==t})).length?T[0].element():d(".lity-hidden")).removeClass("lity-hidden").each(function(){var t=d(this),e=t.data(M);e?t.attr(R,e):t.removeAttr(R),t.removeData(M)})}function w(){return 0===T.length?null:T[0]}function C(n,o,i,t){var r,a="inline",c=d.extend({},i);return t&&c[t]?(r=c[t](n,o),a=t):(d.each(["inline","iframe"],function(t,e){delete c[e],c[e]=i[e]}),d.each(c,function(t,e){return!e||!(!e.test||e.test(n,o))||(!1!==(r=e(n,o))?(a=t,!1):void 0)})),{handler:a,content:r||""}}function k(t,e,n,o){function i(t){c=d(t).css("max-height",m()+"px"),a.find(".lity-loader").each(function(){var t=d(this);f(t).always(function(){t.remove()})}),a.removeClass("lity-loading").find(".lity-content").empty().append(c),l=!0,c.trigger("lity:ready",[s])}var r,a,c,s=this,l=!1,u=!1;e=d.extend({},P,e),a=d(e.template),s.element=function(){return a},s.opener=function(){return n},s.options=d.proxy(p,s,e),s.handlers=d.proxy(p,s,e.handlers),s.resize=function(){l&&!u&&c.css("max-height",m()+"px").trigger("lity:resize",[s])},s.close=function(){if(l&&!u){u=!0,S(s);var t=A();if(o&&(E.activeElement===a[0]||d.contains(a[0],E.activeElement)))try{o.focus()}catch(t){}return c.trigger("lity:close",[s]),a.removeClass("lity-opened").addClass("lity-closed"),f(c.add(a)).always(function(){c.trigger("lity:remove",[s]),a.remove(),a=void 0,t.resolve()}),t.promise()}},r=C(t,s,e.handlers,e.handler),a.attr(R,"false").addClass("lity-loading lity-opened lity-"+r.handler).appendTo("body").focus().on("click","[data-lity-close]",function(t){d(t.target).is("[data-lity-close]")&&s.close()}).trigger("lity:open",[s]),g(s),d.when(r.content).always(i)}function x(t,e,n){t.preventDefault?(t.preventDefault(),t=(n=d(this)).data("lity-target")||n.attr("href")||n.attr("src")):n=d(n);var o=new k(t,d.extend({},n.data("lity-options")||n.data("lity"),e),n,E.activeElement);if(!t.preventDefault)return o}var E=t.document,j=d(t),A=d.Deferred,D=d("html"),T=[],R="aria-hidden",M="lity-"+R,_='a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])',P={esc:!0,handler:null,handlers:{image:e,inline:r,youtube:c,vimeo:s,googlemaps:u,facebookvideo:l,iframe:h},template:'<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'},I=/(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,L=/(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,H=/(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,W=/((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,O=/(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i,q=function(){var t=E.createElement("div"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return e[n];return!1}();return e.test=function(t){return I.test(t)},x.version="2.3.1",x.options=d.proxy(p,x,P),x.handlers=d.proxy(p,x,P.handlers),x.current=w,d(E).on("click.lity","[data-lity]",x),x});