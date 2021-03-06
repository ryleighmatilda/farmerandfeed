(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react"), require("react-dom")) : factory(root["Framer"], root["React"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./entry.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Input.tsx": "./code/Input.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
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
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Input.tsx":
/*!************************!*\
  !*** ./code/Input.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0lucHV0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBc0Q7QUFDdEQseURBQXNDO0FBOEJ0QyxNQUFhLEtBQU0sU0FBUSxLQUFLLENBQUMsU0FBZ0M7SUFBakU7O1FBK0RJLFVBQUssR0FBRztZQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUs7WUFDL0IsY0FBYyxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSztTQUMzQyxDQUFBO1FBV0QsYUFBUSxHQUFHLENBQUMsS0FBd0IsRUFBRSxFQUFFOztZQUNwQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7Z0JBQ2hDLENBQUMsQ0FBRSxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQThCO2dCQUNuRCxDQUFDLENBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUEyQixDQUFBO1lBRXBELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUE7WUFFM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7WUFFeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDbEM7U0FDSixDQUFBO1FBRUQsZ0JBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7WUFDOUIsQ0FBQyxDQUFDLDJCQUFNLENBQUMsUUFBUSxDQUFBOztvQ0FFVyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7Y0FDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVOztPQUU1QjtZQUNDLENBQUMsQ0FBQywyQkFBTSxDQUFDLEtBQUssQ0FBQTs7b0NBRWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO2NBQzVDLElBQUksQ0FB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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
class Input extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: Input.defaultProps.value,
            valueFromProps: Input.defaultProps.value,
        };
        this.onChange = (event) => {
            window["__checkBudget__"]();
            const element = this.props.multiLine
                ? event.nativeEvent.target
                : event.nativeEvent.target;
            const value = element.value;
            this.setState({ value });
            if (this.props.onValueChange) {
                this.props.onValueChange(value);
            }
        };
        this.StyledInput = this.props.multiLine
            ? styled_components_1.default.textarea `
        &:focus {
          box-shadow: inset 0 0 0 ${this.props.borderWidth}px
            ${this.props.focusColor} !important;
        }
      `
            : styled_components_1.default.input `
        &:focus {
          box-shadow: inset 0 0 0 ${this.props.borderWidth}px
            ${this.props.focusColor} !important;
        }
      `;
    }
    // Allow setting the Value from within the property panel.
    static getDerivedStateFromProps(props, state) {
        window["__checkBudget__"]();
        if (props.value !== state.valueFromProps) {
            return { value: props.value, valueFromProps: props.value };
        }
        else {
            return null;
        }
    }
    render() {
        window["__checkBudget__"]();
        const { placeholder, backgroundColor, textColor, fontSize, radius, paddingPerSide, padding, paddingTop, paddingRight, paddingBottom, paddingLeft, border, borderWidth, password, } = this.props;
        const { value } = this.state;
        const paddingValue = paddingPerSide
            ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`
            : padding;
        return (React.createElement(this.StyledInput, { onChange: this.onChange, value: value, placeholder: placeholder, style: Object.assign(Object.assign({}, style), { backgroundColor, color: textColor, fontSize: fontSize, borderRadius: radius, padding: paddingValue, boxShadow: `inset 0 0 0 ${borderWidth}px ${border}` }), type: password ? "password" : "text" }));
    }
}
exports.Input = Input;
Input.defaultProps = {
    value: "",
    placeholder: "Type something…",
    width: 300,
    height: 50,
    backgroundColor: "#FFF",
    textColor: "#000",
    focusColor: "#09F",
    fontSize: 15,
    radius: 10,
    padding: 15,
    paddingPerSide: false,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    border: "rgba(0,0,0,0.1)",
    borderWidth: 1,
    multiLine: false,
    password: false,
};
Input.propertyControls = {
    value: { type: framer_1.ControlType.String, title: "Value" },
    placeholder: { type: framer_1.ControlType.String, title: "Default" },
    textColor: { type: framer_1.ControlType.Color, title: "Text" },
    backgroundColor: { type: framer_1.ControlType.Color, title: "Fill" },
    border: { type: framer_1.ControlType.Color, title: "Border" },
    borderWidth: {
        type: framer_1.ControlType.Number,
        title: " ",
        min: 1,
        max: 5,
        displayStepper: true,
    },
    focusColor: { type: framer_1.ControlType.Color, title: "Focus" },
    padding: {
        type: framer_1.ControlType.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["All Sides", "Per Side"],
        valueKeys: [
            "paddingTop",
            "paddingRight",
            "paddingBottom",
            "paddingLeft",
        ],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
        title: "Padding",
    },
    radius: { type: framer_1.ControlType.Number, title: "Radius" },
    fontSize: {
        type: framer_1.ControlType.Number,
        title: "Font Size",
        min: 5,
        max: 25,
    },
    multiLine: { type: framer_1.ControlType.Boolean, title: "Text Area" },
    password: { type: framer_1.ControlType.Boolean, title: "Password" },
};
const style = {
    border: "none",
    width: "100%",
    paddingLeft: 12,
    paddingRight: 12,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    outline: "none",
    resize: "none",
};
exports.__info__ = [{ "name": "Input", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template

                packages["framer"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer */ "framer")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["framer"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.1.6","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.7","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, keywords, name, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.4.16\"},\"peerDependencies\":{\"framer\":\"^0.9.5 || ^1\",\"react\":\"^16.3.0\",\"react-dom\":\"^16.3.0\"},\"framer\":{\"id\":\"f39b105e-588c-479a-aa1e-30973cfe2f5e\",\"displayName\":\"Input\"},\"author\":\"Benjamin den Boer\",\"dependencies\":{\"styled-components\":\"^4.0.3\"},\"keywords\":[\"input\",\"form\",\"textarea\",\"web\"],\"name\":\"@framer/benjamin.input\",\"version\":\"1.4.0\"}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ });
});