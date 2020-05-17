(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@fortawesome/free-regular-svg-icons"), require("@fortawesome/react-fontawesome"), require("feather-icons-react"), require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-hand-iphone-1"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-skin-apple-iphone-x-space-gray"); } catch(e) {} }()), require("material-icons-react"), require("react"), require("react-ionicons"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define(["@fortawesome/free-regular-svg-icons", "@fortawesome/react-fontawesome", "feather-icons-react", "framer", "framer-package-loader!@framer/framer.device-hand-iphone-1", "framer-package-loader!@framer/framer.device-skin-apple-iphone-x-space-gray", "material-icons-react", "react", "react-ionicons", "styled-components"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@fortawesome/free-regular-svg-icons"), require("@fortawesome/react-fontawesome"), require("feather-icons-react"), require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-hand-iphone-1"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-skin-apple-iphone-x-space-gray"); } catch(e) {} }()), require("material-icons-react"), require("react"), require("react-ionicons"), require("styled-components")) : factory(root["@fortawesome/free-regular-svg-icons"], root["@fortawesome/react-fontawesome"], root["feather-icons-react"], root["Framer"], root["framer-package-loader!@framer/framer.device-hand-iphone-1"], root["framer-package-loader!@framer/framer.device-skin-apple-iphone-x-space-gray"], root["material-icons-react"], root["React"], root["react-ionicons"], root["styled-components"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__fortawesome_free_regular_svg_icons__, __WEBPACK_EXTERNAL_MODULE__fortawesome_react_fontawesome__, __WEBPACK_EXTERNAL_MODULE_feather_icons_react__, __WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_hand_iphone_1__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_skin_apple_iphone_x_space_gray__, __WEBPACK_EXTERNAL_MODULE_material_icons_react__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_ionicons__, __WEBPACK_EXTERNAL_MODULE_styled_components__) {
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
	"./Examples.tsx": "./code/Examples.tsx",
	"./HomeIndicator.tsx": "./code/HomeIndicator.tsx",
	"./IconGenerator.tsx": "./code/IconGenerator.tsx",
	"./TabBar.tsx": "./code/TabBar.tsx",
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

/***/ "./code/Examples.tsx":
/*!***************************!*\
  !*** ./code/Examples.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhhbXBsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0V4YW1wbGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUE0RDtBQUU1RCxNQUFNLElBQUksR0FBRyxhQUFJLENBQUM7SUFDZCxNQUFNLEVBQUUsSUFBSTtJQUNaLEtBQUssRUFBRSxtQkFBVSxDQUFDLENBQUMsQ0FBQztJQUNwQixPQUFPLEVBQUUsbUJBQVUsQ0FBQyxDQUFDLENBQUM7SUFDdEIsUUFBUSxFQUFFLG1CQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLFNBQVMsRUFBRSxtQkFBVSxDQUFDLENBQUMsQ0FBQztDQUMzQixDQUFDLENBQUE7QUFFVyxRQUFBLEtBQUssR0FBYSxHQUFHLEVBQUU7O0lBQ2hDLE9BQU87UUFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsS0FBSzs7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNuQixnQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQ2hDO0tBQ0osQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLE1BQU0sR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRWpDLE9BQU87UUFDSCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7UUFDdkIsS0FBSzs7WUFDRCxnQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUNwRCxPQUFPLEVBQUUsR0FBRztnQkFDWixRQUFRLEVBQUUsRUFBRTthQUNmLENBQUMsQ0FBQTtTQUNMO0tBQ0osQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLFVBQVUsR0FBYSxHQUFHLEVBQUU7O0lBQ3JDLE9BQU87UUFDSCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7S0FDNUIsQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLFNBQVMsR0FBYSxHQUFHLEVBQUU7O0lBQ3BDLE9BQU87UUFDSCxLQUFLOztZQUNELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7WUFDMUIsZ0JBQU8sQ0FBQyxNQUFNLENBQ1YsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUM3QjtnQkFDSSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUIsRUFDRCxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUNqQyxDQUFBO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQTtTQUN4QjtLQUNKLENBQUE7Q0FDSixDQUFBO0FBQ0QifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const data = framer_1.Data({
    toggle: true,
    scale: framer_1.Animatable(1),
    opacity: framer_1.Animatable(1),
    rotation: framer_1.Animatable(0),
    rotationY: framer_1.Animatable(0),
});
exports.Scale = () => {
    window["__checkBudget__"]();
    return {
        scale: data.scale,
        onTap() {
            window["__checkBudget__"]();
            data.scale.set(0.6);
            framer_1.animate.spring(data.scale, 1);
        },
    };
};
exports.Rotate = props => {
    window["__checkBudget__"]();
    data.rotation.set(props.rotation);
    return {
        rotation: data.rotation,
        onTap() {
            window["__checkBudget__"]();
            framer_1.animate.spring(data.rotation, data.rotation.get() + 90, {
                tension: 250,
                friction: 20,
            });
        },
    };
};
exports.FlipOutput = () => {
    window["__checkBudget__"]();
    return {
        rotationY: data.rotationY,
    };
};
exports.FlipInput = () => {
    window["__checkBudget__"]();
    return {
        onTap() {
            window["__checkBudget__"]();
            const toggle = data.toggle;
            framer_1.animate.spring({ rotationY: data.rotationY }, {
                rotationY: toggle ? 360 : 0,
            }, { tension: 200, friction: 20 });
            data.toggle = !toggle;
        },
    };
};
exports.__info__ = [{ name: "Scale", type: "override" }, { name: "Rotate", type: "override" }, { name: "FlipOutput", type: "override" }, { name: "FlipInput", type: "override" }];


/***/ }),

