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

#newGameButton,
#randomNamesIcon {
  height: 30px;
  aspect-ratio: 1/1;
  cursor: pointer;
  /* https://codepen.io/sosuke/pen/Pjoqqp */
}

.green {
  filter: invert(21%) sepia(96%) saturate(3706%) hue-rotate(102deg)
    brightness(96%) contrast(106%);
}

#title h1 {
  font-size: 4rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

#uploadWrapper {
  margin-top: 1rem;
  /* border: 1px solid black; */
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

#inputWrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.5rem;
  border: 2px solid black;
  border-radius: 8px;
  background-color: rgb(75, 118, 199, 0.8);
  font-size: 20px;
}

#upload {
  padding: 1rem;
  font-size: 24px;
  font-family: "Times New Roman", Times, serif;
  background-color: rgb(75, 118, 199, 0.8);
  border: 2px solid black;
  border-radius: 8px;
}
#upload:hover {
  background-color: rgba(172, 255, 47, 0.568);
  cursor: pointer;
}

#playerScores {
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  flex-wrap: wrap;
  font-size: 30px;
}
.player {
  display: flex;
  align-items: center;
  gap: 2px;
  background-color: rgba(199, 38, 113, 0.384);
  border: 2px solid black;
  border-radius: 8px;
  padding: 0 0.5rem;
}
.player p:first-child {
  cursor: pointer;
}

#playerScores p {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

#game {
  margin-top: 2rem;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,yCAAyC;AAC3C;;AAEA;EACE;kCACgC;AAClC;;AAEA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,6BAA6B;EAC7B,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,wCAAwC;EACxC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,4CAA4C;EAC5C,wCAAwC;EACxC,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,2CAA2C;EAC3C,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,SAAS;EACT,eAAe;EACf,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,2CAA2C;EAC3C,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;;EAEE,wCAAwC;EACxC,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;EACvB,2EAA2E;EAC3E,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,uBAAuB;EACvB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,wBAAwB;EACxB,eAAe;EACf,QAAQ;EACR,SAAS;EACT,UAAU;EACV,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,QAAQ;EACR,OAAO;EACP,iBAAiB;EACjB,oCAAoC;EACpC,0BAA0B;AAC5B;AACA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,yBAAyB;AAC3B;;AAEA;gCACgC;AAChC;EACE,yBAAyB;EACzB,YAAY;AACd","sourcesContent":["body {\r\n  background-color: gray;\r\n  text-align: center;\r\n  overflow: auto;\r\n}\r\n\r\n#iconWrap {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: end;\r\n}\r\n\r\n#newGameButton,\r\n#randomNamesIcon {\r\n  height: 30px;\r\n  aspect-ratio: 1/1;\r\n  cursor: pointer;\r\n  /* https://codepen.io/sosuke/pen/Pjoqqp */\r\n}\r\n\r\n.green {\r\n  filter: invert(21%) sepia(96%) saturate(3706%) hue-rotate(102deg)\r\n    brightness(96%) contrast(106%);\r\n}\r\n\r\n#title h1 {\r\n  font-size: 4rem;\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n#uploadWrapper {\r\n  margin-top: 1rem;\r\n  /* border: 1px solid black; */\r\n  padding: 1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n#inputWrap {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0.5rem;\r\n  gap: 0.5rem;\r\n  border: 2px solid black;\r\n  border-radius: 8px;\r\n  background-color: rgb(75, 118, 199, 0.8);\r\n  font-size: 20px;\r\n}\r\n\r\n#upload {\r\n  padding: 1rem;\r\n  font-size: 24px;\r\n  font-family: \"Times New Roman\", Times, serif;\r\n  background-color: rgb(75, 118, 199, 0.8);\r\n  border: 2px solid black;\r\n  border-radius: 8px;\r\n}\r\n#upload:hover {\r\n  background-color: rgba(172, 255, 47, 0.568);\r\n  cursor: pointer;\r\n}\r\n\r\n#playerScores {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  gap: 1rem;\r\n  flex-wrap: wrap;\r\n  font-size: 30px;\r\n}\r\n.player {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 2px;\r\n  background-color: rgba(199, 38, 113, 0.384);\r\n  border: 2px solid black;\r\n  border-radius: 8px;\r\n  padding: 0 0.5rem;\r\n}\r\n.player p:first-child {\r\n  cursor: pointer;\r\n}\r\n\r\n#playerScores p {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n#game {\r\n  margin-top: 2rem;\r\n}\r\n\r\n#gridWrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n  gap: 10px;\r\n  height: 50vh;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n.category {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.question,\r\n.questionTopic {\r\n  background-color: rgb(75, 118, 199, 0.8);\r\n  border: 2px solid black;\r\n  border-radius: 8px;\r\n  aspect-ratio: 2/1;\r\n  width: min(15vw, 200px);\r\n  /* text-align appears to be needed for top left grid square...no idea why */\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.taken {\r\n  background-color: gray;\r\n  color: gray;\r\n  border-color: gray;\r\n}\r\n\r\n.modal {\r\n  width: 60%;\r\n  background-color: white;\r\n  border: 1px black solid;\r\n  border-radius: 4px;\r\n  padding: 2rem;\r\n  /* text-align: center; */\r\n  position: fixed;\r\n  top: 15%;\r\n  left: 20%;\r\n  z-index: 2;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  font-size: 24px;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  /* width: 100%; */\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(3px);\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\nimg {\r\n  height: 30vh;\r\n}\r\n.scoreButtons {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.modal button {\r\n  background-color: #f0f0f0;\r\n  border: 1px solid gray;\r\n  border-radius: 8px;\r\n  padding: 3px 6px;\r\n}\r\n.modal button:hover {\r\n  background-color: #dddcdc;\r\n}\r\n\r\n/* duplicated selector to override (.scoreButtons button) \r\nselector above, 0-1-1 vs 0-2-0 */\r\n.buttonDisabled.buttonDisabled {\r\n  background-color: #dddcdc;\r\n  opacity: 0.5;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players */ "./src/players.js");
// TODO fix question data for module


const gridArea = document.querySelector("#gridWrapper");

