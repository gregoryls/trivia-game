/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/papaparse/papaparse.min.js":
/*!*************************************************!*\
  !*** ./node_modules/papaparse/papaparse.min.js ***!
  \*************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(this,function s(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=f.IS_PAPA_WORKER||!1,a={},u=0,b={parse:function(e,t){var r=(t=t||{}).dynamicTyping||!1;J(r)&&(t.dynamicTypingFunction=r,r={});if(t.dynamicTyping=r,t.transform=!!J(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var i=function(){if(!b.WORKERS_SUPPORTED)return!1;var e=(r=f.URL||f.webkitURL||null,i=s.toString(),b.BLOB_URL||(b.BLOB_URL=r.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",i,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var r,i;return t.onmessage=_,t.id=u++,a[t.id]=t}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=J(t.step),t.chunk=J(t.chunk),t.complete=J(t.complete),t.error=J(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var n=null;b.NODE_STREAM_INPUT,"string"==typeof e?(e=function(e){if(65279===e.charCodeAt(0))return e.slice(1);return e}(e),n=t.download?new l(t):new p(t)):!0===e.readable&&J(e.read)&&J(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var n=!1,_=!0,m=",",y="\r\n",s='"',a=s+s,r=!1,i=null,o=!1;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(m=t.delimiter);("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(r=t.skipEmptyLines);"string"==typeof t.newline&&(y=t.newline);"string"==typeof t.quoteChar&&(s=t.quoteChar);"boolean"==typeof t.header&&(_=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");i=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s);("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(o=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}();var u=new RegExp(Q(s),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return h(null,e,r);if("object"==typeof e[0])return h(i||Object.keys(e[0]),e,r)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||i),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),h(e.fields||[],e.data||[],r);throw new Error("Unable to serialize unrecognized input");function h(e,t,r){var i="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&_){for(var a=0;a<e.length;a++)0<a&&(i+=m),i+=v(e[a],a);0<t.length&&(i+=y)}for(var o=0;o<t.length;o++){var u=n?e.length:t[o].length,h=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(r&&!n&&(h="greedy"===r?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===r&&n){for(var d=[],l=0;l<u;l++){var c=s?e[l]:l;d.push(t[o][c])}h=""===d.join("").trim()}if(!h){for(var p=0;p<u;p++){0<p&&!f&&(i+=m);var g=n&&s?e[p]:p;i+=v(t[o][g],p)}o<t.length-1&&(!r||0<u&&!f)&&(i+=y)}}return i}function v(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var r=!1;o&&"string"==typeof e&&o.test(e)&&(e="'"+e,r=!0);var i=e.toString().replace(u,a);return(r=r||!0===n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(i,b.BAD_DELIMITERS)||-1<i.indexOf(m)||" "===i.charAt(0)||" "===i.charAt(i.length-1))?s+i+s:i}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=E,b.ParserHandle=r,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var r=o.config||{},u=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)u.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},r)})}),e(),this;function e(){if(0!==u.length){var e,t,r,i,n=u[0];if(J(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,r=n.inputElem,i=s.reason,void(J(o.error)&&o.error({name:e},t,r,i));if("skip"===s.action)return void h();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void h()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){J(a)&&a(e,n.file,n.inputElem),h()},b.parse(n.file,n.instanceConfig)}else J(o.complete)&&o.complete()}function h(){u.splice(0,1),e()}}}function h(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=w(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new r(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&J(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r)}this.isFirstChunk=!1,this._halted=!1;var i=this._partialLine+e;this._partialLine="";var n=this._handle.parse(i,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=i.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(J(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!J(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){J(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1})}}function l(e){var i;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),h.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),n||(i.onload=v(this._chunkLoaded,this),i.onerror=v(this._chunkError,this)),i.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)i.setRequestHeader(t,e[t])}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;i.setRequestHeader("Range","bytes="+this._start+"-"+r)}try{i.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===i.status&&this._chunkError()}},this._chunkLoaded=function(){4===i.readyState&&(i.status<200||400<=i.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:i.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substring(t.lastIndexOf("/")+1))}(i),this.parseChunk(i.responseText)))},this._chunkError=function(e){var t=i.statusText||e;this._sendError(new Error(t))}}function c(e){var i,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),h.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((i=new FileReader).onload=v(this._chunkLoaded,this),i.onerror=v(this._chunkError,this)):i=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var r=i.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:r}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(i.error)}}function p(e){var r;h.call(this,e=e||{}),this.stream=function(e){return r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,t=this._config.chunkSize;return t?(e=r.substring(0,t),r=r.substring(t)):(e=r,r=""),this._finished=!r,this.parseChunk(e)}}}function g(e){h.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=v(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=v(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=v(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=v(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function r(m){var a,o,u,i=Math.pow(2,53),n=-i,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,h=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,t=this,r=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(J(m.step)){var p=m.step;m.step=function(e){if(c=e,_())g();else{if(g(),0===c.data.length)return;r+=e.data.length,m.preview&&r>m.preview?o.abort():(c.data=c.data[0],p(c,t))}}}function y(e){return"greedy"===m.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function g(){return c&&u&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),u=!1),m.skipEmptyLines&&(c.data=c.data.filter(function(e){return!y(e)})),_()&&function(){if(!c)return;function e(e,t){J(m.transformHeader)&&(e=m.transformHeader(e,t)),l.push(e)}if(Array.isArray(c.data[0])){for(var t=0;_()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1)}else c.data.forEach(e)}(),function(){if(!c||!m.header&&!m.dynamicTyping&&!m.transform)return c;function e(e,t){var r,i=m.header?{}:[];for(r=0;r<e.length;r++){var n=r,s=e[r];m.header&&(n=r>=l.length?"__parsed_extra":l[r]),m.transform&&(s=m.transform(s,n)),s=v(n,s),"__parsed_extra"===n?(i[n]=i[n]||[],i[n].push(s)):i[n]=s}return m.header&&(r>l.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+r,f+t):r<l.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+r,f+t)),i}var t=1;!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);m.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function _(){return m.header&&0===l.length}function v(e,t){return r=e,m.dynamicTypingFunction&&void 0===m.dynamicTyping[r]&&(m.dynamicTyping[r]=m.dynamicTypingFunction(r)),!0===(m.dynamicTyping[r]||m.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<i)return!0}return!1}(t)?parseFloat(t):h.test(t)?new Date(t):""===t?null:t):t;var r}function k(e,t,r,i){var n={type:e,code:t,message:r};void 0!==i&&(n.row=i),c.errors.push(n)}this.parse=function(e,t,r){var i=m.quoteChar||'"';if(m.newline||(m.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(Q(t)+"([^]*?)"+Q(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(e,i)),u=!1,m.delimiter)J(m.delimiter)&&(m.delimiter=m.delimiter(e),c.meta.delimiter=m.delimiter);else{var n=function(e,t,r,i,n){var s,a,o,u;n=n||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var h=0;h<n.length;h++){var f=n[h],d=0,l=0,c=0;o=void 0;for(var p=new E({comments:i,delimiter:f,newline:t,preview:10}).parse(e),g=0;g<p.data.length;g++)if(r&&y(p.data[g]))c++;else{var _=p.data[g].length;l+=_,void 0!==o?0<_&&(d+=Math.abs(_-o),o=_):o=_}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===u||u<l)&&1.99<l&&(a=d,s=f,u=l)}return{successful:!!(m.delimiter=s),bestDelimiter:s}}(e,m.newline,m.skipEmptyLines,m.comments,m.delimitersToGuess);n.successful?m.delimiter=n.bestDelimiter:(u=!0,m.delimiter=b.DefaultDelimiter),c.meta.delimiter=m.delimiter}var s=w(m);return m.preview&&m.header&&s.preview++,a=e,o=new E(s),c=o.parse(a,t,r),g(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=J(m.chunk)?"":a.substring(o.getCharIndex())},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(t.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,J(m.complete)&&m.complete(c),a=""}}function Q(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function E(j){var z,M=(j=j||{}).delimiter,P=j.newline,U=j.comments,q=j.step,N=j.preview,B=j.fastMode,K=z=void 0===j.quoteChar||null===j.quoteChar?'"':j.quoteChar;if(void 0!==j.escapeChar&&(K=j.escapeChar),("string"!=typeof M||-1<b.BAD_DELIMITERS.indexOf(M))&&(M=","),U===M)throw new Error("Comment character same as delimiter");!0===U?U="#":("string"!=typeof U||-1<b.BAD_DELIMITERS.indexOf(U))&&(U=!1),"\n"!==P&&"\r"!==P&&"\r\n"!==P&&(P="\n");var W=0,H=!1;this.parse=function(i,t,r){if("string"!=typeof i)throw new Error("Input must be a string");var n=i.length,e=M.length,s=P.length,a=U.length,o=J(q),u=[],h=[],f=[],d=W=0;if(!i)return L();if(j.header&&!t){var l=i.split(P)[0].split(M),c=[],p={},g=!1;for(var _ in l){var m=l[_];J(j.transformHeader)&&(m=j.transformHeader(m,_));var y=m,v=p[m]||0;for(0<v&&(g=!0,y=m+"_"+v),p[m]=v+1;c.includes(y);)y=y+"_"+v;c.push(y)}if(g){var k=i.split(P);k[0]=c.join(M),i=k.join(P)}}if(B||!1!==B&&-1===i.indexOf(z)){for(var b=i.split(P),E=0;E<b.length;E++){if(f=b[E],W+=f.length,E!==b.length-1)W+=P.length;else if(r)return L();if(!U||f.substring(0,a)!==U){if(o){if(u=[],I(f.split(M)),F(),H)return L()}else I(f.split(M));if(N&&N<=E)return u=u.slice(0,N),L(!0)}}return L()}for(var w=i.indexOf(M,W),R=i.indexOf(P,W),C=new RegExp(Q(K)+Q(z),"g"),S=i.indexOf(z,W);;)if(i[W]!==z)if(U&&0===f.length&&i.substring(W,W+a)===U){if(-1===R)return L();W=R+s,R=i.indexOf(P,W),w=i.indexOf(M,W)}else if(-1!==w&&(w<R||-1===R))f.push(i.substring(W,w)),W=w+e,w=i.indexOf(M,W);else{if(-1===R)break;if(f.push(i.substring(W,R)),D(R+s),o&&(F(),H))return L();if(N&&u.length>=N)return L(!0)}else for(S=W,W++;;){if(-1===(S=i.indexOf(z,S+1)))return r||h.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:u.length,index:W}),T();if(S===n-1)return T(i.substring(W,S).replace(C,z));if(z!==K||i[S+1]!==K){if(z===K||0===S||i[S-1]!==K){-1!==w&&w<S+1&&(w=i.indexOf(M,S+1)),-1!==R&&R<S+1&&(R=i.indexOf(P,S+1));var O=A(-1===R?w:Math.min(w,R));if(i.substr(S+1+O,e)===M){f.push(i.substring(W,S).replace(C,z)),i[W=S+1+O+e]!==z&&(S=i.indexOf(z,W)),w=i.indexOf(M,W),R=i.indexOf(P,W);break}var x=A(R);if(i.substring(S+1+x,S+1+x+s)===P){if(f.push(i.substring(W,S).replace(C,z)),D(S+1+x+s),w=i.indexOf(M,W),S=i.indexOf(z,W),o&&(F(),H))return L();if(N&&u.length>=N)return L(!0);break}h.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:u.length,index:W}),S++}}else S++}return T();function I(e){u.push(e),d=W}function A(e){var t=0;if(-1!==e){var r=i.substring(S+1,e);r&&""===r.trim()&&(t=r.length)}return t}function T(e){return r||(void 0===e&&(e=i.substring(W)),f.push(e),W=n,I(f),o&&F()),L()}function D(e){W=e,I(f),f=[],R=i.indexOf(P,W)}function L(e){return{data:u,errors:h,meta:{delimiter:M,linebreak:P,aborted:H,truncated:!!e,cursor:d+(t||0)}}}function F(){q(L()),u=[],h=[]}},this.abort=function(){H=!0},this.getCharIndex=function(){return W}}function _(e){var t=e.data,r=a[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(J(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!i);s++);delete t.results}else J(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&m(t.workerId,t.results)}function m(e,t){var r=a[e];J(r.userComplete)&&r.userComplete(t),r.terminate(),delete a[e]}function y(){throw new Error("Not implemented.")}function w(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=w(e[r]);return t}function v(e,t){return function(){e.apply(t,arguments)}}function J(e){return"function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var r=b.parse(t.input,t.config);r&&f.postMessage({workerId:b.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(h.prototype)).constructor=l,(c.prototype=Object.create(h.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(g.prototype=Object.create(h.prototype)).constructor=g,b});

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createQuestionGrid: () => (/* binding */ createQuestionGrid),
/* harmony export */   test: () => (/* binding */ test)
/* harmony export */ });
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players */ "./src/players.js");
// TODO fix question data for module
// consider groups by row instead of column


const gridArea = document.querySelector("#gridWrapper");

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createQuestionGrid(questionObject) {
  const categoryCount = Object.keys(questionObject).length;
  const questionCount = [];
  const randomCategory = [];
  const randomQuestion = [];
  const randomCoordinates = [];

  // set grid column count equal to number of question categories
  const gridWrapper = document.getElementById("gridWrapper");

  gridWrapper.innerHTML = "";
  gridWrapper.style.gridTemplateColumns = `repeat(${categoryCount},1fr)`;

  // generate topic tiles
  for (let i = 1; i < categoryCount + 1; i += 1) {
    const categoryDiv = document.createElement("div");
    const tileDiv = document.createElement("div");

    categoryDiv.id = `category${i}`;
    categoryDiv.classList.add("category");
    tileDiv.classList.add("questionTopic");
    tileDiv.textContent = questionObject[`category${i}`].topic;
    categoryDiv.append(tileDiv);

    gridArea.append(categoryDiv);
  }

  let totalQuestionCount = 0;
  // generate question counts for each category
  for (let i = 1; i < categoryCount + 1; i += 1) {
    // -1 from length to account for 'topic' key
    const categoryLength =
      Object.keys(questionObject[`category${i}`]).length - 1;
    questionCount.push(categoryLength);
    totalQuestionCount += categoryLength;
  }

  const numberofRandomDoubles = Math.floor(totalQuestionCount / 12);

  const dimmDoubleCheck = [];
  console.log(categoryCount, questionCount);
  for (let i = 1; i < categoryCount + 1; i += 1) {
    for (let j = 1; j < questionCount[i - 1] + 1; j += 1) {
      // questionCount is a standard 0-index array
      // TODO better name
      dimmDoubleCheck.push(
        questionObject[`category${i}`][`question${j}`].double,
      );
    }
  }
  console.log(dimmDoubleCheck);
  // check for question sets that don't have double property declared
  if (!dimmDoubleCheck.includes(true)) {
    // TODO fix possibility of repeats
    // fix board double assignment with for loop
    for (let r = 0; r < numberofRandomDoubles; r += 1) {
      let getRandomCategory = getRandomNumberInRange(1, categoryCount);
      let getRandomQuestionInCategory = getRandomNumberInRange(
        1,
        questionCount[getRandomCategory - 1],
      );
      let coordinatePair = [getRandomCategory, getRandomQuestionInCategory];

      while (randomCoordinates.includes(coordinatePair)) {
        getRandomCategory = getRandomNumberInRange(1, categoryCount);
        getRandomQuestionInCategory = getRandomNumberInRange(
          1,
          questionCount[getRandomCategory - 1],
        );
        coordinatePair = [getRandomCategory, getRandomQuestionInCategory];
      }
      randomCoordinates.push(coordinatePair);
      console.log(randomCoordinates);

      randomCategory.push(getRandomCategory);

      randomQuestion.push(getRandomQuestionInCategory);
    }

    console.log(randomCategory, randomQuestion);
  }

  // generate random double question if supplied data doesn't specify
  // if (questionObject[`category${0}`][`question${1}`].double === undefined) {

  // }

  // generate question tiles with values
  for (let i = 1; i < categoryCount + 1; i += 1) {
    for (let j = 1; j < questionCount[i - 1] + 1; j += 1) {
      const categoryDiv = document.getElementById(`category${i}`);
      const tileDiv = document.createElement("div");
      tileDiv.classList.add("question");
      tileDiv.textContent =
        questionObject[`category${i}`][`question${j}`].value;

      // apply stock values of 100 increment per row if a value
      // is not a supplied from questionObj
      if (questionObject[`category${i}`][`question${j}`].value === undefined) {
        tileDiv.textContent = `${j}00`;

        // console.log(i * j);
      }

      // apply dimmadome double effects for any marked questions.
      if (questionObject[`category${i}`][`question${j}`].double) {
        tileDiv.classList.add("dimmDouble");
        tileDiv.addEventListener("click", () => {
          document.getElementById("dimmadome").style.display = "block";
          document.getElementById("dimmDoubleHat").style.display = "block";
        });
      }
      // apply dimmadome double effects using random generation
      // if not specified in question set

      for (let k = 0; k < randomCategory.length; k += 1) {
        if (i === randomCategory[k] && j === randomQuestion[k]) {
          tileDiv.classList.add("dimmDouble");
          tileDiv.addEventListener("click", () => {
            document.getElementById("dimmadome").style.display = "block";
            document.getElementById("dimmDoubleHat").style.display = "block";
          });
        }
      }
      categoryDiv.append(tileDiv);
    }
  }
}

// remove this later
const test = 7;


/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPlayerUI: () => (/* binding */ createPlayerUI),
/* harmony export */   generatePlayer: () => (/* binding */ generatePlayer),
/* harmony export */   generatePlayersObj: () => (/* binding */ generatePlayersObj),
/* harmony export */   getPlayerCountInput: () => (/* binding */ getPlayerCountInput),
/* harmony export */   getRandomIntInRange: () => (/* binding */ getRandomIntInRange),
/* harmony export */   initialPlayerSetup: () => (/* binding */ initialPlayerSetup),
/* harmony export */   playerNames: () => (/* binding */ playerNames)
/* harmony export */ });
/* harmony import */ var _stockNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stockNames */ "./src/stockNames.js");