/***/ "./code/HomeIndicator.tsx":
/*!********************************!*\
  !*** ./code/HomeIndicator.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZUluZGljYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvSG9tZUluZGljYXRvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBQXVEO0FBQ3ZELHlEQUF1QztBQUV2QyxNQUFNLGdCQUFnQixHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFBOzs7Ozs7Q0FNbEMsQ0FBQztBQVVGLE1BQWEsYUFBYyxTQUFRLEtBQUssQ0FBQyxTQUFnQjtJQWtCdkQsTUFBTTs7UUFDSixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QixNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssTUFBTSxDQUFDO1FBQy9CLE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFdkQsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDO1FBRTdCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUNyRCxjQUFjLEdBQUcsT0FBTyxDQUFDO1NBQzFCO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1lBQzdELGNBQWMsR0FBRyxPQUFPLENBQUM7U0FDMUI7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDL0QsY0FBYyxHQUFHLE9BQU8sQ0FBQztTQUMxQjthQUFNO1lBQ0wsY0FBYyxHQUFHLE9BQU8sQ0FBQztTQUMxQjtRQUVELE1BQU0sWUFBWSxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFBOzBCQUNULGVBQWU7OztlQUcxQixjQUFjOzs7S0FHeEIsQ0FBQztRQUVGLE9BQU8sQ0FDTCxvQkFBQyxnQkFBZ0I7WUFDZixvQkFBQyxZQUFZLE9BQUcsQ0FDQyxDQUNwQixDQUFDO0tBQ0g7O0FBaERELHlCQUF5QjtBQUNsQiwwQkFBWSxHQUFHO0lBQ3BCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLEdBQUc7SUFDVixJQUFJLEVBQUUsTUFBTTtDQUNiLENBQUM7QUFFRixnQ0FBZ0M7QUFDekIsOEJBQWdCLEdBQXFCO0lBQzFDLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztRQUMxQixZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1FBQy9CLEtBQUssRUFBRSxNQUFNO0tBQ2Q7Q0FDRixDQUFDO0FBaEJKLHNDQWtEQztBQUVELGtCQUFlLGFBQWEsQ0FBQztBQUM3QiJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
const IndicatorWrapper = styled_components_1.default.div `
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
class HomeIndicator extends React.Component {
    render() {
        window["__checkBudget__"]();
        const { tint } = this.props;
        const isDark = tint === "dark";
        const backgroundColor = isDark ? "#000000" : "#FFFFFF";
        let indicatorWidth = "134px";
        if (this.props.width > 375 && this.props.width <= 812) {
            indicatorWidth = "209px";
        }
        else if (this.props.width > 834 && this.props.width <= 1024) {
            indicatorWidth = "273px";
        }
        else if (this.props.width >= 1194 && this.props.width <= 1366) {
            indicatorWidth = "315px";
        }
        else {
            indicatorWidth = "35.7%";
        }
        const IndicatorBar = styled_components_1.default.div `
      background-color: ${backgroundColor};
      height: 5px;
      border-radius: 50px;
      width: ${indicatorWidth};
      margin: auto;
      margin-top: 21px;
    `;
        return (React.createElement(IndicatorWrapper, null,
            React.createElement(IndicatorBar, null)));
    }
}
// Set default properties
HomeIndicator.defaultProps = {
    height: 34,
    width: 375,
    tint: "dark"
};
// Items shown in property panel
HomeIndicator.propertyControls = {
    tint: {
        type: framer_1.ControlType.Enum,
        options: ["dark", "light"],
        optionTitles: ["Dark", "Light"],
        title: "Tint"
    }
};
exports.HomeIndicator = HomeIndicator;
exports.default = HomeIndicator;
exports.__info__ = [{ name: "HomeIndicator", children: false, type: "component" }];


/***/ }),

