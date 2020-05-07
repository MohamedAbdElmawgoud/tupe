function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invite-friends-invite-friends-module"], {
  /***/
  "./node_modules/@ionic-native/clipboard/ngx/index.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@ionic-native/clipboard/ngx/index.js ***!
    \***********************************************************/

  /*! exports provided: Clipboard */

  /***/
  function node_modulesIonicNativeClipboardNgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
      return Clipboard;
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


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/index.js");

    var Clipboard =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Clipboard, _super);

      function Clipboard() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      Clipboard.prototype.copy = function (text) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "copy", {}, arguments);
      };

      Clipboard.prototype.paste = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "paste", {}, arguments);
      };

      Clipboard.prototype.clear = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "clear", {}, arguments);
      };

      Clipboard.pluginName = "Clipboard";
      Clipboard.plugin = "cordova-clipboard";
      Clipboard.pluginRef = "cordova.plugins.clipboard";
      Clipboard.repo = "https://github.com/ihadeed/cordova-clipboard";
      Clipboard.platforms = ["Android", "iOS", "Windows Phone 8"];
      Clipboard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Clipboard);
      return Clipboard;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NsaXBib2FyZC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFzQ3pDLDZCQUFpQjs7OztJQU85Qyx3QkFBSSxhQUFDLElBQVk7SUFTakIseUJBQUs7SUFTTCx5QkFBSzs7Ozs7O0lBekJNLFNBQVM7UUFEckIsVUFBVSxFQUFFO09BQ0EsU0FBUztvQkF2Q3RCO0VBdUMrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuLyoqXG4gKiBAbmFtZSBDbGlwYm9hcmRcbiAqIEBkZXNjcmlwdGlvblxuICogQ2xpcGJvYXJkIG1hbmFnZW1lbnQgcGx1Z2luIGZvciBDb3Jkb3ZhIHRoYXQgc3VwcG9ydHMgaU9TLCBBbmRyb2lkLCBhbmQgV2luZG93cyBQaG9uZSA4LlxuICpcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENsaXBib2FyZCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2xpcGJvYXJkL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjbGlwYm9hcmQ6IENsaXBib2FyZCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuY2xpcGJvYXJkLmNvcHkoJ0hlbGxvIHdvcmxkJyk7XG4gKlxuICogdGhpcy5jbGlwYm9hcmQucGFzdGUoKS50aGVuKFxuICogICAgKHJlc29sdmU6IHN0cmluZykgPT4ge1xuICogICAgICAgYWxlcnQocmVzb2x2ZSk7XG4gKiAgICAgfSxcbiAqICAgICAocmVqZWN0OiBzdHJpbmcpID0+IHtcbiAqICAgICAgIGFsZXJ0KCdFcnJvcjogJyArIHJlamVjdCk7XG4gKiAgICAgfVxuICogICApO1xuICpcbiAqIHRoaXMuY2xpcGJvYXJkLmNsZWFyKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDbGlwYm9hcmQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWNsaXBib2FyZCcsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5jbGlwYm9hcmQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2loYWRlZWQvY29yZG92YS1jbGlwYm9hcmQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSA4J11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29waWVzIHRoZSBnaXZlbiB0ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRleHQgdGhhdCBnZXRzIGNvcGllZCBvbiB0aGUgc3lzdGVtIGNsaXBib2FyZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSBhZnRlciB0aGUgdGV4dCBoYXMgYmVlbiBjb3BpZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY29weSh0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXN0ZXMgdGhlIHRleHQgc3RvcmVkIGluIGNsaXBib2FyZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSBhZnRlciB0aGUgdGV4dCBoYXMgYmVlbiBwYXN0ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGFzdGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIHRleHQgc3RvcmVkIGluIGNsaXBib2FyZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSBhZnRlciB0aGUgdGV4dCBoYXMgYmVlbiBjbGVhbmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsZWFyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/invite-friends/invite-friends.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invite-friends/invite-friends.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInviteFriendsInviteFriendsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>{{ 'invite friend' | translate}}\n      <strong>{{showPoint}}</strong>\n\n    </ion-title>\n   \n    <ion-buttons slot=\"start\">\n        <ion-back-button ></ion-back-button>\n       \n      </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card style=\"text-align: center;\" > \n    <ion-card-title>{{ 'invite Your Friends' | translate}}</ion-card-title>\n    <label>\n    <a href=\"https://fogtube.app.link/NwuabRc8Z5?ref={{user}}\">https://fogtube.app.link/NwuabRc8Z5?ref={{user}}</a>\n  </label>\n  <br>\n  <div style=\"text-align: center;\" >\n    <button class=\"btn\" (click)=\"copy()\" >{{ 'copy link' | translate}}</button>\n\n  </div>\n    <!-- <button>{{ 'invite friend' | translate}}</button> -->\n  </ion-card>\n\n  <div *ngFor=\"let user of viewers\">\n\n    <h4> {{user.displayName}}\n    </h4>\n    <img src=\"{{user.photoURL || 'https://fogtube.store/profile.svg'}}\">\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/invite-friends/invite-friends-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/invite-friends/invite-friends-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: InviteFriendsPageRoutingModule */

  /***/
  function srcAppInviteFriendsInviteFriendsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InviteFriendsPageRoutingModule", function () {
      return InviteFriendsPageRoutingModule;
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


    var _invite_friends_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./invite-friends.page */
    "./src/app/invite-friends/invite-friends.page.ts");

    var routes = [{
      path: '',
      component: _invite_friends_page__WEBPACK_IMPORTED_MODULE_3__["InviteFriendsPage"]
    }];

    var InviteFriendsPageRoutingModule = function InviteFriendsPageRoutingModule() {
      _classCallCheck(this, InviteFriendsPageRoutingModule);
    };

    InviteFriendsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InviteFriendsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/invite-friends/invite-friends.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/invite-friends/invite-friends.module.ts ***!
    \*********************************************************/

  /*! exports provided: InviteFriendsPageModule */

  /***/
  function srcAppInviteFriendsInviteFriendsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InviteFriendsPageModule", function () {
      return InviteFriendsPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/clipboard/ngx */
    "./node_modules/@ionic-native/clipboard/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _invite_friends_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./invite-friends-routing.module */
    "./src/app/invite-friends/invite-friends-routing.module.ts");
    /* harmony import */


    var _invite_friends_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./invite-friends.page */
    "./src/app/invite-friends/invite-friends.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var InviteFriendsPageModule = function InviteFriendsPageModule() {
      _classCallCheck(this, InviteFriendsPageModule);
    };

    InviteFriendsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _invite_friends_routing_module__WEBPACK_IMPORTED_MODULE_6__["InviteFriendsPageRoutingModule"]],
      declarations: [_invite_friends_page__WEBPACK_IMPORTED_MODULE_7__["InviteFriendsPage"]],
      providers: [_ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"]]
    })], InviteFriendsPageModule);
    /***/
  },

  /***/
  "./src/app/invite-friends/invite-friends.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/invite-friends/invite-friends.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInviteFriendsInviteFriendsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  padding: 10px;\n}\n\nbutton {\n  background: #fd4081;\n  margin-top: 20px;\n  margin-left: 5px;\n  margin-right: 5px;\n  color: white;\n  font-size: 15px;\n  padding: 10px;\n  width: 150px;\n}\n\nlabel, a {\n  text-align: left;\n  margin-top: 10px;\n  color: #fd4081;\n}\n\nion-card-title {\n  text-align: center;\n  margin-bottom: 10px;\n}\n\nstrong {\n  float: right;\n}\n\nimg {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  margin-left: 5%;\n}\n\nhr {\n  border-top: 4px solid #1C8646;\n  width: 90%;\n  margin-right: 5%;\n  margin-left: 5%;\n}\n\n.mark {\n  color: #2BC568;\n  font-size: 12px;\n  margin-top: 12%;\n}\n\nh3, h2 {\n  margin-left: 5%;\n  margin-right: 5%;\n  font-size: 12px;\n}\n\np {\n  margin-left: 5%;\n  font-size: 15px;\n}\n\nh2 {\n  margin-top: -10%;\n}\n\nh4 {\n  margin-left: 10px;\n  margin-right: 10px;\n  font-size: 15px;\n}\n\ndiv {\n  display: flex;\n  flex-direction: row-reverse;\n  width: 100%;\n  justify-content: flex-end;\n}\n\nh5 {\n  margin: 5%;\n}\n\nbutton {\n  text-transform: uppercase;\n  width: 90%;\n  margin-left: 5%;\n  margin-right: 5%;\n  color: #FFFFFF;\n  padding: 10px;\n}\n\nstrong {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZGVyL0RvY3VtZW50cy90dWJlLWFwcC90dXBlL3NyYy9hcHAvaW52aXRlLWZyaWVuZHMvaW52aXRlLWZyaWVuZHMucGFnZS5zY3NzIiwic3JjL2FwcC9pbnZpdGUtZnJpZW5kcy9pbnZpdGUtZnJpZW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQztFQUNELGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0E7O0FEQ0U7RUFDRSxrQkFBQTtFQUNKLG1CQUFBO0FDRUE7O0FEQUU7RUFDRSxZQUFBO0FDR0o7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUdBLGtCQUFBO0VBRUYsZUFBQTtBQ0RBOztBRElBO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDREY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNESjs7QURHQTtFQUNFLGVBQUE7RUFFQSxlQUFBO0FDREY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREVBO0VBRUksaUJBQUE7RUFDQSxrQkFBQTtFQUNELGVBQUE7QUNBSDs7QURJQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0RGOztBRFFBO0VBQ0ksVUFBQTtBQ0xKOztBRFFBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNMRjs7QURPQTtFQUNBLFlBQUE7QUNKQSIsImZpbGUiOiJzcmMvYXBwL2ludml0ZS1mcmllbmRzL2ludml0ZS1mcmllbmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5idXR0b257XG4gICAgYmFja2dyb3VuZDogI2ZkNDA4MTtcbiAgIFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDE1MHB4XG4gICAgXG4gIH1cbiBsYWJlbCwgYXtcbnRleHQtYWxpZ246IGxlZnQgO1xubWFyZ2luLXRvcDogMTBweDtcbmNvbG9yOiAjZmQ0MDgxO1xuICB9XG4gIGlvbi1jYXJkLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbm1hcmdpbi1ib3R0b206IDEwcHg7ICAgIFxuICB9XG4gIHN0cm9uZ3tcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cblxuXG5pbWd7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4vLyAgZGlzcGxheTogaW5saW5lO1xuICAvLyBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAvL21hcmdpbi1yaWdodDo4MCU7XG5tYXJnaW4tbGVmdDogNSU7XG4gIFxufVxuaHIge1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzFDODY0NjtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuLm1hcmt7XG4gIGNvbG9yOiAjMkJDNTY4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEyJTtcbi8vICBtYXJnaW4tcmlnaHQ6IDEwJVxufVxuaDMgLCBoMntcbiAgLy8gIG1hcmdpbi10b3A6IC0xMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxucHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuIC8vIG1hcmdpbi1yaWdodDogNSU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbmgye1xuICBtYXJnaW4tdG9wOiAtMTAlO1xufVxuaDR7XG4gICAvLyBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luLWxlZnQ6ICAxMHB4OyBcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7ICAgICAgICAgICBcbiAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAvL3dpZHRoOiAxMDAlXG59XG5cbmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbi8vICBtYXJnaW4tcmlnaHQ6IDIwJTtcbi8vICAgbWFyZ2luLWxlZnQ6IDUlO1xuIC8vIHdpZHRoOiA4MCU7XG4vLyAgZmxvYXQ6IGxlZnQ7XG59XG5oNXtcbiAgICBtYXJnaW46IDUlO1xufVxuXG5idXR0b257XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5zdHJvbmd7XG5mbG9hdDogcmlnaHQ7XG59IiwiaW9uLWNhcmQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZmQ0MDgxO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxubGFiZWwsIGEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogI2ZkNDA4MTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbnN0cm9uZyB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbmhyIHtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMxQzg2NDY7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLm1hcmsge1xuICBjb2xvcjogIzJCQzU2ODtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMiU7XG59XG5cbmgzLCBoMiB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5wIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmgyIHtcbiAgbWFyZ2luLXRvcDogLTEwJTtcbn1cblxuaDQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbmg1IHtcbiAgbWFyZ2luOiA1JTtcbn1cblxuYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuc3Ryb25nIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/invite-friends/invite-friends.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/invite-friends/invite-friends.page.ts ***!
    \*******************************************************/

  /*! exports provided: InviteFriendsPage */

  /***/
  function srcAppInviteFriendsInviteFriendsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InviteFriendsPage", function () {
      return InviteFriendsPage;
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
    /* harmony import */


    var src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/firebase/firebase.service */
    "./src/app/firebase/firebase.service.ts");
    /* harmony import */


    var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/clipboard/ngx */
    "./node_modules/@ionic-native/clipboard/ngx/index.js");

    var InviteFriendsPage = /*#__PURE__*/function () {
      function InviteFriendsPage(firebaseService, storage, clipboard) {
        _classCallCheck(this, InviteFriendsPage);

        this.firebaseService = firebaseService;
        this.storage = storage;
        this.clipboard = clipboard;
        this.viewers = [];
      }

      _createClass(InviteFriendsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.storage.get('User');

                  case 2:
                    this.user = _context.sent;
                    _context.next = 5;
                    return this.getPoint();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getPoint",
        value: function getPoint() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.firebaseService.getDataOfUser(this.user).then(function (point) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var _iterator, _step, ele, user;

                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                this.showPoint = point.docs[0].data().point;
                                console.log(point);
                                _iterator = _createForOfIteratorHelper(point.docs[0].data().invitedUser);
                                _context2.prev = 3;

                                _iterator.s();

                              case 5:
                                if ((_step = _iterator.n()).done) {
                                  _context2.next = 13;
                                  break;
                                }

                                ele = _step.value;
                                _context2.next = 9;
                                return this.getUser(ele);

                              case 9:
                                user = _context2.sent;

                                // console.log(user);
                                if (user.docs[0]) {
                                  console.log(user.docs[0].data());
                                  this.viewers.push(user.docs[0].data());
                                }

                              case 11:
                                _context2.next = 5;
                                break;

                              case 13:
                                _context2.next = 18;
                                break;

                              case 15:
                                _context2.prev = 15;
                                _context2.t0 = _context2["catch"](3);

                                _iterator.e(_context2.t0);

                              case 18:
                                _context2.prev = 18;

                                _iterator.f();

                                return _context2.finish(18);

                              case 21:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this, [[3, 15, 18, 21]]);
                      }));
                    });
                    return _context3.abrupt("return", this.showPoint);

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "copy",
        value: function copy() {
          this.clipboard.copy('https://fogtube.app.link/NwuabRc8Z5?ref=' + this.user);
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return this.firebaseService.getDataOfUser(id);
        }
      }]);

      return InviteFriendsPage;
    }();

    InviteFriendsPage.ctorParameters = function () {
      return [{
        type: src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"]
      }];
    };

    InviteFriendsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-invite-friends',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./invite-friends.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/invite-friends/invite-friends.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./invite-friends.page.scss */
      "./src/app/invite-friends/invite-friends.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"]])], InviteFriendsPage);
    /***/
  }
}]);
//# sourceMappingURL=invite-friends-invite-friends-module-es5.js.map