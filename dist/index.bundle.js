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
  position: relative;
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

#playerCountWrap {
  display: flex;
  align-items: center;
  gap: 0.2rem;
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
  overflow: auto;
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

#dimmDoubleHat {
  display: none;
  position: absolute;
  top: 50%;
  left: 0;
  transform-origin: center center;
  animation: scrollAndRotate 2s linear 3;
  z-index: 3;
}
/* Define the keyframes for scrolling and rotating */
@keyframes scrollAndRotate {
  0% {
    left: 0; /* Change this value to adjust the scrolling distance */
    transform: rotate(0deg);
  }
  50% {
    left: 50%;
    transform: rotate(1turn);
  }
  100% {
    left: 100%;
    transform: rotate(2turn); /* Rotate 360 degrees */
  }
}

#dimmadome {
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 20%;
  z-index: 3;
  font-size: 4rem;

  -webkit-text-stroke: 1px black;

  background: linear-gradient(
      to right,
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 154, 0, 1) 10%,
      rgba(208, 222, 33, 1) 20%,
      rgba(79, 220, 74, 1) 30%,
      rgba(63, 218, 216, 1) 40%,
      rgba(47, 201, 226, 1) 50%,
      rgba(28, 127, 238, 1) 60%,
      rgba(95, 21, 242, 1) 70%,
      rgba(186, 12, 248, 1) 80%,
      rgba(251, 7, 217, 1) 90%,
      rgba(255, 0, 0, 1) 100%
    )
    0 0/200% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: waveAnimation 3s linear 2;
}

@keyframes waveAnimation {
  to {
    background-position: -200% 0;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n  background-color: gray;\r\n  text-align: center;\r\n  position: relative;\r\n  overflow: auto;\r\n}\r\n\r\n#iconWrap {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: end;\r\n}\r\n\r\n#newGameButton,\r\n#randomNamesIcon {\r\n  height: 30px;\r\n  aspect-ratio: 1/1;\r\n  cursor: pointer;\r\n  /* https://codepen.io/sosuke/pen/Pjoqqp */\r\n}\r\n\r\n.green {\r\n  filter: invert(21%) sepia(96%) saturate(3706%) hue-rotate(102deg)\r\n    brightness(96%) contrast(106%);\r\n}\r\n\r\n#title h1 {\r\n  font-size: 4rem;\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n#uploadWrapper {\r\n  margin-top: 1rem;\r\n  padding: 1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n#inputWrap {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0.5rem;\r\n  gap: 0.5rem;\r\n  border: 2px solid black;\r\n  border-radius: 8px;\r\n  background-color: rgb(75, 118, 199, 0.8);\r\n  font-size: 20px;\r\n}\r\n\r\n#playerCountWrap {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.2rem;\r\n}\r\n\r\n#upload {\r\n  padding: 1rem;\r\n  font-size: 24px;\r\n  font-family: \"Times New Roman\", Times, serif;\r\n  background-color: rgb(75, 118, 199, 0.8);\r\n  border: 2px solid black;\r\n  border-radius: 8px;\r\n}\r\n#upload:hover {\r\n  background-color: rgba(172, 255, 47, 0.568);\r\n  cursor: pointer;\r\n}\r\n\r\n#playerScores {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  gap: 1rem;\r\n  flex-wrap: wrap;\r\n  font-size: 30px;\r\n}\r\n.player {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 2px;\r\n  background-color: rgba(199, 38, 113, 0.384);\r\n  border: 2px solid black;\r\n  border-radius: 8px;\r\n  padding: 0 0.5rem;\r\n}\r\n.player p:first-child {\r\n  cursor: pointer;\r\n}\r\n\r\n#playerScores p {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n#game {\r\n  margin-top: 2rem;\r\n}\r\n\r\n#gridWrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n  gap: 10px;\r\n  height: 50vh;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n.category {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.question,\r\n.questionTopic {\r\n  background-color: rgb(75, 118, 199, 0.8);\r\n  border: 2px solid black;\r\n  border-radius: 8px;\r\n  aspect-ratio: 2/1;\r\n  width: min(15vw, 200px);\r\n  /* text-align appears to be needed for top left grid square...no idea why */\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow: auto;\r\n}\r\n\r\n.taken {\r\n  background-color: gray;\r\n  color: gray;\r\n  border-color: gray;\r\n}\r\n\r\n.modal {\r\n  width: 60%;\r\n  background-color: white;\r\n  border: 1px black solid;\r\n  border-radius: 4px;\r\n  padding: 2rem;\r\n  position: fixed;\r\n  top: 15%;\r\n  left: 20%;\r\n  z-index: 2;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  font-size: 24px;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(3px);\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\nimg {\r\n  height: 30vh;\r\n}\r\n.scoreButtons {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.modal button {\r\n  background-color: #f0f0f0;\r\n  border: 1px solid gray;\r\n  border-radius: 8px;\r\n  padding: 3px 6px;\r\n}\r\n.modal button:hover {\r\n  background-color: #dddcdc;\r\n}\r\n\r\n/* duplicated selector to override (.scoreButtons button) \r\nselector above, 0-1-1 vs 0-2-0 */\r\n.buttonDisabled.buttonDisabled {\r\n  background-color: #dddcdc;\r\n  opacity: 0.5;\r\n}\r\n\r\n#dimmDoubleHat {\r\n  display: none;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  transform-origin: center center;\r\n  animation: scrollAndRotate 2s linear 3;\r\n  z-index: 3;\r\n}\r\n/* Define the keyframes for scrolling and rotating */\r\n@keyframes scrollAndRotate {\r\n  0% {\r\n    left: 0; /* Change this value to adjust the scrolling distance */\r\n    transform: rotate(0deg);\r\n  }\r\n  50% {\r\n    left: 50%;\r\n    transform: rotate(1turn);\r\n  }\r\n  100% {\r\n    left: 100%;\r\n    transform: rotate(2turn); /* Rotate 360 degrees */\r\n  }\r\n}\r\n\r\n#dimmadome {\r\n  display: none;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  top: 20%;\r\n  z-index: 3;\r\n  font-size: 4rem;\r\n\r\n  -webkit-text-stroke: 1px black;\r\n\r\n  background: linear-gradient(\r\n      to right,\r\n      rgba(255, 0, 0, 1) 0%,\r\n      rgba(255, 154, 0, 1) 10%,\r\n      rgba(208, 222, 33, 1) 20%,\r\n      rgba(79, 220, 74, 1) 30%,\r\n      rgba(63, 218, 216, 1) 40%,\r\n      rgba(47, 201, 226, 1) 50%,\r\n      rgba(28, 127, 238, 1) 60%,\r\n      rgba(95, 21, 242, 1) 70%,\r\n      rgba(186, 12, 248, 1) 80%,\r\n      rgba(251, 7, 217, 1) 90%,\r\n      rgba(255, 0, 0, 1) 100%\r\n    )\r\n    0 0/200% 100%;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n  animation: waveAnimation 3s linear 2;\r\n}\r\n\r\n@keyframes waveAnimation {\r\n  to {\r\n    background-position: -200% 0;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
// consider groups by row instead of column


const gridArea = document.querySelector("#gridWrapper");

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
        tileDiv.textContent = `${j}00`;

        // console.log(i * j);
      }

      // apply dimmadome double effects for any marked questions.
      if (questionObject[`category${i}`][`question${j}`].double) {
        console.log("true test");
        tileDiv.addEventListener("click", () => {
          document.getElementById("dimmadome").style.display = "block";
          document.getElementById("dimmDoubleHat").style.display = "block";
        });
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
	"./hatNoBackground.png": "./src/img/hatNoBackground.png",
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
      questionObj[`category${i}`][`question${j}`] = {
        question: questionData[2 * i][j],
        answer: questionData[2 * i + 1][j],
      };
      // questionObj[i][`question${j}`] = questionData[2 * i][j];
      // questionObj[i][`answer${j}`] = questionData[2 * i + 1][j];
    }
  }
  console.log(questionObj);
  return questionObj;
}

