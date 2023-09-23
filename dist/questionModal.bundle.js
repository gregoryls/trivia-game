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
function createQuestionGrid(gridCount, questionData) {
  const questionValues = [
    100, 100, 100, 100, 100, 100, 200, 200, 200, 200, 200, 200, 300, 300, 300,
    300, 300, 300, 400, 400, 400, 400, 400, 400, 500, 500, 500, 500, 500, 500,
    600, 600, 600, 600, 600, 600,
  ];

  for (let i = 0; i < gridCount; i += 1) {
    const questionDiv = document.createElement("div");
    // treat the first six boxes differently to turn them into topic headers.
    if (i < 6) {
      // 00,20,40,60,80,100
      questionDiv.classList.add("questionTopic");
      // use every second array to account for spreadsheet format
      questionDiv.textContent = questionData[2 * i][0];
    } else {
      questionDiv.classList.add("question");
      questionDiv.textContent = questionValues[i - 6];
    }

    gridArea.appendChild(questionDiv);
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
/* harmony export */   addQuestionModalEventListenerBackup: () => (/* binding */ addQuestionModalEventListenerBackup),
/* harmony export */   generateQuestionObjectFromCSV: () => (/* binding */ generateQuestionObjectFromCSV),
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
    for (let j = 0; j < questionData[0].length; j += 1) {
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

function addQuestionModalEventListener(questionObject) {
  const questionTiles = document.querySelectorAll(".question");
  console.log(questionTiles);
  for (let i = 0; i < questionTiles.length; i += 1) {
    let currentScore = 0;
    questionTiles[i].addEventListener("click", () => {
      if (questionTiles[i].classList.contains("taken")) return;
      if (i < 6)
        modal.innerHTML = questionObject[`category${i}`].question1.question;
      if (i < 12 && i > 5)
        modal.innerHTML = questionObject[`category${i - 6}`].question2.question;
      if (i < 18 && i > 11)
        modal.innerHTML =
          questionObject[`category${i - 12}`].question3.question;
      if (i < 24 && i > 17)
        modal.innerHTML =
          questionObject[`category${i - 18}`].question4.question;
      if (i < 30 && i > 23)
        modal.innerHTML =
          questionObject[`category${i - 24}`].question5.question;
      if (i < 36 && i > 29)
        modal.innerHTML =
          questionObject[`category${i - 30}`].question6.question;

      currentScore = parseInt(questionTiles[i].textContent, 10);
      console.log(currentScore);

      const btn = document.createElement("button");
      btn.textContent = "Answer";

      btn.addEventListener("click", () => {
        if (btn.classList.contains("buttonDisabled")) return;
        btn.classList.add("buttonDisabled");

        const playerNames = [
          playerObj[1].name,
          playerObj[2].name,
          playerObj[3].name,
          playerObj[4].name,
        ];
        const playerCount = playerNames.length;

        if (i < 6)
          modal.innerHTML += questionObject[`category${i}`].question1.answer;
        if (i < 12 && i > 5)
          modal.innerHTML +=
            questionObject[`category${i - 6}`].question2.answer;
        if (i < 18 && i > 11)
          modal.innerHTML +=
            questionObject[`category${i - 12}`].question3.answer;
        if (i < 24 && i > 17)
          modal.innerHTML +=
            questionObject[`category${i - 18}`].question4.answer;
        if (i < 30 && i > 23)
          modal.innerHTML +=
            questionObject[`category${i - 24}`].question5.answer;
        if (i < 36 && i > 29)
          modal.innerHTML +=
            questionObject[`category${i - 30}`].question6.answer;

        const div = document.createElement("div");
        div.classList.add("scoreButtons");

        for (let j = 0; j < playerCount; j += 1) {
          const scoreButton = document.createElement("button");
          scoreButton.textContent = playerNames[j];
          scoreButton.addEventListener("click", () => {
            if (scoreButton.classList.contains("buttonDisabled")) return;
            playerObj[j + 1].displayPlayerScore(j + 1, currentScore);
            scoreButton.classList.add("buttonDisabled");
          });
          div.append(scoreButton);
        }
        modal.append(div);
      });
      modal.append(btn);

      addClass(questionTiles[i], "taken");

      removeClass(modal, "hidden");
      removeClass(overlay, "hidden");
    });
  }
}

function addQuestionModalEventListenerBackup() {
  const questionTiles = document.querySelectorAll(".question");
  // console.log(questionTiles);
  // console.log(playerNames);

  for (let i = 0; i < questionTiles.length; i += 1) {
    let currentScore = 0;
    questionTiles[i].addEventListener("click", () => {
      // modal.innerHTML = "";
      // prevent tile from being opened twice
      if (questionTiles[i].classList.contains("taken")) return;
      // associated array numbers are due to the format of question csv input
      if (i < 6) modal.innerHTML = questionData[2 * i][1];
      if (i < 12 && i > 5) modal.innerHTML = questionData[2 * i - 12][2];
      if (i < 18 && i > 11) modal.innerHTML = questionData[2 * i - 24][3];
      if (i < 24 && i > 17) modal.innerHTML = questionData[2 * i - 36][4];
      if (i < 30 && i > 23) modal.innerHTML = questionData[2 * i - 48][5];
      if (i < 36 && i > 29) modal.innerHTML = questionData[2 * i - 60][6];

      currentScore = parseInt(questionTiles[i].textContent, 10);
      console.log(currentScore);

      // add an answer button to the modal that reveals the answer when clicked, button
      // adds before the user buttons, answer adds to bottom of modal
      const btn = document.createElement("button");
      btn.textContent = "Answer";

      btn.addEventListener("click", () => {
        btn.classList.add("buttonDisabled");
        const playerNames = [
          playerObj[1].name,
          playerObj[2].name,
          playerObj[3].name,
          playerObj[4].name,
        ];
        // associated array numbers are due to the format of question csv input
        if (i < 6) modal.innerHTML += questionData[2 * i + 1][1];
        if (i < 12 && i > 5) modal.innerHTML += questionData[2 * i - 11][2];
        if (i < 18 && i > 11) modal.innerHTML += questionData[2 * i - 23][3];
        if (i < 24 && i > 17) modal.innerHTML += questionData[2 * i - 35][4];
        if (i < 30 && i > 23) modal.innerHTML += questionData[2 * i - 47][5];
        if (i < 36 && i > 29) modal.innerHTML += questionData[2 * i - 59][6];

        const div = document.createElement("div");
        div.classList.add("scoreButtons");
        for (let j = 0; j < 4; j++) {
          // set loop length to number of players
          // add buttons to the modal that will award points to the correct player(s)
          const btn = document.createElement("button");
          btn.textContent = playerNames[j];
          btn.addEventListener("click", () => {
            // checks for clicked class added later to prevent awarding points more than once
            if (btn.classList.contains("buttonDisabled")) return;
            // get question value from the clicked tile
            // currentScore = parseInt(questionTiles[i].textContent, 10);
            // add current score to the appropriate player when clicked
            j === 0
              ? playerObj[1].displayPlayerScore(1, currentScore)
              : j === 1
              ? playerObj[2].displayPlayerScore(2, currentScore)
              : j === 2
              ? playerObj[3].displayPlayerScore(3, currentScore)
              : playerObj[4].displayPlayerScore(4, currentScore);
            btn.classList.add("buttonDisabled");
          });
          div.appendChild(btn);
        }
        modal.appendChild(div);
      });

      modal.appendChild(btn);

      addClass(questionTiles[i], "taken");

      removeClass(modal, "hidden");
      removeClass(overlay, "hidden");
    });
  }
}

function getQuestionData(csvFile) {
  // "../src/questions/Trivia - Questions.csv" local filename
  papaparse__WEBPACK_IMPORTED_MODULE_0___default().parse(csvFile.files[0], {
    download: true,
    complete(results) {
      questionData = results.data;
      console.log(questionData);
      _board__WEBPACK_IMPORTED_MODULE_1__.createQuestionGrid(42, results.data);
      console.log(generateQuestionObjectFromCSV());
      addQuestionModalEventListener(generateQuestionObjectFromCSV());
      // addQuestionModalEventListenerBackup();
      // console.log(results.data);
    },
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLEVBQUUsc0RBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQXdCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaXZpYS1nYW1lLy4vbm9kZV9tb2R1bGVzL3BhcGFwYXJzZS9wYXBhcGFyc2UubWluLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9xdWVzdGlvbk1vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEBsaWNlbnNlXG5QYXBhIFBhcnNlXG52NS40LjFcbmh0dHBzOi8vZ2l0aHViLmNvbS9taG9sdC9QYXBhUGFyc2VcbkxpY2Vuc2U6IE1JVFxuKi9cbiFmdW5jdGlvbihlLHQpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9dCgpOmUuUGFwYT10KCl9KHRoaXMsZnVuY3Rpb24gcygpe1widXNlIHN0cmljdFwiO3ZhciBmPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dm9pZCAwIT09Zj9mOnt9O3ZhciBuPSFmLmRvY3VtZW50JiYhIWYucG9zdE1lc3NhZ2Usbz1mLklTX1BBUEFfV09SS0VSfHwhMSxhPXt9LHU9MCxiPXtwYXJzZTpmdW5jdGlvbihlLHQpe3ZhciByPSh0PXR8fHt9KS5keW5hbWljVHlwaW5nfHwhMTtKKHIpJiYodC5keW5hbWljVHlwaW5nRnVuY3Rpb249cixyPXt9KTtpZih0LmR5bmFtaWNUeXBpbmc9cix0LnRyYW5zZm9ybT0hIUoodC50cmFuc2Zvcm0pJiZ0LnRyYW5zZm9ybSx0LndvcmtlciYmYi5XT1JLRVJTX1NVUFBPUlRFRCl7dmFyIGk9ZnVuY3Rpb24oKXtpZighYi5XT1JLRVJTX1NVUFBPUlRFRClyZXR1cm4hMTt2YXIgZT0ocj1mLlVSTHx8Zi53ZWJraXRVUkx8fG51bGwsaT1zLnRvU3RyaW5nKCksYi5CTE9CX1VSTHx8KGIuQkxPQl9VUkw9ci5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW1widmFyIGdsb2JhbCA9IChmdW5jdGlvbigpIHsgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gc2VsZjsgfSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHdpbmRvdzsgfSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGdsb2JhbDsgfSByZXR1cm4ge307IH0pKCk7IGdsb2JhbC5JU19QQVBBX1dPUktFUj10cnVlOyBcIixcIihcIixpLFwiKSgpO1wiXSx7dHlwZTpcInRleHQvamF2YXNjcmlwdFwifSkpKSksdD1uZXcgZi5Xb3JrZXIoZSk7dmFyIHIsaTtyZXR1cm4gdC5vbm1lc3NhZ2U9Xyx0LmlkPXUrKyxhW3QuaWRdPXR9KCk7cmV0dXJuIGkudXNlclN0ZXA9dC5zdGVwLGkudXNlckNodW5rPXQuY2h1bmssaS51c2VyQ29tcGxldGU9dC5jb21wbGV0ZSxpLnVzZXJFcnJvcj10LmVycm9yLHQuc3RlcD1KKHQuc3RlcCksdC5jaHVuaz1KKHQuY2h1bmspLHQuY29tcGxldGU9Sih0LmNvbXBsZXRlKSx0LmVycm9yPUoodC5lcnJvciksZGVsZXRlIHQud29ya2VyLHZvaWQgaS5wb3N0TWVzc2FnZSh7aW5wdXQ6ZSxjb25maWc6dCx3b3JrZXJJZDppLmlkfSl9dmFyIG49bnVsbDtiLk5PREVfU1RSRUFNX0lOUFVULFwic3RyaW5nXCI9PXR5cGVvZiBlPyhlPWZ1bmN0aW9uKGUpe2lmKDY1Mjc5PT09ZS5jaGFyQ29kZUF0KDApKXJldHVybiBlLnNsaWNlKDEpO3JldHVybiBlfShlKSxuPXQuZG93bmxvYWQ/bmV3IGwodCk6bmV3IHAodCkpOiEwPT09ZS5yZWFkYWJsZSYmSihlLnJlYWQpJiZKKGUub24pP249bmV3IGcodCk6KGYuRmlsZSYmZSBpbnN0YW5jZW9mIEZpbGV8fGUgaW5zdGFuY2VvZiBPYmplY3QpJiYobj1uZXcgYyh0KSk7cmV0dXJuIG4uc3RyZWFtKGUpfSx1bnBhcnNlOmZ1bmN0aW9uKGUsdCl7dmFyIG49ITEsXz0hMCxtPVwiLFwiLHk9XCJcXHJcXG5cIixzPSdcIicsYT1zK3Mscj0hMSxpPW51bGwsbz0hMTshZnVuY3Rpb24oKXtpZihcIm9iamVjdFwiIT10eXBlb2YgdClyZXR1cm47XCJzdHJpbmdcIiE9dHlwZW9mIHQuZGVsaW1pdGVyfHxiLkJBRF9ERUxJTUlURVJTLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4tMSE9PXQuZGVsaW1pdGVyLmluZGV4T2YoZSl9KS5sZW5ndGh8fChtPXQuZGVsaW1pdGVyKTsoXCJib29sZWFuXCI9PXR5cGVvZiB0LnF1b3Rlc3x8XCJmdW5jdGlvblwiPT10eXBlb2YgdC5xdW90ZXN8fEFycmF5LmlzQXJyYXkodC5xdW90ZXMpKSYmKG49dC5xdW90ZXMpO1wiYm9vbGVhblwiIT10eXBlb2YgdC5za2lwRW1wdHlMaW5lcyYmXCJzdHJpbmdcIiE9dHlwZW9mIHQuc2tpcEVtcHR5TGluZXN8fChyPXQuc2tpcEVtcHR5TGluZXMpO1wic3RyaW5nXCI9PXR5cGVvZiB0Lm5ld2xpbmUmJih5PXQubmV3bGluZSk7XCJzdHJpbmdcIj09dHlwZW9mIHQucXVvdGVDaGFyJiYocz10LnF1b3RlQ2hhcik7XCJib29sZWFuXCI9PXR5cGVvZiB0LmhlYWRlciYmKF89dC5oZWFkZXIpO2lmKEFycmF5LmlzQXJyYXkodC5jb2x1bW5zKSl7aWYoMD09PXQuY29sdW1ucy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiT3B0aW9uIGNvbHVtbnMgaXMgZW1wdHlcIik7aT10LmNvbHVtbnN9dm9pZCAwIT09dC5lc2NhcGVDaGFyJiYoYT10LmVzY2FwZUNoYXIrcyk7KFwiYm9vbGVhblwiPT10eXBlb2YgdC5lc2NhcGVGb3JtdWxhZXx8dC5lc2NhcGVGb3JtdWxhZSBpbnN0YW5jZW9mIFJlZ0V4cCkmJihvPXQuZXNjYXBlRm9ybXVsYWUgaW5zdGFuY2VvZiBSZWdFeHA/dC5lc2NhcGVGb3JtdWxhZTovXls9K1xcLUBcXHRcXHJdLiokLyl9KCk7dmFyIHU9bmV3IFJlZ0V4cChRKHMpLFwiZ1wiKTtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9SlNPTi5wYXJzZShlKSk7aWYoQXJyYXkuaXNBcnJheShlKSl7aWYoIWUubGVuZ3RofHxBcnJheS5pc0FycmF5KGVbMF0pKXJldHVybiBoKG51bGwsZSxyKTtpZihcIm9iamVjdFwiPT10eXBlb2YgZVswXSlyZXR1cm4gaChpfHxPYmplY3Qua2V5cyhlWzBdKSxlLHIpfWVsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGUpcmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUuZGF0YSYmKGUuZGF0YT1KU09OLnBhcnNlKGUuZGF0YSkpLEFycmF5LmlzQXJyYXkoZS5kYXRhKSYmKGUuZmllbGRzfHwoZS5maWVsZHM9ZS5tZXRhJiZlLm1ldGEuZmllbGRzfHxpKSxlLmZpZWxkc3x8KGUuZmllbGRzPUFycmF5LmlzQXJyYXkoZS5kYXRhWzBdKT9lLmZpZWxkczpcIm9iamVjdFwiPT10eXBlb2YgZS5kYXRhWzBdP09iamVjdC5rZXlzKGUuZGF0YVswXSk6W10pLEFycmF5LmlzQXJyYXkoZS5kYXRhWzBdKXx8XCJvYmplY3RcIj09dHlwZW9mIGUuZGF0YVswXXx8KGUuZGF0YT1bZS5kYXRhXSkpLGgoZS5maWVsZHN8fFtdLGUuZGF0YXx8W10scik7dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHNlcmlhbGl6ZSB1bnJlY29nbml6ZWQgaW5wdXRcIik7ZnVuY3Rpb24gaChlLHQscil7dmFyIGk9XCJcIjtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9SlNPTi5wYXJzZShlKSksXCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PUpTT04ucGFyc2UodCkpO3ZhciBuPUFycmF5LmlzQXJyYXkoZSkmJjA8ZS5sZW5ndGgscz0hQXJyYXkuaXNBcnJheSh0WzBdKTtpZihuJiZfKXtmb3IodmFyIGE9MDthPGUubGVuZ3RoO2ErKykwPGEmJihpKz1tKSxpKz12KGVbYV0sYSk7MDx0Lmxlbmd0aCYmKGkrPXkpfWZvcih2YXIgbz0wO288dC5sZW5ndGg7bysrKXt2YXIgdT1uP2UubGVuZ3RoOnRbb10ubGVuZ3RoLGg9ITEsZj1uPzA9PT1PYmplY3Qua2V5cyh0W29dKS5sZW5ndGg6MD09PXRbb10ubGVuZ3RoO2lmKHImJiFuJiYoaD1cImdyZWVkeVwiPT09cj9cIlwiPT09dFtvXS5qb2luKFwiXCIpLnRyaW0oKToxPT09dFtvXS5sZW5ndGgmJjA9PT10W29dWzBdLmxlbmd0aCksXCJncmVlZHlcIj09PXImJm4pe2Zvcih2YXIgZD1bXSxsPTA7bDx1O2wrKyl7dmFyIGM9cz9lW2xdOmw7ZC5wdXNoKHRbb11bY10pfWg9XCJcIj09PWQuam9pbihcIlwiKS50cmltKCl9aWYoIWgpe2Zvcih2YXIgcD0wO3A8dTtwKyspezA8cCYmIWYmJihpKz1tKTt2YXIgZz1uJiZzP2VbcF06cDtpKz12KHRbb11bZ10scCl9bzx0Lmxlbmd0aC0xJiYoIXJ8fDA8dSYmIWYpJiYoaSs9eSl9fXJldHVybiBpfWZ1bmN0aW9uIHYoZSx0KXtpZihudWxsPT1lKXJldHVyblwiXCI7aWYoZS5jb25zdHJ1Y3Rvcj09PURhdGUpcmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpLnNsaWNlKDEsMjUpO3ZhciByPSExO28mJlwic3RyaW5nXCI9PXR5cGVvZiBlJiZvLnRlc3QoZSkmJihlPVwiJ1wiK2Uscj0hMCk7dmFyIGk9ZS50b1N0cmluZygpLnJlcGxhY2UodSxhKTtyZXR1cm4ocj1yfHwhMD09PW58fFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJm4oZSx0KXx8QXJyYXkuaXNBcnJheShuKSYmblt0XXx8ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKylpZigtMTxlLmluZGV4T2YodFtyXSkpcmV0dXJuITA7cmV0dXJuITF9KGksYi5CQURfREVMSU1JVEVSUyl8fC0xPGkuaW5kZXhPZihtKXx8XCIgXCI9PT1pLmNoYXJBdCgwKXx8XCIgXCI9PT1pLmNoYXJBdChpLmxlbmd0aC0xKSk/cytpK3M6aX19fTtpZihiLlJFQ09SRF9TRVA9U3RyaW5nLmZyb21DaGFyQ29kZSgzMCksYi5VTklUX1NFUD1TdHJpbmcuZnJvbUNoYXJDb2RlKDMxKSxiLkJZVEVfT1JERVJfTUFSSz1cIlxcdWZlZmZcIixiLkJBRF9ERUxJTUlURVJTPVtcIlxcclwiLFwiXFxuXCIsJ1wiJyxiLkJZVEVfT1JERVJfTUFSS10sYi5XT1JLRVJTX1NVUFBPUlRFRD0hbiYmISFmLldvcmtlcixiLk5PREVfU1RSRUFNX0lOUFVUPTEsYi5Mb2NhbENodW5rU2l6ZT0xMDQ4NTc2MCxiLlJlbW90ZUNodW5rU2l6ZT01MjQyODgwLGIuRGVmYXVsdERlbGltaXRlcj1cIixcIixiLlBhcnNlcj1FLGIuUGFyc2VySGFuZGxlPXIsYi5OZXR3b3JrU3RyZWFtZXI9bCxiLkZpbGVTdHJlYW1lcj1jLGIuU3RyaW5nU3RyZWFtZXI9cCxiLlJlYWRhYmxlU3RyZWFtU3RyZWFtZXI9ZyxmLmpRdWVyeSl7dmFyIGQ9Zi5qUXVlcnk7ZC5mbi5wYXJzZT1mdW5jdGlvbihvKXt2YXIgcj1vLmNvbmZpZ3x8e30sdT1bXTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe2lmKCEoXCJJTlBVVFwiPT09ZCh0aGlzKS5wcm9wKFwidGFnTmFtZVwiKS50b1VwcGVyQ2FzZSgpJiZcImZpbGVcIj09PWQodGhpcykuYXR0cihcInR5cGVcIikudG9Mb3dlckNhc2UoKSYmZi5GaWxlUmVhZGVyKXx8IXRoaXMuZmlsZXN8fDA9PT10aGlzLmZpbGVzLmxlbmd0aClyZXR1cm4hMDtmb3IodmFyIHQ9MDt0PHRoaXMuZmlsZXMubGVuZ3RoO3QrKyl1LnB1c2goe2ZpbGU6dGhpcy5maWxlc1t0XSxpbnB1dEVsZW06dGhpcyxpbnN0YW5jZUNvbmZpZzpkLmV4dGVuZCh7fSxyKX0pfSksZSgpLHRoaXM7ZnVuY3Rpb24gZSgpe2lmKDAhPT11Lmxlbmd0aCl7dmFyIGUsdCxyLGksbj11WzBdO2lmKEooby5iZWZvcmUpKXt2YXIgcz1vLmJlZm9yZShuLmZpbGUsbi5pbnB1dEVsZW0pO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBzKXtpZihcImFib3J0XCI9PT1zLmFjdGlvbilyZXR1cm4gZT1cIkFib3J0RXJyb3JcIix0PW4uZmlsZSxyPW4uaW5wdXRFbGVtLGk9cy5yZWFzb24sdm9pZChKKG8uZXJyb3IpJiZvLmVycm9yKHtuYW1lOmV9LHQscixpKSk7aWYoXCJza2lwXCI9PT1zLmFjdGlvbilyZXR1cm4gdm9pZCBoKCk7XCJvYmplY3RcIj09dHlwZW9mIHMuY29uZmlnJiYobi5pbnN0YW5jZUNvbmZpZz1kLmV4dGVuZChuLmluc3RhbmNlQ29uZmlnLHMuY29uZmlnKSl9ZWxzZSBpZihcInNraXBcIj09PXMpcmV0dXJuIHZvaWQgaCgpfXZhciBhPW4uaW5zdGFuY2VDb25maWcuY29tcGxldGU7bi5pbnN0YW5jZUNvbmZpZy5jb21wbGV0ZT1mdW5jdGlvbihlKXtKKGEpJiZhKGUsbi5maWxlLG4uaW5wdXRFbGVtKSxoKCl9LGIucGFyc2Uobi5maWxlLG4uaW5zdGFuY2VDb25maWcpfWVsc2UgSihvLmNvbXBsZXRlKSYmby5jb21wbGV0ZSgpfWZ1bmN0aW9uIGgoKXt1LnNwbGljZSgwLDEpLGUoKX19fWZ1bmN0aW9uIGgoZSl7dGhpcy5faGFuZGxlPW51bGwsdGhpcy5fZmluaXNoZWQ9ITEsdGhpcy5fY29tcGxldGVkPSExLHRoaXMuX2hhbHRlZD0hMSx0aGlzLl9pbnB1dD1udWxsLHRoaXMuX2Jhc2VJbmRleD0wLHRoaXMuX3BhcnRpYWxMaW5lPVwiXCIsdGhpcy5fcm93Q291bnQ9MCx0aGlzLl9zdGFydD0wLHRoaXMuX25leHRDaHVuaz1udWxsLHRoaXMuaXNGaXJzdENodW5rPSEwLHRoaXMuX2NvbXBsZXRlUmVzdWx0cz17ZGF0YTpbXSxlcnJvcnM6W10sbWV0YTp7fX0sZnVuY3Rpb24oZSl7dmFyIHQ9dyhlKTt0LmNodW5rU2l6ZT1wYXJzZUludCh0LmNodW5rU2l6ZSksZS5zdGVwfHxlLmNodW5rfHwodC5jaHVua1NpemU9bnVsbCk7dGhpcy5faGFuZGxlPW5ldyByKHQpLCh0aGlzLl9oYW5kbGUuc3RyZWFtZXI9dGhpcykuX2NvbmZpZz10fS5jYWxsKHRoaXMsZSksdGhpcy5wYXJzZUNodW5rPWZ1bmN0aW9uKGUsdCl7aWYodGhpcy5pc0ZpcnN0Q2h1bmsmJkoodGhpcy5fY29uZmlnLmJlZm9yZUZpcnN0Q2h1bmspKXt2YXIgcj10aGlzLl9jb25maWcuYmVmb3JlRmlyc3RDaHVuayhlKTt2b2lkIDAhPT1yJiYoZT1yKX10aGlzLmlzRmlyc3RDaHVuaz0hMSx0aGlzLl9oYWx0ZWQ9ITE7dmFyIGk9dGhpcy5fcGFydGlhbExpbmUrZTt0aGlzLl9wYXJ0aWFsTGluZT1cIlwiO3ZhciBuPXRoaXMuX2hhbmRsZS5wYXJzZShpLHRoaXMuX2Jhc2VJbmRleCwhdGhpcy5fZmluaXNoZWQpO2lmKCF0aGlzLl9oYW5kbGUucGF1c2VkKCkmJiF0aGlzLl9oYW5kbGUuYWJvcnRlZCgpKXt2YXIgcz1uLm1ldGEuY3Vyc29yO3RoaXMuX2ZpbmlzaGVkfHwodGhpcy5fcGFydGlhbExpbmU9aS5zdWJzdHJpbmcocy10aGlzLl9iYXNlSW5kZXgpLHRoaXMuX2Jhc2VJbmRleD1zKSxuJiZuLmRhdGEmJih0aGlzLl9yb3dDb3VudCs9bi5kYXRhLmxlbmd0aCk7dmFyIGE9dGhpcy5fZmluaXNoZWR8fHRoaXMuX2NvbmZpZy5wcmV2aWV3JiZ0aGlzLl9yb3dDb3VudD49dGhpcy5fY29uZmlnLnByZXZpZXc7aWYobylmLnBvc3RNZXNzYWdlKHtyZXN1bHRzOm4sd29ya2VySWQ6Yi5XT1JLRVJfSUQsZmluaXNoZWQ6YX0pO2Vsc2UgaWYoSih0aGlzLl9jb25maWcuY2h1bmspJiYhdCl7aWYodGhpcy5fY29uZmlnLmNodW5rKG4sdGhpcy5faGFuZGxlKSx0aGlzLl9oYW5kbGUucGF1c2VkKCl8fHRoaXMuX2hhbmRsZS5hYm9ydGVkKCkpcmV0dXJuIHZvaWQodGhpcy5faGFsdGVkPSEwKTtuPXZvaWQgMCx0aGlzLl9jb21wbGV0ZVJlc3VsdHM9dm9pZCAwfXJldHVybiB0aGlzLl9jb25maWcuc3RlcHx8dGhpcy5fY29uZmlnLmNodW5rfHwodGhpcy5fY29tcGxldGVSZXN1bHRzLmRhdGE9dGhpcy5fY29tcGxldGVSZXN1bHRzLmRhdGEuY29uY2F0KG4uZGF0YSksdGhpcy5fY29tcGxldGVSZXN1bHRzLmVycm9ycz10aGlzLl9jb21wbGV0ZVJlc3VsdHMuZXJyb3JzLmNvbmNhdChuLmVycm9ycyksdGhpcy5fY29tcGxldGVSZXN1bHRzLm1ldGE9bi5tZXRhKSx0aGlzLl9jb21wbGV0ZWR8fCFhfHwhSih0aGlzLl9jb25maWcuY29tcGxldGUpfHxuJiZuLm1ldGEuYWJvcnRlZHx8KHRoaXMuX2NvbmZpZy5jb21wbGV0ZSh0aGlzLl9jb21wbGV0ZVJlc3VsdHMsdGhpcy5faW5wdXQpLHRoaXMuX2NvbXBsZXRlZD0hMCksYXx8biYmbi5tZXRhLnBhdXNlZHx8dGhpcy5fbmV4dENodW5rKCksbn10aGlzLl9oYWx0ZWQ9ITB9LHRoaXMuX3NlbmRFcnJvcj1mdW5jdGlvbihlKXtKKHRoaXMuX2NvbmZpZy5lcnJvcik/dGhpcy5fY29uZmlnLmVycm9yKGUpOm8mJnRoaXMuX2NvbmZpZy5lcnJvciYmZi5wb3N0TWVzc2FnZSh7d29ya2VySWQ6Yi5XT1JLRVJfSUQsZXJyb3I6ZSxmaW5pc2hlZDohMX0pfX1mdW5jdGlvbiBsKGUpe3ZhciBpOyhlPWV8fHt9KS5jaHVua1NpemV8fChlLmNodW5rU2l6ZT1iLlJlbW90ZUNodW5rU2l6ZSksaC5jYWxsKHRoaXMsZSksdGhpcy5fbmV4dENodW5rPW4/ZnVuY3Rpb24oKXt0aGlzLl9yZWFkQ2h1bmsoKSx0aGlzLl9jaHVua0xvYWRlZCgpfTpmdW5jdGlvbigpe3RoaXMuX3JlYWRDaHVuaygpfSx0aGlzLnN0cmVhbT1mdW5jdGlvbihlKXt0aGlzLl9pbnB1dD1lLHRoaXMuX25leHRDaHVuaygpfSx0aGlzLl9yZWFkQ2h1bms9ZnVuY3Rpb24oKXtpZih0aGlzLl9maW5pc2hlZCl0aGlzLl9jaHVua0xvYWRlZCgpO2Vsc2V7aWYoaT1uZXcgWE1MSHR0cFJlcXVlc3QsdGhpcy5fY29uZmlnLndpdGhDcmVkZW50aWFscyYmKGkud2l0aENyZWRlbnRpYWxzPXRoaXMuX2NvbmZpZy53aXRoQ3JlZGVudGlhbHMpLG58fChpLm9ubG9hZD12KHRoaXMuX2NodW5rTG9hZGVkLHRoaXMpLGkub25lcnJvcj12KHRoaXMuX2NodW5rRXJyb3IsdGhpcykpLGkub3Blbih0aGlzLl9jb25maWcuZG93bmxvYWRSZXF1ZXN0Qm9keT9cIlBPU1RcIjpcIkdFVFwiLHRoaXMuX2lucHV0LCFuKSx0aGlzLl9jb25maWcuZG93bmxvYWRSZXF1ZXN0SGVhZGVycyl7dmFyIGU9dGhpcy5fY29uZmlnLmRvd25sb2FkUmVxdWVzdEhlYWRlcnM7Zm9yKHZhciB0IGluIGUpaS5zZXRSZXF1ZXN0SGVhZGVyKHQsZVt0XSl9aWYodGhpcy5fY29uZmlnLmNodW5rU2l6ZSl7dmFyIHI9dGhpcy5fc3RhcnQrdGhpcy5fY29uZmlnLmNodW5rU2l6ZS0xO2kuc2V0UmVxdWVzdEhlYWRlcihcIlJhbmdlXCIsXCJieXRlcz1cIit0aGlzLl9zdGFydCtcIi1cIityKX10cnl7aS5zZW5kKHRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RCb2R5KX1jYXRjaChlKXt0aGlzLl9jaHVua0Vycm9yKGUubWVzc2FnZSl9biYmMD09PWkuc3RhdHVzJiZ0aGlzLl9jaHVua0Vycm9yKCl9fSx0aGlzLl9jaHVua0xvYWRlZD1mdW5jdGlvbigpezQ9PT1pLnJlYWR5U3RhdGUmJihpLnN0YXR1czwyMDB8fDQwMDw9aS5zdGF0dXM/dGhpcy5fY2h1bmtFcnJvcigpOih0aGlzLl9zdGFydCs9dGhpcy5fY29uZmlnLmNodW5rU2l6ZT90aGlzLl9jb25maWcuY2h1bmtTaXplOmkucmVzcG9uc2VUZXh0Lmxlbmd0aCx0aGlzLl9maW5pc2hlZD0hdGhpcy5fY29uZmlnLmNodW5rU2l6ZXx8dGhpcy5fc3RhcnQ+PWZ1bmN0aW9uKGUpe3ZhciB0PWUuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVJhbmdlXCIpO2lmKG51bGw9PT10KXJldHVybi0xO3JldHVybiBwYXJzZUludCh0LnN1YnN0cmluZyh0Lmxhc3RJbmRleE9mKFwiL1wiKSsxKSl9KGkpLHRoaXMucGFyc2VDaHVuayhpLnJlc3BvbnNlVGV4dCkpKX0sdGhpcy5fY2h1bmtFcnJvcj1mdW5jdGlvbihlKXt2YXIgdD1pLnN0YXR1c1RleHR8fGU7dGhpcy5fc2VuZEVycm9yKG5ldyBFcnJvcih0KSl9fWZ1bmN0aW9uIGMoZSl7dmFyIGksbjsoZT1lfHx7fSkuY2h1bmtTaXplfHwoZS5jaHVua1NpemU9Yi5Mb2NhbENodW5rU2l6ZSksaC5jYWxsKHRoaXMsZSk7dmFyIHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXI7dGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7dGhpcy5faW5wdXQ9ZSxuPWUuc2xpY2V8fGUud2Via2l0U2xpY2V8fGUubW96U2xpY2Uscz8oKGk9bmV3IEZpbGVSZWFkZXIpLm9ubG9hZD12KHRoaXMuX2NodW5rTG9hZGVkLHRoaXMpLGkub25lcnJvcj12KHRoaXMuX2NodW5rRXJyb3IsdGhpcykpOmk9bmV3IEZpbGVSZWFkZXJTeW5jLHRoaXMuX25leHRDaHVuaygpfSx0aGlzLl9uZXh0Q2h1bms9ZnVuY3Rpb24oKXt0aGlzLl9maW5pc2hlZHx8dGhpcy5fY29uZmlnLnByZXZpZXcmJiEodGhpcy5fcm93Q291bnQ8dGhpcy5fY29uZmlnLnByZXZpZXcpfHx0aGlzLl9yZWFkQ2h1bmsoKX0sdGhpcy5fcmVhZENodW5rPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5faW5wdXQ7aWYodGhpcy5fY29uZmlnLmNodW5rU2l6ZSl7dmFyIHQ9TWF0aC5taW4odGhpcy5fc3RhcnQrdGhpcy5fY29uZmlnLmNodW5rU2l6ZSx0aGlzLl9pbnB1dC5zaXplKTtlPW4uY2FsbChlLHRoaXMuX3N0YXJ0LHQpfXZhciByPWkucmVhZEFzVGV4dChlLHRoaXMuX2NvbmZpZy5lbmNvZGluZyk7c3x8dGhpcy5fY2h1bmtMb2FkZWQoe3RhcmdldDp7cmVzdWx0OnJ9fSl9LHRoaXMuX2NodW5rTG9hZGVkPWZ1bmN0aW9uKGUpe3RoaXMuX3N0YXJ0Kz10aGlzLl9jb25maWcuY2h1bmtTaXplLHRoaXMuX2ZpbmlzaGVkPSF0aGlzLl9jb25maWcuY2h1bmtTaXplfHx0aGlzLl9zdGFydD49dGhpcy5faW5wdXQuc2l6ZSx0aGlzLnBhcnNlQ2h1bmsoZS50YXJnZXQucmVzdWx0KX0sdGhpcy5fY2h1bmtFcnJvcj1mdW5jdGlvbigpe3RoaXMuX3NlbmRFcnJvcihpLmVycm9yKX19ZnVuY3Rpb24gcChlKXt2YXIgcjtoLmNhbGwodGhpcyxlPWV8fHt9KSx0aGlzLnN0cmVhbT1mdW5jdGlvbihlKXtyZXR1cm4gcj1lLHRoaXMuX25leHRDaHVuaygpfSx0aGlzLl9uZXh0Q2h1bms9ZnVuY3Rpb24oKXtpZighdGhpcy5fZmluaXNoZWQpe3ZhciBlLHQ9dGhpcy5fY29uZmlnLmNodW5rU2l6ZTtyZXR1cm4gdD8oZT1yLnN1YnN0cmluZygwLHQpLHI9ci5zdWJzdHJpbmcodCkpOihlPXIscj1cIlwiKSx0aGlzLl9maW5pc2hlZD0hcix0aGlzLnBhcnNlQ2h1bmsoZSl9fX1mdW5jdGlvbiBnKGUpe2guY2FsbCh0aGlzLGU9ZXx8e30pO3ZhciB0PVtdLHI9ITAsaT0hMTt0aGlzLnBhdXNlPWZ1bmN0aW9uKCl7aC5wcm90b3R5cGUucGF1c2UuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuX2lucHV0LnBhdXNlKCl9LHRoaXMucmVzdW1lPWZ1bmN0aW9uKCl7aC5wcm90b3R5cGUucmVzdW1lLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLl9pbnB1dC5yZXN1bWUoKX0sdGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7dGhpcy5faW5wdXQ9ZSx0aGlzLl9pbnB1dC5vbihcImRhdGFcIix0aGlzLl9zdHJlYW1EYXRhKSx0aGlzLl9pbnB1dC5vbihcImVuZFwiLHRoaXMuX3N0cmVhbUVuZCksdGhpcy5faW5wdXQub24oXCJlcnJvclwiLHRoaXMuX3N0cmVhbUVycm9yKX0sdGhpcy5fY2hlY2tJc0ZpbmlzaGVkPWZ1bmN0aW9uKCl7aSYmMT09PXQubGVuZ3RoJiYodGhpcy5fZmluaXNoZWQ9ITApfSx0aGlzLl9uZXh0Q2h1bms9ZnVuY3Rpb24oKXt0aGlzLl9jaGVja0lzRmluaXNoZWQoKSx0Lmxlbmd0aD90aGlzLnBhcnNlQ2h1bmsodC5zaGlmdCgpKTpyPSEwfSx0aGlzLl9zdHJlYW1EYXRhPXYoZnVuY3Rpb24oZSl7dHJ5e3QucHVzaChcInN0cmluZ1wiPT10eXBlb2YgZT9lOmUudG9TdHJpbmcodGhpcy5fY29uZmlnLmVuY29kaW5nKSksciYmKHI9ITEsdGhpcy5fY2hlY2tJc0ZpbmlzaGVkKCksdGhpcy5wYXJzZUNodW5rKHQuc2hpZnQoKSkpfWNhdGNoKGUpe3RoaXMuX3N0cmVhbUVycm9yKGUpfX0sdGhpcyksdGhpcy5fc3RyZWFtRXJyb3I9dihmdW5jdGlvbihlKXt0aGlzLl9zdHJlYW1DbGVhblVwKCksdGhpcy5fc2VuZEVycm9yKGUpfSx0aGlzKSx0aGlzLl9zdHJlYW1FbmQ9dihmdW5jdGlvbigpe3RoaXMuX3N0cmVhbUNsZWFuVXAoKSxpPSEwLHRoaXMuX3N0cmVhbURhdGEoXCJcIil9LHRoaXMpLHRoaXMuX3N0cmVhbUNsZWFuVXA9dihmdW5jdGlvbigpe3RoaXMuX2lucHV0LnJlbW92ZUxpc3RlbmVyKFwiZGF0YVwiLHRoaXMuX3N0cmVhbURhdGEpLHRoaXMuX2lucHV0LnJlbW92ZUxpc3RlbmVyKFwiZW5kXCIsdGhpcy5fc3RyZWFtRW5kKSx0aGlzLl9pbnB1dC5yZW1vdmVMaXN0ZW5lcihcImVycm9yXCIsdGhpcy5fc3RyZWFtRXJyb3IpfSx0aGlzKX1mdW5jdGlvbiByKG0pe3ZhciBhLG8sdSxpPU1hdGgucG93KDIsNTMpLG49LWkscz0vXlxccyotPyhcXGQrXFwuP3xcXC5cXGQrfFxcZCtcXC5cXGQrKShbZUVdWy0rXT9cXGQrKT9cXHMqJC8saD0vXigoXFxkezR9LVswMV1cXGQtWzAtM11cXGRUWzAtMl1cXGQ6WzAtNV1cXGQ6WzAtNV1cXGRcXC5cXGQrKFsrLV1bMC0yXVxcZDpbMC01XVxcZHxaKSl8KFxcZHs0fS1bMDFdXFxkLVswLTNdXFxkVFswLTJdXFxkOlswLTVdXFxkOlswLTVdXFxkKFsrLV1bMC0yXVxcZDpbMC01XVxcZHxaKSl8KFxcZHs0fS1bMDFdXFxkLVswLTNdXFxkVFswLTJdXFxkOlswLTVdXFxkKFsrLV1bMC0yXVxcZDpbMC01XVxcZHxaKSkpJC8sdD10aGlzLHI9MCxmPTAsZD0hMSxlPSExLGw9W10sYz17ZGF0YTpbXSxlcnJvcnM6W10sbWV0YTp7fX07aWYoSihtLnN0ZXApKXt2YXIgcD1tLnN0ZXA7bS5zdGVwPWZ1bmN0aW9uKGUpe2lmKGM9ZSxfKCkpZygpO2Vsc2V7aWYoZygpLDA9PT1jLmRhdGEubGVuZ3RoKXJldHVybjtyKz1lLmRhdGEubGVuZ3RoLG0ucHJldmlldyYmcj5tLnByZXZpZXc/by5hYm9ydCgpOihjLmRhdGE9Yy5kYXRhWzBdLHAoYyx0KSl9fX1mdW5jdGlvbiB5KGUpe3JldHVyblwiZ3JlZWR5XCI9PT1tLnNraXBFbXB0eUxpbmVzP1wiXCI9PT1lLmpvaW4oXCJcIikudHJpbSgpOjE9PT1lLmxlbmd0aCYmMD09PWVbMF0ubGVuZ3RofWZ1bmN0aW9uIGcoKXtyZXR1cm4gYyYmdSYmKGsoXCJEZWxpbWl0ZXJcIixcIlVuZGV0ZWN0YWJsZURlbGltaXRlclwiLFwiVW5hYmxlIHRvIGF1dG8tZGV0ZWN0IGRlbGltaXRpbmcgY2hhcmFjdGVyOyBkZWZhdWx0ZWQgdG8gJ1wiK2IuRGVmYXVsdERlbGltaXRlcitcIidcIiksdT0hMSksbS5za2lwRW1wdHlMaW5lcyYmKGMuZGF0YT1jLmRhdGEuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiF5KGUpfSkpLF8oKSYmZnVuY3Rpb24oKXtpZighYylyZXR1cm47ZnVuY3Rpb24gZShlLHQpe0oobS50cmFuc2Zvcm1IZWFkZXIpJiYoZT1tLnRyYW5zZm9ybUhlYWRlcihlLHQpKSxsLnB1c2goZSl9aWYoQXJyYXkuaXNBcnJheShjLmRhdGFbMF0pKXtmb3IodmFyIHQ9MDtfKCkmJnQ8Yy5kYXRhLmxlbmd0aDt0KyspYy5kYXRhW3RdLmZvckVhY2goZSk7Yy5kYXRhLnNwbGljZSgwLDEpfWVsc2UgYy5kYXRhLmZvckVhY2goZSl9KCksZnVuY3Rpb24oKXtpZighY3x8IW0uaGVhZGVyJiYhbS5keW5hbWljVHlwaW5nJiYhbS50cmFuc2Zvcm0pcmV0dXJuIGM7ZnVuY3Rpb24gZShlLHQpe3ZhciByLGk9bS5oZWFkZXI/e306W107Zm9yKHI9MDtyPGUubGVuZ3RoO3IrKyl7dmFyIG49cixzPWVbcl07bS5oZWFkZXImJihuPXI+PWwubGVuZ3RoP1wiX19wYXJzZWRfZXh0cmFcIjpsW3JdKSxtLnRyYW5zZm9ybSYmKHM9bS50cmFuc2Zvcm0ocyxuKSkscz12KG4scyksXCJfX3BhcnNlZF9leHRyYVwiPT09bj8oaVtuXT1pW25dfHxbXSxpW25dLnB1c2gocykpOmlbbl09c31yZXR1cm4gbS5oZWFkZXImJihyPmwubGVuZ3RoP2soXCJGaWVsZE1pc21hdGNoXCIsXCJUb29NYW55RmllbGRzXCIsXCJUb28gbWFueSBmaWVsZHM6IGV4cGVjdGVkIFwiK2wubGVuZ3RoK1wiIGZpZWxkcyBidXQgcGFyc2VkIFwiK3IsZit0KTpyPGwubGVuZ3RoJiZrKFwiRmllbGRNaXNtYXRjaFwiLFwiVG9vRmV3RmllbGRzXCIsXCJUb28gZmV3IGZpZWxkczogZXhwZWN0ZWQgXCIrbC5sZW5ndGgrXCIgZmllbGRzIGJ1dCBwYXJzZWQgXCIrcixmK3QpKSxpfXZhciB0PTE7IWMuZGF0YS5sZW5ndGh8fEFycmF5LmlzQXJyYXkoYy5kYXRhWzBdKT8oYy5kYXRhPWMuZGF0YS5tYXAoZSksdD1jLmRhdGEubGVuZ3RoKTpjLmRhdGE9ZShjLmRhdGEsMCk7bS5oZWFkZXImJmMubWV0YSYmKGMubWV0YS5maWVsZHM9bCk7cmV0dXJuIGYrPXQsY30oKX1mdW5jdGlvbiBfKCl7cmV0dXJuIG0uaGVhZGVyJiYwPT09bC5sZW5ndGh9ZnVuY3Rpb24gdihlLHQpe3JldHVybiByPWUsbS5keW5hbWljVHlwaW5nRnVuY3Rpb24mJnZvaWQgMD09PW0uZHluYW1pY1R5cGluZ1tyXSYmKG0uZHluYW1pY1R5cGluZ1tyXT1tLmR5bmFtaWNUeXBpbmdGdW5jdGlvbihyKSksITA9PT0obS5keW5hbWljVHlwaW5nW3JdfHxtLmR5bmFtaWNUeXBpbmcpP1widHJ1ZVwiPT09dHx8XCJUUlVFXCI9PT10fHxcImZhbHNlXCIhPT10JiZcIkZBTFNFXCIhPT10JiYoZnVuY3Rpb24oZSl7aWYocy50ZXN0KGUpKXt2YXIgdD1wYXJzZUZsb2F0KGUpO2lmKG48dCYmdDxpKXJldHVybiEwfXJldHVybiExfSh0KT9wYXJzZUZsb2F0KHQpOmgudGVzdCh0KT9uZXcgRGF0ZSh0KTpcIlwiPT09dD9udWxsOnQpOnQ7dmFyIHJ9ZnVuY3Rpb24gayhlLHQscixpKXt2YXIgbj17dHlwZTplLGNvZGU6dCxtZXNzYWdlOnJ9O3ZvaWQgMCE9PWkmJihuLnJvdz1pKSxjLmVycm9ycy5wdXNoKG4pfXRoaXMucGFyc2U9ZnVuY3Rpb24oZSx0LHIpe3ZhciBpPW0ucXVvdGVDaGFyfHwnXCInO2lmKG0ubmV3bGluZXx8KG0ubmV3bGluZT1mdW5jdGlvbihlLHQpe2U9ZS5zdWJzdHJpbmcoMCwxMDQ4NTc2KTt2YXIgcj1uZXcgUmVnRXhwKFEodCkrXCIoW15dKj8pXCIrUSh0KSxcImdtXCIpLGk9KGU9ZS5yZXBsYWNlKHIsXCJcIikpLnNwbGl0KFwiXFxyXCIpLG49ZS5zcGxpdChcIlxcblwiKSxzPTE8bi5sZW5ndGgmJm5bMF0ubGVuZ3RoPGlbMF0ubGVuZ3RoO2lmKDE9PT1pLmxlbmd0aHx8cylyZXR1cm5cIlxcblwiO2Zvcih2YXIgYT0wLG89MDtvPGkubGVuZ3RoO28rKylcIlxcblwiPT09aVtvXVswXSYmYSsrO3JldHVybiBhPj1pLmxlbmd0aC8yP1wiXFxyXFxuXCI6XCJcXHJcIn0oZSxpKSksdT0hMSxtLmRlbGltaXRlcilKKG0uZGVsaW1pdGVyKSYmKG0uZGVsaW1pdGVyPW0uZGVsaW1pdGVyKGUpLGMubWV0YS5kZWxpbWl0ZXI9bS5kZWxpbWl0ZXIpO2Vsc2V7dmFyIG49ZnVuY3Rpb24oZSx0LHIsaSxuKXt2YXIgcyxhLG8sdTtuPW58fFtcIixcIixcIlxcdFwiLFwifFwiLFwiO1wiLGIuUkVDT1JEX1NFUCxiLlVOSVRfU0VQXTtmb3IodmFyIGg9MDtoPG4ubGVuZ3RoO2grKyl7dmFyIGY9bltoXSxkPTAsbD0wLGM9MDtvPXZvaWQgMDtmb3IodmFyIHA9bmV3IEUoe2NvbW1lbnRzOmksZGVsaW1pdGVyOmYsbmV3bGluZTp0LHByZXZpZXc6MTB9KS5wYXJzZShlKSxnPTA7ZzxwLmRhdGEubGVuZ3RoO2crKylpZihyJiZ5KHAuZGF0YVtnXSkpYysrO2Vsc2V7dmFyIF89cC5kYXRhW2ddLmxlbmd0aDtsKz1fLHZvaWQgMCE9PW8/MDxfJiYoZCs9TWF0aC5hYnMoXy1vKSxvPV8pOm89X30wPHAuZGF0YS5sZW5ndGgmJihsLz1wLmRhdGEubGVuZ3RoLWMpLCh2b2lkIDA9PT1hfHxkPD1hKSYmKHZvaWQgMD09PXV8fHU8bCkmJjEuOTk8bCYmKGE9ZCxzPWYsdT1sKX1yZXR1cm57c3VjY2Vzc2Z1bDohIShtLmRlbGltaXRlcj1zKSxiZXN0RGVsaW1pdGVyOnN9fShlLG0ubmV3bGluZSxtLnNraXBFbXB0eUxpbmVzLG0uY29tbWVudHMsbS5kZWxpbWl0ZXJzVG9HdWVzcyk7bi5zdWNjZXNzZnVsP20uZGVsaW1pdGVyPW4uYmVzdERlbGltaXRlcjoodT0hMCxtLmRlbGltaXRlcj1iLkRlZmF1bHREZWxpbWl0ZXIpLGMubWV0YS5kZWxpbWl0ZXI9bS5kZWxpbWl0ZXJ9dmFyIHM9dyhtKTtyZXR1cm4gbS5wcmV2aWV3JiZtLmhlYWRlciYmcy5wcmV2aWV3KyssYT1lLG89bmV3IEUocyksYz1vLnBhcnNlKGEsdCxyKSxnKCksZD97bWV0YTp7cGF1c2VkOiEwfX06Y3x8e21ldGE6e3BhdXNlZDohMX19fSx0aGlzLnBhdXNlZD1mdW5jdGlvbigpe3JldHVybiBkfSx0aGlzLnBhdXNlPWZ1bmN0aW9uKCl7ZD0hMCxvLmFib3J0KCksYT1KKG0uY2h1bmspP1wiXCI6YS5zdWJzdHJpbmcoby5nZXRDaGFySW5kZXgoKSl9LHRoaXMucmVzdW1lPWZ1bmN0aW9uKCl7dC5zdHJlYW1lci5faGFsdGVkPyhkPSExLHQuc3RyZWFtZXIucGFyc2VDaHVuayhhLCEwKSk6c2V0VGltZW91dCh0LnJlc3VtZSwzKX0sdGhpcy5hYm9ydGVkPWZ1bmN0aW9uKCl7cmV0dXJuIGV9LHRoaXMuYWJvcnQ9ZnVuY3Rpb24oKXtlPSEwLG8uYWJvcnQoKSxjLm1ldGEuYWJvcnRlZD0hMCxKKG0uY29tcGxldGUpJiZtLmNvbXBsZXRlKGMpLGE9XCJcIn19ZnVuY3Rpb24gUShlKXtyZXR1cm4gZS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZyxcIlxcXFwkJlwiKX1mdW5jdGlvbiBFKGope3ZhciB6LE09KGo9anx8e30pLmRlbGltaXRlcixQPWoubmV3bGluZSxVPWouY29tbWVudHMscT1qLnN0ZXAsTj1qLnByZXZpZXcsQj1qLmZhc3RNb2RlLEs9ej12b2lkIDA9PT1qLnF1b3RlQ2hhcnx8bnVsbD09PWoucXVvdGVDaGFyPydcIic6ai5xdW90ZUNoYXI7aWYodm9pZCAwIT09ai5lc2NhcGVDaGFyJiYoSz1qLmVzY2FwZUNoYXIpLChcInN0cmluZ1wiIT10eXBlb2YgTXx8LTE8Yi5CQURfREVMSU1JVEVSUy5pbmRleE9mKE0pKSYmKE09XCIsXCIpLFU9PT1NKXRocm93IG5ldyBFcnJvcihcIkNvbW1lbnQgY2hhcmFjdGVyIHNhbWUgYXMgZGVsaW1pdGVyXCIpOyEwPT09VT9VPVwiI1wiOihcInN0cmluZ1wiIT10eXBlb2YgVXx8LTE8Yi5CQURfREVMSU1JVEVSUy5pbmRleE9mKFUpKSYmKFU9ITEpLFwiXFxuXCIhPT1QJiZcIlxcclwiIT09UCYmXCJcXHJcXG5cIiE9PVAmJihQPVwiXFxuXCIpO3ZhciBXPTAsSD0hMTt0aGlzLnBhcnNlPWZ1bmN0aW9uKGksdCxyKXtpZihcInN0cmluZ1wiIT10eXBlb2YgaSl0aHJvdyBuZXcgRXJyb3IoXCJJbnB1dCBtdXN0IGJlIGEgc3RyaW5nXCIpO3ZhciBuPWkubGVuZ3RoLGU9TS5sZW5ndGgscz1QLmxlbmd0aCxhPVUubGVuZ3RoLG89SihxKSx1PVtdLGg9W10sZj1bXSxkPVc9MDtpZighaSlyZXR1cm4gTCgpO2lmKGouaGVhZGVyJiYhdCl7dmFyIGw9aS5zcGxpdChQKVswXS5zcGxpdChNKSxjPVtdLHA9e30sZz0hMTtmb3IodmFyIF8gaW4gbCl7dmFyIG09bFtfXTtKKGoudHJhbnNmb3JtSGVhZGVyKSYmKG09ai50cmFuc2Zvcm1IZWFkZXIobSxfKSk7dmFyIHk9bSx2PXBbbV18fDA7Zm9yKDA8diYmKGc9ITAseT1tK1wiX1wiK3YpLHBbbV09disxO2MuaW5jbHVkZXMoeSk7KXk9eStcIl9cIit2O2MucHVzaCh5KX1pZihnKXt2YXIgaz1pLnNwbGl0KFApO2tbMF09Yy5qb2luKE0pLGk9ay5qb2luKFApfX1pZihCfHwhMSE9PUImJi0xPT09aS5pbmRleE9mKHopKXtmb3IodmFyIGI9aS5zcGxpdChQKSxFPTA7RTxiLmxlbmd0aDtFKyspe2lmKGY9YltFXSxXKz1mLmxlbmd0aCxFIT09Yi5sZW5ndGgtMSlXKz1QLmxlbmd0aDtlbHNlIGlmKHIpcmV0dXJuIEwoKTtpZighVXx8Zi5zdWJzdHJpbmcoMCxhKSE9PVUpe2lmKG8pe2lmKHU9W10sSShmLnNwbGl0KE0pKSxGKCksSClyZXR1cm4gTCgpfWVsc2UgSShmLnNwbGl0KE0pKTtpZihOJiZOPD1FKXJldHVybiB1PXUuc2xpY2UoMCxOKSxMKCEwKX19cmV0dXJuIEwoKX1mb3IodmFyIHc9aS5pbmRleE9mKE0sVyksUj1pLmluZGV4T2YoUCxXKSxDPW5ldyBSZWdFeHAoUShLKStRKHopLFwiZ1wiKSxTPWkuaW5kZXhPZih6LFcpOzspaWYoaVtXXSE9PXopaWYoVSYmMD09PWYubGVuZ3RoJiZpLnN1YnN0cmluZyhXLFcrYSk9PT1VKXtpZigtMT09PVIpcmV0dXJuIEwoKTtXPVIrcyxSPWkuaW5kZXhPZihQLFcpLHc9aS5pbmRleE9mKE0sVyl9ZWxzZSBpZigtMSE9PXcmJih3PFJ8fC0xPT09UikpZi5wdXNoKGkuc3Vic3RyaW5nKFcsdykpLFc9dytlLHc9aS5pbmRleE9mKE0sVyk7ZWxzZXtpZigtMT09PVIpYnJlYWs7aWYoZi5wdXNoKGkuc3Vic3RyaW5nKFcsUikpLEQoUitzKSxvJiYoRigpLEgpKXJldHVybiBMKCk7aWYoTiYmdS5sZW5ndGg+PU4pcmV0dXJuIEwoITApfWVsc2UgZm9yKFM9VyxXKys7Oyl7aWYoLTE9PT0oUz1pLmluZGV4T2YoeixTKzEpKSlyZXR1cm4gcnx8aC5wdXNoKHt0eXBlOlwiUXVvdGVzXCIsY29kZTpcIk1pc3NpbmdRdW90ZXNcIixtZXNzYWdlOlwiUXVvdGVkIGZpZWxkIHVudGVybWluYXRlZFwiLHJvdzp1Lmxlbmd0aCxpbmRleDpXfSksVCgpO2lmKFM9PT1uLTEpcmV0dXJuIFQoaS5zdWJzdHJpbmcoVyxTKS5yZXBsYWNlKEMseikpO2lmKHohPT1LfHxpW1MrMV0hPT1LKXtpZih6PT09S3x8MD09PVN8fGlbUy0xXSE9PUspey0xIT09dyYmdzxTKzEmJih3PWkuaW5kZXhPZihNLFMrMSkpLC0xIT09UiYmUjxTKzEmJihSPWkuaW5kZXhPZihQLFMrMSkpO3ZhciBPPUEoLTE9PT1SP3c6TWF0aC5taW4odyxSKSk7aWYoaS5zdWJzdHIoUysxK08sZSk9PT1NKXtmLnB1c2goaS5zdWJzdHJpbmcoVyxTKS5yZXBsYWNlKEMseikpLGlbVz1TKzErTytlXSE9PXomJihTPWkuaW5kZXhPZih6LFcpKSx3PWkuaW5kZXhPZihNLFcpLFI9aS5pbmRleE9mKFAsVyk7YnJlYWt9dmFyIHg9QShSKTtpZihpLnN1YnN0cmluZyhTKzEreCxTKzEreCtzKT09PVApe2lmKGYucHVzaChpLnN1YnN0cmluZyhXLFMpLnJlcGxhY2UoQyx6KSksRChTKzEreCtzKSx3PWkuaW5kZXhPZihNLFcpLFM9aS5pbmRleE9mKHosVyksbyYmKEYoKSxIKSlyZXR1cm4gTCgpO2lmKE4mJnUubGVuZ3RoPj1OKXJldHVybiBMKCEwKTticmVha31oLnB1c2goe3R5cGU6XCJRdW90ZXNcIixjb2RlOlwiSW52YWxpZFF1b3Rlc1wiLG1lc3NhZ2U6XCJUcmFpbGluZyBxdW90ZSBvbiBxdW90ZWQgZmllbGQgaXMgbWFsZm9ybWVkXCIscm93OnUubGVuZ3RoLGluZGV4Old9KSxTKyt9fWVsc2UgUysrfXJldHVybiBUKCk7ZnVuY3Rpb24gSShlKXt1LnB1c2goZSksZD1XfWZ1bmN0aW9uIEEoZSl7dmFyIHQ9MDtpZigtMSE9PWUpe3ZhciByPWkuc3Vic3RyaW5nKFMrMSxlKTtyJiZcIlwiPT09ci50cmltKCkmJih0PXIubGVuZ3RoKX1yZXR1cm4gdH1mdW5jdGlvbiBUKGUpe3JldHVybiByfHwodm9pZCAwPT09ZSYmKGU9aS5zdWJzdHJpbmcoVykpLGYucHVzaChlKSxXPW4sSShmKSxvJiZGKCkpLEwoKX1mdW5jdGlvbiBEKGUpe1c9ZSxJKGYpLGY9W10sUj1pLmluZGV4T2YoUCxXKX1mdW5jdGlvbiBMKGUpe3JldHVybntkYXRhOnUsZXJyb3JzOmgsbWV0YTp7ZGVsaW1pdGVyOk0sbGluZWJyZWFrOlAsYWJvcnRlZDpILHRydW5jYXRlZDohIWUsY3Vyc29yOmQrKHR8fDApfX19ZnVuY3Rpb24gRigpe3EoTCgpKSx1PVtdLGg9W119fSx0aGlzLmFib3J0PWZ1bmN0aW9uKCl7SD0hMH0sdGhpcy5nZXRDaGFySW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gV319ZnVuY3Rpb24gXyhlKXt2YXIgdD1lLmRhdGEscj1hW3Qud29ya2VySWRdLGk9ITE7aWYodC5lcnJvcilyLnVzZXJFcnJvcih0LmVycm9yLHQuZmlsZSk7ZWxzZSBpZih0LnJlc3VsdHMmJnQucmVzdWx0cy5kYXRhKXt2YXIgbj17YWJvcnQ6ZnVuY3Rpb24oKXtpPSEwLG0odC53b3JrZXJJZCx7ZGF0YTpbXSxlcnJvcnM6W10sbWV0YTp7YWJvcnRlZDohMH19KX0scGF1c2U6eSxyZXN1bWU6eX07aWYoSihyLnVzZXJTdGVwKSl7Zm9yKHZhciBzPTA7czx0LnJlc3VsdHMuZGF0YS5sZW5ndGgmJihyLnVzZXJTdGVwKHtkYXRhOnQucmVzdWx0cy5kYXRhW3NdLGVycm9yczp0LnJlc3VsdHMuZXJyb3JzLG1ldGE6dC5yZXN1bHRzLm1ldGF9LG4pLCFpKTtzKyspO2RlbGV0ZSB0LnJlc3VsdHN9ZWxzZSBKKHIudXNlckNodW5rKSYmKHIudXNlckNodW5rKHQucmVzdWx0cyxuLHQuZmlsZSksZGVsZXRlIHQucmVzdWx0cyl9dC5maW5pc2hlZCYmIWkmJm0odC53b3JrZXJJZCx0LnJlc3VsdHMpfWZ1bmN0aW9uIG0oZSx0KXt2YXIgcj1hW2VdO0ooci51c2VyQ29tcGxldGUpJiZyLnVzZXJDb21wbGV0ZSh0KSxyLnRlcm1pbmF0ZSgpLGRlbGV0ZSBhW2VdfWZ1bmN0aW9uIHkoKXt0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQuXCIpfWZ1bmN0aW9uIHcoZSl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fG51bGw9PT1lKXJldHVybiBlO3ZhciB0PUFycmF5LmlzQXJyYXkoZSk/W106e307Zm9yKHZhciByIGluIGUpdFtyXT13KGVbcl0pO3JldHVybiB0fWZ1bmN0aW9uIHYoZSx0KXtyZXR1cm4gZnVuY3Rpb24oKXtlLmFwcGx5KHQsYXJndW1lbnRzKX19ZnVuY3Rpb24gSihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlfXJldHVybiBvJiYoZi5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5kYXRhO3ZvaWQgMD09PWIuV09SS0VSX0lEJiZ0JiYoYi5XT1JLRVJfSUQ9dC53b3JrZXJJZCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQuaW5wdXQpZi5wb3N0TWVzc2FnZSh7d29ya2VySWQ6Yi5XT1JLRVJfSUQscmVzdWx0czpiLnBhcnNlKHQuaW5wdXQsdC5jb25maWcpLGZpbmlzaGVkOiEwfSk7ZWxzZSBpZihmLkZpbGUmJnQuaW5wdXQgaW5zdGFuY2VvZiBGaWxlfHx0LmlucHV0IGluc3RhbmNlb2YgT2JqZWN0KXt2YXIgcj1iLnBhcnNlKHQuaW5wdXQsdC5jb25maWcpO3ImJmYucG9zdE1lc3NhZ2Uoe3dvcmtlcklkOmIuV09SS0VSX0lELHJlc3VsdHM6cixmaW5pc2hlZDohMH0pfX0pLChsLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGgucHJvdG90eXBlKSkuY29uc3RydWN0b3I9bCwoYy5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShoLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yPWMsKHAucHJvdG90eXBlPU9iamVjdC5jcmVhdGUocC5wcm90b3R5cGUpKS5jb25zdHJ1Y3Rvcj1wLChnLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGgucHJvdG90eXBlKSkuY29uc3RydWN0b3I9ZyxifSk7IiwiLy8gVE9ETyBmaXggcXVlc3Rpb24gZGF0YSBmb3IgbW9kdWxlXHJcblxyXG5jb25zdCBncmlkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JpZFdyYXBwZXJcIik7XHJcblxyXG4vLyBjaGFuZ2UgdGhpcyB0byB1c2UgcXVlc3Rpb24gb2JqZWN0XHJcbi8vIGdyaWQgY291bnQgYmFzZWQgb24gcXVlc3Rpb25PYmoga2V5cyBsZW5ndGhzLCAyIGRpbWVuc2lvbnMsIGNhdGVnb3J5IGxlbmd0aCArIHF1ZXN0aW9uIGNvdW50IGxlbmd0aCArIHRvcGljXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVRdWVzdGlvbkdyaWQoZ3JpZENvdW50LCBxdWVzdGlvbkRhdGEpIHtcclxuICBjb25zdCBxdWVzdGlvblZhbHVlcyA9IFtcclxuICAgIDEwMCwgMTAwLCAxMDAsIDEwMCwgMTAwLCAxMDAsIDIwMCwgMjAwLCAyMDAsIDIwMCwgMjAwLCAyMDAsIDMwMCwgMzAwLCAzMDAsXHJcbiAgICAzMDAsIDMwMCwgMzAwLCA0MDAsIDQwMCwgNDAwLCA0MDAsIDQwMCwgNDAwLCA1MDAsIDUwMCwgNTAwLCA1MDAsIDUwMCwgNTAwLFxyXG4gICAgNjAwLCA2MDAsIDYwMCwgNjAwLCA2MDAsIDYwMCxcclxuICBdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRDb3VudDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBxdWVzdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAvLyB0cmVhdCB0aGUgZmlyc3Qgc2l4IGJveGVzIGRpZmZlcmVudGx5IHRvIHR1cm4gdGhlbSBpbnRvIHRvcGljIGhlYWRlcnMuXHJcbiAgICBpZiAoaSA8IDYpIHtcclxuICAgICAgLy8gMDAsMjAsNDAsNjAsODAsMTAwXHJcbiAgICAgIHF1ZXN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJxdWVzdGlvblRvcGljXCIpO1xyXG4gICAgICAvLyB1c2UgZXZlcnkgc2Vjb25kIGFycmF5IHRvIGFjY291bnQgZm9yIHNwcmVhZHNoZWV0IGZvcm1hdFxyXG4gICAgICBxdWVzdGlvbkRpdi50ZXh0Q29udGVudCA9IHF1ZXN0aW9uRGF0YVsyICogaV1bMF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBxdWVzdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb25cIik7XHJcbiAgICAgIHF1ZXN0aW9uRGl2LnRleHRDb250ZW50ID0gcXVlc3Rpb25WYWx1ZXNbaSAtIDZdO1xyXG4gICAgfVxyXG5cclxuICAgIGdyaWRBcmVhLmFwcGVuZENoaWxkKHF1ZXN0aW9uRGl2KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHJlbW92ZSB0aGlzIGxhdGVyXHJcbmV4cG9ydCBjb25zdCB0ZXN0ID0gNztcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGxheWVyKG5hbWUsIG51bWJlciwgc2NvcmUpIHtcclxuICAvLyBhc3NpZ24gdG8gb2JqIHJhdGhlciB0aGFuIHRoaXMsIHNpbmNlIHRoaXMgPT09IHVuZGVmaW5lZCBpbiBtb2R1bGVzXHJcbiAgY29uc3Qgb2JqID0ge307XHJcbiAgb2JqLmRpc3BsYXlQbGF5ZXJOYW1lID0gZnVuY3Rpb24gZGlzcGxheVBsYXllck5hbWUocGxheWVyTnVtYmVyKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgI3BsYXllciR7cGxheWVyTnVtYmVyfWAsXHJcbiAgICApLnRleHRDb250ZW50ID0gYCR7dGhpcy5uYW1lfTpgO1xyXG4gIH07XHJcbiAgb2JqLmNoYW5nZVBsYXllck5hbWUgPSBmdW5jdGlvbiBjaGFuZ2VQbGF5ZXJOYW1lKCkge1xyXG4gICAgY29uc3QgdGVtcE5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICB0aGlzLm5hbWUgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCIsIFwiSm9zaCBHdW5zb25cIik7XHJcbiAgICAvLyBwcmV2ZW50IHBsYXllciBuYW1lIGZyb20gZGlzYXBwZWFyaW5nIGJ5IHVzaW5nIHByZXZpb3VzIG5hbWVcclxuICAgIGlmICh0aGlzLm5hbWUgPT09IG51bGwpIHRoaXMubmFtZSA9IHRlbXBOYW1lO1xyXG4gICAgdGhpcy5kaXNwbGF5UGxheWVyTmFtZSh0aGlzLm51bWJlcik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICB9O1xyXG4gIG9iai5kaXNwbGF5UGxheWVyU2NvcmUgPSBmdW5jdGlvbiBkaXNwbGF5UGxheWVyU2NvcmUoXHJcbiAgICBwbGF5ZXJOdW1iZXIsXHJcbiAgICBzY29yZVRvQWRkLFxyXG4gICkge1xyXG4gICAgLy8gdGhhbmsgYWJvdXQgc3BsaXR0aW5nIHRoaXMgZnVuY3Rpb24gaW50byB0d28gZnVuY3Rpb25zXHJcbiAgICB0aGlzLnNjb3JlICs9IHNjb3JlVG9BZGQ7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyJHtwbGF5ZXJOdW1iZXJ9U2NvcmVgKS50ZXh0Q29udGVudCA9XHJcbiAgICAgIHRoaXMuc2NvcmU7XHJcbiAgfTtcclxuICBvYmoubmFtZSA9IG5hbWU7XHJcbiAgb2JqLnNjb3JlID0gc2NvcmU7XHJcbiAgb2JqLm51bWJlciA9IG51bWJlcjtcclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQbGF5ZXJzT2JqKHBsYXllckNvdW50KSB7XHJcbiAgY29uc3Qgc3RvY2tOYW1lcyA9IFtcIkNoYXNlXCIsIFwiRXRoYW5cIiwgXCJTdGFuXCIsIFwiVGF5bG9yXCJdO1xyXG4gIGNvbnN0IHBsYXllcnMgPSB7fTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBsYXllckNvdW50ICsgMTsgaSArPSAxKSB7XHJcbiAgICBwbGF5ZXJzW2ldID0gZ2VuZXJhdGVQbGF5ZXIoc3RvY2tOYW1lc1tpIC0gMV0sIGksIDApO1xyXG4gIH1cclxuICByZXR1cm4gcGxheWVycztcclxufVxyXG4vLyBjb25zdCBwbGF5ZXIxID0gZ2VuZXJhdGVQbGF5ZXIoXCJDaGFzZVwiLCAxLCAwKTtcclxuLy8gY29uc3QgcGxheWVyMiA9IGdlbmVyYXRlUGxheWVyKFwiRXRoYW5cIiwgMiwgMCk7XHJcbi8vIGNvbnN0IHBsYXllcjMgPSBnZW5lcmF0ZVBsYXllcihcIlN0YW5cIiwgMywgMCk7XHJcbi8vIGNvbnN0IHBsYXllcjQgPSBnZW5lcmF0ZVBsYXllcihcIlRheWxvclwiLCA0LCAwKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwbGF5ZXJOYW1lcyA9IFtcInRlc3RcIl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbFBsYXllclNldHVwKHBsYXllcjEsIHBsYXllcjIsIHBsYXllcjMsIHBsYXllcjQpIHtcclxuICAvLyBkaXNwbGF5IGRlZmF1bHQgdXNlcm5hbWVzXHJcbiAgcGxheWVyMS5kaXNwbGF5UGxheWVyTmFtZSgxKTtcclxuICBwbGF5ZXIyLmRpc3BsYXlQbGF5ZXJOYW1lKDIpO1xyXG4gIHBsYXllcjMuZGlzcGxheVBsYXllck5hbWUoMyk7XHJcbiAgcGxheWVyNC5kaXNwbGF5UGxheWVyTmFtZSg0KTtcclxuICAvLyBkaXNwbGF5IGludGlhbCAoemVybykgcGxheWVyIHNjb3Jlc1xyXG4gIHBsYXllcjEuZGlzcGxheVBsYXllclNjb3JlKDEsIDApO1xyXG4gIHBsYXllcjIuZGlzcGxheVBsYXllclNjb3JlKDIsIDApO1xyXG4gIHBsYXllcjMuZGlzcGxheVBsYXllclNjb3JlKDMsIDApO1xyXG4gIHBsYXllcjQuZGlzcGxheVBsYXllclNjb3JlKDQsIDApO1xyXG5cclxuICAvLyBwbGF5ZXIgbmFtZXMgY2FuIGJlIGNsaWNrZWQgdG8gb3BlbiB0aGUgY2hhbmdlIGRpYWxvZ3VlXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXIxXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwbGF5ZXIxLmNoYW5nZVBsYXllck5hbWUoKTtcclxuICB9KTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcjJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHBsYXllcjIuY2hhbmdlUGxheWVyTmFtZSgpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyM1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcGxheWVyMy5jaGFuZ2VQbGF5ZXJOYW1lKCk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXI0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwbGF5ZXI0LmNoYW5nZVBsYXllck5hbWUoKTtcclxuICB9KTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFBhcGEgZnJvbSBcInBhcGFwYXJzZVwiO1xyXG5pbXBvcnQgKiBhcyBib2FyZCBmcm9tIFwiLi9ib2FyZFwiO1xyXG5pbXBvcnQgKiBhcyBwbGF5ZXJzIGZyb20gXCIuL3BsYXllcnNcIjtcclxuXHJcbmxldCBxdWVzdGlvbkRhdGEgPSBbXTtcclxuXHJcbi8vIGNvbnZlcnQgdGhpcyB0byBhIGZ1bmN0aW9uIGluIHBsYXllcnMgbW9kdWxlXHJcbmV4cG9ydCBjb25zdCBwbGF5ZXJPYmogPSBwbGF5ZXJzLmdlbmVyYXRlUGxheWVyc09iaig0KTtcclxuXHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVRdWVzdGlvbk9iamVjdEZyb21DU1YoKSB7XHJcbiAgY29uc3QgcXVlc3Rpb25PYmogPSB7fTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVzdGlvbkRhdGEubGVuZ3RoIC8gMjsgaSArPSAxKSB7XHJcbiAgICBxdWVzdGlvbk9ialtgY2F0ZWdvcnkke2l9YF0gPSB7XHJcbiAgICAgIHRvcGljOiBxdWVzdGlvbkRhdGFbMiAqIGldWzBdLFxyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcXVlc3Rpb25EYXRhWzBdLmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHF1ZXN0aW9uRGF0YVsyICogaV0ubGVuZ3RoKTtcclxuICAgICAgcXVlc3Rpb25PYmpbYGNhdGVnb3J5JHtpfWBdW2BxdWVzdGlvbiR7an1gXSA9IHtcclxuICAgICAgICBxdWVzdGlvbjogcXVlc3Rpb25EYXRhWzIgKiBpXVtqXSxcclxuICAgICAgICBhbnN3ZXI6IHF1ZXN0aW9uRGF0YVsyICogaSArIDFdW2pdLFxyXG4gICAgICB9O1xyXG4gICAgICAvLyBxdWVzdGlvbk9ialtpXVtgcXVlc3Rpb24ke2p9YF0gPSBxdWVzdGlvbkRhdGFbMiAqIGldW2pdO1xyXG4gICAgICAvLyBxdWVzdGlvbk9ialtpXVtgYW5zd2VyJHtqfWBdID0gcXVlc3Rpb25EYXRhWzIgKiBpICsgMV1bal07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBxdWVzdGlvbk9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFF1ZXN0aW9uTW9kYWxFdmVudExpc3RlbmVyKHF1ZXN0aW9uT2JqZWN0KSB7XHJcbiAgY29uc3QgcXVlc3Rpb25UaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb25cIik7XHJcbiAgY29uc29sZS5sb2cocXVlc3Rpb25UaWxlcyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVzdGlvblRpbGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBsZXQgY3VycmVudFNjb3JlID0gMDtcclxuICAgIHF1ZXN0aW9uVGlsZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKHF1ZXN0aW9uVGlsZXNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFrZW5cIikpIHJldHVybjtcclxuICAgICAgaWYgKGkgPCA2KVxyXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9IHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXS5xdWVzdGlvbjEucXVlc3Rpb247XHJcbiAgICAgIGlmIChpIDwgMTIgJiYgaSA+IDUpXHJcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gcXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpIC0gNn1gXS5xdWVzdGlvbjIucXVlc3Rpb247XHJcbiAgICAgIGlmIChpIDwgMTggJiYgaSA+IDExKVxyXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9XHJcbiAgICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2kgLSAxMn1gXS5xdWVzdGlvbjMucXVlc3Rpb247XHJcbiAgICAgIGlmIChpIDwgMjQgJiYgaSA+IDE3KVxyXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9XHJcbiAgICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2kgLSAxOH1gXS5xdWVzdGlvbjQucXVlc3Rpb247XHJcbiAgICAgIGlmIChpIDwgMzAgJiYgaSA+IDIzKVxyXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9XHJcbiAgICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2kgLSAyNH1gXS5xdWVzdGlvbjUucXVlc3Rpb247XHJcbiAgICAgIGlmIChpIDwgMzYgJiYgaSA+IDI5KVxyXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9XHJcbiAgICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2kgLSAzMH1gXS5xdWVzdGlvbjYucXVlc3Rpb247XHJcblxyXG4gICAgICBjdXJyZW50U2NvcmUgPSBwYXJzZUludChxdWVzdGlvblRpbGVzW2ldLnRleHRDb250ZW50LCAxMCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTY29yZSk7XHJcblxyXG4gICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBidG4udGV4dENvbnRlbnQgPSBcIkFuc3dlclwiO1xyXG5cclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJidXR0b25EaXNhYmxlZFwiKSkgcmV0dXJuO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uRGlzYWJsZWRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXllck5hbWVzID0gW1xyXG4gICAgICAgICAgcGxheWVyT2JqWzFdLm5hbWUsXHJcbiAgICAgICAgICBwbGF5ZXJPYmpbMl0ubmFtZSxcclxuICAgICAgICAgIHBsYXllck9ialszXS5uYW1lLFxyXG4gICAgICAgICAgcGxheWVyT2JqWzRdLm5hbWUsXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJDb3VudCA9IHBsYXllck5hbWVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGkgPCA2KVxyXG4gICAgICAgICAgbW9kYWwuaW5uZXJIVE1MICs9IHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXS5xdWVzdGlvbjEuYW5zd2VyO1xyXG4gICAgICAgIGlmIChpIDwgMTIgJiYgaSA+IDUpXHJcbiAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgKz1cclxuICAgICAgICAgICAgcXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpIC0gNn1gXS5xdWVzdGlvbjIuYW5zd2VyO1xyXG4gICAgICAgIGlmIChpIDwgMTggJiYgaSA+IDExKVxyXG4gICAgICAgICAgbW9kYWwuaW5uZXJIVE1MICs9XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aSAtIDEyfWBdLnF1ZXN0aW9uMy5hbnN3ZXI7XHJcbiAgICAgICAgaWYgKGkgPCAyNCAmJiBpID4gMTcpXHJcbiAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgKz1cclxuICAgICAgICAgICAgcXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpIC0gMTh9YF0ucXVlc3Rpb240LmFuc3dlcjtcclxuICAgICAgICBpZiAoaSA8IDMwICYmIGkgPiAyMylcclxuICAgICAgICAgIG1vZGFsLmlubmVySFRNTCArPVxyXG4gICAgICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2kgLSAyNH1gXS5xdWVzdGlvbjUuYW5zd2VyO1xyXG4gICAgICAgIGlmIChpIDwgMzYgJiYgaSA+IDI5KVxyXG4gICAgICAgICAgbW9kYWwuaW5uZXJIVE1MICs9XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aSAtIDMwfWBdLnF1ZXN0aW9uNi5hbnN3ZXI7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzY29yZUJ1dHRvbnNcIik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyQ291bnQ7IGogKz0gMSkge1xyXG4gICAgICAgICAgY29uc3Qgc2NvcmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgc2NvcmVCdXR0b24udGV4dENvbnRlbnQgPSBwbGF5ZXJOYW1lc1tqXTtcclxuICAgICAgICAgIHNjb3JlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzY29yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJidXR0b25EaXNhYmxlZFwiKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBwbGF5ZXJPYmpbaiArIDFdLmRpc3BsYXlQbGF5ZXJTY29yZShqICsgMSwgY3VycmVudFNjb3JlKTtcclxuICAgICAgICAgICAgc2NvcmVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbkRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkaXYuYXBwZW5kKHNjb3JlQnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbW9kYWwuYXBwZW5kKGRpdik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBtb2RhbC5hcHBlbmQoYnRuKTtcclxuXHJcbiAgICAgIGFkZENsYXNzKHF1ZXN0aW9uVGlsZXNbaV0sIFwidGFrZW5cIik7XHJcblxyXG4gICAgICByZW1vdmVDbGFzcyhtb2RhbCwgXCJoaWRkZW5cIik7XHJcbiAgICAgIHJlbW92ZUNsYXNzKG92ZXJsYXksIFwiaGlkZGVuXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUXVlc3Rpb25Nb2RhbEV2ZW50TGlzdGVuZXJCYWNrdXAoKSB7XHJcbiAgY29uc3QgcXVlc3Rpb25UaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb25cIik7XHJcbiAgLy8gY29uc29sZS5sb2cocXVlc3Rpb25UaWxlcyk7XHJcbiAgLy8gY29uc29sZS5sb2cocGxheWVyTmFtZXMpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXN0aW9uVGlsZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGxldCBjdXJyZW50U2NvcmUgPSAwO1xyXG4gICAgcXVlc3Rpb25UaWxlc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAvLyBtb2RhbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAvLyBwcmV2ZW50IHRpbGUgZnJvbSBiZWluZyBvcGVuZWQgdHdpY2VcclxuICAgICAgaWYgKHF1ZXN0aW9uVGlsZXNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFrZW5cIikpIHJldHVybjtcclxuICAgICAgLy8gYXNzb2NpYXRlZCBhcnJheSBudW1iZXJzIGFyZSBkdWUgdG8gdGhlIGZvcm1hdCBvZiBxdWVzdGlvbiBjc3YgaW5wdXRcclxuICAgICAgaWYgKGkgPCA2KSBtb2RhbC5pbm5lckhUTUwgPSBxdWVzdGlvbkRhdGFbMiAqIGldWzFdO1xyXG4gICAgICBpZiAoaSA8IDEyICYmIGkgPiA1KSBtb2RhbC5pbm5lckhUTUwgPSBxdWVzdGlvbkRhdGFbMiAqIGkgLSAxMl1bMl07XHJcbiAgICAgIGlmIChpIDwgMTggJiYgaSA+IDExKSBtb2RhbC5pbm5lckhUTUwgPSBxdWVzdGlvbkRhdGFbMiAqIGkgLSAyNF1bM107XHJcbiAgICAgIGlmIChpIDwgMjQgJiYgaSA+IDE3KSBtb2RhbC5pbm5lckhUTUwgPSBxdWVzdGlvbkRhdGFbMiAqIGkgLSAzNl1bNF07XHJcbiAgICAgIGlmIChpIDwgMzAgJiYgaSA+IDIzKSBtb2RhbC5pbm5lckhUTUwgPSBxdWVzdGlvbkRhdGFbMiAqIGkgLSA0OF1bNV07XHJcbiAgICAgIGlmIChpIDwgMzYgJiYgaSA+IDI5KSBtb2RhbC5pbm5lckhUTUwgPSBxdWVzdGlvbkRhdGFbMiAqIGkgLSA2MF1bNl07XHJcblxyXG4gICAgICBjdXJyZW50U2NvcmUgPSBwYXJzZUludChxdWVzdGlvblRpbGVzW2ldLnRleHRDb250ZW50LCAxMCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTY29yZSk7XHJcblxyXG4gICAgICAvLyBhZGQgYW4gYW5zd2VyIGJ1dHRvbiB0byB0aGUgbW9kYWwgdGhhdCByZXZlYWxzIHRoZSBhbnN3ZXIgd2hlbiBjbGlja2VkLCBidXR0b25cclxuICAgICAgLy8gYWRkcyBiZWZvcmUgdGhlIHVzZXIgYnV0dG9ucywgYW5zd2VyIGFkZHMgdG8gYm90dG9tIG9mIG1vZGFsXHJcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiQW5zd2VyXCI7XHJcblxyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvbkRpc2FibGVkXCIpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllck5hbWVzID0gW1xyXG4gICAgICAgICAgcGxheWVyT2JqWzFdLm5hbWUsXHJcbiAgICAgICAgICBwbGF5ZXJPYmpbMl0ubmFtZSxcclxuICAgICAgICAgIHBsYXllck9ialszXS5uYW1lLFxyXG4gICAgICAgICAgcGxheWVyT2JqWzRdLm5hbWUsXHJcbiAgICAgICAgXTtcclxuICAgICAgICAvLyBhc3NvY2lhdGVkIGFycmF5IG51bWJlcnMgYXJlIGR1ZSB0byB0aGUgZm9ybWF0IG9mIHF1ZXN0aW9uIGNzdiBpbnB1dFxyXG4gICAgICAgIGlmIChpIDwgNikgbW9kYWwuaW5uZXJIVE1MICs9IHF1ZXN0aW9uRGF0YVsyICogaSArIDFdWzFdO1xyXG4gICAgICAgIGlmIChpIDwgMTIgJiYgaSA+IDUpIG1vZGFsLmlubmVySFRNTCArPSBxdWVzdGlvbkRhdGFbMiAqIGkgLSAxMV1bMl07XHJcbiAgICAgICAgaWYgKGkgPCAxOCAmJiBpID4gMTEpIG1vZGFsLmlubmVySFRNTCArPSBxdWVzdGlvbkRhdGFbMiAqIGkgLSAyM11bM107XHJcbiAgICAgICAgaWYgKGkgPCAyNCAmJiBpID4gMTcpIG1vZGFsLmlubmVySFRNTCArPSBxdWVzdGlvbkRhdGFbMiAqIGkgLSAzNV1bNF07XHJcbiAgICAgICAgaWYgKGkgPCAzMCAmJiBpID4gMjMpIG1vZGFsLmlubmVySFRNTCArPSBxdWVzdGlvbkRhdGFbMiAqIGkgLSA0N11bNV07XHJcbiAgICAgICAgaWYgKGkgPCAzNiAmJiBpID4gMjkpIG1vZGFsLmlubmVySFRNTCArPSBxdWVzdGlvbkRhdGFbMiAqIGkgLSA1OV1bNl07XHJcblxyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzY29yZUJ1dHRvbnNcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcclxuICAgICAgICAgIC8vIHNldCBsb29wIGxlbmd0aCB0byBudW1iZXIgb2YgcGxheWVyc1xyXG4gICAgICAgICAgLy8gYWRkIGJ1dHRvbnMgdG8gdGhlIG1vZGFsIHRoYXQgd2lsbCBhd2FyZCBwb2ludHMgdG8gdGhlIGNvcnJlY3QgcGxheWVyKHMpXHJcbiAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gcGxheWVyTmFtZXNbal07XHJcbiAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY2hlY2tzIGZvciBjbGlja2VkIGNsYXNzIGFkZGVkIGxhdGVyIHRvIHByZXZlbnQgYXdhcmRpbmcgcG9pbnRzIG1vcmUgdGhhbiBvbmNlXHJcbiAgICAgICAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnV0dG9uRGlzYWJsZWRcIikpIHJldHVybjtcclxuICAgICAgICAgICAgLy8gZ2V0IHF1ZXN0aW9uIHZhbHVlIGZyb20gdGhlIGNsaWNrZWQgdGlsZVxyXG4gICAgICAgICAgICAvLyBjdXJyZW50U2NvcmUgPSBwYXJzZUludChxdWVzdGlvblRpbGVzW2ldLnRleHRDb250ZW50LCAxMCk7XHJcbiAgICAgICAgICAgIC8vIGFkZCBjdXJyZW50IHNjb3JlIHRvIHRoZSBhcHByb3ByaWF0ZSBwbGF5ZXIgd2hlbiBjbGlja2VkXHJcbiAgICAgICAgICAgIGogPT09IDBcclxuICAgICAgICAgICAgICA/IHBsYXllck9ialsxXS5kaXNwbGF5UGxheWVyU2NvcmUoMSwgY3VycmVudFNjb3JlKVxyXG4gICAgICAgICAgICAgIDogaiA9PT0gMVxyXG4gICAgICAgICAgICAgID8gcGxheWVyT2JqWzJdLmRpc3BsYXlQbGF5ZXJTY29yZSgyLCBjdXJyZW50U2NvcmUpXHJcbiAgICAgICAgICAgICAgOiBqID09PSAyXHJcbiAgICAgICAgICAgICAgPyBwbGF5ZXJPYmpbM10uZGlzcGxheVBsYXllclNjb3JlKDMsIGN1cnJlbnRTY29yZSlcclxuICAgICAgICAgICAgICA6IHBsYXllck9ials0XS5kaXNwbGF5UGxheWVyU2NvcmUoNCwgY3VycmVudFNjb3JlKTtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25EaXNhYmxlZFwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcbiAgICAgIGFkZENsYXNzKHF1ZXN0aW9uVGlsZXNbaV0sIFwidGFrZW5cIik7XHJcblxyXG4gICAgICByZW1vdmVDbGFzcyhtb2RhbCwgXCJoaWRkZW5cIik7XHJcbiAgICAgIHJlbW92ZUNsYXNzKG92ZXJsYXksIFwiaGlkZGVuXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVlc3Rpb25EYXRhKGNzdkZpbGUpIHtcclxuICAvLyBcIi4uL3NyYy9xdWVzdGlvbnMvVHJpdmlhIC0gUXVlc3Rpb25zLmNzdlwiIGxvY2FsIGZpbGVuYW1lXHJcbiAgUGFwYS5wYXJzZShjc3ZGaWxlLmZpbGVzWzBdLCB7XHJcbiAgICBkb3dubG9hZDogdHJ1ZSxcclxuICAgIGNvbXBsZXRlKHJlc3VsdHMpIHtcclxuICAgICAgcXVlc3Rpb25EYXRhID0gcmVzdWx0cy5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhxdWVzdGlvbkRhdGEpO1xyXG4gICAgICBib2FyZC5jcmVhdGVRdWVzdGlvbkdyaWQoNDIsIHJlc3VsdHMuZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGdlbmVyYXRlUXVlc3Rpb25PYmplY3RGcm9tQ1NWKCkpO1xyXG4gICAgICBhZGRRdWVzdGlvbk1vZGFsRXZlbnRMaXN0ZW5lcihnZW5lcmF0ZVF1ZXN0aW9uT2JqZWN0RnJvbUNTVigpKTtcclxuICAgICAgLy8gYWRkUXVlc3Rpb25Nb2RhbEV2ZW50TGlzdGVuZXJCYWNrdXAoKTtcclxuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0cy5kYXRhKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9