// change this to use question object
// grid count based on questionObj keys lengths, 2 dimensions, category length + question count length + topic
function createQuestionGrid(questionObject) {
  // console.log(players.getRandomIntInRange(2,5))
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
	"./dice-outline.svg": "./src/img/dice-outline.svg",
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

function addQuestionModalEventListener(questionObject, playerObj) {
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
            const currentScore = parseInt(
              categoryQuestionTiles[j].textContent,
              10,
            );

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

/***/ "./src/img/dice-outline.svg":
/*!**********************************!*\
  !*** ./src/img/dice-outline.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5997dfbff24644bd2a46.svg";

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
// change player name event listener to be a loop based on player count
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
// consider resetting player names on new game
// file input styling
// move initial player setup inside game start button
// move playerObj gen inside upload button
// have changed player names carryover on a new game
// think about flexwrap equal numbers on lines

// Initialize the player object
let playerObj;

// console.log(playerObj);
// console.log(players.getPlayerCountInput());

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
  _questionModal__WEBPACK_IMPORTED_MODULE_2__.addQuestionModalEventListener(jsonObj, playerObj);
});
// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsText

let randomNamesBool = false;

function toggleRandomNames() {
  if (!randomNamesBool) {
    randomNamesBool = true;
    return;
  }
  if (randomNamesBool) {
    randomNamesBool = false;
  }
}
const randomNamesIcon = document.getElementById("randomNamesIcon");
randomNamesIcon.addEventListener("click", () => {
  randomNamesIcon.classList.toggle("green");
  toggleRandomNames();
  // console.log(randomNamesBool);
});

const newGameButton = document.getElementById("newGameButton");
newGameButton.addEventListener("click", () => {
  // show/hide new game elements
  if (uploadWrapper.style.display === "none") {
    uploadWrapper.style.display = "flex";
  } else {
    uploadWrapper.style.display = "none";
  }
});

const overlay = document.querySelector(".overlay");
// overlay provides a semi-transparent blur behind the modal to help focus attention on modal
// when the overlay background is clicked anywhere, the modal regains the hidden class and disappears
overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

upload.addEventListener("click", () => {
  playerObj = _players__WEBPACK_IMPORTED_MODULE_3__.generatePlayersObj(
    _players__WEBPACK_IMPORTED_MODULE_3__.getPlayerCountInput(),
    randomNamesBool,
  );
  const playerCount = Object.keys(playerObj).length;

  const playerScores = document.getElementById("playerScores");
  // clear html elements for player scores to avoid duplicates on starting new game
  playerScores.innerHTML = "";
  for (let i = 1; i < playerCount + 1; i += 1) {
    playerScores.append(_players__WEBPACK_IMPORTED_MODULE_3__.createPlayerUI(i));
  }

  // console.log(playerObj);
  _players__WEBPACK_IMPORTED_MODULE_3__.initialPlayerSetup(playerObj);

  for (let i = 1; i < playerCount + 1; i += 1) {
    playerObj[i].score = 0;
    playerObj[i].displayPlayerScore(i, 0);
  }

  const inputFile = fileInput.files[0];
  const fileType = inputFile.type.match(/csv|json/);

  // match returns matched group in an array
  if (fileType[0] === "csv") _questionModal__WEBPACK_IMPORTED_MODULE_2__.getQuestionData(fileInput, playerObj);
  if (fileType[0] === "json") {
    // board.createQuestionGrid(42, jsonObj);
    // question.addQuestionModalEventListener(jsonObj);
    reader.readAsText(inputFile);
  }

  uploadWrapper.style.display = "none";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxL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QTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLEVBQUUsc0RBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzREFBd0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQzVIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeE8xQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNRO0FBQ2U7QUFDUDtBQUNKO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBd0I7QUFDMUIsRUFBRSx5RUFBc0M7QUFDeEMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsY0FBYyx3REFBMEI7QUFDeEMsSUFBSSx5REFBMkI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDLHdCQUF3QixvREFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBMEI7QUFDNUI7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMkRBQXdCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZEQUFxRDtBQUM5RSIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9wYXBhcGFyc2UvcGFwYXBhcnNlLm1pbi5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL2ltZy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9wbGF5ZXJzLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL3F1ZXN0aW9uTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvc3RvY2tOYW1lcy5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuI2ljb25XcmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuXHJcbiNuZXdHYW1lQnV0dG9uLFxyXG4jcmFuZG9tTmFtZXNJY29uIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8qIGh0dHBzOi8vY29kZXBlbi5pby9zb3N1a2UvcGVuL1Bqb3FxcCAqL1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDIxJSkgc2VwaWEoOTYlKSBzYXR1cmF0ZSgzNzA2JSkgaHVlLXJvdGF0ZSgxMDJkZWcpXHJcbiAgICBicmlnaHRuZXNzKDk2JSkgY29udHJhc3QoMTA2JSk7XHJcbn1cclxuXHJcbiN0aXRsZSBoMSB7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuI3VwbG9hZFdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5cclxuI2lucHV0V3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDExOCwgMTk5LCAwLjgpO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuI3VwbG9hZCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDExOCwgMTk5LCAwLjgpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG4jdXBsb2FkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MiwgMjU1LCA0NywgMC41NjgpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3BsYXllclNjb3JlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBnYXA6IDFyZW07XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4ucGxheWVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDM4LCAxMTMsIDAuMzg0KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMCAwLjVyZW07XHJcbn1cclxuLnBsYXllciBwOmZpcnN0LWNoaWxkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNwbGF5ZXJTY29yZXMgcCB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4jZ2FtZSB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuI2dyaWRXcmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jYXRlZ29yeSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLnF1ZXN0aW9uLFxyXG4ucXVlc3Rpb25Ub3BpYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCAxMTgsIDE5OSwgMC44KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYXNwZWN0LXJhdGlvOiAyLzE7XHJcbiAgd2lkdGg6IG1pbigxNXZ3LCAyMDBweCk7XHJcbiAgLyogdGV4dC1hbGlnbiBhcHBlYXJzIHRvIGJlIG5lZWRlZCBmb3IgdG9wIGxlZnQgZ3JpZCBzcXVhcmUuLi5ubyBpZGVhIHdoeSAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWtlbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBjb2xvcjogZ3JheTtcclxuICBib3JkZXItY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTUlO1xyXG4gIGxlZnQ6IDIwJTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbn1cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbn1cclxuLnNjb3JlQnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5tb2RhbCBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogM3B4IDZweDtcclxufVxyXG4ubW9kYWwgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkY2RjO1xyXG59XHJcblxyXG4vKiBkdXBsaWNhdGVkIHNlbGVjdG9yIHRvIG92ZXJyaWRlICguc2NvcmVCdXR0b25zIGJ1dHRvbikgXHJcbnNlbGVjdG9yIGFib3ZlLCAwLTEtMSB2cyAwLTItMCAqL1xyXG4uYnV0dG9uRGlzYWJsZWQuYnV0dG9uRGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRjZGM7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFO2tDQUNnQztBQUNsQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw0Q0FBNEM7RUFDNUMsd0NBQXdDO0VBQ3hDLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDJDQUEyQztFQUMzQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixTQUFTO0VBQ1QsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLDJDQUEyQztFQUMzQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFNBQVM7RUFDVCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBOztFQUVFLHdDQUF3QztFQUN4Qyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsMkVBQTJFO0VBQzNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULFFBQVE7RUFDUixPQUFPO0VBQ1AsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQywwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO2dDQUNnQztBQUNoQztFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNpY29uV3JhcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3R2FtZUJ1dHRvbixcXHJcXG4jcmFuZG9tTmFtZXNJY29uIHtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgLyogaHR0cHM6Ly9jb2RlcGVuLmlvL3Nvc3VrZS9wZW4vUGpvcXFwICovXFxyXFxufVxcclxcblxcclxcbi5ncmVlbiB7XFxyXFxuICBmaWx0ZXI6IGludmVydCgyMSUpIHNlcGlhKDk2JSkgc2F0dXJhdGUoMzcwNiUpIGh1ZS1yb3RhdGUoMTAyZGVnKVxcclxcbiAgICBicmlnaHRuZXNzKDk2JSkgY29udHJhc3QoMTA2JSk7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZSBoMSB7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3VwbG9hZFdyYXBwZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0V3JhcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDExOCwgMTk5LCAwLjgpO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdXBsb2FkIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIFRpbWVzLCBzZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgMTE4LCAxOTksIDAuOCk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuI3VwbG9hZDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MiwgMjU1LCA0NywgMC41NjgpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyU2NvcmVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuLnBsYXllciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDM4LCAxMTMsIDAuMzg0KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxufVxcclxcbi5wbGF5ZXIgcDpmaXJzdC1jaGlsZCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXJTY29yZXMgcCB7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWUge1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWRXcmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnF1ZXN0aW9uLFxcclxcbi5xdWVzdGlvblRvcGljIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgMTE4LCAxOTksIDAuOCk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMi8xO1xcclxcbiAgd2lkdGg6IG1pbigxNXZ3LCAyMDBweCk7XFxyXFxuICAvKiB0ZXh0LWFsaWduIGFwcGVhcnMgdG8gYmUgbmVlZGVkIGZvciB0b3AgbGVmdCBncmlkIHNxdWFyZS4uLm5vIGlkZWEgd2h5ICovXFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFrZW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxNSU7XFxyXFxuICBsZWZ0OiAyMCU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcclxcbn1cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICBoZWlnaHQ6IDMwdmg7XFxyXFxufVxcclxcbi5zY29yZUJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDNweCA2cHg7XFxyXFxufVxcclxcbi5tb2RhbCBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGNkYztcXHJcXG59XFxyXFxuXFxyXFxuLyogZHVwbGljYXRlZCBzZWxlY3RvciB0byBvdmVycmlkZSAoLnNjb3JlQnV0dG9ucyBidXR0b24pIFxcclxcbnNlbGVjdG9yIGFib3ZlLCAwLTEtMSB2cyAwLTItMCAqL1xcclxcbi5idXR0b25EaXNhYmxlZC5idXR0b25EaXNhYmxlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkY2RjO1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qIEBsaWNlbnNlXG5QYXBhIFBhcnNlXG52NS40LjFcbmh0dHBzOi8vZ2l0aHViLmNvbS9taG9sdC9QYXBhUGFyc2VcbkxpY2Vuc2U6IE1JVFxuKi9cbiFmdW5jdGlvbihlLHQpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9dCgpOmUuUGFwYT10KCl9KHRoaXMsZnVuY3Rpb24gcygpe1widXNlIHN0cmljdFwiO3ZhciBmPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dm9pZCAwIT09Zj9mOnt9O3ZhciBuPSFmLmRvY3VtZW50JiYhIWYucG9zdE1lc3NhZ2Usbz1mLklTX1BBUEFfV09SS0VSfHwhMSxhPXt9LHU9MCxiPXtwYXJzZTpmdW5jdGlvbihlLHQpe3ZhciByPSh0PXR8fHt9KS5keW5hbWljVHlwaW5nfHwhMTtKKHIpJiYodC5keW5hbWljVHlwaW5nRnVuY3Rpb249cixyPXt9KTtpZih0LmR5bmFtaWNUeXBpbmc9cix0LnRyYW5zZm9ybT0hIUoodC50cmFuc2Zvcm0pJiZ0LnRyYW5zZm9ybSx0LndvcmtlciYmYi5XT1JLRVJTX1NVUFBPUlRFRCl7dmFyIGk9ZnVuY3Rpb24oKXtpZighYi5XT1JLRVJTX1NVUFBPUlRFRClyZXR1cm4hMTt2YXIgZT0ocj1mLlVSTHx8Zi53ZWJraXRVUkx8fG51bGwsaT1zLnRvU3RyaW5nKCksYi5CTE9CX1VSTHx8KGIuQkxPQl9VUkw9ci5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW1widmFyIGdsb2JhbCA9IChmdW5jdGlvbigpIHsgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gc2VsZjsgfSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHdpbmRvdzsgfSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGdsb2JhbDsgfSByZXR1cm4ge307IH0pKCk7IGdsb2JhbC5JU19QQVBBX1dPUktFUj10cnVlOyBcIixcIihcIixpLFwiKSgpO1wiXSx7dHlwZTpcInRleHQvamF2YXNjcmlwdFwifSkpKSksdD1uZXcgZi5Xb3JrZXIoZSk7dmFyIHIsaTtyZXR1cm4gdC5vbm1lc3NhZ2U9Xyx0LmlkPXUrKyxhW3QuaWRdPXR9KCk7cmV0dXJuIGkudXNlclN0ZXA9dC5zdGVwLGkudXNlckNodW5rPXQuY2h1bmssaS51c2VyQ29tcGxldGU9dC5jb21wbGV0ZSxpLnVzZXJFcnJvcj10LmVycm9yLHQuc3RlcD1KKHQuc3RlcCksdC5jaHVuaz1KKHQuY2h1bmspLHQuY29tcGxldGU9Sih0LmNvbXBsZXRlKSx0LmVycm9yPUoodC5lcnJvciksZGVsZXRlIHQud29ya2VyLHZvaWQgaS5wb3N0TWVzc2FnZSh7aW5wdXQ6ZSxjb25maWc6dCx3b3JrZXJJZDppLmlkfSl9dmFyIG49bnVsbDtiLk5PREVfU1RSRUFNX0lOUFVULFwic3RyaW5nXCI9PXR5cGVvZiBlPyhlPWZ1bmN0aW9uKGUpe2lmKDY1Mjc5PT09ZS5jaGFyQ29kZUF0KDApKXJldHVybiBlLnNsaWNlKDEpO3JldHVybiBlfShlKSxuPXQuZG93bmxvYWQ/bmV3IGwodCk6bmV3IHAodCkpOiEwPT09ZS5yZWFkYWJsZSYmSihlLnJlYWQpJiZKKGUub24pP249bmV3IGcodCk6KGYuRmlsZSYmZSBpbnN0YW5jZW9mIEZpbGV8fGUgaW5zdGFuY2VvZiBPYmplY3QpJiYobj1uZXcgYyh0KSk7cmV0dXJuIG4uc3RyZWFtKGUpfSx1bnBhcnNlOmZ1bmN0aW9uKGUsdCl7dmFyIG49ITEsXz0hMCxtPVwiLFwiLHk9XCJcXHJcXG5cIixzPSdcIicsYT1zK3Mscj0hMSxpPW51bGwsbz0hMTshZnVuY3Rpb24oKXtpZihcIm9iamVjdFwiIT10eXBlb2YgdClyZXR1cm47XCJzdHJpbmdcIiE9dHlwZW9mIHQuZGVsaW1pdGVyfHxiLkJBRF9ERUxJTUlURVJTLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4tMSE9PXQuZGVsaW1pdGVyLmluZGV4T2YoZSl9KS5sZW5ndGh8fChtPXQuZGVsaW1pdGVyKTsoXCJib29sZWFuXCI9PXR5cGVvZiB0LnF1b3Rlc3x8XCJmdW5jdGlvblwiPT10eXBlb2YgdC5xdW90ZXN8fEFycmF5LmlzQXJyYXkodC5xdW90ZXMpKSYmKG49dC5xdW90ZXMpO1wiYm9vbGVhblwiIT10eXBlb2YgdC5za2lwRW1wdHlMaW5lcyYmXCJzdHJpbmdcIiE9dHlwZW9mIHQuc2tpcEVtcHR5TGluZXN8fChyPXQuc2tpcEVtcHR5TGluZXMpO1wic3RyaW5nXCI9PXR5cGVvZiB0Lm5ld2xpbmUmJih5PXQubmV3bGluZSk7XCJzdHJpbmdcIj09dHlwZW9mIHQucXVvdGVDaGFyJiYocz10LnF1b3RlQ2hhcik7XCJib29sZWFuXCI9PXR5cGVvZiB0LmhlYWRlciYmKF89dC5oZWFkZXIpO2lmKEFycmF5LmlzQXJyYXkodC5jb2x1bW5zKSl7aWYoMD09PXQuY29sdW1ucy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiT3B0aW9uIGNvbHVtbnMgaXMgZW1wdHlcIik7aT10LmNvbHVtbnN9dm9pZCAwIT09dC5lc2NhcGVDaGFyJiYoYT10LmVzY2FwZUNoYXIrcyk7KFwiYm9vbGVhblwiPT10eXBlb2YgdC5lc2NhcGVGb3JtdWxhZXx8dC5lc2NhcGVGb3JtdWxhZSBpbnN0YW5jZW9mIFJlZ0V4cCkmJihvPXQuZXNjYXBlRm9ybXVsYWUgaW5zdGFuY2VvZiBSZWdFeHA/dC5lc2NhcGVGb3JtdWxhZTovXls9K1xcLUBcXHRcXHJdLiokLyl9KCk7dmFyIHU9bmV3IFJlZ0V4cChRKHMpLFwiZ1wiKTtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9SlNPTi5wYXJzZShlKSk7aWYoQXJyYXkuaXNBcnJheShlKSl7aWYoIWUubGVuZ3RofHxBcnJheS5pc0FycmF5KGVbMF0pKXJldHVybiBoKG51bGwsZSxyKTtpZihcIm9iamVjdFwiPT10eXBlb2YgZVswXSlyZXR1cm4gaChpfHxPYmplY3Qua2V5cyhlWzBdKSxlLHIpfWVsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGUpcmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUuZGF0YSYmKGUuZGF0YT1KU09OLnBhcnNlKGUuZGF0YSkpLEFycmF5LmlzQXJyYXkoZS5kYXRhKSYmKGUuZmllbGRzfHwoZS5maWVsZHM9ZS5tZXRhJiZlLm1ldGEuZmllbGRzfHxpKSxlLmZpZWxkc3x8KGUuZmllbGRzPUFycmF5LmlzQXJyYXkoZS5kYXRhWzBdKT9lLmZpZWxkczpcIm9iamVjdFwiPT10eXBlb2YgZS5kYXRhWzBdP09iamVjdC5rZXlzKGUuZGF0YVswXSk6W10pLEFycmF5LmlzQXJyYXkoZS5kYXRhWzBdKXx8XCJvYmplY3RcIj09dHlwZW9mIGUuZGF0YVswXXx8KGUuZGF0YT1bZS5kYXRhXSkpLGgoZS5maWVsZHN8fFtdLGUuZGF0YXx8W10scik7dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHNlcmlhbGl6ZSB1bnJlY29nbml6ZWQgaW5wdXRcIik7ZnVuY3Rpb24gaChlLHQscil7dmFyIGk9XCJcIjtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9SlNPTi5wYXJzZShlKSksXCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PUpTT04ucGFyc2UodCkpO3ZhciBuPUFycmF5LmlzQXJyYXkoZSkmJjA8ZS5sZW5ndGgscz0hQXJyYXkuaXNBcnJheSh0WzBdKTtpZihuJiZfKXtmb3IodmFyIGE9MDthPGUubGVuZ3RoO2ErKykwPGEmJihpKz1tKSxpKz12KGVbYV0sYSk7MDx0Lmxlbmd0aCYmKGkrPXkpfWZvcih2YXIgbz0wO288dC5sZW5ndGg7bysrKXt2YXIgdT1uP2UubGVuZ3RoOnRbb10ubGVuZ3RoLGg9ITEsZj1uPzA9PT1PYmplY3Qua2V5cyh0W29dKS5sZW5ndGg6MD09PXRbb10ubGVuZ3RoO2lmKHImJiFuJiYoaD1cImdyZWVkeVwiPT09cj9cIlwiPT09dFtvXS5qb2luKFwiXCIpLnRyaW0oKToxPT09dFtvXS5sZW5ndGgmJjA9PT10W29dWzBdLmxlbmd0aCksXCJncmVlZHlcIj09PXImJm4pe2Zvcih2YXIgZD1bXSxsPTA7bDx1O2wrKyl7dmFyIGM9cz9lW2xdOmw7ZC5wdXNoKHRbb11bY10pfWg9XCJcIj09PWQuam9pbihcIlwiKS50cmltKCl9aWYoIWgpe2Zvcih2YXIgcD0wO3A8dTtwKyspezA8cCYmIWYmJihpKz1tKTt2YXIgZz1uJiZzP2VbcF06cDtpKz12KHRbb11bZ10scCl9bzx0Lmxlbmd0aC0xJiYoIXJ8fDA8dSYmIWYpJiYoaSs9eSl9fXJldHVybiBpfWZ1bmN0aW9uIHYoZSx0KXtpZihudWxsPT1lKXJldHVyblwiXCI7aWYoZS5jb25zdHJ1Y3Rvcj09PURhdGUpcmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpLnNsaWNlKDEsMjUpO3ZhciByPSExO28mJlwic3RyaW5nXCI9PXR5cGVvZiBlJiZvLnRlc3QoZSkmJihlPVwiJ1wiK2Uscj0hMCk7dmFyIGk9ZS50b1N0cmluZygpLnJlcGxhY2UodSxhKTtyZXR1cm4ocj1yfHwhMD09PW58fFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJm4oZSx0KXx8QXJyYXkuaXNBcnJheShuKSYmblt0XXx8ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKylpZigtMTxlLmluZGV4T2YodFtyXSkpcmV0dXJuITA7cmV0dXJuITF9KGksYi5CQURfREVMSU1JVEVSUyl8fC0xPGkuaW5kZXhPZihtKXx8XCIgXCI9PT1pLmNoYXJBdCgwKXx8XCIgXCI9PT1pLmNoYXJBdChpLmxlbmd0aC0xKSk/cytpK3M6aX19fTtpZihiLlJFQ09SRF9TRVA9U3RyaW5nLmZyb21DaGFyQ29kZSgzMCksYi5VTklUX1NFUD1TdHJpbmcuZnJvbUNoYXJDb2RlKDMxKSxiLkJZVEVfT1JERVJfTUFSSz1cIlxcdWZlZmZcIixiLkJBRF9ERUxJTUlURVJTPVtcIlxcclwiLFwiXFxuXCIsJ1wiJyxiLkJZVEVfT1JERVJfTUFSS10sYi5XT1JLRVJTX1NVUFBPUlRFRD0hbiYmISFmLldvcmtlcixiLk5PREVfU1RSRUFNX0lOUFVUPTEsYi5Mb2NhbENodW5rU2l6ZT0xMDQ4NTc2MCxiLlJlbW90ZUNodW5rU2l6ZT01MjQyODgwLGIuRGVmYXVsdERlbGltaXRlcj1cIixcIixiLlBhcnNlcj1FLGIuUGFyc2VySGFuZGxlPXIsYi5OZXR3b3JrU3RyZWFtZXI9bCxiLkZpbGVTdHJlYW1lcj1jLGIuU3RyaW5nU3RyZWFtZXI9cCxiLlJlYWRhYmxlU3RyZWFtU3RyZWFtZXI9ZyxmLmpRdWVyeSl7dmFyIGQ9Zi5qUXVlcnk7ZC5mbi5wYXJzZT1mdW5jdGlvbihvKXt2YXIgcj1vLmNvbmZpZ3x8e30sdT1bXTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe2lmKCEoXCJJTlBVVFwiPT09ZCh0aGlzKS5wcm9wKFwidGFnTmFtZVwiKS50b1VwcGVyQ2FzZSgpJiZcImZpbGVcIj09PWQodGhpcykuYXR0cihcInR5cGVcIikudG9Mb3dlckNhc2UoKSYmZi5GaWxlUmVhZGVyKXx8IXRoaXMuZmlsZXN8fDA9PT10aGlzLmZpbGVzLmxlbmd0aClyZXR1cm4hMDtmb3IodmFyIHQ9MDt0PHRoaXMuZmlsZXMubGVuZ3RoO3QrKyl1LnB1c2goe2ZpbGU6dGhpcy5maWxlc1t0XSxpbnB1dEVsZW06dGhpcyxpbnN0YW5jZUNvbmZpZzpkLmV4dGVuZCh7fSxyKX0pfSksZSgpLHRoaXM7ZnVuY3Rpb24gZSgpe2lmKDAhPT11Lmxlbmd0aCl7dmFyIGUsdCxyLGksbj11WzBdO2lmKEooby5iZWZvcmUpKXt2YXIgcz1vLmJlZm9yZShuLmZpbGUsbi5pbnB1dEVsZW0pO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBzKXtpZihcImFib3J0XCI9PT1zLmFjdGlvbilyZXR1cm4gZT1cIkFib3J0RXJyb3JcIix0PW4uZmlsZSxyPW4uaW5wdXRFbGVtLGk9cy5yZWFzb24sdm9pZChKKG8uZXJyb3IpJiZvLmVycm9yKHtuYW1lOmV9LHQscixpKSk7aWYoXCJza2lwXCI9PT1zLmFjdGlvbilyZXR1cm4gdm9pZCBoKCk7XCJvYmplY3RcIj09dHlwZW9mIHMuY29uZmlnJiYobi5pbnN0YW5jZUNvbmZpZz1kLmV4dGVuZChuLmluc3RhbmNlQ29uZmlnLHMuY29uZmlnKSl9ZWxzZSBpZihcInNraXBcIj09PXMpcmV0dXJuIHZvaWQgaCgpfXZhciBhPW4uaW5zdGFuY2VDb25maWcuY29tcGxldGU7bi5pbnN0YW5jZUNvbmZpZy5jb21wbGV0ZT1mdW5jdGlvbihlKXtKKGEpJiZhKGUsbi5maWxlLG4uaW5wdXRFbGVtKSxoKCl9LGIucGFyc2Uobi5maWxlLG4uaW5zdGFuY2VDb25maWcpfWVsc2UgSihvLmNvbXBsZXRlKSYmby5jb21wbGV0ZSgpfWZ1bmN0aW9uIGgoKXt1LnNwbGljZSgwLDEpLGUoKX19fWZ1bmN0aW9uIGgoZSl7dGhpcy5faGFuZGxlPW51bGwsdGhpcy5fZmluaXNoZWQ9ITEsdGhpcy5fY29tcGxldGVkPSExLHRoaXMuX2hhbHRlZD0hMSx0aGlzLl9pbnB1dD1udWxsLHRoaXMuX2Jhc2VJbmRleD0wLHRoaXMuX3BhcnRpYWxMaW5lPVwiXCIsdGhpcy5fcm93Q291bnQ9MCx0aGlzLl9zdGFydD0wLHRoaXMuX25leHRDaHVuaz1udWxsLHRoaXMuaXNGaXJzdENodW5rPSEwLHRoaXMuX2NvbXBsZXRlUmVzdWx0cz17ZGF0YTpbXSxlcnJvcnM6W10sbWV0YTp7fX0sZnVuY3Rpb24oZSl7dmFyIHQ9dyhlKTt0LmNodW5rU2l6ZT1wYXJzZUludCh0LmNodW5rU2l6ZSksZS5zdGVwfHxlLmNodW5rfHwodC5jaHVua1NpemU9bnVsbCk7dGhpcy5faGFuZGxlPW5ldyByKHQpLCh0aGlzLl9oYW5kbGUuc3RyZWFtZXI9dGhpcykuX2NvbmZpZz10fS5jYWxsKHRoaXMsZSksdGhpcy5wYXJzZUNodW5rPWZ1bmN0aW9uKGUsdCl7aWYodGhpcy5pc0ZpcnN0Q2h1bmsmJkoodGhpcy5fY29uZmlnLmJlZm9yZUZpcnN0Q2h1bmspKXt2YXIgcj10aGlzLl9jb25maWcuYmVmb3JlRmlyc3RDaHVuayhlKTt2b2lkIDAhPT1yJiYoZT1yKX10aGlzLmlzRmlyc3RDaHVuaz0hMSx0aGlzLl9oYWx0ZWQ9ITE7dmFyIGk9dGhpcy5fcGFydGlhbExpbmUrZTt0aGlzLl9wYXJ0aWFsTGluZT1cIlwiO3ZhciBuPXRoaXMuX2hhbmRsZS5wYXJzZShpLHRoaXMuX2Jhc2VJbmRleCwhdGhpcy5fZmluaXNoZWQpO2lmKCF0aGlzLl9oYW5kbGUucGF1c2VkKCkmJiF0aGlzLl9oYW5kbGUuYWJvcnRlZCgpKXt2YXIgcz1uLm1ldGEuY3Vyc29yO3RoaXMuX2ZpbmlzaGVkfHwodGhpcy5fcGFydGlhbExpbmU9aS5zdWJzdHJpbmcocy10aGlzLl9iYXNlSW5kZXgpLHRoaXMuX2Jhc2VJbmRleD1zKSxuJiZuLmRhdGEmJih0aGlzLl9yb3dDb3VudCs9bi5kYXRhLmxlbmd0aCk7dmFyIGE9dGhpcy5fZmluaXNoZWR8fHRoaXMuX2NvbmZpZy5wcmV2aWV3JiZ0aGlzLl9yb3dDb3VudD49dGhpcy5fY29uZmlnLnByZXZpZXc7aWYobylmLnBvc3RNZXNzYWdlKHtyZXN1bHRzOm4sd29ya2VySWQ6Yi5XT1JLRVJfSUQsZmluaXNoZWQ6YX0pO2Vsc2UgaWYoSih0aGlzLl9jb25maWcuY2h1bmspJiYhdCl7aWYodGhpcy5fY29uZmlnLmNodW5rKG4sdGhpcy5faGFuZGxlKSx0aGlzLl9oYW5kbGUucGF1c2VkKCl8fHRoaXMuX2hhbmRsZS5hYm9ydGVkKCkpcmV0dXJuIHZvaWQodGhpcy5faGFsdGVkPSEwKTtuPXZvaWQgMCx0aGlzLl9jb21wbGV0ZVJlc3VsdHM9dm9pZCAwfXJldHVybiB0aGlzLl9jb25maWcuc3RlcHx8dGhpcy5fY29uZmlnLmNodW5rfHwodGhpcy5fY29tcGxldGVSZXN1bHRzLmRhdGE9dGhpcy5fY29tcGxldGVSZXN1bHRzLmRhdGEuY29uY2F0KG4uZGF0YSksdGhpcy5fY29tcGxldGVSZXN1bHRzLmVycm9ycz10aGlzLl9jb21wbGV0ZVJlc3VsdHMuZXJyb3JzLmNvbmNhdChuLmVycm9ycyksdGhpcy5fY29tcGxldGVSZXN1bHRzLm1ldGE9bi5tZXRhKSx0aGlzLl9jb21wbGV0ZWR8fCFhfHwhSih0aGlzLl9jb25maWcuY29tcGxldGUpfHxuJiZuLm1ldGEuYWJvcnRlZHx8KHRoaXMuX2NvbmZpZy5jb21wbGV0ZSh0aGlzLl9jb21wbGV0ZVJlc3VsdHMsdGhpcy5faW5wdXQpLHRoaXMuX2NvbXBsZXRlZD0hMCksYXx8biYmbi5tZXRhLnBhdXNlZHx8dGhpcy5fbmV4dENodW5rKCksbn10aGlzLl9oYWx0ZWQ9ITB9LHRoaXMuX3NlbmRFcnJvcj1mdW5jdGlvbihlKXtKKHRoaXMuX2NvbmZpZy5lcnJvcik/dGhpcy5fY29uZmlnLmVycm9yKGUpOm8mJnRoaXMuX2NvbmZpZy5lcnJvciYmZi5wb3N0TWVzc2FnZSh7d29ya2VySWQ6Yi5XT1JLRVJfSUQsZXJyb3I6ZSxmaW5pc2hlZDohMX0pfX1mdW5jdGlvbiBsKGUpe3ZhciBpOyhlPWV8fHt9KS5jaHVua1NpemV8fChlLmNodW5rU2l6ZT1iLlJlbW90ZUNodW5rU2l6ZSksaC5jYWxsKHRoaXMsZSksdGhpcy5fbmV4dENodW5rPW4/ZnVuY3Rpb24oKXt0aGlzLl9yZWFkQ2h1bmsoKSx0aGlzLl9jaHVua0xvYWRlZCgpfTpmdW5jdGlvbigpe3RoaXMuX3JlYWRDaHVuaygpfSx0aGlzLnN0cmVhbT1mdW5jdGlvbihlKXt0aGlzLl9pbnB1dD1lLHRoaXMuX25leHRDaHVuaygpfSx0aGlzLl9yZWFkQ2h1bms9ZnVuY3Rpb24oKXtpZih0aGlzLl9maW5pc2hlZCl0aGlzLl9jaHVua0xvYWRlZCgpO2Vsc2V7aWYoaT1uZXcgWE1MSHR0cFJlcXVlc3QsdGhpcy5fY29uZmlnLndpdGhDcmVkZW50aWFscyYmKGkud2l0aENyZWRlbnRpYWxzPXRoaXMuX2NvbmZpZy53aXRoQ3JlZGVudGlhbHMpLG58fChpLm9ubG9hZD12KHRoaXMuX2NodW5rTG9hZGVkLHRoaXMpLGkub25lcnJvcj12KHRoaXMuX2NodW5rRXJyb3IsdGhpcykpLGkub3Blbih0aGlzLl9jb25maWcuZG93bmxvYWRSZXF1ZXN0Qm9keT9cIlBPU1RcIjpcIkdFVFwiLHRoaXMuX2lucHV0LCFuKSx0aGlzLl9jb25maWcuZG93bmxvYWRSZXF1ZXN0SGVhZGVycyl7dmFyIGU9dGhpcy5fY29uZmlnLmRvd25sb2FkUmVxdWVzdEhlYWRlcnM7Zm9yKHZhciB0IGluIGUpaS5zZXRSZXF1ZXN0SGVhZGVyKHQsZVt0XSl9aWYodGhpcy5fY29uZmlnLmNodW5rU2l6ZSl7dmFyIHI9dGhpcy5fc3RhcnQrdGhpcy5fY29uZmlnLmNodW5rU2l6ZS0xO2kuc2V0UmVxdWVzdEhlYWRlcihcIlJhbmdlXCIsXCJieXRlcz1cIit0aGlzLl9zdGFydCtcIi1cIityKX10cnl7aS5zZW5kKHRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RCb2R5KX1jYXRjaChlKXt0aGlzLl9jaHVua0Vycm9yKGUubWVzc2FnZSl9biYmMD09PWkuc3RhdHVzJiZ0aGlzLl9jaHVua0Vycm9yKCl9fSx0aGlzLl9jaHVua0xvYWRlZD1mdW5jdGlvbigpezQ9PT1pLnJlYWR5U3RhdGUmJihpLnN0YXR1czwyMDB8fDQwMDw9aS5zdGF0dXM/dGhpcy5fY2h1bmtFcnJvcigpOih0aGlzLl9zdGFydCs9dGhpcy5fY29uZmlnLmNodW5rU2l6ZT90aGlzLl9jb25maWcuY2h1bmtTaXplOmkucmVzcG9uc2VUZXh0Lmxlbmd0aCx0aGlzLl9maW5pc2hlZD0hdGhpcy5fY29uZmlnLmNodW5rU2l6ZXx8dGhpcy5fc3RhcnQ+PWZ1bmN0aW9uKGUpe3ZhciB0PWUuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVJhbmdlXCIpO2lmKG51bGw9PT10KXJldHVybi0xO3JldHVybiBwYXJzZUludCh0LnN1YnN0cmluZyh0Lmxhc3RJbmRleE9mKFwiL1wiKSsxKSl9KGkpLHRoaXMucGFyc2VDaHVuayhpLnJlc3BvbnNlVGV4dCkpKX0sdGhpcy5fY2h1bmtFcnJvcj1mdW5jdGlvbihlKXt2YXIgdD1pLnN0YXR1c1RleHR8fGU7dGhpcy5fc2VuZEVycm9yKG5ldyBFcnJvcih0KSl9fWZ1bmN0aW9uIGMoZSl7dmFyIGksbjsoZT1lfHx7fSkuY2h1bmtTaXplfHwoZS5jaHVua1NpemU9Yi5Mb2NhbENodW5rU2l6ZSksaC5jYWxsKHRoaXMsZSk7dmFyIHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXI7dGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7dGhpcy5faW5wdXQ9ZSxuPWUuc2xpY2V8fGUud2Via2l0U2xpY2V8fGUubW96U2xpY2Uscz8oKGk9bmV3IEZpbGVSZWFkZXIpLm9ubG9hZD12KHRoaXMuX2NodW5rTG9hZGVkLHRoaXMpLGkub25lcnJvcj12KHRoaXMuX2NodW5rRXJyb3IsdGhpcykpOmk9bmV3IEZpbGVSZWFkZXJTeW5jLHRoaXMuX25leHRDaHVuaygpfSx0aGlzLl9uZXh0Q2h1bms9ZnVuY3Rpb24oKXt0aGlzLl9maW5pc2hlZHx8dGhpcy5fY29uZmlnLnByZXZpZXcmJiEodGhpcy5fcm93Q291bnQ8dGhpcy5fY29uZmlnLnByZXZpZXcpfHx0aGlzLl9yZWFkQ2h1bmsoKX0sdGhpcy5fcmVhZENodW5rPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5faW5wdXQ7aWYodGhpcy5fY29uZmlnLmNodW5rU2l6ZSl7dmFyIHQ9TWF0aC5taW4odGhpcy5fc3RhcnQrdGhpcy5fY29uZmlnLmNodW5rU2l6ZSx0aGlzLl9pbnB1dC5zaXplKTtlPW4uY2FsbChlLHRoaXMuX3N0YXJ0LHQpfXZhciByPWkucmVhZEFzVGV4dChlLHRoaXMuX2NvbmZpZy5lbmNvZGluZyk7c3x8dGhpcy5fY2h1bmtMb2FkZWQoe3RhcmdldDp7cmVzdWx0OnJ9fSl9LHRoaXMuX2NodW5rTG9hZGVkPWZ1bmN0aW9uKGUpe3RoaXMuX3N0YXJ0Kz10aGlzLl9jb25maWcuY2h1bmtTaXplLHRoaXMuX2ZpbmlzaGVkPSF0aGlzLl9jb25maWcuY2h1bmtTaXplfHx0aGlzLl9zdGFydD49dGhpcy5faW5wdXQuc2l6ZSx0aGlzLnBhcnNlQ2h1bmsoZS50YXJnZXQucmVzdWx0KX0sdGhpcy5fY2h1bmtFcnJvcj1mdW5jdGlvbigpe3RoaXMuX3NlbmRFcnJvcihpLmVycm9yKX19ZnVuY3Rpb24gcChlKXt2YXIgcjtoLmNhbGwodGhpcyxlPWV8fHt9KSx0aGlzLnN0cmVhbT1mdW5jdGlvbihlKXtyZXR1cm4gcj1lLHRoaXMuX25leHRDaHVuaygpfSx0aGlzLl9uZXh0Q2h1bms9ZnVuY3Rpb24oKXtpZighdGhpcy5fZmluaXNoZWQpe3ZhciBlLHQ9dGhpcy5fY29uZmlnLmNodW5rU2l6ZTtyZXR1cm4gdD8oZT1yLnN1YnN0cmluZygwLHQpLHI9ci5zdWJzdHJpbmcodCkpOihlPXIscj1cIlwiKSx0aGlzLl9maW5pc2hlZD0hcix0aGlzLnBhcnNlQ2h1bmsoZSl9fX1mdW5jdGlvbiBnKGUpe2guY2FsbCh0aGlzLGU9ZXx8e30pO3ZhciB0PVtdLHI9ITAsaT0hMTt0aGlzLnBhdXNlPWZ1bmN0aW9uKCl7aC5wcm90b3R5cGUucGF1c2UuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuX2lucHV0LnBhdXNlKCl9LHRoaXMucmVzdW1lPWZ1bmN0aW9uKCl7aC5wcm90b3R5cGUucmVzdW1lLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLl9pbnB1dC5yZXN1bWUoKX0sdGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7dGhpcy5faW5wdXQ9ZSx0aGlzLl9pbnB1dC5vbihcImRhdGFcIix0aGlzLl9zdHJlYW1EYXRhKSx0aGlzLl9pbnB1dC5vbihcImVuZFwiLHRoaXMuX3N0cmVhbUVuZCksdGhpcy5faW5wdXQub24oXCJlcnJvclwiLHRoaXMuX3N0cmVhbUVycm9yKX0sdGhpcy5fY2hlY2tJc0ZpbmlzaGVkPWZ1bmN0aW9uKCl7aSYmMT09PXQubGVuZ3RoJiYodGhpcy5fZmluaXNoZWQ9ITApfSx0aGlzLl9uZXh0Q2h1bms9ZnVuY3Rpb24oKXt0aGlzLl9jaGVja0lzRmluaXNoZWQoKSx0Lmxlbmd0aD90aGlzLnBhcnNlQ2h1bmsodC5zaGlmdCgpKTpyPSEwfSx0aGlzLl9zdHJlYW1EYXRhPXYoZnVuY3Rpb24oZSl7dHJ5e3QucHVzaChcInN0cmluZ1wiPT10eXBlb2YgZT9lOmUudG9TdHJpbmcodGhpcy5fY29uZmlnLmVuY29kaW5nKSksciYmKHI9ITEsdGhpcy5fY2hlY2tJc0ZpbmlzaGVkKCksdGhpcy5wYXJzZUNodW5rKHQuc2hpZnQoKSkpfWNhdGNoKGUpe3RoaXMuX3N0cmVhbUVycm9yKGUpfX0sdGhpcyksdGhpcy5fc3RyZWFtRXJyb3I9dihmdW5jdGlvbihlKXt0aGlzLl9zdHJlYW1DbGVhblVwKCksdGhpcy5fc2VuZEVycm9yKGUpfSx0aGlzKSx0aGlzLl9zdHJlYW1FbmQ9dihmdW5jdGlvbigpe3RoaXMuX3N0cmVhbUNsZWFuVXAoKSxpPSEwLHRoaXMuX3N0cmVhbURhdGEoXCJcIil9LHRoaXMpLHRoaXMuX3N0cmVhbUNsZWFuVXA9dihmdW5jdGlvbigpe3RoaXMuX2lucHV0LnJlbW92ZUxpc3RlbmVyKFwiZGF0YVwiLHRoaXMuX3N0cmVhbURhdGEpLHRoaXMuX2lucHV0LnJlbW92ZUxpc3RlbmVyKFwiZW5kXCIsdGhpcy5fc3RyZWFtRW5kKSx0aGlzLl9pbnB1dC5yZW1vdmVMaXN0ZW5lcihcImVycm9yXCIsdGhpcy5fc3RyZWFtRXJyb3IpfSx0aGlzKX1mdW5jdGlvbiByKG0pe3ZhciBhLG8sdSxpPU1hdGgucG93KDIsNTMpLG49LWkscz0vXlxccyotPyhcXGQrXFwuP3xcXC5cXGQrfFxcZCtcXC5cXGQrKShbZUVdWy0rXT9cXGQrKT9cXHMqJC8saD0vXigoXFxkezR9LVswMV1cXGQtWzAtM11cXGRUWzAtMl1cXGQ6WzAtNV1cXGQ6WzAtNV1cXGRcXC5cXGQrKFsrLV1bMC0yXVxcZDpbMC01XVxcZHxaKSl8KFxcZHs0fS1bMDFdXFxkLVswLTNdXFxkVFswLTJdXFxkOlswLTVdXFxkOlswLTVdXFxkKFsrLV1bMC0yXVxcZDpbMC01XVxcZHxaKSl8KFxcZHs0fS1bMDFdXFxkLVswLTNdXFxkVFswLTJdXFxkOlswLTVdXFxkKFsrLV1bMC0yXVxcZDpbMC01XVxcZHxaKSkpJC8sdD10aGlzLHI9MCxmPTAsZD0hMSxlPSExLGw9W10sYz17ZGF0YTpbXSxlcnJvcnM6W10sbWV0YTp7fX07aWYoSihtLnN0ZXApKXt2YXIgcD1tLnN0ZXA7bS5zdGVwPWZ1bmN0aW9uKGUpe2lmKGM9ZSxfKCkpZygpO2Vsc2V7aWYoZygpLDA9PT1jLmRhdGEubGVuZ3RoKXJldHVybjtyKz1lLmRhdGEubGVuZ3RoLG0ucHJldmlldyYmcj5tLnByZXZpZXc/by5hYm9ydCgpOihjLmRhdGE9Yy5kYXRhWzBdLHAoYyx0KSl9fX1mdW5jdGlvbiB5KGUpe3JldHVyblwiZ3JlZWR5XCI9PT1tLnNraXBFbXB0eUxpbmVzP1wiXCI9PT1lLmpvaW4oXCJcIikudHJpbSgpOjE9PT1lLmxlbmd0aCYmMD09PWVbMF0ubGVuZ3RofWZ1bmN0aW9uIGcoKXtyZXR1cm4gYyYmdSYmKGsoXCJEZWxpbWl0ZXJcIixcIlVuZGV0ZWN0YWJsZURlbGltaXRlclwiLFwiVW5hYmxlIHRvIGF1dG8tZGV0ZWN0IGRlbGltaXRpbmcgY2hhcmFjdGVyOyBkZWZhdWx0ZWQgdG8gJ1wiK2IuRGVmYXVsdERlbGltaXRlcitcIidcIiksdT0hMSksbS5za2lwRW1wdHlMaW5lcyYmKGMuZGF0YT1jLmRhdGEuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiF5KGUpfSkpLF8oKSYmZnVuY3Rpb24oKXtpZighYylyZXR1cm47ZnVuY3Rpb24gZShlLHQpe0oobS50cmFuc2Zvcm1IZWFkZXIpJiYoZT1tLnRyYW5zZm9ybUhlYWRlcihlLHQpKSxsLnB1c2goZSl9aWYoQXJyYXkuaXNBcnJheShjLmRhdGFbMF0pKXtmb3IodmFyIHQ9MDtfKCkmJnQ8Yy5kYXRhLmxlbmd0aDt0KyspYy5kYXRhW3RdLmZvckVhY2goZSk7Yy5kYXRhLnNwbGljZSgwLDEpfWVsc2UgYy5kYXRhLmZvckVhY2goZSl9KCksZnVuY3Rpb24oKXtpZighY3x8IW0uaGVhZGVyJiYhbS5keW5hbWljVHlwaW5nJiYhbS50cmFuc2Zvcm0pcmV0dXJuIGM7ZnVuY3Rpb24gZShlLHQpe3ZhciByLGk9bS5oZWFkZXI/e306W107Zm9yKHI9MDtyPGUubGVuZ3RoO3IrKyl7dmFyIG49cixzPWVbcl07bS5oZWFkZXImJihuPXI+PWwubGVuZ3RoP1wiX19wYXJzZWRfZXh0cmFcIjpsW3JdKSxtLnRyYW5zZm9ybSYmKHM9bS50cmFuc2Zvcm0ocyxuKSkscz12KG4scyksXCJfX3BhcnNlZF9leHRyYVwiPT09bj8oaVtuXT1pW25dfHxbXSxpW25dLnB1c2gocykpOmlbbl09c31yZXR1cm4gbS5oZWFkZXImJihyPmwubGVuZ3RoP2soXCJGaWVsZE1pc21hdGNoXCIsXCJUb29NYW55RmllbGRzXCIsXCJUb28gbWFueSBmaWVsZHM6IGV4cGVjdGVkIFwiK2wubGVuZ3RoK1wiIGZpZWxkcyBidXQgcGFyc2VkIFwiK3IsZit0KTpyPGwubGVuZ3RoJiZrKFwiRmllbGRNaXNtYXRjaFwiLFwiVG9vRmV3RmllbGRzXCIsXCJUb28gZmV3IGZpZWxkczogZXhwZWN0ZWQgXCIrbC5sZW5ndGgrXCIgZmllbGRzIGJ1dCBwYXJzZWQgXCIrcixmK3QpKSxpfXZhciB0PTE7IWMuZGF0YS5sZW5ndGh8fEFycmF5LmlzQXJyYXkoYy5kYXRhWzBdKT8oYy5kYXRhPWMuZGF0YS5tYXAoZSksdD1jLmRhdGEubGVuZ3RoKTpjLmRhdGE9ZShjLmRhdGEsMCk7bS5oZWFkZXImJmMubWV0YSYmKGMubWV0YS5maWVsZHM9bCk7cmV0dXJuIGYrPXQsY30oKX1mdW5jdGlvbiBfKCl7cmV0dXJuIG0uaGVhZGVyJiYwPT09bC5sZW5ndGh9ZnVuY3Rpb24gdihlLHQpe3JldHVybiByPWUsbS5keW5hbWljVHlwaW5nRnVuY3Rpb24mJnZvaWQgMD09PW0uZHluYW1pY1R5cGluZ1tyXSYmKG0uZHluYW1pY1R5cGluZ1tyXT1tLmR5bmFtaWNUeXBpbmdGdW5jdGlvbihyKSksITA9PT0obS5keW5hbWljVHlwaW5nW3JdfHxtLmR5bmFtaWNUeXBpbmcpP1widHJ1ZVwiPT09dHx8XCJUUlVFXCI9PT10fHxcImZhbHNlXCIhPT10JiZcIkZBTFNFXCIhPT10JiYoZnVuY3Rpb24oZSl7aWYocy50ZXN0KGUpKXt2YXIgdD1wYXJzZUZsb2F0KGUpO2lmKG48dCYmdDxpKXJldHVybiEwfXJldHVybiExfSh0KT9wYXJzZUZsb2F0KHQpOmgudGVzdCh0KT9uZXcgRGF0ZSh0KTpcIlwiPT09dD9udWxsOnQpOnQ7dmFyIHJ9ZnVuY3Rpb24gayhlLHQscixpKXt2YXIgbj17dHlwZTplLGNvZGU6dCxtZXNzYWdlOnJ9O3ZvaWQgMCE9PWkmJihuLnJvdz1pKSxjLmVycm9ycy5wdXNoKG4pfXRoaXMucGFyc2U9ZnVuY3Rpb24oZSx0LHIpe3ZhciBpPW0ucXVvdGVDaGFyfHwnXCInO2lmKG0ubmV3bGluZXx8KG0ubmV3bGluZT1mdW5jdGlvbihlLHQpe2U9ZS5zdWJzdHJpbmcoMCwxMDQ4NTc2KTt2YXIgcj1uZXcgUmVnRXhwKFEodCkrXCIoW15dKj8pXCIrUSh0KSxcImdtXCIpLGk9KGU9ZS5yZXBsYWNlKHIsXCJcIikpLnNwbGl0KFwiXFxyXCIpLG49ZS5zcGxpdChcIlxcblwiKSxzPTE8bi5sZW5ndGgmJm5bMF0ubGVuZ3RoPGlbMF0ubGVuZ3RoO2lmKDE9PT1pLmxlbmd0aHx8cylyZXR1cm5cIlxcblwiO2Zvcih2YXIgYT0wLG89MDtvPGkubGVuZ3RoO28rKylcIlxcblwiPT09aVtvXVswXSYmYSsrO3JldHVybiBhPj1pLmxlbmd0aC8yP1wiXFxyXFxuXCI6XCJcXHJcIn0oZSxpKSksdT0hMSxtLmRlbGltaXRlcilKKG0uZGVsaW1pdGVyKSYmKG0uZGVsaW1pdGVyPW0uZGVsaW1pdGVyKGUpLGMubWV0YS5kZWxpbWl0ZXI9bS5kZWxpbWl0ZXIpO2Vsc2V7dmFyIG49ZnVuY3Rpb24oZSx0LHIsaSxuKXt2YXIgcyxhLG8sdTtuPW58fFtcIixcIixcIlxcdFwiLFwifFwiLFwiO1wiLGIuUkVDT1JEX1NFUCxiLlVOSVRfU0VQXTtmb3IodmFyIGg9MDtoPG4ubGVuZ3RoO2grKyl7dmFyIGY9bltoXSxkPTAsbD0wLGM9MDtvPXZvaWQgMDtmb3IodmFyIHA9bmV3IEUoe2NvbW1lbnRzOmksZGVsaW1pdGVyOmYsbmV3bGluZTp0LHByZXZpZXc6MTB9KS5wYXJzZShlKSxnPTA7ZzxwLmRhdGEubGVuZ3RoO2crKylpZihyJiZ5KHAuZGF0YVtnXSkpYysrO2Vsc2V7dmFyIF89cC5kYXRhW2ddLmxlbmd0aDtsKz1fLHZvaWQgMCE9PW8/MDxfJiYoZCs9TWF0aC5hYnMoXy1vKSxvPV8pOm89X30wPHAuZGF0YS5sZW5ndGgmJihsLz1wLmRhdGEubGVuZ3RoLWMpLCh2b2lkIDA9PT1hfHxkPD1hKSYmKHZvaWQgMD09PXV8fHU8bCkmJjEuOTk8bCYmKGE9ZCxzPWYsdT1sKX1yZXR1cm57c3VjY2Vzc2Z1bDohIShtLmRlbGltaXRlcj1zKSxiZXN0RGVsaW1pdGVyOnN9fShlLG0ubmV3bGluZSxtLnNraXBFbXB0eUxpbmVzLG0uY29tbWVudHMsbS5kZWxpbWl0ZXJzVG9HdWVzcyk7bi5zdWNjZXNzZnVsP20uZGVsaW1pdGVyPW4uYmVzdERlbGltaXRlcjoodT0hMCxtLmRlbGltaXRlcj1iLkRlZmF1bHREZWxpbWl0ZXIpLGMubWV0YS5kZWxpbWl0ZXI9bS5kZWxpbWl0ZXJ9dmFyIHM9dyhtKTtyZXR1cm4gbS5wcmV2aWV3JiZtLmhlYWRlciYmcy5wcmV2aWV3KyssYT1lLG89bmV3IEUocyksYz1vLnBhcnNlKGEsdCxyKSxnKCksZD97bWV0YTp7cGF1c2VkOiEwfX06Y3x8e21ldGE6e3BhdXNlZDohMX19fSx0aGlzLnBhdXNlZD1mdW5jdGlvbigpe3JldHVybiBkfSx0aGlzLnBhdXNlPWZ1bmN0aW9uKCl7ZD0hMCxvLmFib3J0KCksYT1KKG0uY2h1bmspP1wiXCI6YS5zdWJzdHJpbmcoby5nZXRDaGFySW5kZXgoKSl9LHRoaXMucmVzdW1lPWZ1bmN0aW9uKCl7dC5zdHJlYW1lci5faGFsdGVkPyhkPSExLHQuc3RyZWFtZXIucGFyc2VDaHVuayhhLCEwKSk6c2V0VGltZW91dCh0LnJlc3VtZSwzKX0sdGhpcy5hYm9ydGVkPWZ1bmN0aW9uKCl7cmV0dXJuIGV9LHRoaXMuYWJvcnQ9ZnVuY3Rpb24oKXtlPSEwLG8uYWJvcnQoKSxjLm1ldGEuYWJvcnRlZD0hMCxKKG0uY29tcGxldGUpJiZtLmNvbXBsZXRlKGMpLGE9XCJcIn19ZnVuY3Rpb24gUShlKXtyZXR1cm4gZS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZyxcIlxcXFwkJlwiKX1mdW5jdGlvbiBFKGope3ZhciB6LE09KGo9anx8e30pLmRlbGltaXRlcixQPWoubmV3bGluZSxVPWouY29tbWVudHMscT1qLnN0ZXAsTj1qLnByZXZpZXcsQj1qLmZhc3RNb2RlLEs9ej12b2lkIDA9PT1qLnF1b3RlQ2hhcnx8bnVsbD09PWoucXVvdGVDaGFyPydcIic6ai5xdW90ZUNoYXI7aWYodm9pZCAwIT09ai5lc2NhcGVDaGFyJiYoSz1qLmVzY2FwZUNoYXIpLChcInN0cmluZ1wiIT10eXBlb2YgTXx8LTE8Yi5CQURfREVMSU1JVEVSUy5pbmRleE9mKE0pKSYmKE09XCIsXCIpLFU9PT1NKXRocm93IG5ldyBFcnJvcihcIkNvbW1lbnQgY2hhcmFjdGVyIHNhbWUgYXMgZGVsaW1pdGVyXCIpOyEwPT09VT9VPVwiI1wiOihcInN0cmluZ1wiIT10eXBlb2YgVXx8LTE8Yi5CQURfREVMSU1JVEVSUy5pbmRleE9mKFUpKSYmKFU9ITEpLFwiXFxuXCIhPT1QJiZcIlxcclwiIT09UCYmXCJcXHJcXG5cIiE9PVAmJihQPVwiXFxuXCIpO3ZhciBXPTAsSD0hMTt0aGlzLnBhcnNlPWZ1bmN0aW9uKGksdCxyKXtpZihcInN0cmluZ1wiIT10eXBlb2YgaSl0aHJvdyBuZXcgRXJyb3IoXCJJbnB1dCBtdXN0IGJlIGEgc3RyaW5nXCIpO3ZhciBuPWkubGVuZ3RoLGU9TS5sZW5ndGgscz1QLmxlbmd0aCxhPVUubGVuZ3RoLG89SihxKSx1PVtdLGg9W10sZj1bXSxkPVc9MDtpZighaSlyZXR1cm4gTCgpO2lmKGouaGVhZGVyJiYhdCl7dmFyIGw9aS5zcGxpdChQKVswXS5zcGxpdChNKSxjPVtdLHA9e30sZz0hMTtmb3IodmFyIF8gaW4gbCl7dmFyIG09bFtfXTtKKGoudHJhbnNmb3JtSGVhZGVyKSYmKG09ai50cmFuc2Zvcm1IZWFkZXIobSxfKSk7dmFyIHk9bSx2PXBbbV18fDA7Zm9yKDA8diYmKGc9ITAseT1tK1wiX1wiK3YpLHBbbV09disxO2MuaW5jbHVkZXMoeSk7KXk9eStcIl9cIit2O2MucHVzaCh5KX1pZihnKXt2YXIgaz1pLnNwbGl0KFApO2tbMF09Yy5qb2luKE0pLGk9ay5qb2luKFApfX1pZihCfHwhMSE9PUImJi0xPT09aS5pbmRleE9mKHopKXtmb3IodmFyIGI9aS5zcGxpdChQKSxFPTA7RTxiLmxlbmd0aDtFKyspe2lmKGY9YltFXSxXKz1mLmxlbmd0aCxFIT09Yi5sZW5ndGgtMSlXKz1QLmxlbmd0aDtlbHNlIGlmKHIpcmV0dXJuIEwoKTtpZighVXx8Zi5zdWJzdHJpbmcoMCxhKSE9PVUpe2lmKG8pe2lmKHU9W10sSShmLnNwbGl0KE0pKSxGKCksSClyZXR1cm4gTCgpfWVsc2UgSShmLnNwbGl0KE0pKTtpZihOJiZOPD1FKXJldHVybiB1PXUuc2xpY2UoMCxOKSxMKCEwKX19cmV0dXJuIEwoKX1mb3IodmFyIHc9aS5pbmRleE9mKE0sVyksUj1pLmluZGV4T2YoUCxXKSxDPW5ldyBSZWdFeHAoUShLKStRKHopLFwiZ1wiKSxTPWkuaW5kZXhPZih6LFcpOzspaWYoaVtXXSE9PXopaWYoVSYmMD09PWYubGVuZ3RoJiZpLnN1YnN0cmluZyhXLFcrYSk9PT1VKXtpZigtMT09PVIpcmV0dXJuIEwoKTtXPVIrcyxSPWkuaW5kZXhPZihQLFcpLHc9aS5pbmRleE9mKE0sVyl9ZWxzZSBpZigtMSE9PXcmJih3PFJ8fC0xPT09UikpZi5wdXNoKGkuc3Vic3RyaW5nKFcsdykpLFc9dytlLHc9aS5pbmRleE9mKE0sVyk7ZWxzZXtpZigtMT09PVIpYnJlYWs7aWYoZi5wdXNoKGkuc3Vic3RyaW5nKFcsUikpLEQoUitzKSxvJiYoRigpLEgpKXJldHVybiBMKCk7aWYoTiYmdS5sZW5ndGg+PU4pcmV0dXJuIEwoITApfWVsc2UgZm9yKFM9VyxXKys7Oyl7aWYoLTE9PT0oUz1pLmluZGV4T2YoeixTKzEpKSlyZXR1cm4gcnx8aC5wdXNoKHt0eXBlOlwiUXVvdGVzXCIsY29kZTpcIk1pc3NpbmdRdW90ZXNcIixtZXNzYWdlOlwiUXVvdGVkIGZpZWxkIHVudGVybWluYXRlZFwiLHJvdzp1Lmxlbmd0aCxpbmRleDpXfSksVCgpO2lmKFM9PT1uLTEpcmV0dXJuIFQoaS5zdWJzdHJpbmcoVyxTKS5yZXBsYWNlKEMseikpO2lmKHohPT1LfHxpW1MrMV0hPT1LKXtpZih6PT09S3x8MD09PVN8fGlbUy0xXSE9PUspey0xIT09dyYmdzxTKzEmJih3PWkuaW5kZXhPZihNLFMrMSkpLC0xIT09UiYmUjxTKzEmJihSPWkuaW5kZXhPZihQLFMrMSkpO3ZhciBPPUEoLTE9PT1SP3c6TWF0aC5taW4odyxSKSk7aWYoaS5zdWJzdHIoUysxK08sZSk9PT1NKXtmLnB1c2goaS5zdWJzdHJpbmcoVyxTKS5yZXBsYWNlKEMseikpLGlbVz1TKzErTytlXSE9PXomJihTPWkuaW5kZXhPZih6LFcpKSx3PWkuaW5kZXhPZihNLFcpLFI9aS5pbmRleE9mKFAsVyk7YnJlYWt9dmFyIHg9QShSKTtpZihpLnN1YnN0cmluZyhTKzEreCxTKzEreCtzKT09PVApe2lmKGYucHVzaChpLnN1YnN0cmluZyhXLFMpLnJlcGxhY2UoQyx6KSksRChTKzEreCtzKSx3PWkuaW5kZXhPZihNLFcpLFM9aS5pbmRleE9mKHosVyksbyYmKEYoKSxIKSlyZXR1cm4gTCgpO2lmKE4mJnUubGVuZ3RoPj1OKXJldHVybiBMKCEwKTticmVha31oLnB1c2goe3R5cGU6XCJRdW90ZXNcIixjb2RlOlwiSW52YWxpZFF1b3Rlc1wiLG1lc3NhZ2U6XCJUcmFpbGluZyBxdW90ZSBvbiBxdW90ZWQgZmllbGQgaXMgbWFsZm9ybWVkXCIscm93OnUubGVuZ3RoLGluZGV4Old9KSxTKyt9fWVsc2UgUysrfXJldHVybiBUKCk7ZnVuY3Rpb24gSShlKXt1LnB1c2goZSksZD1XfWZ1bmN0aW9uIEEoZSl7dmFyIHQ9MDtpZigtMSE9PWUpe3ZhciByPWkuc3Vic3RyaW5nKFMrMSxlKTtyJiZcIlwiPT09ci50cmltKCkmJih0PXIubGVuZ3RoKX1yZXR1cm4gdH1mdW5jdGlvbiBUKGUpe3JldHVybiByfHwodm9pZCAwPT09ZSYmKGU9aS5zdWJzdHJpbmcoVykpLGYucHVzaChlKSxXPW4sSShmKSxvJiZGKCkpLEwoKX1mdW5jdGlvbiBEKGUpe1c9ZSxJKGYpLGY9W10sUj1pLmluZGV4T2YoUCxXKX1mdW5jdGlvbiBMKGUpe3JldHVybntkYXRhOnUsZXJyb3JzOmgsbWV0YTp7ZGVsaW1pdGVyOk0sbGluZWJyZWFrOlAsYWJvcnRlZDpILHRydW5jYXRlZDohIWUsY3Vyc29yOmQrKHR8fDApfX19ZnVuY3Rpb24gRigpe3EoTCgpKSx1PVtdLGg9W119fSx0aGlzLmFib3J0PWZ1bmN0aW9uKCl7SD0hMH0sdGhpcy5nZXRDaGFySW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gV319ZnVuY3Rpb24gXyhlKXt2YXIgdD1lLmRhdGEscj1hW3Qud29ya2VySWRdLGk9ITE7aWYodC5lcnJvcilyLnVzZXJFcnJvcih0LmVycm9yLHQuZmlsZSk7ZWxzZSBpZih0LnJlc3VsdHMmJnQucmVzdWx0cy5kYXRhKXt2YXIgbj17YWJvcnQ6ZnVuY3Rpb24oKXtpPSEwLG0odC53b3JrZXJJZCx7ZGF0YTpbXSxlcnJvcnM6W10sbWV0YTp7YWJvcnRlZDohMH19KX0scGF1c2U6eSxyZXN1bWU6eX07aWYoSihyLnVzZXJTdGVwKSl7Zm9yKHZhciBzPTA7czx0LnJlc3VsdHMuZGF0YS5sZW5ndGgmJihyLnVzZXJTdGVwKHtkYXRhOnQucmVzdWx0cy5kYXRhW3NdLGVycm9yczp0LnJlc3VsdHMuZXJyb3JzLG1ldGE6dC5yZXN1bHRzLm1ldGF9LG4pLCFpKTtzKyspO2RlbGV0ZSB0LnJlc3VsdHN9ZWxzZSBKKHIudXNlckNodW5rKSYmKHIudXNlckNodW5rKHQucmVzdWx0cyxuLHQuZmlsZSksZGVsZXRlIHQucmVzdWx0cyl9dC5maW5pc2hlZCYmIWkmJm0odC53b3JrZXJJZCx0LnJlc3VsdHMpfWZ1bmN0aW9uIG0oZSx0KXt2YXIgcj1hW2VdO0ooci51c2VyQ29tcGxldGUpJiZyLnVzZXJDb21wbGV0ZSh0KSxyLnRlcm1pbmF0ZSgpLGRlbGV0ZSBhW2VdfWZ1bmN0aW9uIHkoKXt0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQuXCIpfWZ1bmN0aW9uIHcoZSl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fG51bGw9PT1lKXJldHVybiBlO3ZhciB0PUFycmF5LmlzQXJyYXkoZSk/W106e307Zm9yKHZhciByIGluIGUpdFtyXT13KGVbcl0pO3JldHVybiB0fWZ1bmN0aW9uIHYoZSx0KXtyZXR1cm4gZnVuY3Rpb24oKXtlLmFwcGx5KHQsYXJndW1lbnRzKX19ZnVuY3Rpb24gSihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlfXJldHVybiBvJiYoZi5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5kYXRhO3ZvaWQgMD09PWIuV09SS0VSX0lEJiZ0JiYoYi5XT1JLRVJfSUQ9dC53b3JrZXJJZCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQuaW5wdXQpZi5wb3N0TWVzc2FnZSh7d29ya2VySWQ6Yi5XT1JLRVJfSUQscmVzdWx0czpiLnBhcnNlKHQuaW5wdXQsdC5jb25maWcpLGZpbmlzaGVkOiEwfSk7ZWxzZSBpZihmLkZpbGUmJnQuaW5wdXQgaW5zdGFuY2VvZiBGaWxlfHx0LmlucHV0IGluc3RhbmNlb2YgT2JqZWN0KXt2YXIgcj1iLnBhcnNlKHQuaW5wdXQsdC5jb25maWcpO3ImJmYucG9zdE1lc3NhZ2Uoe3dvcmtlcklkOmIuV09SS0VSX0lELHJlc3VsdHM6cixmaW5pc2hlZDohMH0pfX0pLChsLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGgucHJvdG90eXBlKSkuY29uc3RydWN0b3I9bCwoYy5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShoLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yPWMsKHAucHJvdG90eXBlPU9iamVjdC5jcmVhdGUocC5wcm90b3R5cGUpKS5jb25zdHJ1Y3Rvcj1wLChnLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGgucHJvdG90eXBlKSkuY29uc3RydWN0b3I9ZyxifSk7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUT0RPIGZpeCBxdWVzdGlvbiBkYXRhIGZvciBtb2R1bGVcclxuaW1wb3J0ICogYXMgcGxheWVycyBmcm9tIFwiLi9wbGF5ZXJzXCJcclxuXHJcbmNvbnN0IGdyaWRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNncmlkV3JhcHBlclwiKTtcclxuXHJcbi8vIGNoYW5nZSB0aGlzIHRvIHVzZSBxdWVzdGlvbiBvYmplY3RcclxuLy8gZ3JpZCBjb3VudCBiYXNlZCBvbiBxdWVzdGlvbk9iaiBrZXlzIGxlbmd0aHMsIDIgZGltZW5zaW9ucywgY2F0ZWdvcnkgbGVuZ3RoICsgcXVlc3Rpb24gY291bnQgbGVuZ3RoICsgdG9waWNcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uR3JpZChxdWVzdGlvbk9iamVjdCkge1xyXG4gIC8vIGNvbnNvbGUubG9nKHBsYXllcnMuZ2V0UmFuZG9tSW50SW5SYW5nZSgyLDUpKVxyXG4gIGNvbnN0IGNhdGVnb3J5Q291bnQgPSBPYmplY3Qua2V5cyhxdWVzdGlvbk9iamVjdCkubGVuZ3RoO1xyXG5cclxuICBjb25zdCBxdWVzdGlvbkNvdW50ID0gW107XHJcblxyXG4gIC8vIHNldCBncmlkIGNvbHVtbiBjb3VudCBlcXVhbCB0byBudW1iZXIgb2YgcXVlc3Rpb24gY2F0ZWdvcmllc1xyXG4gIGNvbnN0IGdyaWRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmlkV3JhcHBlclwiKTtcclxuXHJcbiAgZ3JpZFdyYXBwZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICBncmlkV3JhcHBlci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke2NhdGVnb3J5Q291bnR9LDFmcilgO1xyXG5cclxuICAvLyBnZW5lcmF0ZSB0b3BpYyB0aWxlc1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnlDb3VudDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0aWxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjYXRlZ29yeURpdi5pZCA9IGBjYXRlZ29yeSR7aX1gO1xyXG4gICAgY2F0ZWdvcnlEaXYuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIpO1xyXG4gICAgdGlsZURpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb25Ub3BpY1wiKTtcclxuICAgIHRpbGVEaXYudGV4dENvbnRlbnQgPSBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF0udG9waWM7XHJcbiAgICBjYXRlZ29yeURpdi5hcHBlbmQodGlsZURpdik7XHJcblxyXG4gICAgZ3JpZEFyZWEuYXBwZW5kKGNhdGVnb3J5RGl2KTtcclxuICB9XHJcblxyXG4gIC8vIGdlbmVyYXRlIHF1ZXN0aW9uIGNvdW50cyBmb3IgZWFjaCBjYXRlZ29yeVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnlDb3VudDsgaSArPSAxKSB7XHJcbiAgICAvLyAtMSBmcm9tIGxlbmd0aCB0byBhY2NvdW50IGZvciAndG9waWMnIGtleVxyXG4gICAgcXVlc3Rpb25Db3VudC5wdXNoKE9iamVjdC5rZXlzKHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXSkubGVuZ3RoIC0gMSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhxdWVzdGlvbkNvdW50KTtcclxuICB9XHJcblxyXG4gIC8vIGdlbmVyYXRlIHF1ZXN0aW9uIHRpbGVzIHdpdGggdmFsdWVzXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yeUNvdW50OyBpICs9IDEpIHtcclxuICAgIGZvciAobGV0IGogPSAxOyBqIDwgcXVlc3Rpb25Db3VudFtpXSArIDE7IGogKz0gMSkge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXRlZ29yeSR7aX1gKTtcclxuICAgICAgY29uc3QgdGlsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRpbGVEaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9uXCIpO1xyXG4gICAgICB0aWxlRGl2LnRleHRDb250ZW50ID1cclxuICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF1bYHF1ZXN0aW9uJHtqfWBdLnZhbHVlO1xyXG5cclxuICAgICAgLy8gYXBwbHkgc3RvY2sgdmFsdWVzIG9mIDEwMCBpbmNyZW1lbnQgcGVyIHJvdyBpZiBhIHZhbHVlXHJcbiAgICAgIC8vIGlzIG5vdCBhIHN1cHBsaWVkIGZyb20gcXVlc3Rpb25PYmpcclxuICAgICAgaWYgKHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXVtgcXVlc3Rpb24ke2p9YF0udmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRpbGVEaXYudGV4dENvbnRlbnQgPSBgJHtpICsgMX0wMGA7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGkgKiBqKTtcclxuICAgICAgfVxyXG4gICAgICBjYXRlZ29yeURpdi5hcHBlbmQodGlsZURpdik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyByZW1vdmUgdGhpcyBsYXRlclxyXG5leHBvcnQgY29uc3QgdGVzdCA9IDc7XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9ibG9vLWFuc3dlci5wbmdcIjogXCIuL3NyYy9pbWcvYmxvby1hbnN3ZXIucG5nXCIsXG5cdFwiLi9ibG9vLnBuZ1wiOiBcIi4vc3JjL2ltZy9ibG9vLnBuZ1wiLFxuXHRcIi4vYm9yb21pci1mdW5lcmFsLWZ1bGwucG5nXCI6IFwiLi9zcmMvaW1nL2Jvcm9taXItZnVuZXJhbC1mdWxsLnBuZ1wiLFxuXHRcIi4vYm9yb21pci1mdW5lcmFsLnBuZ1wiOiBcIi4vc3JjL2ltZy9ib3JvbWlyLWZ1bmVyYWwucG5nXCIsXG5cdFwiLi9jYWl0bHluLXZpLWZ1bGwucG5nXCI6IFwiLi9zcmMvaW1nL2NhaXRseW4tdmktZnVsbC5wbmdcIixcblx0XCIuL2NhaXRseW4tdmkucG5nXCI6IFwiLi9zcmMvaW1nL2NhaXRseW4tdmkucG5nXCIsXG5cdFwiLi9jb21wYW5pb24tY3ViZS1mdWxsLnBuZ1wiOiBcIi4vc3JjL2ltZy9jb21wYW5pb24tY3ViZS1mdWxsLnBuZ1wiLFxuXHRcIi4vY29tcGFuaW9uLWN1YmUucG5nXCI6IFwiLi9zcmMvaW1nL2NvbXBhbmlvbi1jdWJlLnBuZ1wiLFxuXHRcIi4vZGljZS1vdXRsaW5lLnN2Z1wiOiBcIi4vc3JjL2ltZy9kaWNlLW91dGxpbmUuc3ZnXCIsXG5cdFwiLi9qaW54LWZsYXJlLWZ1bGwucG5nXCI6IFwiLi9zcmMvaW1nL2ppbngtZmxhcmUtZnVsbC5wbmdcIixcblx0XCIuL2ppbngtZmxhcmUucG5nXCI6IFwiLi9zcmMvaW1nL2ppbngtZmxhcmUucG5nXCIsXG5cdFwiLi9wbHVzLXNxdWFyZS5zdmdcIjogXCIuL3NyYy9pbWcvcGx1cy1zcXVhcmUuc3ZnXCIsXG5cdFwiLi90b2hydS5wbmdcIjogXCIuL3NyYy9pbWcvdG9ocnUucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltZyBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnKSRcIjsiLCJpbXBvcnQgc3RvY2tOYW1lcyBmcm9tIFwiLi9zdG9ja05hbWVzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQbGF5ZXIobmFtZSwgbnVtYmVyLCBzY29yZSkge1xyXG4gIC8vIGFzc2lnbiB0byBvYmogcmF0aGVyIHRoYW4gdGhpcywgc2luY2UgdGhpcyA9PT0gdW5kZWZpbmVkIGluIG1vZHVsZXNcclxuICBjb25zdCBvYmogPSB7fTtcclxuICBvYmouZGlzcGxheVBsYXllck5hbWUgPSBmdW5jdGlvbiBkaXNwbGF5UGxheWVyTmFtZShwbGF5ZXJOdW1iZXIpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAjcGxheWVyJHtwbGF5ZXJOdW1iZXJ9YCxcclxuICAgICkudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9OmA7XHJcbiAgfTtcclxuICBvYmouY2hhbmdlUGxheWVyTmFtZSA9IGZ1bmN0aW9uIGNoYW5nZVBsYXllck5hbWUoKSB7XHJcbiAgICBjb25zdCB0ZW1wTmFtZSA9IHRoaXMubmFtZTtcclxuICAgIHRoaXMubmFtZSA9IHByb21wdChcIlBsZWFzZSBlbnRlciB5b3VyIG5hbWVcIiwgXCJKb3NoIEd1bnNvblwiKTtcclxuICAgIC8vIHByZXZlbnQgcGxheWVyIG5hbWUgZnJvbSBkaXNhcHBlYXJpbmcgYnkgdXNpbmcgcHJldmlvdXMgbmFtZVxyXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbnVsbCkgdGhpcy5uYW1lID0gdGVtcE5hbWU7XHJcbiAgICB0aGlzLmRpc3BsYXlQbGF5ZXJOYW1lKHRoaXMubnVtYmVyKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gIH07XHJcbiAgb2JqLmluY3JlbWVudFBsYXllclNjb3JlID0gZnVuY3Rpb24gaW5jcmVtZW50UGxheWVyU2NvcmUoc2NvcmVUb0FkZCkge1xyXG4gICAgdGhpcy5zY29yZSArPSBzY29yZVRvQWRkO1xyXG4gIH07XHJcbiAgb2JqLmRpc3BsYXlQbGF5ZXJTY29yZSA9IGZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJTY29yZShwbGF5ZXJOdW1iZXIpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXIke3BsYXllck51bWJlcn1TY29yZWApLnRleHRDb250ZW50ID1cclxuICAgICAgdGhpcy5zY29yZTtcclxuICB9O1xyXG4gIG9iai5uYW1lID0gbmFtZTtcclxuICBvYmouc2NvcmUgPSBzY29yZTtcclxuICBvYmoubnVtYmVyID0gbnVtYmVyO1xyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnRJblJhbmdlKG1pbiwgbWF4KSB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn1cclxuLy8gZXhwbG9yZTogcm5nIHN0b2NrbmFtZSBsaXN0LCBhcHBseSB0byBwbGF5ZXIgZ2VuIGxvb3AsIGFkZCB0byB1c2VkIGFycmF5XHJcbi8vIHJuZyBvbiBuZXcgbG9vcCwgY2hlY2sgaWYgcm5nIHVzZWQsIGlmIHNvLCByZXJvbGwsIHN0b2NrbmFtZSBpcyAyMjkgbG9uZ1xyXG4vLyBoYXZlIGEgbGl0dGxlIHRvZ2dsZSByYW5kb20gY2hhcmFjdGVyIG5hbWUgYm94LFxyXG4vLyBmbGlwIGJldHdlZW4gc3RhdGljIGFuZCByYW5kb20gbmFtZSBnZW5lcmF0aW9uXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQbGF5ZXJzT2JqKHBsYXllckNvdW50LCByYW5kb21OYW1lcykge1xyXG4gIGNvbnNvbGUubG9nKHN0b2NrTmFtZXMpO1xyXG4gIGNvbnN0IHRha2VuTmFtZXMgPSBbXTtcclxuICBjb25zdCBwbGF5ZXJzID0ge307XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwbGF5ZXJDb3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZ2V0UmFuZG9tSW50SW5SYW5nZSg1LCAxMCkpO1xyXG4gICAgaWYgKHJhbmRvbU5hbWVzKSB7XHJcbiAgICAgIGxldCBybmc7XHJcbiAgICAgIGxldCB0YWtlbiA9IHRydWU7XHJcbiAgICAgIC8vIGdlbmVyYXRlIHJhbmRvbSBudW1iZXIsIGNoZWNrIGlmIGl0J3MgYmVlbiB1c2VkLCBpZiBub3QsIGxvZyBhcyB1c2VkXHJcbiAgICAgIHdoaWxlICh0YWtlbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJuZyA9IGdldFJhbmRvbUludEluUmFuZ2UoMCwgMjI4KTtcclxuICAgICAgICBpZiAoIXRha2VuTmFtZXMuaW5jbHVkZXMocm5nKSkge1xyXG4gICAgICAgICAgdGFrZW5OYW1lcy5wdXNoKHJuZyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0YWtlbk5hbWVzKTtcclxuICAgICAgICAgIHRha2VuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHBsYXllcnNbaV0gPSBnZW5lcmF0ZVBsYXllcihzdG9ja05hbWVzW3JuZ10sIGksIDApO1xyXG4gICAgICAvLyBjb25zdCBtYXggPSBwbGF5ZXJDb3VudDtcclxuICAgICAgLy8gY29uc3QgbWluID0gcGxheWVyQ291bnQgLSA0O1xyXG4gICAgfVxyXG4gICAgaWYgKCFyYW5kb21OYW1lcykge1xyXG4gICAgICBwbGF5ZXJzW2ldID0gZ2VuZXJhdGVQbGF5ZXIoc3RvY2tOYW1lc1tpIC0gMV0sIGksIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcGxheWVycztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBsYXllck5hbWVzID0gW1widGVzdFwiXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsUGxheWVyU2V0dXAocGxheWVyT2JqZWN0KSB7XHJcbiAgY29uc3QgcGxheWVyQ291bnQgPSBPYmplY3Qua2V5cyhwbGF5ZXJPYmplY3QpLmxlbmd0aDtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJDb3VudDsgaSArPSAxKSB7XHJcbiAgICAvLyBwbGF5ZXJzIGluZGV4IGF0IDFcclxuICAgIC8vIGRpc3BsYXkgZGVmYXVsdCB1c2VybmFtZXMgYW5kIGluaXRhbCBzY29yZXNcclxuICAgIHBsYXllck9iamVjdFtpICsgMV0uZGlzcGxheVBsYXllck5hbWUoaSArIDEpO1xyXG5cclxuICAgIC8vIHBsYXllciBuYW1lcyBjYW4gYmUgY2xpY2tlZCB0byBvcGVuIHRoZSBjaGFuZ2UgZGlhbG9ndWVcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGF5ZXIke2kgKyAxfWApLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHBsYXllck9iamVjdFtpICsgMV0uY2hhbmdlUGxheWVyTmFtZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxheWVyQ291bnRJbnB1dCgpIHtcclxuICByZXR1cm4gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyQ291bnRcIikudmFsdWUpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQbGF5ZXJVSShwbGF5ZXJOdW1iZXIpIHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBzY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICBkaXYuY2xhc3NMaXN0LmFkZChcInBsYXllclwiKTtcclxuXHJcbiAgbmFtZS5pZCA9IGBwbGF5ZXIke3BsYXllck51bWJlcn1gO1xyXG5cclxuICBzY29yZS5jbGFzc0xpc3QuYWRkKFwic2NvcmVcIik7XHJcbiAgc2NvcmUuaWQgPSBgcGxheWVyJHtwbGF5ZXJOdW1iZXJ9U2NvcmVgO1xyXG5cclxuICBkaXYuYXBwZW5kKG5hbWUsIHNjb3JlKTtcclxuXHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG4iLCJpbXBvcnQgUGFwYSBmcm9tIFwicGFwYXBhcnNlXCI7XHJcbmltcG9ydCAqIGFzIGJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XHJcbmltcG9ydCAqIGFzIHBsYXllcnMgZnJvbSBcIi4vcGxheWVyc1wiO1xyXG5cclxubGV0IHF1ZXN0aW9uRGF0YSA9IFtdO1xyXG5cclxuLy8gY29udmVydCB0aGlzIHRvIGEgZnVuY3Rpb24gaW4gcGxheWVycyBtb2R1bGVcclxuLy8gY29uc3QgcGxheWVyQ291bnQgPSBwbGF5ZXJzLmdldFBsYXllckNvdW50SW5wdXQoKTtcclxuLy8gZXhwb3J0IGNvbnN0IHBsYXllck9iaiA9IHBsYXllcnMuZ2VuZXJhdGVQbGF5ZXJzT2JqKDIpO1xyXG5cclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUXVlc3Rpb25PYmplY3RGcm9tQ1NWKCkge1xyXG4gIGNvbnN0IHF1ZXN0aW9uT2JqID0ge307XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlc3Rpb25EYXRhLmxlbmd0aCAvIDI7IGkgKz0gMSkge1xyXG4gICAgcXVlc3Rpb25PYmpbYGNhdGVnb3J5JHtpfWBdID0ge1xyXG4gICAgICB0b3BpYzogcXVlc3Rpb25EYXRhWzIgKiBpXVswXSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gc3RhcnQgZnJvbSBpbmRleCAxIHRvIGFjY291bnQgZm9yIGNzdiB0b3BpYyBmb3JtYXR0aW5nXHJcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8IHF1ZXN0aW9uRGF0YVswXS5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhxdWVzdGlvbkRhdGFbMiAqIGldLmxlbmd0aCk7XHJcbiAgICAgIHF1ZXN0aW9uT2JqW2BjYXRlZ29yeSR7aX1gXVtgcXVlc3Rpb24ke2p9YF0gPSB7XHJcbiAgICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uRGF0YVsyICogaV1bal0sXHJcbiAgICAgICAgYW5zd2VyOiBxdWVzdGlvbkRhdGFbMiAqIGkgKyAxXVtqXSxcclxuICAgICAgfTtcclxuICAgICAgLy8gcXVlc3Rpb25PYmpbaV1bYHF1ZXN0aW9uJHtqfWBdID0gcXVlc3Rpb25EYXRhWzIgKiBpXVtqXTtcclxuICAgICAgLy8gcXVlc3Rpb25PYmpbaV1bYGFuc3dlciR7an1gXSA9IHF1ZXN0aW9uRGF0YVsyICogaSArIDFdW2pdO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcXVlc3Rpb25PYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRRdWVzdGlvbk1vZGFsRXZlbnRMaXN0ZW5lcihxdWVzdGlvbk9iamVjdCwgcGxheWVyT2JqKSB7XHJcbiAgLy8gY29uc3QgcXVlc3Rpb25UaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb25cIik7XHJcbiAgLy8gY29uc29sZS5sb2cocXVlc3Rpb25UaWxlcyk7XHJcblxyXG4gIGNvbnN0IGNhdGVnb3J5Q291bnQgPSBPYmplY3Qua2V5cyhxdWVzdGlvbk9iamVjdCkubGVuZ3RoO1xyXG4gIGNvbnN0IHF1ZXN0aW9uQ291bnQgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVnb3J5Q291bnQ7IGkgKz0gMSkge1xyXG4gICAgLy8gLTEgZnJvbSBsZW5ndGggdG8gYWNjb3VudCBmb3IgJ3RvcGljJyBrZXlcclxuICAgIHF1ZXN0aW9uQ291bnQucHVzaChPYmplY3Qua2V5cyhxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF0pLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5UXVlc3Rpb25UaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIGAjY2F0ZWdvcnkke2l9IC5xdWVzdGlvbmAsXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBxdWVzdGlvbkNvdW50W2ldOyBqICs9IDEpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coY2F0ZWdvcnlRdWVzdGlvblRpbGVzKTtcclxuICAgICAgY2F0ZWdvcnlRdWVzdGlvblRpbGVzW2pdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhdGVnb3J5UXVlc3Rpb25UaWxlc1tqXS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWtlblwiKSkgcmV0dXJuO1xyXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9XHJcbiAgICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF1bYHF1ZXN0aW9uJHtqICsgMX1gXS5xdWVzdGlvbjtcclxuXHJcbiAgICAgICAgY29uc3QgYW5zd2VyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBhbnN3ZXJCdXR0b24udGV4dENvbnRlbnQgPSBcIkFuc3dlclwiO1xyXG5cclxuICAgICAgICBhbnN3ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgIGlmIChhbnN3ZXJCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnV0dG9uRGlzYWJsZWRcIikpIHJldHVybjtcclxuICAgICAgICAgIGFuc3dlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uRGlzYWJsZWRcIik7XHJcblxyXG4gICAgICAgICAgLy8gY29uc3QgcGxheWVyTmFtZXMgPSBbXHJcbiAgICAgICAgICAvLyAgIHBsYXllck9ialsxXS5uYW1lLFxyXG4gICAgICAgICAgLy8gICBwbGF5ZXJPYmpbMl0ubmFtZSxcclxuICAgICAgICAgIC8vICAgcGxheWVyT2JqWzNdLm5hbWUsXHJcbiAgICAgICAgICAvLyAgIHBsYXllck9ials0XS5uYW1lLFxyXG4gICAgICAgICAgLy8gXTtcclxuICAgICAgICAgIGNvbnN0IHBsYXllckNvdW50ID0gT2JqZWN0LmtleXMocGxheWVyT2JqKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgbW9kYWwuaW5uZXJIVE1MICs9XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXVtgcXVlc3Rpb24ke2ogKyAxfWBdLmFuc3dlcjtcclxuXHJcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzY29yZUJ1dHRvbnNcIik7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBwbGF5ZXJDb3VudDsgayArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTY29yZSA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5UXVlc3Rpb25UaWxlc1tqXS50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgICAxMCxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgc2NvcmVCdXR0b24udGV4dENvbnRlbnQgPSBwbGF5ZXJPYmpbayArIDFdLm5hbWU7XHJcbiAgICAgICAgICAgIHNjb3JlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHNjb3JlQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImJ1dHRvbkRpc2FibGVkXCIpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgcGxheWVyT2JqW2sgKyAxXS5pbmNyZW1lbnRQbGF5ZXJTY29yZShjdXJyZW50U2NvcmUpO1xyXG4gICAgICAgICAgICAgIHBsYXllck9ialtrICsgMV0uZGlzcGxheVBsYXllclNjb3JlKGsgKyAxKTtcclxuICAgICAgICAgICAgICBzY29yZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uRGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kKHNjb3JlQnV0dG9uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1vZGFsLmFwcGVuZChkaXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1vZGFsLmFwcGVuZChhbnN3ZXJCdXR0b24pO1xyXG5cclxuICAgICAgICBjYXRlZ29yeVF1ZXN0aW9uVGlsZXNbal0uY2xhc3NMaXN0LmFkZChcInRha2VuXCIpO1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0SnNvblRvT2JqZWN0KGpzb24pIHtcclxuICAvLyByZW1vdmUgdGhpcz9cclxuICBjb25zdCBvYmogPSBKU09OLnBhcnNlKGpzb24pO1xyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVzdGlvbkRhdGEoY3N2RmlsZSwgcGxheWVyT2JqKSB7XHJcbiAgLy8gXCIuLi9zcmMvcXVlc3Rpb25zL1RyaXZpYSAtIFF1ZXN0aW9ucy5jc3ZcIiBsb2NhbCBmaWxlbmFtZVxyXG4gIFBhcGEucGFyc2UoY3N2RmlsZS5maWxlc1swXSwge1xyXG4gICAgZG93bmxvYWQ6IHRydWUsXHJcbiAgICBjb21wbGV0ZShyZXN1bHRzKSB7XHJcbiAgICAgIHF1ZXN0aW9uRGF0YSA9IHJlc3VsdHMuZGF0YTtcclxuICAgICAgY29uc3QgcXVlc3Rpb25PYmogPSBnZW5lcmF0ZVF1ZXN0aW9uT2JqZWN0RnJvbUNTVigpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhxdWVzdGlvbkRhdGEpO1xyXG4gICAgICBib2FyZC5jcmVhdGVRdWVzdGlvbkdyaWQocXVlc3Rpb25PYmopO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhxdWVzdGlvbk9iaik7XHJcbiAgICAgIGFkZFF1ZXN0aW9uTW9kYWxFdmVudExpc3RlbmVyKHF1ZXN0aW9uT2JqLCBwbGF5ZXJPYmopO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHRzLmRhdGEpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4iLCJjb25zdCBzdG9ja05hbWVzID0gW1xyXG4gIFwiQ2hhc2VcIixcclxuICBcIkV0aGFuXCIsXHJcbiAgXCJTdGFuXCIsXHJcbiAgXCJUYXlsb3JcIixcclxuICBcIkFsZXhhbmRlclwiLFxyXG4gIFwiQW1hcmlcIixcclxuICBcIkpheWNlXCIsXHJcbiAgXCJOYXRoYW5cIixcclxuICBcIkFhcm9uXCIsXHJcbiAgXCJCcnljZVwiLFxyXG4gIFwiSHVudGVyXCIsXHJcbiAgXCJKYWNvYlwiLFxyXG4gIFwiTmFzaXJcIixcclxuICBcIk1hdHRoZXdcIixcclxuICBcIlByaW5jZVwiLFxyXG4gIFwiWGF2aWVyXCIsXHJcbiAgXCJLYXJ0ZXJcIixcclxuICBcIlRyaXN0YW5cIixcclxuICBcIkpvbmF0aGFuXCIsXHJcbiAgXCJKdXN0aW5cIixcclxuICBcIlR5bGVyXCIsXHJcbiAgXCJLYWxlYlwiLFxyXG4gIFwiU2ViYXN0aWFuXCIsXHJcbiAgXCJBeWRlblwiLFxyXG4gIFwiSmFzb25cIixcclxuICBcIkpvc2VwaFwiLFxyXG4gIFwiQXVzdGluXCIsXHJcbiAgXCJKYWRlblwiLFxyXG4gIFwiTmF0aGFuaWVsXCIsXHJcbiAgXCJTYW11ZWxcIixcclxuICBcIkR5bGFuXCIsXHJcbiAgXCJKYW1lc1wiLFxyXG4gIFwiSm9lbFwiLFxyXG4gIFwiQXNoZXJcIixcclxuICBcIkthaVwiLFxyXG4gIFwiQ2FsZWJcIixcclxuICBcIkdhYnJpZWxcIixcclxuICBcIkpheWNlb25cIixcclxuICBcIk1hbWFkb3VcIixcclxuICBcIkVtbWFudWVsXCIsXHJcbiAgXCJaYWNoYXJ5XCIsXHJcbiAgXCJFemVraWVsXCIsXHJcbiAgXCJOaWNob2xhc1wiLFxyXG4gIFwiWmFpcmVcIixcclxuICBcIkFkb25pc1wiLFxyXG4gIFwiQmVuamFtaW5cIixcclxuICBcIkFzaHRvblwiLFxyXG4gIFwiQXZlcnlcIixcclxuICBcIkthbWVyb25cIixcclxuICBcIkxlZ2VuZFwiLFxyXG4gIFwiTGV2aVwiLFxyXG4gIFwiTHVjYXNcIixcclxuICBcIkFuZHJld1wiLFxyXG4gIFwiRWxpXCIsXHJcbiAgXCJKdWxpYW5cIixcclxuICBcIk9tYXJpXCIsXHJcbiAgXCJBZGFtXCIsXHJcbiAgXCJFenJhXCIsXHJcbiAgXCJDYWlyb1wiLFxyXG4gIFwiSXNyYWVsXCIsXHJcbiAgXCJKYWlkZW5cIixcclxuICBcIkpheG9uXCIsXHJcbiAgXCJKdXN0aWNlXCIsXHJcbiAgXCJLYW1hcmlcIixcclxuICBcIkJyYW5kb25cIixcclxuICBcIkdyZXlzb25cIixcclxuICBcIk11aGFtbWFkXCIsXHJcbiAgXCJTaW5jZXJlXCIsXHJcbiAgXCJBbmRyZVwiLFxyXG4gIFwiSWJyYWhpbWFcIixcclxuICBcIkphY2tzb25cIixcclxuICBcIkpheWxlblwiLFxyXG4gIFwiS2FkZW5cIixcclxuICBcIkFiZG91bGF5ZVwiLFxyXG4gIFwiQ2FpZGVuXCIsXHJcbiAgXCJDaGFuY2VcIixcclxuICBcIkV2YW5cIixcclxuICBcIkdpb3Zhbm5pXCIsXHJcbiAgXCJHcmF5c29uXCIsXHJcbiAgXCJLZXZpblwiLFxyXG4gIFwiT21hclwiLFxyXG4gIFwiU2hhd25cIixcclxuICBcIkF1Z3VzdFwiLFxyXG4gIFwiSXNhYWNcIixcclxuICBcIktoYWxpbFwiLFxyXG4gIFwiS3lsZVwiLFxyXG4gIFwiTWFyY3VzXCIsXHJcbiAgXCJaYW5lXCIsXHJcbiAgXCJBbGlcIixcclxuICBcIk1haXNvblwiLFxyXG4gIFwiUHJpbmNldG9uXCIsXHJcbiAgXCJSb2JlcnRcIixcclxuICBcIkFjZVwiLFxyXG4gIFwiQnJ5YW5cIixcclxuICBcIkdpYW5uaVwiLFxyXG4gIFwiSmFtZWxcIixcclxuICBcIkphbWlyXCIsXHJcbiAgXCJKb2huXCIsXHJcbiAgXCJOb2xhblwiLFxyXG4gIFwiT3VzbWFuZVwiLFxyXG4gIFwiQWxwaGFcIixcclxuICBcIkFtYWRvdVwiLFxyXG4gIFwiSmF4c29uXCIsXHJcbiAgXCJLYXJlZW1cIixcclxuICBcIktpbmdzdG9uXCIsXHJcbiAgXCJMdWtlXCIsXHJcbiAgXCJNZWtoaVwiLFxyXG4gIFwiTXlsZXNcIixcclxuICBcIlN0ZXBoZW5cIixcclxuICBcIkFkZW5cIixcclxuICBcIkFkcmlhblwiLFxyXG4gIFwiQWxleFwiLFxyXG4gIFwiQm91YmFjYXJcIixcclxuICBcIkNheWRlblwiLFxyXG4gIFwiQ29ubm9yXCIsXHJcbiAgXCJDb3JleVwiLFxyXG4gIFwiRGFsbGFzXCIsXHJcbiAgXCJIYXlkZW5cIixcclxuICBcIkpvbmFoXCIsXHJcbiAgXCJLYW1yZW5cIixcclxuICBcIk1ham9yXCIsXHJcbiAgXCJQaG9lbml4XCIsXHJcbiAgXCJTZWFuXCIsXHJcbiAgXCJBYmRvdWxcIixcclxuICBcIkNhcnNvblwiLFxyXG4gIFwiRG9taW5pY1wiLFxyXG4gIFwiSmFzaWFoXCIsXHJcbiAgXCJKdWxpdXNcIixcclxuICBcIktlbm5ldGhcIixcclxuICBcIkxhbmRvblwiLFxyXG4gIFwiTWFsaWtcIixcclxuICBcIk1hcmtcIixcclxuICBcIk1pbGVzXCIsXHJcbiAgXCJNb3VoYW1lZFwiLFxyXG4gIFwiT3VtYXJcIixcclxuICBcIlNhbWlyXCIsXHJcbiAgXCJTb2xvbW9uXCIsXHJcbiAgXCJUaW1vdGh5XCIsXHJcbiAgXCJXaWxsaWFtXCIsXHJcbiAgXCJaYXlkZW5cIixcclxuICBcIkxpYW1cIixcclxuICBcIkphY29iXCIsXHJcbiAgXCJEeWxhblwiLFxyXG4gIFwiTWF0dGhld1wiLFxyXG4gIFwiTm9haFwiLFxyXG4gIFwiU2ViYXN0aWFuXCIsXHJcbiAgXCJKYXlkZW5cIixcclxuICBcIkx1Y2FzXCIsXHJcbiAgXCJFdGhhblwiLFxyXG4gIFwiQWFyb25cIixcclxuICBcIkFuZ2VsXCIsXHJcbiAgXCJEYW5pZWxcIixcclxuICBcIkxvZ2FuXCIsXHJcbiAgXCJBbGV4YW5kZXJcIixcclxuICBcIk1hc29uXCIsXHJcbiAgXCJBaWRlblwiLFxyXG4gIFwiTWF0ZW9cIixcclxuICBcIkpvc2h1YVwiLFxyXG4gIFwiRGF2aWRcIixcclxuICBcIkFkcmlhblwiLFxyXG4gIFwiQW50aG9ueVwiLFxyXG4gIFwiTWljaGFlbFwiLFxyXG4gIFwiSm9zZXBoXCIsXHJcbiAgXCJJYW5cIixcclxuICBcIkNocmlzdG9waGVyXCIsXHJcbiAgXCJFbGlhc1wiLFxyXG4gIFwiR2FicmllbFwiLFxyXG4gIFwiUnlhblwiLFxyXG4gIFwiSXNhYWNcIixcclxuICBcIkpvc2VcIixcclxuICBcIlRoaWFnb1wiLFxyXG4gIFwiRWxpamFoXCIsXHJcbiAgXCJKYW1lc1wiLFxyXG4gIFwiT2xpdmVyXCIsXHJcbiAgXCJKb3NpYWhcIixcclxuICBcIk5hdGhhblwiLFxyXG4gIFwiSnVsaWFuXCIsXHJcbiAgXCJKdXN0aW5cIixcclxuICBcIkNhcmxvc1wiLFxyXG4gIFwiR2FlbFwiLFxyXG4gIFwiTHVpc1wiLFxyXG4gIFwiQWxhblwiLFxyXG4gIFwiSmVyZW15XCIsXHJcbiAgXCJKb25hdGhhblwiLFxyXG4gIFwiTGVvbmFyZG9cIixcclxuICBcIktldmluXCIsXHJcbiAgXCJTYW11ZWxcIixcclxuICBcIkplcmVtaWFoXCIsXHJcbiAgXCJCZW5qYW1pblwiLFxyXG4gIFwiTmljaG9sYXNcIixcclxuICBcIkNocmlzdGlhblwiLFxyXG4gIFwiSm9oblwiLFxyXG4gIFwiU2FudGlhZ29cIixcclxuICBcIkF4ZWxcIixcclxuICBcIkVyaWNrXCIsXHJcbiAgXCJCcmFuZG9uXCIsXHJcbiAgXCJKb2VsXCIsXHJcbiAgXCJKdWFuXCIsXHJcbiAgXCJNYXRpYXNcIixcclxuICBcIldpbGxpYW1cIixcclxuICBcIkFuZHJld1wiLFxyXG4gIFwiRGllZ29cIixcclxuICBcIklzYWlhaFwiLFxyXG4gIFwiTmljb2xhc1wiLFxyXG4gIFwiWGF2aWVyXCIsXHJcbiAgXCJBeWRlblwiLFxyXG4gIFwiQXVzdGluXCIsXHJcbiAgXCJKYXNvblwiLFxyXG4gIFwiRW1tYW51ZWxcIixcclxuICBcIktheWRlblwiLFxyXG4gIFwiSmF5Y2VcIixcclxuICBcIkNhbGViXCIsXHJcbiAgXCJCcnlhblwiLFxyXG4gIFwiSm9yZGFuXCIsXHJcbiAgXCJOYXRoYW5pZWxcIixcclxuICBcIkFsZWphbmRyb1wiLFxyXG4gIFwiRGFtaWFuXCIsXHJcbiAgXCJEZXJla1wiLFxyXG4gIFwiSmFkaWVsXCIsXHJcbiAgXCJFbGlcIixcclxuICBcIk1hdHRlb1wiLFxyXG4gIFwiQWRhbVwiLFxyXG4gIFwiQWxleFwiLFxyXG4gIFwiSmFjZVwiLFxyXG4gIFwiSGVucnlcIixcclxuICBcIkpvc3VlXCIsXHJcbiAgXCJNaWd1ZWxcIixcclxuICBcIkV2YW5cIixcclxuICBcIkdyYXlzb25cIixcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b2NrTmFtZXM7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFBhcGEgZnJvbSBcInBhcGFwYXJzZVwiO1xyXG5pbXBvcnQgKiBhcyBxdWVzdGlvbiBmcm9tIFwiLi9xdWVzdGlvbk1vZGFsXCI7XHJcbmltcG9ydCAqIGFzIHBsYXllcnMgZnJvbSBcIi4vcGxheWVyc1wiO1xyXG5pbXBvcnQgKiBhcyBib2FyZCBmcm9tIFwiLi9ib2FyZFwiO1xyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTY0MjcwMDkvaG93LXRvLXJldHVybi1wYXBhLXBhcnNlZC1jc3YtdmlhLXByb21pc2UtYXN5bmMtYXdhaXRcclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjI5MDU5MzMvaXRlcmF0aW5nLW92ZXItcmVzdWx0cy1vZi1wYXBhLXBhcnNlLW9iamVjdFxyXG4vLyByZXZpZXcgdGhlc2UgZm9yIHBlcnN1aW5nIGF3YWl0L3Byb21pc2VzIHdpdGggcGFwYXBhcnNlXHJcbi8vIFRPRE8gcmVtb3ZlIHRleHQgaW5zdGVhZCBvZiBzZXR0aW5nIGl0IHRvIGJvZHkgY29sb3JcclxuXHJcbi8vIFRPRE8gcmVtb3ZlIHRoZSB2YXJpb3VzIGNvbnNvbGUubG9nIGRlYnVnZ2luZyBsaW5lc1xyXG5cclxuLy8gVE9ETyBjaGFuZ2UgZmlsZSBmcm9tIHNvdXJjZSBkb2N1bWVudCB0byB1c2VyIHVwbG9hZGVkIHZpYSBidXR0b25cclxuLy8gZXhwYW5kIHBsYXllciBjcmVhdGlvbiB0byBzdXBwb3J0IGFueSBudW1iZXIgb2YgcGxheWVycyAtIHBsYXllcnNldHVwIGNhbiBiZSBmZWQgYSBwbGF5ZXIgb2JqZWN0IGFuZCBsb29wZWRcclxuLy8gY2hhbmdlIHBsYXllciBuYW1lIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGEgbG9vcCBiYXNlZCBvbiBwbGF5ZXIgY291bnRcclxuLy8gcGxheWVycyBtb2R1bGUgcmVtb3ZlIHByb21wdCBmb3IgYmV0dGVyIGN1c3RvbSBzb2x1dGlvblxyXG4vLyBvbmUgb3B0aW9uIGZvciBpbWFnZXMsIGlmIChxdWVzdGlvbiBkYXRhID09PSBpbWcgZmlsZSBuYW1lKSBzZXQgaW1nXHJcbi8vIGV4cGFuZCBzdG9jayBuYW1lc1xyXG4vLyBvbmx5IGFsbG93IHVwbG9hZCBpZiAoZmlsZUlucHV0KSBidXR0b24gIWRpc2FibGVkXHJcbi8vIGdyb3VwIGNzcyB0b2dldGhlciBiZXR0ZXJcclxuLy8gZmlndXJlIG91dCBob3cgdG8gY29sbGVjdCBwb2ludCB2YWx1ZSBmcm9tIGNzdiBpbnB1dFxyXG4vLyBzdG9wIGdhdGhlcmluZyBxdWVzdGlvbjAsIGFscmVhZHkgY292ZXJlZCBpbiB0b3BpY1xyXG4vLyBjbGVhbnVwIGluZGV4XHJcbi8vIGNvbnNpZGVyIGFzeW5jIGZvciAuanNvblxyXG4vLyBjaGFuZ2UgYm9hcmQgbG9naWMgdG8gYWNjb3VudCBmb3IgYXN5bW1ldHJpYyBjYXRlZ29yaWVzIC0gbG9vcCBhbGwgY2F0ZWdvcmllcyB0byBmaW5kIHVuaXF1ZSBxdWVzdGlvbiBjb3VudHNcclxuLy8gZGlzYWJsZSBvdmVybGF5IGNsb3NpbmcgdW50aWwgYXQgbGVhc3QgYW5zd2VyIGJ1dHRvbiBjbGlja2VkXHJcbi8vIGZpeCBib2FyZCBidWlsZCBvbiBub24tc3F1YXJlIGJvYXJkc1xyXG4vLyBjb25zaWRlciBleHBvcnRpbmcgY2F0ZWdvcnkvcXVlc3Rpb24gY291bnRzIGZyb20gYm9hcmRcclxuLy8gbWlncmF0ZSB0byBjbGFzc2xpc3QgdnMgY3VzdG9tIGZ1bmN0aW9uXHJcbi8vIGNoYW5nZSBwbGF5ZXIgbmFtZSBieSBzb21ldGhpbmcgb3RoZXIgdGhhbiBwcm9tcHQoKVxyXG4vLyBtZXRob2QgdG8gZWRpdCBzY29yZXNcclxuLy8gbG9vayBpbnRvIHN0YW5kYXJkaXppbmcgdG9waWMgZGl2IGhlaWdodFxyXG4vLyBjb25zaWRlciByZXNldHRpbmcgcGxheWVyIG5hbWVzIG9uIG5ldyBnYW1lXHJcbi8vIGZpbGUgaW5wdXQgc3R5bGluZ1xyXG4vLyBtb3ZlIGluaXRpYWwgcGxheWVyIHNldHVwIGluc2lkZSBnYW1lIHN0YXJ0IGJ1dHRvblxyXG4vLyBtb3ZlIHBsYXllck9iaiBnZW4gaW5zaWRlIHVwbG9hZCBidXR0b25cclxuLy8gaGF2ZSBjaGFuZ2VkIHBsYXllciBuYW1lcyBjYXJyeW92ZXIgb24gYSBuZXcgZ2FtZVxyXG4vLyB0aGluayBhYm91dCBmbGV4d3JhcCBlcXVhbCBudW1iZXJzIG9uIGxpbmVzXHJcblxyXG4vLyBJbml0aWFsaXplIHRoZSBwbGF5ZXIgb2JqZWN0XHJcbmxldCBwbGF5ZXJPYmo7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhwbGF5ZXJPYmopO1xyXG4vLyBjb25zb2xlLmxvZyhwbGF5ZXJzLmdldFBsYXllckNvdW50SW5wdXQoKSk7XHJcblxyXG5jb25zdCBmaWxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGVJbnB1dFwiKTtcclxuY29uc3QgdXBsb2FkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxvYWRcIik7XHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcclxuY29uc3QgdXBsb2FkV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBsb2FkV3JhcHBlclwiKTtcclxuXHJcbmNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbnJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoZXZlbnQpID0+IHtcclxuICBjb25zdCBmaWxlRGF0YSA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgLy8gY29uc29sZS5sb2coZmlsZURhdGEpO1xyXG4gIGNvbnN0IGpzb25PYmogPSBKU09OLnBhcnNlKGZpbGVEYXRhKTtcclxuICAvLyBjb25zb2xlLmxvZyhqc29uT2JqKTtcclxuICBib2FyZC5jcmVhdGVRdWVzdGlvbkdyaWQoanNvbk9iaik7XHJcbiAgcXVlc3Rpb24uYWRkUXVlc3Rpb25Nb2RhbEV2ZW50TGlzdGVuZXIoanNvbk9iaiwgcGxheWVyT2JqKTtcclxufSk7XHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlUmVhZGVyL3JlYWRBc1RleHRcclxuXHJcbmxldCByYW5kb21OYW1lc0Jvb2wgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVJhbmRvbU5hbWVzKCkge1xyXG4gIGlmICghcmFuZG9tTmFtZXNCb29sKSB7XHJcbiAgICByYW5kb21OYW1lc0Jvb2wgPSB0cnVlO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAocmFuZG9tTmFtZXNCb29sKSB7XHJcbiAgICByYW5kb21OYW1lc0Jvb2wgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuY29uc3QgcmFuZG9tTmFtZXNJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kb21OYW1lc0ljb25cIik7XHJcbnJhbmRvbU5hbWVzSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHJhbmRvbU5hbWVzSWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZ3JlZW5cIik7XHJcbiAgdG9nZ2xlUmFuZG9tTmFtZXMoKTtcclxuICAvLyBjb25zb2xlLmxvZyhyYW5kb21OYW1lc0Jvb2wpO1xyXG59KTtcclxuXHJcbmNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dhbWVCdXR0b25cIik7XHJcbm5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAvLyBzaG93L2hpZGUgbmV3IGdhbWUgZWxlbWVudHNcclxuICBpZiAodXBsb2FkV3JhcHBlci5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgdXBsb2FkV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHVwbG9hZFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4vLyBvdmVybGF5IHByb3ZpZGVzIGEgc2VtaS10cmFuc3BhcmVudCBibHVyIGJlaGluZCB0aGUgbW9kYWwgdG8gaGVscCBmb2N1cyBhdHRlbnRpb24gb24gbW9kYWxcclxuLy8gd2hlbiB0aGUgb3ZlcmxheSBiYWNrZ3JvdW5kIGlzIGNsaWNrZWQgYW55d2hlcmUsIHRoZSBtb2RhbCByZWdhaW5zIHRoZSBoaWRkZW4gY2xhc3MgYW5kIGRpc2FwcGVhcnNcclxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG59KTtcclxuXHJcbnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHBsYXllck9iaiA9IHBsYXllcnMuZ2VuZXJhdGVQbGF5ZXJzT2JqKFxyXG4gICAgcGxheWVycy5nZXRQbGF5ZXJDb3VudElucHV0KCksXHJcbiAgICByYW5kb21OYW1lc0Jvb2wsXHJcbiAgKTtcclxuICBjb25zdCBwbGF5ZXJDb3VudCA9IE9iamVjdC5rZXlzKHBsYXllck9iaikubGVuZ3RoO1xyXG5cclxuICBjb25zdCBwbGF5ZXJTY29yZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllclNjb3Jlc1wiKTtcclxuICAvLyBjbGVhciBodG1sIGVsZW1lbnRzIGZvciBwbGF5ZXIgc2NvcmVzIHRvIGF2b2lkIGR1cGxpY2F0ZXMgb24gc3RhcnRpbmcgbmV3IGdhbWVcclxuICBwbGF5ZXJTY29yZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBsYXllckNvdW50ICsgMTsgaSArPSAxKSB7XHJcbiAgICBwbGF5ZXJTY29yZXMuYXBwZW5kKHBsYXllcnMuY3JlYXRlUGxheWVyVUkoaSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc29sZS5sb2cocGxheWVyT2JqKTtcclxuICBwbGF5ZXJzLmluaXRpYWxQbGF5ZXJTZXR1cChwbGF5ZXJPYmopO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBsYXllckNvdW50ICsgMTsgaSArPSAxKSB7XHJcbiAgICBwbGF5ZXJPYmpbaV0uc2NvcmUgPSAwO1xyXG4gICAgcGxheWVyT2JqW2ldLmRpc3BsYXlQbGF5ZXJTY29yZShpLCAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGlucHV0RmlsZSA9IGZpbGVJbnB1dC5maWxlc1swXTtcclxuICBjb25zdCBmaWxlVHlwZSA9IGlucHV0RmlsZS50eXBlLm1hdGNoKC9jc3Z8anNvbi8pO1xyXG5cclxuICAvLyBtYXRjaCByZXR1cm5zIG1hdGNoZWQgZ3JvdXAgaW4gYW4gYXJyYXlcclxuICBpZiAoZmlsZVR5cGVbMF0gPT09IFwiY3N2XCIpIHF1ZXN0aW9uLmdldFF1ZXN0aW9uRGF0YShmaWxlSW5wdXQsIHBsYXllck9iaik7XHJcbiAgaWYgKGZpbGVUeXBlWzBdID09PSBcImpzb25cIikge1xyXG4gICAgLy8gYm9hcmQuY3JlYXRlUXVlc3Rpb25HcmlkKDQyLCBqc29uT2JqKTtcclxuICAgIC8vIHF1ZXN0aW9uLmFkZFF1ZXN0aW9uTW9kYWxFdmVudExpc3RlbmVyKGpzb25PYmopO1xyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoaW5wdXRGaWxlKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XHJcbiAgY29uc3QgaW1hZ2VzID0ge307XHJcbiAgLy8gZW5jbG9zaW5nIGJyYWNrZXQgYXJvdW5kIHJldHVybiB0byBhdm9pZCBhbWJpZ3VvdXMgYXNzaWdubWVudCBpbiBhIHJldHVyblxyXG4gIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgLy8gcmVtb3ZlIGxlYWRpbmcgLi8gZnJvbSBmaWxlIG5hbWVzXHJcbiAgICBjb25zdCB0ZW1wID0ga2V5LnJlcGxhY2UoXCIuL1wiLCBcIlwiKTtcclxuICAgIC8vIG9yIG9wdGlvbiBmaXggY2FzZSB3aGVyZSBsYXN0SW5kZXhPZiA9PT0gLTFcclxuICAgIC8vIHJlbW92ZSB0cmFpbGluZyBmaWxlIGV4dGVuc2lvbnMgZnJvbSBmaWxlIG5hbWVzIChlLmcuIC5wbmcpXHJcbiAgICBjb25zdCB0ZW1wMiA9IHRlbXAuc3Vic3RyKDAsIHRlbXAubGFzdEluZGV4T2YoXCIuXCIpKSB8fCB0ZW1wO1xyXG4gICAgLy8gY29uc29sZS5sb2codGVtcDIpO1xyXG4gICAgaW1hZ2VzW3RlbXAyXSA9IHIoa2V5KTtcclxuICB9KTtcclxuICAvLyBhbHRlcm5hdGUgbWFwIG1ldGhvZFxyXG4gIC8vIHIua2V5cygpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAvLyAgIGltYWdlc1tpdGVtLnJlcGxhY2UoXCIuL1wiLCBcIlwiKV0gPSByKGl0ZW0pO1xyXG4gIC8vIH0pO1xyXG4gIHJldHVybiBpbWFnZXM7XHJcbn1cclxuXHJcbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoXCIuL2ltZ1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XHJcbi8vIGNvbnNvbGUubG9nKGltYWdlcyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==