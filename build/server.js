/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./src/components/Header/index.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./src/components/Header/index.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"._1BLwWlMVEZXJ3op-h7VSxc{\\r\\n    color:red;\\r\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"user\": \"_1BLwWlMVEZXJ3op-h7VSxc\"\n};\n\n//# sourceURL=webpack:///./src/components/Header/index.css?./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./src/containers/App.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./src/containers/App.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"._3n8CzmHXQMKSnrldadT4RJ{\\r\\n    margin-top:70px;\\r\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"app\": \"_3n8CzmHXQMKSnrldadT4RJ\"\n};\n\n//# sourceURL=webpack:///./src/containers/App.css?./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/_isomorphic-style-loader@4.0.0@isomorphic-style-loader/lib/insertCss.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_isomorphic-style-loader@4.0.0@isomorphic-style-loader/lib/insertCss.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"babel-runtime/helpers/slicedToArray\");\n\nvar _slicedToArray3 = _interopRequireDefault(_slicedToArray2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Isomorphic CSS style loader for Webpack\n *\n * Copyright © 2015-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nvar prefix = 's';\nvar inserted = {};\n\n// Base64 encoding and decoding - The \"Unicode Problem\"\n// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode('0x' + p1);\n  }));\n}\n\n/**\n * Remove style/link elements for specified node IDs\n * if they are no longer referenced by UI components.\n */\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(prefix + id);\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\n/**\n * Example:\n *   // Insert CSS styles object generated by `css-loader` into DOM\n *   var removeCss = insertCss([[1, 'body { color: red; }']]);\n *\n *   // Remove it from the DOM\n *   removeCss();\n */\nfunction insertCss(styles) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === undefined ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === undefined ? false : _ref$prepend;\n\n  var ids = [];\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n\n    var id = moduleId + '-' + i;\n\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n\n    var elem = document.getElementById(prefix + id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = prefix + id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n    if (sourceMap && typeof btoa === 'function') {\n      // skip IE9 and below, see http://caniuse.com/atob-btoa\n      cssText += '\\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';\n      cssText += '\\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n\n//# sourceURL=webpack:///./node_modules/_isomorphic-style-loader@4.0.0@isomorphic-style-loader/lib/insertCss.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n // 如果是服务器端请求数据，则直接访问 API 服务器的 4000 端口\n// 如果是客户端请求数据，则要访问 node 服务器（中间层）的 3000 端口\n// 让 node 服务器帮我们访问 API 服务器的 4000 端口请求数据\n// 创建一个 axios 的实例, 配置 baseURL 的基准路径\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: '/'\n}));\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header/index.css":
/*!*****************************************!*\
  !*** ./src/components/Header/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./index.css */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./src/components/Header/index.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/_isomorphic-style-loader@4.0.0@isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/_isomorphic-style-loader@4.0.0@isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/Header/index.css?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ \"./src/components/Header/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../withStyles */ \"./src/withStyles.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar Header =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Header, _Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n        className: \"navbar navbar-inverse navbar-fixed-top\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"container-fluid\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"navbar-header\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        className: \"navbar-brand\"\n      }, \"SSR\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"nav navbar-nav\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/\"\n      }, \"\\u9996\\u9875\")), this.props.user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/logout\"\n      }, \"\\u9000\\u51FA\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/profile\"\n      }, \"\\u4E2A\\u4EBA\\u4E2D\\u5FC3\"))), !this.props.user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/login\"\n      }, \"\\u767B\\u5F55\"))), this.props.user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"nav navbar-nav navbar-right\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        className: _index_css__WEBPACK_IMPORTED_MODULE_3___default.a.user\n      }, this.props.user.username))))));\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nHeader = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(function (state) {\n  return state.session;\n})(Header);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Header, _index_css__WEBPACK_IMPORTED_MODULE_3___default.a));\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/containers/App.css":
/*!********************************!*\
  !*** ./src/containers/App.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./App.css */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./src/containers/App.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/_isomorphic-style-loader@4.0.0@isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/_isomorphic-style-loader@4.0.0@isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/containers/App.css?");

