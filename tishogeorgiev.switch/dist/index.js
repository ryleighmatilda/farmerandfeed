(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-skin-apple-iphone-xs-spacegrey"); } catch(e) {} }()), require("hotkeys-js"), require("react"), require("reactn"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "framer-package-loader!@framer/framer.device-skin-apple-iphone-xs-spacegrey", "hotkeys-js", "react", "reactn"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-skin-apple-iphone-xs-spacegrey"); } catch(e) {} }()), require("hotkeys-js"), require("react"), require("reactn")) : factory(root["Framer"], root["framer-package-loader!@framer/framer.device-skin-apple-iphone-xs-spacegrey"], root["hotkeys-js"], root["React"], root["reactn"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_skin_apple_iphone_xs_spacegrey__, __WEBPACK_EXTERNAL_MODULE_hotkeys_js__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_reactn__) {
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
	"./AutoAnimatedState.tsx": "./code/AutoAnimatedState.tsx",
	"./Switch.tsx": "./code/Switch.tsx",
	"./SwitchOverrideExamples.tsx": "./code/SwitchOverrideExamples.tsx",
	"./SwitchToStateAction.tsx": "./code/SwitchToStateAction.tsx",
	"./actions.ts": "./code/actions.ts",
	"./canvas.tsx": "./code/canvas.tsx",
	"./controls.ts": "./code/controls.ts",
	"./hooks/useDoubleTap.ts": "./code/hooks/useDoubleTap.ts",
	"./hooks/useLongPress.ts": "./code/hooks/useLongPress.ts",
	"./index.ts": "./code/index.ts",
	"./placeholderState.tsx": "./code/placeholderState.tsx",
	"./store/globalStore.ts": "./code/store/globalStore.ts",
	"./store/keyStore.ts": "./code/store/keyStore.ts",
	"./thumbnailStyles.ts": "./code/thumbnailStyles.ts",
	"./transitions.ts": "./code/transitions.ts",
	"./useWhyDidYouUpdate.ts": "./code/useWhyDidYouUpdate.ts",
	"./utils/addAnimatableWrapperToNodeIfNeeded.tsx": "./code/utils/addAnimatableWrapperToNodeIfNeeded.tsx",
	"./utils/calculateRect.ts": "./code/utils/calculateRect.ts",
	"./utils/equalizeArrayLength.ts": "./code/utils/equalizeArrayLength.ts",
	"./utils/extractEventHandlersFromProps.ts": "./code/utils/extractEventHandlersFromProps.ts",
	"./utils/nodeHelpers.ts": "./code/utils/nodeHelpers.ts",
	"./utils/omit.ts": "./code/utils/omit.ts",
	"./utils/pick.ts": "./code/utils/pick.ts",
	"./utils/propNameHelpers.ts": "./code/utils/propNameHelpers.ts",
	"./utils/randomID.ts": "./code/utils/randomID.ts",
	"./utils/styleParsing.ts": "./code/utils/styleParsing.ts"
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

/***/ "./code/AutoAnimatedState.tsx":
/*!************************************!*\
  !*** ./code/AutoAnimatedState.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0b0FuaW1hdGVkU3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0F1dG9BbmltYXRlZFN0YXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixpQ0FBK0Q7QUFDL0QsbUNBQTJDO0FBQzNDLCtDQUEyQztBQUMzQyx1Q0FBbUM7QUFDbkMsK0NBQTJDO0FBQzNDLHVEQVM2QjtBQUM3QixxREFXNEI7QUFDNUIsbUdBQStGO0FBRS9GLE1BQU0scUJBQXFCLEdBQUc7SUFDMUIsR0FBRyxFQUFFLElBQUk7SUFDVCxLQUFLLEVBQUUsSUFBSTtJQUNYLE1BQU0sRUFBRSxJQUFJO0lBQ1osSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsSUFBSTtDQUNmLENBQUE7QUFFRCxNQUFNLGtCQUFrQixHQUFHLENBQUMsRUFDeEIsTUFBTSxFQUNOLE1BQU0sRUFDTix5QkFBeUIsRUFDekIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixTQUFTLEVBQ1QsMkJBQTJCLEdBQUcsSUFBSSxFQUNsQyxhQUFhLEdBQUcsSUFBSSxFQUNwQixTQUFTLEdBQUcsSUFBSSxFQUNoQixRQUFRLEdBQUcsSUFBSSxFQUNmLGFBQWEsR0FBRyxJQUFJLEdBQ3ZCLEVBQUUsRUFBRTs7SUFDRCxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLGdCQUFRLENBQUMsbUJBQVEsRUFBRSxDQUFDLENBQUE7SUFDcEMsTUFBTSxjQUFjLEdBQUcsUUFBUSxJQUFJLG1CQUFRLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDL0MsTUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDLFlBQVksQ0FBQTtJQUVoRCxtRkFBbUY7SUFDbkYsTUFBTSxHQUFHLDhCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2pDLE1BQU0sR0FBRyw4QkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUVqQyxrRUFBa0U7SUFDbEUsK0RBQStEO0lBQy9ELG1F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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const keyStore_1 = __webpack_require__(/*! ./store/keyStore */ "./code/store/keyStore.ts");
const pick_1 = __webpack_require__(/*! ./utils/pick */ "./code/utils/pick.ts");
const randomID_1 = __webpack_require__(/*! ./utils/randomID */ "./code/utils/randomID.ts");
const styleParsing_1 = __webpack_require__(/*! ./utils/styleParsing */ "./code/utils/styleParsing.ts");
const nodeHelpers_1 = __webpack_require__(/*! ./utils/nodeHelpers */ "./code/utils/nodeHelpers.ts");
const addAnimatableWrapperToNodeIfNeeded_1 = __webpack_require__(/*! ./utils/addAnimatableWrapperToNodeIfNeeded */ "./code/utils/addAnimatableWrapperToNodeIfNeeded.tsx");
const propsForPositionReset = {
    top: null,
    right: null,
    bottom: null,
    left: null,
    center: null,
};
const _AutoAnimatedState = ({ source, target, transitionPropsForElement, sourceParentSize, targetParentSize, direction, morphCodeComponentPropsOnly = true, parentContext = null, sourceKey = null, keyCache = null, transitionKey = null, }) => {
    window["__checkBudget__"]();
    const [id, _] = react_1.useState(randomID_1.randomID());
    const keySourceCache = keyCache || keyStore_1.getCache(id);
    const getSourceKey = keySourceCache.getSourceKey;
    // Ensure both source and target have an id and key, even if they're auto-generated
    source = nodeHelpers_1.nodeWithIdAndKey(source);
    target = nodeHelpers_1.nodeWithIdAndKey(target);
    // The transition key will be used to create a unique name for the
    // initial/next variant used in animating the state transition.
    // All children will share the same transition key, so options like
    // staggerChildren can take effect.
    const tkey = transitionKey || `${source.key}-${target.key}`;
    const sourceNodeType = nodeHelpers_1.getNodeType(source);
    const targetNodeType = nodeHelpers_1.getNodeType(target);
    const useAbsolutePositioning = !(["StackLegacyContainer", "Stack"].indexOf(sourceNodeType) > -1 ||
        ["StackLegacyContainer", "Stack"].indexOf(targetNodeType) > -1 ||
        parentContext === "Stack");
    const controls = framer_1.useAnimation();
    const initialVariantName = `__switch_initial_${tkey}`;
    const nextVariantName = `__switch_next_${tkey}`;
    const isRoot = transitionKey === null;
    const sourcePositionAndSizeProps = nodeHelpers_1.getNodeRect(source, sourceParentSize);
    const targetPositionAndSizeProps = nodeHelpers_1.getNodeRect(target, targetParentSize);
    const shouldAnimateChildren = nodeHelpers_1.canAnimateNodeChildren(source) && nodeHelpers_1.canAnimateNodeChildren(target);
    const sourceStateChildren = shouldAnimateChildren
        ? nodeHelpers_1.getNodeChildren(source)
        : [];
    const targetStateChildren = shouldAnimateChildren
        ? nodeHelpers_1.getNodeChildren(target)
        : [];
    const morphingChildrenPairs = [];
    const morphingChildrenIds = [];
    const enteringChildrenIds = [];
    const exitingChildrenIds = [];
    const sourceStateChildrenIds = sourceStateChildren.map(nodeHelpers_1.getNodeId);
    targetStateChildren.forEach(child => {
        window["__checkBudget__"]();
        const name = nodeHelpers_1.getNodeName(child);
        const id = nodeHelpers_1.getNodeId(child);
        // if the child isn't visible in the target state, skip it, so it can be marked for exiting
        if (!nodeHelpers_1.isNodeVisible(child)) {
            return;
        }
        // find the first match by name that's not already in the morphing children list
        const match = sourceStateChildren.find(otherChild => {
            window["__checkBudget__"]();
            const otherName = nodeHelpers_1.getNodeName(otherChild);
            const otherId = nodeHelpers_1.getNodeId(otherChild);
            return (name === otherName &&
                morphingChildrenIds.indexOf(otherId) === -1);
        });
        if (match) {
            const otherId = nodeHelpers_1.getNodeId(match);
            morphingChildrenIds.push(otherId);
            morphingChildrenPairs.push({ source: otherId, target: id });
            return;
        }
        // if there's no match, this child is entering the scene
        enteringChildrenIds.push(id);
    });
    // exiting children will be all children from the current state that haven't been tagged as morphing
    sourceStateChildren.forEach(child => {
        window["__checkBudget__"]();
        const id = nodeHelpers_1.getNodeId(child);
        if (morphingChildrenIds.indexOf(id) === -1) {
            exitingChildrenIds.push(id);
        }
    });
    // put together final hierarchy
    // step 1: replace morphing children with their equivalents from current state
    // morphing children will be evaluated separately, so the fact that we're using
    // the source child in this stage of the hierarchy doesn't mean much.
    const targetHierarchy = targetStateChildren.map(child => {
        window["__checkBudget__"]();
        const id = nodeHelpers_1.getNodeId(child);
        const morphingPair = morphingChildrenPairs.find(c => c.target === id);
        if (morphingPair) {
            return sourceStateChildren.find(c => nodeHelpers_1.getNodeId(c) === morphingPair.source);
        }
        return child;
    });
    // step 2: place exiting children back into the hierarchy
    exitingChildrenIds.forEach(id => {
        window["__checkBudget__"]();
        const index = sourceStateChildrenIds.indexOf(id);
        let closestMorphingChildId;
        for (let i = index; i >= 0; i--) {
            window["__checkBudget__"]();
            if (morphingChildrenIds.indexOf(sourceStateChildrenIds[i]) !== -1) {
                closestMorphingChildId = sourceStateChildrenIds[i];
                break;
            }
        }
        const indexOfClosestMorphingChild = targetHierarchy.findIndex(c => nodeHelpers_1.getNodeId(c) === closestMorphingChildId);
        const child = sourceStateChildren.find(c => nodeHelpers_1.getNodeId(c) === id);
        if (typeof indexOfClosestMorphingChild !== "undefined") {
            targetHierarchy.splice(indexOfClosestMorphingChild + 1, 0, child);
        }
        else {
            targetHierarchy.unshift(child);
        }
    });
    // ------------ Build Final Hierarchy with Animated Elements --------------
    const animatedHierarchy = targetHierarchy.map(child => {
        window["__checkBudget__"]();
        const id = nodeHelpers_1.getNodeId(child);
        const morphingPair = morphingChildrenPairs.find(c => c.source === id);
        if (morphingPair) {
            const targetChild = targetStateChildren.find(c => nodeHelpers_1.getNodeId(c) === morphingPair.target);
            const key = getSourceKey(targetChild.key, child.key);
            return React.createElement(exports.AutoAnimatedState, {
                key,
                sourceKey: key,
                transitionKey: tkey,
                source: child,
                target: targetChild,
                transitionPropsForElement,
                sourceParentSize: framer_1.Size(sourcePositionAndSizeProps.width, sourcePositionAndSizeProps.height),
                targetParentSize: framer_1.Size(targetPositionAndSizeProps.width, targetPositionAndSizeProps.height),
                direction,
                parentContext: ["StackLegacyContainer", "Stack"].indexOf(sourceNodeType) >
                    -1 ||
                    ["StackLegacyContainer", "Stack"].indexOf(targetNodeType) >
                        -1
                    ? "Stack"
                    : null,
                keyCache: keySourceCache,
            });
        }
        const positionAndSize = nodeHelpers_1.getNodeRect(child, sourcePositionAndSizeProps);
        const wrappedChild = addAnimatableWrapperToNodeIfNeeded_1.addAnimatableWrapperToNodeIfNeeded(child, Object.assign(Object.assign({}, propsForPositionReset), { width: "100%", height: "100%" }));
        if (enteringChildrenIds.indexOf(id) !== -1) {
            const positionAndSizeInTarget = nodeHelpers_1.getNodeRect(child, targetPositionAndSizeProps);
            let props = Object.assign(Object.assign(Object.assign({}, propsForPositionReset), positionAndSizeInTarget), transitionPropsForElement({
                source: child,
                sourceRect: positionAndSize,
                transition: "enter",
                transitionKey: tkey,
                useAbsolutePositioning,
            }));
            props = useAbsolutePositioning
                ? props
                : styleParsing_1.filterOutAbsolutePositioningProps(props);
            return react_1.cloneElement(wrappedChild, props);
        }
        if (exitingChildrenIds.indexOf(id) !== -1) {
            let props = Object.assign(Object.assign(Object.assign({}, propsForPositionReset), positionAndSize), transitionPropsForElement({
                source: child,
                sourceRect: positionAndSize,
                transition: "exit",
                transitionKey: tkey,
                useAbsolutePositioning,
            }));
            props = useAbsolutePositioning
                ? props
                : styleParsing_1.filterOutAbsolutePositioningProps(props);
            return react_1.cloneElement(wrappedChild, props);
        }
    });
    // ------------ Set Up Transition Effect --------------
    // Decide which transition to run
    const hasNonAnimatableTransitions = sourceNodeType === targetNodeType &&
        !styleParsing_1.isBackgroundTransitionAnimatable(source, target);
    const shouldCrossDissolve = sourceNodeType !== targetNodeType ||
        hasNonAnimatableTransitions ||
        !nodeHelpers_1.isNodeAnimatable(source) ||
        !nodeHelpers_1.isNodeAnimatable(target);
    const shouldMorphComponentProps = morphCodeComponentPropsOnly &&
        sourceNodeType === "ComponentContainer" &&
        targetNodeType === "ComponentContainer" &&
        nodeHelpers_1.isSameComponent(source, target);
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        // We only need to start the variant transition at the root level.
        // animations deeper in the hierarchy will be automatically triggered,
        // because they share the same variant name through the transition key.
        if (!isRoot) {
            return;
        }
        if (source.type === target.type &&
            nodeHelpers_1.getNodeId(source) === nodeHelpers_1.getNodeId(target)) {
            // skip animation entirely if we're not transitioning to a new state
            controls.set(nextVariantName);
        }
        else {
            // delay animation until after the next paint / layout, so animations
            // can start from the correct values
            requestAnimationFrame(() => setTimeout(() => controls.start(nextVariantName), 0));
        }
    }, [source, target, controls, initialVariantName, nextVariantName]);
    // ------------ Cross-Dissolving Elements --------------
    if (shouldCrossDissolve && !shouldMorphComponentProps) {
        const enteringChildVariants = {
            [initialVariantName]: {
                opacity: 0,
                display: "block",
            },
            [nextVariantName]: Object.assign(Object.assign({}, targetPositionAndSizeProps), { opacity: styleParsing_1.getOpacity(target.props.style || {}), display: "block", scaleX: 1, scaleY: 1, translateX: [0, 0] }),
        };
        const exitingChildVariants = {
            [initialVariantName]: {
                opacity: styleParsing_1.getOpacity(source.props.style || {}),
                display: "block",
            },
            [nextVariantName]: Object.assign(Object.assign({}, pick_1.pick(targetPositionAndSizeProps, ["top", "left"])), { scaleX: targetPositionAndSizeProps.width /
                    sourcePositionAndSizeProps.width, scaleY: targetPositionAndSizeProps.height /
                    sourcePositionAndSizeProps.height, opacity: 0, transitionEnd: {
                    translateX: -9999,
                } }),
        };
        const enterTransitionProps = transitionPropsForElement({
            source,
            target,
            transition: "cross-dissolve-enter",
        });
        const exitTransitionProps = transitionPropsForElement({
            source,
            target,
            transition: "cross-dissolve-exit",
        });
        const key = getSourceKey(sourceKey, source.key);
        let enteringChildProps = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ key: direction === 1 ? `__enter_${key}` : `__exit_${key}` }, propsForPositionReset), pick_1.pick(sourcePositionAndSizeProps, ["top", "left"])), pick_1.pick(targetPositionAndSizeProps, ["width", "height"])), { originX: 0, originY: 0, scaleX: sourcePositionAndSizeProps.width /
                targetPositionAndSizeProps.width, scaleY: sourcePositionAndSizeProps.height /
                targetPositionAndSizeProps.height, variants: Object.assign(Object.assign({}, (target.props.variants || {})), enteringChildVariants), initial: initialVariantName, animate: controls }), enterTransitionProps);
        enteringChildProps = useAbsolutePositioning
            ? enteringChildProps
            : styleParsing_1.filterOutAbsolutePositioningProps(enteringChildProps);
        let exitingChildProps = Object.assign(Object.assign(Object.assign(Object.assign({ key: direction === 1 ? `__exit_${key}` : `__enter_${key}` }, propsForPositionReset), sourcePositionAndSizeProps), { originX: 0, originY: 0, scaleX: 1, scaleY: 1, variants: Object.assign(Object.assign({}, (source.props.variants || {})), exitingChildVariants), initial: initialVariantName, animate: controls }), exitTransitionProps);
        exitingChildProps = useAbsolutePositioning
            ? exitingChildProps
            : styleParsing_1.filterOutAbsolutePositioningProps(exitingChildProps);
        const wrappedSource = addAnimatableWrapperToNodeIfNeeded_1.addAnimatableWrapperToNodeIfNeeded(source, Object.assign(Object.assign({}, propsForPositionReset), { width: "100%", height: "100%" }), shouldAnimateChildren ? animatedHierarchy : []);
        const wrappedTarget = addAnimatableWrapperToNodeIfNeeded_1.addAnimatableWrapperToNodeIfNeeded(target, Object.assign(Object.assign({}, propsForPositionReset), pick_1.pick(targetPositionAndSizeProps, ["width", "height"])), shouldAnimateChildren ? animatedHierarchy : []);
        const enteringElement = react_1.cloneElement(wrappedTarget, enteringChildProps);
        const exitingElement = react_1.cloneElement(wrappedSource, exitingChildProps);
        return (React.createElement(React.Fragment, null,
            exitingElement,
            enteringElement));
    }
    // ------------ Variants for Morphing Elements --------------
    const { sourceProps: initialVariant, targetProps: nextVariant, } = getPropTransitionsBetweenNodes(source, target, sourceParentSize, targetParentSize, parentContext);
    let transitionProps = Object.assign(Object.assign(Object.assign(Object.assign({}, propsForPositionReset), sourcePositionAndSizeProps), { _border: null, style: Object.assign({}, source.props.style), variants: Object.assign(Object.assign({}, (target.props.variants || {})), { [initialVariantName]: initialVariant, [nextVariantName]: nextVariant }), initial: initialVariantName, animate: controls }), transitionPropsForElement({
        source,
        target,
        transition: "morph",
    }));
    transitionProps =
        !useAbsolutePositioning && sourceNodeType !== "Stack"
            ? styleParsing_1.filterOutAbsolutePositioningProps(transitionProps)
            : transitionProps;
    const key = getSourceKey(sourceKey, source.key);
    // ------------ Stacks --------------
    if (sourceNodeType === "StackLegacyContainer") {
        const containerProps = Object.assign(Object.assign(Object.assign({ key, id: null }, propsForPositionReset), sourcePositionAndSizeProps), { top: 0, left: 0, _border: null });
        const sourceStack = React.Children.toArray(source.props.children)[0];
        const targetStack = React.Children.toArray(target.props.children)[0];
        const { sourceProps: stackInitialVariant, targetProps: stackNextVariant, } = getPropTransitionsBetweenNodes(sourceStack, targetStack, sourcePositionAndSizeProps, targetPositionAndSizeProps, parentContext);
        let stackProps = Object.assign(Object.assign({ key, id: null }, transitionProps), { top: sourcePositionAndSizeProps.top, left: sourcePositionAndSizeProps.left, variants: {
                [initialVariantName]: stackInitialVariant,
                [nextVariantName]: Object.assign(Object.assign({}, stackNextVariant), { top: targetPositionAndSizeProps.top, left: targetPositionAndSizeProps.left }),
            } });
        stackProps =
            parentContext === "Stack"
                ? styleParsing_1.filterOutAbsolutePositioningProps(stackProps)
                : stackProps;
        return react_1.cloneElement(source, containerProps, react_1.cloneElement(sourceStack, stackProps, ...animatedHierarchy));
    }
    // ------------ Code Components --------------
    if (shouldMorphComponentProps) {
        const sourceComponent = React.Children.toArray(source.props.children)[0];
        const targetComponent = React.Children.toArray(target.props.children)[0];
        const containerProps = Object.assign(Object.assign({}, transitionProps), { positionTransition: useAbsolutePositioning
                ? false
                : transitionPropsForElement({
                    source,
                    target,
                    transition: "morph",
                }).transition, key });
        const wrappedSource = addAnimatableWrapperToNodeIfNeeded_1.addAnimatableWrapperToNodeIfNeeded(source, Object.assign(Object.assign({}, propsForPositionReset), { width: "100%", height: "100%", id: target.props.id, key }), [
            react_1.cloneElement(sourceComponent, Object.assign(Object.assign({}, targetComponent.props), { key })),
        ]);
        return React.createElement(React.Fragment, null, react_1.cloneElement(wrappedSource, containerProps));
    }
    // ------------ All Other Morphable Elements --------------
    const wrappedTarget = addAnimatableWrapperToNodeIfNeeded_1.addAnimatableWrapperToNodeIfNeeded(target, Object.assign(Object.assign({}, propsForPositionReset), { width: "100%", height: "100%", key }));
    return react_1.cloneElement(wrappedTarget, Object.assign(Object.assign({ id: null }, transitionProps), { positionTransition: useAbsolutePositioning
            ? false
            : transitionPropsForElement({
                source,
                target,
                transition: "morph",
            }).transition, key }), [React.createElement(React.Fragment, { key: key }, animatedHierarchy)]);
};
_AutoAnimatedState.displayName = "AutoAnimatedState";
exports.AutoAnimatedState = react_1.memo(_AutoAnimatedState);
const getPropTransitionsBetweenNodes = (source, target, sourceParentSize, targetParentSize, parentContext) => {
    window["__checkBudget__"]();
    const targetPositionAndSizeProps = nodeHelpers_1.getNodeRect(target, targetParentSize);
    const [sourceBackgroundColor, targetBackgroundColor,] = styleParsing_1.getBackgroundColorPair(source.props, target.props);
    const [sourceBoxShadow, targetBoxShadow] = styleParsing_1.getBoxShadowPair(source.props, target.props);
    const [sourceBorder, targetBorder] = styleParsing_1.getBorderPair(source.props, target.props);
    const sourceProps = Object.assign(Object.assign(Object.assign(Object.assign({ opacity: styleParsing_1.getOpacity(source.props.style), rotate: styleParsing_1.getRotate(source.props.style) }, styleParsing_1.getBorderRadius(source.props.style)), (sourceBackgroundColor && { background: sourceBackgroundColor })), { boxShadow: sourceBoxShadow }), sourceBorder);
    let targetProps = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, targetPositionAndSizeProps), { opacity: styleParsing_1.getOpacity(target.props.style), rotate: styleParsing_1.getRotate(target.props.style) }), styleParsing_1.getBorderRadius(target.props.style)), (targetBackgroundColor && { background: targetBackgroundColor })), { boxShadow: targetBoxShadow }), targetBorder);
    targetProps =
        parentContext === "Stack"
            ? styleParsing_1.filterOutAbsolutePositioningProps(targetProps)
            : targetProps;
    return {
        sourceProps,
        targetProps,
    };
};
exports.__info__ = [];


