(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"));
	else if(typeof define === 'function' && define.amd)
		define(["framer"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer")) : factory(root["Framer"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
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
exports.Action_Bars_Dark_3_Labels = framer_1.createDesignComponent(canvas, "id_FBRg<<.k", {}, 375, 83);
exports.Action_Bars_Dark_5_Icons = framer_1.createDesignComponent(canvas, "id_T28vl7bIS", {}, 375, 83);
exports.Action_Bars_Light_3_Labels = framer_1.createDesignComponent(canvas, "id__6k!VeKr", {}, 375, 83);
exports.Action_Bars_Light_5_Actions = framer_1.createDesignComponent(canvas, "id_@ECm_vZ)", {}, 375, 83);
exports.Controls_Bubble_Actions = framer_1.createDesignComponent(canvas, "id_VeR7mm03W", {}, 297, 43);
exports.Controls_Button = framer_1.createDesignComponent(canvas, "id_oH8J4y0_H", {}, 375, 44);
exports.Controls_Dark_Pagination = framer_1.createDesignComponent(canvas, "id_ZQkbinjy9", {}, 375, 20);
exports.Controls_Light_Pagination = framer_1.createDesignComponent(canvas, "id_lDfpSMwPg", {}, 375, 20);
exports.Controls_Progress_Bar = framer_1.createDesignComponent(canvas, "id_bzlrmPIJZ", {}, 375, 44);
exports.Controls_Progress_Bar_Labl = framer_1.createDesignComponent(canvas, "id_d4w2SqSAl", {}, 375, 44);
exports.Controls_Progress_Indicator = framer_1.createDesignComponent(canvas, "id_dIJP6Kt2z", {}, 375, 44);
exports.Controls_Progress_Indicator_Label = framer_1.createDesignComponent(canvas, "id_puo4Jdm0y", {}, 375, 44);
exports.Controls_Segmented_Control_2_Options = framer_1.createDesignComponent(canvas, "id_O7AQSHMdi", {}, 375, 44);
exports.Controls_Segmented_Control_3_Options = framer_1.createDesignComponent(canvas, "id_x9atb3cpb", {}, 375, 44);
exports.Controls_Segmented_Control_4_Options = framer_1.createDesignComponent(canvas, "id_K_OAj8Uuv", {}, 375, 44);
exports.Controls_Slider = framer_1.createDesignComponent(canvas, "id_talAJlfiR", {}, 375, 44);
exports.Controls_Stepper = framer_1.createDesignComponent(canvas, "id_YQnRMqfUq", {}, 154, 44);
exports.Controls_Text_Input_Field = framer_1.createDesignComponent(canvas, "id_fjHAUq6_B", {}, 375, 44);
exports.Controls_Text_Selection = framer_1.createDesignComponent(canvas, "id_V3CnlLSn3", {}, 120, 47);
exports.Controls_Toggle_Off = framer_1.createDesignComponent(canvas, "id_ESx1o9IAP", {}, 67, 44);
exports.Controls_Toggle_On = framer_1.createDesignComponent(canvas, "id_XE3gOjZBN", {}, 67, 44);
exports.Icons_Add = framer_1.createDesignComponent(canvas, "id_bqOWyIu6m", {}, 44, 44);
exports.Icons_Check = framer_1.createDesignComponent(canvas, "id_ncJ054rfm", {}, 44, 44);
exports.Icons_Disclosure = framer_1.createDesignComponent(canvas, "id_FM6oG64sh", {}, 44, 44);
exports.Icons_Info = framer_1.createDesignComponent(canvas, "id_hnY4JCUUK", {}, 44, 44);
exports.Keyboards_Dark_Alphabetic = framer_1.createDesignComponent(canvas, "id_iOtRoC8at", {}, 375, 291);
exports.Keyboards_Dark_Alphabetic_Uppercase = framer_1.createDesignComponent(canvas, "id_G_mC3wb9t", {}, 375, 291);
exports.Keyboards_Dark_Numeric = framer_1.createDesignComponent(canvas, "id_l0kuEYuiN", {}, 375, 291);
exports.Keyboards_Dark_Special_Characters = framer_1.createDesignComponent(canvas, "id_IuYHIx5BZ", {}, 375, 291);
exports.Keyboards_Dark_Suggestions = framer_1.createDesignComponent(canvas, "id_sQ5OvoAq7", {}, 375, 42);
exports.Keyboards_Light_Alphabetic = framer_1.createDesignComponent(canvas, "id_ibWeWP9wF", {}, 375, 291);
exports.Keyboards_Light_Alphabetic_Uppercase = framer_1.createDesignComponent(canvas, "id_x2vUZx_1D", {}, 375, 291);
exports.Keyboards_Light_Numeric = framer_1.createDesignComponent(canvas, "id_XySQdSlji", {}, 375, 291);
exports.Keyboards_Light_Special_Characters = framer_1.createDesignComponent(canvas, "id_XjjQ0WnWP", {}, 375, 291);
exports.Keyboards_Light_Suggestions = framer_1.createDesignComponent(canvas, "id_cFbdM3Rti", {}, 375, 42);
exports.Nav_Bars_Dark_Edit_Mode = framer_1.createDesignComponent(canvas, "id_Tk:F#.>(", {}, 375, 88);
exports.Nav_Bars_Dark_Hierarchical = framer_1.createDesignComponent(canvas, "id_ivsCeDUrq", {}, 375, 88);
exports.Nav_Bars_Dark_Modal = framer_1.createDesignComponent(canvas, "id_rrs4{p]&", {}, 375, 88);
exports.Nav_Bars_Dark_Modal_1 = framer_1.createDesignComponent(canvas, "id_B5u8NVB_P", {}, 375, 88);
exports.Nav_Bars_Dark_Search = framer_1.createDesignComponent(canvas, "id_NpuG>Hjg", {}, 375, 192);
exports.Nav_Bars_Dark_Segmented_Control = framer_1.createDesignComponent(canvas, "id_DvHEb3WD8", {}, 375, 88);
exports.Nav_Bars_Light_Actions = framer_1.createDesignComponent(canvas, "id_S})/.t6y", {}, 375, 88);
exports.Nav_Bars_Light_Edit_Mode = framer_1.createDesignComponent(canvas, "id_HMB7oGNmg", {}, 375, 88);
exports.Nav_Bars_Light_Hierarchical = framer_1.createDesignComponent(canvas, "id_rOWeU5JsA", {}, 375, 88);
exports.Nav_Bars_Light_Modal = framer_1.createDesignComponent(canvas, "id_NHSLkZGIU", {}, 375, 88);
exports.Nav_Bars_Light_Search = framer_1.createDesignComponent(canvas, "id_Xo2((dw`", {}, 375, 192);
exports.Nav_Bars_Light_Segmented_Control = framer_1.createDesignComponent(canvas, "id_qs_UC5jNr", {}, 375, 88);
exports.Overlays_Action_Sheet = framer_1.createDesignComponent(canvas, "id_Z0FnSrSY6", {}, 375, 812);
exports.Overlays_Action_Sheet_Description = framer_1.createDesignComponent(canvas, "id_IjN4exzyZ", {}, 375, 812);
exports.Overlays_Action_Sheet_Many_Actions = framer_1.createDesignComponent(canvas, "id_BAg9feRD9", {}, 375, 812);
exports.Overlays_Activity_View = framer_1.createDesignComponent(canvas, "id_bgbSs4rqV", {}, 375, 812);
exports.Overlays_Alert_1_Button = framer_1.createDesignComponent(canvas, "id_SLqBfEP3J", { Title: "string", Description: "string", Button: "string" }, 375, 812);
exports.Overlays_Alert_2_Buttons = framer_1.createDesignComponent(canvas, "id_vi3Cf2ydR", { Title: "string", Description: "string", Left_Button: "string", Right_Button: "string" }, 375, 812);
exports.Overlays_Alert_2_Lines_1_Button = framer_1.createDesignComponent(canvas, "id_y9ft_iCLr", { Title: "string", Description: "string", Button: "string" }, 375, 812);
exports.Overlays_Alert_3_Buttons = framer_1.createDesignComponent(canvas, "id_wnt5w7AQi", { Title: "string", Description: "string", Button_1: "string", Button_2: "string", Button_3: "string" }, 375, 812);
exports.Overlays_Push_Notification = framer_1.createDesignComponent(canvas, "id_xkOKN2PPf", {}, 359, 87);
exports.Status_Bars_Dark = framer_1.createDesignComponent(canvas, "id_&*,y>Le=", { Time: "string" }, 375, 44);
exports.Status_Bars_Light = framer_1.createDesignComponent(canvas, "id_PCl!qaEL", { Time: "string" }, 375, 44);
exports.Tab_Bars_Dark_3_Items = framer_1.createDesignComponent(canvas, "id_9uH>_aN2", {}, 375, 83);
exports.Tab_Bars_Dark_4_Items = framer_1.createDesignComponent(canvas, "id_DRD8R|cp", {}, 375, 83);
exports.Tab_Bars_Dark_5_Items = framer_1.createDesignComponent(canvas, "id_K<DEc]M2", {}, 375, 83);
exports.Tab_Bars_Dark_Item_Deselected = framer_1.createDesignComponent(canvas, "id_QiGldxm0r", {}, 34, 49);
exports.Tab_Bars_Dark_Item_Selected = framer_1.createDesignComponent(canvas, "id_DwoYtGhrE", {}, 34, 49);
exports.Tab_Bars_Light_3_Items = framer_1.createDesignComponent(canvas, "id_WCR{r[Vm", {}, 375, 83);
exports.Tab_Bars_Light_4_Items = framer_1.createDesignComponent(canvas, "id_@Ws{c!J8", {}, 375, 83);
exports.Tab_Bars_Light_5_Items = framer_1.createDesignComponent(canvas, "id_1m/Kk;:.", {}, 375, 83);
exports.Tab_Bars_Light_Item_Deselected = framer_1.createDesignComponent(canvas, "id_ossDw2kPM", {}, 34, 49);
exports.Tab_Bars_Light_Item_Selected = framer_1.createDesignComponent(canvas, "id_n7NP9hdE3", {}, 34, 49);
exports.Table_Cells_2_Lines_Check = framer_1.createDesignComponent(canvas, "id_xeTNTaGv5", {}, 375, 60);
exports.Table_Cells_2_Lines_Detail = framer_1.createDesignComponent(canvas, "id_fMU9IP0zp", {}, 375, 60);
exports.Table_Cells_2_Lines_Detail_Disclosure = framer_1.createDesignComponent(canvas, "id_C4DJxw5PX", {}, 375, 60);
exports.Table_Cells_2_Lines_Detail_Disclosure_Action_Delete = framer_1.createDesignComponent(canvas, "id_uLofYvTs_", {}, 375, 60);
exports.Table_Cells_2_Lines_Detail_Info = framer_1.createDesignComponent(canvas, "id_vMYm_vHjT", {}, 375, 60);
exports.Table_Cells_2_Lines_Details_Check = framer_1.createDesignComponent(canvas, "id_f1z9IOYV2", {}, 375, 60);
exports.Table_Cells_2_Lines_Details_Disclosure_Delete = framer_1.createDesignComponent(canvas, "id_CkzYJaFpC", {}, 375, 60);
exports.Table_Cells_2_Lines_Disclosure = framer_1.createDesignComponent(canvas, "id_BaUM1jAnz", {}, 375, 60);
exports.Table_Cells_2_Lines_Disclosure_Action_Delete = framer_1.createDesignComponent(canvas, "id_Z3RCF6sob", {}, 375, 60);
exports.Table_Cells_2_Lines_Disclosure_Delete = framer_1.createDesignComponent(canvas, "id_JfGC7gOqe", {}, 375, 60);
exports.Table_Cells_2_Lines_Info = framer_1.createDesignComponent(canvas, "id_fN4APtOnO", {}, 375, 60);
exports.Table_Cells_Check = framer_1.createDesignComponent(canvas, "id_KxU0fQuV9", {}, 375, 44);
exports.Table_Cells_Default = framer_1.createDesignComponent(canvas, "id_sHoND5OKU", {}, 154, 44);
exports.Table_Cells_Detail = framer_1.createDesignComponent(canvas, "id_kysPldiIC", {}, 154, 44);
exports.Table_Cells_Detail_1 = framer_1.createDesignComponent(canvas, "id_GYMxh8BfL", {}, 374, 44);
exports.Table_Cells_Detail_Check = framer_1.createDesignComponent(canvas, "id_j9dpIl6VK", {}, 374, 44);
exports.Table_Cells_Detail_Disclosure = framer_1.createDesignComponent(canvas, "id_ZHmi4431H", {}, 374, 44);
exports.Table_Cells_Detail_Disclosure_Action_Delete = framer_1.createDesignComponent(canvas, "id_F4pIvRj7f", {}, 374, 44);
exports.Table_Cells_Detail_Disclosure_Delete = framer_1.createDesignComponent(canvas, "id_g6hfsYrNN", {}, 374, 44);
exports.Table_Cells_Detail_Info = framer_1.createDesignComponent(canvas, "id_lbUSmGxCk", {}, 374, 44);
exports.Table_Cells_Detail_Info_Disclosure = framer_1.createDesignComponent(canvas, "id_i2N3fB9pF", {}, 375, 44);
exports.Table_Cells_Disclosure = framer_1.createDesignComponent(canvas, "id_MVxzxZ91f", {}, 375, 44);
exports.Table_Cells_Disclosure_Action_Dlete = framer_1.createDesignComponent(canvas, "id_qvSm5W6dZ", {}, 375, 44);
exports.Table_Cells_Disclosure_Delete = framer_1.createDesignComponent(canvas, "id_SlfdwCTsh", {}, 375, 44);
exports.Table_Cells_Icon = framer_1.createDesignComponent(canvas, "id_rUGiEodb0", {}, 375, 44);
exports.Table_Cells_Info = framer_1.createDesignComponent(canvas, "id_StCBqtoeZ", {}, 376, 44);
exports.Table_Cells_Info_Disclosure = framer_1.createDesignComponent(canvas, "id_bG7QZKJBX", {}, 376, 44);
exports.Table_Cells_Info_Disclosure_1 = framer_1.createDesignComponent(canvas, "id_KjhS7Kzlt", {}, 375, 60);
exports.Table_Cells_Info_Disclosure_2 = framer_1.createDesignComponent(canvas, "id_pDUkBphzV", {}, 375, 60);
exports.Table_Cells_Stepper = framer_1.createDesignComponent(canvas, "id_efrtdjWqg", {}, 375, 44);
exports.Table_Cells_Subtitle = framer_1.createDesignComponent(canvas, "id_d55_BkEEz", {}, 154, 60);
exports.Table_Cells_Swipe_to_Action = framer_1.createDesignComponent(canvas, "id_X0JTtOehr", {}, 72, 44);
exports.Table_Cells_Swipe_to_Delete = framer_1.createDesignComponent(canvas, "id_TF9EVdCIb", {}, 72, 44);
exports.Table_Cells_Toggle_Off = framer_1.createDesignComponent(canvas, "id_A0OubKQdF", {}, 375, 44);
exports.Table_Cells_Toggle_On = framer_1.createDesignComponent(canvas, "id_PE9AgVo0U", {}, 375, 44);
exports.Typography_Body = framer_1.createDesignComponent(canvas, "id_R_DYf_4bg", {}, 41, 22);
exports.Typography_Callout = framer_1.createDesignComponent(canvas, "id_qwypQTDbc", {}, 52, 20);
exports.Typography_Caption_1 = framer_1.createDesignComponent(canvas, "id_g1wE675HQ", {}, 54, 15);
exports.Typography_Caption_2 = framer_1.createDesignComponent(canvas, "id_adMDhrYV3", {}, 52, 13);
exports.Typography_Headline = framer_1.createDesignComponent(canvas, "id_MsE6bHltP", {}, 72, 22);
exports.Typography_Large_Title = framer_1.createDesignComponent(canvas, "id_h5H6LhKZJ", {}, 168, 40);
exports.Typography_Subhead = framer_1.createDesignComponent(canvas, "id_CJAp2hKJy", {}, 62, 19);
exports.Typography_Title_1 = framer_1.createDesignComponent(canvas, "id_cJK6IqzMf", {}, 72, 33);
exports.Typography_Title_2 = framer_1.createDesignComponent(canvas, "id_MDZKYymKY", {}, 60, 27);
exports.Typography_Title_3 = framer_1.createDesignComponent(canvas, "id_aYlfKPzBO", {}, 56, 24);
exports.__info__ = [];


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.0.2","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"7.0.13","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/react":"16.8.4","@types/react-dom":"^16.8","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^0.16.8","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"3.3","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]},"dependencies":{"style-value-types":"^3.1.4"}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, devDependencies, peerDependencies, framer, author, keywords, license, name, version, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","devDependencies":{"@types/react":"^16.0.31"},"peerDependencies":{"framer":"^0.8.0 || ^1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"displayName":"iOS Kit","id":"63da52c7-63a1-4547-8b76-f151178a131f"},"author":"Edoardo Mercati","keywords":["ios","kit","apple","ui"],"license":"MIT","name":"@framer/edoardo.ios-kit","version":"1.6.0"};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ })

/******/ });
});