/***/ }),

/***/ "./src/containers/App.js":
/*!*******************************!*\
  !*** ./src/containers/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/session */ \"./src/store/actions/session.js\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ \"./src/containers/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../withStyles */ \"./src/withStyles.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        staticContext: this.props.staticContext\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", _defineProperty({\n        className: \"container\"\n      }, \"className\", _App_css__WEBPACK_IMPORTED_MODULE_4___default.a.app), Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"renderRoutes\"])(this.props.route.routes)));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nApp.loadData = function (store) {\n  return store.dispatch(_store_actions_session__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getUser());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(App, _App_css__WEBPACK_IMPORTED_MODULE_4___default.a));\n\n//# sourceURL=webpack:///./src/containers/App.js?");

/***/ }),

/***/ "./src/containers/Counter/index.js":
/*!*****************************************!*\
  !*** ./src/containers/Counter/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/counter */ \"./src/store/actions/counter.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, this.props.number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: this.props.increment\n      }, \"+\"));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nHome = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return state.counter;\n}, _store_actions_counter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Home);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/containers/Counter/index.js?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/home */ \"./src/store/actions/home.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      // 注意：这里访问的是客户端的仓库\n      if (this.props.list.length == 0) {\n        this.props.getHomeList();\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-md-6 col-md-offset-3\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"list-group\"\n      }, this.props.list.map(function (item) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: item.id,\n          className: \"list-group-item\"\n        }, item.name);\n      }))));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nHome = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return state.home;\n}, _store_actions_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Home); // 此方法是用来异步加载数据的方法，用这个方法可以加载数据并且放到仓库中去\n\nHome.loadData = function (store) {\n  return store.dispatch(_store_actions_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getHomeList());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/session */ \"./src/store/actions/session.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar Login =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Login, _Component);\n\n  function Login() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Login);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      username: ''\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSubmit\", function (event) {\n      event.preventDefault();\n\n      _this.props.login({\n        username: _this.state.username\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(Login, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-md-6 col-md-offset-3\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        onSubmit: this.handleSubmit\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"form-group\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"username\"\n      }, \"\\u7528\\u6237\\u540D\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        className: \"form-control\",\n        value: this.state.username,\n        onChange: function onChange(event) {\n          return _this2.setState({\n            username: event.target.value\n          });\n        }\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"form-group\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"submit\",\n        className: \"btn btn-primary\"\n      })))));\n    }\n  }]);\n\n  return Login;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nLogin = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return state.session;\n}, _store_actions_session__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Login);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/containers/Login/index.js?");

/***/ }),

/***/ "./src/containers/Logout/index.js":
/*!****************************************!*\
  !*** ./src/containers/Logout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/session */ \"./src/store/actions/session.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Logout =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Logout, _Component);\n\n  function Logout() {\n    _classCallCheck(this, Logout);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Logout).apply(this, arguments));\n  }\n\n  _createClass(Logout, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-md-6 col-md-offset-6\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: this.props.logout,\n        type: \"submit\",\n        className: \"btn btn-primary\"\n      }, \"\\u9000\\u51FA\")));\n    }\n  }]);\n\n  return Logout;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nLogout = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return state.session;\n}, _store_actions_session__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Logout);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logout);\n\n//# sourceURL=webpack:///./src/containers/Logout/index.js?");

/***/ }),

/***/ "./src/containers/NotFound/index.js":
/*!******************************************!*\
  !*** ./src/containers/NotFound/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar NotFound =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(NotFound, _Component);\n\n  function NotFound() {\n    _classCallCheck(this, NotFound);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NotFound).apply(this, arguments));\n  }\n\n  _createClass(NotFound, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      if (this.props.staticContext) {\n        this.props.staticContext.notFound = true;\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-md-6 col-md-offset-6\"\n      }, \"\\u4F60\\u7684\\u9875\\u9762\\u98DE\\u4E86\"));\n    }\n  }]);\n\n  return NotFound;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/containers/NotFound/index.js?");

/***/ }),

