(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("framer-base"), require("react"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "framer-base", "react", "styled-components"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("framer-base"), require("react"), require("styled-components")) : factory(root["Framer"], root["framer-base"], root["React"], root["styled-components"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_framer_base__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_styled_components__) {
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
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
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
	"./Controls/Button.tsx": "./code/Controls/Button.tsx",
	"./Controls/ButtonGroup.tsx": "./code/Controls/ButtonGroup.tsx",
	"./Controls/Checkbox.tsx": "./code/Controls/Checkbox.tsx",
	"./Controls/Input.tsx": "./code/Controls/Input.tsx",
	"./Controls/Radio.tsx": "./code/Controls/Radio.tsx",
	"./Controls/RadioGroup.tsx": "./code/Controls/RadioGroup.tsx",
	"./Controls/Select.tsx": "./code/Controls/Select.tsx",
	"./Controls/Slider.tsx": "./code/Controls/Slider.tsx",
	"./Controls/Switch.tsx": "./code/Controls/Switch.tsx",
	"./Controls/TextArea.tsx": "./code/Controls/TextArea.tsx",
	"./Controls/Toggle.tsx": "./code/Controls/Toggle.tsx",
	"./Layout/Base.tsx": "./code/Layout/Base.tsx",
	"./Layout/Card.tsx": "./code/Layout/Card.tsx",
	"./Layout/List.tsx": "./code/Layout/List.tsx",
	"./Miscellaneous/Icon.tsx": "./code/Miscellaneous/Icon.tsx",
	"./Miscellaneous/Image.tsx": "./code/Miscellaneous/Image.tsx",
	"./Miscellaneous/Label.tsx": "./code/Miscellaneous/Label.tsx",
	"./Miscellaneous/Progress.tsx": "./code/Miscellaneous/Progress.tsx",
	"./Miscellaneous/Spinner.tsx": "./code/Miscellaneous/Spinner.tsx",
	"./Miscellaneous/Tooltip.tsx": "./code/Miscellaneous/Tooltip.tsx",
	"./Overrides.tsx": "./code/Overrides.tsx",
	"./Theme/Breakpoint.tsx": "./code/Theme/Breakpoint.tsx",
	"./Theme/Theme.tsx": "./code/Theme/Theme.tsx",
	"./Typography/Heading.tsx": "./code/Typography/Heading.tsx",
	"./Typography/Text.tsx": "./code/Typography/Text.tsx",
	"./canvas.tsx": "./code/canvas.tsx",
	"./hooks/index.ts": "./code/hooks/index.ts",
	"./hooks/useMutationObserver.ts": "./code/hooks/useMutationObserver.ts",
	"./index.ts": "./code/index.ts",
	"./propertyControls/breakpointControls.ts": "./code/propertyControls/breakpointControls.ts",
	"./propertyControls/decoratorControls.ts": "./code/propertyControls/decoratorControls.ts",
	"./propertyControls/iconControls.ts": "./code/propertyControls/iconControls.ts",
	"./propertyControls/index.ts": "./code/propertyControls/index.ts",
	"./propertyControls/intentControls.ts": "./code/propertyControls/intentControls.ts",
	"./propertyControls/patternControls.ts": "./code/propertyControls/patternControls.ts",
	"./propertyControls/resizeControls.ts": "./code/propertyControls/resizeControls.ts",
	"./propertyControls/themeControls.ts": "./code/propertyControls/themeControls.ts",
	"./utils/OmitTheme.ts": "./code/utils/OmitTheme.ts",
	"./utils/centerLayout.tsx": "./code/utils/centerLayout.tsx",
	"./utils/index.ts": "./code/utils/index.ts",
	"./utils/placeholderState.tsx": "./code/utils/placeholderState.tsx",
	"./utils/resizeLayout.tsx": "./code/utils/resizeLayout.tsx",
	"./utils/withHOC.tsx": "./code/utils/withHOC.tsx"
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

/***/ "./code/Controls/Button.tsx":
/*!**********************************!*\
  !*** ./code/Controls/Button.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Db250cm9scy9CdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsNkNBQXVFO0FBQ3ZFLG1DQUF5RDtBQUN6RCwwREFNNEI7QUFDNUIsb0NBQWtEO0FBQ2xELDhDQUFzQztBQWV0QyxNQUFNLFlBQVksR0FBVTtJQUN4QixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsT0FBTyxFQUFFLEtBQUs7SUFDZCxNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxJQUFJO0NBQ2YsQ0FBQTtBQUVELE1BQU0sV0FBVyxHQUFvQixLQUFLLENBQUMsRUFBRTs7SUFDekMsTUFBTSxFQUNGLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLElBQUksRUFDSixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsTUFBTSxFQUNOLEtBQUssRUFDTCxZQUFZLEtBRVosS0FBSyxFQURMLGtMQUNLLENBQUE7SUFDVCxNQUFNLGdCQUFnQixHQUFHLG9CQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUU1RCxPQUFPLENBQ0gsb0JBQUMsb0JBQVUsa0JBQ1AsWUFBWSxFQUFFLGdCQUFnQixJQUFJLGdCQUFnQixFQUNsRCxjQUFjLEVBQUUsa0JBQWtCLElBQUksa0JBQWtCLElBQ3BELElBQUksSUFDUixLQUFLLEVBQUUsWUFBWSxJQUFJLG9CQUFNLENBQUMsS0FBSyxDQUFDLElBQ2hDLGdCQUFnQixHQUVuQixJQUFJLENBQ0ksQ0FDaEIsQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLE1BQU0sR0FBRyxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBRTFDLGNBQU0sQ0FBQyxZQUFZLHFCQUNaLFlBQVksQ0FDbEIsQ0FBQTtBQUVELDRCQUFtQixDQUFDLGNBQU0sd0dBQ25CLGdDQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUNqQyxpQ0FBYyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FDbkMsa0NBQWUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQ3JDLGlDQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUN0QyxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxVQUFVO1FBQ2pCLFlBQVksRUFBRSxZQUFZLENBQUMsUUFBUTtLQUN0QyxFQUNELE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsWUFBWSxFQUFFLFlBQVksQ0FBQyxPQUFPO0tBQ3JDLEtBQ0Usb0NBQWlCLENBQUMsY0FBYyxDQUFDLEtBQ3BDLElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLE1BQU07UUFDYixZQUFZLEVBQUUsWUFBWSxDQUFDLElBQUk7S0FDbEMsSUFDSCxDQUFBIn0=

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./code/utils/index.ts");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    width: 180,
    height: 50,
    theme: "light",
    text: "Button",
    intent: "primary",
    pattern: "primary",
    disabled: false,
    loading: false,
    resize: "none",
    center: true,
};
const InnerButton = props => {
    window["__checkBudget__"]();
    const { width, height, resize, text, withStartDecorator, iconStartDecorator, withEndDecorator, iconEndDecorator, center, theme, themeContext } = props, rest = __rest(props, ["width", "height", "resize", "text", "withStartDecorator", "iconStartDecorator", "withEndDecorator", "iconEndDecorator", "center", "theme", "themeContext"]);
    const resizeDimensions = utils_1.resizeLayout(resize, width, height);
    return (React.createElement(framer_base_1.Button, Object.assign({ endDecorator: withEndDecorator && iconEndDecorator, startDecorator: withStartDecorator && iconStartDecorator }, rest, { theme: themeContext || framer_base_1.themes[theme] }, resizeDimensions), text));
};
exports.Button = withHOC_1.default(InnerButton);
exports.Button.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.Button, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), propertyControls_1.intentControls(defaultProps.intent)), propertyControls_1.patternControls(defaultProps.pattern)), propertyControls_1.resizeControls(defaultProps.resize)), { disabled: {
        type: framer_1.ControlType.Boolean,
        title: "Disabled",
        defaultValue: defaultProps.disabled,
    }, loading: {
        type: framer_1.ControlType.Boolean,
        title: "Loading",
        defaultValue: defaultProps.loading,
    } }), propertyControls_1.decoratorControls("ExternalLink")), { text: {
        type: framer_1.ControlType.String,
        title: "Text",
        defaultValue: defaultProps.text,
    } }));
exports.__info__ = [{ "name": "Button", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Controls/ButtonGroup.tsx":
/*!***************************************!*\
  !*** ./code/Controls/ButtonGroup.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uR3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0NvbnRyb2xzL0J1dHRvbkdyb3VwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLDZDQUlvQjtBQUNwQixtQ0FBeUQ7QUFDekQsMERBSTRCO0FBQzVCLG9DQUFrRDtBQUNsRCw4Q0FBc0M7QUFVdEMsTUFBTSxZQUFZLEdBQVU7SUFDeEIsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsRUFBRTtJQUNWLEtBQUssRUFBRSxPQUFPO0lBQ2QsT0FBTyxFQUFFLFNBQVM7SUFDbEIsU0FBUyxFQUFFLEtBQUs7SUFDaEIsTUFBTSxFQUFFLE1BQU07SUFDZCxNQUFNLEVBQUUsSUFBSTtDQUNmLENBQUE7QUFFRCxNQUFNLGdCQUFnQixHQUFvQixLQUFLLENBQUMsRUFBRTs7SUFDOUMsTUFBTSxFQUNGLFFBQVEsRUFDUixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixLQUFLLEVBQ0wsWUFBWSxLQUVaLEtBQUssRUFETCx3RkFDSyxDQUFBO0lBQ1QsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDNUQsT0FBTyxDQUNILG9CQUFDLHlCQUFlLG9CQUNSLElBQUksSUFDUixLQUFLLEVBQUUsWUFBWSxJQUFJLG9CQUFNLENBQUMsS0FBSyxDQUFDLElBQ2hDLGdCQUFnQixHQUVuQixLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUU7O1FBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzdELElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDeEMsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtnQkFDOUIsYUFBYTtnQkFDYixNQUFNLEVBQUUsS0FBSztnQkFDYixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO2FBQ3JCLENBQUMsQ0FBQTtTQUNMO2FBQU07WUFDSCxPQUFNO1NBQ1Q7S0FDSixDQUFDLENBQ1ksQ0FDckIsQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLFdBQVcsR0FBRyxpQkFBTyxDQUFDLGdCQUFnQixDQUFDLENBQUE7QUFFcEQsbUJBQVcsQ0FBQyxZQUFZLHFCQUFRLFlBQVksQ0FBRSxDQUFBO0FBRTlDLDRCQUFtQixDQUFDLG1CQUFXLDhEQUN4QixnQ0FBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FDakMsa0NBQWUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQ3JDLGlDQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUN0QyxTQUFTLEVBQUU7UUFDUCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxXQUFXO1FBQ2xCLFlBQVksRUFBRSxZQUFZLENBQUMsU0FBUztLQUN2QyxFQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUs7UUFDdkIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsZUFBZSxFQUFFO1lBQ2IsSUFBSSxFQUFFLG9CQUFXLENBQUMsaUJBQWlCO1NBQ3RDO0tBQ0osSUFDSCxDQUFBIn0=

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./code/utils/index.ts");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    width: 520,
    height: 50,
    theme: "light",
    pattern: "primary",
    segmented: false,
    resize: "none",
    center: true,
};
const InnerButtonGroup = props => {
    window["__checkBudget__"]();
    const { children, width, height, resize, theme, themeContext } = props, rest = __rest(props, ["children", "width", "height", "resize", "theme", "themeContext"]);
    const resizeDimensions = utils_1.resizeLayout(resize, width, height);
    return (React.createElement(framer_base_1.ButtonGroup, Object.assign({}, rest, { theme: themeContext || framer_base_1.themes[theme] }, resizeDimensions), React.Children.map(children, child => {
        window["__checkBudget__"]();
        const [button] = React.Children.toArray(child.props.children);
        if (button && React.isValidElement(button)) {
            return React.cloneElement(button, {
                // @ts-ignore
                center: false,
                style: { flex: 1 },
            });
        }
        else {
            return;
        }
    })));
};
exports.ButtonGroup = withHOC_1.default(InnerButtonGroup);
exports.ButtonGroup.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.ButtonGroup, Object.assign(Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), propertyControls_1.patternControls(defaultProps.pattern)), propertyControls_1.resizeControls(defaultProps.resize)), { segmented: {
        type: framer_1.ControlType.Boolean,
        title: "Segmented",
        defaultValue: defaultProps.segmented,
    }, children: {
        type: framer_1.ControlType.Array,
        title: "Buttons",
        propertyControl: {
            type: framer_1.ControlType.ComponentInstance,
        },
    } }));
exports.__info__ = [{ "name": "ButtonGroup", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/Controls/Checkbox.tsx":
/*!************************************!*\
  !*** ./code/Controls/Checkbox.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0NvbnRyb2xzL0NoZWNrYm94LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLDZDQUE2RTtBQUM3RSx5REFBZ0Q7QUFDaEQsbUNBQXlEO0FBQ3pELDBEQUFtRTtBQUVuRSw4Q0FBc0M7QUFRdEMsTUFBTSxZQUFZLEdBQVU7SUFDeEIsS0FBSyxFQUFFLE9BQU87SUFDZCxNQUFNLEVBQUUsU0FBUztJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLEtBQUssRUFBRSxVQUFVO0lBQ2pCLE9BQU8sRUFBRSxLQUFLO0NBQ2pCLENBQUE7QUFFRCxNQUFNLGFBQWEsR0FBb0IsS0FBSyxDQUFDLEVBQUU7O0lBQzNDLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsZ0NBQVksQ0FBQyxDQUFBO0lBQ25ELE1BQU0sRUFBRSxLQUFLLEtBQWMsS0FBSyxFQUFqQiwrQkFBaUIsQ0FBQTtJQUVoQyxPQUFPLG9CQUFDLHNCQUFZLGtCQUFDLEtBQUssRUFBRSxZQUFZLElBQUksb0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFBTSxJQUFJLEVBQUksQ0FBQTtDQUMxRSxDQUFBO0FBRVksUUFBQSxRQUFRLEdBQUcsaUJBQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUU5QyxnQkFBUSxDQUFDLFlBQVkscUJBQVEsWUFBWSxDQUFFLENBQUE7QUFFM0MsNEJBQW1CLENBQUMsZ0JBQVEsZ0RBQ3JCLGdDQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUNqQyxpQ0FBYyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FDdEMsUUFBUSxFQUFFO1FBQ04sSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixLQUFLLEVBQUUsVUFBVTtRQUNqQixZQUFZLEVBQUUsWUFBWSxDQUFDLFFBQVE7S0FDdEMsRUFDRCxPQUFPLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFlBQVksRUFBRSxZQUFZLENBQUMsT0FBTztLQUNyQyxFQUNELEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLE9BQU87UUFDZCxZQUFZLEVBQUUsWUFBWSxDQUFDLEtBQUs7S0FDbkMsSUFDSCxDQUFBIn0=

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    theme: "light",
    intent: "primary",
    disabled: false,
    label: "Checkbox",
    checked: false,
};
const InnerCheckbox = props => {
    window["__checkBudget__"]();
    const themeContext = React.useContext(styled_components_1.ThemeContext);
    const { theme } = props, rest = __rest(props, ["theme"]);
    return React.createElement(framer_base_1.Checkbox, Object.assign({ theme: themeContext || framer_base_1.themes[theme] }, rest));
};
exports.Checkbox = withHOC_1.default(InnerCheckbox);
exports.Checkbox.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.Checkbox, Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), propertyControls_1.intentControls(defaultProps.intent)), { disabled: {
        type: framer_1.ControlType.Boolean,
        title: "Disabled",
        defaultValue: defaultProps.disabled,
    }, checked: {
        type: framer_1.ControlType.Boolean,
        title: "Checked",
        defaultValue: defaultProps.checked,
    }, label: {
        type: framer_1.ControlType.String,
        title: "Label",
        defaultValue: defaultProps.label,
    } }));
exports.__info__ = [{ "name": "Checkbox", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Controls/Input.tsx":
/*!*********************************!*\
  !*** ./code/Controls/Input.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0NvbnRyb2xzL0lucHV0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLDZDQUFvRTtBQUNwRSxtQ0FBeUQ7QUFDekQsMERBTTRCO0FBQzVCLG9DQUFrRDtBQUNsRCw4Q0FBc0M7QUFhdEMsTUFBTSxZQUFZLEdBQVU7SUFDeEIsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsRUFBRTtJQUNWLEtBQUssRUFBRSxPQUFPO0lBQ2QsTUFBTSxFQUFFLFNBQVM7SUFDakIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsSUFBSSxFQUFFLE1BQU07SUFDWixXQUFXLEVBQUUsT0FBTztJQUNwQixLQUFLLEVBQUUsRUFBRTtJQUNULFFBQVEsRUFBRSxLQUFLO0lBQ2YsTUFBTSxFQUFFLE1BQU07Q0FDakIsQ0FBQTtBQUVELE1BQU0sVUFBVSxHQUFvQixLQUFLLENBQUMsRUFBRTs7SUFDeEMsTUFBTSxFQUNGLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsWUFBWSxLQUVaLEtBQUssRUFETCxnS0FDSyxDQUFBO0lBQ1QsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFFNUQsT0FBTyxDQUNILG9CQUFDLG1CQUFTO0lBQ04sYUFBYTs7UUFBYixhQUFhO1FBQ2IsWUFBWSxFQUFFLGdCQUFnQixJQUFJLGdCQUFnQjtRQUNsRCxhQUFhO1FBQ2IsY0FBYyxFQUFFLGtCQUFrQixJQUFJLGtCQUFrQixJQUNwRCxJQUFJLElBQ1IsS0FBSyxFQUFFLFlBQVksSUFBSSxvQkFBTSxDQUFDLEtBQUssQ0FBQyxJQUNoQyxnQkFBZ0IsRUFDdEIsQ0FDTCxDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsS0FBSyxHQUFHLGlCQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7QUFFeEMsYUFBSyxDQUFDLFlBQVkscUJBQVEsWUFBWSxDQUFFLENBQUE7QUFFeEMsNEJBQW1CLENBQUMsYUFBSywwRkFDbEIsZ0NBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQ2pDLGlDQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUNuQyxrQ0FBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FDckMsaUNBQWMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQ3RDLElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLE1BQU07UUFDYixZQUFZLEVBQUUsWUFBWSxDQUFDLElBQUk7UUFDL0IsT0FBTyxFQUFFO1lBQ0wsTUFBTTtZQUNOLE9BQU87WUFDUCxRQUFRO1lBQ1IsVUFBVTtZQUNWLFFBQVE7WUFDUixLQUFLO1lBQ0wsTUFBTTtZQUNOLE1BQU07WUFDTixLQUFLO1lBQ0wsTUFBTTtTQUNUO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsTUFBTTtZQUNOLE9BQU87WUFDUCxRQUFRO1lBQ1IsVUFBVTtZQUNWLE9BQU87WUFDUCxRQUFRO1lBQ1IsTUFBTTtZQUNOLE1BQU07WUFDTixLQUFLO1lBQ0wsTUFBTTtTQUNUO0tBQ0osRUFDRCxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxVQUFVO1FBQ2pCLFlBQVksRUFBRSxZQUFZLENBQUMsUUFBUTtLQUN0QyxFQUNELFdBQVcsRUFBRTtRQUNULElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLGFBQWE7UUFDcEIsWUFBWSxFQUFFLFlBQVksQ0FBQyxXQUFXO0tBQ3pDLEVBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsT0FBTztRQUNkLFlBQVksRUFBRSxZQUFZLENBQUMsS0FBSztLQUNuQyxLQUNFLG9DQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUNoQyxDQUFBIn0=

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./code/utils/index.ts");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    width: 240,
    height: 50,
    theme: "light",
    intent: "primary",
    pattern: "primary",
    type: "text",
    placeholder: "Input",
    value: "",
    disabled: false,
    resize: "none",
};
const InnerInput = props => {
    window["__checkBudget__"]();
    const { theme, resize, width, height, withStartDecorator, iconStartDecorator, withEndDecorator, iconEndDecorator, themeContext } = props, rest = __rest(props, ["theme", "resize", "width", "height", "withStartDecorator", "iconStartDecorator", "withEndDecorator", "iconEndDecorator", "themeContext"]);
    const resizeDimensions = utils_1.resizeLayout(resize, width, height);
    return (React.createElement(framer_base_1.Input
    // @ts-ignore
    , Object.assign({ 
        // @ts-ignore
        endDecorator: withEndDecorator && iconEndDecorator, 
        // @ts-ignore
        startDecorator: withStartDecorator && iconStartDecorator }, rest, { theme: themeContext || framer_base_1.themes[theme] }, resizeDimensions)));
};
exports.Input = withHOC_1.default(InnerInput);
exports.Input.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.Input, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), propertyControls_1.intentControls(defaultProps.intent)), propertyControls_1.patternControls(defaultProps.pattern)), propertyControls_1.resizeControls(defaultProps.resize)), { type: {
        type: framer_1.ControlType.Enum,
        title: "Type",
        defaultValue: defaultProps.type,
        options: [
            "date",
            "email",
            "number",
            "password",
            "search",
            "tel",
            "text",
            "time",
            "url",
            "week",
        ],
        optionTitles: [
            "Date",
            "Email",
            "Number",
            "Password",
            "Phone",
            "Search",
            "Text",
            "Time",
            "URL",
            "Week",
        ],
    }, disabled: {
        type: framer_1.ControlType.Boolean,
        title: "Disabled",
        defaultValue: defaultProps.disabled,
    }, placeholder: {
        type: framer_1.ControlType.String,
        title: "Placeholder",
        defaultValue: defaultProps.placeholder,
    }, value: {
        type: framer_1.ControlType.String,
        title: "Value",
        defaultValue: defaultProps.value,
    } }), propertyControls_1.decoratorControls("Search")));
exports.__info__ = [{ "name": "Input", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Controls/Radio.tsx":
/*!*********************************!*\
  !*** ./code/Controls/Radio.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0NvbnRyb2xzL1JhZGlvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLDZDQUFvRTtBQUNwRSxtQ0FBeUQ7QUFDekQsMERBQW1FO0FBRW5FLDhDQUFzQztBQVF0QyxNQUFNLFlBQVksR0FBVTtJQUN4QixLQUFLLEVBQUUsT0FBTztJQUNkLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsS0FBSyxFQUFFLE9BQU87SUFDZCxPQUFPLEVBQUUsS0FBSztDQUNqQixDQUFBO0FBRUQsTUFBTSxVQUFVLEdBQW9CLEtBQUssQ0FBQyxFQUFFOztJQUN4QyxNQUFNLEVBQUUsS0FBSyxFQUFFLFlBQVksS0FBYyxLQUFLLEVBQWpCLCtDQUFpQixDQUFBO0lBRTlDLE9BQU8sb0JBQUMsbUJBQVMsa0JBQUMsS0FBSyxFQUFFLFlBQVksSUFBSSxvQkFBTSxDQUFDLEtBQUssQ0FBQyxJQUFNLElBQUksRUFBSSxDQUFBO0NBQ3ZFLENBQUE7QUFFWSxRQUFBLEtBQUssR0FBRyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBRXhDLGFBQUssQ0FBQyxZQUFZLHFCQUFRLFlBQVksQ0FBRSxDQUFBO0FBRXhDLDRCQUFtQixDQUFDLGFBQUssZ0RBQ2xCLGdDQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUNqQyxpQ0FBYyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FDdEMsUUFBUSxFQUFFO1FBQ04sSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixLQUFLLEVBQUUsVUFBVTtRQUNqQixZQUFZLEVBQUUsWUFBWSxDQUFDLFFBQVE7S0FDdEMsRUFDRCxPQUFPLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFlBQVksRUFBRSxZQUFZLENBQUMsT0FBTztLQUNyQyxFQUNELEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLE9BQU87UUFDZCxZQUFZLEVBQUUsWUFBWSxDQUFDLEtBQUs7S0FDbkMsSUFDSCxDQUFBIn0=

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    theme: "light",
    intent: "primary",
    disabled: false,
    label: "Radio",
    checked: false,
};
const InnerRadio = props => {
    window["__checkBudget__"]();
    const { theme, themeContext } = props, rest = __rest(props, ["theme", "themeContext"]);
    return React.createElement(framer_base_1.Radio, Object.assign({ theme: themeContext || framer_base_1.themes[theme] }, rest));
};
exports.Radio = withHOC_1.default(InnerRadio);
exports.Radio.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.Radio, Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), propertyControls_1.intentControls(defaultProps.intent)), { disabled: {
        type: framer_1.ControlType.Boolean,
        title: "Disabled",
        defaultValue: defaultProps.disabled,
    }, checked: {
        type: framer_1.ControlType.Boolean,
        title: "Checked",
        defaultValue: defaultProps.checked,
    }, label: {
        type: framer_1.ControlType.String,
        title: "Label",
        defaultValue: defaultProps.label,
    } }));
exports.__info__ = [{ "name": "Radio", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Controls/RadioGroup.tsx":
/*!**************************************!*\
  !*** ./code/Controls/RadioGroup.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW9Hcm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvQ29udHJvbHMvUmFkaW9Hcm91cC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5Qiw2Q0FJb0I7QUFDcEIsbUNBQXlEO0FBQ3pELDBEQUFtRTtBQUNuRSxvQ0FBa0Q7QUFDbEQsOENBQXNDO0FBU3RDLE1BQU0sWUFBWSxHQUFVO0lBQ3hCLEtBQUssRUFBRSxPQUFPO0lBQ2QsUUFBUSxFQUFFLEtBQUs7SUFDZixNQUFNLEVBQUUsTUFBTTtJQUNkLEtBQUssRUFBRSxTQUFTO0lBQ2hCLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO0NBQzVDLENBQUE7QUFFRCxNQUFNLGVBQWUsR0FBb0IsS0FBSyxDQUFDLEVBQUU7O0lBQzdDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxLQUFjLEtBQUssRUFBakIsNEVBQWlCLENBQUE7SUFDckUsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFFNUQsT0FBTyxDQUNILG9CQUFDLHdCQUFjLG9CQUNQLElBQUksSUFDUixLQUFLLEVBQUUsWUFBWSxJQUFJLG9CQUFNLENBQUMsS0FBSyxDQUFDLElBQ2hDLGdCQUFnQixFQUN0QixDQUNMLENBQUE7Q0FDSixDQUFBO0FBRVksUUFBQSxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQTtBQUVsRCxrQkFBVSxDQUFDLFlBQVkscUJBQVEsWUFBWSxDQUFFLENBQUE7QUFFN0MsNEJBQW1CLENBQUMsa0JBQVUsOERBQ3ZCLGdDQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUNwQyxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxVQUFVO1FBQ2pCLFlBQVksRUFBRSxZQUFZLENBQUMsUUFBUTtLQUN0QyxLQUNFLGlDQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUN0QyxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxPQUFPO1FBQ2QsWUFBWSxFQUFFLFlBQVksQ0FBQyxLQUFLO0tBQ25DLEVBQ0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztRQUN2QixLQUFLLEVBQUUsUUFBUTtRQUNmLFlBQVksRUFBRSxZQUFZLENBQUMsTUFBTTtRQUNqQyxlQUFlLEVBQUU7WUFDYixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1lBQ3hCLFdBQVcsRUFBRSxTQUFTO1NBQ3pCO0tBQ0osSUFDSCxDQUFBIn0=

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./code/utils/index.ts");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    theme: "light",
    disabled: false,
    resize: "both",
    value: "Radio A",
    values: ["Radio A", "Radio B", "Radio C"],
};
const InnerRadioGroup = props => {
    window["__checkBudget__"]();
    const { width, height, resize, theme, themeContext } = props, rest = __rest(props, ["width", "height", "resize", "theme", "themeContext"]);
    const resizeDimensions = utils_1.resizeLayout(resize, width, height);
    return (React.createElement(framer_base_1.RadioGroup, Object.assign({}, rest, { theme: themeContext || framer_base_1.themes[theme] }, resizeDimensions)));
};
exports.RadioGroup = withHOC_1.default(InnerRadioGroup);
exports.RadioGroup.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.RadioGroup, Object.assign(Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), { disabled: {
        type: framer_1.ControlType.Boolean,
        title: "Disabled",
        defaultValue: defaultProps.disabled,
    } }), propertyControls_1.resizeControls(defaultProps.resize)), { value: {
        type: framer_1.ControlType.String,
        title: "Value",
        defaultValue: defaultProps.value,
    }, values: {
        type: framer_1.ControlType.Array,
        title: "Values",
        defaultValue: defaultProps.values,
        propertyControl: {
            type: framer_1.ControlType.String,
            placeholder: "Option…",
        },
    } }));
exports.__info__ = [{ "name": "RadioGroup", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Controls/Select.tsx":
/*!**********************************!*\
  !*** ./code/Controls/Select.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Db250cm9scy9TZWxlY3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsNkNBQWdGO0FBQ2hGLG1DQUF5RDtBQUN6RCwwREFLNEI7QUFDNUIsb0NBQWtEO0FBQ2xELDhDQUFzQztBQVV0QyxNQUFNLFlBQVksR0FBVTtJQUN4QixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLE9BQU87SUFDZCxNQUFNLEVBQUUsU0FBUztJQUNqQixPQUFPLEVBQUUsU0FBUztJQUNsQixRQUFRLEVBQUUsS0FBSztJQUNmLE1BQU0sRUFBRSxNQUFNO0lBQ2QsS0FBSyxFQUFFLFVBQVU7SUFDakIsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7Q0FDaEQsQ0FBQTtBQUVELE1BQU0sV0FBVyxHQUFvQixLQUFLLENBQUMsRUFBRTs7SUFDekMsTUFBTSxFQUNGLEtBQUssRUFDTCxPQUFPLEVBQ1AsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxLQUVaLEtBQUssRUFETCx1RkFDSyxDQUFBO0lBQ1QsTUFBTSxnQkFBZ0IsR0FBRyxxQkFBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxVQUFVLENBQUMsQ0FBQTtJQUNqRSxNQUFNLGdCQUFnQixHQUFHLG9CQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUU1RCxPQUFPLENBQ0gsb0JBQUMsb0JBQVUsb0JBQ0gsZ0JBQWdCLElBQ3BCLEtBQUssRUFBRSxZQUFZLElBQUksb0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFDaEMsZ0JBQWdCLEdBRW5CLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUNuQixnQ0FBUSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLElBQzdCLE1BQU0sQ0FDRixDQUNaLENBQUMsQ0FDTyxDQUNoQixDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsTUFBTSxHQUFHLGlCQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7QUFFMUMsY0FBTSxDQUFDLFlBQVkscUJBQVEsWUFBWSxDQUFFLENBQUE7QUFFekMsNEJBQW1CLENBQUMsY0FBTSwwRkFDbkIsZ0NBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQ2pDLGlDQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUNuQyxrQ0FBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FDeEMsUUFBUSxFQUFFO1FBQ04sSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixLQUFLLEVBQUUsVUFBVTtRQUNqQixZQUFZLEVBQUUsWUFBWSxDQUFDLFFBQVE7S0FDdEMsS0FDRSxpQ0FBYyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FDdEMsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsT0FBTztRQUNkLFlBQVksRUFBRSxZQUFZLENBQUMsS0FBSztLQUNuQyxFQUNELE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUs7UUFDdkIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsWUFBWSxFQUFFLFlBQVksQ0FBQyxPQUFPO1FBQ2xDLGVBQWUsRUFBRTtZQUNiLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07WUFDeEIsV0FBVyxFQUFFLFNBQVM7U0FDekI7S0FDSixJQUNILENBQUEifQ==

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./code/utils/index.ts");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    width: 240,
    height: 50,
    theme: "light",
    intent: "primary",
    pattern: "primary",
    disabled: false,
    resize: "none",
    value: "Select B",
    options: ["Select A", "Select B", "Select C"],
};
const InnerSelect = props => {
    window["__checkBudget__"]();
    const { theme, options, resize, width, height, themeContext } = props, rest = __rest(props, ["theme", "options", "resize", "width", "height", "themeContext"]);
    const childrenlessRest = framer_base_1.mapKeys(rest, key => key !== "children");
    const resizeDimensions = utils_1.resizeLayout(resize, width, height);
    return (React.createElement(framer_base_1.Select, Object.assign({}, childrenlessRest, { theme: themeContext || framer_base_1.themes[theme] }, resizeDimensions), options.map(option => (React.createElement("option", { key: option, value: option }, option)))));
};
exports.Select = withHOC_1.default(InnerSelect);
exports.Select.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.Select, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), propertyControls_1.intentControls(defaultProps.intent)), propertyControls_1.patternControls(defaultProps.pattern)), { disabled: {
        type: framer_1.ControlType.Boolean,
        title: "Disabled",
        defaultValue: defaultProps.disabled,
    } }), propertyControls_1.resizeControls(defaultProps.resize)), { value: {
        type: framer_1.ControlType.String,
        title: "Value",
        defaultValue: defaultProps.value,
    }, options: {
        type: framer_1.ControlType.Array,
        title: "Options",
        defaultValue: defaultProps.options,
        propertyControl: {
            type: framer_1.ControlType.String,
            placeholder: "Option…",
        },
    } }));
exports.__info__ = [{ "name": "Select", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Controls/Slider.tsx":
/*!**********************************!*\
  !*** ./code/Controls/Slider.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Db250cm9scy9TbGlkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsNkNBQXVFO0FBQ3ZFLG1DQUF5RDtBQUN6RCwwREFJNEI7QUFDNUIsb0NBQWtEO0FBQ2xELDhDQUFzQztBQWF0QyxNQUFNLFlBQVksR0FBVTtJQUN4QixLQUFLLEVBQUUsT0FBTztJQUNkLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsS0FBSyxFQUFFLEVBQUU7SUFDVCxJQUFJLEVBQUUsQ0FBQztJQUNQLEdBQUcsRUFBRSxDQUFDO0lBQ04sR0FBRyxFQUFFLEdBQUc7SUFDUixNQUFNLEVBQUUsTUFBTTtDQUNqQixDQUFBO0FBRUQsTUFBTSxXQUFXLEdBQW9CLEtBQUssQ0FBQyxFQUFFOztJQUN6QyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksS0FBYyxLQUFLLEVBQWpCLDRFQUFpQixDQUFBO0lBQ3JFLE1BQU0sZ0JBQWdCLEdBQUcsb0JBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBRTVELE9BQU8sQ0FDSCxvQkFBQyxvQkFBVSxvQkFDSCxJQUFJLElBQ1IsS0FBSyxFQUFFLFlBQVksSUFBSSxvQkFBTSxDQUFDLEtBQUssQ0FBQyxJQUNoQyxnQkFBZ0IsRUFDdEIsQ0FDTCxDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsTUFBTSxHQUFHLGlCQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7QUFFMUMsY0FBTSxDQUFDLFlBQVkscUJBQVEsWUFBWSxDQUFFLENBQUE7QUFFekMsNEJBQW1CLENBQUMsY0FBTSw0RUFDbkIsZ0NBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQ2pDLGlDQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUN0QyxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxVQUFVO1FBQ2pCLFlBQVksRUFBRSxZQUFZLENBQUMsUUFBUTtLQUN0QyxLQUNFLGlDQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUN0QyxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxPQUFPO1FBQ2QsR0FBRyxFQUFFLFlBQVksQ0FBQyxHQUFHO1FBQ3JCLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRztRQUNyQixJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUk7UUFDdkIsWUFBWSxFQUFFLFlBQVksQ0FBQyxLQUFLO0tBQ25DLElBQ0gsQ0FBQSJ9

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./code/utils/index.ts");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    theme: "light",
    intent: "primary",
    disabled: false,
    value: 50,
    step: 1,
    min: 0,
    max: 100,
    resize: "none",
};
const InnerSlider = props => {
    window["__checkBudget__"]();
    const { theme, resize, width, height, themeContext } = props, rest = __rest(props, ["theme", "resize", "width", "height", "themeContext"]);
    const resizeDimensions = utils_1.resizeLayout(resize, width, height);
    return (React.createElement(framer_base_1.Slider, Object.assign({}, rest, { theme: themeContext || framer_base_1.themes[theme] }, resizeDimensions)));
};
exports.Slider = withHOC_1.default(InnerSlider);
exports.Slider.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.Slider, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), propertyControls_1.intentControls(defaultProps.intent)), { disabled: {
        type: framer_1.ControlType.Boolean,
        title: "Disabled",
        defaultValue: defaultProps.disabled,
    } }), propertyControls_1.resizeControls(defaultProps.resize)), { value: {
        type: framer_1.ControlType.Number,
        title: "Value",
        min: defaultProps.min,
        max: defaultProps.max,
        step: defaultProps.step,
        defaultValue: defaultProps.value,
    } }));
exports.__info__ = [{ "name": "Slider", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Controls/Switch.tsx":
/*!**********************************!*\
  !*** ./code/Controls/Switch.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Db250cm9scy9Td2l0Y2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsNkNBQXVFO0FBQ3ZFLG1DQUF5RDtBQUN6RCwwREFBbUU7QUFFbkUsOENBQXNDO0FBVXRDLE1BQU0sWUFBWSxHQUFVO0lBQ3hCLEtBQUssRUFBRSxPQUFPO0lBQ2QsTUFBTSxFQUFFLFNBQVM7SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLE9BQU8sRUFBRSxLQUFLO0NBQ2pCLENBQUE7QUFFRCxNQUFNLFdBQVcsR0FBb0IsS0FBSyxDQUFDLEVBQUU7O0lBQ3pDLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixLQUFjLEtBQUssRUFBakIsc0VBQWlCLENBQUE7SUFFbkUsT0FBTyxvQkFBQyxvQkFBVSxrQkFBQyxLQUFLLEVBQUUsWUFBWSxJQUFJLG9CQUFNLENBQUMsS0FBSyxDQUFDLElBQU0sSUFBSSxFQUFJLENBQUE7Q0FDeEUsQ0FBQTtBQUVZLFFBQUEsTUFBTSxHQUFHLGlCQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7QUFFMUMsY0FBTSxDQUFDLFlBQVkscUJBQVEsWUFBWSxDQUFFLENBQUE7QUFFekMsNEJBQW1CLENBQUMsY0FBTSxnREFDbkIsZ0NBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQ2pDLGlDQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUN0QyxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxVQUFVO1FBQ2pCLFlBQVksRUFBRSxZQUFZLENBQUMsUUFBUTtLQUN0QyxFQUNELE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsWUFBWSxFQUFFLFlBQVksQ0FBQyxPQUFPO0tBQ3JDLEVBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsT0FBTztRQUNkLFlBQVksRUFBRSxZQUFZLENBQUMsS0FBSztLQUNuQyxJQUNILENBQUEifQ==

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    theme: "light",
    intent: "primary",
    disabled: false,
    label: "Switch",
    checked: false,
};
const InnerSwitch = props => {
    window["__checkBudget__"]();
    const { theme, themeContext, willChangeTransform } = props, rest = __rest(props, ["theme", "themeContext", "willChangeTransform"]);
    return React.createElement(framer_base_1.Switch, Object.assign({ theme: themeContext || framer_base_1.themes[theme] }, rest));
};
exports.Switch = withHOC_1.default(InnerSwitch);
exports.Switch.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.Switch, Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), propertyControls_1.intentControls(defaultProps.intent)), { disabled: {
        type: framer_1.ControlType.Boolean,
        title: "Disabled",
        defaultValue: defaultProps.disabled,
    }, checked: {
        type: framer_1.ControlType.Boolean,
        title: "Checked",
        defaultValue: defaultProps.checked,
    }, label: {
        type: framer_1.ControlType.String,
        title: "Label",
        defaultValue: defaultProps.label,
    } }));
exports.__info__ = [{ "name": "Switch", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Controls/TextArea.tsx":
/*!************************************!*\
  !*** ./code/Controls/TextArea.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEFyZWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0NvbnRyb2xzL1RleHRBcmVhLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLDZDQUE2RTtBQUM3RSxtQ0FBeUQ7QUFDekQsMERBSzRCO0FBQzVCLG9DQUFrRDtBQUNsRCw4Q0FBc0M7QUFVdEMsTUFBTSxZQUFZLEdBQVU7SUFDeEIsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsR0FBRztJQUNYLEtBQUssRUFBRSxPQUFPO0lBQ2QsTUFBTSxFQUFFLFNBQVM7SUFDakIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsS0FBSyxFQUFFLEVBQUU7SUFDVCxXQUFXLEVBQUUsVUFBVTtJQUN2QixNQUFNLEVBQUUsTUFBTTtJQUNkLFFBQVEsRUFBRSxLQUFLO0lBQ2YsU0FBUyxFQUFFLE1BQU07Q0FDcEIsQ0FBQTtBQUVELE1BQU0sYUFBYSxHQUFvQixLQUFLLENBQUMsRUFBRTs7SUFDM0MsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEtBQWMsS0FBSyxFQUFqQiw0RUFBaUIsQ0FBQTtJQUNyRSxNQUFNLGdCQUFnQixHQUFHLG9CQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUU1RCxPQUFPLENBQ0gsb0JBQUMsc0JBQVksb0JBQ0wsSUFBSSxJQUNSLEtBQUssRUFBRSxZQUFZLElBQUksb0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFDaEMsZ0JBQWdCLEVBQ3RCLENBQ0wsQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLFFBQVEsR0FBRyxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBRTlDLGdCQUFRLENBQUMsWUFBWSxxQkFBUSxZQUFZLENBQUUsQ0FBQTtBQUUzQyw0QkFBbUIsQ0FBQyxnQkFBUSw0RUFDckIsZ0NBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQ2pDLGlDQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUNuQyxrQ0FBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FDckMsaUNBQWMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQ3RDLFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLFVBQVU7UUFDakIsWUFBWSxFQUFFLFlBQVksQ0FBQyxRQUFRO0tBQ3RDLEVBQ0QsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsV0FBVztRQUNsQixZQUFZLEVBQUUsWUFBWSxDQUFDLFNBQVM7UUFDcEMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDO1FBQ25ELFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQztLQUMzRCxFQUNELEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLE9BQU87UUFDZCxZQUFZLEVBQUUsWUFBWSxDQUFDLEtBQUs7S0FDbkMsRUFDRCxXQUFXLEVBQUU7UUFDVCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFlBQVksRUFBRSxZQUFZLENBQUMsV0FBVztLQUN6QyxJQUNILENBQUEifQ==

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./code/utils/index.ts");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    width: 240,
    height: 100,
    theme: "light",
    intent: "primary",
    pattern: "primary",
    value: "",
    placeholder: "TextArea",
    resize: "none",
    disabled: false,
    resizable: "none",
};
const InnerTextArea = props => {
    window["__checkBudget__"]();
    const { theme, themeContext, resize, width, height } = props, rest = __rest(props, ["theme", "themeContext", "resize", "width", "height"]);
    const resizeDimensions = utils_1.resizeLayout(resize, width, height);
    return (React.createElement(framer_base_1.TextArea, Object.assign({}, rest, { theme: themeContext || framer_base_1.themes[theme] }, resizeDimensions)));
};
exports.TextArea = withHOC_1.default(InnerTextArea);
exports.TextArea.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.TextArea, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), propertyControls_1.intentControls(defaultProps.intent)), propertyControls_1.patternControls(defaultProps.pattern)), propertyControls_1.resizeControls(defaultProps.resize)), { disabled: {
        type: framer_1.ControlType.Boolean,
        title: "Disabled",
        defaultValue: defaultProps.disabled,
    }, resizable: {
        type: framer_1.ControlType.Enum,
        title: "Resizable",
        defaultValue: defaultProps.resizable,
        options: ["none", "vertical", "horizontal", "both"],
        optionTitles: ["None", "Vertical", "Horizontal", "Both"],
    }, value: {
        type: framer_1.ControlType.String,
        title: "Value",
        defaultValue: defaultProps.value,
    }, placeholder: {
        type: framer_1.ControlType.String,
        title: "Placeholder",
        defaultValue: defaultProps.placeholder,
    } }));
exports.__info__ = [{ "name": "TextArea", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Controls/Toggle.tsx":
/*!**********************************!*\
  !*** ./code/Controls/Toggle.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9nZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Db250cm9scy9Ub2dnbGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsNkNBQXVFO0FBQ3ZFLG1DQUF5RDtBQUN6RCwwREFJNEI7QUFFNUIsOENBQXNDO0FBUXRDLE1BQU0sWUFBWSxHQUFVO0lBQ3hCLEtBQUssRUFBRSxPQUFPO0lBQ2QsTUFBTSxFQUFFLFNBQVM7SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixJQUFJLEVBQUUsT0FBTztJQUNiLE9BQU8sRUFBRSxLQUFLO0NBQ2pCLENBQUE7QUFFRCxNQUFNLFdBQVcsR0FBb0IsS0FBSyxDQUFDLEVBQUU7O0lBQ3pDLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxLQUFjLEtBQUssRUFBakIsK0NBQWlCLENBQUE7SUFFOUMsT0FBTyxvQkFBQyxvQkFBVSxrQkFBQyxLQUFLLEVBQUUsWUFBWSxJQUFJLG9CQUFNLENBQUMsS0FBSyxDQUFDLElBQU0sSUFBSSxFQUFJLENBQUE7Q0FDeEUsQ0FBQTtBQUVZLFFBQUEsTUFBTSxHQUFHLGlCQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7QUFFMUMsY0FBTSxDQUFDLFlBQVkscUJBQVEsWUFBWSxDQUFFLENBQUE7QUFFekMsNEJBQW1CLENBQUMsY0FBTSw4REFDbkIsZ0NBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQ2pDLGlDQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUN0QyxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxVQUFVO1FBQ2pCLFlBQVksRUFBRSxZQUFZLENBQUMsUUFBUTtLQUN0QyxFQUNELE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsWUFBWSxFQUFFLFlBQVksQ0FBQyxPQUFPO0tBQ3JDLEtBQ0UsK0JBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQ3BDLENBQUEifQ==

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    theme: "light",
    intent: "primary",
    disabled: false,
    icon: "Heart",
    checked: false,
};
const InnerToggle = props => {
    window["__checkBudget__"]();
    const { theme, themeContext } = props, rest = __rest(props, ["theme", "themeContext"]);
    return React.createElement(framer_base_1.Toggle, Object.assign({ theme: themeContext || framer_base_1.themes[theme] }, rest));
};
exports.Toggle = withHOC_1.default(InnerToggle);
exports.Toggle.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.Toggle, Object.assign(Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), propertyControls_1.intentControls(defaultProps.intent)), { disabled: {
        type: framer_1.ControlType.Boolean,
        title: "Disabled",
        defaultValue: defaultProps.disabled,
    }, checked: {
        type: framer_1.ControlType.Boolean,
        title: "Checked",
        defaultValue: defaultProps.checked,
    } }), propertyControls_1.iconControls(defaultProps.icon)));
exports.__info__ = [{ "name": "Toggle", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Layout/Base.tsx":
/*!******************************!*\
  !*** ./code/Layout/Base.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvTGF5b3V0L0Jhc2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsNkNBQTJDO0FBQzNDLDBEQUFtRDtBQUNuRCxtQ0FBNEU7QUFDNUUsOENBQXNDO0FBYXRDLE1BQU0sWUFBWSxHQUFVO0lBQ3hCLEtBQUssRUFBRSxPQUFPO0lBQ2QsS0FBSyxFQUFFLFlBQVk7SUFDbkIsTUFBTSxFQUFFLENBQUM7SUFDVCxNQUFNLEVBQUUsQ0FBQztJQUNULE1BQU0sRUFBRSxLQUFLO0NBQ2hCLENBQUE7QUFFRCxNQUFNLGVBQWUsR0FBRyxDQUFDLE1BQWMsRUFBRSxLQUFZLEVBQVUsRUFBRTs7SUFDN0QsUUFBUSxNQUFNLEVBQUU7UUFDWixLQUFLLENBQUM7WUFDRixPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNwQyxLQUFLLENBQUM7WUFDRixPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUMxRCxLQUFLLENBQUM7WUFDRixPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUMxRCxLQUFLLENBQUM7WUFDRixPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUMxRDtZQUNJLE9BQU8sRUFBRSxDQUFBO0tBQ2hCO0NBQ0osQ0FBQTtBQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7QUFFOUMsTUFBTSxTQUFTLEdBQW9CLEtBQUssQ0FBQyxFQUFFOztJQUN2QyxNQUFNLEVBQ0YsS0FBSyxFQUNMLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixRQUFRLEtBRVIsS0FBSyxFQURMLHdGQUNLLENBQUE7SUFDVCxNQUFNLFlBQVksR0FBRyxZQUFZLElBQUksb0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNsRCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFBO0lBRXhCLE9BQU8sQ0FDSCxvQkFBQyxjQUFLLG9CQUNFLElBQUksSUFDUixVQUFVLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDakUsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUN4QyxNQUFNLEVBQUUsZUFBZSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQ25ELElBQUksRUFBQyxNQUFNLEtBRVYsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDeEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUU7WUFDdEIsYUFBYTtZQUNiLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLE1BQU07U0FDakIsQ0FBQyxDQUNGLENBQ1gsQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLElBQUksR0FBRyxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBRXRDLFlBQUksQ0FBQyxZQUFZLHFCQUFRLFlBQVksQ0FBRSxDQUFBO0FBRXZDLDRCQUFtQixDQUFDLFlBQUksa0NBQ2pCLGdDQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUNwQyxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxPQUFPO1FBQ2QsWUFBWSxFQUFFLFlBQVk7UUFDMUIsT0FBTyxFQUFFLE1BQU07UUFDZixZQUFZLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FDcEIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQzFEO0tBQ0osRUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxRQUFRO1FBQ2YsWUFBWSxFQUFFLFlBQVksQ0FBQyxNQUFNO1FBQ2pDLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLENBQUM7UUFDTixjQUFjLEVBQUUsSUFBSTtLQUN2QixFQUNELE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLFFBQVE7UUFDZixHQUFHLEVBQUUsQ0FBQztRQUNOLEdBQUcsRUFBRSxvQkFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDakQsY0FBYyxFQUFFLElBQUk7S0FDdkIsRUFDRCxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxpQkFBaUI7UUFDbkMsS0FBSyxFQUFFLFNBQVM7S0FDbkIsSUFDSCxDQUFBIn0=

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    theme: "light",
    color: "background",
    shadow: 0,
    radius: 0,
    center: false,
};
const elevationShadow = (shadow, theme) => {
    window["__checkBudget__"]();
    switch (shadow) {
        case 1:
            return `${theme.shadow.smaller}`;
        case 2:
            return `${theme.shadow.small}, ${theme.shadow.medium}`;
        case 3:
            return `${theme.shadow.medium}, ${theme.shadow.large}`;
        case 4:
            return `${theme.shadow.large}, ${theme.shadow.larger}`;
        default:
            return "";
    }
};
const colors = Object.keys(framer_base_1.themes.light.color);
const InnerBase = props => {
    window["__checkBudget__"]();
    const { theme, themeContext, color, shadow, radius, children } = props, rest = __rest(props, ["theme", "themeContext", "color", "shadow", "radius", "children"]);
    const dynamicTheme = themeContext || framer_base_1.themes[theme];
    const [child] = children;
    return (React.createElement(framer_1.Frame, Object.assign({}, rest, { background: dynamicTheme.color[color] || dynamicTheme.color.white, radius: dynamicTheme.radius[radius] || 0, shadow: elevationShadow(shadow, dynamicTheme) || "", size: "100%" }), React.isValidElement(child) &&
        React.cloneElement(child, {
            // @ts-ignore
            width: "100%",
            height: "100%",
        })));
};
exports.Base = withHOC_1.default(InnerBase);
exports.Base.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.Base, Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), { color: {
        type: framer_1.ControlType.Enum,
        title: "Color",
        defaultValue: "background",
        options: colors,
        optionTitles: colors.map(color => color.charAt(0).toUpperCase() + color.slice(1)),
    }, shadow: {
        type: framer_1.ControlType.Number,
        title: "Shadow",
        defaultValue: defaultProps.shadow,
        min: 0,
        max: 4,
        displayStepper: true,
    }, radius: {
        type: framer_1.ControlType.Number,
        title: "Radius",
        min: 0,
        max: framer_base_1.themes[defaultProps.theme].radius.length - 1,
        displayStepper: true,
    }, children: {
        type: framer_1.ControlType.ComponentInstance,
        title: "Content",
    } }));
exports.__info__ = [{ "name": "Base", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/Layout/Card.tsx":
/*!******************************!*\
  !*** ./code/Layout/Card.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvTGF5b3V0L0NhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsNkNBU29CO0FBQ3BCLG1DQUF1RTtBQUN2RSwwREFJNEI7QUFFNUIsa0RBQThDO0FBQzlDLDhDQUFzQztBQWlCdEMsTUFBTSxZQUFZLEdBQVU7SUFDeEIsS0FBSyxFQUFFLE9BQU87SUFDZCxNQUFNLEVBQUUsU0FBUztJQUNqQixLQUFLLEVBQUUsRUFBRTtJQUNULE9BQU8sRUFBRSxLQUFLO0lBQ2QsS0FBSyxFQUFFLEVBQUU7SUFDVCxJQUFJLEVBQUUsRUFBRTtJQUNSLE1BQU0sRUFBRSxFQUFFO0lBQ1YsTUFBTSxFQUFFLEVBQUU7SUFDVixVQUFVLEVBQUUsS0FBSztJQUNqQixVQUFVLEVBQUUsT0FBTztJQUNuQixNQUFNLEVBQUUsQ0FBQztDQUNaLENBQUE7QUFFRCxNQUFNLFNBQVMsR0FBb0IsS0FBSyxDQUFDLEVBQUU7O0lBQ3ZDLE1BQU0sRUFDRixLQUFLLEVBQ0wsTUFBTSxFQUNOLEtBQUssRUFDTCxLQUFLLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxJQUFJLEVBQ0osTUFBTSxFQUNOLEtBQUssRUFDTCxZQUFZLEVBQ1osTUFBTSxFQUNOLE1BQU0sRUFDTixVQUFVLEVBQ1YsVUFBVSxLQUVWLEtBQUssRUFETCwwS0FDSyxDQUFBO0lBQ1QsTUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtJQUN0RCxNQUFNLFlBQVksR0FBRyxZQUFZLElBQUksb0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNsRCxNQUFNLGVBQWUsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQ3ZDLGFBQWEsSUFBSSxDQUNiLG9CQUFDLG9CQUFNLElBQ0gsS0FBSyxFQUFFLEtBQUssSUFBSSx3QkFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQ3BELElBQUksRUFBRSxhQUFhLEVBQ25CLE1BQU0sRUFBRSxNQUFNLEVBQ2QsS0FBSyxFQUFFO1lBQ0gsUUFBUSxFQUFFLFVBQVU7WUFDcEIsR0FBRyxFQUFFLHFCQUFxQjtZQUMxQixLQUFLLEVBQUUscUJBQXFCO1NBQy9CLEVBQ0QsS0FBSyxFQUFFLFlBQVksR0FDckIsQ0FDTCxDQUFBO0lBRUwsT0FBTyxDQUNILG9CQUFDLGtCQUFRLGtCQUNMLEtBQUssRUFBRSxLQUFLLEVBQ1osTUFBTSxFQUFFLE1BQU0sRUFDZCxLQUFLLEVBQUUsS0FBSyxJQUNSLElBQUksSUFDUixPQUFPLEVBQUUsS0FBSyxFQUNkLEtBQUssRUFBRSxZQUFZO1FBRW5CLG9CQUFDLGNBQUssSUFDRixVQUFVLEVBQUMsYUFBYSxFQUN4QixTQUFTLEVBQUMsVUFBVSxFQUNwQixHQUFHLEVBQUUsQ0FBQyxFQUNOLElBQUksRUFBQyxNQUFNO1lBRVYsS0FBSyxJQUFJLENBQ04sb0JBQUMsY0FBSyxJQUNGLFVBQVUsRUFBQyxhQUFhLEVBQ3hCLE1BQU0sRUFBQyxLQUFLLEVBQ1osUUFBUSxFQUFDLFFBQVEsRUFDakIsS0FBSyxFQUFDLEtBQUs7Z0JBRVgsb0JBQUMsYUFBSyxJQUNGLEtBQUssRUFBRSxLQUFLLEVBQ1osTUFBTSxFQUFFLE1BQU0sRUFDZCxPQUFPLEVBQUUsT0FBTyxHQUNsQjtnQkFDRCxlQUFlLENBQUMsTUFBTSxDQUFDLENBQ3BCLENBQ1g7WUFDQSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDdEQsb0JBQUMsY0FBSyxJQUNGLFVBQVUsRUFBQyxhQUFhLEVBQ3hCLE1BQU0sRUFBQyxNQUFNLEVBQ2IsS0FBSyxFQUFFO29CQUNILE9BQU8sRUFBRSxxQkFBcUI7aUJBQ2pDLEVBQ0QsS0FBSyxFQUFDLE1BQU07Z0JBRVgsS0FBSyxJQUFJLENBQ04sb0JBQUMscUJBQU8sSUFDSixLQUFLLEVBQUUsS0FBSyxFQUNaLEtBQUssRUFBRSxDQUFDLEVBQ1IsS0FBSyxFQUFFO3dCQUNILFlBQVksRUFDUixDQUFDLElBQUksSUFBSSxNQUFNLENBQUM7NEJBQ2hCLCtCQUErQjtxQkFDdEMsRUFDRCxLQUFLLEVBQUUsWUFBWSxJQUFJLG9CQUFNLENBQUMsS0FBSyxDQUFDLElBRW5DLEtBQUssQ0FDQSxDQUNiO2dCQUNBLElBQUksSUFBSSxDQUNMLG9CQUFDLGtCQUFJLElBQ0QsS0FBSyxFQUFFLEtBQUssRUFDWixLQUFLLEVBQUUsWUFBWSxJQUFJLG9CQUFNLENBQUMsS0FBSyxDQUFDLElBRW5DLElBQUksQ0FDRixDQUNWO2dCQUNBLE1BQU0sSUFBSSxDQUNQLG9CQUFDLGtCQUFJLElBQ0QsS0FBSyxFQUFFLEtBQUssRUFDWixLQUFLLFFBQ0wsS0FBSyxFQUFFO3dCQUNILE9BQU8sRUFBRSxHQUFHO3dCQUNaLFNBQVMsRUFDTCxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7NEJBQ2YsK0JBQStCO3FCQUN0QyxFQUNELEtBQUssRUFBRSxZQUFZLElBQUksb0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFFbkMsTUFBTSxDQUNKLENBQ1Y7Z0JBQ0EsQ0FBQyxLQUFLLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUM5QixDQUNYLENBQ0csQ0FDRCxDQUNkLENBQUE7Q0FDSixDQUFBO0FBRVksUUFBQSxJQUFJLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUV0QyxZQUFJLENBQUMsWUFBWSxxQkFBUSxZQUFZLENBQUUsQ0FBQTtBQUV2Qyw0QkFBbUIsQ0FBQyxZQUFJLDRFQUNqQixnQ0FBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FDakMsaUNBQWMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQ3RDLEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUs7UUFDdkIsS0FBSyxFQUFFLE9BQU87S0FDakIsRUFDRCxPQUFPLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFlBQVksRUFBRSxTQUFTO1FBQ3ZCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLFlBQVksRUFBRSxZQUFZLENBQUMsT0FBTztLQUNyQyxFQUNELFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLFFBQVE7UUFDZixZQUFZLEVBQUUsS0FBSztRQUNuQixZQUFZLEVBQUUsTUFBTTtRQUNwQixhQUFhLEVBQUUsTUFBTTtLQUN4QixLQUNFLCtCQUFZLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxLQUMzRSxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxPQUFPO1FBQ2QsWUFBWSxFQUFFLFlBQVksQ0FBQyxLQUFLO0tBQ25DLEVBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsTUFBTTtRQUNiLFlBQVksRUFBRSxZQUFZLENBQUMsSUFBSTtLQUNsQyxFQUNELE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLFFBQVE7UUFDZixZQUFZLEVBQUUsWUFBWSxDQUFDLE1BQU07S0FDcEMsRUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxRQUFRO1FBQ2YsWUFBWSxFQUFFLFlBQVksQ0FBQyxNQUFNO1FBQ2pDLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLENBQUM7UUFDTixjQUFjLEVBQUUsSUFBSTtLQUN2QixJQUNILENBQUEifQ==

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const Image_1 = __webpack_require__(/*! ../Miscellaneous/Image */ "./code/Miscellaneous/Image.tsx");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    theme: "light",
    intent: "primary",
    image: "",
    overlay: false,
    title: "",
    body: "",
    footer: "",
    toggle: "",
    withToggle: false,
    iconToggle: "Heart",
    shadow: 2,
};
const InnerCard = props => {
    window["__checkBudget__"]();
    const { width, height, color, image, overlay, title, body, footer, theme, themeContext, intent, toggle, withToggle, iconToggle } = props, rest = __rest(props, ["width", "height", "color", "image", "overlay", "title", "body", "footer", "theme", "themeContext", "intent", "toggle", "withToggle", "iconToggle"]);
    const dynamicToggle = withToggle ? iconToggle : toggle;
    const dynamicTheme = themeContext || framer_base_1.themes[theme];
    const toggleComponent = (intent) => dynamicToggle && (React.createElement(framer_base_1.Toggle, { color: image && framer_base_1.parseColor(dynamicTheme.color.white), icon: dynamicToggle, intent: intent, style: {
            position: "absolute",
            top: "var(--card-padding)",
            right: "var(--card-padding)",
        }, theme: dynamicTheme }));
    return (React.createElement(framer_base_1.Card, Object.assign({ color: color, height: height, width: width }, rest, { padding: false, theme: dynamicTheme }),
        React.createElement(framer_1.Stack, { background: "transparent", direction: "vertical", gap: 0, size: "100%" },
            image && (React.createElement(framer_1.Frame, { background: "transparent", height: "1fr", overflow: "hidden", width: "1fr" },
                React.createElement(Image_1.Image, { image: image, intent: intent, overlay: overlay }),
                toggleComponent("text"))),
            (title || body || ((withToggle || toggle) && !image)) && (React.createElement(framer_1.Frame, { background: "transparent", height: "auto", style: {
                    padding: "var(--card-padding)",
                }, width: "100%" },
                title && (React.createElement(framer_base_1.Heading, { color: color, level: 4, style: {
                        marginBottom: (body || footer) &&
                            "calc(var(--card-padding) / 2)",
                    }, theme: themeContext || framer_base_1.themes[theme] }, title)),
                body && (React.createElement(framer_base_1.Text, { color: color, theme: themeContext || framer_base_1.themes[theme] }, body)),
                footer && (React.createElement(framer_base_1.Text, { color: color, small: true, style: {
                        opacity: 0.5,
                        marginTop: (body || title) &&
                            "calc(var(--card-padding) / 2)",
                    }, theme: themeContext || framer_base_1.themes[theme] }, footer)),
                !image && toggleComponent(intent))))));
};
exports.Card = withHOC_1.default(InnerCard);
exports.Card.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.Card, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), propertyControls_1.intentControls(defaultProps.intent)), { image: {
        type: framer_1.ControlType.Image,
        title: "Image",
    }, overlay: {
        type: framer_1.ControlType.Boolean,
        title: "Overlay",
        enabledTitle: "Visible",
        disabledTitle: "Hidden",
        defaultValue: defaultProps.overlay,
    }, withToggle: {
        type: framer_1.ControlType.Boolean,
        title: "Toggle",
        defaultValue: false,
        enabledTitle: "Icon",
        disabledTitle: "None",
    } }), propertyControls_1.iconControls(defaultProps.iconToggle, false, "withToggle", "iconToggle")), { title: {
        type: framer_1.ControlType.String,
        title: "Title",
        defaultValue: defaultProps.title,
    }, body: {
        type: framer_1.ControlType.String,
        title: "Body",
        defaultValue: defaultProps.body,
    }, footer: {
        type: framer_1.ControlType.String,
        title: "Footer",
        defaultValue: defaultProps.footer,
    }, shadow: {
        type: framer_1.ControlType.Number,
        title: "Shadow",
        defaultValue: defaultProps.shadow,
        min: 0,
        max: 4,
        displayStepper: true,
    } }));
