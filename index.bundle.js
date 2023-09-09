/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: gray;
  text-align: center;
  overflow: auto;
}

#gridWrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  height: 50vh;
  font-size: 20px;
  font-weight: bold;
}

.question,
.questionTopic {
  background-color: rgba(51, 103, 199, 0.63);
  border: 2px solid black;
  border-radius: 8px;
  aspect-ratio: 2/1;
  width: min(15vw, 200px);
  /* text-align appears to be needed for top left grid square...no idea why */
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.taken {
  background-color: gray;
  color: gray;
  border-color: gray;
}

.modal {
  width: 60%;
  background-color: white;
  border: 1px black solid;
  border-radius: 4px;
  padding: 2rem;
  /* text-align: center; */
  position: fixed;
  top: 15%;
  left: 20%;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  font-size: 24px;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /* width: 100%; */
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
}
.hidden {
  display: none;
}

#playerScores {
  display: flex;
  justify-content: space-evenly;
  font-size: 30px;
}
.player {
  display: flex;
  align-items: center;
  gap: 2px;
}

img {
  height: 30vh;
}
.scoreButtons {
  display: flex;
  gap: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,0CAA0C;EAC1C,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;EACvB,2EAA2E;EAC3E,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,uBAAuB;EACvB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,wBAAwB;EACxB,eAAe;EACf,QAAQ;EACR,SAAS;EACT,UAAU;EACV,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,QAAQ;EACR,OAAO;EACP,iBAAiB;EACjB,oCAAoC;EACpC,0BAA0B;AAC5B;AACA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,SAAS;AACX","sourcesContent":["body {\r\n  background-color: gray;\r\n  text-align: center;\r\n  overflow: auto;\r\n}\r\n\r\n#gridWrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n  gap: 10px;\r\n  height: 50vh;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n.question,\r\n.questionTopic {\r\n  background-color: rgba(51, 103, 199, 0.63);\r\n  border: 2px solid black;\r\n  border-radius: 8px;\r\n  aspect-ratio: 2/1;\r\n  width: min(15vw, 200px);\r\n  /* text-align appears to be needed for top left grid square...no idea why */\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.taken {\r\n  background-color: gray;\r\n  color: gray;\r\n  border-color: gray;\r\n}\r\n\r\n.modal {\r\n  width: 60%;\r\n  background-color: white;\r\n  border: 1px black solid;\r\n  border-radius: 4px;\r\n  padding: 2rem;\r\n  /* text-align: center; */\r\n  position: fixed;\r\n  top: 15%;\r\n  left: 20%;\r\n  z-index: 2;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  font-size: 24px;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  /* width: 100%; */\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(3px);\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n#playerScores {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  font-size: 30px;\r\n}\r\n.player {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 2px;\r\n}\r\n\r\nimg {\r\n  height: 30vh;\r\n}\r\n.scoreButtons {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/* harmony export */   generateQuestionObject: () => (/* binding */ generateQuestionObject)
/* harmony export */ });
// TODO fix question data for module

const gridArea = document.querySelector("#gridWrapper");

function generateQuestionObject(questionData) {
  const questionObj = {};
}

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


/***/ }),

/***/ "./src/img sync \\.(png%7Cjpe?g%7Csvg)$":
/*!***********************************************************!*\
  !*** ./src/img/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./bloo-answer.png": "./src/img/bloo-answer.png",
	"./bloo.png": "./src/img/bloo.png",
	"./boromir-funeral-full.png": "./src/img/boromir-funeral-full.png",
	"./boromir-funeral.png": "./src/img/boromir-funeral.png",
	"./caitlyn-vi-full.png": "./src/img/caitlyn-vi-full.png",
	"./caitlyn-vi.png": "./src/img/caitlyn-vi.png",
	"./companion-cube-full.png": "./src/img/companion-cube-full.png",
	"./companion-cube.png": "./src/img/companion-cube.png",
	"./jinx-flare-full.png": "./src/img/jinx-flare-full.png",
	"./jinx-flare.png": "./src/img/jinx-flare.png",
	"./tohru.png": "./src/img/tohru.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img sync \\.(png%7Cjpe?g%7Csvg)$";

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


/***/ }),

/***/ "./src/questionModal.js":
/*!******************************!*\
  !*** ./src/questionModal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   addQuestionModalEventListener: () => (/* binding */ addQuestionModalEventListener),
/* harmony export */   getQuestionData: () => (/* binding */ getQuestionData),
/* harmony export */   playerObj: () => (/* binding */ playerObj),
/* harmony export */   removeClass: () => (/* binding */ removeClass)
/* harmony export */ });
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/board.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players */ "./src/players.js");




let currentScore = 0;
let questionData = [];

// convert this to a function in players module
const playerObj = _players__WEBPACK_IMPORTED_MODULE_2__.generatePlayersObj(4);
const playerNames = [
  playerObj[1].name,
  playerObj[2].name,
  playerObj[3].name,
  playerObj[4].name,
];

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function removeClass(element, className) {
  element.classList.remove(className);
}

function addClass(element, className) {
  element.classList.add(className);
}

function addQuestionModalEventListener() {
  const questionTiles = document.querySelectorAll(".question");
  console.log(questionTiles);
  console.log(playerNames);

  for (let i = 0; i < questionTiles.length; i += 1) {
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
            if (btn.classList.contains("clicked")) return;
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
            btn.classList.add("clicked");
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

function getQuestionData() {
  papaparse__WEBPACK_IMPORTED_MODULE_0___default().parse("../src/questions/Trivia - Questions.csv", {
    download: true,
    complete(results) {
      questionData = results.data;
      console.log(questionData);
      _board__WEBPACK_IMPORTED_MODULE_1__.createQuestionGrid(42, results.data);
      addQuestionModalEventListener();
      // console.log(results.data);
    },
  });
}


/***/ }),

/***/ "./src/img/bloo-answer.png":
/*!*********************************!*\
  !*** ./src/img/bloo-answer.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4f69f4a9998820d105c0.png";

/***/ }),

/***/ "./src/img/bloo.png":
/*!**************************!*\
  !*** ./src/img/bloo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c4b96728d1013c6eabc6.png";

/***/ }),

/***/ "./src/img/boromir-funeral-full.png":
/*!******************************************!*\
  !*** ./src/img/boromir-funeral-full.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8cac8e74432a34455b63.png";

/***/ }),

/***/ "./src/img/boromir-funeral.png":
/*!*************************************!*\
  !*** ./src/img/boromir-funeral.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "35ce06e1e3fd3683a8b2.png";

/***/ }),

/***/ "./src/img/caitlyn-vi-full.png":
/*!*************************************!*\
  !*** ./src/img/caitlyn-vi-full.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e96da0212b315e29dd19.png";

/***/ }),

/***/ "./src/img/caitlyn-vi.png":
/*!********************************!*\
  !*** ./src/img/caitlyn-vi.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6b6c422950a4d892e214.png";

/***/ }),

/***/ "./src/img/companion-cube-full.png":
/*!*****************************************!*\
  !*** ./src/img/companion-cube-full.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1874c40bedf8f82fedb2.png";

/***/ }),

/***/ "./src/img/companion-cube.png":
/*!************************************!*\
  !*** ./src/img/companion-cube.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "81fecf8d45c89e83f646.png";

/***/ }),

/***/ "./src/img/jinx-flare-full.png":
/*!*************************************!*\
  !*** ./src/img/jinx-flare-full.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "86e03229243923b7d0c9.png";

/***/ }),

/***/ "./src/img/jinx-flare.png":
/*!********************************!*\
  !*** ./src/img/jinx-flare.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d34f1db1769193efa982.png";

/***/ }),

/***/ "./src/img/tohru.png":
/*!***************************!*\
  !*** ./src/img/tohru.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "14f88e3ea11920fe3d19.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _questionModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questionModal */ "./src/questionModal.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players */ "./src/players.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board */ "./src/board.js");






// https://stackoverflow.com/questions/56427009/how-to-return-papa-parsed-csv-via-promise-async-await
// https://stackoverflow.com/questions/62905933/iterating-over-results-of-papa-parse-object
// review these for persuing await/promises with papaparse
// TODO remove text instead of setting it to body color

// TODO remove the various console.log debugging lines

// TODO change file from source document to user uploaded via button
// expand player creation to support any number of players
// change player name event listener to be a loop based on plaeyr count
// players module remove prompt for better custom solution
// one option for images, if (question data === img file name) set img
// expand stock names
// update players logic in index exclusive module

// Initialize the player objects
// const player1 = players.generatePlayer("Chase", 1, 0);
// const player2 = players.generatePlayer("Ethan", 2, 0);
// const player3 = players.generatePlayer("Stan", 3, 0);
// const player4 = players.generatePlayer("Taylor", 4, 0);

const { playerObj } = _questionModal__WEBPACK_IMPORTED_MODULE_2__;
console.log(playerObj);

// const playerNames = [player1.name, player2.name, player3.name, player4.name];

_players__WEBPACK_IMPORTED_MODULE_3__.initialPlayerSetup(
  playerObj[1],
  playerObj[2],
  playerObj[3],
  playerObj[4],
);

// const fileInput = document.getElementById("fileInput");
const upload = document.getElementById("upload");
const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");
// overlay provides a semi-transparent blur behind the modal to help focus attention on modal
// when the overlay background is clicked anywhere, the modal regains the hidden class and disappears
overlay.addEventListener("click", () => {
  _questionModal__WEBPACK_IMPORTED_MODULE_2__.addClass(modal, "hidden");
  _questionModal__WEBPACK_IMPORTED_MODULE_2__.addClass(overlay, "hidden");
});

upload.addEventListener("click", () => {
  // getQuestionData.csvParse(fileInput);
  // getQuestionData.csvParse();
  _questionModal__WEBPACK_IMPORTED_MODULE_2__.getQuestionData();
  document.getElementById("uploadWrapper").classList.add("hidden");
});

function importAll(r) {
  const images = {};
  // enclosing bracket around return to avoid ambiguous assignment in a return
  r.keys().forEach((key) => {
    // remove leading ./ from file names
    const temp = key.replace("./", "");
    // or option fix case where lastIndexOf === -1
    // remove trailing file extensions from file names (e.g. .png)
    const temp2 = temp.substr(0, temp.lastIndexOf(".")) || temp;
    // console.log(temp2);
    images[temp2] = r(key);
  });
  // alternate map method
  // r.keys().map((item, index) => {
  //   images[item.replace("./", "")] = r(item);
  // });
  return images;
}