function generatePlayer(name, number, score) {
  // assign to obj rather than this, since this === undefined in modules
  const obj = {};
  obj.displayPlayerName = function displayPlayerName(playerNumber) {
    document.querySelector(
      `#player${playerNumber}`,
    ).textContent = `${this.name}:`;
  };
  obj.changePlayerName = function changePlayerName() {
    const tempName = this.name;
    this.name = prompt("Please enter your name", "Josh Gunson");
    // prevent player name from disappearing by using previous name
    if (this.name === null) this.name = tempName;
    this.displayPlayerName(this.number);
    // console.log(this);
  };
  obj.incrementPlayerScore = function incrementPlayerScore(scoreToAdd) {
    this.score += scoreToAdd;
  };
  obj.displayPlayerScore = function displayPlayerScore(playerNumber) {
    document.querySelector(`#player${playerNumber}Score`).textContent =
      this.score;
  };
  obj.name = name;
  obj.score = score;
  obj.number = number;
  return obj;
}

function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// explore: rng stockname list, apply to player gen loop, add to used array
// rng on new loop, check if rng used, if so, reroll, stockname is 229 long
// have a little toggle random character name box,
// flip between static and random name generation

function generatePlayersObj(playerCount, randomNames) {
  console.log(_stockNames__WEBPACK_IMPORTED_MODULE_0__["default"]);
  const takenNames = [];
  const players = {};
  for (let i = 1; i < playerCount + 1; i += 1) {
    // console.log(getRandomIntInRange(5, 10));
    if (randomNames) {
      let rng;
      let taken = true;
      // generate random number, check if it's been used, if not, log as used
      while (taken === true) {
        rng = getRandomIntInRange(0, 228);
        if (!takenNames.includes(rng)) {
          takenNames.push(rng);
          console.log(takenNames);
          taken = false;
        }
      }
      players[i] = generatePlayer(_stockNames__WEBPACK_IMPORTED_MODULE_0__["default"][rng], i, 0);
      // const max = playerCount;
      // const min = playerCount - 4;
    }
    if (!randomNames) {
      players[i] = generatePlayer(_stockNames__WEBPACK_IMPORTED_MODULE_0__["default"][i - 1], i, 0);
    }
  }
  return players;
}

const playerNames = ["test"];

function initialPlayerSetup(playerObject) {
  const playerCount = Object.keys(playerObject).length;

  for (let i = 0; i < playerCount; i += 1) {
    // players index at 1
    // display default usernames and inital scores
    playerObject[i + 1].displayPlayerName(i + 1);

    // player names can be clicked to open the change dialogue
    document.getElementById(`player${i + 1}`).addEventListener("click", () => {
      playerObject[i + 1].changePlayerName();
    });
  }
}

function getPlayerCountInput() {
  return Number(document.getElementById("playerCount").value);
}
function createPlayerUI(playerNumber) {
  const div = document.createElement("div");
  const name = document.createElement("p");
  const score = document.createElement("p");

  div.classList.add("player");

  name.id = `player${playerNumber}`;

  score.classList.add("score");
  score.id = `player${playerNumber}Score`;

  div.append(name, score);

  return div;
}


/***/ }),

/***/ "./src/stockNames.js":
/*!***************************!*\
  !*** ./src/stockNames.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const stockNames = [
  "Chase",
  "Ethan",
  "Stan",
  "Taylor",
  "Alexander",
  "Amari",
  "Jayce",
  "Nathan",
  "Aaron",
  "Bryce",
  "Hunter",
  "Jacob",
  "Nasir",
  "Matthew",
  "Prince",
  "Xavier",
  "Karter",
  "Tristan",
  "Jonathan",
  "Justin",
  "Tyler",
  "Kaleb",
  "Sebastian",
  "Ayden",
  "Jason",
  "Joseph",
  "Austin",
  "Jaden",
  "Nathaniel",
  "Samuel",
  "Dylan",
  "James",
  "Joel",
  "Asher",
  "Kai",
  "Caleb",
  "Gabriel",
  "Jayceon",
  "Mamadou",
  "Emmanuel",
  "Zachary",
  "Ezekiel",
  "Nicholas",
  "Zaire",
  "Adonis",
  "Benjamin",
  "Ashton",
  "Avery",
  "Kameron",
  "Legend",
  "Levi",
  "Lucas",
  "Andrew",
  "Eli",
  "Julian",
  "Omari",
  "Adam",
  "Ezra",
  "Cairo",
  "Israel",
  "Jaiden",
  "Jaxon",
  "Justice",
  "Kamari",
  "Brandon",
  "Greyson",
  "Muhammad",
  "Sincere",
  "Andre",
  "Ibrahima",
  "Jackson",
  "Jaylen",
  "Kaden",
  "Abdoulaye",
  "Caiden",
  "Chance",
  "Evan",
  "Giovanni",
  "Grayson",
  "Kevin",
  "Omar",
  "Shawn",
  "August",
  "Isaac",
  "Khalil",
  "Kyle",
  "Marcus",
  "Zane",
  "Ali",
  "Maison",
  "Princeton",
  "Robert",
  "Ace",
  "Bryan",
  "Gianni",
  "Jamel",
  "Jamir",
  "John",
  "Nolan",
  "Ousmane",
  "Alpha",
  "Amadou",
  "Jaxson",
  "Kareem",
  "Kingston",
  "Luke",
  "Mekhi",
  "Myles",
  "Stephen",
  "Aden",
  "Adrian",
  "Alex",
  "Boubacar",
  "Cayden",
  "Connor",
  "Corey",
  "Dallas",
  "Hayden",
  "Jonah",
  "Kamren",
  "Major",
  "Phoenix",
  "Sean",
  "Abdoul",
  "Carson",
  "Dominic",
  "Jasiah",
  "Julius",
  "Kenneth",
  "Landon",
  "Malik",
  "Mark",
  "Miles",
  "Mouhamed",
  "Oumar",
  "Samir",
  "Solomon",
  "Timothy",
  "William",
  "Zayden",
  "Liam",
  "Jacob",
  "Dylan",
  "Matthew",
  "Noah",
  "Sebastian",
  "Jayden",
  "Lucas",
  "Ethan",
  "Aaron",
  "Angel",
  "Daniel",
  "Logan",
  "Alexander",
  "Mason",
  "Aiden",
  "Mateo",
  "Joshua",
  "David",
  "Adrian",
  "Anthony",
  "Michael",
  "Joseph",
  "Ian",
  "Christopher",
  "Elias",
  "Gabriel",
  "Ryan",
  "Isaac",
  "Jose",
  "Thiago",
  "Elijah",
  "James",
  "Oliver",
  "Josiah",
  "Nathan",
  "Julian",
  "Justin",
  "Carlos",
  "Gael",
  "Luis",
  "Alan",
  "Jeremy",
  "Jonathan",
  "Leonardo",
  "Kevin",
  "Samuel",
  "Jeremiah",
  "Benjamin",
  "Nicholas",
  "Christian",
  "John",
  "Santiago",
  "Axel",
  "Erick",
  "Brandon",
  "Joel",
  "Juan",
  "Matias",
  "William",
  "Andrew",
  "Diego",
  "Isaiah",
  "Nicolas",
  "Xavier",
  "Ayden",
  "Austin",
  "Jason",
  "Emmanuel",
  "Kayden",
  "Jayce",
  "Caleb",
  "Bryan",
  "Jordan",
  "Nathaniel",
  "Alejandro",
  "Damian",
  "Derek",
  "Jadiel",
  "Eli",
  "Matteo",
  "Adam",
  "Alex",
  "Jace",
  "Henry",
  "Josue",
  "Miguel",
  "Evan",
  "Grayson",
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stockNames);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/questionModal.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addQuestionModalEventListener: () => (/* binding */ addQuestionModalEventListener),
/* harmony export */   convertJsonToObject: () => (/* binding */ convertJsonToObject),
/* harmony export */   generateQuestionObjectFromCSV: () => (/* binding */ generateQuestionObjectFromCSV),
/* harmony export */   getQuestionData: () => (/* binding */ getQuestionData)
/* harmony export */ });
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/board.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players */ "./src/players.js");




let questionData = [];

// convert this to a function in players module
// const playerCount = players.getPlayerCountInput();
// export const playerObj = players.generatePlayersObj(2);

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function generateQuestionObjectFromCSV() {
  const questionObj = {};

  for (let i = 0; i < questionData.length / 2; i += 1) {
    questionObj[`category${i + 1}`] = {
      topic: questionData[2 * i][0],
    };

    // start from index 1 to account for csv topic formatting
    for (let j = 1; j < questionData[0].length; j += 1) {
      questionObj[`category${i + 1}`][`question${j}`] = {
        question: questionData[2 * i][j],
        answer: questionData[2 * i + 1][j],
      };
      // questionObj[i][`question${j}`] = questionData[2 * i][j];
      // questionObj[i][`answer${j}`] = questionData[2 * i + 1][j];
    }
  }
  return questionObj;
}

function addQuestionModalEventListener(questionObject, playerObj) {
  // const questionTiles = document.querySelectorAll(".question");
  console.log(questionObject);

  const categoryCount = Object.keys(questionObject).length;
  const questionCount = [];
  for (let i = 1; i < categoryCount + 1; i += 1) {
    // -1 from length to account for 'topic' key
    questionCount.push(Object.keys(questionObject[`category${i}`]).length - 1);

    const categoryQuestionTiles = document.querySelectorAll(
      `#category${i} .question`,
    );
    for (let j = 0; j < questionCount[i - 1]; j += 1) {
      categoryQuestionTiles[j].addEventListener("click", () => {
        if (categoryQuestionTiles[j].classList.contains("taken")) return;
        let currentScore;

        currentScore = parseInt(categoryQuestionTiles[j].textContent, 10);
        if (categoryQuestionTiles[j].classList.contains("dimmDouble")) {
          currentScore = parseInt(categoryQuestionTiles[j].textContent, 10) * 2;
        }

        // reset current modal content
        modal.innerHTML = "";

        const pScoreElement = document.createElement("p");
        pScoreElement.textContent = currentScore;
        pScoreElement.id = "modalScore";
        modal.append(pScoreElement);

        // alt method to avoid directly setting innerHTML

        // const pQuestionContent = document.createElement("p");
        // pQuestionContent.textContent =
        //   questionObject[`category${i}`][`question${j + 1}`].question;
        // pQuestionContent.id = "modalQuestionContent";

        // set question content
        modal.innerHTML +=
          questionObject[`category${i}`][`question${j + 1}`].question;

        const answerButton = document.createElement("button");
        answerButton.textContent = "Answer";

        answerButton.addEventListener("click", () => {
          if (answerButton.classList.contains("buttonDisabled")) return;
          answerButton.classList.add("buttonDisabled");

          // const playerNames = [
          //   playerObj[1].name,
          //   playerObj[2].name,
          //   playerObj[3].name,
          //   playerObj[4].name,
          // ];
          const playerCount = Object.keys(playerObj).length;

          modal.innerHTML +=
            questionObject[`category${i}`][`question${j + 1}`].answer;

          const div = document.createElement("div");
          div.classList.add("scoreButtons");

          for (let k = 0; k < playerCount; k += 1) {
            const scoreButton = document.createElement("button");
            scoreButton.textContent = playerObj[k + 1].name;
            scoreButton.addEventListener("click", () => {
              if (scoreButton.classList.contains("buttonDisabled")) return;
              playerObj[k + 1].incrementPlayerScore(currentScore);
              playerObj[k + 1].displayPlayerScore(k + 1);
              scoreButton.classList.add("buttonDisabled");
            });
            div.append(scoreButton);
          }
          modal.append(div);
        });
        modal.append(answerButton);

        categoryQuestionTiles[j].classList.add("taken");
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
      });
    }
  }
}

function convertJsonToObject(json) {
  // remove this?
  const obj = JSON.parse(json);
  return obj;
}

