(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-log-in-module"],{

/***/ "./node_modules/@ionic-native/in-app-browser/ngx/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic-native/in-app-browser/ngx/index.js ***!
  \****************************************************************/
/*! exports provided: InAppBrowserObject, InAppBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InAppBrowserObject", function() { return InAppBrowserObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InAppBrowser", function() { return InAppBrowser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




var InAppBrowserObject = /** @class */ (function () {
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param {string} url     The URL to load.
     * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
     *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
     *                 _blank: Opens in the InAppBrowser.
     *                 _system: Opens in the system's web browser.
     * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    function InAppBrowserObject(url, target, options) {
        try {
            if (options && typeof options !== 'string') {
                options = Object.keys(options)
                    .map(function (key) { return key + "=" + options[key]; })
                    .join(',');
            }
            this._objectInstance = cordova.InAppBrowser.open(url, target, options);
        }
        catch (e) {
            if (typeof window !== 'undefined') {
                window.open(url, target);
            }
            console.warn('Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open.');
        }
    }
    InAppBrowserObject.prototype._loadAfterBeforeload = function (strUrl) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "_loadAfterBeforeload", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.show = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "show", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.close = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "close", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.hide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "hide", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.executeScript = function (script) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "executeScript", {}, arguments); };
    InAppBrowserObject.prototype.insertCSS = function (css) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "insertCSS", {}, arguments); };
    InAppBrowserObject.prototype.on = function (event) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instanceAvailability"])(_this) === true) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                    _this._objectInstance.addEventListener(event, observer.next.bind(observer));
                    return function () {
                        return _this._objectInstance.removeEventListener(event, observer.next.bind(observer));
                    };
                });
            }
        })();
    };
    InAppBrowserObject.prototype.on = function (event) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instanceAvailability"])(_this) === true) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                    _this._objectInstance.addEventListener(event, observer.next.bind(observer));
                    return function () {
                        return _this._objectInstance.removeEventListener(event, observer.next.bind(observer));
                    };
                });
            }
        })();
    };
    return InAppBrowserObject;
}());

