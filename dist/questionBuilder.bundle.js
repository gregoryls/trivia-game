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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixFQUFFO0FBQ3RCLFFBQVEsOERBQWlCLFlBQVksRUFBRTtBQUN2QztBQUNBO0FBQ0EsMEJBQTBCLEVBQUU7QUFDNUI7QUFDQSwwQkFBMEIsRUFBRTtBQUM1QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDBCQUEwQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esa0NBQWtDLDhEQUFpQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOERBQWlCO0FBQ2hDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9xdWVzdGlvbkJ1aWxkZXJTdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvcXVlc3Rpb25CdWlsZGVyU3R5bGUuY3NzP2I3MWIiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9xdWVzdGlvbkJ1aWxkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGNvbG9ycyAqL1xyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcbi5jYXRlZ29yeVdyYXAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbn1cclxuXHJcbi5jYXRlZ29yeUlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbn1cclxuLmNhdGVnb3J5UXVlc3Rpb25EYXRhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG59XHJcblxyXG4uUUFWV3JhcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XHJcbn1cclxuLyogICovXHJcblxyXG4vKiBjYXRlZ29yaWVzICovXHJcbiNhbGxDYXRlZ29yaWVzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI2MHB4LCAxZnIpKTtcclxuICBncmlkLWdhcDogMTAwcHg7XHJcbn1cclxuLmNhdGVnb3J5V3JhcCxcclxuI25ld0NhdGVnb3J5QnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG59XHJcblxyXG4uY2xvc2VDYXRlZ29yeSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4vKiAgKi9cclxuXHJcbi8qIHF1ZXN0aW9ucyAqL1xyXG4uY2F0ZWdvcnlRdWVzdGlvbkRhdGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuLlFBVldyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDVweDtcclxufVxyXG4vKiAgKi9cclxuXHJcbiNuZXdDYXRlZ29yeUJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcXVlc3Rpb25CdWlsZGVyU3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7QUFDWDtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQSxLQUFLOztBQUVMLGVBQWU7QUFDZjtFQUNFLGFBQWE7RUFDYiw0REFBNEQ7RUFDNUQsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQSxLQUFLOztBQUVMLGNBQWM7QUFDZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjtBQUNBLEtBQUs7O0FBRUw7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogY29sb3JzICovXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG4uY2F0ZWdvcnlXcmFwIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeUlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXHJcXG59XFxyXFxuLmNhdGVnb3J5UXVlc3Rpb25EYXRhIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxyXFxufVxcclxcblxcclxcbi5RQVZXcmFwIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xcclxcbn1cXHJcXG4vKiAgKi9cXHJcXG5cXHJcXG4vKiBjYXRlZ29yaWVzICovXFxyXFxuI2FsbENhdGVnb3JpZXMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI2MHB4LCAxZnIpKTtcXHJcXG4gIGdyaWQtZ2FwOiAxMDBweDtcXHJcXG59XFxyXFxuLmNhdGVnb3J5V3JhcCxcXHJcXG4jbmV3Q2F0ZWdvcnlCdXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgd2lkdGg6IDI2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VDYXRlZ29yeSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLyogICovXFxyXFxuXFxyXFxuLyogcXVlc3Rpb25zICovXFxyXFxuLmNhdGVnb3J5UXVlc3Rpb25EYXRhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4uUUFWV3JhcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG4vKiAgKi9cXHJcXG5cXHJcXG4jbmV3Q2F0ZWdvcnlCdXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9xdWVzdGlvbkJ1aWxkZXJTdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3F1ZXN0aW9uQnVpbGRlclN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9xdWVzdGlvbkJ1aWxkZXJTdHlsZS5jc3NcIjtcclxuaW1wb3J0IHF1ZXN0aW9uc1RlbXBsYXRlIGZyb20gXCIuL3F1ZXN0aW9ucy9xdWVzdGlvbnNUZW1wbGF0ZS5qc29uXCI7XHJcblxyXG4vLyBUT0RPXHJcbi8vIGNoYW5nZSBpbm5lckhUTUwgdG8gc29tZXRoaW5nIGxlc3MgZGVzdHJ1Y3RpdmUsIHByb2JhYmx5XHJcbi8vLyAvIG9yIHdyaXRlIGV4aXN0aW5nIGlucHV0cyB0byBhbiBvYmplY3RcclxuLy8gZ2l2ZSBkZWZhdWx0IHZhbHVlcyBiYXNlZCBvbiAnbm9ybWFsJyBkaXN0cmlidXRpb25cclxuLy8gcHJvYmFibHkgc3dhcCB0byB0ZXh0IGFyZWFcclxuLy8gY2hhbmdlIGNhdGVnb3J5IG51bWJlciB0byBhICsgY2FyZCBhdCB0aGUgZW5kIGFuZCBYIGJ1dHRvbnMgaW4gZWFjaCBjYXRlZ29yeVxyXG4vLyBhZGQgZG91YmxlIHRvIGlucHV0c1xyXG4vLyBtYWtlIHN1cmUgKyBjYXJkIHJlZ2VuZXJhdGVzIGlmIGNsaWNrZWRcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsQW5kSW5wdXQoXHJcbiAgY2xhc3NOYW1lLFxyXG4gIGlucHV0SUQsXHJcbiAgdHlwZSxcclxuICBsYWJlbFRleHQsXHJcbiAgcGxhY2Vob2xkZXJUZXh0LFxyXG4pIHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG5cclxuICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIGlucHV0LmlkID0gaW5wdXRJRDtcclxuICBpbnB1dC50eXBlID0gdHlwZTtcclxuICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyVGV4dDtcclxuICBsYWJlbC5odG1sRm9yID0gaW5wdXRJRDtcclxuICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuICBkaXYuYXBwZW5kKGxhYmVsLCBpbnB1dCk7XHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGFiZWxBbmRUZXh0YXJlYShcclxuICBjbGFzc05hbWUsXHJcbiAgaW5wdXRJRCxcclxuICBsYWJlbFRleHQsXHJcbiAgcGxhY2Vob2xkZXJUZXh0LFxyXG4pIHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG5cclxuICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIHRleHRhcmVhLmlkID0gaW5wdXRJRDtcclxuICB0ZXh0YXJlYS5yb3dzID0gMTtcclxuICB0ZXh0YXJlYS5jb2xzID0gMjA7XHJcbiAgdGV4dGFyZWEucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclRleHQ7XHJcblxyXG4gIGxhYmVsLmh0bWxGb3IgPSBpbnB1dElEO1xyXG4gIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG4gIGRpdi5hcHBlbmQobGFiZWwsIHRleHRhcmVhKTtcclxuICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVRdWVzdGlvbkFuc3dlclZhbHVlRG91YmxlSW5wdXRzKHF1ZXN0aW9uLCBjYXRlZ29yeSkge1xyXG4gIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHdyYXAuaWQgPSBgcXVlc3Rpb24ke3F1ZXN0aW9ufVdyYXBgO1xyXG4gIHdyYXAuY2xhc3NMaXN0LmFkZChcIlFBVldyYXBcIik7XHJcblxyXG4gIC8vIGFkZCBsYWJlbFxyXG4gIGNvbnN0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gIHNlbGVjdEVsZW1lbnQuaWQgPSBgc2VsZWN0UXVlc3Rpb24ke3F1ZXN0aW9ufVR5cGVgO1xyXG4gIHNlbGVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdFF1ZXN0aW9uVHlwZVwiKTtcclxuICBjb25zdCBzZWxlY3RPcHRpb25zID0gW1xyXG4gICAgeyB2YWx1ZTogXCJ0ZXh0XCIsIHRleHQ6IFwidGV4dFwiIH0sXHJcbiAgICB7IHZhbHVlOiBcImltYWdlXCIsIHRleHQ6IFwiaW1hZ2VcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJhdWRpb1wiLCB0ZXh0OiBcImF1ZGlvXCIgfSxcclxuICBdO1xyXG4gIHNlbGVjdE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb24udmFsdWU7XHJcbiAgICBvcHRpb25FbGVtZW50LnRleHQgPSBvcHRpb24udGV4dDtcclxuICAgIHNlbGVjdEVsZW1lbnQuYXBwZW5kKG9wdGlvbkVsZW1lbnQpO1xyXG4gIH0pO1xyXG4gIHdyYXAuYXBwZW5kKHNlbGVjdEVsZW1lbnQpO1xyXG5cclxuICBsZXQgcXVlc3Rpb25EYXRhO1xyXG4gIGlmICghcXVlc3Rpb25zVGVtcGxhdGVbYGNhdGVnb3J5JHtjYXRlZ29yeX1gXSkge1xyXG4gICAgY29uc29sZS5sb2coXCJubyB0ZW1wbGF0ZVwiKTtcclxuICAgIHF1ZXN0aW9uRGF0YSA9IHtcclxuICAgICAgcXVlc3Rpb246IGBRdWVzdGlvbiAke3F1ZXN0aW9ufWAsXHJcbiAgICAgIGFuc3dlcjogYEFuc3dlciAke3F1ZXN0aW9ufWAsXHJcbiAgICAgIHZhbHVlOiBgJHtxdWVzdGlvbiAqIDEwMH1gLFxyXG4gICAgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgcXVlc3Rpb25EYXRhID1cclxuICAgICAgcXVlc3Rpb25zVGVtcGxhdGVbYGNhdGVnb3J5JHtjYXRlZ29yeX1gXVtgcXVlc3Rpb24ke3F1ZXN0aW9ufWBdO1xyXG4gIH1cclxuICB3cmFwLmFwcGVuZChcclxuICAgIGNyZWF0ZUxhYmVsQW5kVGV4dGFyZWEoXHJcbiAgICAgIFwicXVlc3Rpb25JbnB1dFwiLFxyXG4gICAgICBgY2F0ZWdvcnkke2NhdGVnb3J5fVF1ZXN0aW9uYCxcclxuICAgICAgYFF1ZXN0aW9uICR7cXVlc3Rpb259YCxcclxuICAgICAgcXVlc3Rpb25EYXRhLnF1ZXN0aW9uLFxyXG4gICAgKSxcclxuICApO1xyXG4gIHdyYXAuYXBwZW5kKFxyXG4gICAgY3JlYXRlTGFiZWxBbmRUZXh0YXJlYShcclxuICAgICAgXCJhbnN3ZXJJbnB1dFwiLFxyXG4gICAgICBgY2F0ZWdvcnkke2NhdGVnb3J5fUFuc3dlcmAsXHJcbiAgICAgIGBBbnN3ZXIgJHtxdWVzdGlvbn1gLFxyXG4gICAgICBxdWVzdGlvbkRhdGEuYW5zd2VyLFxyXG4gICAgKSxcclxuICApO1xyXG4gIHdyYXAuYXBwZW5kKFxyXG4gICAgY3JlYXRlTGFiZWxBbmRJbnB1dChcclxuICAgICAgXCJ2YWx1ZUlucHV0XCIsXHJcbiAgICAgIGBjYXRlZ29yeSR7Y2F0ZWdvcnl9VmFsdWVgLFxyXG4gICAgICBcIm51bWJlclwiLFxyXG4gICAgICBgVmFsdWVgLFxyXG4gICAgICBxdWVzdGlvbkRhdGEudmFsdWUsXHJcbiAgICApLFxyXG4gICk7XHJcbiAgd3JhcC5hcHBlbmQoXHJcbiAgICBjcmVhdGVMYWJlbEFuZElucHV0KFxyXG4gICAgICBcImRvdWJsZUNoZWNrYm94XCIsXHJcbiAgICAgIGBjYXRlZ29yeSR7Y2F0ZWdvcnl9Q2hlY2tib3hgLFxyXG4gICAgICBcImNoZWNrYm94XCIsXHJcbiAgICAgIFwiRGltbWFkb21lIERvdWJsZTpcIixcclxuICAgICksXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHdyYXA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlTmV3Q2F0ZWdvcnlCdXR0b24oKSB7XHJcbiAgY29uc3QgbmV3Q2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5ld0NhdGVnb3J5LmlkID0gXCJuZXdDYXRlZ29yeUJ1dHRvblwiO1xyXG4gIGNvbnN0IHBsdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwbHVzLnRleHRDb250ZW50ID0gXCIrXCI7XHJcbiAgbmV3Q2F0ZWdvcnkuYXBwZW5kKHBsdXMpO1xyXG5cclxuICByZXR1cm4gbmV3Q2F0ZWdvcnk7XHJcbn1cclxuZnVuY3Rpb24gYXBwZW5kTmV3Q2F0ZWdvcnkoKSB7XHJcbiAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsQ2F0ZWdvcmllc1wiKTtcclxuXHJcbiAgY29uc3QgbmV3Q2F0ZWdvcnkgPSBnZW5lcmF0ZU5ld0NhdGVnb3J5QnV0dG9uKCk7XHJcblxyXG4gIGNvbnN0IGkgPSBhbGxDYXRlZ29yaWVzLmNoaWxkcmVuLmxlbmd0aCArIDE7XHJcblxyXG4gIG5ld0NhdGVnb3J5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCB3cmFwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB3cmFwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY29uc3QgY2xvc2VDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY2xvc2VDYXRlZ29yeS50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG4gICAgY2xvc2VDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiY2xvc2VDYXRlZ29yeVwiKTtcclxuICAgIGNsb3NlQ2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJ4XCIpO1xyXG4gICAgICB3cmFwMS5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdyYXAxLmFwcGVuZChcclxuICAgICAgY2xvc2VDYXRlZ29yeSxcclxuICAgICAgY3JlYXRlTGFiZWxBbmRJbnB1dChcclxuICAgICAgICBcImNhdGVnb3J5SW5wdXRcIixcclxuICAgICAgICBgY2F0ZWdvcnkke2l9VG9waWNgLFxyXG4gICAgICAgIFwidGV4dFwiLFxyXG4gICAgICAgIGBDYXRlZ29yeSAke2l9YCxcclxuICAgICAgICBcInRlc3QgbmV3IHRvcGljXCIsXHJcbiAgICAgICAgLy8gcXVlc3Rpb25zVGVtcGxhdGVbYGNhdGVnb3J5JHtpfWBdLnRvcGljLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICAgIHdyYXAxLmlkID0gYGNhdGVnb3J5JHtpfVdyYXBgO1xyXG4gICAgd3JhcDEuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5V3JhcFwiKTtcclxuICAgIHdyYXAyLmlkID0gYGNhdGVnb3J5JHtpfVF1ZXN0aW9uV3JhcGA7XHJcbiAgICB3cmFwMi5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlRdWVzdGlvbkRhdGFcIik7XHJcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8IDc7IGogKz0gMSkge1xyXG4gICAgICB3cmFwMi5hcHBlbmQoY3JlYXRlUXVlc3Rpb25BbnN3ZXJWYWx1ZURvdWJsZUlucHV0cyhqLCBpKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB3cmFwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB3cmFwNC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBibGFja1wiO1xyXG4gICAgd3JhcDQudGV4dENvbnRlbnQgPSBcIitcIjtcclxuXHJcbiAgICB3cmFwMS5hcHBlbmQod3JhcDIsIHdyYXA0KTtcclxuXHJcbiAgICBhbGxDYXRlZ29yaWVzLmFwcGVuZCh3cmFwMSk7XHJcblxyXG4gICAgLy8gcmVtb3ZlIG9sZCBjYXJkIGFuZCBnZW5lcmF0ZSBhIG5ldyBjb3B5IHdoZW4gKyBpcyBjbGlja2VkXHJcbiAgICBuZXdDYXRlZ29yeS5yZW1vdmUoKTtcclxuICAgIGFwcGVuZE5ld0NhdGVnb3J5KCk7XHJcbiAgfSk7XHJcblxyXG4gIGFsbENhdGVnb3JpZXMuYXBwZW5kKG5ld0NhdGVnb3J5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcnlJbnB1dHMoY2F0ZWdvcnlDb3VudCkge1xyXG4gIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbENhdGVnb3JpZXNcIik7XHJcblxyXG4gIGFsbENhdGVnb3JpZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBjYXRlZ29yeUNvdW50ICsgMTsgaSArPSAxKSB7XHJcbiAgICBjb25zdCB3cmFwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB3cmFwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY29uc3QgY2xvc2VDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY2xvc2VDYXRlZ29yeS50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG4gICAgY2xvc2VDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiY2xvc2VDYXRlZ29yeVwiKTtcclxuICAgIGNsb3NlQ2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJ4XCIpO1xyXG4gICAgICB3cmFwMS5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdyYXAxLmFwcGVuZChcclxuICAgICAgY2xvc2VDYXRlZ29yeSxcclxuICAgICAgY3JlYXRlTGFiZWxBbmRJbnB1dChcclxuICAgICAgICBcImNhdGVnb3J5SW5wdXRcIixcclxuICAgICAgICBgY2F0ZWdvcnkke2l9VG9waWNgLFxyXG4gICAgICAgIFwidGV4dFwiLFxyXG4gICAgICAgIGBDYXRlZ29yeSAke2l9YCxcclxuICAgICAgICBxdWVzdGlvbnNUZW1wbGF0ZVtgY2F0ZWdvcnkke2l9YF0udG9waWMsXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gICAgd3JhcDEuaWQgPSBgY2F0ZWdvcnkke2l9V3JhcGA7XHJcbiAgICB3cmFwMS5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlXcmFwXCIpO1xyXG4gICAgd3JhcDIuaWQgPSBgY2F0ZWdvcnkke2l9UXVlc3Rpb25XcmFwYDtcclxuICAgIHdyYXAyLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeVF1ZXN0aW9uRGF0YVwiKTtcclxuICAgIGZvciAobGV0IGogPSAxOyBqIDwgNzsgaiArPSAxKSB7XHJcbiAgICAgIHdyYXAyLmFwcGVuZChjcmVhdGVRdWVzdGlvbkFuc3dlclZhbHVlRG91YmxlSW5wdXRzKGosIGkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHdyYXA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdyYXA0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XHJcbiAgICB3cmFwNC50ZXh0Q29udGVudCA9IFwiK1wiO1xyXG5cclxuICAgIHdyYXAxLmFwcGVuZCh3cmFwMiwgd3JhcDQpO1xyXG5cclxuICAgIGFsbENhdGVnb3JpZXMuYXBwZW5kKHdyYXAxKTtcclxuICB9XHJcbiAgLy8gYXBwZW5kIG9uZSBjYXJkIGF0IHRoZSBlbmQgZm9yIGFkZGluZyBuZXcgY2F0ZWdvcmllc1xyXG5cclxuICBhcHBlbmROZXdDYXRlZ29yeSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXIyKCkge1xyXG4gIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbENhdGVnb3JpZXNcIik7XHJcblxyXG4gIGFsbENhdGVnb3JpZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgY29uc3QgY2F0ZWdvcnlDb3VudCA9IE9iamVjdC5rZXlzKHF1ZXN0aW9uc1RlbXBsYXRlKS5sZW5ndGg7XHJcblxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgY2F0ZWdvcnlDb3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgY29uc3Qgd3JhcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3Qgd3JhcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNsb3NlQ2F0ZWdvcnkudGV4dENvbnRlbnQgPSBcIlhcIjtcclxuICAgIGNsb3NlQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImNsb3NlQ2F0ZWdvcnlcIik7XHJcbiAgICBjbG9zZUNhdGVnb3J5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwieFwiKTtcclxuICAgICAgd3JhcDEucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3cmFwMS5hcHBlbmQoXHJcbiAgICAgIGNsb3NlQ2F0ZWdvcnksXHJcbiAgICAgIGNyZWF0ZUxhYmVsQW5kSW5wdXQoXHJcbiAgICAgICAgXCJjYXRlZ29yeUlucHV0XCIsXHJcbiAgICAgICAgXCJ0ZXN0XCIsXHJcbiAgICAgICAgXCJ0ZXh0XCIsXHJcbiAgICAgICAgYENhdGVnb3J5ICR7aX1gLFxyXG4gICAgICAgIHF1ZXN0aW9uc1RlbXBsYXRlW2BjYXRlZ29yeSR7aX1gXS50b3BpYyxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgICB3cmFwMS5pZCA9IGBjYXRlZ29yeSR7aX1XcmFwYDtcclxuICAgIHdyYXAxLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeVdyYXBcIik7XHJcbiAgICB3cmFwMi5pZCA9IGBjYXRlZ29yeSR7aX1RdWVzdGlvbldyYXBgO1xyXG4gICAgd3JhcDIuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5UXVlc3Rpb25EYXRhXCIpO1xyXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPCA3OyBqICs9IDEpIHtcclxuICAgICAgd3JhcDIuYXBwZW5kKGNyZWF0ZVF1ZXN0aW9uQW5zd2VyVmFsdWVEb3VibGVJbnB1dHMoaiwgaSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd3JhcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgd3JhcDQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIjtcclxuICAgIHdyYXA0LnRleHRDb250ZW50ID0gXCIrXCI7XHJcblxyXG4gICAgd3JhcDEuYXBwZW5kKHdyYXAyLCB3cmFwNCk7XHJcblxyXG4gICAgYWxsQ2F0ZWdvcmllcy5hcHBlbmQod3JhcDEpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW1hZ2VUb0Jhc2U2NChpbWFnZUZpbGUpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICB9O1xyXG4gICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbWFnZUZpbGUpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb3dubG9hZEpTT04ob2JqZWN0VG9Eb3dubG9hZCwgZmlsZW5hbWUpIHtcclxuICAvLyBDb252ZXJ0IHRoZSBvYmplY3QgdG8gYSBKU09OIHN0cmluZ1xyXG4gIGNvbnN0IGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShvYmplY3RUb0Rvd25sb2FkLCBudWxsLCAyKTtcclxuXHJcbiAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtqc29uU3RyaW5nXSwgeyB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9KTtcclxuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblxyXG4gIC8vIENyZWF0ZSBhIFVSTCBmb3IgdGhlIEJsb2IgYW5kIHNldCBpdCBhcyB0aGUgaHJlZiBhdHRyaWJ1dGUgb2YgdGhlIGxpbmtcclxuICBsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuICAvLyBTZXQgdGhlIGRvd25sb2FkIGF0dHJpYnV0ZSB3aXRoIHRoZSBkZXNpcmVkIGZpbGUgbmFtZVxyXG4gIGxpbmsuZG93bmxvYWQgPSBmaWxlbmFtZTtcclxuXHJcbiAgLy8gQXBwZW5kIHRoZSBsaW5rIHRvIHRoZSBib2R5ICh0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgRmlyZWZveClcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuICAvLyBjbGljayBsaW5rIHRoZW4gcmVtb3ZlIGl0IGZyb20gZG9jdW1lbnQuXHJcbiAgbGluay5jbGljaygpO1xyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbn1cclxuXHJcbmNvbnN0IGNhdGVnb3J5TnVtYmVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhdGVnb3J5TnVtYmVySW5wdXRcIik7XHJcblxyXG5jYXRlZ29yeU51bWJlcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gIHJlbmRlckNhdGVnb3J5SW5wdXRzKGNhdGVnb3J5TnVtYmVySW5wdXQudmFsdWUpO1xyXG59KTtcclxuXHJcbmNvbnN0IGNhdGVnb3J5Q291bnQgPSBPYmplY3Qua2V5cyhxdWVzdGlvbnNUZW1wbGF0ZSkubGVuZ3RoO1xyXG5cclxucmVuZGVyQ2F0ZWdvcnlJbnB1dHMoY2F0ZWdvcnlDb3VudCk7XHJcbi8vIGNvbnNvbGUubG9nKHF1ZXN0aW9uc1RlbXBsYXRlLmNhdGVnb3J5MS50b3BpYyk7XHJcblxyXG5jb25zdCBkb3dubG9hZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG93bmxvYWRRdWVzdGlvbkRhdGFCdXR0b25cIik7XHJcblxyXG5kb3dubG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGRvd25sb2FkSlNPTihxdWVzdGlvbnNUZW1wbGF0ZSwgXCJ0ZXN0cXVlc3Rpb25zLmpzb25cIik7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=