exports.__info__ = [{ "name": "Card", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Layout/List.tsx":
/*!******************************!*\
  !*** ./code/Layout/List.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvTGF5b3V0L0xpc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsNkNBQW9DO0FBQ3BDLG9DQUEyQztBQUMzQyxtQ0FPZTtBQUNmLDhDQUFzQztBQWlCdEMsTUFBTSxZQUFZLEdBQVU7SUFDeEIsT0FBTyxFQUFFLEVBQUU7SUFDWCxHQUFHLEVBQUUsQ0FBQztJQUNOLE1BQU0sRUFBRSxJQUFJO0lBQ1osT0FBTyxFQUFFLENBQUM7SUFDVixNQUFNLEVBQUUsS0FBSztDQUNoQixDQUFBO0FBRUQsTUFBTSxTQUFTLEdBQW9CLEtBQUssQ0FBQyxFQUFFOztJQUN2QyxNQUFNLEVBQ0YsT0FBTyxFQUNQLEdBQUcsRUFDSCxNQUFNLEVBQ04sY0FBYyxFQUNkLE9BQU8sRUFDUCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixhQUFhLEtBRWIsS0FBSyxFQURMLDZJQUNLLENBQUE7SUFFVCxNQUFNLFFBQVEsR0FBRyxjQUFjO1FBQzNCLENBQUMsQ0FBQztZQUNJLFlBQVk7WUFDWixhQUFhO1lBQ2IsV0FBVztZQUNYLFVBQVU7U0FDYjtRQUNILENBQUMsQ0FBQyxjQUFjLEtBQUssU0FBUztZQUM5QixDQUFDLENBQUM7Z0JBQ0ksT0FBTztnQkFDUCxZQUFZLEVBQUUsWUFBWSxJQUFJLE9BQU87Z0JBQ3JDLGFBQWEsRUFBRSxhQUFhLElBQUksT0FBTztnQkFDdkMsV0FBVyxFQUFFLFdBQVcsSUFBSSxPQUFPO2dCQUNuQyxVQUFVLEVBQUUsVUFBVSxJQUFJLE9BQU87YUFDcEM7WUFDSCxDQUFDLENBQUM7Z0JBQ0ksT0FBTzthQUNWLENBQUE7SUFFUCxJQUNJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQ2pCLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUsscUJBQVksQ0FBQyxNQUFNLENBQUM7UUFDbkQscUJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxxQkFBWSxDQUFDLFNBQVMsRUFDbkQ7UUFDRSxPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsd0JBQWdCLEVBQUU7WUFDekMsS0FBSyxFQUFFLG9CQUFNLENBQUMsS0FBSztZQUNuQixLQUFLLEVBQUUsVUFBVTtZQUNqQixLQUFLLEVBQUUsNENBQTRDO1NBQ3RELENBQUMsQ0FBQTtLQUNMO0lBRUQsT0FBTyxDQUNILG9CQUFDLGVBQU0sb0JBQUssSUFBSSxJQUFFLFdBQVcsRUFBRSxNQUFNO1FBQ2pDLG9CQUFDLGNBQUssa0JBQ0YsVUFBVSxFQUFDLGFBQWEsRUFDeEIsU0FBUyxFQUFDLFVBQVUsRUFDcEIsR0FBRyxFQUFFLEdBQUcsRUFDUixNQUFNLEVBQUMsTUFBTSxFQUNiLEtBQUssRUFBQyxNQUFNLElBQ1IsUUFBUSxHQUVYLE9BQU8sQ0FDSixDQUNILENBQ1osQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLElBQUksR0FBRyxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBRXRDLFlBQUksQ0FBQyxZQUFZLHFCQUFRLFlBQVksQ0FBRSxDQUFBO0FBRXZDLDRCQUFtQixDQUFDLFlBQUksRUFBRTtJQUN0QixHQUFHLEVBQUU7UUFDRCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxLQUFLO1FBQ1osY0FBYyxFQUFFLElBQUk7UUFDcEIsWUFBWSxFQUFFLFlBQVksQ0FBQyxHQUFHO1FBQzlCLEdBQUcsRUFBRSxDQUFDO0tBQ1Q7SUFDRCxPQUFPLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxXQUFXO1FBQzdCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFNBQVMsRUFBRSxnQkFBZ0I7UUFDM0IsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztRQUN2QyxTQUFTLEVBQUU7WUFDUCxZQUFZO1lBQ1osY0FBYztZQUNkLGVBQWU7WUFDZixhQUFhO1NBQ2hCO1FBQ0QsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQ2pDLFlBQVksRUFBRSxZQUFZLENBQUMsT0FBTztRQUNsQyxHQUFHLEVBQUUsQ0FBQztLQUNUO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztRQUN2QixlQUFlLEVBQUU7WUFDYixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxpQkFBaUI7U0FDdEM7UUFDRCxZQUFZLEVBQUUsWUFBWSxDQUFDLE9BQU87S0FDckM7Q0FDSixDQUFDLENBQUEifQ==

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const utils_1 = __webpack_require__(/*! ../utils */ "./code/utils/index.ts");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    content: [],
    gap: 8,
    scroll: true,
    padding: 0,
    center: false,
};
const InnerList = props => {
    window["__checkBudget__"]();
    const { content, gap, scroll, paddingPerSide, padding, paddingTop, paddingLeft, paddingRight, paddingBottom } = props, rest = __rest(props, ["content", "gap", "scroll", "paddingPerSide", "padding", "paddingTop", "paddingLeft", "paddingRight", "paddingBottom"]);
    const paddings = paddingPerSide
        ? {
            paddingRight,
            paddingBottom,
            paddingLeft,
            paddingTop,
        }
        : paddingPerSide === undefined
            ? {
                padding,
                paddingRight: paddingRight || padding,
                paddingBottom: paddingBottom || padding,
                paddingLeft: paddingLeft || padding,
                paddingTop: paddingTop || padding,
            }
            : {
                padding,
            };
    if ((content.length === 0 &&
        framer_1.RenderTarget.current() === framer_1.RenderTarget.canvas) ||
        framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(utils_1.placeholderState, {
            theme: framer_base_1.themes.light,
            title: "No items",
            label: "Add items by connecting them on the Canvas",
        });
    }
    return (React.createElement(framer_1.Scroll, Object.assign({}, rest, { dragEnabled: scroll }),
        React.createElement(framer_1.Stack, Object.assign({ background: "transparent", direction: "vertical", gap: gap, height: "auto", width: "100%" }, paddings), content)));
};
exports.List = withHOC_1.default(InnerList);
exports.List.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.List, {
    gap: {
        type: framer_1.ControlType.Number,
        title: "Gap",
        displayStepper: true,
        defaultValue: defaultProps.gap,
        min: 0,
    },
    padding: {
        type: framer_1.ControlType.FusedNumber,
        title: "Padding",
        toggleKey: "paddingPerSide",
        toggleTitles: ["All Sides", "Per Side"],
        valueKeys: [
            "paddingTop",
            "paddingRight",
            "paddingBottom",
            "paddingLeft",
        ],
        valueLabels: ["T", "R", "B", "L"],
        defaultValue: defaultProps.padding,
        min: 0,
    },
    content: {
        title: "Content",
        type: framer_1.ControlType.Array,
        propertyControl: {
            type: framer_1.ControlType.ComponentInstance,
        },
        defaultValue: defaultProps.content,
    },
});
exports.__info__ = [{ "name": "List", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Miscellaneous/Icon.tsx":
/*!*************************************!*\
  !*** ./code/Miscellaneous/Icon.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvTWlzY2VsbGFuZW91cy9JY29uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLDZDQU1vQjtBQUNwQixtQ0FBeUQ7QUFDekQsMERBSzRCO0FBRTVCLDhDQUFzQztBQWtCdEMsTUFBTSxZQUFZLEdBQVU7SUFDeEIsS0FBSyxFQUFFLE9BQU87SUFDZCxNQUFNLEVBQUUsU0FBUztJQUNqQixPQUFPLEVBQUUsU0FBUztJQUNsQixJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLElBQUksRUFBRSxFQUFFO0lBQ1IsTUFBTSxFQUFFLElBQUk7Q0FDZixDQUFBO0FBRUQsTUFBTSxTQUFTLEdBQW9CLEtBQUssQ0FBQyxFQUFFOztJQUN2QyxNQUFNLEVBQ0YsS0FBSyxFQUNMLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixJQUFJLEVBQ0osTUFBTSxLQUVOLEtBQUssRUFETCxrR0FDSyxDQUFBO0lBQ1QsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyx3QkFBYyxDQUFDLENBQUMsQ0FBQyxrQkFBUSxDQUFBO0lBRXRELE9BQU8sQ0FDSCxvQkFBQyxXQUFXLG9CQUNKLElBQUksSUFDUixJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUNqRCxLQUFLLEVBQUUsWUFBWSxJQUFJLG9CQUFNLENBQUMsS0FBSyxDQUFDLElBQ3RDLENBQ0wsQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLElBQUksR0FBRyxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBRXRDLFlBQUksQ0FBQyxZQUFZLG1DQUNWLFlBQVksS0FDZixNQUFNLEVBQUUsWUFBWSxDQUFDLElBQUksRUFDekIsS0FBSyxFQUFFLFlBQVksQ0FBQyxJQUFJLEdBQzNCLENBQUE7QUFFRCw0QkFBbUIsQ0FBQyxZQUFJLDRFQUNqQixnQ0FBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FDakMsaUNBQWMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQ25DLGtDQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQ3hELFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLE1BQU07UUFDYixZQUFZLEVBQUUsWUFBWSxDQUFDLFVBQVU7UUFDckMsWUFBWSxFQUFFLFFBQVE7UUFDdEIsYUFBYSxFQUFFLFFBQVE7S0FDMUIsRUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxHQUFHO1FBQ1YsWUFBWSxFQUFFLFlBQVksQ0FBQyxJQUFJO1FBQy9CLEdBQUcsRUFBRSxDQUFDO1FBQ04sTUFBTSxFQUFFLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVTtLQUM3QyxFQUNELE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLFFBQVE7UUFDZixZQUFZLEVBQUUsWUFBWSxDQUFDLE1BQU07S0FDcEMsS0FDRSwrQkFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFDcEMsQ0FBQSJ9

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    theme: "light",
    intent: "primary",
    pattern: "primary",
    icon: "Framer",
    canvasSize: true,
    size: 24,
    circle: true,
};
const InnerIcon = props => {
    window["__checkBudget__"]();
    const { theme, themeContext, canvasSize, width, height, size, circle } = props, rest = __rest(props, ["theme", "themeContext", "canvasSize", "width", "height", "size", "circle"]);
    const IconWrapper = circle ? framer_base_1.CircleIcon : framer_base_1.Icon;
    return (React.createElement(IconWrapper, Object.assign({}, rest, { size: canvasSize ? Math.min(width, height) : size, theme: themeContext || framer_base_1.themes[theme] })));
};
exports.Icon = withHOC_1.default(InnerIcon);
exports.Icon.defaultProps = Object.assign(Object.assign({}, defaultProps), { height: defaultProps.size, width: defaultProps.size });
framer_1.addPropertyControls(exports.Icon, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), propertyControls_1.intentControls(defaultProps.intent)), propertyControls_1.patternControls(defaultProps.pattern, true, "circle")), { canvasSize: {
        type: framer_1.ControlType.Boolean,
        title: "Size",
        defaultValue: defaultProps.canvasSize,
        enabledTitle: "Canvas",
        disabledTitle: "Manual",
    }, size: {
        type: framer_1.ControlType.Number,
        title: " ",
        defaultValue: defaultProps.size,
        min: 0,
        hidden: (props) => props.canvasSize,
    }, circle: {
        type: framer_1.ControlType.Boolean,
        title: "Circle",
        defaultValue: defaultProps.circle,
    } }), propertyControls_1.iconControls(defaultProps.icon)));
exports.__info__ = [{ "name": "Icon", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Miscellaneous/Image.tsx":
/*!**************************************!*\
  !*** ./code/Miscellaneous/Image.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL01pc2NlbGxhbmVvdXMvSW1hZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFFOUIsNkNBQW9DO0FBQ3BDLDBEQUFtRTtBQUNuRSxvQ0FBMkM7QUFDM0MsbUNBTWU7QUFDZiw4Q0FBc0M7QUFhdEMsTUFBTSxZQUFZLEdBQVU7SUFDeEIsS0FBSyxFQUFFLE9BQU87SUFDZCxNQUFNLEVBQUUsU0FBUztJQUNqQixPQUFPLEVBQUUsS0FBSztJQUNkLE1BQU0sRUFBRSxLQUFLO0NBQ2hCLENBQUE7QUFFRCxNQUFNLFVBQVUsR0FBb0IsS0FBSyxDQUFDLEVBQUU7O0lBQ3hDLE1BQU0sRUFDRixLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsT0FBTyxFQUNQLEtBQUssS0FFTCxLQUFLLEVBREwsc0ZBQ0ssQ0FBQTtJQUNULE1BQU0sWUFBWSxHQUFHLFlBQVksSUFBSSxvQkFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWxELE9BQU8sQ0FDSCxvQkFBQyxjQUFLLGtCQUFDLFVBQVUsRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLE1BQU0sSUFBSyxJQUFJLEdBQy9DLENBQUMsS0FBSztRQUNQLENBQUMscUJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxxQkFBWSxDQUFDLE1BQU07WUFDM0MscUJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxxQkFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNyRCxLQUFLLENBQUMsYUFBYSxDQUFDLHdCQUFnQixFQUFFO1FBQ2xDLEtBQUssRUFBRSxZQUFZO1FBQ25CLEtBQUssRUFBRSxVQUFVO1FBQ2pCLEtBQUssRUFBRSx5Q0FBeUM7S0FDbkQsQ0FBQyxDQUNMLENBQUMsQ0FBQyxDQUFDLENBQ0E7UUFDSSxvQkFBQyxjQUFLLElBQ0YsS0FBSyxFQUFFLEtBQUssRUFDWixJQUFJLEVBQUMsTUFBTSxFQUNYLEtBQUssRUFBRTtnQkFDSCxlQUFlLEVBQUUsYUFBYTtnQkFDOUIsY0FBYyxFQUFFLE9BQU87Z0JBQ3ZCLGtCQUFrQixFQUFFLFFBQVE7Z0JBQzVCLFlBQVksRUFDUixPQUFPLElBQUksK0JBQStCO2FBQ2pELEdBQ0g7UUFDRCxPQUFPLElBQUksQ0FDUixvQkFBQyxjQUFLLElBQ0YsVUFBVSxFQUFFLEtBQUssSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUMvQyxPQUFPLEVBQUUsR0FBRyxFQUNaLElBQUksRUFBQyxNQUFNLEVBQ1gsS0FBSyxFQUFFO2dCQUNILFlBQVksRUFBRSxTQUFTO2FBQzFCLEdBQ0gsQ0FDTCxDQUNGLENBQ04sQ0FDRyxDQUNYLENBQUE7Q0FDSixDQUFBO0FBRVksUUFBQSxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUV4QyxhQUFLLENBQUMsWUFBWSxxQkFDWCxZQUFZLENBQ2xCLENBQUE7QUFFRCw0QkFBbUIsQ0FBQyxhQUFLLGdEQUNsQixnQ0FBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUNsRCxpQ0FBYyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUN2RCxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLEtBQUssRUFBRSxPQUFPO0tBQ2pCLEVBQ0QsT0FBTyxFQUFFO1FBQ0wsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixLQUFLLEVBQUUsU0FBUztRQUNoQixZQUFZLEVBQUUsU0FBUztRQUN2QixhQUFhLEVBQUUsUUFBUTtRQUN2QixZQUFZLEVBQUUsWUFBWSxDQUFDLE9BQU87S0FDckMsSUFDSCxDQUFBIn0=

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./code/utils/index.ts");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    theme: "light",
    intent: "primary",
    overlay: false,
    center: false,
};
const InnerImage = props => {
    window["__checkBudget__"]();
    const { theme, themeContext, intent, image, overlay, color } = props, rest = __rest(props, ["theme", "themeContext", "intent", "image", "overlay", "color"]);
    const dynamicTheme = themeContext || framer_base_1.themes[theme];
    return (React.createElement(framer_1.Frame, Object.assign({ background: "transparent", size: "100%" }, rest), !image &&
        (framer_1.RenderTarget.current() === framer_1.RenderTarget.canvas ||
            framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) ? (React.createElement(utils_1.placeholderState, {
        theme: dynamicTheme,
        title: "No image",
        label: "Choose an image in the Properties panel",
    })) : (React.createElement(React.Fragment, null,
        React.createElement(framer_1.Frame, { image: image, size: "100%", style: {
                backgroundColor: "transparent",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitFilter: overlay && "contrast(77%) grayscale(100%)",
            } }),
        overlay && (React.createElement(framer_1.Frame, { background: color || dynamicTheme.color[intent], opacity: 0.5, size: "100%", style: {
                mixBlendMode: "overlay",
            } }))))));
};
exports.Image = withHOC_1.default(InnerImage);
exports.Image.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.Image, Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme, true, "overlay")), propertyControls_1.intentControls(defaultProps.intent, true, "overlay")), { image: {
        type: framer_1.ControlType.Image,
        title: "Image",
    }, overlay: {
        type: framer_1.ControlType.Boolean,
        title: "Overlay",
        enabledTitle: "Visible",
        disabledTitle: "Hidden",
        defaultValue: defaultProps.overlay,
    } }));
exports.__info__ = [{ "name": "Image", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Miscellaneous/Label.tsx":
/*!**************************************!*\
  !*** ./code/Miscellaneous/Label.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFiZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL01pc2NlbGxhbmVvdXMvTGFiZWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsNkNBQW9FO0FBQ3BFLG1DQUF5RDtBQUN6RCwwREFNNEI7QUFDNUIsb0NBQWtEO0FBQ2xELDhDQUFzQztBQWN0QyxNQUFNLFlBQVksR0FBVTtJQUN4QixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUUsT0FBTztJQUNiLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE1BQU0sRUFBRSxNQUFNO0NBQ2pCLENBQUE7QUFFRCxNQUFNLFVBQVUsR0FBb0IsS0FBSyxDQUFDLEVBQUU7O0lBQ3hDLE1BQU0sRUFDRixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixJQUFJLEVBQ0osa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLEtBQUssRUFDTCxZQUFZLEtBRVosS0FBSyxFQURMLHdLQUNLLENBQUE7SUFDVCxNQUFNLGdCQUFnQixHQUFHLG9CQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUU1RCxPQUFPLENBQ0gsb0JBQUMsbUJBQVMsa0JBQ04sWUFBWSxFQUFFLGdCQUFnQixJQUFJLGdCQUFnQixFQUNsRCxjQUFjLEVBQUUsa0JBQWtCLElBQUksa0JBQWtCLElBQ3BELElBQUksSUFDUixLQUFLLEVBQUUsWUFBWSxJQUFJLG9CQUFNLENBQUMsS0FBSyxDQUFDLElBQ2hDLGdCQUFnQixHQUVuQixJQUFJLENBQ0csQ0FDZixDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsS0FBSyxHQUFHLGlCQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7QUFFeEMsYUFBSyxDQUFDLFlBQVkscUJBQ1gsWUFBWSxDQUNsQixDQUFBO0FBRUQsNEJBQW1CLENBQUMsYUFBSywwRkFDbEIsZ0NBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQ2pDLGlDQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUNuQyxrQ0FBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FDckMsaUNBQWMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQ25DLG9DQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUM3QixJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxNQUFNO1FBQ2IsWUFBWSxFQUFFLFlBQVksQ0FBQyxJQUFJO0tBQ2xDLElBQ0gsQ0FBQSJ9

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./code/utils/index.ts");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    width: 120,
    height: 30,
    theme: "light",
    text: "Label",
    intent: "primary",
    pattern: "primary",
    resize: "none",
};
const InnerLabel = props => {
    window["__checkBudget__"]();
    const { width, height, resize, text, withStartDecorator, iconStartDecorator, withEndDecorator, iconEndDecorator, theme, themeContext } = props, rest = __rest(props, ["width", "height", "resize", "text", "withStartDecorator", "iconStartDecorator", "withEndDecorator", "iconEndDecorator", "theme", "themeContext"]);
    const resizeDimensions = utils_1.resizeLayout(resize, width, height);
    return (React.createElement(framer_base_1.Label, Object.assign({ endDecorator: withEndDecorator && iconEndDecorator, startDecorator: withStartDecorator && iconStartDecorator }, rest, { theme: themeContext || framer_base_1.themes[theme] }, resizeDimensions), text));
};
exports.Label = withHOC_1.default(InnerLabel);
exports.Label.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.Label, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), propertyControls_1.intentControls(defaultProps.intent)), propertyControls_1.patternControls(defaultProps.pattern)), propertyControls_1.resizeControls(defaultProps.resize)), propertyControls_1.decoratorControls("Globe")), { text: {
        type: framer_1.ControlType.String,
        title: "Text",
        defaultValue: defaultProps.text,
    } }));
exports.__info__ = [{ "name": "Label", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Miscellaneous/Progress.tsx":
/*!*****************************************!*\
  !*** ./code/Miscellaneous/Progress.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL01pc2NlbGxhbmVvdXMvUHJvZ3Jlc3MudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsNkNBQTZFO0FBQzdFLG1DQUF5RDtBQUN6RCwwREFJNEI7QUFDNUIsb0NBQWtEO0FBQ2xELDhDQUFzQztBQVV0QyxNQUFNLFlBQVksR0FBVTtJQUN4QixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxDQUFDO0lBQ1QsS0FBSyxFQUFFLE9BQU87SUFDZCxNQUFNLEVBQUUsU0FBUztJQUNqQixLQUFLLEVBQUUsRUFBRTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsTUFBTSxFQUFFLE1BQU07Q0FDakIsQ0FBQTtBQUVELE1BQU0sYUFBYSxHQUFvQixLQUFLLENBQUMsRUFBRTs7SUFDM0MsTUFBTSxFQUNGLEtBQUssRUFDTCxZQUFZLEVBQ1osS0FBSyxFQUNMLEdBQUcsRUFDSCxNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sS0FFTixLQUFLLEVBREwsNEZBQ0ssQ0FBQTtJQUNULE1BQU0sZ0JBQWdCLEdBQUcsb0JBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBRTVELE9BQU8sQ0FDSCxvQkFBQyxzQkFBWSxvQkFDTCxJQUFJLElBQ1IsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFDaEIsS0FBSyxFQUFFLFlBQVksSUFBSSxvQkFBTSxDQUFDLEtBQUssQ0FBQyxFQUNwQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUNoQixnQkFBZ0IsRUFDdEIsQ0FDTCxDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsUUFBUSxHQUFHLGlCQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7QUFFOUMsZ0JBQVEsQ0FBQyxZQUFZLHFCQUNkLFlBQVksQ0FDbEIsQ0FBQTtBQUVELDRCQUFtQixDQUFDLGdCQUFRLDhEQUNyQixnQ0FBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FDakMsaUNBQWMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQ3RDLEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLE9BQU87UUFDZCxHQUFHLEVBQUUsQ0FBQztRQUNOLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRztRQUNyQixZQUFZLEVBQUUsWUFBWSxDQUFDLEtBQUs7S0FDbkMsS0FDRSxpQ0FBYyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFDeEMsQ0FBQSJ9

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./code/utils/index.ts");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    width: 320,
    height: 6,
    theme: "light",
    intent: "primary",
    value: 50,
    max: 100,
    resize: "none",
};
const InnerProgress = props => {
    window["__checkBudget__"]();
    const { theme, themeContext, value, max, resize, width, height } = props, rest = __rest(props, ["theme", "themeContext", "value", "max", "resize", "width", "height"]);
    const resizeDimensions = utils_1.resizeLayout(resize, width, height);
    return (React.createElement(framer_base_1.Progress, Object.assign({}, rest, { max: Number(max), theme: themeContext || framer_base_1.themes[theme], value: Number(value) }, resizeDimensions)));
};
exports.Progress = withHOC_1.default(InnerProgress);
exports.Progress.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.Progress, Object.assign(Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), propertyControls_1.intentControls(defaultProps.intent)), { value: {
        type: framer_1.ControlType.Number,
        title: "Value",
        min: 0,
        max: defaultProps.max,
        defaultValue: defaultProps.value,
    } }), propertyControls_1.resizeControls(defaultProps.resize)));
exports.__info__ = [{ "name": "Progress", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Miscellaneous/Spinner.tsx":
/*!****************************************!*\
  !*** ./code/Miscellaneous/Spinner.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Bpbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvTWlzY2VsbGFuZW91cy9TcGlubmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLDZDQUEwRTtBQUMxRSwwREFBbUU7QUFDbkUsbUNBQXVFO0FBRXZFLDhDQUFzQztBQVl0QyxNQUFNLFlBQVksR0FBVTtJQUN4QixLQUFLLEVBQUUsT0FBTztJQUNkLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLElBQUksRUFBRSxFQUFFO0lBQ1IsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsRUFBRTtDQUNiLENBQUE7QUFFRCxNQUFNLFlBQVksR0FBb0IsS0FBSyxDQUFDLEVBQUU7O0lBQzFDLE1BQU0sRUFDRixLQUFLLEVBQ0wsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLElBQUksS0FFSixLQUFLLEVBREwsd0ZBQ0ssQ0FBQTtJQUVULE9BQU8sQ0FDSCxvQkFBQyxxQkFBVyxrQkFDUixPQUFPLEVBQUUscUJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxxQkFBWSxDQUFDLFNBQVMsSUFDdEQsSUFBSSxJQUNSLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ2pELEtBQUssRUFBRSxZQUFZLElBQUksb0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFDdEMsQ0FDTCxDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsT0FBTyxHQUFHLGlCQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7QUFFNUMsZUFBTyxDQUFDLFlBQVksbUNBQ2IsWUFBWSxLQUNmLE1BQU0sRUFBRSxZQUFZLENBQUMsSUFBSSxFQUN6QixLQUFLLEVBQUUsWUFBWSxDQUFDLElBQUksR0FDM0IsQ0FBQTtBQUVELDRCQUFtQixDQUFDLGVBQU8sZ0RBQ3BCLGdDQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUNqQyxpQ0FBYyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FDdEMsVUFBVSxFQUFFO1FBQ1IsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixLQUFLLEVBQUUsTUFBTTtRQUNiLFlBQVksRUFBRSxZQUFZLENBQUMsVUFBVTtRQUNyQyxZQUFZLEVBQUUsUUFBUTtRQUN0QixhQUFhLEVBQUUsUUFBUTtLQUMxQixFQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLEdBQUc7UUFDVixZQUFZLEVBQUUsWUFBWSxDQUFDLElBQUk7UUFDL0IsR0FBRyxFQUFFLENBQUM7UUFDTixNQUFNLEVBQUUsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVO0tBQzdDLElBQ0gsQ0FBQSJ9

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    theme: "light",
    intent: "primary",
    canvasSize: true,
    size: 24,
    width: 24,
    height: 24,
};
const InnerSpinner = props => {
    window["__checkBudget__"]();
    const { theme, themeContext, canvasSize, width, height, size } = props, rest = __rest(props, ["theme", "themeContext", "canvasSize", "width", "height", "size"]);
    return (React.createElement(framer_base_1.Spinner, Object.assign({ animate: framer_1.RenderTarget.current() !== framer_1.RenderTarget.thumbnail }, rest, { size: canvasSize ? Math.min(width, height) : size, theme: themeContext || framer_base_1.themes[theme] })));
};
exports.Spinner = withHOC_1.default(InnerSpinner);
exports.Spinner.defaultProps = Object.assign(Object.assign({}, defaultProps), { height: defaultProps.size, width: defaultProps.size });
framer_1.addPropertyControls(exports.Spinner, Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), propertyControls_1.intentControls(defaultProps.intent)), { canvasSize: {
        type: framer_1.ControlType.Boolean,
        title: "Size",
        defaultValue: defaultProps.canvasSize,
        enabledTitle: "Canvas",
        disabledTitle: "Manual",
    }, size: {
        type: framer_1.ControlType.Number,
        title: " ",
        defaultValue: defaultProps.size,
        min: 0,
        hidden: (props) => props.canvasSize,
    } }));
exports.__info__ = [{ "name": "Spinner", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Miscellaneous/Tooltip.tsx":
/*!****************************************!*\
  !*** ./code/Miscellaneous/Tooltip.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvTWlzY2VsbGFuZW91cy9Ub29sdGlwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLDZDQUEwRTtBQUMxRSxtQ0FBeUQ7QUFDekQsMERBQW1FO0FBRW5FLDhDQUFzQztBQVN0QyxNQUFNLFlBQVksR0FBVTtJQUN4QixLQUFLLEVBQUUsT0FBTztJQUNkLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLElBQUksRUFBRSxTQUFTO0lBQ2YsT0FBTyxFQUFFLFNBQVM7SUFDbEIsU0FBUyxFQUFFLEtBQUs7Q0FDbkIsQ0FBQTtBQUVELE1BQU0sWUFBWSxHQUFvQixLQUFLLENBQUMsRUFBRTs7SUFDMUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsWUFBWSxLQUFjLEtBQUssRUFBakIsdURBQWlCLENBQUE7SUFFcEQsT0FBTyxDQUNILG9CQUFDLHFCQUFXLGtCQUFDLEtBQUssRUFBRSxZQUFZLElBQUksb0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFBTSxJQUFJLEdBQ3RELElBQUksQ0FDSyxDQUNqQixDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsT0FBTyxHQUFHLGlCQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7QUFFNUMsZUFBTyxDQUFDLFlBQVkscUJBQ2IsWUFBWSxDQUNsQixDQUFBO0FBRUQsNEJBQW1CLENBQUMsZUFBTyxnREFDcEIsZ0NBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQ2pDLGlDQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUN0QyxTQUFTLEVBQUU7UUFDUCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxhQUFhO1FBQy9CLEtBQUssRUFBRSxXQUFXO1FBQ2xCLFlBQVksRUFBRSxZQUFZLENBQUMsU0FBUztRQUNwQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7UUFDM0MsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0tBQ3JDLEVBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsTUFBTTtRQUNiLFlBQVksRUFBRSxZQUFZLENBQUMsSUFBSTtLQUNsQyxFQUNELE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsWUFBWSxFQUFFLFlBQVksQ0FBQyxPQUFPO0tBQ3JDLElBQ0gsQ0FBQSJ9

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    theme: "light",
    intent: "primary",
    text: "Tooltip",
    tooltip: "Tooltip",
    direction: "top",
};
const InnerTooltip = props => {
    window["__checkBudget__"]();
    const { text, theme, themeContext } = props, rest = __rest(props, ["text", "theme", "themeContext"]);
    return (React.createElement(framer_base_1.Tooltip, Object.assign({ theme: themeContext || framer_base_1.themes[theme] }, rest), text));
};
exports.Tooltip = withHOC_1.default(InnerTooltip);
exports.Tooltip.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.Tooltip, Object.assign(Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), propertyControls_1.intentControls(defaultProps.intent)), { direction: {
        type: framer_1.ControlType.SegmentedEnum,
        title: "Direction",
        defaultValue: defaultProps.direction,
        options: ["top", "right", "bottom", "left"],
        optionTitles: ["↑", "→", "↓", "←"],
    }, text: {
        type: framer_1.ControlType.String,
        title: "Text",
        defaultValue: defaultProps.text,
    }, tooltip: {
        type: framer_1.ControlType.String,
        title: "Tooltip",
        defaultValue: defaultProps.tooltip,
    } }));
exports.__info__ = [{ "name": "Tooltip", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Overrides.tsx":
/*!****************************!*\
  !*** ./code/Overrides.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3ZlcnJpZGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9PdmVycmlkZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBZ0IsYUFBYTs7SUFDekIsT0FBTztRQUNILE9BQU8sRUFBRSxHQUFHLEVBQUU7O1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUN4QjtLQUNKLENBQUE7Q0FDSjtBQU5ELHNDQU1DO0FBRUQsU0FBZ0IsbUJBQW1COztJQUMvQixPQUFPO1FBQ0gsY0FBYyxFQUFFLFNBQVM7UUFDekIsWUFBWSxFQUFFLFFBQVE7S0FDekIsQ0FBQTtDQUNKO0FBTEQsa0RBS0M7QUFFRCxTQUFnQixjQUFjOztJQUMxQixPQUFPO1FBQ0gsYUFBYSxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUU7O1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDckI7S0FDSixDQUFBO0NBQ0o7QUFORCx3Q0FNQztBQUVELFNBQWdCLGNBQWM7O0lBQzFCLE9BQU87UUFDSCxLQUFLLEVBQUUsQ0FBQztLQUNYLENBQUE7Q0FDSjtBQUpELHdDQUlDO0FBRUQsU0FBZ0IsYUFBYTs7SUFDekIsT0FBTztRQUNILGFBQWEsRUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFOztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3JCO0tBQ0osQ0FBQTtDQUNKO0FBTkQsc0NBTUM7QUFFRCxTQUFnQixhQUFhOztJQUN6QixPQUFPO1FBQ0gsS0FBSyxFQUFFLE9BQU87S0FDakIsQ0FBQTtDQUNKO0FBSkQsc0NBSUM7QUFFRCxTQUFnQixjQUFjOztJQUMxQixPQUFPO1FBQ0gsYUFBYSxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUU7O1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDckI7S0FDSixDQUFBO0NBQ0o7QUFORCx3Q0FNQztBQUVELFNBQWdCLGdCQUFnQjs7SUFDNUIsT0FBTztRQUNILEtBQUssRUFBRSxDQUFDO0tBQ1gsQ0FBQTtDQUNKO0FBSkQsNENBSUM7QUFFRCxTQUFnQixjQUFjOztJQUMxQixPQUFPO1FBQ0gsS0FBSyxFQUFFLE9BQU87UUFDZCxNQUFNLEVBQUUsUUFBUTtLQUNuQixDQUFBO0NBQ0o7QUFMRCx3Q0FLQztBQUVELFNBQWdCLGtCQUFrQjs7SUFDOUIsT0FBTztRQUNILGVBQWUsRUFBRSxNQUFNO0tBQzFCLENBQUE7Q0FDSjtBQUpELGdEQUlDO0FBRUQsU0FBZ0IsUUFBUTs7SUFDcEIsT0FBTztRQUNILEtBQUssRUFBRSxNQUFNO0tBQ2hCLENBQUE7Q0FDSjtBQUpELDRCQUlDO0FBRUQsU0FBZ0IsU0FBUzs7SUFDckIsT0FBTztRQUNILE1BQU0sRUFBRSxXQUFXO0tBQ3RCLENBQUE7Q0FDSjtBQUpELDhCQUlDO0FBRUQsU0FBZ0IsVUFBVTs7SUFDdEIsT0FBTztRQUNILE9BQU8sRUFBRSxXQUFXO0tBQ3ZCLENBQUE7Q0FDSjtBQUpELGdDQUlDIn0=

Object.defineProperty(exports, "__esModule", { value: true });
function onButtonClick() {
    window["__checkBudget__"]();
    return {
        onClick: () => {
            window["__checkBudget__"]();
            console.log("Click!");
        },
    };
}
exports.onButtonClick = onButtonClick;
function setButtonDecorators() {
    window["__checkBudget__"]();
    return {
        startDecorator: "ZoomOut",
        endDecorator: "ZoomIn",
    };
}
exports.setButtonDecorators = setButtonDecorators;
function getSliderValue() {
    window["__checkBudget__"]();
    return {
        onValueChange: (value) => {
            window["__checkBudget__"]();
            console.log(value);
        },
    };
}
exports.getSliderValue = getSliderValue;
function setSliderValue() {
    window["__checkBudget__"]();
    return {
        value: 0,
    };
}
exports.setSliderValue = setSliderValue;
function getInputValue() {
    window["__checkBudget__"]();
    return {
        onValueChange: (value) => {
            window["__checkBudget__"]();
            console.log(value);
        },
    };
}
exports.getInputValue = getInputValue;
function setInputValue() {
    window["__checkBudget__"]();
    return {
        value: "Value",
    };
}
exports.setInputValue = setInputValue;
function getSelectValue() {
    window["__checkBudget__"]();
    return {
        onValueChange: (value) => {
            window["__checkBudget__"]();
            console.log(value);
        },
    };
}
exports.getSelectValue = getSelectValue;
function setProgressValue() {
    window["__checkBudget__"]();
    return {
        value: 1,
    };
}
exports.setProgressValue = setProgressValue;
function setCardContent() {
    window["__checkBudget__"]();
    return {
        title: "Title",
        footer: "Footer",
    };
}
exports.setCardContent = setCardContent;
function setBackgroundColor() {
    window["__checkBudget__"]();
    return {
        backgroundColor: "#09f",
    };
}
exports.setBackgroundColor = setBackgroundColor;
function setColor() {
    window["__checkBudget__"]();
    return {
        color: "#09f",
    };
}
exports.setColor = setColor;
function setIntent() {
    window["__checkBudget__"]();
    return {
        intent: "secondary",
    };
}
exports.setIntent = setIntent;
function setPattern() {
    window["__checkBudget__"]();
    return {
        pattern: "secondary",
    };
}
exports.setPattern = setPattern;
exports.__info__ = [{ "name": "onButtonClick", "type": "override" }, { "name": "setButtonDecorators", "type": "override" }, { "name": "getSliderValue", "type": "override" }, { "name": "setSliderValue", "type": "override" }, { "name": "getInputValue", "type": "override" }, { "name": "setInputValue", "type": "override" }, { "name": "getSelectValue", "type": "override" }, { "name": "setProgressValue", "type": "override" }, { "name": "setCardContent", "type": "override" }, { "name": "setBackgroundColor", "type": "override" }, { "name": "setColor", "type": "override" }, { "name": "setIntent", "type": "override" }, { "name": "setPattern", "type": "override" }];


/***/ }),