/***/ "./code/IconGenerator.tsx":
/*!********************************!*\
  !*** ./code/IconGenerator.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbkdlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvSWNvbkdlbmVyYXRvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBQXVEO0FBQ3ZELDZEQUE4QztBQUM5QywrREFBZ0Q7QUFDaEQsc0VBQWlFO0FBQ2pFLDZEQUE2RDtBQUM3RCwwQ0FBMEM7QUFDMUMseURBQXVDO0FBV3ZDLE1BQU0sVUFBVSxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFBLEVBQUUsQ0FBQztBQUVoQyxNQUFhLElBQUssU0FBUSxLQUFLLENBQUMsU0FBZ0I7SUFzQjlDLE1BQU07O1FBQ0osSUFBSSxVQUFVLEdBQUcsQ0FBQyxLQUFzQixFQUFFLEVBQUU7O1lBQzFDLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztZQUM5QyxJQUFJLE1BQU0sR0FDUixJQUFJO2dCQUNKLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUM1QyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRWpDLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7Z0JBQzNCLE9BQU8sQ0FDTCxvQkFBQyw2QkFBVyxJQUNWLElBQUksRUFBRSxJQUFJLEVBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FDdkIsQ0FDSCxDQUFDO2FBQ0g7WUFDRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssVUFBVSxFQUFFO2dCQUM1QixPQUFPLENBQ0wsb0JBQUMsOEJBQVksSUFDWCxJQUFJLEVBQUUsSUFBSSxFQUNWLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUN2QixDQUNILENBQUM7YUFDSDtZQUNELElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxhQUFhLEVBQUU7Z0JBQy9CLE9BQU8sQ0FDTCxvQkFBQyxtQ0FBZSxJQUNkLElBQUksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQ25CLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFDN0QsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUN2QixVQUFVLEVBQUUsSUFBSSxHQUNoQixDQUNILENBQUM7YUFDSDtZQUNELElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxVQUFVLEVBQUU7Z0JBQzVCLE9BQU8sQ0FDTCxvQkFBQyxPQUFPLElBQ04sSUFBSSxFQUFFLElBQUksRUFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQ3ZCLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FDN0QsQ0FDSCxDQUFDO2FBQ0g7U0FDRixDQUFDO1FBRUYsT0FBTyxDQUNMO1lBQ0Usb0JBQUMsVUFBVSxJQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBSSxDQUMvQixDQUNQLENBQUM7S0FDSDs7QUExRUQseUJBQXlCO0FBQ2xCLGlCQUFZLEdBQUc7SUFDcEIsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLE1BQU07SUFDYixHQUFHLEVBQUUsU0FBUztDQUNmLENBQUM7QUFFRixnQ0FBZ0M7QUFDekIscUJBQWdCLEdBQXFCO0lBQzFDLEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLFVBQVU7UUFDakIsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDO1FBQzNELFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQztLQUNsRTtJQUNELElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0lBQ2pELEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO0NBQ25ELENBQUM7QUFwQkosb0JBNEVDO0FBRUQsa0JBQWUsSUFBSSxDQUFDO0FBQ3BCIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const feather_icons_react_1 = __webpack_require__(/*! feather-icons-react */ "feather-icons-react");