/***/ "./src/containers/Profile/index.js":
/*!*****************************************!*\
  !*** ./src/containers/Profile/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Login =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Login, _Component);\n\n  function Login() {\n    _classCallCheck(this, Login);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Login).apply(this, arguments));\n  }\n\n  _createClass(Login, [{\n    key: \"render\",\n    value: function render() {\n      return this.props.user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-md-6 col-md-offset-6\"\n      }, \"\\u4E2A\\u4EBA\\u4E2D\\u5FC3\")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Redirect\"], {\n        to: \"/login\"\n      });\n    }\n  }]);\n\n  return Login;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nLogin = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return state.session;\n})(Login);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/containers/Profile/index.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n/* harmony import */ var _containers_Counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/Counter */ \"./src/containers/Counter/index.js\");\n/* harmony import */ var _containers_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/Login */ \"./src/containers/Login/index.js\");\n/* harmony import */ var _containers_Logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/Logout */ \"./src/containers/Logout/index.js\");\n/* harmony import */ var _containers_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/Profile */ \"./src/containers/Profile/index.js\");\n/* harmony import */ var _containers_NotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/NotFound */ \"./src/containers/NotFound/index.js\");\n/* harmony import */ var _containers_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/App */ \"./src/containers/App.js\");\n\n\n\n\n\n\n\n\n // 集中式路由\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  component: _containers_App__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  loadData: _containers_App__WEBPACK_IMPORTED_MODULE_8__[\"default\"].loadData,\n  // 子路由\n  routes: [{\n    path: '/',\n    component: _containers_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    exact: true,\n    key: '/',\n    // 加载数据，如果此配置项有了这个属性，那么意味着需要加载异步数据\n    loadData: _containers_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loadData\n  }, {\n    path: '/counter',\n    component: _containers_Counter__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    key: '/counter'\n  }, {\n    path: '/login',\n    component: _containers_Login__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    key: '/login'\n  }, {\n    path: '/logout',\n    component: _containers_Logout__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    key: '/logout'\n  }, {\n    path: '/profile',\n    component: _containers_Profile__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    key: '/profile'\n  }, {\n    component: _containers_NotFound__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    key: '/notfound'\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/server/render.js\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar app = express();\napp.use(express[\"static\"]('public')); // 如果是服务器端请求数据，则直接访问 API 服务器的 4000 端口\n// 如果是客户端请求数据，则要访问 node 服务器（中间层）的 3000 端口\n// 让 node 服务器帮我们访问 API 服务器的 4000 端口请求数据\n// 总结：客户端向 node 服务器请求数据，node 服务器转发给 API 服务器\n// 如果浏览器不直接访问 API 接口服务器，那么就不存在跨域的问题，node 服务器访问 API 接口服务器不存在跨域问题\n// 如果访问的路径是以 /api 开头的，会交给代理服务器处理\n// /api/users => http://127.0.0.1:4000/api/users\n\napp.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()('http://127.0.0.1:4000', {\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    return \"/api\".concat(req.url);\n  }\n}));\napp.get('*', function (req, res) {\n  Object(_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req, res);\n});\napp.listen(3000, function () {\n  console.log('server started at port 3000');\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ \"./src/routes.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, res) {\n  // csses  收集每一个组件引入的样式\n  var context = {\n    csses: []\n  }; // 获取服务端的 store\n\n  var store = Object(_store__WEBPACK_IMPORTED_MODULE_5__[\"getServerStore\"])(req); // matchPath 是路由提供的工具方法，可以用来判断路径和路由对象是否匹配（不是简单的匹配：绝对相等）\n  // 这样的也能匹配到\n  // req.path   => /user/123456\n  // route.path => /user/:id\n  // matchRoutes 这个方法可以处理嵌套路由\n\n  var matchedRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_6__[\"matchRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"], req.path);\n  var promises = []; // 当前匹配到的路由如果需要异步请求数据，那么就在这里请求数据\n\n  matchedRoutes.forEach(function (item) {\n    if (item.route.loadData) {\n      promises.push(new Promise(function (resolve) {\n        return item.route.loadData(store).then(resolve, resolve);\n      }));\n    }\n  });\n  Promise.all(promises).then(function () {\n    // 客户端用 HashRouter 或者 BrowserRouter\n    // 而在服务端用 StaticRouter\n    var html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n      store: store\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"StaticRouter\"], {\n      context: context,\n      location: req.path\n    }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_6__[\"renderRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]))));\n    var cssStr = context.csses.join('\\n');\n\n    if (context.action == 'REPLACE') {\n      return res.redirect(302, context.url); //res.statusCode = 302;\n    } else if (context.notFound) {\n      res.statusCode = 404;\n    }\n\n    res.send(\"\\n            <html>\\n                <head>\\n                <title>React-SSR</title>\\n                <link rel=\\\"stylesheet\\\" href=\\\"https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css\\\" />\\n                <style>\".concat(cssStr, \"</style>\\n                </head>\\n                <body>\\n                <div id=\\\"root\\\">\").concat(html, \"</div>\\n                <script>\\n                  window.context = {\\n                      state:\").concat(JSON.stringify(store.getState()), \"\\n                  }\\n                </script>\\n                <script src=\\\"/client.js\\\"></script>\\n                </body>\\n            </html>\"));\n  });\n});\n\n//# sourceURL=webpack:///./src/server/render.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n // 如果是服务器端请求数据，则直接访问 API 服务器的 4000 端口\n// 如果是客户端请求数据，则要访问 node 服务器（中间层）的 3000 端口\n// 让 node 服务器帮我们访问 API 服务器的 4000 端口请求数据\n//创建一个 axios 的实例, 配置baseURL的基准路径\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n    baseURL: 'http://localhost:4000',\n    headers: {\n      cookie: req.get('cookie') || ''\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/store/action-types.js":