var InAppBrowser = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InAppBrowser, _super);
    function InAppBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url {string}     The URL to load.
     * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     * @returns {InAppBrowserObject}
     */
    InAppBrowser.prototype.create = function (url, target, options) {
        return new InAppBrowserObject(url, target, options);
    };
    InAppBrowser.pluginName = "InAppBrowser";
    InAppBrowser.plugin = "cordova-plugin-inappbrowser";
    InAppBrowser.pluginRef = "cordova.InAppBrowser";
    InAppBrowser.repo = "https://github.com/apache/cordova-plugin-inappbrowser";
    InAppBrowser.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "macOS", "Windows"];
    InAppBrowser = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], InAppBrowser);
    return InAppBrowser;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luLWFwcC1icm93c2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDREQUtOLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7SUEySTFDOzs7Ozs7Ozs7O09BVUc7SUFDSCw0QkFDRSxHQUFXLEVBQ1gsTUFBZSxFQUNmLE9BQXNDO1FBRXRDLElBQUk7WUFDRixJQUFJLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQzFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDM0IsR0FBRyxDQUNGLFVBQUMsR0FBVyxJQUFLLE9BQUcsR0FBRyxTQUFLLE9BQStCLENBQUMsR0FBRyxDQUFHLEVBQWpELENBQWlELENBQ25FO3FCQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNkO1lBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3hFO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtnQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDMUI7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUNWLHFHQUFxRyxDQUN0RyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBT0QsaURBQW9CLGFBQUMsTUFBYztJQU9uQyxpQ0FBSTtJQU1KLGtDQUFLO0lBT0wsaUNBQUk7SUFRSiwwQ0FBYSxhQUFDLE1BQXdDO0lBVXRELHNDQUFTLGFBQUMsR0FBcUM7SUFVL0MsK0JBQUUsYUFBQyxLQUE0Qjs7O3NEQUFpQztnQkFDOUQsT0FBTyxJQUFJLFVBQVUsQ0FDbkIsVUFBQyxRQUFxQztvQkFDcEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FDbkMsS0FBSyxFQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM3QixDQUFDO29CQUNGLE9BQU87d0JBQ0wsT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUN0QyxLQUFLLEVBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQzdCO29CQUhELENBR0MsQ0FBQztnQkFDTixDQUFDLENBQ0YsQ0FBQzthQUNIOzs7SUFRRCwrQkFBRSxhQUFDLEtBQWE7OztzREFBaUM7Z0JBQy9DLE9BQU8sSUFBSSxVQUFVLENBQ25CLFVBQUMsUUFBcUM7b0JBQ3BDLEtBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQ25DLEtBQUssRUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDN0IsQ0FBQztvQkFDRixPQUFPO3dCQUNMLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FDdEMsS0FBSyxFQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM3QjtvQkFIRCxDQUdDLENBQUM7Z0JBQ04sQ0FBQyxDQUNGLENBQUM7YUFDSDs7OzZCQS9RSDs7OztJQXlUa0MsZ0NBQWlCOzs7O0lBQ2pEOzs7Ozs7OztPQVFHO0lBQ0gsNkJBQU0sR0FBTixVQUNFLEdBQVcsRUFDWCxNQUFlLEVBQ2YsT0FBc0M7UUFFdEMsT0FBTyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBaEJVLFlBQVk7UUFEeEIsVUFBVSxFQUFFO09BQ0EsWUFBWTt1QkF6VHpCO0VBeVRrQyxpQkFBaUI7U0FBdEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VDaGVjayxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpblxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBjb25zdCBjb3Jkb3ZhOiBDb3Jkb3ZhICYgeyBJbkFwcEJyb3dzZXI6IGFueSB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEluQXBwQnJvd3Nlck9wdGlvbnMge1xuICAvKipcbiAgICogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIGFsbG93IGluLWxpbmUgSFRNTDUgbWVkaWEgcGxheWJhY2ssIGRpc3BsYXlpbmcgd2l0aGluIHRoZSBicm93c2VyIHdpbmRvdyByYXRoZXIgdGhhbiBhIGRldmljZS1zcGVjaWZpYyBwbGF5YmFjayBpbnRlcmZhY2UuXG4gICAqIFRoZSBIVE1MJ3MgdmlkZW8gZWxlbWVudCBtdXN0IGFsc28gaW5jbHVkZSB0aGUgd2Via2l0LXBsYXlzaW5saW5lIGF0dHJpYnV0ZSAoZGVmYXVsdHMgdG8gbm8pXG4gICAqL1xuICBhbGxvd0lubGluZU1lZGlhUGxheWJhY2s/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBzZXQgdG8gZW5hYmxlIHRoZSBiZWZvcmVsb2FkIGV2ZW50IHRvIG1vZGlmeSB3aGljaCBwYWdlcyBhcmUgYWN0dWFsbHkgbG9hZGVkIGluIHRoZSBicm93c2VyLiBBY2NlcHRlZCB2YWx1ZXMgYXJlIGdldCB0b1xuICAgKiBpbnRlcmNlcHQgb25seSBHRVQgcmVxdWVzdHMsIHBvc3QgdG8gaW50ZXJjZXB0IG9uIFBPU1QgcmVxdWVzdHMgb3IgeWVzIHRvIGludGVyY2VwdCBib3RoIEdFVCAmIFBPU1QgcmVxdWVzdHMuXG4gICAqIE5vdGUgdGhhdCBQT1NUIHJlcXVlc3RzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSBpZ25vcmVkIChpZiB5b3Ugc2V0IGJlZm9yZWxvYWQ9cG9zdCBpdCB3aWxsIHJhaXNlIGFuIGVycm9yKS5cbiAgICovXG4gIGJlZm9yZWxvYWQ/OiAneWVzJyB8ICdnZXQnIHwgJ3Bvc3QnO1xuICAvKiogU2V0IHRvIHllcyB0byBoYXZlIHRoZSBicm93c2VyJ3MgY29va2llIGNhY2hlIGNsZWFyZWQgYmVmb3JlIHRoZSBuZXcgd2luZG93IGlzIG9wZW5lZC4gKi9cbiAgY2xlYXJjYWNoZT86ICd5ZXMnIHwgJ25vJztcbiAgLyoqICBzZXQgdG8geWVzIHRvIGhhdmUgdGhlIGJyb3dzZXIncyBlbnRpcmUgbG9jYWwgc3RvcmFnZSBjbGVhcmVkIChjb29raWVzLCBIVE1MNSBsb2NhbCBzdG9yYWdlLCBJbmRleGVkREIsIGV0Yy4pIGJlZm9yZSB0aGUgbmV3IHdpbmRvdyBpcyBvcGVuZWQgKi9cbiAgY2xlYXJkYXRhPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogU2V0IHRvIHllcyB0byBoYXZlIHRoZSBzZXNzaW9uIGNvb2tpZSBjYWNoZSBjbGVhcmVkIGJlZm9yZSB0aGUgbmV3IHdpbmRvdyBpcyBvcGVuZWQuXG4gICAqIEZvciBXS1dlYlZpZXcsIHJlcXVpcmVzIGlPUyAxMSsgb24gdGFyZ2V0IGRldmljZS5cbiAgICovXG4gIGNsZWFyc2Vzc2lvbmNhY2hlPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHN0cmluZyB0byB1c2UgYXMgdGhlIGNsb3NlIGJ1dHRvbidzIGNhcHRpb24gaW5zdGVhZCBvZiBhIFguIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBsb2NhbGl6ZSB0aGlzIHZhbHVlIHlvdXJzZWxmLlxuICAgKiAoaU9TKSBTZXQgdG8gYSBzdHJpbmcgdG8gdXNlIGFzIHRoZSBEb25lIGJ1dHRvbidzIGNhcHRpb24uIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBsb2NhbGl6ZSB0aGlzIHZhbHVlIHlvdXJzZWxmLlxuICAgKi9cbiAgY2xvc2VidXR0b25jYXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNsb3NlIGJ1dHRvbiBjb2xvciBmcm9tIGRlZmF1bHQsIHJlZ2FyZGxlc3Mgb2YgYmVpbmcgYSB0ZXh0IG9yIGRlZmF1bHQgWC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuXG4gICAqIChpT1MpIFNldCBhcyBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCB0byBjaGFuZ2UgZnJvbSB0aGUgZGVmYXVsdCBEb25lIGJ1dHRvbidzIGNvbG9yLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuXG4gICAqL1xuICBjbG9zZWJ1dHRvbmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIChkZWZhdWx0IGlzIG5vKS4gVHVybnMgb24vb2ZmIHRoZSBVSVdlYlZpZXdCb3VuY2UgcHJvcGVydHkuICovXG4gIGRpc2FsbG93b3ZlcnNjcm9sbD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgIFNldCB0byB5ZXMgb3Igbm8gdG8gcHJldmVudCB2aWV3cG9ydCBzY2FsaW5nIHRocm91Z2ggYSBtZXRhIHRhZyAoZGVmYXVsdHMgdG8gbm8pLiAqL1xuICBlbmFibGVWaWV3cG9ydFNjYWxlPzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBzaG93IGEgY2xvc2UgYnV0dG9uIGluIHRoZSBmb290ZXIgc2ltaWxhciB0byB0aGUgaU9TIERvbmUgYnV0dG9uLiBUaGUgY2xvc2UgYnV0dG9uIHdpbGwgYXBwZWFyIHRoZSBzYW1lIGFzIGZvciB0aGUgaGVhZGVyIGhlbmNlIHVzZSBjbG9zZWJ1dHRvbmNhcHRpb24gYW5kIGNsb3NlYnV0dG9uY29sb3IgdG8gc2V0IGl0cyBwcm9wZXJ0aWVzICovXG4gIGZvb3Rlcj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlICMwMGZmMDAgb3IgI0NDMDBmZjAwICgjYWFycmdnYmIpLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGZvb3RlciBjb2xvciBmcm9tIGRlZmF1bHQuIE9ubHkgaGFzIGVmZmVjdCBpZiB1c2VyIGhhcyBmb290ZXIgc2V0IHRvIHllcyAqL1xuICBmb290ZXJjb2xvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIChXaW5kb3dzIG9ubHkpIFNldCB0byB5ZXMgdG8gY3JlYXRlIHRoZSBicm93c2VyIGNvbnRyb2wgd2l0aG91dCBhIGJvcmRlciBhcm91bmQgaXQuXG4gICAqIFBsZWFzZSBub3RlIHRoYXQgaWYgbG9jYXRpb249bm8gaXMgYWxzbyBzcGVjaWZpZWQsIHRoZXJlIHdpbGwgYmUgbm8gY29udHJvbCBwcmVzZW50ZWQgdG8gdXNlciB0byBjbG9zZSBJQUIgd2luZG93LlxuICAgKi9cbiAgZnVsbHNjcmVlbj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkICYgV2luZG93cyBPbmx5KSBTZXQgdG8geWVzIHRvIHVzZSB0aGUgaGFyZHdhcmUgYmFjayBidXR0b24gdG8gbmF2aWdhdGUgYmFja3dhcmRzIHRocm91Z2ggdGhlIEluQXBwQnJvd3NlcidzIGhpc3RvcnkuXG4gICAqIElmIHRoZXJlIGlzIG5vIHByZXZpb3VzIHBhZ2UsIHRoZSBJbkFwcEJyb3dzZXIgd2lsbCBjbG9zZS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgeWVzLCBzbyB5b3UgbXVzdCBzZXQgaXQgdG8gbm8gaWYgeW91IHdhbnQgdGhlIGJhY2sgYnV0dG9uIHRvIHNpbXBseSBjbG9zZSB0aGUgSW5BcHBCcm93c2VyLlxuICAgKi9cbiAgaGFyZHdhcmViYWNrPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogU2V0IHRvIHllcyB0byBjcmVhdGUgdGhlIGJyb3dzZXIgYW5kIGxvYWQgdGhlIHBhZ2UsIGJ1dCBub3Qgc2hvdyBpdC4gVGhlIGxvYWRzdG9wIGV2ZW50IGZpcmVzIHdoZW4gbG9hZGluZyBpcyBjb21wbGV0ZS5cbiAgICogT21pdCBvciBzZXQgdG8gbm8gKGRlZmF1bHQpIHRvIGhhdmUgdGhlIGJyb3dzZXIgb3BlbiBhbmQgbG9hZCBub3JtYWxseS5cbiAgICovXG4gIGhpZGRlbj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkKSBTZXQgdG8geWVzIHRvIGhpZGUgdGhlIG5hdmlnYXRpb24gYnV0dG9ucyBvbiB0aGUgbG9jYXRpb24gdG9vbGJhciwgb25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIG5vLlxuICAgKiAoaU9TKSBTZXQgdG8geWVzIG9yIG5vIHRvIHR1cm4gdGhlIHRvb2xiYXIgbmF2aWdhdGlvbiBidXR0b25zIG9uIG9yIG9mZiAoZGVmYXVsdHMgdG8gbm8pLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuXG4gICAqL1xuICBoaWRlbmF2aWdhdGlvbmJ1dHRvbnM/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAgKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIGNoYW5nZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgbG9hZGluZyBpbmRpY2F0b3IgKGRlZmF1bHRzIHRvIG5vKS5cbiAgICovXG4gIGhpZGVzcGlubmVyPzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQpIFNldCB0byB5ZXMgdG8gaGlkZSB0aGUgdXJsIGJhciBvbiB0aGUgbG9jYXRpb24gdG9vbGJhciwgb25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIG5vLiAqL1xuICBoaWRldXJsYmFyPzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIG9wZW4gdGhlIGtleWJvYXJkIHdoZW4gZm9ybSBlbGVtZW50cyByZWNlaXZlIGZvY3VzIHZpYSBKYXZhU2NyaXB0J3MgZm9jdXMoKSBjYWxsIChkZWZhdWx0cyB0byB5ZXMpLiAqL1xuICBrZXlib2FyZERpc3BsYXlSZXF1aXJlc1VzZXJBY3Rpb24/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAoQW5kcm9pZCkgU2V0IHRvIHllcyB0byBzd2FwIHBvc2l0aW9ucyBvZiB0aGUgbmF2aWdhdGlvbiBidXR0b25zIGFuZCB0aGUgY2xvc2UgYnV0dG9uLiBTcGVjaWZpY2FsbHksIG5hdmlnYXRpb24gYnV0dG9ucyBnbyB0byB0aGUgbGVmdCBhbmQgY2xvc2UgYnV0dG9uIHRvIHRoZSByaWdodC5cbiAgICogKGlPUykgU2V0IHRvIHllcyB0byBzd2FwIHBvc2l0aW9ucyBvZiB0aGUgbmF2aWdhdGlvbiBidXR0b25zIGFuZCB0aGUgY2xvc2UgYnV0dG9uLiBTcGVjaWZpY2FsbHksIGNsb3NlIGJ1dHRvbiBnb2VzIHRvIHRoZSByaWdodCBhbmQgbmF2aWdhdGlvbiBidXR0b25zIHRvIHRoZSBsZWZ0LlxuICAgKi9cbiAgbGVmdHRvcmlnaHQ/OiAneWVzJyB8ICdubyc7XG4gIC8qKiBTZXQgdG8geWVzIG9yIG5vIHRvIHR1cm4gdGhlIEluQXBwQnJvd3NlcidzIGxvY2F0aW9uIGJhciBvbiBvciBvZmYuICovXG4gIGxvY2F0aW9uPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogIFNldCB0byB5ZXMgdG8gcHJldmVudCBIVE1MNSBhdWRpbyBvciB2aWRlbyBmcm9tIGF1dG9wbGF5aW5nIChkZWZhdWx0cyB0byBubykuXG4gICAqL1xuICBtZWRpYVBsYXliYWNrUmVxdWlyZXNVc2VyQWN0aW9uPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNvbG9yIG9mIGJvdGggbmF2aWdhdGlvbiBidXR0b25zIGZyb20gZGVmYXVsdC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMgYW5kIG5vdCBoaWRlbmF2aWdhdGlvbmJ1dHRvbnMgc2V0IHRvIHllcy5cbiAgICogKGlPUykgU2V0IGFzIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGU6ICMwMGZmMDAsIHRvIGNoYW5nZSBmcm9tIHRoZSBkZWZhdWx0IGNvbG9yLiBPbmx5IGFwcGxpY2FibGUgaWYgbmF2aWdhdGlvbiBidXR0b25zIGFyZSB2aXNpYmxlLlxuICAgKi9cbiAgbmF2aWdhdGlvbmJ1dHRvbmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8gcGFnZXNoZWV0LCBmb3Jtc2hlZXQgb3IgZnVsbHNjcmVlbiB0byBzZXQgdGhlIHByZXNlbnRhdGlvbiBzdHlsZSAoZGVmYXVsdHMgdG8gZnVsbHNjcmVlbikuICovXG4gIHByZXNlbnRhdGlvbnN0eWxlPzogJ3BhZ2VzaGVldCcgfCAnZm9ybXNoZWV0JyB8ICdmdWxsc2NyZWVuJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldCB0byB5ZXMgdG8gbWFrZSBJbkFwcEJyb3dzZXIgV2ViVmlldyB0byBwYXVzZS9yZXN1bWUgd2l0aCB0aGUgYXBwIHRvIHN0b3AgYmFja2dyb3VuZCBhdWRpbyAodGhpcyBtYXkgYmUgcmVxdWlyZWQgdG8gYXZvaWQgR29vZ2xlIFBsYXkgaXNzdWVzKSAqL1xuICBzaG91bGRQYXVzZU9uU3VzcGVuZD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byB3YWl0IHVudGlsIGFsbCBuZXcgdmlldyBjb250ZW50IGlzIHJlY2VpdmVkIGJlZm9yZSBiZWluZyByZW5kZXJlZCAoZGVmYXVsdHMgdG8gbm8pLiAqL1xuICBzdXBwcmVzc2VzSW5jcmVtZW50YWxSZW5kZXJpbmc/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gdHVybiB0aGUgdG9vbGJhciBvbiBvciBvZmYgZm9yIHRoZSBJbkFwcEJyb3dzZXIgKGRlZmF1bHRzIHRvIHllcykgKi9cbiAgdG9vbGJhcj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkKSBTZXQgdG8gYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgYW5kIGl0IHdpbGwgY2hhbmdlIHRoZSBjb2xvciB0aGUgdG9vbGJhciBmcm9tIGRlZmF1bHQuIE9ubHkgaGFzIGVmZmVjdCBpZiB1c2VyIGhhcyBsb2NhdGlvbiBzZXQgdG8geWVzLlxuICAgKiAoaU9TKSBTZXQgYXMgYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgdG8gY2hhbmdlIGZyb20gdGhlIGRlZmF1bHQgY29sb3Igb2YgdGhlIHRvb2xiYXIuIE9ubHkgYXBwbGljYWJsZSBpZiB0b29sYmFyIGlzIG5vdCBkaXNhYmxlZC5cbiAgICovXG4gIHRvb2xiYXJjb2xvcj86IHN0cmluZztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHRvcCBvciBib3R0b20gKGRlZmF1bHQgaXMgYm90dG9tKS4gQ2F1c2VzIHRoZSB0b29sYmFyIHRvIGJlIGF0IHRoZSB0b3Agb3IgYm90dG9tIG9mIHRoZSB3aW5kb3cuICovXG4gIHRvb2xiYXJwb3NpdGlvbj86ICd0b3AnIHwgJ2JvdHRvbSc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gbWFrZSB0aGUgdG9vbGJhciB0cmFuc2x1Y2VudChzZW1pLXRyYW5zcGFyZW50KSAoZGVmYXVsdHMgdG8geWVzKS4gT25seSBhcHBsaWNhYmxlIGlmIHRvb2xiYXIgaXMgbm90IGRpc2FibGVkLiAqL1xuICB0b29sYmFydHJhbnNsdWNlbnQ/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byBmbGlwaG9yaXpvbnRhbCwgY3Jvc3NkaXNzb2x2ZSBvciBjb3ZlcnZlcnRpY2FsIHRvIHNldCB0aGUgdHJhbnNpdGlvbiBzdHlsZSAoZGVmYXVsdHMgdG8gY292ZXJ2ZXJ0aWNhbCkuICovXG4gIHRyYW5zaXRpb25zdHlsZT86ICdmbGlwaG9yaXpvbnRhbCcgfCAnY3Jvc3NkaXNzb2x2ZScgfCAnY292ZXJ2ZXJ0aWNhbCc7XG4gIC8qKiAoQW5kcm9pZCBPbmx5KSBTZXRzIHdoZXRoZXIgdGhlIFdlYlZpZXcgc2hvdWxkIGVuYWJsZSBzdXBwb3J0IGZvciB0aGUgXCJ2aWV3cG9ydFwiIEhUTUwgbWV0YSB0YWcgb3Igc2hvdWxkIHVzZSBhIHdpZGUgdmlld3BvcnQuIFdoZW4gdGhlIHZhbHVlIG9mIHRoZSBzZXR0aW5nIGlzIG5vLCB0aGUgbGF5b3V0IHdpZHRoIGlzIGFsd2F5cyBzZXQgdG8gdGhlIHdpZHRoIG9mIHRoZSBXZWJWaWV3IGNvbnRyb2wgaW4gZGV2aWNlLWluZGVwZW5kZW50IChDU1MpIHBpeGVscy4gV2hlbiB0aGUgdmFsdWUgaXMgeWVzIGFuZCB0aGUgcGFnZSBjb250YWlucyB0aGUgdmlld3BvcnQgbWV0YSB0YWcsIHRoZSB2YWx1ZSBvZiB0aGUgd2lkdGggc3BlY2lmaWVkIGluIHRoZSB0YWcgaXMgdXNlZC4gSWYgdGhlIHBhZ2UgZG9lcyBub3QgY29udGFpbiB0aGUgdGFnIG9yIGRvZXMgbm90IHByb3ZpZGUgYSB3aWR0aCwgdGhlbiBhIHdpZGUgdmlld3BvcnQgd2lsbCBiZSB1c2VkLiAoZGVmYXVsdHMgdG8geWVzKS4gKi9cbiAgdXNlV2lkZVZpZXdQb3J0PzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIHRvIHVzZSBXS1dlYlZpZXcgZW5naW5lIGZvciB0aGUgSW5hcHBCcm93c2VyLiBPbWl0IG9yIHNldCB0byBubyAoZGVmYXVsdCkgdG8gdXNlIFVJV2ViVmlldy4gKi9cbiAgdXNld2t3ZWJ2aWV3PzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBzaG93IEFuZHJvaWQgYnJvd3NlcidzIHpvb20gY29udHJvbHMsIHNldCB0byBubyB0byBoaWRlIHRoZW0uIERlZmF1bHQgdmFsdWUgaXMgeWVzLiAqL1xuICB6b29tPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBJbkFwcEJyb3dzZXJFdmVudFR5cGUgPSAnbG9hZHN0YXJ0JyB8ICdsb2Fkc3RvcCcgfCAnbG9hZGVycm9yJyB8ICdleGl0JyB8ICdiZWZvcmVsb2FkJyB8ICdtZXNzYWdlJyB8ICdjdXN0b21zY2hlbWUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluQXBwQnJvd3NlckV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICAvKiogdGhlIGV2ZW50IG5hbWUgKi9cbiAgdHlwZTogc3RyaW5nO1xuICAvKiogdGhlIFVSTCB0aGF0IHdhcyBsb2FkZWQuICovXG4gIHVybDogc3RyaW5nO1xuICAvKiogdGhlIGVycm9yIGNvZGUsIG9ubHkgaW4gdGhlIGNhc2Ugb2YgbG9hZGVycm9yLiAqL1xuICBjb2RlOiBudW1iZXI7XG4gIC8qKiB0aGUgZXJyb3IgbWVzc2FnZSwgb25seSBpbiB0aGUgY2FzZSBvZiBsb2FkZXJyb3IuICovXG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgLyoqIHRoZSBwb3N0TWVzc2FnZSBkYXRhLCBvbmx5IGluIHRoZSBjYXNlIG9mIG1lc3NhZ2UuICovXG4gIGRhdGE6IGFueTtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbkFwcEJyb3dzZXJPYmplY3Qge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIC8qKlxuICAgKiBPcGVucyBhIFVSTCBpbiBhIG5ldyBJbkFwcEJyb3dzZXIgaW5zdGFuY2UsIHRoZSBjdXJyZW50IGJyb3dzZXIgaW5zdGFuY2UsIG9yIHRoZSBzeXN0ZW0gYnJvd3Nlci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICAgVGhlIFVSTCB0byBsb2FkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RhcmdldD1cInNlbGZcIl0gIFRoZSB0YXJnZXQgaW4gd2hpY2ggdG8gbG9hZCB0aGUgVVJMLCBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBkZWZhdWx0cyB0byBfc2VsZi5cbiAgICogICAgICAgICAgICAgICAgIF9zZWxmOiBPcGVucyBpbiB0aGUgV2ViVmlldyBpZiB0aGUgVVJMIGlzIGluIHRoZSB3aGl0ZSBsaXN0LCBvdGhlcndpc2UgaXQgb3BlbnMgaW4gdGhlIEluQXBwQnJvd3Nlci5cbiAgICogICAgICAgICAgICAgICAgIF9ibGFuazogT3BlbnMgaW4gdGhlIEluQXBwQnJvd3Nlci5cbiAgICogICAgICAgICAgICAgICAgIF9zeXN0ZW06IE9wZW5zIGluIHRoZSBzeXN0ZW0ncyB3ZWIgYnJvd3Nlci5cbiAgICogQHBhcmFtIHtzdHJpbmcgfCBJbkFwcEJyb3dzZXJPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyBmb3IgdGhlIEluQXBwQnJvd3Nlci4gT3B0aW9uYWwsIGRlZmF1bHRpbmcgdG86IGxvY2F0aW9uPXllcy5cbiAgICogICAgICAgICAgICAgICAgIFRoZSBvcHRpb25zIHN0cmluZyBtdXN0IG5vdCBjb250YWluIGFueSBibGFuayBzcGFjZSwgYW5kIGVhY2ggZmVhdHVyZSdzXG4gICAqICAgICAgICAgICAgICAgICBuYW1lL3ZhbHVlIHBhaXJzIG11c3QgYmUgc2VwYXJhdGVkIGJ5IGEgY29tbWEuIEZlYXR1cmUgbmFtZXMgYXJlIGNhc2UgaW5zZW5zaXRpdmUuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICB1cmw6IHN0cmluZyxcbiAgICB0YXJnZXQ/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHN0cmluZyB8IEluQXBwQnJvd3Nlck9wdGlvbnNcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucylcbiAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgKGtleTogc3RyaW5nKSA9PiBgJHtrZXl9PSR7KG9wdGlvbnMgYXMgSW5BcHBCcm93c2VyT3B0aW9ucylba2V5XX1gXG4gICAgICAgICAgKVxuICAgICAgICAgIC5qb2luKCcsJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gY29yZG92YS5JbkFwcEJyb3dzZXIub3Blbih1cmwsIHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCwgdGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05hdGl2ZTogSW5BcHBCcm93c2VyIGlzIG5vdCBpbnN0YWxsZWQgb3IgeW91IGFyZSBydW5uaW5nIG9uIGEgYnJvd3Nlci4gRmFsbGluZyBiYWNrIHRvIHdpbmRvdy5vcGVuLidcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIFwiYmVmb3JlbG9hZFwiIGV2ZW50IHRvIGNvbnRpbnVlIHRoZSBzY3JpcHRcbiAgICogQHBhcmFtIHN0clVybCB7U3RyaW5nfSBUaGUgVVJMIHRoZSBJbkFwcEJyb3dzZXIgc2hvdWxkIG5hdmlnYXRlIHRvLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgX2xvYWRBZnRlckJlZm9yZWxvYWQoc3RyVXJsOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGFuIEluQXBwQnJvd3NlciB3aW5kb3cgdGhhdCB3YXMgb3BlbmVkIGhpZGRlbi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSB2aXNpYmxlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvdygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNsb3NlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSGlkZXMgYW4gSW5BcHBCcm93c2VyIHdpbmRvdyB0aGF0IGlzIGN1cnJlbnRseSBzaG93bi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSBoaWRkZW4uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBoaWRlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSW5qZWN0cyBKYXZhU2NyaXB0IGNvZGUgaW50byB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICogQHBhcmFtIHNjcmlwdCB7T2JqZWN0fSBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZXhlY3V0ZVNjcmlwdChzY3JpcHQ6IHsgZmlsZT86IHN0cmluZzsgY29kZT86IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5qZWN0cyBDU1MgaW50byB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICogQHBhcmFtIGNzcyB7T2JqZWN0fSBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgaW5zZXJ0Q1NTKGNzczogeyBmaWxlPzogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1ldGhvZCB0aGF0IGFsbG93cyB5b3UgdG8gbGlzdGVuIHRvIGV2ZW50cyBoYXBwZW5pbmcgaW4gdGhlIGJyb3dzZXIuXG4gICAqIEBwYXJhbSBldmVudCB7SW5BcHBCcm93c2VyRXZlbnRUeXBlfSBOYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD59IFJldHVybnMgYmFjayBhbiBvYnNlcnZhYmxlIHRoYXQgd2lsbCBsaXN0ZW4gdG8gdGhlIGV2ZW50IG9uIHN1YnNjcmliZSwgYW5kIHdpbGwgc3RvcCBsaXN0ZW5pbmcgdG8gdGhlIGV2ZW50IG9uIHVuc3Vic2NyaWJlLlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBvbihldmVudDogSW5BcHBCcm93c2VyRXZlbnRUeXBlKTogT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4oXG4gICAgICAob2JzZXJ2ZXI6IE9ic2VydmVyPEluQXBwQnJvd3NlckV2ZW50PikgPT4ge1xuICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcilcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuICgpID0+XG4gICAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKVxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1ldGhvZCB0aGF0IGFsbG93cyB5b3UgdG8gbGlzdGVuIHRvIGV2ZW50cyBoYXBwZW5pbmcgaW4gdGhlIGJyb3dzZXIuXG4gICAqIEBwYXJhbSBldmVudCB7c3RyaW5nfSBOYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD59IFJldHVybnMgYmFjayBhbiBvYnNlcnZhYmxlIHRoYXQgd2lsbCBsaXN0ZW4gdG8gdGhlIGV2ZW50IG9uIHN1YnNjcmliZSwgYW5kIHdpbGwgc3RvcCBsaXN0ZW5pbmcgdG8gdGhlIGV2ZW50IG9uIHVuc3Vic2NyaWJlLlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBvbihldmVudDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4oXG4gICAgICAob2JzZXJ2ZXI6IE9ic2VydmVyPEluQXBwQnJvd3NlckV2ZW50PikgPT4ge1xuICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcilcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuICgpID0+XG4gICAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKVxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIEluIEFwcCBCcm93c2VyXG4gKiBAZGVzY3JpcHRpb24gTGF1bmNoZXMgaW4gYXBwIEJyb3dzZXJcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW5BcHBCcm93c2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbi1hcHAtYnJvd3Nlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaWFiOiBJbkFwcEJyb3dzZXIpIHsgfVxuICpcbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogY29uc3QgYnJvd3NlciA9IHRoaXMuaWFiLmNyZWF0ZSgnaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vJyk7XG4gKlxuICogYnJvd3Nlci5leGVjdXRlU2NyaXB0KC4uLik7XG4gKlxuICogYnJvd3Nlci5pbnNlcnRDU1MoLi4uKTtcbiAqIGJyb3dzZXIub24oJ2xvYWRzdG9wJykuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAqICAgIGJyb3dzZXIuaW5zZXJ0Q1NTKHsgY29kZTogXCJib2R5e2NvbG9yOiByZWQ7XCIgfSk7XG4gKiB9KTtcbiAqXG4gKiBicm93c2VyLmNsb3NlKCk7XG4gKlxuICogYGBgXG4gKiBAY2xhc3Nlc1xuICogSW5BcHBCcm93c2VyT2JqZWN0XG4gKiBAaW50ZXJmYWNlc1xuICogSW5BcHBCcm93c2VyRXZlbnRcbiAqIEluQXBwQnJvd3Nlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbkFwcEJyb3dzZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLkluQXBwQnJvd3NlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWluYXBwYnJvd3NlcicsXG4gIHBsYXRmb3JtczogWydBbWF6b25GaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluQXBwQnJvd3NlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW5zIGEgVVJMIGluIGEgbmV3IEluQXBwQnJvd3NlciBpbnN0YW5jZSwgdGhlIGN1cnJlbnQgYnJvd3NlciBpbnN0YW5jZSwgb3IgdGhlIHN5c3RlbSBicm93c2VyLlxuICAgKiBAcGFyYW0gIHVybCB7c3RyaW5nfSAgICAgVGhlIFVSTCB0byBsb2FkLlxuICAgKiBAcGFyYW0gIHRhcmdldCB7c3RyaW5nfSAgVGhlIHRhcmdldCBpbiB3aGljaCB0byBsb2FkIHRoZSBVUkwsIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IGRlZmF1bHRzIHRvIF9zZWxmLlxuICAgKiBAcGFyYW0gIG9wdGlvbnMge3N0cmluZ30gT3B0aW9ucyBmb3IgdGhlIEluQXBwQnJvd3Nlci4gT3B0aW9uYWwsIGRlZmF1bHRpbmcgdG86IGxvY2F0aW9uPXllcy5cbiAgICogICAgICAgICAgICAgICAgIFRoZSBvcHRpb25zIHN0cmluZyBtdXN0IG5vdCBjb250YWluIGFueSBibGFuayBzcGFjZSwgYW5kIGVhY2ggZmVhdHVyZSdzXG4gICAqICAgICAgICAgICAgICAgICBuYW1lL3ZhbHVlIHBhaXJzIG11c3QgYmUgc2VwYXJhdGVkIGJ5IGEgY29tbWEuIEZlYXR1cmUgbmFtZXMgYXJlIGNhc2UgaW5zZW5zaXRpdmUuXG4gICAqIEByZXR1cm5zIHtJbkFwcEJyb3dzZXJPYmplY3R9XG4gICAqL1xuICBjcmVhdGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgdGFyZ2V0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBzdHJpbmcgfCBJbkFwcEJyb3dzZXJPcHRpb25zXG4gICk6IEluQXBwQnJvd3Nlck9iamVjdCB7XG4gICAgcmV0dXJuIG5ldyBJbkFwcEJyb3dzZXJPYmplY3QodXJsLCB0YXJnZXQsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/log-in.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/log-in.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<body>\n  <div>\n    <img src=\"assets/icon/fog.png\">\n    <h1> FogTube get subscribers, views and likes</h1>\n\n    <!-- <div padding>\n      <ion-item>\n        <ion-input name=\"email\" type=\"email\" placeholder=\"your@email.com\" #email required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input name=\"password\" type=\"password\" placeholder=\"Password\" #password required></ion-input>\n      </ion-item>\n    </div> -->\n  </div>\n    <button\n   \n    (click)=\"googleSignin()\"\n    *ngIf=\"!userProfile\"\n  >\n  <!-- {{userProfile | json}} -->\n    <ion-icon name=\"logo-google\" style=\"margin-right:5px;\"></ion-icon>\n    Login\n  </button>\n</body>\n");

