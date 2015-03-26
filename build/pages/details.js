define("bower_components/get/get",["require","bower_components/lodash/lodash"],function(e){var t=e("bower_components/lodash/lodash");return function(e,n){if(!e||!n)return e;var r=e,i=n.split(".");return t.every(i,function(t){return typeof r[t]=="function"?r=r[t].apply(e):r=r[t],r}),r}}),define("bower_components/set/set",["require","bower_components/lodash/lodash"],function(e){function n(e,r){var i={};return e===r?{}:t.isPlainObject(e)?(t.forOwn(e,function(e,s){t.isPlainObject(e)&&r[s]?(i[s]=n(e,r[s]),t.isEmpty(i[s])&&!t.isEmpty(e)&&delete i[s]):r[s]!==e&&(i[s]=e)}),i):e}function r(e,n){var r={},i=r,s=e.split(".");return t.each(s,function(e,t){t===s.length-1?i[s[s.length-1]]=n:i[e]={},i=i[e]}),r}function i(e,n){t.forOwn(n,function(n,r){t.isPlainObject(n)&&t.isPlainObject(e[r])?i(e[r],n):t.isArray(n)&&t.isArray(e[r])?e[r].splice.apply(e[r],[0,e[r].length].concat(n)):e[r]=n})}var t=e("bower_components/lodash/lodash");return function(e,t,s){var o;return typeof t=="string"?s=r(t,s):s=t,o=n(s,e),i(e,o),o}}),define("bower_components/deepExtend/deepExtend",["require","bower_components/lodash/lodash"],function(e){var t=e("bower_components/lodash/lodash");return function n(e){return t.each([].slice.call(arguments,1),function(r){t.forOwn(r,function(r,i){t.isPlainObject(r)?e[i]=n({},e[i],r):t.isArray(r)?e[i]=t.cloneDeep(r):e[i]=r})}),e}}),define("bower_components/makeClass/makeClass",["require","bower_components/deepExtend/deepExtend","bower_components/lodash/lodash"],function(e){var t=e("bower_components/deepExtend/deepExtend"),n=e("bower_components/lodash/lodash");return function r(e){var i=!0,s=t.apply(null,[{}].concat([].slice.call(arguments,1))),o=function(){var r;if(this instanceof o){r=i?arguments:arguments[0],i=!0;for(var u in this)n.isPlainObject(this[u])&&(this[u]=t({},this[u])),n.isArray(this[u])&&(this[u]=n.cloneDeep(this[u]));return s&&n.has(s,"constructor")?s.constructor.apply(this,r):e.apply(this,r)}return i=!1,new o(arguments)};return o.prototype=Object.create(e.prototype),s&&t(o.prototype,s),t(o,e,{extend:function(){var e=[this].concat([].slice.call(arguments));return r.apply(null,e)}})}}),function(e,t){if(typeof define=="function"&&define.amd)define("bower_components/backbone/backbone",["underscore","jquery","exports"],function(n,r,i){e.Backbone=t(e,i,n,r)});else if(typeof exports!="undefined"){var n=require("underscore");t(e,exports,n)}else e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}(this,function(e,t,n,r){var i=e.Backbone,s=[],o=s.push,u=s.slice,a=s.splice;t.VERSION="1.1.2",t.$=r,t.noConflict=function(){return e.Backbone=i,this},t.emulateHTTP=!1,t.emulateJSON=!1;var f=t.Events={on:function(e,t,n){if(!c(this,"on",e,[t,n])||!t)return this;this._events||(this._events={});var r=this._events[e]||(this._events[e]=[]);return r.push({callback:t,context:n,ctx:n||this}),this},once:function(e,t,r){if(!c(this,"once",e,[t,r])||!t)return this;var i=this,s=n.once(function(){i.off(e,s),t.apply(this,arguments)});return s._callback=t,this.on(e,s,r)},off:function(e,t,r){var i,s,o,u,a,f,l,h;if(!this._events||!c(this,"off",e,[t,r]))return this;if(!e&&!t&&!r)return this._events=void 0,this;u=e?[e]:n.keys(this._events);for(a=0,f=u.length;a<f;a++){e=u[a];if(o=this._events[e]){this._events[e]=i=[];if(t||r)for(l=0,h=o.length;l<h;l++)s=o[l],(t&&t!==s.callback&&t!==s.callback._callback||r&&r!==s.context)&&i.push(s);i.length||delete this._events[e]}}return this},trigger:function(e){if(!this._events)return this;var t=u.call(arguments,1);if(!c(this,"trigger",e,t))return this;var n=this._events[e],r=this._events.all;return n&&h(n,t),r&&h(r,arguments),this},stopListening:function(e,t,r){var i=this._listeningTo;if(!i)return this;var s=!t&&!r;!r&&typeof t=="object"&&(r=this),e&&((i={})[e._listenId]=e);for(var o in i)e=i[o],e.off(t,r,this),(s||n.isEmpty(e._events))&&delete this._listeningTo[o];return this}},l=/\s+/,c=function(e,t,n,r){if(!n)return!0;if(typeof n=="object"){for(var i in n)e[t].apply(e,[i,n[i]].concat(r));return!1}if(l.test(n)){var s=n.split(l);for(var o=0,u=s.length;o<u;o++)e[t].apply(e,[s[o]].concat(r));return!1}return!0},h=function(e,t){var n,r=-1,i=e.length,s=t[0],o=t[1],u=t[2];switch(t.length){case 0:while(++r<i)(n=e[r]).callback.call(n.ctx);return;case 1:while(++r<i)(n=e[r]).callback.call(n.ctx,s);return;case 2:while(++r<i)(n=e[r]).callback.call(n.ctx,s,o);return;case 3:while(++r<i)(n=e[r]).callback.call(n.ctx,s,o,u);return;default:while(++r<i)(n=e[r]).callback.apply(n.ctx,t);return}},p={listenTo:"on",listenToOnce:"once"};n.each(p,function(e,t){f[t]=function(t,r,i){var s=this._listeningTo||(this._listeningTo={}),o=t._listenId||(t._listenId=n.uniqueId("l"));return s[o]=t,!i&&typeof r=="object"&&(i=this),t[e](r,i,this),this}}),f.bind=f.on,f.unbind=f.off,n.extend(t,f);var d=t.Model=function(e,t){var r=e||{};t||(t={}),this.cid=n.uniqueId("c"),this.attributes={},t.collection&&(this.collection=t.collection),t.parse&&(r=this.parse(r,t)||{}),r=n.defaults({},r,n.result(this,"defaults")),this.set(r,t),this.changed={},this.initialize.apply(this,arguments)};n.extend(d.prototype,f,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(e){return n.clone(this.attributes)},sync:function(){return t.sync.apply(this,arguments)},get:function(e){return this.attributes[e]},escape:function(e){return n.escape(this.get(e))},has:function(e){return this.get(e)!=null},set:function(e,t,r){var i,s,o,u,a,f,l,c;if(e==null)return this;typeof e=="object"?(s=e,r=t):(s={})[e]=t,r||(r={});if(!this._validate(s,r))return!1;o=r.unset,a=r.silent,u=[],f=this._changing,this._changing=!0,f||(this._previousAttributes=n.clone(this.attributes),this.changed={}),c=this.attributes,l=this._previousAttributes,this.idAttribute in s&&(this.id=s[this.idAttribute]);for(i in s)t=s[i],n.isEqual(c[i],t)||u.push(i),n.isEqual(l[i],t)?delete this.changed[i]:this.changed[i]=t,o?delete c[i]:c[i]=t;if(!a){u.length&&(this._pending=r);for(var h=0,p=u.length;h<p;h++)this.trigger("change:"+u[h],this,c[u[h]],r)}if(f)return this;if(!a)while(this._pending)r=this._pending,this._pending=!1,this.trigger("change",this,r);return this._pending=!1,this._changing=!1,this},unset:function(e,t){return this.set(e,void 0,n.extend({},t,{unset:!0}))},clear:function(e){var t={};for(var r in this.attributes)t[r]=void 0;return this.set(t,n.extend({},e,{unset:!0}))},hasChanged:function(e){return e==null?!n.isEmpty(this.changed):n.has(this.changed,e)},changedAttributes:function(e){if(!e)return this.hasChanged()?n.clone(this.changed):!1;var t,r=!1,i=this._changing?this._previousAttributes:this.attributes;for(var s in e){if(n.isEqual(i[s],t=e[s]))continue;(r||(r={}))[s]=t}return r},previous:function(e){return e==null||!this._previousAttributes?null:this._previousAttributes[e]},previousAttributes:function(){return n.clone(this._previousAttributes)},fetch:function(e){e=e?n.clone(e):{},e.parse===void 0&&(e.parse=!0);var t=this,r=e.success;return e.success=function(n){if(!t.set(t.parse(n,e),e))return!1;r&&r(t,n,e),t.trigger("sync",t,n,e)},I(this,e),this.sync("read",this,e)},save:function(e,t,r){var i,s,o,u=this.attributes;e==null||typeof e=="object"?(i=e,r=t):(i={})[e]=t,r=n.extend({validate:!0},r);if(i&&!r.wait){if(!this.set(i,r))return!1}else if(!this._validate(i,r))return!1;i&&r.wait&&(this.attributes=n.extend({},u,i)),r.parse===void 0&&(r.parse=!0);var a=this,f=r.success;return r.success=function(e){a.attributes=u;var t=a.parse(e,r);r.wait&&(t=n.extend(i||{},t));if(n.isObject(t)&&!a.set(t,r))return!1;f&&f(a,e,r),a.trigger("sync",a,e,r)},I(this,r),s=this.isNew()?"create":r.patch?"patch":"update",s==="patch"&&(r.attrs=i),o=this.sync(s,this,r),i&&r.wait&&(this.attributes=u),o},destroy:function(e){e=e?n.clone(e):{};var t=this,r=e.success,i=function(){t.trigger("destroy",t,t.collection,e)};e.success=function(n){(e.wait||t.isNew())&&i(),r&&r(t,n,e),t.isNew()||t.trigger("sync",t,n,e)};if(this.isNew())return e.success(),!1;I(this,e);var s=this.sync("delete",this,e);return e.wait||i(),s},url:function(){var e=n.result(this,"urlRoot")||n.result(this.collection,"url")||F();return this.isNew()?e:e.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(e,t){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(e){return this._validate({},n.extend(e||{},{validate:!0}))},_validate:function(e,t){if(!t.validate||!this.validate)return!0;e=n.extend({},this.attributes,e);var r=this.validationError=this.validate(e,t)||null;return r?(this.trigger("invalid",this,r,n.extend(t,{validationError:r})),!1):!0}});var v=["keys","values","pairs","invert","pick","omit"];n.each(v,function(e){d.prototype[e]=function(){var t=u.call(arguments);return t.unshift(this.attributes),n[e].apply(n,t)}});var m=t.Collection=function(e,t){t||(t={}),t.model&&(this.model=t.model),t.comparator!==void 0&&(this.comparator=t.comparator),this._reset(),this.initialize.apply(this,arguments),e&&this.reset(e,n.extend({silent:!0},t))},g={add:!0,remove:!0,merge:!0},y={add:!0,remove:!1};n.extend(m.prototype,f,{model:d,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return t.sync.apply(this,arguments)},add:function(e,t){return this.set(e,n.extend({merge:!1},t,y))},remove:function(e,t){var r=!n.isArray(e);e=r?[e]:n.clone(e),t||(t={});var i,s,o,u;for(i=0,s=e.length;i<s;i++){u=e[i]=this.get(e[i]);if(!u)continue;delete this._byId[u.id],delete this._byId[u.cid],o=this.indexOf(u),this.models.splice(o,1),this.length--,t.silent||(t.index=o,u.trigger("remove",u,this,t)),this._removeReference(u,t)}return r?e[0]:e},set:function(e,t){t=n.defaults({},t,g),t.parse&&(e=this.parse(e,t));var r=!n.isArray(e);e=r?e?[e]:[]:n.clone(e);var i,s,o,u,a,f,l,c=t.at,h=this.model,p=this.comparator&&c==null&&t.sort!==!1,v=n.isString(this.comparator)?this.comparator:null,m=[],y=[],b={},w=t.add,E=t.merge,S=t.remove,x=!p&&w&&S?[]:!1;for(i=0,s=e.length;i<s;i++){a=e[i]||{},a instanceof d?o=u=a:o=a[h.prototype.idAttribute||"id"];if(f=this.get(o))S&&(b[f.cid]=!0),E&&(a=a===u?u.attributes:a,t.parse&&(a=f.parse(a,t)),f.set(a,t),p&&!l&&f.hasChanged(v)&&(l=!0)),e[i]=f;else if(w){u=e[i]=this._prepareModel(a,t);if(!u)continue;m.push(u),this._addReference(u,t)}u=f||u,x&&(u.isNew()||!b[u.id])&&x.push(u),b[u.id]=!0}if(S){for(i=0,s=this.length;i<s;++i)b[(u=this.models[i]).cid]||y.push(u);y.length&&this.remove(y,t)}if(m.length||x&&x.length){p&&(l=!0),this.length+=m.length;if(c!=null)for(i=0,s=m.length;i<s;i++)this.models.splice(c+i,0,m[i]);else{x&&(this.models.length=0);var T=x||m;for(i=0,s=T.length;i<s;i++)this.models.push(T[i])}}l&&this.sort({silent:!0});if(!t.silent){for(i=0,s=m.length;i<s;i++)(u=m[i]).trigger("add",u,this,t);(l||x&&x.length)&&this.trigger("sort",this,t)}return r?e[0]:e},reset:function(e,t){t||(t={});for(var r=0,i=this.models.length;r<i;r++)this._removeReference(this.models[r],t);return t.previousModels=this.models,this._reset(),e=this.add(e,n.extend({silent:!0},t)),t.silent||this.trigger("reset",this,t),e},push:function(e,t){return this.add(e,n.extend({at:this.length},t))},pop:function(e){var t=this.at(this.length-1);return this.remove(t,e),t},unshift:function(e,t){return this.add(e,n.extend({at:0},t))},shift:function(e){var t=this.at(0);return this.remove(t,e),t},slice:function(){return u.apply(this.models,arguments)},get:function(e){return e==null?void 0:this._byId[e]||this._byId[e.id]||this._byId[e.cid]},at:function(e){return this.models[e]},where:function(e,t){return n.isEmpty(e)?t?void 0:[]:this[t?"find":"filter"](function(t){for(var n in e)if(e[n]!==t.get(n))return!1;return!0})},findWhere:function(e){return this.where(e,!0)},sort:function(e){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return e||(e={}),n.isString(this.comparator)||this.comparator.length===1?this.models=this.sortBy(this.comparator,this):this.models.sort(n.bind(this.comparator,this)),e.silent||this.trigger("sort",this,e),this},pluck:function(e){return n.invoke(this.models,"get",e)},fetch:function(e){e=e?n.clone(e):{},e.parse===void 0&&(e.parse=!0);var t=e.success,r=this;return e.success=function(n){var i=e.reset?"reset":"set";r[i](n,e),t&&t(r,n,e),r.trigger("sync",r,n,e)},I(this,e),this.sync("read",this,e)},create:function(e,t){t=t?n.clone(t):{};if(!(e=this._prepareModel(e,t)))return!1;t.wait||this.add(e,t);var r=this,i=t.success;return t.success=function(e,n){t.wait&&r.add(e,t),i&&i(e,n,t)},e.save(null,t),e},parse:function(e,t){return e},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(e,t){if(e instanceof d)return e;t=t?n.clone(t):{},t.collection=this;var r=new this.model(e,t);return r.validationError?(this.trigger("invalid",this,r.validationError,t),!1):r},_addReference:function(e,t){this._byId[e.cid]=e,e.id!=null&&(this._byId[e.id]=e),e.collection||(e.collection=this),e.on("all",this._onModelEvent,this)},_removeReference:function(e,t){this===e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,n,r){if((e==="add"||e==="remove")&&n!==this)return;e==="destroy"&&this.remove(t,r),t&&e==="change:"+t.idAttribute&&(delete this._byId[t.previous(t.idAttribute)],t.id!=null&&(this._byId[t.id]=t)),this.trigger.apply(this,arguments)}});var b=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];n.each(b,function(e){m.prototype[e]=function(){var t=u.call(arguments);return t.unshift(this.models),n[e].apply(n,t)}});var w=["groupBy","countBy","sortBy","indexBy"];n.each(w,function(e){m.prototype[e]=function(t,r){var i=n.isFunction(t)?t:function(e){return e.get(t)};return n[e](this.models,i,r)}});var E=t.View=function(e){this.cid=n.uniqueId("view"),e||(e={}),n.extend(this,n.pick(e,x)),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},S=/^(\S+)\s*(.*)$/,x=["model","collection","el","id","attributes","className","tagName","events"];n.extend(E.prototype,f,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(e,n){return this.$el&&this.undelegateEvents(),this.$el=e instanceof t.$?e:t.$(e),this.el=this.$el[0],n!==!1&&this.delegateEvents(),this},delegateEvents:function(e){if(!e&&!(e=n.result(this,"events")))return this;this.undelegateEvents();for(var t in e){var r=e[t];n.isFunction(r)||(r=this[e[t]]);if(!r)continue;var i=t.match(S),s=i[1],o=i[2];r=n.bind(r,this),s+=".delegateEvents"+this.cid,o===""?this.$el.on(s,r):this.$el.on(s,o,r)}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_ensureElement:function(){if(!this.el){var e=n.extend({},n.result(this,"attributes"));this.id&&(e.id=n.result(this,"id")),this.className&&(e["class"]=n.result(this,"className"));var r=t.$("<"+n.result(this,"tagName")+">").attr(e);this.setElement(r,!1)}else this.setElement(n.result(this,"el"),!1)}}),t.sync=function(e,r,i){var s=N[e];n.defaults(i||(i={}),{emulateHTTP:t.emulateHTTP,emulateJSON:t.emulateJSON});var o={type:s,dataType:"json"};i.url||(o.url=n.result(r,"url")||F()),i.data==null&&r&&(e==="create"||e==="update"||e==="patch")&&(o.contentType="application/json",o.data=JSON.stringify(i.attrs||r.toJSON(i))),i.emulateJSON&&(o.contentType="application/x-www-form-urlencoded",o.data=o.data?{model:o.data}:{});if(i.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){o.type="POST",i.emulateJSON&&(o.data._method=s);var u=i.beforeSend;i.beforeSend=function(e){e.setRequestHeader("X-HTTP-Method-Override",s);if(u)return u.apply(this,arguments)}}o.type!=="GET"&&!i.emulateJSON&&(o.processData=!1),o.type==="PATCH"&&T&&(o.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var a=i.xhr=t.ajax(n.extend(o,i));return r.trigger("request",r,a,i),a};var T=typeof window!="undefined"&&!!window.ActiveXObject&&(!window.XMLHttpRequest||!(new XMLHttpRequest).dispatchEvent),N={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};t.ajax=function(){return t.$.ajax.apply(t.$,arguments)};var C=t.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},k=/\((.*?)\)/g,L=/(\(\?)?:\w+/g,A=/\*\w+/g,O=/[\-{}\[\]+?.,\\\^$|#\s]/g;n.extend(C.prototype,f,{initialize:function(){},route:function(e,r,i){n.isRegExp(e)||(e=this._routeToRegExp(e)),n.isFunction(r)&&(i=r,r=""),i||(i=this[r]);var s=this;return t.history.route(e,function(n){var o=s._extractParameters(e,n);s.execute(i,o),s.trigger.apply(s,["route:"+r].concat(o)),s.trigger("route",r,o),t.history.trigger("route",s,r,o)}),this},execute:function(e,t){e&&e.apply(this,t)},navigate:function(e,n){return t.history.navigate(e,n),this},_bindRoutes:function(){if(!this.routes)return;this.routes=n.result(this,"routes");var e,t=n.keys(this.routes);while((e=t.pop())!=null)this.route(e,this.routes[e])},_routeToRegExp:function(e){return e=e.replace(O,"\\$&").replace(k,"(?:$1)?").replace(L,function(e,t){return t?e:"([^/?]+)"}).replace(A,"([^?]*?)"),new RegExp("^"+e+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(e,t){var r=e.exec(t).slice(1);return n.map(r,function(e,t){return t===r.length-1?e||null:e?decodeURIComponent(e):null})}});var M=t.History=function(){this.handlers=[],n.bindAll(this,"checkUrl"),typeof window!="undefined"&&(this.location=window.location,this.history=window.history)},_=/^[#\/]|\s+$/g,D=/^\/+|\/+$/g,P=/msie [\w.]+/,H=/\/$/,B=/#.*$/;M.started=!1,n.extend(M.prototype,f,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(e){var t=(e||this).location.href.match(/#(.*)$/);return t?t[1]:""},getFragment:function(e,t){if(e==null)if(this._hasPushState||!this._wantsHashChange||t){e=decodeURI(this.location.pathname+this.location.search);var n=this.root.replace(H,"");e.indexOf(n)||(e=e.slice(n.length))}else e=this.getHash();return e.replace(_,"")},start:function(e){if(M.started)throw new Error("Backbone.history has already been started");M.started=!0,this.options=n.extend({root:"/"},this.options,e),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var r=this.getFragment(),i=document.documentMode,s=P.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(D,"/");if(s&&this._wantsHashChange){var o=t.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=o.hide().appendTo("body")[0].contentWindow,this.navigate(r)}this._hasPushState?t.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!s?t.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=r;var u=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot())return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+"#"+this.fragment),!0;this._hasPushState&&this.atRoot()&&u.hash&&(this.fragment=this.getHash().replace(_,""),this.history.replaceState({},document.title,this.root+this.fragment))}if(!this.options.silent)return this.loadUrl()},stop:function(){t.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),M.started=!1},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(e){var t=this.getFragment();t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe)));if(t===this.fragment)return!1;this.iframe&&this.navigate(t),this.loadUrl()},loadUrl:function(e){return e=this.fragment=this.getFragment(e),n.any(this.handlers,function(t){if(t.route.test(e))return t.callback(e),!0})},navigate:function(e,t){if(!M.started)return!1;if(!t||t===!0)t={trigger:!!t};var n=this.root+(e=this.getFragment(e||""));e=e.replace(B,"");if(this.fragment===e)return;this.fragment=e,e===""&&n!=="/"&&(n=n.slice(0,-1));if(this._hasPushState)this.history[t.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);this._updateHash(this.location,e,t.replace),this.iframe&&e!==this.getFragment(this.getHash(this.iframe))&&(t.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,e,t.replace))}if(t.trigger)return this.loadUrl(e)},_updateHash:function(e,t,n){if(n){var r=e.href.replace(/(javascript:|#).*$/,"");e.replace(r+"#"+t)}else e.hash="#"+t}}),t.history=new M;var j=function(e,t){var r=this,i;e&&n.has(e,"constructor")?i=e.constructor:i=function(){return r.apply(this,arguments)},n.extend(i,r,t);var s=function(){this.constructor=i};return s.prototype=r.prototype,i.prototype=new s,e&&n.extend(i.prototype,e),i.__super__=r.prototype,i};d.extend=m.extend=C.extend=E.extend=M.extend=j;var F=function(){throw new Error('A "url" property or function must be specified')},I=function(e,t){var n=t.error;t.error=function(r){n&&n(e,r,t),e.trigger("error",e,r,t)}};return t}),define("bower_components/block/block",["require","exports","module","bower_components/get/get","bower_components/set/set","bower_components/deepExtend/deepExtend","bower_components/makeClass/makeClass","bower_components/backbone/backbone","bower_components/lodash/lodash","jquery"],function(e,t,n){var r=e("bower_components/get/get"),i=e("bower_components/set/set"),s=e("bower_components/deepExtend/deepExtend"),o=e("bower_components/makeClass/makeClass"),u=e("bower_components/backbone/backbone"),a=e("bower_components/lodash/lodash"),f=e("jquery"),l=u.View;return o(l,{constructor:function(){var e=this,t=e.initialize,n=e.render;e.cid=a.uniqueId("block"),e.initialize=function(n){return e.stopListening(),s(e,e.defaults,n),e.initCollections(),e.initModels(),e._ensureElement(),e.trigger("initializing"),f.when(t.apply(e,arguments)).then(function(){return e.trigger("initialized"),e.render()})},e.render=function(t){return e.trigger("rendering"),s(e,t),f.when(n.apply(e,arguments),function(){e.trigger("rendered")})},e.initialize.apply(this,arguments),e.delegateGlobalEvents()},globalEvents:{},events:{},defaults:{},children:[],blocks:{},render:function(){var e=this,t=e.get("id"),n=a.clone(e.blocks);e.delegateEvents(),e.template&&e.setElement(f(e.template(e)).replaceAll(e.el)),t&&(e.el.id=t),e.removeBlocks(),e.initBlocks(),e.el.block=e,e.blocks=n},initCollections:function(){var e=this;e.collections=a.mapValues(e.collections,function(t,n){return e.get("collections."+n)}),e.collection=e.get("collection")},initModels:function(){var e=this;e.models=a.mapValues(e.models,function(t,n){return e.get("models."+n)}),e.model=e.get("model")},get:function(){var e=this,t=[e].concat([].slice.call(arguments));return r.apply(null,t)},set:function(){var e=this,t=[e].concat([].slice.call(arguments)),n=i.apply(null,t);return e.trigger("set",n),n},include:function(e,t){var n=this,r=a.uniqueId("tmp-"),i='<b block="'+r+'"></b>';return n.blocks[r]=function(r){return e.call(n,a.extend(r,t))},i},initBlocks:function(){var e=this,t=e.$("[block]");t.each(function(){var t=this,n=t.getAttribute("block"),r=e.blocks[n],i=a.transform(t.dataset,function(e,t,n){e[n]=t,t==="true"&&(e[n]=!0),t==="false"&&(e[n]=!1),a.isNaN(Number(t))||(e[n]=Number(t))});i.el=t,i.parentBlock=e,e.initBlock(r,i)})},initBlock:function(e,t){var n=this,r=e.call(n,a.extend({},t,{parentBlock:n}));return n.children.push(r),r&&r.el&&r.el.removeAttribute("block"),r},remove:function(){var e=this;e.stopListening(),e.undelegateEvents(),f(document).off("."+e.cid),e.removeBlocks(),e.innerTemplate||l.prototype.remove.apply(e,arguments)},removeBlocks:function(){var e=this;a.each(e.children,function(e){e&&typeof e.remove=="function"&&e.remove()}),e.children=[]},trigger:function(e,t){var n=this;return n.$el.trigger(e,t),l.prototype.trigger.apply(n,arguments)},delegateGlobalEvents:function(){var e=this;f(document).off("."+e.cid),a.each(e.globalEvents,function(t,n){var r=n.split(" "),i=r.shift();r.length?f(document).on(i+"."+e.cid,r.join(" "),t.bind(e)):f(document).on(i+"."+e.cid,t.bind(e))})}})}),define("kit/block/block",["require","bower_components/block/block"],function(e){var t=e("bower_components/block/block");return t.extend({})}),define("kit/page/page",["require","kit/block/block"],function(e){var t=e("kit/block/block");return t.extend({el:document.body})}),function(e,t,n){function Q(n,r,i){var o=t.createElement(n);return r&&(o.id=s+r),i&&(o.style.cssText=i),e(o)}function G(){return n.innerHeight?n.innerHeight:e(n).height()}function Y(t,n){n!==Object(n)&&(n={}),this.cache={},this.el=t,this.value=function(t){var i;return this.cache[t]===undefined&&(i=e(this.el).attr("data-cbox-"+t),i!==undefined?this.cache[t]=i:n[t]!==undefined?this.cache[t]=n[t]:r[t]!==undefined&&(this.cache[t]=r[t])),this.cache[t]},this.get=function(t){var n=this.value(t);return e.isFunction(n)?n.call(this.el,this):n}}function Z(e){var t=E.length,n=(I+e)%t;return n<0?t+n:n}function et(e,t){return Math.round((/%/.test(e)?(t==="x"?S.width():G())/100:1)*parseInt(e,10))}function tt(e,t){return e.get("photo")||e.get("photoRegex").test(t)}function nt(e,t){return e.get("retinaUrl")&&n.devicePixelRatio>1?t.replace(e.get("photoRegex"),e.get("retinaSuffix")):t}function rt(e){"contains"in d[0]&&!d[0].contains(e.target)&&e.target!==p[0]&&(e.stopPropagation(),d.focus())}function it(e){it.str!==e&&(d.add(p).removeClass(it.str).addClass(e),it.str=e)}function st(t){I=0,t&&t!==!1&&t!=="nofollow"?(E=e("."+o).filter(function(){var n=e.data(this,i),r=new Y(this,n);return r.get("rel")===t}),I=E.index(P.el),I===-1&&(E=E.add(P.el),I=E.length-1)):E=e(P.el)}function ot(n){e(t).trigger(n),D.triggerHandler(n)}function at(n){var r;if(!z){r=e(n).data(i),P=new Y(n,r),st(P.get("rel"));if(!R){R=U=!0,it(P.get("className")),d.css({visibility:"hidden",display:"block",opacity:""}),x=Q(V,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),m.css({width:"",height:""}).append(x),H=g.height()+w.height()+m.outerHeight(!0)-m.height(),B=y.width()+b.width()+m.outerWidth(!0)-m.width(),j=x.outerHeight(!0),F=x.outerWidth(!0);var s=et(P.get("initialWidth"),"x"),o=et(P.get("initialHeight"),"y"),a=P.get("maxWidth"),f=P.get("maxHeight");P.w=(a!==!1?Math.min(s,et(a,"x")):s)-F-B,P.h=(f!==!1?Math.min(o,et(f,"y")):o)-j-H,x.css({width:"",height:P.h}),X.position(),ot(u),P.get("onOpen"),_.add(C).hide(),d.focus(),P.get("trapFocus")&&t.addEventListener&&(t.addEventListener("focus",rt,!0),D.one(c,function(){t.removeEventListener("focus",rt,!0)})),P.get("returnFocus")&&D.one(c,function(){e(P.el).focus()})}var l=parseFloat(P.get("opacity"));p.css({opacity:l===l?l:"",cursor:P.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),P.get("closeButton")?M.html(P.get("close")).appendTo(m):M.appendTo("<div/>"),ct()}}function ft(){d||(K=!1,S=e(n),d=Q(V).attr({id:i,"class":e.support.opacity===!1?s+"IE":"",role:"dialog",tabindex:"-1"}).hide(),p=Q(V,"Overlay").hide(),N=e([Q(V,"LoadingOverlay")[0],Q(V,"LoadingGraphic")[0]]),v=Q(V,"Wrapper"),m=Q(V,"Content").append(C=Q(V,"Title"),k=Q(V,"Current"),O=e('<button type="button"/>').attr({id:s+"Previous"}),A=e('<button type="button"/>').attr({id:s+"Next"}),L=Q("button","Slideshow"),N),M=e('<button type="button"/>').attr({id:s+"Close"}),v.append(Q(V).append(Q(V,"TopLeft"),g=Q(V,"TopCenter"),Q(V,"TopRight")),Q(V,!1,"clear:left").append(y=Q(V,"MiddleLeft"),m,b=Q(V,"MiddleRight")),Q(V,!1,"clear:left").append(Q(V,"BottomLeft"),w=Q(V,"BottomCenter"),Q(V,"BottomRight"))).find("div div").css({"float":"left"}),T=Q(V,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),_=A.add(O).add(k).add(L)),t.body&&!d.parent().length&&e(t.body).append(p,d.append(v,T))}function lt(){function n(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey||(e.preventDefault(),at(this))}return d?(K||(K=!0,A.click(function(){X.next()}),O.click(function(){X.prev()}),M.click(function(){X.close()}),p.click(function(){P.get("overlayClose")&&X.close()}),e(t).bind("keydown."+s,function(e){var t=e.keyCode;R&&P.get("escKey")&&t===27&&(e.preventDefault(),X.close()),R&&P.get("arrowKey")&&E[1]&&!e.altKey&&(t===37?(e.preventDefault(),O.click()):t===39&&(e.preventDefault(),A.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+s,"."+o,n):e("."+o).live("click."+s,n)),!0):!1}function ct(){var t,r,i=X.prep,o,u=++$;U=!0,q=!1,ot(h),ot(a),P.get("onLoad"),P.h=P.get("height")?et(P.get("height"),"y")-j-H:P.get("innerHeight")&&et(P.get("innerHeight"),"y"),P.w=P.get("width")?et(P.get("width"),"x")-F-B:P.get("innerWidth")&&et(P.get("innerWidth"),"x"),P.mw=P.w,P.mh=P.h,P.get("maxWidth")&&(P.mw=et(P.get("maxWidth"),"x")-F-B,P.mw=P.w&&P.w<P.mw?P.w:P.mw),P.get("maxHeight")&&(P.mh=et(P.get("maxHeight"),"y")-j-H,P.mh=P.h&&P.h<P.mh?P.h:P.mh),t=P.get("href"),W=setTimeout(function(){N.show()},100);if(P.get("inline")){var f=e(t);o=e("<div>").hide().insertBefore(f),D.one(h,function(){o.replaceWith(f)}),i(f)}else P.get("iframe")?i(" "):P.get("html")?i(P.get("html")):tt(P,t)?(t=nt(P,t),q=P.get("createImg"),e(q).addClass(s+"Photo").bind("error",function(){i(Q(V,"Error").html(P.get("imgError")))}).one("load",function(){if(u!==$)return;setTimeout(function(){var e;P.get("retinaImage")&&n.devicePixelRatio>1&&(q.height=q.height/n.devicePixelRatio,q.width=q.width/n.devicePixelRatio),P.get("scalePhotos")&&(r=function(){q.height-=q.height*e,q.width-=q.width*e},P.mw&&q.width>P.mw&&(e=(q.width-P.mw)/q.width,r()),P.mh&&q.height>P.mh&&(e=(q.height-P.mh)/q.height,r())),P.h&&(q.style.marginTop=Math.max(P.mh-q.height,0)/2+"px"),E[1]&&(P.get("loop")||E[I+1])&&(q.style.cursor="pointer",q.onclick=function(){X.next()}),q.style.width=q.width+"px",q.style.height=q.height+"px",i(q)},1)}),q.src=t):t&&T.load(t,P.get("data"),function(t,n){u===$&&i(n==="error"?Q(V,"Error").html(P.get("xhrError")):e(this).contents())})}var r={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:undefined,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return e(this).attr("href")},title:function(){return this.title},createImg:function(){var t=new Image,n=e(this).data("cbox-img-attrs");return typeof n=="object"&&e.each(n,function(e,n){t[e]=n}),t},createIframe:function(){var n=t.createElement("iframe"),r=e(this).data("cbox-iframe-attrs");return typeof r=="object"&&e.each(r,function(e,t){n[e]=t}),"frameBorder"in n&&(n.frameBorder=0),"allowTransparency"in n&&(n.allowTransparency="true"),n.name=(new Date).getTime(),n.allowFullScreen=!0,n}},i="colorbox",s="cbox",o=s+"Element",u=s+"_open",a=s+"_load",f=s+"_complete",l=s+"_cleanup",c=s+"_closed",h=s+"_purge",p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D=e("<a/>"),P,H,B,j,F,I,q,R,U,z,W,X,V="div",$=0,J={},K,ut=function(){function i(){clearTimeout(r)}function o(){if(P.get("loop")||E[I+1])i(),r=setTimeout(X.next,P.get("slideshowSpeed"))}function u(){L.html(P.get("slideshowStop")).unbind(n).one(n,c),D.bind(f,o).bind(a,i),d.removeClass(t+"off").addClass(t+"on")}function c(){i(),D.unbind(f,o).unbind(a,i),L.html(P.get("slideshowStart")).unbind(n).one(n,function(){X.next(),u()}),d.removeClass(t+"on").addClass(t+"off")}function h(){e=!1,L.hide(),i(),D.unbind(f,o).unbind(a,i),d.removeClass(t+"off "+t+"on")}var e,t=s+"Slideshow_",n="click."+s,r;return function(){e?P.get("slideshow")||(D.unbind(l,h),h()):P.get("slideshow")&&E[1]&&(e=!0,D.one(l,h),P.get("slideshowAuto")?u():c(),L.show())}}();if(e[i])return;e(ft),X=e.fn[i]=e[i]=function(t,n){var r,s=this;return t=t||{},e.isFunction(s)&&(s=e("<a/>"),t.open=!0),s[0]?(ft(),lt()&&(n&&(t.onComplete=n),s.each(function(){var n=e.data(this,i)||{};e.data(this,i,e.extend(n,t))}).addClass(o),r=new Y(s[0],t),r.get("open")&&at(s[0])),s):s},X.position=function(t,n){function l(){g[0].style.width=w[0].style.width=m[0].style.width=parseInt(d[0].style.width,10)-B+"px",m[0].style.height=y[0].style.height=b[0].style.height=parseInt(d[0].style.height,10)-H+"px"}var r,i=0,o=0,u=d.offset(),a,f;S.unbind("resize."+s),d.css({top:-9e4,left:-9e4}),a=S.scrollTop(),f=S.scrollLeft(),P.get("fixed")?(u.top-=a,u.left-=f,d.css({position:"fixed"})):(i=a,o=f,d.css({position:"absolute"})),P.get("right")!==!1?o+=Math.max(S.width()-P.w-F-B-et(P.get("right"),"x"),0):P.get("left")!==!1?o+=et(P.get("left"),"x"):o+=Math.round(Math.max(S.width()-P.w-F-B,0)/2),P.get("bottom")!==!1?i+=Math.max(G()-P.h-j-H-et(P.get("bottom"),"y"),0):P.get("top")!==!1?i+=et(P.get("top"),"y"):i+=Math.round(Math.max(G()-P.h-j-H,0)/2),d.css({top:u.top,left:u.left,visibility:"visible"}),v[0].style.width=v[0].style.height="9999px",r={width:P.w+F+B,height:P.h+j+H,top:i,left:o};if(t){var c=0;e.each(r,function(e){if(r[e]!==J[e]){c=t;return}}),t=c}J=r,t||d.css(r),d.dequeue().animate(r,{duration:t||0,complete:function(){l(),U=!1,v[0].style.width=P.w+F+B+"px",v[0].style.height=P.h+j+H+"px",P.get("reposition")&&setTimeout(function(){S.bind("resize."+s,X.position)},1),e.isFunction(n)&&n()},step:l})},X.resize=function(e){var t;R&&(e=e||{},e.width&&(P.w=et(e.width,"x")-F-B),e.innerWidth&&(P.w=et(e.innerWidth,"x")),x.css({width:P.w}),e.height&&(P.h=et(e.height,"y")-j-H),e.innerHeight&&(P.h=et(e.innerHeight,"y")),!e.innerHeight&&!e.height&&(t=x.scrollTop(),x.css({height:"auto"}),P.h=x.height()),x.css({height:P.h}),t&&x.scrollTop(t),X.position(P.get("transition")==="none"?0:P.get("speed")))},X.prep=function(n){function u(){return P.w=P.w||x.width(),P.w=P.mw&&P.mw<P.w?P.mw:P.w,P.w}function a(){return P.h=P.h||x.height(),P.h=P.mh&&P.mh<P.h?P.mh:P.h,P.h}if(!R)return;var r,o=P.get("transition")==="none"?0:P.get("speed");x.remove(),x=Q(V,"LoadedContent").append(n),x.hide().appendTo(T.show()).css({width:u(),overflow:P.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(m),T.hide(),e(q).css({"float":"none"}),it(P.get("className")),r=function(){function a(){e.support.opacity===!1&&d[0].style.removeAttribute("filter")}var n=E.length,r,u;if(!R)return;u=function(){clearTimeout(W),N.hide(),ot(f),P.get("onComplete")},C.html(P.get("title")).show(),x.show(),n>1?(typeof P.get("current")=="string"&&k.html(P.get("current").replace("{current}",I+1).replace("{total}",n)).show(),A[P.get("loop")||I<n-1?"show":"hide"]().html(P.get("next")),O[P.get("loop")||I?"show":"hide"]().html(P.get("previous")),ut(),P.get("preloading")&&e.each([Z(-1),Z(1)],function(){var n,r=E[this],s=new Y(r,e.data(r,i)),o=s.get("href");o&&tt(s,o)&&(o=nt(s,o),n=t.createElement("img"),n.src=o)})):_.hide(),P.get("iframe")?(r=P.get("createIframe"),P.get("scrolling")||(r.scrolling="no"),e(r).attr({src:P.get("href"),"class":s+"Iframe"}).one("load",u).appendTo(x),D.one(h,function(){r.src="//about:blank"}),P.get("fastIframe")&&e(r).trigger("load")):u(),P.get("transition")==="fade"?d.fadeTo(o,1,a):a()},P.get("transition")==="fade"?d.fadeTo(o,0,function(){X.position(0,r)}):X.position(o,r)},X.next=function(){!U&&E[1]&&(P.get("loop")||E[I+1])&&(I=Z(1),at(E[I]))},X.prev=function(){!U&&E[1]&&(P.get("loop")||I)&&(I=Z(-1),at(E[I]))},X.close=function(){R&&!z&&(z=!0,R=!1,ot(l),P.get("onCleanup"),S.unbind("."+s),p.fadeTo(P.get("fadeOut")||0,0),d.stop().fadeTo(P.get("fadeOut")||0,0,function(){d.hide(),p.hide(),ot(h),x.remove(),setTimeout(function(){z=!1,ot(c),P.get("onClosed")},1)}))},X.remove=function(){if(!d)return;d.stop(),e[i].close(),d.stop(!1,!0).remove(),p.remove(),z=!1,d=null,e("."+o).removeData(i).removeClass(o),e(t).unbind("click."+s).unbind("keydown."+s)},X.element=function(){return e(P.el)},X.settings=r}(jQuery,document,window),define("bower_components/colorbox/jquery.colorbox",function(){}),define("blocks/productGallery/productGallery",["require","exports","module","kit/block/block","bower_components/colorbox/jquery.colorbox"],function(e,t,n){var r=e("kit/block/block");return e("bower_components/colorbox/jquery.colorbox"),r.extend({render:function(){var e=this,t=r.prototype.render.apply(e,arguments);return e.$(".productGallery__largePreview, .productGallery__thumbLink").colorbox(),t}})}),define("pages/details",["require","kit/page/page","blocks/productGallery/productGallery"],function(e){var t=e("kit/page/page");return t.extend({blocks:{productGallery:e("blocks/productGallery/productGallery")}})});