/***/ }),

/***/ "./code/Switch.tsx":
/*!*************************!*\
  !*** ./code/Switch.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Td2l0Y2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsaUNBT2M7QUFDZCxtQ0FBb0M7QUFDcEMsbUNBUWU7QUFDZiwyQ0FBZ0Q7QUFDaEQscURBQTZDO0FBQzdDLHlEQUFxRDtBQUNyRCwrQ0FBMEU7QUFDMUUsdUNBQW1DO0FBQ25DLHVEQUE2RDtBQUM3RCx5Q0FNbUI7QUFDbkIseUZBQXFGO0FBQ3JGLDJEQUF1RDtBQUN2RCw2REFBMEQ7QUFDMUQsK0NBQTJDO0FBRTNDLDJEQUEyRDtBQUUzRCxTQUFTLE9BQU8sQ0FBQyxLQUFLOztJQUNsQixNQUFNLEVBQ0YsUUFBUSxFQUNSLG9CQUFvQixFQUNwQixVQUFVLEdBQUcsRUFBRSxFQUNmLFVBQVUsR0FBRyxTQUFTLEVBQ3RCLFFBQVEsR0FBRyxJQUFJLEVBQ2YsWUFBWSxHQUFHLENBQUMsRUFDaEIsYUFBYSxFQUNiLFFBQVEsRUFDUiwyQkFBMkIsS0FFM0IsS0FBSyxFQURMLDhLQUNLLENBQUE7SUFFVCxJQUFJLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUsscUJBQVksQ0FBQyxTQUFTLEVBQUU7UUFDbkQsT0FBTyxvQkFBQyxlQUFlLE9BQUcsQ0FBQTtLQUM3QjtJQUVELE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxvQkFBb0IsQ0FBQyxHQUFHLGdCQUFRLENBQUMsWUFBWSxDQUFDLENBQUE7SUFFeEUsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsR0FBRyxnQkFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxtQkFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBRTVFLGlCQUFTLENBQUMsR0FBRyxFQUFFOztRQUNYLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsbUJBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENB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

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
const react_1 = __webpack_require__(/*! react */ "react");
const reactn_1 = __webpack_require__(/*! reactn */ "reactn");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const hotkeys_js_1 = __webpack_require__(/*! hotkeys-js */ "hotkeys-js");
const globalStore_1 = __webpack_require__(/*! ./store/globalStore */ "./code/store/globalStore.ts");
const placeholderState_1 = __webpack_require__(/*! ./placeholderState */ "./code/placeholderState.tsx");
const transitions_1 = __webpack_require__(/*! ./transitions */ "./code/transitions.ts");
const omit_1 = __webpack_require__(/*! ./utils/omit */ "./code/utils/omit.ts");
const thumbnailStyles_1 = __webpack_require__(/*! ./thumbnailStyles */ "./code/thumbnailStyles.ts");
const controls_1 = __webpack_require__(/*! ./controls */ "./code/controls.ts");
const extractEventHandlersFromProps_1 = __webpack_require__(/*! ./utils/extractEventHandlersFromProps */ "./code/utils/extractEventHandlersFromProps.ts");
const AutoAnimatedState_1 = __webpack_require__(/*! ./AutoAnimatedState */ "./code/AutoAnimatedState.tsx");
const propNameHelpers_1 = __webpack_require__(/*! ./utils/propNameHelpers */ "./code/utils/propNameHelpers.ts");
const randomID_1 = __webpack_require__(/*! ./utils/randomID */ "./code/utils/randomID.ts");
// ------------------- Switch Component -------------------
function _Switch(props) {
    window["__checkBudget__"]();
    const { children, autoAssignIdentifier, identifier = "", transition = "instant", overflow = true, initialState = 0, isInteractive, onSwitch, morphCodeComponentPropsOnly } = props, rest = __rest(props, ["children", "autoAssignIdentifier", "identifier", "transition", "overflow", "initialState", "isInteractive", "onSwitch", "morphCodeComponentPropsOnly"]);
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(SwitchThumbnail, null);
    }
    const [currentStateIndex, setCurrentStateIndex] = react_1.useState(initialState);
    const [id, setId] = react_1.useState(autoAssignIdentifier ? randomID_1.randomID() : identifier);
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        setId(autoAssignIdentifier ? randomID_1.randomID() : identifier);
    }, [autoAssignIdentifier, identifier]);
    const { getSwitchStateIndex, getAllSwitchStates, setSwitchStateIndex, registerSwitchStates, } = globalStore_1.actions;
    const states = React.Children.toArray(children).map(c => c.props.name || "");
    const sanitizedIdentifier = propNameHelpers_1.sanitizePropName(id);
    const current = typeof currentStateIndex === "undefined"
        ? initialState
        : currentStateIndex;
    // the current index ref will be used to calculate direction
    const currentIndexRef = react_1.useRef(current);
    const previousIndexRef = react_1.useRef(current);
    const previous = currentIndexRef.current;
    const atWrapBoundary = (previous === states.length - 1 && current === 0) ||
        (previous === 0 && current === states.length - 1);
    let direction = previous <= current ? 1 : -1;
    // at the wrap boundary directions are intentionally reversed,
    // so that going from 0 to the last state looks like going back,
    // instead of going forward
    if (atWrapBoundary) {
        direction = -direction;
    }
    if (children[current]) {
        currentIndexRef.current = current;
    }
    else if (children[previous]) {
        currentIndexRef.current = previous;
    }
    else {
        currentIndexRef.current = initialState;
    }
    // ensure that previousIndexRef always points to the true previous index
    // i.e. even if you re-render the same state, previousIndexRef won't change
    // this is needed to pass the correct source/target for AutoAnimatedState
    if (currentIndexRef.current !== previous) {
        previousIndexRef.current = previous;
    }
    if (currentIndexRef.current !== previous &&
        typeof onSwitch !== "undefined") {
        onSwitch(currentIndexRef.current, previous, sanitizedIdentifier);
    }
    const child = children[currentIndexRef.current];
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        return reactn_1.addCallback(({ __switch }) => {
            window["__checkBudget__"]();
            const updatedIndex = __switch[sanitizedIdentifier];
            if (currentIndexRef.current !== updatedIndex) {
                setCurrentStateIndex(updatedIndex);
            }
        });
    }, [sanitizedIdentifier]);
    // update the state for this element if the user manually
    // changes the initial state from the property controls
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        setSwitchStateIndex(sanitizedIdentifier, initialState);
    }, [initialState, sanitizedIdentifier]);
    // store a registry of available states, so the SwitchToStateAction
    // instances can figure out what the next/previous state is
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        registerSwitchStates(sanitizedIdentifier, states);
    }, [children, sanitizedIdentifier]);
    // Extract event handlers from props
    // Note: extract runs hooks for some gesture-related events, so it's
    // important to NOT run it conditionally
    let [eventHandlers, keyEvents, automaticEvents,] = extractEventHandlersFromProps_1.extractEventHandlersFromProps(props, { getSwitchStateIndex, getAllSwitchStates, setSwitchStateIndex }, sanitizedIdentifier);
    // reset the results of the previous call if this switch isn't interactive
    if (!isInteractive) {
        eventHandlers = {};
        keyEvents = [];
        automaticEvents = [];
    }
    const automaticEventProps = Object.keys(props)
        .filter(prop => controls_1.automaticEventTriggerProps.indexOf(prop) !== -1)
        .map(prop => props[prop]);
    // execute automatic (delay) event triggers
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        if (framer_1.RenderTarget.current() !== framer_1.RenderTarget.preview) {
            return;
        }
        const timeouts = automaticEvents.map(({ handler }) => handler());
        return () => {
            window["__checkBudget__"]();
            timeouts.forEach(clearTimeout);
        };
    }, [...automaticEventProps, sanitizedIdentifier]);
    // attach key event handlers
    const keyEventProps = Object.keys(props)
        .filter(prop => controls_1.keyEventTriggerProps.indexOf(prop) !== -1)
        .map(prop => props[prop]);
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        if (framer_1.RenderTarget.current() !== framer_1.RenderTarget.preview) {
            return;
        }
        keyEvents.forEach(({ hotkey, options, handler }) => hotkeys_js_1.default(hotkey, options, handler));
        return () => {
            window["__checkBudget__"]();
            keyEvents.forEach(({ hotkey, handler }) => hotkeys_js_1.default.unbind(hotkey, handler));
        };
    }, [...keyEventProps, sanitizedIdentifier]);
    const transitionPropsForElement = ({ source, sourceRect, target, transition, useAbsolutePositioning, transitionKey, }) => {
        window["__checkBudget__"]();
        if (transition === "enter") {
            return transitions_1.TRANSITIONS[props.enterTransition](source.props, props, {
                transitionKey,
                sourceRect,
                useAbsolutePositioning,
            });
        }
        if (transition === "exit") {
            return transitions_1.TRANSITIONS[props.exitTransition](source.props, props, {
                transitionKey,
                sourceRect,
                useAbsolutePositioning,
            });
        }
        if (transition === "cross-dissolve-enter" ||
            transition === "cross-dissolve-exit") {
            return transitions_1.TRANSITIONS.crossdissolve(source.props, props, {
                direction: transition,
            });
        }
        return transitions_1.TRANSITIONS.morph(source.props, props);
    };
    const size = react_1.useMemo(() => {
        window["__checkBudget__"]();
        if (child) {
            return framer_1.Size(child.props.width, child.props.height);
        }
    }, [child]);
    // if not connected to anything, show placeholder
    if (!child) {
        return react_1.createElement(placeholderState_1.placeholderState, {
            title: "No states",
            label: "Add views for each state by connecting them on the Canvas",
        });
    }
    if (framer_1.RenderTarget.current() !== framer_1.RenderTarget.preview) {
        return (React.createElement(framer_1.Frame, Object.assign({}, eventHandlers, omit_1.omit(rest, controls_1.eventTriggerProps), { background: "transparent", size: "100%", overflow: overflow ? "visible" : "hidden" }), child));
    }
    if (transition === "autoanimate") {
        return (React.createElement(framer_1.Frame, Object.assign({}, eventHandlers, omit_1.omit(rest, controls_1.eventTriggerProps), { background: "transparent", width: "100%", height: "100%", overflow: overflow ? "visible" : "hidden" }),
            React.createElement(framer_1.Frame, { background: null, width: "100%", height: "100%" },
                React.createElement(AutoAnimatedState_1.AutoAnimatedState, { source: children[previousIndexRef.current], target: children[currentIndexRef.current], transitionPropsForElement: transitionPropsForElement, direction: direction, sourceParentSize: size, targetParentSize: size, morphCodeComponentPropsOnly: morphCodeComponentPropsOnly }))));
    }
    return (React.createElement(framer_1.Frame, Object.assign({}, eventHandlers, omit_1.omit(rest, controls_1.eventTriggerProps), { background: "transparent", width: "100%", height: "100%", overflow: overflow ? "visible" : "hidden", style: { zIndex: 0 } }),
        React.createElement(framer_1.AnimatePresence, { initial: false, custom: direction },
            React.createElement(framer_1.Frame, Object.assign({ key: child.key, background: null, width: "100%", height: "100%" }, transitions_1.TRANSITIONS[transition](child.props, props, direction)), child))));
}
const defaultProps = {
    overflow: true,
    autoAssignIdentifier: false,
    identifier: "sharedSwitch",
    initialState: 0,
    isInteractive: false,
    // Specifies how code components will be handled during auto-animate.
    // When this is true, the auto animator will try to preserve code component
    // instances between states and only throw new props at them. When it's false,
    // code components will cross-dissolve between instances in the source / target state.
    // Switch this to `false` with an override if code components don't seem to behave
    // as expected during auto animate transitions.
    morphCodeComponentPropsOnly: true,
    transition: "instant",
    transitionConfigType: "default",
    transitionType: "spring",
    enterTransition: "enterdissolve",
    enterTransitionConfigType: "default",
    enterTransitionType: "tween",
    exitTransition: "exitdissolve",
    exitTransitionConfigType: "default",
    exitTransitionType: "tween",
    damping: transitions_1.DEFAULT_SPRING.damping,
    mass: transitions_1.DEFAULT_SPRING.mass,
    stiffness: transitions_1.DEFAULT_SPRING.stiffness,
    duration: transitions_1.DEFAULT_TWEEN.duration,
    ease: "easeOut",
    customEase: "0.25, 0.1, 0.25, 1",
    enterDamping: transitions_1.DEFAULT_SPRING.damping,
    enterMass: transitions_1.DEFAULT_SPRING.mass,
    enterStiffness: transitions_1.DEFAULT_SPRING.stiffness,
    enterDuration: transitions_1.DEFAULT_TWEEN.duration,
    enterEase: "easeOut",
    enterCustomEase: "0.25, 0.1, 0.25, 1",
    exitDamping: transitions_1.DEFAULT_SPRING.damping,
    exitMass: transitions_1.DEFAULT_SPRING.mass,
    exitStiffness: transitions_1.DEFAULT_SPRING.stiffness,
    exitDuration: transitions_1.DEFAULT_TWEEN.duration,
    exitEase: "easeOut",
    exitCustomEase: "0.25, 0.1, 0.25, 1",
    staggerChildren: 0,
    delayChildren: 0,
    // Auto-generated from the following code:
    //
    // JSON.stringify(
    //     Object.keys(eventTriggerPropertyControls).reduce((res, prop) => {
    //         if ("defaultValue" in eventTriggerPropertyControls[prop]) {
    //             res[prop] = eventTriggerPropertyControls[prop].defaultValue
    //         }
    //         return res
    //     }, {})
    // )
    afterDelayAction: "unset",
    afterDelaySpecificIndex: 0,
    afterDelaySpecificName: "",
    afterDelayDelay: 0,
    onTapAction: "unset",
    onTapSpecificIndex: 0,
    onTapSpecificName: "",
    onTapStartAction: "unset",
    onTapStartSpecificIndex: 0,
    onTapStartSpecificName: "",
    onTapCancelAction: "unset",
    onTapCancelSpecificIndex: 0,
    onTapCancelSpecificName: "",
    onHoverStartAction: "unset",
    onHoverStartSpecificIndex: 0,
    onHoverStartSpecificName: "",
    onHoverEndAction: "unset",
    onHoverEndSpecificIndex: 0,
    onHoverEndSpecificName: "",
    onDragStartAction: "unset",
    onDragStartSpecificIndex: 0,
    onDragStartSpecificName: "",
    onDragEndAction: "unset",
    onDragEndSpecificIndex: 0,
    onDragEndSpecificName: "",
    onDoubleTapAction: "unset",
    onDoubleTapSpecificIndex: 0,
    onDoubleTapSpecificName: "",
    onLongPressAction: "unset",
    onLongPressSpecificIndex: 0,
    onLongPressSpecificName: "",
    onLongPressDuration: 0.5,
    onKeyDownAction: "unset",
    onKeyDownSpecificIndex: 0,
    onKeyDownSpecificName: "",
    onKeyDownKey: "",
    onKeyUpAction: "unset",
    onKeyUpSpecificIndex: 0,
    onKeyUpSpecificName: "",
    onKeyUpKey: "",
};
_Switch.defaultProps = Object.assign({ height: 240, width: 240 }, defaultProps);
_Switch.displayName = "Switch";
const __Switch = react_1.memo(_Switch);
exports.Switch = props => React.createElement(__Switch, Object.assign({}, props));
// ------------------- Property Controls ------------------
framer_1.addPropertyControls(exports.Switch, Object.assign(Object.assign({ overflow: {
        type: framer_1.ControlType.Boolean,
        title: "Overflow",
        defaultValue: defaultProps.overflow,
        enabledTitle: "Visible",
        disabledTitle: "Hidden",
    }, children: {
        title: "States",
        type: framer_1.ControlType.Array,
        propertyControl: {
            type: framer_1.ControlType.ComponentInstance,
        },
    }, autoAssignIdentifier: {
        title: "Name",
        type: framer_1.ControlType.Boolean,
        enabledTitle: "Auto",
        disabledTitle: "Set",
        defaultValue: defaultProps.autoAssignIdentifier,
    }, identifier: {
        title: " ",
        type: framer_1.ControlType.String,
        defaultValue: defaultProps.identifier,
        hidden: props => props.autoAssignIdentifier,
    }, initialState: {
        title: "Initial State",
        type: framer_1.ControlType.Number,
        displayStepper: true,
        defaultValue: defaultProps.initialState,
    }, 
    // Event Handling
    isInteractive: {
        title: "Interactive",
        type: framer_1.ControlType.Boolean,
        enabledTitle: "Yes",
        disabledTitle: "No",
        defaultValue: defaultProps.isInteractive,
    } }, controls_1.eventTriggerPropertyControls), { 
    // Transition Options
    transition: {
        title: "Transition",
        type: framer_1.ControlType.Enum,
        options: [
            "instant",
            "autoanimate",
            "dissolve",
            "zoom",
            "zoomout",
            "zoomin",
            "swapup",
            "swapdown",
            "swapleft",
            "swapright",
            "slidehorizontal",
            "slidevertical",
            "slideup",
            "slidedown",
            "slideleft",
            "slideright",
            "pushhorizontal",
            "pushvertical",
            "pushup",
            "pushdown",
            "pushleft",
            "pushright",
        ],
        optionTitles: [
            "Instant",
            "Auto Animate (Magic Move)",
            "Dissolve",
            "Zoom (Direction-aware)",
            "Zoom Out",
            "Zoom In",
            "Swap ↑",
            "Swap ↓",
            "Swap ←",
            "Swap →",
            "Slide ←→ (Direction-aware)",
            "Slide ↑↓ (Direction-aware)",
            "Slide ↑",
            "Slide ↓",
            "Slide ←",
            "Slide →",
            "Push ←→ (Direction-aware)",
            "Push ↑↓ (Direction-aware)",
            "Push ↑",
            "Push ↓",
            "Push ←",
            "Push →",
        ],
        defaultValue: defaultProps.transition,
    }, 
    // -- start: default/morph transition options --
    transitionConfigType: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.transitionConfigType), { defaultValue: defaultProps["transitionConfigType"], hidden: props => props["transition"] === "instant" }), transitionType: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.transitionType), { defaultValue: defaultProps["transitionType"], hidden: props => props["transition"] === "instant" ||
            props["transitionConfigType"] === "default" }), damping: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.damping), { hidden: props => props["transition"] === "instant" ||
            props["transitionType"] !== "spring" ||
            props["transitionConfigType"] === "default", defaultValue: defaultProps["damping"] }), mass: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.mass), { hidden: props => props["transition"] === "instant" ||
            props["transitionType"] !== "spring" ||
            props["transitionConfigType"] === "default", defaultValue: defaultProps["mass"] }), stiffness: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.stiffness), { hidden: props => props["transition"] === "instant" ||
            props["transitionType"] !== "spring" ||
            props["transitionConfigType"] === "default", defaultValue: defaultProps["stiffness"] }), duration: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.duration), { hidden: props => props["transition"] === "instant" ||
            props["transitionType"] !== "tween" ||
            props["transitionConfigType"] === "default", defaultValue: defaultProps["duration"] }), ease: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.ease), { hidden: props => props["transition"] === "instant" ||
            props["transitionType"] !== "tween" ||
            props["transitionConfigType"] === "default", defaultValue: defaultProps["ease"] }), customEase: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.customEase), { hidden: props => props["transition"] === "instant" ||
            props["transitionType"] !== "tween" ||
            props["transitionConfigType"] === "default" ||
            props["ease"] !== "custom", defaultValue: defaultProps["customEase"] }), 
    // -- end: default/morph transition options --
    enterTransition: {
        title: "Enter Transition",
        type: framer_1.ControlType.Enum,
        options: ["enterdissolve", "growdissolve", "enterInstant"],
        optionTitles: ["Dissolve", "Grow", "Instant"],
        defaultValue: defaultProps.enterTransition,
        hidden: props => props.transition !== "autoanimate",
    }, 
    // -- start: enter transition options
    enterTransitionConfigType: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.transitionConfigType), { defaultValue: defaultProps["transitionConfigType"], hidden: props => props["transition"] !== "autoanimate" ||
            props["enterTransition"] === "enterInstant" }), enterTransitionType: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.transitionType), { defaultValue: defaultProps["transitionType"], hidden: props => props["transition"] !== "autoanimate" ||
            props["enterTransition"] === "enterInstant" ||
            props["enterTransitionConfigType"] === "default" }), enterDamping: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.damping), { hidden: props => props["transition"] !== "autoanimate" ||
            props["enterTransition"] === "enterInstant" ||
            props["enterTransitionType"] !== "spring" ||
            props["enterTransitionConfigType"] === "default", defaultValue: defaultProps["enterDamping"] }), enterMass: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.mass), { hidden: props => props["transition"] !== "autoanimate" ||
            props["enterTransition"] === "enterInstant" ||
            props["enterTransitionType"] !== "spring" ||
            props["enterTransitionConfigType"] === "default", defaultValue: defaultProps["enterMass"] }), enterStiffness: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.stiffness), { hidden: props => props["transition"] !== "autoanimate" ||
            props["enterTransition"] === "enterInstant" ||
            props["enterTransitionType"] !== "spring" ||
            props["enterTransitionConfigType"] === "default", defaultValue: defaultProps["enterStiffness"] }), enterDuration: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.duration), { hidden: props => props["transition"] !== "autoanimate" ||
            props["enterTransition"] === "enterInstant" ||
            props["enterTransitionType"] !== "tween" ||
            props["enterTransitionConfigType"] === "default", defaultValue: defaultProps["enterDuration"] }), enterEase: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.ease), { hidden: props => props["transition"] !== "autoanimate" ||
            props["enterTransition"] === "enterInstant" ||
            props["enterTransitionType"] !== "tween" ||
            props["enterTransitionConfigType"] === "default", defaultValue: defaultProps["enterEase"] }), enterCustomEase: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.customEase), { hidden: props => props["transition"] !== "autoanimate" ||
            props["enterTransition"] === "enterInstant" ||
            props["enterTransitionType"] !== "tween" ||
            props["enterTransitionConfigType"] === "default" ||
            props["enterEase"] !== "custom", defaultValue: defaultProps["enterCustomEase"] }), 
    // -- end: enter transition options
    exitTransition: {
        title: "Exit Transition",
        type: framer_1.ControlType.Enum,
        options: ["exitdissolve", "shrinkdissolve", "exitInstant"],
        optionTitles: ["Dissolve", "Shrink", "Instant"],
        defaultValue: defaultProps.exitTransition,
        hidden: props => props.transition !== "autoanimate",
    }, 
    // -- start: exit transition options
    exitTransitionConfigType: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.transitionConfigType), { defaultValue: defaultProps["transitionConfigType"], hidden: props => props["transition"] !== "autoanimate" ||
            props["exitTransition"] === "exitInstant" }), exitTransitionType: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.transitionType), { defaultValue: defaultProps["transitionType"], hidden: props => props["transition"] !== "autoanimate" ||
            props["exitTransition"] === "exitInstant" ||
            props["exitTransitionConfigType"] === "default" }), exitDamping: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.damping), { hidden: props => props["transition"] !== "autoanimate" ||
            props["exitTransition"] === "exitInstant" ||
            props["exitTransitionType"] !== "spring" ||
            props["exitTransitionConfigType"] === "default", defaultValue: defaultProps["exitDamping"] }), exitMass: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.mass), { hidden: props => props["transition"] !== "autoanimate" ||
            props["exitTransition"] === "exitInstant" ||
            props["exitTransitionType"] !== "spring" ||
            props["exitTransitionConfigType"] === "default", defaultValue: defaultProps["exitMass"] }), exitStiffness: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.stiffness), { hidden: props => props["transition"] !== "autoanimate" ||
            props["exitTransition"] === "exitInstant" ||
            props["exitTransitionType"] !== "spring" ||
            props["exitTransitionConfigType"] === "default", defaultValue: defaultProps["exitStiffness"] }), exitDuration: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.duration), { hidden: props => props["transition"] !== "autoanimate" ||
            props["exitTransition"] === "exitInstant" ||
            props["exitTransitionType"] !== "tween" ||
            props["exitTransitionConfigType"] === "default", defaultValue: defaultProps["exitDuration"] }), exitEase: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.ease), { hidden: props => props["transition"] !== "autoanimate" ||
            props["exitTransition"] === "exitInstant" ||
            props["exitTransitionType"] !== "tween" ||
            props["exitTransitionConfigType"] === "default", defaultValue: defaultProps["exitEase"] }), exitCustomEase: Object.assign(Object.assign({}, controls_1.transitionPropertyControls.customEase), { hidden: props => props["transition"] !== "autoanimate" ||
            props["exitTransition"] === "exitInstant" ||
            props["exitTransitionType"] !== "tween" ||
            props["exitTransitionConfigType"] === "default" ||
            props["exitEase"] !== "custom", defaultValue: defaultProps["exitCustomEase"] }), 
    // -- end: exit transition options
    staggerChildren: {
        title: "Stagger",
        type: framer_1.ControlType.Number,
        displayStepper: true,
        step: 0.01,
        unit: "s",
        defaultValue: defaultProps.staggerChildren,
        hidden: props => props.transition !== "autoanimate",
    }, delayChildren: {
        title: "Delay",
        type: framer_1.ControlType.Number,
        displayStepper: true,
        step: 0.1,
        unit: "s",
        defaultValue: defaultProps.delayChildren,
        hidden: props => props.transition !== "autoanimate",
    } }));
