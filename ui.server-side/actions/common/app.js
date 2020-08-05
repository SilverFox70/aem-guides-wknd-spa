exports["ssr"] =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/aem-processor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adobe/cq-react-editable-components */ "@adobe/cq-react-editable-components");
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 // This component is the application entry point

var App = /*#__PURE__*/function (_Page) {
  _inherits(App, _Page);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.childComponents, this.childPages);
    }
  }]);

  return App;
}(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["Page"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["withModel"])(App));

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: HeaderEditConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderEditConfig", function() { return HeaderEditConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_wknd_logo_dk_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../media/wknd-logo-dk.png */ "./src/media/wknd-logo-dk.png");
/* harmony import */ var _media_wknd_logo_dk_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_media_wknd_logo_dk_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_icon_back_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../media/icon-back.svg */ "./src/media/icon-back.svg");
/* harmony import */ var _media_icon_back_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_media_icon_back_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adobe/cq-react-editable-components */ "@adobe/cq-react-editable-components");
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Navigation/Navigation */ "./src/components/Navigation/Navigation.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









__webpack_require__(/*! ./Header.scss */ "./src/components/Header/Header.scss");

var HeaderEditConfig = {
  emptyLabel: 'Header',
  isEmpty: function isEmpty(props) {
    return !props || !props.items || props.items.length < 1;
  }
};

var Header = /*#__PURE__*/function (_Component) {
  _inherits(Header, _Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this, props);
    _this.state = {
      isMenuOpen: false
    };
    _this.handleMenuClick = _this.handleMenuClick.bind(_assertThisInitialized(_this));
    _this.goBack = _this.handleBackClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  /* Update the state when the menu is clicked */


  _createClass(Header, [{
    key: "handleMenuClick",
    value: function handleMenuClick() {
      this.setState(function (state) {
        return {
          isMenuOpen: !state.isMenuOpen
        };
      });
    }
    /* Render the menu toggle */

  }, {
    key: "handleBackClick",

    /* return to the previous page using react router history props */
    value: function handleBackClick() {
      this.props.history.goBack();
    }
    /* Render the back button */

  }, {
    key: "render",
    value: function render() {
      if (HeaderEditConfig.isEmpty(this.props)) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: this.state.isMenuOpen ? 'Header Header--menuOpen' : 'Header'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Header-container"
      }, this.menuToggle, this.logo, this.backButton), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Header-navigation"
      }, this.navigation));
    }
  }, {
    key: "menuToggle",
    get: function get() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "Menu-toggle",
        "aria-expanded": this.state.isMenuOpen,
        title: "Toggle Menu",
        onClick: this.handleMenuClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null));
    }
  }, {
    key: "backButton",
    get: function get() {
      //don't show the back button on the home page
      if (this.props.location.pathname === this.homeLink) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "Backbutton",
        "aria-label": "Return to previous page",
        onClick: this.goBack
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "Backbutton-icon",
        src: _media_icon_back_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
        alt: "Return"
      }));
    }
  }, {
    key: "homeLink",
    get: function get() {
      //expect a single root defined as part of the navigation
      if (!this.props.items || this.props.items.length !== 1) {
        return null;
      }

      return this.props.items[0].url;
    }
  }, {
    key: "navigation",
    get: function get() {
      //pass all the props to Navigation component
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_6__["default"], this.props);
    }
  }, {
    key: "logo",
    get: function get() {
      var homeLink = this.homeLink;
      var logo;

      if (homeLink) {
        logo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
          className: "Logo-link",
          to: this.homeLink
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "Logo-img",
          src: _media_wknd_logo_dk_png__WEBPACK_IMPORTED_MODULE_1___default.a,
          alt: "WKND SPA"
        }));
      } else {
        logo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "Logo-img",
          src: _media_wknd_logo_dk_png__WEBPACK_IMPORTED_MODULE_1___default.a,
          alt: "WKND SPA"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Logo"
      }, logo);
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Object(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_3__["MapTo"])('wknd-spa-react/components/header')(Object(react_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Header), HeaderEditConfig);

/***/ }),