function addQuestionModalEventListener(questionObject, playerObj) {
  // const questionTiles = document.querySelectorAll(".question");

  const categoryCount = Object.keys(questionObject).length;
  const questionCount = [];
  for (let i = 0; i < categoryCount; i += 1) {
    // -1 from length to account for 'topic' key
    questionCount.push(Object.keys(questionObject[`category${i}`]).length - 1);

    const categoryQuestionTiles = document.querySelectorAll(
      `#category${i} .question`,
    );
    for (let j = 0; j < questionCount[i]; j += 1) {
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

/***/ "./src/img/hatNoBackground.png":
/*!*************************************!*\
  !*** ./src/img/hatNoBackground.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "92d211b834963759a62d.png";

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
/* harmony import */ var _img_hatNoBackground_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/hatNoBackground.png */ "./src/img/hatNoBackground.png");







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
// file input label css
// finish dimmadome double, rnadom or chosen location
// fix image, audio, video inputs (youtube embed?)

// Initialize the player object
let playerObj;

const fileInput = document.getElementById("fileInput");
const upload = document.getElementById("upload");
const modal = document.querySelector(".modal");
const uploadWrapper = document.getElementById("uploadWrapper");

/// / testing area

const body = document.querySelector("body");
const dimmadomeText = document.getElementById("dimmadome");

const dimmDoubleHat = new Image();
dimmDoubleHat.src = _img_hatNoBackground_png__WEBPACK_IMPORTED_MODULE_5__;
dimmDoubleHat.id = "dimmDoubleHat";
body.append(dimmDoubleHat);

// uploadWrapper.addEventListener("click", () => {
//   dimmadomeText.style.display = "block";
//   dimmDoubleHat.style.display = "block";
//   // match interval delay with hat animation length*iterations
//   // setInterval(() => {
//   //   dimmadomeText.style.display = "none";
//   // }, 4000);
// });
dimmadomeText.addEventListener("animationend", () => {
  dimmadomeText.style.display = "none";
});
dimmDoubleHat.addEventListener("animationend", () => {
  dimmDoubleHat.style.display = "none";
});

/// /

const reader = new FileReader();
reader.addEventListener("load", (event) => {
  const fileData = event.target.result;

  const jsonObj = JSON.parse(fileData);

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFB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VDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLEVBQUUsc0RBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzREFBd0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4TzFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNRO0FBQ2U7QUFDUDtBQUNKO0FBQ1c7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscURBQUc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBd0I7QUFDMUIsRUFBRSx5RUFBc0M7QUFDeEMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGNBQWMsd0RBQTBCO0FBQ3hDLElBQUkseURBQTJCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2Qyx3QkFBd0Isb0RBQXNCO0FBQzlDO0FBQ0E7QUFDQSxFQUFFLHdEQUEwQjtBQUM1QjtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyREFBd0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkRBQXFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vbm9kZV9tb2R1bGVzL3BhcGFwYXJzZS9wYXBhcGFyc2UubWluLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvaW1nLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvcXVlc3Rpb25Nb2RhbC5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9zdG9ja05hbWVzLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuI2ljb25XcmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuXHJcbiNuZXdHYW1lQnV0dG9uLFxyXG4jcmFuZG9tTmFtZXNJY29uIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8qIGh0dHBzOi8vY29kZXBlbi5pby9zb3N1a2UvcGVuL1Bqb3FxcCAqL1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDIxJSkgc2VwaWEoOTYlKSBzYXR1cmF0ZSgzNzA2JSkgaHVlLXJvdGF0ZSgxMDJkZWcpXHJcbiAgICBicmlnaHRuZXNzKDk2JSkgY29udHJhc3QoMTA2JSk7XHJcbn1cclxuXHJcbiN0aXRsZSBoMSB7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuI3VwbG9hZFdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5cclxuI2lucHV0V3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDExOCwgMTk5LCAwLjgpO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuI3BsYXllckNvdW50V3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC4ycmVtO1xyXG59XHJcblxyXG4jdXBsb2FkIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgMTE4LCAxOTksIDAuOCk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbiN1cGxvYWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcyLCAyNTUsIDQ3LCAwLjU2OCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jcGxheWVyU2NvcmVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGdhcDogMXJlbTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5wbGF5ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5OSwgMzgsIDExMywgMC4zODQpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAwIDAuNXJlbTtcclxufVxyXG4ucGxheWVyIHA6Zmlyc3QtY2hpbGQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3BsYXllclNjb3JlcyBwIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiNnYW1lIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG4jZ3JpZFdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcclxuICBnYXA6IDEwcHg7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNhdGVnb3J5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ucXVlc3Rpb24sXHJcbi5xdWVzdGlvblRvcGljIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDExOCwgMTk5LCAwLjgpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBhc3BlY3QtcmF0aW86IDIvMTtcclxuICB3aWR0aDogbWluKDE1dncsIDIwMHB4KTtcclxuICAvKiB0ZXh0LWFsaWduIGFwcGVhcnMgdG8gYmUgbmVlZGVkIGZvciB0b3AgbGVmdCBncmlkIHNxdWFyZS4uLm5vIGlkZWEgd2h5ICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnRha2VuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGJvcmRlci1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDE1JTtcclxuICBsZWZ0OiAyMCU7XHJcbiAgei1pbmRleDogMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG59XHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG59XHJcbi5zY29yZUJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ubW9kYWwgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDNweCA2cHg7XHJcbn1cclxuLm1vZGFsIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGNkYztcclxufVxyXG5cclxuLyogZHVwbGljYXRlZCBzZWxlY3RvciB0byBvdmVycmlkZSAoLnNjb3JlQnV0dG9ucyBidXR0b24pIFxyXG5zZWxlY3RvciBhYm92ZSwgMC0xLTEgdnMgMC0yLTAgKi9cclxuLmJ1dHRvbkRpc2FibGVkLmJ1dHRvbkRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkY2RjO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuI2RpbW1Eb3VibGVIYXQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICBhbmltYXRpb246IHNjcm9sbEFuZFJvdGF0ZSAycyBsaW5lYXIgMztcclxuICB6LWluZGV4OiAzO1xyXG59XHJcbi8qIERlZmluZSB0aGUga2V5ZnJhbWVzIGZvciBzY3JvbGxpbmcgYW5kIHJvdGF0aW5nICovXHJcbkBrZXlmcmFtZXMgc2Nyb2xsQW5kUm90YXRlIHtcclxuICAwJSB7XHJcbiAgICBsZWZ0OiAwOyAvKiBDaGFuZ2UgdGhpcyB2YWx1ZSB0byBhZGp1c3QgdGhlIHNjcm9sbGluZyBkaXN0YW5jZSAqL1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDJ0dXJuKTsgLyogUm90YXRlIDM2MCBkZWdyZWVzICovXHJcbiAgfVxyXG59XHJcblxyXG4jZGltbWFkb21lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB0b3A6IDIwJTtcclxuICB6LWluZGV4OiAzO1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuXHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGJsYWNrO1xyXG5cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICByZ2JhKDI1NSwgMCwgMCwgMSkgMCUsXHJcbiAgICAgIHJnYmEoMjU1LCAxNTQsIDAsIDEpIDEwJSxcclxuICAgICAgcmdiYSgyMDgsIDIyMiwgMzMsIDEpIDIwJSxcclxuICAgICAgcmdiYSg3OSwgMjIwLCA3NCwgMSkgMzAlLFxyXG4gICAgICByZ2JhKDYzLCAyMTgsIDIxNiwgMSkgNDAlLFxyXG4gICAgICByZ2JhKDQ3LCAyMDEsIDIyNiwgMSkgNTAlLFxyXG4gICAgICByZ2JhKDI4LCAxMjcsIDIzOCwgMSkgNjAlLFxyXG4gICAgICByZ2JhKDk1LCAyMSwgMjQyLCAxKSA3MCUsXHJcbiAgICAgIHJnYmEoMTg2LCAxMiwgMjQ4LCAxKSA4MCUsXHJcbiAgICAgIHJnYmEoMjUxLCA3LCAyMTcsIDEpIDkwJSxcclxuICAgICAgcmdiYSgyNTUsIDAsIDAsIDEpIDEwMCVcclxuICAgIClcclxuICAgIDAgMC8yMDAlIDEwMCU7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGFuaW1hdGlvbjogd2F2ZUFuaW1hdGlvbiAzcyBsaW5lYXIgMjtcclxufVxyXG5cclxuQGtleWZyYW1lcyB3YXZlQW5pbWF0aW9uIHtcclxuICB0byB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0U7a0NBQ2dDO0FBQ2xDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNC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Z3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNpY29uV3JhcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3R2FtZUJ1dHRvbixcXHJcXG4jcmFuZG9tTmFtZXNJY29uIHtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgLyogaHR0cHM6Ly9jb2RlcGVuLmlvL3Nvc3VrZS9wZW4vUGpvcXFwICovXFxyXFxufVxcclxcblxcclxcbi5ncmVlbiB7XFxyXFxuICBmaWx0ZXI6IGludmVydCgyMSUpIHNlcGlhKDk2JSkgc2F0dXJhdGUoMzcwNiUpIGh1ZS1yb3RhdGUoMTAyZGVnKVxcclxcbiAgICBicmlnaHRuZXNzKDk2JSkgY29udHJhc3QoMTA2JSk7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZSBoMSB7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3VwbG9hZFdyYXBwZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNpbnB1dFdyYXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCAxMTgsIDE5OSwgMC44KTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllckNvdW50V3JhcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdXBsb2FkIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIFRpbWVzLCBzZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgMTE4LCAxOTksIDAuOCk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuI3VwbG9hZDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MiwgMjU1LCA0NywgMC41NjgpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyU2NvcmVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuLnBsYXllciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDM4LCAxMTMsIDAuMzg0KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxufVxcclxcbi5wbGF5ZXIgcDpmaXJzdC1jaGlsZCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXJTY29yZXMgcCB7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWUge1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWRXcmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnF1ZXN0aW9uLFxcclxcbi5xdWVzdGlvblRvcGljIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgMTE4LCAxOTksIDAuOCk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMi8xO1xcclxcbiAgd2lkdGg6IG1pbigxNXZ3LCAyMDBweCk7XFxyXFxuICAvKiB0ZXh0LWFsaWduIGFwcGVhcnMgdG8gYmUgbmVlZGVkIGZvciB0b3AgbGVmdCBncmlkIHNxdWFyZS4uLm5vIGlkZWEgd2h5ICovXFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50YWtlbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxuICBib3JkZXItY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDE1JTtcXHJcXG4gIGxlZnQ6IDIwJTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcclxcbn1cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICBoZWlnaHQ6IDMwdmg7XFxyXFxufVxcclxcbi5zY29yZUJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDNweCA2cHg7XFxyXFxufVxcclxcbi5tb2RhbCBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGNkYztcXHJcXG59XFxyXFxuXFxyXFxuLyogZHVwbGljYXRlZCBzZWxlY3RvciB0byBvdmVycmlkZSAoLnNjb3JlQnV0dG9ucyBidXR0b24pIFxcclxcbnNlbGVjdG9yIGFib3ZlLCAwLTEtMSB2cyAwLTItMCAqL1xcclxcbi5idXR0b25EaXNhYmxlZC5idXR0b25EaXNhYmxlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkY2RjO1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4jZGltbURvdWJsZUhhdCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXHJcXG4gIGFuaW1hdGlvbjogc2Nyb2xsQW5kUm90YXRlIDJzIGxpbmVhciAzO1xcclxcbiAgei1pbmRleDogMztcXHJcXG59XFxyXFxuLyogRGVmaW5lIHRoZSBrZXlmcmFtZXMgZm9yIHNjcm9sbGluZyBhbmQgcm90YXRpbmcgKi9cXHJcXG5Aa2V5ZnJhbWVzIHNjcm9sbEFuZFJvdGF0ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGxlZnQ6IDA7IC8qIENoYW5nZSB0aGlzIHZhbHVlIHRvIGFkanVzdCB0aGUgc2Nyb2xsaW5nIGRpc3RhbmNlICovXFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgbGVmdDogMTAwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMnR1cm4pOyAvKiBSb3RhdGUgMzYwIGRlZ3JlZXMgKi9cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2RpbW1hZG9tZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICB0b3A6IDIwJTtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxuXFxyXFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggYmxhY2s7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgICAgdG8gcmlnaHQsXFxyXFxuICAgICAgcmdiYSgyNTUsIDAsIDAsIDEpIDAlLFxcclxcbiAgICAgIHJnYmEoMjU1LCAxNTQsIDAsIDEpIDEwJSxcXHJcXG4gICAgICByZ2JhKDIwOCwgMjIyLCAzMywgMSkgMjAlLFxcclxcbiAgICAgIHJnYmEoNzksIDIyMCwgNzQsIDEpIDMwJSxcXHJcXG4gICAgICByZ2JhKDYzLCAyMTgsIDIxNiwgMSkgNDAlLFxcclxcbiAgICAgIHJnYmEoNDcsIDIwMSwgMjI2LCAxKSA1MCUsXFxyXFxuICAgICAgcmdiYSgyOCwgMTI3LCAyMzgsIDEpIDYwJSxcXHJcXG4gICAgICByZ2JhKDk1LCAyMSwgMjQyLCAxKSA3MCUsXFxyXFxuICAgICAgcmdiYSgxODYsIDEyLCAyNDgsIDEpIDgwJSxcXHJcXG4gICAgICByZ2JhKDI1MSwgNywgMjE3LCAxKSA5MCUsXFxyXFxuICAgICAgcmdiYSgyNTUsIDAsIDAsIDEpIDEwMCVcXHJcXG4gICAgKVxcclxcbiAgICAwIDAvMjAwJSAxMDAlO1xcclxcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBhbmltYXRpb246IHdhdmVBbmltYXRpb24gM3MgbGluZWFyIDI7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgd2F2ZUFuaW1hdGlvbiB7XFxyXFxuICB0byB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyogQGxpY2Vuc2VcblBhcGEgUGFyc2VcbnY1LjQuMVxuaHR0cHM6Ly9naXRodWIuY29tL21ob2x0L1BhcGFQYXJzZVxuTGljZW5zZTogTUlUXG4qL1xuIWZ1bmN0aW9uKGUsdCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz10KCk6ZS5QYXBhPXQoKX0odGhpcyxmdW5jdGlvbiBzKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp2b2lkIDAhPT1mP2Y6e307dmFyIG49IWYuZG9jdW1lbnQmJiEhZi5wb3N0TWVzc2FnZSxvPWYuSVNfUEFQQV9XT1JLRVJ8fCExLGE9e30sdT0wLGI9e3BhcnNlOmZ1bmN0aW9uKGUsdCl7dmFyIHI9KHQ9dHx8e30pLmR5bmFtaWNUeXBpbmd8fCExO0oocikmJih0LmR5bmFtaWNUeXBpbmdGdW5jdGlvbj1yLHI9e30pO2lmKHQuZHluYW1pY1R5cGluZz1yLHQudHJhbnNmb3JtPSEhSih0LnRyYW5zZm9ybSkmJnQudHJhbnNmb3JtLHQud29ya2VyJiZiLldPUktFUlNfU1VQUE9SVEVEKXt2YXIgaT1mdW5jdGlvbigpe2lmKCFiLldPUktFUlNfU1VQUE9SVEVEKXJldHVybiExO3ZhciBlPShyPWYuVVJMfHxmLndlYmtpdFVSTHx8bnVsbCxpPXMudG9TdHJpbmcoKSxiLkJMT0JfVVJMfHwoYi5CTE9CX1VSTD1yLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbXCJ2YXIgZ2xvYmFsID0gKGZ1bmN0aW9uKCkgeyBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBzZWxmOyB9IGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gd2luZG93OyB9IGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZ2xvYmFsOyB9IHJldHVybiB7fTsgfSkoKTsgZ2xvYmFsLklTX1BBUEFfV09SS0VSPXRydWU7IFwiLFwiKFwiLGksXCIpKCk7XCJdLHt0eXBlOlwidGV4dC9qYXZhc2NyaXB0XCJ9KSkpKSx0PW5ldyBmLldvcmtlcihlKTt2YXIgcixpO3JldHVybiB0Lm9ubWVzc2FnZT1fLHQuaWQ9dSsrLGFbdC5pZF09dH0oKTtyZXR1cm4gaS51c2VyU3RlcD10LnN0ZXAsaS51c2VyQ2h1bms9dC5jaHVuayxpLnVzZXJDb21wbGV0ZT10LmNvbXBsZXRlLGkudXNlckVycm9yPXQuZXJyb3IsdC5zdGVwPUoodC5zdGVwKSx0LmNodW5rPUoodC5jaHVuayksdC5jb21wbGV0ZT1KKHQuY29tcGxldGUpLHQuZXJyb3I9Sih0LmVycm9yKSxkZWxldGUgdC53b3JrZXIsdm9pZCBpLnBvc3RNZXNzYWdlKHtpbnB1dDplLGNvbmZpZzp0LHdvcmtlcklkOmkuaWR9KX12YXIgbj1udWxsO2IuTk9ERV9TVFJFQU1fSU5QVVQsXCJzdHJpbmdcIj09dHlwZW9mIGU/KGU9ZnVuY3Rpb24oZSl7aWYoNjUyNzk9PT1lLmNoYXJDb2RlQXQoMCkpcmV0dXJuIGUuc2xpY2UoMSk7cmV0dXJuIGV9KGUpLG49dC5kb3dubG9hZD9uZXcgbCh0KTpuZXcgcCh0KSk6ITA9PT1lLnJlYWRhYmxlJiZKKGUucmVhZCkmJkooZS5vbik/bj1uZXcgZyh0KTooZi5GaWxlJiZlIGluc3RhbmNlb2YgRmlsZXx8ZSBpbnN0YW5jZW9mIE9iamVjdCkmJihuPW5ldyBjKHQpKTtyZXR1cm4gbi5zdHJlYW0oZSl9LHVucGFyc2U6ZnVuY3Rpb24oZSx0KXt2YXIgbj0hMSxfPSEwLG09XCIsXCIseT1cIlxcclxcblwiLHM9J1wiJyxhPXMrcyxyPSExLGk9bnVsbCxvPSExOyFmdW5jdGlvbigpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiB0KXJldHVybjtcInN0cmluZ1wiIT10eXBlb2YgdC5kZWxpbWl0ZXJ8fGIuQkFEX0RFTElNSVRFUlMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybi0xIT09dC5kZWxpbWl0ZXIuaW5kZXhPZihlKX0pLmxlbmd0aHx8KG09dC5kZWxpbWl0ZXIpOyhcImJvb2xlYW5cIj09dHlwZW9mIHQucXVvdGVzfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnF1b3Rlc3x8QXJyYXkuaXNBcnJheSh0LnF1b3RlcykpJiYobj10LnF1b3Rlcyk7XCJib29sZWFuXCIhPXR5cGVvZiB0LnNraXBFbXB0eUxpbmVzJiZcInN0cmluZ1wiIT10eXBlb2YgdC5za2lwRW1wdHlMaW5lc3x8KHI9dC5za2lwRW1wdHlMaW5lcyk7XCJzdHJpbmdcIj09dHlwZW9mIHQubmV3bGluZSYmKHk9dC5uZXdsaW5lKTtcInN0cmluZ1wiPT10eXBlb2YgdC5xdW90ZUNoYXImJihzPXQucXVvdGVDaGFyKTtcImJvb2xlYW5cIj09dHlwZW9mIHQuaGVhZGVyJiYoXz10LmhlYWRlcik7aWYoQXJyYXkuaXNBcnJheSh0LmNvbHVtbnMpKXtpZigwPT09dC5jb2x1bW5zLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJPcHRpb24gY29sdW1ucyBpcyBlbXB0eVwiKTtpPXQuY29sdW1uc312b2lkIDAhPT10LmVzY2FwZUNoYXImJihhPXQuZXNjYXBlQ2hhcitzKTsoXCJib29sZWFuXCI9PXR5cGVvZiB0LmVzY2FwZUZvcm11bGFlfHx0LmVzY2FwZUZvcm11bGFlIGluc3RhbmNlb2YgUmVnRXhwKSYmKG89dC5lc2NhcGVGb3JtdWxhZSBpbnN0YW5jZW9mIFJlZ0V4cD90LmVzY2FwZUZvcm11bGFlOi9eWz0rXFwtQFxcdFxccl0uKiQvKX0oKTt2YXIgdT1uZXcgUmVnRXhwKFEocyksXCJnXCIpO1wic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1KU09OLnBhcnNlKGUpKTtpZihBcnJheS5pc0FycmF5KGUpKXtpZighZS5sZW5ndGh8fEFycmF5LmlzQXJyYXkoZVswXSkpcmV0dXJuIGgobnVsbCxlLHIpO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlWzBdKXJldHVybiBoKGl8fE9iamVjdC5rZXlzKGVbMF0pLGUscil9ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgZSlyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZS5kYXRhJiYoZS5kYXRhPUpTT04ucGFyc2UoZS5kYXRhKSksQXJyYXkuaXNBcnJheShlLmRhdGEpJiYoZS5maWVsZHN8fChlLmZpZWxkcz1lLm1ldGEmJmUubWV0YS5maWVsZHN8fGkpLGUuZmllbGRzfHwoZS5maWVsZHM9QXJyYXkuaXNBcnJheShlLmRhdGFbMF0pP2UuZmllbGRzOlwib2JqZWN0XCI9PXR5cGVvZiBlLmRhdGFbMF0/T2JqZWN0LmtleXMoZS5kYXRhWzBdKTpbXSksQXJyYXkuaXNBcnJheShlLmRhdGFbMF0pfHxcIm9iamVjdFwiPT10eXBlb2YgZS5kYXRhWzBdfHwoZS5kYXRhPVtlLmRhdGFdKSksaChlLmZpZWxkc3x8W10sZS5kYXRhfHxbXSxyKTt0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gc2VyaWFsaXplIHVucmVjb2duaXplZCBpbnB1dFwiKTtmdW5jdGlvbiBoKGUsdCxyKXt2YXIgaT1cIlwiO1wic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1KU09OLnBhcnNlKGUpKSxcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9SlNPTi5wYXJzZSh0KSk7dmFyIG49QXJyYXkuaXNBcnJheShlKSYmMDxlLmxlbmd0aCxzPSFBcnJheS5pc0FycmF5KHRbMF0pO2lmKG4mJl8pe2Zvcih2YXIgYT0wO2E8ZS5sZW5ndGg7YSsrKTA8YSYmKGkrPW0pLGkrPXYoZVthXSxhKTswPHQubGVuZ3RoJiYoaSs9eSl9Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciB1PW4/ZS5sZW5ndGg6dFtvXS5sZW5ndGgsaD0hMSxmPW4/MD09PU9iamVjdC5rZXlzKHRbb10pLmxlbmd0aDowPT09dFtvXS5sZW5ndGg7aWYociYmIW4mJihoPVwiZ3JlZWR5XCI9PT1yP1wiXCI9PT10W29dLmpvaW4oXCJcIikudHJpbSgpOjE9PT10W29dLmxlbmd0aCYmMD09PXRbb11bMF0ubGVuZ3RoKSxcImdyZWVkeVwiPT09ciYmbil7Zm9yKHZhciBkPVtdLGw9MDtsPHU7bCsrKXt2YXIgYz1zP2VbbF06bDtkLnB1c2godFtvXVtjXSl9aD1cIlwiPT09ZC5qb2luKFwiXCIpLnRyaW0oKX1pZighaCl7Zm9yKHZhciBwPTA7cDx1O3ArKyl7MDxwJiYhZiYmKGkrPW0pO3ZhciBnPW4mJnM/ZVtwXTpwO2krPXYodFtvXVtnXSxwKX1vPHQubGVuZ3RoLTEmJighcnx8MDx1JiYhZikmJihpKz15KX19cmV0dXJuIGl9ZnVuY3Rpb24gdihlLHQpe2lmKG51bGw9PWUpcmV0dXJuXCJcIjtpZihlLmNvbnN0cnVjdG9yPT09RGF0ZSlyZXR1cm4gSlNPTi5zdHJpbmdpZnkoZSkuc2xpY2UoMSwyNSk7dmFyIHI9ITE7byYmXCJzdHJpbmdcIj09dHlwZW9mIGUmJm8udGVzdChlKSYmKGU9XCInXCIrZSxyPSEwKTt2YXIgaT1lLnRvU3RyaW5nKCkucmVwbGFjZSh1LGEpO3JldHVybihyPXJ8fCEwPT09bnx8XCJmdW5jdGlvblwiPT10eXBlb2YgbiYmbihlLHQpfHxBcnJheS5pc0FycmF5KG4pJiZuW3RdfHxmdW5jdGlvbihlLHQpe2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKWlmKC0xPGUuaW5kZXhPZih0W3JdKSlyZXR1cm4hMDtyZXR1cm4hMX0oaSxiLkJBRF9ERUxJTUlURVJTKXx8LTE8aS5pbmRleE9mKG0pfHxcIiBcIj09PWkuY2hhckF0KDApfHxcIiBcIj09PWkuY2hhckF0KGkubGVuZ3RoLTEpKT9zK2krczppfX19O2lmKGIuUkVDT1JEX1NFUD1TdHJpbmcuZnJvbUNoYXJDb2RlKDMwKSxiLlVOSVRfU0VQPVN0cmluZy5mcm9tQ2hhckNvZGUoMzEpLGIuQllURV9PUkRFUl9NQVJLPVwiXFx1ZmVmZlwiLGIuQkFEX0RFTElNSVRFUlM9W1wiXFxyXCIsXCJcXG5cIiwnXCInLGIuQllURV9PUkRFUl9NQVJLXSxiLldPUktFUlNfU1VQUE9SVEVEPSFuJiYhIWYuV29ya2VyLGIuTk9ERV9TVFJFQU1fSU5QVVQ9MSxiLkxvY2FsQ2h1bmtTaXplPTEwNDg1NzYwLGIuUmVtb3RlQ2h1bmtTaXplPTUyNDI4ODAsYi5EZWZhdWx0RGVsaW1pdGVyPVwiLFwiLGIuUGFyc2VyPUUsYi5QYXJzZXJIYW5kbGU9cixiLk5ldHdvcmtTdHJlYW1lcj1sLGIuRmlsZVN0cmVhbWVyPWMsYi5TdHJpbmdTdHJlYW1lcj1wLGIuUmVhZGFibGVTdHJlYW1TdHJlYW1lcj1nLGYualF1ZXJ5KXt2YXIgZD1mLmpRdWVyeTtkLmZuLnBhcnNlPWZ1bmN0aW9uKG8pe3ZhciByPW8uY29uZmlnfHx7fSx1PVtdO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7aWYoIShcIklOUFVUXCI9PT1kKHRoaXMpLnByb3AoXCJ0YWdOYW1lXCIpLnRvVXBwZXJDYXNlKCkmJlwiZmlsZVwiPT09ZCh0aGlzKS5hdHRyKFwidHlwZVwiKS50b0xvd2VyQ2FzZSgpJiZmLkZpbGVSZWFkZXIpfHwhdGhpcy5maWxlc3x8MD09PXRoaXMuZmlsZXMubGVuZ3RoKXJldHVybiEwO2Zvcih2YXIgdD0wO3Q8dGhpcy5maWxlcy5sZW5ndGg7dCsrKXUucHVzaCh7ZmlsZTp0aGlzLmZpbGVzW3RdLGlucHV0RWxlbTp0aGlzLGluc3RhbmNlQ29uZmlnOmQuZXh0ZW5kKHt9LHIpfSl9KSxlKCksdGhpcztmdW5jdGlvbiBlKCl7aWYoMCE9PXUubGVuZ3RoKXt2YXIgZSx0LHIsaSxuPXVbMF07aWYoSihvLmJlZm9yZSkpe3ZhciBzPW8uYmVmb3JlKG4uZmlsZSxuLmlucHV0RWxlbSk7aWYoXCJvYmplY3RcIj09dHlwZW9mIHMpe2lmKFwiYWJvcnRcIj09PXMuYWN0aW9uKXJldHVybiBlPVwiQWJvcnRFcnJvclwiLHQ9bi5maWxlLHI9bi5pbnB1dEVsZW0saT1zLnJlYXNvbix2b2lkKEooby5lcnJvcikmJm8uZXJyb3Ioe25hbWU6ZX0sdCxyLGkpKTtpZihcInNraXBcIj09PXMuYWN0aW9uKXJldHVybiB2b2lkIGgoKTtcIm9iamVjdFwiPT10eXBlb2Ygcy5jb25maWcmJihuLmluc3RhbmNlQ29uZmlnPWQuZXh0ZW5kKG4uaW5zdGFuY2VDb25maWcscy5jb25maWcpKX1lbHNlIGlmKFwic2tpcFwiPT09cylyZXR1cm4gdm9pZCBoKCl9dmFyIGE9bi5pbnN0YW5jZUNvbmZpZy5jb21wbGV0ZTtuLmluc3RhbmNlQ29uZmlnLmNvbXBsZXRlPWZ1bmN0aW9uKGUpe0ooYSkmJmEoZSxuLmZpbGUsbi5pbnB1dEVsZW0pLGgoKX0sYi5wYXJzZShuLmZpbGUsbi5pbnN0YW5jZUNvbmZpZyl9ZWxzZSBKKG8uY29tcGxldGUpJiZvLmNvbXBsZXRlKCl9ZnVuY3Rpb24gaCgpe3Uuc3BsaWNlKDAsMSksZSgpfX19ZnVuY3Rpb24gaChlKXt0aGlzLl9oYW5kbGU9bnVsbCx0aGlzLl9maW5pc2hlZD0hMSx0aGlzLl9jb21wbGV0ZWQ9ITEsdGhpcy5faGFsdGVkPSExLHRoaXMuX2lucHV0PW51bGwsdGhpcy5fYmFzZUluZGV4PTAsdGhpcy5fcGFydGlhbExpbmU9XCJcIix0aGlzLl9yb3dDb3VudD0wLHRoaXMuX3N0YXJ0PTAsdGhpcy5fbmV4dENodW5rPW51bGwsdGhpcy5pc0ZpcnN0Q2h1bms9ITAsdGhpcy5fY29tcGxldGVSZXN1bHRzPXtkYXRhOltdLGVycm9yczpbXSxtZXRhOnt9fSxmdW5jdGlvbihlKXt2YXIgdD13KGUpO3QuY2h1bmtTaXplPXBhcnNlSW50KHQuY2h1bmtTaXplKSxlLnN0ZXB8fGUuY2h1bmt8fCh0LmNodW5rU2l6ZT1udWxsKTt0aGlzLl9oYW5kbGU9bmV3IHIodCksKHRoaXMuX2hhbmRsZS5zdHJlYW1lcj10aGlzKS5fY29uZmlnPXR9LmNhbGwodGhpcyxlKSx0aGlzLnBhcnNlQ2h1bms9ZnVuY3Rpb24oZSx0KXtpZih0aGlzLmlzRmlyc3RDaHVuayYmSih0aGlzLl9jb25maWcuYmVmb3JlRmlyc3RDaHVuaykpe3ZhciByPXRoaXMuX2NvbmZpZy5iZWZvcmVGaXJzdENodW5rKGUpO3ZvaWQgMCE9PXImJihlPXIpfXRoaXMuaXNGaXJzdENodW5rPSExLHRoaXMuX2hhbHRlZD0hMTt2YXIgaT10aGlzLl9wYXJ0aWFsTGluZStlO3RoaXMuX3BhcnRpYWxMaW5lPVwiXCI7dmFyIG49dGhpcy5faGFuZGxlLnBhcnNlKGksdGhpcy5fYmFzZUluZGV4LCF0aGlzLl9maW5pc2hlZCk7aWYoIXRoaXMuX2hhbmRsZS5wYXVzZWQoKSYmIXRoaXMuX2hhbmRsZS5hYm9ydGVkKCkpe3ZhciBzPW4ubWV0YS5jdXJzb3I7dGhpcy5fZmluaXNoZWR8fCh0aGlzLl9wYXJ0aWFsTGluZT1pLnN1YnN0cmluZyhzLXRoaXMuX2Jhc2VJbmRleCksdGhpcy5fYmFzZUluZGV4PXMpLG4mJm4uZGF0YSYmKHRoaXMuX3Jvd0NvdW50Kz1uLmRhdGEubGVuZ3RoKTt2YXIgYT10aGlzLl9maW5pc2hlZHx8dGhpcy5fY29uZmlnLnByZXZpZXcmJnRoaXMuX3Jvd0NvdW50Pj10aGlzLl9jb25maWcucHJldmlldztpZihvKWYucG9zdE1lc3NhZ2Uoe3Jlc3VsdHM6bix3b3JrZXJJZDpiLldPUktFUl9JRCxmaW5pc2hlZDphfSk7ZWxzZSBpZihKKHRoaXMuX2NvbmZpZy5jaHVuaykmJiF0KXtpZih0aGlzLl9jb25maWcuY2h1bmsobix0aGlzLl9oYW5kbGUpLHRoaXMuX2hhbmRsZS5wYXVzZWQoKXx8dGhpcy5faGFuZGxlLmFib3J0ZWQoKSlyZXR1cm4gdm9pZCh0aGlzLl9oYWx0ZWQ9ITApO249dm9pZCAwLHRoaXMuX2NvbXBsZXRlUmVzdWx0cz12b2lkIDB9cmV0dXJuIHRoaXMuX2NvbmZpZy5zdGVwfHx0aGlzLl9jb25maWcuY2h1bmt8fCh0aGlzLl9jb21wbGV0ZVJlc3VsdHMuZGF0YT10aGlzLl9jb21wbGV0ZVJlc3VsdHMuZGF0YS5jb25jYXQobi5kYXRhKSx0aGlzLl9jb21wbGV0ZVJlc3VsdHMuZXJyb3JzPXRoaXMuX2NvbXBsZXRlUmVzdWx0cy5lcnJvcnMuY29uY2F0KG4uZXJyb3JzKSx0aGlzLl9jb21wbGV0ZVJlc3VsdHMubWV0YT1uLm1ldGEpLHRoaXMuX2NvbXBsZXRlZHx8IWF8fCFKKHRoaXMuX2NvbmZpZy5jb21wbGV0ZSl8fG4mJm4ubWV0YS5hYm9ydGVkfHwodGhpcy5fY29uZmlnLmNvbXBsZXRlKHRoaXMuX2NvbXBsZXRlUmVzdWx0cyx0aGlzLl9pbnB1dCksdGhpcy5fY29tcGxldGVkPSEwKSxhfHxuJiZuLm1ldGEucGF1c2VkfHx0aGlzLl9uZXh0Q2h1bmsoKSxufXRoaXMuX2hhbHRlZD0hMH0sdGhpcy5fc2VuZEVycm9yPWZ1bmN0aW9uKGUpe0oodGhpcy5fY29uZmlnLmVycm9yKT90aGlzLl9jb25maWcuZXJyb3IoZSk6byYmdGhpcy5fY29uZmlnLmVycm9yJiZmLnBvc3RNZXNzYWdlKHt3b3JrZXJJZDpiLldPUktFUl9JRCxlcnJvcjplLGZpbmlzaGVkOiExfSl9fWZ1bmN0aW9uIGwoZSl7dmFyIGk7KGU9ZXx8e30pLmNodW5rU2l6ZXx8KGUuY2h1bmtTaXplPWIuUmVtb3RlQ2h1bmtTaXplKSxoLmNhbGwodGhpcyxlKSx0aGlzLl9uZXh0Q2h1bms9bj9mdW5jdGlvbigpe3RoaXMuX3JlYWRDaHVuaygpLHRoaXMuX2NodW5rTG9hZGVkKCl9OmZ1bmN0aW9uKCl7dGhpcy5fcmVhZENodW5rKCl9LHRoaXMuc3RyZWFtPWZ1bmN0aW9uKGUpe3RoaXMuX2lucHV0PWUsdGhpcy5fbmV4dENodW5rKCl9LHRoaXMuX3JlYWRDaHVuaz1mdW5jdGlvbigpe2lmKHRoaXMuX2ZpbmlzaGVkKXRoaXMuX2NodW5rTG9hZGVkKCk7ZWxzZXtpZihpPW5ldyBYTUxIdHRwUmVxdWVzdCx0aGlzLl9jb25maWcud2l0aENyZWRlbnRpYWxzJiYoaS53aXRoQ3JlZGVudGlhbHM9dGhpcy5fY29uZmlnLndpdGhDcmVkZW50aWFscyksbnx8KGkub25sb2FkPXYodGhpcy5fY2h1bmtMb2FkZWQsdGhpcyksaS5vbmVycm9yPXYodGhpcy5fY2h1bmtFcnJvcix0aGlzKSksaS5vcGVuKHRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RCb2R5P1wiUE9TVFwiOlwiR0VUXCIsdGhpcy5faW5wdXQsIW4pLHRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RIZWFkZXJzKXt2YXIgZT10aGlzLl9jb25maWcuZG93bmxvYWRSZXF1ZXN0SGVhZGVycztmb3IodmFyIHQgaW4gZSlpLnNldFJlcXVlc3RIZWFkZXIodCxlW3RdKX1pZih0aGlzLl9jb25maWcuY2h1bmtTaXplKXt2YXIgcj10aGlzLl9zdGFydCt0aGlzLl9jb25maWcuY2h1bmtTaXplLTE7aS5zZXRSZXF1ZXN0SGVhZGVyKFwiUmFuZ2VcIixcImJ5dGVzPVwiK3RoaXMuX3N0YXJ0K1wiLVwiK3IpfXRyeXtpLnNlbmQodGhpcy5fY29uZmlnLmRvd25sb2FkUmVxdWVzdEJvZHkpfWNhdGNoKGUpe3RoaXMuX2NodW5rRXJyb3IoZS5tZXNzYWdlKX1uJiYwPT09aS5zdGF0dXMmJnRoaXMuX2NodW5rRXJyb3IoKX19LHRoaXMuX2NodW5rTG9hZGVkPWZ1bmN0aW9uKCl7ND09PWkucmVhZHlTdGF0ZSYmKGkuc3RhdHVzPDIwMHx8NDAwPD1pLnN0YXR1cz90aGlzLl9jaHVua0Vycm9yKCk6KHRoaXMuX3N0YXJ0Kz10aGlzLl9jb25maWcuY2h1bmtTaXplP3RoaXMuX2NvbmZpZy5jaHVua1NpemU6aS5yZXNwb25zZVRleHQubGVuZ3RoLHRoaXMuX2ZpbmlzaGVkPSF0aGlzLl9jb25maWcuY2h1bmtTaXplfHx0aGlzLl9zdGFydD49ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtUmFuZ2VcIik7aWYobnVsbD09PXQpcmV0dXJuLTE7cmV0dXJuIHBhcnNlSW50KHQuc3Vic3RyaW5nKHQubGFzdEluZGV4T2YoXCIvXCIpKzEpKX0oaSksdGhpcy5wYXJzZUNodW5rKGkucmVzcG9uc2VUZXh0KSkpfSx0aGlzLl9jaHVua0Vycm9yPWZ1bmN0aW9uKGUpe3ZhciB0PWkuc3RhdHVzVGV4dHx8ZTt0aGlzLl9zZW5kRXJyb3IobmV3IEVycm9yKHQpKX19ZnVuY3Rpb24gYyhlKXt2YXIgaSxuOyhlPWV8fHt9KS5jaHVua1NpemV8fChlLmNodW5rU2l6ZT1iLkxvY2FsQ2h1bmtTaXplKSxoLmNhbGwodGhpcyxlKTt2YXIgcz1cInVuZGVmaW5lZFwiIT10eXBlb2YgRmlsZVJlYWRlcjt0aGlzLnN0cmVhbT1mdW5jdGlvbihlKXt0aGlzLl9pbnB1dD1lLG49ZS5zbGljZXx8ZS53ZWJraXRTbGljZXx8ZS5tb3pTbGljZSxzPygoaT1uZXcgRmlsZVJlYWRlcikub25sb2FkPXYodGhpcy5fY2h1bmtMb2FkZWQsdGhpcyksaS5vbmVycm9yPXYodGhpcy5fY2h1bmtFcnJvcix0aGlzKSk6aT1uZXcgRmlsZVJlYWRlclN5bmMsdGhpcy5fbmV4dENodW5rKCl9LHRoaXMuX25leHRDaHVuaz1mdW5jdGlvbigpe3RoaXMuX2ZpbmlzaGVkfHx0aGlzLl9jb25maWcucHJldmlldyYmISh0aGlzLl9yb3dDb3VudDx0aGlzLl9jb25maWcucHJldmlldyl8fHRoaXMuX3JlYWRDaHVuaygpfSx0aGlzLl9yZWFkQ2h1bms9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl9pbnB1dDtpZih0aGlzLl9jb25maWcuY2h1bmtTaXplKXt2YXIgdD1NYXRoLm1pbih0aGlzLl9zdGFydCt0aGlzLl9jb25maWcuY2h1bmtTaXplLHRoaXMuX2lucHV0LnNpemUpO2U9bi5jYWxsKGUsdGhpcy5fc3RhcnQsdCl9dmFyIHI9aS5yZWFkQXNUZXh0KGUsdGhpcy5fY29uZmlnLmVuY29kaW5nKTtzfHx0aGlzLl9jaHVua0xvYWRlZCh7dGFyZ2V0OntyZXN1bHQ6cn19KX0sdGhpcy5fY2h1bmtMb2FkZWQ9ZnVuY3Rpb24oZSl7dGhpcy5fc3RhcnQrPXRoaXMuX2NvbmZpZy5jaHVua1NpemUsdGhpcy5fZmluaXNoZWQ9IXRoaXMuX2NvbmZpZy5jaHVua1NpemV8fHRoaXMuX3N0YXJ0Pj10aGlzLl9pbnB1dC5zaXplLHRoaXMucGFyc2VDaHVuayhlLnRhcmdldC5yZXN1bHQpfSx0aGlzLl9jaHVua0Vycm9yPWZ1bmN0aW9uKCl7dGhpcy5fc2VuZEVycm9yKGkuZXJyb3IpfX1mdW5jdGlvbiBwKGUpe3ZhciByO2guY2FsbCh0aGlzLGU9ZXx8e30pLHRoaXMuc3RyZWFtPWZ1bmN0aW9uKGUpe3JldHVybiByPWUsdGhpcy5fbmV4dENodW5rKCl9LHRoaXMuX25leHRDaHVuaz1mdW5jdGlvbigpe2lmKCF0aGlzLl9maW5pc2hlZCl7dmFyIGUsdD10aGlzLl9jb25maWcuY2h1bmtTaXplO3JldHVybiB0PyhlPXIuc3Vic3RyaW5nKDAsdCkscj1yLnN1YnN0cmluZyh0KSk6KGU9cixyPVwiXCIpLHRoaXMuX2ZpbmlzaGVkPSFyLHRoaXMucGFyc2VDaHVuayhlKX19fWZ1bmN0aW9uIGcoZSl7aC5jYWxsKHRoaXMsZT1lfHx7fSk7dmFyIHQ9W10scj0hMCxpPSExO3RoaXMucGF1c2U9ZnVuY3Rpb24oKXtoLnByb3RvdHlwZS5wYXVzZS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5faW5wdXQucGF1c2UoKX0sdGhpcy5yZXN1bWU9ZnVuY3Rpb24oKXtoLnByb3RvdHlwZS5yZXN1bWUuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuX2lucHV0LnJlc3VtZSgpfSx0aGlzLnN0cmVhbT1mdW5jdGlvbihlKXt0aGlzLl9pbnB1dD1lLHRoaXMuX2lucHV0Lm9uKFwiZGF0YVwiLHRoaXMuX3N0cmVhbURhdGEpLHRoaXMuX2lucHV0Lm9uKFwiZW5kXCIsdGhpcy5fc3RyZWFtRW5kKSx0aGlzLl9pbnB1dC5vbihcImVycm9yXCIsdGhpcy5fc3RyZWFtRXJyb3IpfSx0aGlzLl9jaGVja0lzRmluaXNoZWQ9ZnVuY3Rpb24oKXtpJiYxPT09dC5sZW5ndGgmJih0aGlzLl9maW5pc2hlZD0hMCl9LHRoaXMuX25leHRDaHVuaz1mdW5jdGlvbigpe3RoaXMuX2NoZWNrSXNGaW5pc2hlZCgpLHQubGVuZ3RoP3RoaXMucGFyc2VDaHVuayh0LnNoaWZ0KCkpOnI9ITB9LHRoaXMuX3N0cmVhbURhdGE9dihmdW5jdGlvbihlKXt0cnl7dC5wdXNoKFwic3RyaW5nXCI9PXR5cGVvZiBlP2U6ZS50b1N0cmluZyh0aGlzLl9jb25maWcuZW5jb2RpbmcpKSxyJiYocj0hMSx0aGlzLl9jaGVja0lzRmluaXNoZWQoKSx0aGlzLnBhcnNlQ2h1bmsodC5zaGlmdCgpKSl9Y2F0Y2goZSl7dGhpcy5fc3RyZWFtRXJyb3IoZSl9fSx0aGlzKSx0aGlzLl9zdHJlYW1FcnJvcj12KGZ1bmN0aW9uKGUpe3RoaXMuX3N0cmVhbUNsZWFuVXAoKSx0aGlzLl9zZW5kRXJyb3IoZSl9LHRoaXMpLHRoaXMuX3N0cmVhbUVuZD12KGZ1bmN0aW9uKCl7dGhpcy5fc3RyZWFtQ2xlYW5VcCgpLGk9ITAsdGhpcy5fc3RyZWFtRGF0YShcIlwiKX0sdGhpcyksdGhpcy5fc3RyZWFtQ2xlYW5VcD12KGZ1bmN0aW9uKCl7dGhpcy5faW5wdXQucmVtb3ZlTGlzdGVuZXIoXCJkYXRhXCIsdGhpcy5fc3RyZWFtRGF0YSksdGhpcy5faW5wdXQucmVtb3ZlTGlzdGVuZXIoXCJlbmRcIix0aGlzLl9zdHJlYW1FbmQpLHRoaXMuX2lucHV0LnJlbW92ZUxpc3RlbmVyKFwiZXJyb3JcIix0aGlzLl9zdHJlYW1FcnJvcil9LHRoaXMpfWZ1bmN0aW9uIHIobSl7dmFyIGEsbyx1LGk9TWF0aC5wb3coMiw1Myksbj0taSxzPS9eXFxzKi0/KFxcZCtcXC4/fFxcLlxcZCt8XFxkK1xcLlxcZCspKFtlRV1bLStdP1xcZCspP1xccyokLyxoPS9eKChcXGR7NH0tWzAxXVxcZC1bMC0zXVxcZFRbMC0yXVxcZDpbMC01XVxcZDpbMC01XVxcZFxcLlxcZCsoWystXVswLTJdXFxkOlswLTVdXFxkfFopKXwoXFxkezR9LVswMV1cXGQtWzAtM11cXGRUWzAtMl1cXGQ6WzAtNV1cXGQ6WzAtNV1cXGQoWystXVswLTJdXFxkOlswLTVdXFxkfFopKXwoXFxkezR9LVswMV1cXGQtWzAtM11cXGRUWzAtMl1cXGQ6WzAtNV1cXGQoWystXVswLTJdXFxkOlswLTVdXFxkfFopKSkkLyx0PXRoaXMscj0wLGY9MCxkPSExLGU9ITEsbD1bXSxjPXtkYXRhOltdLGVycm9yczpbXSxtZXRhOnt9fTtpZihKKG0uc3RlcCkpe3ZhciBwPW0uc3RlcDttLnN0ZXA9ZnVuY3Rpb24oZSl7aWYoYz1lLF8oKSlnKCk7ZWxzZXtpZihnKCksMD09PWMuZGF0YS5sZW5ndGgpcmV0dXJuO3IrPWUuZGF0YS5sZW5ndGgsbS5wcmV2aWV3JiZyPm0ucHJldmlldz9vLmFib3J0KCk6KGMuZGF0YT1jLmRhdGFbMF0scChjLHQpKX19fWZ1bmN0aW9uIHkoZSl7cmV0dXJuXCJncmVlZHlcIj09PW0uc2tpcEVtcHR5TGluZXM/XCJcIj09PWUuam9pbihcIlwiKS50cmltKCk6MT09PWUubGVuZ3RoJiYwPT09ZVswXS5sZW5ndGh9ZnVuY3Rpb24gZygpe3JldHVybiBjJiZ1JiYoayhcIkRlbGltaXRlclwiLFwiVW5kZXRlY3RhYmxlRGVsaW1pdGVyXCIsXCJVbmFibGUgdG8gYXV0by1kZXRlY3QgZGVsaW1pdGluZyBjaGFyYWN0ZXI7IGRlZmF1bHRlZCB0byAnXCIrYi5EZWZhdWx0RGVsaW1pdGVyK1wiJ1wiKSx1PSExKSxtLnNraXBFbXB0eUxpbmVzJiYoYy5kYXRhPWMuZGF0YS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIXkoZSl9KSksXygpJiZmdW5jdGlvbigpe2lmKCFjKXJldHVybjtmdW5jdGlvbiBlKGUsdCl7SihtLnRyYW5zZm9ybUhlYWRlcikmJihlPW0udHJhbnNmb3JtSGVhZGVyKGUsdCkpLGwucHVzaChlKX1pZihBcnJheS5pc0FycmF5KGMuZGF0YVswXSkpe2Zvcih2YXIgdD0wO18oKSYmdDxjLmRhdGEubGVuZ3RoO3QrKyljLmRhdGFbdF0uZm9yRWFjaChlKTtjLmRhdGEuc3BsaWNlKDAsMSl9ZWxzZSBjLmRhdGEuZm9yRWFjaChlKX0oKSxmdW5jdGlvbigpe2lmKCFjfHwhbS5oZWFkZXImJiFtLmR5bmFtaWNUeXBpbmcmJiFtLnRyYW5zZm9ybSlyZXR1cm4gYztmdW5jdGlvbiBlKGUsdCl7dmFyIHIsaT1tLmhlYWRlcj97fTpbXTtmb3Iocj0wO3I8ZS5sZW5ndGg7cisrKXt2YXIgbj1yLHM9ZVtyXTttLmhlYWRlciYmKG49cj49bC5sZW5ndGg/XCJfX3BhcnNlZF9leHRyYVwiOmxbcl0pLG0udHJhbnNmb3JtJiYocz1tLnRyYW5zZm9ybShzLG4pKSxzPXYobixzKSxcIl9fcGFyc2VkX2V4dHJhXCI9PT1uPyhpW25dPWlbbl18fFtdLGlbbl0ucHVzaChzKSk6aVtuXT1zfXJldHVybiBtLmhlYWRlciYmKHI+bC5sZW5ndGg/ayhcIkZpZWxkTWlzbWF0Y2hcIixcIlRvb01hbnlGaWVsZHNcIixcIlRvbyBtYW55IGZpZWxkczogZXhwZWN0ZWQgXCIrbC5sZW5ndGgrXCIgZmllbGRzIGJ1dCBwYXJzZWQgXCIrcixmK3QpOnI8bC5sZW5ndGgmJmsoXCJGaWVsZE1pc21hdGNoXCIsXCJUb29GZXdGaWVsZHNcIixcIlRvbyBmZXcgZmllbGRzOiBleHBlY3RlZCBcIitsLmxlbmd0aCtcIiBmaWVsZHMgYnV0IHBhcnNlZCBcIityLGYrdCkpLGl9dmFyIHQ9MTshYy5kYXRhLmxlbmd0aHx8QXJyYXkuaXNBcnJheShjLmRhdGFbMF0pPyhjLmRhdGE9Yy5kYXRhLm1hcChlKSx0PWMuZGF0YS5sZW5ndGgpOmMuZGF0YT1lKGMuZGF0YSwwKTttLmhlYWRlciYmYy5tZXRhJiYoYy5tZXRhLmZpZWxkcz1sKTtyZXR1cm4gZis9dCxjfSgpfWZ1bmN0aW9uIF8oKXtyZXR1cm4gbS5oZWFkZXImJjA9PT1sLmxlbmd0aH1mdW5jdGlvbiB2KGUsdCl7cmV0dXJuIHI9ZSxtLmR5bmFtaWNUeXBpbmdGdW5jdGlvbiYmdm9pZCAwPT09bS5keW5hbWljVHlwaW5nW3JdJiYobS5keW5hbWljVHlwaW5nW3JdPW0uZHluYW1pY1R5cGluZ0Z1bmN0aW9uKHIpKSwhMD09PShtLmR5bmFtaWNUeXBpbmdbcl18fG0uZHluYW1pY1R5cGluZyk/XCJ0cnVlXCI9PT10fHxcIlRSVUVcIj09PXR8fFwiZmFsc2VcIiE9PXQmJlwiRkFMU0VcIiE9PXQmJihmdW5jdGlvbihlKXtpZihzLnRlc3QoZSkpe3ZhciB0PXBhcnNlRmxvYXQoZSk7aWYobjx0JiZ0PGkpcmV0dXJuITB9cmV0dXJuITF9KHQpP3BhcnNlRmxvYXQodCk6aC50ZXN0KHQpP25ldyBEYXRlKHQpOlwiXCI9PT10P251bGw6dCk6dDt2YXIgcn1mdW5jdGlvbiBrKGUsdCxyLGkpe3ZhciBuPXt0eXBlOmUsY29kZTp0LG1lc3NhZ2U6cn07dm9pZCAwIT09aSYmKG4ucm93PWkpLGMuZXJyb3JzLnB1c2gobil9dGhpcy5wYXJzZT1mdW5jdGlvbihlLHQscil7dmFyIGk9bS5xdW90ZUNoYXJ8fCdcIic7aWYobS5uZXdsaW5lfHwobS5uZXdsaW5lPWZ1bmN0aW9uKGUsdCl7ZT1lLnN1YnN0cmluZygwLDEwNDg1NzYpO3ZhciByPW5ldyBSZWdFeHAoUSh0KStcIihbXl0qPylcIitRKHQpLFwiZ21cIiksaT0oZT1lLnJlcGxhY2UocixcIlwiKSkuc3BsaXQoXCJcXHJcIiksbj1lLnNwbGl0KFwiXFxuXCIpLHM9MTxuLmxlbmd0aCYmblswXS5sZW5ndGg8aVswXS5sZW5ndGg7aWYoMT09PWkubGVuZ3RofHxzKXJldHVyblwiXFxuXCI7Zm9yKHZhciBhPTAsbz0wO288aS5sZW5ndGg7bysrKVwiXFxuXCI9PT1pW29dWzBdJiZhKys7cmV0dXJuIGE+PWkubGVuZ3RoLzI/XCJcXHJcXG5cIjpcIlxcclwifShlLGkpKSx1PSExLG0uZGVsaW1pdGVyKUoobS5kZWxpbWl0ZXIpJiYobS5kZWxpbWl0ZXI9bS5kZWxpbWl0ZXIoZSksYy5tZXRhLmRlbGltaXRlcj1tLmRlbGltaXRlcik7ZWxzZXt2YXIgbj1mdW5jdGlvbihlLHQscixpLG4pe3ZhciBzLGEsbyx1O249bnx8W1wiLFwiLFwiXFx0XCIsXCJ8XCIsXCI7XCIsYi5SRUNPUkRfU0VQLGIuVU5JVF9TRVBdO2Zvcih2YXIgaD0wO2g8bi5sZW5ndGg7aCsrKXt2YXIgZj1uW2hdLGQ9MCxsPTAsYz0wO289dm9pZCAwO2Zvcih2YXIgcD1uZXcgRSh7Y29tbWVudHM6aSxkZWxpbWl0ZXI6ZixuZXdsaW5lOnQscHJldmlldzoxMH0pLnBhcnNlKGUpLGc9MDtnPHAuZGF0YS5sZW5ndGg7ZysrKWlmKHImJnkocC5kYXRhW2ddKSljKys7ZWxzZXt2YXIgXz1wLmRhdGFbZ10ubGVuZ3RoO2wrPV8sdm9pZCAwIT09bz8wPF8mJihkKz1NYXRoLmFicyhfLW8pLG89Xyk6bz1ffTA8cC5kYXRhLmxlbmd0aCYmKGwvPXAuZGF0YS5sZW5ndGgtYyksKHZvaWQgMD09PWF8fGQ8PWEpJiYodm9pZCAwPT09dXx8dTxsKSYmMS45OTxsJiYoYT1kLHM9Zix1PWwpfXJldHVybntzdWNjZXNzZnVsOiEhKG0uZGVsaW1pdGVyPXMpLGJlc3REZWxpbWl0ZXI6c319KGUsbS5uZXdsaW5lLG0uc2tpcEVtcHR5TGluZXMsbS5jb21tZW50cyxtLmRlbGltaXRlcnNUb0d1ZXNzKTtuLnN1Y2Nlc3NmdWw/bS5kZWxpbWl0ZXI9bi5iZXN0RGVsaW1pdGVyOih1PSEwLG0uZGVsaW1pdGVyPWIuRGVmYXVsdERlbGltaXRlciksYy5tZXRhLmRlbGltaXRlcj1tLmRlbGltaXRlcn12YXIgcz13KG0pO3JldHVybiBtLnByZXZpZXcmJm0uaGVhZGVyJiZzLnByZXZpZXcrKyxhPWUsbz1uZXcgRShzKSxjPW8ucGFyc2UoYSx0LHIpLGcoKSxkP3ttZXRhOntwYXVzZWQ6ITB9fTpjfHx7bWV0YTp7cGF1c2VkOiExfX19LHRoaXMucGF1c2VkPWZ1bmN0aW9uKCl7cmV0dXJuIGR9LHRoaXMucGF1c2U9ZnVuY3Rpb24oKXtkPSEwLG8uYWJvcnQoKSxhPUoobS5jaHVuayk/XCJcIjphLnN1YnN0cmluZyhvLmdldENoYXJJbmRleCgpKX0sdGhpcy5yZXN1bWU9ZnVuY3Rpb24oKXt0LnN0cmVhbWVyLl9oYWx0ZWQ/KGQ9ITEsdC5zdHJlYW1lci5wYXJzZUNodW5rKGEsITApKTpzZXRUaW1lb3V0KHQucmVzdW1lLDMpfSx0aGlzLmFib3J0ZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gZX0sdGhpcy5hYm9ydD1mdW5jdGlvbigpe2U9ITAsby5hYm9ydCgpLGMubWV0YS5hYm9ydGVkPSEwLEoobS5jb21wbGV0ZSkmJm0uY29tcGxldGUoYyksYT1cIlwifX1mdW5jdGlvbiBRKGUpe3JldHVybiBlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLFwiXFxcXCQmXCIpfWZ1bmN0aW9uIEUoail7dmFyIHosTT0oaj1qfHx7fSkuZGVsaW1pdGVyLFA9ai5uZXdsaW5lLFU9ai5jb21tZW50cyxxPWouc3RlcCxOPWoucHJldmlldyxCPWouZmFzdE1vZGUsSz16PXZvaWQgMD09PWoucXVvdGVDaGFyfHxudWxsPT09ai5xdW90ZUNoYXI/J1wiJzpqLnF1b3RlQ2hhcjtpZih2b2lkIDAhPT1qLmVzY2FwZUNoYXImJihLPWouZXNjYXBlQ2hhciksKFwic3RyaW5nXCIhPXR5cGVvZiBNfHwtMTxiLkJBRF9ERUxJTUlURVJTLmluZGV4T2YoTSkpJiYoTT1cIixcIiksVT09PU0pdGhyb3cgbmV3IEVycm9yKFwiQ29tbWVudCBjaGFyYWN0ZXIgc2FtZSBhcyBkZWxpbWl0ZXJcIik7ITA9PT1VP1U9XCIjXCI6KFwic3RyaW5nXCIhPXR5cGVvZiBVfHwtMTxiLkJBRF9ERUxJTUlURVJTLmluZGV4T2YoVSkpJiYoVT0hMSksXCJcXG5cIiE9PVAmJlwiXFxyXCIhPT1QJiZcIlxcclxcblwiIT09UCYmKFA9XCJcXG5cIik7dmFyIFc9MCxIPSExO3RoaXMucGFyc2U9ZnVuY3Rpb24oaSx0LHIpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBpKXRocm93IG5ldyBFcnJvcihcIklucHV0IG11c3QgYmUgYSBzdHJpbmdcIik7dmFyIG49aS5sZW5ndGgsZT1NLmxlbmd0aCxzPVAubGVuZ3RoLGE9VS5sZW5ndGgsbz1KKHEpLHU9W10saD1bXSxmPVtdLGQ9Vz0wO2lmKCFpKXJldHVybiBMKCk7aWYoai5oZWFkZXImJiF0KXt2YXIgbD1pLnNwbGl0KFApWzBdLnNwbGl0KE0pLGM9W10scD17fSxnPSExO2Zvcih2YXIgXyBpbiBsKXt2YXIgbT1sW19dO0ooai50cmFuc2Zvcm1IZWFkZXIpJiYobT1qLnRyYW5zZm9ybUhlYWRlcihtLF8pKTt2YXIgeT1tLHY9cFttXXx8MDtmb3IoMDx2JiYoZz0hMCx5PW0rXCJfXCIrdikscFttXT12KzE7Yy5pbmNsdWRlcyh5KTspeT15K1wiX1wiK3Y7Yy5wdXNoKHkpfWlmKGcpe3ZhciBrPWkuc3BsaXQoUCk7a1swXT1jLmpvaW4oTSksaT1rLmpvaW4oUCl9fWlmKEJ8fCExIT09QiYmLTE9PT1pLmluZGV4T2Yoeikpe2Zvcih2YXIgYj1pLnNwbGl0KFApLEU9MDtFPGIubGVuZ3RoO0UrKyl7aWYoZj1iW0VdLFcrPWYubGVuZ3RoLEUhPT1iLmxlbmd0aC0xKVcrPVAubGVuZ3RoO2Vsc2UgaWYocilyZXR1cm4gTCgpO2lmKCFVfHxmLnN1YnN0cmluZygwLGEpIT09VSl7aWYobyl7aWYodT1bXSxJKGYuc3BsaXQoTSkpLEYoKSxIKXJldHVybiBMKCl9ZWxzZSBJKGYuc3BsaXQoTSkpO2lmKE4mJk48PUUpcmV0dXJuIHU9dS5zbGljZSgwLE4pLEwoITApfX1yZXR1cm4gTCgpfWZvcih2YXIgdz1pLmluZGV4T2YoTSxXKSxSPWkuaW5kZXhPZihQLFcpLEM9bmV3IFJlZ0V4cChRKEspK1EoeiksXCJnXCIpLFM9aS5pbmRleE9mKHosVyk7OylpZihpW1ddIT09eilpZihVJiYwPT09Zi5sZW5ndGgmJmkuc3Vic3RyaW5nKFcsVythKT09PVUpe2lmKC0xPT09UilyZXR1cm4gTCgpO1c9UitzLFI9aS5pbmRleE9mKFAsVyksdz1pLmluZGV4T2YoTSxXKX1lbHNlIGlmKC0xIT09dyYmKHc8Unx8LTE9PT1SKSlmLnB1c2goaS5zdWJzdHJpbmcoVyx3KSksVz13K2Usdz1pLmluZGV4T2YoTSxXKTtlbHNle2lmKC0xPT09UilicmVhaztpZihmLnB1c2goaS5zdWJzdHJpbmcoVyxSKSksRChSK3MpLG8mJihGKCksSCkpcmV0dXJuIEwoKTtpZihOJiZ1Lmxlbmd0aD49TilyZXR1cm4gTCghMCl9ZWxzZSBmb3IoUz1XLFcrKzs7KXtpZigtMT09PShTPWkuaW5kZXhPZih6LFMrMSkpKXJldHVybiByfHxoLnB1c2goe3R5cGU6XCJRdW90ZXNcIixjb2RlOlwiTWlzc2luZ1F1b3Rlc1wiLG1lc3NhZ2U6XCJRdW90ZWQgZmllbGQgdW50ZXJtaW5hdGVkXCIscm93OnUubGVuZ3RoLGluZGV4Old9KSxUKCk7aWYoUz09PW4tMSlyZXR1cm4gVChpLnN1YnN0cmluZyhXLFMpLnJlcGxhY2UoQyx6KSk7aWYoeiE9PUt8fGlbUysxXSE9PUspe2lmKHo9PT1LfHwwPT09U3x8aVtTLTFdIT09Syl7LTEhPT13JiZ3PFMrMSYmKHc9aS5pbmRleE9mKE0sUysxKSksLTEhPT1SJiZSPFMrMSYmKFI9aS5pbmRleE9mKFAsUysxKSk7dmFyIE89QSgtMT09PVI/dzpNYXRoLm1pbih3LFIpKTtpZihpLnN1YnN0cihTKzErTyxlKT09PU0pe2YucHVzaChpLnN1YnN0cmluZyhXLFMpLnJlcGxhY2UoQyx6KSksaVtXPVMrMStPK2VdIT09eiYmKFM9aS5pbmRleE9mKHosVykpLHc9aS5pbmRleE9mKE0sVyksUj1pLmluZGV4T2YoUCxXKTticmVha312YXIgeD1BKFIpO2lmKGkuc3Vic3RyaW5nKFMrMSt4LFMrMSt4K3MpPT09UCl7aWYoZi5wdXNoKGkuc3Vic3RyaW5nKFcsUykucmVwbGFjZShDLHopKSxEKFMrMSt4K3MpLHc9aS5pbmRleE9mKE0sVyksUz1pLmluZGV4T2YoeixXKSxvJiYoRigpLEgpKXJldHVybiBMKCk7aWYoTiYmdS5sZW5ndGg+PU4pcmV0dXJuIEwoITApO2JyZWFrfWgucHVzaCh7dHlwZTpcIlF1b3Rlc1wiLGNvZGU6XCJJbnZhbGlkUXVvdGVzXCIsbWVzc2FnZTpcIlRyYWlsaW5nIHF1b3RlIG9uIHF1b3RlZCBmaWVsZCBpcyBtYWxmb3JtZWRcIixyb3c6dS5sZW5ndGgsaW5kZXg6V30pLFMrK319ZWxzZSBTKyt9cmV0dXJuIFQoKTtmdW5jdGlvbiBJKGUpe3UucHVzaChlKSxkPVd9ZnVuY3Rpb24gQShlKXt2YXIgdD0wO2lmKC0xIT09ZSl7dmFyIHI9aS5zdWJzdHJpbmcoUysxLGUpO3ImJlwiXCI9PT1yLnRyaW0oKSYmKHQ9ci5sZW5ndGgpfXJldHVybiB0fWZ1bmN0aW9uIFQoZSl7cmV0dXJuIHJ8fCh2b2lkIDA9PT1lJiYoZT1pLnN1YnN0cmluZyhXKSksZi5wdXNoKGUpLFc9bixJKGYpLG8mJkYoKSksTCgpfWZ1bmN0aW9uIEQoZSl7Vz1lLEkoZiksZj1bXSxSPWkuaW5kZXhPZihQLFcpfWZ1bmN0aW9uIEwoZSl7cmV0dXJue2RhdGE6dSxlcnJvcnM6aCxtZXRhOntkZWxpbWl0ZXI6TSxsaW5lYnJlYWs6UCxhYm9ydGVkOkgsdHJ1bmNhdGVkOiEhZSxjdXJzb3I6ZCsodHx8MCl9fX1mdW5jdGlvbiBGKCl7cShMKCkpLHU9W10saD1bXX19LHRoaXMuYWJvcnQ9ZnVuY3Rpb24oKXtIPSEwfSx0aGlzLmdldENoYXJJbmRleD1mdW5jdGlvbigpe3JldHVybiBXfX1mdW5jdGlvbiBfKGUpe3ZhciB0PWUuZGF0YSxyPWFbdC53b3JrZXJJZF0saT0hMTtpZih0LmVycm9yKXIudXNlckVycm9yKHQuZXJyb3IsdC5maWxlKTtlbHNlIGlmKHQucmVzdWx0cyYmdC5yZXN1bHRzLmRhdGEpe3ZhciBuPXthYm9ydDpmdW5jdGlvbigpe2k9ITAsbSh0LndvcmtlcklkLHtkYXRhOltdLGVycm9yczpbXSxtZXRhOnthYm9ydGVkOiEwfX0pfSxwYXVzZTp5LHJlc3VtZTp5fTtpZihKKHIudXNlclN0ZXApKXtmb3IodmFyIHM9MDtzPHQucmVzdWx0cy5kYXRhLmxlbmd0aCYmKHIudXNlclN0ZXAoe2RhdGE6dC5yZXN1bHRzLmRhdGFbc10sZXJyb3JzOnQucmVzdWx0cy5lcnJvcnMsbWV0YTp0LnJlc3VsdHMubWV0YX0sbiksIWkpO3MrKyk7ZGVsZXRlIHQucmVzdWx0c31lbHNlIEooci51c2VyQ2h1bmspJiYoci51c2VyQ2h1bmsodC5yZXN1bHRzLG4sdC5maWxlKSxkZWxldGUgdC5yZXN1bHRzKX10LmZpbmlzaGVkJiYhaSYmbSh0LndvcmtlcklkLHQucmVzdWx0cyl9ZnVuY3Rpb24gbShlLHQpe3ZhciByPWFbZV07SihyLnVzZXJDb21wbGV0ZSkmJnIudXNlckNvbXBsZXRlKHQpLHIudGVybWluYXRlKCksZGVsZXRlIGFbZV19ZnVuY3Rpb24geSgpe3Rocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZC5cIil9ZnVuY3Rpb24gdyhlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgZXx8bnVsbD09PWUpcmV0dXJuIGU7dmFyIHQ9QXJyYXkuaXNBcnJheShlKT9bXTp7fTtmb3IodmFyIHIgaW4gZSl0W3JdPXcoZVtyXSk7cmV0dXJuIHR9ZnVuY3Rpb24gdihlLHQpe3JldHVybiBmdW5jdGlvbigpe2UuYXBwbHkodCxhcmd1bWVudHMpfX1mdW5jdGlvbiBKKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV9cmV0dXJuIG8mJihmLm9ubWVzc2FnZT1mdW5jdGlvbihlKXt2YXIgdD1lLmRhdGE7dm9pZCAwPT09Yi5XT1JLRVJfSUQmJnQmJihiLldPUktFUl9JRD10LndvcmtlcklkKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdC5pbnB1dClmLnBvc3RNZXNzYWdlKHt3b3JrZXJJZDpiLldPUktFUl9JRCxyZXN1bHRzOmIucGFyc2UodC5pbnB1dCx0LmNvbmZpZyksZmluaXNoZWQ6ITB9KTtlbHNlIGlmKGYuRmlsZSYmdC5pbnB1dCBpbnN0YW5jZW9mIEZpbGV8fHQuaW5wdXQgaW5zdGFuY2VvZiBPYmplY3Qpe3ZhciByPWIucGFyc2UodC5pbnB1dCx0LmNvbmZpZyk7ciYmZi5wb3N0TWVzc2FnZSh7d29ya2VySWQ6Yi5XT1JLRVJfSUQscmVzdWx0czpyLGZpbmlzaGVkOiEwfSl9fSksKGwucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoaC5wcm90b3R5cGUpKS5jb25zdHJ1Y3Rvcj1sLChjLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGgucHJvdG90eXBlKSkuY29uc3RydWN0b3I9YywocC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShwLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yPXAsKGcucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoaC5wcm90b3R5cGUpKS5jb25zdHJ1Y3Rvcj1nLGJ9KTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRPRE8gZml4IHF1ZXN0aW9uIGRhdGEgZm9yIG1vZHVsZVxyXG4vLyBjb25zaWRlciBncm91cHMgYnkgcm93IGluc3RlYWQgb2YgY29sdW1uXHJcbmltcG9ydCAqIGFzIHBsYXllcnMgZnJvbSBcIi4vcGxheWVyc1wiO1xyXG5cclxuY29uc3QgZ3JpZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyaWRXcmFwcGVyXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uR3JpZChxdWVzdGlvbk9iamVjdCkge1xyXG4gIGNvbnN0IGNhdGVnb3J5Q291bnQgPSBPYmplY3Qua2V5cyhxdWVzdGlvbk9iamVjdCkubGVuZ3RoO1xyXG5cclxuICBjb25zdCBxdWVzdGlvbkNvdW50ID0gW107XHJcblxyXG4gIC8vIHNldCBncmlkIGNvbHVtbiBjb3VudCBlcXVhbCB0byBudW1iZXIgb2YgcXVlc3Rpb24gY2F0ZWdvcmllc1xyXG4gIGNvbnN0IGdyaWRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmlkV3JhcHBlclwiKTtcclxuXHJcbiAgZ3JpZFdyYXBwZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICBncmlkV3JhcHBlci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke2NhdGVnb3J5Q291bnR9LDFmcilgO1xyXG5cclxuICAvLyBnZW5lcmF0ZSB0b3BpYyB0aWxlc1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnlDb3VudDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0aWxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjYXRlZ29yeURpdi5pZCA9IGBjYXRlZ29yeSR7aX1gO1xyXG4gICAgY2F0ZWdvcnlEaXYuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIpO1xyXG4gICAgdGlsZURpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb25Ub3BpY1wiKTtcclxuICAgIHRpbGVEaXYudGV4dENvbnRlbnQgPSBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF0udG9waWM7XHJcbiAgICBjYXRlZ29yeURpdi5hcHBlbmQodGlsZURpdik7XHJcblxyXG4gICAgZ3JpZEFyZWEuYXBwZW5kKGNhdGVnb3J5RGl2KTtcclxuICB9XHJcblxyXG4gIC8vIGdlbmVyYXRlIHF1ZXN0aW9uIGNvdW50cyBmb3IgZWFjaCBjYXRlZ29yeVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnlDb3VudDsgaSArPSAxKSB7XHJcbiAgICAvLyAtMSBmcm9tIGxlbmd0aCB0byBhY2NvdW50IGZvciAndG9waWMnIGtleVxyXG4gICAgcXVlc3Rpb25Db3VudC5wdXNoKE9iamVjdC5rZXlzKHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXSkubGVuZ3RoIC0gMSk7XHJcbiAgfVxyXG5cclxuICAvLyBnZW5lcmF0ZSBxdWVzdGlvbiB0aWxlcyB3aXRoIHZhbHVlc1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnlDb3VudDsgaSArPSAxKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8IHF1ZXN0aW9uQ291bnRbaV0gKyAxOyBqICs9IDEpIHtcclxuICAgICAgY29uc3QgY2F0ZWdvcnlEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2F0ZWdvcnkke2l9YCk7XHJcbiAgICAgIGNvbnN0IHRpbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0aWxlRGl2LmNsYXNzTGlzdC5hZGQoXCJxdWVzdGlvblwiKTtcclxuICAgICAgdGlsZURpdi50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgcXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdW2BxdWVzdGlvbiR7an1gXS52YWx1ZTtcclxuXHJcbiAgICAgIC8vIGFwcGx5IHN0b2NrIHZhbHVlcyBvZiAxMDAgaW5jcmVtZW50IHBlciByb3cgaWYgYSB2YWx1ZVxyXG4gICAgICAvLyBpcyBub3QgYSBzdXBwbGllZCBmcm9tIHF1ZXN0aW9uT2JqXHJcbiAgICAgIGlmIChxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF1bYHF1ZXN0aW9uJHtqfWBdLnZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aWxlRGl2LnRleHRDb250ZW50ID0gYCR7an0wMGA7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGkgKiBqKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYXBwbHkgZGltbWFkb21lIGRvdWJsZSBlZmZlY3RzIGZvciBhbnkgbWFya2VkIHF1ZXN0aW9ucy5cclxuICAgICAgaWYgKHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXVtgcXVlc3Rpb24ke2p9YF0uZG91YmxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0cnVlIHRlc3RcIik7XHJcbiAgICAgICAgdGlsZURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaW1tYWRvbWVcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGltbURvdWJsZUhhdFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGVnb3J5RGl2LmFwcGVuZCh0aWxlRGl2KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIHJlbW92ZSB0aGlzIGxhdGVyXHJcbmV4cG9ydCBjb25zdCB0ZXN0ID0gNztcclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2Jsb28tYW5zd2VyLnBuZ1wiOiBcIi4vc3JjL2ltZy9ibG9vLWFuc3dlci5wbmdcIixcblx0XCIuL2Jsb28ucG5nXCI6IFwiLi9zcmMvaW1nL2Jsb28ucG5nXCIsXG5cdFwiLi9ib3JvbWlyLWZ1bmVyYWwtZnVsbC5wbmdcIjogXCIuL3NyYy9pbWcvYm9yb21pci1mdW5lcmFsLWZ1bGwucG5nXCIsXG5cdFwiLi9ib3JvbWlyLWZ1bmVyYWwucG5nXCI6IFwiLi9zcmMvaW1nL2Jvcm9taXItZnVuZXJhbC5wbmdcIixcblx0XCIuL2NhaXRseW4tdmktZnVsbC5wbmdcIjogXCIuL3NyYy9pbWcvY2FpdGx5bi12aS1mdWxsLnBuZ1wiLFxuXHRcIi4vY2FpdGx5bi12aS5wbmdcIjogXCIuL3NyYy9pbWcvY2FpdGx5bi12aS5wbmdcIixcblx0XCIuL2NvbXBhbmlvbi1jdWJlLWZ1bGwucG5nXCI6IFwiLi9zcmMvaW1nL2NvbXBhbmlvbi1jdWJlLWZ1bGwucG5nXCIsXG5cdFwiLi9jb21wYW5pb24tY3ViZS5wbmdcIjogXCIuL3NyYy9pbWcvY29tcGFuaW9uLWN1YmUucG5nXCIsXG5cdFwiLi9kaWNlLW91dGxpbmUuc3ZnXCI6IFwiLi9zcmMvaW1nL2RpY2Utb3V0bGluZS5zdmdcIixcblx0XCIuL2hhdE5vQmFja2dyb3VuZC5wbmdcIjogXCIuL3NyYy9pbWcvaGF0Tm9CYWNrZ3JvdW5kLnBuZ1wiLFxuXHRcIi4vamlueC1mbGFyZS1mdWxsLnBuZ1wiOiBcIi4vc3JjL2ltZy9qaW54LWZsYXJlLWZ1bGwucG5nXCIsXG5cdFwiLi9qaW54LWZsYXJlLnBuZ1wiOiBcIi4vc3JjL2ltZy9qaW54LWZsYXJlLnBuZ1wiLFxuXHRcIi4vcGx1cy1zcXVhcmUuc3ZnXCI6IFwiLi9zcmMvaW1nL3BsdXMtc3F1YXJlLnN2Z1wiLFxuXHRcIi4vdG9ocnUucG5nXCI6IFwiLi9zcmMvaW1nL3RvaHJ1LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWcgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwiaW1wb3J0IHN0b2NrTmFtZXMgZnJvbSBcIi4vc3RvY2tOYW1lc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGxheWVyKG5hbWUsIG51bWJlciwgc2NvcmUpIHtcclxuICAvLyBhc3NpZ24gdG8gb2JqIHJhdGhlciB0aGFuIHRoaXMsIHNpbmNlIHRoaXMgPT09IHVuZGVmaW5lZCBpbiBtb2R1bGVzXHJcbiAgY29uc3Qgb2JqID0ge307XHJcbiAgb2JqLmRpc3BsYXlQbGF5ZXJOYW1lID0gZnVuY3Rpb24gZGlzcGxheVBsYXllck5hbWUocGxheWVyTnVtYmVyKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgI3BsYXllciR7cGxheWVyTnVtYmVyfWAsXHJcbiAgICApLnRleHRDb250ZW50ID0gYCR7dGhpcy5uYW1lfTpgO1xyXG4gIH07XHJcbiAgb2JqLmNoYW5nZVBsYXllck5hbWUgPSBmdW5jdGlvbiBjaGFuZ2VQbGF5ZXJOYW1lKCkge1xyXG4gICAgY29uc3QgdGVtcE5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICB0aGlzLm5hbWUgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCIsIFwiSm9zaCBHdW5zb25cIik7XHJcbiAgICAvLyBwcmV2ZW50IHBsYXllciBuYW1lIGZyb20gZGlzYXBwZWFyaW5nIGJ5IHVzaW5nIHByZXZpb3VzIG5hbWVcclxuICAgIGlmICh0aGlzLm5hbWUgPT09IG51bGwpIHRoaXMubmFtZSA9IHRlbXBOYW1lO1xyXG4gICAgdGhpcy5kaXNwbGF5UGxheWVyTmFtZSh0aGlzLm51bWJlcik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcclxuICB9O1xyXG4gIG9iai5pbmNyZW1lbnRQbGF5ZXJTY29yZSA9IGZ1bmN0aW9uIGluY3JlbWVudFBsYXllclNjb3JlKHNjb3JlVG9BZGQpIHtcclxuICAgIHRoaXMuc2NvcmUgKz0gc2NvcmVUb0FkZDtcclxuICB9O1xyXG4gIG9iai5kaXNwbGF5UGxheWVyU2NvcmUgPSBmdW5jdGlvbiBkaXNwbGF5UGxheWVyU2NvcmUocGxheWVyTnVtYmVyKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyJHtwbGF5ZXJOdW1iZXJ9U2NvcmVgKS50ZXh0Q29udGVudCA9XHJcbiAgICAgIHRoaXMuc2NvcmU7XHJcbiAgfTtcclxuICBvYmoubmFtZSA9IG5hbWU7XHJcbiAgb2JqLnNjb3JlID0gc2NvcmU7XHJcbiAgb2JqLm51bWJlciA9IG51bWJlcjtcclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50SW5SYW5nZShtaW4sIG1heCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcbi8vIGV4cGxvcmU6IHJuZyBzdG9ja25hbWUgbGlzdCwgYXBwbHkgdG8gcGxheWVyIGdlbiBsb29wLCBhZGQgdG8gdXNlZCBhcnJheVxyXG4vLyBybmcgb24gbmV3IGxvb3AsIGNoZWNrIGlmIHJuZyB1c2VkLCBpZiBzbywgcmVyb2xsLCBzdG9ja25hbWUgaXMgMjI5IGxvbmdcclxuLy8gaGF2ZSBhIGxpdHRsZSB0b2dnbGUgcmFuZG9tIGNoYXJhY3RlciBuYW1lIGJveCxcclxuLy8gZmxpcCBiZXR3ZWVuIHN0YXRpYyBhbmQgcmFuZG9tIG5hbWUgZ2VuZXJhdGlvblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGxheWVyc09iaihwbGF5ZXJDb3VudCwgcmFuZG9tTmFtZXMpIHtcclxuICBjb25zb2xlLmxvZyhzdG9ja05hbWVzKTtcclxuICBjb25zdCB0YWtlbk5hbWVzID0gW107XHJcbiAgY29uc3QgcGxheWVycyA9IHt9O1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcGxheWVyQ291bnQgKyAxOyBpICs9IDEpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGdldFJhbmRvbUludEluUmFuZ2UoNSwgMTApKTtcclxuICAgIGlmIChyYW5kb21OYW1lcykge1xyXG4gICAgICBsZXQgcm5nO1xyXG4gICAgICBsZXQgdGFrZW4gPSB0cnVlO1xyXG4gICAgICAvLyBnZW5lcmF0ZSByYW5kb20gbnVtYmVyLCBjaGVjayBpZiBpdCdzIGJlZW4gdXNlZCwgaWYgbm90LCBsb2cgYXMgdXNlZFxyXG4gICAgICB3aGlsZSAodGFrZW4gPT09IHRydWUpIHtcclxuICAgICAgICBybmcgPSBnZXRSYW5kb21JbnRJblJhbmdlKDAsIDIyOCk7XHJcbiAgICAgICAgaWYgKCF0YWtlbk5hbWVzLmluY2x1ZGVzKHJuZykpIHtcclxuICAgICAgICAgIHRha2VuTmFtZXMucHVzaChybmcpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGFrZW5OYW1lcyk7XHJcbiAgICAgICAgICB0YWtlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwbGF5ZXJzW2ldID0gZ2VuZXJhdGVQbGF5ZXIoc3RvY2tOYW1lc1tybmddLCBpLCAwKTtcclxuICAgICAgLy8gY29uc3QgbWF4ID0gcGxheWVyQ291bnQ7XHJcbiAgICAgIC8vIGNvbnN0IG1pbiA9IHBsYXllckNvdW50IC0gNDtcclxuICAgIH1cclxuICAgIGlmICghcmFuZG9tTmFtZXMpIHtcclxuICAgICAgcGxheWVyc1tpXSA9IGdlbmVyYXRlUGxheWVyKHN0b2NrTmFtZXNbaSAtIDFdLCBpLCAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBsYXllcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwbGF5ZXJOYW1lcyA9IFtcInRlc3RcIl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbFBsYXllclNldHVwKHBsYXllck9iamVjdCkge1xyXG4gIGNvbnN0IHBsYXllckNvdW50ID0gT2JqZWN0LmtleXMocGxheWVyT2JqZWN0KS5sZW5ndGg7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQ291bnQ7IGkgKz0gMSkge1xyXG4gICAgLy8gcGxheWVycyBpbmRleCBhdCAxXHJcbiAgICAvLyBkaXNwbGF5IGRlZmF1bHQgdXNlcm5hbWVzIGFuZCBpbml0YWwgc2NvcmVzXHJcbiAgICBwbGF5ZXJPYmplY3RbaSArIDFdLmRpc3BsYXlQbGF5ZXJOYW1lKGkgKyAxKTtcclxuXHJcbiAgICAvLyBwbGF5ZXIgbmFtZXMgY2FuIGJlIGNsaWNrZWQgdG8gb3BlbiB0aGUgY2hhbmdlIGRpYWxvZ3VlXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxheWVyJHtpICsgMX1gKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBwbGF5ZXJPYmplY3RbaSArIDFdLmNoYW5nZVBsYXllck5hbWUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXllckNvdW50SW5wdXQoKSB7XHJcbiAgcmV0dXJuIE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllckNvdW50XCIpLnZhbHVlKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGxheWVyVUkocGxheWVyTnVtYmVyKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJcIik7XHJcblxyXG4gIG5hbWUuaWQgPSBgcGxheWVyJHtwbGF5ZXJOdW1iZXJ9YDtcclxuXHJcbiAgc2NvcmUuY2xhc3NMaXN0LmFkZChcInNjb3JlXCIpO1xyXG4gIHNjb3JlLmlkID0gYHBsYXllciR7cGxheWVyTnVtYmVyfVNjb3JlYDtcclxuXHJcbiAgZGl2LmFwcGVuZChuYW1lLCBzY29yZSk7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuIiwiaW1wb3J0IFBhcGEgZnJvbSBcInBhcGFwYXJzZVwiO1xyXG5pbXBvcnQgKiBhcyBib2FyZCBmcm9tIFwiLi9ib2FyZFwiO1xyXG5pbXBvcnQgKiBhcyBwbGF5ZXJzIGZyb20gXCIuL3BsYXllcnNcIjtcclxuXHJcbmxldCBxdWVzdGlvbkRhdGEgPSBbXTtcclxuXHJcbi8vIGNvbnZlcnQgdGhpcyB0byBhIGZ1bmN0aW9uIGluIHBsYXllcnMgbW9kdWxlXHJcbi8vIGNvbnN0IHBsYXllckNvdW50ID0gcGxheWVycy5nZXRQbGF5ZXJDb3VudElucHV0KCk7XHJcbi8vIGV4cG9ydCBjb25zdCBwbGF5ZXJPYmogPSBwbGF5ZXJzLmdlbmVyYXRlUGxheWVyc09iaigyKTtcclxuXHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVF1ZXN0aW9uT2JqZWN0RnJvbUNTVigpIHtcclxuICBjb25zdCBxdWVzdGlvbk9iaiA9IHt9O1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXN0aW9uRGF0YS5sZW5ndGggLyAyOyBpICs9IDEpIHtcclxuICAgIHF1ZXN0aW9uT2JqW2BjYXRlZ29yeSR7aX1gXSA9IHtcclxuICAgICAgdG9waWM6IHF1ZXN0aW9uRGF0YVsyICogaV1bMF0sXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHN0YXJ0IGZyb20gaW5kZXggMSB0byBhY2NvdW50IGZvciBjc3YgdG9waWMgZm9ybWF0dGluZ1xyXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPCBxdWVzdGlvbkRhdGFbMF0ubGVuZ3RoOyBqICs9IDEpIHtcclxuICAgICAgcXVlc3Rpb25PYmpbYGNhdGVnb3J5JHtpfWBdW2BxdWVzdGlvbiR7an1gXSA9IHtcclxuICAgICAgICBxdWVzdGlvbjogcXVlc3Rpb25EYXRhWzIgKiBpXVtqXSxcclxuICAgICAgICBhbnN3ZXI6IHF1ZXN0aW9uRGF0YVsyICogaSArIDFdW2pdLFxyXG4gICAgICB9O1xyXG4gICAgICAvLyBxdWVzdGlvbk9ialtpXVtgcXVlc3Rpb24ke2p9YF0gPSBxdWVzdGlvbkRhdGFbMiAqIGldW2pdO1xyXG4gICAgICAvLyBxdWVzdGlvbk9ialtpXVtgYW5zd2VyJHtqfWBdID0gcXVlc3Rpb25EYXRhWzIgKiBpICsgMV1bal07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHF1ZXN0aW9uT2JqKTtcclxuICByZXR1cm4gcXVlc3Rpb25PYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRRdWVzdGlvbk1vZGFsRXZlbnRMaXN0ZW5lcihxdWVzdGlvbk9iamVjdCwgcGxheWVyT2JqKSB7XHJcbiAgLy8gY29uc3QgcXVlc3Rpb25UaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb25cIik7XHJcblxyXG4gIGNvbnN0IGNhdGVnb3J5Q291bnQgPSBPYmplY3Qua2V5cyhxdWVzdGlvbk9iamVjdCkubGVuZ3RoO1xyXG4gIGNvbnN0IHF1ZXN0aW9uQ291bnQgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVnb3J5Q291bnQ7IGkgKz0gMSkge1xyXG4gICAgLy8gLTEgZnJvbSBsZW5ndGggdG8gYWNjb3VudCBmb3IgJ3RvcGljJyBrZXlcclxuICAgIHF1ZXN0aW9uQ291bnQucHVzaChPYmplY3Qua2V5cyhxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF0pLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5UXVlc3Rpb25UaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIGAjY2F0ZWdvcnkke2l9IC5xdWVzdGlvbmAsXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBxdWVzdGlvbkNvdW50W2ldOyBqICs9IDEpIHtcclxuICAgICAgY2F0ZWdvcnlRdWVzdGlvblRpbGVzW2pdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhdGVnb3J5UXVlc3Rpb25UaWxlc1tqXS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWtlblwiKSkgcmV0dXJuO1xyXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9XHJcbiAgICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF1bYHF1ZXN0aW9uJHtqICsgMX1gXS5xdWVzdGlvbjtcclxuXHJcbiAgICAgICAgY29uc3QgYW5zd2VyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBhbnN3ZXJCdXR0b24udGV4dENvbnRlbnQgPSBcIkFuc3dlclwiO1xyXG5cclxuICAgICAgICBhbnN3ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgIGlmIChhbnN3ZXJCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnV0dG9uRGlzYWJsZWRcIikpIHJldHVybjtcclxuICAgICAgICAgIGFuc3dlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uRGlzYWJsZWRcIik7XHJcblxyXG4gICAgICAgICAgLy8gY29uc3QgcGxheWVyTmFtZXMgPSBbXHJcbiAgICAgICAgICAvLyAgIHBsYXllck9ialsxXS5uYW1lLFxyXG4gICAgICAgICAgLy8gICBwbGF5ZXJPYmpbMl0ubmFtZSxcclxuICAgICAgICAgIC8vICAgcGxheWVyT2JqWzNdLm5hbWUsXHJcbiAgICAgICAgICAvLyAgIHBsYXllck9ials0XS5uYW1lLFxyXG4gICAgICAgICAgLy8gXTtcclxuICAgICAgICAgIGNvbnN0IHBsYXllckNvdW50ID0gT2JqZWN0LmtleXMocGxheWVyT2JqKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgbW9kYWwuaW5uZXJIVE1MICs9XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXVtgcXVlc3Rpb24ke2ogKyAxfWBdLmFuc3dlcjtcclxuXHJcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzY29yZUJ1dHRvbnNcIik7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBwbGF5ZXJDb3VudDsgayArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTY29yZSA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5UXVlc3Rpb25UaWxlc1tqXS50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgICAxMCxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgc2NvcmVCdXR0b24udGV4dENvbnRlbnQgPSBwbGF5ZXJPYmpbayArIDFdLm5hbWU7XHJcbiAgICAgICAgICAgIHNjb3JlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHNjb3JlQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImJ1dHRvbkRpc2FibGVkXCIpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgcGxheWVyT2JqW2sgKyAxXS5pbmNyZW1lbnRQbGF5ZXJTY29yZShjdXJyZW50U2NvcmUpO1xyXG4gICAgICAgICAgICAgIHBsYXllck9ialtrICsgMV0uZGlzcGxheVBsYXllclNjb3JlKGsgKyAxKTtcclxuICAgICAgICAgICAgICBzY29yZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uRGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kKHNjb3JlQnV0dG9uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1vZGFsLmFwcGVuZChkaXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1vZGFsLmFwcGVuZChhbnN3ZXJCdXR0b24pO1xyXG5cclxuICAgICAgICBjYXRlZ29yeVF1ZXN0aW9uVGlsZXNbal0uY2xhc3NMaXN0LmFkZChcInRha2VuXCIpO1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0SnNvblRvT2JqZWN0KGpzb24pIHtcclxuICAvLyByZW1vdmUgdGhpcz9cclxuICBjb25zdCBvYmogPSBKU09OLnBhcnNlKGpzb24pO1xyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVzdGlvbkRhdGEoY3N2RmlsZSwgcGxheWVyT2JqKSB7XHJcbiAgLy8gXCIuLi9zcmMvcXVlc3Rpb25zL1RyaXZpYSAtIFF1ZXN0aW9ucy5jc3ZcIiBsb2NhbCBmaWxlbmFtZVxyXG4gIFBhcGEucGFyc2UoY3N2RmlsZS5maWxlc1swXSwge1xyXG4gICAgZG93bmxvYWQ6IHRydWUsXHJcbiAgICBjb21wbGV0ZShyZXN1bHRzKSB7XHJcbiAgICAgIHF1ZXN0aW9uRGF0YSA9IHJlc3VsdHMuZGF0YTtcclxuICAgICAgY29uc3QgcXVlc3Rpb25PYmogPSBnZW5lcmF0ZVF1ZXN0aW9uT2JqZWN0RnJvbUNTVigpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhxdWVzdGlvbkRhdGEpO1xyXG4gICAgICBib2FyZC5jcmVhdGVRdWVzdGlvbkdyaWQocXVlc3Rpb25PYmopO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhxdWVzdGlvbk9iaik7XHJcbiAgICAgIGFkZFF1ZXN0aW9uTW9kYWxFdmVudExpc3RlbmVyKHF1ZXN0aW9uT2JqLCBwbGF5ZXJPYmopO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHRzLmRhdGEpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4iLCJjb25zdCBzdG9ja05hbWVzID0gW1xyXG4gIFwiQ2hhc2VcIixcclxuICBcIkV0aGFuXCIsXHJcbiAgXCJTdGFuXCIsXHJcbiAgXCJUYXlsb3JcIixcclxuICBcIkFsZXhhbmRlclwiLFxyXG4gIFwiQW1hcmlcIixcclxuICBcIkpheWNlXCIsXHJcbiAgXCJOYXRoYW5cIixcclxuICBcIkFhcm9uXCIsXHJcbiAgXCJCcnljZVwiLFxyXG4gIFwiSHVudGVyXCIsXHJcbiAgXCJKYWNvYlwiLFxyXG4gIFwiTmFzaXJcIixcclxuICBcIk1hdHRoZXdcIixcclxuICBcIlByaW5jZVwiLFxyXG4gIFwiWGF2aWVyXCIsXHJcbiAgXCJLYXJ0ZXJcIixcclxuICBcIlRyaXN0YW5cIixcclxuICBcIkpvbmF0aGFuXCIsXHJcbiAgXCJKdXN0aW5cIixcclxuICBcIlR5bGVyXCIsXHJcbiAgXCJLYWxlYlwiLFxyXG4gIFwiU2ViYXN0aWFuXCIsXHJcbiAgXCJBeWRlblwiLFxyXG4gIFwiSmFzb25cIixcclxuICBcIkpvc2VwaFwiLFxyXG4gIFwiQXVzdGluXCIsXHJcbiAgXCJKYWRlblwiLFxyXG4gIFwiTmF0aGFuaWVsXCIsXHJcbiAgXCJTYW11ZWxcIixcclxuICBcIkR5bGFuXCIsXHJcbiAgXCJKYW1lc1wiLFxyXG4gIFwiSm9lbFwiLFxyXG4gIFwiQXNoZXJcIixcclxuICBcIkthaVwiLFxyXG4gIFwiQ2FsZWJcIixcclxuICBcIkdhYnJpZWxcIixcclxuICBcIkpheWNlb25cIixcclxuICBcIk1hbWFkb3VcIixcclxuICBcIkVtbWFudWVsXCIsXHJcbiAgXCJaYWNoYXJ5XCIsXHJcbiAgXCJFemVraWVsXCIsXHJcbiAgXCJOaWNob2xhc1wiLFxyXG4gIFwiWmFpcmVcIixcclxuICBcIkFkb25pc1wiLFxyXG4gIFwiQmVuamFtaW5cIixcclxuICBcIkFzaHRvblwiLFxyXG4gIFwiQXZlcnlcIixcclxuICBcIkthbWVyb25cIixcclxuICBcIkxlZ2VuZFwiLFxyXG4gIFwiTGV2aVwiLFxyXG4gIFwiTHVjYXNcIixcclxuICBcIkFuZHJld1wiLFxyXG4gIFwiRWxpXCIsXHJcbiAgXCJKdWxpYW5cIixcclxuICBcIk9tYXJpXCIsXHJcbiAgXCJBZGFtXCIsXHJcbiAgXCJFenJhXCIsXHJcbiAgXCJDYWlyb1wiLFxyXG4gIFwiSXNyYWVsXCIsXHJcbiAgXCJKYWlkZW5cIixcclxuICBcIkpheG9uXCIsXHJcbiAgXCJKdXN0aWNlXCIsXHJcbiAgXCJLYW1hcmlcIixcclxuICBcIkJyYW5kb25cIixcclxuICBcIkdyZXlzb25cIixcclxuICBcIk11aGFtbWFkXCIsXHJcbiAgXCJTaW5jZXJlXCIsXHJcbiAgXCJBbmRyZVwiLFxyXG4gIFwiSWJyYWhpbWFcIixcclxuICBcIkphY2tzb25cIixcclxuICBcIkpheWxlblwiLFxyXG4gIFwiS2FkZW5cIixcclxuICBcIkFiZG91bGF5ZVwiLFxyXG4gIFwiQ2FpZGVuXCIsXHJcbiAgXCJDaGFuY2VcIixcclxuICBcIkV2YW5cIixcclxuICBcIkdpb3Zhbm5pXCIsXHJcbiAgXCJHcmF5c29uXCIsXHJcbiAgXCJLZXZpblwiLFxyXG4gIFwiT21hclwiLFxyXG4gIFwiU2hhd25cIixcclxuICBcIkF1Z3VzdFwiLFxyXG4gIFwiSXNhYWNcIixcclxuICBcIktoYWxpbFwiLFxyXG4gIFwiS3lsZVwiLFxyXG4gIFwiTWFyY3VzXCIsXHJcbiAgXCJaYW5lXCIsXHJcbiAgXCJBbGlcIixcclxuICBcIk1haXNvblwiLFxyXG4gIFwiUHJpbmNldG9uXCIsXHJcbiAgXCJSb2JlcnRcIixcclxuICBcIkFjZVwiLFxyXG4gIFwiQnJ5YW5cIixcclxuICBcIkdpYW5uaVwiLFxyXG4gIFwiSmFtZWxcIixcclxuICBcIkphbWlyXCIsXHJcbiAgXCJKb2huXCIsXHJcbiAgXCJOb2xhblwiLFxyXG4gIFwiT3VzbWFuZVwiLFxyXG4gIFwiQWxwaGFcIixcclxuICBcIkFtYWRvdVwiLFxyXG4gIFwiSmF4c29uXCIsXHJcbiAgXCJLYXJlZW1cIixcclxuICBcIktpbmdzdG9uXCIsXHJcbiAgXCJMdWtlXCIsXHJcbiAgXCJNZWtoaVwiLFxyXG4gIFwiTXlsZXNcIixcclxuICBcIlN0ZXBoZW5cIixcclxuICBcIkFkZW5cIixcclxuICBcIkFkcmlhblwiLFxyXG4gIFwiQWxleFwiLFxyXG4gIFwiQm91YmFjYXJcIixcclxuICBcIkNheWRlblwiLFxyXG4gIFwiQ29ubm9yXCIsXHJcbiAgXCJDb3JleVwiLFxyXG4gIFwiRGFsbGFzXCIsXHJcbiAgXCJIYXlkZW5cIixcclxuICBcIkpvbmFoXCIsXHJcbiAgXCJLYW1yZW5cIixcclxuICBcIk1ham9yXCIsXHJcbiAgXCJQaG9lbml4XCIsXHJcbiAgXCJTZWFuXCIsXHJcbiAgXCJBYmRvdWxcIixcclxuICBcIkNhcnNvblwiLFxyXG4gIFwiRG9taW5pY1wiLFxyXG4gIFwiSmFzaWFoXCIsXHJcbiAgXCJKdWxpdXNcIixcclxuICBcIktlbm5ldGhcIixcclxuICBcIkxhbmRvblwiLFxyXG4gIFwiTWFsaWtcIixcclxuICBcIk1hcmtcIixcclxuICBcIk1pbGVzXCIsXHJcbiAgXCJNb3VoYW1lZFwiLFxyXG4gIFwiT3VtYXJcIixcclxuICBcIlNhbWlyXCIsXHJcbiAgXCJTb2xvbW9uXCIsXHJcbiAgXCJUaW1vdGh5XCIsXHJcbiAgXCJXaWxsaWFtXCIsXHJcbiAgXCJaYXlkZW5cIixcclxuICBcIkxpYW1cIixcclxuICBcIkphY29iXCIsXHJcbiAgXCJEeWxhblwiLFxyXG4gIFwiTWF0dGhld1wiLFxyXG4gIFwiTm9haFwiLFxyXG4gIFwiU2ViYXN0aWFuXCIsXHJcbiAgXCJKYXlkZW5cIixcclxuICBcIkx1Y2FzXCIsXHJcbiAgXCJFdGhhblwiLFxyXG4gIFwiQWFyb25cIixcclxuICBcIkFuZ2VsXCIsXHJcbiAgXCJEYW5pZWxcIixcclxuICBcIkxvZ2FuXCIsXHJcbiAgXCJBbGV4YW5kZXJcIixcclxuICBcIk1hc29uXCIsXHJcbiAgXCJBaWRlblwiLFxyXG4gIFwiTWF0ZW9cIixcclxuICBcIkpvc2h1YVwiLFxyXG4gIFwiRGF2aWRcIixcclxuICBcIkFkcmlhblwiLFxyXG4gIFwiQW50aG9ueVwiLFxyXG4gIFwiTWljaGFlbFwiLFxyXG4gIFwiSm9zZXBoXCIsXHJcbiAgXCJJYW5cIixcclxuICBcIkNocmlzdG9waGVyXCIsXHJcbiAgXCJFbGlhc1wiLFxyXG4gIFwiR2FicmllbFwiLFxyXG4gIFwiUnlhblwiLFxyXG4gIFwiSXNhYWNcIixcclxuICBcIkpvc2VcIixcclxuICBcIlRoaWFnb1wiLFxyXG4gIFwiRWxpamFoXCIsXHJcbiAgXCJKYW1lc1wiLFxyXG4gIFwiT2xpdmVyXCIsXHJcbiAgXCJKb3NpYWhcIixcclxuICBcIk5hdGhhblwiLFxyXG4gIFwiSnVsaWFuXCIsXHJcbiAgXCJKdXN0aW5cIixcclxuICBcIkNhcmxvc1wiLFxyXG4gIFwiR2FlbFwiLFxyXG4gIFwiTHVpc1wiLFxyXG4gIFwiQWxhblwiLFxyXG4gIFwiSmVyZW15XCIsXHJcbiAgXCJKb25hdGhhblwiLFxyXG4gIFwiTGVvbmFyZG9cIixcclxuICBcIktldmluXCIsXHJcbiAgXCJTYW11ZWxcIixcclxuICBcIkplcmVtaWFoXCIsXHJcbiAgXCJCZW5qYW1pblwiLFxyXG4gIFwiTmljaG9sYXNcIixcclxuICBcIkNocmlzdGlhblwiLFxyXG4gIFwiSm9oblwiLFxyXG4gIFwiU2FudGlhZ29cIixcclxuICBcIkF4ZWxcIixcclxuICBcIkVyaWNrXCIsXHJcbiAgXCJCcmFuZG9uXCIsXHJcbiAgXCJKb2VsXCIsXHJcbiAgXCJKdWFuXCIsXHJcbiAgXCJNYXRpYXNcIixcclxuICBcIldpbGxpYW1cIixcclxuICBcIkFuZHJld1wiLFxyXG4gIFwiRGllZ29cIixcclxuICBcIklzYWlhaFwiLFxyXG4gIFwiTmljb2xhc1wiLFxyXG4gIFwiWGF2aWVyXCIsXHJcbiAgXCJBeWRlblwiLFxyXG4gIFwiQXVzdGluXCIsXHJcbiAgXCJKYXNvblwiLFxyXG4gIFwiRW1tYW51ZWxcIixcclxuICBcIktheWRlblwiLFxyXG4gIFwiSmF5Y2VcIixcclxuICBcIkNhbGViXCIsXHJcbiAgXCJCcnlhblwiLFxyXG4gIFwiSm9yZGFuXCIsXHJcbiAgXCJOYXRoYW5pZWxcIixcclxuICBcIkFsZWphbmRyb1wiLFxyXG4gIFwiRGFtaWFuXCIsXHJcbiAgXCJEZXJla1wiLFxyXG4gIFwiSmFkaWVsXCIsXHJcbiAgXCJFbGlcIixcclxuICBcIk1hdHRlb1wiLFxyXG4gIFwiQWRhbVwiLFxyXG4gIFwiQWxleFwiLFxyXG4gIFwiSmFjZVwiLFxyXG4gIFwiSGVucnlcIixcclxuICBcIkpvc3VlXCIsXHJcbiAgXCJNaWd1ZWxcIixcclxuICBcIkV2YW5cIixcclxuICBcIkdyYXlzb25cIixcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b2NrTmFtZXM7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFBhcGEgZnJvbSBcInBhcGFwYXJzZVwiO1xyXG5pbXBvcnQgKiBhcyBxdWVzdGlvbiBmcm9tIFwiLi9xdWVzdGlvbk1vZGFsXCI7XHJcbmltcG9ydCAqIGFzIHBsYXllcnMgZnJvbSBcIi4vcGxheWVyc1wiO1xyXG5pbXBvcnQgKiBhcyBib2FyZCBmcm9tIFwiLi9ib2FyZFwiO1xyXG5pbXBvcnQgaGF0IGZyb20gXCIuL2ltZy9oYXROb0JhY2tncm91bmQucG5nXCI7XHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NjQyNzAwOS9ob3ctdG8tcmV0dXJuLXBhcGEtcGFyc2VkLWNzdi12aWEtcHJvbWlzZS1hc3luYy1hd2FpdFxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MjkwNTkzMy9pdGVyYXRpbmctb3Zlci1yZXN1bHRzLW9mLXBhcGEtcGFyc2Utb2JqZWN0XHJcbi8vIHJldmlldyB0aGVzZSBmb3IgcGVyc3VpbmcgYXdhaXQvcHJvbWlzZXMgd2l0aCBwYXBhcGFyc2VcclxuLy8gVE9ETyByZW1vdmUgdGV4dCBpbnN0ZWFkIG9mIHNldHRpbmcgaXQgdG8gYm9keSBjb2xvclxyXG5cclxuLy8gVE9ETyByZW1vdmUgdGhlIHZhcmlvdXMgY29uc29sZS5sb2cgZGVidWdnaW5nIGxpbmVzXHJcblxyXG4vLyBUT0RPIGNoYW5nZSBmaWxlIGZyb20gc291cmNlIGRvY3VtZW50IHRvIHVzZXIgdXBsb2FkZWQgdmlhIGJ1dHRvblxyXG4vLyBleHBhbmQgcGxheWVyIGNyZWF0aW9uIHRvIHN1cHBvcnQgYW55IG51bWJlciBvZiBwbGF5ZXJzIC0gcGxheWVyc2V0dXAgY2FuIGJlIGZlZCBhIHBsYXllciBvYmplY3QgYW5kIGxvb3BlZFxyXG4vLyBjaGFuZ2UgcGxheWVyIG5hbWUgZXZlbnQgbGlzdGVuZXIgdG8gYmUgYSBsb29wIGJhc2VkIG9uIHBsYXllciBjb3VudFxyXG4vLyBwbGF5ZXJzIG1vZHVsZSByZW1vdmUgcHJvbXB0IGZvciBiZXR0ZXIgY3VzdG9tIHNvbHV0aW9uXHJcbi8vIG9uZSBvcHRpb24gZm9yIGltYWdlcywgaWYgKHF1ZXN0aW9uIGRhdGEgPT09IGltZyBmaWxlIG5hbWUpIHNldCBpbWdcclxuLy8gZXhwYW5kIHN0b2NrIG5hbWVzXHJcbi8vIG9ubHkgYWxsb3cgdXBsb2FkIGlmIChmaWxlSW5wdXQpIGJ1dHRvbiAhZGlzYWJsZWRcclxuLy8gZ3JvdXAgY3NzIHRvZ2V0aGVyIGJldHRlclxyXG4vLyBmaWd1cmUgb3V0IGhvdyB0byBjb2xsZWN0IHBvaW50IHZhbHVlIGZyb20gY3N2IGlucHV0XHJcbi8vIHN0b3AgZ2F0aGVyaW5nIHF1ZXN0aW9uMCwgYWxyZWFkeSBjb3ZlcmVkIGluIHRvcGljXHJcbi8vIGNsZWFudXAgaW5kZXhcclxuLy8gY29uc2lkZXIgYXN5bmMgZm9yIC5qc29uXHJcbi8vIGNoYW5nZSBib2FyZCBsb2dpYyB0byBhY2NvdW50IGZvciBhc3ltbWV0cmljIGNhdGVnb3JpZXMgLSBsb29wIGFsbCBjYXRlZ29yaWVzIHRvIGZpbmQgdW5pcXVlIHF1ZXN0aW9uIGNvdW50c1xyXG4vLyBkaXNhYmxlIG92ZXJsYXkgY2xvc2luZyB1bnRpbCBhdCBsZWFzdCBhbnN3ZXIgYnV0dG9uIGNsaWNrZWRcclxuLy8gZml4IGJvYXJkIGJ1aWxkIG9uIG5vbi1zcXVhcmUgYm9hcmRzXHJcbi8vIGNvbnNpZGVyIGV4cG9ydGluZyBjYXRlZ29yeS9xdWVzdGlvbiBjb3VudHMgZnJvbSBib2FyZFxyXG4vLyBtaWdyYXRlIHRvIGNsYXNzbGlzdCB2cyBjdXN0b20gZnVuY3Rpb25cclxuLy8gY2hhbmdlIHBsYXllciBuYW1lIGJ5IHNvbWV0aGluZyBvdGhlciB0aGFuIHByb21wdCgpXHJcbi8vIG1ldGhvZCB0byBlZGl0IHNjb3Jlc1xyXG4vLyBsb29rIGludG8gc3RhbmRhcmRpemluZyB0b3BpYyBkaXYgaGVpZ2h0XHJcbi8vIGNvbnNpZGVyIHJlc2V0dGluZyBwbGF5ZXIgbmFtZXMgb24gbmV3IGdhbWVcclxuLy8gZmlsZSBpbnB1dCBzdHlsaW5nXHJcbi8vIG1vdmUgaW5pdGlhbCBwbGF5ZXIgc2V0dXAgaW5zaWRlIGdhbWUgc3RhcnQgYnV0dG9uXHJcbi8vIG1vdmUgcGxheWVyT2JqIGdlbiBpbnNpZGUgdXBsb2FkIGJ1dHRvblxyXG4vLyBoYXZlIGNoYW5nZWQgcGxheWVyIG5hbWVzIGNhcnJ5b3ZlciBvbiBhIG5ldyBnYW1lXHJcbi8vIHRoaW5rIGFib3V0IGZsZXh3cmFwIGVxdWFsIG51bWJlcnMgb24gbGluZXNcclxuLy8gZmlsZSBpbnB1dCBsYWJlbCBjc3NcclxuLy8gZmluaXNoIGRpbW1hZG9tZSBkb3VibGUsIHJuYWRvbSBvciBjaG9zZW4gbG9jYXRpb25cclxuLy8gZml4IGltYWdlLCBhdWRpbywgdmlkZW8gaW5wdXRzICh5b3V0dWJlIGVtYmVkPylcclxuXHJcbi8vIEluaXRpYWxpemUgdGhlIHBsYXllciBvYmplY3RcclxubGV0IHBsYXllck9iajtcclxuXHJcbmNvbnN0IGZpbGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZUlucHV0XCIpO1xyXG5jb25zdCB1cGxvYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwbG9hZFwiKTtcclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xyXG5jb25zdCB1cGxvYWRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxvYWRXcmFwcGVyXCIpO1xyXG5cclxuLy8vIC8gdGVzdGluZyBhcmVhXHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbmNvbnN0IGRpbW1hZG9tZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpbW1hZG9tZVwiKTtcclxuXHJcbmNvbnN0IGRpbW1Eb3VibGVIYXQgPSBuZXcgSW1hZ2UoKTtcclxuZGltbURvdWJsZUhhdC5zcmMgPSBoYXQ7XHJcbmRpbW1Eb3VibGVIYXQuaWQgPSBcImRpbW1Eb3VibGVIYXRcIjtcclxuYm9keS5hcHBlbmQoZGltbURvdWJsZUhhdCk7XHJcblxyXG4vLyB1cGxvYWRXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbi8vICAgZGltbWFkb21lVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4vLyAgIGRpbW1Eb3VibGVIYXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuLy8gICAvLyBtYXRjaCBpbnRlcnZhbCBkZWxheSB3aXRoIGhhdCBhbmltYXRpb24gbGVuZ3RoKml0ZXJhdGlvbnNcclxuLy8gICAvLyBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbi8vICAgLy8gICBkaW1tYWRvbWVUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuLy8gICAvLyB9LCA0MDAwKTtcclxuLy8gfSk7XHJcbmRpbW1hZG9tZVRleHQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XHJcbiAgZGltbWFkb21lVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn0pO1xyXG5kaW1tRG91YmxlSGF0LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4ge1xyXG4gIGRpbW1Eb3VibGVIYXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59KTtcclxuXHJcbi8vLyAvXHJcblxyXG5jb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5yZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgZmlsZURhdGEgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG5cclxuICBjb25zdCBqc29uT2JqID0gSlNPTi5wYXJzZShmaWxlRGF0YSk7XHJcblxyXG4gIGJvYXJkLmNyZWF0ZVF1ZXN0aW9uR3JpZChqc29uT2JqKTtcclxuICBxdWVzdGlvbi5hZGRRdWVzdGlvbk1vZGFsRXZlbnRMaXN0ZW5lcihqc29uT2JqLCBwbGF5ZXJPYmopO1xyXG59KTtcclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVSZWFkZXIvcmVhZEFzVGV4dFxyXG5cclxubGV0IHJhbmRvbU5hbWVzQm9vbCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gdG9nZ2xlUmFuZG9tTmFtZXMoKSB7XHJcbiAgaWYgKCFyYW5kb21OYW1lc0Jvb2wpIHtcclxuICAgIHJhbmRvbU5hbWVzQm9vbCA9IHRydWU7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChyYW5kb21OYW1lc0Jvb2wpIHtcclxuICAgIHJhbmRvbU5hbWVzQm9vbCA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG5jb25zdCByYW5kb21OYW1lc0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmRvbU5hbWVzSWNvblwiKTtcclxucmFuZG9tTmFtZXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgcmFuZG9tTmFtZXNJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJncmVlblwiKTtcclxuICB0b2dnbGVSYW5kb21OYW1lcygpO1xyXG59KTtcclxuXHJcbmNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dhbWVCdXR0b25cIik7XHJcbm5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAvLyBzaG93L2hpZGUgbmV3IGdhbWUgZWxlbWVudHNcclxuICBpZiAodXBsb2FkV3JhcHBlci5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgdXBsb2FkV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHVwbG9hZFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4vLyBvdmVybGF5IHByb3ZpZGVzIGEgc2VtaS10cmFuc3BhcmVudCBibHVyIGJlaGluZCB0aGUgbW9kYWwgdG8gaGVscCBmb2N1cyBhdHRlbnRpb24gb24gbW9kYWxcclxuLy8gd2hlbiB0aGUgb3ZlcmxheSBiYWNrZ3JvdW5kIGlzIGNsaWNrZWQgYW55d2hlcmUsIHRoZSBtb2RhbCByZWdhaW5zIHRoZSBoaWRkZW4gY2xhc3MgYW5kIGRpc2FwcGVhcnNcclxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG59KTtcclxuXHJcbnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHBsYXllck9iaiA9IHBsYXllcnMuZ2VuZXJhdGVQbGF5ZXJzT2JqKFxyXG4gICAgcGxheWVycy5nZXRQbGF5ZXJDb3VudElucHV0KCksXHJcbiAgICByYW5kb21OYW1lc0Jvb2wsXHJcbiAgKTtcclxuICBjb25zdCBwbGF5ZXJDb3VudCA9IE9iamVjdC5rZXlzKHBsYXllck9iaikubGVuZ3RoO1xyXG5cclxuICBjb25zdCBwbGF5ZXJTY29yZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllclNjb3Jlc1wiKTtcclxuICAvLyBjbGVhciBodG1sIGVsZW1lbnRzIGZvciBwbGF5ZXIgc2NvcmVzIHRvIGF2b2lkIGR1cGxpY2F0ZXMgb24gc3RhcnRpbmcgbmV3IGdhbWVcclxuICBwbGF5ZXJTY29yZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBsYXllckNvdW50ICsgMTsgaSArPSAxKSB7XHJcbiAgICBwbGF5ZXJTY29yZXMuYXBwZW5kKHBsYXllcnMuY3JlYXRlUGxheWVyVUkoaSkpO1xyXG4gIH1cclxuXHJcbiAgcGxheWVycy5pbml0aWFsUGxheWVyU2V0dXAocGxheWVyT2JqKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwbGF5ZXJDb3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgcGxheWVyT2JqW2ldLnNjb3JlID0gMDtcclxuICAgIHBsYXllck9ialtpXS5kaXNwbGF5UGxheWVyU2NvcmUoaSwgMCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbnB1dEZpbGUgPSBmaWxlSW5wdXQuZmlsZXNbMF07XHJcbiAgY29uc3QgZmlsZVR5cGUgPSBpbnB1dEZpbGUudHlwZS5tYXRjaCgvY3N2fGpzb24vKTtcclxuXHJcbiAgLy8gbWF0Y2ggcmV0dXJucyBtYXRjaGVkIGdyb3VwIGluIGFuIGFycmF5XHJcbiAgaWYgKGZpbGVUeXBlWzBdID09PSBcImNzdlwiKSBxdWVzdGlvbi5nZXRRdWVzdGlvbkRhdGEoZmlsZUlucHV0LCBwbGF5ZXJPYmopO1xyXG4gIGlmIChmaWxlVHlwZVswXSA9PT0gXCJqc29uXCIpIHtcclxuICAgIC8vIGJvYXJkLmNyZWF0ZVF1ZXN0aW9uR3JpZCg0MiwganNvbk9iaik7XHJcbiAgICAvLyBxdWVzdGlvbi5hZGRRdWVzdGlvbk1vZGFsRXZlbnRMaXN0ZW5lcihqc29uT2JqKTtcclxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGlucHV0RmlsZSk7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xyXG4gIGNvbnN0IGltYWdlcyA9IHt9O1xyXG4gIC8vIGVuY2xvc2luZyBicmFja2V0IGFyb3VuZCByZXR1cm4gdG8gYXZvaWQgYW1iaWd1b3VzIGFzc2lnbm1lbnQgaW4gYSByZXR1cm5cclxuICByLmtleXMoKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgIC8vIHJlbW92ZSBsZWFkaW5nIC4vIGZyb20gZmlsZSBuYW1lc1xyXG4gICAgY29uc3QgdGVtcCA9IGtleS5yZXBsYWNlKFwiLi9cIiwgXCJcIik7XHJcbiAgICAvLyBvciBvcHRpb24gZml4IGNhc2Ugd2hlcmUgbGFzdEluZGV4T2YgPT09IC0xXHJcbiAgICAvLyByZW1vdmUgdHJhaWxpbmcgZmlsZSBleHRlbnNpb25zIGZyb20gZmlsZSBuYW1lcyAoZS5nLiAucG5nKVxyXG4gICAgY29uc3QgdGVtcDIgPSB0ZW1wLnN1YnN0cigwLCB0ZW1wLmxhc3RJbmRleE9mKFwiLlwiKSkgfHwgdGVtcDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRlbXAyKTtcclxuICAgIGltYWdlc1t0ZW1wMl0gPSByKGtleSk7XHJcbiAgfSk7XHJcbiAgLy8gYWx0ZXJuYXRlIG1hcCBtZXRob2RcclxuICAvLyByLmtleXMoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgLy8gICBpbWFnZXNbaXRlbS5yZXBsYWNlKFwiLi9cIiwgXCJcIildID0gcihpdGVtKTtcclxuICAvLyB9KTtcclxuICByZXR1cm4gaW1hZ2VzO1xyXG59XHJcblxyXG5jb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KFwiLi9pbWdcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=