(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-incidents-incidents-module~Modules-installation-installation-module"],{

/***/ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js ***!
  \*****************************************************************************/
/*! exports provided: InfiniteScrollDirective, InfiniteScrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollDirective", function() { return InfiniteScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollModule", function() { return InfiniteScrollModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} selector
 * @param {?} scrollWindow
 * @param {?} defaultElement
 * @param {?} fromRoot
 * @return {?}
 */
function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
    var /** @type {?} */ hasWindow = window && !!window.document && window.document.documentElement;
    var /** @type {?} */ container = hasWindow && scrollWindow ? window : defaultElement;
    if (selector) {
        var /** @type {?} */ containerIsString = selector && hasWindow && typeof selector === 'string';
        container = containerIsString
            ? findElement(selector, defaultElement.nativeElement, fromRoot)
            : selector;
        if (!container) {
            throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
        }
    }
    return container;
}
/**
 * @param {?} selector
 * @param {?} customRoot
 * @param {?} fromRoot
 * @return {?}
 */
function findElement(selector, customRoot, fromRoot) {
    var /** @type {?} */ rootEl = fromRoot ? window.document : customRoot;
    return rootEl.querySelector(selector);
}
/**
 * @param {?} prop
 * @return {?}
 */
function inputPropChanged(prop) {
    return prop && !prop.firstChange;
}
/**
 * @return {?}
 */