/***/ "./code/Theme/Breakpoint.tsx":
/*!***********************************!*\
  !*** ./code/Theme/Breakpoint.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJlYWtwb2ludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvVGhlbWUvQnJlYWtwb2ludC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsNkNBQW9DO0FBQ3BDLG9DQUEyQztBQUMzQywwREFBd0Q7QUFDeEQsbUNBQWlFO0FBRWpFLE1BQU0sV0FBVyxHQUFHO0lBQ2hCLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztJQUMzQyxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FDbkQsUUFBUSxDQUFDLG9CQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUN6QztDQUNKLENBQUE7QUFRRCxNQUFNLFFBQVEsR0FBVTtJQUNwQixLQUFLLEVBQUUsT0FBTztDQUNqQixDQUFBO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLEtBQVk7O0lBQ25DLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFBO0lBQzlCLE1BQU0sa0JBQWtCLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FDdkUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FDckMsQ0FBQTtJQUNELE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLO1NBQzVCLE1BQU0sQ0FDSCxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUNULGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUNqRTtTQUNBLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUU3QixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMseUNBQUssQ0FBQTtJQUVuRSxJQUNJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUNwQixDQUFDLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUsscUJBQVksQ0FBQyxNQUFNO1lBQzNDLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUsscUJBQVksQ0FBQyxTQUFTLENBQUMsRUFDeEQ7UUFDRSxPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsd0JBQWdCLEVBQUU7WUFDekMsS0FBSyxFQUFFLG9CQUFNLENBQUMsS0FBSyxDQUFDLElBQUksb0JBQU0sQ0FBQyxLQUFLO1lBQ3BDLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsS0FBSyxFQUFFLGtEQUFrRDtTQUM1RCxDQUFDLENBQUE7S0FDTDtJQUVELE9BQU8sQ0FDSCxvQkFBQyxjQUFLLElBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsTUFBTSxJQUN0QyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUN6QixLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUN2QixLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1NBQ2pCLENBQUMsQ0FDRixDQUNYLENBQUE7Q0FDSjtBQXBDRCxnQ0FvQ0M7QUFFRCxVQUFVLENBQUMsWUFBWSxxQkFDaEIsUUFBUSxDQUNkLENBQUE7QUFFRCw0QkFBbUIsQ0FBQyxVQUFVLG9CQUN2QixxQ0FBa0IsQ0FBQyxXQUFXLENBQUMsRUFDcEMsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const utils_1 = __webpack_require__(/*! ../utils */ "./code/utils/index.ts");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const breakpoints = {
    names: Object.keys(framer_base_1.themes.light.breakpoint),
    values: Object.keys(framer_base_1.themes.light.breakpoint).map(key => parseInt(framer_base_1.themes.light.breakpoint[key])),
};
const defaults = {
    theme: "light",
};
function Breakpoint(props) {
    window["__checkBudget__"]();
    const { width, theme } = props;
    const smallerBreakpoints = breakpoints.values.filter((breakpoint, index) => !index ? true : breakpoint < width);
    const layouts = breakpoints.names
        .filter((_, index) => smallerBreakpoints.indexOf(breakpoints.values[index]) >= 0)
        .map(breakpoint => props[breakpoint][0])
        .filter(layout => layout);
    const layout = layouts.length ? layouts[layouts.length - 1] : React.createElement(React.Fragment, null);
    if (layouts.length === 0 &&
        (framer_1.RenderTarget.current() === framer_1.RenderTarget.canvas ||
            framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail)) {
        return React.createElement(utils_1.placeholderState, {
            theme: framer_base_1.themes[theme] || framer_base_1.themes.light,
            title: "No breakpoints",
            label: "Add breakpoints by connecting them on the Canvas",
        });
    }
    return (React.createElement(framer_1.Frame, { background: "transparent", size: "100%" }, React.isValidElement(layout) &&
        React.cloneElement(layout, {
            width: "100%",
            height: "100%",
        })));
}
exports.Breakpoint = Breakpoint;
Breakpoint.defaultProps = Object.assign({}, defaults);
framer_1.addPropertyControls(Breakpoint, Object.assign({}, propertyControls_1.breakpointControls(breakpoints)));
exports.__info__ = [{ "name": "Breakpoint", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Theme/Theme.tsx":
/*!******************************!*\
  !*** ./code/Theme/Theme.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhlbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1RoZW1lL1RoZW1lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5Qiw2Q0FBZ0Q7QUFDaEQsbUNBQThFO0FBQzlFLG9DQUE4QztBQUM5QyxvQ0FBMkM7QUFDM0MseURBQWlEO0FBV2pELE1BQU0sUUFBUSxHQUFVO0lBQ3BCLEtBQUssRUFBRSxPQUFPO0lBQ2QsVUFBVSxFQUFFLFlBQVk7Q0FDM0IsQ0FBQTtBQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDOUMsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFNLENBQUMsQ0FBQTtBQUMvQyxNQUFNLFlBQVksR0FBRyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQyxDQUFBO0FBRXBFLFNBQWdCLEtBQUssQ0FBQyxRQUFlLFFBQVE7O0lBQ3pDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFDMUQsTUFBTSxDQUFDLGtCQUFrQixFQUFFLHFCQUFxQixDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FDOUQsT0FBTyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDdkQsQ0FBQTtJQUNELE1BQU0sY0FBYyxHQUNoQiwyQkFBbUIsQ0FDZixRQUFRLENBQUMsSUFBSSxFQUNiO1FBQ0ksVUFBVSxFQUFFLElBQUk7UUFDaEIsZUFBZSxFQUFFLENBQUMsT0FBTyxDQUFDO0tBQzdCLEVBQ0QsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDNUMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFBO0lBRXZCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFOztRQUNqQixPQUFPLFdBQVcsS0FBSyxRQUFRO1lBQzNCLEtBQUssQ0FBQyxXQUFXLENBQUM7aUJBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0tBQ3JELEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBRWpCLE1BQU0sYUFBYSxHQUNmLEtBQUssS0FBSyxRQUFRLElBQUksa0JBQWtCO1FBQ3BDLENBQUMsQ0FBQyxrQkFBa0I7UUFDcEIsQ0FBQyxDQUFDLG9CQUFNLENBQ0YsbUJBQW1CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDbkMsQ0FBQyxDQUFDLEtBQUs7WUFDUCxDQUFDLENBQUMsY0FBYyxDQUN2QixDQUFBO0lBQ1gsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQTtJQUV4QixPQUFPLENBQUMsS0FBSztRQUNULENBQUMscUJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxxQkFBWSxDQUFDLE1BQU07WUFDM0MscUJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxxQkFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN6RCxLQUFLLENBQUMsYUFBYSxDQUFDLHdCQUFnQixFQUFFO1FBQ2xDLEtBQUssRUFBRSxvQkFBTSxDQUFDLEtBQUs7UUFDbkIsS0FBSyxFQUFFLFlBQVk7UUFDbkIsS0FBSyxFQUFFLDRDQUE0QztLQUN0RCxDQUFDLENBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FDQSxvQkFBQyxpQ0FBYSxJQUFDLEtBQUssRUFBRSxhQUFhLElBQzlCLEtBQUssSUFBSSxDQUNOLG9CQUFDLGNBQUssSUFDRixVQUFVLEVBQ04sYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxhQUFhLEVBRXBELElBQUksRUFBQyxNQUFNLElBRVYsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDeEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUU7WUFDdEIsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtTQUNqQixDQUFDLENBQ0YsQ0FDWCxDQUNXLENBQ25CLENBQUE7Q0FDSjtBQTFERCxzQkEwREM7QUFFRCxLQUFLLENBQUMsWUFBWSxxQkFDWCxRQUFRLENBQ2QsQ0FBQTtBQUVELDRCQUFtQixDQUFDLEtBQUssRUFBRTtJQUN2QixLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxPQUFPO1FBQ2QsWUFBWSxFQUFFLFFBQVEsQ0FBQyxLQUFLO1FBQzVCLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLFlBQVksRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsd0JBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN6RTtJQUNELFdBQVcsRUFBRTtRQUNULElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLEdBQUc7UUFDVixnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUMxQixNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssUUFBUTtLQUM1QztJQUNELFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLFlBQVk7UUFDbkIsWUFBWSxFQUFFLFFBQVEsQ0FBQyxVQUFVO1FBQ2pDLE9BQU8sRUFBRSxNQUFNO1FBQ2YsWUFBWSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQ3BCLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUMxRDtLQUNKO0lBQ0QsUUFBUSxFQUFFO1FBQ04sSUFBSSxFQUFFLG9CQUFXLENBQUMsaUJBQWlCO1FBQ25DLEtBQUssRUFBRSxTQUFTO0tBQ25CO0NBQ0osQ0FBQyxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const hooks_1 = __webpack_require__(/*! ../hooks */ "./code/hooks/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./code/utils/index.ts");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
const defaults = {
    theme: "light",
    background: "background",
};
const colors = Object.keys(framer_base_1.themes.light.color);
const defaultThemeOptions = Object.keys(framer_base_1.themes);
const themeOptions = ["automatic", "custom", ...defaultThemeOptions];
function Theme(props = defaults) {
    window["__checkBudget__"]();
    const { children, background, customTheme, theme } = props;
    const [customThemeContent, setCustomThemeContent] = React.useState(typeof customTheme === "object" ? customTheme : null);
    const automaticTheme = hooks_1.useMutationObserver(document.body, {
        attributes: true,
        attributeFilter: ["class"],
    }, ([mutation]) => mutation.target.className) || defaults.theme;
    React.useEffect(() => {
        window["__checkBudget__"]();
        typeof customTheme === "string" &&
            fetch(customTheme)
                .then(response => response.json())
                .then(json => setCustomThemeContent(json));
    }, [customTheme]);
    const selectedTheme = theme === "custom" && customThemeContent
        ? customThemeContent
        : framer_base_1.themes[defaultThemeOptions.indexOf(theme) >= 0
            ? theme
            : automaticTheme];
    const [child] = children;
    return !child &&
        (framer_1.RenderTarget.current() === framer_1.RenderTarget.canvas ||
            framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) ? (React.createElement(utils_1.placeholderState, {
        theme: framer_base_1.themes.light,
        title: "No content",
        label: "Add content by connecting it on the Canvas",
    })) : (React.createElement(styled_components_1.ThemeProvider, { theme: selectedTheme }, child && (React.createElement(framer_1.Frame, { background: selectedTheme.color[background] || "transparent", size: "100%" }, React.isValidElement(child) &&
        React.cloneElement(child, {
            width: "100%",
            height: "100%",
        })))));
}
exports.Theme = Theme;
Theme.defaultProps = Object.assign({}, defaults);
framer_1.addPropertyControls(Theme, {
    theme: {
        type: framer_1.ControlType.Enum,
        title: "Theme",
        defaultValue: defaults.theme,
        options: themeOptions,
        optionTitles: themeOptions.map(themeOption => framer_base_1.capitalize(themeOption)),
    },
    customTheme: {
        type: framer_1.ControlType.File,
        title: " ",
        allowedFileTypes: ["json"],
        hidden: ({ theme }) => theme !== "custom",
    },
    background: {
        type: framer_1.ControlType.Enum,
        title: "Background",
        defaultValue: defaults.background,
        options: colors,
        optionTitles: colors.map(color => color.charAt(0).toUpperCase() + color.slice(1)),
    },
    children: {
        type: framer_1.ControlType.ComponentInstance,
        title: "Content",
    },
});
exports.__info__ = [{ "name": "Theme", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/Typography/Heading.tsx":
/*!*************************************!*\
  !*** ./code/Typography/Heading.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvVHlwb2dyYXBoeS9IZWFkaW5nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLDZDQUEwRTtBQUMxRSxtQ0FBeUQ7QUFDekQsMERBQW1EO0FBQ25ELG9DQUFrRDtBQUNsRCw4Q0FBc0M7QUFVdEMsTUFBTSxRQUFRLEdBQVU7SUFDcEIsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUUsU0FBUztJQUNmLEtBQUssRUFBRSxDQUFDO0lBQ1IsTUFBTSxFQUFFLE1BQU07Q0FDakIsQ0FBQTtBQUVELE1BQU0sWUFBWSxHQUFvQixLQUFLLENBQUMsRUFBRTs7SUFDMUMsTUFBTSxFQUNGLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixJQUFJLEVBQ0osS0FBSyxFQUNMLFlBQVksS0FFWixLQUFLLEVBREwsNkZBQ0ssQ0FBQTtJQUNULE1BQU0sZ0JBQWdCLEdBQUcsb0JBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBRTVELE9BQU8sQ0FDSCxvQkFBQyxxQkFBVyxvQkFDSixJQUFJLElBQ1IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQTBCLEVBQzdDLEtBQUssRUFBRSxZQUFZLElBQUksb0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFDaEMsZ0JBQWdCLEdBRW5CLElBQUksQ0FDSyxDQUNqQixDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsT0FBTyxHQUFHLGlCQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7QUFFNUMsZUFBTyxDQUFDLFlBQVkscUJBQ2IsUUFBUSxDQUNkLENBQUE7QUFFRCw0QkFBbUIsQ0FBQyxlQUFPLGtDQUNwQixnQ0FBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FDaEMsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsT0FBTztRQUNkLFlBQVksRUFBRSxHQUFHO1FBQ2pCLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQ3ZDLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0tBQ3JELEVBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsT0FBTztRQUNkLFlBQVksRUFBRSxNQUFNO1FBQ3BCLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQztRQUMvQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7S0FDdkQsRUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxNQUFNO1FBQ2IsWUFBWSxFQUFFLFFBQVEsQ0FBQyxJQUFJO0tBQzlCLElBQ0gsQ0FBQSJ9

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./code/utils/index.ts");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaults = {
    theme: "light",
    text: "Heading",
    level: 2,
    resize: "none",
};
const InnerHeading = props => {
    window["__checkBudget__"]();
    const { width, height, level, resize, text, theme, themeContext } = props, rest = __rest(props, ["width", "height", "level", "resize", "text", "theme", "themeContext"]);
    const resizeDimensions = utils_1.resizeLayout(resize, width, height);
    return (React.createElement(framer_base_1.Heading, Object.assign({}, rest, { level: Number(level), theme: themeContext || framer_base_1.themes[theme] }, resizeDimensions), text));
};
exports.Heading = withHOC_1.default(InnerHeading);
exports.Heading.defaultProps = Object.assign({}, defaults);
framer_1.addPropertyControls(exports.Heading, Object.assign(Object.assign({}, propertyControls_1.themeControls(defaults.theme)), { level: {
        type: framer_1.ControlType.Enum,
        title: "Level",
        defaultValue: "2",
        options: ["1", "2", "3", "4", "5", "6"],
        optionTitles: ["H1", "H2", "H3", "H4", "H5", "H6"],
    }, align: {
        type: framer_1.ControlType.Enum,
        title: "Align",
        defaultValue: "left",
        options: ["left", "center", "right", "justify"],
        optionTitles: ["Left", "Center", "Right", "Justify"],
    }, text: {
        type: framer_1.ControlType.String,
        title: "Text",
        defaultValue: defaults.text,
    } }));
exports.__info__ = [{ "name": "Heading", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Typography/Text.tsx":
/*!**********************************!*\
  !*** ./code/Typography/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvVHlwb2dyYXBoeS9UZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLDZDQUFpRTtBQUNqRSxtQ0FBeUQ7QUFDekQsMERBQW1EO0FBQ25ELG9DQUFrRDtBQUNsRCw4Q0FBc0M7QUFVdEMsTUFBTSxZQUFZLEdBQVU7SUFDeEIsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxLQUFLO0lBQ1osSUFBSSxFQUFFLEtBQUs7SUFDWCxNQUFNLEVBQUUsTUFBTTtDQUNqQixDQUFBO0FBRUQsTUFBTSxTQUFTLEdBQW9CLEtBQUssQ0FBQyxFQUFFOztJQUN2QyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLEtBQWMsS0FBSyxFQUFqQixvRkFBaUIsQ0FBQTtJQUMzRSxNQUFNLGdCQUFnQixHQUFHLG9CQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUU1RCxPQUFPLENBQ0gsb0JBQUMsa0JBQVEsb0JBQ0QsSUFBSSxJQUNSLEtBQUssRUFBRSxZQUFZLElBQUksb0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFDaEMsZ0JBQWdCLEdBRW5CLElBQUksQ0FDRSxDQUNkLENBQUE7Q0FDSixDQUFBO0FBRVksUUFBQSxJQUFJLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUV0QyxZQUFJLENBQUMsWUFBWSxxQkFDVixZQUFZLENBQ2xCLENBQUE7QUFFRCw0QkFBbUIsQ0FBQyxZQUFJLGtDQUNqQixnQ0FBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FDcEMsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixLQUFLLEVBQUUsT0FBTztRQUNkLFlBQVksRUFBRSxZQUFZLENBQUMsS0FBSztLQUNuQyxFQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLE1BQU07UUFDYixZQUFZLEVBQUUsWUFBWSxDQUFDLElBQUk7UUFDL0IsYUFBYSxFQUFFLE1BQU07UUFDckIsWUFBWSxFQUFFLE1BQU07S0FDdkIsRUFDRCxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxPQUFPO1FBQ2QsWUFBWSxFQUFFLE1BQU07UUFDcEIsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO1FBQy9DLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQztLQUN2RCxFQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLE1BQU07UUFDYixZQUFZLEVBQUUsWUFBWSxDQUFDLElBQUk7S0FDbEMsSUFDSCxDQUFBIn0=

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const propertyControls_1 = __webpack_require__(/*! ../propertyControls */ "./code/propertyControls/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./code/utils/index.ts");
const withHOC_1 = __webpack_require__(/*! ../utils/withHOC */ "./code/utils/withHOC.tsx");
const defaultProps = {
    theme: "light",
    text: "Text",
    small: false,
    code: false,
    resize: "none",
};
const InnerText = props => {
    window["__checkBudget__"]();
    const { width, height, resize, text, theme, themeContext } = props, rest = __rest(props, ["width", "height", "resize", "text", "theme", "themeContext"]);
    const resizeDimensions = utils_1.resizeLayout(resize, width, height);
    return (React.createElement(framer_base_1.Text, Object.assign({}, rest, { theme: themeContext || framer_base_1.themes[theme] }, resizeDimensions), text));
};
exports.Text = withHOC_1.default(InnerText);
exports.Text.defaultProps = Object.assign({}, defaultProps);
framer_1.addPropertyControls(exports.Text, Object.assign(Object.assign({}, propertyControls_1.themeControls(defaultProps.theme)), { small: {
        type: framer_1.ControlType.Boolean,
        title: "Small",
        defaultValue: defaultProps.small,
    }, code: {
        type: framer_1.ControlType.Boolean,
        title: "Font",
        defaultValue: defaultProps.code,
        disabledTitle: "Sans",
        enabledTitle: "Mono",
    }, align: {
        type: framer_1.ControlType.Enum,
        title: "Align",
        defaultValue: "left",
        options: ["left", "center", "right", "justify"],
        optionTitles: ["Left", "Center", "Right", "Justify"],
    }, text: {
        type: framer_1.ControlType.String,
        title: "Text",
        defaultValue: defaultProps.text,
    } }));
exports.__info__ = [{ "name": "Text", "children": false, "type": "component" }];


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
exports.colors = Object.freeze({
    /** rgba(0, 0, 0, 0) */
    "transparent": "var(--token-aaa366f2-cf3d-4caf-83d3-229689edabe7, rgba(0, 0, 0, 0))",
    /** #FAFAFA */
    "background": "var(--token-38769a0c-f417-4407-8b79-afe2b9136045, rgb(250, 250, 250))",
    /** #FFFFFF */
    "foreground": "var(--token-28e4ceca-a5ec-47bf-af8e-7a7667b499b9, rgb(255, 255, 255))",
    /** #111111 */
    "text": "var(--token-c8b7ad60-00ba-45c7-8a99-f711320505dd, rgb(17, 17, 17))",
    /** #F0F0F0 */
    "control": "var(--token-3b985749-e6e7-49d0-963d-74054b4bd63c, rgb(240, 240, 240))",
    /** #FFFFFF */
    "knob": "var(--token-97fadcad-1559-4017-bd21-a3d6c8daab2b, rgb(255, 255, 255))",
    /** #000000 */
    "black": "var(--token-20bfec31-e029-40cd-ab9a-60ea41da3898, rgb(0, 0, 0))",
    /** #808080 */
    "gray": "var(--token-e4b99a03-5c06-4118-bf1f-8a5b7dc82e46, rgb(128, 128, 128))",
    /** #FFFFFF */
    "white": "var(--token-bd20ece0-a22d-46f0-aa8d-0ae39d509de1, rgb(255, 255, 255))",
    /** #0055FF */
    "blue": "var(--token-4e199204-00e8-4fa9-af34-e0f059f0b199, rgb(0, 85, 255))",
    /** #0099FF */
    "azure": "var(--token-7ebf29e6-7f33-4f62-be46-b2e13b323967, rgb(0, 153, 255))",
    /** #11DDDD */
    "teal": "var(--token-2cc40353-7cdb-4949-af82-f4218dd9dbe4, rgb(17, 221, 221))",
    /** #05DD66 */
    "green": "var(--token-5d6333ae-5035-4eaa-8e25-5b6febf7885b, rgb(5, 221, 102))",
    /** #FFCC00 */
    "yellow": "var(--token-22dddc84-0868-4bde-b05b-adecc059a174, rgb(255, 204, 0))",
    /** #FF9900 */
    "orange": "var(--token-133b21c3-4085-4d97-82d6-ad1c2c416ef3, rgb(255, 153, 0))",
    /** #FF3333 */
    "red": "var(--token-a919b1f0-27e8-4f76-81d6-a0267ce60c20, rgb(255, 51, 51))",
    /** #BB00FF */
    "violet": "var(--token-aaf59c32-143f-4c85-81f0-7b595794f236, rgb(187, 0, 255))",
    /** #6600FF */
    "purple": "var(--token-de310ecc-cc3b-466e-a297-763cf59b5431, rgb(102, 0, 255))",
    /** rgba(0, 0, 0, 0) */
    "dark/transparent": "var(--token-ae828e65-aec2-4f58-b255-8f38b2c20c7e, rgba(0, 0, 0, 0))",
    /** #222222 */
    "dark/background": "var(--token-5f773edb-af08-4578-8f5c-81d47adc44b7, rgb(34, 34, 34))",
    /** #333333 */
    "dark/foreground": "var(--token-8b85868a-7fc3-41ac-b54b-a7b8a8208e44, rgb(51, 51, 51))",
    /** #FFFFFF */
    "dark/text": "var(--token-ae24c55b-9226-4f14-a74d-78555bf1d810, rgb(255, 255, 255))",
    /** #4D4D4D */
    "dark/control": "var(--token-8dc21af9-e5d9-4a3d-87e0-9f882c0581ed, rgb(77, 77, 77))",
    /** #FFFFFF */
    "dark/knob": "var(--token-f608a8b8-93d6-44c0-943d-d2df96c4610d, rgb(255, 255, 255))",
    /** #000000 */
    "dark/black": "var(--token-24d8c0d7-1793-4b7c-8984-8ab2fd349a0e, rgb(0, 0, 0))",
    /** #555555 */
    "dark/gray": "var(--token-23bc8989-8495-49d3-b26b-60f01c38a1da, rgb(85, 85, 85))",
    /** #FFFFFF */
    "dark/white": "var(--token-d49096d8-81a7-4625-98c7-162b358f87ac, rgb(255, 255, 255))",
    /** #3377FF */
    "dark/blue": "var(--token-886c8c0f-0d2c-4518-8d1f-bb3b785d234d, rgb(51, 119, 255))",
    /** #44BBFF */
    "dark/azure": "var(--token-6ae6e491-d906-40f7-b24c-a52e74142dfe, rgb(68, 187, 255))",
    /** #66EEEE */
    "dark/teal": "var(--token-97680ba1-eb65-46ec-8e16-e57823ba1e1f, rgb(102, 238, 238))",
    /** #11EE66 */
    "dark/green": "var(--token-9075998a-25eb-4560-bf44-2263dfe12b48, rgb(17, 238, 102))",
    /** #FFDD44 */
    "dark/yellow": "var(--token-919ebeb8-7281-448b-a5e7-5c20e6e4709f, rgb(255, 221, 68))",
    /** #FFAA44 */
    "dark/orange": "var(--token-3cbe5d25-5318-446f-aaac-887073076111, rgb(255, 170, 68))",
    /** #FF5566 */
    "dark/red": "var(--token-5f0a385f-667a-46ff-bbf6-f60a0a13ea9f, rgb(255, 85, 102))",
    /** #CC44FF */
    "dark/violet": "var(--token-8525116b-6562-4a4f-8871-5bacba5552c8, rgb(204, 68, 255))",
    /** #8844FF */
    "dark/purple": "var(--token-6d181c0c-4789-4726-915c-3d5e5ad268c3, rgb(136, 68, 255))",
});
exports.__info__ = [];


/***/ }),