/***/ "./src/components/Header/Header.scss":
/*!*******************************************!*\
  !*** ./src/components/Header/Header.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Header {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99;\n  background-color: #FFEA00;\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24); }\n\n.Header-container {\n  display: flex;\n  max-width: 1024px;\n  margin: 0 auto;\n  padding: 12px; }\n\n/* Logo */\n.Logo {\n  z-index: 100;\n  display: flex;\n  padding-left: 12px; }\n\n.Logo-img {\n  width: 100px; }\n\n/* Menu Toggle */\n.Menu-toggle {\n  cursor: pointer;\n  background: none;\n  border: none;\n  display: flex;\n  flex-direction: column;\n  height: 2rem;\n  justify-content: space-around;\n  margin-right: 1em;\n  width: 2rem; }\n  .Menu-toggle:focus {\n    outline: none;\n    text-decoration: none; }\n  .Menu-toggle span {\n    width: 2rem;\n    height: 0.25rem;\n    background: #202020;\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px; }\n    .Menu-toggle span:first-child {\n      transform: rotate(0); }\n    .Menu-toggle span:nth-child(2) {\n      opacity: 1;\n      transform: translateX(0); }\n    .Menu-toggle span:nth-child(3) {\n      transform: rotate(0); }\n\n/* Back Button */\n.Backbutton {\n  background: #FFFFFF;\n  border: none;\n  border-radius: 100%;\n  height: 40px;\n  width: 40px;\n  cursor: pointer;\n  margin-left: auto; }\n\n.Backbutton-icon {\n  padding-left: 5px; }\n\n/* Header navigation */\n.Header-navigation {\n  position: fixed;\n  top: 63px;\n  left: 0;\n  width: 100%;\n  height: 0px;\n  overflow: hidden;\n  transition: 0.3s;\n  transition-delay: 0.3s;\n  background-color: #FFEA00; }\n  .Header-navigation .Navigation {\n    max-width: 1024px;\n    margin: 0 auto;\n    display: flex;\n    padding: 12px; }\n  .Header-navigation .Navigation__group {\n    width: 100%; }\n  .Header-navigation .Navigation__item-link {\n    color: #202020;\n    font-size: 24px;\n    text-transform: uppercase;\n    padding: 12px;\n    display: flex;\n    border-bottom: 1px solid #696969; }\n    .Header-navigation .Navigation__item-link:hover {\n      background: #202020;\n      color: #FFFFFF; }\n\n/* open Header */\n.Header--menuOpen .Header-navigation {\n  height: 100%;\n  transition-delay: 0s; }\n\n.Header--menuOpen .Menu-toggle span:first-child {\n  transform: rotate(45deg); }\n\n.Header--menuOpen .Menu-toggle span:nth-child(2) {\n  opacity: 0;\n  transform: translateX(20px); }\n\n.Header--menuOpen .Menu-toggle span:nth-child(3) {\n  transform: translateY(2px) rotate(-45deg); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/components/Image/Image.js":
/*!***************************************!*\
  !*** ./src/components/Image/Image.js ***!
  \***************************************/
/*! exports provided: ImageEditConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageEditConfig", function() { return ImageEditConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/cq-react-editable-components */ "@adobe/cq-react-editable-components");
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




__webpack_require__(/*! ./Image.scss */ "./src/components/Image/Image.scss");

var ImageEditConfig = {
  emptyLabel: 'Image',
  isEmpty: function isEmpty(props) {
    return !props || !props.src || props.src.trim().length < 1;
  }
};

var Image = /*#__PURE__*/function (_Component) {
  _inherits(Image, _Component);

  var _super = _createSuper(Image);

  function Image() {
    _classCallCheck(this, Image);

    return _super.apply(this, arguments);
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      if (ImageEditConfig.isEmpty(this.props)) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Image"
      }, this.content);
    }
  }, {
    key: "content",
    get: function get() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "Image-src",
        src: this.props.src,
        alt: this.props.alt,
        title: this.props.title ? this.props.title : this.props.alt
      });
    }
  }]);

  return Image;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Object(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])('wknd-spa-react/components/image')(Image, ImageEditConfig);

/***/ }),

/***/ "./src/components/Image/Image.scss":
/*!*****************************************!*\
  !*** ./src/components/Image/Image.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Image-src {\n  margin: 1rem 0;\n  width: 100%;\n  border: 0; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/components/Navigation/Navigation.js":
/*!*************************************************!*\
  !*** ./src/components/Navigation/Navigation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/cq-react-editable-components */ "@adobe/cq-react-editable-components");
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





__webpack_require__(/*! ./Navigation.scss */ "./src/components/Navigation/Navigation.scss");

var NavigationEditConfig = {
  emptyLabel: 'Navigation',
  isEmpty: function isEmpty(props) {
    return !props || !props.items || props.items.length < 1;
  }
};
/**
 * Navigation Class
 */