/***/ }),

/***/ "./src/app/log-in/log-in-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/log-in/log-in-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LogInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInPageRoutingModule", function() { return LogInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _log_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-in.page */ "./src/app/log-in/log-in.page.ts");




const routes = [
    {
        path: '',
        component: _log_in_page__WEBPACK_IMPORTED_MODULE_3__["LogInPage"]
    }
];
let LogInPageRoutingModule = class LogInPageRoutingModule {
};
LogInPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogInPageRoutingModule);



/***/ }),

/***/ "./src/app/log-in/log-in.module.ts":
/*!*****************************************!*\
  !*** ./src/app/log-in/log-in.module.ts ***!
  \*****************************************/
/*! exports provided: LogInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInPageModule", function() { return LogInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _log_in_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-in-routing.module */ "./src/app/log-in/log-in-routing.module.ts");
/* harmony import */ var _log_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log-in.page */ "./src/app/log-in/log-in.page.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/fesm2015/angular-fire.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");










let LogInPageModule = class LogInPageModule {
};
LogInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["config"]),
            _log_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogInPageRoutingModule"],
        ],
        declarations: [_log_in_page__WEBPACK_IMPORTED_MODULE_6__["LogInPage"]],
        providers: [
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"],
        ]
    })
], LogInPageModule);