// ---------------------- Thumbnail -----------------------
function SwitchThumbnail() {
    window["__checkBudget__"]();
    return (React.createElement(framer_1.Frame, { size: "100%", borderRadius: 32, border: `10px solid ${thumbnailStyles_1.colors.primary}`, background: thumbnailStyles_1.colors.background },
        React.createElement(framer_1.Frame, { size: 60, center: true, scale: 8, background: "transparent" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "60", height: "60" },
                React.createElement("path", { d: "M 20.593 28.22 C 20.593 27.799 20.935 27.458 21.356 27.458 L 24.915 27.458 C 25.336 27.458 25.678 27.799 25.678 28.22 L 25.678 31.78 C 25.678 32.201 25.336 32.542 24.915 32.542 L 21.356 32.542 C 20.935 32.542 20.593 32.201 20.593 31.78 Z", fill: "rgba(237, 123, 182, 1.00)", stroke: "rgba(237, 123, 182, 1.00)" }),
                React.createElement("path", { d: "M 33.305 21.862 C 33.305 21.442 33.645 21.102 34.065 21.102 L 37.63 21.102 C 38.05 21.102 38.39 21.442 38.39 21.862 L 38.39 25.426 C 38.39 25.846 38.05 26.186 37.63 26.186 L 34.065 26.186 C 33.645 26.186 33.305 25.846 33.305 25.426 Z", fill: "rgba(237, 123, 182, 1.00)", stroke: "rgba(237, 123, 182, 1.00)" }),
                React.createElement("path", { d: "M 33.305 36.61 C 33.305 35.066 34.557 33.814 36.102 33.814 L 36.102 33.814 C 37.646 33.814 38.898 35.066 38.898 36.61 L 38.898 36.61 C 38.898 38.155 37.646 39.407 36.102 39.407 L 36.102 39.407 C 34.557 39.407 33.305 38.155 33.305 36.61 Z", fill: "rgba(237, 123, 182, 1.00)", stroke: "rgba(237, 123, 182, 1.00)" }),
                React.createElement("path", { d: "M 26.695 30 C 26.695 30 29.492 30.064 29.492 27.203 C 29.492 24.343 31.78 23.771 31.78 23.771", fill: "transparent", "stroke-width": "0.76", stroke: "rgba(237, 123, 182, 1.00)", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                React.createElement("path", { d: "M 26.695 30.127 C 26.695 30.127 29.492 30.064 29.492 32.924 C 29.492 35.784 31.78 36.356 31.78 36.356", fill: "transparent", "stroke-width": "0.76", stroke: "rgba(237, 123, 182, 1.00)", "stroke-linecap": "round", "stroke-linejoin": "round" })))));
}
exports.__info__ = [{ "name": "Switch", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/SwitchOverrideExamples.tsx":
/*!*****************************************!*\
  !*** ./code/SwitchOverrideExamples.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpdGNoT3ZlcnJpZGVFeGFtcGxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvU3dpdGNoT3ZlcnJpZGVFeGFtcGxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBK0M7QUFDL0MseUJBQThCO0FBRTlCLFNBQWdCLFlBQVk7O0lBQ3hCLE1BQU0sUUFBUSxHQUFHLHFCQUFZLEVBQUUsQ0FBQTtJQUMvQixNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUE7SUFFekIsT0FBTztRQUNILE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxHQUFHO1FBQ1QsV0FBVyxFQUFFLEtBQUs7UUFDbEIsWUFBWSxFQUFFLEtBQUs7UUFDbkIsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1FBQ3hDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7O1lBQ3hCLDJEQUEyRDtZQUMzRCxpQkFBaUI7WUFDakIsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLGFBQWEsRUFBRTtnQkFDekIsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO2FBQzNCO1NBQ0o7UUFFRCwrREFBK0Q7UUFDL0Qsc0RBQXNEO1FBQ3RELGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLGFBQWE7S0FDNUQsQ0FBQTtDQUNKO0FBdEJELG9DQXNCQztBQUVELFNBQWdCLFNBQVM7O0lBQ3JCLE9BQU87UUFDSCxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0tBQzNCLENBQUE7Q0FDSjtBQUpELDhCQUlDO0FBRUQsU0FBZ0IscUJBQXFCOztJQUNqQyxNQUFNLFFBQVEsR0FBRyxZQUFTLEVBQUUsQ0FBQTtJQUU1QixPQUFPO1FBQ0gsS0FBSyxFQUFFLEdBQUcsRUFBRTs7WUFDUixRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDLENBQUE7U0FDakU7S0FDSixDQUFBO0NBQ0o7QUFSRCxzREFRQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const _1 = __webpack_require__(/*! ./ */ "./code/index.ts");
function UnlockSlider() {
    window["__checkBudget__"]();
    const controls = framer_1.useAnimation();
    const dragThreshold = 200;
    return {
        animate: controls,
        drag: "x",
        dragElastic: false,
        dragMomentum: false,
        dragConstraints: { left: 0, right: 200 },
        onDragEnd: (e, { point }) => {
            window["__checkBudget__"]();
            // animate the slider to the start if it hasn't reached the
            // drag threshold
            if (point.x < dragThreshold) {
                controls.start({ x: 0 });
            }
        },
        // Only allow the SwitchToState action to trigger if the slider
        // has reached the drag threshold (200px to the right)
        shouldTrigger: (e, { point }) => point.x >= dragThreshold,
    };
}
exports.UnlockSlider = UnlockSlider;
function ScaleDown() {
    window["__checkBudget__"]();
    return {
        whileTap: { scale: 0.8 },
    };
}
exports.ScaleDown = ScaleDown;
function ExternalSwitchControl() {
    window["__checkBudget__"]();
    const controls = _1.useSwitch();
    return {
        onTap: () => {
            window["__checkBudget__"]();
            controls.setSwitchState("sharedFancyTabNav", "Middle Focused");
        },
    };
}
exports.ExternalSwitchControl = ExternalSwitchControl;
exports.__info__ = [{ "name": "UnlockSlider", "type": "override" }, { "name": "ScaleDown", "type": "override" }, { "name": "ExternalSwitchControl", "type": "override" }];


/***/ }),

/***/ "./code/SwitchToStateAction.tsx":
/*!**************************************!*\
  !*** ./code/SwitchToStateAction.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpdGNoVG9TdGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvU3dpdGNoVG9TdGF0ZUFjdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixpQ0FBc0Q7QUFDdEQsbUNBQThFO0FBQzlFLDJDQUFnRDtBQUNoRCx5REFBcUQ7QUFDckQsNkRBQTBEO0FBQzFELHVDQUFtQztBQUNuQyx1REFBNkQ7QUFDN0QseUZBQXFGO0FBQ3JGLHlDQUttQjtBQUNuQixxREFBNkM7QUFFN0MsMkRBQTJEO0FBRTNELFNBQVMsb0JBQW9CLENBQUMsS0FBSzs7SUFDL0IsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEtBQWMsS0FBSyxFQUFqQiw0Q0FBaUIsQ0FBQTtJQUMzQyxNQUFNLGVBQWUsR0FBRyxrQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUVoRCxJQUFJLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUsscUJBQVksQ0FBQyxTQUFTLEVBQUU7UUFDbkQsT0FBTyxvQkFBQyw0QkFBNEIsT0FBRyxDQUFBO0tBQzFDO0lBRUQsTUFBTSxFQUNGLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLGtCQUFrQixHQUNyQixHQUFHLHFCQUFPLENBQUE7SUFFWCxvQ0FBb0M7SUFDcEMsSUFBSSxDQUNBLGFBQWEsRUFDYixTQUFTLEVBQ1QsZUFBZSxFQUNsQixHQUFHLDZEQUE2QixDQUM3QixLQUFLLEVBQ0w7UUFDSSxtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixrQkFBa0I7S0FDckIsRUFDRCxlQUFlLENBQ2xCLENBQUE7SUFFRCxNQUFNLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLHFDQUEwQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMs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

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
const react_1 = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const hotkeys_js_1 = __webpack_require__(/*! hotkeys-js */ "hotkeys-js");
const placeholderState_1 = __webpack_require__(/*! ./placeholderState */ "./code/placeholderState.tsx");
const propNameHelpers_1 = __webpack_require__(/*! ./utils/propNameHelpers */ "./code/utils/propNameHelpers.ts");
const omit_1 = __webpack_require__(/*! ./utils/omit */ "./code/utils/omit.ts");
const thumbnailStyles_1 = __webpack_require__(/*! ./thumbnailStyles */ "./code/thumbnailStyles.ts");
const extractEventHandlersFromProps_1 = __webpack_require__(/*! ./utils/extractEventHandlersFromProps */ "./code/utils/extractEventHandlersFromProps.ts");
const controls_1 = __webpack_require__(/*! ./controls */ "./code/controls.ts");
const globalStore_1 = __webpack_require__(/*! ./store/globalStore */ "./code/store/globalStore.ts");
// ------------- SwitchToStateAction Component ------------
function _SwitchToStateAction(props) {
    window["__checkBudget__"]();
    const { children, target } = props, rest = __rest(props, ["children", "target"]);
    const sanitizedTarget = propNameHelpers_1.sanitizePropName(target);
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(SwitchToStateActionThumbnail, null);
    }
    const { getSwitchStateIndex, setSwitchStateIndex, registerSwitchStates, getAllSwitchStates, } = globalStore_1.actions;
    // Extract event handlers from props
    let [eventHandlers, keyEvents, automaticEvents,] = extractEventHandlersFromProps_1.extractEventHandlersFromProps(props, {
        getSwitchStateIndex,
        setSwitchStateIndex,
        registerSwitchStates,
        getAllSwitchStates,
    }, sanitizedTarget);
    const automaticEventProps = Object.keys(props)
        .filter(prop => controls_1.automaticEventTriggerProps.indexOf(prop) !== -1)
        .map(prop => props[prop]);
    // execute automatic (delay) event triggers
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        if (framer_1.RenderTarget.current() !== framer_1.RenderTarget.preview) {
            return;
        }
        const timeouts = automaticEvents.map(({ handler }) => handler());
        return () => {
            window["__checkBudget__"]();
            timeouts.forEach(clearTimeout);
        };
    }, [...automaticEventProps, sanitizedTarget, props.id]);
    // attach key event handlers
    const keyEventProps = Object.keys(props)
        .filter(prop => controls_1.keyEventTriggerProps.indexOf(prop) !== -1)
        .map(prop => props[prop]);
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        if (framer_1.RenderTarget.current() !== framer_1.RenderTarget.preview) {
            return;
        }
        keyEvents.forEach(({ hotkey, options, handler }) => hotkeys_js_1.default(hotkey, options, handler));
        return () => {
            window["__checkBudget__"]();
            keyEvents.forEach(({ hotkey, handler }) => hotkeys_js_1.default.unbind(hotkey, handler));
        };
    }, [...keyEventProps, sanitizedTarget, props.id]);
    const child = children && React.Children.toArray(children)[0];
    let placeholder;
    if (!child) {
        placeholder = react_1.createElement(placeholderState_1.placeholderState, {
            striped: true,
        });
    }
    return (React.createElement(framer_1.Frame, Object.assign({}, eventHandlers, omit_1.omit(rest, controls_1.eventTriggerProps), { background: "transparent", size: "100%" }),
        !child && framer_1.RenderTarget.current() === framer_1.RenderTarget.canvas
            ? placeholder
            : null,
        children));
}
_SwitchToStateAction.displayName = "SwitchToStateAction";
const __SwitchToStateAction = react_1.memo(_SwitchToStateAction);
exports.SwitchToStateAction = props => React.createElement(__SwitchToStateAction, Object.assign({}, props));
exports.SwitchToStateAction.defaultProps = {
    width: 50,
    height: 50,
    target: "sharedSwitch",
    isInteractive: true,
};
// ------------------- Property Controls ------------------
framer_1.addPropertyControls(exports.SwitchToStateAction, Object.assign({ children: {
        type: framer_1.ControlType.ComponentInstance,
        title: "Appearance",
    }, target: {
        type: framer_1.ControlType.String,
        title: "Switch",
        defaultValue: "sharedSwitch",
    } }, controls_1.eventTriggerPropertyControls));