var Navigation = /*#__PURE__*/function (_Component) {
  _inherits(Navigation, _Component);

  var _super = _createSuper(Navigation);

  function Navigation() {
    var _this;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "baseCss", 'Navigation');

    return _this;
  }

  _createClass(Navigation, [{
    key: "renderGroupNav",
    value: function renderGroupNav(children) {
      var _this2 = this;

      if (children === null || children.length < 1) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: this.baseCss + '__group'
      }, children.map(function (item, index) {
        return _this2.renderNavItem(item, index);
      }));
    }
  }, {
    key: "renderNavItem",
    value: function renderNavItem(item, index) {
      var cssClass = this.baseCss + '__item ' + this.baseCss + '__item--level-' + item.level + ' ' + (item.active ? ' ' + this.baseCss + '__item--active' : '');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: this.baseCss + '__item-' + index,
        className: cssClass
      }, this.renderLink(item), this.renderGroupNav(item.children));
    }
  }, {
    key: "renderLink",
    value: function renderLink(item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: item.url,
        title: item.title,
        "aria-current": item.active && 'page',
        className: this.baseCss + '__item-link'
      }, item.title);
    }
  }, {
    key: "render",
    value: function render() {
      if (NavigationEditConfig.isEmpty(this.props)) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "Navigation"
      }, this.renderGroupNav(this.props.items));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Object(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])("wknd-spa-react/components/navigation")(Navigation, NavigationEditConfig);

/***/ }),

/***/ "./src/components/Navigation/Navigation.scss":
/*!***************************************************!*\
  !*** ./src/components/Navigation/Navigation.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Navigation__item {\n  list-style: none; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/components/Page/Page.css":
/*!**************************************!*\
  !*** ./src/components/Page/Page.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n ~ Copyright 2020 Adobe Systems Incorporated\n ~\n ~ Licensed under the Apache License, Version 2.0 (the \"License\");\n ~ you may not use this file except in compliance with the License.\n ~ You may obtain a copy of the License at\n ~\n ~     http://www.apache.org/licenses/LICENSE-2.0\n ~\n ~ Unless required by applicable law or agreed to in writing, software\n ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n ~ See the License for the specific language governing permissions and\n ~ limitations under the License.\n ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\n\n.page {\n  max-width: 1024px;\n  margin: 0 auto;\n  padding: 12px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/components/Page/Page.js":
/*!*************************************!*\
  !*** ./src/components/Page/Page.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adobe/cq-react-editable-components */ "@adobe/cq-react-editable-components");
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RouteHelper_RouteHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../RouteHelper/RouteHelper */ "./src/components/RouteHelper/RouteHelper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/



__webpack_require__(/*! ./Page.css */ "./src/components/Page/Page.css"); // This component is a variant of a Page component mapped to the
// "wknd-spa-react/components/page" resource type. For now, the rendering is
// the same as the RootPage; this is more for illustration purposes


var AppPage = /*#__PURE__*/function (_Page) {
  _inherits(AppPage, _Page);

  var _super = _createSuper(AppPage);

  function AppPage() {
    _classCallCheck(this, AppPage);

    return _super.apply(this, arguments);
  }

  _createClass(AppPage, [{
    key: "containerProps",
    get: function get() {
      var attrs = _get(_getPrototypeOf(AppPage.prototype), "containerProps", this);

      attrs.className = (attrs.className || '') + ' page ' + (this.props.cssClassNames || '');
      return attrs;
    }
  }]);

  return AppPage;
}(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["Page"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('wknd-spa-react/components/page')(Object(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["withComponentMappingContext"])(Object(_RouteHelper_RouteHelper__WEBPACK_IMPORTED_MODULE_1__["withRoute"])(AppPage))));

/***/ }),

/***/ "./src/components/RouteHelper/RouteHelper.js":
/*!***************************************************!*\
  !*** ./src/components/RouteHelper/RouteHelper.js ***!
  \***************************************************/
/*! exports provided: withRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRoute", function() { return withRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


/**
 * Helper that facilitate the use of the {@link Route} component
 */

/**
 * Returns a composite component where a {@link Route} component wraps the provided component
 *
 * @param {React.Component} WrappedComponent    - React component to be wrapped
 * @param {string} [extension=html]             - extension used to identify a route amongst the tree of resource URLs
 * @returns {CompositeRoute}
 */

