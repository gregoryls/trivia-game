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
// TODO fix question data for module

const gridArea = document.querySelector("#gridWrapper");

// change this to use question object
// grid count based on questionObj keys lengths, 2 dimensions, category length + question count length + topic
function createQuestionGrid(questionObject) {
  const categoryCount = Object.keys(questionObject).length;

  const questionCount = [];

  // set grid column count equal to number of question categories
  const gridWrapper = document.getElementById("gridWrapper");
  gridWrapper.style.gridTemplateColumns = `repeat(${categoryCount},1fr)`;

  // generate topic tiles
  for (let i = 0; i < categoryCount; i += 1) {
    const categoryDiv = document.createElement("div");
    const tileDiv = document.createElement("div");

    categoryDiv.id = `category${i}`;
    categoryDiv.classList.add("category");
    tileDiv.classList.add("questionTopic");
    tileDiv.textContent = questionObject[`category${i}`].topic;
    categoryDiv.append(tileDiv);

    gridArea.append(categoryDiv);
  }

  // generate question counts for each category
  for (let i = 0; i < categoryCount; i += 1) {
    // -1 from length to account for 'topic' key
    questionCount.push(Object.keys(questionObject[`category${i}`]).length - 1);
    // console.log(questionCount);
  }

  // generate question tiles with values
  for (let i = 0; i < categoryCount; i += 1) {
    for (let j = 1; j < questionCount[i] + 1; j += 1) {
      const categoryDiv = document.getElementById(`category${i}`);
      const tileDiv = document.createElement("div");
      tileDiv.classList.add("question");
      tileDiv.textContent =
        questionObject[`category${i}`][`question${j}`].value;

      // apply stock values of 100 increment per row if a value
      // is not a supplied from questionObj
      if (questionObject[`category${i}`][`question${j}`].value === undefined) {
        tileDiv.textContent = `${i + 1}00`;

        // console.log(i * j);
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
/* harmony export */   generatePlayer: () => (/* binding */ generatePlayer),
/* harmony export */   generatePlayersObj: () => (/* binding */ generatePlayersObj),
/* harmony export */   initialPlayerSetup: () => (/* binding */ initialPlayerSetup),
/* harmony export */   playerNames: () => (/* binding */ playerNames)
/* harmony export */ });
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
    console.log(this);
  };
  obj.displayPlayerScore = function displayPlayerScore(
    playerNumber,
    scoreToAdd,
  ) {
    // thank about splitting this function into two functions
    this.score += scoreToAdd;
    document.querySelector(`#player${playerNumber}Score`).textContent =
      this.score;
  };
  obj.name = name;
  obj.score = score;
  obj.number = number;
  return obj;
}

function generatePlayersObj(playerCount) {
  const stockNames = ["Chase", "Ethan", "Stan", "Taylor"];
  const players = {};
  for (let i = 1; i < playerCount + 1; i += 1) {
    players[i] = generatePlayer(stockNames[i - 1], i, 0);
  }
  return players;
}
// const player1 = generatePlayer("Chase", 1, 0);
// const player2 = generatePlayer("Ethan", 2, 0);
// const player3 = generatePlayer("Stan", 3, 0);
// const player4 = generatePlayer("Taylor", 4, 0);

const playerNames = ["test"];

function initialPlayerSetup(player1, player2, player3, player4) {
  // display default usernames
  player1.displayPlayerName(1);
  player2.displayPlayerName(2);
  player3.displayPlayerName(3);
  player4.displayPlayerName(4);
  // display intial (zero) player scores
  player1.displayPlayerScore(1, 0);
  player2.displayPlayerScore(2, 0);
  player3.displayPlayerScore(3, 0);
  player4.displayPlayerScore(4, 0);

  // player names can be clicked to open the change dialogue
  document.querySelector("#player1").addEventListener("click", () => {
    player1.changePlayerName();
  });
  document.querySelector("#player2").addEventListener("click", () => {
    player2.changePlayerName();
  });
  document.querySelector("#player3").addEventListener("click", () => {
    player3.changePlayerName();
  });
  document.querySelector("#player4").addEventListener("click", () => {
    player4.changePlayerName();
  });
}


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
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   addQuestionModalEventListener: () => (/* binding */ addQuestionModalEventListener),
/* harmony export */   convertJsonToObject: () => (/* binding */ convertJsonToObject),
/* harmony export */   generateQuestionObjectFromCSV: () => (/* binding */ generateQuestionObjectFromCSV),
/* harmony export */   getQuestionCount: () => (/* binding */ getQuestionCount),
/* harmony export */   getQuestionData: () => (/* binding */ getQuestionData),
/* harmony export */   playerObj: () => (/* binding */ playerObj),
/* harmony export */   removeClass: () => (/* binding */ removeClass)
/* harmony export */ });
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/board.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players */ "./src/players.js");




let questionData = [];

// convert this to a function in players module
const playerObj = _players__WEBPACK_IMPORTED_MODULE_2__.generatePlayersObj(4);

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function removeClass(element, className) {
  element.classList.remove(className);
}

function addClass(element, className) {
  element.classList.add(className);
}

function generateQuestionObjectFromCSV() {
  const questionObj = {};

  for (let i = 0; i < questionData.length / 2; i += 1) {
    questionObj[`category${i}`] = {
      topic: questionData[2 * i][0],
    };

    // start from index 1 to account for csv topic formatting
    for (let j = 1; j < questionData[0].length; j += 1) {
      // console.log(questionData[2 * i].length);
      questionObj[`category${i}`][`question${j}`] = {
        question: questionData[2 * i][j],
        answer: questionData[2 * i + 1][j],
      };
      // questionObj[i][`question${j}`] = questionData[2 * i][j];
      // questionObj[i][`answer${j}`] = questionData[2 * i + 1][j];
    }
  }
  return questionObj;
}

function getQuestionCount(questionObject) {}

function addQuestionModalEventListener(questionObject) {
  const questionTiles = document.querySelectorAll(".question");
  console.log(questionTiles);
  // for (let i = 0; i < questionTiles.length; i += 1) {
  //   questionTiles[i].addEventListener("click", () => {
  //     if (questionTiles[i].classList.contains("taken")) return;
  //     if (i < 6)
  //       modal.innerHTML = questionObject[`category${i}`].question1.question;
  //     if (i < 12 && i > 5)
  //       modal.innerHTML = questionObject[`category${i - 6}`].question2.question;
  //     if (i < 18 && i > 11)
  //       modal.innerHTML =
  //         questionObject[`category${i - 12}`].question3.question;
  //     if (i < 24 && i > 17)
  //       modal.innerHTML =
  //         questionObject[`category${i - 18}`].question4.question;
  //     if (i < 30 && i > 23)
  //       modal.innerHTML =
  //         questionObject[`category${i - 24}`].question5.question;
  //     if (i < 36 && i > 29)
  //       modal.innerHTML =
  //         questionObject[`category${i - 30}`].question6.question;

  //     const btn = document.createElement("button");
  //     btn.textContent = "Answer";

  //     btn.addEventListener("click", () => {
  //       if (btn.classList.contains("buttonDisabled")) return;
  //       btn.classList.add("buttonDisabled");

  //       const playerNames = [
  //         playerObj[1].name,
  //         playerObj[2].name,
  //         playerObj[3].name,
  //         playerObj[4].name,
  //       ];
  //       const playerCount = playerNames.length;

  //       if (i < 6)
  //         modal.innerHTML += questionObject[`category${i}`].question1.answer;
  //       if (i < 12 && i > 5)
  //         modal.innerHTML +=
  //           questionObject[`category${i - 6}`].question2.answer;
  //       if (i < 18 && i > 11)
  //         modal.innerHTML +=
  //           questionObject[`category${i - 12}`].question3.answer;
  //       if (i < 24 && i > 17)
  //         modal.innerHTML +=
  //           questionObject[`category${i - 18}`].question4.answer;
  //       if (i < 30 && i > 23)
  //         modal.innerHTML +=
  //           questionObject[`category${i - 24}`].question5.answer;
  //       if (i < 36 && i > 29)
  //         modal.innerHTML +=
  //           questionObject[`category${i - 30}`].question6.answer;

  //       const div = document.createElement("div");
  //       div.classList.add("scoreButtons");

  //       for (let j = 0; j < playerCount; j += 1) {
  //         const currentScore = parseInt(questionTiles[i].textContent, 10);

  //         const scoreButton = document.createElement("button");
  //         scoreButton.textContent = playerNames[j];
  //         scoreButton.addEventListener("click", () => {
  //           if (scoreButton.classList.contains("buttonDisabled")) return;
  //           playerObj[j + 1].displayPlayerScore(j + 1, currentScore);
  //           scoreButton.classList.add("buttonDisabled");
  //         });
  //         div.append(scoreButton);
  //       }
  //       modal.append(div);
  //     });
  //     modal.append(btn);

  //     addClass(questionTiles[i], "taken");

  //     removeClass(modal, "hidden");
  //     removeClass(overlay, "hidden");
  //   });
  // }

  const categoryCount = Object.keys(questionObject).length;
  const questionCount = [];
  for (let i = 0; i < categoryCount; i += 1) {
    // -1 from length to account for 'topic' key
    questionCount.push(Object.keys(questionObject[`category${i}`]).length - 1);

    const categoryQuestionTiles = document.querySelectorAll(
      `#category${i} .question`,
    );
    for (let j = 0; j < questionCount[i]; j += 1) {
      // console.log(categoryQuestionTiles);
      categoryQuestionTiles[j].addEventListener("click", () => {
        console.log(
          questionObject[`category${i}`][`question${j + 1}`].question,
        );
        modal.innerHTML =
          questionObject[`category${i}`][`question${j + 1}`].question;
      });
    }
  }
}

function convertJsonToObject(json) {
  const obj = JSON.parse(json);
  return obj;
}