// ---------------------- Thumbnail -----------------------
function SwitchToStateActionThumbnail() {
    window["__checkBudget__"]();
    return (React.createElement(framer_1.Frame, { size: "100%", borderRadius: 8, border: `2px solid ${thumbnailStyles_1.colors.primary}`, background: thumbnailStyles_1.colors.background },
        React.createElement(framer_1.Frame, { borderRadius: "50%", size: "55%", center: true, background: thumbnailStyles_1.colors.primary })));
}
exports.__info__ = [{ "name": "SwitchToStateAction", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/actions.ts":
/*!*************************!*\
  !*** ./code/actions.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQWdCLGFBQWEsQ0FDekIsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxFQUNoRSxNQUFNLEVBQ04sTUFBTSxFQUNOLFdBQVc7O0lBRVgsSUFBSSxNQUFNLEtBQUssRUFBRTtRQUFFLE9BQU07SUFFekIsTUFBTSxPQUFPLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDM0MsTUFBTSxNQUFNLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUE7SUFFekMsSUFBSSxNQUFNLEtBQUssVUFBVSxFQUFFO1FBQ3ZCLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQTtLQUMzQztJQUVELElBQUksTUFBTSxLQUFLLGVBQWUsRUFBRTtRQUM1QixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3pDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2QsbUJBQW1CLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ3JDO2FBQU07WUFDSCxPQUFPLENBQUMsSUFBSSxDQUNSLGtDQUFrQyxXQUFXLHFFQUFxRSxNQUFNLENBQUMsSUFBSSxDQUN6SCxJQUFJLENBQ1Asa0ZBQWtGLENBQ3RGLENBQUE7U0FDSjtLQUNKO0lBRUQsSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ25CLG1CQUFtQixDQUNmLE1BQU0sRUFDTixPQUFPLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FDakQsQ0FBQTtLQUNKO0lBRUQsSUFBSSxNQUFNLEtBQUssVUFBVSxFQUFFO1FBQ3ZCLG1CQUFtQixDQUNmLE1BQU0sRUFDTixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQ3BELENBQUE7S0FDSjtDQUNKO0FBekNELHNDQXlDQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
function handleTrigger({ getSwitchStateIndex, getAllSwitchStates, setSwitchStateIndex }, target, action, targetState) {
    window["__checkBudget__"]();
    if (target === "")
        return;
    const current = getSwitchStateIndex(target);
    const states = getAllSwitchStates(target);
    if (action === "specific") {
        setSwitchStateIndex(target, targetState);
    }
    if (action === "specific-name") {
        const index = states.indexOf(targetState);
        if (index !== -1) {
            setSwitchStateIndex(target, index);
        }
        else {
            console.warn(`<Switch> Requested state name "${targetState}" wasn't found in the list of available states for this instance: ${states.join(", ")}.\nMake sure the name matches the name of the state in the Layers panel exactly.`);
        }
    }
    if (action === "next") {
        setSwitchStateIndex(target, current + 1 >= states.length ? 0 : current + 1);
    }
    if (action === "previous") {
        setSwitchStateIndex(target, current - 1 < 0 ? states.length - 1 : current - 1);
    }
}
exports.handleTrigger = handleTrigger;
exports.__info__ = [];


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

/***/ "./code/controls.ts":
/*!**************************!*\
  !*** ./code/controls.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2NvbnRyb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQTBFO0FBRTdELFFBQUEsb0JBQW9CLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUE7QUFDL0MsUUFBQSwwQkFBMEIsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQzNDLFFBQUEsaUJBQWlCLEdBQUcsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUE7QUFFbEQsUUFBQSxpQkFBaUIsR0FBRztJQUM3QixHQUFHLGtDQUEwQjtJQUM3QixPQUFPO0lBQ1AsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsR0FBRyx5QkFBaUI7SUFDcEIsR0FBRyw0QkFBb0I7Q0FDMUIsQ0FBQTtBQUVZLFFBQUEsYUFBYSxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7O0lBQzFDLE9BQU8sQ0FDSCxrQ0FBMEIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLHlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDekMsQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLGtCQUFrQixHQUFHO0lBQzlCLEtBQUssRUFBRSxRQUFRO0lBQ2YsVUFBVSxFQUFFLFdBQVc7SUFDdkIsV0FBVyxFQUFFLFlBQVk7SUFDekIsVUFBVSxFQUFFLGFBQWE7SUFDekIsWUFBWSxFQUFFLGFBQWE7SUFDM0IsVUFBVSxFQUFFLFdBQVc7SUFDdkIsV0FBVyxFQUFFLFlBQVk7SUFDekIsU0FBUyxFQUFFLFVBQVU7SUFDckIsV0FBVyxFQUFFLFlBQVk7SUFDekIsV0FBVyxFQUFFLFlBQVk7SUFDekIsU0FBUyxFQUFFLFVBQVU7SUFDckIsT0FBTyxFQUFFLFFBQVE7Q0FDcEIsQ0FBQTtBQUVELHVCQUF1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

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
exports.keyEventTriggerNames = ["onKeyDown", "onKeyUp"];
exports.automaticEventTriggerNames = ["afterDelay"];
exports.gestureEventNames = ["onDoubleTap", "onLongPress"];
exports.eventTriggerNames = [
    ...exports.automaticEventTriggerNames,
    "onTap",
    "onTapStart",
    "onTapCancel",
    "onHoverStart",
    "onHoverEnd",
    "onDragStart",
    "onDragEnd",
    ...exports.gestureEventNames,
    ...exports.keyEventTriggerNames,
];
exports.isCustomEvent = (name) => {
    window["__checkBudget__"]();
    return (exports.automaticEventTriggerNames.indexOf(name) !== -1 ||
        exports.gestureEventNames.indexOf(name) !== -1);
};
exports.eventTriggerTitles = {
    onTap: "On Tap",
    onTapStart: "Tap Start",
    onTapCancel: "Tap Cancel",
    afterDelay: "After Delay",
    onHoverStart: "Hover Start",
    onHoverEnd: "Hover End",
    onDragStart: "Drag Start",
    onDragEnd: "Drag End",
    onDoubleTap: "Double Tap",
    onLongPress: "Long Press",
    onKeyDown: "Key Down",
    onKeyUp: "Key Up",
};
// Auto-generated from:
//
// console.log(
//     JSON.stringify([
//         ...eventTriggerNames,
//         ...eventTriggerNames.map(name => `${name}Action`),
//         ...eventTriggerNames.map(name => `${name}SpecificIndex`),
//         ...eventTriggerNames.map(name => `${name}SpecificName`),
//         ...keyEventTriggerNames.map(name => `${name}Key`),
//         ...automaticEventTriggerNames.map(name => `${name}Delay`),
//         "onLongPressDuration",
//     ])
// )
exports.eventTriggerProps = [
    "afterDelay",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "onHoverStart",
    "onHoverEnd",
    "onDragStart",
    "onDragEnd",
    "onDoubleTap",
    "onLongPress",
    "onKeyDown",
    "onKeyUp",
    "afterDelayAction",
    "onTapAction",
    "onTapStartAction",
    "onTapCancelAction",
    "onHoverStartAction",
    "onHoverEndAction",
    "onDragStartAction",
    "onDragEndAction",
    "onDoubleTapAction",
    "onLongPressAction",
    "onKeyDownAction",
    "onKeyUpAction",
    "afterDelaySpecificIndex",
    "onTapSpecificIndex",
    "onTapStartSpecificIndex",
    "onTapCancelSpecificIndex",
    "onHoverStartSpecificIndex",
    "onHoverEndSpecificIndex",
    "onDragStartSpecificIndex",
    "onDragEndSpecificIndex",
    "onDoubleTapSpecificIndex",
    "onLongPressSpecificIndex",
    "onKeyDownSpecificIndex",
    "onKeyUpSpecificIndex",
    "afterDelaySpecificName",
    "onTapSpecificName",
    "onTapStartSpecificName",
    "onTapCancelSpecificName",
    "onHoverStartSpecificName",
    "onHoverEndSpecificName",
    "onDragStartSpecificName",
    "onDragEndSpecificName",
    "onDoubleTapSpecificName",
    "onLongPressSpecificName",
    "onKeyDownSpecificName",
    "onKeyUpSpecificName",
    "onKeyDownKey",
    "onKeyUpKey",
    "afterDelayDelay",
    "onLongPressDuration",
];
// console.log(
//     JSON.stringify([
//         ...keyEventTriggerNames.map(name => `${name}Action`),
//         ...keyEventTriggerNames.map(name => `${name}SpecificIndex`),
//         ...keyEventTriggerNames.map(name => `${name}SpecificName`),
//         ...keyEventTriggerNames.map(name => `${name}Key`),
//     ])
// )
exports.keyEventTriggerProps = [
    "onKeyDownAction",
    "onKeyUpAction",
    "onKeyDownSpecificIndex",
    "onKeyUpSpecificIndex",
    "onKeyDownSpecificName",
    "onKeyUpSpecificName",
    "onKeyDownKey",
    "onKeyUpKey",
];
// console.log(
//     JSON.stringify([
//         ...automaticEventTriggerNames.map(name => `${name}Action`),
//         ...automaticEventTriggerNames.map(name => `${name}SpecificIndex`),
//         ...automaticEventTriggerNames.map(name => `${name}SpecificName`),
//         ...automaticEventTriggerNames.map(name => `${name}Delay`),
//     ])
// )
exports.automaticEventTriggerProps = [
    "afterDelayAction",
    "afterDelaySpecificIndex",
    "afterDelaySpecificName",
    "afterDelayDelay",
];
exports.eventTriggerPropertyControls = {};
for (let trigger of exports.eventTriggerNames) {
    exports.eventTriggerPropertyControls[`${trigger}Action`] = {
        title: exports.eventTriggerTitles[trigger] || trigger,
        type: framer_1.ControlType.Enum,
        options: ["unset", "specific", "specific-name", "previous", "next"],
        optionTitles: [
            "Not Set",
            "Specific State Index",
            "Specific State Name",
            "Previous State",
            "Next State",
        ],
        defaultValue: "unset",
        hidden: props => props.isInteractive === false,
    };
    exports.eventTriggerPropertyControls[`${trigger}SpecificIndex`] = {
        title: "↳ State",
        type: framer_1.ControlType.Number,
        displayStepper: true,
        defaultValue: 0,
        hidden: props => props.isInteractive === false ||
            props[`${trigger}Action`] !== "specific",
    };
    exports.eventTriggerPropertyControls[`${trigger}SpecificName`] = {
        title: "↳ State",
        type: framer_1.ControlType.String,
        defaultValue: "",
        hidden: props => props.isInteractive === false ||
            props[`${trigger}Action`] !== "specific-name",
    };
    if (exports.keyEventTriggerNames.indexOf(trigger) !== -1) {
        exports.eventTriggerPropertyControls[`${trigger}Key`] = {
            title: "↳ Key",
            type: framer_1.ControlType.String,
            defaultValue: "",
            hidden: props => props.isInteractive === false ||
                props[`${trigger}Action`] === "unset",
        };
    }
    if (exports.automaticEventTriggerNames.indexOf(trigger) !== -1) {
        exports.eventTriggerPropertyControls[`${trigger}Delay`] = {
            title: "↳ Delay",
            type: framer_1.ControlType.Number,
            displayStepper: true,
            step: 0.1,
            defaultValue: 0,
            hidden: props => props.isInteractive === false ||
                props[`${trigger}Action`] === "unset",
        };
    }
    if (trigger === "onLongPress") {
        exports.eventTriggerPropertyControls["onLongPressDuration"] = {
            title: "↳ Duration",
            type: framer_1.ControlType.Number,
            displayStepper: true,
            step: 0.1,
            defaultValue: 0.5,
            unit: "s",
            hidden: props => props.isInteractive === false ||
                props[`${trigger}Action`] === "unset",
        };
    }
}
exports.transitionPropertyControls = {
    transitionConfigType: {
        title: " ",
        type: framer_1.ControlType.SegmentedEnum,
        options: ["default", "custom"],
        optionTitles: ["Default", "Custom"],
    },
    transitionType: {
        title: "Type",
        type: framer_1.ControlType.Enum,
        options: ["spring", "tween"],
        optionTitles: ["Spring", "Tween"],
    },
    damping: {
        title: "Damping",
        type: framer_1.ControlType.Number,
        min: 0,
        max: 50,
    },
    mass: {
        title: "Mass",
        type: framer_1.ControlType.Number,
        step: 0.1,
        min: 0,
        max: 5,
    },
    stiffness: {
        title: "Stiffness",
        type: framer_1.ControlType.Number,
        min: 0,
        max: 1000,
    },
    duration: {
        title: "Duration",
        type: framer_1.ControlType.Number,
        step: 0.1,
        min: 0,
        unit: "s",
        displayStepper: true,
    },
    ease: {
        title: "Easing",
        type: framer_1.ControlType.Enum,
        options: [
            "custom",
            "linear",
            "easeIn",
            "easeOut",
            "easeInOut",
            "easeInSine",
            "easeOutSine",
            "easeInOutSine",
            "easeInQuad",
            "easeOutQuad",
            "easeInOutQuad",
            "easeInCubic",
            "easeOutCubic",
            "easeInOutCubic",
            "easeInQuart",
            "easeOutQuart",
            "easeInOutQuart",
            "easeInQuint",
            "easeOutQuint",
            "easeInOutQuint",
            "easeInExpo",
            "easeOutExpo",
            "easeInOutExpo",
            "circIn",
            "circOut",
            "circInOut",
            "backIn",
            "backOut",
            "backInOut",
            "anticipate",
        ],
        optionTitles: [
            "Custom",
            "linear",
            "easeIn",
            "easeOut",
            "easeInOut",
            "easeInSine",
            "easeOutSine",
            "easeInOutSine",
            "easeInQuad",
            "easeOutQuad",
            "easeInOutQuad",
            "easeInCubic",
            "easeOutCubic",
            "easeInOutCubic",
            "easeInQuart",
            "easeOutQuart",
            "easeInOutQuart",
            "easeInQuint",
            "easeOutQuint",
            "easeInOutQuint",
            "easeInExpo",
            "easeOutExpo",
            "easeInOutExpo",
            "circIn",
            "circOut",
            "circInOut",
            "backIn",
            "backOut",
            "backInOut",
            "anticipate",
        ],
    },
    customEase: {
        title: " ",
        type: framer_1.ControlType.String,
    },
};
exports.__info__ = [];


/***/ }),

/***/ "./code/hooks/useDoubleTap.ts":
/*!************************************!*\
  !*** ./code/hooks/useDoubleTap.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlRG91YmxlVGFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9ob29rcy91c2VEb3VibGVUYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvRkFBb0Y7QUFDcEYsaUNBQThCO0FBRTlCLFNBQWdCLFlBQVksQ0FDeEIsUUFBOEMsRUFDOUMsVUFBa0IsR0FBRyxDQUFDLEtBQUs7OztJQUUzQiwwRUFBMEU7SUFDMUUsTUFBTSxnQkFBZ0IsR0FBRyxjQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFbEMseUVBQXlFO0lBQ3pFLDRDQUE0QztJQUM1QyxPQUFPLENBQUMsQ0FBMEIsRUFBRSxFQUFFOztRQUNsQyxvRUFBb0U7UUFDcEUsb0NBQW9DO1FBQ3BDLE1BQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUV0QyxzRUFBc0U7UUFDdEUsK0VBQStFO1FBQy9FLElBQUksWUFBWSxHQUFHLGdCQUFnQixDQUFDLE9BQU8sSUFBSSxPQUFPLEVBQUU7WUFDcEQsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBRVgsa0VBQWtFO1lBQ2xFLHFEQUFxRDtZQUNyRCxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO1NBQy9CO2FBQU07WUFDSCxtRUFBbUU7WUFDbkUsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQTtTQUMxQztLQUNKLENBQUE7Q0FDSjtBQTNCRCxvQ0EyQkMifQ==

Object.defineProperty(exports, "__esModule", { value: true });
// code from https://github.com/framer/snippets/blob/master/gestures/Double%20tap.md
const react_1 = __webpack_require__(/*! react */ "react");
function useDoubleTap(callback, timeout = 300 // ms
) {
    window["__checkBudget__"]();
    // Maintain the previous timestamp in a ref so it persists between renders
    const prevTapTimestamp = react_1.useRef(0);
    // Returns a function that will only fire the provided `callback` if it's
    // fired twice within the defined `timeout`.
    return (e) => {
        window["__checkBudget__"]();
        // performance.now() is a browser-specific function that returns the
        // current timestamp in milliseconds
        const tapTimestamp = performance.now();
        // We can get the time since the previous click by subtracting it from
        // the current timestamp. If that duration is than `timeout`, fire our callback
        if (tapTimestamp - prevTapTimestamp.current <= timeout) {
            callback(e);
            // Reset the previous timestamp to `0` to prevent users triggering
            // further double taps by tapping in rapid succession
            prevTapTimestamp.current = 0;
        }
        else {
            // Otherwise update the previous timestamp to the latest timestamp.
            prevTapTimestamp.current = tapTimestamp;
        }
    };
}
exports.useDoubleTap = useDoubleTap;
exports.__info__ = [];


/***/ }),

/***/ "./code/hooks/useLongPress.ts":
/*!************************************!*\
  !*** ./code/hooks/useLongPress.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlTG9uZ1ByZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9ob29rcy91c2VMb25nUHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBMkM7QUFFM0MsU0FBZ0IsWUFBWSxDQUN4QixRQUE4QyxFQUM5QyxXQUFtQixHQUFHOztJQUV0QiwyRUFBMkU7SUFDM0UsK0NBQStDO0lBQy9DLE1BQU0sT0FBTyxHQUFHLGNBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUU1Qiw2RUFBNkU7SUFDN0UsMEVBQTBFO0lBQzFFLDZFQUE2RTtJQUM3RSxNQUFNLFlBQVksR0FBRyxtQkFBVyxDQUM1QixDQUFDLEtBQThCLEVBQUUsRUFBRTs7UUFDL0IsMkVBQTJFO1FBQzNFLHdFQUF3RTtRQUN4RSxzRUFBc0U7UUFDdEUsbUJBQW1CO1FBQ25CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUV0QixxRUFBcUU7UUFDckUscUJBQXFCO1FBQ3JCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQTtLQUNoRSxFQUNELENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUN2QixDQUFBO0lBRUQsdUVBQXVFO0lBQ3ZFLHNFQUFzRTtJQUN0RSx5REFBeUQ7SUFDekQsTUFBTSxhQUFhLEdBQUcsbUJBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBRTFFLE9BQU87UUFDSCxvREFBb0Q7UUFDcEQsV0FBVyxFQUFFLFlBQVk7UUFDekIsWUFBWSxFQUFFLFlBQVk7UUFFMUIsMEVBQTBFO1FBQzFFLHVFQUF1RTtRQUN2RSx3RUFBd0U7UUFDeEUsK0RBQStEO1FBQy9ELFdBQVcsRUFBRSxhQUFhO1FBQzFCLFdBQVcsRUFBRSxhQUFhO1FBRTFCLHdEQUF3RDtRQUN4RCxTQUFTLEVBQUUsYUFBYTtRQUN4QixVQUFVLEVBQUUsYUFBYTtLQUM1QixDQUFBO0NBQ0o7QUEvQ0Qsb0NBK0NDIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __webpack_require__(/*! react */ "react");
function useLongPress(callback, duration = 500) {
    window["__checkBudget__"]();
    // This will be a reference to our `setTimeout` counter, so we can clear it
    // if the user moves or releases their pointer.
    const timeout = react_1.useRef(null);
    // Create an event handler for mouse down and touch start events. We wrap the
    // handler in the `useCallback` hook and pass `callback` and `duration` as
    // dependencies so it only creates a new callback if either of these changes.
    const onPressStart = react_1.useCallback((event) => {
        window["__checkBudget__"]();
        // Prevent the browser's default response to this event. On mobile browsers
        // long presses are used . This will also block touch scrolling - a more
        // robust implementation will take this into account, but this is fine
        // for prototyping.
        event.preventDefault();
        // Start a timeout that, after the provided `duration`, will fire the
        // supplied callbacl.
        timeout.current = setTimeout(() => callback(event), duration);
    }, [callback, duration]);
    // This function, when called, will cancel the timeout and thus end the
    // gesture. We provide an empty dependency array as we never want this
    // function to change for the lifecycle of the component.
    const cancelTimeout = react_1.useCallback(() => clearTimeout(timeout.current), []);
    return {
        // Initiate the gesture on mouse down or touch start
        onMouseDown: onPressStart,
        onTouchStart: onPressStart,
        // Cancel the gesture if the pointer is moved. This is quite an aggressive
        // approach so you might want to make an alternative function here that
        // detects how far the pointer has moved from its origin using `e.pageX`
        // for `MouseEvent`s or `e.touches[0].pageX` for `TouchEvent`s.
        onMouseMove: cancelTimeout,
        onTouchMove: cancelTimeout,
        // Cancel the timeout when the pointer session is ended.
        onMouseUp: cancelTimeout,
        onTouchEnd: cancelTimeout,
    };
}
exports.useLongPress = useLongPress;
exports.__info__ = [];


/***/ }),

/***/ "./code/index.ts":
/*!***********************!*\
  !*** ./code/index.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQStDO0FBQXRDLGtDQUFBLFNBQVMsQ0FBQTtBQUNsQixtQ0FBaUM7QUFBeEIsMEJBQUEsTUFBTSxDQUFBO0FBQ2YsNkRBQTJEO0FBQWxELG9EQUFBLG1CQUFtQixDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
var globalStore_1 = __webpack_require__(/*! ./store/globalStore */ "./code/store/globalStore.ts");
exports.useSwitch = globalStore_1.useSwitch;
var Switch_1 = __webpack_require__(/*! ./Switch */ "./code/Switch.tsx");
exports.Switch = Switch_1.Switch;
var SwitchToStateAction_1 = __webpack_require__(/*! ./SwitchToStateAction */ "./code/SwitchToStateAction.tsx");
exports.SwitchToStateAction = SwitchToStateAction_1.SwitchToStateAction;
exports.__info__ = [];


/***/ }),