var withRoute = function withRoute(WrappedComponent, extension) {
  return /*#__PURE__*/function (_Component) {
    _inherits(CompositeRoute, _Component);

    var _super = _createSuper(CompositeRoute);

    function CompositeRoute() {
      _classCallCheck(this, CompositeRoute);

      return _super.apply(this, arguments);
    }

    _createClass(CompositeRoute, [{
      key: "render",
      value: function render() {
        var _this = this;

        var routePath = this.props.cqPath;

        if (!routePath) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, this.props);
        }

        extension = extension || 'html'; // Context path + route path + extension

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          key: routePath,
          exact: true,
          path: '(.*)' + routePath + '(.' + extension + ')?',
          render: function render(routeProps) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({}, _this.props, routeProps));
          }
        });
      }
    }]);

    return CompositeRoute;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
};

/***/ }),

/***/ "./src/components/Text/Text.js":
/*!*************************************!*\
  !*** ./src/components/Text/Text.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adobe/cq-react-editable-components */ "@adobe/cq-react-editable-components");
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_extract_model_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/extract-model-id */ "./src/utils/extract-model-id.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/




__webpack_require__(/*! ./Text.scss */ "./src/components/Text/Text.scss");
/**
 * Default Edit configuration for the Text component that interact with the Core Text component and sub-types
 *
 * @type EditConfig
 */


var TextEditConfig = {
  emptyLabel: 'Text',
  isEmpty: function isEmpty(props) {
    return !props || !props.text || props.text.trim().length < 1;
  }
};
/**
 * Text React component
 */

var Text = /*#__PURE__*/function (_Component) {
  _inherits(Text, _Component);

  var _super = _createSuper(Text);

  function Text() {
    _classCallCheck(this, Text);

    return _super.apply(this, arguments);
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      return this.props.richText ? this.richTextContent : this.textContent;
    }
  }, {
    key: "richTextContent",
    get: function get() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: Object(_utils_extract_model_id__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props.cqPath),
        "data-rte-editelement": true,
        dangerouslySetInnerHTML: {
          __html: this.props.text
        }
      });
    }
  }, {
    key: "textContent",
    get: function get() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.props.text);
    }
  }]);

  return Text;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('wknd-spa-react/components/text')(Text, TextEditConfig));

/***/ }),

/***/ "./src/components/Text/Text.scss":
/*!***************************************!*\
  !*** ./src/components/Text/Text.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n ~ Copyright 2020 Adobe Systems Incorporated\n ~\n ~ Licensed under the Apache License, Version 2.0 (the \"License\");\n ~ you may not use this file except in compliance with the License.\n ~ You may obtain a copy of the License at\n ~\n ~     http://www.apache.org/licenses/LICENSE-2.0\n ~\n ~ Unless required by applicable law or agreed to in writing, software\n ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n ~ See the License for the specific language governing permissions and\n ~ limitations under the License.\n ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  line-height: 1.1;\n  color: #202020; }\n\nh1, .h1,\nh2, .h2,\nh3, .h3 {\n  font-family: \"Asar\", Georgia, \"Times New Roman\", Times, serif;\n  font-weight: normal;\n  margin-top: 19px;\n  margin-bottom: 9.5px; }\n\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  font-family: \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  font-weight: 600; }\n\nh1, .h1 {\n  font-size: 40px; }\n\nh2, .h2 {\n  font-size: 36px; }\n\nh3, .h3 {\n  font-size: 24px; }\n\nh4, .h4 {\n  font-size: 16px; }\n\nh5, .h5 {\n  font-size: 14px; }\n\nh6, .h6 {\n  font-size: 10px; }\n\na {\n  color: #0045FF;\n  text-decoration: none; }\n\nh1 a, h2 a, h3 a {\n  color: #202020; }\n\nh1 u, h2 u, h3 u {\n  text-decoration: none;\n  border-bottom: 1px #ededed solid; }\n\np {\n  margin: 0 0 9.5px;\n  font-size: 18px;\n  line-height: 2.1;\n  text-align: justify; }\n\nul {\n  list-style-position: inside; }\n\nol, ul {\n  padding-left: 0;\n  margin-bottom: 0; }\n\nhr {\n  height: 2px;\n  border: 0 none;\n  margin: 0 auto;\n  max-width: 1024px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/components/import-components.js":
/*!*********************************************!*\
  !*** ./src/components/import-components.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page/Page */ "./src/components/Page/Page.js");
/* harmony import */ var _Text_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text/Text */ "./src/components/Text/Text.js");
/* harmony import */ var _Image_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image/Image */ "./src/components/Image/Image.js");
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation/Navigation */ "./src/components/Navigation/Navigation.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header/Header */ "./src/components/Header/Header.js");
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/






/***/ }),

