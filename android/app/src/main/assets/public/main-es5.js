function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", "stencil-ion-action-sheet-ios-entry-js"],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", "stencil-ion-action-sheet-md-entry-js"],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", "stencil-ion-alert-ios-entry-js"],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", "stencil-ion-alert-md-entry-js"],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", "stencil-ion-app_8-ios-entry-js"],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", "stencil-ion-app_8-md-entry-js"],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", "stencil-ion-avatar_3-ios-entry-js"],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", "stencil-ion-avatar_3-md-entry-js"],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", "stencil-ion-back-button-ios-entry-js"],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", "stencil-ion-back-button-md-entry-js"],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", "stencil-ion-backdrop-ios-entry-js"],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", "stencil-ion-backdrop-md-entry-js"],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", "stencil-ion-button_2-ios-entry-js"],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", "stencil-ion-button_2-md-entry-js"],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", "stencil-ion-card_5-ios-entry-js"],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", "stencil-ion-card_5-md-entry-js"],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", "stencil-ion-checkbox-ios-entry-js"],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", "stencil-ion-checkbox-md-entry-js"],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", "stencil-ion-chip-ios-entry-js"],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", "stencil-ion-chip-md-entry-js"],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", "stencil-ion-col_3-entry-js"],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", "stencil-ion-datetime_3-ios-entry-js"],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", "stencil-ion-datetime_3-md-entry-js"],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", "stencil-ion-fab_3-ios-entry-js"],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", "stencil-ion-fab_3-md-entry-js"],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", "stencil-ion-img-entry-js"],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", "stencil-ion-infinite-scroll_2-ios-entry-js"],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", "stencil-ion-infinite-scroll_2-md-entry-js"],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", "stencil-ion-input-ios-entry-js"],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", "stencil-ion-input-md-entry-js"],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", "stencil-ion-item-option_3-ios-entry-js"],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", "stencil-ion-item-option_3-md-entry-js"],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", "stencil-ion-item_8-ios-entry-js"],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", "stencil-ion-item_8-md-entry-js"],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", "stencil-ion-loading-ios-entry-js"],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", "stencil-ion-loading-md-entry-js"],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", "stencil-ion-menu_3-ios-entry-js"],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", "stencil-ion-menu_3-md-entry-js"],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", "stencil-ion-modal-ios-entry-js"],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", "stencil-ion-modal-md-entry-js"],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", "stencil-ion-nav_2-entry-js"],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", "stencil-ion-popover-ios-entry-js"],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", "stencil-ion-popover-md-entry-js"],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", "stencil-ion-progress-bar-ios-entry-js"],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", "stencil-ion-progress-bar-md-entry-js"],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", "stencil-ion-radio_2-ios-entry-js"],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", "stencil-ion-radio_2-md-entry-js"],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", "stencil-ion-range-ios-entry-js"],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", "stencil-ion-range-md-entry-js"],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", "stencil-ion-refresher_2-ios-entry-js"],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", "stencil-ion-refresher_2-md-entry-js"],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", "stencil-ion-reorder_2-ios-entry-js"],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", "stencil-ion-reorder_2-md-entry-js"],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", "stencil-ion-ripple-effect-entry-js"],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", "stencil-ion-route_4-entry-js"],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", "stencil-ion-searchbar-ios-entry-js"],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", "stencil-ion-searchbar-md-entry-js"],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", "stencil-ion-segment_2-ios-entry-js"],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", "stencil-ion-segment_2-md-entry-js"],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", "stencil-ion-select_3-ios-entry-js"],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", "stencil-ion-select_3-md-entry-js"],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", "stencil-ion-slide_2-ios-entry-js"],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", "stencil-ion-slide_2-md-entry-js"],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", "stencil-ion-spinner-entry-js"],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", "stencil-ion-split-pane-ios-entry-js"],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", "stencil-ion-split-pane-md-entry-js"],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", "stencil-ion-tab-bar_2-ios-entry-js"],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", "stencil-ion-tab-bar_2-md-entry-js"],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", "stencil-ion-tab_2-entry-js"],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", "stencil-ion-text-entry-js"],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", "stencil-ion-textarea-ios-entry-js"],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", "stencil-ion-textarea-md-entry-js"],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", "stencil-ion-toast-ios-entry-js"],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", "stencil-ion-toast-md-entry-js"],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", "stencil-ion-toggle-ios-entry-js"],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", "stencil-ion-toggle-md-entry-js"],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", "stencil-ion-virtual-scroll-entry-js"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app  >\n\n    <ion-menu  *ngIf=\"user\" side=\"end\" menuId=\"End\" contentId=\"menuContent\">\n        <ion-header>\n            <!-- <ion-toolbar color=\"tertiary\">\n                <ion-title>{{ 'Menu' | translate}}</ion-title>\n            </ion-toolbar>\n         dir=\"{{textDir}}\"\n        -->\n\n        </ion-header>\n        <ion-content>\n\n            <ion-card>\n                <img src={{profilePhoto}} class=\"profilePhoto\">\n                <br>\n                <ion-card-title >\n                    {{displayName}}\n                   \n                </ion-card-title >\n                <ion-card-title class=\"email\">\n                     \n                        {{email}}\n                    </ion-card-title>\n            </ion-card>\n            <ion-list>\n\n\n                <ion-item (click)=\"goTomessage()\" lines=\"none\">\n                    <ion-icon name=\"chatbubbles\"></ion-icon>\n                    {{ 'Message' | translate}}\n                </ion-item>\n                <ion-item (click)=\"goToVip()\">\n                    <img src=\"assets\\icon\\vip.png\"> {{ 'Vip Account' | translate}}\n                </ion-item>\n\n               <ion-label> {{ 'Communicate' | translate}}</ion-label>\n                <ion-item (click)=\"goTofaq()\" lines=\"none\">\n                    <ion-icon name=\"logo-buffer\"></ion-icon>\n\n                    {{ 'FAQ' | translate}}\n                </ion-item>\n\n                <ion-item (click)=\"goToinviteFreind()\" lines=\"none\">\n                    <ion-icon name=\"link\"></ion-icon>\n\n                    {{ 'invite friend' | translate}}\n                </ion-item>\n                <ion-item lines=\"none\">\n                    <ion-icon name=\"star-outline\"></ion-icon>\n                    {{ 'Rate' | translate}}\n                </ion-item>\n                <ion-item>\n                        <ion-icon name=\"paper-plane\"></ion-icon>\n                        {{ 'feedback' | translate}}\n                    </ion-item>\n                    <ion-label> {{ 'Account' | translate}}</ion-label>\n                <ion-item lines=\"none\" (click)=\"logout()\">\n                    <ion-icon name=\"log-out\"></ion-icon>\n\n                    {{ 'log out' | translate}}\n                </ion-item>\n                <ion-item lines=\"none\" *ngIf=\"currentLanguage == 'ar'\" (click)=\"changeLng('en')\" class=\"language\">\n\n                    {{ 'lng' | translate}}\n                </ion-item>\n                <ion-item lines=\"none\" *ngIf=\"currentLanguage == 'en'\" (click)=\"changeLng('ar')\" class=\"language\">\n\n                    {{ 'lng' | translate}}\n                </ion-item>\n\n            </ion-list>\n        </ion-content>\n    </ion-menu>\n\n    <ion-router-outlet id=\"menuContent\"></ion-router-outlet>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      },
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'tabs/currency',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | currency-currency-module */
        "currency-currency-module").then(__webpack_require__.bind(null,
        /*! ./currency/currency.module */
        "./src/app/currency/currency.module.ts")).then(function (m) {
          return m.CurrencyPageModule;
        });
      },
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'invite-friends',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | invite-friends-invite-friends-module */
        "invite-friends-invite-friends-module").then(__webpack_require__.bind(null,
        /*! ./invite-friends/invite-friends.module */
        "./src/app/invite-friends/invite-friends.module.ts")).then(function (m) {
          return m.InviteFriendsPageModule;
        });
      },
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'buy-point',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | buy-point-buy-point-module */
        "buy-point-buy-point-module").then(__webpack_require__.bind(null,
        /*! ./buy-point/buy-point.module */
        "./src/app/buy-point/buy-point.module.ts")).then(function (m) {
          return m.BuyPointPageModule;
        });
      },
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'subscription',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | subscription-subscription-module */
        "subscription-subscription-module").then(__webpack_require__.bind(null,
        /*! ./subscription/subscription.module */
        "./src/app/subscription/subscription.module.ts")).then(function (m) {
          return m.SubscriptionPageModule;
        });
      },
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'create-comp',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | create-comp-create-comp-module */
        [__webpack_require__.e("default~add-link-add-link-module~create-comp-create-comp-module~tab2-tab2-module~tab3-tab3-module"), __webpack_require__.e("common"), __webpack_require__.e("create-comp-create-comp-module")]).then(__webpack_require__.bind(null,
        /*! ./create-comp/create-comp.module */
        "./src/app/create-comp/create-comp.module.ts")).then(function (m) {
          return m.CreateCompPageModule;
        });
      },
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'faq',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | faq-faq-module */
        "faq-faq-module").then(__webpack_require__.bind(null,
        /*! ./faq/faq.module */
        "./src/app/faq/faq.module.ts")).then(function (m) {
          return m.FaqPageModule;
        });
      },
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'message',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | message-message-module */
        "message-message-module").then(__webpack_require__.bind(null,
        /*! ./message/message.module */
        "./src/app/message/message.module.ts")).then(function (m) {
          return m.MessagePageModule;
        });
      },
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'vip-account',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | vip-account-vip-account-module */
        "vip-account-vip-account-module").then(__webpack_require__.bind(null,
        /*! ./vip-account/vip-account.module */
        "./src/app/vip-account/vip-account.module.ts")).then(function (m) {
          return m.VipAccountPageModule;
        });
      },
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'add-link',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | add-link-add-link-module */
        [__webpack_require__.e("default~add-link-add-link-module~create-comp-create-comp-module~tab2-tab2-module~tab3-tab3-module"), __webpack_require__.e("add-link-add-link-module")]).then(__webpack_require__.bind(null,
        /*! ./add-link/add-link.module */
        "./src/app/add-link/add-link.module.ts")).then(function (m) {
          return m.AddLinkPageModule;
        });
      },
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'log-in',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | log-in-log-in-module */
        "log-in-log-in-module").then(__webpack_require__.bind(null,
        /*! ./log-in/log-in.module */
        "./src/app/log-in/log-in.module.ts")).then(function (m) {
          return m.LogInPageModule;
        });
      }
    }, {
      path: 'details-campaign',
      data: {
        data: ''
      },
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | details-campaign-details-campaign-module */
        [__webpack_require__.e("common"), __webpack_require__.e("details-campaign-details-campaign-module")]).then(__webpack_require__.bind(null,
        /*! ./details-campaign/details-campaign.module */
        "./src/app/details-campaign/details-campaign.module.ts")).then(function (m) {
          return m.DetailsCampaignPageModule;
        });
      },
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'create-subscripe',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | create-subscripe-create-subscripe-module */
        "create-subscripe-create-subscripe-module").then(__webpack_require__.bind(null,
        /*! ./create-subscripe/create-subscripe.module */
        "./src/app/create-subscripe/create-subscripe.module.ts")).then(function (m) {
          return m.CreateSubscripePageModule;
        });
      },
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'reedem-invite',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reedem-invite-reedem-invite-module */
        "reedem-invite-reedem-invite-module").then(__webpack_require__.bind(null,
        /*! ./reedem-invite/reedem-invite.module */
        "./src/app/reedem-invite/reedem-invite.module.ts")).then(function (m) {
          return m.ReedemInvitePageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  font-size: 20px;\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #6c6c6c;\n}\n\nimg {\n  width: 20px;\n  height: 20px;\n  display: inline;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.language {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.profilePhoto {\n  width: 60px;\n  height: 60px;\n  display: inline-block;\n  float: left;\n  border-radius: 50%;\n  margin-right: 80%;\n  margin-left: 5%;\n  margin-top: 12%;\n}\n\nion-card {\n  width: 100%;\n  height: 25%;\n  margin-left: 0px;\n  margin-top: 0px;\n  background: linear-gradient(to left, #2aa89c, #018979) 0% 0%/100% 100% no-repeat;\n}\n\nion-card-title {\n  display: inline-block;\n  margin: 8%;\n  font-size: 15px;\n  color: white;\n  margin-top: 5%;\n  margin-bottom: 0%;\n}\n\nion-menu {\n  --width:75%;\n  --ion-background-color: #eeeeee ;\n}\n\n.email {\n  margin-top: 3%;\n}\n\nion-label {\n  display: inline-block;\n  font-style: bold;\n  margin: 5%;\n  color: #595959;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZGVyL0RvY3VtZW50cy90dWJlLWFwcC90dXBlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGdGQUFBO0FDSUo7O0FERkE7RUFDSSxxQkFBQTtFQUNKLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0tBOztBREhBO0VBQ0ksV0FBQTtFQUNBLGdDQUFBO0FDTUo7O0FERkU7RUFDRSxjQUFBO0FDS0o7O0FERkU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjNmM2YzZjO1xufVxuaW1ne1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmxhbmd1YWdle1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5wcm9maWxlUGhvdG97XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OjgwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXRvcDogMTIlO1xufVxuaW9uLWNhcmR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQgLCAgICMyYWE4OWMsICMwMTg5NzkpMCUgMCUvMTAwJSAxMDAlIG5vLXJlcGVhdCA7XG59XG5pb24tY2FyZC10aXRsZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5tYXJnaW46IDglO1xuZm9udC1zaXplOiAxNXB4O1xuY29sb3I6IHdoaXRlO1xubWFyZ2luLXRvcDogNSU7XG5tYXJnaW4tYm90dG9tOiAwJTtcbn1cbmlvbi1tZW51e1xuICAgIC0td2lkdGg6NzUlO1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNlZWVlZWVcbiAgICBcbiAgfVxuXG4gIC5lbWFpbHtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgfVxuXG4gIGlvbi1sYWJlbHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICBtYXJnaW46IDUlO1xuICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIH0iLCJpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICM2YzZjNmM7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmxhbmd1YWdlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnByb2ZpbGVQaG90byB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDogMTIlO1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1JTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzJhYTg5YywgIzAxODk3OSkgMCUgMCUvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogOCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogMCU7XG59XG5cbmlvbi1tZW51IHtcbiAgLS13aWR0aDo3NSU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgO1xufVxuXG4uZW1haWwge1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXN0eWxlOiBib2xkO1xuICBtYXJnaW46IDUlO1xuICBjb2xvcjogIzU5NTk1OTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/firebase/firebase.service */
    "./src/app/firebase/firebase.service.ts");
    /* harmony import */


    var _storageService_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./storageService/storage.service */
    "./src/app/storageService/storage.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/admob-pro/ngx */
    "./node_modules/@ionic-native/admob-pro/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/ngx/index.js");
    /* harmony import */


    var _firebase_youtube__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./firebase/youtube */
    "./src/app/firebase/youtube.ts");
    /* harmony import */


    var _firebase_subscripe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./firebase/subscripe */
    "./src/app/firebase/subscripe.ts");
    /* harmony import */


    var _firebase_valdaite_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./firebase/valdaite.service */
    "./src/app/firebase/valdaite.service.ts");
    /* harmony import */


    var src_app_firebase_setting_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/firebase/setting.service */
    "./src/app/firebase/setting.service.ts");
    /* harmony import */


    var capacitor_analytics__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! capacitor-analytics */
    "./node_modules/capacitor-analytics/dist/esm/index.js");

    var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"],
        PushNotifications = _capacitor_core__WEBP.PushNotifications,
        Modals = _capacitor_core__WEBP.Modals; // import { FCM } from '@ionic-native/fcm/ngx';

    var analytics = new capacitor_analytics__WEBPACK_IMPORTED_MODULE_17__["Analytics"]();

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, translate, router, firebaseService, toastController, menu, storage, alertController, admob, appVersion, YoutubeService, subscribes, firebase, setting, ValdaiteService // private fcm: FCM
      ) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.translate = translate;
        this.router = router;
        this.firebaseService = firebaseService;
        this.toastController = toastController;
        this.menu = menu;
        this.storage = storage;
        this.alertController = alertController;
        this.admob = admob;
        this.appVersion = appVersion;
        this.YoutubeService = YoutubeService;
        this.subscribes = subscribes;
        this.firebase = firebase;
        this.setting = setting;
        this.ValdaiteService = ValdaiteService;
        this.clicks = 0;
        this.initializeApp(); //firebase.initializeApp(config);    

        this.currentLanguage = localStorage.getItem('lng') || 'en';
        this.Translate(this.currentLanguage);
        this.translate.onLangChange.subscribe(function (event) {
          if (event.lang == 'ar') {
            _this.textDir = 'rtl';
          } else {
            _this.textDir = 'ltr';
          }
        });
      }

      _createClass(AppComponent, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.isSubscribe();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "validate",
        value: function validate() {
          this.ValdaiteService.validate();
        }
      }, {
        key: "isSubscribe",
        value: function isSubscribe() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var lastChannel;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.subscribes.getsubscribesList(function (res) {
                      return res.orderByChild('expired').equalTo(null);
                    }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (changes) {
                      return changes.map(function (c) {
                        return Object.assign({
                          key: c.payload.key
                        }, c.payload.val());
                      });
                    })).subscribe(function (camping) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var camp, channels, isSubscribes;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 2;
                                return this.storage.storage.get('channel');

                              case 2:
                                lastChannel = _context2.sent;
                                camp = camping.filter(function (ele) {
                                  return ele.key == lastChannel;
                                });

                                if (!camp[0]) {
                                  _context2.next = 14;
                                  break;
                                }

                                _context2.next = 7;
                                return this.YoutubeService.getUserChannels();

                              case 7:
                                channels = _context2.sent.items;
                                isSubscribes = channels.filter(function (element) {
                                  return element.snippet.resourceId.channelId == camp[0].channel.channelId;
                                })[0];

                                if (!(isSubscribes && lastChannel)) {
                                  _context2.next = 14;
                                  break;
                                }

                                _context2.next = 12;
                                return this.storage.storage.remove('channel');

                              case 12:
                                _context2.next = 14;
                                return this.updateCamping(camp[0]);

                              case 14:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "updateCamping",
        value: function updateCamping(video) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    video.done = video.done ? video.done : [];
                    video.done.push(this.user);
                    if (video.done.length == video.view) video.expired = true;
                    _context4.next = 5;
                    return this.subscribes.updateSubscripe(video.key, video);

                  case 5:
                    _context4.next = 7;
                    return this.UpdateUSerPoints(+video.point / +video.view - +video.point / +video.view * 0.2, video.channel.channelId);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this3 = this;

            var status, title, id;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.validate();

                  case 2:
                    _context8.next = 4;
                    return this.isSubscribe();

                  case 4:
                    this.firebaseService.getDataOfUser().then(function (user) {
                      _this3.user = user;
                      _this3.profilePhoto = user.docs[0].data().photoURL || "https://fogtube.store/profile.svg";
                      _this3.displayName = user.docs[0].data().displayName;
                      _this3.email = user.docs[0].data().email;
                      _this3.points = user.docs[0].data().points;
                      console.log('profilePhoto', _this3.profilePhoto);
                    });
                    this.getUser();
                    this.setting.getsettingsList(function (res) {
                      return res;
                    }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (changes) {
                      return changes.map(function (c) {
                        return Object.assign({
                          key: c.payload.key
                        }, c.payload.val());
                      });
                    })).subscribe(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                        var _this4 = this;

                        var versionOnServer, appVersion;
                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                versionOnServer = res[res.length - 1].version;
                                console.log('setting is ', res); // alert(())

                                _context6.next = 4;
                                return this.appVersion.getVersionNumber().then(function (version) {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                                    var _title, link, text, _alert;

                                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                      while (1) {
                                        switch (_context5.prev = _context5.next) {
                                          case 0:
                                            if (!(version != versionOnServer)) {
                                              _context5.next = 10;
                                              break;
                                            }

                                            // this.presentAlert('')
                                            // this.translate.instant('there is a new version you must update it')
                                            _title = res[res.length - 1].message;
                                            link = res[res.length - 1].AppURl;
                                            console.log('link is', link);
                                            text = this.translate.instant('Update now');
                                            _context5.next = 7;
                                            return this.alertController.create({
                                              header: 'Alert',
                                              message: _title,
                                              backdropDismiss: false,
                                              buttons: [{
                                                text: text,
                                                handler: function handler() {
                                                  window.open(link);
                                                }
                                              }]
                                            });

                                          case 7:
                                            _alert = _context5.sent;
                                            _context5.next = 10;
                                            return _alert.present();

                                          case 10:
                                          case "end":
                                            return _context5.stop();
                                        }
                                      }
                                    }, _callee5, this);
                                  }));
                                });

                              case 4:
                                appVersion = _context6.sent;

                              case 5:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6, this);
                      }));
                    });
                    document.addEventListener('onAdDismiss', function (data) {
                      if (data.adType == "rewardvideo") {
                        _this3.setting.getsettingsList(function (res) {
                          return res;
                        }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (changes) {
                          return changes.map(function (c) {
                            return Object.assign({
                              key: c.payload.key
                            }, c.payload.val());
                          });
                        })).subscribe(function (res) {
                          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                            var point;
                            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                              while (1) {
                                switch (_context7.prev = _context7.next) {
                                  case 0:
                                    point = res[res.length - 1].point;
                                    this.UpdateUSerPoints(point);

                                  case 2:
                                  case "end":
                                    return _context7.stop();
                                }
                              }
                            }, _callee7, this);
                          }));
                        });
                      }
                    });
                    status = false;
                    this.firebase.getDataOfUser(this.user).then(function (user) {
                      status = user.docs[0].data().vip.status;
                      console.log('vip is ', status);

                      if (status == false) {
                        setInterval(function () {
                          _this3.admob.prepareInterstitial({
                            adId: "ca-app-pub-3736449894948823/8716133932"
                          }).then(function () {
                            _this3.admob.showInterstitial();
                          });
                        }, 7 * 60 * 1000);
                        setInterval(function () {
                          _this3.admob.prepareRewardVideoAd({
                            adId: "ca-app-pub-3736449894948823/7211480575"
                          }).then(function () {
                            _this3.admob.showRewardVideoAd();
                          });
                        }, 11 * 60 * 1000);
                      }
                    });
                    analytics.setUserID({
                      value: '' + new Date().getTime()
                    }); //
                    // user attributes
                    // google don't allow use of sensitive data
                    // like names, emails, card numbers, etc.
                    // analytics.setUserProp({
                    //   key: 'city',
                    //   value: 'San Francisco'
                    // });
                    // // Register with Apple / Google to receive push via APNS/FCM

                    PushNotifications.register(); // On succcess, we should be able to receive notifications

                    PushNotifications.addListener('registration', function (token) {
                      // alert('Push registration success, token: ' + token.value);
                      console.log('Push registration success, token: ' + token.value); //  this.presentAlert('Push registration success, token: ' + token.value)
                    }); // Some issue with our setup and push will not work

                    title = this.translate.instant('Error on registration');
                    PushNotifications.addListener('registrationError', function (error) {
                      alert(title + JSON.stringify(error));
                    }); // Show us the notification payload if the app is open on our device

                    PushNotifications.addListener('pushNotificationReceived', function (notification) {
                      var audio1 = new Audio('assets/audio.mp3');
                      console.log('Audio');
                      audio1.play();
                      console.log('Push received: ', notification);

                      _this3.UpdateUSerPoints(0, null, null, notification);

                      var alertRet = Modals.alert({
                        title: notification.title,
                        message: notification.body
                      });
                    }); // Method called when tapping on a notification

                    PushNotifications.addListener('pushNotificationActionPerformed', function (notification) {
                      // alert('Push action performed: ' + JSON.stringify(notification));
                      console.log('Push action performed: ' + notification);
                    }); //this.getUser();
                    // this.firebaseService.getDataOfUser()

                  case 17:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        } // ionViewWillUnload  () {
        //   this.storage.getUserId().then(user => {
        //     this.user = user;
        //     console.log('user is',user)
        //   })
        // }

      }, {
        key: "UpdateUSerPoints",
        value: function UpdateUSerPoints(point, video, token, message) {
          var _this5 = this;

          this.firebaseService.getDataOfUser(this.user).then(function (e) {
            var user = e.docs[0].data();

            if (video) {
              user.videos = user.videos ? user.videos : [];
              user.videos.push(video);
              user.points = user.points ? user.points : {};
              user.points[video] = point;
            }

            if (message) {
              user.messages = user.messages ? user.messages : [];
              user.messages.push(message);
            }

            var UserEdited = Object.assign({}, user, {
              token: token,
              point: e.docs[0].data().point + point
            }); // document.getElementById('point').textContent = e.docs[0].data().point + point;
            // e.docs[0].data().point + points;

            _this5.firebaseService.updateUser(UserEdited);

            var title = _this5.translate.instant('you have got');

            var points = _this5.translate.instant('points');

            if (point) {
              _this5.presentAlert(title + ' ' + point + ' ' + points);
            }
          });
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this6 = this;

          this.platform.ready().then(function () {
            _this6.statusBar.styleDefault();

            _this6.splashScreen.hide();
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(title) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var alert;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      message: title
                    });

                  case 2:
                    alert = _context9.sent;
                    _context9.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var toast;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 3000
                    });

                  case 2:
                    toast = _context10.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.storage.getUserId().then(function (user) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                        var _this8 = this;

                        return regeneratorRuntime.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                this.user = user;
                                _context11.next = 3;
                                return this.firebaseService.getDataOfUser(user).then(function (_user) {
                                  // if(user)
                                  var user = _user.docs[0].data();

                                  if (!user) {
                                    console.log('go to logIn');

                                    _this8.router.navigate(['log-in']);
                                  } else {
                                    _this8.profilePhoto = user.photoURL || "https://fogtube.store/profile.svg";
                                    _this8.displayName = user.displayName;
                                    _this8.email = user.email;
                                    _this8.points = user.points;
                                  }
                                });

                              case 3:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "goToinviteFreind",
        value: function goToinviteFreind() {
          this.menu.close();
          this.router.navigate(['invite-friends']);
        }
      }, {
        key: "goTofaq",
        value: function goTofaq() {
          this.menu.close();
          this.router.navigate(['faq']);
        }
      }, {
        key: "goTomessage",
        value: function goTomessage() {
          this.menu.close();
          this.router.navigate(['message']);
        }
      }, {
        key: "goToVip",
        value: function goToVip() {
          this.menu.close();
          this.router.navigate(['vip-account']);
        }
      }, {
        key: "changeLng",
        value: function changeLng(type) {
          this.translate.use(type); // ar or en

          this.menu.close();
          this.currentLanguage = type;
          localStorage.setItem('lng', type);
        }
      }, {
        key: "Translate",
        value: function Translate(type) {
          this.translate.use(type); // ar or en    
        }
      }, {
        key: "logout",
        value: function logout() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.storage.clear();

                  case 2:
                    window['plugins'].googleplus.disconnect(function () {});
                    this.router.navigate(['/log-in']);
                    window.location.reload();

                  case 5:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _storageService_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_11__["AdMobPro"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__["AppVersion"]
      }, {
        type: _firebase_youtube__WEBPACK_IMPORTED_MODULE_13__["YoutubeService"]
      }, {
        type: _firebase_subscripe__WEBPACK_IMPORTED_MODULE_14__["subscribesService"]
      }, {
        type: src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"]
      }, {
        type: src_app_firebase_setting_service__WEBPACK_IMPORTED_MODULE_16__["SettingService"]
      }, {
        type: _firebase_valdaite_service__WEBPACK_IMPORTED_MODULE_15__["ValdaiteService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _storageService_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_11__["AdMobPro"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__["AppVersion"], _firebase_youtube__WEBPACK_IMPORTED_MODULE_13__["YoutubeService"], _firebase_subscripe__WEBPACK_IMPORTED_MODULE_14__["subscribesService"], src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"], src_app_firebase_setting_service__WEBPACK_IMPORTED_MODULE_16__["SettingService"], _firebase_valdaite_service__WEBPACK_IMPORTED_MODULE_15__["ValdaiteService"] // private fcm: FCM
    ])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/ngx/index.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/admob-pro/ngx */
    "./node_modules/@ionic-native/admob-pro/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/ngx/index.js"); // import { Deeplinks } from '@ionic-native/deeplinks/ngx';


    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__["TranslateHttpLoader"](http, './assets/translate/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_20__["config"]), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorageModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_18__["IonicStorageModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]]
        }
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"], _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_21__["AdMobPro"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_22__["AppVersion"], // Deeplinks,
      {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(storage, router) {
        _classCallCheck(this, AuthGuard);

        this.storage = storage;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var user;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.storage.get('User');

                  case 2:
                    user = _context14.sent;

                    if (!user) {
                      _context14.next = 7;
                      break;
                    }

                    return _context14.abrupt("return", true);

                  case 7:
                    this.router.navigate(['log-in']);
                    return _context14.abrupt("return", false);

                  case 9:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/firebase/firebase.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/firebase/firebase.service.ts ***!
    \**********************************************/

  /*! exports provided: FirebaseService */

  /***/
  function srcAppFirebaseFirebaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
      return FirebaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_storageService_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/storageService/storage.service */
    "./src/app/storageService/storage.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js"); // import { Firebase } from "@ionic-native/firebase/ngx";


    var FirebaseService = /*#__PURE__*/function () {
      function FirebaseService(platform, // private FireBase: Firebase,
      googlePlus, afAuth, firestore, storage, alertController, router) {
        var _this9 = this;

        _classCallCheck(this, FirebaseService);

        this.platform = platform;
        this.googlePlus = googlePlus;
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.storage = storage;
        this.alertController = alertController;
        this.router = router;
        this.point = 0;
        this.document = [];
        this.docs = [];
        this.user$ = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (user) {
          // Logged in
          if (user) {
            return _this9.firestore.doc("users/".concat(user.uid)).valueChanges();
          } else {
            // Logged out
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
          }
        }));
      }

      _createClass(FirebaseService, [{
        key: "getToken",
        value: function getToken() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var token;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    // if (this.platform.is('android')) {
                    //   token = await this.FireBase.getToken();
                    // }
                    // if (this.platform.is('ios')) {
                    //   token = await this.FireBase.getToken();
                    //   await this.FireBase.grantPermission();
                    // }
                    this.saveToken(token);

                  case 1:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          if (!token) return;
          var devicesRef = this.firestore.collection('devices');
          var data = {
            token: token,
            userId: 'testUserId'
          };
          return devicesRef.doc(token).set(data);
        }
      }, {
        key: "onNotifications",
        value: function onNotifications() {// return this.FireBase.onNotificationOpen();
        }
      }, {
        key: "googleSignin",
        value: function googleSignin() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var provider, credential;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    provider = new firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider();
                    provider.addScope('https://www.googleapis.com/auth/youtube');
                    provider.addScope('https://www.googleapis.com/auth/youtube.readonly');
                    _context16.next = 5;
                    return this.afAuth.signInWithPopup(provider);

                  case 5:
                    credential = _context16.sent;
                    console.log(credential);
                    return _context16.abrupt("return", this.updateUserData(credential.user));

                  case 8:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "updateUserData",
        value: function updateUserData(user) {
          var _this10 = this;

          console.log(user);

          if (!user.userId) {
            user.userId = user.uid;
          } // Sets user data to firestore on login


          this.firestore.collection('users').ref.where('uid', '==', user.userId).get().then(function (_user) {
            if (!_user.docs[0]) {
              _this10.firestore.collection('users').add({
                uid: user.userId,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.imageUrl || '',
                point: 0
              }).then(function (u) {
                console.log(u);
              });
            } else {}

            _this10.storage.saveUserId(user.userId);

            _this10.storage.storage.set('accessToken', user.accessToken);

            _this10.router.navigate(['']); // window.location.reload()

          });
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var _this11 = this;

          var isGmail = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(email);

          if (!isGmail) {
            this.presentAlert('Please enter  google mail');
            return;
          } // Sets user data to firestore on login


          this.firestore.collection('users').ref.where('email', '==', email).get().then(function (_user) {
            console.log(_user.docs[0]);

            if (!_user.docs[0]) {
              var id = new Date().getTime();

              _this11.firestore.collection('users').add({
                uid: id,
                email: email,
                displayName: email.split("@")[0],
                password: password,
                photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BdmOpYjhT8eCXbPFKrfK-4Jx0DHd-ihLDzSuE6tCi1dK1yUwfPOlwoJS&s=10",
                point: 0
              });

              _this11.storage.saveUserId(id);

              _this11.router.navigate(['']);
            } else {
              if (_user.docs[0].data().password == password) {
                _this11.storage.saveUserId(_user.docs[0].data().uid);

                _this11.router.navigate(['']);
              } else {
                _this11.presentAlert("password is wrong");
              }
            }
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          this.firestore.collection('users').ref.where('uid', '==', user.uid).get().then(function (ele) {
            ele.docs[0].ref.update(Object.assign({}, user));
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.afAuth.signOut();
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.afAuth.authState;
        }
      }, {
        key: "getDataOfUser",
        value: function getDataOfUser(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var _id;

            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.storage.getUserId();

                  case 2:
                    _id = _context17.sent;
                    return _context17.abrupt("return", this.firestore.collection('users').ref.where('uid', '==', id || _id).get());

                  case 4:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "UserId",
        value: function UserId() {
          this.getCurrentUser().subscribe(function (user) {
            //console.log('id is ', user.uid)
            return user.uid;
          });
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return this.firestore.collection('version').snapshotChanges();
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(title) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var alert;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      // subHeader: 'Subtitle',
                      message: title,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context18.sent;
                    _context18.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }]);

      return FirebaseService;
    }();

    FirebaseService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"]
      }, {
        type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__["GooglePlus"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
      }, {
        type: src_app_storageService_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__["GooglePlus"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"], src_app_storageService_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], FirebaseService);
    /***/
  },

  /***/
  "./src/app/firebase/setting.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/firebase/setting.service.ts ***!
    \*********************************************/

  /*! exports provided: SettingService */

  /***/
  function srcAppFirebaseSettingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingService", function () {
      return SettingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");

    var SettingService = /*#__PURE__*/function () {
      function SettingService(db) {
        _classCallCheck(this, SettingService);

        this.db = db;
        this.dbPath = '/settings';
        this.settingsRef = null;
        this.settingsRef = db.list(this.dbPath);
      }

      _createClass(SettingService, [{
        key: "getsettingsList",
        value: function getsettingsList(query) {
          return this.db.list(this.dbPath, query);
        }
      }, {
        key: "getAllsettings",
        value: function getAllsettings() {
          return this.db.list(this.dbPath).snapshotChanges();
        }
      }]);

      return SettingService;
    }();

    SettingService.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }];
    };

    SettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])], SettingService);
    /***/
  },

  /***/
  "./src/app/firebase/subscripe.ts":
  /*!***************************************!*\
    !*** ./src/app/firebase/subscripe.ts ***!
    \***************************************/

  /*! exports provided: subscribesService */

  /***/
  function srcAppFirebaseSubscripeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "subscribesService", function () {
      return subscribesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");

    var subscribesService = /*#__PURE__*/function () {
      function subscribesService(db) {
        _classCallCheck(this, subscribesService);

        this.db = db;
        this.dbPath = '/subscribes';
        this.subscribesRef = null;
        this.subscribesRef = db.list(this.dbPath);
      }

      _createClass(subscribesService, [{
        key: "createSubscribe",
        value: function createSubscribe(Subscripe) {
          this.subscribesRef.push(Subscripe);
        }
      }, {
        key: "updateSubscripe",
        value: function updateSubscripe(key, value) {
          return this.db.object(this.dbPath + '/' + key).update(value);
        }
      }, {
        key: "deleteSubscripe",
        value: function deleteSubscripe(data) {
          return this.db.database.ref("/subscribes/".concat(data)).remove();
        }
      }, {
        key: "getsubscribesList",
        value: function getsubscribesList(query) {
          return this.db.list(this.dbPath, query);
        }
      }, {
        key: "getNotification",
        value: function getNotification() {
          return this.db.list('notification').snapshotChanges();
        }
      }, {
        key: "deleteAll",
        value: function deleteAll() {
          return this.subscribesRef.remove();
        }
      }]);

      return subscribesService;
    }();

    subscribesService.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }];
    };

    subscribesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])], subscribesService);
    /***/
  },

  /***/
  "./src/app/firebase/valdaite.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/firebase/valdaite.service.ts ***!
    \**********************************************/

  /*! exports provided: ValdaiteService */

  /***/
  function srcAppFirebaseValdaiteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValdaiteService", function () {
      return ValdaiteService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./firebase.service */
    "./src/app/firebase/firebase.service.ts");
    /* harmony import */


    var _youtube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./youtube */
    "./src/app/firebase/youtube.ts");
    /* harmony import */


    var _subscripe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./subscripe */
    "./src/app/firebase/subscripe.ts");
    /* harmony import */


    var _storageService_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../storageService/storage.service */
    "./src/app/storageService/storage.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ValdaiteService = /*#__PURE__*/function () {
      function ValdaiteService(firebaseService, YoutubeService, subscribes, storage, alertController) {
        _classCallCheck(this, ValdaiteService);

        this.firebaseService = firebaseService;
        this.YoutubeService = YoutubeService;
        this.subscribes = subscribes;
        this.storage = storage;
        this.alertController = alertController;
      }

      _createClass(ValdaiteService, [{
        key: "validate",
        value: function validate() {
          var _this12 = this;

          this.storage.getUserId().then(function (user) {
            if (!user) {
              return;
            }

            _this12.firebaseService.getDataOfUser(user).then(function (_user) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                var _this13 = this;

                var alert, user, channels, errors, ductedPoints, _alert2, _alert3;

                return regeneratorRuntime.wrap(function _callee19$(_context19) {
                  while (1) {
                    switch (_context19.prev = _context19.next) {
                      case 0:
                        _context19.next = 2;
                        return this.alertController.create({
                          header: " we will validate your subscribes if you remove any one will report you and remove your points  "
                        });

                      case 2:
                        alert = _context19.sent;
                        alert.present();
                        user = _user.docs[0].data();
                        this.user = user.uid;
                        _context19.next = 8;
                        return this.YoutubeService.getUserChannels();

                      case 8:
                        channels = _context19.sent.items.map(function (ele) {
                          return ele.snippet.resourceId.channelId;
                        });

                        if (!user.videos) {
                          _context19.next = 25;
                          break;
                        }

                        errors = user.videos.filter(function (element) {
                          return channels.indexOf(element) == -1;
                        });
                        _context19.next = 13;
                        return alert.dismiss();

                      case 13:
                        if (!errors[0]) {
                          _context19.next = 22;
                          break;
                        }

                        ductedPoints = 0;
                        errors.forEach(function (ele) {
                          _this13.UpdateUSerPoints(-user.points[ele], ele);

                          ductedPoints += user.points[ele];
                        });
                        _context19.next = 18;
                        return this.alertController.create({
                          header: " you lose " + ductedPoints + " point and we report you to the admin "
                        });

                      case 18:
                        _alert2 = _context19.sent;

                        _alert2.present();

                        _context19.next = 25;
                        break;

                      case 22:
                        _context19.next = 24;
                        return this.alertController.create({
                          header: "you are a valid user now :D"
                        });

                      case 24:
                        _alert3 = _context19.sent;

                      case 25:
                      case "end":
                        return _context19.stop();
                    }
                  }
                }, _callee19, this);
              }));
            });
          });
        }
      }, {
        key: "UpdateUSerPoints",
        value: function UpdateUSerPoints(point, video) {
          var _this14 = this;

          this.firebaseService.getDataOfUser(this.user).then(function (e) {
            var user = e.docs[0].data();

            if (video) {
              user.videos.splice(user.videos.indexOf(video), 1);
            }

            var UserEdited = Object.assign({}, user, {
              point: e.docs[0].data().point + point
            }); // document.getElementById('point').textContent = e.docs[0].data().point + point;
            // e.docs[0].data().point + points;

            _this14.firebaseService.updateUser(UserEdited); // this.presentAlert("you have got " + point + " points")

          });
        }
      }]);

      return ValdaiteService;
    }();

    ValdaiteService.ctorParameters = function () {
      return [{
        type: _firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: _youtube__WEBPACK_IMPORTED_MODULE_3__["YoutubeService"]
      }, {
        type: _subscripe__WEBPACK_IMPORTED_MODULE_4__["subscribesService"]
      }, {
        type: _storageService_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }];
    };

    ValdaiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _youtube__WEBPACK_IMPORTED_MODULE_3__["YoutubeService"], _subscripe__WEBPACK_IMPORTED_MODULE_4__["subscribesService"], _storageService_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])], ValdaiteService);
    /***/
  },

  /***/
  "./src/app/firebase/youtube.ts":
  /*!*************************************!*\
    !*** ./src/app/firebase/youtube.ts ***!
    \*************************************/

  /*! exports provided: YoutubeService */

  /***/
  function srcAppFirebaseYoutubeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YoutubeService", function () {
      return YoutubeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./firebase.service */
    "./src/app/firebase/firebase.service.ts");

    var YoutubeService = /*#__PURE__*/function () {
      function YoutubeService(http, storage, router, firebase) {
        var _this15 = this;

        _classCallCheck(this, YoutubeService);

        this.http = http;
        this.storage = storage;
        this.router = router;
        this.firebase = firebase;
        this.key = 'AIzaSyCfb6JjRl78H45si1Jmetf2bDIwOcNg9oY';

        if (window['plugins']) {
          window['plugins'].googleplus.trySilentLogin({}, function (obj) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      this.firebase.updateUserData(obj);

                    case 1:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }, function (msg) {// alert('error: ' + msg);
          });
        }
      }

      _createClass(YoutubeService, [{
        key: "getVideoData",
        value: function getVideoData(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this.http.get("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=".concat(id, "&key=").concat(this.key)).toPromise();

                  case 2:
                    return _context21.abrupt("return", _context21.sent);

                  case 3:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "getChannelData",
        value: function getChannelData(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return this.http.get("https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=".concat(id, "&key=").concat(this.key)).toPromise();

                  case 2:
                    return _context22.abrupt("return", _context22.sent);

                  case 3:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "getUserChannels",
        value: function getUserChannels() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var access;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.prev = 0;
                    _context23.next = 3;
                    return this.storage.get('accessToken');

                  case 3:
                    _context23.t0 = _context23.sent;

                    if (_context23.t0) {
                      _context23.next = 6;
                      break;
                    }

                    _context23.t0 = 'ya29.a0Ae4lvC3sbI91-6Vuofvdqq2BhcoUt-tazqGTo3_0HmS68LTlrhBvt5COoXY1gJ9fNgaGKsxCQYvyLleSX8y7ZKHSmH17tnAqLEgr2qMNh7xDWObkJAgpD0ebtmPQBeJ439E0lSaXm42EnIApa1JwkIhDljpGBM9Tfng';

                  case 6:
                    access = _context23.t0;
                    _context23.next = 9;
                    return this.http.get("https://www.googleapis.com/youtube/v3/subscriptions?mine=true&part=snippet&maxResults=50&key=".concat(this.key), {
                      headers: {
                        Authorization: 'Bearer ' + access
                      }
                    }).toPromise();

                  case 9:
                    return _context23.abrupt("return", _context23.sent);

                  case 12:
                    _context23.prev = 12;
                    _context23.t1 = _context23["catch"](0);

                  case 14:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this, [[0, 12]]);
          }));
        }
      }]);

      return YoutubeService;
    }();

    YoutubeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]
      }];
    };

    YoutubeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]])], YoutubeService);
    /***/
  },

  /***/
  "./src/app/storageService/storage.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/storageService/storage.service.ts ***!
    \***************************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppStorageServiceStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var StorageService = /*#__PURE__*/function () {
      function StorageService(storage) {
        _classCallCheck(this, StorageService);

        this.storage = storage;
      }

      _createClass(StorageService, [{
        key: "clear",
        value: function clear() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.storage.clear();

                  case 2:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          return this.storage.get('User');
        }
      }, {
        key: "saveUserId",
        value: function saveUserId(versionId) {
          this.storage.set('User', versionId);
        }
      }, {
        key: "saveVersionId",
        value: function saveVersionId(versionId) {
          this.storage.set('version', versionId); // console.log(versionId);
        }
      }, {
        key: "getVersionId",
        value: function getVersionId() {
          return this.storage.get('version'); // .then((versionId) => {
          //   return versionId;
          // });
        }
      }, {
        key: "deleteVersion",
        value: function deleteVersion() {
          this.storage.remove('version');
        }
      }]);

      return StorageService;
    }();

    StorageService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }];
    };

    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])], StorageService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment, config */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "config", function () {
      return config;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        databaseURL: "YOUR_DATABASE_URL",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_SENDER_ID"
      }
    }; // export const config = {
    //   apiKey: "AIzaSyDlWNjH4XsEHVkWceFtavf8e7Qq9fKgQwU",
    //   authDomain: "fir-7e3e0.firebaseapp.com",
    //   databaseURL: "https://fir-7e3e0.firebaseio.com",
    //   projectId: "fir-7e3e0",
    //   storageBucket: "fir-7e3e0.appspot.com",
    //   messagingSenderId: "941729484801",
    //   appId: "1:941729484801:web:aabacc4af4907bc1203000",
    //   measurementId: "G-TFXWLDL6QG"
    // };

    var config = {
      apiKey: "AIzaSyDazhWMFHM2GRAjs8SYSSL8GrpqWZDdHAs",
      authDomain: "fog-tube.firebaseapp.com",
      databaseURL: "https://fog-tube.firebaseio.com",
      projectId: "fog-tube",
      storageBucket: "fog-tube.appspot.com",
      messagingSenderId: "693510009864",
      appId: "1:693510009864:web:bf27397619adbc94fc4dbd",
      measurementId: "G-7ZQSLFG70L"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/nader/Documents/tube-app/tupe/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map