/***/ "./code/placeholderState.tsx":
/*!***********************************!*\
  !*** ./code/placeholderState.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Vob2xkZXJTdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvcGxhY2Vob2xkZXJTdGF0ZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFFOUIsbUNBQTRDO0FBUzVDLE1BQU0sVUFBVSxHQUFrQjtJQUM5QixRQUFRLEVBQUUsTUFBTTtJQUNoQixRQUFRLEVBQUUsUUFBUTtJQUNsQixZQUFZLEVBQUUsVUFBVTtJQUN4QixTQUFTLEVBQUUsUUFBUTtJQUNuQixRQUFRLEVBQUUsUUFBUTtDQUNyQixDQUFBO0FBRUQsTUFBTSxNQUFNLEdBQUc7SUFDWCxLQUFLLEVBQUUsU0FBUztJQUNoQixXQUFXLEVBQUUsU0FBUztJQUN0QixnQkFBZ0IsRUFBRSx5QkFBeUI7Q0FDOUMsQ0FBQTtBQUVELE1BQU0sYUFBYSxHQUFHO0lBQ2xCLGVBQWUsRUFBRSwyQkFBMkIsTUFBTSxDQUFDLGdCQUFnQiwrQ0FBK0MsTUFBTSxDQUFDLGdCQUFnQixTQUFTLE1BQU0sQ0FBQyxnQkFBZ0IsZ0RBQWdEO0lBQ3pOLGNBQWMsRUFBRSxpQkFBaUI7Q0FDcEMsQ0FBQTtBQUVELFNBQWdCLGdCQUFnQixDQUFDLEVBQzdCLEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLE9BQU8sR0FBRyxLQUFLLEdBQ1g7O0lBQ0osTUFBTSxLQUFLLEdBQUcsY0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBRTlELE9BQU8sQ0FDSCxvQkFBQyxjQUFLLElBQ0YsU0FBUyxFQUFDLFVBQVUsRUFDcEIsU0FBUyxFQUFDLFFBQVEsRUFDbEIsWUFBWSxFQUFDLFFBQVEsRUFDckIsSUFBSSxFQUFDLE1BQU0sRUFDWCxHQUFHLEVBQUUsQ0FBQyxFQUNOLE9BQU8sRUFBRSxFQUFFLEVBQ1gsTUFBTSxFQUFDLGdGQUFnRixFQUN2RixNQUFNLEVBQUUseUZBQXlGLGNBQUssQ0FBQyxLQUFLLENBQ3hHLEtBQUssRUFDTCxJQUFJLENBQ1AsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUNiLFVBQVUsRUFBRSxjQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFDcEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBRWxDLEtBQUssSUFBSSxDQUNOLDRCQUNJLEtBQUssa0NBQ0UsVUFBVSxLQUNiLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQ3RCLFFBQVEsRUFDSixpRkFBaUYsRUFDckYsVUFBVSxFQUFFLEdBQUcsRUFDZixZQUFZLEVBQ1IsS0FBSztvQkFDTCxnRkFBZ0YsT0FHdkYsS0FBSyxDQUNMLENBQ1I7UUFDQSxLQUFLLElBQUksQ0FDTiwyQkFDSSxLQUFLLGtDQUNFLFVBQVUsS0FDYixLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUN0QixRQUFRLEVBQ0osaUZBQWlGLE9BR3hGLEtBQUssQ0FDTixDQUNQLENBQ0csQ0FDWCxDQUFBO0NBQ0o7QUF0REQsNENBc0RDIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const textStyles = {
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "center",
    wordWrap: "normal",
};
const colors = {
    error: "#FF3333",
    placeholder: "#0099FF",
    placeholderLight: "rgba(0, 153, 255, 0.25)",
};
const stripedStyles = {
    backgroundImage: `linear-gradient(135deg, ${colors.placeholderLight} 5.56%, transparent 5.56%, transparent 50%, ${colors.placeholderLight} 50%, ${colors.placeholderLight} 55.56%, transparent 55.56%, transparent 100%)`,
    backgroundSize: `12.73px 12.73px`,
};
function placeholderState({ title, label, error, striped = false, }) {
    window["__checkBudget__"]();
    const color = framer_1.Color(error ? colors.error : colors.placeholder);
    return (React.createElement(framer_1.Stack, { direction: "vertical", alignment: "center", distribution: "center", size: "100%", gap: 4, padding: 12, radius: "calc(4px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1))", border: `calc(1px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)) dashed ${framer_1.Color.alpha(color, 0.32).toValue()}`, background: framer_1.Color.alpha(color, 0.12), style: striped ? stripedStyles : {} },
        title && (React.createElement("h5", { style: Object.assign(Object.assign({}, textStyles), { color: color.toValue(), fontSize: "calc(13px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1))", fontWeight: 500, marginBottom: label &&
                    "calc(6px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1))" }) }, title)),
        label && (React.createElement("p", { style: Object.assign(Object.assign({}, textStyles), { color: color.toValue(), fontSize: "calc(12px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1))" }) }, label))));
}
exports.placeholderState = placeholderState;
exports.__info__ = [];


/***/ }),

/***/ "./code/store/globalStore.ts":
/*!***********************************!*\
  !*** ./code/store/globalStore.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsU3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL3N0b3JlL2dsb2JhbFN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXdEO0FBRXhELGtCQUFTLENBQUM7SUFDTixRQUFRLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFO0NBQy9CLENBQUMsQ0FBQTtBQWNXLFFBQUEsU0FBUyxHQUFtQixHQUFHLEVBQUU7O0lBQzFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsa0JBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMvQyxNQUFNLHFCQUFxQixHQUFHO1FBQzFCLFVBQVUsRUFBRSxJQUFJO0tBQ25CLENBQUE7SUFFRCxNQUFNLG1CQUFtQixHQUFHLENBQUMsVUFBa0IsRUFBRSxFQUFFOztRQUMvQyxPQUFPLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtLQUMzQixDQUFBO0lBRUQsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLFVBQWtCLEVBQUUsS0FBYSxFQUFFLEVBQUU7O1FBQzlELEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUE7UUFDekIsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ2xCLENBQUE7SUFFRCxNQUFNLGNBQWMsR0FBRyxDQUFDLFVBQWtCLEVBQUUsS0FBc0IsRUFBRSxFQUFFOztRQUNsRSxNQUFNLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM3QyxNQUFNLEtBQUssR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUV2RSxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNkLE9BQU8sQ0FBQyxJQUFJLENBQ1IsV0FBVyxVQUFVLDJCQUEyQixLQUFLLHFFQUFxRSxNQUFNLENBQUMs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

Object.defineProperty(exports, "__esModule", { value: true });
const reactn_1 = __webpack_require__(/*! reactn */ "reactn");
reactn_1.setGlobal({
    __switch: { __registry: {} },
});
exports.useSwitch = () => {
    window["__checkBudget__"]();
    const [store, setStore] = reactn_1.useGlobal("__switch");
    const prevNextSwitchOptions = {
        wrapAround: true,
    };
    const getSwitchStateIndex = (identifier) => {
        window["__checkBudget__"]();
        return store[identifier];
    };
    const setSwitchStateIndex = (identifier, state) => {
        window["__checkBudget__"]();
        store[identifier] = state;
        setStore(store);
    };
    const setSwitchState = (identifier, state) => {
        window["__checkBudget__"]();
        const states = getAllSwitchStates(identifier);
        const index = typeof state === "number" ? state : states.indexOf(state);
        if (index === -1) {
            console.warn(`<Switch#${identifier}> Requested state name "${state}" wasn't found in the list of available states for this instance: ${states.join(", ")}.\nMake sure the name matches the name of the state in the Layers panel exactly.`);
            return;
        }
        if (typeof states[index] === "undefined") {
            console.warn(`<Switch#${identifier}> Requested state index "${index}" isn't valid. Number of states for this instance: ${states.length}.`);
            return;
        }
        setSwitchStateIndex(identifier, index);
    };
    const setNextSwitchStateIndex = (identifier, options = {}) => {
        window["__checkBudget__"]();
        const { wrapAround } = Object.assign(Object.assign({}, prevNextSwitchOptions), options);
        const current = getSwitchStateIndex(identifier);
        const states = getAllSwitchStates(identifier);
        setSwitchStateIndex(identifier, current + 1 >= states.length
            ? wrapAround
                ? 0
                : states.length - 1
            : current + 1);
    };
    const setPreviousSwitchStateIndex = (identifier, options = {}) => {
        window["__checkBudget__"]();
        const { wrapAround } = Object.assign(Object.assign({}, prevNextSwitchOptions), options);
        const current = getSwitchStateIndex(identifier);
        const states = getAllSwitchStates(identifier);
        setSwitchStateIndex(identifier, current - 1 < 0 ? (wrapAround ? states.length - 1 : 0) : current - 1);
    };
    const registerSwitchStates = (identifier, states) => {
        window["__checkBudget__"]();
        store.__registry = Object.assign(Object.assign({}, store.__registry), { [identifier]: states });
        setStore(store);
    };
    const getAllSwitchStates = (identifier) => {
        window["__checkBudget__"]();
        return store.__registry && store.__registry[identifier]
            ? store.__registry[identifier]
            : [];
    };
    const getSwitches = () => {
        window["__checkBudget__"]();
        return Object.keys(store.__registry || {});
    };
    return {
        getSwitches,
        getSwitchStateIndex,
        getAllSwitchStates,
        setSwitchState,
        setSwitchStateIndex,
        setNextSwitchStateIndex,
        setNextSwitchState: setNextSwitchStateIndex,
        setPreviousSwitchStateIndex,
        setPreviousSwitchState: setPreviousSwitchStateIndex,
        registerSwitchStates,
    };
};
exports.actions = {
    getSwitchStateIndex: identifier => {
        window["__checkBudget__"]();
        const store = reactn_1.getGlobal().__switch;
        return store[identifier];
    },
    setSwitchStateIndex: (identifier, state) => {
        window["__checkBudget__"]();
        const store = reactn_1.getGlobal().__switch;
        store[identifier] = state;
        reactn_1.setGlobal(Object.assign(Object.assign({}, reactn_1.getGlobal()), { __switch: store }));
    },
    registerSwitchStates: (identifier, states) => {
        window["__checkBudget__"]();
        const store = reactn_1.getGlobal().__switch;
        store.__registry = Object.assign(Object.assign({}, store.__registry), { [identifier]: states });
        reactn_1.setGlobal(Object.assign(Object.assign({}, reactn_1.getGlobal()), { __switch: store }));
    },
    getAllSwitchStates: (identifier) => {
        window["__checkBudget__"]();
        const store = reactn_1.getGlobal().__switch;
        return store.__registry && store.__registry[identifier]
            ? store.__registry[identifier]
            : [];
    },
};
exports.__info__ = [];


/***/ }),

/***/ "./code/store/keyStore.ts":
/*!********************************!*\
  !*** ./code/store/keyStore.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5U3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL3N0b3JlL2tleVN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFBO0FBRUosUUFBQSxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUU7O0lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDYixNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFBO0tBQ2xCO0lBRUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRXhCLE9BQU87UUFDSCxZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FDbkMsWUFBWSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO0tBQ2hELENBQUE7Q0FDSixDQUFBO0FBRUQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFOztJQUNqRCxNQUFNLEdBQUcsR0FDTCxTQUFTLElBQUksS0FBSztRQUNkLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztRQUM5QixDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUN0QyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFBO0lBQ3RCLE9BQU8sR0FBRyxDQUFBO0NBQ2IsQ0FBQTtBQUVELE1BQU0sVUFBVSxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFOztJQUNwQyxNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUE7SUFDdEIsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFBO0lBQ25CLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksV0FBVyxDQUFDLEVBQUU7O1FBQy9DLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUE7UUFDdkIsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUNuQjtJQUNELE9BQU8sR0FBRyxDQUFBO0NBQ2IsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const caches = {};
exports.getCache = id => {
    window["__checkBudget__"]();
    if (!caches[id]) {
        caches[id] = {};
    }
    const cache = caches[id];
    return {
        getSourceKey: (targetKey, sourceKey) => getSourceKey(cache, targetKey, sourceKey),
    };
};
const getSourceKey = (cache, targetKey, sourceKey) => {
    window["__checkBudget__"]();
    const key = targetKey in cache
        ? resolveKey(targetKey, cache)
        : resolveKey(sourceKey, cache);
    cache[targetKey] = key;
    return key;
};
const resolveKey = (targetKey, cache) => {
    window["__checkBudget__"]();
    const checkedKeys = {};
    let key = targetKey;
    while (cache[key] && !(cache[key] in checkedKeys)) {
        window["__checkBudget__"]();
        checkedKeys[key] = true;
        key = cache[key];
    }
    return key;
};
exports.__info__ = [];


/***/ }),

/***/ "./code/thumbnailStyles.ts":
/*!*********************************!*\
  !*** ./code/thumbnailStyles.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGh1bWJuYWlsU3R5bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS90aHVtYm5haWxTdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLE1BQU0sR0FBRztJQUNsQixPQUFPLEVBQUUsU0FBUztJQUNsQixVQUFVLEVBQUUsMkJBQTJCO0NBQzFDLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = {
    primary: "#ED7BB6",
    background: "rgba(237, 123, 182, 0.25)",
};
exports.__info__ = [];


/***/ }),

/***/ "./code/transitions.ts":
/*!*****************************!*\
  !*** ./code/transitions.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL3RyYW5zaXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBd0Q7QUFDeEQsdURBQWlEO0FBRWpELE1BQU0sT0FBTyxHQUFHO0lBQ1osTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsVUFBVSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO0lBQ25DLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNwQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDeEMsVUFBVSxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3JDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNyQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7SUFDMUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO0lBQ3ZDLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNyQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDeEMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO0lBQ3ZDLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJ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

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
const propNameHelpers_1 = __webpack_require__(/*! ./utils/propNameHelpers */ "./code/utils/propNameHelpers.ts");
const styleParsing_1 = __webpack_require__(/*! ./utils/styleParsing */ "./code/utils/styleParsing.ts");
const EASINGS = {
    linear: "linear",
    easeIn: "easeIn",
    easeOut: "easeOut",
    easeInOut: "easeInOut",
    easeInSine: [0.47, 0, 0.745, 0.715],
    easeOutSine: [0.39, 0.575, 0.565, 1],
    easeInOutSine: [0.445, 0.05, 0.55, 0.95],
    easeInQuad: [0.55, 0.085, 0.68, 0.53],
    easeOutQuad: [0.25, 0.46, 0.45, 0.94],
    easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
    easeInCubic: [0.55, 0.055, 0.675, 0.19],
    easeOutCubic: [0.215, 0.61, 0.355, 1],
    easeInOutCubic: [0.645, 0.045, 0.355, 1],
    easeInQuart: [0.895, 0.03, 0.685, 0.22],
    easeOutQuart: [0.165, 0.84, 0.44, 1],
    easeInOutQuart: [0.77, 0, 0.175, 1],
    easeInQuint: [0.755, 0.05, 0.855, 0.06],
    easeOutQuint: [0.23, 1, 0.32, 1],
    easeInOutQuint: [0.86, 0, 0.07, 1],
    easeInExpo: [0.95, 0.05, 0.795, 0.035],
    easeOutExpo: [0.19, 1, 0.22, 1],
    easeInOutExpo: [1, 0, 0, 1],
    circIn: "circIn",
    circOut: "circOut",
    circInOut: "circInOut",
    backIn: "backIn",
    backOut: "backOut",
    backInOut: "backInOut",
    anticipate: "anticipate",
};
exports.transitionOptionsFromProps = (props, prefix = null) => {
    window["__checkBudget__"]();
    const getProp = n => props[propNameHelpers_1.prefixPropName(n, prefix)];
    const type = getProp("transitionType");
    if (type === "tween") {
        return {
            type: "tween",
            duration: getProp("duration"),
            ease: getProp("ease") === "custom"
                ? getProp("customEase")
                    .split(/,\s+/)
                    .map(parseFloat)
                : EASINGS[getProp("ease")],
        };
    }
    if (type === "spring") {
        return {
            type: "spring",
            damping: getProp("damping"),
            mass: getProp("mass"),
            stiffness: getProp("stiffness"),
            velocity: 0,
        };
    }
    return exports.DEFAULT_SPRING;
};
exports.DEFAULT_SPRING = {
    type: "spring",
    damping: 45,
    mass: 1,
    stiffness: 500,
};
exports.DEFAULT_TWEEN = { type: "tween", ease: "easeInOut", duration: 0.3 };
exports.TRANSITIONS = {
    instant: (childProps, containerProps) => ({
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { type: "tween", ease: "linear", duration: 0 },
    }),
    dissolve: (childProps, _a) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: [1, 1, 0] },
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_TWEEN
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    zoom: (childProps, _a, direction) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            variants: {
                initial: direction === 1
                    ? { opacity: 0, scale: 1.15, zIndex: 0 }
                    : { opacity: 0, scale: 0.85, zIndex: 1 },
                enter: { opacity: [1, 1], scale: 1 },
                exit: direction => direction === 1
                    ? { scale: 0.85, opacity: 0, zIndex: 0 }
                    : { opacity: 0, scale: 1.15, zIndex: 1 },
            },
            initial: "initial",
            animate: "enter",
            exit: "exit",
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    zoomout: (childProps, _a) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            initial: { opacity: 0, scale: 1.15 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.85 },
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    zoomin: (childProps, _a) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            initial: { opacity: 0, scale: 0.85 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 1.15 },
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    swapup: (childProps, _a) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            initial: { y: containerProps.height },
            animate: { y: 0 },
            exit: { y: containerProps.height },
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    swapdown: (childProps, _a) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            initial: { y: -containerProps.height },
            animate: { y: 0 },
            exit: { y: -containerProps.height },
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    swapleft: (childProps, _a) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            initial: { x: -containerProps.width },
            animate: { x: 0 },
            exit: { x: -containerProps.width },
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    swapright: (childProps, _a) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            initial: { x: containerProps.width },
            animate: { x: 0 },
            exit: { x: containerProps.width },
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    slidehorizontal: (childProps, _a, direction) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            variants: {
                initial: direction === 1
                    ? { x: containerProps.width, zIndex: 1 }
                    : { x: 0, zIndex: 0 },
                enter: { x: 0, opacity: 1 },
                exit: direction => {
                    window["__checkBudget__"]();
                    return direction === -1
                        ? { x: containerProps.width, zIndex: 1 }
                        : { opacity: [1, 1, 0], zIndex: 0 };
                },
            },
            initial: "initial",
            animate: "enter",
            exit: "exit",
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    slidevertical: (childProps, _a, direction) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            variants: {
                initial: direction === 1
                    ? { y: containerProps.height, zIndex: 1 }
                    : { y: 0, zIndex: 0 },
                enter: { y: 0, opacity: 1 },
                exit: direction => {
                    window["__checkBudget__"]();
                    return direction === -1
                        ? { y: containerProps.height, zIndex: 1 }
                        : { opacity: [1, 1, 0], zIndex: 0 };
                },
            },
            initial: "initial",
            animate: "enter",
            exit: "exit",
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    slideup: (childProps, _a) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            initial: { y: containerProps.height },
            animate: { y: 0 },
            exit: { opacity: [1, 1, 0] },
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    slidedown: (childProps, _a) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            initial: { y: -containerProps.height },
            animate: { y: 0 },
            exit: { opacity: [1, 1, 0] },
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    slideleft: (childProps, _a) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            initial: { x: containerProps.width },
            animate: { x: 0 },
            exit: { opacity: [1, 1, 0] },
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    slideright: (childProps, _a) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            initial: { x: -containerProps.width },
            animate: { x: 0 },
            exit: { opacity: [1, 1, 0] },
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    pushhorizontal: (childProps, _a, direction) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            variants: {
                initial: direction === 1
                    ? { x: containerProps.width }
                    : { x: -containerProps.width },
                enter: { x: 0 },
                exit: direction => direction === -1
                    ? { x: containerProps.width, opacity: [1, 1, 1, 0] }
                    : { x: -containerProps.width, opacity: [1, 1, 1, 0] },
            },
            initial: "initial",
            animate: "enter",
            exit: "exit",
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    pushvertical: (childProps, _a, direction) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            variants: {
                initial: direction === 1
                    ? { y: containerProps.height }
                    : { y: -containerProps.height },
                enter: { y: 0 },
                exit: direction => direction === -1
                    ? { y: containerProps.height, opacity: [1, 1, 1, 0] }
                    : { y: -containerProps.height, opacity: [1, 1, 1, 0] },
            },
            initial: "initial",
            animate: "enter",
            exit: "exit",
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    pushup: (childProps, _a) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            initial: { y: containerProps.height },
            animate: { y: 0 },
            exit: { y: -containerProps.height, opacity: [1, 1, 1, 0] },
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    pushdown: (childProps, _a) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            initial: { y: -containerProps.height },
            animate: { y: 0 },
            exit: { y: containerProps.height, opacity: [1, 1, 1, 0] },
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    pushleft: (childProps, _a) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            initial: { x: containerProps.width },
            animate: { x: 0 },
            exit: { x: -containerProps.height, opacity: [1, 1, 1, 0] },
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    pushright: (childProps, _a) => {
        var { transitionConfigType } = _a, containerProps = __rest(_a, ["transitionConfigType"]);
        return ({
            initial: { x: -containerProps.width },
            animate: { x: 0 },
            exit: { x: containerProps.height, opacity: [1, 1, 1, 0] },
            transition: transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps),
        });
    },
    morph: (childProps, _a) => {
        var { transitionConfigType, staggerChildren, delayChildren } = _a, containerProps = __rest(_a, ["transitionConfigType", "staggerChildren", "delayChildren"]);
        return ({
            transition: Object.assign(Object.assign({}, (transitionConfigType === "default"
                ? exports.DEFAULT_SPRING
                : exports.transitionOptionsFromProps(containerProps))), { staggerChildren,
                delayChildren }),
        });
    },
    crossdissolve: (childProps, _a, { direction }) => {
        var { transitionConfigType, staggerChildren, delayChildren } = _a, containerProps = __rest(_a, ["transitionConfigType", "staggerChildren", "delayChildren"]);
        window["__checkBudget__"]();
        const options = transitionConfigType === "default"
            ? exports.DEFAULT_SPRING
            : exports.transitionOptionsFromProps(containerProps);
        // When using a tween transition, we intentionally give opacity a different
        // curve, which aims to maximize the time that both the appearing and disappearing
        // elements stay at a higher opacity value. This works around the issue when in the
        // middle of the cross-dissolve, both elements have an opacity of 50% for a combined
        // max alpha value of 0.75. The observable effect is that of the element dimming/blinking
        // out of existence and then back in, rather than smoothly cross-fading between states.
        // A true cross-dissolve would have us paint the blended value of the front/back layer,
        // preserving the alpha of the target, but hopefully this is a good approximation.
        const opacity = {
            type: "tween",
            // using a blend of easeIn/easeOut means that in the middle
            // of the transition, both elements will be at >50% opacity
            ease: direction === "cross-dissolve-enter"
                ? EASINGS.easeOutCubic
                : EASINGS.easeInCubic,
            duration: options["duration"],
        };
        return {
            transition: {
                opacity,
                default: options,
                staggerChildren,
                delayChildren,
            },
        };
    },
    enterdissolve: (childProps, _a, _b) => {
        var { enterTransitionConfigType } = _a, containerProps = __rest(_a, ["enterTransitionConfigType"]);
        var { transitionKey: tkey, useAbsolutePositioning, sourceRect: rect } = _b, transitionOptions = __rest(_b, ["transitionKey", "useAbsolutePositioning", "sourceRect"]);
        window["__checkBudget__"]();
        if (!useAbsolutePositioning) {
            return exports.TRANSITIONS.growdissolve(childProps, Object.assign({ enterTransitionConfigType }, containerProps), Object.assign({ transitionKey: tkey, useAbsolutePositioning, sourceRect: rect }, transitionOptions));
        }
        return {
            variants: {
                [`__switch_initial_${tkey}`]: { opacity: 0, display: "block" },
                [`__switch_next_${tkey}`]: {
                    opacity: [0, styleParsing_1.getOpacity(childProps.style || {})],
                    display: "block",
                    width: [rect.width, rect.width],
                    height: [rect.height, rect.height],
                },
            },
            initial: `__switch_initial_${tkey}`,
            animate: `__switch_next_${tkey}`,
            transition: enterTransitionConfigType === "default"
                ? exports.DEFAULT_TWEEN
                : exports.transitionOptionsFromProps(containerProps, "enter"),
        };
    },
    exitdissolve: (childProps, _a, _b) => {
        var { exitTransitionConfigType } = _a, containerProps = __rest(_a, ["exitTransitionConfigType"]);
        var { transitionKey: tkey, useAbsolutePositioning } = _b, transitionOptions = __rest(_b, ["transitionKey", "useAbsolutePositioning"]);
        window["__checkBudget__"]();
        if (!useAbsolutePositioning) {
            return exports.TRANSITIONS.shrinkdissolve(childProps, Object.assign({ exitTransitionConfigType }, containerProps), Object.assign({ transitionKey: tkey, useAbsolutePositioning }, transitionOptions));
        }
        return {
            variants: {
                [`__switch_initial_${tkey}`]: { opacity: 1 },
                [`__switch_next_${tkey}`]: {
                    opacity: [styleParsing_1.getOpacity(childProps.style || {}), 0],
                    transitionEnd: { display: "none" },
                },
            },
            initial: `__switch_initial_${tkey}`,
            animate: `__switch_next_${tkey}`,
            transition: exitTransitionConfigType === "default"
                ? exports.DEFAULT_TWEEN
                : exports.transitionOptionsFromProps(containerProps, "exit"),
        };
    },
    growdissolve: (childProps, _a, { transitionKey: tkey, sourceRect: rect }) => {
        var { enterTransitionConfigType } = _a, containerProps = __rest(_a, ["enterTransitionConfigType"]);
        return ({
            variants: {
                [`__switch_initial_${tkey}`]: {
                    opacity: 0,
                    width: 0,
                    height: 0,
                    display: "block",
                },
                [`__switch_next_${tkey}`]: {
                    opacity: styleParsing_1.getOpacity(childProps.style || {}),
                    width: [0, rect.width],
                    height: [0, rect.height],
                    display: "block",
                },
            },
            initial: `__switch_initial_${tkey}`,
            animate: `__switch_next_${tkey}`,
            transition: enterTransitionConfigType === "default"
                ? exports.DEFAULT_TWEEN
                : exports.transitionOptionsFromProps(containerProps, "enter"),
        });
    },
    shrinkdissolve: (childProps, _a, { transitionKey: tkey, sourceRect: rect }) => {
        var { exitTransitionConfigType } = _a, containerProps = __rest(_a, ["exitTransitionConfigType"]);
        return ({
            variants: {
                [`__switch_next_${tkey}`]: { opacity: 0, width: 0, height: 0 },
            },
            animate: `__switch_next_${tkey}`,
            transition: exitTransitionConfigType === "default"
                ? exports.DEFAULT_TWEEN
                : exports.transitionOptionsFromProps(containerProps, "exit"),
        });
    },
    enterInstant: (childProps, containerProps, { transitionKey: tkey }) => ({
        variants: {
            [`__switch_initial_${tkey}`]: {
                opacity: 0,
                display: "block",
            },
            [`__switch_next_${tkey}`]: {
                opacity: styleParsing_1.getOpacity(childProps.style || {}),
                display: "block",
            },
        },
        initial: `__switch_initial_${tkey}`,
        animate: `__switch_next_${tkey}`,
        transition: { type: "tween", ease: "linear", duration: 0 },
    }),
    exitInstant: (childProps, containerProps, { transitionKey: tkey }) => ({
        variants: {
            [`__switch_initial_${tkey}`]: {
                opacity: styleParsing_1.getOpacity(childProps.style || {}),
            },
            [`__switch_next_${tkey}`]: {
                opacity: 0,
                transitionEnd: { display: "none" },
            },
        },
        initial: `__switch_initial_${tkey}`,
        animate: `__switch_next_${tkey}`,
        transition: { type: "tween", ease: "linear", duration: 0 },
    }),
};
exports.__info__ = [];


