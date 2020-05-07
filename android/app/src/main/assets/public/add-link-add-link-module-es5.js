function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-link-add-link-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-link/add-link.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-link/add-link.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddLinkAddLinkPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>addLink</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    \n  \n<input type=\"text\" placeholder=\"link\">\n<ion-button >add</ion-button> \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/add-link/add-link-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/add-link/add-link-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AddLinkPageRoutingModule */

  /***/
  function srcAppAddLinkAddLinkRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddLinkPageRoutingModule", function () {
      return AddLinkPageRoutingModule;
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


    var _add_link_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-link.page */
    "./src/app/add-link/add-link.page.ts");

    var routes = [{
      path: '',
      component: _add_link_page__WEBPACK_IMPORTED_MODULE_3__["AddLinkPage"]
    }];

    var AddLinkPageRoutingModule = function AddLinkPageRoutingModule() {
      _classCallCheck(this, AddLinkPageRoutingModule);
    };

    AddLinkPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddLinkPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-link/add-link.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/add-link/add-link.module.ts ***!
    \*********************************************/

  /*! exports provided: AddLinkPageModule */

  /***/
  function srcAppAddLinkAddLinkModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddLinkPageModule", function () {
      return AddLinkPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _add_link_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-link-routing.module */
    "./src/app/add-link/add-link-routing.module.ts");
    /* harmony import */


    var _add_link_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-link.page */
    "./src/app/add-link/add-link.page.ts");
    /* harmony import */


    var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/youtube-player */
    "./node_modules/@angular/youtube-player/fesm2015/youtube-player.js");

    var AddLinkPageModule = function AddLinkPageModule() {
      _classCallCheck(this, AddLinkPageModule);
    };

    AddLinkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_7__["YouTubePlayerModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_link_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddLinkPageRoutingModule"]],
      declarations: [_add_link_page__WEBPACK_IMPORTED_MODULE_6__["AddLinkPage"]]
    })], AddLinkPageModule);
    /***/
  },

  /***/
  "./src/app/add-link/add-link.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/add-link/add-link.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddLinkAddLinkPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1saW5rL2FkZC1saW5rLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/add-link/add-link.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/add-link/add-link.page.ts ***!
    \*******************************************/

  /*! exports provided: AddLinkPage */

  /***/
  function srcAppAddLinkAddLinkPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddLinkPage", function () {
      return AddLinkPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddLinkPage = /*#__PURE__*/function () {
      function AddLinkPage() {
        _classCallCheck(this, AddLinkPage);
      }

      _createClass(AddLinkPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var tag = document.createElement('script');
          tag.src = 'https://www.youtube.com/iframe_api';
          document.body.appendChild(tag);
        }
      }]);

      return AddLinkPage;
    }();

    AddLinkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-link',
      // template: '<youtube-player videoId="dQw4w9WgXcQ"></youtube-player>',  
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-link.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-link/add-link.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-link.page.scss */
      "./src/app/add-link/add-link.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AddLinkPage);
    /***/
  }
}]);
//# sourceMappingURL=add-link-add-link-module-es5.js.map