/***/ }),

/***/ "./src/app/log-in/log-in.page.scss":
/*!*****************************************!*\
  !*** ./src/app/log-in/log-in.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin-top: 20%;\n  width: 28%;\n  margin-right: 39%;\n  margin-left: 39%;\n  background: #D0D0D0;\n  color: black;\n  padding: 10px;\n}\n\nh1 {\n  text-align: center;\n}\n\nimg {\n  width: 20%;\n  height: 20%;\n  margin-top: 20%;\n  margin-left: 40%;\n  margin-right: 40%;\n}\n\n.icon {\n  width: 35%;\n  height: 40%;\n  margin-top: 0%;\n  margin-left: 0%;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZGVyL0RvY3VtZW50cy90dWJlLWFwcC90dXBlL3NyYy9hcHAvbG9nLWluL2xvZy1pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZy1pbi9sb2ctaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZUFBQTtFQUNKLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0FBOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0osY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0dBIiwiZmlsZSI6InNyYy9hcHAvbG9nLWluL2xvZy1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XG4gICAvLyBtYXJnaW46IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG53aWR0aDogMjglO1xubWFyZ2luLXJpZ2h0OiAzOSU7XG5tYXJnaW4tbGVmdDogMzklO1xuYmFja2dyb3VuZDogI0QwRDBEMDtcbmNvbG9yOiBibGFjaztcbnBhZGRpbmc6IDEwcHg7XG59XG5oMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pbWd7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwJTtcbn1cbi5pY29ue1xuICAgIHdpZHRoOiAzNSU7IFxuICAgIGhlaWdodDogNDAlOyAgIFxubWFyZ2luLXRvcDogMCU7XG5tYXJnaW4tbGVmdDogMCU7XG5tYXJnaW4tcmlnaHQ6IDVweDtcbn0iLCJidXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIHdpZHRoOiAyOCU7XG4gIG1hcmdpbi1yaWdodDogMzklO1xuICBtYXJnaW4tbGVmdDogMzklO1xuICBiYWNrZ3JvdW5kOiAjRDBEMEQwO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbWcge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDIwJTtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBtYXJnaW4tbGVmdDogNDAlO1xuICBtYXJnaW4tcmlnaHQ6IDQwJTtcbn1cblxuLmljb24ge1xuICB3aWR0aDogMzUlO1xuICBoZWlnaHQ6IDQwJTtcbiAgbWFyZ2luLXRvcDogMCU7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/log-in/log-in.page.ts":
/*!***************************************!*\
  !*** ./src/app/log-in/log-in.page.ts ***!
  \***************************************/
/*! exports provided: LogInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInPage", function() { return LogInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/firebase/firebase.service */ "./src/app/firebase/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");








let LogInPage = class LogInPage {
    constructor(firebase, router, platform, google, fireAuth, iab) {
        this.firebase = firebase;
        this.router = router;
        this.platform = platform;
        this.google = google;
        this.fireAuth = fireAuth;
        this.iab = iab;
    }
    ngOnInit() {
    }
    googleSignin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            window['plugins'].googleplus.login({}, (obj) => {
                this.firebase.updateUserData(obj);
            }, function (msg) {
            });
            window.location.reload();
        });
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.firebase.googleSignin();
        });
    }
};
LogInPage.ctorParameters = () => [
    { type: src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__["GooglePlus"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] }
];
LogInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./log-in.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/log-in.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./log-in.page.scss */ "./src/app/log-in/log-in.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__["GooglePlus"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]])
], LogInPage);



/***/ })

}]);
//# sourceMappingURL=log-in-log-in-module-es2015.js.map