/***/ "./code/hooks/index.ts":
/*!*****************************!*\
  !*** ./code/hooks/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2hvb2tzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkNBQXFDIn0=

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./useMutationObserver */ "./code/hooks/useMutationObserver.ts"));


/***/ }),

/***/ "./code/hooks/useMutationObserver.ts":
/*!*******************************************!*\
  !*** ./code/hooks/useMutationObserver.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlTXV0YXRpb25PYnNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvaG9va3MvdXNlTXV0YXRpb25PYnNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUEyQztBQUMzQyw2Q0FBa0M7QUFFckIsUUFBQSxtQkFBbUIsR0FBRyxDQUMvQixJQUFpQixFQUNqQixPQUE2QixFQUM3QixLQUE0QyxrQkFBSSxFQUNsRCxFQUFFOztJQUNBLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QyxNQUFNLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQUU7O1FBQ3RELFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtLQUMxQixDQUFDLENBQUE7SUFFRixpQkFBUyxDQUFDLEdBQUcsRUFBRTs7UUFDWCxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU07UUFFakIsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUV2QyxPQUFPLEdBQUcsRUFBRTs7WUFDUixnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtTQUNoQyxDQUFBO0tBQ0osRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBRW5CLE9BQU8sS0FBSyxDQUFBO0NBQ2YsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
exports.useMutationObserver = (node, options, fn = framer_base_1.noop) => {
    window["__checkBudget__"]();
    const [state, setState] = react_1.useState(null);
    const mutationObserver = new MutationObserver(mutations => {
        window["__checkBudget__"]();
        setState(fn(mutations));
    });
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        if (!node)
            return;
        mutationObserver.observe(node, options);
        return () => {
            window["__checkBudget__"]();
            mutationObserver.disconnect();
        };
    }, [node, options]);
    return state;
};
exports.__info__ = [];


/***/ }),

/***/ "./code/index.ts":
/*!***********************!*\
  !*** ./code/index.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaUNBQTJCO0FBQzNCLHNDQUFvQztBQUEzQixzQkFBQSxJQUFJLENBQUE7QUFDYixpREFBK0M7QUFBdEMsa0NBQUEsVUFBVSxDQUFBO0FBQ25CLDRDQUEwQztBQUFqQywwQkFBQSxNQUFNLENBQUE7QUFDZixzREFBb0Q7QUFBM0Msb0NBQUEsV0FBVyxDQUFBO0FBQ3BCLHNDQUFvQztBQUEzQixzQkFBQSxJQUFJLENBQUE7QUFDYixnREFBOEM7QUFBckMsOEJBQUEsUUFBUSxDQUFBO0FBQ2pCLGdEQUE4QztBQUFyQyw0QkFBQSxPQUFPLENBQUE7QUFDaEIsNkNBQTJDO0FBQWxDLHNCQUFBLElBQUksQ0FBQTtBQUNiLCtDQUE2QztBQUFwQyx3QkFBQSxLQUFLLENBQUE7QUFDZCwwQ0FBd0M7QUFBL0Isd0JBQUEsS0FBSyxDQUFBO0FBQ2QsK0NBQTZDO0FBQXBDLHdCQUFBLEtBQUssQ0FBQTtBQUNkLHNDQUFvQztBQUEzQixzQkFBQSxJQUFJLENBQUE7QUFDYixxREFBbUQ7QUFBMUMsOEJBQUEsUUFBUSxDQUFBO0FBQ2pCLDBDQUF3QztBQUEvQix3QkFBQSxLQUFLLENBQUE7QUFDZCxvREFBa0Q7QUFBekMsa0NBQUEsVUFBVSxDQUFBO0FBQ25CLDRDQUEwQztBQUFqQywwQkFBQSxNQUFNLENBQUE7QUFDZiw0Q0FBMEM7QUFBakMsMEJBQUEsTUFBTSxDQUFBO0FBQ2YsbURBQWlEO0FBQXhDLDRCQUFBLE9BQU8sQ0FBQTtBQUNoQiw0Q0FBMEM7QUFBakMsMEJBQUEsTUFBTSxDQUFBO0FBQ2YsMENBQXdDO0FBQS9CLHNCQUFBLElBQUksQ0FBQTtBQUNiLGdEQUE4QztBQUFyQyw4QkFBQSxRQUFRLENBQUE7QUFDakIsdUNBQXFDO0FBQTVCLHdCQUFBLEtBQUssQ0FBQTtBQUNkLDRDQUEwQztBQUFqQywwQkFBQSxNQUFNLENBQUE7QUFDZixtREFBaUQ7QUFBeEMsNEJBQUEsT0FBTyxDQUFBIn0=

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! framer-base */ "framer-base"));
var Base_1 = __webpack_require__(/*! ./Layout/Base */ "./code/Layout/Base.tsx");
exports.Base = Base_1.Base;
var Breakpoint_1 = __webpack_require__(/*! ./Theme/Breakpoint */ "./code/Theme/Breakpoint.tsx");
exports.Breakpoint = Breakpoint_1.Breakpoint;
var Button_1 = __webpack_require__(/*! ./Controls/Button */ "./code/Controls/Button.tsx");
exports.Button = Button_1.Button;
var ButtonGroup_1 = __webpack_require__(/*! ./Controls/ButtonGroup */ "./code/Controls/ButtonGroup.tsx");
exports.ButtonGroup = ButtonGroup_1.ButtonGroup;
var Card_1 = __webpack_require__(/*! ./Layout/Card */ "./code/Layout/Card.tsx");
exports.Card = Card_1.Card;
var Checkbox_1 = __webpack_require__(/*! ./Controls/Checkbox */ "./code/Controls/Checkbox.tsx");
exports.Checkbox = Checkbox_1.Checkbox;
var Heading_1 = __webpack_require__(/*! ./Typography/Heading */ "./code/Typography/Heading.tsx");
exports.Heading = Heading_1.Heading;
var Icon_1 = __webpack_require__(/*! ./Miscellaneous/Icon */ "./code/Miscellaneous/Icon.tsx");
exports.Icon = Icon_1.Icon;
var Image_1 = __webpack_require__(/*! ./Miscellaneous/Image */ "./code/Miscellaneous/Image.tsx");
exports.Image = Image_1.Image;
var Input_1 = __webpack_require__(/*! ./Controls/Input */ "./code/Controls/Input.tsx");
exports.Input = Input_1.Input;
var Label_1 = __webpack_require__(/*! ./Miscellaneous/Label */ "./code/Miscellaneous/Label.tsx");
exports.Label = Label_1.Label;
var List_1 = __webpack_require__(/*! ./Layout/List */ "./code/Layout/List.tsx");
exports.List = List_1.List;
var Progress_1 = __webpack_require__(/*! ./Miscellaneous/Progress */ "./code/Miscellaneous/Progress.tsx");
exports.Progress = Progress_1.Progress;
var Radio_1 = __webpack_require__(/*! ./Controls/Radio */ "./code/Controls/Radio.tsx");
exports.Radio = Radio_1.Radio;
var RadioGroup_1 = __webpack_require__(/*! ./Controls/RadioGroup */ "./code/Controls/RadioGroup.tsx");
exports.RadioGroup = RadioGroup_1.RadioGroup;
var Select_1 = __webpack_require__(/*! ./Controls/Select */ "./code/Controls/Select.tsx");
exports.Select = Select_1.Select;
var Slider_1 = __webpack_require__(/*! ./Controls/Slider */ "./code/Controls/Slider.tsx");
exports.Slider = Slider_1.Slider;
var Spinner_1 = __webpack_require__(/*! ./Miscellaneous/Spinner */ "./code/Miscellaneous/Spinner.tsx");
exports.Spinner = Spinner_1.Spinner;
var Switch_1 = __webpack_require__(/*! ./Controls/Switch */ "./code/Controls/Switch.tsx");
exports.Switch = Switch_1.Switch;
var Text_1 = __webpack_require__(/*! ./Typography/Text */ "./code/Typography/Text.tsx");
exports.Text = Text_1.Text;
var TextArea_1 = __webpack_require__(/*! ./Controls/TextArea */ "./code/Controls/TextArea.tsx");
exports.TextArea = TextArea_1.TextArea;
var Theme_1 = __webpack_require__(/*! ./Theme/Theme */ "./code/Theme/Theme.tsx");
exports.Theme = Theme_1.Theme;
var Toggle_1 = __webpack_require__(/*! ./Controls/Toggle */ "./code/Controls/Toggle.tsx");
exports.Toggle = Toggle_1.Toggle;
var Tooltip_1 = __webpack_require__(/*! ./Miscellaneous/Tooltip */ "./code/Miscellaneous/Tooltip.tsx");
exports.Tooltip = Tooltip_1.Tooltip;
exports.__info__ = [];


/***/ }),

/***/ "./code/propertyControls/breakpointControls.ts":
/*!*****************************************************!*\
  !*** ./code/propertyControls/breakpointControls.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludENvbnRyb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9wcm9wZXJ0eUNvbnRyb2xzL2JyZWFrcG9pbnRDb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUF3QztBQUN4QyxtQ0FBc0Q7QUFFdEQsU0FBZ0Isa0JBQWtCLENBQUMsV0FHbEM7O0lBQ0csTUFBTSxvQkFBb0IsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUQsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNWLElBQUksRUFBRSxvQkFBVyxDQUFDLGlCQUFpQjtZQUNuQyxLQUFLLEVBQUUsd0JBQVUsQ0FBQyxVQUFVLENBQUM7U0FDaEM7S0FDSixDQUFDLENBQUMsQ0FBQTtJQUVILE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxvQkFBb0IsQ0FBQyxDQUFBO0NBQ3BEO0FBWkQsZ0RBWUMifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function breakpointControls(breakpoints) {
    window["__checkBudget__"]();
    const breakpointComponents = breakpoints.names.map(breakpoint => ({
        [breakpoint]: {
            type: framer_1.ControlType.ComponentInstance,
            title: framer_base_1.capitalize(breakpoint),
        },
    }));
    return Object.assign({}, ...breakpointComponents);
}
exports.breakpointControls = breakpointControls;
exports.__info__ = [];


/***/ }),

/***/ "./code/propertyControls/decoratorControls.ts":
/*!****************************************************!*\
  !*** ./code/propertyControls/decoratorControls.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9yQ29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL3Byb3BlcnR5Q29udHJvbHMvZGVjb3JhdG9yQ29udHJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBNkM7QUFDN0MsbUNBQXNEO0FBRXRELFNBQWdCLGlCQUFpQixDQUM3QixtQkFBMkIsUUFBUTs7SUFFbkMsbURBQ0ksa0JBQWtCLEVBQUU7WUFDaEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztZQUN6QixLQUFLLEVBQUUsVUFBVTtZQUNqQixZQUFZLEVBQUUsS0FBSztTQUN0QixJQUNFLDJCQUFZLENBQ1gsZ0JBQWdCLEVBQ2hCLEtBQUssRUFDTCxvQkFBb0IsRUFDcEIsb0JBQW9CLENBQ3ZCLEtBQ0QsZ0JBQWdCLEVBQUU7WUFDZCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1lBQ3pCLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFlBQVksRUFBRSxLQUFLO1NBQ3RCLEtBQ0UsMkJBQVksQ0FDWCxnQkFBZ0IsRUFDaEIsS0FBSyxFQUNMLGtCQUFrQixFQUNsQixrQkFBa0IsQ0FDckIsRUFDSjtDQUNKO0FBM0JELDhDQTJCQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const iconControls_1 = __webpack_require__(/*! ./iconControls */ "./code/propertyControls/iconControls.ts");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function decoratorControls(defaultDecorator = "Framer") {
    window["__checkBudget__"]();
    return Object.assign(Object.assign(Object.assign({ withStartDecorator: {
            type: framer_1.ControlType.Boolean,
            title: "Icon (←)",
            defaultValue: false,
        } }, iconControls_1.iconControls(defaultDecorator, false, "withStartDecorator", "iconStartDecorator")), { withEndDecorator: {
            type: framer_1.ControlType.Boolean,
            title: "Icon (→)",
            defaultValue: false,
        } }), iconControls_1.iconControls(defaultDecorator, false, "withEndDecorator", "iconEndDecorator"));
}
exports.decoratorControls = decoratorControls;
exports.__info__ = [];