const material_icons_react_1 = __webpack_require__(/*! material-icons-react */ "material-icons-react");
const react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
const Icons = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");
const Ionicon = __webpack_require__(/*! react-ionicons */ "react-ionicons");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
const CustomIcon = styled_components_1.default.div ``;
class Icon extends React.Component {
    render() {
        window["__checkBudget__"]();
        let RenderIcon = (props) => {
            window["__checkBudget__"]();
            let name = `${this.props.icon.toLowerCase()}`;
            let faName = "fa" +
                `${this.props.icon.charAt(0).toUpperCase()}` +
                `${this.props.icon.substr(1)}`;
            if (props.set === "feather") {
                return (React.createElement(feather_icons_react_1.default, { icon: name, width: this.props.width, height: this.props.height, color: this.props.color }));
            }
            if (props.set === "material") {
                return (React.createElement(material_icons_react_1.default, { icon: name, size: this.props.width, color: this.props.color }));
            }
            if (props.set === "fontawesome") {
                return (React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: Icons[faName], style: { width: this.props.width, height: this.props.height }, color: this.props.color, fixedWidth: true }));
            }
            if (props.set === "ionicons") {
                return (React.createElement(Ionicon, { icon: name, color: this.props.color, style: { width: this.props.width, height: this.props.height } }));
            }
        };
        return (React.createElement("div", null,
            React.createElement(RenderIcon, { set: this.props.set })));
    }
}
// Set default properties
Icon.defaultProps = {
    icon: "home",
    width: 26,
    height: 26,
    color: "#000",
    set: "feather"
};
// Items shown in property panel
Icon.propertyControls = {
    set: {
        type: framer_1.ControlType.Enum,
        title: "Icon Set",
        options: ["feather", "material", "ionicons", "fontawesome"],
        optionTitles: ["Feather", "Material", "Ionicons", "Font Awesome"]
    },
    icon: { type: framer_1.ControlType.String, title: "Icon" },
    color: { type: framer_1.ControlType.Color, title: "Color" }
};
exports.Icon = Icon;
exports.default = Icon;
exports.__info__ = [{ name: "Icon", children: false, type: "component" }];


/***/ }),

/***/ "./code/TabBar.tsx":
/*!*************************!*\
  !*** ./code/TabBar.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiQmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9UYWJCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUFzRDtBQUN0RCxtREFBc0M7QUFDdEMseURBQXNDO0FBRXRDLE1BQU0sT0FBTyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFBOzs7Ozs7Ozs7O0NBVXpCLENBQUE7QUFFRCxNQUFNLFFBQVEsR0FBRywyQkFBTSxDQUFDLENBQUMsQ0FBQTs7Ozs7Q0FLeEIsQ0FBQTtBQXlCRCxNQUFhLE1BQU8sU0FBUSxLQUFLLENBQUMsU0FBZ0I7SUE0SDlDLE1BQU07O1FBQ0YsTUFBTSxFQUNGLElBQUksRUFDSixNQUFNLEVBQ04sUUFBUSxFQUNSLFFBQVEsRUFDUixVQUFVLEVBQ1YsU0FBUyxFQUNULFNBQVMsRUFDVCxPQUFPLEVBQ1AsT0FBTyxFQUNQLFNBQVMsRUFDVCxRQUFRLEVBQ1IsUUFBUSxFQUNSLGFBQWEsRUFDYixXQUFXLEVBQ1gsU0FBUyxFQUNULGtCQUFrQixFQUNsQixHQUFHLEVBQ0gsS0FBSyxHQUNSLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUVkLE1BQU0sVUFBVSxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFBOzs7OztvQkFLakIsa0JBQWtCOztLQUVqQyxDQUFBO1FBRUcsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFBO1FBQ2QsSUFBSSxRQUFRLEdBQUc7WUFDWCxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7WUFDbkIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO1lBQ25CLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQztZQUN2QixDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7WUFDckIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO1NBQ3hCLENBQUE7UUFFRCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxFQUFFLEtBQUssRUFBRSxF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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const IconGenerator_1 = __webpack_require__(/*! ./IconGenerator */ "./code/IconGenerator.tsx");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
