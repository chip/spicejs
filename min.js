riot.observable=function(e){var t={},n=[].slice;e.on=function(n,r){if(typeof r==="function"){n.replace(/[^\s]+/g,function(e,n){(t[e]=t[e]||[]).push(r);r.typed=n>0})}return e};e.off=function(n,r){if(n==="*")t={};else if(r){var o=t[n];for(var i=0,a;a=o&&o[i];++i){if(a===r)o.splice(i,1)}}else{n.replace(/[^\s]+/g,function(e){t[e]=[]})}return e};e.one=function(t,n){if(n)n.one=true;return e.on(t,n)};e.trigger=function(r){var o=n.call(arguments,1),i=t[r]||[];for(var a=0,u;u=i[a];++a){if(!u.busy){u.busy=true;u.apply(e,u.typed?[r].concat(o):o);if(u.one){i.splice(a,1);a--}u.busy=false}}return e};return e};var FN={},template_escape={"\\":"\\\\","\n":"\\n","\r":"\\r","'":"\\'"},render_escape={"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"};function default_escape_fn(e,t){return e==null?"":(e+"").replace(/[&\"<>]/g,function(e){return render_escape[e]})}riot.render=function(e,t,n){if(n===true)n=default_escape_fn;e=e||"";return(FN[e]=FN[e]||new Function("_","e","return '"+e.replace(/[\\\n\r']/g,function(e){return template_escape[e]}).replace(/{\s*([\w\.]+)\s*}/g,"' + (e?e(_.$1,'$1'):_.$1||(_.$1==null?'':_.$1)) + '")+"'"))(t,n)};riot.route=function(){var e={},t=[],n=/\{\w+\}/g,r="(\\w+)",o=/[\/\=\?\$\^]/g,i="\\$&";function a(e,n){if(typeof e==="function"){t.push(e)}else if(n||typeof e==="object"){u(e,n)}else c(e);return e}function u(t,n){var r;if(!n){for(r in t)t.hasOwnProperty(r)&&u(r,t[r]);return}e[t]=n}function c(t){e[t]?e[t]({path:t}):f(t)||l(t);a.trigger("execute",t)}function f(t){var a,u,c,f;for(a in e){if(!e.hasOwnProperty(a))continue;c=a.match(n);f=a.replace(o,i).replace(n,r);u=t.match(new RegExp("^#?!?"+f+"$"));if(u)return e[a](p(t,c,u))}}function l(e){var t=riot.route.fnMap,n;for(n=0;n<t.length;n++)t[n](e)}function p(e,t,n){var r={path:e},o;for(o=1;o<n.length;o++){r[t[o-1].slice(1,-1).trim()]=n[o]}return r}a.map=e;a.fnMap=t;return riot.observable(a)}();if(typeof window!=="undefined"){riot.route.on("execute",function(e){try{history.pushState(null,null,e)}catch(t){window.location=e[0]==="#"?e:"#"+e}}).on("load",function(){this(location.pathname+location.search+location.hash)});if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){riot.route.trigger("load")},false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete")riot.route.trigger("load")})}}riot.observable=function(e){var t={},n=[].slice;e.on=function(n,r){if(typeof r==="function"){n.replace(/[^\s]+/g,function(e,n){(t[e]=t[e]||[]).push(r);r.typed=n>0})}return e};e.off=function(n,r){if(n==="*")t={};else if(r){var o=t[n];for(var i=0,a;a=o&&o[i];++i){if(a===r)o.splice(i,1)}}else{n.replace(/[^\s]+/g,function(e){t[e]=[]})}return e};e.one=function(t,n){if(n)n.one=true;return e.on(t,n)};e.trigger=function(r){var o=n.call(arguments,1),i=t[r]||[];for(var a=0,u;u=i[a];++a){if(!u.busy){u.busy=true;u.apply(e,u.typed?[r].concat(o):o);if(u.one){i.splice(a,1);a--}u.busy=false}}return e};return e};var FN={},template_escape={"\\":"\\\\","\n":"\\n","\r":"\\r","'":"\\'"},render_escape={"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"};function default_escape_fn(e,t){return e==null?"":(e+"").replace(/[&\"<>]/g,function(e){return render_escape[e]})}riot.render=function(e,t,n){if(n===true)n=default_escape_fn;e=e||"";return(FN[e]=FN[e]||new Function("_","e","return '"+e.replace(/[\\\n\r']/g,function(e){return template_escape[e]}).replace(/{\s*([\w\.]+)\s*}/g,"' + (e?e(_.$1,'$1'):_.$1||(_.$1==null?'':_.$1)) + '")+"'"))(t,n)};riot.route=function(){var e={},t=[],n=/\{\w+\}/g,r="(\\w+)",o=/[\/\=\?\$\^]/g,i="\\$&";function a(e,n){if(typeof e==="function"){t.push(e)}else if(n||typeof e==="object"){u(e,n)}else c(e);return e}function u(t,n){var r;if(!n){for(r in t)t.hasOwnProperty(r)&&u(r,t[r]);return}e[t]=n}function c(t){e[t]?e[t]({path:t}):f(t)||l(t);a.trigger("execute",t)}function f(t){var a,u,c,f;for(a in e){if(!e.hasOwnProperty(a))continue;c=a.match(n);f=a.replace(o,i).replace(n,r);u=t.match(new RegExp("^#?!?"+f+"$"));if(u)return e[a](p(t,c,u))}}function l(e){var t=riot.route.fnMap,n;for(n=0;n<t.length;n++)t[n](e)}function p(e,t,n){var r={path:e},o;for(o=1;o<n.length;o++){r[t[o-1].slice(1,-1).trim()]=n[o]}return r}a.map=e;a.fnMap=t;return riot.observable(a)}();if(typeof window!=="undefined"){riot.route.on("execute",function(e){try{history.pushState(null,null,e)}catch(t){window.location=e[0]==="#"?e:"#"+e}}).on("load",function(){this(location.pathname+location.search+location.hash)});if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){riot.route.trigger("load")},false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete")riot.route.trigger("load")})}}riot.observable=function(e){var t={},n=[].slice;e.on=function(n,r){if(typeof r==="function"){n.replace(/[^\s]+/g,function(e,n){(t[e]=t[e]||[]).push(r);r.typed=n>0})}return e};e.off=function(n,r){if(n==="*")t={};else if(r){var o=t[n];for(var i=0,a;a=o&&o[i];++i){if(a===r)o.splice(i,1)}}else{n.replace(/[^\s]+/g,function(e){t[e]=[]})}return e};e.one=function(t,n){if(n)n.one=true;return e.on(t,n)};e.trigger=function(r){var o=n.call(arguments,1),i=t[r]||[];for(var a=0,u;u=i[a];++a){if(!u.busy){u.busy=true;u.apply(e,u.typed?[r].concat(o):o);if(u.one){i.splice(a,1);a--}u.busy=false}}return e};return e};var FN={},template_escape={"\\":"\\\\","\n":"\\n","\r":"\\r","'":"\\'"},render_escape={"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"};function default_escape_fn(e,t){return e==null?"":(e+"").replace(/[&\"<>]/g,function(e){return render_escape[e]})}riot.render=function(e,t,n){if(n===true)n=default_escape_fn;e=e||"";return(FN[e]=FN[e]||new Function("_","e","return '"+e.replace(/[\\\n\r']/g,function(e){return template_escape[e]}).replace(/{\s*([\w\.]+)\s*}/g,"' + (e?e(_.$1,'$1'):_.$1||(_.$1==null?'':_.$1)) + '")+"'"))(t,n)};riot.route=function(){var e={},t=[],n=/\{\w+\}/g,r="(\\w+)",o=/[\/\=\?\$\^]/g,i="\\$&";function a(e,n){if(typeof e==="function"){t.push(e)}else if(n||typeof e==="object"){u(e,n)}else c(e);return e}function u(t,n){var r;if(!n){for(r in t)t.hasOwnProperty(r)&&u(r,t[r]);return}e[t]=n}function c(t){e[t]?e[t]({path:t}):f(t)||l(t);a.trigger("execute",t)}function f(t){var a,u,c,f;for(a in e){if(!e.hasOwnProperty(a))continue;c=a.match(n);f=a.replace(o,i).replace(n,r);u=t.match(new RegExp("^#?!?"+f+"$"));if(u)return e[a](p(t,c,u))}}function l(e){var t=riot.route.fnMap,n;for(n=0;n<t.length;n++)t[n](e)}function p(e,t,n){var r={path:e},o;for(o=1;o<n.length;o++){r[t[o-1].slice(1,-1).trim()]=n[o]}return r}a.map=e;a.fnMap=t;return riot.observable(a)}();if(typeof window!=="undefined"){riot.route.on("execute",function(e){try{history.pushState(null,null,e)}catch(t){window.location=e[0]==="#"?e:"#"+e}}).on("load",function(){this(location.pathname+location.search+location.hash)});if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){riot.route.trigger("load")},false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete")riot.route.trigger("load")})}}