function getQuestionData(csvFile, playerObj) {
  // "../src/questions/Trivia - Questions.csv" local filename
  papaparse__WEBPACK_IMPORTED_MODULE_0___default().parse(csvFile.files[0], {
    download: true,
    complete(results) {
      questionData = results.data;
      const questionObj = generateQuestionObjectFromCSV();
      // console.log(questionData);
      _board__WEBPACK_IMPORTED_MODULE_1__.createQuestionGrid(questionObj);
      // console.log(questionObj);
      addQuestionModalEventListener(questionObj, playerObj);
      // console.log(results.data);
    },
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25Nb2RhbC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxLQUFxQyxDQUFDLGlDQUFPLEVBQUUsb0NBQUMsQ0FBQztBQUFBO0FBQUE7QUFBQSxrR0FBQyxDQUFDLENBQWtGLENBQUMsbUJBQW1CLGFBQWEsc0ZBQXNGLDhEQUE4RCxRQUFRLG9CQUFvQixjQUFjLG9CQUFvQixxQ0FBcUMsRUFBRSw4RkFBOEYsaUJBQWlCLGlDQUFpQyxpSUFBaUksbUNBQW1DLGVBQWUscUNBQXFDLGlCQUFpQixxQ0FBcUMsaUJBQWlCLFlBQVksS0FBSyw0QkFBNEIsYUFBYSxJQUFJLHVCQUF1Qix1QkFBdUIsUUFBUSx3Q0FBd0MsR0FBRywrTUFBK00sK0JBQStCLEVBQUUsV0FBVyxzREFBc0QsNkNBQTZDLFNBQVMsa0pBQWtKLG1CQUFtQix1QkFBdUIsMERBQTBELFlBQVksNkJBQTZCLGtFQUFrRSxrQ0FBa0MsMEJBQTBCLGlHQUFpRyw0RkFBNEYsMENBQTBDLDhDQUE4Qyx5Q0FBeUMsNkJBQTZCLG1FQUFtRSxZQUFZLDBDQUEwQyxvSkFBb0osR0FBRywyQkFBMkIsc0NBQXNDLHFCQUFxQixxREFBcUQsNERBQTRELDhXQUE4VywwREFBMEQsa0JBQWtCLFNBQVMsNEVBQTRFLDBEQUEwRCxTQUFTLFlBQVksV0FBVyw2QkFBNkIsbUJBQW1CLFlBQVksV0FBVyxLQUFLLG1GQUFtRiwwR0FBMEcsaUJBQWlCLElBQUksS0FBSyxlQUFlLGdCQUFnQix5QkFBeUIsT0FBTyxZQUFZLElBQUksS0FBSyxnQkFBZ0Isa0JBQWtCLGdCQUFnQixxQ0FBcUMsU0FBUyxnQkFBZ0Isb0JBQW9CLDZEQUE2RCxTQUFTLGlEQUFpRCxnQ0FBZ0Msd0ZBQXdGLFlBQVksV0FBVyxtQ0FBbUMsU0FBUyxpR0FBaUcsc1pBQXNaLGVBQWUsdUJBQXVCLGtCQUFrQixNQUFNLDZCQUE2Qiw4SkFBOEosWUFBWSxvQkFBb0IsWUFBWSw0REFBNEQsSUFBSSxFQUFFLFdBQVcsYUFBYSxpQkFBaUIsbUJBQW1CLGdCQUFnQixtQ0FBbUMsdUJBQXVCLHdHQUF3RyxPQUFPLFNBQVMscUNBQXFDLGtGQUFrRixtQ0FBbUMsZ0NBQWdDLHNDQUFzQyxrQ0FBa0Msa0NBQWtDLGlDQUFpQyxhQUFhLG9CQUFvQixjQUFjLCtOQUErTiwwQkFBMEIsYUFBYSxXQUFXLHNFQUFzRSw2REFBNkQsNENBQTRDLHdEQUF3RCx1Q0FBdUMsa0JBQWtCLHFDQUFxQywwQkFBMEIscUJBQXFCLDREQUE0RCxvREFBb0Qsb0JBQW9CLGdJQUFnSSxpRkFBaUYsb0JBQW9CLDBDQUEwQyxFQUFFLG1DQUFtQyxpSEFBaUgsc0NBQXNDLDRaQUE0WixnQkFBZ0IsNkJBQTZCLGtGQUFrRix5Q0FBeUMsR0FBRyxjQUFjLE1BQU0sUUFBUSx5RkFBeUYsc0NBQXNDLFlBQVksa0JBQWtCLHlCQUF5QixnQ0FBZ0MsNEJBQTRCLHNDQUFzQyxLQUFLLDRSQUE0UiwwQ0FBMEMsMENBQTBDLDJCQUEyQiwyQ0FBMkMsdURBQXVELElBQUkseUNBQXlDLFNBQVMsNEJBQTRCLHFDQUFxQyw4QkFBOEIscU5BQXFOLDJDQUEyQyxxQkFBcUIsbURBQW1ELHNDQUFzQyw4QkFBOEIsc0JBQXNCLCtCQUErQixjQUFjLFFBQVEsUUFBUSwyREFBMkQscUNBQXFDLHdCQUF3QixxTEFBcUwsNEJBQTRCLGdHQUFnRyw0QkFBNEIsa0JBQWtCLDJCQUEyQixvRUFBb0UsMEJBQTBCLDRDQUE0QyxzQkFBc0IsUUFBUSxVQUFVLEVBQUUsK0JBQStCLDJJQUEySSw2QkFBNkIsMEJBQTBCLGNBQWMsTUFBTSxtQkFBbUIsMEJBQTBCLDZCQUE2Qiw0QkFBNEIsb0JBQW9CLCtCQUErQixpR0FBaUcsY0FBYyxtQkFBbUIsRUFBRSxtQkFBbUIsc0JBQXNCLDREQUE0RCx3QkFBd0IsOERBQThELHlCQUF5QixzSUFBc0ksa0NBQWtDLHFDQUFxQyw0QkFBNEIsaUVBQWlFLGdDQUFnQyxJQUFJLDRIQUE0SCxTQUFTLHNCQUFzQix1Q0FBdUMseUNBQXlDLG9DQUFvQyxnREFBZ0Qsd0NBQXdDLDRKQUE0SixPQUFPLGNBQWMsOEZBQThGLEVBQUUseUVBQXlFLEVBQUUsb0VBQW9FLEVBQUUsNEZBQTRGLDJCQUEyQixjQUFjLGFBQWEsbUJBQW1CLGVBQWUsS0FBSyxnQ0FBZ0MsOEVBQThFLGNBQWMsdUZBQXVGLGFBQWEsaUdBQWlHLGtHQUFrRyxZQUFZLG1CQUFtQixhQUFhLGdCQUFnQiwyREFBMkQsNkJBQTZCLFlBQVkscUJBQXFCLHlCQUF5QixtQkFBbUIsdUJBQXVCLGNBQWMsMERBQTBELGdCQUFnQixtQkFBbUIsSUFBSSxRQUFRLFdBQVcsS0FBSyxlQUFlLG9KQUFvSixvUEFBb1AsUUFBUSxtR0FBbUcsb0NBQW9DLGNBQWMsR0FBRyxhQUFhLDhCQUE4QixnQkFBZ0IsMk5BQTJOLGNBQWMsb0JBQW9CLHFCQUFxQixTQUFTLHlEQUF5RCxNQUFNLG9CQUFvQixPQUFPLHlCQUF5Qix1Q0FBdUMsMkJBQTJCLHVCQUF1Qix1Q0FBdUMseUJBQXlCLG1JQUFtSSw4QkFBOEIsZ0JBQWdCLFdBQVcsd0JBQXdCLGlDQUFpQyxrR0FBa0csS0FBSywwQkFBMEIsWUFBWSxxQkFBcUIsMkJBQTJCLFlBQVksV0FBVyxLQUFLLHVCQUF1QixTQUFTLGlCQUFpQiw0Q0FBNEMsZUFBZSxnQkFBZ0IsMkJBQTJCLEtBQUssdUJBQXVCLGdEQUFnRCxtR0FBbUcsT0FBTyw4Q0FBOEMsOERBQThELDRHQUE0RyxXQUFXLCtFQUErRSxNQUFNLFdBQVcsS0FBSyxNQUFNLFlBQVksd0JBQXdCLFNBQVMsdUJBQXVCLDZEQUE2RCx3QkFBd0IsNkVBQTZFLHlCQUF5QixTQUFTLHVCQUF1QixvRUFBb0UsY0FBYywyQkFBMkIsb0JBQW9CLGNBQWMsZ0JBQWdCLG9JQUFvSSxzS0FBc0ssbUhBQW1ILGFBQWEsMkJBQTJCLGdFQUFnRSw0RUFBNEUsaUJBQWlCLGlCQUFpQixzQ0FBc0MsTUFBTSxnQkFBZ0IsV0FBVyxpREFBaUQsa0JBQWtCLG1DQUFtQyxjQUFjLFdBQVcsVUFBVSxNQUFNLGlCQUFpQiw0QkFBNEIsaUNBQWlDLHlCQUF5QixXQUFXLEtBQUssaURBQWlELHFCQUFxQiw2QkFBNkIsTUFBTSx1Q0FBdUMsbUJBQW1CLHdDQUF3QyxXQUFXLHdGQUF3Rix5REFBeUQscUJBQXFCLHdDQUF3Qyw4RUFBOEUsS0FBSyxnQkFBZ0IseURBQXlELCtCQUErQixrQkFBa0IsRUFBRSwrQ0FBK0MsNEZBQTRGLE1BQU0sbURBQW1ELHNCQUFzQiw2QkFBNkIsd0VBQXdFLGdDQUFnQywwQkFBMEIsNkdBQTZHLE1BQU0sV0FBVyxtQ0FBbUMsNEdBQTRHLCtCQUErQixNQUFNLFFBQVEsOEdBQThHLE9BQU8sU0FBUyxXQUFXLGNBQWMsY0FBYyxjQUFjLFFBQVEsV0FBVyx5QkFBeUIsK0JBQStCLFNBQVMsY0FBYyx5RUFBeUUsY0FBYywrQkFBK0IsY0FBYyxPQUFPLHNCQUFzQixrRUFBa0UsYUFBYSxrQkFBa0IsdUJBQXVCLEtBQUssOEJBQThCLFVBQVUsY0FBYyxrQ0FBa0MsdUNBQXVDLG1DQUFtQyxPQUFPLGlCQUFpQixtQkFBbUIsd0JBQXdCLFlBQVksRUFBRSxtQkFBbUIsa0JBQWtCLFlBQVksc0NBQXNDLG1FQUFtRSxRQUFRLEtBQUssaUJBQWlCLHdFQUF3RSx3Q0FBd0MsZ0JBQWdCLFdBQVcsK0RBQStELGFBQWEsb0NBQW9DLGNBQWMseUNBQXlDLDZCQUE2Qiw0QkFBNEIsU0FBUyxnQkFBZ0Isa0JBQWtCLHNCQUFzQixjQUFjLDJCQUEyQixtQ0FBbUMsYUFBYSxrREFBa0QsMkNBQTJDLG1FQUFtRSxFQUFFLG9FQUFvRSxnQ0FBZ0Msa0JBQWtCLDJDQUEyQyxHQUFHLGdPQUFnTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMTdsQjtBQUNBO0FBQ3FDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjO0FBQ2xFO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxFQUFFO0FBQ2xDO0FBQ0E7QUFDQSxvREFBb0QsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBLDRDQUE0QyxFQUFFO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLEVBQUUsY0FBYyxFQUFFO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxFQUFFLGNBQWMsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekMsb0JBQW9CLDhCQUE4QjtBQUNsRCw2REFBNkQsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsRUFBRSxjQUFjLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEVBQUUsY0FBYyxFQUFFO0FBQ3RELGlDQUFpQyxFQUFFO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsRUFBRSxjQUFjLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkJBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVJK0I7QUFDdEM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0IsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsYUFBYTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsY0FBYyxtREFBVTtBQUN4QjtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtREFBVTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtREFBVTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxNQUFNO0FBQzNDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGFBQWE7QUFDbEM7QUFDQTtBQUNBLHNCQUFzQixhQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUN4TzFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ0k7QUFDSTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQiw2QkFBNkI7QUFDL0MsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hELDZCQUE2QixNQUFNLGNBQWMsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRTtBQUNyQyxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBLDZEQUE2RCxFQUFFO0FBQy9EO0FBQ0E7QUFDQSxrQkFBa0IsR0FBRztBQUNyQjtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLEVBQUUsY0FBYyxNQUFNO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEVBQUUsY0FBYyxNQUFNO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsRUFBRSxjQUFjLE1BQU07QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaUJBQWlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLEVBQUUsc0RBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzREFBd0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaXZpYS1nYW1lLy4vbm9kZV9tb2R1bGVzL3BhcGFwYXJzZS9wYXBhcGFyc2UubWluLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvc3RvY2tOYW1lcy5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL3F1ZXN0aW9uTW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogQGxpY2Vuc2VcblBhcGEgUGFyc2VcbnY1LjQuMVxuaHR0cHM6Ly9naXRodWIuY29tL21ob2x0L1BhcGFQYXJzZVxuTGljZW5zZTogTUlUXG4qL1xuIWZ1bmN0aW9uKGUsdCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz10KCk6ZS5QYXBhPXQoKX0odGhpcyxmdW5jdGlvbiBzKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp2b2lkIDAhPT1mP2Y6e307dmFyIG49IWYuZG9jdW1lbnQmJiEhZi5wb3N0TWVzc2FnZSxvPWYuSVNfUEFQQV9XT1JLRVJ8fCExLGE9e30sdT0wLGI9e3BhcnNlOmZ1bmN0aW9uKGUsdCl7dmFyIHI9KHQ9dHx8e30pLmR5bmFtaWNUeXBpbmd8fCExO0oocikmJih0LmR5bmFtaWNUeXBpbmdGdW5jdGlvbj1yLHI9e30pO2lmKHQuZHluYW1pY1R5cGluZz1yLHQudHJhbnNmb3JtPSEhSih0LnRyYW5zZm9ybSkmJnQudHJhbnNmb3JtLHQud29ya2VyJiZiLldPUktFUlNfU1VQUE9SVEVEKXt2YXIgaT1mdW5jdGlvbigpe2lmKCFiLldPUktFUlNfU1VQUE9SVEVEKXJldHVybiExO3ZhciBlPShyPWYuVVJMfHxmLndlYmtpdFVSTHx8bnVsbCxpPXMudG9TdHJpbmcoKSxiLkJMT0JfVVJMfHwoYi5CTE9CX1VSTD1yLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbXCJ2YXIgZ2xvYmFsID0gKGZ1bmN0aW9uKCkgeyBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBzZWxmOyB9IGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gd2luZG93OyB9IGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZ2xvYmFsOyB9IHJldHVybiB7fTsgfSkoKTsgZ2xvYmFsLklTX1BBUEFfV09SS0VSPXRydWU7IFwiLFwiKFwiLGksXCIpKCk7XCJdLHt0eXBlOlwidGV4dC9qYXZhc2NyaXB0XCJ9KSkpKSx0PW5ldyBmLldvcmtlcihlKTt2YXIgcixpO3JldHVybiB0Lm9ubWVzc2FnZT1fLHQuaWQ9dSsrLGFbdC5pZF09dH0oKTtyZXR1cm4gaS51c2VyU3RlcD10LnN0ZXAsaS51c2VyQ2h1bms9dC5jaHVuayxpLnVzZXJDb21wbGV0ZT10LmNvbXBsZXRlLGkudXNlckVycm9yPXQuZXJyb3IsdC5zdGVwPUoodC5zdGVwKSx0LmNodW5rPUoodC5jaHVuayksdC5jb21wbGV0ZT1KKHQuY29tcGxldGUpLHQuZXJyb3I9Sih0LmVycm9yKSxkZWxldGUgdC53b3JrZXIsdm9pZCBpLnBvc3RNZXNzYWdlKHtpbnB1dDplLGNvbmZpZzp0LHdvcmtlcklkOmkuaWR9KX12YXIgbj1udWxsO2IuTk9ERV9TVFJFQU1fSU5QVVQsXCJzdHJpbmdcIj09dHlwZW9mIGU/KGU9ZnVuY3Rpb24oZSl7aWYoNjUyNzk9PT1lLmNoYXJDb2RlQXQoMCkpcmV0dXJuIGUuc2xpY2UoMSk7cmV0dXJuIGV9KGUpLG49dC5kb3dubG9hZD9uZXcgbCh0KTpuZXcgcCh0KSk6ITA9PT1lLnJlYWRhYmxlJiZKKGUucmVhZCkmJkooZS5vbik/bj1uZXcgZyh0KTooZi5GaWxlJiZlIGluc3RhbmNlb2YgRmlsZXx8ZSBpbnN0YW5jZW9mIE9iamVjdCkmJihuPW5ldyBjKHQpKTtyZXR1cm4gbi5zdHJlYW0oZSl9LHVucGFyc2U6ZnVuY3Rpb24oZSx0KXt2YXIgbj0hMSxfPSEwLG09XCIsXCIseT1cIlxcclxcblwiLHM9J1wiJyxhPXMrcyxyPSExLGk9bnVsbCxvPSExOyFmdW5jdGlvbigpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiB0KXJldHVybjtcInN0cmluZ1wiIT10eXBlb2YgdC5kZWxpbWl0ZXJ8fGIuQkFEX0RFTElNSVRFUlMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybi0xIT09dC5kZWxpbWl0ZXIuaW5kZXhPZihlKX0pLmxlbmd0aHx8KG09dC5kZWxpbWl0ZXIpOyhcImJvb2xlYW5cIj09dHlwZW9mIHQucXVvdGVzfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnF1b3Rlc3x8QXJyYXkuaXNBcnJheSh0LnF1b3RlcykpJiYobj10LnF1b3Rlcyk7XCJib29sZWFuXCIhPXR5cGVvZiB0LnNraXBFbXB0eUxpbmVzJiZcInN0cmluZ1wiIT10eXBlb2YgdC5za2lwRW1wdHlMaW5lc3x8KHI9dC5za2lwRW1wdHlMaW5lcyk7XCJzdHJpbmdcIj09dHlwZW9mIHQubmV3bGluZSYmKHk9dC5uZXdsaW5lKTtcInN0cmluZ1wiPT10eXBlb2YgdC5xdW90ZUNoYXImJihzPXQucXVvdGVDaGFyKTtcImJvb2xlYW5cIj09dHlwZW9mIHQuaGVhZGVyJiYoXz10LmhlYWRlcik7aWYoQXJyYXkuaXNBcnJheSh0LmNvbHVtbnMpKXtpZigwPT09dC5jb2x1bW5zLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJPcHRpb24gY29sdW1ucyBpcyBlbXB0eVwiKTtpPXQuY29sdW1uc312b2lkIDAhPT10LmVzY2FwZUNoYXImJihhPXQuZXNjYXBlQ2hhcitzKTsoXCJib29sZWFuXCI9PXR5cGVvZiB0LmVzY2FwZUZvcm11bGFlfHx0LmVzY2FwZUZvcm11bGFlIGluc3RhbmNlb2YgUmVnRXhwKSYmKG89dC5lc2NhcGVGb3JtdWxhZSBpbnN0YW5jZW9mIFJlZ0V4cD90LmVzY2FwZUZvcm11bGFlOi9eWz0rXFwtQFxcdFxccl0uKiQvKX0oKTt2YXIgdT1uZXcgUmVnRXhwKFEocyksXCJnXCIpO1wic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1KU09OLnBhcnNlKGUpKTtpZihBcnJheS5pc0FycmF5KGUpKXtpZighZS5sZW5ndGh8fEFycmF5LmlzQXJyYXkoZVswXSkpcmV0dXJuIGgobnVsbCxlLHIpO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlWzBdKXJldHVybiBoKGl8fE9iamVjdC5rZXlzKGVbMF0pLGUscil9ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgZSlyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZS5kYXRhJiYoZS5kYXRhPUpTT04ucGFyc2UoZS5kYXRhKSksQXJyYXkuaXNBcnJheShlLmRhdGEpJiYoZS5maWVsZHN8fChlLmZpZWxkcz1lLm1ldGEmJmUubWV0YS5maWVsZHN8fGkpLGUuZmllbGRzfHwoZS5maWVsZHM9QXJyYXkuaXNBcnJheShlLmRhdGFbMF0pP2UuZmllbGRzOlwib2JqZWN0XCI9PXR5cGVvZiBlLmRhdGFbMF0/T2JqZWN0LmtleXMoZS5kYXRhWzBdKTpbXSksQXJyYXkuaXNBcnJheShlLmRhdGFbMF0pfHxcIm9iamVjdFwiPT10eXBlb2YgZS5kYXRhWzBdfHwoZS5kYXRhPVtlLmRhdGFdKSksaChlLmZpZWxkc3x8W10sZS5kYXRhfHxbXSxyKTt0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gc2VyaWFsaXplIHVucmVjb2duaXplZCBpbnB1dFwiKTtmdW5jdGlvbiBoKGUsdCxyKXt2YXIgaT1cIlwiO1wic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1KU09OLnBhcnNlKGUpKSxcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9SlNPTi5wYXJzZSh0KSk7dmFyIG49QXJyYXkuaXNBcnJheShlKSYmMDxlLmxlbmd0aCxzPSFBcnJheS5pc0FycmF5KHRbMF0pO2lmKG4mJl8pe2Zvcih2YXIgYT0wO2E8ZS5sZW5ndGg7YSsrKTA8YSYmKGkrPW0pLGkrPXYoZVthXSxhKTswPHQubGVuZ3RoJiYoaSs9eSl9Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciB1PW4/ZS5sZW5ndGg6dFtvXS5sZW5ndGgsaD0hMSxmPW4/MD09PU9iamVjdC5rZXlzKHRbb10pLmxlbmd0aDowPT09dFtvXS5sZW5ndGg7aWYociYmIW4mJihoPVwiZ3JlZWR5XCI9PT1yP1wiXCI9PT10W29dLmpvaW4oXCJcIikudHJpbSgpOjE9PT10W29dLmxlbmd0aCYmMD09PXRbb11bMF0ubGVuZ3RoKSxcImdyZWVkeVwiPT09ciYmbil7Zm9yKHZhciBkPVtdLGw9MDtsPHU7bCsrKXt2YXIgYz1zP2VbbF06bDtkLnB1c2godFtvXVtjXSl9aD1cIlwiPT09ZC5qb2luKFwiXCIpLnRyaW0oKX1pZighaCl7Zm9yKHZhciBwPTA7cDx1O3ArKyl7MDxwJiYhZiYmKGkrPW0pO3ZhciBnPW4mJnM/ZVtwXTpwO2krPXYodFtvXVtnXSxwKX1vPHQubGVuZ3RoLTEmJighcnx8MDx1JiYhZikmJihpKz15KX19cmV0dXJuIGl9ZnVuY3Rpb24gdihlLHQpe2lmKG51bGw9PWUpcmV0dXJuXCJcIjtpZihlLmNvbnN0cnVjdG9yPT09RGF0ZSlyZXR1cm4gSlNPTi5zdHJpbmdpZnkoZSkuc2xpY2UoMSwyNSk7dmFyIHI9ITE7byYmXCJzdHJpbmdcIj09dHlwZW9mIGUmJm8udGVzdChlKSYmKGU9XCInXCIrZSxyPSEwKTt2YXIgaT1lLnRvU3RyaW5nKCkucmVwbGFjZSh1LGEpO3JldHVybihyPXJ8fCEwPT09bnx8XCJmdW5jdGlvblwiPT10eXBlb2YgbiYmbihlLHQpfHxBcnJheS5pc0FycmF5KG4pJiZuW3RdfHxmdW5jdGlvbihlLHQpe2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKWlmKC0xPGUuaW5kZXhPZih0W3JdKSlyZXR1cm4hMDtyZXR1cm4hMX0oaSxiLkJBRF9ERUxJTUlURVJTKXx8LTE8aS5pbmRleE9mKG0pfHxcIiBcIj09PWkuY2hhckF0KDApfHxcIiBcIj09PWkuY2hhckF0KGkubGVuZ3RoLTEpKT9zK2krczppfX19O2lmKGIuUkVDT1JEX1NFUD1TdHJpbmcuZnJvbUNoYXJDb2RlKDMwKSxiLlVOSVRfU0VQPVN0cmluZy5mcm9tQ2hhckNvZGUoMzEpLGIuQllURV9PUkRFUl9NQVJLPVwiXFx1ZmVmZlwiLGIuQkFEX0RFTElNSVRFUlM9W1wiXFxyXCIsXCJcXG5cIiwnXCInLGIuQllURV9PUkRFUl9NQVJLXSxiLldPUktFUlNfU1VQUE9SVEVEPSFuJiYhIWYuV29ya2VyLGIuTk9ERV9TVFJFQU1fSU5QVVQ9MSxiLkxvY2FsQ2h1bmtTaXplPTEwNDg1NzYwLGIuUmVtb3RlQ2h1bmtTaXplPTUyNDI4ODAsYi5EZWZhdWx0RGVsaW1pdGVyPVwiLFwiLGIuUGFyc2VyPUUsYi5QYXJzZXJIYW5kbGU9cixiLk5ldHdvcmtTdHJlYW1lcj1sLGIuRmlsZVN0cmVhbWVyPWMsYi5TdHJpbmdTdHJlYW1lcj1wLGIuUmVhZGFibGVTdHJlYW1TdHJlYW1lcj1nLGYualF1ZXJ5KXt2YXIgZD1mLmpRdWVyeTtkLmZuLnBhcnNlPWZ1bmN0aW9uKG8pe3ZhciByPW8uY29uZmlnfHx7fSx1PVtdO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7aWYoIShcIklOUFVUXCI9PT1kKHRoaXMpLnByb3AoXCJ0YWdOYW1lXCIpLnRvVXBwZXJDYXNlKCkmJlwiZmlsZVwiPT09ZCh0aGlzKS5hdHRyKFwidHlwZVwiKS50b0xvd2VyQ2FzZSgpJiZmLkZpbGVSZWFkZXIpfHwhdGhpcy5maWxlc3x8MD09PXRoaXMuZmlsZXMubGVuZ3RoKXJldHVybiEwO2Zvcih2YXIgdD0wO3Q8dGhpcy5maWxlcy5sZW5ndGg7dCsrKXUucHVzaCh7ZmlsZTp0aGlzLmZpbGVzW3RdLGlucHV0RWxlbTp0aGlzLGluc3RhbmNlQ29uZmlnOmQuZXh0ZW5kKHt9LHIpfSl9KSxlKCksdGhpcztmdW5jdGlvbiBlKCl7aWYoMCE9PXUubGVuZ3RoKXt2YXIgZSx0LHIsaSxuPXVbMF07aWYoSihvLmJlZm9yZSkpe3ZhciBzPW8uYmVmb3JlKG4uZmlsZSxuLmlucHV0RWxlbSk7aWYoXCJvYmplY3RcIj09dHlwZW9mIHMpe2lmKFwiYWJvcnRcIj09PXMuYWN0aW9uKXJldHVybiBlPVwiQWJvcnRFcnJvclwiLHQ9bi5maWxlLHI9bi5pbnB1dEVsZW0saT1zLnJlYXNvbix2b2lkKEooby5lcnJvcikmJm8uZXJyb3Ioe25hbWU6ZX0sdCxyLGkpKTtpZihcInNraXBcIj09PXMuYWN0aW9uKXJldHVybiB2b2lkIGgoKTtcIm9iamVjdFwiPT10eXBlb2Ygcy5jb25maWcmJihuLmluc3RhbmNlQ29uZmlnPWQuZXh0ZW5kKG4uaW5zdGFuY2VDb25maWcscy5jb25maWcpKX1lbHNlIGlmKFwic2tpcFwiPT09cylyZXR1cm4gdm9pZCBoKCl9dmFyIGE9bi5pbnN0YW5jZUNvbmZpZy5jb21wbGV0ZTtuLmluc3RhbmNlQ29uZmlnLmNvbXBsZXRlPWZ1bmN0aW9uKGUpe0ooYSkmJmEoZSxuLmZpbGUsbi5pbnB1dEVsZW0pLGgoKX0sYi5wYXJzZShuLmZpbGUsbi5pbnN0YW5jZUNvbmZpZyl9ZWxzZSBKKG8uY29tcGxldGUpJiZvLmNvbXBsZXRlKCl9ZnVuY3Rpb24gaCgpe3Uuc3BsaWNlKDAsMSksZSgpfX19ZnVuY3Rpb24gaChlKXt0aGlzLl9oYW5kbGU9bnVsbCx0aGlzLl9maW5pc2hlZD0hMSx0aGlzLl9jb21wbGV0ZWQ9ITEsdGhpcy5faGFsdGVkPSExLHRoaXMuX2lucHV0PW51bGwsdGhpcy5fYmFzZUluZGV4PTAsdGhpcy5fcGFydGlhbExpbmU9XCJcIix0aGlzLl9yb3dDb3VudD0wLHRoaXMuX3N0YXJ0PTAsdGhpcy5fbmV4dENodW5rPW51bGwsdGhpcy5pc0ZpcnN0Q2h1bms9ITAsdGhpcy5fY29tcGxldGVSZXN1bHRzPXtkYXRhOltdLGVycm9yczpbXSxtZXRhOnt9fSxmdW5jdGlvbihlKXt2YXIgdD13KGUpO3QuY2h1bmtTaXplPXBhcnNlSW50KHQuY2h1bmtTaXplKSxlLnN0ZXB8fGUuY2h1bmt8fCh0LmNodW5rU2l6ZT1udWxsKTt0aGlzLl9oYW5kbGU9bmV3IHIodCksKHRoaXMuX2hhbmRsZS5zdHJlYW1lcj10aGlzKS5fY29uZmlnPXR9LmNhbGwodGhpcyxlKSx0aGlzLnBhcnNlQ2h1bms9ZnVuY3Rpb24oZSx0KXtpZih0aGlzLmlzRmlyc3RDaHVuayYmSih0aGlzLl9jb25maWcuYmVmb3JlRmlyc3RDaHVuaykpe3ZhciByPXRoaXMuX2NvbmZpZy5iZWZvcmVGaXJzdENodW5rKGUpO3ZvaWQgMCE9PXImJihlPXIpfXRoaXMuaXNGaXJzdENodW5rPSExLHRoaXMuX2hhbHRlZD0hMTt2YXIgaT10aGlzLl9wYXJ0aWFsTGluZStlO3RoaXMuX3BhcnRpYWxMaW5lPVwiXCI7dmFyIG49dGhpcy5faGFuZGxlLnBhcnNlKGksdGhpcy5fYmFzZUluZGV4LCF0aGlzLl9maW5pc2hlZCk7aWYoIXRoaXMuX2hhbmRsZS5wYXVzZWQoKSYmIXRoaXMuX2hhbmRsZS5hYm9ydGVkKCkpe3ZhciBzPW4ubWV0YS5jdXJzb3I7dGhpcy5fZmluaXNoZWR8fCh0aGlzLl9wYXJ0aWFsTGluZT1pLnN1YnN0cmluZyhzLXRoaXMuX2Jhc2VJbmRleCksdGhpcy5fYmFzZUluZGV4PXMpLG4mJm4uZGF0YSYmKHRoaXMuX3Jvd0NvdW50Kz1uLmRhdGEubGVuZ3RoKTt2YXIgYT10aGlzLl9maW5pc2hlZHx8dGhpcy5fY29uZmlnLnByZXZpZXcmJnRoaXMuX3Jvd0NvdW50Pj10aGlzLl9jb25maWcucHJldmlldztpZihvKWYucG9zdE1lc3NhZ2Uoe3Jlc3VsdHM6bix3b3JrZXJJZDpiLldPUktFUl9JRCxmaW5pc2hlZDphfSk7ZWxzZSBpZihKKHRoaXMuX2NvbmZpZy5jaHVuaykmJiF0KXtpZih0aGlzLl9jb25maWcuY2h1bmsobix0aGlzLl9oYW5kbGUpLHRoaXMuX2hhbmRsZS5wYXVzZWQoKXx8dGhpcy5faGFuZGxlLmFib3J0ZWQoKSlyZXR1cm4gdm9pZCh0aGlzLl9oYWx0ZWQ9ITApO249dm9pZCAwLHRoaXMuX2NvbXBsZXRlUmVzdWx0cz12b2lkIDB9cmV0dXJuIHRoaXMuX2NvbmZpZy5zdGVwfHx0aGlzLl9jb25maWcuY2h1bmt8fCh0aGlzLl9jb21wbGV0ZVJlc3VsdHMuZGF0YT10aGlzLl9jb21wbGV0ZVJlc3VsdHMuZGF0YS5jb25jYXQobi5kYXRhKSx0aGlzLl9jb21wbGV0ZVJlc3VsdHMuZXJyb3JzPXRoaXMuX2NvbXBsZXRlUmVzdWx0cy5lcnJvcnMuY29uY2F0KG4uZXJyb3JzKSx0aGlzLl9jb21wbGV0ZVJlc3VsdHMubWV0YT1uLm1ldGEpLHRoaXMuX2NvbXBsZXRlZHx8IWF8fCFKKHRoaXMuX2NvbmZpZy5jb21wbGV0ZSl8fG4mJm4ubWV0YS5hYm9ydGVkfHwodGhpcy5fY29uZmlnLmNvbXBsZXRlKHRoaXMuX2NvbXBsZXRlUmVzdWx0cyx0aGlzLl9pbnB1dCksdGhpcy5fY29tcGxldGVkPSEwKSxhfHxuJiZuLm1ldGEucGF1c2VkfHx0aGlzLl9uZXh0Q2h1bmsoKSxufXRoaXMuX2hhbHRlZD0hMH0sdGhpcy5fc2VuZEVycm9yPWZ1bmN0aW9uKGUpe0oodGhpcy5fY29uZmlnLmVycm9yKT90aGlzLl9jb25maWcuZXJyb3IoZSk6byYmdGhpcy5fY29uZmlnLmVycm9yJiZmLnBvc3RNZXNzYWdlKHt3b3JrZXJJZDpiLldPUktFUl9JRCxlcnJvcjplLGZpbmlzaGVkOiExfSl9fWZ1bmN0aW9uIGwoZSl7dmFyIGk7KGU9ZXx8e30pLmNodW5rU2l6ZXx8KGUuY2h1bmtTaXplPWIuUmVtb3RlQ2h1bmtTaXplKSxoLmNhbGwodGhpcyxlKSx0aGlzLl9uZXh0Q2h1bms9bj9mdW5jdGlvbigpe3RoaXMuX3JlYWRDaHVuaygpLHRoaXMuX2NodW5rTG9hZGVkKCl9OmZ1bmN0aW9uKCl7dGhpcy5fcmVhZENodW5rKCl9LHRoaXMuc3RyZWFtPWZ1bmN0aW9uKGUpe3RoaXMuX2lucHV0PWUsdGhpcy5fbmV4dENodW5rKCl9LHRoaXMuX3JlYWRDaHVuaz1mdW5jdGlvbigpe2lmKHRoaXMuX2ZpbmlzaGVkKXRoaXMuX2NodW5rTG9hZGVkKCk7ZWxzZXtpZihpPW5ldyBYTUxIdHRwUmVxdWVzdCx0aGlzLl9jb25maWcud2l0aENyZWRlbnRpYWxzJiYoaS53aXRoQ3JlZGVudGlhbHM9dGhpcy5fY29uZmlnLndpdGhDcmVkZW50aWFscyksbnx8KGkub25sb2FkPXYodGhpcy5fY2h1bmtMb2FkZWQsdGhpcyksaS5vbmVycm9yPXYodGhpcy5fY2h1bmtFcnJvcix0aGlzKSksaS5vcGVuKHRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RCb2R5P1wiUE9TVFwiOlwiR0VUXCIsdGhpcy5faW5wdXQsIW4pLHRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RIZWFkZXJzKXt2YXIgZT10aGlzLl9jb25maWcuZG93bmxvYWRSZXF1ZXN0SGVhZGVycztmb3IodmFyIHQgaW4gZSlpLnNldFJlcXVlc3RIZWFkZXIodCxlW3RdKX1pZih0aGlzLl9jb25maWcuY2h1bmtTaXplKXt2YXIgcj10aGlzLl9zdGFydCt0aGlzLl9jb25maWcuY2h1bmtTaXplLTE7aS5zZXRSZXF1ZXN0SGVhZGVyKFwiUmFuZ2VcIixcImJ5dGVzPVwiK3RoaXMuX3N0YXJ0K1wiLVwiK3IpfXRyeXtpLnNlbmQodGhpcy5fY29uZmlnLmRvd25sb2FkUmVxdWVzdEJvZHkpfWNhdGNoKGUpe3RoaXMuX2NodW5rRXJyb3IoZS5tZXNzYWdlKX1uJiYwPT09aS5zdGF0dXMmJnRoaXMuX2NodW5rRXJyb3IoKX19LHRoaXMuX2NodW5rTG9hZGVkPWZ1bmN0aW9uKCl7ND09PWkucmVhZHlTdGF0ZSYmKGkuc3RhdHVzPDIwMHx8NDAwPD1pLnN0YXR1cz90aGlzLl9jaHVua0Vycm9yKCk6KHRoaXMuX3N0YXJ0Kz10aGlzLl9jb25maWcuY2h1bmtTaXplP3RoaXMuX2NvbmZpZy5jaHVua1NpemU6aS5yZXNwb25zZVRleHQubGVuZ3RoLHRoaXMuX2ZpbmlzaGVkPSF0aGlzLl9jb25maWcuY2h1bmtTaXplfHx0aGlzLl9zdGFydD49ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtUmFuZ2VcIik7aWYobnVsbD09PXQpcmV0dXJuLTE7cmV0dXJuIHBhcnNlSW50KHQuc3Vic3RyaW5nKHQubGFzdEluZGV4T2YoXCIvXCIpKzEpKX0oaSksdGhpcy5wYXJzZUNodW5rKGkucmVzcG9uc2VUZXh0KSkpfSx0aGlzLl9jaHVua0Vycm9yPWZ1bmN0aW9uKGUpe3ZhciB0PWkuc3RhdHVzVGV4dHx8ZTt0aGlzLl9zZW5kRXJyb3IobmV3IEVycm9yKHQpKX19ZnVuY3Rpb24gYyhlKXt2YXIgaSxuOyhlPWV8fHt9KS5jaHVua1NpemV8fChlLmNodW5rU2l6ZT1iLkxvY2FsQ2h1bmtTaXplKSxoLmNhbGwodGhpcyxlKTt2YXIgcz1cInVuZGVmaW5lZFwiIT10eXBlb2YgRmlsZVJlYWRlcjt0aGlzLnN0cmVhbT1mdW5jdGlvbihlKXt0aGlzLl9pbnB1dD1lLG49ZS5zbGljZXx8ZS53ZWJraXRTbGljZXx8ZS5tb3pTbGljZSxzPygoaT1uZXcgRmlsZVJlYWRlcikub25sb2FkPXYodGhpcy5fY2h1bmtMb2FkZWQsdGhpcyksaS5vbmVycm9yPXYodGhpcy5fY2h1bmtFcnJvcix0aGlzKSk6aT1uZXcgRmlsZVJlYWRlclN5bmMsdGhpcy5fbmV4dENodW5rKCl9LHRoaXMuX25leHRDaHVuaz1mdW5jdGlvbigpe3RoaXMuX2ZpbmlzaGVkfHx0aGlzLl9jb25maWcucHJldmlldyYmISh0aGlzLl9yb3dDb3VudDx0aGlzLl9jb25maWcucHJldmlldyl8fHRoaXMuX3JlYWRDaHVuaygpfSx0aGlzLl9yZWFkQ2h1bms9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl9pbnB1dDtpZih0aGlzLl9jb25maWcuY2h1bmtTaXplKXt2YXIgdD1NYXRoLm1pbih0aGlzLl9zdGFydCt0aGlzLl9jb25maWcuY2h1bmtTaXplLHRoaXMuX2lucHV0LnNpemUpO2U9bi5jYWxsKGUsdGhpcy5fc3RhcnQsdCl9dmFyIHI9aS5yZWFkQXNUZXh0KGUsdGhpcy5fY29uZmlnLmVuY29kaW5nKTtzfHx0aGlzLl9jaHVua0xvYWRlZCh7dGFyZ2V0OntyZXN1bHQ6cn19KX0sdGhpcy5fY2h1bmtMb2FkZWQ9ZnVuY3Rpb24oZSl7dGhpcy5fc3RhcnQrPXRoaXMuX2NvbmZpZy5jaHVua1NpemUsdGhpcy5fZmluaXNoZWQ9IXRoaXMuX2NvbmZpZy5jaHVua1NpemV8fHRoaXMuX3N0YXJ0Pj10aGlzLl9pbnB1dC5zaXplLHRoaXMucGFyc2VDaHVuayhlLnRhcmdldC5yZXN1bHQpfSx0aGlzLl9jaHVua0Vycm9yPWZ1bmN0aW9uKCl7dGhpcy5fc2VuZEVycm9yKGkuZXJyb3IpfX1mdW5jdGlvbiBwKGUpe3ZhciByO2guY2FsbCh0aGlzLGU9ZXx8e30pLHRoaXMuc3RyZWFtPWZ1bmN0aW9uKGUpe3JldHVybiByPWUsdGhpcy5fbmV4dENodW5rKCl9LHRoaXMuX25leHRDaHVuaz1mdW5jdGlvbigpe2lmKCF0aGlzLl9maW5pc2hlZCl7dmFyIGUsdD10aGlzLl9jb25maWcuY2h1bmtTaXplO3JldHVybiB0PyhlPXIuc3Vic3RyaW5nKDAsdCkscj1yLnN1YnN0cmluZyh0KSk6KGU9cixyPVwiXCIpLHRoaXMuX2ZpbmlzaGVkPSFyLHRoaXMucGFyc2VDaHVuayhlKX19fWZ1bmN0aW9uIGcoZSl7aC5jYWxsKHRoaXMsZT1lfHx7fSk7dmFyIHQ9W10scj0hMCxpPSExO3RoaXMucGF1c2U9ZnVuY3Rpb24oKXtoLnByb3RvdHlwZS5wYXVzZS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5faW5wdXQucGF1c2UoKX0sdGhpcy5yZXN1bWU9ZnVuY3Rpb24oKXtoLnByb3RvdHlwZS5yZXN1bWUuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuX2lucHV0LnJlc3VtZSgpfSx0aGlzLnN0cmVhbT1mdW5jdGlvbihlKXt0aGlzLl9pbnB1dD1lLHRoaXMuX2lucHV0Lm9uKFwiZGF0YVwiLHRoaXMuX3N0cmVhbURhdGEpLHRoaXMuX2lucHV0Lm9uKFwiZW5kXCIsdGhpcy5fc3RyZWFtRW5kKSx0aGlzLl9pbnB1dC5vbihcImVycm9yXCIsdGhpcy5fc3RyZWFtRXJyb3IpfSx0aGlzLl9jaGVja0lzRmluaXNoZWQ9ZnVuY3Rpb24oKXtpJiYxPT09dC5sZW5ndGgmJih0aGlzLl9maW5pc2hlZD0hMCl9LHRoaXMuX25leHRDaHVuaz1mdW5jdGlvbigpe3RoaXMuX2NoZWNrSXNGaW5pc2hlZCgpLHQubGVuZ3RoP3RoaXMucGFyc2VDaHVuayh0LnNoaWZ0KCkpOnI9ITB9LHRoaXMuX3N0cmVhbURhdGE9dihmdW5jdGlvbihlKXt0cnl7dC5wdXNoKFwic3RyaW5nXCI9PXR5cGVvZiBlP2U6ZS50b1N0cmluZyh0aGlzLl9jb25maWcuZW5jb2RpbmcpKSxyJiYocj0hMSx0aGlzLl9jaGVja0lzRmluaXNoZWQoKSx0aGlzLnBhcnNlQ2h1bmsodC5zaGlmdCgpKSl9Y2F0Y2goZSl7dGhpcy5fc3RyZWFtRXJyb3IoZSl9fSx0aGlzKSx0aGlzLl9zdHJlYW1FcnJvcj12KGZ1bmN0aW9uKGUpe3RoaXMuX3N0cmVhbUNsZWFuVXAoKSx0aGlzLl9zZW5kRXJyb3IoZSl9LHRoaXMpLHRoaXMuX3N0cmVhbUVuZD12KGZ1bmN0aW9uKCl7dGhpcy5fc3RyZWFtQ2xlYW5VcCgpLGk9ITAsdGhpcy5fc3RyZWFtRGF0YShcIlwiKX0sdGhpcyksdGhpcy5fc3RyZWFtQ2xlYW5VcD12KGZ1bmN0aW9uKCl7dGhpcy5faW5wdXQucmVtb3ZlTGlzdGVuZXIoXCJkYXRhXCIsdGhpcy5fc3RyZWFtRGF0YSksdGhpcy5faW5wdXQucmVtb3ZlTGlzdGVuZXIoXCJlbmRcIix0aGlzLl9zdHJlYW1FbmQpLHRoaXMuX2lucHV0LnJlbW92ZUxpc3RlbmVyKFwiZXJyb3JcIix0aGlzLl9zdHJlYW1FcnJvcil9LHRoaXMpfWZ1bmN0aW9uIHIobSl7dmFyIGEsbyx1LGk9TWF0aC5wb3coMiw1Myksbj0taSxzPS9eXFxzKi0/KFxcZCtcXC4/fFxcLlxcZCt8XFxkK1xcLlxcZCspKFtlRV1bLStdP1xcZCspP1xccyokLyxoPS9eKChcXGR7NH0tWzAxXVxcZC1bMC0zXVxcZFRbMC0yXVxcZDpbMC01XVxcZDpbMC01XVxcZFxcLlxcZCsoWystXVswLTJdXFxkOlswLTVdXFxkfFopKXwoXFxkezR9LVswMV1cXGQtWzAtM11cXGRUWzAtMl1cXGQ6WzAtNV1cXGQ6WzAtNV1cXGQoWystXVswLTJdXFxkOlswLTVdXFxkfFopKXwoXFxkezR9LVswMV1cXGQtWzAtM11cXGRUWzAtMl1cXGQ6WzAtNV1cXGQoWystXVswLTJdXFxkOlswLTVdXFxkfFopKSkkLyx0PXRoaXMscj0wLGY9MCxkPSExLGU9ITEsbD1bXSxjPXtkYXRhOltdLGVycm9yczpbXSxtZXRhOnt9fTtpZihKKG0uc3RlcCkpe3ZhciBwPW0uc3RlcDttLnN0ZXA9ZnVuY3Rpb24oZSl7aWYoYz1lLF8oKSlnKCk7ZWxzZXtpZihnKCksMD09PWMuZGF0YS5sZW5ndGgpcmV0dXJuO3IrPWUuZGF0YS5sZW5ndGgsbS5wcmV2aWV3JiZyPm0ucHJldmlldz9vLmFib3J0KCk6KGMuZGF0YT1jLmRhdGFbMF0scChjLHQpKX19fWZ1bmN0aW9uIHkoZSl7cmV0dXJuXCJncmVlZHlcIj09PW0uc2tpcEVtcHR5TGluZXM/XCJcIj09PWUuam9pbihcIlwiKS50cmltKCk6MT09PWUubGVuZ3RoJiYwPT09ZVswXS5sZW5ndGh9ZnVuY3Rpb24gZygpe3JldHVybiBjJiZ1JiYoayhcIkRlbGltaXRlclwiLFwiVW5kZXRlY3RhYmxlRGVsaW1pdGVyXCIsXCJVbmFibGUgdG8gYXV0by1kZXRlY3QgZGVsaW1pdGluZyBjaGFyYWN0ZXI7IGRlZmF1bHRlZCB0byAnXCIrYi5EZWZhdWx0RGVsaW1pdGVyK1wiJ1wiKSx1PSExKSxtLnNraXBFbXB0eUxpbmVzJiYoYy5kYXRhPWMuZGF0YS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIXkoZSl9KSksXygpJiZmdW5jdGlvbigpe2lmKCFjKXJldHVybjtmdW5jdGlvbiBlKGUsdCl7SihtLnRyYW5zZm9ybUhlYWRlcikmJihlPW0udHJhbnNmb3JtSGVhZGVyKGUsdCkpLGwucHVzaChlKX1pZihBcnJheS5pc0FycmF5KGMuZGF0YVswXSkpe2Zvcih2YXIgdD0wO18oKSYmdDxjLmRhdGEubGVuZ3RoO3QrKyljLmRhdGFbdF0uZm9yRWFjaChlKTtjLmRhdGEuc3BsaWNlKDAsMSl9ZWxzZSBjLmRhdGEuZm9yRWFjaChlKX0oKSxmdW5jdGlvbigpe2lmKCFjfHwhbS5oZWFkZXImJiFtLmR5bmFtaWNUeXBpbmcmJiFtLnRyYW5zZm9ybSlyZXR1cm4gYztmdW5jdGlvbiBlKGUsdCl7dmFyIHIsaT1tLmhlYWRlcj97fTpbXTtmb3Iocj0wO3I8ZS5sZW5ndGg7cisrKXt2YXIgbj1yLHM9ZVtyXTttLmhlYWRlciYmKG49cj49bC5sZW5ndGg/XCJfX3BhcnNlZF9leHRyYVwiOmxbcl0pLG0udHJhbnNmb3JtJiYocz1tLnRyYW5zZm9ybShzLG4pKSxzPXYobixzKSxcIl9fcGFyc2VkX2V4dHJhXCI9PT1uPyhpW25dPWlbbl18fFtdLGlbbl0ucHVzaChzKSk6aVtuXT1zfXJldHVybiBtLmhlYWRlciYmKHI+bC5sZW5ndGg/ayhcIkZpZWxkTWlzbWF0Y2hcIixcIlRvb01hbnlGaWVsZHNcIixcIlRvbyBtYW55IGZpZWxkczogZXhwZWN0ZWQgXCIrbC5sZW5ndGgrXCIgZmllbGRzIGJ1dCBwYXJzZWQgXCIrcixmK3QpOnI8bC5sZW5ndGgmJmsoXCJGaWVsZE1pc21hdGNoXCIsXCJUb29GZXdGaWVsZHNcIixcIlRvbyBmZXcgZmllbGRzOiBleHBlY3RlZCBcIitsLmxlbmd0aCtcIiBmaWVsZHMgYnV0IHBhcnNlZCBcIityLGYrdCkpLGl9dmFyIHQ9MTshYy5kYXRhLmxlbmd0aHx8QXJyYXkuaXNBcnJheShjLmRhdGFbMF0pPyhjLmRhdGE9Yy5kYXRhLm1hcChlKSx0PWMuZGF0YS5sZW5ndGgpOmMuZGF0YT1lKGMuZGF0YSwwKTttLmhlYWRlciYmYy5tZXRhJiYoYy5tZXRhLmZpZWxkcz1sKTtyZXR1cm4gZis9dCxjfSgpfWZ1bmN0aW9uIF8oKXtyZXR1cm4gbS5oZWFkZXImJjA9PT1sLmxlbmd0aH1mdW5jdGlvbiB2KGUsdCl7cmV0dXJuIHI9ZSxtLmR5bmFtaWNUeXBpbmdGdW5jdGlvbiYmdm9pZCAwPT09bS5keW5hbWljVHlwaW5nW3JdJiYobS5keW5hbWljVHlwaW5nW3JdPW0uZHluYW1pY1R5cGluZ0Z1bmN0aW9uKHIpKSwhMD09PShtLmR5bmFtaWNUeXBpbmdbcl18fG0uZHluYW1pY1R5cGluZyk/XCJ0cnVlXCI9PT10fHxcIlRSVUVcIj09PXR8fFwiZmFsc2VcIiE9PXQmJlwiRkFMU0VcIiE9PXQmJihmdW5jdGlvbihlKXtpZihzLnRlc3QoZSkpe3ZhciB0PXBhcnNlRmxvYXQoZSk7aWYobjx0JiZ0PGkpcmV0dXJuITB9cmV0dXJuITF9KHQpP3BhcnNlRmxvYXQodCk6aC50ZXN0KHQpP25ldyBEYXRlKHQpOlwiXCI9PT10P251bGw6dCk6dDt2YXIgcn1mdW5jdGlvbiBrKGUsdCxyLGkpe3ZhciBuPXt0eXBlOmUsY29kZTp0LG1lc3NhZ2U6cn07dm9pZCAwIT09aSYmKG4ucm93PWkpLGMuZXJyb3JzLnB1c2gobil9dGhpcy5wYXJzZT1mdW5jdGlvbihlLHQscil7dmFyIGk9bS5xdW90ZUNoYXJ8fCdcIic7aWYobS5uZXdsaW5lfHwobS5uZXdsaW5lPWZ1bmN0aW9uKGUsdCl7ZT1lLnN1YnN0cmluZygwLDEwNDg1NzYpO3ZhciByPW5ldyBSZWdFeHAoUSh0KStcIihbXl0qPylcIitRKHQpLFwiZ21cIiksaT0oZT1lLnJlcGxhY2UocixcIlwiKSkuc3BsaXQoXCJcXHJcIiksbj1lLnNwbGl0KFwiXFxuXCIpLHM9MTxuLmxlbmd0aCYmblswXS5sZW5ndGg8aVswXS5sZW5ndGg7aWYoMT09PWkubGVuZ3RofHxzKXJldHVyblwiXFxuXCI7Zm9yKHZhciBhPTAsbz0wO288aS5sZW5ndGg7bysrKVwiXFxuXCI9PT1pW29dWzBdJiZhKys7cmV0dXJuIGE+PWkubGVuZ3RoLzI/XCJcXHJcXG5cIjpcIlxcclwifShlLGkpKSx1PSExLG0uZGVsaW1pdGVyKUoobS5kZWxpbWl0ZXIpJiYobS5kZWxpbWl0ZXI9bS5kZWxpbWl0ZXIoZSksYy5tZXRhLmRlbGltaXRlcj1tLmRlbGltaXRlcik7ZWxzZXt2YXIgbj1mdW5jdGlvbihlLHQscixpLG4pe3ZhciBzLGEsbyx1O249bnx8W1wiLFwiLFwiXFx0XCIsXCJ8XCIsXCI7XCIsYi5SRUNPUkRfU0VQLGIuVU5JVF9TRVBdO2Zvcih2YXIgaD0wO2g8bi5sZW5ndGg7aCsrKXt2YXIgZj1uW2hdLGQ9MCxsPTAsYz0wO289dm9pZCAwO2Zvcih2YXIgcD1uZXcgRSh7Y29tbWVudHM6aSxkZWxpbWl0ZXI6ZixuZXdsaW5lOnQscHJldmlldzoxMH0pLnBhcnNlKGUpLGc9MDtnPHAuZGF0YS5sZW5ndGg7ZysrKWlmKHImJnkocC5kYXRhW2ddKSljKys7ZWxzZXt2YXIgXz1wLmRhdGFbZ10ubGVuZ3RoO2wrPV8sdm9pZCAwIT09bz8wPF8mJihkKz1NYXRoLmFicyhfLW8pLG89Xyk6bz1ffTA8cC5kYXRhLmxlbmd0aCYmKGwvPXAuZGF0YS5sZW5ndGgtYyksKHZvaWQgMD09PWF8fGQ8PWEpJiYodm9pZCAwPT09dXx8dTxsKSYmMS45OTxsJiYoYT1kLHM9Zix1PWwpfXJldHVybntzdWNjZXNzZnVsOiEhKG0uZGVsaW1pdGVyPXMpLGJlc3REZWxpbWl0ZXI6c319KGUsbS5uZXdsaW5lLG0uc2tpcEVtcHR5TGluZXMsbS5jb21tZW50cyxtLmRlbGltaXRlcnNUb0d1ZXNzKTtuLnN1Y2Nlc3NmdWw/bS5kZWxpbWl0ZXI9bi5iZXN0RGVsaW1pdGVyOih1PSEwLG0uZGVsaW1pdGVyPWIuRGVmYXVsdERlbGltaXRlciksYy5tZXRhLmRlbGltaXRlcj1tLmRlbGltaXRlcn12YXIgcz13KG0pO3JldHVybiBtLnByZXZpZXcmJm0uaGVhZGVyJiZzLnByZXZpZXcrKyxhPWUsbz1uZXcgRShzKSxjPW8ucGFyc2UoYSx0LHIpLGcoKSxkP3ttZXRhOntwYXVzZWQ6ITB9fTpjfHx7bWV0YTp7cGF1c2VkOiExfX19LHRoaXMucGF1c2VkPWZ1bmN0aW9uKCl7cmV0dXJuIGR9LHRoaXMucGF1c2U9ZnVuY3Rpb24oKXtkPSEwLG8uYWJvcnQoKSxhPUoobS5jaHVuayk/XCJcIjphLnN1YnN0cmluZyhvLmdldENoYXJJbmRleCgpKX0sdGhpcy5yZXN1bWU9ZnVuY3Rpb24oKXt0LnN0cmVhbWVyLl9oYWx0ZWQ/KGQ9ITEsdC5zdHJlYW1lci5wYXJzZUNodW5rKGEsITApKTpzZXRUaW1lb3V0KHQucmVzdW1lLDMpfSx0aGlzLmFib3J0ZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gZX0sdGhpcy5hYm9ydD1mdW5jdGlvbigpe2U9ITAsby5hYm9ydCgpLGMubWV0YS5hYm9ydGVkPSEwLEoobS5jb21wbGV0ZSkmJm0uY29tcGxldGUoYyksYT1cIlwifX1mdW5jdGlvbiBRKGUpe3JldHVybiBlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLFwiXFxcXCQmXCIpfWZ1bmN0aW9uIEUoail7dmFyIHosTT0oaj1qfHx7fSkuZGVsaW1pdGVyLFA9ai5uZXdsaW5lLFU9ai5jb21tZW50cyxxPWouc3RlcCxOPWoucHJldmlldyxCPWouZmFzdE1vZGUsSz16PXZvaWQgMD09PWoucXVvdGVDaGFyfHxudWxsPT09ai5xdW90ZUNoYXI/J1wiJzpqLnF1b3RlQ2hhcjtpZih2b2lkIDAhPT1qLmVzY2FwZUNoYXImJihLPWouZXNjYXBlQ2hhciksKFwic3RyaW5nXCIhPXR5cGVvZiBNfHwtMTxiLkJBRF9ERUxJTUlURVJTLmluZGV4T2YoTSkpJiYoTT1cIixcIiksVT09PU0pdGhyb3cgbmV3IEVycm9yKFwiQ29tbWVudCBjaGFyYWN0ZXIgc2FtZSBhcyBkZWxpbWl0ZXJcIik7ITA9PT1VP1U9XCIjXCI6KFwic3RyaW5nXCIhPXR5cGVvZiBVfHwtMTxiLkJBRF9ERUxJTUlURVJTLmluZGV4T2YoVSkpJiYoVT0hMSksXCJcXG5cIiE9PVAmJlwiXFxyXCIhPT1QJiZcIlxcclxcblwiIT09UCYmKFA9XCJcXG5cIik7dmFyIFc9MCxIPSExO3RoaXMucGFyc2U9ZnVuY3Rpb24oaSx0LHIpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBpKXRocm93IG5ldyBFcnJvcihcIklucHV0IG11c3QgYmUgYSBzdHJpbmdcIik7dmFyIG49aS5sZW5ndGgsZT1NLmxlbmd0aCxzPVAubGVuZ3RoLGE9VS5sZW5ndGgsbz1KKHEpLHU9W10saD1bXSxmPVtdLGQ9Vz0wO2lmKCFpKXJldHVybiBMKCk7aWYoai5oZWFkZXImJiF0KXt2YXIgbD1pLnNwbGl0KFApWzBdLnNwbGl0KE0pLGM9W10scD17fSxnPSExO2Zvcih2YXIgXyBpbiBsKXt2YXIgbT1sW19dO0ooai50cmFuc2Zvcm1IZWFkZXIpJiYobT1qLnRyYW5zZm9ybUhlYWRlcihtLF8pKTt2YXIgeT1tLHY9cFttXXx8MDtmb3IoMDx2JiYoZz0hMCx5PW0rXCJfXCIrdikscFttXT12KzE7Yy5pbmNsdWRlcyh5KTspeT15K1wiX1wiK3Y7Yy5wdXNoKHkpfWlmKGcpe3ZhciBrPWkuc3BsaXQoUCk7a1swXT1jLmpvaW4oTSksaT1rLmpvaW4oUCl9fWlmKEJ8fCExIT09QiYmLTE9PT1pLmluZGV4T2Yoeikpe2Zvcih2YXIgYj1pLnNwbGl0KFApLEU9MDtFPGIubGVuZ3RoO0UrKyl7aWYoZj1iW0VdLFcrPWYubGVuZ3RoLEUhPT1iLmxlbmd0aC0xKVcrPVAubGVuZ3RoO2Vsc2UgaWYocilyZXR1cm4gTCgpO2lmKCFVfHxmLnN1YnN0cmluZygwLGEpIT09VSl7aWYobyl7aWYodT1bXSxJKGYuc3BsaXQoTSkpLEYoKSxIKXJldHVybiBMKCl9ZWxzZSBJKGYuc3BsaXQoTSkpO2lmKE4mJk48PUUpcmV0dXJuIHU9dS5zbGljZSgwLE4pLEwoITApfX1yZXR1cm4gTCgpfWZvcih2YXIgdz1pLmluZGV4T2YoTSxXKSxSPWkuaW5kZXhPZihQLFcpLEM9bmV3IFJlZ0V4cChRKEspK1EoeiksXCJnXCIpLFM9aS5pbmRleE9mKHosVyk7OylpZihpW1ddIT09eilpZihVJiYwPT09Zi5sZW5ndGgmJmkuc3Vic3RyaW5nKFcsVythKT09PVUpe2lmKC0xPT09UilyZXR1cm4gTCgpO1c9UitzLFI9aS5pbmRleE9mKFAsVyksdz1pLmluZGV4T2YoTSxXKX1lbHNlIGlmKC0xIT09dyYmKHc8Unx8LTE9PT1SKSlmLnB1c2goaS5zdWJzdHJpbmcoVyx3KSksVz13K2Usdz1pLmluZGV4T2YoTSxXKTtlbHNle2lmKC0xPT09UilicmVhaztpZihmLnB1c2goaS5zdWJzdHJpbmcoVyxSKSksRChSK3MpLG8mJihGKCksSCkpcmV0dXJuIEwoKTtpZihOJiZ1Lmxlbmd0aD49TilyZXR1cm4gTCghMCl9ZWxzZSBmb3IoUz1XLFcrKzs7KXtpZigtMT09PShTPWkuaW5kZXhPZih6LFMrMSkpKXJldHVybiByfHxoLnB1c2goe3R5cGU6XCJRdW90ZXNcIixjb2RlOlwiTWlzc2luZ1F1b3Rlc1wiLG1lc3NhZ2U6XCJRdW90ZWQgZmllbGQgdW50ZXJtaW5hdGVkXCIscm93OnUubGVuZ3RoLGluZGV4Old9KSxUKCk7aWYoUz09PW4tMSlyZXR1cm4gVChpLnN1YnN0cmluZyhXLFMpLnJlcGxhY2UoQyx6KSk7aWYoeiE9PUt8fGlbUysxXSE9PUspe2lmKHo9PT1LfHwwPT09U3x8aVtTLTFdIT09Syl7LTEhPT13JiZ3PFMrMSYmKHc9aS5pbmRleE9mKE0sUysxKSksLTEhPT1SJiZSPFMrMSYmKFI9aS5pbmRleE9mKFAsUysxKSk7dmFyIE89QSgtMT09PVI/dzpNYXRoLm1pbih3LFIpKTtpZihpLnN1YnN0cihTKzErTyxlKT09PU0pe2YucHVzaChpLnN1YnN0cmluZyhXLFMpLnJlcGxhY2UoQyx6KSksaVtXPVMrMStPK2VdIT09eiYmKFM9aS5pbmRleE9mKHosVykpLHc9aS5pbmRleE9mKE0sVyksUj1pLmluZGV4T2YoUCxXKTticmVha312YXIgeD1BKFIpO2lmKGkuc3Vic3RyaW5nKFMrMSt4LFMrMSt4K3MpPT09UCl7aWYoZi5wdXNoKGkuc3Vic3RyaW5nKFcsUykucmVwbGFjZShDLHopKSxEKFMrMSt4K3MpLHc9aS5pbmRleE9mKE0sVyksUz1pLmluZGV4T2YoeixXKSxvJiYoRigpLEgpKXJldHVybiBMKCk7aWYoTiYmdS5sZW5ndGg+PU4pcmV0dXJuIEwoITApO2JyZWFrfWgucHVzaCh7dHlwZTpcIlF1b3Rlc1wiLGNvZGU6XCJJbnZhbGlkUXVvdGVzXCIsbWVzc2FnZTpcIlRyYWlsaW5nIHF1b3RlIG9uIHF1b3RlZCBmaWVsZCBpcyBtYWxmb3JtZWRcIixyb3c6dS5sZW5ndGgsaW5kZXg6V30pLFMrK319ZWxzZSBTKyt9cmV0dXJuIFQoKTtmdW5jdGlvbiBJKGUpe3UucHVzaChlKSxkPVd9ZnVuY3Rpb24gQShlKXt2YXIgdD0wO2lmKC0xIT09ZSl7dmFyIHI9aS5zdWJzdHJpbmcoUysxLGUpO3ImJlwiXCI9PT1yLnRyaW0oKSYmKHQ9ci5sZW5ndGgpfXJldHVybiB0fWZ1bmN0aW9uIFQoZSl7cmV0dXJuIHJ8fCh2b2lkIDA9PT1lJiYoZT1pLnN1YnN0cmluZyhXKSksZi5wdXNoKGUpLFc9bixJKGYpLG8mJkYoKSksTCgpfWZ1bmN0aW9uIEQoZSl7Vz1lLEkoZiksZj1bXSxSPWkuaW5kZXhPZihQLFcpfWZ1bmN0aW9uIEwoZSl7cmV0dXJue2RhdGE6dSxlcnJvcnM6aCxtZXRhOntkZWxpbWl0ZXI6TSxsaW5lYnJlYWs6UCxhYm9ydGVkOkgsdHJ1bmNhdGVkOiEhZSxjdXJzb3I6ZCsodHx8MCl9fX1mdW5jdGlvbiBGKCl7cShMKCkpLHU9W10saD1bXX19LHRoaXMuYWJvcnQ9ZnVuY3Rpb24oKXtIPSEwfSx0aGlzLmdldENoYXJJbmRleD1mdW5jdGlvbigpe3JldHVybiBXfX1mdW5jdGlvbiBfKGUpe3ZhciB0PWUuZGF0YSxyPWFbdC53b3JrZXJJZF0saT0hMTtpZih0LmVycm9yKXIudXNlckVycm9yKHQuZXJyb3IsdC5maWxlKTtlbHNlIGlmKHQucmVzdWx0cyYmdC5yZXN1bHRzLmRhdGEpe3ZhciBuPXthYm9ydDpmdW5jdGlvbigpe2k9ITAsbSh0LndvcmtlcklkLHtkYXRhOltdLGVycm9yczpbXSxtZXRhOnthYm9ydGVkOiEwfX0pfSxwYXVzZTp5LHJlc3VtZTp5fTtpZihKKHIudXNlclN0ZXApKXtmb3IodmFyIHM9MDtzPHQucmVzdWx0cy5kYXRhLmxlbmd0aCYmKHIudXNlclN0ZXAoe2RhdGE6dC5yZXN1bHRzLmRhdGFbc10sZXJyb3JzOnQucmVzdWx0cy5lcnJvcnMsbWV0YTp0LnJlc3VsdHMubWV0YX0sbiksIWkpO3MrKyk7ZGVsZXRlIHQucmVzdWx0c31lbHNlIEooci51c2VyQ2h1bmspJiYoci51c2VyQ2h1bmsodC5yZXN1bHRzLG4sdC5maWxlKSxkZWxldGUgdC5yZXN1bHRzKX10LmZpbmlzaGVkJiYhaSYmbSh0LndvcmtlcklkLHQucmVzdWx0cyl9ZnVuY3Rpb24gbShlLHQpe3ZhciByPWFbZV07SihyLnVzZXJDb21wbGV0ZSkmJnIudXNlckNvbXBsZXRlKHQpLHIudGVybWluYXRlKCksZGVsZXRlIGFbZV19ZnVuY3Rpb24geSgpe3Rocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZC5cIil9ZnVuY3Rpb24gdyhlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgZXx8bnVsbD09PWUpcmV0dXJuIGU7dmFyIHQ9QXJyYXkuaXNBcnJheShlKT9bXTp7fTtmb3IodmFyIHIgaW4gZSl0W3JdPXcoZVtyXSk7cmV0dXJuIHR9ZnVuY3Rpb24gdihlLHQpe3JldHVybiBmdW5jdGlvbigpe2UuYXBwbHkodCxhcmd1bWVudHMpfX1mdW5jdGlvbiBKKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV9cmV0dXJuIG8mJihmLm9ubWVzc2FnZT1mdW5jdGlvbihlKXt2YXIgdD1lLmRhdGE7dm9pZCAwPT09Yi5XT1JLRVJfSUQmJnQmJihiLldPUktFUl9JRD10LndvcmtlcklkKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdC5pbnB1dClmLnBvc3RNZXNzYWdlKHt3b3JrZXJJZDpiLldPUktFUl9JRCxyZXN1bHRzOmIucGFyc2UodC5pbnB1dCx0LmNvbmZpZyksZmluaXNoZWQ6ITB9KTtlbHNlIGlmKGYuRmlsZSYmdC5pbnB1dCBpbnN0YW5jZW9mIEZpbGV8fHQuaW5wdXQgaW5zdGFuY2VvZiBPYmplY3Qpe3ZhciByPWIucGFyc2UodC5pbnB1dCx0LmNvbmZpZyk7ciYmZi5wb3N0TWVzc2FnZSh7d29ya2VySWQ6Yi5XT1JLRVJfSUQscmVzdWx0czpyLGZpbmlzaGVkOiEwfSl9fSksKGwucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoaC5wcm90b3R5cGUpKS5jb25zdHJ1Y3Rvcj1sLChjLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGgucHJvdG90eXBlKSkuY29uc3RydWN0b3I9YywocC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShwLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yPXAsKGcucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoaC5wcm90b3R5cGUpKS5jb25zdHJ1Y3Rvcj1nLGJ9KTsiLCIvLyBUT0RPIGZpeCBxdWVzdGlvbiBkYXRhIGZvciBtb2R1bGVcclxuLy8gY29uc2lkZXIgZ3JvdXBzIGJ5IHJvdyBpbnN0ZWFkIG9mIGNvbHVtblxyXG5pbXBvcnQgKiBhcyBwbGF5ZXJzIGZyb20gXCIuL3BsYXllcnNcIjtcclxuXHJcbmNvbnN0IGdyaWRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNncmlkV3JhcHBlclwiKTtcclxuXHJcbmZ1bmN0aW9uIGdldFJhbmRvbU51bWJlckluUmFuZ2UobWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uR3JpZChxdWVzdGlvbk9iamVjdCkge1xyXG4gIGNvbnN0IGNhdGVnb3J5Q291bnQgPSBPYmplY3Qua2V5cyhxdWVzdGlvbk9iamVjdCkubGVuZ3RoO1xyXG4gIGNvbnN0IHF1ZXN0aW9uQ291bnQgPSBbXTtcclxuICBjb25zdCByYW5kb21DYXRlZ29yeSA9IFtdO1xyXG4gIGNvbnN0IHJhbmRvbVF1ZXN0aW9uID0gW107XHJcbiAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZXMgPSBbXTtcclxuXHJcbiAgLy8gc2V0IGdyaWQgY29sdW1uIGNvdW50IGVxdWFsIHRvIG51bWJlciBvZiBxdWVzdGlvbiBjYXRlZ29yaWVzXHJcbiAgY29uc3QgZ3JpZFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyaWRXcmFwcGVyXCIpO1xyXG5cclxuICBncmlkV3JhcHBlci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGdyaWRXcmFwcGVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Y2F0ZWdvcnlDb3VudH0sMWZyKWA7XHJcblxyXG4gIC8vIGdlbmVyYXRlIHRvcGljIHRpbGVzXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBjYXRlZ29yeUNvdW50ICsgMTsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0aWxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjYXRlZ29yeURpdi5pZCA9IGBjYXRlZ29yeSR7aX1gO1xyXG4gICAgY2F0ZWdvcnlEaXYuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIpO1xyXG4gICAgdGlsZURpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb25Ub3BpY1wiKTtcclxuICAgIHRpbGVEaXYudGV4dENvbnRlbnQgPSBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF0udG9waWM7XHJcbiAgICBjYXRlZ29yeURpdi5hcHBlbmQodGlsZURpdik7XHJcblxyXG4gICAgZ3JpZEFyZWEuYXBwZW5kKGNhdGVnb3J5RGl2KTtcclxuICB9XHJcblxyXG4gIGxldCB0b3RhbFF1ZXN0aW9uQ291bnQgPSAwO1xyXG4gIC8vIGdlbmVyYXRlIHF1ZXN0aW9uIGNvdW50cyBmb3IgZWFjaCBjYXRlZ29yeVxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgY2F0ZWdvcnlDb3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgLy8gLTEgZnJvbSBsZW5ndGggdG8gYWNjb3VudCBmb3IgJ3RvcGljJyBrZXlcclxuICAgIGNvbnN0IGNhdGVnb3J5TGVuZ3RoID1cclxuICAgICAgT2JqZWN0LmtleXMocXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdKS5sZW5ndGggLSAxO1xyXG4gICAgcXVlc3Rpb25Db3VudC5wdXNoKGNhdGVnb3J5TGVuZ3RoKTtcclxuICAgIHRvdGFsUXVlc3Rpb25Db3VudCArPSBjYXRlZ29yeUxlbmd0aDtcclxuICB9XHJcblxyXG4gIGNvbnN0IG51bWJlcm9mUmFuZG9tRG91YmxlcyA9IE1hdGguZmxvb3IodG90YWxRdWVzdGlvbkNvdW50IC8gMTIpO1xyXG5cclxuICBjb25zdCBkaW1tRG91YmxlQ2hlY2sgPSBbXTtcclxuICBjb25zb2xlLmxvZyhjYXRlZ29yeUNvdW50LCBxdWVzdGlvbkNvdW50KTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IGNhdGVnb3J5Q291bnQgKyAxOyBpICs9IDEpIHtcclxuICAgIGZvciAobGV0IGogPSAxOyBqIDwgcXVlc3Rpb25Db3VudFtpIC0gMV0gKyAxOyBqICs9IDEpIHtcclxuICAgICAgLy8gcXVlc3Rpb25Db3VudCBpcyBhIHN0YW5kYXJkIDAtaW5kZXggYXJyYXlcclxuICAgICAgLy8gVE9ETyBiZXR0ZXIgbmFtZVxyXG4gICAgICBkaW1tRG91YmxlQ2hlY2sucHVzaChcclxuICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF1bYHF1ZXN0aW9uJHtqfWBdLmRvdWJsZSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc29sZS5sb2coZGltbURvdWJsZUNoZWNrKTtcclxuICAvLyBjaGVjayBmb3IgcXVlc3Rpb24gc2V0cyB0aGF0IGRvbid0IGhhdmUgZG91YmxlIHByb3BlcnR5IGRlY2xhcmVkXHJcbiAgaWYgKCFkaW1tRG91YmxlQ2hlY2suaW5jbHVkZXModHJ1ZSkpIHtcclxuICAgIC8vIFRPRE8gZml4IHBvc3NpYmlsaXR5IG9mIHJlcGVhdHNcclxuICAgIC8vIGZpeCBib2FyZCBkb3VibGUgYXNzaWdubWVudCB3aXRoIGZvciBsb29wXHJcbiAgICBmb3IgKGxldCByID0gMDsgciA8IG51bWJlcm9mUmFuZG9tRG91YmxlczsgciArPSAxKSB7XHJcbiAgICAgIGxldCBnZXRSYW5kb21DYXRlZ29yeSA9IGdldFJhbmRvbU51bWJlckluUmFuZ2UoMSwgY2F0ZWdvcnlDb3VudCk7XHJcbiAgICAgIGxldCBnZXRSYW5kb21RdWVzdGlvbkluQ2F0ZWdvcnkgPSBnZXRSYW5kb21OdW1iZXJJblJhbmdlKFxyXG4gICAgICAgIDEsXHJcbiAgICAgICAgcXVlc3Rpb25Db3VudFtnZXRSYW5kb21DYXRlZ29yeSAtIDFdLFxyXG4gICAgICApO1xyXG4gICAgICBsZXQgY29vcmRpbmF0ZVBhaXIgPSBbZ2V0UmFuZG9tQ2F0ZWdvcnksIGdldFJhbmRvbVF1ZXN0aW9uSW5DYXRlZ29yeV07XHJcblxyXG4gICAgICB3aGlsZSAocmFuZG9tQ29vcmRpbmF0ZXMuaW5jbHVkZXMoY29vcmRpbmF0ZVBhaXIpKSB7XHJcbiAgICAgICAgZ2V0UmFuZG9tQ2F0ZWdvcnkgPSBnZXRSYW5kb21OdW1iZXJJblJhbmdlKDEsIGNhdGVnb3J5Q291bnQpO1xyXG4gICAgICAgIGdldFJhbmRvbVF1ZXN0aW9uSW5DYXRlZ29yeSA9IGdldFJhbmRvbU51bWJlckluUmFuZ2UoXHJcbiAgICAgICAgICAxLFxyXG4gICAgICAgICAgcXVlc3Rpb25Db3VudFtnZXRSYW5kb21DYXRlZ29yeSAtIDFdLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29vcmRpbmF0ZVBhaXIgPSBbZ2V0UmFuZG9tQ2F0ZWdvcnksIGdldFJhbmRvbVF1ZXN0aW9uSW5DYXRlZ29yeV07XHJcbiAgICAgIH1cclxuICAgICAgcmFuZG9tQ29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlUGFpcik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJhbmRvbUNvb3JkaW5hdGVzKTtcclxuXHJcbiAgICAgIHJhbmRvbUNhdGVnb3J5LnB1c2goZ2V0UmFuZG9tQ2F0ZWdvcnkpO1xyXG5cclxuICAgICAgcmFuZG9tUXVlc3Rpb24ucHVzaChnZXRSYW5kb21RdWVzdGlvbkluQ2F0ZWdvcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHJhbmRvbUNhdGVnb3J5LCByYW5kb21RdWVzdGlvbik7XHJcbiAgfVxyXG5cclxuICAvLyBnZW5lcmF0ZSByYW5kb20gZG91YmxlIHF1ZXN0aW9uIGlmIHN1cHBsaWVkIGRhdGEgZG9lc24ndCBzcGVjaWZ5XHJcbiAgLy8gaWYgKHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7MH1gXVtgcXVlc3Rpb24kezF9YF0uZG91YmxlID09PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgLy8gfVxyXG5cclxuICAvLyBnZW5lcmF0ZSBxdWVzdGlvbiB0aWxlcyB3aXRoIHZhbHVlc1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgY2F0ZWdvcnlDb3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPCBxdWVzdGlvbkNvdW50W2kgLSAxXSArIDE7IGogKz0gMSkge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXRlZ29yeSR7aX1gKTtcclxuICAgICAgY29uc3QgdGlsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRpbGVEaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9uXCIpO1xyXG4gICAgICB0aWxlRGl2LnRleHRDb250ZW50ID1cclxuICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF1bYHF1ZXN0aW9uJHtqfWBdLnZhbHVlO1xyXG5cclxuICAgICAgLy8gYXBwbHkgc3RvY2sgdmFsdWVzIG9mIDEwMCBpbmNyZW1lbnQgcGVyIHJvdyBpZiBhIHZhbHVlXHJcbiAgICAgIC8vIGlzIG5vdCBhIHN1cHBsaWVkIGZyb20gcXVlc3Rpb25PYmpcclxuICAgICAgaWYgKHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXVtgcXVlc3Rpb24ke2p9YF0udmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRpbGVEaXYudGV4dENvbnRlbnQgPSBgJHtqfTAwYDtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaSAqIGopO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhcHBseSBkaW1tYWRvbWUgZG91YmxlIGVmZmVjdHMgZm9yIGFueSBtYXJrZWQgcXVlc3Rpb25zLlxyXG4gICAgICBpZiAocXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdW2BxdWVzdGlvbiR7an1gXS5kb3VibGUpIHtcclxuICAgICAgICB0aWxlRGl2LmNsYXNzTGlzdC5hZGQoXCJkaW1tRG91YmxlXCIpO1xyXG4gICAgICAgIHRpbGVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGltbWFkb21lXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpbW1Eb3VibGVIYXRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICAvLyBhcHBseSBkaW1tYWRvbWUgZG91YmxlIGVmZmVjdHMgdXNpbmcgcmFuZG9tIGdlbmVyYXRpb25cclxuICAgICAgLy8gaWYgbm90IHNwZWNpZmllZCBpbiBxdWVzdGlvbiBzZXRcclxuXHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcmFuZG9tQ2F0ZWdvcnkubGVuZ3RoOyBrICs9IDEpIHtcclxuICAgICAgICBpZiAoaSA9PT0gcmFuZG9tQ2F0ZWdvcnlba10gJiYgaiA9PT0gcmFuZG9tUXVlc3Rpb25ba10pIHtcclxuICAgICAgICAgIHRpbGVEaXYuY2xhc3NMaXN0LmFkZChcImRpbW1Eb3VibGVcIik7XHJcbiAgICAgICAgICB0aWxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGltbWFkb21lXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGltbURvdWJsZUhhdFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNhdGVnb3J5RGl2LmFwcGVuZCh0aWxlRGl2KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIHJlbW92ZSB0aGlzIGxhdGVyXHJcbmV4cG9ydCBjb25zdCB0ZXN0ID0gNztcclxuIiwiaW1wb3J0IHN0b2NrTmFtZXMgZnJvbSBcIi4vc3RvY2tOYW1lc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGxheWVyKG5hbWUsIG51bWJlciwgc2NvcmUpIHtcclxuICAvLyBhc3NpZ24gdG8gb2JqIHJhdGhlciB0aGFuIHRoaXMsIHNpbmNlIHRoaXMgPT09IHVuZGVmaW5lZCBpbiBtb2R1bGVzXHJcbiAgY29uc3Qgb2JqID0ge307XHJcbiAgb2JqLmRpc3BsYXlQbGF5ZXJOYW1lID0gZnVuY3Rpb24gZGlzcGxheVBsYXllck5hbWUocGxheWVyTnVtYmVyKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgI3BsYXllciR7cGxheWVyTnVtYmVyfWAsXHJcbiAgICApLnRleHRDb250ZW50ID0gYCR7dGhpcy5uYW1lfTpgO1xyXG4gIH07XHJcbiAgb2JqLmNoYW5nZVBsYXllck5hbWUgPSBmdW5jdGlvbiBjaGFuZ2VQbGF5ZXJOYW1lKCkge1xyXG4gICAgY29uc3QgdGVtcE5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICB0aGlzLm5hbWUgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCIsIFwiSm9zaCBHdW5zb25cIik7XHJcbiAgICAvLyBwcmV2ZW50IHBsYXllciBuYW1lIGZyb20gZGlzYXBwZWFyaW5nIGJ5IHVzaW5nIHByZXZpb3VzIG5hbWVcclxuICAgIGlmICh0aGlzLm5hbWUgPT09IG51bGwpIHRoaXMubmFtZSA9IHRlbXBOYW1lO1xyXG4gICAgdGhpcy5kaXNwbGF5UGxheWVyTmFtZSh0aGlzLm51bWJlcik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcclxuICB9O1xyXG4gIG9iai5pbmNyZW1lbnRQbGF5ZXJTY29yZSA9IGZ1bmN0aW9uIGluY3JlbWVudFBsYXllclNjb3JlKHNjb3JlVG9BZGQpIHtcclxuICAgIHRoaXMuc2NvcmUgKz0gc2NvcmVUb0FkZDtcclxuICB9O1xyXG4gIG9iai5kaXNwbGF5UGxheWVyU2NvcmUgPSBmdW5jdGlvbiBkaXNwbGF5UGxheWVyU2NvcmUocGxheWVyTnVtYmVyKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyJHtwbGF5ZXJOdW1iZXJ9U2NvcmVgKS50ZXh0Q29udGVudCA9XHJcbiAgICAgIHRoaXMuc2NvcmU7XHJcbiAgfTtcclxuICBvYmoubmFtZSA9IG5hbWU7XHJcbiAgb2JqLnNjb3JlID0gc2NvcmU7XHJcbiAgb2JqLm51bWJlciA9IG51bWJlcjtcclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50SW5SYW5nZShtaW4sIG1heCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcbi8vIGV4cGxvcmU6IHJuZyBzdG9ja25hbWUgbGlzdCwgYXBwbHkgdG8gcGxheWVyIGdlbiBsb29wLCBhZGQgdG8gdXNlZCBhcnJheVxyXG4vLyBybmcgb24gbmV3IGxvb3AsIGNoZWNrIGlmIHJuZyB1c2VkLCBpZiBzbywgcmVyb2xsLCBzdG9ja25hbWUgaXMgMjI5IGxvbmdcclxuLy8gaGF2ZSBhIGxpdHRsZSB0b2dnbGUgcmFuZG9tIGNoYXJhY3RlciBuYW1lIGJveCxcclxuLy8gZmxpcCBiZXR3ZWVuIHN0YXRpYyBhbmQgcmFuZG9tIG5hbWUgZ2VuZXJhdGlvblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGxheWVyc09iaihwbGF5ZXJDb3VudCwgcmFuZG9tTmFtZXMpIHtcclxuICBjb25zb2xlLmxvZyhzdG9ja05hbWVzKTtcclxuICBjb25zdCB0YWtlbk5hbWVzID0gW107XHJcbiAgY29uc3QgcGxheWVycyA9IHt9O1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcGxheWVyQ291bnQgKyAxOyBpICs9IDEpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGdldFJhbmRvbUludEluUmFuZ2UoNSwgMTApKTtcclxuICAgIGlmIChyYW5kb21OYW1lcykge1xyXG4gICAgICBsZXQgcm5nO1xyXG4gICAgICBsZXQgdGFrZW4gPSB0cnVlO1xyXG4gICAgICAvLyBnZW5lcmF0ZSByYW5kb20gbnVtYmVyLCBjaGVjayBpZiBpdCdzIGJlZW4gdXNlZCwgaWYgbm90LCBsb2cgYXMgdXNlZFxyXG4gICAgICB3aGlsZSAodGFrZW4gPT09IHRydWUpIHtcclxuICAgICAgICBybmcgPSBnZXRSYW5kb21JbnRJblJhbmdlKDAsIDIyOCk7XHJcbiAgICAgICAgaWYgKCF0YWtlbk5hbWVzLmluY2x1ZGVzKHJuZykpIHtcclxuICAgICAgICAgIHRha2VuTmFtZXMucHVzaChybmcpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGFrZW5OYW1lcyk7XHJcbiAgICAgICAgICB0YWtlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwbGF5ZXJzW2ldID0gZ2VuZXJhdGVQbGF5ZXIoc3RvY2tOYW1lc1tybmddLCBpLCAwKTtcclxuICAgICAgLy8gY29uc3QgbWF4ID0gcGxheWVyQ291bnQ7XHJcbiAgICAgIC8vIGNvbnN0IG1pbiA9IHBsYXllckNvdW50IC0gNDtcclxuICAgIH1cclxuICAgIGlmICghcmFuZG9tTmFtZXMpIHtcclxuICAgICAgcGxheWVyc1tpXSA9IGdlbmVyYXRlUGxheWVyKHN0b2NrTmFtZXNbaSAtIDFdLCBpLCAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBsYXllcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwbGF5ZXJOYW1lcyA9IFtcInRlc3RcIl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbFBsYXllclNldHVwKHBsYXllck9iamVjdCkge1xyXG4gIGNvbnN0IHBsYXllckNvdW50ID0gT2JqZWN0LmtleXMocGxheWVyT2JqZWN0KS5sZW5ndGg7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQ291bnQ7IGkgKz0gMSkge1xyXG4gICAgLy8gcGxheWVycyBpbmRleCBhdCAxXHJcbiAgICAvLyBkaXNwbGF5IGRlZmF1bHQgdXNlcm5hbWVzIGFuZCBpbml0YWwgc2NvcmVzXHJcbiAgICBwbGF5ZXJPYmplY3RbaSArIDFdLmRpc3BsYXlQbGF5ZXJOYW1lKGkgKyAxKTtcclxuXHJcbiAgICAvLyBwbGF5ZXIgbmFtZXMgY2FuIGJlIGNsaWNrZWQgdG8gb3BlbiB0aGUgY2hhbmdlIGRpYWxvZ3VlXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxheWVyJHtpICsgMX1gKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBwbGF5ZXJPYmplY3RbaSArIDFdLmNoYW5nZVBsYXllck5hbWUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXllckNvdW50SW5wdXQoKSB7XHJcbiAgcmV0dXJuIE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllckNvdW50XCIpLnZhbHVlKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGxheWVyVUkocGxheWVyTnVtYmVyKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJcIik7XHJcblxyXG4gIG5hbWUuaWQgPSBgcGxheWVyJHtwbGF5ZXJOdW1iZXJ9YDtcclxuXHJcbiAgc2NvcmUuY2xhc3NMaXN0LmFkZChcInNjb3JlXCIpO1xyXG4gIHNjb3JlLmlkID0gYHBsYXllciR7cGxheWVyTnVtYmVyfVNjb3JlYDtcclxuXHJcbiAgZGl2LmFwcGVuZChuYW1lLCBzY29yZSk7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuIiwiY29uc3Qgc3RvY2tOYW1lcyA9IFtcclxuICBcIkNoYXNlXCIsXHJcbiAgXCJFdGhhblwiLFxyXG4gIFwiU3RhblwiLFxyXG4gIFwiVGF5bG9yXCIsXHJcbiAgXCJBbGV4YW5kZXJcIixcclxuICBcIkFtYXJpXCIsXHJcbiAgXCJKYXljZVwiLFxyXG4gIFwiTmF0aGFuXCIsXHJcbiAgXCJBYXJvblwiLFxyXG4gIFwiQnJ5Y2VcIixcclxuICBcIkh1bnRlclwiLFxyXG4gIFwiSmFjb2JcIixcclxuICBcIk5hc2lyXCIsXHJcbiAgXCJNYXR0aGV3XCIsXHJcbiAgXCJQcmluY2VcIixcclxuICBcIlhhdmllclwiLFxyXG4gIFwiS2FydGVyXCIsXHJcbiAgXCJUcmlzdGFuXCIsXHJcbiAgXCJKb25hdGhhblwiLFxyXG4gIFwiSnVzdGluXCIsXHJcbiAgXCJUeWxlclwiLFxyXG4gIFwiS2FsZWJcIixcclxuICBcIlNlYmFzdGlhblwiLFxyXG4gIFwiQXlkZW5cIixcclxuICBcIkphc29uXCIsXHJcbiAgXCJKb3NlcGhcIixcclxuICBcIkF1c3RpblwiLFxyXG4gIFwiSmFkZW5cIixcclxuICBcIk5hdGhhbmllbFwiLFxyXG4gIFwiU2FtdWVsXCIsXHJcbiAgXCJEeWxhblwiLFxyXG4gIFwiSmFtZXNcIixcclxuICBcIkpvZWxcIixcclxuICBcIkFzaGVyXCIsXHJcbiAgXCJLYWlcIixcclxuICBcIkNhbGViXCIsXHJcbiAgXCJHYWJyaWVsXCIsXHJcbiAgXCJKYXljZW9uXCIsXHJcbiAgXCJNYW1hZG91XCIsXHJcbiAgXCJFbW1hbnVlbFwiLFxyXG4gIFwiWmFjaGFyeVwiLFxyXG4gIFwiRXpla2llbFwiLFxyXG4gIFwiTmljaG9sYXNcIixcclxuICBcIlphaXJlXCIsXHJcbiAgXCJBZG9uaXNcIixcclxuICBcIkJlbmphbWluXCIsXHJcbiAgXCJBc2h0b25cIixcclxuICBcIkF2ZXJ5XCIsXHJcbiAgXCJLYW1lcm9uXCIsXHJcbiAgXCJMZWdlbmRcIixcclxuICBcIkxldmlcIixcclxuICBcIkx1Y2FzXCIsXHJcbiAgXCJBbmRyZXdcIixcclxuICBcIkVsaVwiLFxyXG4gIFwiSnVsaWFuXCIsXHJcbiAgXCJPbWFyaVwiLFxyXG4gIFwiQWRhbVwiLFxyXG4gIFwiRXpyYVwiLFxyXG4gIFwiQ2Fpcm9cIixcclxuICBcIklzcmFlbFwiLFxyXG4gIFwiSmFpZGVuXCIsXHJcbiAgXCJKYXhvblwiLFxyXG4gIFwiSnVzdGljZVwiLFxyXG4gIFwiS2FtYXJpXCIsXHJcbiAgXCJCcmFuZG9uXCIsXHJcbiAgXCJHcmV5c29uXCIsXHJcbiAgXCJNdWhhbW1hZFwiLFxyXG4gIFwiU2luY2VyZVwiLFxyXG4gIFwiQW5kcmVcIixcclxuICBcIklicmFoaW1hXCIsXHJcbiAgXCJKYWNrc29uXCIsXHJcbiAgXCJKYXlsZW5cIixcclxuICBcIkthZGVuXCIsXHJcbiAgXCJBYmRvdWxheWVcIixcclxuICBcIkNhaWRlblwiLFxyXG4gIFwiQ2hhbmNlXCIsXHJcbiAgXCJFdmFuXCIsXHJcbiAgXCJHaW92YW5uaVwiLFxyXG4gIFwiR3JheXNvblwiLFxyXG4gIFwiS2V2aW5cIixcclxuICBcIk9tYXJcIixcclxuICBcIlNoYXduXCIsXHJcbiAgXCJBdWd1c3RcIixcclxuICBcIklzYWFjXCIsXHJcbiAgXCJLaGFsaWxcIixcclxuICBcIkt5bGVcIixcclxuICBcIk1hcmN1c1wiLFxyXG4gIFwiWmFuZVwiLFxyXG4gIFwiQWxpXCIsXHJcbiAgXCJNYWlzb25cIixcclxuICBcIlByaW5jZXRvblwiLFxyXG4gIFwiUm9iZXJ0XCIsXHJcbiAgXCJBY2VcIixcclxuICBcIkJyeWFuXCIsXHJcbiAgXCJHaWFubmlcIixcclxuICBcIkphbWVsXCIsXHJcbiAgXCJKYW1pclwiLFxyXG4gIFwiSm9oblwiLFxyXG4gIFwiTm9sYW5cIixcclxuICBcIk91c21hbmVcIixcclxuICBcIkFscGhhXCIsXHJcbiAgXCJBbWFkb3VcIixcclxuICBcIkpheHNvblwiLFxyXG4gIFwiS2FyZWVtXCIsXHJcbiAgXCJLaW5nc3RvblwiLFxyXG4gIFwiTHVrZVwiLFxyXG4gIFwiTWVraGlcIixcclxuICBcIk15bGVzXCIsXHJcbiAgXCJTdGVwaGVuXCIsXHJcbiAgXCJBZGVuXCIsXHJcbiAgXCJBZHJpYW5cIixcclxuICBcIkFsZXhcIixcclxuICBcIkJvdWJhY2FyXCIsXHJcbiAgXCJDYXlkZW5cIixcclxuICBcIkNvbm5vclwiLFxyXG4gIFwiQ29yZXlcIixcclxuICBcIkRhbGxhc1wiLFxyXG4gIFwiSGF5ZGVuXCIsXHJcbiAgXCJKb25haFwiLFxyXG4gIFwiS2FtcmVuXCIsXHJcbiAgXCJNYWpvclwiLFxyXG4gIFwiUGhvZW5peFwiLFxyXG4gIFwiU2VhblwiLFxyXG4gIFwiQWJkb3VsXCIsXHJcbiAgXCJDYXJzb25cIixcclxuICBcIkRvbWluaWNcIixcclxuICBcIkphc2lhaFwiLFxyXG4gIFwiSnVsaXVzXCIsXHJcbiAgXCJLZW5uZXRoXCIsXHJcbiAgXCJMYW5kb25cIixcclxuICBcIk1hbGlrXCIsXHJcbiAgXCJNYXJrXCIsXHJcbiAgXCJNaWxlc1wiLFxyXG4gIFwiTW91aGFtZWRcIixcclxuICBcIk91bWFyXCIsXHJcbiAgXCJTYW1pclwiLFxyXG4gIFwiU29sb21vblwiLFxyXG4gIFwiVGltb3RoeVwiLFxyXG4gIFwiV2lsbGlhbVwiLFxyXG4gIFwiWmF5ZGVuXCIsXHJcbiAgXCJMaWFtXCIsXHJcbiAgXCJKYWNvYlwiLFxyXG4gIFwiRHlsYW5cIixcclxuICBcIk1hdHRoZXdcIixcclxuICBcIk5vYWhcIixcclxuICBcIlNlYmFzdGlhblwiLFxyXG4gIFwiSmF5ZGVuXCIsXHJcbiAgXCJMdWNhc1wiLFxyXG4gIFwiRXRoYW5cIixcclxuICBcIkFhcm9uXCIsXHJcbiAgXCJBbmdlbFwiLFxyXG4gIFwiRGFuaWVsXCIsXHJcbiAgXCJMb2dhblwiLFxyXG4gIFwiQWxleGFuZGVyXCIsXHJcbiAgXCJNYXNvblwiLFxyXG4gIFwiQWlkZW5cIixcclxuICBcIk1hdGVvXCIsXHJcbiAgXCJKb3NodWFcIixcclxuICBcIkRhdmlkXCIsXHJcbiAgXCJBZHJpYW5cIixcclxuICBcIkFudGhvbnlcIixcclxuICBcIk1pY2hhZWxcIixcclxuICBcIkpvc2VwaFwiLFxyXG4gIFwiSWFuXCIsXHJcbiAgXCJDaHJpc3RvcGhlclwiLFxyXG4gIFwiRWxpYXNcIixcclxuICBcIkdhYnJpZWxcIixcclxuICBcIlJ5YW5cIixcclxuICBcIklzYWFjXCIsXHJcbiAgXCJKb3NlXCIsXHJcbiAgXCJUaGlhZ29cIixcclxuICBcIkVsaWphaFwiLFxyXG4gIFwiSmFtZXNcIixcclxuICBcIk9saXZlclwiLFxyXG4gIFwiSm9zaWFoXCIsXHJcbiAgXCJOYXRoYW5cIixcclxuICBcIkp1bGlhblwiLFxyXG4gIFwiSnVzdGluXCIsXHJcbiAgXCJDYXJsb3NcIixcclxuICBcIkdhZWxcIixcclxuICBcIkx1aXNcIixcclxuICBcIkFsYW5cIixcclxuICBcIkplcmVteVwiLFxyXG4gIFwiSm9uYXRoYW5cIixcclxuICBcIkxlb25hcmRvXCIsXHJcbiAgXCJLZXZpblwiLFxyXG4gIFwiU2FtdWVsXCIsXHJcbiAgXCJKZXJlbWlhaFwiLFxyXG4gIFwiQmVuamFtaW5cIixcclxuICBcIk5pY2hvbGFzXCIsXHJcbiAgXCJDaHJpc3RpYW5cIixcclxuICBcIkpvaG5cIixcclxuICBcIlNhbnRpYWdvXCIsXHJcbiAgXCJBeGVsXCIsXHJcbiAgXCJFcmlja1wiLFxyXG4gIFwiQnJhbmRvblwiLFxyXG4gIFwiSm9lbFwiLFxyXG4gIFwiSnVhblwiLFxyXG4gIFwiTWF0aWFzXCIsXHJcbiAgXCJXaWxsaWFtXCIsXHJcbiAgXCJBbmRyZXdcIixcclxuICBcIkRpZWdvXCIsXHJcbiAgXCJJc2FpYWhcIixcclxuICBcIk5pY29sYXNcIixcclxuICBcIlhhdmllclwiLFxyXG4gIFwiQXlkZW5cIixcclxuICBcIkF1c3RpblwiLFxyXG4gIFwiSmFzb25cIixcclxuICBcIkVtbWFudWVsXCIsXHJcbiAgXCJLYXlkZW5cIixcclxuICBcIkpheWNlXCIsXHJcbiAgXCJDYWxlYlwiLFxyXG4gIFwiQnJ5YW5cIixcclxuICBcIkpvcmRhblwiLFxyXG4gIFwiTmF0aGFuaWVsXCIsXHJcbiAgXCJBbGVqYW5kcm9cIixcclxuICBcIkRhbWlhblwiLFxyXG4gIFwiRGVyZWtcIixcclxuICBcIkphZGllbFwiLFxyXG4gIFwiRWxpXCIsXHJcbiAgXCJNYXR0ZW9cIixcclxuICBcIkFkYW1cIixcclxuICBcIkFsZXhcIixcclxuICBcIkphY2VcIixcclxuICBcIkhlbnJ5XCIsXHJcbiAgXCJKb3N1ZVwiLFxyXG4gIFwiTWlndWVsXCIsXHJcbiAgXCJFdmFuXCIsXHJcbiAgXCJHcmF5c29uXCIsXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9ja05hbWVzO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFBhcGEgZnJvbSBcInBhcGFwYXJzZVwiO1xyXG5pbXBvcnQgKiBhcyBib2FyZCBmcm9tIFwiLi9ib2FyZFwiO1xyXG5pbXBvcnQgKiBhcyBwbGF5ZXJzIGZyb20gXCIuL3BsYXllcnNcIjtcclxuXHJcbmxldCBxdWVzdGlvbkRhdGEgPSBbXTtcclxuXHJcbi8vIGNvbnZlcnQgdGhpcyB0byBhIGZ1bmN0aW9uIGluIHBsYXllcnMgbW9kdWxlXHJcbi8vIGNvbnN0IHBsYXllckNvdW50ID0gcGxheWVycy5nZXRQbGF5ZXJDb3VudElucHV0KCk7XHJcbi8vIGV4cG9ydCBjb25zdCBwbGF5ZXJPYmogPSBwbGF5ZXJzLmdlbmVyYXRlUGxheWVyc09iaigyKTtcclxuXHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVF1ZXN0aW9uT2JqZWN0RnJvbUNTVigpIHtcclxuICBjb25zdCBxdWVzdGlvbk9iaiA9IHt9O1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXN0aW9uRGF0YS5sZW5ndGggLyAyOyBpICs9IDEpIHtcclxuICAgIHF1ZXN0aW9uT2JqW2BjYXRlZ29yeSR7aSArIDF9YF0gPSB7XHJcbiAgICAgIHRvcGljOiBxdWVzdGlvbkRhdGFbMiAqIGldWzBdLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBzdGFydCBmcm9tIGluZGV4IDEgdG8gYWNjb3VudCBmb3IgY3N2IHRvcGljIGZvcm1hdHRpbmdcclxuICAgIGZvciAobGV0IGogPSAxOyBqIDwgcXVlc3Rpb25EYXRhWzBdLmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgIHF1ZXN0aW9uT2JqW2BjYXRlZ29yeSR7aSArIDF9YF1bYHF1ZXN0aW9uJHtqfWBdID0ge1xyXG4gICAgICAgIHF1ZXN0aW9uOiBxdWVzdGlvbkRhdGFbMiAqIGldW2pdLFxyXG4gICAgICAgIGFuc3dlcjogcXVlc3Rpb25EYXRhWzIgKiBpICsgMV1bal0sXHJcbiAgICAgIH07XHJcbiAgICAgIC8vIHF1ZXN0aW9uT2JqW2ldW2BxdWVzdGlvbiR7an1gXSA9IHF1ZXN0aW9uRGF0YVsyICogaV1bal07XHJcbiAgICAgIC8vIHF1ZXN0aW9uT2JqW2ldW2BhbnN3ZXIke2p9YF0gPSBxdWVzdGlvbkRhdGFbMiAqIGkgKyAxXVtqXTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHF1ZXN0aW9uT2JqO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUXVlc3Rpb25Nb2RhbEV2ZW50TGlzdGVuZXIocXVlc3Rpb25PYmplY3QsIHBsYXllck9iaikge1xyXG4gIC8vIGNvbnN0IHF1ZXN0aW9uVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0aW9uXCIpO1xyXG4gIGNvbnNvbGUubG9nKHF1ZXN0aW9uT2JqZWN0KTtcclxuXHJcbiAgY29uc3QgY2F0ZWdvcnlDb3VudCA9IE9iamVjdC5rZXlzKHF1ZXN0aW9uT2JqZWN0KS5sZW5ndGg7XHJcbiAgY29uc3QgcXVlc3Rpb25Db3VudCA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgY2F0ZWdvcnlDb3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgLy8gLTEgZnJvbSBsZW5ndGggdG8gYWNjb3VudCBmb3IgJ3RvcGljJyBrZXlcclxuICAgIHF1ZXN0aW9uQ291bnQucHVzaChPYmplY3Qua2V5cyhxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF0pLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5UXVlc3Rpb25UaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIGAjY2F0ZWdvcnkke2l9IC5xdWVzdGlvbmAsXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBxdWVzdGlvbkNvdW50W2kgLSAxXTsgaiArPSAxKSB7XHJcbiAgICAgIGNhdGVnb3J5UXVlc3Rpb25UaWxlc1tqXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChjYXRlZ29yeVF1ZXN0aW9uVGlsZXNbal0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFrZW5cIikpIHJldHVybjtcclxuICAgICAgICBsZXQgY3VycmVudFNjb3JlO1xyXG5cclxuICAgICAgICBjdXJyZW50U2NvcmUgPSBwYXJzZUludChjYXRlZ29yeVF1ZXN0aW9uVGlsZXNbal0udGV4dENvbnRlbnQsIDEwKTtcclxuICAgICAgICBpZiAoY2F0ZWdvcnlRdWVzdGlvblRpbGVzW2pdLmNsYXNzTGlzdC5jb250YWlucyhcImRpbW1Eb3VibGVcIikpIHtcclxuICAgICAgICAgIGN1cnJlbnRTY29yZSA9IHBhcnNlSW50KGNhdGVnb3J5UXVlc3Rpb25UaWxlc1tqXS50ZXh0Q29udGVudCwgMTApICogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IGN1cnJlbnQgbW9kYWwgY29udGVudFxyXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHBTY29yZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBwU2NvcmVFbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVudFNjb3JlO1xyXG4gICAgICAgIHBTY29yZUVsZW1lbnQuaWQgPSBcIm1vZGFsU2NvcmVcIjtcclxuICAgICAgICBtb2RhbC5hcHBlbmQocFNjb3JlRWxlbWVudCk7XHJcblxyXG4gICAgICAgIC8vIGFsdCBtZXRob2QgdG8gYXZvaWQgZGlyZWN0bHkgc2V0dGluZyBpbm5lckhUTUxcclxuXHJcbiAgICAgICAgLy8gY29uc3QgcFF1ZXN0aW9uQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIC8vIHBRdWVzdGlvbkNvbnRlbnQudGV4dENvbnRlbnQgPVxyXG4gICAgICAgIC8vICAgcXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdW2BxdWVzdGlvbiR7aiArIDF9YF0ucXVlc3Rpb247XHJcbiAgICAgICAgLy8gcFF1ZXN0aW9uQ29udGVudC5pZCA9IFwibW9kYWxRdWVzdGlvbkNvbnRlbnRcIjtcclxuXHJcbiAgICAgICAgLy8gc2V0IHF1ZXN0aW9uIGNvbnRlbnRcclxuICAgICAgICBtb2RhbC5pbm5lckhUTUwgKz1cclxuICAgICAgICAgIHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXVtgcXVlc3Rpb24ke2ogKyAxfWBdLnF1ZXN0aW9uO1xyXG5cclxuICAgICAgICBjb25zdCBhbnN3ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGFuc3dlckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQW5zd2VyXCI7XHJcblxyXG4gICAgICAgIGFuc3dlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGFuc3dlckJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJidXR0b25EaXNhYmxlZFwiKSkgcmV0dXJuO1xyXG4gICAgICAgICAgYW5zd2VyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25EaXNhYmxlZFwiKTtcclxuXHJcbiAgICAgICAgICAvLyBjb25zdCBwbGF5ZXJOYW1lcyA9IFtcclxuICAgICAgICAgIC8vICAgcGxheWVyT2JqWzFdLm5hbWUsXHJcbiAgICAgICAgICAvLyAgIHBsYXllck9ialsyXS5uYW1lLFxyXG4gICAgICAgICAgLy8gICBwbGF5ZXJPYmpbM10ubmFtZSxcclxuICAgICAgICAgIC8vICAgcGxheWVyT2JqWzRdLm5hbWUsXHJcbiAgICAgICAgICAvLyBdO1xyXG4gICAgICAgICAgY29uc3QgcGxheWVyQ291bnQgPSBPYmplY3Qua2V5cyhwbGF5ZXJPYmopLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgKz1cclxuICAgICAgICAgICAgcXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdW2BxdWVzdGlvbiR7aiArIDF9YF0uYW5zd2VyO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInNjb3JlQnV0dG9uc1wiKTtcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHBsYXllckNvdW50OyBrICs9IDEpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NvcmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBzY29yZUJ1dHRvbi50ZXh0Q29udGVudCA9IHBsYXllck9ialtrICsgMV0ubmFtZTtcclxuICAgICAgICAgICAgc2NvcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoc2NvcmVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnV0dG9uRGlzYWJsZWRcIikpIHJldHVybjtcclxuICAgICAgICAgICAgICBwbGF5ZXJPYmpbayArIDFdLmluY3JlbWVudFBsYXllclNjb3JlKGN1cnJlbnRTY29yZSk7XHJcbiAgICAgICAgICAgICAgcGxheWVyT2JqW2sgKyAxXS5kaXNwbGF5UGxheWVyU2NvcmUoayArIDEpO1xyXG4gICAgICAgICAgICAgIHNjb3JlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25EaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmQoc2NvcmVCdXR0b24pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbW9kYWwuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbW9kYWwuYXBwZW5kKGFuc3dlckJ1dHRvbik7XHJcblxyXG4gICAgICAgIGNhdGVnb3J5UXVlc3Rpb25UaWxlc1tqXS5jbGFzc0xpc3QuYWRkKFwidGFrZW5cIik7XHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRKc29uVG9PYmplY3QoanNvbikge1xyXG4gIC8vIHJlbW92ZSB0aGlzP1xyXG4gIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UoanNvbik7XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXN0aW9uRGF0YShjc3ZGaWxlLCBwbGF5ZXJPYmopIHtcclxuICAvLyBcIi4uL3NyYy9xdWVzdGlvbnMvVHJpdmlhIC0gUXVlc3Rpb25zLmNzdlwiIGxvY2FsIGZpbGVuYW1lXHJcbiAgUGFwYS5wYXJzZShjc3ZGaWxlLmZpbGVzWzBdLCB7XHJcbiAgICBkb3dubG9hZDogdHJ1ZSxcclxuICAgIGNvbXBsZXRlKHJlc3VsdHMpIHtcclxuICAgICAgcXVlc3Rpb25EYXRhID0gcmVzdWx0cy5kYXRhO1xyXG4gICAgICBjb25zdCBxdWVzdGlvbk9iaiA9IGdlbmVyYXRlUXVlc3Rpb25PYmplY3RGcm9tQ1NWKCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHF1ZXN0aW9uRGF0YSk7XHJcbiAgICAgIGJvYXJkLmNyZWF0ZVF1ZXN0aW9uR3JpZChxdWVzdGlvbk9iaik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHF1ZXN0aW9uT2JqKTtcclxuICAgICAgYWRkUXVlc3Rpb25Nb2RhbEV2ZW50TGlzdGVuZXIocXVlc3Rpb25PYmosIHBsYXllck9iaik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdHMuZGF0YSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==