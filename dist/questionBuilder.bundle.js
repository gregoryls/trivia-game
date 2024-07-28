/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/questionBuilderStyle.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/questionBuilderStyle.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `/* colors */
body {
  background-color: gray;
}
.categoryWrap {
  background-color: pink;
}

.categoryInput {
  background-color: purple;
}
.categoryQuestionData {
  background-color: aqua;
}

.QAVWrap {
  background-color: yellowgreen;
}
/*  */

/* categories */
#allCategories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 100px;
}
.categoryWrap,
#newCategoryButton {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 260px;
}

.closeCategory {
  margin: 0;
  margin-left: auto;
  cursor: pointer;
}
/*  */

/* questions */
.categoryQuestionData {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.QAVWrap {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
/*  */

#newCategoryButton {
  background-color: bisque;
  text-align: center;
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/questionBuilderStyle.css"],"names":[],"mappings":"AAAA,WAAW;AACX;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;AAC1B;AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;AAC/B;AACA,KAAK;;AAEL,eAAe;AACf;EACE,aAAa;EACb,4DAA4D;EAC5D,eAAe;AACjB;AACA;;EAEE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,YAAY;AACd;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,eAAe;AACjB;AACA,KAAK;;AAEL,cAAc;AACd;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA,KAAK;;AAEL;EACE,wBAAwB;EACxB,kBAAkB;EAClB,eAAe;AACjB","sourcesContent":["/* colors */\r\nbody {\r\n  background-color: gray;\r\n}\r\n.categoryWrap {\r\n  background-color: pink;\r\n}\r\n\r\n.categoryInput {\r\n  background-color: purple;\r\n}\r\n.categoryQuestionData {\r\n  background-color: aqua;\r\n}\r\n\r\n.QAVWrap {\r\n  background-color: yellowgreen;\r\n}\r\n/*  */\r\n\r\n/* categories */\r\n#allCategories {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\r\n  grid-gap: 100px;\r\n}\r\n.categoryWrap,\r\n#newCategoryButton {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  padding: 10px;\r\n  width: 260px;\r\n}\r\n\r\n.closeCategory {\r\n  margin: 0;\r\n  margin-left: auto;\r\n  cursor: pointer;\r\n}\r\n/*  */\r\n\r\n/* questions */\r\n.categoryQuestionData {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n.QAVWrap {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n/*  */\r\n\r\n#newCategoryButton {\r\n  background-color: bisque;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/questionBuilderStyle.css":
/*!**************************************!*\
  !*** ./src/questionBuilderStyle.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_questionBuilderStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./questionBuilderStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/questionBuilderStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_questionBuilderStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_questionBuilderStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_questionBuilderStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_questionBuilderStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./src/questions/questionsTemplate.json":
/*!**********************************************!*\
  !*** ./src/questions/questionsTemplate.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"category1":{"topic":"Topic 1","question1":{"double":false,"value":100,"question":"Question 1","answer":"Answer 1"},"question2":{"double":false,"value":200,"question":"Question 2","answer":"Answer 2"},"question3":{"double":false,"value":300,"question":"Question 3","answer":"Answer 3"},"question4":{"double":false,"value":400,"question":"Question 4","answer":"Answer 4"},"question5":{"double":false,"value":500,"question":"Question 5","answer":"Answer 5"},"question6":{"double":false,"value":600,"question":"Question 6","answer":"Answer 6"}},"category2":{"topic":"Topic 2","question1":{"double":false,"value":100,"question":"Question 1","answer":"Answer 1"},"question2":{"double":false,"value":200,"question":"Question 2","answer":"Answer 2"},"question3":{"double":false,"value":300,"question":"Question 3","answer":"Answer 3"},"question4":{"double":false,"value":400,"question":"Question 4","answer":"Answer 4"},"question5":{"double":false,"value":500,"question":"Question 5","answer":"Answer 5"},"question6":{"double":false,"value":600,"question":"Question 6","answer":"Answer 6"}},"category3":{"topic":"Topic 3","question1":{"double":false,"value":100,"question":"Question 1","answer":"Answer 1"},"question2":{"double":false,"value":200,"question":"Question 2","answer":"Answer 2"},"question3":{"double":false,"value":300,"question":"Question 3","answer":"Answer 3"},"question4":{"double":false,"value":400,"question":"Question 4","answer":"Answer 4"},"question5":{"double":false,"value":500,"question":"Question 5","answer":"Answer 5"},"question6":{"double":false,"value":600,"question":"Question 6","answer":"Answer 6"}},"category4":{"topic":"Topic 4","question1":{"double":false,"value":100,"question":"Question 1","answer":"Answer 1"},"question2":{"double":false,"value":200,"question":"Question 2","answer":"Answer 2"},"question3":{"double":false,"value":300,"question":"Question 3","answer":"Answer 3"},"question4":{"double":false,"value":400,"question":"Question 4","answer":"Answer 4"},"question5":{"double":false,"value":500,"question":"Question 5","answer":"Answer 5"},"question6":{"double":false,"value":600,"question":"Question 6","answer":"Answer 6"}},"category5":{"topic":"Topic 5","question1":{"double":false,"value":100,"question":"Question 1","answer":"Answer 1"},"question2":{"double":false,"value":200,"question":"Question 2","answer":"Answer 2"},"question3":{"double":false,"value":300,"question":"Question 3","answer":"Answer 3"},"question4":{"double":false,"value":400,"question":"Question 4","answer":"Answer 4"},"question5":{"double":false,"value":500,"question":"Question 5","answer":"Answer 5"},"question6":{"double":false,"value":600,"question":"Question 6","answer":"Answer 6"}},"category6":{"topic":"Topic 6","question1":{"double":true,"value":100,"question":"Question 1","answer":"Answer 1"},"question2":{"double":false,"value":200,"question":"Question 2","answer":"Answer 2"},"question3":{"double":false,"value":300,"question":"Question 3","answer":"Answer 3"},"question4":{"double":false,"value":400,"question":"Question 4","answer":"Answer 4"},"question5":{"double":false,"value":500,"question":"Question 5","answer":"Answer 5"},"question6":{"double":false,"value":600,"question":"Question 6","answer":"Answer 6"}}}');

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/questionBuilder.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _questionBuilderStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionBuilderStyle.css */ "./src/questionBuilderStyle.css");
/* harmony import */ var _questions_questionsTemplate_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions/questionsTemplate.json */ "./src/questions/questionsTemplate.json");



// TODO
// change innerHTML to something less destructive, probably
/// / or write existing inputs to an object
// give default values based on 'normal' distribution
// probably swap to text area
// change category number to a + card at the end and X buttons in each category
// add double to inputs
// make sure + card regenerates if clicked

function createLabelAndInput(
  className,
  inputID,
  type,
  labelText,
  placeholderText,
) {
  const div = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");

  div.classList.add(className);
  input.id = inputID;
  input.type = type;
  input.placeholder = placeholderText;
  label.htmlFor = inputID;
  label.textContent = labelText;
  div.append(label, input);
  return div;
}

function createLabelAndTextarea(
  className,
  inputID,
  labelText,
  placeholderText,
) {
  const div = document.createElement("div");
  const textarea = document.createElement("textarea");
  const label = document.createElement("label");

  div.classList.add(className);
  textarea.id = inputID;
  textarea.rows = 1;
  textarea.cols = 20;
  textarea.placeholder = placeholderText;

  label.htmlFor = inputID;
  label.textContent = labelText;
  div.append(label, textarea);
  return div;
}

function createQuestionAnswerValueDoubleInputs(question, category) {
  const wrap = document.createElement("div");
  wrap.id = `question${question}Wrap`;
  wrap.classList.add("QAVWrap");

  // add label
  const selectElement = document.createElement("select");
  selectElement.id = `selectQuestion${question}Type`;
  selectElement.classList.add("selectQuestionType");
  const selectOptions = [
    { value: "text", text: "text" },
    { value: "image", text: "image" },
    { value: "audio", text: "audio" },
  ];
  selectOptions.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.text = option.text;
    selectElement.append(optionElement);
  });
  wrap.append(selectElement);

  let questionData;
  if (!_questions_questionsTemplate_json__WEBPACK_IMPORTED_MODULE_1__[`category${category}`]) {
    console.log("no template");
    questionData = {
      question: `Question ${question}`,
      answer: `Answer ${question}`,
      value: `${question * 100}`,
    };
  } else {
    questionData =
      _questions_questionsTemplate_json__WEBPACK_IMPORTED_MODULE_1__[`category${category}`][`question${question}`];
  }
  wrap.append(
    createLabelAndTextarea(
      "questionInput",
      `category${category}Question`,
      `Question ${question}`,
      questionData.question,
    ),
  );
  wrap.append(
    createLabelAndTextarea(
      "answerInput",
      `category${category}Answer`,
      `Answer ${question}`,
      questionData.answer,
    ),
  );
  wrap.append(
    createLabelAndInput(
      "valueInput",
      `category${category}Value`,
      "number",
      `Value`,
      questionData.value,
    ),
  );
  wrap.append(
    createLabelAndInput(
      "doubleCheckbox",
      `category${category}Checkbox`,
      "checkbox",
      "Dimmadome Double:",
    ),
  );

  return wrap;
}

function reNumberCategories() {
  const categoryList = document.querySelectorAll(
    "#allCategories .categoryInput",
  );

  for (let i = 1; i < categoryList.length + 1; i += 1) {
    const label = categoryList[i - 1].children[0];
    label.htmlFor = `category${i}Topic`;
  }

  // console.log(categoryList);
}

function generateNewCategoryButton() {
  const newCategory = document.createElement("div");
  newCategory.id = "newCategoryButton";
  const plus = document.createElement("p");
  plus.textContent = "+";
  newCategory.append(plus);

  return newCategory;
}
function appendNewCategory() {
  const allCategories = document.getElementById("allCategories");

  const newCategory = generateNewCategoryButton();

  const i = allCategories.children.length + 1;

  newCategory.addEventListener("click", () => {
    const wrap1 = document.createElement("div");
    const wrap2 = document.createElement("div");

    const closeCategory = document.createElement("p");
    closeCategory.textContent = "X";
    closeCategory.classList.add("closeCategory");
    closeCategory.addEventListener("click", () => {
      console.log("x");
      wrap1.remove();
    });

    wrap1.append(
      closeCategory,
      createLabelAndInput(
        "categoryInput",
        `category${i}Topic`,
        "text",
        `Category ${i}`,
        "test new topic",
        // questionsTemplate[`category${i}`].topic,
      ),
    );
    wrap1.id = `category${i}Wrap`;
    wrap1.classList.add("categoryWrap");
    wrap2.id = `category${i}QuestionWrap`;
    wrap2.classList.add("categoryQuestionData");
    for (let j = 1; j < 7; j += 1) {
      wrap2.append(createQuestionAnswerValueDoubleInputs(j, i));
    }
    const wrap4 = document.createElement("div");
    wrap4.style.border = "1px solid black";
    wrap4.textContent = "+";

    wrap1.append(wrap2, wrap4);

    allCategories.append(wrap1);

    // remove old card and generate a new copy when + is clicked
    newCategory.remove();
    appendNewCategory();

    reNumberCategories();
  });

  allCategories.append(newCategory);
}

function renderCategoryInputs(categoryCount) {
  const allCategories = document.getElementById("allCategories");

  allCategories.innerHTML = "";

  for (let i = 1; i < categoryCount + 1; i += 1) {
    const wrap1 = document.createElement("div");
    const wrap2 = document.createElement("div");

    const closeCategory = document.createElement("p");
    closeCategory.textContent = "X";
    closeCategory.classList.add("closeCategory");
    closeCategory.addEventListener("click", () => {
      console.log("x");
      wrap1.remove();
    });

    wrap1.append(
      closeCategory,
      createLabelAndInput(
        "categoryInput",
        `category${i}Topic`,
        "text",
        `Category ${i}`,
        _questions_questionsTemplate_json__WEBPACK_IMPORTED_MODULE_1__[`category${i}`].topic,
      ),
    );
    wrap1.id = `category${i}Wrap`;
    wrap1.classList.add("categoryWrap");
    wrap2.id = `category${i}QuestionWrap`;
    wrap2.classList.add("categoryQuestionData");
    for (let j = 1; j < 7; j += 1) {
      wrap2.append(createQuestionAnswerValueDoubleInputs(j, i));
    }
    const wrap4 = document.createElement("div");
    wrap4.style.border = "1px solid black";
    wrap4.textContent = "+";

    wrap1.append(wrap2, wrap4);

    allCategories.append(wrap1);
  }
  // append one card at the end for adding new categories

  appendNewCategory();
}

function render2() {
  const allCategories = document.getElementById("allCategories");

  allCategories.innerHTML = "";

  const categoryCount = Object.keys(_questions_questionsTemplate_json__WEBPACK_IMPORTED_MODULE_1__).length;

  for (let i = 1; i < categoryCount + 1; i += 1) {
    const wrap1 = document.createElement("div");
    const wrap2 = document.createElement("div");

    const closeCategory = document.createElement("p");
    closeCategory.textContent = "X";
    closeCategory.classList.add("closeCategory");
    closeCategory.addEventListener("click", () => {
      console.log("x");
      wrap1.remove();
    });

    wrap1.append(
      closeCategory,
      createLabelAndInput(
        "categoryInput",
        "test",
        "text",
        `Category ${i}`,
        _questions_questionsTemplate_json__WEBPACK_IMPORTED_MODULE_1__[`category${i}`].topic,
      ),
    );
    wrap1.id = `category${i}Wrap`;
    wrap1.classList.add("categoryWrap");
    wrap2.id = `category${i}QuestionWrap`;
    wrap2.classList.add("categoryQuestionData");
    for (let j = 1; j < 7; j += 1) {
      wrap2.append(createQuestionAnswerValueDoubleInputs(j, i));
    }
    const wrap4 = document.createElement("div");
    wrap4.style.border = "1px solid black";
    wrap4.textContent = "+";

    wrap1.append(wrap2, wrap4);

    allCategories.append(wrap1);
  }
}

function imageToBase64(imageFile) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(imageFile);
  });
}

function downloadJSON(objectToDownload, filename) {
  // Convert the object to a JSON string
  const jsonString = JSON.stringify(objectToDownload, null, 2);

  const blob = new Blob([jsonString], { type: "application/json" });
  const link = document.createElement("a");

  // Create a URL for the Blob and set it as the href attribute of the link
  link.href = URL.createObjectURL(blob);

  // Set the download attribute with the desired file name
  link.download = filename;

  // Append the link to the body (this is necessary for Firefox)
  document.body.appendChild(link);

  // click link then remove it from document.
  link.click();
  document.body.removeChild(link);
}

const categoryNumberInput = document.getElementById("categoryNumberInput");

categoryNumberInput.addEventListener("change", () => {
  renderCategoryInputs(categoryNumberInput.value);
});

const categoryCount = Object.keys(_questions_questionsTemplate_json__WEBPACK_IMPORTED_MODULE_1__).length;

renderCategoryInputs(categoryCount);
// console.log(questionsTemplate.category1.topic);

const downloadButton = document.getElementById("downloadQuestionDataButton");

downloadButton.addEventListener("click", () => {
  downloadJSON(_questions_questionsTemplate_json__WEBPACK_IMPORTED_MODULE_1__, "testquestions.json");
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JEO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsRUFBRTtBQUN0QixRQUFRLDhEQUFpQixZQUFZLEVBQUU7QUFDdkM7QUFDQTtBQUNBLDBCQUEwQixFQUFFO0FBQzVCO0FBQ0EsMEJBQTBCLEVBQUU7QUFDNUI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QywwQkFBMEI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGtDQUFrQyw4REFBaUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhEQUFpQjtBQUNoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvcXVlc3Rpb25CdWlsZGVyU3R5bGUuY3NzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL3F1ZXN0aW9uQnVpbGRlclN0eWxlLmNzcz9iNzFiIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvcXVlc3Rpb25CdWlsZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBjb2xvcnMgKi9cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG4uY2F0ZWdvcnlXcmFwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG59XHJcblxyXG4uY2F0ZWdvcnlJbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xyXG59XHJcbi5jYXRlZ29yeVF1ZXN0aW9uRGF0YSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxufVxyXG5cclxuLlFBVldyYXAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xyXG59XHJcbi8qICAqL1xyXG5cclxuLyogY2F0ZWdvcmllcyAqL1xyXG4jYWxsQ2F0ZWdvcmllcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNjBweCwgMWZyKSk7XHJcbiAgZ3JpZC1nYXA6IDEwMHB4O1xyXG59XHJcbi5jYXRlZ29yeVdyYXAsXHJcbiNuZXdDYXRlZ29yeUJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAyNjBweDtcclxufVxyXG5cclxuLmNsb3NlQ2F0ZWdvcnkge1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLyogICovXHJcblxyXG4vKiBxdWVzdGlvbnMgKi9cclxuLmNhdGVnb3J5UXVlc3Rpb25EYXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcbi5RQVZXcmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA1cHg7XHJcbn1cclxuLyogICovXHJcblxyXG4jbmV3Q2F0ZWdvcnlCdXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3F1ZXN0aW9uQnVpbGRlclN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFXO0FBQ1g7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0EsS0FBSzs7QUFFTCxlQUFlO0FBQ2Y7RUFDRSxhQUFhO0VBQ2IsNERBQTREO0VBQzVELGVBQWU7QUFDakI7QUFDQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0EsS0FBSzs7QUFFTCxjQUFjO0FBQ2Q7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7QUFDQSxLQUFLOztBQUVMO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGNvbG9ycyAqL1xcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuLmNhdGVnb3J5V3JhcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlJbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxyXFxufVxcclxcbi5jYXRlZ29yeVF1ZXN0aW9uRGF0YSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcclxcbn1cXHJcXG5cXHJcXG4uUUFWV3JhcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcXHJcXG59XFxyXFxuLyogICovXFxyXFxuXFxyXFxuLyogY2F0ZWdvcmllcyAqL1xcclxcbiNhbGxDYXRlZ29yaWVzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNjBweCwgMWZyKSk7XFxyXFxuICBncmlkLWdhcDogMTAwcHg7XFxyXFxufVxcclxcbi5jYXRlZ29yeVdyYXAsXFxyXFxuI25ld0NhdGVnb3J5QnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHdpZHRoOiAyNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQ2F0ZWdvcnkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi8qICAqL1xcclxcblxcclxcbi8qIHF1ZXN0aW9ucyAqL1xcclxcbi5jYXRlZ29yeVF1ZXN0aW9uRGF0YSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuLlFBVldyYXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuLyogICovXFxyXFxuXFxyXFxuI25ld0NhdGVnb3J5QnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcXVlc3Rpb25CdWlsZGVyU3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9xdWVzdGlvbkJ1aWxkZXJTdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vcXVlc3Rpb25CdWlsZGVyU3R5bGUuY3NzXCI7XHJcbmltcG9ydCBxdWVzdGlvbnNUZW1wbGF0ZSBmcm9tIFwiLi9xdWVzdGlvbnMvcXVlc3Rpb25zVGVtcGxhdGUuanNvblwiO1xyXG5cclxuLy8gVE9ET1xyXG4vLyBjaGFuZ2UgaW5uZXJIVE1MIHRvIHNvbWV0aGluZyBsZXNzIGRlc3RydWN0aXZlLCBwcm9iYWJseVxyXG4vLy8gLyBvciB3cml0ZSBleGlzdGluZyBpbnB1dHMgdG8gYW4gb2JqZWN0XHJcbi8vIGdpdmUgZGVmYXVsdCB2YWx1ZXMgYmFzZWQgb24gJ25vcm1hbCcgZGlzdHJpYnV0aW9uXHJcbi8vIHByb2JhYmx5IHN3YXAgdG8gdGV4dCBhcmVhXHJcbi8vIGNoYW5nZSBjYXRlZ29yeSBudW1iZXIgdG8gYSArIGNhcmQgYXQgdGhlIGVuZCBhbmQgWCBidXR0b25zIGluIGVhY2ggY2F0ZWdvcnlcclxuLy8gYWRkIGRvdWJsZSB0byBpbnB1dHNcclxuLy8gbWFrZSBzdXJlICsgY2FyZCByZWdlbmVyYXRlcyBpZiBjbGlja2VkXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMYWJlbEFuZElucHV0KFxyXG4gIGNsYXNzTmFtZSxcclxuICBpbnB1dElELFxyXG4gIHR5cGUsXHJcbiAgbGFiZWxUZXh0LFxyXG4gIHBsYWNlaG9sZGVyVGV4dCxcclxuKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuXHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICBpbnB1dC5pZCA9IGlucHV0SUQ7XHJcbiAgaW5wdXQudHlwZSA9IHR5cGU7XHJcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclRleHQ7XHJcbiAgbGFiZWwuaHRtbEZvciA9IGlucHV0SUQ7XHJcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcbiAgZGl2LmFwcGVuZChsYWJlbCwgaW5wdXQpO1xyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsQW5kVGV4dGFyZWEoXHJcbiAgY2xhc3NOYW1lLFxyXG4gIGlucHV0SUQsXHJcbiAgbGFiZWxUZXh0LFxyXG4gIHBsYWNlaG9sZGVyVGV4dCxcclxuKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuXHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICB0ZXh0YXJlYS5pZCA9IGlucHV0SUQ7XHJcbiAgdGV4dGFyZWEucm93cyA9IDE7XHJcbiAgdGV4dGFyZWEuY29scyA9IDIwO1xyXG4gIHRleHRhcmVhLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJUZXh0O1xyXG5cclxuICBsYWJlbC5odG1sRm9yID0gaW5wdXRJRDtcclxuICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuICBkaXYuYXBwZW5kKGxhYmVsLCB0ZXh0YXJlYSk7XHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUXVlc3Rpb25BbnN3ZXJWYWx1ZURvdWJsZUlucHV0cyhxdWVzdGlvbiwgY2F0ZWdvcnkpIHtcclxuICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3cmFwLmlkID0gYHF1ZXN0aW9uJHtxdWVzdGlvbn1XcmFwYDtcclxuICB3cmFwLmNsYXNzTGlzdC5hZGQoXCJRQVZXcmFwXCIpO1xyXG5cclxuICAvLyBhZGQgbGFiZWxcclxuICBjb25zdCBzZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICBzZWxlY3RFbGVtZW50LmlkID0gYHNlbGVjdFF1ZXN0aW9uJHtxdWVzdGlvbn1UeXBlYDtcclxuICBzZWxlY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RRdWVzdGlvblR5cGVcIik7XHJcbiAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IFtcclxuICAgIHsgdmFsdWU6IFwidGV4dFwiLCB0ZXh0OiBcInRleHRcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJpbWFnZVwiLCB0ZXh0OiBcImltYWdlXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiYXVkaW9cIiwgdGV4dDogXCJhdWRpb1wiIH0sXHJcbiAgXTtcclxuICBzZWxlY3RPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uLnZhbHVlO1xyXG4gICAgb3B0aW9uRWxlbWVudC50ZXh0ID0gb3B0aW9uLnRleHQ7XHJcbiAgICBzZWxlY3RFbGVtZW50LmFwcGVuZChvcHRpb25FbGVtZW50KTtcclxuICB9KTtcclxuICB3cmFwLmFwcGVuZChzZWxlY3RFbGVtZW50KTtcclxuXHJcbiAgbGV0IHF1ZXN0aW9uRGF0YTtcclxuICBpZiAoIXF1ZXN0aW9uc1RlbXBsYXRlW2BjYXRlZ29yeSR7Y2F0ZWdvcnl9YF0pIHtcclxuICAgIGNvbnNvbGUubG9nKFwibm8gdGVtcGxhdGVcIik7XHJcbiAgICBxdWVzdGlvbkRhdGEgPSB7XHJcbiAgICAgIHF1ZXN0aW9uOiBgUXVlc3Rpb24gJHtxdWVzdGlvbn1gLFxyXG4gICAgICBhbnN3ZXI6IGBBbnN3ZXIgJHtxdWVzdGlvbn1gLFxyXG4gICAgICB2YWx1ZTogYCR7cXVlc3Rpb24gKiAxMDB9YCxcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIHF1ZXN0aW9uRGF0YSA9XHJcbiAgICAgIHF1ZXN0aW9uc1RlbXBsYXRlW2BjYXRlZ29yeSR7Y2F0ZWdvcnl9YF1bYHF1ZXN0aW9uJHtxdWVzdGlvbn1gXTtcclxuICB9XHJcbiAgd3JhcC5hcHBlbmQoXHJcbiAgICBjcmVhdGVMYWJlbEFuZFRleHRhcmVhKFxyXG4gICAgICBcInF1ZXN0aW9uSW5wdXRcIixcclxuICAgICAgYGNhdGVnb3J5JHtjYXRlZ29yeX1RdWVzdGlvbmAsXHJcbiAgICAgIGBRdWVzdGlvbiAke3F1ZXN0aW9ufWAsXHJcbiAgICAgIHF1ZXN0aW9uRGF0YS5xdWVzdGlvbixcclxuICAgICksXHJcbiAgKTtcclxuICB3cmFwLmFwcGVuZChcclxuICAgIGNyZWF0ZUxhYmVsQW5kVGV4dGFyZWEoXHJcbiAgICAgIFwiYW5zd2VySW5wdXRcIixcclxuICAgICAgYGNhdGVnb3J5JHtjYXRlZ29yeX1BbnN3ZXJgLFxyXG4gICAgICBgQW5zd2VyICR7cXVlc3Rpb259YCxcclxuICAgICAgcXVlc3Rpb25EYXRhLmFuc3dlcixcclxuICAgICksXHJcbiAgKTtcclxuICB3cmFwLmFwcGVuZChcclxuICAgIGNyZWF0ZUxhYmVsQW5kSW5wdXQoXHJcbiAgICAgIFwidmFsdWVJbnB1dFwiLFxyXG4gICAgICBgY2F0ZWdvcnkke2NhdGVnb3J5fVZhbHVlYCxcclxuICAgICAgXCJudW1iZXJcIixcclxuICAgICAgYFZhbHVlYCxcclxuICAgICAgcXVlc3Rpb25EYXRhLnZhbHVlLFxyXG4gICAgKSxcclxuICApO1xyXG4gIHdyYXAuYXBwZW5kKFxyXG4gICAgY3JlYXRlTGFiZWxBbmRJbnB1dChcclxuICAgICAgXCJkb3VibGVDaGVja2JveFwiLFxyXG4gICAgICBgY2F0ZWdvcnkke2NhdGVnb3J5fUNoZWNrYm94YCxcclxuICAgICAgXCJjaGVja2JveFwiLFxyXG4gICAgICBcIkRpbW1hZG9tZSBEb3VibGU6XCIsXHJcbiAgICApLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiB3cmFwO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZU51bWJlckNhdGVnb3JpZXMoKSB7XHJcbiAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiI2FsbENhdGVnb3JpZXMgLmNhdGVnb3J5SW5wdXRcIixcclxuICApO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8IGNhdGVnb3J5TGlzdC5sZW5ndGggKyAxOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGxhYmVsID0gY2F0ZWdvcnlMaXN0W2kgLSAxXS5jaGlsZHJlblswXTtcclxuICAgIGxhYmVsLmh0bWxGb3IgPSBgY2F0ZWdvcnkke2l9VG9waWNgO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc29sZS5sb2coY2F0ZWdvcnlMaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVOZXdDYXRlZ29yeUJ1dHRvbigpIHtcclxuICBjb25zdCBuZXdDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmV3Q2F0ZWdvcnkuaWQgPSBcIm5ld0NhdGVnb3J5QnV0dG9uXCI7XHJcbiAgY29uc3QgcGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBsdXMudGV4dENvbnRlbnQgPSBcIitcIjtcclxuICBuZXdDYXRlZ29yeS5hcHBlbmQocGx1cyk7XHJcblxyXG4gIHJldHVybiBuZXdDYXRlZ29yeTtcclxufVxyXG5mdW5jdGlvbiBhcHBlbmROZXdDYXRlZ29yeSgpIHtcclxuICBjb25zdCBhbGxDYXRlZ29yaWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGxDYXRlZ29yaWVzXCIpO1xyXG5cclxuICBjb25zdCBuZXdDYXRlZ29yeSA9IGdlbmVyYXRlTmV3Q2F0ZWdvcnlCdXR0b24oKTtcclxuXHJcbiAgY29uc3QgaSA9IGFsbENhdGVnb3JpZXMuY2hpbGRyZW4ubGVuZ3RoICsgMTtcclxuXHJcbiAgbmV3Q2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IHdyYXAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHdyYXAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZUNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjbG9zZUNhdGVnb3J5LnRleHRDb250ZW50ID0gXCJYXCI7XHJcbiAgICBjbG9zZUNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJjbG9zZUNhdGVnb3J5XCIpO1xyXG4gICAgY2xvc2VDYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInhcIik7XHJcbiAgICAgIHdyYXAxLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd3JhcDEuYXBwZW5kKFxyXG4gICAgICBjbG9zZUNhdGVnb3J5LFxyXG4gICAgICBjcmVhdGVMYWJlbEFuZElucHV0KFxyXG4gICAgICAgIFwiY2F0ZWdvcnlJbnB1dFwiLFxyXG4gICAgICAgIGBjYXRlZ29yeSR7aX1Ub3BpY2AsXHJcbiAgICAgICAgXCJ0ZXh0XCIsXHJcbiAgICAgICAgYENhdGVnb3J5ICR7aX1gLFxyXG4gICAgICAgIFwidGVzdCBuZXcgdG9waWNcIixcclxuICAgICAgICAvLyBxdWVzdGlvbnNUZW1wbGF0ZVtgY2F0ZWdvcnkke2l9YF0udG9waWMsXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gICAgd3JhcDEuaWQgPSBgY2F0ZWdvcnkke2l9V3JhcGA7XHJcbiAgICB3cmFwMS5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlXcmFwXCIpO1xyXG4gICAgd3JhcDIuaWQgPSBgY2F0ZWdvcnkke2l9UXVlc3Rpb25XcmFwYDtcclxuICAgIHdyYXAyLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeVF1ZXN0aW9uRGF0YVwiKTtcclxuICAgIGZvciAobGV0IGogPSAxOyBqIDwgNzsgaiArPSAxKSB7XHJcbiAgICAgIHdyYXAyLmFwcGVuZChjcmVhdGVRdWVzdGlvbkFuc3dlclZhbHVlRG91YmxlSW5wdXRzKGosIGkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHdyYXA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdyYXA0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XHJcbiAgICB3cmFwNC50ZXh0Q29udGVudCA9IFwiK1wiO1xyXG5cclxuICAgIHdyYXAxLmFwcGVuZCh3cmFwMiwgd3JhcDQpO1xyXG5cclxuICAgIGFsbENhdGVnb3JpZXMuYXBwZW5kKHdyYXAxKTtcclxuXHJcbiAgICAvLyByZW1vdmUgb2xkIGNhcmQgYW5kIGdlbmVyYXRlIGEgbmV3IGNvcHkgd2hlbiArIGlzIGNsaWNrZWRcclxuICAgIG5ld0NhdGVnb3J5LnJlbW92ZSgpO1xyXG4gICAgYXBwZW5kTmV3Q2F0ZWdvcnkoKTtcclxuXHJcbiAgICByZU51bWJlckNhdGVnb3JpZXMoKTtcclxuICB9KTtcclxuXHJcbiAgYWxsQ2F0ZWdvcmllcy5hcHBlbmQobmV3Q2F0ZWdvcnkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDYXRlZ29yeUlucHV0cyhjYXRlZ29yeUNvdW50KSB7XHJcbiAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsQ2F0ZWdvcmllc1wiKTtcclxuXHJcbiAgYWxsQ2F0ZWdvcmllcy5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8IGNhdGVnb3J5Q291bnQgKyAxOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHdyYXAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHdyYXAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZUNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjbG9zZUNhdGVnb3J5LnRleHRDb250ZW50ID0gXCJYXCI7XHJcbiAgICBjbG9zZUNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJjbG9zZUNhdGVnb3J5XCIpO1xyXG4gICAgY2xvc2VDYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInhcIik7XHJcbiAgICAgIHdyYXAxLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd3JhcDEuYXBwZW5kKFxyXG4gICAgICBjbG9zZUNhdGVnb3J5LFxyXG4gICAgICBjcmVhdGVMYWJlbEFuZElucHV0KFxyXG4gICAgICAgIFwiY2F0ZWdvcnlJbnB1dFwiLFxyXG4gICAgICAgIGBjYXRlZ29yeSR7aX1Ub3BpY2AsXHJcbiAgICAgICAgXCJ0ZXh0XCIsXHJcbiAgICAgICAgYENhdGVnb3J5ICR7aX1gLFxyXG4gICAgICAgIHF1ZXN0aW9uc1RlbXBsYXRlW2BjYXRlZ29yeSR7aX1gXS50b3BpYyxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgICB3cmFwMS5pZCA9IGBjYXRlZ29yeSR7aX1XcmFwYDtcclxuICAgIHdyYXAxLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeVdyYXBcIik7XHJcbiAgICB3cmFwMi5pZCA9IGBjYXRlZ29yeSR7aX1RdWVzdGlvbldyYXBgO1xyXG4gICAgd3JhcDIuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5UXVlc3Rpb25EYXRhXCIpO1xyXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPCA3OyBqICs9IDEpIHtcclxuICAgICAgd3JhcDIuYXBwZW5kKGNyZWF0ZVF1ZXN0aW9uQW5zd2VyVmFsdWVEb3VibGVJbnB1dHMoaiwgaSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd3JhcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgd3JhcDQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIjtcclxuICAgIHdyYXA0LnRleHRDb250ZW50ID0gXCIrXCI7XHJcblxyXG4gICAgd3JhcDEuYXBwZW5kKHdyYXAyLCB3cmFwNCk7XHJcblxyXG4gICAgYWxsQ2F0ZWdvcmllcy5hcHBlbmQod3JhcDEpO1xyXG4gIH1cclxuICAvLyBhcHBlbmQgb25lIGNhcmQgYXQgdGhlIGVuZCBmb3IgYWRkaW5nIG5ldyBjYXRlZ29yaWVzXHJcblxyXG4gIGFwcGVuZE5ld0NhdGVnb3J5KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlcjIoKSB7XHJcbiAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsQ2F0ZWdvcmllc1wiKTtcclxuXHJcbiAgYWxsQ2F0ZWdvcmllcy5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBjb25zdCBjYXRlZ29yeUNvdW50ID0gT2JqZWN0LmtleXMocXVlc3Rpb25zVGVtcGxhdGUpLmxlbmd0aDtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBjYXRlZ29yeUNvdW50ICsgMTsgaSArPSAxKSB7XHJcbiAgICBjb25zdCB3cmFwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB3cmFwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY29uc3QgY2xvc2VDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY2xvc2VDYXRlZ29yeS50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG4gICAgY2xvc2VDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiY2xvc2VDYXRlZ29yeVwiKTtcclxuICAgIGNsb3NlQ2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJ4XCIpO1xyXG4gICAgICB3cmFwMS5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdyYXAxLmFwcGVuZChcclxuICAgICAgY2xvc2VDYXRlZ29yeSxcclxuICAgICAgY3JlYXRlTGFiZWxBbmRJbnB1dChcclxuICAgICAgICBcImNhdGVnb3J5SW5wdXRcIixcclxuICAgICAgICBcInRlc3RcIixcclxuICAgICAgICBcInRleHRcIixcclxuICAgICAgICBgQ2F0ZWdvcnkgJHtpfWAsXHJcbiAgICAgICAgcXVlc3Rpb25zVGVtcGxhdGVbYGNhdGVnb3J5JHtpfWBdLnRvcGljLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICAgIHdyYXAxLmlkID0gYGNhdGVnb3J5JHtpfVdyYXBgO1xyXG4gICAgd3JhcDEuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5V3JhcFwiKTtcclxuICAgIHdyYXAyLmlkID0gYGNhdGVnb3J5JHtpfVF1ZXN0aW9uV3JhcGA7XHJcbiAgICB3cmFwMi5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlRdWVzdGlvbkRhdGFcIik7XHJcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8IDc7IGogKz0gMSkge1xyXG4gICAgICB3cmFwMi5hcHBlbmQoY3JlYXRlUXVlc3Rpb25BbnN3ZXJWYWx1ZURvdWJsZUlucHV0cyhqLCBpKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB3cmFwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB3cmFwNC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBibGFja1wiO1xyXG4gICAgd3JhcDQudGV4dENvbnRlbnQgPSBcIitcIjtcclxuXHJcbiAgICB3cmFwMS5hcHBlbmQod3JhcDIsIHdyYXA0KTtcclxuXHJcbiAgICBhbGxDYXRlZ29yaWVzLmFwcGVuZCh3cmFwMSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbWFnZVRvQmFzZTY0KGltYWdlRmlsZSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgIH07XHJcbiAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltYWdlRmlsZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvd25sb2FkSlNPTihvYmplY3RUb0Rvd25sb2FkLCBmaWxlbmFtZSkge1xyXG4gIC8vIENvbnZlcnQgdGhlIG9iamVjdCB0byBhIEpTT04gc3RyaW5nXHJcbiAgY29uc3QganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KG9iamVjdFRvRG93bmxvYWQsIG51bGwsIDIpO1xyXG5cclxuICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2pzb25TdHJpbmddLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiIH0pO1xyXG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgVVJMIGZvciB0aGUgQmxvYiBhbmQgc2V0IGl0IGFzIHRoZSBocmVmIGF0dHJpYnV0ZSBvZiB0aGUgbGlua1xyXG4gIGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG4gIC8vIFNldCB0aGUgZG93bmxvYWQgYXR0cmlidXRlIHdpdGggdGhlIGRlc2lyZWQgZmlsZSBuYW1lXHJcbiAgbGluay5kb3dubG9hZCA9IGZpbGVuYW1lO1xyXG5cclxuICAvLyBBcHBlbmQgdGhlIGxpbmsgdG8gdGhlIGJvZHkgKHRoaXMgaXMgbmVjZXNzYXJ5IGZvciBGaXJlZm94KVxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcblxyXG4gIC8vIGNsaWNrIGxpbmsgdGhlbiByZW1vdmUgaXQgZnJvbSBkb2N1bWVudC5cclxuICBsaW5rLmNsaWNrKCk7XHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxufVxyXG5cclxuY29uc3QgY2F0ZWdvcnlOdW1iZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0ZWdvcnlOdW1iZXJJbnB1dFwiKTtcclxuXHJcbmNhdGVnb3J5TnVtYmVySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgcmVuZGVyQ2F0ZWdvcnlJbnB1dHMoY2F0ZWdvcnlOdW1iZXJJbnB1dC52YWx1ZSk7XHJcbn0pO1xyXG5cclxuY29uc3QgY2F0ZWdvcnlDb3VudCA9IE9iamVjdC5rZXlzKHF1ZXN0aW9uc1RlbXBsYXRlKS5sZW5ndGg7XHJcblxyXG5yZW5kZXJDYXRlZ29yeUlucHV0cyhjYXRlZ29yeUNvdW50KTtcclxuLy8gY29uc29sZS5sb2cocXVlc3Rpb25zVGVtcGxhdGUuY2F0ZWdvcnkxLnRvcGljKTtcclxuXHJcbmNvbnN0IGRvd25sb2FkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3dubG9hZFF1ZXN0aW9uRGF0YUJ1dHRvblwiKTtcclxuXHJcbmRvd25sb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZG93bmxvYWRKU09OKHF1ZXN0aW9uc1RlbXBsYXRlLCBcInRlc3RxdWVzdGlvbnMuanNvblwiKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==