function getQuestionData(csvFile) {
  // "../src/questions/Trivia - Questions.csv" local filename
  papaparse__WEBPACK_IMPORTED_MODULE_0___default().parse(csvFile.files[0], {
    download: true,
    complete(results) {
      questionData = results.data;
      const questionObj = generateQuestionObjectFromCSV();
      // console.log(questionData);
      _board__WEBPACK_IMPORTED_MODULE_1__.createQuestionGrid(questionObj);
      // console.log(questionObj);
      addQuestionModalEventListener(questionObj);
      // console.log(results.data);
    },
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQSx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBLDZEQUE2RCxFQUFFO0FBQy9EO0FBQ0E7QUFDQSxrQkFBa0IsR0FBRztBQUNyQjtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEVBQUUsY0FBYyxNQUFNO0FBQzFEO0FBQ0E7QUFDQSxvQ0FBb0MsRUFBRSxjQUFjLE1BQU07QUFDMUQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxFQUFFLHNEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQXdCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9wYXBhcGFyc2UvcGFwYXBhcnNlLm1pbi5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9ib2FyZC5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9wbGF5ZXJzLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvcXVlc3Rpb25Nb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAbGljZW5zZVxuUGFwYSBQYXJzZVxudjUuNC4xXG5odHRwczovL2dpdGh1Yi5jb20vbWhvbHQvUGFwYVBhcnNlXG5MaWNlbnNlOiBNSVRcbiovXG4hZnVuY3Rpb24oZSx0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPXQoKTplLlBhcGE9dCgpfSh0aGlzLGZ1bmN0aW9uIHMoKXtcInVzZSBzdHJpY3RcIjt2YXIgZj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnZvaWQgMCE9PWY/Zjp7fTt2YXIgbj0hZi5kb2N1bWVudCYmISFmLnBvc3RNZXNzYWdlLG89Zi5JU19QQVBBX1dPUktFUnx8ITEsYT17fSx1PTAsYj17cGFyc2U6ZnVuY3Rpb24oZSx0KXt2YXIgcj0odD10fHx7fSkuZHluYW1pY1R5cGluZ3x8ITE7SihyKSYmKHQuZHluYW1pY1R5cGluZ0Z1bmN0aW9uPXIscj17fSk7aWYodC5keW5hbWljVHlwaW5nPXIsdC50cmFuc2Zvcm09ISFKKHQudHJhbnNmb3JtKSYmdC50cmFuc2Zvcm0sdC53b3JrZXImJmIuV09SS0VSU19TVVBQT1JURUQpe3ZhciBpPWZ1bmN0aW9uKCl7aWYoIWIuV09SS0VSU19TVVBQT1JURUQpcmV0dXJuITE7dmFyIGU9KHI9Zi5VUkx8fGYud2Via2l0VVJMfHxudWxsLGk9cy50b1N0cmluZygpLGIuQkxPQl9VUkx8fChiLkJMT0JfVVJMPXIuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtcInZhciBnbG9iYWwgPSAoZnVuY3Rpb24oKSB7IGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHNlbGY7IH0gaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiB3aW5kb3c7IH0gaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBnbG9iYWw7IH0gcmV0dXJuIHt9OyB9KSgpOyBnbG9iYWwuSVNfUEFQQV9XT1JLRVI9dHJ1ZTsgXCIsXCIoXCIsaSxcIikoKTtcIl0se3R5cGU6XCJ0ZXh0L2phdmFzY3JpcHRcIn0pKSkpLHQ9bmV3IGYuV29ya2VyKGUpO3ZhciByLGk7cmV0dXJuIHQub25tZXNzYWdlPV8sdC5pZD11KyssYVt0LmlkXT10fSgpO3JldHVybiBpLnVzZXJTdGVwPXQuc3RlcCxpLnVzZXJDaHVuaz10LmNodW5rLGkudXNlckNvbXBsZXRlPXQuY29tcGxldGUsaS51c2VyRXJyb3I9dC5lcnJvcix0LnN0ZXA9Sih0LnN0ZXApLHQuY2h1bms9Sih0LmNodW5rKSx0LmNvbXBsZXRlPUoodC5jb21wbGV0ZSksdC5lcnJvcj1KKHQuZXJyb3IpLGRlbGV0ZSB0Lndvcmtlcix2b2lkIGkucG9zdE1lc3NhZ2Uoe2lucHV0OmUsY29uZmlnOnQsd29ya2VySWQ6aS5pZH0pfXZhciBuPW51bGw7Yi5OT0RFX1NUUkVBTV9JTlBVVCxcInN0cmluZ1wiPT10eXBlb2YgZT8oZT1mdW5jdGlvbihlKXtpZig2NTI3OT09PWUuY2hhckNvZGVBdCgwKSlyZXR1cm4gZS5zbGljZSgxKTtyZXR1cm4gZX0oZSksbj10LmRvd25sb2FkP25ldyBsKHQpOm5ldyBwKHQpKTohMD09PWUucmVhZGFibGUmJkooZS5yZWFkKSYmSihlLm9uKT9uPW5ldyBnKHQpOihmLkZpbGUmJmUgaW5zdGFuY2VvZiBGaWxlfHxlIGluc3RhbmNlb2YgT2JqZWN0KSYmKG49bmV3IGModCkpO3JldHVybiBuLnN0cmVhbShlKX0sdW5wYXJzZTpmdW5jdGlvbihlLHQpe3ZhciBuPSExLF89ITAsbT1cIixcIix5PVwiXFxyXFxuXCIscz0nXCInLGE9cytzLHI9ITEsaT1udWxsLG89ITE7IWZ1bmN0aW9uKCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHQpcmV0dXJuO1wic3RyaW5nXCIhPXR5cGVvZiB0LmRlbGltaXRlcnx8Yi5CQURfREVMSU1JVEVSUy5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuLTEhPT10LmRlbGltaXRlci5pbmRleE9mKGUpfSkubGVuZ3RofHwobT10LmRlbGltaXRlcik7KFwiYm9vbGVhblwiPT10eXBlb2YgdC5xdW90ZXN8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHQucXVvdGVzfHxBcnJheS5pc0FycmF5KHQucXVvdGVzKSkmJihuPXQucXVvdGVzKTtcImJvb2xlYW5cIiE9dHlwZW9mIHQuc2tpcEVtcHR5TGluZXMmJlwic3RyaW5nXCIhPXR5cGVvZiB0LnNraXBFbXB0eUxpbmVzfHwocj10LnNraXBFbXB0eUxpbmVzKTtcInN0cmluZ1wiPT10eXBlb2YgdC5uZXdsaW5lJiYoeT10Lm5ld2xpbmUpO1wic3RyaW5nXCI9PXR5cGVvZiB0LnF1b3RlQ2hhciYmKHM9dC5xdW90ZUNoYXIpO1wiYm9vbGVhblwiPT10eXBlb2YgdC5oZWFkZXImJihfPXQuaGVhZGVyKTtpZihBcnJheS5pc0FycmF5KHQuY29sdW1ucykpe2lmKDA9PT10LmNvbHVtbnMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIk9wdGlvbiBjb2x1bW5zIGlzIGVtcHR5XCIpO2k9dC5jb2x1bW5zfXZvaWQgMCE9PXQuZXNjYXBlQ2hhciYmKGE9dC5lc2NhcGVDaGFyK3MpOyhcImJvb2xlYW5cIj09dHlwZW9mIHQuZXNjYXBlRm9ybXVsYWV8fHQuZXNjYXBlRm9ybXVsYWUgaW5zdGFuY2VvZiBSZWdFeHApJiYobz10LmVzY2FwZUZvcm11bGFlIGluc3RhbmNlb2YgUmVnRXhwP3QuZXNjYXBlRm9ybXVsYWU6L15bPStcXC1AXFx0XFxyXS4qJC8pfSgpO3ZhciB1PW5ldyBSZWdFeHAoUShzKSxcImdcIik7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPUpTT04ucGFyc2UoZSkpO2lmKEFycmF5LmlzQXJyYXkoZSkpe2lmKCFlLmxlbmd0aHx8QXJyYXkuaXNBcnJheShlWzBdKSlyZXR1cm4gaChudWxsLGUscik7aWYoXCJvYmplY3RcIj09dHlwZW9mIGVbMF0pcmV0dXJuIGgoaXx8T2JqZWN0LmtleXMoZVswXSksZSxyKX1lbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXJldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlLmRhdGEmJihlLmRhdGE9SlNPTi5wYXJzZShlLmRhdGEpKSxBcnJheS5pc0FycmF5KGUuZGF0YSkmJihlLmZpZWxkc3x8KGUuZmllbGRzPWUubWV0YSYmZS5tZXRhLmZpZWxkc3x8aSksZS5maWVsZHN8fChlLmZpZWxkcz1BcnJheS5pc0FycmF5KGUuZGF0YVswXSk/ZS5maWVsZHM6XCJvYmplY3RcIj09dHlwZW9mIGUuZGF0YVswXT9PYmplY3Qua2V5cyhlLmRhdGFbMF0pOltdKSxBcnJheS5pc0FycmF5KGUuZGF0YVswXSl8fFwib2JqZWN0XCI9PXR5cGVvZiBlLmRhdGFbMF18fChlLmRhdGE9W2UuZGF0YV0pKSxoKGUuZmllbGRzfHxbXSxlLmRhdGF8fFtdLHIpO3Rocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBzZXJpYWxpemUgdW5yZWNvZ25pemVkIGlucHV0XCIpO2Z1bmN0aW9uIGgoZSx0LHIpe3ZhciBpPVwiXCI7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPUpTT04ucGFyc2UoZSkpLFwic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1KU09OLnBhcnNlKHQpKTt2YXIgbj1BcnJheS5pc0FycmF5KGUpJiYwPGUubGVuZ3RoLHM9IUFycmF5LmlzQXJyYXkodFswXSk7aWYobiYmXyl7Zm9yKHZhciBhPTA7YTxlLmxlbmd0aDthKyspMDxhJiYoaSs9bSksaSs9dihlW2FdLGEpOzA8dC5sZW5ndGgmJihpKz15KX1mb3IodmFyIG89MDtvPHQubGVuZ3RoO28rKyl7dmFyIHU9bj9lLmxlbmd0aDp0W29dLmxlbmd0aCxoPSExLGY9bj8wPT09T2JqZWN0LmtleXModFtvXSkubGVuZ3RoOjA9PT10W29dLmxlbmd0aDtpZihyJiYhbiYmKGg9XCJncmVlZHlcIj09PXI/XCJcIj09PXRbb10uam9pbihcIlwiKS50cmltKCk6MT09PXRbb10ubGVuZ3RoJiYwPT09dFtvXVswXS5sZW5ndGgpLFwiZ3JlZWR5XCI9PT1yJiZuKXtmb3IodmFyIGQ9W10sbD0wO2w8dTtsKyspe3ZhciBjPXM/ZVtsXTpsO2QucHVzaCh0W29dW2NdKX1oPVwiXCI9PT1kLmpvaW4oXCJcIikudHJpbSgpfWlmKCFoKXtmb3IodmFyIHA9MDtwPHU7cCsrKXswPHAmJiFmJiYoaSs9bSk7dmFyIGc9biYmcz9lW3BdOnA7aSs9dih0W29dW2ddLHApfW88dC5sZW5ndGgtMSYmKCFyfHwwPHUmJiFmKSYmKGkrPXkpfX1yZXR1cm4gaX1mdW5jdGlvbiB2KGUsdCl7aWYobnVsbD09ZSlyZXR1cm5cIlwiO2lmKGUuY29uc3RydWN0b3I9PT1EYXRlKXJldHVybiBKU09OLnN0cmluZ2lmeShlKS5zbGljZSgxLDI1KTt2YXIgcj0hMTtvJiZcInN0cmluZ1wiPT10eXBlb2YgZSYmby50ZXN0KGUpJiYoZT1cIidcIitlLHI9ITApO3ZhciBpPWUudG9TdHJpbmcoKS5yZXBsYWNlKHUsYSk7cmV0dXJuKHI9cnx8ITA9PT1ufHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZuKGUsdCl8fEFycmF5LmlzQXJyYXkobikmJm5bdF18fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspaWYoLTE8ZS5pbmRleE9mKHRbcl0pKXJldHVybiEwO3JldHVybiExfShpLGIuQkFEX0RFTElNSVRFUlMpfHwtMTxpLmluZGV4T2YobSl8fFwiIFwiPT09aS5jaGFyQXQoMCl8fFwiIFwiPT09aS5jaGFyQXQoaS5sZW5ndGgtMSkpP3MraStzOml9fX07aWYoYi5SRUNPUkRfU0VQPVN0cmluZy5mcm9tQ2hhckNvZGUoMzApLGIuVU5JVF9TRVA9U3RyaW5nLmZyb21DaGFyQ29kZSgzMSksYi5CWVRFX09SREVSX01BUks9XCJcXHVmZWZmXCIsYi5CQURfREVMSU1JVEVSUz1bXCJcXHJcIixcIlxcblwiLCdcIicsYi5CWVRFX09SREVSX01BUktdLGIuV09SS0VSU19TVVBQT1JURUQ9IW4mJiEhZi5Xb3JrZXIsYi5OT0RFX1NUUkVBTV9JTlBVVD0xLGIuTG9jYWxDaHVua1NpemU9MTA0ODU3NjAsYi5SZW1vdGVDaHVua1NpemU9NTI0Mjg4MCxiLkRlZmF1bHREZWxpbWl0ZXI9XCIsXCIsYi5QYXJzZXI9RSxiLlBhcnNlckhhbmRsZT1yLGIuTmV0d29ya1N0cmVhbWVyPWwsYi5GaWxlU3RyZWFtZXI9YyxiLlN0cmluZ1N0cmVhbWVyPXAsYi5SZWFkYWJsZVN0cmVhbVN0cmVhbWVyPWcsZi5qUXVlcnkpe3ZhciBkPWYualF1ZXJ5O2QuZm4ucGFyc2U9ZnVuY3Rpb24obyl7dmFyIHI9by5jb25maWd8fHt9LHU9W107cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtpZighKFwiSU5QVVRcIj09PWQodGhpcykucHJvcChcInRhZ05hbWVcIikudG9VcHBlckNhc2UoKSYmXCJmaWxlXCI9PT1kKHRoaXMpLmF0dHIoXCJ0eXBlXCIpLnRvTG93ZXJDYXNlKCkmJmYuRmlsZVJlYWRlcil8fCF0aGlzLmZpbGVzfHwwPT09dGhpcy5maWxlcy5sZW5ndGgpcmV0dXJuITA7Zm9yKHZhciB0PTA7dDx0aGlzLmZpbGVzLmxlbmd0aDt0KyspdS5wdXNoKHtmaWxlOnRoaXMuZmlsZXNbdF0saW5wdXRFbGVtOnRoaXMsaW5zdGFuY2VDb25maWc6ZC5leHRlbmQoe30scil9KX0pLGUoKSx0aGlzO2Z1bmN0aW9uIGUoKXtpZigwIT09dS5sZW5ndGgpe3ZhciBlLHQscixpLG49dVswXTtpZihKKG8uYmVmb3JlKSl7dmFyIHM9by5iZWZvcmUobi5maWxlLG4uaW5wdXRFbGVtKTtpZihcIm9iamVjdFwiPT10eXBlb2Ygcyl7aWYoXCJhYm9ydFwiPT09cy5hY3Rpb24pcmV0dXJuIGU9XCJBYm9ydEVycm9yXCIsdD1uLmZpbGUscj1uLmlucHV0RWxlbSxpPXMucmVhc29uLHZvaWQoSihvLmVycm9yKSYmby5lcnJvcih7bmFtZTplfSx0LHIsaSkpO2lmKFwic2tpcFwiPT09cy5hY3Rpb24pcmV0dXJuIHZvaWQgaCgpO1wib2JqZWN0XCI9PXR5cGVvZiBzLmNvbmZpZyYmKG4uaW5zdGFuY2VDb25maWc9ZC5leHRlbmQobi5pbnN0YW5jZUNvbmZpZyxzLmNvbmZpZykpfWVsc2UgaWYoXCJza2lwXCI9PT1zKXJldHVybiB2b2lkIGgoKX12YXIgYT1uLmluc3RhbmNlQ29uZmlnLmNvbXBsZXRlO24uaW5zdGFuY2VDb25maWcuY29tcGxldGU9ZnVuY3Rpb24oZSl7SihhKSYmYShlLG4uZmlsZSxuLmlucHV0RWxlbSksaCgpfSxiLnBhcnNlKG4uZmlsZSxuLmluc3RhbmNlQ29uZmlnKX1lbHNlIEooby5jb21wbGV0ZSkmJm8uY29tcGxldGUoKX1mdW5jdGlvbiBoKCl7dS5zcGxpY2UoMCwxKSxlKCl9fX1mdW5jdGlvbiBoKGUpe3RoaXMuX2hhbmRsZT1udWxsLHRoaXMuX2ZpbmlzaGVkPSExLHRoaXMuX2NvbXBsZXRlZD0hMSx0aGlzLl9oYWx0ZWQ9ITEsdGhpcy5faW5wdXQ9bnVsbCx0aGlzLl9iYXNlSW5kZXg9MCx0aGlzLl9wYXJ0aWFsTGluZT1cIlwiLHRoaXMuX3Jvd0NvdW50PTAsdGhpcy5fc3RhcnQ9MCx0aGlzLl9uZXh0Q2h1bms9bnVsbCx0aGlzLmlzRmlyc3RDaHVuaz0hMCx0aGlzLl9jb21wbGV0ZVJlc3VsdHM9e2RhdGE6W10sZXJyb3JzOltdLG1ldGE6e319LGZ1bmN0aW9uKGUpe3ZhciB0PXcoZSk7dC5jaHVua1NpemU9cGFyc2VJbnQodC5jaHVua1NpemUpLGUuc3RlcHx8ZS5jaHVua3x8KHQuY2h1bmtTaXplPW51bGwpO3RoaXMuX2hhbmRsZT1uZXcgcih0KSwodGhpcy5faGFuZGxlLnN0cmVhbWVyPXRoaXMpLl9jb25maWc9dH0uY2FsbCh0aGlzLGUpLHRoaXMucGFyc2VDaHVuaz1mdW5jdGlvbihlLHQpe2lmKHRoaXMuaXNGaXJzdENodW5rJiZKKHRoaXMuX2NvbmZpZy5iZWZvcmVGaXJzdENodW5rKSl7dmFyIHI9dGhpcy5fY29uZmlnLmJlZm9yZUZpcnN0Q2h1bmsoZSk7dm9pZCAwIT09ciYmKGU9cil9dGhpcy5pc0ZpcnN0Q2h1bms9ITEsdGhpcy5faGFsdGVkPSExO3ZhciBpPXRoaXMuX3BhcnRpYWxMaW5lK2U7dGhpcy5fcGFydGlhbExpbmU9XCJcIjt2YXIgbj10aGlzLl9oYW5kbGUucGFyc2UoaSx0aGlzLl9iYXNlSW5kZXgsIXRoaXMuX2ZpbmlzaGVkKTtpZighdGhpcy5faGFuZGxlLnBhdXNlZCgpJiYhdGhpcy5faGFuZGxlLmFib3J0ZWQoKSl7dmFyIHM9bi5tZXRhLmN1cnNvcjt0aGlzLl9maW5pc2hlZHx8KHRoaXMuX3BhcnRpYWxMaW5lPWkuc3Vic3RyaW5nKHMtdGhpcy5fYmFzZUluZGV4KSx0aGlzLl9iYXNlSW5kZXg9cyksbiYmbi5kYXRhJiYodGhpcy5fcm93Q291bnQrPW4uZGF0YS5sZW5ndGgpO3ZhciBhPXRoaXMuX2ZpbmlzaGVkfHx0aGlzLl9jb25maWcucHJldmlldyYmdGhpcy5fcm93Q291bnQ+PXRoaXMuX2NvbmZpZy5wcmV2aWV3O2lmKG8pZi5wb3N0TWVzc2FnZSh7cmVzdWx0czpuLHdvcmtlcklkOmIuV09SS0VSX0lELGZpbmlzaGVkOmF9KTtlbHNlIGlmKEoodGhpcy5fY29uZmlnLmNodW5rKSYmIXQpe2lmKHRoaXMuX2NvbmZpZy5jaHVuayhuLHRoaXMuX2hhbmRsZSksdGhpcy5faGFuZGxlLnBhdXNlZCgpfHx0aGlzLl9oYW5kbGUuYWJvcnRlZCgpKXJldHVybiB2b2lkKHRoaXMuX2hhbHRlZD0hMCk7bj12b2lkIDAsdGhpcy5fY29tcGxldGVSZXN1bHRzPXZvaWQgMH1yZXR1cm4gdGhpcy5fY29uZmlnLnN0ZXB8fHRoaXMuX2NvbmZpZy5jaHVua3x8KHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5kYXRhPXRoaXMuX2NvbXBsZXRlUmVzdWx0cy5kYXRhLmNvbmNhdChuLmRhdGEpLHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5lcnJvcnM9dGhpcy5fY29tcGxldGVSZXN1bHRzLmVycm9ycy5jb25jYXQobi5lcnJvcnMpLHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5tZXRhPW4ubWV0YSksdGhpcy5fY29tcGxldGVkfHwhYXx8IUoodGhpcy5fY29uZmlnLmNvbXBsZXRlKXx8biYmbi5tZXRhLmFib3J0ZWR8fCh0aGlzLl9jb25maWcuY29tcGxldGUodGhpcy5fY29tcGxldGVSZXN1bHRzLHRoaXMuX2lucHV0KSx0aGlzLl9jb21wbGV0ZWQ9ITApLGF8fG4mJm4ubWV0YS5wYXVzZWR8fHRoaXMuX25leHRDaHVuaygpLG59dGhpcy5faGFsdGVkPSEwfSx0aGlzLl9zZW5kRXJyb3I9ZnVuY3Rpb24oZSl7Sih0aGlzLl9jb25maWcuZXJyb3IpP3RoaXMuX2NvbmZpZy5lcnJvcihlKTpvJiZ0aGlzLl9jb25maWcuZXJyb3ImJmYucG9zdE1lc3NhZ2Uoe3dvcmtlcklkOmIuV09SS0VSX0lELGVycm9yOmUsZmluaXNoZWQ6ITF9KX19ZnVuY3Rpb24gbChlKXt2YXIgaTsoZT1lfHx7fSkuY2h1bmtTaXplfHwoZS5jaHVua1NpemU9Yi5SZW1vdGVDaHVua1NpemUpLGguY2FsbCh0aGlzLGUpLHRoaXMuX25leHRDaHVuaz1uP2Z1bmN0aW9uKCl7dGhpcy5fcmVhZENodW5rKCksdGhpcy5fY2h1bmtMb2FkZWQoKX06ZnVuY3Rpb24oKXt0aGlzLl9yZWFkQ2h1bmsoKX0sdGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7dGhpcy5faW5wdXQ9ZSx0aGlzLl9uZXh0Q2h1bmsoKX0sdGhpcy5fcmVhZENodW5rPWZ1bmN0aW9uKCl7aWYodGhpcy5fZmluaXNoZWQpdGhpcy5fY2h1bmtMb2FkZWQoKTtlbHNle2lmKGk9bmV3IFhNTEh0dHBSZXF1ZXN0LHRoaXMuX2NvbmZpZy53aXRoQ3JlZGVudGlhbHMmJihpLndpdGhDcmVkZW50aWFscz10aGlzLl9jb25maWcud2l0aENyZWRlbnRpYWxzKSxufHwoaS5vbmxvYWQ9dih0aGlzLl9jaHVua0xvYWRlZCx0aGlzKSxpLm9uZXJyb3I9dih0aGlzLl9jaHVua0Vycm9yLHRoaXMpKSxpLm9wZW4odGhpcy5fY29uZmlnLmRvd25sb2FkUmVxdWVzdEJvZHk/XCJQT1NUXCI6XCJHRVRcIix0aGlzLl9pbnB1dCwhbiksdGhpcy5fY29uZmlnLmRvd25sb2FkUmVxdWVzdEhlYWRlcnMpe3ZhciBlPXRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RIZWFkZXJzO2Zvcih2YXIgdCBpbiBlKWkuc2V0UmVxdWVzdEhlYWRlcih0LGVbdF0pfWlmKHRoaXMuX2NvbmZpZy5jaHVua1NpemUpe3ZhciByPXRoaXMuX3N0YXJ0K3RoaXMuX2NvbmZpZy5jaHVua1NpemUtMTtpLnNldFJlcXVlc3RIZWFkZXIoXCJSYW5nZVwiLFwiYnl0ZXM9XCIrdGhpcy5fc3RhcnQrXCItXCIrcil9dHJ5e2kuc2VuZCh0aGlzLl9jb25maWcuZG93bmxvYWRSZXF1ZXN0Qm9keSl9Y2F0Y2goZSl7dGhpcy5fY2h1bmtFcnJvcihlLm1lc3NhZ2UpfW4mJjA9PT1pLnN0YXR1cyYmdGhpcy5fY2h1bmtFcnJvcigpfX0sdGhpcy5fY2h1bmtMb2FkZWQ9ZnVuY3Rpb24oKXs0PT09aS5yZWFkeVN0YXRlJiYoaS5zdGF0dXM8MjAwfHw0MDA8PWkuc3RhdHVzP3RoaXMuX2NodW5rRXJyb3IoKToodGhpcy5fc3RhcnQrPXRoaXMuX2NvbmZpZy5jaHVua1NpemU/dGhpcy5fY29uZmlnLmNodW5rU2l6ZTppLnJlc3BvbnNlVGV4dC5sZW5ndGgsdGhpcy5fZmluaXNoZWQ9IXRoaXMuX2NvbmZpZy5jaHVua1NpemV8fHRoaXMuX3N0YXJ0Pj1mdW5jdGlvbihlKXt2YXIgdD1lLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1SYW5nZVwiKTtpZihudWxsPT09dClyZXR1cm4tMTtyZXR1cm4gcGFyc2VJbnQodC5zdWJzdHJpbmcodC5sYXN0SW5kZXhPZihcIi9cIikrMSkpfShpKSx0aGlzLnBhcnNlQ2h1bmsoaS5yZXNwb25zZVRleHQpKSl9LHRoaXMuX2NodW5rRXJyb3I9ZnVuY3Rpb24oZSl7dmFyIHQ9aS5zdGF0dXNUZXh0fHxlO3RoaXMuX3NlbmRFcnJvcihuZXcgRXJyb3IodCkpfX1mdW5jdGlvbiBjKGUpe3ZhciBpLG47KGU9ZXx8e30pLmNodW5rU2l6ZXx8KGUuY2h1bmtTaXplPWIuTG9jYWxDaHVua1NpemUpLGguY2FsbCh0aGlzLGUpO3ZhciBzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBGaWxlUmVhZGVyO3RoaXMuc3RyZWFtPWZ1bmN0aW9uKGUpe3RoaXMuX2lucHV0PWUsbj1lLnNsaWNlfHxlLndlYmtpdFNsaWNlfHxlLm1velNsaWNlLHM/KChpPW5ldyBGaWxlUmVhZGVyKS5vbmxvYWQ9dih0aGlzLl9jaHVua0xvYWRlZCx0aGlzKSxpLm9uZXJyb3I9dih0aGlzLl9jaHVua0Vycm9yLHRoaXMpKTppPW5ldyBGaWxlUmVhZGVyU3luYyx0aGlzLl9uZXh0Q2h1bmsoKX0sdGhpcy5fbmV4dENodW5rPWZ1bmN0aW9uKCl7dGhpcy5fZmluaXNoZWR8fHRoaXMuX2NvbmZpZy5wcmV2aWV3JiYhKHRoaXMuX3Jvd0NvdW50PHRoaXMuX2NvbmZpZy5wcmV2aWV3KXx8dGhpcy5fcmVhZENodW5rKCl9LHRoaXMuX3JlYWRDaHVuaz1mdW5jdGlvbigpe3ZhciBlPXRoaXMuX2lucHV0O2lmKHRoaXMuX2NvbmZpZy5jaHVua1NpemUpe3ZhciB0PU1hdGgubWluKHRoaXMuX3N0YXJ0K3RoaXMuX2NvbmZpZy5jaHVua1NpemUsdGhpcy5faW5wdXQuc2l6ZSk7ZT1uLmNhbGwoZSx0aGlzLl9zdGFydCx0KX12YXIgcj1pLnJlYWRBc1RleHQoZSx0aGlzLl9jb25maWcuZW5jb2RpbmcpO3N8fHRoaXMuX2NodW5rTG9hZGVkKHt0YXJnZXQ6e3Jlc3VsdDpyfX0pfSx0aGlzLl9jaHVua0xvYWRlZD1mdW5jdGlvbihlKXt0aGlzLl9zdGFydCs9dGhpcy5fY29uZmlnLmNodW5rU2l6ZSx0aGlzLl9maW5pc2hlZD0hdGhpcy5fY29uZmlnLmNodW5rU2l6ZXx8dGhpcy5fc3RhcnQ+PXRoaXMuX2lucHV0LnNpemUsdGhpcy5wYXJzZUNodW5rKGUudGFyZ2V0LnJlc3VsdCl9LHRoaXMuX2NodW5rRXJyb3I9ZnVuY3Rpb24oKXt0aGlzLl9zZW5kRXJyb3IoaS5lcnJvcil9fWZ1bmN0aW9uIHAoZSl7dmFyIHI7aC5jYWxsKHRoaXMsZT1lfHx7fSksdGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7cmV0dXJuIHI9ZSx0aGlzLl9uZXh0Q2h1bmsoKX0sdGhpcy5fbmV4dENodW5rPWZ1bmN0aW9uKCl7aWYoIXRoaXMuX2ZpbmlzaGVkKXt2YXIgZSx0PXRoaXMuX2NvbmZpZy5jaHVua1NpemU7cmV0dXJuIHQ/KGU9ci5zdWJzdHJpbmcoMCx0KSxyPXIuc3Vic3RyaW5nKHQpKTooZT1yLHI9XCJcIiksdGhpcy5fZmluaXNoZWQ9IXIsdGhpcy5wYXJzZUNodW5rKGUpfX19ZnVuY3Rpb24gZyhlKXtoLmNhbGwodGhpcyxlPWV8fHt9KTt2YXIgdD1bXSxyPSEwLGk9ITE7dGhpcy5wYXVzZT1mdW5jdGlvbigpe2gucHJvdG90eXBlLnBhdXNlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLl9pbnB1dC5wYXVzZSgpfSx0aGlzLnJlc3VtZT1mdW5jdGlvbigpe2gucHJvdG90eXBlLnJlc3VtZS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5faW5wdXQucmVzdW1lKCl9LHRoaXMuc3RyZWFtPWZ1bmN0aW9uKGUpe3RoaXMuX2lucHV0PWUsdGhpcy5faW5wdXQub24oXCJkYXRhXCIsdGhpcy5fc3RyZWFtRGF0YSksdGhpcy5faW5wdXQub24oXCJlbmRcIix0aGlzLl9zdHJlYW1FbmQpLHRoaXMuX2lucHV0Lm9uKFwiZXJyb3JcIix0aGlzLl9zdHJlYW1FcnJvcil9LHRoaXMuX2NoZWNrSXNGaW5pc2hlZD1mdW5jdGlvbigpe2kmJjE9PT10Lmxlbmd0aCYmKHRoaXMuX2ZpbmlzaGVkPSEwKX0sdGhpcy5fbmV4dENodW5rPWZ1bmN0aW9uKCl7dGhpcy5fY2hlY2tJc0ZpbmlzaGVkKCksdC5sZW5ndGg/dGhpcy5wYXJzZUNodW5rKHQuc2hpZnQoKSk6cj0hMH0sdGhpcy5fc3RyZWFtRGF0YT12KGZ1bmN0aW9uKGUpe3RyeXt0LnB1c2goXCJzdHJpbmdcIj09dHlwZW9mIGU/ZTplLnRvU3RyaW5nKHRoaXMuX2NvbmZpZy5lbmNvZGluZykpLHImJihyPSExLHRoaXMuX2NoZWNrSXNGaW5pc2hlZCgpLHRoaXMucGFyc2VDaHVuayh0LnNoaWZ0KCkpKX1jYXRjaChlKXt0aGlzLl9zdHJlYW1FcnJvcihlKX19LHRoaXMpLHRoaXMuX3N0cmVhbUVycm9yPXYoZnVuY3Rpb24oZSl7dGhpcy5fc3RyZWFtQ2xlYW5VcCgpLHRoaXMuX3NlbmRFcnJvcihlKX0sdGhpcyksdGhpcy5fc3RyZWFtRW5kPXYoZnVuY3Rpb24oKXt0aGlzLl9zdHJlYW1DbGVhblVwKCksaT0hMCx0aGlzLl9zdHJlYW1EYXRhKFwiXCIpfSx0aGlzKSx0aGlzLl9zdHJlYW1DbGVhblVwPXYoZnVuY3Rpb24oKXt0aGlzLl9pbnB1dC5yZW1vdmVMaXN0ZW5lcihcImRhdGFcIix0aGlzLl9zdHJlYW1EYXRhKSx0aGlzLl9pbnB1dC5yZW1vdmVMaXN0ZW5lcihcImVuZFwiLHRoaXMuX3N0cmVhbUVuZCksdGhpcy5faW5wdXQucmVtb3ZlTGlzdGVuZXIoXCJlcnJvclwiLHRoaXMuX3N0cmVhbUVycm9yKX0sdGhpcyl9ZnVuY3Rpb24gcihtKXt2YXIgYSxvLHUsaT1NYXRoLnBvdygyLDUzKSxuPS1pLHM9L15cXHMqLT8oXFxkK1xcLj98XFwuXFxkK3xcXGQrXFwuXFxkKykoW2VFXVstK10/XFxkKyk/XFxzKiQvLGg9L14oKFxcZHs0fS1bMDFdXFxkLVswLTNdXFxkVFswLTJdXFxkOlswLTVdXFxkOlswLTVdXFxkXFwuXFxkKyhbKy1dWzAtMl1cXGQ6WzAtNV1cXGR8WikpfChcXGR7NH0tWzAxXVxcZC1bMC0zXVxcZFRbMC0yXVxcZDpbMC01XVxcZDpbMC01XVxcZChbKy1dWzAtMl1cXGQ6WzAtNV1cXGR8WikpfChcXGR7NH0tWzAxXVxcZC1bMC0zXVxcZFRbMC0yXVxcZDpbMC01XVxcZChbKy1dWzAtMl1cXGQ6WzAtNV1cXGR8WikpKSQvLHQ9dGhpcyxyPTAsZj0wLGQ9ITEsZT0hMSxsPVtdLGM9e2RhdGE6W10sZXJyb3JzOltdLG1ldGE6e319O2lmKEoobS5zdGVwKSl7dmFyIHA9bS5zdGVwO20uc3RlcD1mdW5jdGlvbihlKXtpZihjPWUsXygpKWcoKTtlbHNle2lmKGcoKSwwPT09Yy5kYXRhLmxlbmd0aClyZXR1cm47cis9ZS5kYXRhLmxlbmd0aCxtLnByZXZpZXcmJnI+bS5wcmV2aWV3P28uYWJvcnQoKTooYy5kYXRhPWMuZGF0YVswXSxwKGMsdCkpfX19ZnVuY3Rpb24geShlKXtyZXR1cm5cImdyZWVkeVwiPT09bS5za2lwRW1wdHlMaW5lcz9cIlwiPT09ZS5qb2luKFwiXCIpLnRyaW0oKToxPT09ZS5sZW5ndGgmJjA9PT1lWzBdLmxlbmd0aH1mdW5jdGlvbiBnKCl7cmV0dXJuIGMmJnUmJihrKFwiRGVsaW1pdGVyXCIsXCJVbmRldGVjdGFibGVEZWxpbWl0ZXJcIixcIlVuYWJsZSB0byBhdXRvLWRldGVjdCBkZWxpbWl0aW5nIGNoYXJhY3RlcjsgZGVmYXVsdGVkIHRvICdcIitiLkRlZmF1bHREZWxpbWl0ZXIrXCInXCIpLHU9ITEpLG0uc2tpcEVtcHR5TGluZXMmJihjLmRhdGE9Yy5kYXRhLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4heShlKX0pKSxfKCkmJmZ1bmN0aW9uKCl7aWYoIWMpcmV0dXJuO2Z1bmN0aW9uIGUoZSx0KXtKKG0udHJhbnNmb3JtSGVhZGVyKSYmKGU9bS50cmFuc2Zvcm1IZWFkZXIoZSx0KSksbC5wdXNoKGUpfWlmKEFycmF5LmlzQXJyYXkoYy5kYXRhWzBdKSl7Zm9yKHZhciB0PTA7XygpJiZ0PGMuZGF0YS5sZW5ndGg7dCsrKWMuZGF0YVt0XS5mb3JFYWNoKGUpO2MuZGF0YS5zcGxpY2UoMCwxKX1lbHNlIGMuZGF0YS5mb3JFYWNoKGUpfSgpLGZ1bmN0aW9uKCl7aWYoIWN8fCFtLmhlYWRlciYmIW0uZHluYW1pY1R5cGluZyYmIW0udHJhbnNmb3JtKXJldHVybiBjO2Z1bmN0aW9uIGUoZSx0KXt2YXIgcixpPW0uaGVhZGVyP3t9OltdO2ZvcihyPTA7cjxlLmxlbmd0aDtyKyspe3ZhciBuPXIscz1lW3JdO20uaGVhZGVyJiYobj1yPj1sLmxlbmd0aD9cIl9fcGFyc2VkX2V4dHJhXCI6bFtyXSksbS50cmFuc2Zvcm0mJihzPW0udHJhbnNmb3JtKHMsbikpLHM9dihuLHMpLFwiX19wYXJzZWRfZXh0cmFcIj09PW4/KGlbbl09aVtuXXx8W10saVtuXS5wdXNoKHMpKTppW25dPXN9cmV0dXJuIG0uaGVhZGVyJiYocj5sLmxlbmd0aD9rKFwiRmllbGRNaXNtYXRjaFwiLFwiVG9vTWFueUZpZWxkc1wiLFwiVG9vIG1hbnkgZmllbGRzOiBleHBlY3RlZCBcIitsLmxlbmd0aCtcIiBmaWVsZHMgYnV0IHBhcnNlZCBcIityLGYrdCk6cjxsLmxlbmd0aCYmayhcIkZpZWxkTWlzbWF0Y2hcIixcIlRvb0Zld0ZpZWxkc1wiLFwiVG9vIGZldyBmaWVsZHM6IGV4cGVjdGVkIFwiK2wubGVuZ3RoK1wiIGZpZWxkcyBidXQgcGFyc2VkIFwiK3IsZit0KSksaX12YXIgdD0xOyFjLmRhdGEubGVuZ3RofHxBcnJheS5pc0FycmF5KGMuZGF0YVswXSk/KGMuZGF0YT1jLmRhdGEubWFwKGUpLHQ9Yy5kYXRhLmxlbmd0aCk6Yy5kYXRhPWUoYy5kYXRhLDApO20uaGVhZGVyJiZjLm1ldGEmJihjLm1ldGEuZmllbGRzPWwpO3JldHVybiBmKz10LGN9KCl9ZnVuY3Rpb24gXygpe3JldHVybiBtLmhlYWRlciYmMD09PWwubGVuZ3RofWZ1bmN0aW9uIHYoZSx0KXtyZXR1cm4gcj1lLG0uZHluYW1pY1R5cGluZ0Z1bmN0aW9uJiZ2b2lkIDA9PT1tLmR5bmFtaWNUeXBpbmdbcl0mJihtLmR5bmFtaWNUeXBpbmdbcl09bS5keW5hbWljVHlwaW5nRnVuY3Rpb24ocikpLCEwPT09KG0uZHluYW1pY1R5cGluZ1tyXXx8bS5keW5hbWljVHlwaW5nKT9cInRydWVcIj09PXR8fFwiVFJVRVwiPT09dHx8XCJmYWxzZVwiIT09dCYmXCJGQUxTRVwiIT09dCYmKGZ1bmN0aW9uKGUpe2lmKHMudGVzdChlKSl7dmFyIHQ9cGFyc2VGbG9hdChlKTtpZihuPHQmJnQ8aSlyZXR1cm4hMH1yZXR1cm4hMX0odCk/cGFyc2VGbG9hdCh0KTpoLnRlc3QodCk/bmV3IERhdGUodCk6XCJcIj09PXQ/bnVsbDp0KTp0O3ZhciByfWZ1bmN0aW9uIGsoZSx0LHIsaSl7dmFyIG49e3R5cGU6ZSxjb2RlOnQsbWVzc2FnZTpyfTt2b2lkIDAhPT1pJiYobi5yb3c9aSksYy5lcnJvcnMucHVzaChuKX10aGlzLnBhcnNlPWZ1bmN0aW9uKGUsdCxyKXt2YXIgaT1tLnF1b3RlQ2hhcnx8J1wiJztpZihtLm5ld2xpbmV8fChtLm5ld2xpbmU9ZnVuY3Rpb24oZSx0KXtlPWUuc3Vic3RyaW5nKDAsMTA0ODU3Nik7dmFyIHI9bmV3IFJlZ0V4cChRKHQpK1wiKFteXSo/KVwiK1EodCksXCJnbVwiKSxpPShlPWUucmVwbGFjZShyLFwiXCIpKS5zcGxpdChcIlxcclwiKSxuPWUuc3BsaXQoXCJcXG5cIikscz0xPG4ubGVuZ3RoJiZuWzBdLmxlbmd0aDxpWzBdLmxlbmd0aDtpZigxPT09aS5sZW5ndGh8fHMpcmV0dXJuXCJcXG5cIjtmb3IodmFyIGE9MCxvPTA7bzxpLmxlbmd0aDtvKyspXCJcXG5cIj09PWlbb11bMF0mJmErKztyZXR1cm4gYT49aS5sZW5ndGgvMj9cIlxcclxcblwiOlwiXFxyXCJ9KGUsaSkpLHU9ITEsbS5kZWxpbWl0ZXIpSihtLmRlbGltaXRlcikmJihtLmRlbGltaXRlcj1tLmRlbGltaXRlcihlKSxjLm1ldGEuZGVsaW1pdGVyPW0uZGVsaW1pdGVyKTtlbHNle3ZhciBuPWZ1bmN0aW9uKGUsdCxyLGksbil7dmFyIHMsYSxvLHU7bj1ufHxbXCIsXCIsXCJcXHRcIixcInxcIixcIjtcIixiLlJFQ09SRF9TRVAsYi5VTklUX1NFUF07Zm9yKHZhciBoPTA7aDxuLmxlbmd0aDtoKyspe3ZhciBmPW5baF0sZD0wLGw9MCxjPTA7bz12b2lkIDA7Zm9yKHZhciBwPW5ldyBFKHtjb21tZW50czppLGRlbGltaXRlcjpmLG5ld2xpbmU6dCxwcmV2aWV3OjEwfSkucGFyc2UoZSksZz0wO2c8cC5kYXRhLmxlbmd0aDtnKyspaWYociYmeShwLmRhdGFbZ10pKWMrKztlbHNle3ZhciBfPXAuZGF0YVtnXS5sZW5ndGg7bCs9Xyx2b2lkIDAhPT1vPzA8XyYmKGQrPU1hdGguYWJzKF8tbyksbz1fKTpvPV99MDxwLmRhdGEubGVuZ3RoJiYobC89cC5kYXRhLmxlbmd0aC1jKSwodm9pZCAwPT09YXx8ZDw9YSkmJih2b2lkIDA9PT11fHx1PGwpJiYxLjk5PGwmJihhPWQscz1mLHU9bCl9cmV0dXJue3N1Y2Nlc3NmdWw6ISEobS5kZWxpbWl0ZXI9cyksYmVzdERlbGltaXRlcjpzfX0oZSxtLm5ld2xpbmUsbS5za2lwRW1wdHlMaW5lcyxtLmNvbW1lbnRzLG0uZGVsaW1pdGVyc1RvR3Vlc3MpO24uc3VjY2Vzc2Z1bD9tLmRlbGltaXRlcj1uLmJlc3REZWxpbWl0ZXI6KHU9ITAsbS5kZWxpbWl0ZXI9Yi5EZWZhdWx0RGVsaW1pdGVyKSxjLm1ldGEuZGVsaW1pdGVyPW0uZGVsaW1pdGVyfXZhciBzPXcobSk7cmV0dXJuIG0ucHJldmlldyYmbS5oZWFkZXImJnMucHJldmlldysrLGE9ZSxvPW5ldyBFKHMpLGM9by5wYXJzZShhLHQsciksZygpLGQ/e21ldGE6e3BhdXNlZDohMH19OmN8fHttZXRhOntwYXVzZWQ6ITF9fX0sdGhpcy5wYXVzZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gZH0sdGhpcy5wYXVzZT1mdW5jdGlvbigpe2Q9ITAsby5hYm9ydCgpLGE9SihtLmNodW5rKT9cIlwiOmEuc3Vic3RyaW5nKG8uZ2V0Q2hhckluZGV4KCkpfSx0aGlzLnJlc3VtZT1mdW5jdGlvbigpe3Quc3RyZWFtZXIuX2hhbHRlZD8oZD0hMSx0LnN0cmVhbWVyLnBhcnNlQ2h1bmsoYSwhMCkpOnNldFRpbWVvdXQodC5yZXN1bWUsMyl9LHRoaXMuYWJvcnRlZD1mdW5jdGlvbigpe3JldHVybiBlfSx0aGlzLmFib3J0PWZ1bmN0aW9uKCl7ZT0hMCxvLmFib3J0KCksYy5tZXRhLmFib3J0ZWQ9ITAsSihtLmNvbXBsZXRlKSYmbS5jb21wbGV0ZShjKSxhPVwiXCJ9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIGUucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csXCJcXFxcJCZcIil9ZnVuY3Rpb24gRShqKXt2YXIgeixNPShqPWp8fHt9KS5kZWxpbWl0ZXIsUD1qLm5ld2xpbmUsVT1qLmNvbW1lbnRzLHE9ai5zdGVwLE49ai5wcmV2aWV3LEI9ai5mYXN0TW9kZSxLPXo9dm9pZCAwPT09ai5xdW90ZUNoYXJ8fG51bGw9PT1qLnF1b3RlQ2hhcj8nXCInOmoucXVvdGVDaGFyO2lmKHZvaWQgMCE9PWouZXNjYXBlQ2hhciYmKEs9ai5lc2NhcGVDaGFyKSwoXCJzdHJpbmdcIiE9dHlwZW9mIE18fC0xPGIuQkFEX0RFTElNSVRFUlMuaW5kZXhPZihNKSkmJihNPVwiLFwiKSxVPT09TSl0aHJvdyBuZXcgRXJyb3IoXCJDb21tZW50IGNoYXJhY3RlciBzYW1lIGFzIGRlbGltaXRlclwiKTshMD09PVU/VT1cIiNcIjooXCJzdHJpbmdcIiE9dHlwZW9mIFV8fC0xPGIuQkFEX0RFTElNSVRFUlMuaW5kZXhPZihVKSkmJihVPSExKSxcIlxcblwiIT09UCYmXCJcXHJcIiE9PVAmJlwiXFxyXFxuXCIhPT1QJiYoUD1cIlxcblwiKTt2YXIgVz0wLEg9ITE7dGhpcy5wYXJzZT1mdW5jdGlvbihpLHQscil7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGkpdGhyb3cgbmV3IEVycm9yKFwiSW5wdXQgbXVzdCBiZSBhIHN0cmluZ1wiKTt2YXIgbj1pLmxlbmd0aCxlPU0ubGVuZ3RoLHM9UC5sZW5ndGgsYT1VLmxlbmd0aCxvPUoocSksdT1bXSxoPVtdLGY9W10sZD1XPTA7aWYoIWkpcmV0dXJuIEwoKTtpZihqLmhlYWRlciYmIXQpe3ZhciBsPWkuc3BsaXQoUClbMF0uc3BsaXQoTSksYz1bXSxwPXt9LGc9ITE7Zm9yKHZhciBfIGluIGwpe3ZhciBtPWxbX107SihqLnRyYW5zZm9ybUhlYWRlcikmJihtPWoudHJhbnNmb3JtSGVhZGVyKG0sXykpO3ZhciB5PW0sdj1wW21dfHwwO2ZvcigwPHYmJihnPSEwLHk9bStcIl9cIit2KSxwW21dPXYrMTtjLmluY2x1ZGVzKHkpOyl5PXkrXCJfXCIrdjtjLnB1c2goeSl9aWYoZyl7dmFyIGs9aS5zcGxpdChQKTtrWzBdPWMuam9pbihNKSxpPWsuam9pbihQKX19aWYoQnx8ITEhPT1CJiYtMT09PWkuaW5kZXhPZih6KSl7Zm9yKHZhciBiPWkuc3BsaXQoUCksRT0wO0U8Yi5sZW5ndGg7RSsrKXtpZihmPWJbRV0sVys9Zi5sZW5ndGgsRSE9PWIubGVuZ3RoLTEpVys9UC5sZW5ndGg7ZWxzZSBpZihyKXJldHVybiBMKCk7aWYoIVV8fGYuc3Vic3RyaW5nKDAsYSkhPT1VKXtpZihvKXtpZih1PVtdLEkoZi5zcGxpdChNKSksRigpLEgpcmV0dXJuIEwoKX1lbHNlIEkoZi5zcGxpdChNKSk7aWYoTiYmTjw9RSlyZXR1cm4gdT11LnNsaWNlKDAsTiksTCghMCl9fXJldHVybiBMKCl9Zm9yKHZhciB3PWkuaW5kZXhPZihNLFcpLFI9aS5pbmRleE9mKFAsVyksQz1uZXcgUmVnRXhwKFEoSykrUSh6KSxcImdcIiksUz1pLmluZGV4T2YoeixXKTs7KWlmKGlbV10hPT16KWlmKFUmJjA9PT1mLmxlbmd0aCYmaS5zdWJzdHJpbmcoVyxXK2EpPT09VSl7aWYoLTE9PT1SKXJldHVybiBMKCk7Vz1SK3MsUj1pLmluZGV4T2YoUCxXKSx3PWkuaW5kZXhPZihNLFcpfWVsc2UgaWYoLTEhPT13JiYodzxSfHwtMT09PVIpKWYucHVzaChpLnN1YnN0cmluZyhXLHcpKSxXPXcrZSx3PWkuaW5kZXhPZihNLFcpO2Vsc2V7aWYoLTE9PT1SKWJyZWFrO2lmKGYucHVzaChpLnN1YnN0cmluZyhXLFIpKSxEKFIrcyksbyYmKEYoKSxIKSlyZXR1cm4gTCgpO2lmKE4mJnUubGVuZ3RoPj1OKXJldHVybiBMKCEwKX1lbHNlIGZvcihTPVcsVysrOzspe2lmKC0xPT09KFM9aS5pbmRleE9mKHosUysxKSkpcmV0dXJuIHJ8fGgucHVzaCh7dHlwZTpcIlF1b3Rlc1wiLGNvZGU6XCJNaXNzaW5nUXVvdGVzXCIsbWVzc2FnZTpcIlF1b3RlZCBmaWVsZCB1bnRlcm1pbmF0ZWRcIixyb3c6dS5sZW5ndGgsaW5kZXg6V30pLFQoKTtpZihTPT09bi0xKXJldHVybiBUKGkuc3Vic3RyaW5nKFcsUykucmVwbGFjZShDLHopKTtpZih6IT09S3x8aVtTKzFdIT09Syl7aWYoej09PUt8fDA9PT1TfHxpW1MtMV0hPT1LKXstMSE9PXcmJnc8UysxJiYodz1pLmluZGV4T2YoTSxTKzEpKSwtMSE9PVImJlI8UysxJiYoUj1pLmluZGV4T2YoUCxTKzEpKTt2YXIgTz1BKC0xPT09Uj93Ok1hdGgubWluKHcsUikpO2lmKGkuc3Vic3RyKFMrMStPLGUpPT09TSl7Zi5wdXNoKGkuc3Vic3RyaW5nKFcsUykucmVwbGFjZShDLHopKSxpW1c9UysxK08rZV0hPT16JiYoUz1pLmluZGV4T2YoeixXKSksdz1pLmluZGV4T2YoTSxXKSxSPWkuaW5kZXhPZihQLFcpO2JyZWFrfXZhciB4PUEoUik7aWYoaS5zdWJzdHJpbmcoUysxK3gsUysxK3grcyk9PT1QKXtpZihmLnB1c2goaS5zdWJzdHJpbmcoVyxTKS5yZXBsYWNlKEMseikpLEQoUysxK3grcyksdz1pLmluZGV4T2YoTSxXKSxTPWkuaW5kZXhPZih6LFcpLG8mJihGKCksSCkpcmV0dXJuIEwoKTtpZihOJiZ1Lmxlbmd0aD49TilyZXR1cm4gTCghMCk7YnJlYWt9aC5wdXNoKHt0eXBlOlwiUXVvdGVzXCIsY29kZTpcIkludmFsaWRRdW90ZXNcIixtZXNzYWdlOlwiVHJhaWxpbmcgcXVvdGUgb24gcXVvdGVkIGZpZWxkIGlzIG1hbGZvcm1lZFwiLHJvdzp1Lmxlbmd0aCxpbmRleDpXfSksUysrfX1lbHNlIFMrK31yZXR1cm4gVCgpO2Z1bmN0aW9uIEkoZSl7dS5wdXNoKGUpLGQ9V31mdW5jdGlvbiBBKGUpe3ZhciB0PTA7aWYoLTEhPT1lKXt2YXIgcj1pLnN1YnN0cmluZyhTKzEsZSk7ciYmXCJcIj09PXIudHJpbSgpJiYodD1yLmxlbmd0aCl9cmV0dXJuIHR9ZnVuY3Rpb24gVChlKXtyZXR1cm4gcnx8KHZvaWQgMD09PWUmJihlPWkuc3Vic3RyaW5nKFcpKSxmLnB1c2goZSksVz1uLEkoZiksbyYmRigpKSxMKCl9ZnVuY3Rpb24gRChlKXtXPWUsSShmKSxmPVtdLFI9aS5pbmRleE9mKFAsVyl9ZnVuY3Rpb24gTChlKXtyZXR1cm57ZGF0YTp1LGVycm9yczpoLG1ldGE6e2RlbGltaXRlcjpNLGxpbmVicmVhazpQLGFib3J0ZWQ6SCx0cnVuY2F0ZWQ6ISFlLGN1cnNvcjpkKyh0fHwwKX19fWZ1bmN0aW9uIEYoKXtxKEwoKSksdT1bXSxoPVtdfX0sdGhpcy5hYm9ydD1mdW5jdGlvbigpe0g9ITB9LHRoaXMuZ2V0Q2hhckluZGV4PWZ1bmN0aW9uKCl7cmV0dXJuIFd9fWZ1bmN0aW9uIF8oZSl7dmFyIHQ9ZS5kYXRhLHI9YVt0LndvcmtlcklkXSxpPSExO2lmKHQuZXJyb3Ipci51c2VyRXJyb3IodC5lcnJvcix0LmZpbGUpO2Vsc2UgaWYodC5yZXN1bHRzJiZ0LnJlc3VsdHMuZGF0YSl7dmFyIG49e2Fib3J0OmZ1bmN0aW9uKCl7aT0hMCxtKHQud29ya2VySWQse2RhdGE6W10sZXJyb3JzOltdLG1ldGE6e2Fib3J0ZWQ6ITB9fSl9LHBhdXNlOnkscmVzdW1lOnl9O2lmKEooci51c2VyU3RlcCkpe2Zvcih2YXIgcz0wO3M8dC5yZXN1bHRzLmRhdGEubGVuZ3RoJiYoci51c2VyU3RlcCh7ZGF0YTp0LnJlc3VsdHMuZGF0YVtzXSxlcnJvcnM6dC5yZXN1bHRzLmVycm9ycyxtZXRhOnQucmVzdWx0cy5tZXRhfSxuKSwhaSk7cysrKTtkZWxldGUgdC5yZXN1bHRzfWVsc2UgSihyLnVzZXJDaHVuaykmJihyLnVzZXJDaHVuayh0LnJlc3VsdHMsbix0LmZpbGUpLGRlbGV0ZSB0LnJlc3VsdHMpfXQuZmluaXNoZWQmJiFpJiZtKHQud29ya2VySWQsdC5yZXN1bHRzKX1mdW5jdGlvbiBtKGUsdCl7dmFyIHI9YVtlXTtKKHIudXNlckNvbXBsZXRlKSYmci51c2VyQ29tcGxldGUodCksci50ZXJtaW5hdGUoKSxkZWxldGUgYVtlXX1mdW5jdGlvbiB5KCl7dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkLlwiKX1mdW5jdGlvbiB3KGUpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxudWxsPT09ZSlyZXR1cm4gZTt2YXIgdD1BcnJheS5pc0FycmF5KGUpP1tdOnt9O2Zvcih2YXIgciBpbiBlKXRbcl09dyhlW3JdKTtyZXR1cm4gdH1mdW5jdGlvbiB2KGUsdCl7cmV0dXJuIGZ1bmN0aW9uKCl7ZS5hcHBseSh0LGFyZ3VtZW50cyl9fWZ1bmN0aW9uIEooZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZX1yZXR1cm4gbyYmKGYub25tZXNzYWdlPWZ1bmN0aW9uKGUpe3ZhciB0PWUuZGF0YTt2b2lkIDA9PT1iLldPUktFUl9JRCYmdCYmKGIuV09SS0VSX0lEPXQud29ya2VySWQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0LmlucHV0KWYucG9zdE1lc3NhZ2Uoe3dvcmtlcklkOmIuV09SS0VSX0lELHJlc3VsdHM6Yi5wYXJzZSh0LmlucHV0LHQuY29uZmlnKSxmaW5pc2hlZDohMH0pO2Vsc2UgaWYoZi5GaWxlJiZ0LmlucHV0IGluc3RhbmNlb2YgRmlsZXx8dC5pbnB1dCBpbnN0YW5jZW9mIE9iamVjdCl7dmFyIHI9Yi5wYXJzZSh0LmlucHV0LHQuY29uZmlnKTtyJiZmLnBvc3RNZXNzYWdlKHt3b3JrZXJJZDpiLldPUktFUl9JRCxyZXN1bHRzOnIsZmluaXNoZWQ6ITB9KX19KSwobC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShoLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yPWwsKGMucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoaC5wcm90b3R5cGUpKS5jb25zdHJ1Y3Rvcj1jLChwLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHAucHJvdG90eXBlKSkuY29uc3RydWN0b3I9cCwoZy5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShoLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yPWcsYn0pOyIsIi8vIFRPRE8gZml4IHF1ZXN0aW9uIGRhdGEgZm9yIG1vZHVsZVxyXG5cclxuY29uc3QgZ3JpZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyaWRXcmFwcGVyXCIpO1xyXG5cclxuLy8gY2hhbmdlIHRoaXMgdG8gdXNlIHF1ZXN0aW9uIG9iamVjdFxyXG4vLyBncmlkIGNvdW50IGJhc2VkIG9uIHF1ZXN0aW9uT2JqIGtleXMgbGVuZ3RocywgMiBkaW1lbnNpb25zLCBjYXRlZ29yeSBsZW5ndGggKyBxdWVzdGlvbiBjb3VudCBsZW5ndGggKyB0b3BpY1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUXVlc3Rpb25HcmlkKHF1ZXN0aW9uT2JqZWN0KSB7XHJcbiAgY29uc3QgY2F0ZWdvcnlDb3VudCA9IE9iamVjdC5rZXlzKHF1ZXN0aW9uT2JqZWN0KS5sZW5ndGg7XHJcblxyXG4gIGNvbnN0IHF1ZXN0aW9uQ291bnQgPSBbXTtcclxuXHJcbiAgLy8gc2V0IGdyaWQgY29sdW1uIGNvdW50IGVxdWFsIHRvIG51bWJlciBvZiBxdWVzdGlvbiBjYXRlZ29yaWVzXHJcbiAgY29uc3QgZ3JpZFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyaWRXcmFwcGVyXCIpO1xyXG4gIGdyaWRXcmFwcGVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Y2F0ZWdvcnlDb3VudH0sMWZyKWA7XHJcblxyXG4gIC8vIGdlbmVyYXRlIHRvcGljIHRpbGVzXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yeUNvdW50OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGNhdGVnb3J5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHRpbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGNhdGVnb3J5RGl2LmlkID0gYGNhdGVnb3J5JHtpfWA7XHJcbiAgICBjYXRlZ29yeURpdi5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlcIik7XHJcbiAgICB0aWxlRGl2LmNsYXNzTGlzdC5hZGQoXCJxdWVzdGlvblRvcGljXCIpO1xyXG4gICAgdGlsZURpdi50ZXh0Q29udGVudCA9IHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXS50b3BpYztcclxuICAgIGNhdGVnb3J5RGl2LmFwcGVuZCh0aWxlRGl2KTtcclxuXHJcbiAgICBncmlkQXJlYS5hcHBlbmQoY2F0ZWdvcnlEaXYpO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2VuZXJhdGUgcXVlc3Rpb24gY291bnRzIGZvciBlYWNoIGNhdGVnb3J5XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yeUNvdW50OyBpICs9IDEpIHtcclxuICAgIC8vIC0xIGZyb20gbGVuZ3RoIHRvIGFjY291bnQgZm9yICd0b3BpYycga2V5XHJcbiAgICBxdWVzdGlvbkNvdW50LnB1c2goT2JqZWN0LmtleXMocXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdKS5sZW5ndGggLSAxKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHF1ZXN0aW9uQ291bnQpO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2VuZXJhdGUgcXVlc3Rpb24gdGlsZXMgd2l0aCB2YWx1ZXNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVnb3J5Q291bnQ7IGkgKz0gMSkge1xyXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPCBxdWVzdGlvbkNvdW50W2ldICsgMTsgaiArPSAxKSB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3J5RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNhdGVnb3J5JHtpfWApO1xyXG4gICAgICBjb25zdCB0aWxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgdGlsZURpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb25cIik7XHJcbiAgICAgIHRpbGVEaXYudGV4dENvbnRlbnQgPVxyXG4gICAgICAgIHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXVtgcXVlc3Rpb24ke2p9YF0udmFsdWU7XHJcblxyXG4gICAgICAvLyBhcHBseSBzdG9jayB2YWx1ZXMgb2YgMTAwIGluY3JlbWVudCBwZXIgcm93IGlmIGEgdmFsdWVcclxuICAgICAgLy8gaXMgbm90IGEgc3VwcGxpZWQgZnJvbSBxdWVzdGlvbk9ialxyXG4gICAgICBpZiAocXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdW2BxdWVzdGlvbiR7an1gXS52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGlsZURpdi50ZXh0Q29udGVudCA9IGAke2kgKyAxfTAwYDtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaSAqIGopO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGVnb3J5RGl2LmFwcGVuZCh0aWxlRGl2KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIHJlbW92ZSB0aGlzIGxhdGVyXHJcbmV4cG9ydCBjb25zdCB0ZXN0ID0gNztcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGxheWVyKG5hbWUsIG51bWJlciwgc2NvcmUpIHtcclxuICAvLyBhc3NpZ24gdG8gb2JqIHJhdGhlciB0aGFuIHRoaXMsIHNpbmNlIHRoaXMgPT09IHVuZGVmaW5lZCBpbiBtb2R1bGVzXHJcbiAgY29uc3Qgb2JqID0ge307XHJcbiAgb2JqLmRpc3BsYXlQbGF5ZXJOYW1lID0gZnVuY3Rpb24gZGlzcGxheVBsYXllck5hbWUocGxheWVyTnVtYmVyKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgI3BsYXllciR7cGxheWVyTnVtYmVyfWAsXHJcbiAgICApLnRleHRDb250ZW50ID0gYCR7dGhpcy5uYW1lfTpgO1xyXG4gIH07XHJcbiAgb2JqLmNoYW5nZVBsYXllck5hbWUgPSBmdW5jdGlvbiBjaGFuZ2VQbGF5ZXJOYW1lKCkge1xyXG4gICAgY29uc3QgdGVtcE5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICB0aGlzLm5hbWUgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCIsIFwiSm9zaCBHdW5zb25cIik7XHJcbiAgICAvLyBwcmV2ZW50IHBsYXllciBuYW1lIGZyb20gZGlzYXBwZWFyaW5nIGJ5IHVzaW5nIHByZXZpb3VzIG5hbWVcclxuICAgIGlmICh0aGlzLm5hbWUgPT09IG51bGwpIHRoaXMubmFtZSA9IHRlbXBOYW1lO1xyXG4gICAgdGhpcy5kaXNwbGF5UGxheWVyTmFtZSh0aGlzLm51bWJlcik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICB9O1xyXG4gIG9iai5kaXNwbGF5UGxheWVyU2NvcmUgPSBmdW5jdGlvbiBkaXNwbGF5UGxheWVyU2NvcmUoXHJcbiAgICBwbGF5ZXJOdW1iZXIsXHJcbiAgICBzY29yZVRvQWRkLFxyXG4gICkge1xyXG4gICAgLy8gdGhhbmsgYWJvdXQgc3BsaXR0aW5nIHRoaXMgZnVuY3Rpb24gaW50byB0d28gZnVuY3Rpb25zXHJcbiAgICB0aGlzLnNjb3JlICs9IHNjb3JlVG9BZGQ7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyJHtwbGF5ZXJOdW1iZXJ9U2NvcmVgKS50ZXh0Q29udGVudCA9XHJcbiAgICAgIHRoaXMuc2NvcmU7XHJcbiAgfTtcclxuICBvYmoubmFtZSA9IG5hbWU7XHJcbiAgb2JqLnNjb3JlID0gc2NvcmU7XHJcbiAgb2JqLm51bWJlciA9IG51bWJlcjtcclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQbGF5ZXJzT2JqKHBsYXllckNvdW50KSB7XHJcbiAgY29uc3Qgc3RvY2tOYW1lcyA9IFtcIkNoYXNlXCIsIFwiRXRoYW5cIiwgXCJTdGFuXCIsIFwiVGF5bG9yXCJdO1xyXG4gIGNvbnN0IHBsYXllcnMgPSB7fTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBsYXllckNvdW50ICsgMTsgaSArPSAxKSB7XHJcbiAgICBwbGF5ZXJzW2ldID0gZ2VuZXJhdGVQbGF5ZXIoc3RvY2tOYW1lc1tpIC0gMV0sIGksIDApO1xyXG4gIH1cclxuICByZXR1cm4gcGxheWVycztcclxufVxyXG4vLyBjb25zdCBwbGF5ZXIxID0gZ2VuZXJhdGVQbGF5ZXIoXCJDaGFzZVwiLCAxLCAwKTtcclxuLy8gY29uc3QgcGxheWVyMiA9IGdlbmVyYXRlUGxheWVyKFwiRXRoYW5cIiwgMiwgMCk7XHJcbi8vIGNvbnN0IHBsYXllcjMgPSBnZW5lcmF0ZVBsYXllcihcIlN0YW5cIiwgMywgMCk7XHJcbi8vIGNvbnN0IHBsYXllcjQgPSBnZW5lcmF0ZVBsYXllcihcIlRheWxvclwiLCA0LCAwKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwbGF5ZXJOYW1lcyA9IFtcInRlc3RcIl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbFBsYXllclNldHVwKHBsYXllcjEsIHBsYXllcjIsIHBsYXllcjMsIHBsYXllcjQpIHtcclxuICAvLyBkaXNwbGF5IGRlZmF1bHQgdXNlcm5hbWVzXHJcbiAgcGxheWVyMS5kaXNwbGF5UGxheWVyTmFtZSgxKTtcclxuICBwbGF5ZXIyLmRpc3BsYXlQbGF5ZXJOYW1lKDIpO1xyXG4gIHBsYXllcjMuZGlzcGxheVBsYXllck5hbWUoMyk7XHJcbiAgcGxheWVyNC5kaXNwbGF5UGxheWVyTmFtZSg0KTtcclxuICAvLyBkaXNwbGF5IGludGlhbCAoemVybykgcGxheWVyIHNjb3Jlc1xyXG4gIHBsYXllcjEuZGlzcGxheVBsYXllclNjb3JlKDEsIDApO1xyXG4gIHBsYXllcjIuZGlzcGxheVBsYXllclNjb3JlKDIsIDApO1xyXG4gIHBsYXllcjMuZGlzcGxheVBsYXllclNjb3JlKDMsIDApO1xyXG4gIHBsYXllcjQuZGlzcGxheVBsYXllclNjb3JlKDQsIDApO1xyXG5cclxuICAvLyBwbGF5ZXIgbmFtZXMgY2FuIGJlIGNsaWNrZWQgdG8gb3BlbiB0aGUgY2hhbmdlIGRpYWxvZ3VlXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXIxXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwbGF5ZXIxLmNoYW5nZVBsYXllck5hbWUoKTtcclxuICB9KTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcjJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHBsYXllcjIuY2hhbmdlUGxheWVyTmFtZSgpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyM1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcGxheWVyMy5jaGFuZ2VQbGF5ZXJOYW1lKCk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXI0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwbGF5ZXI0LmNoYW5nZVBsYXllck5hbWUoKTtcclxuICB9KTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFBhcGEgZnJvbSBcInBhcGFwYXJzZVwiO1xyXG5pbXBvcnQgKiBhcyBib2FyZCBmcm9tIFwiLi9ib2FyZFwiO1xyXG5pbXBvcnQgKiBhcyBwbGF5ZXJzIGZyb20gXCIuL3BsYXllcnNcIjtcclxuXHJcbmxldCBxdWVzdGlvbkRhdGEgPSBbXTtcclxuXHJcbi8vIGNvbnZlcnQgdGhpcyB0byBhIGZ1bmN0aW9uIGluIHBsYXllcnMgbW9kdWxlXHJcbmV4cG9ydCBjb25zdCBwbGF5ZXJPYmogPSBwbGF5ZXJzLmdlbmVyYXRlUGxheWVyc09iaig0KTtcclxuXHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVRdWVzdGlvbk9iamVjdEZyb21DU1YoKSB7XHJcbiAgY29uc3QgcXVlc3Rpb25PYmogPSB7fTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVzdGlvbkRhdGEubGVuZ3RoIC8gMjsgaSArPSAxKSB7XHJcbiAgICBxdWVzdGlvbk9ialtgY2F0ZWdvcnkke2l9YF0gPSB7XHJcbiAgICAgIHRvcGljOiBxdWVzdGlvbkRhdGFbMiAqIGldWzBdLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBzdGFydCBmcm9tIGluZGV4IDEgdG8gYWNjb3VudCBmb3IgY3N2IHRvcGljIGZvcm1hdHRpbmdcclxuICAgIGZvciAobGV0IGogPSAxOyBqIDwgcXVlc3Rpb25EYXRhWzBdLmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHF1ZXN0aW9uRGF0YVsyICogaV0ubGVuZ3RoKTtcclxuICAgICAgcXVlc3Rpb25PYmpbYGNhdGVnb3J5JHtpfWBdW2BxdWVzdGlvbiR7an1gXSA9IHtcclxuICAgICAgICBxdWVzdGlvbjogcXVlc3Rpb25EYXRhWzIgKiBpXVtqXSxcclxuICAgICAgICBhbnN3ZXI6IHF1ZXN0aW9uRGF0YVsyICogaSArIDFdW2pdLFxyXG4gICAgICB9O1xyXG4gICAgICAvLyBxdWVzdGlvbk9ialtpXVtgcXVlc3Rpb24ke2p9YF0gPSBxdWVzdGlvbkRhdGFbMiAqIGldW2pdO1xyXG4gICAgICAvLyBxdWVzdGlvbk9ialtpXVtgYW5zd2VyJHtqfWBdID0gcXVlc3Rpb25EYXRhWzIgKiBpICsgMV1bal07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBxdWVzdGlvbk9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXN0aW9uQ291bnQocXVlc3Rpb25PYmplY3QpIHt9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUXVlc3Rpb25Nb2RhbEV2ZW50TGlzdGVuZXIocXVlc3Rpb25PYmplY3QpIHtcclxuICBjb25zdCBxdWVzdGlvblRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWVzdGlvblwiKTtcclxuICBjb25zb2xlLmxvZyhxdWVzdGlvblRpbGVzKTtcclxuICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXN0aW9uVGlsZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAvLyAgIHF1ZXN0aW9uVGlsZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAvLyAgICAgaWYgKHF1ZXN0aW9uVGlsZXNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFrZW5cIikpIHJldHVybjtcclxuICAvLyAgICAgaWYgKGkgPCA2KVxyXG4gIC8vICAgICAgIG1vZGFsLmlubmVySFRNTCA9IHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXS5xdWVzdGlvbjEucXVlc3Rpb247XHJcbiAgLy8gICAgIGlmIChpIDwgMTIgJiYgaSA+IDUpXHJcbiAgLy8gICAgICAgbW9kYWwuaW5uZXJIVE1MID0gcXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpIC0gNn1gXS5xdWVzdGlvbjIucXVlc3Rpb247XHJcbiAgLy8gICAgIGlmIChpIDwgMTggJiYgaSA+IDExKVxyXG4gIC8vICAgICAgIG1vZGFsLmlubmVySFRNTCA9XHJcbiAgLy8gICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2kgLSAxMn1gXS5xdWVzdGlvbjMucXVlc3Rpb247XHJcbiAgLy8gICAgIGlmIChpIDwgMjQgJiYgaSA+IDE3KVxyXG4gIC8vICAgICAgIG1vZGFsLmlubmVySFRNTCA9XHJcbiAgLy8gICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2kgLSAxOH1gXS5xdWVzdGlvbjQucXVlc3Rpb247XHJcbiAgLy8gICAgIGlmIChpIDwgMzAgJiYgaSA+IDIzKVxyXG4gIC8vICAgICAgIG1vZGFsLmlubmVySFRNTCA9XHJcbiAgLy8gICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2kgLSAyNH1gXS5xdWVzdGlvbjUucXVlc3Rpb247XHJcbiAgLy8gICAgIGlmIChpIDwgMzYgJiYgaSA+IDI5KVxyXG4gIC8vICAgICAgIG1vZGFsLmlubmVySFRNTCA9XHJcbiAgLy8gICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2kgLSAzMH1gXS5xdWVzdGlvbjYucXVlc3Rpb247XHJcblxyXG4gIC8vICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIC8vICAgICBidG4udGV4dENvbnRlbnQgPSBcIkFuc3dlclwiO1xyXG5cclxuICAvLyAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgLy8gICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJidXR0b25EaXNhYmxlZFwiKSkgcmV0dXJuO1xyXG4gIC8vICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uRGlzYWJsZWRcIik7XHJcblxyXG4gIC8vICAgICAgIGNvbnN0IHBsYXllck5hbWVzID0gW1xyXG4gIC8vICAgICAgICAgcGxheWVyT2JqWzFdLm5hbWUsXHJcbiAgLy8gICAgICAgICBwbGF5ZXJPYmpbMl0ubmFtZSxcclxuICAvLyAgICAgICAgIHBsYXllck9ialszXS5uYW1lLFxyXG4gIC8vICAgICAgICAgcGxheWVyT2JqWzRdLm5hbWUsXHJcbiAgLy8gICAgICAgXTtcclxuICAvLyAgICAgICBjb25zdCBwbGF5ZXJDb3VudCA9IHBsYXllck5hbWVzLmxlbmd0aDtcclxuXHJcbiAgLy8gICAgICAgaWYgKGkgPCA2KVxyXG4gIC8vICAgICAgICAgbW9kYWwuaW5uZXJIVE1MICs9IHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXS5xdWVzdGlvbjEuYW5zd2VyO1xyXG4gIC8vICAgICAgIGlmIChpIDwgMTIgJiYgaSA+IDUpXHJcbiAgLy8gICAgICAgICBtb2RhbC5pbm5lckhUTUwgKz1cclxuICAvLyAgICAgICAgICAgcXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpIC0gNn1gXS5xdWVzdGlvbjIuYW5zd2VyO1xyXG4gIC8vICAgICAgIGlmIChpIDwgMTggJiYgaSA+IDExKVxyXG4gIC8vICAgICAgICAgbW9kYWwuaW5uZXJIVE1MICs9XHJcbiAgLy8gICAgICAgICAgIHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aSAtIDEyfWBdLnF1ZXN0aW9uMy5hbnN3ZXI7XHJcbiAgLy8gICAgICAgaWYgKGkgPCAyNCAmJiBpID4gMTcpXHJcbiAgLy8gICAgICAgICBtb2RhbC5pbm5lckhUTUwgKz1cclxuICAvLyAgICAgICAgICAgcXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpIC0gMTh9YF0ucXVlc3Rpb240LmFuc3dlcjtcclxuICAvLyAgICAgICBpZiAoaSA8IDMwICYmIGkgPiAyMylcclxuICAvLyAgICAgICAgIG1vZGFsLmlubmVySFRNTCArPVxyXG4gIC8vICAgICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2kgLSAyNH1gXS5xdWVzdGlvbjUuYW5zd2VyO1xyXG4gIC8vICAgICAgIGlmIChpIDwgMzYgJiYgaSA+IDI5KVxyXG4gIC8vICAgICAgICAgbW9kYWwuaW5uZXJIVE1MICs9XHJcbiAgLy8gICAgICAgICAgIHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aSAtIDMwfWBdLnF1ZXN0aW9uNi5hbnN3ZXI7XHJcblxyXG4gIC8vICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgLy8gICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzY29yZUJ1dHRvbnNcIik7XHJcblxyXG4gIC8vICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyQ291bnQ7IGogKz0gMSkge1xyXG4gIC8vICAgICAgICAgY29uc3QgY3VycmVudFNjb3JlID0gcGFyc2VJbnQocXVlc3Rpb25UaWxlc1tpXS50ZXh0Q29udGVudCwgMTApO1xyXG5cclxuICAvLyAgICAgICAgIGNvbnN0IHNjb3JlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAvLyAgICAgICAgIHNjb3JlQnV0dG9uLnRleHRDb250ZW50ID0gcGxheWVyTmFtZXNbal07XHJcbiAgLy8gICAgICAgICBzY29yZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIC8vICAgICAgICAgICBpZiAoc2NvcmVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnV0dG9uRGlzYWJsZWRcIikpIHJldHVybjtcclxuICAvLyAgICAgICAgICAgcGxheWVyT2JqW2ogKyAxXS5kaXNwbGF5UGxheWVyU2NvcmUoaiArIDEsIGN1cnJlbnRTY29yZSk7XHJcbiAgLy8gICAgICAgICAgIHNjb3JlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25EaXNhYmxlZFwiKTtcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgZGl2LmFwcGVuZChzY29yZUJ1dHRvbik7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICAgIG1vZGFsLmFwcGVuZChkaXYpO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyAgICAgbW9kYWwuYXBwZW5kKGJ0bik7XHJcblxyXG4gIC8vICAgICBhZGRDbGFzcyhxdWVzdGlvblRpbGVzW2ldLCBcInRha2VuXCIpO1xyXG5cclxuICAvLyAgICAgcmVtb3ZlQ2xhc3MobW9kYWwsIFwiaGlkZGVuXCIpO1xyXG4gIC8vICAgICByZW1vdmVDbGFzcyhvdmVybGF5LCBcImhpZGRlblwiKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxuXHJcbiAgY29uc3QgY2F0ZWdvcnlDb3VudCA9IE9iamVjdC5rZXlzKHF1ZXN0aW9uT2JqZWN0KS5sZW5ndGg7XHJcbiAgY29uc3QgcXVlc3Rpb25Db3VudCA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnlDb3VudDsgaSArPSAxKSB7XHJcbiAgICAvLyAtMSBmcm9tIGxlbmd0aCB0byBhY2NvdW50IGZvciAndG9waWMnIGtleVxyXG4gICAgcXVlc3Rpb25Db3VudC5wdXNoKE9iamVjdC5rZXlzKHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXSkubGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnlRdWVzdGlvblRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgYCNjYXRlZ29yeSR7aX0gLnF1ZXN0aW9uYCxcclxuICAgICk7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHF1ZXN0aW9uQ291bnRbaV07IGogKz0gMSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhjYXRlZ29yeVF1ZXN0aW9uVGlsZXMpO1xyXG4gICAgICBjYXRlZ29yeVF1ZXN0aW9uVGlsZXNbal0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXVtgcXVlc3Rpb24ke2ogKyAxfWBdLnF1ZXN0aW9uLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID1cclxuICAgICAgICAgIHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXVtgcXVlc3Rpb24ke2ogKyAxfWBdLnF1ZXN0aW9uO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0SnNvblRvT2JqZWN0KGpzb24pIHtcclxuICBjb25zdCBvYmogPSBKU09OLnBhcnNlKGpzb24pO1xyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVzdGlvbkRhdGEoY3N2RmlsZSkge1xyXG4gIC8vIFwiLi4vc3JjL3F1ZXN0aW9ucy9Ucml2aWEgLSBRdWVzdGlvbnMuY3N2XCIgbG9jYWwgZmlsZW5hbWVcclxuICBQYXBhLnBhcnNlKGNzdkZpbGUuZmlsZXNbMF0sIHtcclxuICAgIGRvd25sb2FkOiB0cnVlLFxyXG4gICAgY29tcGxldGUocmVzdWx0cykge1xyXG4gICAgICBxdWVzdGlvbkRhdGEgPSByZXN1bHRzLmRhdGE7XHJcbiAgICAgIGNvbnN0IHF1ZXN0aW9uT2JqID0gZ2VuZXJhdGVRdWVzdGlvbk9iamVjdEZyb21DU1YoKTtcclxuICAgICAgLy8gY29uc29sZS5sb2cocXVlc3Rpb25EYXRhKTtcclxuICAgICAgYm9hcmQuY3JlYXRlUXVlc3Rpb25HcmlkKHF1ZXN0aW9uT2JqKTtcclxuICAgICAgLy8gY29uc29sZS5sb2cocXVlc3Rpb25PYmopO1xyXG4gICAgICBhZGRRdWVzdGlvbk1vZGFsRXZlbnRMaXN0ZW5lcihxdWVzdGlvbk9iaik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdHMuZGF0YSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==