/***/ "./src/media/icon-back.svg":
/*!*********************************!*\
  !*** ./src/media/icon-back.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "19a5bdabd660fde16554c866e650eadc.svg";

/***/ }),

/***/ "./src/media/wknd-logo-dk.png":
/*!************************************!*\
  !*** ./src/media/wknd-logo-dk.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "25eaecca4d25dad7cf3db10acb763e24.png";

/***/ }),

/***/ "./src/server/CustomModelClient.js":
/*!*****************************************!*\
  !*** ./src/server/CustomModelClient.js ***!
  \*****************************************/
/*! exports provided: CustomModelClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomModelClient", function() { return CustomModelClient; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/cq-spa-page-model-manager */ "@adobe/cq-spa-page-model-manager");
/* harmony import */ var _adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2018 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


/**
 * Custom ModelClient meant to demonstrate how to customize the request sent to the remote server
 */

var CustomModelClient = /*#__PURE__*/function (_ModelClient) {
  _inherits(CustomModelClient, _ModelClient);

  var _super = _createSuper(CustomModelClient);

  function CustomModelClient(auth, apiHost) {
    var _this;

    _classCallCheck(this, CustomModelClient);

    _this = _super.call(this, apiHost);
    _this.AXIOS_CONFIG = {};

    if (auth) {
      _this.AXIOS_CONFIG = {
        headers: {
          Authorization: auth
        }
      };
    }

    return _this;
  }
  /**
   * Fetches a model using the given a resource path
   *
   * @param {string} modelPath - Path to the model
   * @return {*}
   */


  _createClass(CustomModelClient, [{
    key: "fetch",
    value: function () {
      var _fetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(modelPath) {
        var _err, url, response, error;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (modelPath) {
                  _context.next = 4;
                  break;
                }

                _err = 'Fetching model rejected for path: ' + modelPath;
                console.log(_err);
                return _context.abrupt("return", Promise.reject(new Error(_err)));

              case 4:
                // Either the API host has been provided or we make an absolute request relative to the current host
                url = "".concat(this._apiHost).concat(modelPath);
                console.log(url);
                _context.prev = 6;
                _context.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, this.AXIOS_CONFIG);

              case 9:
                response = _context.sent;
                console.log("Request made");

                if (!(response.status >= 200 && response.status < 300)) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt("return", response.data);

              case 15:
                error = new Error('while fetching the model for url: ' + url, response.statusText || response.status);
                console.error(error);
                error.response = response;
                return _context.abrupt("return", Promise.reject(error));

              case 19:
                _context.next = 25;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](6);
                console.error(_context.t0);
                return _context.abrupt("return", Promise.reject(new Error(err)));

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 21]]);
      }));

      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      return fetch;
    }()
  }]);

  return CustomModelClient;
}(_adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__["ModelClient"]);

/***/ }),

/***/ "./src/server/aem-processor.js":
/*!*************************************!*\
  !*** ./src/server/aem-processor.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomModelClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomModelClient */ "./src/server/CustomModelClient.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App */ "./src/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @adobe/cq-react-editable-components */ "@adobe/cq-react-editable-components");
/* harmony import */ var _adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @adobe/cq-spa-page-model-manager */ "@adobe/cq-spa-page-model-manager");
/* harmony import */ var _adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_import_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/import-components */ "./src/components/import-components.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_8__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

global.fetch = __webpack_require__(/*! node-fetch/lib/index */ "node-fetch/lib/index");










/**
 * Renders a valid model to a html stringify
 *
 * @param   {Object} model - the model to render
 * @param   {[type]} pagePath - the pagePath of the current model
 * @param   {[type]} requestUrl - the request url
 * @param   {[type]} requestPath - the request path 
 * @param   {[type]} pageModelRootPath - Path to the app root
 * @param   {[type]} isInEditor - Is the app used in the context of the page editor
 * @returns {String} the string serialization of the html output + state
 */

function renderModelToHTMLString(model, pagePath, requestUrl, requestPath, pageModelRootPath, isInEditor) {
  var html = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["StaticRouter"], {
    location: requestUrl,
    context: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_5__["EditorContext"].Provider, {
    value: isInEditor
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cqChildren: model[_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_5__["Constants"].CHILDREN_PROP],
    cqItems: model[_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_5__["Constants"].ITEMS_PROP],
    cqItemsOrder: model[_adobe_cq_react_editable_components__WEBPACK_IMPORTED_MODULE_5__["Constants"].ITEMS_ORDER_PROP],
    cqPath: pageModelRootPath,
    locationPathname: requestPath
  }))));
  console.log(html); // We are using ' for the string to we need to make sure we are encoding all other '

  var state = {
    rootModel: model,
    rootModelUrl: _adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_6__["ModelManager"].rootPath,
    pagePath: pagePath
  };
  var stateStr = JSON.stringify(state);
  return "".concat(html, "\n     <script type=\"application/json\" id=\"__INITIAL_STATE__\">\n         ").concat(stateStr, "\n     </script>");
}

