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

#iconWrap {
  display: flex;
  align-items: center;
  justify-content: end;
}

#newGameButton {
  height: 30px;
  aspect-ratio: 1/1;
  cursor: pointer;
}
#title h1 {
  font-size: 4rem;
  margin-top: 1rem;
  margin-bottom: 0;
}

#uploadWrapper {
  margin-top: 1rem;
}

#playerScores p {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

#gridWrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  height: 50vh;
  font-size: 20px;
  font-weight: bold;
}

.category {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.question,
.questionTopic {
  background-color: rgb(75, 118, 199, 0.8);
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
.player p:first-child {
  cursor: pointer;
}

img {
  height: 30vh;
}
.scoreButtons {
  display: flex;
  gap: 10px;
}

.modal button {
  background-color: #f0f0f0;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 3px 6px;
}
.modal button:hover {
  background-color: #dddcdc;
}

/* duplicated selector to override (.scoreButtons button) 
selector above, 0-1-1 vs 0-2-0 */
.buttonDisabled.buttonDisabled {
  background-color: #dddcdc;
  opacity: 0.5;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;;EAEE,wCAAwC;EACxC,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;EACvB,2EAA2E;EAC3E,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,uBAAuB;EACvB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,wBAAwB;EACxB,eAAe;EACf,QAAQ;EACR,SAAS;EACT,UAAU;EACV,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,QAAQ;EACR,OAAO;EACP,iBAAiB;EACjB,oCAAoC;EACpC,0BAA0B;AAC5B;AACA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,yBAAyB;AAC3B;;AAEA;gCACgC;AAChC;EACE,yBAAyB;EACzB,YAAY;AACd","sourcesContent":["body {\r\n  background-color: gray;\r\n  text-align: center;\r\n  overflow: auto;\r\n}\r\n\r\n#iconWrap {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: end;\r\n}\r\n\r\n#newGameButton {\r\n  height: 30px;\r\n  aspect-ratio: 1/1;\r\n  cursor: pointer;\r\n}\r\n#title h1 {\r\n  font-size: 4rem;\r\n  margin-top: 1rem;\r\n  margin-bottom: 0;\r\n}\r\n\r\n#uploadWrapper {\r\n  margin-top: 1rem;\r\n}\r\n\r\n#playerScores p {\r\n  margin-top: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n#gridWrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n  gap: 10px;\r\n  height: 50vh;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n.category {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.question,\r\n.questionTopic {\r\n  background-color: rgb(75, 118, 199, 0.8);\r\n  border: 2px solid black;\r\n  border-radius: 8px;\r\n  aspect-ratio: 2/1;\r\n  width: min(15vw, 200px);\r\n  /* text-align appears to be needed for top left grid square...no idea why */\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.taken {\r\n  background-color: gray;\r\n  color: gray;\r\n  border-color: gray;\r\n}\r\n\r\n.modal {\r\n  width: 60%;\r\n  background-color: white;\r\n  border: 1px black solid;\r\n  border-radius: 4px;\r\n  padding: 2rem;\r\n  /* text-align: center; */\r\n  position: fixed;\r\n  top: 15%;\r\n  left: 20%;\r\n  z-index: 2;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  font-size: 24px;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  /* width: 100%; */\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(3px);\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n#playerScores {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  font-size: 30px;\r\n}\r\n.player {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 2px;\r\n}\r\n.player p:first-child {\r\n  cursor: pointer;\r\n}\r\n\r\nimg {\r\n  height: 30vh;\r\n}\r\n.scoreButtons {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.modal button {\r\n  background-color: #f0f0f0;\r\n  border: 1px solid gray;\r\n  border-radius: 8px;\r\n  padding: 3px 6px;\r\n}\r\n.modal button:hover {\r\n  background-color: #dddcdc;\r\n}\r\n\r\n/* duplicated selector to override (.scoreButtons button) \r\nselector above, 0-1-1 vs 0-2-0 */\r\n.buttonDisabled.buttonDisabled {\r\n  background-color: #dddcdc;\r\n  opacity: 0.5;\r\n}\r\n"],"sourceRoot":""}]);
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

  gridWrapper.innerHTML = "";
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
	"./plus-square.svg": "./src/img/plus-square.svg",
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

function initialPlayerSetup(
  player1,
  player2,
  player3,
  player4,
  playerObject,
) {
  const playerCount = Object.keys(playerObject).length;

  for (let i = 0; i < playerCount; i += 1) {
    // players index at 1
    // display default usernames and inital scores
    playerObject[i + 1].displayPlayerName(i + 1);
    playerObject[i + 1].displayPlayerScore(i + 1);
  }

  // // display default usernames
  // player1.displayPlayerName(1);
  // player2.displayPlayerName(2);
  // player3.displayPlayerName(3);
  // player4.displayPlayerName(4);
  // display intial player scores
  // player1.displayPlayerScore(1);
  // player2.displayPlayerScore(2);
  // player3.displayPlayerScore(3);
  // player4.displayPlayerScore(4);

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
/* harmony export */   addQuestionModalEventListener: () => (/* binding */ addQuestionModalEventListener),
/* harmony export */   convertJsonToObject: () => (/* binding */ convertJsonToObject),
/* harmony export */   generateQuestionObjectFromCSV: () => (/* binding */ generateQuestionObjectFromCSV),
/* harmony export */   getQuestionData: () => (/* binding */ getQuestionData),
/* harmony export */   playerObj: () => (/* binding */ playerObj)
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

function addQuestionModalEventListener(questionObject) {
  // const questionTiles = document.querySelectorAll(".question");
  // console.log(questionTiles);

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
        if (categoryQuestionTiles[j].classList.contains("taken")) return;
        modal.innerHTML =
          questionObject[`category${i}`][`question${j + 1}`].question;

        const answerButton = document.createElement("button");
        answerButton.textContent = "Answer";

        answerButton.addEventListener("click", () => {
          if (answerButton.classList.contains("buttonDisabled")) return;
          answerButton.classList.add("buttonDisabled");

          const playerNames = [
            playerObj[1].name,
            playerObj[2].name,
            playerObj[3].name,
            playerObj[4].name,
          ];
          const playerCount = playerNames.length;

          modal.innerHTML +=
            questionObject[`category${i}`][`question${j + 1}`].answer;

          const div = document.createElement("div");
          div.classList.add("scoreButtons");

          for (let k = 0; k < playerCount; k += 1) {
            const currentScore = parseInt(
              categoryQuestionTiles[j].textContent,
              10,
            );

            const scoreButton = document.createElement("button");
            scoreButton.textContent = playerNames[k];
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

/***/ "./src/img/plus-square.svg":
/*!*********************************!*\
  !*** ./src/img/plus-square.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1254f9745b42217d16e8.svg";

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
// expand player creation to support any number of players - playersetup can be fed a player object and looped
// change player name event listener to be a loop based on plaeyr count
// players module remove prompt for better custom solution
// one option for images, if (question data === img file name) set img
// expand stock names
// only allow upload if (fileInput) button !disabled
// group css together better
// figure out how to collect point value from csv input
// stop gathering question0, already covered in topic
// cleanup index
// consider async for .json
// change board logic to account for asymmetric categories - loop all categories to find unique question counts
// disable overlay closing until at least answer button clicked
// fix board build on non-square boards
// consider exporting category/question counts from board
// migrate to classlist vs custom function
// change player name by something other than prompt()
// method to edit scores
// look into standardizing topic div height

// Initialize the player object
const { playerObj } = _questionModal__WEBPACK_IMPORTED_MODULE_2__;
const playerCount = Object.keys(playerObj).length;
console.log(playerObj);

_players__WEBPACK_IMPORTED_MODULE_3__.initialPlayerSetup(
  // make variable number of players here
  playerObj[1],
  playerObj[2],
  playerObj[3],
  playerObj[4],
  playerObj,
);

const fileInput = document.getElementById("fileInput");
const upload = document.getElementById("upload");
const modal = document.querySelector(".modal");
const uploadWrapper = document.getElementById("uploadWrapper");

const reader = new FileReader();
reader.addEventListener("load", (event) => {
  const fileData = event.target.result;
  // console.log(fileData);
  const jsonObj = JSON.parse(fileData);
  // console.log(jsonObj);
  _board__WEBPACK_IMPORTED_MODULE_4__.createQuestionGrid(jsonObj);
  _questionModal__WEBPACK_IMPORTED_MODULE_2__.addQuestionModalEventListener(jsonObj);
});
// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsText

const newGameButton = document.getElementById("newGameButton");
newGameButton.addEventListener("click", () => {
  uploadWrapper.classList.toggle("hidden");
});

const overlay = document.querySelector(".overlay");
// overlay provides a semi-transparent blur behind the modal to help focus attention on modal
// when the overlay background is clicked anywhere, the modal regains the hidden class and disappears
overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

upload.addEventListener("click", () => {
  // getQuestionData.csvParse(fileInput);
  // getQuestionData.csvParse();
  console.log(playerObj);
  for (let i = 1; i < playerCount + 1; i += 1) {
    playerObj[i].score = 0;
    playerObj[i].displayPlayerScore(i, 0);
  }

  const inputFile = fileInput.files[0];
  const fileType = inputFile.type.match(/csv|json/);

  // match returns matched group in an array
  if (fileType[0] === "csv") _questionModal__WEBPACK_IMPORTED_MODULE_2__.getQuestionData(fileInput);
  if (fileType[0] === "json") {
    // board.createQuestionGrid(42, jsonObj);
    // question.addQuestionModalEventListener(jsonObj);
    reader.readAsText(inputFile);
  }

  uploadWrapper.classList.add("hidden");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsWUFBWSxFQUFFLDJDQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHdEQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0RBQXdCO0FBQzFCLEVBQUUseUVBQXNDO0FBQ3hDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMkRBQXdCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZEQUFxRDtBQUM5RSIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9wYXBhcGFyc2UvcGFwYXBhcnNlLm1pbi5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL2ltZy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9wbGF5ZXJzLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL3F1ZXN0aW9uTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbiNpY29uV3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcblxyXG4jbmV3R2FtZUJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jdGl0bGUgaDEge1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbiN1cGxvYWRXcmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4jcGxheWVyU2NvcmVzIHAge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuI2dyaWRXcmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jYXRlZ29yeSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLnF1ZXN0aW9uLFxyXG4ucXVlc3Rpb25Ub3BpYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCAxMTgsIDE5OSwgMC44KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYXNwZWN0LXJhdGlvOiAyLzE7XHJcbiAgd2lkdGg6IG1pbigxNXZ3LCAyMDBweCk7XHJcbiAgLyogdGV4dC1hbGlnbiBhcHBlYXJzIHRvIGJlIG5lZWRlZCBmb3IgdG9wIGxlZnQgZ3JpZCBzcXVhcmUuLi5ubyBpZGVhIHdoeSAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWtlbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBjb2xvcjogZ3JheTtcclxuICBib3JkZXItY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTUlO1xyXG4gIGxlZnQ6IDIwJTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbn1cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI3BsYXllclNjb3JlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnBsYXllciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMnB4O1xyXG59XHJcbi5wbGF5ZXIgcDpmaXJzdC1jaGlsZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGhlaWdodDogMzB2aDtcclxufVxyXG4uc2NvcmVCdXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLm1vZGFsIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAzcHggNnB4O1xyXG59XHJcbi5tb2RhbCBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRjZGM7XHJcbn1cclxuXHJcbi8qIGR1cGxpY2F0ZWQgc2VsZWN0b3IgdG8gb3ZlcnJpZGUgKC5zY29yZUJ1dHRvbnMgYnV0dG9uKSBcclxuc2VsZWN0b3IgYWJvdmUsIDAtMS0xIHZzIDAtMi0wICovXHJcbi5idXR0b25EaXNhYmxlZC5idXR0b25EaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGNkYztcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsU0FBUztFQUNULFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsd0NBQXdDO0VBQ3hDLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QiwyRUFBMkU7RUFDM0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO2dDQUNnQztBQUNoQztFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNpY29uV3JhcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3R2FtZUJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuI3RpdGxlIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jdXBsb2FkV3JhcHBlciB7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyU2NvcmVzIHAge1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNncmlkV3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGhlaWdodDogNTB2aDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5xdWVzdGlvbixcXHJcXG4ucXVlc3Rpb25Ub3BpYyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDExOCwgMTk5LCAwLjgpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBhc3BlY3QtcmF0aW86IDIvMTtcXHJcXG4gIHdpZHRoOiBtaW4oMTV2dywgMjAwcHgpO1xcclxcbiAgLyogdGV4dC1hbGlnbiBhcHBlYXJzIHRvIGJlIG5lZWRlZCBmb3IgdG9wIGxlZnQgZ3JpZCBzcXVhcmUuLi5ubyBpZGVhIHdoeSAqL1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRha2VuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG4gIGJvcmRlci1jb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMTUlO1xcclxcbiAgbGVmdDogMjAlO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXHJcXG59XFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyU2NvcmVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuLnBsYXllciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnB4O1xcclxcbn1cXHJcXG4ucGxheWVyIHA6Zmlyc3QtY2hpbGQge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgaGVpZ2h0OiAzMHZoO1xcclxcbn1cXHJcXG4uc2NvcmVCdXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBwYWRkaW5nOiAzcHggNnB4O1xcclxcbn1cXHJcXG4ubW9kYWwgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRjZGM7XFxyXFxufVxcclxcblxcclxcbi8qIGR1cGxpY2F0ZWQgc2VsZWN0b3IgdG8gb3ZlcnJpZGUgKC5zY29yZUJ1dHRvbnMgYnV0dG9uKSBcXHJcXG5zZWxlY3RvciBhYm92ZSwgMC0xLTEgdnMgMC0yLTAgKi9cXHJcXG4uYnV0dG9uRGlzYWJsZWQuYnV0dG9uRGlzYWJsZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGNkYztcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKiBAbGljZW5zZVxuUGFwYSBQYXJzZVxudjUuNC4xXG5odHRwczovL2dpdGh1Yi5jb20vbWhvbHQvUGFwYVBhcnNlXG5MaWNlbnNlOiBNSVRcbiovXG4hZnVuY3Rpb24oZSx0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPXQoKTplLlBhcGE9dCgpfSh0aGlzLGZ1bmN0aW9uIHMoKXtcInVzZSBzdHJpY3RcIjt2YXIgZj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnZvaWQgMCE9PWY/Zjp7fTt2YXIgbj0hZi5kb2N1bWVudCYmISFmLnBvc3RNZXNzYWdlLG89Zi5JU19QQVBBX1dPUktFUnx8ITEsYT17fSx1PTAsYj17cGFyc2U6ZnVuY3Rpb24oZSx0KXt2YXIgcj0odD10fHx7fSkuZHluYW1pY1R5cGluZ3x8ITE7SihyKSYmKHQuZHluYW1pY1R5cGluZ0Z1bmN0aW9uPXIscj17fSk7aWYodC5keW5hbWljVHlwaW5nPXIsdC50cmFuc2Zvcm09ISFKKHQudHJhbnNmb3JtKSYmdC50cmFuc2Zvcm0sdC53b3JrZXImJmIuV09SS0VSU19TVVBQT1JURUQpe3ZhciBpPWZ1bmN0aW9uKCl7aWYoIWIuV09SS0VSU19TVVBQT1JURUQpcmV0dXJuITE7dmFyIGU9KHI9Zi5VUkx8fGYud2Via2l0VVJMfHxudWxsLGk9cy50b1N0cmluZygpLGIuQkxPQl9VUkx8fChiLkJMT0JfVVJMPXIuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtcInZhciBnbG9iYWwgPSAoZnVuY3Rpb24oKSB7IGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHNlbGY7IH0gaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiB3aW5kb3c7IH0gaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBnbG9iYWw7IH0gcmV0dXJuIHt9OyB9KSgpOyBnbG9iYWwuSVNfUEFQQV9XT1JLRVI9dHJ1ZTsgXCIsXCIoXCIsaSxcIikoKTtcIl0se3R5cGU6XCJ0ZXh0L2phdmFzY3JpcHRcIn0pKSkpLHQ9bmV3IGYuV29ya2VyKGUpO3ZhciByLGk7cmV0dXJuIHQub25tZXNzYWdlPV8sdC5pZD11KyssYVt0LmlkXT10fSgpO3JldHVybiBpLnVzZXJTdGVwPXQuc3RlcCxpLnVzZXJDaHVuaz10LmNodW5rLGkudXNlckNvbXBsZXRlPXQuY29tcGxldGUsaS51c2VyRXJyb3I9dC5lcnJvcix0LnN0ZXA9Sih0LnN0ZXApLHQuY2h1bms9Sih0LmNodW5rKSx0LmNvbXBsZXRlPUoodC5jb21wbGV0ZSksdC5lcnJvcj1KKHQuZXJyb3IpLGRlbGV0ZSB0Lndvcmtlcix2b2lkIGkucG9zdE1lc3NhZ2Uoe2lucHV0OmUsY29uZmlnOnQsd29ya2VySWQ6aS5pZH0pfXZhciBuPW51bGw7Yi5OT0RFX1NUUkVBTV9JTlBVVCxcInN0cmluZ1wiPT10eXBlb2YgZT8oZT1mdW5jdGlvbihlKXtpZig2NTI3OT09PWUuY2hhckNvZGVBdCgwKSlyZXR1cm4gZS5zbGljZSgxKTtyZXR1cm4gZX0oZSksbj10LmRvd25sb2FkP25ldyBsKHQpOm5ldyBwKHQpKTohMD09PWUucmVhZGFibGUmJkooZS5yZWFkKSYmSihlLm9uKT9uPW5ldyBnKHQpOihmLkZpbGUmJmUgaW5zdGFuY2VvZiBGaWxlfHxlIGluc3RhbmNlb2YgT2JqZWN0KSYmKG49bmV3IGModCkpO3JldHVybiBuLnN0cmVhbShlKX0sdW5wYXJzZTpmdW5jdGlvbihlLHQpe3ZhciBuPSExLF89ITAsbT1cIixcIix5PVwiXFxyXFxuXCIscz0nXCInLGE9cytzLHI9ITEsaT1udWxsLG89ITE7IWZ1bmN0aW9uKCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHQpcmV0dXJuO1wic3RyaW5nXCIhPXR5cGVvZiB0LmRlbGltaXRlcnx8Yi5CQURfREVMSU1JVEVSUy5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuLTEhPT10LmRlbGltaXRlci5pbmRleE9mKGUpfSkubGVuZ3RofHwobT10LmRlbGltaXRlcik7KFwiYm9vbGVhblwiPT10eXBlb2YgdC5xdW90ZXN8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHQucXVvdGVzfHxBcnJheS5pc0FycmF5KHQucXVvdGVzKSkmJihuPXQucXVvdGVzKTtcImJvb2xlYW5cIiE9dHlwZW9mIHQuc2tpcEVtcHR5TGluZXMmJlwic3RyaW5nXCIhPXR5cGVvZiB0LnNraXBFbXB0eUxpbmVzfHwocj10LnNraXBFbXB0eUxpbmVzKTtcInN0cmluZ1wiPT10eXBlb2YgdC5uZXdsaW5lJiYoeT10Lm5ld2xpbmUpO1wic3RyaW5nXCI9PXR5cGVvZiB0LnF1b3RlQ2hhciYmKHM9dC5xdW90ZUNoYXIpO1wiYm9vbGVhblwiPT10eXBlb2YgdC5oZWFkZXImJihfPXQuaGVhZGVyKTtpZihBcnJheS5pc0FycmF5KHQuY29sdW1ucykpe2lmKDA9PT10LmNvbHVtbnMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIk9wdGlvbiBjb2x1bW5zIGlzIGVtcHR5XCIpO2k9dC5jb2x1bW5zfXZvaWQgMCE9PXQuZXNjYXBlQ2hhciYmKGE9dC5lc2NhcGVDaGFyK3MpOyhcImJvb2xlYW5cIj09dHlwZW9mIHQuZXNjYXBlRm9ybXVsYWV8fHQuZXNjYXBlRm9ybXVsYWUgaW5zdGFuY2VvZiBSZWdFeHApJiYobz10LmVzY2FwZUZvcm11bGFlIGluc3RhbmNlb2YgUmVnRXhwP3QuZXNjYXBlRm9ybXVsYWU6L15bPStcXC1AXFx0XFxyXS4qJC8pfSgpO3ZhciB1PW5ldyBSZWdFeHAoUShzKSxcImdcIik7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPUpTT04ucGFyc2UoZSkpO2lmKEFycmF5LmlzQXJyYXkoZSkpe2lmKCFlLmxlbmd0aHx8QXJyYXkuaXNBcnJheShlWzBdKSlyZXR1cm4gaChudWxsLGUscik7aWYoXCJvYmplY3RcIj09dHlwZW9mIGVbMF0pcmV0dXJuIGgoaXx8T2JqZWN0LmtleXMoZVswXSksZSxyKX1lbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXJldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlLmRhdGEmJihlLmRhdGE9SlNPTi5wYXJzZShlLmRhdGEpKSxBcnJheS5pc0FycmF5KGUuZGF0YSkmJihlLmZpZWxkc3x8KGUuZmllbGRzPWUubWV0YSYmZS5tZXRhLmZpZWxkc3x8aSksZS5maWVsZHN8fChlLmZpZWxkcz1BcnJheS5pc0FycmF5KGUuZGF0YVswXSk/ZS5maWVsZHM6XCJvYmplY3RcIj09dHlwZW9mIGUuZGF0YVswXT9PYmplY3Qua2V5cyhlLmRhdGFbMF0pOltdKSxBcnJheS5pc0FycmF5KGUuZGF0YVswXSl8fFwib2JqZWN0XCI9PXR5cGVvZiBlLmRhdGFbMF18fChlLmRhdGE9W2UuZGF0YV0pKSxoKGUuZmllbGRzfHxbXSxlLmRhdGF8fFtdLHIpO3Rocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBzZXJpYWxpemUgdW5yZWNvZ25pemVkIGlucHV0XCIpO2Z1bmN0aW9uIGgoZSx0LHIpe3ZhciBpPVwiXCI7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPUpTT04ucGFyc2UoZSkpLFwic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1KU09OLnBhcnNlKHQpKTt2YXIgbj1BcnJheS5pc0FycmF5KGUpJiYwPGUubGVuZ3RoLHM9IUFycmF5LmlzQXJyYXkodFswXSk7aWYobiYmXyl7Zm9yKHZhciBhPTA7YTxlLmxlbmd0aDthKyspMDxhJiYoaSs9bSksaSs9dihlW2FdLGEpOzA8dC5sZW5ndGgmJihpKz15KX1mb3IodmFyIG89MDtvPHQubGVuZ3RoO28rKyl7dmFyIHU9bj9lLmxlbmd0aDp0W29dLmxlbmd0aCxoPSExLGY9bj8wPT09T2JqZWN0LmtleXModFtvXSkubGVuZ3RoOjA9PT10W29dLmxlbmd0aDtpZihyJiYhbiYmKGg9XCJncmVlZHlcIj09PXI/XCJcIj09PXRbb10uam9pbihcIlwiKS50cmltKCk6MT09PXRbb10ubGVuZ3RoJiYwPT09dFtvXVswXS5sZW5ndGgpLFwiZ3JlZWR5XCI9PT1yJiZuKXtmb3IodmFyIGQ9W10sbD0wO2w8dTtsKyspe3ZhciBjPXM/ZVtsXTpsO2QucHVzaCh0W29dW2NdKX1oPVwiXCI9PT1kLmpvaW4oXCJcIikudHJpbSgpfWlmKCFoKXtmb3IodmFyIHA9MDtwPHU7cCsrKXswPHAmJiFmJiYoaSs9bSk7dmFyIGc9biYmcz9lW3BdOnA7aSs9dih0W29dW2ddLHApfW88dC5sZW5ndGgtMSYmKCFyfHwwPHUmJiFmKSYmKGkrPXkpfX1yZXR1cm4gaX1mdW5jdGlvbiB2KGUsdCl7aWYobnVsbD09ZSlyZXR1cm5cIlwiO2lmKGUuY29uc3RydWN0b3I9PT1EYXRlKXJldHVybiBKU09OLnN0cmluZ2lmeShlKS5zbGljZSgxLDI1KTt2YXIgcj0hMTtvJiZcInN0cmluZ1wiPT10eXBlb2YgZSYmby50ZXN0KGUpJiYoZT1cIidcIitlLHI9ITApO3ZhciBpPWUudG9TdHJpbmcoKS5yZXBsYWNlKHUsYSk7cmV0dXJuKHI9cnx8ITA9PT1ufHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZuKGUsdCl8fEFycmF5LmlzQXJyYXkobikmJm5bdF18fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspaWYoLTE8ZS5pbmRleE9mKHRbcl0pKXJldHVybiEwO3JldHVybiExfShpLGIuQkFEX0RFTElNSVRFUlMpfHwtMTxpLmluZGV4T2YobSl8fFwiIFwiPT09aS5jaGFyQXQoMCl8fFwiIFwiPT09aS5jaGFyQXQoaS5sZW5ndGgtMSkpP3MraStzOml9fX07aWYoYi5SRUNPUkRfU0VQPVN0cmluZy5mcm9tQ2hhckNvZGUoMzApLGIuVU5JVF9TRVA9U3RyaW5nLmZyb21DaGFyQ29kZSgzMSksYi5CWVRFX09SREVSX01BUks9XCJcXHVmZWZmXCIsYi5CQURfREVMSU1JVEVSUz1bXCJcXHJcIixcIlxcblwiLCdcIicsYi5CWVRFX09SREVSX01BUktdLGIuV09SS0VSU19TVVBQT1JURUQ9IW4mJiEhZi5Xb3JrZXIsYi5OT0RFX1NUUkVBTV9JTlBVVD0xLGIuTG9jYWxDaHVua1NpemU9MTA0ODU3NjAsYi5SZW1vdGVDaHVua1NpemU9NTI0Mjg4MCxiLkRlZmF1bHREZWxpbWl0ZXI9XCIsXCIsYi5QYXJzZXI9RSxiLlBhcnNlckhhbmRsZT1yLGIuTmV0d29ya1N0cmVhbWVyPWwsYi5GaWxlU3RyZWFtZXI9YyxiLlN0cmluZ1N0cmVhbWVyPXAsYi5SZWFkYWJsZVN0cmVhbVN0cmVhbWVyPWcsZi5qUXVlcnkpe3ZhciBkPWYualF1ZXJ5O2QuZm4ucGFyc2U9ZnVuY3Rpb24obyl7dmFyIHI9by5jb25maWd8fHt9LHU9W107cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtpZighKFwiSU5QVVRcIj09PWQodGhpcykucHJvcChcInRhZ05hbWVcIikudG9VcHBlckNhc2UoKSYmXCJmaWxlXCI9PT1kKHRoaXMpLmF0dHIoXCJ0eXBlXCIpLnRvTG93ZXJDYXNlKCkmJmYuRmlsZVJlYWRlcil8fCF0aGlzLmZpbGVzfHwwPT09dGhpcy5maWxlcy5sZW5ndGgpcmV0dXJuITA7Zm9yKHZhciB0PTA7dDx0aGlzLmZpbGVzLmxlbmd0aDt0KyspdS5wdXNoKHtmaWxlOnRoaXMuZmlsZXNbdF0saW5wdXRFbGVtOnRoaXMsaW5zdGFuY2VDb25maWc6ZC5leHRlbmQoe30scil9KX0pLGUoKSx0aGlzO2Z1bmN0aW9uIGUoKXtpZigwIT09dS5sZW5ndGgpe3ZhciBlLHQscixpLG49dVswXTtpZihKKG8uYmVmb3JlKSl7dmFyIHM9by5iZWZvcmUobi5maWxlLG4uaW5wdXRFbGVtKTtpZihcIm9iamVjdFwiPT10eXBlb2Ygcyl7aWYoXCJhYm9ydFwiPT09cy5hY3Rpb24pcmV0dXJuIGU9XCJBYm9ydEVycm9yXCIsdD1uLmZpbGUscj1uLmlucHV0RWxlbSxpPXMucmVhc29uLHZvaWQoSihvLmVycm9yKSYmby5lcnJvcih7bmFtZTplfSx0LHIsaSkpO2lmKFwic2tpcFwiPT09cy5hY3Rpb24pcmV0dXJuIHZvaWQgaCgpO1wib2JqZWN0XCI9PXR5cGVvZiBzLmNvbmZpZyYmKG4uaW5zdGFuY2VDb25maWc9ZC5leHRlbmQobi5pbnN0YW5jZUNvbmZpZyxzLmNvbmZpZykpfWVsc2UgaWYoXCJza2lwXCI9PT1zKXJldHVybiB2b2lkIGgoKX12YXIgYT1uLmluc3RhbmNlQ29uZmlnLmNvbXBsZXRlO24uaW5zdGFuY2VDb25maWcuY29tcGxldGU9ZnVuY3Rpb24oZSl7SihhKSYmYShlLG4uZmlsZSxuLmlucHV0RWxlbSksaCgpfSxiLnBhcnNlKG4uZmlsZSxuLmluc3RhbmNlQ29uZmlnKX1lbHNlIEooby5jb21wbGV0ZSkmJm8uY29tcGxldGUoKX1mdW5jdGlvbiBoKCl7dS5zcGxpY2UoMCwxKSxlKCl9fX1mdW5jdGlvbiBoKGUpe3RoaXMuX2hhbmRsZT1udWxsLHRoaXMuX2ZpbmlzaGVkPSExLHRoaXMuX2NvbXBsZXRlZD0hMSx0aGlzLl9oYWx0ZWQ9ITEsdGhpcy5faW5wdXQ9bnVsbCx0aGlzLl9iYXNlSW5kZXg9MCx0aGlzLl9wYXJ0aWFsTGluZT1cIlwiLHRoaXMuX3Jvd0NvdW50PTAsdGhpcy5fc3RhcnQ9MCx0aGlzLl9uZXh0Q2h1bms9bnVsbCx0aGlzLmlzRmlyc3RDaHVuaz0hMCx0aGlzLl9jb21wbGV0ZVJlc3VsdHM9e2RhdGE6W10sZXJyb3JzOltdLG1ldGE6e319LGZ1bmN0aW9uKGUpe3ZhciB0PXcoZSk7dC5jaHVua1NpemU9cGFyc2VJbnQodC5jaHVua1NpemUpLGUuc3RlcHx8ZS5jaHVua3x8KHQuY2h1bmtTaXplPW51bGwpO3RoaXMuX2hhbmRsZT1uZXcgcih0KSwodGhpcy5faGFuZGxlLnN0cmVhbWVyPXRoaXMpLl9jb25maWc9dH0uY2FsbCh0aGlzLGUpLHRoaXMucGFyc2VDaHVuaz1mdW5jdGlvbihlLHQpe2lmKHRoaXMuaXNGaXJzdENodW5rJiZKKHRoaXMuX2NvbmZpZy5iZWZvcmVGaXJzdENodW5rKSl7dmFyIHI9dGhpcy5fY29uZmlnLmJlZm9yZUZpcnN0Q2h1bmsoZSk7dm9pZCAwIT09ciYmKGU9cil9dGhpcy5pc0ZpcnN0Q2h1bms9ITEsdGhpcy5faGFsdGVkPSExO3ZhciBpPXRoaXMuX3BhcnRpYWxMaW5lK2U7dGhpcy5fcGFydGlhbExpbmU9XCJcIjt2YXIgbj10aGlzLl9oYW5kbGUucGFyc2UoaSx0aGlzLl9iYXNlSW5kZXgsIXRoaXMuX2ZpbmlzaGVkKTtpZighdGhpcy5faGFuZGxlLnBhdXNlZCgpJiYhdGhpcy5faGFuZGxlLmFib3J0ZWQoKSl7dmFyIHM9bi5tZXRhLmN1cnNvcjt0aGlzLl9maW5pc2hlZHx8KHRoaXMuX3BhcnRpYWxMaW5lPWkuc3Vic3RyaW5nKHMtdGhpcy5fYmFzZUluZGV4KSx0aGlzLl9iYXNlSW5kZXg9cyksbiYmbi5kYXRhJiYodGhpcy5fcm93Q291bnQrPW4uZGF0YS5sZW5ndGgpO3ZhciBhPXRoaXMuX2ZpbmlzaGVkfHx0aGlzLl9jb25maWcucHJldmlldyYmdGhpcy5fcm93Q291bnQ+PXRoaXMuX2NvbmZpZy5wcmV2aWV3O2lmKG8pZi5wb3N0TWVzc2FnZSh7cmVzdWx0czpuLHdvcmtlcklkOmIuV09SS0VSX0lELGZpbmlzaGVkOmF9KTtlbHNlIGlmKEoodGhpcy5fY29uZmlnLmNodW5rKSYmIXQpe2lmKHRoaXMuX2NvbmZpZy5jaHVuayhuLHRoaXMuX2hhbmRsZSksdGhpcy5faGFuZGxlLnBhdXNlZCgpfHx0aGlzLl9oYW5kbGUuYWJvcnRlZCgpKXJldHVybiB2b2lkKHRoaXMuX2hhbHRlZD0hMCk7bj12b2lkIDAsdGhpcy5fY29tcGxldGVSZXN1bHRzPXZvaWQgMH1yZXR1cm4gdGhpcy5fY29uZmlnLnN0ZXB8fHRoaXMuX2NvbmZpZy5jaHVua3x8KHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5kYXRhPXRoaXMuX2NvbXBsZXRlUmVzdWx0cy5kYXRhLmNvbmNhdChuLmRhdGEpLHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5lcnJvcnM9dGhpcy5fY29tcGxldGVSZXN1bHRzLmVycm9ycy5jb25jYXQobi5lcnJvcnMpLHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5tZXRhPW4ubWV0YSksdGhpcy5fY29tcGxldGVkfHwhYXx8IUoodGhpcy5fY29uZmlnLmNvbXBsZXRlKXx8biYmbi5tZXRhLmFib3J0ZWR8fCh0aGlzLl9jb25maWcuY29tcGxldGUodGhpcy5fY29tcGxldGVSZXN1bHRzLHRoaXMuX2lucHV0KSx0aGlzLl9jb21wbGV0ZWQ9ITApLGF8fG4mJm4ubWV0YS5wYXVzZWR8fHRoaXMuX25leHRDaHVuaygpLG59dGhpcy5faGFsdGVkPSEwfSx0aGlzLl9zZW5kRXJyb3I9ZnVuY3Rpb24oZSl7Sih0aGlzLl9jb25maWcuZXJyb3IpP3RoaXMuX2NvbmZpZy5lcnJvcihlKTpvJiZ0aGlzLl9jb25maWcuZXJyb3ImJmYucG9zdE1lc3NhZ2Uoe3dvcmtlcklkOmIuV09SS0VSX0lELGVycm9yOmUsZmluaXNoZWQ6ITF9KX19ZnVuY3Rpb24gbChlKXt2YXIgaTsoZT1lfHx7fSkuY2h1bmtTaXplfHwoZS5jaHVua1NpemU9Yi5SZW1vdGVDaHVua1NpemUpLGguY2FsbCh0aGlzLGUpLHRoaXMuX25leHRDaHVuaz1uP2Z1bmN0aW9uKCl7dGhpcy5fcmVhZENodW5rKCksdGhpcy5fY2h1bmtMb2FkZWQoKX06ZnVuY3Rpb24oKXt0aGlzLl9yZWFkQ2h1bmsoKX0sdGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7dGhpcy5faW5wdXQ9ZSx0aGlzLl9uZXh0Q2h1bmsoKX0sdGhpcy5fcmVhZENodW5rPWZ1bmN0aW9uKCl7aWYodGhpcy5fZmluaXNoZWQpdGhpcy5fY2h1bmtMb2FkZWQoKTtlbHNle2lmKGk9bmV3IFhNTEh0dHBSZXF1ZXN0LHRoaXMuX2NvbmZpZy53aXRoQ3JlZGVudGlhbHMmJihpLndpdGhDcmVkZW50aWFscz10aGlzLl9jb25maWcud2l0aENyZWRlbnRpYWxzKSxufHwoaS5vbmxvYWQ9dih0aGlzLl9jaHVua0xvYWRlZCx0aGlzKSxpLm9uZXJyb3I9dih0aGlzLl9jaHVua0Vycm9yLHRoaXMpKSxpLm9wZW4odGhpcy5fY29uZmlnLmRvd25sb2FkUmVxdWVzdEJvZHk/XCJQT1NUXCI6XCJHRVRcIix0aGlzLl9pbnB1dCwhbiksdGhpcy5fY29uZmlnLmRvd25sb2FkUmVxdWVzdEhlYWRlcnMpe3ZhciBlPXRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RIZWFkZXJzO2Zvcih2YXIgdCBpbiBlKWkuc2V0UmVxdWVzdEhlYWRlcih0LGVbdF0pfWlmKHRoaXMuX2NvbmZpZy5jaHVua1NpemUpe3ZhciByPXRoaXMuX3N0YXJ0K3RoaXMuX2NvbmZpZy5jaHVua1NpemUtMTtpLnNldFJlcXVlc3RIZWFkZXIoXCJSYW5nZVwiLFwiYnl0ZXM9XCIrdGhpcy5fc3RhcnQrXCItXCIrcil9dHJ5e2kuc2VuZCh0aGlzLl9jb25maWcuZG93bmxvYWRSZXF1ZXN0Qm9keSl9Y2F0Y2goZSl7dGhpcy5fY2h1bmtFcnJvcihlLm1lc3NhZ2UpfW4mJjA9PT1pLnN0YXR1cyYmdGhpcy5fY2h1bmtFcnJvcigpfX0sdGhpcy5fY2h1bmtMb2FkZWQ9ZnVuY3Rpb24oKXs0PT09aS5yZWFkeVN0YXRlJiYoaS5zdGF0dXM8MjAwfHw0MDA8PWkuc3RhdHVzP3RoaXMuX2NodW5rRXJyb3IoKToodGhpcy5fc3RhcnQrPXRoaXMuX2NvbmZpZy5jaHVua1NpemU/dGhpcy5fY29uZmlnLmNodW5rU2l6ZTppLnJlc3BvbnNlVGV4dC5sZW5ndGgsdGhpcy5fZmluaXNoZWQ9IXRoaXMuX2NvbmZpZy5jaHVua1NpemV8fHRoaXMuX3N0YXJ0Pj1mdW5jdGlvbihlKXt2YXIgdD1lLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1SYW5nZVwiKTtpZihudWxsPT09dClyZXR1cm4tMTtyZXR1cm4gcGFyc2VJbnQodC5zdWJzdHJpbmcodC5sYXN0SW5kZXhPZihcIi9cIikrMSkpfShpKSx0aGlzLnBhcnNlQ2h1bmsoaS5yZXNwb25zZVRleHQpKSl9LHRoaXMuX2NodW5rRXJyb3I9ZnVuY3Rpb24oZSl7dmFyIHQ9aS5zdGF0dXNUZXh0fHxlO3RoaXMuX3NlbmRFcnJvcihuZXcgRXJyb3IodCkpfX1mdW5jdGlvbiBjKGUpe3ZhciBpLG47KGU9ZXx8e30pLmNodW5rU2l6ZXx8KGUuY2h1bmtTaXplPWIuTG9jYWxDaHVua1NpemUpLGguY2FsbCh0aGlzLGUpO3ZhciBzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBGaWxlUmVhZGVyO3RoaXMuc3RyZWFtPWZ1bmN0aW9uKGUpe3RoaXMuX2lucHV0PWUsbj1lLnNsaWNlfHxlLndlYmtpdFNsaWNlfHxlLm1velNsaWNlLHM/KChpPW5ldyBGaWxlUmVhZGVyKS5vbmxvYWQ9dih0aGlzLl9jaHVua0xvYWRlZCx0aGlzKSxpLm9uZXJyb3I9dih0aGlzLl9jaHVua0Vycm9yLHRoaXMpKTppPW5ldyBGaWxlUmVhZGVyU3luYyx0aGlzLl9uZXh0Q2h1bmsoKX0sdGhpcy5fbmV4dENodW5rPWZ1bmN0aW9uKCl7dGhpcy5fZmluaXNoZWR8fHRoaXMuX2NvbmZpZy5wcmV2aWV3JiYhKHRoaXMuX3Jvd0NvdW50PHRoaXMuX2NvbmZpZy5wcmV2aWV3KXx8dGhpcy5fcmVhZENodW5rKCl9LHRoaXMuX3JlYWRDaHVuaz1mdW5jdGlvbigpe3ZhciBlPXRoaXMuX2lucHV0O2lmKHRoaXMuX2NvbmZpZy5jaHVua1NpemUpe3ZhciB0PU1hdGgubWluKHRoaXMuX3N0YXJ0K3RoaXMuX2NvbmZpZy5jaHVua1NpemUsdGhpcy5faW5wdXQuc2l6ZSk7ZT1uLmNhbGwoZSx0aGlzLl9zdGFydCx0KX12YXIgcj1pLnJlYWRBc1RleHQoZSx0aGlzLl9jb25maWcuZW5jb2RpbmcpO3N8fHRoaXMuX2NodW5rTG9hZGVkKHt0YXJnZXQ6e3Jlc3VsdDpyfX0pfSx0aGlzLl9jaHVua0xvYWRlZD1mdW5jdGlvbihlKXt0aGlzLl9zdGFydCs9dGhpcy5fY29uZmlnLmNodW5rU2l6ZSx0aGlzLl9maW5pc2hlZD0hdGhpcy5fY29uZmlnLmNodW5rU2l6ZXx8dGhpcy5fc3RhcnQ+PXRoaXMuX2lucHV0LnNpemUsdGhpcy5wYXJzZUNodW5rKGUudGFyZ2V0LnJlc3VsdCl9LHRoaXMuX2NodW5rRXJyb3I9ZnVuY3Rpb24oKXt0aGlzLl9zZW5kRXJyb3IoaS5lcnJvcil9fWZ1bmN0aW9uIHAoZSl7dmFyIHI7aC5jYWxsKHRoaXMsZT1lfHx7fSksdGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7cmV0dXJuIHI9ZSx0aGlzLl9uZXh0Q2h1bmsoKX0sdGhpcy5fbmV4dENodW5rPWZ1bmN0aW9uKCl7aWYoIXRoaXMuX2ZpbmlzaGVkKXt2YXIgZSx0PXRoaXMuX2NvbmZpZy5jaHVua1NpemU7cmV0dXJuIHQ/KGU9ci5zdWJzdHJpbmcoMCx0KSxyPXIuc3Vic3RyaW5nKHQpKTooZT1yLHI9XCJcIiksdGhpcy5fZmluaXNoZWQ9IXIsdGhpcy5wYXJzZUNodW5rKGUpfX19ZnVuY3Rpb24gZyhlKXtoLmNhbGwodGhpcyxlPWV8fHt9KTt2YXIgdD1bXSxyPSEwLGk9ITE7dGhpcy5wYXVzZT1mdW5jdGlvbigpe2gucHJvdG90eXBlLnBhdXNlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLl9pbnB1dC5wYXVzZSgpfSx0aGlzLnJlc3VtZT1mdW5jdGlvbigpe2gucHJvdG90eXBlLnJlc3VtZS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5faW5wdXQucmVzdW1lKCl9LHRoaXMuc3RyZWFtPWZ1bmN0aW9uKGUpe3RoaXMuX2lucHV0PWUsdGhpcy5faW5wdXQub24oXCJkYXRhXCIsdGhpcy5fc3RyZWFtRGF0YSksdGhpcy5faW5wdXQub24oXCJlbmRcIix0aGlzLl9zdHJlYW1FbmQpLHRoaXMuX2lucHV0Lm9uKFwiZXJyb3JcIix0aGlzLl9zdHJlYW1FcnJvcil9LHRoaXMuX2NoZWNrSXNGaW5pc2hlZD1mdW5jdGlvbigpe2kmJjE9PT10Lmxlbmd0aCYmKHRoaXMuX2ZpbmlzaGVkPSEwKX0sdGhpcy5fbmV4dENodW5rPWZ1bmN0aW9uKCl7dGhpcy5fY2hlY2tJc0ZpbmlzaGVkKCksdC5sZW5ndGg/dGhpcy5wYXJzZUNodW5rKHQuc2hpZnQoKSk6cj0hMH0sdGhpcy5fc3RyZWFtRGF0YT12KGZ1bmN0aW9uKGUpe3RyeXt0LnB1c2goXCJzdHJpbmdcIj09dHlwZW9mIGU/ZTplLnRvU3RyaW5nKHRoaXMuX2NvbmZpZy5lbmNvZGluZykpLHImJihyPSExLHRoaXMuX2NoZWNrSXNGaW5pc2hlZCgpLHRoaXMucGFyc2VDaHVuayh0LnNoaWZ0KCkpKX1jYXRjaChlKXt0aGlzLl9zdHJlYW1FcnJvcihlKX19LHRoaXMpLHRoaXMuX3N0cmVhbUVycm9yPXYoZnVuY3Rpb24oZSl7dGhpcy5fc3RyZWFtQ2xlYW5VcCgpLHRoaXMuX3NlbmRFcnJvcihlKX0sdGhpcyksdGhpcy5fc3RyZWFtRW5kPXYoZnVuY3Rpb24oKXt0aGlzLl9zdHJlYW1DbGVhblVwKCksaT0hMCx0aGlzLl9zdHJlYW1EYXRhKFwiXCIpfSx0aGlzKSx0aGlzLl9zdHJlYW1DbGVhblVwPXYoZnVuY3Rpb24oKXt0aGlzLl9pbnB1dC5yZW1vdmVMaXN0ZW5lcihcImRhdGFcIix0aGlzLl9zdHJlYW1EYXRhKSx0aGlzLl9pbnB1dC5yZW1vdmVMaXN0ZW5lcihcImVuZFwiLHRoaXMuX3N0cmVhbUVuZCksdGhpcy5faW5wdXQucmVtb3ZlTGlzdGVuZXIoXCJlcnJvclwiLHRoaXMuX3N0cmVhbUVycm9yKX0sdGhpcyl9ZnVuY3Rpb24gcihtKXt2YXIgYSxvLHUsaT1NYXRoLnBvdygyLDUzKSxuPS1pLHM9L15cXHMqLT8oXFxkK1xcLj98XFwuXFxkK3xcXGQrXFwuXFxkKykoW2VFXVstK10/XFxkKyk/XFxzKiQvLGg9L14oKFxcZHs0fS1bMDFdXFxkLVswLTNdXFxkVFswLTJdXFxkOlswLTVdXFxkOlswLTVdXFxkXFwuXFxkKyhbKy1dWzAtMl1cXGQ6WzAtNV1cXGR8WikpfChcXGR7NH0tWzAxXVxcZC1bMC0zXVxcZFRbMC0yXVxcZDpbMC01XVxcZDpbMC01XVxcZChbKy1dWzAtMl1cXGQ6WzAtNV1cXGR8WikpfChcXGR7NH0tWzAxXVxcZC1bMC0zXVxcZFRbMC0yXVxcZDpbMC01XVxcZChbKy1dWzAtMl1cXGQ6WzAtNV1cXGR8WikpKSQvLHQ9dGhpcyxyPTAsZj0wLGQ9ITEsZT0hMSxsPVtdLGM9e2RhdGE6W10sZXJyb3JzOltdLG1ldGE6e319O2lmKEoobS5zdGVwKSl7dmFyIHA9bS5zdGVwO20uc3RlcD1mdW5jdGlvbihlKXtpZihjPWUsXygpKWcoKTtlbHNle2lmKGcoKSwwPT09Yy5kYXRhLmxlbmd0aClyZXR1cm47cis9ZS5kYXRhLmxlbmd0aCxtLnByZXZpZXcmJnI+bS5wcmV2aWV3P28uYWJvcnQoKTooYy5kYXRhPWMuZGF0YVswXSxwKGMsdCkpfX19ZnVuY3Rpb24geShlKXtyZXR1cm5cImdyZWVkeVwiPT09bS5za2lwRW1wdHlMaW5lcz9cIlwiPT09ZS5qb2luKFwiXCIpLnRyaW0oKToxPT09ZS5sZW5ndGgmJjA9PT1lWzBdLmxlbmd0aH1mdW5jdGlvbiBnKCl7cmV0dXJuIGMmJnUmJihrKFwiRGVsaW1pdGVyXCIsXCJVbmRldGVjdGFibGVEZWxpbWl0ZXJcIixcIlVuYWJsZSB0byBhdXRvLWRldGVjdCBkZWxpbWl0aW5nIGNoYXJhY3RlcjsgZGVmYXVsdGVkIHRvICdcIitiLkRlZmF1bHREZWxpbWl0ZXIrXCInXCIpLHU9ITEpLG0uc2tpcEVtcHR5TGluZXMmJihjLmRhdGE9Yy5kYXRhLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4heShlKX0pKSxfKCkmJmZ1bmN0aW9uKCl7aWYoIWMpcmV0dXJuO2Z1bmN0aW9uIGUoZSx0KXtKKG0udHJhbnNmb3JtSGVhZGVyKSYmKGU9bS50cmFuc2Zvcm1IZWFkZXIoZSx0KSksbC5wdXNoKGUpfWlmKEFycmF5LmlzQXJyYXkoYy5kYXRhWzBdKSl7Zm9yKHZhciB0PTA7XygpJiZ0PGMuZGF0YS5sZW5ndGg7dCsrKWMuZGF0YVt0XS5mb3JFYWNoKGUpO2MuZGF0YS5zcGxpY2UoMCwxKX1lbHNlIGMuZGF0YS5mb3JFYWNoKGUpfSgpLGZ1bmN0aW9uKCl7aWYoIWN8fCFtLmhlYWRlciYmIW0uZHluYW1pY1R5cGluZyYmIW0udHJhbnNmb3JtKXJldHVybiBjO2Z1bmN0aW9uIGUoZSx0KXt2YXIgcixpPW0uaGVhZGVyP3t9OltdO2ZvcihyPTA7cjxlLmxlbmd0aDtyKyspe3ZhciBuPXIscz1lW3JdO20uaGVhZGVyJiYobj1yPj1sLmxlbmd0aD9cIl9fcGFyc2VkX2V4dHJhXCI6bFtyXSksbS50cmFuc2Zvcm0mJihzPW0udHJhbnNmb3JtKHMsbikpLHM9dihuLHMpLFwiX19wYXJzZWRfZXh0cmFcIj09PW4/KGlbbl09aVtuXXx8W10saVtuXS5wdXNoKHMpKTppW25dPXN9cmV0dXJuIG0uaGVhZGVyJiYocj5sLmxlbmd0aD9rKFwiRmllbGRNaXNtYXRjaFwiLFwiVG9vTWFueUZpZWxkc1wiLFwiVG9vIG1hbnkgZmllbGRzOiBleHBlY3RlZCBcIitsLmxlbmd0aCtcIiBmaWVsZHMgYnV0IHBhcnNlZCBcIityLGYrdCk6cjxsLmxlbmd0aCYmayhcIkZpZWxkTWlzbWF0Y2hcIixcIlRvb0Zld0ZpZWxkc1wiLFwiVG9vIGZldyBmaWVsZHM6IGV4cGVjdGVkIFwiK2wubGVuZ3RoK1wiIGZpZWxkcyBidXQgcGFyc2VkIFwiK3IsZit0KSksaX12YXIgdD0xOyFjLmRhdGEubGVuZ3RofHxBcnJheS5pc0FycmF5KGMuZGF0YVswXSk/KGMuZGF0YT1jLmRhdGEubWFwKGUpLHQ9Yy5kYXRhLmxlbmd0aCk6Yy5kYXRhPWUoYy5kYXRhLDApO20uaGVhZGVyJiZjLm1ldGEmJihjLm1ldGEuZmllbGRzPWwpO3JldHVybiBmKz10LGN9KCl9ZnVuY3Rpb24gXygpe3JldHVybiBtLmhlYWRlciYmMD09PWwubGVuZ3RofWZ1bmN0aW9uIHYoZSx0KXtyZXR1cm4gcj1lLG0uZHluYW1pY1R5cGluZ0Z1bmN0aW9uJiZ2b2lkIDA9PT1tLmR5bmFtaWNUeXBpbmdbcl0mJihtLmR5bmFtaWNUeXBpbmdbcl09bS5keW5hbWljVHlwaW5nRnVuY3Rpb24ocikpLCEwPT09KG0uZHluYW1pY1R5cGluZ1tyXXx8bS5keW5hbWljVHlwaW5nKT9cInRydWVcIj09PXR8fFwiVFJVRVwiPT09dHx8XCJmYWxzZVwiIT09dCYmXCJGQUxTRVwiIT09dCYmKGZ1bmN0aW9uKGUpe2lmKHMudGVzdChlKSl7dmFyIHQ9cGFyc2VGbG9hdChlKTtpZihuPHQmJnQ8aSlyZXR1cm4hMH1yZXR1cm4hMX0odCk/cGFyc2VGbG9hdCh0KTpoLnRlc3QodCk/bmV3IERhdGUodCk6XCJcIj09PXQ/bnVsbDp0KTp0O3ZhciByfWZ1bmN0aW9uIGsoZSx0LHIsaSl7dmFyIG49e3R5cGU6ZSxjb2RlOnQsbWVzc2FnZTpyfTt2b2lkIDAhPT1pJiYobi5yb3c9aSksYy5lcnJvcnMucHVzaChuKX10aGlzLnBhcnNlPWZ1bmN0aW9uKGUsdCxyKXt2YXIgaT1tLnF1b3RlQ2hhcnx8J1wiJztpZihtLm5ld2xpbmV8fChtLm5ld2xpbmU9ZnVuY3Rpb24oZSx0KXtlPWUuc3Vic3RyaW5nKDAsMTA0ODU3Nik7dmFyIHI9bmV3IFJlZ0V4cChRKHQpK1wiKFteXSo/KVwiK1EodCksXCJnbVwiKSxpPShlPWUucmVwbGFjZShyLFwiXCIpKS5zcGxpdChcIlxcclwiKSxuPWUuc3BsaXQoXCJcXG5cIikscz0xPG4ubGVuZ3RoJiZuWzBdLmxlbmd0aDxpWzBdLmxlbmd0aDtpZigxPT09aS5sZW5ndGh8fHMpcmV0dXJuXCJcXG5cIjtmb3IodmFyIGE9MCxvPTA7bzxpLmxlbmd0aDtvKyspXCJcXG5cIj09PWlbb11bMF0mJmErKztyZXR1cm4gYT49aS5sZW5ndGgvMj9cIlxcclxcblwiOlwiXFxyXCJ9KGUsaSkpLHU9ITEsbS5kZWxpbWl0ZXIpSihtLmRlbGltaXRlcikmJihtLmRlbGltaXRlcj1tLmRlbGltaXRlcihlKSxjLm1ldGEuZGVsaW1pdGVyPW0uZGVsaW1pdGVyKTtlbHNle3ZhciBuPWZ1bmN0aW9uKGUsdCxyLGksbil7dmFyIHMsYSxvLHU7bj1ufHxbXCIsXCIsXCJcXHRcIixcInxcIixcIjtcIixiLlJFQ09SRF9TRVAsYi5VTklUX1NFUF07Zm9yKHZhciBoPTA7aDxuLmxlbmd0aDtoKyspe3ZhciBmPW5baF0sZD0wLGw9MCxjPTA7bz12b2lkIDA7Zm9yKHZhciBwPW5ldyBFKHtjb21tZW50czppLGRlbGltaXRlcjpmLG5ld2xpbmU6dCxwcmV2aWV3OjEwfSkucGFyc2UoZSksZz0wO2c8cC5kYXRhLmxlbmd0aDtnKyspaWYociYmeShwLmRhdGFbZ10pKWMrKztlbHNle3ZhciBfPXAuZGF0YVtnXS5sZW5ndGg7bCs9Xyx2b2lkIDAhPT1vPzA8XyYmKGQrPU1hdGguYWJzKF8tbyksbz1fKTpvPV99MDxwLmRhdGEubGVuZ3RoJiYobC89cC5kYXRhLmxlbmd0aC1jKSwodm9pZCAwPT09YXx8ZDw9YSkmJih2b2lkIDA9PT11fHx1PGwpJiYxLjk5PGwmJihhPWQscz1mLHU9bCl9cmV0dXJue3N1Y2Nlc3NmdWw6ISEobS5kZWxpbWl0ZXI9cyksYmVzdERlbGltaXRlcjpzfX0oZSxtLm5ld2xpbmUsbS5za2lwRW1wdHlMaW5lcyxtLmNvbW1lbnRzLG0uZGVsaW1pdGVyc1RvR3Vlc3MpO24uc3VjY2Vzc2Z1bD9tLmRlbGltaXRlcj1uLmJlc3REZWxpbWl0ZXI6KHU9ITAsbS5kZWxpbWl0ZXI9Yi5EZWZhdWx0RGVsaW1pdGVyKSxjLm1ldGEuZGVsaW1pdGVyPW0uZGVsaW1pdGVyfXZhciBzPXcobSk7cmV0dXJuIG0ucHJldmlldyYmbS5oZWFkZXImJnMucHJldmlldysrLGE9ZSxvPW5ldyBFKHMpLGM9by5wYXJzZShhLHQsciksZygpLGQ/e21ldGE6e3BhdXNlZDohMH19OmN8fHttZXRhOntwYXVzZWQ6ITF9fX0sdGhpcy5wYXVzZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gZH0sdGhpcy5wYXVzZT1mdW5jdGlvbigpe2Q9ITAsby5hYm9ydCgpLGE9SihtLmNodW5rKT9cIlwiOmEuc3Vic3RyaW5nKG8uZ2V0Q2hhckluZGV4KCkpfSx0aGlzLnJlc3VtZT1mdW5jdGlvbigpe3Quc3RyZWFtZXIuX2hhbHRlZD8oZD0hMSx0LnN0cmVhbWVyLnBhcnNlQ2h1bmsoYSwhMCkpOnNldFRpbWVvdXQodC5yZXN1bWUsMyl9LHRoaXMuYWJvcnRlZD1mdW5jdGlvbigpe3JldHVybiBlfSx0aGlzLmFib3J0PWZ1bmN0aW9uKCl7ZT0hMCxvLmFib3J0KCksYy5tZXRhLmFib3J0ZWQ9ITAsSihtLmNvbXBsZXRlKSYmbS5jb21wbGV0ZShjKSxhPVwiXCJ9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIGUucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csXCJcXFxcJCZcIil9ZnVuY3Rpb24gRShqKXt2YXIgeixNPShqPWp8fHt9KS5kZWxpbWl0ZXIsUD1qLm5ld2xpbmUsVT1qLmNvbW1lbnRzLHE9ai5zdGVwLE49ai5wcmV2aWV3LEI9ai5mYXN0TW9kZSxLPXo9dm9pZCAwPT09ai5xdW90ZUNoYXJ8fG51bGw9PT1qLnF1b3RlQ2hhcj8nXCInOmoucXVvdGVDaGFyO2lmKHZvaWQgMCE9PWouZXNjYXBlQ2hhciYmKEs9ai5lc2NhcGVDaGFyKSwoXCJzdHJpbmdcIiE9dHlwZW9mIE18fC0xPGIuQkFEX0RFTElNSVRFUlMuaW5kZXhPZihNKSkmJihNPVwiLFwiKSxVPT09TSl0aHJvdyBuZXcgRXJyb3IoXCJDb21tZW50IGNoYXJhY3RlciBzYW1lIGFzIGRlbGltaXRlclwiKTshMD09PVU/VT1cIiNcIjooXCJzdHJpbmdcIiE9dHlwZW9mIFV8fC0xPGIuQkFEX0RFTElNSVRFUlMuaW5kZXhPZihVKSkmJihVPSExKSxcIlxcblwiIT09UCYmXCJcXHJcIiE9PVAmJlwiXFxyXFxuXCIhPT1QJiYoUD1cIlxcblwiKTt2YXIgVz0wLEg9ITE7dGhpcy5wYXJzZT1mdW5jdGlvbihpLHQscil7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGkpdGhyb3cgbmV3IEVycm9yKFwiSW5wdXQgbXVzdCBiZSBhIHN0cmluZ1wiKTt2YXIgbj1pLmxlbmd0aCxlPU0ubGVuZ3RoLHM9UC5sZW5ndGgsYT1VLmxlbmd0aCxvPUoocSksdT1bXSxoPVtdLGY9W10sZD1XPTA7aWYoIWkpcmV0dXJuIEwoKTtpZihqLmhlYWRlciYmIXQpe3ZhciBsPWkuc3BsaXQoUClbMF0uc3BsaXQoTSksYz1bXSxwPXt9LGc9ITE7Zm9yKHZhciBfIGluIGwpe3ZhciBtPWxbX107SihqLnRyYW5zZm9ybUhlYWRlcikmJihtPWoudHJhbnNmb3JtSGVhZGVyKG0sXykpO3ZhciB5PW0sdj1wW21dfHwwO2ZvcigwPHYmJihnPSEwLHk9bStcIl9cIit2KSxwW21dPXYrMTtjLmluY2x1ZGVzKHkpOyl5PXkrXCJfXCIrdjtjLnB1c2goeSl9aWYoZyl7dmFyIGs9aS5zcGxpdChQKTtrWzBdPWMuam9pbihNKSxpPWsuam9pbihQKX19aWYoQnx8ITEhPT1CJiYtMT09PWkuaW5kZXhPZih6KSl7Zm9yKHZhciBiPWkuc3BsaXQoUCksRT0wO0U8Yi5sZW5ndGg7RSsrKXtpZihmPWJbRV0sVys9Zi5sZW5ndGgsRSE9PWIubGVuZ3RoLTEpVys9UC5sZW5ndGg7ZWxzZSBpZihyKXJldHVybiBMKCk7aWYoIVV8fGYuc3Vic3RyaW5nKDAsYSkhPT1VKXtpZihvKXtpZih1PVtdLEkoZi5zcGxpdChNKSksRigpLEgpcmV0dXJuIEwoKX1lbHNlIEkoZi5zcGxpdChNKSk7aWYoTiYmTjw9RSlyZXR1cm4gdT11LnNsaWNlKDAsTiksTCghMCl9fXJldHVybiBMKCl9Zm9yKHZhciB3PWkuaW5kZXhPZihNLFcpLFI9aS5pbmRleE9mKFAsVyksQz1uZXcgUmVnRXhwKFEoSykrUSh6KSxcImdcIiksUz1pLmluZGV4T2YoeixXKTs7KWlmKGlbV10hPT16KWlmKFUmJjA9PT1mLmxlbmd0aCYmaS5zdWJzdHJpbmcoVyxXK2EpPT09VSl7aWYoLTE9PT1SKXJldHVybiBMKCk7Vz1SK3MsUj1pLmluZGV4T2YoUCxXKSx3PWkuaW5kZXhPZihNLFcpfWVsc2UgaWYoLTEhPT13JiYodzxSfHwtMT09PVIpKWYucHVzaChpLnN1YnN0cmluZyhXLHcpKSxXPXcrZSx3PWkuaW5kZXhPZihNLFcpO2Vsc2V7aWYoLTE9PT1SKWJyZWFrO2lmKGYucHVzaChpLnN1YnN0cmluZyhXLFIpKSxEKFIrcyksbyYmKEYoKSxIKSlyZXR1cm4gTCgpO2lmKE4mJnUubGVuZ3RoPj1OKXJldHVybiBMKCEwKX1lbHNlIGZvcihTPVcsVysrOzspe2lmKC0xPT09KFM9aS5pbmRleE9mKHosUysxKSkpcmV0dXJuIHJ8fGgucHVzaCh7dHlwZTpcIlF1b3Rlc1wiLGNvZGU6XCJNaXNzaW5nUXVvdGVzXCIsbWVzc2FnZTpcIlF1b3RlZCBmaWVsZCB1bnRlcm1pbmF0ZWRcIixyb3c6dS5sZW5ndGgsaW5kZXg6V30pLFQoKTtpZihTPT09bi0xKXJldHVybiBUKGkuc3Vic3RyaW5nKFcsUykucmVwbGFjZShDLHopKTtpZih6IT09S3x8aVtTKzFdIT09Syl7aWYoej09PUt8fDA9PT1TfHxpW1MtMV0hPT1LKXstMSE9PXcmJnc8UysxJiYodz1pLmluZGV4T2YoTSxTKzEpKSwtMSE9PVImJlI8UysxJiYoUj1pLmluZGV4T2YoUCxTKzEpKTt2YXIgTz1BKC0xPT09Uj93Ok1hdGgubWluKHcsUikpO2lmKGkuc3Vic3RyKFMrMStPLGUpPT09TSl7Zi5wdXNoKGkuc3Vic3RyaW5nKFcsUykucmVwbGFjZShDLHopKSxpW1c9UysxK08rZV0hPT16JiYoUz1pLmluZGV4T2YoeixXKSksdz1pLmluZGV4T2YoTSxXKSxSPWkuaW5kZXhPZihQLFcpO2JyZWFrfXZhciB4PUEoUik7aWYoaS5zdWJzdHJpbmcoUysxK3gsUysxK3grcyk9PT1QKXtpZihmLnB1c2goaS5zdWJzdHJpbmcoVyxTKS5yZXBsYWNlKEMseikpLEQoUysxK3grcyksdz1pLmluZGV4T2YoTSxXKSxTPWkuaW5kZXhPZih6LFcpLG8mJihGKCksSCkpcmV0dXJuIEwoKTtpZihOJiZ1Lmxlbmd0aD49TilyZXR1cm4gTCghMCk7YnJlYWt9aC5wdXNoKHt0eXBlOlwiUXVvdGVzXCIsY29kZTpcIkludmFsaWRRdW90ZXNcIixtZXNzYWdlOlwiVHJhaWxpbmcgcXVvdGUgb24gcXVvdGVkIGZpZWxkIGlzIG1hbGZvcm1lZFwiLHJvdzp1Lmxlbmd0aCxpbmRleDpXfSksUysrfX1lbHNlIFMrK31yZXR1cm4gVCgpO2Z1bmN0aW9uIEkoZSl7dS5wdXNoKGUpLGQ9V31mdW5jdGlvbiBBKGUpe3ZhciB0PTA7aWYoLTEhPT1lKXt2YXIgcj1pLnN1YnN0cmluZyhTKzEsZSk7ciYmXCJcIj09PXIudHJpbSgpJiYodD1yLmxlbmd0aCl9cmV0dXJuIHR9ZnVuY3Rpb24gVChlKXtyZXR1cm4gcnx8KHZvaWQgMD09PWUmJihlPWkuc3Vic3RyaW5nKFcpKSxmLnB1c2goZSksVz1uLEkoZiksbyYmRigpKSxMKCl9ZnVuY3Rpb24gRChlKXtXPWUsSShmKSxmPVtdLFI9aS5pbmRleE9mKFAsVyl9ZnVuY3Rpb24gTChlKXtyZXR1cm57ZGF0YTp1LGVycm9yczpoLG1ldGE6e2RlbGltaXRlcjpNLGxpbmVicmVhazpQLGFib3J0ZWQ6SCx0cnVuY2F0ZWQ6ISFlLGN1cnNvcjpkKyh0fHwwKX19fWZ1bmN0aW9uIEYoKXtxKEwoKSksdT1bXSxoPVtdfX0sdGhpcy5hYm9ydD1mdW5jdGlvbigpe0g9ITB9LHRoaXMuZ2V0Q2hhckluZGV4PWZ1bmN0aW9uKCl7cmV0dXJuIFd9fWZ1bmN0aW9uIF8oZSl7dmFyIHQ9ZS5kYXRhLHI9YVt0LndvcmtlcklkXSxpPSExO2lmKHQuZXJyb3Ipci51c2VyRXJyb3IodC5lcnJvcix0LmZpbGUpO2Vsc2UgaWYodC5yZXN1bHRzJiZ0LnJlc3VsdHMuZGF0YSl7dmFyIG49e2Fib3J0OmZ1bmN0aW9uKCl7aT0hMCxtKHQud29ya2VySWQse2RhdGE6W10sZXJyb3JzOltdLG1ldGE6e2Fib3J0ZWQ6ITB9fSl9LHBhdXNlOnkscmVzdW1lOnl9O2lmKEooci51c2VyU3RlcCkpe2Zvcih2YXIgcz0wO3M8dC5yZXN1bHRzLmRhdGEubGVuZ3RoJiYoci51c2VyU3RlcCh7ZGF0YTp0LnJlc3VsdHMuZGF0YVtzXSxlcnJvcnM6dC5yZXN1bHRzLmVycm9ycyxtZXRhOnQucmVzdWx0cy5tZXRhfSxuKSwhaSk7cysrKTtkZWxldGUgdC5yZXN1bHRzfWVsc2UgSihyLnVzZXJDaHVuaykmJihyLnVzZXJDaHVuayh0LnJlc3VsdHMsbix0LmZpbGUpLGRlbGV0ZSB0LnJlc3VsdHMpfXQuZmluaXNoZWQmJiFpJiZtKHQud29ya2VySWQsdC5yZXN1bHRzKX1mdW5jdGlvbiBtKGUsdCl7dmFyIHI9YVtlXTtKKHIudXNlckNvbXBsZXRlKSYmci51c2VyQ29tcGxldGUodCksci50ZXJtaW5hdGUoKSxkZWxldGUgYVtlXX1mdW5jdGlvbiB5KCl7dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkLlwiKX1mdW5jdGlvbiB3KGUpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxudWxsPT09ZSlyZXR1cm4gZTt2YXIgdD1BcnJheS5pc0FycmF5KGUpP1tdOnt9O2Zvcih2YXIgciBpbiBlKXRbcl09dyhlW3JdKTtyZXR1cm4gdH1mdW5jdGlvbiB2KGUsdCl7cmV0dXJuIGZ1bmN0aW9uKCl7ZS5hcHBseSh0LGFyZ3VtZW50cyl9fWZ1bmN0aW9uIEooZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZX1yZXR1cm4gbyYmKGYub25tZXNzYWdlPWZ1bmN0aW9uKGUpe3ZhciB0PWUuZGF0YTt2b2lkIDA9PT1iLldPUktFUl9JRCYmdCYmKGIuV09SS0VSX0lEPXQud29ya2VySWQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0LmlucHV0KWYucG9zdE1lc3NhZ2Uoe3dvcmtlcklkOmIuV09SS0VSX0lELHJlc3VsdHM6Yi5wYXJzZSh0LmlucHV0LHQuY29uZmlnKSxmaW5pc2hlZDohMH0pO2Vsc2UgaWYoZi5GaWxlJiZ0LmlucHV0IGluc3RhbmNlb2YgRmlsZXx8dC5pbnB1dCBpbnN0YW5jZW9mIE9iamVjdCl7dmFyIHI9Yi5wYXJzZSh0LmlucHV0LHQuY29uZmlnKTtyJiZmLnBvc3RNZXNzYWdlKHt3b3JrZXJJZDpiLldPUktFUl9JRCxyZXN1bHRzOnIsZmluaXNoZWQ6ITB9KX19KSwobC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShoLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yPWwsKGMucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoaC5wcm90b3R5cGUpKS5jb25zdHJ1Y3Rvcj1jLChwLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHAucHJvdG90eXBlKSkuY29uc3RydWN0b3I9cCwoZy5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShoLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yPWcsYn0pOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVE9ETyBmaXggcXVlc3Rpb24gZGF0YSBmb3IgbW9kdWxlXHJcblxyXG5jb25zdCBncmlkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JpZFdyYXBwZXJcIik7XHJcblxyXG4vLyBjaGFuZ2UgdGhpcyB0byB1c2UgcXVlc3Rpb24gb2JqZWN0XHJcbi8vIGdyaWQgY291bnQgYmFzZWQgb24gcXVlc3Rpb25PYmoga2V5cyBsZW5ndGhzLCAyIGRpbWVuc2lvbnMsIGNhdGVnb3J5IGxlbmd0aCArIHF1ZXN0aW9uIGNvdW50IGxlbmd0aCArIHRvcGljXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVRdWVzdGlvbkdyaWQocXVlc3Rpb25PYmplY3QpIHtcclxuICBjb25zdCBjYXRlZ29yeUNvdW50ID0gT2JqZWN0LmtleXMocXVlc3Rpb25PYmplY3QpLmxlbmd0aDtcclxuXHJcbiAgY29uc3QgcXVlc3Rpb25Db3VudCA9IFtdO1xyXG5cclxuICAvLyBzZXQgZ3JpZCBjb2x1bW4gY291bnQgZXF1YWwgdG8gbnVtYmVyIG9mIHF1ZXN0aW9uIGNhdGVnb3JpZXNcclxuICBjb25zdCBncmlkV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JpZFdyYXBwZXJcIik7XHJcblxyXG4gIGdyaWRXcmFwcGVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgZ3JpZFdyYXBwZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtjYXRlZ29yeUNvdW50fSwxZnIpYDtcclxuXHJcbiAgLy8gZ2VuZXJhdGUgdG9waWMgdGlsZXNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVnb3J5Q291bnQ7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgY2F0ZWdvcnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGlsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY2F0ZWdvcnlEaXYuaWQgPSBgY2F0ZWdvcnkke2l9YDtcclxuICAgIGNhdGVnb3J5RGl2LmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeVwiKTtcclxuICAgIHRpbGVEaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9uVG9waWNcIik7XHJcbiAgICB0aWxlRGl2LnRleHRDb250ZW50ID0gcXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdLnRvcGljO1xyXG4gICAgY2F0ZWdvcnlEaXYuYXBwZW5kKHRpbGVEaXYpO1xyXG5cclxuICAgIGdyaWRBcmVhLmFwcGVuZChjYXRlZ29yeURpdik7XHJcbiAgfVxyXG5cclxuICAvLyBnZW5lcmF0ZSBxdWVzdGlvbiBjb3VudHMgZm9yIGVhY2ggY2F0ZWdvcnlcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVnb3J5Q291bnQ7IGkgKz0gMSkge1xyXG4gICAgLy8gLTEgZnJvbSBsZW5ndGggdG8gYWNjb3VudCBmb3IgJ3RvcGljJyBrZXlcclxuICAgIHF1ZXN0aW9uQ291bnQucHVzaChPYmplY3Qua2V5cyhxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF0pLmxlbmd0aCAtIDEpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocXVlc3Rpb25Db3VudCk7XHJcbiAgfVxyXG5cclxuICAvLyBnZW5lcmF0ZSBxdWVzdGlvbiB0aWxlcyB3aXRoIHZhbHVlc1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnlDb3VudDsgaSArPSAxKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8IHF1ZXN0aW9uQ291bnRbaV0gKyAxOyBqICs9IDEpIHtcclxuICAgICAgY29uc3QgY2F0ZWdvcnlEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2F0ZWdvcnkke2l9YCk7XHJcbiAgICAgIGNvbnN0IHRpbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0aWxlRGl2LmNsYXNzTGlzdC5hZGQoXCJxdWVzdGlvblwiKTtcclxuICAgICAgdGlsZURpdi50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgcXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdW2BxdWVzdGlvbiR7an1gXS52YWx1ZTtcclxuXHJcbiAgICAgIC8vIGFwcGx5IHN0b2NrIHZhbHVlcyBvZiAxMDAgaW5jcmVtZW50IHBlciByb3cgaWYgYSB2YWx1ZVxyXG4gICAgICAvLyBpcyBub3QgYSBzdXBwbGllZCBmcm9tIHF1ZXN0aW9uT2JqXHJcbiAgICAgIGlmIChxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF1bYHF1ZXN0aW9uJHtqfWBdLnZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aWxlRGl2LnRleHRDb250ZW50ID0gYCR7aSArIDF9MDBgO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpICogaik7XHJcbiAgICAgIH1cclxuICAgICAgY2F0ZWdvcnlEaXYuYXBwZW5kKHRpbGVEaXYpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gcmVtb3ZlIHRoaXMgbGF0ZXJcclxuZXhwb3J0IGNvbnN0IHRlc3QgPSA3O1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYmxvby1hbnN3ZXIucG5nXCI6IFwiLi9zcmMvaW1nL2Jsb28tYW5zd2VyLnBuZ1wiLFxuXHRcIi4vYmxvby5wbmdcIjogXCIuL3NyYy9pbWcvYmxvby5wbmdcIixcblx0XCIuL2Jvcm9taXItZnVuZXJhbC1mdWxsLnBuZ1wiOiBcIi4vc3JjL2ltZy9ib3JvbWlyLWZ1bmVyYWwtZnVsbC5wbmdcIixcblx0XCIuL2Jvcm9taXItZnVuZXJhbC5wbmdcIjogXCIuL3NyYy9pbWcvYm9yb21pci1mdW5lcmFsLnBuZ1wiLFxuXHRcIi4vY2FpdGx5bi12aS1mdWxsLnBuZ1wiOiBcIi4vc3JjL2ltZy9jYWl0bHluLXZpLWZ1bGwucG5nXCIsXG5cdFwiLi9jYWl0bHluLXZpLnBuZ1wiOiBcIi4vc3JjL2ltZy9jYWl0bHluLXZpLnBuZ1wiLFxuXHRcIi4vY29tcGFuaW9uLWN1YmUtZnVsbC5wbmdcIjogXCIuL3NyYy9pbWcvY29tcGFuaW9uLWN1YmUtZnVsbC5wbmdcIixcblx0XCIuL2NvbXBhbmlvbi1jdWJlLnBuZ1wiOiBcIi4vc3JjL2ltZy9jb21wYW5pb24tY3ViZS5wbmdcIixcblx0XCIuL2ppbngtZmxhcmUtZnVsbC5wbmdcIjogXCIuL3NyYy9pbWcvamlueC1mbGFyZS1mdWxsLnBuZ1wiLFxuXHRcIi4vamlueC1mbGFyZS5wbmdcIjogXCIuL3NyYy9pbWcvamlueC1mbGFyZS5wbmdcIixcblx0XCIuL3BsdXMtc3F1YXJlLnN2Z1wiOiBcIi4vc3JjL2ltZy9wbHVzLXNxdWFyZS5zdmdcIixcblx0XCIuL3RvaHJ1LnBuZ1wiOiBcIi4vc3JjL2ltZy90b2hydS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1nIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJFwiOyIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVBsYXllcihuYW1lLCBudW1iZXIsIHNjb3JlKSB7XHJcbiAgLy8gYXNzaWduIHRvIG9iaiByYXRoZXIgdGhhbiB0aGlzLCBzaW5jZSB0aGlzID09PSB1bmRlZmluZWQgaW4gbW9kdWxlc1xyXG4gIGNvbnN0IG9iaiA9IHt9O1xyXG4gIG9iai5kaXNwbGF5UGxheWVyTmFtZSA9IGZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJOYW1lKHBsYXllck51bWJlcikge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYCNwbGF5ZXIke3BsYXllck51bWJlcn1gLFxyXG4gICAgKS50ZXh0Q29udGVudCA9IGAke3RoaXMubmFtZX06YDtcclxuICB9O1xyXG4gIG9iai5jaGFuZ2VQbGF5ZXJOYW1lID0gZnVuY3Rpb24gY2hhbmdlUGxheWVyTmFtZSgpIHtcclxuICAgIGNvbnN0IHRlbXBOYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgdGhpcy5uYW1lID0gcHJvbXB0KFwiUGxlYXNlIGVudGVyIHlvdXIgbmFtZVwiLCBcIkpvc2ggR3Vuc29uXCIpO1xyXG4gICAgLy8gcHJldmVudCBwbGF5ZXIgbmFtZSBmcm9tIGRpc2FwcGVhcmluZyBieSB1c2luZyBwcmV2aW91cyBuYW1lXHJcbiAgICBpZiAodGhpcy5uYW1lID09PSBudWxsKSB0aGlzLm5hbWUgPSB0ZW1wTmFtZTtcclxuICAgIHRoaXMuZGlzcGxheVBsYXllck5hbWUodGhpcy5udW1iZXIpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcyk7XHJcbiAgfTtcclxuICBvYmouaW5jcmVtZW50UGxheWVyU2NvcmUgPSBmdW5jdGlvbiBpbmNyZW1lbnRQbGF5ZXJTY29yZShzY29yZVRvQWRkKSB7XHJcbiAgICB0aGlzLnNjb3JlICs9IHNjb3JlVG9BZGQ7XHJcbiAgfTtcclxuICBvYmouZGlzcGxheVBsYXllclNjb3JlID0gZnVuY3Rpb24gZGlzcGxheVBsYXllclNjb3JlKHBsYXllck51bWJlcikge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllciR7cGxheWVyTnVtYmVyfVNjb3JlYCkudGV4dENvbnRlbnQgPVxyXG4gICAgICB0aGlzLnNjb3JlO1xyXG4gIH07XHJcbiAgb2JqLm5hbWUgPSBuYW1lO1xyXG4gIG9iai5zY29yZSA9IHNjb3JlO1xyXG4gIG9iai5udW1iZXIgPSBudW1iZXI7XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGxheWVyc09iaihwbGF5ZXJDb3VudCkge1xyXG4gIGNvbnN0IHN0b2NrTmFtZXMgPSBbXCJDaGFzZVwiLCBcIkV0aGFuXCIsIFwiU3RhblwiLCBcIlRheWxvclwiXTtcclxuICBjb25zdCBwbGF5ZXJzID0ge307XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwbGF5ZXJDb3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgcGxheWVyc1tpXSA9IGdlbmVyYXRlUGxheWVyKHN0b2NrTmFtZXNbaSAtIDFdLCBpLCAwKTtcclxuICB9XHJcbiAgcmV0dXJuIHBsYXllcnM7XHJcbn1cclxuLy8gY29uc3QgcGxheWVyMSA9IGdlbmVyYXRlUGxheWVyKFwiQ2hhc2VcIiwgMSwgMCk7XHJcbi8vIGNvbnN0IHBsYXllcjIgPSBnZW5lcmF0ZVBsYXllcihcIkV0aGFuXCIsIDIsIDApO1xyXG4vLyBjb25zdCBwbGF5ZXIzID0gZ2VuZXJhdGVQbGF5ZXIoXCJTdGFuXCIsIDMsIDApO1xyXG4vLyBjb25zdCBwbGF5ZXI0ID0gZ2VuZXJhdGVQbGF5ZXIoXCJUYXlsb3JcIiwgNCwgMCk7XHJcblxyXG5leHBvcnQgY29uc3QgcGxheWVyTmFtZXMgPSBbXCJ0ZXN0XCJdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxQbGF5ZXJTZXR1cChcclxuICBwbGF5ZXIxLFxyXG4gIHBsYXllcjIsXHJcbiAgcGxheWVyMyxcclxuICBwbGF5ZXI0LFxyXG4gIHBsYXllck9iamVjdCxcclxuKSB7XHJcbiAgY29uc3QgcGxheWVyQ291bnQgPSBPYmplY3Qua2V5cyhwbGF5ZXJPYmplY3QpLmxlbmd0aDtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJDb3VudDsgaSArPSAxKSB7XHJcbiAgICAvLyBwbGF5ZXJzIGluZGV4IGF0IDFcclxuICAgIC8vIGRpc3BsYXkgZGVmYXVsdCB1c2VybmFtZXMgYW5kIGluaXRhbCBzY29yZXNcclxuICAgIHBsYXllck9iamVjdFtpICsgMV0uZGlzcGxheVBsYXllck5hbWUoaSArIDEpO1xyXG4gICAgcGxheWVyT2JqZWN0W2kgKyAxXS5kaXNwbGF5UGxheWVyU2NvcmUoaSArIDEpO1xyXG4gIH1cclxuXHJcbiAgLy8gLy8gZGlzcGxheSBkZWZhdWx0IHVzZXJuYW1lc1xyXG4gIC8vIHBsYXllcjEuZGlzcGxheVBsYXllck5hbWUoMSk7XHJcbiAgLy8gcGxheWVyMi5kaXNwbGF5UGxheWVyTmFtZSgyKTtcclxuICAvLyBwbGF5ZXIzLmRpc3BsYXlQbGF5ZXJOYW1lKDMpO1xyXG4gIC8vIHBsYXllcjQuZGlzcGxheVBsYXllck5hbWUoNCk7XHJcbiAgLy8gZGlzcGxheSBpbnRpYWwgcGxheWVyIHNjb3Jlc1xyXG4gIC8vIHBsYXllcjEuZGlzcGxheVBsYXllclNjb3JlKDEpO1xyXG4gIC8vIHBsYXllcjIuZGlzcGxheVBsYXllclNjb3JlKDIpO1xyXG4gIC8vIHBsYXllcjMuZGlzcGxheVBsYXllclNjb3JlKDMpO1xyXG4gIC8vIHBsYXllcjQuZGlzcGxheVBsYXllclNjb3JlKDQpO1xyXG5cclxuICAvLyBwbGF5ZXIgbmFtZXMgY2FuIGJlIGNsaWNrZWQgdG8gb3BlbiB0aGUgY2hhbmdlIGRpYWxvZ3VlXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXIxXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwbGF5ZXIxLmNoYW5nZVBsYXllck5hbWUoKTtcclxuICB9KTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcjJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHBsYXllcjIuY2hhbmdlUGxheWVyTmFtZSgpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyM1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcGxheWVyMy5jaGFuZ2VQbGF5ZXJOYW1lKCk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXI0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwbGF5ZXI0LmNoYW5nZVBsYXllck5hbWUoKTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgUGFwYSBmcm9tIFwicGFwYXBhcnNlXCI7XHJcbmltcG9ydCAqIGFzIGJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XHJcbmltcG9ydCAqIGFzIHBsYXllcnMgZnJvbSBcIi4vcGxheWVyc1wiO1xyXG5cclxubGV0IHF1ZXN0aW9uRGF0YSA9IFtdO1xyXG5cclxuLy8gY29udmVydCB0aGlzIHRvIGEgZnVuY3Rpb24gaW4gcGxheWVycyBtb2R1bGVcclxuZXhwb3J0IGNvbnN0IHBsYXllck9iaiA9IHBsYXllcnMuZ2VuZXJhdGVQbGF5ZXJzT2JqKDQpO1xyXG5cclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUXVlc3Rpb25PYmplY3RGcm9tQ1NWKCkge1xyXG4gIGNvbnN0IHF1ZXN0aW9uT2JqID0ge307XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlc3Rpb25EYXRhLmxlbmd0aCAvIDI7IGkgKz0gMSkge1xyXG4gICAgcXVlc3Rpb25PYmpbYGNhdGVnb3J5JHtpfWBdID0ge1xyXG4gICAgICB0b3BpYzogcXVlc3Rpb25EYXRhWzIgKiBpXVswXSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gc3RhcnQgZnJvbSBpbmRleCAxIHRvIGFjY291bnQgZm9yIGNzdiB0b3BpYyBmb3JtYXR0aW5nXHJcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8IHF1ZXN0aW9uRGF0YVswXS5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhxdWVzdGlvbkRhdGFbMiAqIGldLmxlbmd0aCk7XHJcbiAgICAgIHF1ZXN0aW9uT2JqW2BjYXRlZ29yeSR7aX1gXVtgcXVlc3Rpb24ke2p9YF0gPSB7XHJcbiAgICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uRGF0YVsyICogaV1bal0sXHJcbiAgICAgICAgYW5zd2VyOiBxdWVzdGlvbkRhdGFbMiAqIGkgKyAxXVtqXSxcclxuICAgICAgfTtcclxuICAgICAgLy8gcXVlc3Rpb25PYmpbaV1bYHF1ZXN0aW9uJHtqfWBdID0gcXVlc3Rpb25EYXRhWzIgKiBpXVtqXTtcclxuICAgICAgLy8gcXVlc3Rpb25PYmpbaV1bYGFuc3dlciR7an1gXSA9IHF1ZXN0aW9uRGF0YVsyICogaSArIDFdW2pdO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcXVlc3Rpb25PYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRRdWVzdGlvbk1vZGFsRXZlbnRMaXN0ZW5lcihxdWVzdGlvbk9iamVjdCkge1xyXG4gIC8vIGNvbnN0IHF1ZXN0aW9uVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0aW9uXCIpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHF1ZXN0aW9uVGlsZXMpO1xyXG5cclxuICBjb25zdCBjYXRlZ29yeUNvdW50ID0gT2JqZWN0LmtleXMocXVlc3Rpb25PYmplY3QpLmxlbmd0aDtcclxuICBjb25zdCBxdWVzdGlvbkNvdW50ID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yeUNvdW50OyBpICs9IDEpIHtcclxuICAgIC8vIC0xIGZyb20gbGVuZ3RoIHRvIGFjY291bnQgZm9yICd0b3BpYycga2V5XHJcbiAgICBxdWVzdGlvbkNvdW50LnB1c2goT2JqZWN0LmtleXMocXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdKS5sZW5ndGggLSAxKTtcclxuXHJcbiAgICBjb25zdCBjYXRlZ29yeVF1ZXN0aW9uVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBgI2NhdGVnb3J5JHtpfSAucXVlc3Rpb25gLFxyXG4gICAgKTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcXVlc3Rpb25Db3VudFtpXTsgaiArPSAxKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNhdGVnb3J5UXVlc3Rpb25UaWxlcyk7XHJcbiAgICAgIGNhdGVnb3J5UXVlc3Rpb25UaWxlc1tqXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChjYXRlZ29yeVF1ZXN0aW9uVGlsZXNbal0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFrZW5cIikpIHJldHVybjtcclxuICAgICAgICBtb2RhbC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgcXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdW2BxdWVzdGlvbiR7aiArIDF9YF0ucXVlc3Rpb247XHJcblxyXG4gICAgICAgIGNvbnN0IGFuc3dlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYW5zd2VyQnV0dG9uLnRleHRDb250ZW50ID0gXCJBbnN3ZXJcIjtcclxuXHJcbiAgICAgICAgYW5zd2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoYW5zd2VyQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImJ1dHRvbkRpc2FibGVkXCIpKSByZXR1cm47XHJcbiAgICAgICAgICBhbnN3ZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbkRpc2FibGVkXCIpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHBsYXllck5hbWVzID0gW1xyXG4gICAgICAgICAgICBwbGF5ZXJPYmpbMV0ubmFtZSxcclxuICAgICAgICAgICAgcGxheWVyT2JqWzJdLm5hbWUsXHJcbiAgICAgICAgICAgIHBsYXllck9ialszXS5uYW1lLFxyXG4gICAgICAgICAgICBwbGF5ZXJPYmpbNF0ubmFtZSxcclxuICAgICAgICAgIF07XHJcbiAgICAgICAgICBjb25zdCBwbGF5ZXJDb3VudCA9IHBsYXllck5hbWVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgKz1cclxuICAgICAgICAgICAgcXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdW2BxdWVzdGlvbiR7aiArIDF9YF0uYW5zd2VyO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInNjb3JlQnV0dG9uc1wiKTtcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHBsYXllckNvdW50OyBrICs9IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFNjb3JlID0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgY2F0ZWdvcnlRdWVzdGlvblRpbGVzW2pdLnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2NvcmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBzY29yZUJ1dHRvbi50ZXh0Q29udGVudCA9IHBsYXllck5hbWVzW2tdO1xyXG4gICAgICAgICAgICBzY29yZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChzY29yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJidXR0b25EaXNhYmxlZFwiKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIHBsYXllck9ialtrICsgMV0uaW5jcmVtZW50UGxheWVyU2NvcmUoY3VycmVudFNjb3JlKTtcclxuICAgICAgICAgICAgICBwbGF5ZXJPYmpbayArIDFdLmRpc3BsYXlQbGF5ZXJTY29yZShrICsgMSk7XHJcbiAgICAgICAgICAgICAgc2NvcmVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbkRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGl2LmFwcGVuZChzY29yZUJ1dHRvbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtb2RhbC5hcHBlbmQoZGl2KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBtb2RhbC5hcHBlbmQoYW5zd2VyQnV0dG9uKTtcclxuXHJcbiAgICAgICAgY2F0ZWdvcnlRdWVzdGlvblRpbGVzW2pdLmNsYXNzTGlzdC5hZGQoXCJ0YWtlblwiKTtcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEpzb25Ub09iamVjdChqc29uKSB7XHJcbiAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZShqc29uKTtcclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVlc3Rpb25EYXRhKGNzdkZpbGUpIHtcclxuICAvLyBcIi4uL3NyYy9xdWVzdGlvbnMvVHJpdmlhIC0gUXVlc3Rpb25zLmNzdlwiIGxvY2FsIGZpbGVuYW1lXHJcbiAgUGFwYS5wYXJzZShjc3ZGaWxlLmZpbGVzWzBdLCB7XHJcbiAgICBkb3dubG9hZDogdHJ1ZSxcclxuICAgIGNvbXBsZXRlKHJlc3VsdHMpIHtcclxuICAgICAgcXVlc3Rpb25EYXRhID0gcmVzdWx0cy5kYXRhO1xyXG4gICAgICBjb25zdCBxdWVzdGlvbk9iaiA9IGdlbmVyYXRlUXVlc3Rpb25PYmplY3RGcm9tQ1NWKCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHF1ZXN0aW9uRGF0YSk7XHJcbiAgICAgIGJvYXJkLmNyZWF0ZVF1ZXN0aW9uR3JpZChxdWVzdGlvbk9iaik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHF1ZXN0aW9uT2JqKTtcclxuICAgICAgYWRkUXVlc3Rpb25Nb2RhbEV2ZW50TGlzdGVuZXIocXVlc3Rpb25PYmopO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHRzLmRhdGEpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBQYXBhIGZyb20gXCJwYXBhcGFyc2VcIjtcclxuaW1wb3J0ICogYXMgcXVlc3Rpb24gZnJvbSBcIi4vcXVlc3Rpb25Nb2RhbFwiO1xyXG5pbXBvcnQgKiBhcyBwbGF5ZXJzIGZyb20gXCIuL3BsYXllcnNcIjtcclxuaW1wb3J0ICogYXMgYm9hcmQgZnJvbSBcIi4vYm9hcmRcIjtcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU2NDI3MDA5L2hvdy10by1yZXR1cm4tcGFwYS1wYXJzZWQtY3N2LXZpYS1wcm9taXNlLWFzeW5jLWF3YWl0XHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYyOTA1OTMzL2l0ZXJhdGluZy1vdmVyLXJlc3VsdHMtb2YtcGFwYS1wYXJzZS1vYmplY3RcclxuLy8gcmV2aWV3IHRoZXNlIGZvciBwZXJzdWluZyBhd2FpdC9wcm9taXNlcyB3aXRoIHBhcGFwYXJzZVxyXG4vLyBUT0RPIHJlbW92ZSB0ZXh0IGluc3RlYWQgb2Ygc2V0dGluZyBpdCB0byBib2R5IGNvbG9yXHJcblxyXG4vLyBUT0RPIHJlbW92ZSB0aGUgdmFyaW91cyBjb25zb2xlLmxvZyBkZWJ1Z2dpbmcgbGluZXNcclxuXHJcbi8vIFRPRE8gY2hhbmdlIGZpbGUgZnJvbSBzb3VyY2UgZG9jdW1lbnQgdG8gdXNlciB1cGxvYWRlZCB2aWEgYnV0dG9uXHJcbi8vIGV4cGFuZCBwbGF5ZXIgY3JlYXRpb24gdG8gc3VwcG9ydCBhbnkgbnVtYmVyIG9mIHBsYXllcnMgLSBwbGF5ZXJzZXR1cCBjYW4gYmUgZmVkIGEgcGxheWVyIG9iamVjdCBhbmQgbG9vcGVkXHJcbi8vIGNoYW5nZSBwbGF5ZXIgbmFtZSBldmVudCBsaXN0ZW5lciB0byBiZSBhIGxvb3AgYmFzZWQgb24gcGxhZXlyIGNvdW50XHJcbi8vIHBsYXllcnMgbW9kdWxlIHJlbW92ZSBwcm9tcHQgZm9yIGJldHRlciBjdXN0b20gc29sdXRpb25cclxuLy8gb25lIG9wdGlvbiBmb3IgaW1hZ2VzLCBpZiAocXVlc3Rpb24gZGF0YSA9PT0gaW1nIGZpbGUgbmFtZSkgc2V0IGltZ1xyXG4vLyBleHBhbmQgc3RvY2sgbmFtZXNcclxuLy8gb25seSBhbGxvdyB1cGxvYWQgaWYgKGZpbGVJbnB1dCkgYnV0dG9uICFkaXNhYmxlZFxyXG4vLyBncm91cCBjc3MgdG9nZXRoZXIgYmV0dGVyXHJcbi8vIGZpZ3VyZSBvdXQgaG93IHRvIGNvbGxlY3QgcG9pbnQgdmFsdWUgZnJvbSBjc3YgaW5wdXRcclxuLy8gc3RvcCBnYXRoZXJpbmcgcXVlc3Rpb24wLCBhbHJlYWR5IGNvdmVyZWQgaW4gdG9waWNcclxuLy8gY2xlYW51cCBpbmRleFxyXG4vLyBjb25zaWRlciBhc3luYyBmb3IgLmpzb25cclxuLy8gY2hhbmdlIGJvYXJkIGxvZ2ljIHRvIGFjY291bnQgZm9yIGFzeW1tZXRyaWMgY2F0ZWdvcmllcyAtIGxvb3AgYWxsIGNhdGVnb3JpZXMgdG8gZmluZCB1bmlxdWUgcXVlc3Rpb24gY291bnRzXHJcbi8vIGRpc2FibGUgb3ZlcmxheSBjbG9zaW5nIHVudGlsIGF0IGxlYXN0IGFuc3dlciBidXR0b24gY2xpY2tlZFxyXG4vLyBmaXggYm9hcmQgYnVpbGQgb24gbm9uLXNxdWFyZSBib2FyZHNcclxuLy8gY29uc2lkZXIgZXhwb3J0aW5nIGNhdGVnb3J5L3F1ZXN0aW9uIGNvdW50cyBmcm9tIGJvYXJkXHJcbi8vIG1pZ3JhdGUgdG8gY2xhc3NsaXN0IHZzIGN1c3RvbSBmdW5jdGlvblxyXG4vLyBjaGFuZ2UgcGxheWVyIG5hbWUgYnkgc29tZXRoaW5nIG90aGVyIHRoYW4gcHJvbXB0KClcclxuLy8gbWV0aG9kIHRvIGVkaXQgc2NvcmVzXHJcbi8vIGxvb2sgaW50byBzdGFuZGFyZGl6aW5nIHRvcGljIGRpdiBoZWlnaHRcclxuXHJcbi8vIEluaXRpYWxpemUgdGhlIHBsYXllciBvYmplY3RcclxuY29uc3QgeyBwbGF5ZXJPYmogfSA9IHF1ZXN0aW9uO1xyXG5jb25zdCBwbGF5ZXJDb3VudCA9IE9iamVjdC5rZXlzKHBsYXllck9iaikubGVuZ3RoO1xyXG5jb25zb2xlLmxvZyhwbGF5ZXJPYmopO1xyXG5cclxucGxheWVycy5pbml0aWFsUGxheWVyU2V0dXAoXHJcbiAgLy8gbWFrZSB2YXJpYWJsZSBudW1iZXIgb2YgcGxheWVycyBoZXJlXHJcbiAgcGxheWVyT2JqWzFdLFxyXG4gIHBsYXllck9ialsyXSxcclxuICBwbGF5ZXJPYmpbM10sXHJcbiAgcGxheWVyT2JqWzRdLFxyXG4gIHBsYXllck9iaixcclxuKTtcclxuXHJcbmNvbnN0IGZpbGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZUlucHV0XCIpO1xyXG5jb25zdCB1cGxvYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwbG9hZFwiKTtcclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xyXG5jb25zdCB1cGxvYWRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxvYWRXcmFwcGVyXCIpO1xyXG5cclxuY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxucmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IGZpbGVEYXRhID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAvLyBjb25zb2xlLmxvZyhmaWxlRGF0YSk7XHJcbiAgY29uc3QganNvbk9iaiA9IEpTT04ucGFyc2UoZmlsZURhdGEpO1xyXG4gIC8vIGNvbnNvbGUubG9nKGpzb25PYmopO1xyXG4gIGJvYXJkLmNyZWF0ZVF1ZXN0aW9uR3JpZChqc29uT2JqKTtcclxuICBxdWVzdGlvbi5hZGRRdWVzdGlvbk1vZGFsRXZlbnRMaXN0ZW5lcihqc29uT2JqKTtcclxufSk7XHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlUmVhZGVyL3JlYWRBc1RleHRcclxuXHJcbmNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dhbWVCdXR0b25cIik7XHJcbm5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICB1cGxvYWRXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbn0pO1xyXG5cclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuLy8gb3ZlcmxheSBwcm92aWRlcyBhIHNlbWktdHJhbnNwYXJlbnQgYmx1ciBiZWhpbmQgdGhlIG1vZGFsIHRvIGhlbHAgZm9jdXMgYXR0ZW50aW9uIG9uIG1vZGFsXHJcbi8vIHdoZW4gdGhlIG92ZXJsYXkgYmFja2dyb3VuZCBpcyBjbGlja2VkIGFueXdoZXJlLCB0aGUgbW9kYWwgcmVnYWlucyB0aGUgaGlkZGVuIGNsYXNzIGFuZCBkaXNhcHBlYXJzXHJcbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxufSk7XHJcblxyXG51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAvLyBnZXRRdWVzdGlvbkRhdGEuY3N2UGFyc2UoZmlsZUlucHV0KTtcclxuICAvLyBnZXRRdWVzdGlvbkRhdGEuY3N2UGFyc2UoKTtcclxuICBjb25zb2xlLmxvZyhwbGF5ZXJPYmopO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcGxheWVyQ291bnQgKyAxOyBpICs9IDEpIHtcclxuICAgIHBsYXllck9ialtpXS5zY29yZSA9IDA7XHJcbiAgICBwbGF5ZXJPYmpbaV0uZGlzcGxheVBsYXllclNjb3JlKGksIDApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5wdXRGaWxlID0gZmlsZUlucHV0LmZpbGVzWzBdO1xyXG4gIGNvbnN0IGZpbGVUeXBlID0gaW5wdXRGaWxlLnR5cGUubWF0Y2goL2Nzdnxqc29uLyk7XHJcblxyXG4gIC8vIG1hdGNoIHJldHVybnMgbWF0Y2hlZCBncm91cCBpbiBhbiBhcnJheVxyXG4gIGlmIChmaWxlVHlwZVswXSA9PT0gXCJjc3ZcIikgcXVlc3Rpb24uZ2V0UXVlc3Rpb25EYXRhKGZpbGVJbnB1dCk7XHJcbiAgaWYgKGZpbGVUeXBlWzBdID09PSBcImpzb25cIikge1xyXG4gICAgLy8gYm9hcmQuY3JlYXRlUXVlc3Rpb25HcmlkKDQyLCBqc29uT2JqKTtcclxuICAgIC8vIHF1ZXN0aW9uLmFkZFF1ZXN0aW9uTW9kYWxFdmVudExpc3RlbmVyKGpzb25PYmopO1xyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoaW5wdXRGaWxlKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xyXG4gIGNvbnN0IGltYWdlcyA9IHt9O1xyXG4gIC8vIGVuY2xvc2luZyBicmFja2V0IGFyb3VuZCByZXR1cm4gdG8gYXZvaWQgYW1iaWd1b3VzIGFzc2lnbm1lbnQgaW4gYSByZXR1cm5cclxuICByLmtleXMoKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgIC8vIHJlbW92ZSBsZWFkaW5nIC4vIGZyb20gZmlsZSBuYW1lc1xyXG4gICAgY29uc3QgdGVtcCA9IGtleS5yZXBsYWNlKFwiLi9cIiwgXCJcIik7XHJcbiAgICAvLyBvciBvcHRpb24gZml4IGNhc2Ugd2hlcmUgbGFzdEluZGV4T2YgPT09IC0xXHJcbiAgICAvLyByZW1vdmUgdHJhaWxpbmcgZmlsZSBleHRlbnNpb25zIGZyb20gZmlsZSBuYW1lcyAoZS5nLiAucG5nKVxyXG4gICAgY29uc3QgdGVtcDIgPSB0ZW1wLnN1YnN0cigwLCB0ZW1wLmxhc3RJbmRleE9mKFwiLlwiKSkgfHwgdGVtcDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRlbXAyKTtcclxuICAgIGltYWdlc1t0ZW1wMl0gPSByKGtleSk7XHJcbiAgfSk7XHJcbiAgLy8gYWx0ZXJuYXRlIG1hcCBtZXRob2RcclxuICAvLyByLmtleXMoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgLy8gICBpbWFnZXNbaXRlbS5yZXBsYWNlKFwiLi9cIiwgXCJcIildID0gcihpdGVtKTtcclxuICAvLyB9KTtcclxuICByZXR1cm4gaW1hZ2VzO1xyXG59XHJcblxyXG5jb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KFwiLi9pbWdcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xyXG4vLyBjb25zb2xlLmxvZyhpbWFnZXMpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=