const TabIcon = styled_components_1.default.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 4px;
  font-size: 10px;
  align-items: center;
  background: transparent;
  height: 48px;
  width: 49px;
`;
const TabLabel = styled_components_1.default.p `
  margin: 0;
  flex: 0 100%;
  text-align: center;
  font-weight: 500;
`;
class TabBar extends React.Component {
    render() {
        window["__checkBudget__"]();
        const { Tabs, labels, labelOne, labelTwo, labelThree, labelFour, labelFive, IconOne, IconTwo, IconThree, IconFour, IconFive, inactiveColor, activeColor, activeTab, tabBackgroundColor, set, width, } = this.props;
        const StackGroup = styled_components_1.default.div `
      display: flex;
      justify-content: space-around;
      height: 100%;
      width: 100%;
      background: ${tabBackgroundColor};
      box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25) inset;
    `;
        var items = [];
        var tabItems = [
            [labelOne, IconOne],
            [labelTwo, IconTwo],
            [labelThree, IconThree],
            [labelFour, IconFour],
            [labelFive, IconFive],
        ];
        for (var index = 0; index < Tabs; index++) {
            window["__checkBudget__"]();
            const checkColor = activeTab === index + 1 ? activeColor : inactiveColor;
            items.push(React.createElement(TabIcon, { style: width > 767 ? { width: "100%" } : { width: 49 }, key: index },
                React.createElement(IconGenerator_1.Icon, { icon: tabItems[index][1], width: 26, height: 26, color: checkColor, set: set }),
                React.createElement(TabLabel, { style: width > 767
                        ? {
                            textAlign: "left",
                            flex: 0,
                            marginLeft: "10px",
                            color: checkColor,
                        }
                        : {
                            textAlign: "center",
                            flex: "0 100%",
                            marginLeft: "0",
                            color: checkColor,
                        } }, labels ? tabItems[index][0] : " ")));
        }
        return React.createElement(StackGroup, null, items);
    }
}
// Set default properties
TabBar.defaultProps = {
    Tabs: 5,
    labelOne: "Home",
    labelTwo: "Search",
    labelThree: "Inbox",
    labelFour: "Archives",
    labelFive: "Settings",
    labels: true,
    IconOne: "home",
    customIconOne: " ",
    customIconTwo: " ",
    customIconThree: " ",
    customIconFour: " ",
    customIconFive: " ",
    IconTwo: "search",
    IconThree: "inbox",
    IconFour: "folder",
    IconFive: "settings",
    height: 83,
    width: 375,
    inactiveColor: "#A0A1A0",
    activeColor: "#0055FF",
    activeTab: 1,
    tabBackgroundColor: "rgba(250, 250, 250, 0.9)",
    set: "feather",
};
// Items shown in property panel
TabBar.propertyControls = {
    set: {
        type: framer_1.ControlType.Enum,
        title: "Icon Set",
        options: ["feather", "material", "ionicons", "fontawesome"],
        optionTitles: ["Feather", "Material", "Ionicons", "Font Awesome"],
    },
    labels: {
        type: framer_1.ControlType.Boolean,
        title: "Labels",
        disabledTitle: "Hide",
        enabledTitle: "Show",
    },
    Tabs: {
        type: framer_1.ControlType.Number,
        min: 2,
        max: 5,
        title: "Tabs",
        displayStepper: true,
    },
    activeTab: {
        type: framer_1.ControlType.Number,
        min: 1,
        max: 5,
        title: "Active Tab",
    },
    activeColor: { type: framer_1.ControlType.Color, title: "Active Color" },
    inactiveColor: { type: framer_1.ControlType.Color, title: "Inactive Color" },
    tabBackgroundColor: { type: framer_1.ControlType.Color, title: "Background" },
    IconOne: {
        type: framer_1.ControlType.String,
        title: "Icon 1",
        placeholder: "Icon Name",
    },
    labelOne: {
        type: framer_1.ControlType.String,
        title: "Label 1",
        placeholder: "Label Text",
        hidden: props => props.labels !== true,
    },
    IconTwo: {
        type: framer_1.ControlType.String,
        title: "Icon 2",
        placeholder: "Icon Name",
        hidden: props => props.Tabs < 2,
    },
    labelTwo: {
        type: framer_1.ControlType.String,
        title: "Label 2",
        placeholder: "Label Text",
        hidden: props => props.labels !== true || props.Tabs < 2,
    },
    IconThree: {
        type: framer_1.ControlType.String,
        title: "Icon 3",
        placeholder: "Icon Name",
        hidden: props => props.Tabs < 3,
    },
    labelThree: {
        type: framer_1.ControlType.String,
        title: "Label 3",
        placeholder: "Label Text",
        hidden: props => props.labels !== true || props.Tabs < 3,
    },
    IconFour: {
        type: framer_1.ControlType.String,
        title: "Icon 4",
        placeholder: "Icon Name",
        hidden: props => props.Tabs < 4,
    },
    labelFour: {
        type: framer_1.ControlType.String,
        title: "Label 4",
        placeholder: "Label Text",
        hidden: props => props.labels !== true || props.Tabs < 4,
    },
    IconFive: {
        type: framer_1.ControlType.String,
        title: "Icon 5",
        placeholder: "Icon Name",
        hidden: props => props.Tabs < 5,
    },
    labelFive: {
        type: framer_1.ControlType.String,
        title: "Label 5",
        placeholder: "Label Text",
        hidden: props => props.labels !== true || props.Tabs < 5,
    },
};
exports.TabBar = TabBar;
exports.__info__ = [{ name: "TabBar", children: false, type: "component" }];


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
                    package.__framer__.packageJson = {"name":"framer","version":"1.0.9","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@microsoft/api-extractor":"^7.1.5","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/react":"16.8.4","@types/react-dom":"^16.8","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^0.18.2","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"3.3","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
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

                packages["@framer/framer.device-skin-apple-iphone-x-space-gray"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/framer.device-skin-apple-iphone-x-space-gray */ "framer-package-loader!@framer/framer.device-skin-apple-iphone-x-space-gray")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"@framer/framer.device-skin-apple-iphone-x-space-gray","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceSkin","type":"deviceSkin"}]}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, keywords, license, devDependencies, peerDependencies, framer, author, dependencies, name, version, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","keywords":["apple","iOS","iPhone","kit","ui","trending"],"license":"MIT","devDependencies":{"@framer/framer.device-hand-iphone-1":"^1.0.0","@framer/framer.device-skin-apple-iphone-x-space-gray":"^1.0.0","@types/react":"^16.0.31"},"peerDependencies":{"framer":"^0.9.2 || ^1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"4f484cdd-7d29-45fd-a70f-6551c1b71a82","displayName":"iOS Tab Bar"},"author":"Rocco Marinaccio","dependencies":{"@fortawesome/free-regular-svg-icons":"^5.3.1","@fortawesome/react-fontawesome":"^0.1.4","@types/styled-components":"^4.1.15","feather-icons-react":"^0.2.0","material-icons-react":"^1.0.4","react-fontawesome":"^1.6.1","react-icons-kit":"^1.2.0","react-ionicons":"^2.1.6","styled-components":"^4.2.0"},"name":"@framer/rmarinac89.ios-tab-bar","version":"1.3.0"};

/***/ }),

/***/ "@fortawesome/free-regular-svg-icons":
/*!******************************************************!*\
  !*** external "@fortawesome/free-regular-svg-icons" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__fortawesome_free_regular_svg_icons__;

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__fortawesome_react_fontawesome__;

/***/ }),

/***/ "feather-icons-react":
/*!**************************************!*\
  !*** external "feather-icons-react" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_feather_icons_react__;

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

/***/ "framer-package-loader!@framer/framer.device-skin-apple-iphone-x-space-gray":
/*!*********************************************************************************************!*\
  !*** external "framer-package-loader!@framer/framer.device-skin-apple-iphone-x-space-gray" ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_skin_apple_iphone_x_space_gray__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/framer.device-skin-apple-iphone-x-space-gray'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_skin_apple_iphone_x_space_gray__;

/***/ }),

/***/ "material-icons-react":
/*!***************************************!*\
  !*** external "material-icons-react" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_material_icons_react__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-ionicons":
/*!*********************************!*\
  !*** external "react-ionicons" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_ionicons__;

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