/*!***********************************!*\
  !*** ./src/store/action-types.js ***!
  \***********************************/
/*! exports provided: INCREMENT, SET_HOME_LIST, SET_SESSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INCREMENT\", function() { return INCREMENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_HOME_LIST\", function() { return SET_HOME_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_SESSION\", function() { return SET_SESSION; });\n//加1的动作类型\nvar INCREMENT = 'INCREMENT';\nvar SET_HOME_LIST = 'SET_HOME_LIST'; //设置会话信息\n\nvar SET_SESSION = 'SET_SESSION';\n\n//# sourceURL=webpack:///./src/store/action-types.js?");

/***/ }),

/***/ "./src/store/actions/counter.js":
/*!**************************************!*\
  !*** ./src/store/actions/counter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  increment: function increment() {\n    return {\n      type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"INCREMENT\"]\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/store/actions/counter.js?");

/***/ }),

/***/ "./src/store/actions/home.js":
/*!***********************************!*\
  !*** ./src/store/actions/home.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getHomeList: function getHomeList() {\n    // 这里使用 redux-thunk 中间件\n    return function (dispatch, getState, request) {\n      // 如果是服务器端请求数据，则直接访问 API 服务器的 4000 端口\n      // 如果是客户端请求数据，则要访问 node 服务器（中间层）的 3000 端口\n      // 让 node 服务器帮我们访问 API 服务器的 4000 端口请求数据\n      // 因为这里的 action 都是公共的，客户端/服务端的请求参数可能不一样\n      // 所以需要在这里区分当前环境是客户端还是服务端，但是再每个 action 里都做判断会很麻烦\n      // 所以这里在不同环境下调用时，给函数传递一个 request ，就可以区分当前环境\n      return request.get('/api/users').then(function (result) {\n        var list = result.data;\n        dispatch({\n          type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_HOME_LIST\"],\n          payload: list\n        });\n      });\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/store/actions/home.js?");

/***/ }),