/***/ }),

/***/ "./code/useWhyDidYouUpdate.ts":
/*!************************************!*\
  !*** ./code/useWhyDidYouUpdate.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlV2h5RGlkWW91VXBkYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS91c2VXaHlEaWRZb3VVcGRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBeUM7QUFDekMsU0FBZ0Isa0JBQWtCLENBQUMsSUFBSSxFQUFFLEtBQUs7O0lBQzFDLHdEQUF3RDtJQUN4RCwrQ0FBK0M7SUFDL0MsTUFBTSxhQUFhLEdBQUcsY0FBTSxFQUFFLENBQUE7SUFFOUIsaUJBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ1gsSUFBSSxhQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLCtDQUErQztZQUMvQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxpQ0FBTSxhQUFhLENBQUMsT0FBTyxHQUFLLEtBQUssRUFBRyxDQUFBO1lBQ25FLGlEQUFpRDtZQUNqRCxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUE7WUFDckIsdUJBQXVCO1lBQ3ZCLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7O2dCQUNsQix3Q0FBd0M7Z0JBQ3hDLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzNDLG9CQUFvQjtvQkFDcEIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHO3dCQUNkLElBQUksRUFBRSxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzt3QkFDaEMsRUFBRSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUM7cUJBQ2pCLENBQUE7aUJBQ0o7YUFDSixDQUFDLENBQUE7WUFFRixpREFBaUQ7WUFDakQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUE7YUFDeEQ7U0FDSjtRQUVELHFFQUFxRTtRQUNyRSxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtLQUNoQyxDQUFDLENBQUE7Q0FDTDtBQWhDRCxnREFnQ0MifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __webpack_require__(/*! react */ "react");
function useWhyDidYouUpdate(name, props) {
    window["__checkBudget__"]();
    // Get a mutable ref object where we can store props ...
    // ... for comparison next time this hook runs.
    const previousProps = react_1.useRef();
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        if (previousProps.current) {
            // Get all keys from previous and current props
            const allKeys = Object.keys(Object.assign(Object.assign({}, previousProps.current), props));
            // Use this object to keep track of changed props
            const changesObj = {};
            // Iterate through keys
            allKeys.forEach(key => {
                window["__checkBudget__"]();
                // If previous is different from current
                if (previousProps.current[key] !== props[key]) {
                    // Add to changesObj
                    changesObj[key] = {
                        from: previousProps.current[key],
                        to: props[key],
                    };
                }
            });
            // If changesObj not empty then output to console
            if (Object.keys(changesObj).length) {
                console.log("[why-did-you-update]", name, changesObj);
            }
        }
        // Finally update previousProps with current props for next hook call
        previousProps.current = props;
    });
}
exports.useWhyDidYouUpdate = useWhyDidYouUpdate;
exports.__info__ = [];


/***/ }),

/***/ "./code/utils/addAnimatableWrapperToNodeIfNeeded.tsx":
/*!***********************************************************!*\
  !*** ./code/utils/addAnimatableWrapperToNodeIfNeeded.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQW5pbWF0YWJsZVdyYXBwZXJUb05vZGVJZk5lZWRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvdXRpbHMvYWRkQW5pbWF0YWJsZVdyYXBwZXJUb05vZGVJZk5lZWRlZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixpQ0FBb0M7QUFDcEMsbUNBQThCO0FBQzlCLCtDQUFzRTtBQUV0RSxNQUFNLGlCQUFpQixHQUFHLENBQUMsRUFBNEIsRUFBRSxFQUFFO1FBQWhDLEVBQUUsUUFBUSxFQUFFLElBQUksT0FBWSxFQUFWLHdDQUFRO0lBQU8sT0FBQSxDQUN4RCxvQkFBQyxjQUFLLG9CQUFLLEtBQUssSUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEtBQ3pDLFFBQVEsQ0FDTCxDQUNYLENBQUE7Q0FBQSxDQUFBO0FBRUQsaUJBQWlCLENBQUMsV0FBVyxHQUFHLG1CQUFtQixDQUFBO0FBRXRDLFFBQUEsa0NBQWtDLEdBQUcsQ0FDOUMsSUFBSSxFQUNKLGFBQWEsR0FBRyxFQUFFLEVBQ2xCLFFBQVEsR0FBRyxFQUFFLEVBQ2YsRUFBRTs7SUFDQSxNQUFNLFFBQVEsR0FBRyx5QkFBVyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2xDLE1BQU0sWUFBWSxHQUNkLENBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQzVELFFBQVEsQ0FDWCxLQUFLLENBQUMsQ0FBQztRQUNSLENBQUMsUUFBUSxLQUFLLE9BQU8sSUFBSSwwQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFFaEQsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQ2xCLG9CQUFDLGlCQUFpQixJQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSx5QkFBVyxDQUFDLElBQUksQ0FBQyxJQUNwRCxvQkFBWSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FDL0IsQ0FDdkIsQ0FBQyxDQUFDLENBQUMsQ0FDQSxJQUFJLENBQ1AsQ0FBQTtDQUNKLENBQUEifQ==

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
const react_1 = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const nodeHelpers_1 = __webpack_require__(/*! ./nodeHelpers */ "./code/utils/nodeHelpers.ts");
const AnimatableWrapper = (_a) => {
    var { children, name } = _a, props = __rest(_a, ["children", "name"]);
    return (React.createElement(framer_1.Frame, Object.assign({}, props, { name: name, background: null }), children));
};
AnimatableWrapper.displayName = "AnimatableWrapper";
exports.addAnimatableWrapperToNodeIfNeeded = (node, propOverrides = {}, children = []) => {
    window["__checkBudget__"]();
    const nodeType = nodeHelpers_1.getNodeType(node);
    const needsWrapper = ["Frame", "VectorWrapper", "AnimatableWrapper", "Stack"].indexOf(nodeType) === -1 ||
        (nodeType === "Frame" && nodeHelpers_1.hasOverrides(node));
    return needsWrapper ? (React.createElement(AnimatableWrapper, { key: node.key, name: nodeHelpers_1.getNodeName(node) }, react_1.cloneElement(node, propOverrides, ...children))) : (node);
};
exports.__info__ = [];


/***/ }),

/***/ "./code/utils/calculateRect.ts":
/*!*************************************!*\
  !*** ./code/utils/calculateRect.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlUmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvdXRpbHMvY2FsY3VsYXRlUmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUF5QztBQUV6QyxTQUFTLFFBQVEsQ0FBQyxDQUFNOztJQUNwQixPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQTtDQUMvQjtBQUVELFNBQWdCLGNBQWMsQ0FBQyxLQUFVOztJQUNyQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7Q0FDdEQ7QUFGRCx3Q0FFQztBQUVELFNBQVMsMkJBQTJCLENBQUMsS0FBSzs7SUFDdEMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFDbEQsK0NBQStDO0lBQy9DLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ2hDLE9BQU8sSUFBSSxDQUFBO0tBQ2Q7SUFDRCxxRUFBcUU7SUFDckUsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLEtBQUssR0FBRyxDQUFDLEVBQUU7UUFDL0MsbUVBQW1FO1FBQ25FLE9BQU8sSUFBSSxDQUFBO0tBQ2Q7SUFDRCxvRUFBb0U7SUFDcEUsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLEtBQUssR0FBRyxDQUFDLEVBQUU7UUFDOUMsbUVBQW1FO1FBQ25FLE9BQU8sSUFBSSxDQUFBO0tBQ2Q7SUFDRCxPQUFPLEtBQUssQ0FBQTtDQUNmO0FBRUQsU0FBZ0Isa0JBQWtCLENBQUMsS0FBSzs7SUFDcEMsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHLEtBQUssQ0FBQTtJQUM5QixJQUFJLENBQUMs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

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
function isString(t) {
    window["__checkBudget__"]();
    return typeof t === "string";
}
function isFiniteNumber(value) {
    window["__checkBudget__"]();
    return typeof value === "number" && isFinite(value);
}
exports.isFiniteNumber = isFiniteNumber;
function containsInvalidStringValues(props) {
    window["__checkBudget__"]();
    const { left, right, top, bottom, center } = props;
    // We never allow right or bottom to be strings
    if ([right, bottom].some(isString)) {
        return true;
    }
    // Only allow a string for left, if it is part of the centering logic
    if (isString(left) && (!center || center === "y")) {
        // We are not centering or only centering in the opposite direction
        return true;
    }
    // Only allow a string for top, if it is part of the centering logic
    if (isString(top) && (!center || center === "x")) {
        // We are not centering or only centering in the opposite direction
        return true;
    }
    return false;
}
function constraintsEnabled(props) {
    window["__checkBudget__"]();
    const { _constraints } = props;
    if (!_constraints) {
        return false;
    }
    if (containsInvalidStringValues(props)) {
        return false;
    }
    return _constraints.enabled;
}
exports.constraintsEnabled = constraintsEnabled;
function sizeFromFiniteNumberProps(props) {
    window["__checkBudget__"]();
    const { size } = props;
    let { width, height } = props;
    if (isFiniteNumber(size)) {
        if (width === undefined) {
            width = size;
        }
        if (height === undefined) {
            height = size;
        }
    }
    if (isFiniteNumber(width) && isFiniteNumber(height)) {
        return {
            width: width,
            height: height,
        };
    }
    return null;
}
function rectFromFiniteNumberProps(props) {
    window["__checkBudget__"]();
    const size = sizeFromFiniteNumberProps(props);
    if (size === null) {
        return null;
    }
    const { left, top } = props;
    if (isFiniteNumber(left) && isFiniteNumber(top)) {
        return Object.assign({ x: left, y: top }, size);
    }
    return null;
}
function pixelAligned(rect) {
    window["__checkBudget__"]();
    const x = Math.round(rect.x);
    const y = Math.round(rect.y);
    const rectMaxX = Math.round(rect.x + rect.width);
    const rectMaxY = Math.round(rect.y + rect.height);
    const width = Math.max(rectMaxX - x, 0);
    const height = Math.max(rectMaxY - y, 0);
    return { x, y, width, height };
}
exports.pixelAligned = pixelAligned;
var ParentSizeState;
(function (ParentSizeState) {
    ParentSizeState[ParentSizeState["Unknown"] = 0] = "Unknown";
    ParentSizeState[ParentSizeState["Disabled"] = 1] = "Disabled";
})(ParentSizeState = exports.ParentSizeState || (exports.ParentSizeState = {}));
function deprecatedParentSize(parentSize) {
    window["__checkBudget__"]();
    if (parentSize === ParentSizeState.Unknown ||
        parentSize === ParentSizeState.Disabled) {
        return null;
    }
    return parentSize;
}
exports.deprecatedParentSize = deprecatedParentSize;
var ConstraintValues;
(function (ConstraintValues) {
    // Returns a parent-relative rect given concrete ConstraintValues.
    ConstraintValues.toRect = (values, parentSize, autoSize, pixelAlign, 
    // This argument is actually never used, because fractional sizes are always calculated by it's parent to static sizes
    freeSpace = null) => {
        window["__checkBudget__"]();
        let x = values.left || 0;
        let y = values.top || 0;
        let width = null;
        let height = null;
        const parentWidth = parentSize
            ? framer_1.Animatable.getNumber(parentSize.width)
            : null;
        const parentHeight = parentSize
            ? framer_1.Animatable.getNumber(parentSize.height)
            : null;
        const hOpposingPinsOffset = pinnedOffset(values.left, values.right);
        if (parentWidth && isFiniteNumber(hOpposingPinsOffset)) {
            width = parentWidth - hOpposingPinsOffset;
        }
        else if (autoSize && values.widthType === DimensionType.Auto) {
            width = autoSize.width;
        }
        else if (isFiniteNumber(values.width)) {
            switch (values.widthType) {
                case DimensionType.FixedNumber:
                    width = values.width;
                    break;
                case DimensionType.FractionOfFreeSpace:
                    width = freeSpace
                        ? (freeSpace.freeSpaceInParent.width /
                            freeSpace.freeSpaceUnitDivisor.width) *
                            values.width
                        : null;
                    break;
                case DimensionType.Percentage:
                    if (parentWidth) {
                        width = parentWidth * values.width;
                    }
                    break;
            }
        }
        const vOpposingPinsOffset = pinnedOffset(values.top, values.bottom);
        if (parentHeight && isFiniteNumber(vOpposingPinsOffset)) {
            height = parentHeight - vOpposingPinsOffset;
        }
        else if (autoSize && values.heightType === DimensionType.Auto) {
            height = autoSize.height;
        }
        else if (isFiniteNumber(values.height)) {
            switch (values.heightType) {
                case DimensionType.FixedNumber:
                    height = values.height;
                    break;
                case DimensionType.FractionOfFreeSpace:
                    height = freeSpace
                        ? (freeSpace.freeSpaceInParent.height /
                            freeSpace.freeSpaceUnitDivisor.height) *
                            values.height
                        : null;
                    break;
                case DimensionType.Percentage:
                    if (parentHeight) {
                        height = parentHeight * values.height;
                    }
                    break;
            }
        }
        const sizeWithDefaults = sizeAfterApplyingDefaultsAndAspectRatio(width, height, values);
        width = sizeWithDefaults.width;
        height = sizeWithDefaults.height;
        if (values.left !== null) {
            x = values.left;
        }
        else if (parentWidth && values.right !== null) {
            x = parentWidth - values.right - width;
        }
        else if (parentWidth) {
            x = values.centerAnchorX * parentWidth - width / 2;
        }
        if (values.top !== null) {
            y = values.top;
        }
        else if (parentHeight && values.bottom !== null) {
            y = parentHeight - values.bottom - height;
        }
        else if (parentHeight) {
            y = values.centerAnchorY * parentHeight - height / 2;
        }
        const f = { x, y, width, height };
        if (pixelAlign) {
            return pixelAligned(f);
        }
        return f;
    };
})(ConstraintValues = exports.ConstraintValues || (exports.ConstraintValues = {}));
const defaultWidth = 200;
const defaultHeight = 200;
var DimensionType;
(function (DimensionType) {
    DimensionType[DimensionType["FixedNumber"] = 0] = "FixedNumber";
    DimensionType[DimensionType["Percentage"] = 1] = "Percentage";
    /** @internal */ DimensionType[DimensionType["Auto"] = 2] = "Auto";
    DimensionType[DimensionType["FractionOfFreeSpace"] = 3] = "FractionOfFreeSpace";
})(DimensionType = exports.DimensionType || (exports.DimensionType = {}));
function sizeAfterApplyingDefaultsAndAspectRatio(width, height, values) {
    window["__checkBudget__"]();
    let w = isFiniteNumber(width) ? width : defaultWidth;
    let h = isFiniteNumber(height) ? height : defaultHeight;
    if (isFiniteNumber(values.aspectRatio)) {
        if (isFiniteNumber(values.left) && isFiniteNumber(values.right)) {
            h = w / values.aspectRatio;
        }
        else if (isFiniteNumber(values.top) &&
            isFiniteNumber(values.bottom)) {
            w = h * values.aspectRatio;
        }
        else if (values.widthType !== DimensionType.FixedNumber) {
            h = w / values.aspectRatio;
        }
        else {
            w = h * values.aspectRatio;
        }
    }
    return {
        width: w,
        height: h,
    };
}
function pinnedOffset(start, end) {
    window["__checkBudget__"]();
    if (!isFiniteNumber(start) || !isFiniteNumber(end))
        return null;
    return start + end;
}
function calculateRect(props, parentSize, pixelAlign = true) {
    window["__checkBudget__"]();
    // if (!constraintsEnabled(props) || parentSize === ParentSizeState.Disabled) {
    // if (!constraintsEnabled(props)) {
    //     return rectFromFiniteNumberProps(props)
    // }
    const constraintValues = getConstraintValues(props);
    return ConstraintValues.toRect(constraintValues, deprecatedParentSize(parentSize), null, pixelAlign);
}
exports.calculateRect = calculateRect;
var ConstraintMask;
(function (ConstraintMask) {
    // Modifies the constraint mask to remove invalid (mutually exclusive) options and returns the original.
    // TODO: this removes major inconsistencies but probably needs to be merged with ConstraintSolver.
    ConstraintMask.quickfix = constraints => {
        window["__checkBudget__"]();
        if (constraints.fixedSize) {
            // auto sized text
            // TODO: use auto dimension type
            constraints.widthType = DimensionType.FixedNumber;
            constraints.heightType = DimensionType.FixedNumber;
            constraints.aspectRatio = null;
        }
        if (isFiniteNumber(constraints.aspectRatio)) {
            if ((constraints.left && constraints.right) ||
                (constraints.top && constraints.bottom)) {
                constraints.widthType = DimensionType.FixedNumber;
                constraints.heightType = DimensionType.FixedNumber;
            }
            if (constraints.left &&
                constraints.right &&
                constraints.top &&
                constraints.bottom) {
                constraints.bottom = false;
            }
            if (constraints.widthType !== DimensionType.FixedNumber &&
                constraints.heightType !== DimensionType.FixedNumber) {
                constraints.heightType = DimensionType.FixedNumber;
            }
        }
        if (constraints.left && constraints.right) {
            constraints.widthType = DimensionType.FixedNumber;
            if (constraints.fixedSize) {
                constraints.right = false;
            }
        }
        if (constraints.top && constraints.bottom) {
            constraints.heightType = DimensionType.FixedNumber;
            if (constraints.fixedSize) {
                constraints.bottom = false;
            }
        }
        return constraints;
    };
})(ConstraintMask = exports.ConstraintMask || (exports.ConstraintMask = {}));
function valueToDimensionType(value) {
    window["__checkBudget__"]();
    if (typeof value === "string") {
        const trimmedValue = value.trim();
        if (trimmedValue === "auto")
            return DimensionType.Auto;
        if (trimmedValue.endsWith("fr"))
            return DimensionType.FractionOfFreeSpace;
        if (trimmedValue.endsWith("%"))
            return DimensionType.Percentage;
    }
    return DimensionType.FixedNumber;
}
exports.valueToDimensionType = valueToDimensionType;
function getConstraintValues(props) {
    window["__checkBudget__"]();
    const { left, right, top, bottom, center, _constraints = {}, size } = props;
    let { width, height } = props;
    if (width === undefined) {
        width = size;
    }
    if (height === undefined) {
        height = size;
    }
    const { aspectRatio, autoSize } = _constraints;
    const constraintMask = ConstraintMask.quickfix({
        left: isFiniteNumber(left),
        right: isFiniteNumber(right),
        top: isFiniteNumber(top),
        bottom: isFiniteNumber(bottom),
        widthType: valueToDimensionType(width),
        heightType: valueToDimensionType(height),
        aspectRatio: aspectRatio || null,
        fixedSize: autoSize === true,
    });
    let widthValue = null;
    let heightValue = null;
    let widthType = DimensionType.FixedNumber;
    let heightType = DimensionType.FixedNumber;
    if (constraintMask.widthType !== DimensionType.FixedNumber &&
        typeof width === "string") {
        const parsedWidth = parseFloat(width);
        if (width.endsWith("fr")) {
            widthType = DimensionType.FractionOfFreeSpace;
            widthValue = parsedWidth;
        }
        else if (width === "auto") {
            widthType = DimensionType.Auto;
        }
        else {
            // Percentage
            widthType = DimensionType.Percentage;
            widthValue = parsedWidth / 100;
        }
    }
    else if (width !== undefined && typeof width !== "string") {
        widthValue = width;
    }
    if (constraintMask.heightType !== DimensionType.FixedNumber &&
        typeof height === "string") {
        const parsedHeight = parseFloat(height);
        if (height.endsWith("fr")) {
            heightType = DimensionType.FractionOfFreeSpace;
            heightValue = parsedHeight;
        }
        else if (height === "auto") {
            heightType = DimensionType.Auto;
        }
        else {
            // Percentage
            heightType = DimensionType.Percentage;
            heightValue = parseFloat(height) / 100;
        }
    }
    else if (height !== undefined && typeof height !== "string") {
        heightValue = height;
    }
    let centerAnchorX = 0.5;
    let centerAnchorY = 0.5;
    // XXX: is this
    if (center === true || center === "x") {
        constraintMask.left = false;
        if (typeof left === "string") {
            centerAnchorX = parseFloat(left) / 100;
        }
    }
    if (center === true || center === "y") {
        constraintMask.top = false;
        if (typeof top === "string") {
            centerAnchorY = parseFloat(top) / 100;
        }
    }
    return {
        // Because we check isFiniteNumber when creating the masks,
        // We know that left, right, top and bottom are numbers if the mask is true for the corresponding value
        // We need to cast this because typescript does not understand that
        left: constraintMask.left ? left : null,
        right: constraintMask.right ? right : null,
        top: constraintMask.top ? top : null,
        bottom: constraintMask.bottom ? bottom : null,
        widthType,
        heightType,
        width: widthValue,
        height: heightValue,
        aspectRatio: constraintMask.aspectRatio || null,
        centerAnchorX: centerAnchorX,
        centerAnchorY: centerAnchorY,
    };
}
exports.__info__ = [];