const images = importAll(__webpack_require__("./src/img sync \\.(png%7Cjpe?g%7Csvg)$"));
// console.log(images);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNRO0FBQ2U7QUFDUDtBQUNKO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxZQUFZLEVBQUUsMkNBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQWlCO0FBQ25CLEVBQUUsb0RBQWlCO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkRBQXdCO0FBQzFCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZEQUFxRDtBQUM5RSIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9wYXBhcGFyc2UvcGFwYXBhcnNlLm1pbi5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL2ltZy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9wbGF5ZXJzLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL3F1ZXN0aW9uTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbiNncmlkV3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xyXG4gIGdhcDogMTBweDtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucXVlc3Rpb24sXHJcbi5xdWVzdGlvblRvcGljIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxMDMsIDE5OSwgMC42Myk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGFzcGVjdC1yYXRpbzogMi8xO1xyXG4gIHdpZHRoOiBtaW4oMTV2dywgMjAwcHgpO1xyXG4gIC8qIHRleHQtYWxpZ24gYXBwZWFycyB0byBiZSBuZWVkZWQgZm9yIHRvcCBsZWZ0IGdyaWQgc3F1YXJlLi4ubm8gaWRlYSB3aHkgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGFrZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDE1JTtcclxuICBsZWZ0OiAyMCU7XHJcbiAgei1pbmRleDogMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG59XHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNwbGF5ZXJTY29yZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5wbGF5ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDJweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbn1cclxuLnNjb3JlQnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsMENBQTBDO0VBQzFDLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QiwyRUFBMkU7RUFDM0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWRXcmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5xdWVzdGlvbixcXHJcXG4ucXVlc3Rpb25Ub3BpYyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxMDMsIDE5OSwgMC42Myk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMi8xO1xcclxcbiAgd2lkdGg6IG1pbigxNXZ3LCAyMDBweCk7XFxyXFxuICAvKiB0ZXh0LWFsaWduIGFwcGVhcnMgdG8gYmUgbmVlZGVkIGZvciB0b3AgbGVmdCBncmlkIHNxdWFyZS4uLm5vIGlkZWEgd2h5ICovXFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFrZW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxNSU7XFxyXFxuICBsZWZ0OiAyMCU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcclxcbn1cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXJTY29yZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG4ucGxheWVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAycHg7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICBoZWlnaHQ6IDMwdmg7XFxyXFxufVxcclxcbi5zY29yZUJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKiBAbGljZW5zZVxuUGFwYSBQYXJzZVxudjUuNC4xXG5odHRwczovL2dpdGh1Yi5jb20vbWhvbHQvUGFwYVBhcnNlXG5MaWNlbnNlOiBNSVRcbiovXG4hZnVuY3Rpb24oZSx0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPXQoKTplLlBhcGE9dCgpfSh0aGlzLGZ1bmN0aW9uIHMoKXtcInVzZSBzdHJpY3RcIjt2YXIgZj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnZvaWQgMCE9PWY/Zjp7fTt2YXIgbj0hZi5kb2N1bWVudCYmISFmLnBvc3RNZXNzYWdlLG89Zi5JU19QQVBBX1dPUktFUnx8ITEsYT17fSx1PTAsYj17cGFyc2U6ZnVuY3Rpb24oZSx0KXt2YXIgcj0odD10fHx7fSkuZHluYW1pY1R5cGluZ3x8ITE7SihyKSYmKHQuZHluYW1pY1R5cGluZ0Z1bmN0aW9uPXIscj17fSk7aWYodC5keW5hbWljVHlwaW5nPXIsdC50cmFuc2Zvcm09ISFKKHQudHJhbnNmb3JtKSYmdC50cmFuc2Zvcm0sdC53b3JrZXImJmIuV09SS0VSU19TVVBQT1JURUQpe3ZhciBpPWZ1bmN0aW9uKCl7aWYoIWIuV09SS0VSU19TVVBQT1JURUQpcmV0dXJuITE7dmFyIGU9KHI9Zi5VUkx8fGYud2Via2l0VVJMfHxudWxsLGk9cy50b1N0cmluZygpLGIuQkxPQl9VUkx8fChiLkJMT0JfVVJMPXIuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtcInZhciBnbG9iYWwgPSAoZnVuY3Rpb24oKSB7IGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHNlbGY7IH0gaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiB3aW5kb3c7IH0gaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBnbG9iYWw7IH0gcmV0dXJuIHt9OyB9KSgpOyBnbG9iYWwuSVNfUEFQQV9XT1JLRVI9dHJ1ZTsgXCIsXCIoXCIsaSxcIikoKTtcIl0se3R5cGU6XCJ0ZXh0L2phdmFzY3JpcHRcIn0pKSkpLHQ9bmV3IGYuV29ya2VyKGUpO3ZhciByLGk7cmV0dXJuIHQub25tZXNzYWdlPV8sdC5pZD11KyssYVt0LmlkXT10fSgpO3JldHVybiBpLnVzZXJTdGVwPXQuc3RlcCxpLnVzZXJDaHVuaz10LmNodW5rLGkudXNlckNvbXBsZXRlPXQuY29tcGxldGUsaS51c2VyRXJyb3I9dC5lcnJvcix0LnN0ZXA9Sih0LnN0ZXApLHQuY2h1bms9Sih0LmNodW5rKSx0LmNvbXBsZXRlPUoodC5jb21wbGV0ZSksdC5lcnJvcj1KKHQuZXJyb3IpLGRlbGV0ZSB0Lndvcmtlcix2b2lkIGkucG9zdE1lc3NhZ2Uoe2lucHV0OmUsY29uZmlnOnQsd29ya2VySWQ6aS5pZH0pfXZhciBuPW51bGw7Yi5OT0RFX1NUUkVBTV9JTlBVVCxcInN0cmluZ1wiPT10eXBlb2YgZT8oZT1mdW5jdGlvbihlKXtpZig2NTI3OT09PWUuY2hhckNvZGVBdCgwKSlyZXR1cm4gZS5zbGljZSgxKTtyZXR1cm4gZX0oZSksbj10LmRvd25sb2FkP25ldyBsKHQpOm5ldyBwKHQpKTohMD09PWUucmVhZGFibGUmJkooZS5yZWFkKSYmSihlLm9uKT9uPW5ldyBnKHQpOihmLkZpbGUmJmUgaW5zdGFuY2VvZiBGaWxlfHxlIGluc3RhbmNlb2YgT2JqZWN0KSYmKG49bmV3IGModCkpO3JldHVybiBuLnN0cmVhbShlKX0sdW5wYXJzZTpmdW5jdGlvbihlLHQpe3ZhciBuPSExLF89ITAsbT1cIixcIix5PVwiXFxyXFxuXCIscz0nXCInLGE9cytzLHI9ITEsaT1udWxsLG89ITE7IWZ1bmN0aW9uKCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHQpcmV0dXJuO1wic3RyaW5nXCIhPXR5cGVvZiB0LmRlbGltaXRlcnx8Yi5CQURfREVMSU1JVEVSUy5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuLTEhPT10LmRlbGltaXRlci5pbmRleE9mKGUpfSkubGVuZ3RofHwobT10LmRlbGltaXRlcik7KFwiYm9vbGVhblwiPT10eXBlb2YgdC5xdW90ZXN8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHQucXVvdGVzfHxBcnJheS5pc0FycmF5KHQucXVvdGVzKSkmJihuPXQucXVvdGVzKTtcImJvb2xlYW5cIiE9dHlwZW9mIHQuc2tpcEVtcHR5TGluZXMmJlwic3RyaW5nXCIhPXR5cGVvZiB0LnNraXBFbXB0eUxpbmVzfHwocj10LnNraXBFbXB0eUxpbmVzKTtcInN0cmluZ1wiPT10eXBlb2YgdC5uZXdsaW5lJiYoeT10Lm5ld2xpbmUpO1wic3RyaW5nXCI9PXR5cGVvZiB0LnF1b3RlQ2hhciYmKHM9dC5xdW90ZUNoYXIpO1wiYm9vbGVhblwiPT10eXBlb2YgdC5oZWFkZXImJihfPXQuaGVhZGVyKTtpZihBcnJheS5pc0FycmF5KHQuY29sdW1ucykpe2lmKDA9PT10LmNvbHVtbnMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIk9wdGlvbiBjb2x1bW5zIGlzIGVtcHR5XCIpO2k9dC5jb2x1bW5zfXZvaWQgMCE9PXQuZXNjYXBlQ2hhciYmKGE9dC5lc2NhcGVDaGFyK3MpOyhcImJvb2xlYW5cIj09dHlwZW9mIHQuZXNjYXBlRm9ybXVsYWV8fHQuZXNjYXBlRm9ybXVsYWUgaW5zdGFuY2VvZiBSZWdFeHApJiYobz10LmVzY2FwZUZvcm11bGFlIGluc3RhbmNlb2YgUmVnRXhwP3QuZXNjYXBlRm9ybXVsYWU6L15bPStcXC1AXFx0XFxyXS4qJC8pfSgpO3ZhciB1PW5ldyBSZWdFeHAoUShzKSxcImdcIik7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPUpTT04ucGFyc2UoZSkpO2lmKEFycmF5LmlzQXJyYXkoZSkpe2lmKCFlLmxlbmd0aHx8QXJyYXkuaXNBcnJheShlWzBdKSlyZXR1cm4gaChudWxsLGUscik7aWYoXCJvYmplY3RcIj09dHlwZW9mIGVbMF0pcmV0dXJuIGgoaXx8T2JqZWN0LmtleXMoZVswXSksZSxyKX1lbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXJldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlLmRhdGEmJihlLmRhdGE9SlNPTi5wYXJzZShlLmRhdGEpKSxBcnJheS5pc0FycmF5KGUuZGF0YSkmJihlLmZpZWxkc3x8KGUuZmllbGRzPWUubWV0YSYmZS5tZXRhLmZpZWxkc3x8aSksZS5maWVsZHN8fChlLmZpZWxkcz1BcnJheS5pc0FycmF5KGUuZGF0YVswXSk/ZS5maWVsZHM6XCJvYmplY3RcIj09dHlwZW9mIGUuZGF0YVswXT9PYmplY3Qua2V5cyhlLmRhdGFbMF0pOltdKSxBcnJheS5pc0FycmF5KGUuZGF0YVswXSl8fFwib2JqZWN0XCI9PXR5cGVvZiBlLmRhdGFbMF18fChlLmRhdGE9W2UuZGF0YV0pKSxoKGUuZmllbGRzfHxbXSxlLmRhdGF8fFtdLHIpO3Rocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBzZXJpYWxpemUgdW5yZWNvZ25pemVkIGlucHV0XCIpO2Z1bmN0aW9uIGgoZSx0LHIpe3ZhciBpPVwiXCI7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPUpTT04ucGFyc2UoZSkpLFwic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1KU09OLnBhcnNlKHQpKTt2YXIgbj1BcnJheS5pc0FycmF5KGUpJiYwPGUubGVuZ3RoLHM9IUFycmF5LmlzQXJyYXkodFswXSk7aWYobiYmXyl7Zm9yKHZhciBhPTA7YTxlLmxlbmd0aDthKyspMDxhJiYoaSs9bSksaSs9dihlW2FdLGEpOzA8dC5sZW5ndGgmJihpKz15KX1mb3IodmFyIG89MDtvPHQubGVuZ3RoO28rKyl7dmFyIHU9bj9lLmxlbmd0aDp0W29dLmxlbmd0aCxoPSExLGY9bj8wPT09T2JqZWN0LmtleXModFtvXSkubGVuZ3RoOjA9PT10W29dLmxlbmd0aDtpZihyJiYhbiYmKGg9XCJncmVlZHlcIj09PXI/XCJcIj09PXRbb10uam9pbihcIlwiKS50cmltKCk6MT09PXRbb10ubGVuZ3RoJiYwPT09dFtvXVswXS5sZW5ndGgpLFwiZ3JlZWR5XCI9PT1yJiZuKXtmb3IodmFyIGQ9W10sbD0wO2w8dTtsKyspe3ZhciBjPXM/ZVtsXTpsO2QucHVzaCh0W29dW2NdKX1oPVwiXCI9PT1kLmpvaW4oXCJcIikudHJpbSgpfWlmKCFoKXtmb3IodmFyIHA9MDtwPHU7cCsrKXswPHAmJiFmJiYoaSs9bSk7dmFyIGc9biYmcz9lW3BdOnA7aSs9dih0W29dW2ddLHApfW88dC5sZW5ndGgtMSYmKCFyfHwwPHUmJiFmKSYmKGkrPXkpfX1yZXR1cm4gaX1mdW5jdGlvbiB2KGUsdCl7aWYobnVsbD09ZSlyZXR1cm5cIlwiO2lmKGUuY29uc3RydWN0b3I9PT1EYXRlKXJldHVybiBKU09OLnN0cmluZ2lmeShlKS5zbGljZSgxLDI1KTt2YXIgcj0hMTtvJiZcInN0cmluZ1wiPT10eXBlb2YgZSYmby50ZXN0KGUpJiYoZT1cIidcIitlLHI9ITApO3ZhciBpPWUudG9TdHJpbmcoKS5yZXBsYWNlKHUsYSk7cmV0dXJuKHI9cnx8ITA9PT1ufHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZuKGUsdCl8fEFycmF5LmlzQXJyYXkobikmJm5bdF18fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspaWYoLTE8ZS5pbmRleE9mKHRbcl0pKXJldHVybiEwO3JldHVybiExfShpLGIuQkFEX0RFTElNSVRFUlMpfHwtMTxpLmluZGV4T2YobSl8fFwiIFwiPT09aS5jaGFyQXQoMCl8fFwiIFwiPT09aS5jaGFyQXQoaS5sZW5ndGgtMSkpP3MraStzOml9fX07aWYoYi5SRUNPUkRfU0VQPVN0cmluZy5mcm9tQ2hhckNvZGUoMzApLGIuVU5JVF9TRVA9U3RyaW5nLmZyb21DaGFyQ29kZSgzMSksYi5CWVRFX09SREVSX01BUks9XCJcXHVmZWZmXCIsYi5CQURfREVMSU1JVEVSUz1bXCJcXHJcIixcIlxcblwiLCdcIicsYi5CWVRFX09SREVSX01BUktdLGIuV09SS0VSU19TVVBQT1JURUQ9IW4mJiEhZi5Xb3JrZXIsYi5OT0RFX1NUUkVBTV9JTlBVVD0xLGIuTG9jYWxDaHVua1NpemU9MTA0ODU3NjAsYi5SZW1vdGVDaHVua1NpemU9NTI0Mjg4MCxiLkRlZmF1bHREZWxpbWl0ZXI9XCIsXCIsYi5QYXJzZXI9RSxiLlBhcnNlckhhbmRsZT1yLGIuTmV0d29ya1N0cmVhbWVyPWwsYi5GaWxlU3RyZWFtZXI9YyxiLlN0cmluZ1N0cmVhbWVyPXAsYi5SZWFkYWJsZVN0cmVhbVN0cmVhbWVyPWcsZi5qUXVlcnkpe3ZhciBkPWYualF1ZXJ5O2QuZm4ucGFyc2U9ZnVuY3Rpb24obyl7dmFyIHI9by5jb25maWd8fHt9LHU9W107cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtpZighKFwiSU5QVVRcIj09PWQodGhpcykucHJvcChcInRhZ05hbWVcIikudG9VcHBlckNhc2UoKSYmXCJmaWxlXCI9PT1kKHRoaXMpLmF0dHIoXCJ0eXBlXCIpLnRvTG93ZXJDYXNlKCkmJmYuRmlsZVJlYWRlcil8fCF0aGlzLmZpbGVzfHwwPT09dGhpcy5maWxlcy5sZW5ndGgpcmV0dXJuITA7Zm9yKHZhciB0PTA7dDx0aGlzLmZpbGVzLmxlbmd0aDt0KyspdS5wdXNoKHtmaWxlOnRoaXMuZmlsZXNbdF0saW5wdXRFbGVtOnRoaXMsaW5zdGFuY2VDb25maWc6ZC5leHRlbmQoe30scil9KX0pLGUoKSx0aGlzO2Z1bmN0aW9uIGUoKXtpZigwIT09dS5sZW5ndGgpe3ZhciBlLHQscixpLG49dVswXTtpZihKKG8uYmVmb3JlKSl7dmFyIHM9by5iZWZvcmUobi5maWxlLG4uaW5wdXRFbGVtKTtpZihcIm9iamVjdFwiPT10eXBlb2Ygcyl7aWYoXCJhYm9ydFwiPT09cy5hY3Rpb24pcmV0dXJuIGU9XCJBYm9ydEVycm9yXCIsdD1uLmZpbGUscj1uLmlucHV0RWxlbSxpPXMucmVhc29uLHZvaWQoSihvLmVycm9yKSYmby5lcnJvcih7bmFtZTplfSx0LHIsaSkpO2lmKFwic2tpcFwiPT09cy5hY3Rpb24pcmV0dXJuIHZvaWQgaCgpO1wib2JqZWN0XCI9PXR5cGVvZiBzLmNvbmZpZyYmKG4uaW5zdGFuY2VDb25maWc9ZC5leHRlbmQobi5pbnN0YW5jZUNvbmZpZyxzLmNvbmZpZykpfWVsc2UgaWYoXCJza2lwXCI9PT1zKXJldHVybiB2b2lkIGgoKX12YXIgYT1uLmluc3RhbmNlQ29uZmlnLmNvbXBsZXRlO24uaW5zdGFuY2VDb25maWcuY29tcGxldGU9ZnVuY3Rpb24oZSl7SihhKSYmYShlLG4uZmlsZSxuLmlucHV0RWxlbSksaCgpfSxiLnBhcnNlKG4uZmlsZSxuLmluc3RhbmNlQ29uZmlnKX1lbHNlIEooby5jb21wbGV0ZSkmJm8uY29tcGxldGUoKX1mdW5jdGlvbiBoKCl7dS5zcGxpY2UoMCwxKSxlKCl9fX1mdW5jdGlvbiBoKGUpe3RoaXMuX2hhbmRsZT1udWxsLHRoaXMuX2ZpbmlzaGVkPSExLHRoaXMuX2NvbXBsZXRlZD0hMSx0aGlzLl9oYWx0ZWQ9ITEsdGhpcy5faW5wdXQ9bnVsbCx0aGlzLl9iYXNlSW5kZXg9MCx0aGlzLl9wYXJ0aWFsTGluZT1cIlwiLHRoaXMuX3Jvd0NvdW50PTAsdGhpcy5fc3RhcnQ9MCx0aGlzLl9uZXh0Q2h1bms9bnVsbCx0aGlzLmlzRmlyc3RDaHVuaz0hMCx0aGlzLl9jb21wbGV0ZVJlc3VsdHM9e2RhdGE6W10sZXJyb3JzOltdLG1ldGE6e319LGZ1bmN0aW9uKGUpe3ZhciB0PXcoZSk7dC5jaHVua1NpemU9cGFyc2VJbnQodC5jaHVua1NpemUpLGUuc3RlcHx8ZS5jaHVua3x8KHQuY2h1bmtTaXplPW51bGwpO3RoaXMuX2hhbmRsZT1uZXcgcih0KSwodGhpcy5faGFuZGxlLnN0cmVhbWVyPXRoaXMpLl9jb25maWc9dH0uY2FsbCh0aGlzLGUpLHRoaXMucGFyc2VDaHVuaz1mdW5jdGlvbihlLHQpe2lmKHRoaXMuaXNGaXJzdENodW5rJiZKKHRoaXMuX2NvbmZpZy5iZWZvcmVGaXJzdENodW5rKSl7dmFyIHI9dGhpcy5fY29uZmlnLmJlZm9yZUZpcnN0Q2h1bmsoZSk7dm9pZCAwIT09ciYmKGU9cil9dGhpcy5pc0ZpcnN0Q2h1bms9ITEsdGhpcy5faGFsdGVkPSExO3ZhciBpPXRoaXMuX3BhcnRpYWxMaW5lK2U7dGhpcy5fcGFydGlhbExpbmU9XCJcIjt2YXIgbj10aGlzLl9oYW5kbGUucGFyc2UoaSx0aGlzLl9iYXNlSW5kZXgsIXRoaXMuX2ZpbmlzaGVkKTtpZighdGhpcy5faGFuZGxlLnBhdXNlZCgpJiYhdGhpcy5faGFuZGxlLmFib3J0ZWQoKSl7dmFyIHM9bi5tZXRhLmN1cnNvcjt0aGlzLl9maW5pc2hlZHx8KHRoaXMuX3BhcnRpYWxMaW5lPWkuc3Vic3RyaW5nKHMtdGhpcy5fYmFzZUluZGV4KSx0aGlzLl9iYXNlSW5kZXg9cyksbiYmbi5kYXRhJiYodGhpcy5fcm93Q291bnQrPW4uZGF0YS5sZW5ndGgpO3ZhciBhPXRoaXMuX2ZpbmlzaGVkfHx0aGlzLl9jb25maWcucHJldmlldyYmdGhpcy5fcm93Q291bnQ+PXRoaXMuX2NvbmZpZy5wcmV2aWV3O2lmKG8pZi5wb3N0TWVzc2FnZSh7cmVzdWx0czpuLHdvcmtlcklkOmIuV09SS0VSX0lELGZpbmlzaGVkOmF9KTtlbHNlIGlmKEoodGhpcy5fY29uZmlnLmNodW5rKSYmIXQpe2lmKHRoaXMuX2NvbmZpZy5jaHVuayhuLHRoaXMuX2hhbmRsZSksdGhpcy5faGFuZGxlLnBhdXNlZCgpfHx0aGlzLl9oYW5kbGUuYWJvcnRlZCgpKXJldHVybiB2b2lkKHRoaXMuX2hhbHRlZD0hMCk7bj12b2lkIDAsdGhpcy5fY29tcGxldGVSZXN1bHRzPXZvaWQgMH1yZXR1cm4gdGhpcy5fY29uZmlnLnN0ZXB8fHRoaXMuX2NvbmZpZy5jaHVua3x8KHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5kYXRhPXRoaXMuX2NvbXBsZXRlUmVzdWx0cy5kYXRhLmNvbmNhdChuLmRhdGEpLHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5lcnJvcnM9dGhpcy5fY29tcGxldGVSZXN1bHRzLmVycm9ycy5jb25jYXQobi5lcnJvcnMpLHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5tZXRhPW4ubWV0YSksdGhpcy5fY29tcGxldGVkfHwhYXx8IUoodGhpcy5fY29uZmlnLmNvbXBsZXRlKXx8biYmbi5tZXRhLmFib3J0ZWR8fCh0aGlzLl9jb25maWcuY29tcGxldGUodGhpcy5fY29tcGxldGVSZXN1bHRzLHRoaXMuX2lucHV0KSx0aGlzLl9jb21wbGV0ZWQ9ITApLGF8fG4mJm4ubWV0YS5wYXVzZWR8fHRoaXMuX25leHRDaHVuaygpLG59dGhpcy5faGFsdGVkPSEwfSx0aGlzLl9zZW5kRXJyb3I9ZnVuY3Rpb24oZSl7Sih0aGlzLl9jb25maWcuZXJyb3IpP3RoaXMuX2NvbmZpZy5lcnJvcihlKTpvJiZ0aGlzLl9jb25maWcuZXJyb3ImJmYucG9zdE1lc3NhZ2Uoe3dvcmtlcklkOmIuV09SS0VSX0lELGVycm9yOmUsZmluaXNoZWQ6ITF9KX19ZnVuY3Rpb24gbChlKXt2YXIgaTsoZT1lfHx7fSkuY2h1bmtTaXplfHwoZS5jaHVua1NpemU9Yi5SZW1vdGVDaHVua1NpemUpLGguY2FsbCh0aGlzLGUpLHRoaXMuX25leHRDaHVuaz1uP2Z1bmN0aW9uKCl7dGhpcy5fcmVhZENodW5rKCksdGhpcy5fY2h1bmtMb2FkZWQoKX06ZnVuY3Rpb24oKXt0aGlzLl9yZWFkQ2h1bmsoKX0sdGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7dGhpcy5faW5wdXQ9ZSx0aGlzLl9uZXh0Q2h1bmsoKX0sdGhpcy5fcmVhZENodW5rPWZ1bmN0aW9uKCl7aWYodGhpcy5fZmluaXNoZWQpdGhpcy5fY2h1bmtMb2FkZWQoKTtlbHNle2lmKGk9bmV3IFhNTEh0dHBSZXF1ZXN0LHRoaXMuX2NvbmZpZy53aXRoQ3JlZGVudGlhbHMmJihpLndpdGhDcmVkZW50aWFscz10aGlzLl9jb25maWcud2l0aENyZWRlbnRpYWxzKSxufHwoaS5vbmxvYWQ9dih0aGlzLl9jaHVua0xvYWRlZCx0aGlzKSxpLm9uZXJyb3I9dih0aGlzLl9jaHVua0Vycm9yLHRoaXMpKSxpLm9wZW4odGhpcy5fY29uZmlnLmRvd25sb2FkUmVxdWVzdEJvZHk/XCJQT1NUXCI6XCJHRVRcIix0aGlzLl9pbnB1dCwhbiksdGhpcy5fY29uZmlnLmRvd25sb2FkUmVxdWVzdEhlYWRlcnMpe3ZhciBlPXRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RIZWFkZXJzO2Zvcih2YXIgdCBpbiBlKWkuc2V0UmVxdWVzdEhlYWRlcih0LGVbdF0pfWlmKHRoaXMuX2NvbmZpZy5jaHVua1NpemUpe3ZhciByPXRoaXMuX3N0YXJ0K3RoaXMuX2NvbmZpZy5jaHVua1NpemUtMTtpLnNldFJlcXVlc3RIZWFkZXIoXCJSYW5nZVwiLFwiYnl0ZXM9XCIrdGhpcy5fc3RhcnQrXCItXCIrcil9dHJ5e2kuc2VuZCh0aGlzLl9jb25maWcuZG93bmxvYWRSZXF1ZXN0Qm9keSl9Y2F0Y2goZSl7dGhpcy5fY2h1bmtFcnJvcihlLm1lc3NhZ2UpfW4mJjA9PT1pLnN0YXR1cyYmdGhpcy5fY2h1bmtFcnJvcigpfX0sdGhpcy5fY2h1bmtMb2FkZWQ9ZnVuY3Rpb24oKXs0PT09aS5yZWFkeVN0YXRlJiYoaS5zdGF0dXM8MjAwfHw0MDA8PWkuc3RhdHVzP3RoaXMuX2NodW5rRXJyb3IoKToodGhpcy5fc3RhcnQrPXRoaXMuX2NvbmZpZy5jaHVua1NpemU/dGhpcy5fY29uZmlnLmNodW5rU2l6ZTppLnJlc3BvbnNlVGV4dC5sZW5ndGgsdGhpcy5fZmluaXNoZWQ9IXRoaXMuX2NvbmZpZy5jaHVua1NpemV8fHRoaXMuX3N0YXJ0Pj1mdW5jdGlvbihlKXt2YXIgdD1lLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1SYW5nZVwiKTtpZihudWxsPT09dClyZXR1cm4tMTtyZXR1cm4gcGFyc2VJbnQodC5zdWJzdHJpbmcodC5sYXN0SW5kZXhPZihcIi9cIikrMSkpfShpKSx0aGlzLnBhcnNlQ2h1bmsoaS5yZXNwb25zZVRleHQpKSl9LHRoaXMuX2NodW5rRXJyb3I9ZnVuY3Rpb24oZSl7dmFyIHQ9aS5zdGF0dXNUZXh0fHxlO3RoaXMuX3NlbmRFcnJvcihuZXcgRXJyb3IodCkpfX1mdW5jdGlvbiBjKGUpe3ZhciBpLG47KGU9ZXx8e30pLmNodW5rU2l6ZXx8KGUuY2h1bmtTaXplPWIuTG9jYWxDaHVua1NpemUpLGguY2FsbCh0aGlzLGUpO3ZhciBzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBGaWxlUmVhZGVyO3RoaXMuc3RyZWFtPWZ1bmN0aW9uKGUpe3RoaXMuX2lucHV0PWUsbj1lLnNsaWNlfHxlLndlYmtpdFNsaWNlfHxlLm1velNsaWNlLHM/KChpPW5ldyBGaWxlUmVhZGVyKS5vbmxvYWQ9dih0aGlzLl9jaHVua0xvYWRlZCx0aGlzKSxpLm9uZXJyb3I9dih0aGlzLl9jaHVua0Vycm9yLHRoaXMpKTppPW5ldyBGaWxlUmVhZGVyU3luYyx0aGlzLl9uZXh0Q2h1bmsoKX0sdGhpcy5fbmV4dENodW5rPWZ1bmN0aW9uKCl7dGhpcy5fZmluaXNoZWR8fHRoaXMuX2NvbmZpZy5wcmV2aWV3JiYhKHRoaXMuX3Jvd0NvdW50PHRoaXMuX2NvbmZpZy5wcmV2aWV3KXx8dGhpcy5fcmVhZENodW5rKCl9LHRoaXMuX3JlYWRDaHVuaz1mdW5jdGlvbigpe3ZhciBlPXRoaXMuX2lucHV0O2lmKHRoaXMuX2NvbmZpZy5jaHVua1NpemUpe3ZhciB0PU1hdGgubWluKHRoaXMuX3N0YXJ0K3RoaXMuX2NvbmZpZy5jaHVua1NpemUsdGhpcy5faW5wdXQuc2l6ZSk7ZT1uLmNhbGwoZSx0aGlzLl9zdGFydCx0KX12YXIgcj1pLnJlYWRBc1RleHQoZSx0aGlzLl9jb25maWcuZW5jb2RpbmcpO3N8fHRoaXMuX2NodW5rTG9hZGVkKHt0YXJnZXQ6e3Jlc3VsdDpyfX0pfSx0aGlzLl9jaHVua0xvYWRlZD1mdW5jdGlvbihlKXt0aGlzLl9zdGFydCs9dGhpcy5fY29uZmlnLmNodW5rU2l6ZSx0aGlzLl9maW5pc2hlZD0hdGhpcy5fY29uZmlnLmNodW5rU2l6ZXx8dGhpcy5fc3RhcnQ+PXRoaXMuX2lucHV0LnNpemUsdGhpcy5wYXJzZUNodW5rKGUudGFyZ2V0LnJlc3VsdCl9LHRoaXMuX2NodW5rRXJyb3I9ZnVuY3Rpb24oKXt0aGlzLl9zZW5kRXJyb3IoaS5lcnJvcil9fWZ1bmN0aW9uIHAoZSl7dmFyIHI7aC5jYWxsKHRoaXMsZT1lfHx7fSksdGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7cmV0dXJuIHI9ZSx0aGlzLl9uZXh0Q2h1bmsoKX0sdGhpcy5fbmV4dENodW5rPWZ1bmN0aW9uKCl7aWYoIXRoaXMuX2ZpbmlzaGVkKXt2YXIgZSx0PXRoaXMuX2NvbmZpZy5jaHVua1NpemU7cmV0dXJuIHQ/KGU9ci5zdWJzdHJpbmcoMCx0KSxyPXIuc3Vic3RyaW5nKHQpKTooZT1yLHI9XCJcIiksdGhpcy5fZmluaXNoZWQ9IXIsdGhpcy5wYXJzZUNodW5rKGUpfX19ZnVuY3Rpb24gZyhlKXtoLmNhbGwodGhpcyxlPWV8fHt9KTt2YXIgdD1bXSxyPSEwLGk9ITE7dGhpcy5wYXVzZT1mdW5jdGlvbigpe2gucHJvdG90eXBlLnBhdXNlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLl9pbnB1dC5wYXVzZSgpfSx0aGlzLnJlc3VtZT1mdW5jdGlvbigpe2gucHJvdG90eXBlLnJlc3VtZS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5faW5wdXQucmVzdW1lKCl9LHRoaXMuc3RyZWFtPWZ1bmN0aW9uKGUpe3RoaXMuX2lucHV0PWUsdGhpcy5faW5wdXQub24oXCJkYXRhXCIsdGhpcy5fc3RyZWFtRGF0YSksdGhpcy5faW5wdXQub24oXCJlbmRcIix0aGlzLl9zdHJlYW1FbmQpLHRoaXMuX2lucHV0Lm9uKFwiZXJyb3JcIix0aGlzLl9zdHJlYW1FcnJvcil9LHRoaXMuX2NoZWNrSXNGaW5pc2hlZD1mdW5jdGlvbigpe2kmJjE9PT10Lmxlbmd0aCYmKHRoaXMuX2ZpbmlzaGVkPSEwKX0sdGhpcy5fbmV4dENodW5rPWZ1bmN0aW9uKCl7dGhpcy5fY2hlY2tJc0ZpbmlzaGVkKCksdC5sZW5ndGg/dGhpcy5wYXJzZUNodW5rKHQuc2hpZnQoKSk6cj0hMH0sdGhpcy5fc3RyZWFtRGF0YT12KGZ1bmN0aW9uKGUpe3RyeXt0LnB1c2goXCJzdHJpbmdcIj09dHlwZW9mIGU/ZTplLnRvU3RyaW5nKHRoaXMuX2NvbmZpZy5lbmNvZGluZykpLHImJihyPSExLHRoaXMuX2NoZWNrSXNGaW5pc2hlZCgpLHRoaXMucGFyc2VDaHVuayh0LnNoaWZ0KCkpKX1jYXRjaChlKXt0aGlzLl9zdHJlYW1FcnJvcihlKX19LHRoaXMpLHRoaXMuX3N0cmVhbUVycm9yPXYoZnVuY3Rpb24oZSl7dGhpcy5fc3RyZWFtQ2xlYW5VcCgpLHRoaXMuX3NlbmRFcnJvcihlKX0sdGhpcyksdGhpcy5fc3RyZWFtRW5kPXYoZnVuY3Rpb24oKXt0aGlzLl9zdHJlYW1DbGVhblVwKCksaT0hMCx0aGlzLl9zdHJlYW1EYXRhKFwiXCIpfSx0aGlzKSx0aGlzLl9zdHJlYW1DbGVhblVwPXYoZnVuY3Rpb24oKXt0aGlzLl9pbnB1dC5yZW1vdmVMaXN0ZW5lcihcImRhdGFcIix0aGlzLl9zdHJlYW1EYXRhKSx0aGlzLl9pbnB1dC5yZW1vdmVMaXN0ZW5lcihcImVuZFwiLHRoaXMuX3N0cmVhbUVuZCksdGhpcy5faW5wdXQucmVtb3ZlTGlzdGVuZXIoXCJlcnJvclwiLHRoaXMuX3N0cmVhbUVycm9yKX0sdGhpcyl9ZnVuY3Rpb24gcihtKXt2YXIgYSxvLHUsaT1NYXRoLnBvdygyLDUzKSxuPS1pLHM9L15cXHMqLT8oXFxkK1xcLj98XFwuXFxkK3xcXGQrXFwuXFxkKykoW2VFXVstK10/XFxkKyk/XFxzKiQvLGg9L14oKFxcZHs0fS1bMDFdXFxkLVswLTNdXFxkVFswLTJdXFxkOlswLTVdXFxkOlswLTVdXFxkXFwuXFxkKyhbKy1dWzAtMl1cXGQ6WzAtNV1cXGR8WikpfChcXGR7NH0tWzAxXVxcZC1bMC0zXVxcZFRbMC0yXVxcZDpbMC01XVxcZDpbMC01XVxcZChbKy1dWzAtMl1cXGQ6WzAtNV1cXGR8WikpfChcXGR7NH0tWzAxXVxcZC1bMC0zXVxcZFRbMC0yXVxcZDpbMC01XVxcZChbKy1dWzAtMl1cXGQ6WzAtNV1cXGR8WikpKSQvLHQ9dGhpcyxyPTAsZj0wLGQ9ITEsZT0hMSxsPVtdLGM9e2RhdGE6W10sZXJyb3JzOltdLG1ldGE6e319O2lmKEoobS5zdGVwKSl7dmFyIHA9bS5zdGVwO20uc3RlcD1mdW5jdGlvbihlKXtpZihjPWUsXygpKWcoKTtlbHNle2lmKGcoKSwwPT09Yy5kYXRhLmxlbmd0aClyZXR1cm47cis9ZS5kYXRhLmxlbmd0aCxtLnByZXZpZXcmJnI+bS5wcmV2aWV3P28uYWJvcnQoKTooYy5kYXRhPWMuZGF0YVswXSxwKGMsdCkpfX19ZnVuY3Rpb24geShlKXtyZXR1cm5cImdyZWVkeVwiPT09bS5za2lwRW1wdHlMaW5lcz9cIlwiPT09ZS5qb2luKFwiXCIpLnRyaW0oKToxPT09ZS5sZW5ndGgmJjA9PT1lWzBdLmxlbmd0aH1mdW5jdGlvbiBnKCl7cmV0dXJuIGMmJnUmJihrKFwiRGVsaW1pdGVyXCIsXCJVbmRldGVjdGFibGVEZWxpbWl0ZXJcIixcIlVuYWJsZSB0byBhdXRvLWRldGVjdCBkZWxpbWl0aW5nIGNoYXJhY3RlcjsgZGVmYXVsdGVkIHRvICdcIitiLkRlZmF1bHREZWxpbWl0ZXIrXCInXCIpLHU9ITEpLG0uc2tpcEVtcHR5TGluZXMmJihjLmRhdGE9Yy5kYXRhLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4heShlKX0pKSxfKCkmJmZ1bmN0aW9uKCl7aWYoIWMpcmV0dXJuO2Z1bmN0aW9uIGUoZSx0KXtKKG0udHJhbnNmb3JtSGVhZGVyKSYmKGU9bS50cmFuc2Zvcm1IZWFkZXIoZSx0KSksbC5wdXNoKGUpfWlmKEFycmF5LmlzQXJyYXkoYy5kYXRhWzBdKSl7Zm9yKHZhciB0PTA7XygpJiZ0PGMuZGF0YS5sZW5ndGg7dCsrKWMuZGF0YVt0XS5mb3JFYWNoKGUpO2MuZGF0YS5zcGxpY2UoMCwxKX1lbHNlIGMuZGF0YS5mb3JFYWNoKGUpfSgpLGZ1bmN0aW9uKCl7aWYoIWN8fCFtLmhlYWRlciYmIW0uZHluYW1pY1R5cGluZyYmIW0udHJhbnNmb3JtKXJldHVybiBjO2Z1bmN0aW9uIGUoZSx0KXt2YXIgcixpPW0uaGVhZGVyP3t9OltdO2ZvcihyPTA7cjxlLmxlbmd0aDtyKyspe3ZhciBuPXIscz1lW3JdO20uaGVhZGVyJiYobj1yPj1sLmxlbmd0aD9cIl9fcGFyc2VkX2V4dHJhXCI6bFtyXSksbS50cmFuc2Zvcm0mJihzPW0udHJhbnNmb3JtKHMsbikpLHM9dihuLHMpLFwiX19wYXJzZWRfZXh0cmFcIj09PW4/KGlbbl09aVtuXXx8W10saVtuXS5wdXNoKHMpKTppW25dPXN9cmV0dXJuIG0uaGVhZGVyJiYocj5sLmxlbmd0aD9rKFwiRmllbGRNaXNtYXRjaFwiLFwiVG9vTWFueUZpZWxkc1wiLFwiVG9vIG1hbnkgZmllbGRzOiBleHBlY3RlZCBcIitsLmxlbmd0aCtcIiBmaWVsZHMgYnV0IHBhcnNlZCBcIityLGYrdCk6cjxsLmxlbmd0aCYmayhcIkZpZWxkTWlzbWF0Y2hcIixcIlRvb0Zld0ZpZWxkc1wiLFwiVG9vIGZldyBmaWVsZHM6IGV4cGVjdGVkIFwiK2wubGVuZ3RoK1wiIGZpZWxkcyBidXQgcGFyc2VkIFwiK3IsZit0KSksaX12YXIgdD0xOyFjLmRhdGEubGVuZ3RofHxBcnJheS5pc0FycmF5KGMuZGF0YVswXSk/KGMuZGF0YT1jLmRhdGEubWFwKGUpLHQ9Yy5kYXRhLmxlbmd0aCk6Yy5kYXRhPWUoYy5kYXRhLDApO20uaGVhZGVyJiZjLm1ldGEmJihjLm1ldGEuZmllbGRzPWwpO3JldHVybiBmKz10LGN9KCl9ZnVuY3Rpb24gXygpe3JldHVybiBtLmhlYWRlciYmMD09PWwubGVuZ3RofWZ1bmN0aW9uIHYoZSx0KXtyZXR1cm4gcj1lLG0uZHluYW1pY1R5cGluZ0Z1bmN0aW9uJiZ2b2lkIDA9PT1tLmR5bmFtaWNUeXBpbmdbcl0mJihtLmR5bmFtaWNUeXBpbmdbcl09bS5keW5hbWljVHlwaW5nRnVuY3Rpb24ocikpLCEwPT09KG0uZHluYW1pY1R5cGluZ1tyXXx8bS5keW5hbWljVHlwaW5nKT9cInRydWVcIj09PXR8fFwiVFJVRVwiPT09dHx8XCJmYWxzZVwiIT09dCYmXCJGQUxTRVwiIT09dCYmKGZ1bmN0aW9uKGUpe2lmKHMudGVzdChlKSl7dmFyIHQ9cGFyc2VGbG9hdChlKTtpZihuPHQmJnQ8aSlyZXR1cm4hMH1yZXR1cm4hMX0odCk/cGFyc2VGbG9hdCh0KTpoLnRlc3QodCk/bmV3IERhdGUodCk6XCJcIj09PXQ/bnVsbDp0KTp0O3ZhciByfWZ1bmN0aW9uIGsoZSx0LHIsaSl7dmFyIG49e3R5cGU6ZSxjb2RlOnQsbWVzc2FnZTpyfTt2b2lkIDAhPT1pJiYobi5yb3c9aSksYy5lcnJvcnMucHVzaChuKX10aGlzLnBhcnNlPWZ1bmN0aW9uKGUsdCxyKXt2YXIgaT1tLnF1b3RlQ2hhcnx8J1wiJztpZihtLm5ld2xpbmV8fChtLm5ld2xpbmU9ZnVuY3Rpb24oZSx0KXtlPWUuc3Vic3RyaW5nKDAsMTA0ODU3Nik7dmFyIHI9bmV3IFJlZ0V4cChRKHQpK1wiKFteXSo/KVwiK1EodCksXCJnbVwiKSxpPShlPWUucmVwbGFjZShyLFwiXCIpKS5zcGxpdChcIlxcclwiKSxuPWUuc3BsaXQoXCJcXG5cIikscz0xPG4ubGVuZ3RoJiZuWzBdLmxlbmd0aDxpWzBdLmxlbmd0aDtpZigxPT09aS5sZW5ndGh8fHMpcmV0dXJuXCJcXG5cIjtmb3IodmFyIGE9MCxvPTA7bzxpLmxlbmd0aDtvKyspXCJcXG5cIj09PWlbb11bMF0mJmErKztyZXR1cm4gYT49aS5sZW5ndGgvMj9cIlxcclxcblwiOlwiXFxyXCJ9KGUsaSkpLHU9ITEsbS5kZWxpbWl0ZXIpSihtLmRlbGltaXRlcikmJihtLmRlbGltaXRlcj1tLmRlbGltaXRlcihlKSxjLm1ldGEuZGVsaW1pdGVyPW0uZGVsaW1pdGVyKTtlbHNle3ZhciBuPWZ1bmN0aW9uKGUsdCxyLGksbil7dmFyIHMsYSxvLHU7bj1ufHxbXCIsXCIsXCJcXHRcIixcInxcIixcIjtcIixiLlJFQ09SRF9TRVAsYi5VTklUX1NFUF07Zm9yKHZhciBoPTA7aDxuLmxlbmd0aDtoKyspe3ZhciBmPW5baF0sZD0wLGw9MCxjPTA7bz12b2lkIDA7Zm9yKHZhciBwPW5ldyBFKHtjb21tZW50czppLGRlbGltaXRlcjpmLG5ld2xpbmU6dCxwcmV2aWV3OjEwfSkucGFyc2UoZSksZz0wO2c8cC5kYXRhLmxlbmd0aDtnKyspaWYociYmeShwLmRhdGFbZ10pKWMrKztlbHNle3ZhciBfPXAuZGF0YVtnXS5sZW5ndGg7bCs9Xyx2b2lkIDAhPT1vPzA8XyYmKGQrPU1hdGguYWJzKF8tbyksbz1fKTpvPV99MDxwLmRhdGEubGVuZ3RoJiYobC89cC5kYXRhLmxlbmd0aC1jKSwodm9pZCAwPT09YXx8ZDw9YSkmJih2b2lkIDA9PT11fHx1PGwpJiYxLjk5PGwmJihhPWQscz1mLHU9bCl9cmV0dXJue3N1Y2Nlc3NmdWw6ISEobS5kZWxpbWl0ZXI9cyksYmVzdERlbGltaXRlcjpzfX0oZSxtLm5ld2xpbmUsbS5za2lwRW1wdHlMaW5lcyxtLmNvbW1lbnRzLG0uZGVsaW1pdGVyc1RvR3Vlc3MpO24uc3VjY2Vzc2Z1bD9tLmRlbGltaXRlcj1uLmJlc3REZWxpbWl0ZXI6KHU9ITAsbS5kZWxpbWl0ZXI9Yi5EZWZhdWx0RGVsaW1pdGVyKSxjLm1ldGEuZGVsaW1pdGVyPW0uZGVsaW1pdGVyfXZhciBzPXcobSk7cmV0dXJuIG0ucHJldmlldyYmbS5oZWFkZXImJnMucHJldmlldysrLGE9ZSxvPW5ldyBFKHMpLGM9by5wYXJzZShhLHQsciksZygpLGQ/e21ldGE6e3BhdXNlZDohMH19OmN8fHttZXRhOntwYXVzZWQ6ITF9fX0sdGhpcy5wYXVzZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gZH0sdGhpcy5wYXVzZT1mdW5jdGlvbigpe2Q9ITAsby5hYm9ydCgpLGE9SihtLmNodW5rKT9cIlwiOmEuc3Vic3RyaW5nKG8uZ2V0Q2hhckluZGV4KCkpfSx0aGlzLnJlc3VtZT1mdW5jdGlvbigpe3Quc3RyZWFtZXIuX2hhbHRlZD8oZD0hMSx0LnN0cmVhbWVyLnBhcnNlQ2h1bmsoYSwhMCkpOnNldFRpbWVvdXQodC5yZXN1bWUsMyl9LHRoaXMuYWJvcnRlZD1mdW5jdGlvbigpe3JldHVybiBlfSx0aGlzLmFib3J0PWZ1bmN0aW9uKCl7ZT0hMCxvLmFib3J0KCksYy5tZXRhLmFib3J0ZWQ9ITAsSihtLmNvbXBsZXRlKSYmbS5jb21wbGV0ZShjKSxhPVwiXCJ9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIGUucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csXCJcXFxcJCZcIil9ZnVuY3Rpb24gRShqKXt2YXIgeixNPShqPWp8fHt9KS5kZWxpbWl0ZXIsUD1qLm5ld2xpbmUsVT1qLmNvbW1lbnRzLHE9ai5zdGVwLE49ai5wcmV2aWV3LEI9ai5mYXN0TW9kZSxLPXo9dm9pZCAwPT09ai5xdW90ZUNoYXJ8fG51bGw9PT1qLnF1b3RlQ2hhcj8nXCInOmoucXVvdGVDaGFyO2lmKHZvaWQgMCE9PWouZXNjYXBlQ2hhciYmKEs9ai5lc2NhcGVDaGFyKSwoXCJzdHJpbmdcIiE9dHlwZW9mIE18fC0xPGIuQkFEX0RFTElNSVRFUlMuaW5kZXhPZihNKSkmJihNPVwiLFwiKSxVPT09TSl0aHJvdyBuZXcgRXJyb3IoXCJDb21tZW50IGNoYXJhY3RlciBzYW1lIGFzIGRlbGltaXRlclwiKTshMD09PVU/VT1cIiNcIjooXCJzdHJpbmdcIiE9dHlwZW9mIFV8fC0xPGIuQkFEX0RFTElNSVRFUlMuaW5kZXhPZihVKSkmJihVPSExKSxcIlxcblwiIT09UCYmXCJcXHJcIiE9PVAmJlwiXFxyXFxuXCIhPT1QJiYoUD1cIlxcblwiKTt2YXIgVz0wLEg9ITE7dGhpcy5wYXJzZT1mdW5jdGlvbihpLHQscil7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGkpdGhyb3cgbmV3IEVycm9yKFwiSW5wdXQgbXVzdCBiZSBhIHN0cmluZ1wiKTt2YXIgbj1pLmxlbmd0aCxlPU0ubGVuZ3RoLHM9UC5sZW5ndGgsYT1VLmxlbmd0aCxvPUoocSksdT1bXSxoPVtdLGY9W10sZD1XPTA7aWYoIWkpcmV0dXJuIEwoKTtpZihqLmhlYWRlciYmIXQpe3ZhciBsPWkuc3BsaXQoUClbMF0uc3BsaXQoTSksYz1bXSxwPXt9LGc9ITE7Zm9yKHZhciBfIGluIGwpe3ZhciBtPWxbX107SihqLnRyYW5zZm9ybUhlYWRlcikmJihtPWoudHJhbnNmb3JtSGVhZGVyKG0sXykpO3ZhciB5PW0sdj1wW21dfHwwO2ZvcigwPHYmJihnPSEwLHk9bStcIl9cIit2KSxwW21dPXYrMTtjLmluY2x1ZGVzKHkpOyl5PXkrXCJfXCIrdjtjLnB1c2goeSl9aWYoZyl7dmFyIGs9aS5zcGxpdChQKTtrWzBdPWMuam9pbihNKSxpPWsuam9pbihQKX19aWYoQnx8ITEhPT1CJiYtMT09PWkuaW5kZXhPZih6KSl7Zm9yKHZhciBiPWkuc3BsaXQoUCksRT0wO0U8Yi5sZW5ndGg7RSsrKXtpZihmPWJbRV0sVys9Zi5sZW5ndGgsRSE9PWIubGVuZ3RoLTEpVys9UC5sZW5ndGg7ZWxzZSBpZihyKXJldHVybiBMKCk7aWYoIVV8fGYuc3Vic3RyaW5nKDAsYSkhPT1VKXtpZihvKXtpZih1PVtdLEkoZi5zcGxpdChNKSksRigpLEgpcmV0dXJuIEwoKX1lbHNlIEkoZi5zcGxpdChNKSk7aWYoTiYmTjw9RSlyZXR1cm4gdT11LnNsaWNlKDAsTiksTCghMCl9fXJldHVybiBMKCl9Zm9yKHZhciB3PWkuaW5kZXhPZihNLFcpLFI9aS5pbmRleE9mKFAsVyksQz1uZXcgUmVnRXhwKFEoSykrUSh6KSxcImdcIiksUz1pLmluZGV4T2YoeixXKTs7KWlmKGlbV10hPT16KWlmKFUmJjA9PT1mLmxlbmd0aCYmaS5zdWJzdHJpbmcoVyxXK2EpPT09VSl7aWYoLTE9PT1SKXJldHVybiBMKCk7Vz1SK3MsUj1pLmluZGV4T2YoUCxXKSx3PWkuaW5kZXhPZihNLFcpfWVsc2UgaWYoLTEhPT13JiYodzxSfHwtMT09PVIpKWYucHVzaChpLnN1YnN0cmluZyhXLHcpKSxXPXcrZSx3PWkuaW5kZXhPZihNLFcpO2Vsc2V7aWYoLTE9PT1SKWJyZWFrO2lmKGYucHVzaChpLnN1YnN0cmluZyhXLFIpKSxEKFIrcyksbyYmKEYoKSxIKSlyZXR1cm4gTCgpO2lmKE4mJnUubGVuZ3RoPj1OKXJldHVybiBMKCEwKX1lbHNlIGZvcihTPVcsVysrOzspe2lmKC0xPT09KFM9aS5pbmRleE9mKHosUysxKSkpcmV0dXJuIHJ8fGgucHVzaCh7dHlwZTpcIlF1b3Rlc1wiLGNvZGU6XCJNaXNzaW5nUXVvdGVzXCIsbWVzc2FnZTpcIlF1b3RlZCBmaWVsZCB1bnRlcm1pbmF0ZWRcIixyb3c6dS5sZW5ndGgsaW5kZXg6V30pLFQoKTtpZihTPT09bi0xKXJldHVybiBUKGkuc3Vic3RyaW5nKFcsUykucmVwbGFjZShDLHopKTtpZih6IT09S3x8aVtTKzFdIT09Syl7aWYoej09PUt8fDA9PT1TfHxpW1MtMV0hPT1LKXstMSE9PXcmJnc8UysxJiYodz1pLmluZGV4T2YoTSxTKzEpKSwtMSE9PVImJlI8UysxJiYoUj1pLmluZGV4T2YoUCxTKzEpKTt2YXIgTz1BKC0xPT09Uj93Ok1hdGgubWluKHcsUikpO2lmKGkuc3Vic3RyKFMrMStPLGUpPT09TSl7Zi5wdXNoKGkuc3Vic3RyaW5nKFcsUykucmVwbGFjZShDLHopKSxpW1c9UysxK08rZV0hPT16JiYoUz1pLmluZGV4T2YoeixXKSksdz1pLmluZGV4T2YoTSxXKSxSPWkuaW5kZXhPZihQLFcpO2JyZWFrfXZhciB4PUEoUik7aWYoaS5zdWJzdHJpbmcoUysxK3gsUysxK3grcyk9PT1QKXtpZihmLnB1c2goaS5zdWJzdHJpbmcoVyxTKS5yZXBsYWNlKEMseikpLEQoUysxK3grcyksdz1pLmluZGV4T2YoTSxXKSxTPWkuaW5kZXhPZih6LFcpLG8mJihGKCksSCkpcmV0dXJuIEwoKTtpZihOJiZ1Lmxlbmd0aD49TilyZXR1cm4gTCghMCk7YnJlYWt9aC5wdXNoKHt0eXBlOlwiUXVvdGVzXCIsY29kZTpcIkludmFsaWRRdW90ZXNcIixtZXNzYWdlOlwiVHJhaWxpbmcgcXVvdGUgb24gcXVvdGVkIGZpZWxkIGlzIG1hbGZvcm1lZFwiLHJvdzp1Lmxlbmd0aCxpbmRleDpXfSksUysrfX1lbHNlIFMrK31yZXR1cm4gVCgpO2Z1bmN0aW9uIEkoZSl7dS5wdXNoKGUpLGQ9V31mdW5jdGlvbiBBKGUpe3ZhciB0PTA7aWYoLTEhPT1lKXt2YXIgcj1pLnN1YnN0cmluZyhTKzEsZSk7ciYmXCJcIj09PXIudHJpbSgpJiYodD1yLmxlbmd0aCl9cmV0dXJuIHR9ZnVuY3Rpb24gVChlKXtyZXR1cm4gcnx8KHZvaWQgMD09PWUmJihlPWkuc3Vic3RyaW5nKFcpKSxmLnB1c2goZSksVz1uLEkoZiksbyYmRigpKSxMKCl9ZnVuY3Rpb24gRChlKXtXPWUsSShmKSxmPVtdLFI9aS5pbmRleE9mKFAsVyl9ZnVuY3Rpb24gTChlKXtyZXR1cm57ZGF0YTp1LGVycm9yczpoLG1ldGE6e2RlbGltaXRlcjpNLGxpbmVicmVhazpQLGFib3J0ZWQ6SCx0cnVuY2F0ZWQ6ISFlLGN1cnNvcjpkKyh0fHwwKX19fWZ1bmN0aW9uIEYoKXtxKEwoKSksdT1bXSxoPVtdfX0sdGhpcy5hYm9ydD1mdW5jdGlvbigpe0g9ITB9LHRoaXMuZ2V0Q2hhckluZGV4PWZ1bmN0aW9uKCl7cmV0dXJuIFd9fWZ1bmN0aW9uIF8oZSl7dmFyIHQ9ZS5kYXRhLHI9YVt0LndvcmtlcklkXSxpPSExO2lmKHQuZXJyb3Ipci51c2VyRXJyb3IodC5lcnJvcix0LmZpbGUpO2Vsc2UgaWYodC5yZXN1bHRzJiZ0LnJlc3VsdHMuZGF0YSl7dmFyIG49e2Fib3J0OmZ1bmN0aW9uKCl7aT0hMCxtKHQud29ya2VySWQse2RhdGE6W10sZXJyb3JzOltdLG1ldGE6e2Fib3J0ZWQ6ITB9fSl9LHBhdXNlOnkscmVzdW1lOnl9O2lmKEooci51c2VyU3RlcCkpe2Zvcih2YXIgcz0wO3M8dC5yZXN1bHRzLmRhdGEubGVuZ3RoJiYoci51c2VyU3RlcCh7ZGF0YTp0LnJlc3VsdHMuZGF0YVtzXSxlcnJvcnM6dC5yZXN1bHRzLmVycm9ycyxtZXRhOnQucmVzdWx0cy5tZXRhfSxuKSwhaSk7cysrKTtkZWxldGUgdC5yZXN1bHRzfWVsc2UgSihyLnVzZXJDaHVuaykmJihyLnVzZXJDaHVuayh0LnJlc3VsdHMsbix0LmZpbGUpLGRlbGV0ZSB0LnJlc3VsdHMpfXQuZmluaXNoZWQmJiFpJiZtKHQud29ya2VySWQsdC5yZXN1bHRzKX1mdW5jdGlvbiBtKGUsdCl7dmFyIHI9YVtlXTtKKHIudXNlckNvbXBsZXRlKSYmci51c2VyQ29tcGxldGUodCksci50ZXJtaW5hdGUoKSxkZWxldGUgYVtlXX1mdW5jdGlvbiB5KCl7dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkLlwiKX1mdW5jdGlvbiB3KGUpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxudWxsPT09ZSlyZXR1cm4gZTt2YXIgdD1BcnJheS5pc0FycmF5KGUpP1tdOnt9O2Zvcih2YXIgciBpbiBlKXRbcl09dyhlW3JdKTtyZXR1cm4gdH1mdW5jdGlvbiB2KGUsdCl7cmV0dXJuIGZ1bmN0aW9uKCl7ZS5hcHBseSh0LGFyZ3VtZW50cyl9fWZ1bmN0aW9uIEooZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZX1yZXR1cm4gbyYmKGYub25tZXNzYWdlPWZ1bmN0aW9uKGUpe3ZhciB0PWUuZGF0YTt2b2lkIDA9PT1iLldPUktFUl9JRCYmdCYmKGIuV09SS0VSX0lEPXQud29ya2VySWQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0LmlucHV0KWYucG9zdE1lc3NhZ2Uoe3dvcmtlcklkOmIuV09SS0VSX0lELHJlc3VsdHM6Yi5wYXJzZSh0LmlucHV0LHQuY29uZmlnKSxmaW5pc2hlZDohMH0pO2Vsc2UgaWYoZi5GaWxlJiZ0LmlucHV0IGluc3RhbmNlb2YgRmlsZXx8dC5pbnB1dCBpbnN0YW5jZW9mIE9iamVjdCl7dmFyIHI9Yi5wYXJzZSh0LmlucHV0LHQuY29uZmlnKTtyJiZmLnBvc3RNZXNzYWdlKHt3b3JrZXJJZDpiLldPUktFUl9JRCxyZXN1bHRzOnIsZmluaXNoZWQ6ITB9KX19KSwobC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShoLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yPWwsKGMucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoaC5wcm90b3R5cGUpKS5jb25zdHJ1Y3Rvcj1jLChwLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHAucHJvdG90eXBlKSkuY29uc3RydWN0b3I9cCwoZy5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShoLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yPWcsYn0pOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVE9ETyBmaXggcXVlc3Rpb24gZGF0YSBmb3IgbW9kdWxlXHJcblxyXG5jb25zdCBncmlkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JpZFdyYXBwZXJcIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVRdWVzdGlvbk9iamVjdChxdWVzdGlvbkRhdGEpIHtcclxuICBjb25zdCBxdWVzdGlvbk9iaiA9IHt9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUXVlc3Rpb25HcmlkKGdyaWRDb3VudCwgcXVlc3Rpb25EYXRhKSB7XHJcbiAgY29uc3QgcXVlc3Rpb25WYWx1ZXMgPSBbXHJcbiAgICAxMDAsIDEwMCwgMTAwLCAxMDAsIDEwMCwgMTAwLCAyMDAsIDIwMCwgMjAwLCAyMDAsIDIwMCwgMjAwLCAzMDAsIDMwMCwgMzAwLFxyXG4gICAgMzAwLCAzMDAsIDMwMCwgNDAwLCA0MDAsIDQwMCwgNDAwLCA0MDAsIDQwMCwgNTAwLCA1MDAsIDUwMCwgNTAwLCA1MDAsIDUwMCxcclxuICAgIDYwMCwgNjAwLCA2MDAsIDYwMCwgNjAwLCA2MDAsXHJcbiAgXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkQ291bnQ7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgcXVlc3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgLy8gdHJlYXQgdGhlIGZpcnN0IHNpeCBib3hlcyBkaWZmZXJlbnRseSB0byB0dXJuIHRoZW0gaW50byB0b3BpYyBoZWFkZXJzLlxyXG4gICAgaWYgKGkgPCA2KSB7XHJcbiAgICAgIC8vIDAwLDIwLDQwLDYwLDgwLDEwMFxyXG4gICAgICBxdWVzdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb25Ub3BpY1wiKTtcclxuICAgICAgLy8gdXNlIGV2ZXJ5IHNlY29uZCBhcnJheSB0byBhY2NvdW50IGZvciBzcHJlYWRzaGVldCBmb3JtYXRcclxuICAgICAgcXVlc3Rpb25EaXYudGV4dENvbnRlbnQgPSBxdWVzdGlvbkRhdGFbMiAqIGldWzBdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcXVlc3Rpb25EaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9uXCIpO1xyXG4gICAgICBxdWVzdGlvbkRpdi50ZXh0Q29udGVudCA9IHF1ZXN0aW9uVmFsdWVzW2kgLSA2XTtcclxuICAgIH1cclxuXHJcbiAgICBncmlkQXJlYS5hcHBlbmRDaGlsZChxdWVzdGlvbkRpdik7XHJcbiAgfVxyXG59XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9ibG9vLWFuc3dlci5wbmdcIjogXCIuL3NyYy9pbWcvYmxvby1hbnN3ZXIucG5nXCIsXG5cdFwiLi9ibG9vLnBuZ1wiOiBcIi4vc3JjL2ltZy9ibG9vLnBuZ1wiLFxuXHRcIi4vYm9yb21pci1mdW5lcmFsLWZ1bGwucG5nXCI6IFwiLi9zcmMvaW1nL2Jvcm9taXItZnVuZXJhbC1mdWxsLnBuZ1wiLFxuXHRcIi4vYm9yb21pci1mdW5lcmFsLnBuZ1wiOiBcIi4vc3JjL2ltZy9ib3JvbWlyLWZ1bmVyYWwucG5nXCIsXG5cdFwiLi9jYWl0bHluLXZpLWZ1bGwucG5nXCI6IFwiLi9zcmMvaW1nL2NhaXRseW4tdmktZnVsbC5wbmdcIixcblx0XCIuL2NhaXRseW4tdmkucG5nXCI6IFwiLi9zcmMvaW1nL2NhaXRseW4tdmkucG5nXCIsXG5cdFwiLi9jb21wYW5pb24tY3ViZS1mdWxsLnBuZ1wiOiBcIi4vc3JjL2ltZy9jb21wYW5pb24tY3ViZS1mdWxsLnBuZ1wiLFxuXHRcIi4vY29tcGFuaW9uLWN1YmUucG5nXCI6IFwiLi9zcmMvaW1nL2NvbXBhbmlvbi1jdWJlLnBuZ1wiLFxuXHRcIi4vamlueC1mbGFyZS1mdWxsLnBuZ1wiOiBcIi4vc3JjL2ltZy9qaW54LWZsYXJlLWZ1bGwucG5nXCIsXG5cdFwiLi9qaW54LWZsYXJlLnBuZ1wiOiBcIi4vc3JjL2ltZy9qaW54LWZsYXJlLnBuZ1wiLFxuXHRcIi4vdG9ocnUucG5nXCI6IFwiLi9zcmMvaW1nL3RvaHJ1LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWcgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGxheWVyKG5hbWUsIG51bWJlciwgc2NvcmUpIHtcclxuICAvLyBhc3NpZ24gdG8gb2JqIHJhdGhlciB0aGFuIHRoaXMsIHNpbmNlIHRoaXMgPT09IHVuZGVmaW5lZCBpbiBtb2R1bGVzXHJcbiAgY29uc3Qgb2JqID0ge307XHJcbiAgb2JqLmRpc3BsYXlQbGF5ZXJOYW1lID0gZnVuY3Rpb24gZGlzcGxheVBsYXllck5hbWUocGxheWVyTnVtYmVyKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgI3BsYXllciR7cGxheWVyTnVtYmVyfWAsXHJcbiAgICApLnRleHRDb250ZW50ID0gYCR7dGhpcy5uYW1lfTpgO1xyXG4gIH07XHJcbiAgb2JqLmNoYW5nZVBsYXllck5hbWUgPSBmdW5jdGlvbiBjaGFuZ2VQbGF5ZXJOYW1lKCkge1xyXG4gICAgY29uc3QgdGVtcE5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICB0aGlzLm5hbWUgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCIsIFwiSm9zaCBHdW5zb25cIik7XHJcbiAgICAvLyBwcmV2ZW50IHBsYXllciBuYW1lIGZyb20gZGlzYXBwZWFyaW5nIGJ5IHVzaW5nIHByZXZpb3VzIG5hbWVcclxuICAgIGlmICh0aGlzLm5hbWUgPT09IG51bGwpIHRoaXMubmFtZSA9IHRlbXBOYW1lO1xyXG4gICAgdGhpcy5kaXNwbGF5UGxheWVyTmFtZSh0aGlzLm51bWJlcik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICB9O1xyXG4gIG9iai5kaXNwbGF5UGxheWVyU2NvcmUgPSBmdW5jdGlvbiBkaXNwbGF5UGxheWVyU2NvcmUoXHJcbiAgICBwbGF5ZXJOdW1iZXIsXHJcbiAgICBzY29yZVRvQWRkLFxyXG4gICkge1xyXG4gICAgLy8gdGhhbmsgYWJvdXQgc3BsaXR0aW5nIHRoaXMgZnVuY3Rpb24gaW50byB0d28gZnVuY3Rpb25zXHJcbiAgICB0aGlzLnNjb3JlICs9IHNjb3JlVG9BZGQ7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyJHtwbGF5ZXJOdW1iZXJ9U2NvcmVgKS50ZXh0Q29udGVudCA9XHJcbiAgICAgIHRoaXMuc2NvcmU7XHJcbiAgfTtcclxuICBvYmoubmFtZSA9IG5hbWU7XHJcbiAgb2JqLnNjb3JlID0gc2NvcmU7XHJcbiAgb2JqLm51bWJlciA9IG51bWJlcjtcclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQbGF5ZXJzT2JqKHBsYXllckNvdW50KSB7XHJcbiAgY29uc3Qgc3RvY2tOYW1lcyA9IFtcIkNoYXNlXCIsIFwiRXRoYW5cIiwgXCJTdGFuXCIsIFwiVGF5bG9yXCJdO1xyXG4gIGNvbnN0IHBsYXllcnMgPSB7fTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBsYXllckNvdW50ICsgMTsgaSArPSAxKSB7XHJcbiAgICBwbGF5ZXJzW2ldID0gZ2VuZXJhdGVQbGF5ZXIoc3RvY2tOYW1lc1tpIC0gMV0sIGksIDApO1xyXG4gIH1cclxuICByZXR1cm4gcGxheWVycztcclxufVxyXG4vLyBjb25zdCBwbGF5ZXIxID0gZ2VuZXJhdGVQbGF5ZXIoXCJDaGFzZVwiLCAxLCAwKTtcclxuLy8gY29uc3QgcGxheWVyMiA9IGdlbmVyYXRlUGxheWVyKFwiRXRoYW5cIiwgMiwgMCk7XHJcbi8vIGNvbnN0IHBsYXllcjMgPSBnZW5lcmF0ZVBsYXllcihcIlN0YW5cIiwgMywgMCk7XHJcbi8vIGNvbnN0IHBsYXllcjQgPSBnZW5lcmF0ZVBsYXllcihcIlRheWxvclwiLCA0LCAwKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwbGF5ZXJOYW1lcyA9IFtcInRlc3RcIl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbFBsYXllclNldHVwKHBsYXllcjEsIHBsYXllcjIsIHBsYXllcjMsIHBsYXllcjQpIHtcclxuICAvLyBkaXNwbGF5IGRlZmF1bHQgdXNlcm5hbWVzXHJcbiAgcGxheWVyMS5kaXNwbGF5UGxheWVyTmFtZSgxKTtcclxuICBwbGF5ZXIyLmRpc3BsYXlQbGF5ZXJOYW1lKDIpO1xyXG4gIHBsYXllcjMuZGlzcGxheVBsYXllck5hbWUoMyk7XHJcbiAgcGxheWVyNC5kaXNwbGF5UGxheWVyTmFtZSg0KTtcclxuICAvLyBkaXNwbGF5IGludGlhbCAoemVybykgcGxheWVyIHNjb3Jlc1xyXG4gIHBsYXllcjEuZGlzcGxheVBsYXllclNjb3JlKDEsIDApO1xyXG4gIHBsYXllcjIuZGlzcGxheVBsYXllclNjb3JlKDIsIDApO1xyXG4gIHBsYXllcjMuZGlzcGxheVBsYXllclNjb3JlKDMsIDApO1xyXG4gIHBsYXllcjQuZGlzcGxheVBsYXllclNjb3JlKDQsIDApO1xyXG5cclxuICAvLyBwbGF5ZXIgbmFtZXMgY2FuIGJlIGNsaWNrZWQgdG8gb3BlbiB0aGUgY2hhbmdlIGRpYWxvZ3VlXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXIxXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwbGF5ZXIxLmNoYW5nZVBsYXllck5hbWUoKTtcclxuICB9KTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcjJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHBsYXllcjIuY2hhbmdlUGxheWVyTmFtZSgpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyM1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcGxheWVyMy5jaGFuZ2VQbGF5ZXJOYW1lKCk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXI0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwbGF5ZXI0LmNoYW5nZVBsYXllck5hbWUoKTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgUGFwYSBmcm9tIFwicGFwYXBhcnNlXCI7XHJcbmltcG9ydCAqIGFzIGJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XHJcbmltcG9ydCAqIGFzIHBsYXllcnMgZnJvbSBcIi4vcGxheWVyc1wiO1xyXG5cclxubGV0IGN1cnJlbnRTY29yZSA9IDA7XHJcbmxldCBxdWVzdGlvbkRhdGEgPSBbXTtcclxuXHJcbi8vIGNvbnZlcnQgdGhpcyB0byBhIGZ1bmN0aW9uIGluIHBsYXllcnMgbW9kdWxlXHJcbmV4cG9ydCBjb25zdCBwbGF5ZXJPYmogPSBwbGF5ZXJzLmdlbmVyYXRlUGxheWVyc09iaig0KTtcclxuY29uc3QgcGxheWVyTmFtZXMgPSBbXHJcbiAgcGxheWVyT2JqWzFdLm5hbWUsXHJcbiAgcGxheWVyT2JqWzJdLm5hbWUsXHJcbiAgcGxheWVyT2JqWzNdLm5hbWUsXHJcbiAgcGxheWVyT2JqWzRdLm5hbWUsXHJcbl07XHJcblxyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFF1ZXN0aW9uTW9kYWxFdmVudExpc3RlbmVyKCkge1xyXG4gIGNvbnN0IHF1ZXN0aW9uVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0aW9uXCIpO1xyXG4gIGNvbnNvbGUubG9nKHF1ZXN0aW9uVGlsZXMpO1xyXG4gIGNvbnNvbGUubG9nKHBsYXllck5hbWVzKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVzdGlvblRpbGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBxdWVzdGlvblRpbGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIC8vIG1vZGFsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIC8vIHByZXZlbnQgdGlsZSBmcm9tIGJlaW5nIG9wZW5lZCB0d2ljZVxyXG4gICAgICBpZiAocXVlc3Rpb25UaWxlc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWtlblwiKSkgcmV0dXJuO1xyXG4gICAgICAvLyBhc3NvY2lhdGVkIGFycmF5IG51bWJlcnMgYXJlIGR1ZSB0byB0aGUgZm9ybWF0IG9mIHF1ZXN0aW9uIGNzdiBpbnB1dFxyXG4gICAgICBpZiAoaSA8IDYpIG1vZGFsLmlubmVySFRNTCA9IHF1ZXN0aW9uRGF0YVsyICogaV1bMV07XHJcbiAgICAgIGlmIChpIDwgMTIgJiYgaSA+IDUpIG1vZGFsLmlubmVySFRNTCA9IHF1ZXN0aW9uRGF0YVsyICogaSAtIDEyXVsyXTtcclxuICAgICAgaWYgKGkgPCAxOCAmJiBpID4gMTEpIG1vZGFsLmlubmVySFRNTCA9IHF1ZXN0aW9uRGF0YVsyICogaSAtIDI0XVszXTtcclxuICAgICAgaWYgKGkgPCAyNCAmJiBpID4gMTcpIG1vZGFsLmlubmVySFRNTCA9IHF1ZXN0aW9uRGF0YVsyICogaSAtIDM2XVs0XTtcclxuICAgICAgaWYgKGkgPCAzMCAmJiBpID4gMjMpIG1vZGFsLmlubmVySFRNTCA9IHF1ZXN0aW9uRGF0YVsyICogaSAtIDQ4XVs1XTtcclxuICAgICAgaWYgKGkgPCAzNiAmJiBpID4gMjkpIG1vZGFsLmlubmVySFRNTCA9IHF1ZXN0aW9uRGF0YVsyICogaSAtIDYwXVs2XTtcclxuXHJcbiAgICAgIGN1cnJlbnRTY29yZSA9IHBhcnNlSW50KHF1ZXN0aW9uVGlsZXNbaV0udGV4dENvbnRlbnQsIDEwKTtcclxuICAgICAgY29uc29sZS5sb2coY3VycmVudFNjb3JlKTtcclxuXHJcbiAgICAgIC8vIGFkZCBhbiBhbnN3ZXIgYnV0dG9uIHRvIHRoZSBtb2RhbCB0aGF0IHJldmVhbHMgdGhlIGFuc3dlciB3aGVuIGNsaWNrZWQsIGJ1dHRvblxyXG4gICAgICAvLyBhZGRzIGJlZm9yZSB0aGUgdXNlciBidXR0b25zLCBhbnN3ZXIgYWRkcyB0byBib3R0b20gb2YgbW9kYWxcclxuICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJBbnN3ZXJcIjtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gYXNzb2NpYXRlZCBhcnJheSBudW1iZXJzIGFyZSBkdWUgdG8gdGhlIGZvcm1hdCBvZiBxdWVzdGlvbiBjc3YgaW5wdXRcclxuICAgICAgICBpZiAoaSA8IDYpIG1vZGFsLmlubmVySFRNTCArPSBxdWVzdGlvbkRhdGFbMiAqIGkgKyAxXVsxXTtcclxuICAgICAgICBpZiAoaSA8IDEyICYmIGkgPiA1KSBtb2RhbC5pbm5lckhUTUwgKz0gcXVlc3Rpb25EYXRhWzIgKiBpIC0gMTFdWzJdO1xyXG4gICAgICAgIGlmIChpIDwgMTggJiYgaSA+IDExKSBtb2RhbC5pbm5lckhUTUwgKz0gcXVlc3Rpb25EYXRhWzIgKiBpIC0gMjNdWzNdO1xyXG4gICAgICAgIGlmIChpIDwgMjQgJiYgaSA+IDE3KSBtb2RhbC5pbm5lckhUTUwgKz0gcXVlc3Rpb25EYXRhWzIgKiBpIC0gMzVdWzRdO1xyXG4gICAgICAgIGlmIChpIDwgMzAgJiYgaSA+IDIzKSBtb2RhbC5pbm5lckhUTUwgKz0gcXVlc3Rpb25EYXRhWzIgKiBpIC0gNDddWzVdO1xyXG4gICAgICAgIGlmIChpIDwgMzYgJiYgaSA+IDI5KSBtb2RhbC5pbm5lckhUTUwgKz0gcXVlc3Rpb25EYXRhWzIgKiBpIC0gNTldWzZdO1xyXG5cclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic2NvcmVCdXR0b25zXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgICAvLyBzZXQgbG9vcCBsZW5ndGggdG8gbnVtYmVyIG9mIHBsYXllcnNcclxuICAgICAgICAgIC8vIGFkZCBidXR0b25zIHRvIHRoZSBtb2RhbCB0aGF0IHdpbGwgYXdhcmQgcG9pbnRzIHRvIHRoZSBjb3JyZWN0IHBsYXllcihzKVxyXG4gICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IHBsYXllck5hbWVzW2pdO1xyXG4gICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrcyBmb3IgY2xpY2tlZCBjbGFzcyBhZGRlZCBsYXRlciB0byBwcmV2ZW50IGF3YXJkaW5nIHBvaW50cyBtb3JlIHRoYW4gb25jZVxyXG4gICAgICAgICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNsaWNrZWRcIikpIHJldHVybjtcclxuICAgICAgICAgICAgLy8gZ2V0IHF1ZXN0aW9uIHZhbHVlIGZyb20gdGhlIGNsaWNrZWQgdGlsZVxyXG4gICAgICAgICAgICAvLyBjdXJyZW50U2NvcmUgPSBwYXJzZUludChxdWVzdGlvblRpbGVzW2ldLnRleHRDb250ZW50LCAxMCk7XHJcbiAgICAgICAgICAgIC8vIGFkZCBjdXJyZW50IHNjb3JlIHRvIHRoZSBhcHByb3ByaWF0ZSBwbGF5ZXIgd2hlbiBjbGlja2VkXHJcbiAgICAgICAgICAgIGogPT09IDBcclxuICAgICAgICAgICAgICA/IHBsYXllck9ialsxXS5kaXNwbGF5UGxheWVyU2NvcmUoMSwgY3VycmVudFNjb3JlKVxyXG4gICAgICAgICAgICAgIDogaiA9PT0gMVxyXG4gICAgICAgICAgICAgID8gcGxheWVyT2JqWzJdLmRpc3BsYXlQbGF5ZXJTY29yZSgyLCBjdXJyZW50U2NvcmUpXHJcbiAgICAgICAgICAgICAgOiBqID09PSAyXHJcbiAgICAgICAgICAgICAgPyBwbGF5ZXJPYmpbM10uZGlzcGxheVBsYXllclNjb3JlKDMsIGN1cnJlbnRTY29yZSlcclxuICAgICAgICAgICAgICA6IHBsYXllck9ials0XS5kaXNwbGF5UGxheWVyU2NvcmUoNCwgY3VycmVudFNjb3JlKTtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBtb2RhbC5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuICAgICAgYWRkQ2xhc3MocXVlc3Rpb25UaWxlc1tpXSwgXCJ0YWtlblwiKTtcclxuXHJcbiAgICAgIHJlbW92ZUNsYXNzKG1vZGFsLCBcImhpZGRlblwiKTtcclxuICAgICAgcmVtb3ZlQ2xhc3Mob3ZlcmxheSwgXCJoaWRkZW5cIik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVzdGlvbkRhdGEoKSB7XHJcbiAgUGFwYS5wYXJzZShcIi4uL3NyYy9xdWVzdGlvbnMvVHJpdmlhIC0gUXVlc3Rpb25zLmNzdlwiLCB7XHJcbiAgICBkb3dubG9hZDogdHJ1ZSxcclxuICAgIGNvbXBsZXRlKHJlc3VsdHMpIHtcclxuICAgICAgcXVlc3Rpb25EYXRhID0gcmVzdWx0cy5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhxdWVzdGlvbkRhdGEpO1xyXG4gICAgICBib2FyZC5jcmVhdGVRdWVzdGlvbkdyaWQoNDIsIHJlc3VsdHMuZGF0YSk7XHJcbiAgICAgIGFkZFF1ZXN0aW9uTW9kYWxFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdHMuZGF0YSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFBhcGEgZnJvbSBcInBhcGFwYXJzZVwiO1xyXG5pbXBvcnQgKiBhcyBxdWVzdGlvbiBmcm9tIFwiLi9xdWVzdGlvbk1vZGFsXCI7XHJcbmltcG9ydCAqIGFzIHBsYXllcnMgZnJvbSBcIi4vcGxheWVyc1wiO1xyXG5pbXBvcnQgKiBhcyBib2FyZCBmcm9tIFwiLi9ib2FyZFwiO1xyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTY0MjcwMDkvaG93LXRvLXJldHVybi1wYXBhLXBhcnNlZC1jc3YtdmlhLXByb21pc2UtYXN5bmMtYXdhaXRcclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjI5MDU5MzMvaXRlcmF0aW5nLW92ZXItcmVzdWx0cy1vZi1wYXBhLXBhcnNlLW9iamVjdFxyXG4vLyByZXZpZXcgdGhlc2UgZm9yIHBlcnN1aW5nIGF3YWl0L3Byb21pc2VzIHdpdGggcGFwYXBhcnNlXHJcbi8vIFRPRE8gcmVtb3ZlIHRleHQgaW5zdGVhZCBvZiBzZXR0aW5nIGl0IHRvIGJvZHkgY29sb3JcclxuXHJcbi8vIFRPRE8gcmVtb3ZlIHRoZSB2YXJpb3VzIGNvbnNvbGUubG9nIGRlYnVnZ2luZyBsaW5lc1xyXG5cclxuLy8gVE9ETyBjaGFuZ2UgZmlsZSBmcm9tIHNvdXJjZSBkb2N1bWVudCB0byB1c2VyIHVwbG9hZGVkIHZpYSBidXR0b25cclxuLy8gZXhwYW5kIHBsYXllciBjcmVhdGlvbiB0byBzdXBwb3J0IGFueSBudW1iZXIgb2YgcGxheWVyc1xyXG4vLyBjaGFuZ2UgcGxheWVyIG5hbWUgZXZlbnQgbGlzdGVuZXIgdG8gYmUgYSBsb29wIGJhc2VkIG9uIHBsYWV5ciBjb3VudFxyXG4vLyBwbGF5ZXJzIG1vZHVsZSByZW1vdmUgcHJvbXB0IGZvciBiZXR0ZXIgY3VzdG9tIHNvbHV0aW9uXHJcbi8vIG9uZSBvcHRpb24gZm9yIGltYWdlcywgaWYgKHF1ZXN0aW9uIGRhdGEgPT09IGltZyBmaWxlIG5hbWUpIHNldCBpbWdcclxuLy8gZXhwYW5kIHN0b2NrIG5hbWVzXHJcbi8vIHVwZGF0ZSBwbGF5ZXJzIGxvZ2ljIGluIGluZGV4IGV4Y2x1c2l2ZSBtb2R1bGVcclxuXHJcbi8vIEluaXRpYWxpemUgdGhlIHBsYXllciBvYmplY3RzXHJcbi8vIGNvbnN0IHBsYXllcjEgPSBwbGF5ZXJzLmdlbmVyYXRlUGxheWVyKFwiQ2hhc2VcIiwgMSwgMCk7XHJcbi8vIGNvbnN0IHBsYXllcjIgPSBwbGF5ZXJzLmdlbmVyYXRlUGxheWVyKFwiRXRoYW5cIiwgMiwgMCk7XHJcbi8vIGNvbnN0IHBsYXllcjMgPSBwbGF5ZXJzLmdlbmVyYXRlUGxheWVyKFwiU3RhblwiLCAzLCAwKTtcclxuLy8gY29uc3QgcGxheWVyNCA9IHBsYXllcnMuZ2VuZXJhdGVQbGF5ZXIoXCJUYXlsb3JcIiwgNCwgMCk7XHJcblxyXG5jb25zdCB7IHBsYXllck9iaiB9ID0gcXVlc3Rpb247XHJcbmNvbnNvbGUubG9nKHBsYXllck9iaik7XHJcblxyXG4vLyBjb25zdCBwbGF5ZXJOYW1lcyA9IFtwbGF5ZXIxLm5hbWUsIHBsYXllcjIubmFtZSwgcGxheWVyMy5uYW1lLCBwbGF5ZXI0Lm5hbWVdO1xyXG5cclxucGxheWVycy5pbml0aWFsUGxheWVyU2V0dXAoXHJcbiAgcGxheWVyT2JqWzFdLFxyXG4gIHBsYXllck9ialsyXSxcclxuICBwbGF5ZXJPYmpbM10sXHJcbiAgcGxheWVyT2JqWzRdLFxyXG4pO1xyXG5cclxuLy8gY29uc3QgZmlsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlSW5wdXRcIik7XHJcbmNvbnN0IHVwbG9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBsb2FkXCIpO1xyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XHJcblxyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4vLyBvdmVybGF5IHByb3ZpZGVzIGEgc2VtaS10cmFuc3BhcmVudCBibHVyIGJlaGluZCB0aGUgbW9kYWwgdG8gaGVscCBmb2N1cyBhdHRlbnRpb24gb24gbW9kYWxcclxuLy8gd2hlbiB0aGUgb3ZlcmxheSBiYWNrZ3JvdW5kIGlzIGNsaWNrZWQgYW55d2hlcmUsIHRoZSBtb2RhbCByZWdhaW5zIHRoZSBoaWRkZW4gY2xhc3MgYW5kIGRpc2FwcGVhcnNcclxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHF1ZXN0aW9uLmFkZENsYXNzKG1vZGFsLCBcImhpZGRlblwiKTtcclxuICBxdWVzdGlvbi5hZGRDbGFzcyhvdmVybGF5LCBcImhpZGRlblwiKTtcclxufSk7XHJcblxyXG51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAvLyBnZXRRdWVzdGlvbkRhdGEuY3N2UGFyc2UoZmlsZUlucHV0KTtcclxuICAvLyBnZXRRdWVzdGlvbkRhdGEuY3N2UGFyc2UoKTtcclxuICBxdWVzdGlvbi5nZXRRdWVzdGlvbkRhdGEoKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwbG9hZFdyYXBwZXJcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xyXG4gIGNvbnN0IGltYWdlcyA9IHt9O1xyXG4gIC8vIGVuY2xvc2luZyBicmFja2V0IGFyb3VuZCByZXR1cm4gdG8gYXZvaWQgYW1iaWd1b3VzIGFzc2lnbm1lbnQgaW4gYSByZXR1cm5cclxuICByLmtleXMoKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgIC8vIHJlbW92ZSBsZWFkaW5nIC4vIGZyb20gZmlsZSBuYW1lc1xyXG4gICAgY29uc3QgdGVtcCA9IGtleS5yZXBsYWNlKFwiLi9cIiwgXCJcIik7XHJcbiAgICAvLyBvciBvcHRpb24gZml4IGNhc2Ugd2hlcmUgbGFzdEluZGV4T2YgPT09IC0xXHJcbiAgICAvLyByZW1vdmUgdHJhaWxpbmcgZmlsZSBleHRlbnNpb25zIGZyb20gZmlsZSBuYW1lcyAoZS5nLiAucG5nKVxyXG4gICAgY29uc3QgdGVtcDIgPSB0ZW1wLnN1YnN0cigwLCB0ZW1wLmxhc3RJbmRleE9mKFwiLlwiKSkgfHwgdGVtcDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRlbXAyKTtcclxuICAgIGltYWdlc1t0ZW1wMl0gPSByKGtleSk7XHJcbiAgfSk7XHJcbiAgLy8gYWx0ZXJuYXRlIG1hcCBtZXRob2RcclxuICAvLyByLmtleXMoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgLy8gICBpbWFnZXNbaXRlbS5yZXBsYWNlKFwiLi9cIiwgXCJcIildID0gcihpdGVtKTtcclxuICAvLyB9KTtcclxuICByZXR1cm4gaW1hZ2VzO1xyXG59XHJcblxyXG5jb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KFwiLi9pbWdcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xyXG4vLyBjb25zb2xlLmxvZyhpbWFnZXMpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=