;

function processSPA(_x) {
  return _processSPA.apply(this, arguments);
}

function _processSPA() {
  _processSPA = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(args.method && args.method === 'GET')) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", processGet(args));

          case 4:
            return _context.abrupt("return", processPost(args));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _processSPA.apply(this, arguments);
}

;

function processPost(_x2) {
  return _processPost.apply(this, arguments);
}

function _processPost() {
  _processPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(args) {
    var APP_ROOT_PATH, wcmMode, isInEditor, pageModelRootPath, modelData, pagePath, modelClient, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            APP_ROOT_PATH = '/content/wknd-spa-react/us/en';
            wcmMode = args.wcmmode;
            isInEditor = wcmMode && wcmMode === 'EDIT' || wcmMode === 'PREVIEW';
            pageModelRootPath = args.pageRoot || APP_ROOT_PATH;
            modelData = args.data;
            pagePath = args.pagePath.replace('.html', '');
            console.log(modelData);
            modelClient = new _CustomModelClient__WEBPACK_IMPORTED_MODULE_0__["CustomModelClient"]('Basic YWRtaW46YWRtaW4=');
            _context2.next = 10;
            return _adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_6__["ModelManager"].initialize({
              path: pageModelRootPath,
              model: modelData,
              modelClient: modelClient
            });

          case 10:
            _context2.next = 12;
            return renderModelToHTMLString(modelData, pagePath, args.pagePath, args.pagePath, pageModelRootPath, isInEditor);

          case 12:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _processPost.apply(this, arguments);
}

;

function processGet(_x3) {
  return _processGet.apply(this, arguments);
}

function _processGet() {
  _processGet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(args) {
    var APP_ROOT_PATH, API_HOST, wcmMode, isInEditor, pageModelRootPath, modelData, pagePath, modelClient, model, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            APP_ROOT_PATH = args.pageRoot || '/content/wknd-spa-react/us/en';
            API_HOST = args.apiHost || 'http://localhost:4502';
            wcmMode = args.wcmmode;
            isInEditor = wcmMode && wcmMode === 'EDIT' || wcmMode === 'PREVIEW';
            pageModelRootPath = args.pageRoot || APP_ROOT_PATH;
            modelData = args.data;
            pagePath = args.pagePath.replace('.html', '');
            modelClient = new _CustomModelClient__WEBPACK_IMPORTED_MODULE_0__["CustomModelClient"]('Basic YWRtaW46YWRtaW4=', API_HOST);
            _context3.next = 10;
            return _adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_6__["ModelManager"].initialize({
              path: pageModelRootPath,
              model: modelData,
              modelClient: modelClient
            });

          case 10:
            _context3.next = 12;
            return _adobe_cq_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_6__["ModelManager"].getData({
              path: pagePath
            });

          case 12:
            model = _context3.sent;
            _context3.next = 15;
            return renderModelToHTMLString(model, pagePath, args.pagePath, args.pagePath, pageModelRootPath, isInEditor);

          case 15:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _processGet.apply(this, arguments);
}

;
exports.processSPA = processSPA;

/***/ }),

/***/ "./src/utils/extract-model-id.js":
/*!***************************************!*\
  !*** ./src/utils/extract-model-id.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return extractModelId; });
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/**
 * Extract an id from the cqModel field of given properties
 *
 * @param path - Path to be converted into an id
 * @returns {string|undefined}
 */
function extractModelId(path) {
  return path && path.replace(/\/|:/g, '_');
}

/***/ }),

/***/ "@adobe/cq-react-editable-components":
/*!******************************************************!*\
  !*** external "@adobe/cq-react-editable-components" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@adobe/cq-react-editable-components");

/***/ }),

/***/ "@adobe/cq-spa-page-model-manager":
/*!***************************************************!*\
  !*** external "@adobe/cq-spa-page-model-manager" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@adobe/cq-spa-page-model-manager");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "node-fetch/lib/index":
/*!***************************************!*\
  !*** external "node-fetch/lib/index" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch/lib/index");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=app.js.map