/***/ }),

/***/ "./code/utils/equalizeArrayLength.ts":
/*!*******************************************!*\
  !*** ./code/utils/equalizeArrayLength.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWxpemVBcnJheUxlbmd0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvdXRpbHMvZXF1YWxpemVBcnJheUxlbmd0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsbUJBQW1CLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxFQUFFOztJQUNoRSxJQUFJLFlBQVksR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUE7SUFDOUIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFBO0lBRTlCLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQ2pDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQTtRQUMxQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN4RCxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDVixZQUFZLEdBQUcsQ0FBQyxHQUFHLE9BQU8sRUFBRSxHQUFHLFlBQVksQ0FBQyxDQUFBO1NBQy9DO2FBQU07WUFDSCxZQUFZLEdBQUcsQ0FBQyxHQUFHLE9BQU8sRUFBRSxHQUFHLFlBQVksQ0FBQyxDQUFBO1NBQy9DO0tBQ0o7SUFFRCxPQUFPLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFBO0NBQ3RDLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
exports.equalizeArrayLength = (source, target, paddingValue) => {
    window["__checkBudget__"]();
    let sourceResult = [...source];
    let targetResult = [...target];
    if (source.length !== target.length) {
        const diff = source.length - target.length;
        const padding = Array(Math.abs(diff)).fill(paddingValue);
        if (diff > 0) {
            targetResult = [...padding, ...targetResult];
        }
        else {
            sourceResult = [...padding, ...sourceResult];
        }
    }
    return [sourceResult, targetResult];
};
exports.__info__ = [];


/***/ }),

/***/ "./code/utils/extractEventHandlersFromProps.ts":
/*!*****************************************************!*\
  !*** ./code/utils/extractEventHandlersFromProps.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0cmFjdEV2ZW50SGFuZGxlcnNGcm9tUHJvcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL3V0aWxzL2V4dHJhY3RFdmVudEhhbmRsZXJzRnJvbVByb3BzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBS29CO0FBQ3BCLHdDQUEwQztBQUMxQyx3REFBb0Q7QUFDcEQsd0RBQW9EO0FBa0JwRCxTQUFnQiw2QkFBNkIsQ0FDekMsS0FBSyxFQUNMLGNBQWMsRUFDZCxtQkFBbUI7O0lBRW5CLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQTtJQUNwQixNQUFNLGVBQWUsR0FBRyxFQUFFLENBQUE7SUFFMUIsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFBO0lBRXhCLDRCQUFpQjtTQUNaLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRTs7UUFDeEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQTtRQUV0QyxJQUFJLENBQUMsd0JBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QixNQUFNLGdCQUFnQixHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRTs7Z0JBQ2pDLGdDQUFnQztnQkFDaEMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssVUFBVSxFQUFFO29CQUNwRCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTtpQkFDeEI7YUFDSixDQUFBO1lBRUQsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFBO1NBQ3ZEO1FBRUQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFOztZQUN4QixvRkFBb0Y7WUFDcEYsSUFDSSx3QkFBYSxDQUFDLEtBQUssQ0FBQztnQkFDcEIsS0FB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

Object.defineProperty(exports, "__esModule", { value: true });
const controls_1 = __webpack_require__(/*! ../controls */ "./code/controls.ts");
const actions_1 = __webpack_require__(/*! ../actions */ "./code/actions.ts");
const useDoubleTap_1 = __webpack_require__(/*! ../hooks/useDoubleTap */ "./code/hooks/useDoubleTap.ts");
const useLongPress_1 = __webpack_require__(/*! ../hooks/useLongPress */ "./code/hooks/useLongPress.ts");
function extractEventHandlersFromProps(props, switchControls, sanitizedIdentifier) {
    window["__checkBudget__"]();
    const keyEvents = [];
    const automaticEvents = [];
    const eventHandlers = {};
    controls_1.eventTriggerNames
        .reduce((handlers, event) => {
        window["__checkBudget__"]();
        const action = props[`${event}Action`];
        if (!controls_1.isCustomEvent(event)) {
            const handlerFromProps = (...args) => {
                window["__checkBudget__"]();
                // execute any existing handlers
                if (props[event] && typeof props[event] === "function") {
                    props[event](...args);
                }
            };
            mergeEvents(handlers, { [event]: handlerFromProps });
        }
        const handler = (...args) => {
            window["__checkBudget__"]();
            // execute any existing handlers if this is a custom event (like a gesture or delay)
            if (controls_1.isCustomEvent(event) &&
                props[event] &&
                typeof props[event] === "function") {
                props[event](...args);
            }
            if (action !== "unset") {
                // check if a trigger condition has been passed in
                if ("shouldTrigger" in props &&
                    typeof props.shouldTrigger === "function" &&
                    !props.shouldTrigger(...args)) {
                    // block trigger, because shouldTrigger returned a falsy value
                    return;
                }
                actions_1.handleTrigger(switchControls, sanitizedIdentifier, action, action === "specific-name"
                    ? props[`${event}SpecificName`]
                    : props[`${event}SpecificIndex`]);
            }
        };
        if (controls_1.keyEventTriggerNames.indexOf(event) !== -1) {
            if (action !== "unset") {
                const hotkey = (props[`${event}Key`] || "").trim();
                if (hotkey !== "") {
                    const options = {
                        keydown: true,
                        keyup: false,
                    };
                    if (event === "onKeyUp") {
                        options.keyup = true;
                        options.keydown = false;
                    }
                    if (event === "onKeyDown") {
                        options.keyup = false;
                        options.keydown = true;
                    }
                    keyEvents.push({ hotkey, options, handler });
                }
            }
        }
        else if (controls_1.automaticEventTriggerNames.indexOf(event) !== -1) {
            if (action !== "unset") {
                const delay = props[`${event}Delay`];
                const delayedHandler = () => {
                    window["__checkBudget__"]();
                    setTimeout(handler, delay * 1000);
                };
                automaticEvents.push({ delay, handler: delayedHandler });
            }
        }
        else if (event === "onDoubleTap") {
            const onTap = useDoubleTap_1.useDoubleTap(handler);
            mergeEvents(handlers, { onTap });
        }
        else if (event === "onLongPress") {
            const duration = props[`onLongPressDuration`] * 1000;
            const gestures = useLongPress_1.useLongPress(handler, duration);
            mergeEvents(handlers, gestures);
        }
        else {
            mergeEvents(handlers, { [event]: handler });
        }
        return handlers;
    }, new Map())
        .forEach((handlers, event) => {
        window["__checkBudget__"]();
        eventHandlers[event] = createEventHandlerSequence(...handlers);
    });
    return [eventHandlers, keyEvents, automaticEvents];
}
exports.extractEventHandlersFromProps = extractEventHandlersFromProps;
function mergeEvents(map, events) {
    window["__checkBudget__"]();
    for (let e in events) {
        if (events.hasOwnProperty(e)) {
            map.set(e, [...(map.get(e) || []), events[e]]);
        }
    }
}
function createEventHandlerSequence(...handlers) {
    window["__checkBudget__"]();
    return (...args) => {
        window["__checkBudget__"]();
        for (let handler of handlers) {
            if (typeof handler === "function") {
                handler(...args);
            }
        }
    };
}
exports.__info__ = [];


/***/ }),

/***/ "./code/utils/nodeHelpers.ts":
/*!***********************************!*\
  !*** ./code/utils/nodeHelpers.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZUhlbHBlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL3V0aWxzL25vZGVIZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1EQUErQztBQUMvQyxpREFBaUQ7QUFDakQseUNBQXFDO0FBRXJDLE1BQU0sV0FBVyxHQUFHO0lBQ2hCLEtBQUssRUFBRSxPQUFPO0lBQ2QsSUFBSSxFQUFFLE1BQU07SUFDWixNQUFNLEVBQUUsUUFBUTtJQUNoQixXQUFXLEVBQUUsYUFBYTtJQUMxQixhQUFhLEVBQUUsZUFBZTtJQUM5QixvQkFBb0IsRUFBRSxzQkFBc0I7SUFDNUMsS0FBSyxFQUFFLE9BQU87SUFDZCxrQkFBa0IsRUFBRSxvQkFBb0I7SUFDeEMsR0FBRyxFQUFFLEtBQUs7SUFDVixPQUFPLEVBQUUsU0FBUztDQUNyQixDQUFBO0FBRUQsbUVBQW1FO0FBQ25FLDZCQUE2QjtBQUM3QixNQUFNLDhCQUE4QixHQUFHO0lBQ25DLGVBQWU7SUFDZixNQUFNO0lBQ04sb0JBQW9CO0lBQ3BCLEtBQUs7SUFDTCxTQUFTO0NBQ1osQ0FBQTtBQUVELE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFFekQsUUFBQSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUNuQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsbUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0FBRTVDLFFBQUEsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FDekMsOEJBQThCLENBQUMsT0FBTyxDQUFDLG1CQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtBQUV2RCxRQUFBLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRTs7SUFDOUIsT0FBTyxDQUNILElBQUksQ0FBQyxLQUFLO1FBQ1YsY0FBYyxJQUFJ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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const calculateRect_1 = __webpack_require__(/*! ./calculateRect */ "./code/utils/calculateRect.ts");
const styleParsing_1 = __webpack_require__(/*! ./styleParsing */ "./code/utils/styleParsing.ts");
const randomID_1 = __webpack_require__(/*! ./randomID */ "./code/utils/randomID.ts");
const nodeTypeMap = {
    Frame: "Frame",
    Text: "Text",
    Vector: "Vector",
    VectorGroup: "VectorGroup",
    VectorWrapper: "VectorWrapper",
    StackLegacyContainer: "StackLegacyContainer",
    Stack: "Stack",
    ComponentContainer: "ComponentContainer",
    SVG: "SVG",
    Unknown: "Unknown",
};
// The Switch doesn't support animating the hierarchy of SVG nodes,
// or Text components for now
const nonAnimatableChildrenNodeTypes = [
    "VectorWrapper",
    "Text",
    "ComponentContainer",
    "SVG",
    "Unknown",
];
const animatableNodeTypes = ["Frame", "StackLegacyContainer", "Stack"];
exports.isNodeAnimatable = node => animatableNodeTypes.indexOf(exports.getNodeType(node)) !== -1;
exports.canAnimateNodeChildren = node => nonAnimatableChildrenNodeTypes.indexOf(exports.getNodeType(node)) === -1;
exports.isFrameLike = node => {
    window["__checkBudget__"]();
    return (node.props &&
        "_constraints" in node.props &&
        "_border" in node.props &&
        "style" in node.props &&
        "visible" in node.props &&
        "willChangeTransform" in node.props);
};
exports.hasOverrides = node => {
    window["__checkBudget__"]();
    const name = exports.getNodeTypeName(node);
    return (name === "s" ||
        (typeof name === "string" &&
            name.match(/^WithOverrides?\((Frame|Stack)/)));
};
exports.getNodeName = node => {
    window["__checkBudget__"]();
    if (node.props &&
        typeof node.props.name !== "undefined" &&
        node.props.name !== null) {
        return node.props.name;
    }
    return exports.getNodeType(node);
};
exports.getNodeId = node => node.props.id;
exports.getNodeTypeName = node => {
    window["__checkBudget__"]();
    if (node.type) {
        if ("displayName" in node.type) {
            return node.type.displayName;
        }
        if ("name" in node.type) {
            return node.type.name;
        }
        if ("render" in node.type &&
            typeof node.type.render === "function" &&
            "name" in node.type.render) {
            return node.type.render.name;
        }
    }
    return undefined;
};
const isVectorWrapper = node => {
    window["__checkBudget__"]();
    // if all children are of type Vector or VectorGroup, this is a vector wrapper
    const children = React.Children.toArray(node.props.children || []);
    return (children.length > 0 &&
        children.every(child => [nodeTypeMap.Vector, nodeTypeMap.VectorGroup].indexOf(exports.getNodeType(child)) !== -1));
};
exports.getNodeType = node => {
    window["__checkBudget__"]();
    const name = exports.getNodeTypeName(node);
    // Known Frame case - Frames could be Vector Wrappers or regular frames
    if (name === "Frame" || name === "FrameWithMotion") {
        return getRefinedFrameType(node);
    }
    // Component containers could be legacy stacks
    if (name === "ComponentContainer" && exports.isLegacyStack(node)) {
        return nodeTypeMap.StackLegacyContainer;
    }
    // Unknown types and Frames with Overrides
    if (typeof name === "undefined" || exports.hasOverrides(node)) {
        // Test for an overridden Legacy Stack (a component container underneath)
        if (exports.isLegacyStack(node)) {
            return nodeTypeMap.StackLegacyContainer;
        }
        // Test for a modern overridden Stack (will have a proper displayName)
        if (typeof name === "string" &&
            name.match(/^WithOverrides?\(Stack\)/)) {
            return nodeTypeMap.Stack;
        }
        // Test for Frame-like props and if true, apply the same Frame heuristics as
        // in the known Frame case above
        if (exports.isFrameLike(node)) {
            return getRefinedFrameType(node);
        }
    }
    return nodeTypeMap[name] || nodeTypeMap.Unknown;
};
// Refines the node type of a Frame to either a VectorWrapper, or a regular Frame.
// The passed in node is assumed to be a Frame/FrameWithMotion or a Frame-like component.
const getRefinedFrameType = node => {
    window["__checkBudget__"]();
    if (isVectorWrapper(node)) {
        return nodeTypeMap.VectorWrapper;
    }
    return nodeTypeMap.Frame;
};
exports.isLegacyStack = node => "componentIdentifier" in node.props &&
    node.props.componentIdentifier === "framer/Stack";
exports.isSameComponent = (source, target) => {
    window["__checkBudget__"]();
    return source.props.componentIdentifier === target.props.componentIdentifier;
};
exports.getNodeRect = (node, parentSize) => {
    window["__checkBudget__"]();
    const nodeType = exports.getNodeType(node);
    let props = Object.assign({}, node.props);
    if (nodeType === "StackLegacyContainer") {
        const stack = React.Children.toArray(node.props.children)[0];
        props.width = stack.props.width;
        props.height = stack.props.height;
    }
    const rect = calculateRect_1.calculateRect(props, parentSize);
    return styleParsing_1.rectAsStyleProps(rect);
};
exports.nodeWithIdAndKey = node => {
    window["__checkBudget__"]();
    let id = exports.getNodeId(node);
    id = typeof id === "undefined" || id === null ? randomID_1.randomID() : id;
    const key = typeof node.key === "undefined" || node.key === null ? id : node.key;
    return React.cloneElement(node, { key, id });
};
exports.getNodeChildren = node => {
    window["__checkBudget__"]();
    const nodeType = exports.getNodeType(node);
    let children = node.props.children;
    if (nodeType === "StackLegacyContainer") {
        const stack = React.Children.toArray(children)[0];
        children = stack.props.children;
    }
    return React.Children.map(children, exports.nodeWithIdAndKey);
};
exports.isNodeVisible = node => {
    window["__checkBudget__"]();
    return node.props && node.props.visible;
};
exports.__info__ = [];


/***/ }),

/***/ "./code/utils/omit.ts":
/*!****************************!*\
  !*** ./code/utils/omit.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvdXRpbHMvb21pdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQWdCLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUzs7SUFDbEMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNyQixNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QyxNQUFNLENBQ0gsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFDOUQsRUFBRSxDQUNMLENBQUE7Q0FDUjtBQVBELG9CQU9DIn0=

Object.defineProperty(exports, "__esModule", { value: true });
function omit(source, blacklist) {
    window["__checkBudget__"]();
    return Object.keys(source)
        .filter(key => blacklist.indexOf(key) < 0)
        .reduce((result, key) => Object.assign(result, { [key]: source[key] }), {});
}
exports.omit = omit;
exports.__info__ = [];


/***/ }),

/***/ "./code/utils/pick.ts":
/*!****************************!*\
  !*** ./code/utils/pick.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvdXRpbHMvcGljay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQWdCLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUzs7SUFDbEMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNyQixNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQyxNQUFNLENBQ0gsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFDOUQsRUFBRSxDQUNMLENBQUE7Q0FDUjtBQVBELG9CQU9DIn0=

Object.defineProperty(exports, "__esModule", { value: true });
function pick(source, whitelist) {
    window["__checkBudget__"]();
    return Object.keys(source)
        .filter(key => whitelist.indexOf(key) >= 0)
        .reduce((result, key) => Object.assign(result, { [key]: source[key] }), {});
}
exports.pick = pick;
exports.__info__ = [];


/***/ }),

