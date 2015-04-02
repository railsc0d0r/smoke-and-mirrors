define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,r){"use strict";t["default"].MODEL_FACTORY_INJECTIONS=!0;var d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]});n["default"](d,r["default"].modulePrefix),e["default"]=d}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e,d){if(!r){var o=n(d.toString());a["default"].libraries.register(o,t["default"].APP.version),r=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";function n(e,n){var r=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[r]&&(window[r]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/lib/get-data",["exports"],function(e){"use strict";function t(e){e=e||a;for(var t={start_at:(new Date).getTime()/1e3,databases:[]},n=1;e>=n;n++)t.databases.push({id:"cluster"+n,queries:[]}),t.databases.push({id:"cluster"+n+"slave",queries:[]});return t.databases.forEach(function(e){for(var t=Math.floor(10*Math.random()+1),a=0;t>a;a++){var n={canvas_action:null,canvas_context_id:null,canvas_controller:null,canvas_hostname:null,canvas_job_tag:null,canvas_pid:null,elapsed:15*Math.random(),query:"SELECT blah FROM something",waiting:Math.random()<.5};Math.random()<.2&&(n.query="<IDLE> in transaction"),Math.random()<.1&&(n.query="vacuum"),e.queries.push(n)}e.queries=e.queries.sort(function(e,t){return t.elapsed-e.elapsed})}),t}e["default"]=t;var a=20}),define("dummy/resources/application/controller",["exports","ember"],function(e){"use strict";e["default"]=Ember.Controller.extend({})}),define("dummy/resources/application/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("dummy/resources/application/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("DBMon Occlusion Collection");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("DBMon Proxied Each");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}(),a=function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("Infinite Scroll");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}();return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("header"),n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("h1"),r=e.createTextNode("Smoke And Mirrors");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("nav"),r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(n,r,d){var o=r.dom,i=r.hooks,c=i.block,l=i.content;o.detectNamespace(d);var s;r.useFragmentCache&&o.canClone?(null===this.cachedFragment&&(s=this.build(o),this.hasRendered?this.cachedFragment=s:this.hasRendered=!0),this.cachedFragment&&(s=o.cloneNode(this.cachedFragment,!0))):s=this.build(o);var u=o.childAt(s,[0,3]),m=o.createMorphAt(u,1,1),h=o.createMorphAt(u,3,3),p=o.createMorphAt(u,5,5),f=o.createMorphAt(s,2,2,d);return c(r,m,n,"link-to",["dbmon-occlusion-collection"],{},e,null),c(r,h,n,"link-to",["dbmon-proxied-each"],{},t,null),c(r,p,n,"link-to",["infinite-scroll"],{},a,null),l(r,f,n,"outlet"),s}}}())}),define("dummy/resources/components/occlusion-collection/component",["exports","smoke-and-mirrors/occlusion-collection"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/resources/components/proxied-each/component",["exports","smoke-and-mirrors/proxied-each"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/resources/dbmon-occlusion-collection/controller",["exports","ember"],function(e){"use strict";e["default"]=Ember.Controller.extend({queryParams:["numRows"],numRows:100,actions:{addRow:function(){this.incrementProperty("numRows")},removeRow:function(){this.decrementProperty("numRows")}}})}),define("dummy/resources/dbmon-occlusion-collection/route",["exports","ember","dummy/lib/get-data"],function(e,t,a){"use strict";var n=0;e["default"]=t["default"].Route.extend({model:function(){var e=this.controllerFor("dbmon-occlusion-collection");return a["default"](e.get("numRows"))},afterModel:function(){t["default"].run.later(this.loadSamples.bind(this),n)},loadSamples:function(){t["default"].run.schedule("afterRender",this,function(){var e=this.controllerFor("dbmon-occlusion-collection");e.set("model",a["default"](e.get("numRows")))}),t["default"].run.later(this.loadSamples.bind(this),n)}})}),define("dummy/resources/dbmon-occlusion-collection/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("h3"),n=e.createTextNode("DBMon | Occlusion Collection");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","table-wrapper");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("table");e.setAttribute(n,"class","table table-striped latest-data");var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.get,o=r.inline;n.detectNamespace(a);var i;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(i=this.build(n),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=n.cloneNode(this.cachedFragment,!0))):i=this.build(n);var c=n.createMorphAt(n.childAt(i,[2,1]),1,1);return o(t,c,e,"occlusion-collection",[],{tagName:"tbody",itemViewClass:"dbmon-database-tagless",defaultHeight:25,wrapperSelector:".table-wrapper",scrollSelector:".table-wrapper",keyForId:"id",proxied:d(t,e,"model.databases")}),i}}}())}),define("dummy/resources/dbmon-proxied-each/controller",["exports","ember"],function(e){"use strict";e["default"]=Ember.Controller.extend({queryParams:["numRows"],numRows:100,actions:{addRow:function(){this.incrementProperty("numRows")},removeRow:function(){this.decrementProperty("numRows")}}})}),define("dummy/resources/dbmon-proxied-each/route",["exports","ember","dummy/lib/get-data"],function(e,t,a){"use strict";var n=0;e["default"]=t["default"].Route.extend({model:function(){var e=this.controllerFor("dbmon-proxied-each");return a["default"](e.get("numRows"))},afterModel:function(){t["default"].run.later(this.loadSamples.bind(this),n)},loadSamples:function(){t["default"].run.schedule("afterRender",this,function(){var e=this.controllerFor("dbmon-proxied-each");e.set("model",a["default"](e.get("numRows")))}),t["default"].run.later(this.loadSamples.bind(this),n)}})}),define("dummy/resources/dbmon-proxied-each/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("h3"),n=e.createTextNode("DBMon | Proxied Each");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("button"),n=e.createTextNode("Add Row");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("button"),n=e.createTextNode("Remove Row");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("table");e.setAttribute(a,"class","table table-striped latest-data");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.element,o=r.get,i=r.inline;n.detectNamespace(a);var c;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(c=this.build(n),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=n.cloneNode(this.cachedFragment,!0))):c=this.build(n);var l=n.childAt(c,[2]),s=n.childAt(c,[4]),u=n.createMorphAt(n.childAt(c,[6]),1,1);return d(t,l,e,"action",["addRow"],{}),d(t,s,e,"action",["removeRow"],{}),i(t,u,e,"proxied-each",[],{tagName:"tbody",itemViewClass:"dbmon-database",keyForId:"id",proxied:o(t,e,"model.databases")}),c}}}())}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});e["default"]=n.map(function(){this.route("dbmon-proxied-each"),this.route("dbmon-occlusion-collection"),this.route("infinite-scroll"),this.route("cacheing-view")})}),define("dummy/templates/dbmon-database",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("td");e.setAttribute(a,"class","dbname");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("td");e.setAttribute(a,"class","query-count");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("span"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.content,o=r.get,i=r.concat,c=r.attribute,l=r.inline;n.detectNamespace(a);var s;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(s=this.build(n),this.hasRendered?this.cachedFragment=s:this.hasRendered=!0),this.cachedFragment&&(s=n.cloneNode(this.cachedFragment,!0))):s=this.build(n);var u=n.childAt(s,[3,1]),m=n.createMorphAt(n.childAt(s,[1]),1,1),h=n.createMorphAt(u,1,1),p=n.createAttrMorph(u,"class"),f=n.createMorphAt(s,5,5,a);return d(t,m,e,"view.content.id"),c(t,p,u,"class",i(t,[o(t,e,"view.countClassName")])),d(t,h,e,"view.content.queries.length"),l(t,f,e,"proxied-each",[],{proxied:o(t,e,"view.topFiveQueries"),itemViewClass:"dbmon-row-cells"}),s}}}())}),define("dummy/templates/dbmon-row-cells",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","popover bottom");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","popover-content");var r=e.createComment("");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","arrow"),e.appendChild(a,n);var n=e.createTextNode("\n");return e.appendChild(a,n),e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.content;n.detectNamespace(a);var o;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(o=this.build(n),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=n.cloneNode(this.cachedFragment,!0))):o=this.build(n);var i=n.createMorphAt(o,0,0,a),c=n.createMorphAt(n.childAt(o,[2,1]),0,0);return n.insertBoundary(o,0),d(t,i,e,"view.elapsed"),d(t,c,e,"view.content.query"),o}}}())}),define("dummy/views/dbmon-database-tagless",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({tagName:"",templateName:"dbmon-database",topFiveQueries:function(){for(var e=this.get("content.queries"),t=e.slice(0,5);t.length<5;)t.push({query:""});return t}.property("content.queries"),countClassName:function(){var e=this.get("content.queries"),t="label";return t+=e.length>=20?" label-important":e.length>=10?" label-warning":" label-success"}.property("content.queries")})}),define("dummy/views/dbmon-database",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({tagName:"tr",templateName:"dbmon-database",topFiveQueries:function(){for(var e=this.get("content.queries"),t=e.slice(0,5);t.length<5;)t.push({query:""});return t}.property("content.queries"),countClassName:function(){var e=this.get("content.queries"),t="label";return t+=e.length>=20?" label-important":e.length>=10?" label-warning":" label-success"}.property("content.queries")})}),define("dummy/views/dbmon-row-cells",["exports","ember"],function(e,t){"use strict";function a(e){return e>=10?"elapsed warn_long":e>=1?"elapsed warn":"elapsed short"}function n(e){var t=parseFloat(e).toFixed(2);if(e>60){var a=Math.floor(e/60),n=(e%60).toFixed(2).split("."),r=n[0].lpad("0",2),d=n[1];t=a+":"+r+"."+d}return t}e["default"]=t["default"].View.extend({templateName:"dbmon-row-cells",classNames:["Query"],classNameBindings:["elapsedClassName"],tagName:"td",elapsed:t["default"].computed("content.elapsed",function(){var e=this.get("content.elapsed");return e?n(e):""}).readOnly(),elapsedClassName:t["default"].computed("content.elapsed",function(){var e=this.get("content.elapsed");return a(e)}).readOnly()})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"smoke-and-mirrors",version:"0.0.0.80068fae"});