/***/ "./src/store/actions/session.js":
/*!**************************************!*\
  !*** ./src/store/actions/session.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  login: function login(user) {\n    return function (dispatch, getState, request) {\n      return request.post('/api/login', user).then(function (result) {\n        var data = result.data; //响应体\n\n        dispatch({\n          type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_SESSION\"],\n          payload: data.data\n        });\n      });\n    };\n  },\n  logout: function logout() {\n    return function (dispatch, getState, request) {\n      return request.get('/api/logout').then(function (result) {\n        var data = result.data; //响应体\n\n        dispatch({\n          type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_SESSION\"],\n          payload: data.data\n        }); //退出之后自动跳转到登陆页\n        //dispatch(push('/login'));\n      });\n    };\n  },\n  getUser: function getUser() {\n    return function (dispatch, getState, request) {\n      return request.get('/api/user').then(function (result) {\n        var data = result.data; //响应体\n\n        dispatch({\n          type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_SESSION\"],\n          payload: data.data\n        });\n      });\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/store/actions/session.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: getServerStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerStore\", function() { return getServerStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ \"./src/store/reducers/index.js\");\n\n\n\n\n\n\nfunction getServerStore(req) {\n  // withExtraArgument 用来给 thunk 传递额外的参数\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(Object(_server_request__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(req)), redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a));\n}\nfunction getClientStore() {\n  // 服务端：组件初始化时会请求数据，请求的数据会存到服务端仓库中，然后组件使用数据显示相应内容\n  // 客户端：为了避免组件挂载时又一次的请求数据（当服务器端已经请求过数据并返回了有数据的内容）\n  // 所以这里要获取下存在服务端仓库中的数据并作为初始值存到客户端仓库中\n  var initState = window.context.state;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_5__[\"default\"], initState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(_client_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a));\n}\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/reducers/counter.js":
/*!***************************************!*\
  !*** ./src/store/reducers/counter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\n\nvar initState = {\n  number: 0\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__[\"INCREMENT\"]:\n      return {\n        number: state.number + 1\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/store/reducers/counter.js?");

/***/ }),

/***/ "./src/store/reducers/home.js":
/*!************************************!*\
  !*** ./src/store/reducers/home.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\n\nvar initState = {\n  list: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_HOME_LIST\"]:\n      return {\n        list: action.payload\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/store/reducers/home.js?");

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter */ \"./src/store/reducers/counter.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/store/reducers/home.js\");\n/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session */ \"./src/store/reducers/session.js\");\n\n\n\n\nvar reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  counter: _counter__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  home: _home__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  session: _session__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducers);\n\n//# sourceURL=webpack:///./src/store/reducers/index.js?");

/***/ }),

/***/ "./src/store/reducers/session.js":
/*!***************************************!*\
  !*** ./src/store/reducers/session.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\n\nvar initState = {\n  user: null,\n  //当前登陆的用户\n  success: null,\n  //成功的消息\n  error: null //错误消息\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_SESSION\"]:\n      return action.payload;\n    //整体覆盖\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/store/reducers/session.js?");

/***/ }),

/***/ "./src/withStyles.js":
/*!***************************!*\
  !*** ./src/withStyles.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return withStyles; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nfunction withStyles(OriginalComponent, styles) {\n  var ProxyComponent =\n  /*#__PURE__*/\n  function (_Component) {\n    _inherits(ProxyComponent, _Component);\n\n    function ProxyComponent() {\n      _classCallCheck(this, ProxyComponent);\n\n      return _possibleConstructorReturn(this, _getPrototypeOf(ProxyComponent).apply(this, arguments));\n    }\n\n    _createClass(ProxyComponent, [{\n      key: \"componentWillMount\",\n      value: function componentWillMount() {\n        if (this.props.staticContext) {\n          // _getCss方法可以得到处理后的 css 源代码\n          this.props.staticContext.csses.push(styles._getCss());\n        }\n      }\n    }, {\n      key: \"render\",\n      value: function render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OriginalComponent, this.props);\n      }\n    }]);\n\n    return ProxyComponent;\n  }(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n  return ProxyComponent;\n}\n\n//# sourceURL=webpack:///./src/withStyles.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");\n\n//# sourceURL=webpack:///external_%22redux-logger%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });