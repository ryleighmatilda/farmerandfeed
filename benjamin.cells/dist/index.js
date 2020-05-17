(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-hand-iphone-1"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-skin-apple-iphone-xs-spacegrey"); } catch(e) {} }()), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "framer-package-loader!@framer/framer.device-hand-iphone-1", "framer-package-loader!@framer/framer.device-skin-apple-iphone-xs-spacegrey", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-hand-iphone-1"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-skin-apple-iphone-xs-spacegrey"); } catch(e) {} }()), require("react")) : factory(root["Framer"], root["framer-package-loader!@framer/framer.device-hand-iphone-1"], root["framer-package-loader!@framer/framer.device-skin-apple-iphone-xs-spacegrey"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_hand_iphone_1__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_skin_apple_iphone_xs_spacegrey__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
	"./Cells.tsx": "./code/Cells.tsx",
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

/***/ "./code/Cells.tsx":
/*!************************!*\
  !*** ./code/Cells.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VsbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0NlbGxzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQUMvQixtQ0FBeUU7QUFZekUsTUFBYSxLQUFNLFNBQVEsS0FBSyxDQUFDLFNBQWdCO0lBQWpEOztRQUNFLFVBQUssR0FBRztZQUNOLEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQztJQXNISixDQUFDO0lBaEZDLE1BQU07O1FBQ0osTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXhELE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqQixNQUFNLElBQUksR0FBRztZQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtTQUMxQixDQUFDO1FBRUYsMkJBQTJCO1FBQzNCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQzdCLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNoRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUMvQixJQUFJLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFbEQsY0FBYztRQUNkLElBQUksSUFBSSxHQUFHLENBQUMsS0FLWCxFQUFFLEVBQUU7O1lBQ0gsT0FBTyxDQUNMLDZCQUNFLEtBQUssRUFBRTtvQkFDTCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsZUFBZSxFQUFFLEtBQUs7b0JB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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class Cells extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            cells: []
        };
    }
    render() {
        window["__checkBudget__"]();
        const { radius, padding, row, col, color } = this.props;
        const array = [];
        const size = {
            width: this.props.width,
            height: this.props.height
        };
        // Dynamic width and height
        var width = size.width / col;
        var width = width - (padding * (col - 1)) / col;
        var height = size.height / row;
        var height = height - (padding * (row - 1)) / row;
        // Cell method
        let Cell = (props) => {
            window["__checkBudget__"]();
            return (React.createElement("div", { style: {
                    position: "absolute",
                    backgroundColor: color,
                    borderRadius: radius,
                    width: width,
                    height: height,
                    left: props.x,
                    top: props.y
                } }));
        };
        for (var rowAmount = 0; rowAmount < row; rowAmount++) {
            window["__checkBudget__"]();
            for (var colAmount = 0; colAmount < col; colAmount++) {
                window["__checkBudget__"]();
                var x = colAmount * (width + padding);
                var y = rowAmount * (height + padding);
                array.push(React.createElement(Cell, { x: x, y: y, key: `${colAmount}:${rowAmount}` }));
            }
        }
        if (React.Children.count(this.props.content) > 0) {
            const contentLength = React.Children.count(this.props.content) - 1;
            const totalCells = row * col;
            if (totalCells >= contentLength + 1) {
                // Update cells with all new content layers
                for (var amount = 0; amount < contentLength + 1; amount++) {
                    window["__checkBudget__"]();
                    var curAmount = amount;
                    Cell = (props) => {
                        window["__checkBudget__"]();
                        return React.cloneElement(this.props.content[props.amount], {
                            top: props.y,
                            left: props.x,
                            width: width,
                            height: height,
                            radius: radius
                        });
                    };
                    var curX = array[amount].props.x;
                    var curY = array[amount].props.y;
                    array[amount] = (React.createElement(Cell, { x: curX, y: curY, key: `${amount}`, amount: curAmount }));
                }
            }
        }
        return React.createElement("div", null, array);
    }
}
Cells.defaultProps = {
    radius: 5,
    row: 2,
    col: 2,
    padding: 15,
    width: 300,
    height: 300,
    color: "rgba(136, 85, 255, 0.2)",
    index: true
};
Cells.propertyControls = {
    row: {
        type: framer_1.ControlType.Number,
        min: 1,
        max: 25,
        title: "Rows",
        displayStepper: true
    },
    col: {
        type: framer_1.ControlType.Number,
        min: 1,
        max: 25,
        title: "Columns",
        displayStepper: true
    },
    padding: { type: framer_1.ControlType.Number, min: 0, max: 100, title: "Padding" },
    radius: { type: framer_1.ControlType.Number, min: 0, max: 500, title: "Radius" },
    color: { type: framer_1.ControlType.Color, title: "Fill" },
    content: {
        type: framer_1.ControlType.Array,
        title: "Content",
        propertyControl: { type: framer_1.ControlType.ComponentInstance }
    }
};
exports.Cells = Cells;
exports.__info__ = [{ name: "Cells", children: false, type: "component" }];


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

                packages["@framer/framer.device-hand-iphone-1"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/framer.device-hand-iphone-1 */ "framer-package-loader!@framer/framer.device-hand-iphone-1")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"@framer/framer.device-hand-iphone-1","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceHand","type":"deviceHand"}]}}
                    return package
                }

                packages["@framer/framer.device-skin-apple-iphone-xs-spacegrey"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/framer.device-skin-apple-iphone-xs-spacegrey */ "framer-package-loader!@framer/framer.device-skin-apple-iphone-xs-spacegrey")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"@framer/framer.device-skin-apple-iphone-xs-spacegrey","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^3.0.1"},"framer":{"components":[{"name":"DeviceSkin","type":"deviceSkin"}]}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, name, version, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@framer/framer.device-hand-iphone-1":"^1.0.0","@framer/framer.device-skin-apple-iphone-xs-spacegrey":"^1.0.0","@types/react":"^16.4.16"},"peerDependencies":{"framer":"^0.10.0 || ^1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"3518334e-746f-489d-b1e3-fe511d2a1b17","displayName":"Cells"},"author":"Benjamin den Boer","name":"@framer/benjamin.cells","version":"1.2.0"};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "framer-package-loader!@framer/framer.device-hand-iphone-1":
/*!****************************************************************************!*\
  !*** external "framer-package-loader!@framer/framer.device-hand-iphone-1" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_hand_iphone_1__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/framer.device-hand-iphone-1'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_hand_iphone_1__;

/***/ }),

/***/ "framer-package-loader!@framer/framer.device-skin-apple-iphone-xs-spacegrey":
/*!*********************************************************************************************!*\
  !*** external "framer-package-loader!@framer/framer.device-skin-apple-iphone-xs-spacegrey" ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_skin_apple_iphone_xs_spacegrey__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/framer.device-skin-apple-iphone-xs-spacegrey'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_skin_apple_iphone_xs_spacegrey__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});