/***/ "./code/utils/propNameHelpers.ts":
/*!***************************************!*\
  !*** ./code/utils/propNameHelpers.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcE5hbWVIZWxwZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS91dGlscy9wcm9wTmFtZUhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTLFVBQVUsQ0FBQyxJQUFZOztJQUM1QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtDQUN0RDtBQUVELFNBQWdCLGNBQWMsQ0FBQyxJQUFZLEVBQUUsU0FBaUIsSUFBSTs7SUFDOUQsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7Q0FDeEQ7QUFGRCx3Q0FFQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLElBQVk7O0lBQ3pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUE7Q0FDaEM7QUFGRCw0Q0FFQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
function capitalize(name) {
    window["__checkBudget__"]();
    return name.charAt(0).toUpperCase() + name.slice(1);
}
function prefixPropName(name, prefix = null) {
    window["__checkBudget__"]();
    return prefix ? `${prefix}${capitalize(name)}` : name;
}
exports.prefixPropName = prefixPropName;
function sanitizePropName(name) {
    window["__checkBudget__"]();
    return name.replace(/\s/, "");
}
exports.sanitizePropName = sanitizePropName;
exports.__info__ = [];


/***/ }),

/***/ "./code/utils/randomID.ts":
/*!********************************!*\
  !*** ./code/utils/randomID.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tSUQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL3V0aWxzL3JhbmRvbUlELnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxLQUFLLEdBQUcsc0RBQXNELENBQUE7QUFDcEUsTUFBTSxPQUFPLEdBQ1QsaUVBQWlFLENBQUE7QUFFckUsU0FBUyxDQUFDOztJQUNOLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0NBQ3pEO0FBRUQsU0FBUyxDQUFDOztJQUNOLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0NBQzdEO0FBRUQsU0FBZ0IsUUFBUTs7SUFDcEIsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQTtDQUM3RDtBQUZELDRCQUVDIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const first = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
function f() {
    window["__checkBudget__"]();
    return first[Math.floor(Math.random() * first.length)];
}
function l() {
    window["__checkBudget__"]();
    return letters[Math.floor(Math.random() * letters.length)];
}
function randomID() {
    window["__checkBudget__"]();
    return f() + l() + l() + l() + l() + l() + l() + l() + l();
}
exports.randomID = randomID;
exports.__info__ = [];


/***/ }),

/***/ "./code/utils/styleParsing.ts":
/*!************************************!*\
  !*** ./code/utils/styleParsing.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVQYXJzaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS91dGlscy9zdHlsZVBhcnNpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBOEQ7QUFDOUQsaUNBQTZCO0FBQzdCLCtEQUEyRDtBQUU5QyxRQUFBLFVBQVUsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ2hDLE9BQU8sS0FBSyxLQUFLLFdBQVc7SUFDNUIsT0FBTyxLQUFLLENBQUMsT0FBTyxLQUFLLFdBQVc7SUFDcEMsS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJO0lBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUE7QUFFVixRQUFBLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQy9CLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssV0FBVztJQUMvRCxDQUFDLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFBO0FBRXRCLE1BQU0sZ0JBQWdCLEdBQUcsc0JBQXNCLENBQUE7QUFFbEMsUUFBQSxZQUFZLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRTs7SUFDeEMsSUFBSSxPQUFPLFdBQVcsS0FBSyxXQUFXLElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtRQUM1RCxPQUFPLE1BQU0sQ0FBQTtLQUNoQjtJQUVELElBQUksT0FBTyxXQUFXLEtBQUssUUFBUSxFQUFFO1FBQ2pDLE9BQU8sT0FBTyxDQUFBO0tBQ2pCO0lBRUQsSUFBSSxTQUFTLElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEtBQUssZ0JBQWdCLEVBQUU7UUFDdEUsT0FBTyxpQkFBaUIsQ0FBQTtLQUMzQjtJQUVELElBQUksU0FBUyxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsT0FBTyxLQUFLLGdCQUFnQixFQUFFO1FBQ3RFLE9BQU8saUJBQWlC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

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const omit_1 = __webpack_require__(/*! ./omit */ "./code/utils/omit.ts");
const equalizeArrayLength_1 = __webpack_require__(/*! ./equalizeArrayLength */ "./code/utils/equalizeArrayLength.ts");
exports.getOpacity = (style) => typeof style === "undefined" ||
    typeof style.opacity === "undefined" ||
    style.opacity === null
    ? 1
    : style.opacity;
exports.getRotate = (style) => typeof style === "undefined" || typeof style.rotate === "undefined"
    ? 0
    : style.rotate;
const cssColorVarRegex = /\bvar\([^,]*, (.*)\)/;
exports.getColorType = (colorObject) => {
    window["__checkBudget__"]();
    if (typeof colorObject === "undefined" || colorObject === null) {
        return "none";
    }
    if (typeof colorObject === "string") {
        return "plain";
    }
    if ("__class" in colorObject && colorObject.__class === "LinearGradient") {
        return "linear-gradient";
    }
    if ("__class" in colorObject && colorObject.__class === "RadialGradient") {
        return "radial-gradient";
    }
    if ("src" in colorObject) {
        return "image";
    }
    return "plain";
};
exports.getBackgroundColorPair = (sourceProps, targetProps) => {
    window["__checkBudget__"]();
    const sourceColorType = exports.getColorType(sourceProps.background);
    const targetColorType = exports.getColorType(targetProps.background);
    let sourceLinear;
    let targetLinear;
    let sourceRadial;
    let targetRadial;
    if (targetColorType === "image" || sourceColorType === "image") {
        return [null, null];
    }
    if (targetColorType === "none" || targetColorType === "plain") {
        if (sourceColorType === "none" || sourceColorType === "plain") {
            const sourceColor = exports.getPlainBackgroundColor(sourceProps);
            const targetColor = exports.getPlainBackgroundColor(targetProps);
            sourceLinear = exports.linearGradientFromColor(sourceColorType === "none" && targetColorType === "plain"
                ? exports.transparent(targetColor)
                : sourceColor);
            targetLinear = exports.linearGradientFromColor(sourceColorType === "plain" && targetColorType === "none"
                ? exports.transparent(sourceColor)
                : targetColor);
            sourceRadial = exports.radialGradientFromColor(sourceColorType === "none" && targetColorType === "plain"
                ? exports.transparent(targetColor)
                : exports.transparent(sourceColor));
            targetRadial = exports.radialGradientFromColor(sourceColorType === "plain" && targetColorType === "none"
                ? exports.transparent(sourceColor)
                : exports.transparent(targetColor));
        }
        if (sourceColorType === "linear-gradient") {
            sourceLinear = exports.linearGradientFromGradient(sourceProps.background);
            sourceRadial = exports.radialGradientFromGradient(sourceProps.background, 0 // alpha
            );
            const targetColor = exports.getPlainBackgroundColor(targetProps);
            targetLinear = exports.linearGradientFromColor(targetColor, sourceProps.background.angle);
            targetRadial = exports.radialGradientFromColor(exports.transparent(targetColor));
        }
        if (sourceColorType === "radial-gradient") {
            sourceRadial = exports.radialGradientFromGradient(sourceProps.background);
            const { widthFactor, heightFactor, centerAnchorX, centerAnchorY, } = sourceProps.background;
            const gradientShape = `${widthFactor * 100}% ${heightFactor * 100}%`;
            const gradientPosition = `${centerAnchorX * 100}% ${centerAnchorY * 100}%`;
            const targetColor = exports.getPlainBackgroundColor(targetProps);
            targetRadial = exports.radialGradientFromColor(targetColor, gradientShape, gradientPosition);
            sourceLinear = exports.linearGradientFromColor(exports.transparent(targetColor));
            targetLinear = exports.linearGradientFromColor(exports.transparent(targetColor));
        }
    }
    if (targetColorType === "linear-gradient") {
        if (sourceColorType === "none" || sourceColorType === "plain") {
            const sourceColor = exports.getPlainBackgroundColor(sourceProps);
            sourceLinear =
                sourceColorType === "none"
                    ? exports.linearGradientFromGradient(targetProps.background, 0)
                    : exports.linearGradientFromColor(sourceColor, targetProps.background.angle);
            sourceRadial =
                sourceColorType === "none"
                    ? exports.radialGradientFromGradient(targetProps.background, 0)
                    : exports.radialGradientFromColor(exports.transparent(sourceColor));
            targetLinear = exports.linearGradientFromGradient(targetProps.background);
            targetRadial = exports.radialGradientFromGradient(targetProps.background, 0);
        }
        if (sourceColorType === "linear-gradient") {
            sourceLinear = exports.linearGradientFromGradient(sourceProps.background);
            sourceRadial = exports.radialGradientFromGradient(sourceProps.background, 0);
            targetLinear = exports.linearGradientFromGradient(targetProps.background);
            targetRadial = exports.radialGradientFromGradient(targetProps.background, 0);
        }
        if (sourceColorType === "radial-gradient") {
            sourceLinear = exports.linearGradientFromGradient(sourceProps.background, 0);
            sourceRadial = exports.radialGradientFromGradient(sourceProps.background);
            targetLinear = exports.linearGradientFromGradient(targetProps.background);
            targetRadial = exports.radialGradientFromGradient(targetProps.background, 0);
        }
    }
    if (targetColorType === "radial-gradient") {
        if (sourceColorType === "none" || sourceColorType === "plain") {
            const sourceColor = exports.getPlainBackgroundColor(sourceProps);
            const { widthFactor, heightFactor, centerAnchorX, centerAnchorY, } = targetProps.background;
            const gradientShape = `${widthFactor * 100}% ${heightFactor * 100}%`;
            const gradientPosition = `${centerAnchorX * 100}% ${centerAnchorY * 100}%`;
            sourceLinear =
                sourceColorType === "none"
                    ? exports.linearGradientFromGradient(targetProps.background, 0)
                    : exports.linearGradientFromColor(exports.transparent(sourceColor));
            targetLinear =
                sourceColorType === "none"
                    ? exports.linearGradientFromGradient(targetProps.background, 0)
                    : exports.linearGradientFromColor(exports.transparent(sourceColor));
            sourceRadial = exports.radialGradientFromColor(sourceColor, gradientShape, gradientPosition);
            targetRadial = exports.radialGradientFromGradient(targetProps.background);
        }
        if (sourceColorType === "linear-gradient") {
            sourceLinear = exports.linearGradientFromGradient(sourceProps.background);
            sourceRadial = exports.radialGradientFromGradient(sourceProps.background, 0);
            targetRadial = exports.radialGradientFromGradient(targetProps.background);
            targetLinear = exports.linearGradientFromGradient(targetProps.background, 0);
        }
        if (sourceColorType === "radial-gradient") {
            sourceLinear = exports.linearGradientFromGradient(sourceProps.background, 0);
            sourceRadial = exports.radialGradientFromGradient(sourceProps.background);
            targetLinear = exports.linearGradientFromGradient(targetProps.background, 0);
            targetRadial = exports.radialGradientFromGradient(targetProps.background);
        }
    }
    return [
        `${sourceLinear}, ${sourceRadial}`,
        `${targetLinear}, ${targetRadial}`,
    ];
};
exports.isBackgroundTransitionAnimatable = (source, target) => {
    window["__checkBudget__"]();
    const sourceBackground = exports.getColorType(source.props.background);
    const targetBackground = exports.getColorType(target.props.background);
    return !((sourceBackground !== "image" && targetBackground === "image") ||
        (sourceBackground === "image" && targetBackground !== "image"));
};
exports.transparent = (color) => framer_1.Color.toString(framer_1.Color.alpha(toColor(color), 0));
exports.linearGradientFromColor = (color, angle = 0) => {
    window["__checkBudget__"]();
    return `linear-gradient(${angle}deg, ${color} 0%, ${color} 100%)`;
};
exports.radialGradientFromColor = (color, shape = "50% 50%", position = "50% 50%") => {
    window["__checkBudget__"]();
    return `radial-gradient(${shape} at ${position}, ${color} 0%, ${color} 100%)`;
};
const toColor = (color) => {
    window["__checkBudget__"]();
    if (typeof color === "string" && color.match(cssColorVarRegex)) {
        const matches = color.match(cssColorVarRegex);
        return framer_1.Color(matches[1]);
    }
    return framer_1.Color(color);
};
exports.getPlainBackgroundColor = (props) => {
    window["__checkBudget__"]();
    let color = "transparent";
    if (typeof props.style !== "undefined") {
        color =
            props.style.backgroundColor ||
                props.style.background ||
                "transparent";
    }
    else {
        color = props.backgroundColor || props.background || "transparent";
    }
    return framer_1.Color.toString(toColor(color));
};
exports.toCssGradientWithRgbStops = (gradient, targetGradientType = null, targetAlpha = null) => {
    window["__checkBudget__"]();
    const stops = gradient.stops.map((stop) => (Object.assign(Object.assign({}, stop), { value: framer_1.Color.toString(targetAlpha === null
            ? toColor(stop.value)
            : framer_1.Color.alpha(toColor(stop.value), targetAlpha)) })));
    let type = targetGradientType;
    if (!type && gradient.__class === "LinearGradient") {
        type = "linear";
    }
    if (!type && gradient.__class === "RadialGradient") {
        type = "radial";
    }
    if (type === "linear") {
        return framer_1.LinearGradient.toCSS(Object.assign(Object.assign({ angle: 0 }, gradient), { stops }));
    }
    if (type === "radial") {
        return framer_1.RadialGradient.toCSS(Object.assign(Object.assign({ widthFactor: 0.5, heightFactor: 0.5, centerAnchorX: 0.5, centerAnchorY: 0.5 }, gradient), { stops }));
    }
    return gradient;
};
exports.linearGradientFromGradient = (gradient, alpha = null) => exports.toCssGradientWithRgbStops(gradient, "linear", alpha);
exports.radialGradientFromGradient = (gradient, alpha = null) => exports.toCssGradientWithRgbStops(gradient, "radial", alpha);
const transparentShadow = `0px 0px 0px 0px rgba(0, 0, 0, 0)`;
const insetTransparentShadow = `inset ${transparentShadow}`;
const shadowRegex = new RegExp(/, (?=-?\d+px)|, (?=inset -?\d+px)/);
const maxShadows = 10;
const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)|\b(black|silver|gray|whitesmoke|maroon|red|purple|fuchsia|green|lime|olivedrab|yellow|navy|blue|teal|aquamarine|orange|aliceblue|antiquewhite|aqua|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|goldenrod|gold|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavenderblush|lavender|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olive|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|violet|wheat|white|yellowgreen|rebeccapurple)\b)/i;
exports.convertColorsInStringToRgba = (string) => {
    window["__checkBudget__"]();
    const updated = string
        .replace(cssColorVarRegex, "$1")
        .replace(colorRegex, (match) => {
        window["__checkBudget__"]();
        return framer_1.Color.toString(toColor(match));
    });
    return updated;
};
exports.getBoxShadowPair = (sourceProps, targetProps) => {
    window["__checkBudget__"]();
    let sourceShadows = exports.getBoxShadow(sourceProps.style).split(shadowRegex);
    let sourceBoxShadows = sourceShadows
        .filter((s) => !s.match(/^inset/))
        .slice(0, maxShadows)
        .map(exports.convertColorsInStringToRgba);
    let sourceInnerShadows = sourceShadows
        .filter((s) => s.match(/^inset/))
        .slice(0, maxShadows)
        .map(exports.convertColorsInStringToRgba);
    let targetShadows = exports.getBoxShadow(targetProps.style).split(shadowRegex);
    let targetBoxShadows = targetShadows
        .filter((s) => !s.match(/^inset/))
        .slice(0, maxShadows)
        .map(exports.convertColorsInStringToRgba);
    let targetInnerShadows = targetShadows
        .filter((s) => s.match(/^inset/))
        .slice(0, maxShadows)
        .map(exports.convertColorsInStringToRgba);
    const placeholderBoxShadows = Array(maxShadows).fill(transparentShadow);
    const placeholderInnerShadows = Array(maxShadows).fill(insetTransparentShadow);
    if (sourceBoxShadows.length <= placeholderBoxShadows.length) {
        let _;
        [sourceBoxShadows, _] = equalizeArrayLength_1.equalizeArrayLength(sourceBoxShadows, placeholderBoxShadows, transparentShadow);
    }
    if (targetBoxShadows.length < placeholderBoxShadows.length) {
        let _;
        [targetBoxShadows, _] = equalizeArrayLength_1.equalizeArrayLength(targetBoxShadows, placeholderBoxShadows, transparentShadow);
    }
    if (sourceInnerShadows.length <= placeholderInnerShadows.length) {
        let _;
        [sourceInnerShadows, _] = equalizeArrayLength_1.equalizeArrayLength(sourceInnerShadows, placeholderInnerShadows, insetTransparentShadow);
    }
    if (targetInnerShadows.length < placeholderBoxShadows.length) {
        let _;
        [targetInnerShadows, _] = equalizeArrayLength_1.equalizeArrayLength(targetInnerShadows, placeholderInnerShadows, insetTransparentShadow);
    }
    sourceShadows = [...sourceBoxShadows, ...sourceInnerShadows];
    targetShadows = [...targetBoxShadows, ...targetInnerShadows];
    return [sourceShadows.join(", "), targetShadows.join(", ")];
};
exports.getBoxShadow = (style) => {
    window["__checkBudget__"]();
    if (typeof style === "undefined" ||
        typeof style.boxShadow === "undefined" ||
        style.boxShadow === null) {
        return transparentShadow;
    }
    return style.boxShadow;
};
exports.getBorderRadius = (style) => {
    window["__checkBudget__"]();
    if (typeof style === "undefined" ||
        typeof style.borderRadius === "undefined" ||
        style.borderRadius === null) {
        return {
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            borderBottomLeftRadius: "0px",
        };
    }
    // single value
    if (style.borderRadius.split(" ").length === 1) {
        return {
            borderTopLeftRadius: style.borderRadius,
            borderTopRightRadius: style.borderRadius,
            borderBottomRightRadius: style.borderRadius,
            borderBottomLeftRadius: style.borderRadius,
        };
    }
    // four values
    if (style.borderRadius.split(" ").length === 4) {
        const values = style.borderRadius.split(" ");
        return {
            borderTopLeftRadius: values[0],
            borderTopRightRadius: values[1],
            borderBottomRightRadius: values[2],
            borderBottomLeftRadius: values[3],
        };
    }
    return {};
};
exports.getBorderPair = (sourceProps, targetProps) => {
    window["__checkBudget__"]();
    const sourceBorder = exports.getBorder(sourceProps._border);
    const targetBorder = exports.getBorder(targetProps._border);
    return [sourceBorder, targetBorder];
};
exports.getBorder = (border) => {
    window["__checkBudget__"]();
    if (typeof border === "undefined" ||
        border === null ||
        Object.keys(border).length === 0) {
        return {
            borderWidth: "0px 0px 0px 0px",
            borderStyle: "solid",
            borderColor: "rgba(0, 0, 0, 0)",
        };
    }
    const rgbaColor = framer_1.Color.toString(toColor(border.borderColor));
    return {
        borderWidth: typeof border.borderWidth === "number"
            ? `${border.borderWidth}px ${border.borderWidth}px ${border.borderWidth}px ${border.borderWidth}px`
            : `${border.borderWidth.top}px ${border.borderWidth.right}px ${border.borderWidth.bottom}px ${border.borderWidth.left}px`,
        borderStyle: border.borderStyle,
        borderColor: rgbaColor,
    };
};
exports.rectAsStyleProps = (rect) => {
    window["__checkBudget__"]();
    return {
        width: rect.width,
        height: rect.height,
        top: rect.y,
        left: rect.x,
    };
};
const absolutePositioningProps = ["top", "left", "bottom", "right"];
exports.filterOutAbsolutePositioningProps = (props) => {
    window["__checkBudget__"]();
    const filteredProps = omit_1.omit(props, absolutePositioningProps);
    if (filteredProps.variants) {
        filteredProps.variants = Object.keys(filteredProps.variants).reduce((res, v) => {
            window["__checkBudget__"]();
            res[v] = omit_1.omit(filteredProps.variants[v], absolutePositioningProps);
            return res;
        }, {});
    }
    return filteredProps;
};
exports.__info__ = [];


/***/ }),

/***/ "./designDependencies.js":
/*!*******************************!*\
  !*** ./designDependencies.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


const designs = {}

// The packages are passed in through a template


module.exports = designs


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
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.1.7","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.7","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/framer.device-skin-apple-iphone-xs-spacegrey"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/framer.device-skin-apple-iphone-xs-spacegrey */ "framer-package-loader!@framer/framer.device-skin-apple-iphone-xs-spacegrey")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/framer.device-skin-apple-iphone-xs-spacegrey"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"@framer/framer.device-skin-apple-iphone-xs-spacegrey","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^3.0.1"},"framer":{"components":[{"name":"DeviceSkin","type":"deviceSkin"}]}}
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
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, name, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@framer/framer.device-skin-apple-iphone-xs-spacegrey\":\"^1.0.0\",\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"ed23e452-a6a0-4923-b8d0-b11df262bfbc\",\"displayName\":\"Switch\"},\"author\":\"Tisho Georgiev\",\"dependencies\":{\"hotkeys-js\":\"^3.7.3\",\"reactn\":\"^2.2.4\"},\"name\":\"@framer/tishogeorgiev.switch\",\"version\":\"1.17.0\"}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

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

/***/ "hotkeys-js":
/*!*****************************!*\
  !*** external "hotkeys-js" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_hotkeys_js__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "reactn":
/*!*************************!*\
  !*** external "reactn" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_reactn__;

/***/ })

/******/ });
});