function hasWindowDefined() {
    return typeof window !== 'undefined';
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var VerticalProps = {
    clientHeight: "clientHeight",
    offsetHeight: "offsetHeight",
    scrollHeight: "scrollHeight",
    pageYOffset: "pageYOffset",
    offsetTop: "offsetTop",
    scrollTop: "scrollTop",
    top: "top"
};
var HorizontalProps = {
    clientHeight: "clientWidth",
    offsetHeight: "offsetWidth",
    scrollHeight: "scrollWidth",
    pageYOffset: "pageXOffset",
    offsetTop: "offsetLeft",
    scrollTop: "scrollLeft",
    top: "left"
};
var AxisResolver = /** @class */ (function () {
    /**
     * @param {?=} vertical
     */
    function AxisResolver(vertical) {
        if (vertical === void 0) { vertical = true; }
        this.vertical = vertical;
        this.propsMap = vertical ? VerticalProps : HorizontalProps;
    }
    /**
     * @return {?}
     */
    AxisResolver.prototype.clientHeightKey = function () {
        return this.propsMap.clientHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.offsetHeightKey = function () {
        return this.propsMap.offsetHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.scrollHeightKey = function () {
        return this.propsMap.scrollHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.pageYOffsetKey = function () {
        return this.propsMap.pageYOffset;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.offsetTopKey = function () {
        return this.propsMap.offsetTop;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.scrollTopKey = function () {
        return this.propsMap.scrollTop;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.topKey = function () {
        return this.propsMap.top;
    };
    return AxisResolver;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/**
 * @record
 */
/**
 * @record
 */
/**
 * @record
 */
/**
 * @param {?} alwaysCallback
 * @param {?} shouldFireScrollEvent
 * @param {?} isTriggeredCurrentTotal
 * @return {?}
 */
function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
    return (alwaysCallback || shouldFireScrollEvent) && !isTriggeredCurrentTotal;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} __0
 * @return {?}
 */
function createResolver(_a) {
    var windowElement = _a.windowElement, axis = _a.axis;
    return createResolverWithContainer({ axis: axis, isWindow: isElementWindow(windowElement) }, windowElement);
}
/**
 * @param {?} resolver
 * @param {?} windowElement
 * @return {?}
 */
function createResolverWithContainer(resolver, windowElement) {
    var /** @type {?} */ container = resolver.isWindow || (windowElement && !windowElement.nativeElement)
        ? windowElement
        : windowElement.nativeElement;
    return Object.assign({}, resolver, { container: container });
}
/**
 * @param {?} windowElement
 * @return {?}
 */
function isElementWindow(windowElement) {
    var /** @type {?} */ isWindow = ['Window', 'global'].some(function (obj) { return Object.prototype.toString.call(windowElement).includes(obj); });
    return isWindow;
}
/**
 * @param {?} isContainerWindow
 * @param {?} windowElement
 * @return {?}
 */
function getDocumentElement(isContainerWindow, windowElement) {
    return isContainerWindow ? windowElement.document.documentElement : null;
}
/**
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePoints(element, resolver) {
    var /** @type {?} */ height = extractHeightForElement(resolver);
    return resolver.isWindow
        ? calculatePointsForWindow(height, element, resolver)
        : calculatePointsForElement(height, element, resolver);
}
/**
 * @param {?} height
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePointsForWindow(height, element, resolver) {
    var axis = resolver.axis, container = resolver.container, isWindow = resolver.isWindow;
    var _a = extractHeightPropKeys(axis), offsetHeightKey = _a.offsetHeightKey, clientHeightKey = _a.clientHeightKey;
    // scrolled until now / current y point
    var /** @type {?} */ scrolled = height +
        getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow);
    // total height / most bottom y point
    var /** @type {?} */ nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
    var /** @type {?} */ totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) +
        nativeElementHeight;
    return { height: height, scrolled: scrolled, totalToScroll: totalToScroll };
}
/**
 * @param {?} height
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePointsForElement(height, element, resolver) {
    var axis = resolver.axis, container = resolver.container;
    // perhaps use container.offsetTop instead of 'scrollTop'
    var /** @type {?} */ scrolled = container[axis.scrollTopKey()];
    var /** @type {?} */ totalToScroll = container[axis.scrollHeightKey()];
    return { height: height, scrolled: scrolled, totalToScroll: totalToScroll };
}
/**
 * @param {?} axis
 * @return {?}
 */
function extractHeightPropKeys(axis) {
    return {
        offsetHeightKey: axis.offsetHeightKey(),
        clientHeightKey: axis.clientHeightKey()
    };
}
/**
 * @param {?} __0
 * @return {?}
 */
function extractHeightForElement(_a) {
    var container = _a.container, isWindow = _a.isWindow, axis = _a.axis;
    var _b = extractHeightPropKeys(axis), offsetHeightKey = _b.offsetHeightKey, clientHeightKey = _b.clientHeightKey;
    return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
}
/**
 * @param {?} elem
 * @param {?} isWindow
 * @param {?} offsetHeightKey
 * @param {?} clientHeightKey
 * @return {?}
 */
function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
    if (isNaN(elem[offsetHeightKey])) {
        var /** @type {?} */ docElem = getDocumentElement(isWindow, elem);
        return docElem ? docElem[clientHeightKey] : 0;
    }
    else {
        return elem[offsetHeightKey];
    }
}
/**
 * @param {?} elem
 * @param {?} axis
 * @param {?} isWindow
 * @return {?}
 */
function getElementOffsetTop(elem, axis, isWindow) {
    var /** @type {?} */ topKey = axis.topKey();
    // elem = elem.nativeElement;
    if (!elem.getBoundingClientRect) {
        // || elem.css('none')) {
        return;
    }
    return (elem.getBoundingClientRect()[topKey] +
        getElementPageYOffset(elem, axis, isWindow));
}
/**
 * @param {?} elem
 * @param {?} axis
 * @param {?} isWindow
 * @return {?}
 */
function getElementPageYOffset(elem, axis, isWindow) {
    var /** @type {?} */ pageYOffset = axis.pageYOffsetKey();
    var /** @type {?} */ scrollTop = axis.scrollTopKey();
    var /** @type {?} */ offsetTop = axis.offsetTopKey();
    if (isNaN(window[pageYOffset])) {
        return getDocumentElement(isWindow, elem)[scrollTop];
    }
    else if (elem.ownerDocument) {
        return elem.ownerDocument.defaultView[pageYOffset];
    }
    else {
        return elem[offsetTop];
    }
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} container
 * @param {?} distance
 * @param {?} scrollingDown
 * @return {?}
 */
function shouldFireScrollEvent(container, distance, scrollingDown) {
    var /** @type {?} */ remaining;
    var /** @type {?} */ containerBreakpoint;
    if (container.totalToScroll <= 0) {
        return false;
    }
    var /** @type {?} */ scrolledUntilNow = container.height + container.scrolled;
    if (scrollingDown) {
        remaining =
            (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
        containerBreakpoint = distance.down / 10;
    }
    else {
        var /** @type {?} */ totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
        remaining = container.scrolled / totalHiddenContentHeight;
        containerBreakpoint = distance.up / 10;
    }
    var /** @type {?} */ shouldFireEvent = remaining <= containerBreakpoint;
    return shouldFireEvent;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} container
 * @return {?}
 */
function isScrollingDownwards(lastScrollPosition, container) {
    return lastScrollPosition < container.scrolled;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} container
 * @param {?} distance
 * @return {?}
 */
function getScrollStats(lastScrollPosition, container, distance) {
    var /** @type {?} */ scrollDown = isScrollingDownwards(lastScrollPosition, container);
    return {
        fire: shouldFireScrollEvent(container, distance, scrollDown),
        scrollDown: scrollDown
    };
}
/**
 * @param {?} position
 * @param {?} scrollState
 * @return {?}
 */
function updateScrollPosition(position, scrollState) {
    return (scrollState.lastScrollPosition = position);
}
/**
 * @param {?} totalToScroll
 * @param {?} scrollState
 * @return {?}
 */
function updateTotalToScroll(totalToScroll, scrollState) {
    if (scrollState.lastTotalToScroll !== totalToScroll) {
        scrollState.lastTotalToScroll = scrollState.totalToScroll;
        scrollState.totalToScroll = totalToScroll;
    }
}
/**
 * @param {?} scrollState
 * @return {?}
 */
/**
 * @param {?} scroll
 * @param {?} scrollState
 * @param {?} triggered
 * @param {?} isScrollingDown
 * @return {?}
 */
function updateTriggeredFlag(scroll, scrollState, triggered, isScrollingDown) {
    if (isScrollingDown) {
        scrollState.triggered.down = scroll;
    }
    else {
        scrollState.triggered.up = scroll;
    }
}
/**
 * @param {?} totalToScroll
 * @param {?} scrollState
 * @param {?} isScrollingDown
 * @return {?}
 */
function isTriggeredScroll(totalToScroll, scrollState, isScrollingDown) {
    return isScrollingDown
        ? scrollState.triggered.down === totalToScroll
        : scrollState.triggered.up === totalToScroll;
}
/**
 * @param {?} scrollState
 * @param {?} scrolledUntilNow
 * @param {?} totalToScroll
 * @return {?}
 */
function updateScrollState(scrollState, scrolledUntilNow, totalToScroll) {
    updateScrollPosition(scrolledUntilNow, scrollState);
    updateTotalToScroll(totalToScroll, scrollState);
    // const isSameTotal = isSameTotalToScroll(scrollState);
    // if (!isSameTotal) {
    //   updateTriggeredFlag(scrollState, false, isScrollingDown);
    // }
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function createScroller(config) {
    var scrollContainer = config.scrollContainer, scrollWindow = config.scrollWindow, element = config.element, fromRoot = config.fromRoot;
    var /** @type {?} */ resolver = createResolver({
        axis: new AxisResolver(!config.horizontal),
        windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
    });
    var startWithTotal = calculatePoints(element, resolver).totalToScroll;
    var /** @type {?} */ scrollState = {
        lastScrollPosition: 0,
        lastTotalToScroll: 0,
        totalToScroll: startWithTotal,
        triggered: {
            down: 0,
            up: 0
        }
    };
    var /** @type {?} */ options = {
        container: resolver.container,
        throttle: config.throttle
    };
    var /** @type {?} */ distance = {
        up: config.upDistance,
        down: config.downDistance
    };
    return attachScrollEvent(options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (ev) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(calculatePoints(element, resolver)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (positionStats) { return toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_a) {
        var stats = _a.stats, scrollDown = _a.scrollDown;
        return updateScrollState(scrollState, stats.scrolled, stats.totalToScroll);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_a) {
        var fire = _a.fire, scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
        return shouldTriggerEvents(config.alwaysCallback, fire, isTriggeredScroll(totalToScroll, scrollState, scrollDown));
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_a) {
        var scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
        updateTriggeredFlag(totalToScroll, scrollState, true, scrollDown);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(toInfiniteScrollAction));
}
/**
 * @param {?} options
 * @return {?}
 */
function attachScrollEvent(options) {
    var /** @type {?} */ obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(options.container, "scroll");
    // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
    // Let's avoid calling the function unless needed.
    // See https://github.com/orizens/ngx-infinite-scroll/issues/198
    if (options.throttle) {
        obs = obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sampleTime"])(options.throttle));
    }
    return obs;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} stats
 * @param {?} distance
 * @return {?}
 */
function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
    var _a = getScrollStats(lastScrollPosition, stats, distance), scrollDown = _a.scrollDown, fire = _a.fire;
    return {
        scrollDown: scrollDown,
        fire: fire,
        stats: stats
    };
}
var InfiniteScrollActions = {
    DOWN: "[NGX_ISE] DOWN",
    UP: "[NGX_ISE] UP"
};
/**
 * @param {?} response
 * @return {?}
 */
function toInfiniteScrollAction(response) {
    var scrollDown = response.scrollDown, currentScrollPosition = response.stats.scrolled;
    return {
        type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
        payload: {
            currentScrollPosition: currentScrollPosition
        }
    };
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InfiniteScrollDirective = /** @class */ (function () {
    /**
     * @param {?} element
     * @param {?} zone
     */
    function InfiniteScrollDirective(element, zone) {
        this.element = element;
        this.zone = zone;
        this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrolledUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.infiniteScrollDistance = 2;
        this.infiniteScrollUpDistance = 1.5;
        this.infiniteScrollThrottle = 150;
        this.infiniteScrollDisabled = false;
        this.infiniteScrollContainer = null;
        this.scrollWindow = true;
        this.immediateCheck = false;
        this.horizontal = false;
        this.alwaysCallback = false;
        this.fromRoot = false;
    }
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngAfterViewInit = function () {
        if (!this.infiniteScrollDisabled) {
            this.setup();
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngOnChanges = function (_a) {
        var infiniteScrollContainer = _a.infiniteScrollContainer, infiniteScrollDisabled = _a.infiniteScrollDisabled, infiniteScrollDistance = _a.infiniteScrollDistance;
        var /** @type {?} */ containerChanged = inputPropChanged(infiniteScrollContainer);
        var /** @type {?} */ disabledChanged = inputPropChanged(infiniteScrollDisabled);
        var /** @type {?} */ distanceChanged = inputPropChanged(infiniteScrollDistance);
        var /** @type {?} */ shouldSetup = (!disabledChanged && !this.infiniteScrollDisabled) ||
            (disabledChanged && !infiniteScrollDisabled.currentValue) || distanceChanged;
        if (containerChanged || disabledChanged || distanceChanged) {
            this.destroyScroller();
            if (shouldSetup) {
                this.setup();
            }
        }
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.setup = function () {
        var _this = this;
        if (hasWindowDefined()) {
            this.zone.runOutsideAngular(function () {
                _this.disposeScroller = createScroller({
                    fromRoot: _this.fromRoot,
                    alwaysCallback: _this.alwaysCallback,
                    disable: _this.infiniteScrollDisabled,
                    downDistance: _this.infiniteScrollDistance,
                    element: _this.element,
                    horizontal: _this.horizontal,
                    scrollContainer: _this.infiniteScrollContainer,
                    scrollWindow: _this.scrollWindow,
                    throttle: _this.infiniteScrollThrottle,
                    upDistance: _this.infiniteScrollUpDistance
                }).subscribe(function (payload) { return _this.zone.run(function () { return _this.handleOnScroll(payload); }); });
            });
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    InfiniteScrollDirective.prototype.handleOnScroll = function (_a) {
        var type = _a.type, payload = _a.payload;
        switch (type) {
            case InfiniteScrollActions.DOWN:
                return this.scrolled.emit(payload);
            case InfiniteScrollActions.UP:
                return this.scrolledUp.emit(payload);
            default:
                return;
        }
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngOnDestroy = function () {
        this.destroyScroller();
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.destroyScroller = function () {
        if (this.disposeScroller) {
            this.disposeScroller.unsubscribe();
        }
    };
    return InfiniteScrollDirective;
}());
InfiniteScrollDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]'
            },] },
];
/** @nocollapse */
InfiniteScrollDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
InfiniteScrollDirective.propDecorators = {
    "scrolled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "scrolledUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "infiniteScrollDistance": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "infiniteScrollUpDistance": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "infiniteScrollThrottle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "infiniteScrollDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "infiniteScrollContainer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "scrollWindow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "immediateCheck": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "horizontal": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "alwaysCallback": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "fromRoot": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InfiniteScrollModule = /** @class */ (function () {
    function InfiniteScrollModule() {
    }
    return InfiniteScrollModule;
}());
InfiniteScrollModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [InfiniteScrollDirective],
                exports: [InfiniteScrollDirective],
                imports: [],
                providers: []
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Angular library starter.
 * Build an Angular library compatible with AoT compilation & Tree shaking.
 * Written by Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/angular-library-starter
 */
/**
 * Entry point for all public APIs of the package.
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-infinite-scroll.es5.js.map


/***/ }),

/***/ "./src/app/providers/filter.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/providers/filter.pipe.ts ***!
  \******************************************/
/*! exports provided: FilterSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterSearch", function() { return FilterSearch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterSearch = /** @class */ (function () {
    function FilterSearch() {
    }
    FilterSearch.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        if (items[0].name) {
            return items.filter(function (element) {
                return element.name.toLowerCase().includes(searchText);
            });
        }
        else {
            return items.filter(function (element) {
                return element.toLowerCase().includes(searchText);
            });
        }
    };
    FilterSearch = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterSearch'
        })
    ], FilterSearch);
    return FilterSearch;
}());



/***/ }),

/***/ "./src/app/providers/length.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/providers/length.pipe.ts ***!
  \******************************************/
/*! exports provided: FixedLengthPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedLengthPipe", function() { return FixedLengthPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FixedLengthPipe = /** @class */ (function () {
    function FixedLengthPipe() {
    }
    FixedLengthPipe.prototype.transform = function (value) {
        if (value.length > 15) {
            value = value.substring(0, 15) + "...";
        }
        return value;
    };
    FixedLengthPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'fixedLength'
        })
    ], FixedLengthPipe);
    return FixedLengthPipe;
}());



/***/ }),

/***/ "./src/app/providers/pipe.module.ts":
/*!******************************************!*\
  !*** ./src/app/providers/pipe.module.ts ***!
  \******************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _length_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./length.pipe */ "./src/app/providers/length.pipe.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/providers/filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _length_pipe__WEBPACK_IMPORTED_MODULE_2__["FixedLengthPipe"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterSearch"]
            ],
            exports: [_length_pipe__WEBPACK_IMPORTED_MODULE_2__["FixedLengthPipe"], _filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterSearch"]],
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ })

}]);
//# sourceMappingURL=Modules-incidents-incidents-module~Modules-installation-installation-module.js.map