/***/ }),

/***/ "./code/propertyControls/iconControls.ts":
/*!***********************************************!*\
  !*** ./code/propertyControls/iconControls.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbkNvbnRyb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9wcm9wZXJ0eUNvbnRyb2xzL2ljb25Db250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUEwQztBQUMxQyxtQ0FBc0Q7QUFFdEQsU0FBZ0IsWUFBWSxDQUN4QixjQUFzQiwwQkFBWSxDQUFDLENBQUMsQ0FBQyxFQUNyQyxRQUFpQixJQUFJLEVBQ3JCLFNBQXdCLElBQUksRUFDNUIsT0FBZSxNQUFNOztJQUVyQixPQUFPO1FBQ0gsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNKLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7WUFDdEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQzNCLFlBQVksRUFBRSxXQUFXO1lBQ3pCLE9BQU8sRUFBRSwwQkFBWTtZQUNyQixZQUFZLEVBQUUsMEJBQVksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FDekMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQzVDO1lBQ0QsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSztTQUN6RDtLQUNKLENBQUE7Q0FDSjtBQWxCRCxvQ0FrQkMifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function iconControls(defaultIcon = framer_base_1.featherIcons[0], title = true, hidden = null, prop = "icon") {
    window["__checkBudget__"]();
    return {
        [prop]: {
            type: framer_1.ControlType.Enum,
            title: title ? "Icon" : " ",
            defaultValue: defaultIcon,
            options: framer_base_1.featherIcons,
            optionTitles: framer_base_1.featherIcons.map(featherName => featherName.replace(/([A-Z0-9])/g, " $1")),
            hidden: hidden ? props => !props[hidden] : () => false,
        },
    };
}
exports.iconControls = iconControls;
exports.__info__ = [];


/***/ }),

/***/ "./code/propertyControls/index.ts":
/*!****************************************!*\
  !*** ./code/propertyControls/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL3Byb3BlcnR5Q29udHJvbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwQ0FBb0M7QUFDcEMseUNBQW1DO0FBQ25DLHNDQUFnQztBQUNoQyxvQ0FBOEI7QUFDOUIsc0NBQWdDO0FBQ2hDLHVDQUFpQztBQUNqQyxxQ0FBK0IifQ==

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./breakpointControls */ "./code/propertyControls/breakpointControls.ts"));
__export(__webpack_require__(/*! ./decoratorControls */ "./code/propertyControls/decoratorControls.ts"));
__export(__webpack_require__(/*! ./resizeControls */ "./code/propertyControls/resizeControls.ts"));
__export(__webpack_require__(/*! ./iconControls */ "./code/propertyControls/iconControls.ts"));
__export(__webpack_require__(/*! ./intentControls */ "./code/propertyControls/intentControls.ts"));
__export(__webpack_require__(/*! ./patternControls */ "./code/propertyControls/patternControls.ts"));
__export(__webpack_require__(/*! ./themeControls */ "./code/propertyControls/themeControls.ts"));


/***/ }),

/***/ "./code/propertyControls/intentControls.ts":
/*!*************************************************!*\
  !*** ./code/propertyControls/intentControls.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZW50Q29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL3Byb3BlcnR5Q29udHJvbHMvaW50ZW50Q29udHJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBaUQ7QUFDakQsbUNBQXNEO0FBRXRELFNBQWdCLGNBQWMsQ0FDMUIsZ0JBQXdCLHFCQUFPLENBQUMsQ0FBQyxDQUFDLEVBQ2xDLFFBQWlCLElBQUksRUFDckIsU0FBd0IsSUFBSTs7SUFFNUIsT0FBTztRQUNILE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7WUFDdEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQzdCLFlBQVksRUFBRSxhQUFhO1lBQzNCLE9BQU8sRUFBRSxxQkFBTztZQUNoQixZQUFZLEVBQUUscUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyx3QkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pELE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUs7U0FDekQ7S0FDSixDQUFBO0NBQ0o7QUFmRCx3Q0FlQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function intentControls(defaultIntent = framer_base_1.intents[0], title = true, hidden = null) {
    window["__checkBudget__"]();
    return {
        intent: {
            type: framer_1.ControlType.Enum,
            title: title ? "Intent" : " ",
            defaultValue: defaultIntent,
            options: framer_base_1.intents,
            optionTitles: framer_base_1.intents.map(pattern => framer_base_1.capitalize(pattern)),
            hidden: hidden ? props => !props[hidden] : () => false,
        },
    };
}
exports.intentControls = intentControls;
exports.__info__ = [];


/***/ }),

/***/ "./code/propertyControls/patternControls.ts":
/*!**************************************************!*\
  !*** ./code/propertyControls/patternControls.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybkNvbnRyb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9wcm9wZXJ0eUNvbnRyb2xzL3BhdHRlcm5Db250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFrRDtBQUNsRCxtQ0FBc0Q7QUFFdEQsU0FBZ0IsZUFBZSxDQUMzQixpQkFBeUIsc0JBQVEsQ0FBQyxDQUFDLENBQUMsRUFDcEMsUUFBaUIsSUFBSSxFQUNyQixTQUF3QixJQUFJOztJQUU1QixPQUFPO1FBQ0gsT0FBTyxFQUFFO1lBQ0wsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtZQUN0QixLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDOUIsWUFBWSxFQUFFLGNBQWM7WUFDNUIsT0FBTyxFQUFFLHNCQUFRO1lBQ2pCLFlBQVksRUFBRSxzQkFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLHdCQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUQsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSztTQUN6RDtLQUNKLENBQUE7Q0FDSjtBQWZELDBDQWVDIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function patternControls(defaultPattern = framer_base_1.patterns[0], title = true, hidden = null) {
    window["__checkBudget__"]();
    return {
        pattern: {
            type: framer_1.ControlType.Enum,
            title: title ? "Pattern" : " ",
            defaultValue: defaultPattern,
            options: framer_base_1.patterns,
            optionTitles: framer_base_1.patterns.map(pattern => framer_base_1.capitalize(pattern)),
            hidden: hidden ? props => !props[hidden] : () => false,
        },
    };
}
exports.patternControls = patternControls;
exports.__info__ = [];


/***/ }),

/***/ "./code/propertyControls/resizeControls.ts":
/*!*************************************************!*\
  !*** ./code/propertyControls/resizeControls.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplQ29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL3Byb3BlcnR5Q29udHJvbHMvcmVzaXplQ29udHJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBc0Q7QUFFdEQsU0FBZ0IsY0FBYyxDQUMxQixnQkFBd0IsTUFBTSxFQUM5QixTQUF3QixJQUFJOztJQUU1QixPQUFPO1FBQ0gsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtZQUN0QixLQUFLLEVBQUUsUUFBUTtZQUNmLFlBQVksRUFBRSxhQUFhO1lBQzNCLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQztZQUNuRCxZQUFZLEVBQUU7Z0JBQ1YsZUFBZTtnQkFDZixnQkFBZ0I7Z0JBQ2hCLHNCQUFzQjtnQkFDdEIsb0JBQW9CO2FBQ3ZCO1lBQ0QsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSztTQUN6RDtLQUNKLENBQUE7Q0FDSjtBQW5CRCx3Q0FtQkMifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
function resizeControls(defaultresize = "both", hidden = null) {
    window["__checkBudget__"]();
    return {
        resize: {
            type: framer_1.ControlType.Enum,
            title: "Resize",
            defaultValue: defaultresize,
            options: ["none", "both", "horizontal", "vertical"],
            optionTitles: [
                "None (Canvas)",
                "Both (Content)",
                "Horizontal (Content)",
                "Vertical (Content)",
            ],
            hidden: hidden ? props => !props[hidden] : () => false,
        },
    };
}
exports.resizeControls = resizeControls;
exports.__info__ = [];


/***/ }),

/***/ "./code/propertyControls/themeControls.ts":
/*!************************************************!*\
  !*** ./code/propertyControls/themeControls.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWVDb250cm9scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvcHJvcGVydHlDb250cm9scy90aGVtZUNvbnRyb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXVEO0FBQ3ZELG1DQUFzRDtBQUV0RCxTQUFnQixhQUFhLENBQ3pCLGVBQStCLG9CQUFNLENBQUMsS0FBSyxFQUMzQyxRQUFpQixJQUFJLEVBQ3JCLFNBQXdCLElBQUk7O0lBRTVCLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQU0sQ0FBQyxDQUFBO0lBRXZDLE9BQU87UUFDSCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1lBQ3RCLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRztZQUM1QixZQUFZLEVBQUUsWUFBc0I7WUFDcEMsT0FBTyxFQUFFLFdBQVc7WUFDcEIsWUFBWSxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyx3QkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUs7U0FDekQ7S0FDSixDQUFBO0NBQ0o7QUFqQkQsc0NBaUJDIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function themeControls(defaultTheme = framer_base_1.themes.light, title = true, hidden = null) {
    window["__checkBudget__"]();
    const themesNames = Object.keys(framer_base_1.themes);
    return {
        theme: {
            type: framer_1.ControlType.Enum,
            title: title ? "Theme" : " ",
            defaultValue: defaultTheme,
            options: themesNames,
            optionTitles: themesNames.map(themeName => framer_base_1.capitalize(themeName)),
            hidden: hidden ? props => !props[hidden] : () => false,
        },
    };
}
exports.themeControls = themeControls;
exports.__info__ = [];


/***/ }),

/***/ "./code/utils/OmitTheme.ts":
/*!*********************************!*\
  !*** ./code/utils/OmitTheme.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT21pdFRoZW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS91dGlscy9PbWl0VGhlbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiJ9

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./code/utils/centerLayout.tsx":
/*!*************************************!*\
  !*** ./code/utils/centerLayout.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VudGVyTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS91dGlscy9jZW50ZXJMYXlvdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUE4QjtBQU9qQixRQUFBLFlBQVksR0FBb0IsS0FBSyxDQUFDLEVBQUU7O0lBQ2pELE1BQU0sRUFBRSxNQUFNLEdBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQTtJQUV6QyxPQUFPLEtBQUssQ0FBQyxZQUFZLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDM0Msb0JBQUMsY0FBSyxJQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsTUFBTSxJQUN0RCxRQUFRLENBQ0wsQ0FDWCxDQUFDLENBQUMsQ0FBQyxDQUNBLG9CQUFDLEtBQUssQ0FBQyxRQUFRLFFBQUUsUUFBUSxDQUFrQixDQUM5QyxDQUFBO0NBQ0osQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
exports.centerLayout = props => {
    window["__checkBudget__"]();
    const { center = true, children } = props;
    return props.placeholders === null && center ? (React.createElement(framer_1.Stack, { alignment: "center", distribution: "center", size: "100%" }, children)) : (React.createElement(React.Fragment, null, children));
};
exports.__info__ = [];


/***/ }),

/***/ "./code/utils/index.ts":
/*!*****************************!*\
  !*** ./code/utils/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL3V0aWxzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0NBQThCO0FBQzlCLG9DQUE4QjtBQUM5Qix3Q0FBa0M7QUFDbEMsaUNBQTJCIn0=

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./centerLayout */ "./code/utils/centerLayout.tsx"));
__export(__webpack_require__(/*! ./resizeLayout */ "./code/utils/resizeLayout.tsx"));
__export(__webpack_require__(/*! ./placeholderState */ "./code/utils/placeholderState.tsx"));
__export(__webpack_require__(/*! ./OmitTheme */ "./code/utils/OmitTheme.ts"));


/***/ }),

/***/ "./code/utils/placeholderState.tsx":
/*!*****************************************!*\
  !*** ./code/utils/placeholderState.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Vob2xkZXJTdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvdXRpbHMvcGxhY2Vob2xkZXJTdGF0ZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFFOUIsNkNBQStDO0FBQy9DLG1DQUFxQztBQVNyQyxNQUFNLFVBQVUsR0FBa0I7SUFDOUIsUUFBUSxFQUFFLE1BQU07SUFDaEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsWUFBWSxFQUFFLFVBQVU7SUFDeEIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsUUFBUSxFQUFFLFFBQVE7Q0FDckIsQ0FBQTtBQUVELFNBQWdCLGdCQUFnQixDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFTOztJQUNsRSxNQUFNLEtBQUssR0FBRyxjQUFLLENBQUMsd0JBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFM0UsT0FBTyxDQUNILG9CQUFDLGNBQUssSUFDRixTQUFTLEVBQUMsVUFBVSxFQUNwQixTQUFTLEVBQUMsUUFBUSxFQUNsQixZQUFZLEVBQUMsUUFBUSxFQUNyQixJQUFJLEVBQUMsTUFBTSxFQUNYLEdBQUcsRUFBRSxDQUFDLEVBQ04sT0FBTyxFQUFFLEVBQUUsRUFDWCxVQUFVLEVBQUUsY0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQ3BDLE1BQU0sRUFBQyxnRkFBZ0YsRUFDdkYsTUFBTSxFQUFFLHlGQUF5RixjQUFLLENBQUMsS0FBSyxDQUN4RyxLQUFLLEVBQ0wsSUFBSSxDQUNQLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFFWixLQUFLLElBQUksQ0FDTiw0QkFDSSxLQUFLLGtDQUNFLFVBQVUsS0FDYixLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUN0QixRQUFRLEVBQ0osaUZBQWlGLEVBQ3JGLFVBQVUsRUFBRSxHQUFHLEVBQ2YsWUFBWSxFQUNSLEtBQUs7b0JBQ0wsZ0ZBQWdGLE9BR3ZGLEtBQUssQ0FDTCxDQUNSO1FBQ0EsS0FBSyxJQUFJLENBQ04sMkJBQ0ksS0FBSyxrQ0FDRSxVQUFVLEtBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFDdEIsUUFBUSxFQUNKLGlGQUFpRixPQUd4RixLQUFLLENBQ04sQ0FDUCxDQUNHLENBQ1gsQ0FBQTtDQUNKO0FBaERELDRDQWdEQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_base_1 = __webpack_require__(/*! framer-base */ "framer-base");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const textStyles = {
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    wordWrap: "normal",
};
function placeholderState({ theme, title, label, error }) {
    window["__checkBudget__"]();
    const color = framer_1.Color(framer_base_1.parseColor(theme.color[error ? "error" : "secondary"]));
    return (React.createElement(framer_1.Stack, { direction: "vertical", alignment: "center", distribution: "center", size: "100%", gap: 4, padding: 12, background: framer_1.Color.alpha(color, 0.12), radius: "calc(4px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1))", border: `calc(1px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)) dashed ${framer_1.Color.alpha(color, 0.32).toValue()}` },
        title && (React.createElement("h5", { style: Object.assign(Object.assign({}, textStyles), { color: color.toValue(), fontSize: "calc(13px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1))", fontWeight: 500, marginBottom: label &&
                    "calc(6px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1))" }) }, title)),
        label && (React.createElement("p", { style: Object.assign(Object.assign({}, textStyles), { color: color.toValue(), fontSize: "calc(12px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1))" }) }, label))));
}
exports.placeholderState = placeholderState;
exports.__info__ = [];


/***/ }),

/***/ "./code/utils/resizeLayout.tsx":
/*!*************************************!*\
  !*** ./code/utils/resizeLayout.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS91dGlscy9yZXNpemVMYXlvdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBZ0IsWUFBWSxDQUN4QixNQUFjLEVBQ2QsS0FBYSxFQUNiLE1BQWM7O0lBRWQsSUFBSSxNQUFNLEtBQUssWUFBWSxFQUFFO1FBQ3pCLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQTtLQUNwQjtTQUFNLElBQUksTUFBTSxLQUFLLFVBQVUsRUFBRTtRQUM5QixPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUE7S0FDbkI7U0FBTSxJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDMUIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQTtLQUMzQjtTQUFNO1FBQ0gsT0FBTyxFQUFFLENBQUE7S0FDWjtDQUNKO0FBZEQsb0NBY0MifQ==

Object.defineProperty(exports, "__esModule", { value: true });
function resizeLayout(resize, width, height) {
    window["__checkBudget__"]();
    if (resize === "horizontal") {
        return { height };
    }
    else if (resize === "vertical") {
        return { width };
    }
    else if (resize === "none") {
        return { width, height };
    }
    else {
        return {};
    }
}
exports.resizeLayout = resizeLayout;
exports.__info__ = [];


/***/ }),

/***/ "./code/utils/withHOC.tsx":
/*!********************************!*\
  !*** ./code/utils/withHOC.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aEhPQy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvdXRpbHMvd2l0aEhPQy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIseURBQWdEO0FBQ2hELGlEQUFnRTtBQUVoRSxTQUF3QixPQUFPLENBQUMsU0FBUzs7SUFDckMsT0FBTyxDQUFDLEtBQVUsRUFBRSxFQUFFOztRQUNsQixNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLGdDQUFZLENBQUMsQ0FBQTtRQUNuRCxPQUFPLENBQ0gsb0JBQUMsMkJBQWUsb0JBQUssS0FBSztZQUN0QixvQkFBQyxTQUFTLG9CQUFLLEtBQUssSUFBRSxZQUFZLEVBQUUsWUFBWSxJQUFJLENBQ3RDLENBQ3JCLENBQUE7S0FDSixDQUFBO0NBQ0o7QUFURCwwQkFTQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
const centerLayout_1 = __webpack_require__(/*! ./centerLayout */ "./code/utils/centerLayout.tsx");
function withHOC(Component) {
    window["__checkBudget__"]();
    return (props) => {
        window["__checkBudget__"]();
        const themeContext = React.useContext(styled_components_1.ThemeContext);
        return (React.createElement(centerLayout_1.centerLayout, Object.assign({}, props),
            React.createElement(Component, Object.assign({}, props, { themeContext: themeContext }))));
    };
}
exports.default = withHOC;
exports.__info__ = [];


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


packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: license, main, devDependencies, peerDependencies, framer, name, version, author, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"license\":\"MIT\",\"main\":\"dist/index.js\",\"devDependencies\":{\"@types/react\":\"^16.8\",\"prettier\":\"^1.19.1\",\"stylelint\":\"^13.2.0\",\"stylelint-config-recommended\":\"^3.0.0\",\"stylelint-config-styled-components\":\"^0.1.1\",\"stylelint-processor-styled-components\":\"^1.10.0\"},\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\",\"styled-components\":\"^4.4.0\"},\"framer\":{\"displayName\":\"Framer Base Kit\"},\"name\":\"@framer/framer.base\",\"version\":\"1.0.0\",\"author\":\"Framer Team\",\"dependencies\":{\"framer-base\":\"1.1.0-alpha.5\",\"polished\":\"^3.4.1\",\"react-feather\":\"^2.0.3\",\"styled-components\":\"^4.4.0\"}}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "framer-base":
/*!******************************!*\
  !*** external "framer-base" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer_base__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_styled_components__;

/***/ })

/******/ });
});