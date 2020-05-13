function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-comp-create-comp-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/create-comp/create-comp.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-comp/create-comp.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreateCompCreateCompPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>{{ 'Create Compaign' | translate}}\n        <strong>{{showPoint}}</strong>\n\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!video\">\n    <!-- <label>{{ 'video links' | translate}}</label>\n     -->\n    <ion-item>\n      <ion-input #videoEl placeholder=\"Add Link\"></ion-input>\n      <button class=\"submit\" (click)=\"getVideo(videoEl)\">\n          {{ 'Add' | translate}}\n        </button>\n    </ion-item>\n\n    \n  </div>\n\n  <div *ngIf=\"video\">\n    <ion-card>\n   \n        <youtube-player \n        [videoId]=\"videoId\"\n        suggestedQuality=\"medium\"\n        [height]=\"150\"\n        [width]=\"350\"\n        (ready)=\"changeStatus($event)\"\n        > \n        <!-- [endSeconds]=\"60\" -->\n      </youtube-player>\n    </ion-card>\n    <label class=\"header\"> {{ 'Order Settings' | translate}}</label>\n    <hr>\n    <form>\n\n\n\n      <ion-item lines=\"none\" >\n        <label>{{ 'Number Of views' | translate}}</label>\n\n        <!-- *ngFor=\"let item of numberOfSubscribers; index as i;\" -->\n        <ion-select ([ngModel])=\"view\"\n         (ionChange)=\" Onview($event)\" placeholder=\"10\" >\n      <div *ngFor=\"let view of Views\">\n         \n          <ion-select-option value={{view}}>{{view}}</ion-select-option>\n      </div>\n          \n        </ion-select>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <label>{{ 'Time requird (second)' | translate}}</label>\n\n        <!-- *ngFor=\"let item of numberOfSubscribers; index as i;\" -->\n        <ion-select ([ngModel])=\"sec\" (ionChange)=\" Onsec($event)\" placeholder=\"45\">\n            <div *ngFor=\"let second of seconds\">\n                \n                 <ion-select-option value={{second}}>{{second}}</ion-select-option>\n             </div>\n        </ion-select>\n      </ion-item>\n      <hr>\n      <ion-item lines=\"none\">\n        <label>{{ 'Vip account (reduce 10%)' | translate}}</label>\n\n        <button style=\"width:70px;font-size: 12px\">\n\n          {{ 'Upgrade' | translate}}\n        </button>\n\n      </ion-item>\n\n      <ion-item lines=\"none\" style=\"color:#4458ba; font-style: bold; font-size: 18px;\">\n        <label>{{ 'Total coins' | translate}}</label>\n\n        <button style=\"color:#4458ba ;font-style: bold; width:70px\">\n          {{point}}\n\n        </button>\n\n      </ion-item>\n<hr>\n      <button class=\"done\" (click)=\"createComp()\">\n        {{ 'Done' | translate}}\n\n      </button>\n    </form>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/create-comp/create-comp-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/create-comp/create-comp-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CreateCompPageRoutingModule */

  /***/
  function srcAppCreateCompCreateCompRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateCompPageRoutingModule", function () {
      return CreateCompPageRoutingModule;
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


    var _create_comp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-comp.page */
    "./src/app/create-comp/create-comp.page.ts");

    var routes = [{
      path: '',
      component: _create_comp_page__WEBPACK_IMPORTED_MODULE_3__["CreateCompPage"]
    }];

    var CreateCompPageRoutingModule = function CreateCompPageRoutingModule() {
      _classCallCheck(this, CreateCompPageRoutingModule);
    };

    CreateCompPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CreateCompPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/create-comp/create-comp.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/create-comp/create-comp.module.ts ***!
    \***************************************************/

  /*! exports provided: CreateCompPageModule */

  /***/
  function srcAppCreateCompCreateCompModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateCompPageModule", function () {
      return CreateCompPageModule;
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


    var _create_comp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create-comp-routing.module */
    "./src/app/create-comp/create-comp-routing.module.ts");
    /* harmony import */


    var _create_comp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-comp.page */
    "./src/app/create-comp/create-comp.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/youtube-player */
    "./node_modules/@angular/youtube-player/fesm2015/youtube-player.js");

    var CreateCompPageModule = function CreateCompPageModule() {
      _classCallCheck(this, CreateCompPageModule);
    };

    CreateCompPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_8__["YouTubePlayerModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_comp_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateCompPageRoutingModule"]],
      declarations: [_create_comp_page__WEBPACK_IMPORTED_MODULE_6__["CreateCompPage"]]
    })], CreateCompPageModule);
    /***/
  },

  /***/
  "./src/app/create-comp/create-comp.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/create-comp/create-comp.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreateCompCreateCompPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "hr {\n  border-top: 1.5px solid #A2A2A2;\n  width: 90%;\n  margin-right: 5%;\n  margin-left: 5%;\n}\n\nion-card {\n  height: 25%;\n  width: 90%;\n  margin-right: 5%;\n  margin-left: 5%;\n}\n\nlabel {\n  width: 70%;\n}\n\n.header {\n  width: 90%;\n  margin-right: 5%;\n  margin-left: 5%;\n  margin-top: 10%;\n}\n\ninput {\n  width: 35%;\n  float: right;\n  margin-right: 5px;\n  margin-left: 5px;\n  padding: 5px;\n  border-radius: 10%;\n}\n\nion-select-option {\n  width: 10%;\n}\n\nbutton {\n  padding: 10px;\n  float: right;\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #696C6B;\n}\n\n.submit {\n  width: 20%;\n  color: #FFFFFF;\n  float: left;\n  margin-right: 3px;\n  margin-left: 3px;\n  font-style: bold;\n  text-transform: uppercase;\n  font-size: 12px;\n  background: #fd4081;\n  border-radius: 5%;\n}\n\nion-select {\n  display: inline;\n  width: 70px;\n  height: 40px;\n  color: #696C6B;\n  background: #D0D0D0;\n  margin-left: 3%;\n}\n\n.done {\n  text-transform: uppercase;\n  width: 90%;\n  margin-left: 5%;\n  margin-right: 5%;\n  color: black;\n}\n\nstrong {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZGVyL0RvY3VtZW50cy90dWJlLWFwcC90dXBlL3NyYy9hcHAvY3JlYXRlLWNvbXAvY3JlYXRlLWNvbXAucGFnZS5zY3NzIiwic3JjL2FwcC9jcmVhdGUtY29tcC9jcmVhdGUtY29tcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURFRTtFQUNJLFdBQUE7RUFDRixVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDSSxVQUFBO0FDQ047O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxVQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDS0o7O0FERkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDS0o7O0FESEE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDTUo7O0FESkE7RUFDSSxZQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtY29tcC9jcmVhdGUtY29tcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmhyIHtcbiAgICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCAjQTJBMkEyO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cbiAgaW9uLWNhcmR7XG4gICAgICBoZWlnaHQ6IDI1JTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgLy8gcG9pbnRlci1ldmVudHM6IG5vbmUgLy9UaGlzIGxpbmUgaXMgdGhlIGtleSFcbiAgfVxuICBsYWJlbHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gIH1cbi5oZWFkZXJ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG5pbnB1dCB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgIC8vIGJhY2tncm91bmQ6ICNkNmQ4ZDc7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cbmlvbi1zZWxlY3Qtb3B0aW9ue1xuICAgIHdpZHRoOiAxMCU7XG59XG5idXR0b257XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjNjk2QzZCO1xufVxuLnN1Ym1pdHtcbiAgICB3aWR0aDogMjAlOyBcbiAgICBjb2xvcjojRkZGRkZGO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmQ0MDgxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlXG59XG5cbmlvbi1zZWxlY3R7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOjcwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGNvbG9yOiAjNjk2QzZCO1xuICAgIGJhY2tncm91bmQ6ICNEMEQwRDA7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xufVxuLmRvbmV7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbnN0cm9uZ3tcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH0iLCJociB7XG4gIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkICNBMkEyQTI7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuaW9uLWNhcmQge1xuICBoZWlnaHQ6IDI1JTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG5sYWJlbCB7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5oZWFkZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMzUlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxuaW9uLXNlbGVjdC1vcHRpb24ge1xuICB3aWR0aDogMTAlO1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjNjk2QzZCO1xufVxuXG4uc3VibWl0IHtcbiAgd2lkdGg6IDIwJTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgZm9udC1zdHlsZTogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmQ0MDgxO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICM2OTZDNkI7XG4gIGJhY2tncm91bmQ6ICNEMEQwRDA7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbn1cblxuLmRvbmUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuc3Ryb25nIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/create-comp/create-comp.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/create-comp/create-comp.page.ts ***!
    \*************************************************/

  /*! exports provided: CreateCompPage */

  /***/
  function srcAppCreateCompCreateCompPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateCompPage", function () {
      return CreateCompPage;
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


    var src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/firebase/firebase.service */
    "./src/app/firebase/firebase.service.ts");
    /* harmony import */


    var src_app_firebase_campings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/firebase/campings.service */
    "./src/app/firebase/campings.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_firebase_setting_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/firebase/setting.service */
    "./src/app/firebase/setting.service.ts");

    var CreateCompPage = /*#__PURE__*/function () {
      function CreateCompPage(firebaseService, alertController, datePipe, comp, router, storage, route, translate, firebase, setting) {
        _classCallCheck(this, CreateCompPage);

        this.firebaseService = firebaseService;
        this.alertController = alertController;
        this.datePipe = datePipe;
        this.comp = comp;
        this.router = router;
        this.storage = storage;
        this.route = route;
        this.translate = translate;
        this.firebase = firebase;
        this.setting = setting;
        this.Views = [10, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000];
        this.seconds = [45, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 570, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000, 3300, 3600];
        this.likes = 10;
        this.Subscribe = 10;
        this.view = 10;
        this.sec = 45;
        this.point = this.view * this.sec;
        this.status = false;
      }

      _createClass(CreateCompPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var tag, user;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.getPoint();
                    this.router.queryParamMap.subscribe(function (res) {
                      _this.type = res.get('type');
                    });
                    tag = document.createElement('script');
                    tag.src = 'https://www.youtube.com/iframe_api';
                    document.body.appendChild(tag);
                    _context.next = 7;
                    return this.storage.get('User');

                  case 7:
                    user = _context.sent;
                    _context.next = 10;
                    return this.firebaseService.getDataOfUser(user);

                  case 10:
                    this.user = _context.sent.docs[0].data();
                    console.log(this.user);

                  case 12:
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
          var _this2 = this;

          this.firebaseService.getDataOfUser(this.user).then(function (point) {
            _this2.showPoint = point.docs[0].data().point;
          });
          return this.showPoint;
        }
      }, {
        key: "getVideo",
        value: function getVideo(video) {
          if (/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})?$/.test(video.el.value)) {
            this.video = video.el.value;
            var scrubbed = this.video.slice(this.video.indexOf('=') + 1);

            if (this.video.search('=') == -1) {
              scrubbed = this.video.slice(this.video.indexOf('be/') + 3);
            } // abc 123 Howdy


            this.videoId = scrubbed;
            console.log('video is ', scrubbed);
          } else {
            var title = this.translate.instant('please add a youtube url');
            this.presentAlert(title);
          }
        }
      }, {
        key: "Onlikes",
        value: function Onlikes(event) {
          this.likes = event.target.value; //  console.log('selecte is ', event.target.value)
        }
      }, {
        key: "OnSubscribe",
        value: function OnSubscribe(event) {
          this.Subscribe = event.target.value; //  console.log('selecte is ', event.target.value)
        }
      }, {
        key: "Onview",
        value: function Onview(event) {
          this.view = event.target.value;
          this.point = this.view * this.sec; //  console.log('selecte is ', event.target.value)
        }
      }, {
        key: "Onsec",
        value: function Onsec(event) {
          this.sec = event.target.value;
          this.point = this.view * this.sec; //  console.log('selecte is ', event.target.value)
        }
      }, {
        key: "createComp",
        value: function createComp() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var title, _title, user, status, _title2;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(this.duration < this.sec)) {
                      _context4.next = 4;
                      break;
                    }

                    title = this.translate.instant("You must choose valid duration");
                    this.presentAlert(title);
                    return _context4.abrupt("return");

                  case 4:
                    if (!(this.status == true)) {
                      _context4.next = 17;
                      break;
                    }

                    if (!(this.user.point < this.point)) {
                      _context4.next = 9;
                      break;
                    }

                    _title = this.translate.instant("You don't have enough points");
                    this.presentAlert(_title);
                    return _context4.abrupt("return");

                  case 9:
                    _context4.next = 11;
                    return this.storage.get('User');

                  case 11:
                    user = _context4.sent;
                    this.camping = {
                      view: this.view,
                      type: 'view',
                      ListOfUserDoneIt: [],
                      second: this.sec,
                      point: this.point,
                      videoUrl: this.videoId,
                      createdData: Date.now(),
                      ownerId: user
                    };
                    this.firebase.getDataOfUser(user).then(function (status) {
                      if (status.docs[0].data().vip) {
                        status = status.docs[0].data().vip.status;
                        console.log('status', status);

                        if (status) {
                          _this3.setting.getsettingsList(function (res) {
                            return res;
                          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
                            return changes.map(function (c) {
                              return Object.assign({
                                key: c.payload.key
                              }, c.payload.val());
                            });
                          })).subscribe(function (res) {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                              var discountVip;
                              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                  switch (_context2.prev = _context2.next) {
                                    case 0:
                                      discountVip = 1 - (res[res.length - 1].discountVip / 100 + res[res.length - 1].discountAll / 100);
                                      console.log('discount vip', discountVip);
                                      this.UpdateUSerPoints(-(this.point * discountVip));

                                    case 3:
                                    case "end":
                                      return _context2.stop();
                                  }
                                }
                              }, _callee2, this);
                            }));
                          });
                        }

                        if (!status) {
                          _this3.setting.getsettingsList(function (res) {
                            return res;
                          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
                            return changes.map(function (c) {
                              return Object.assign({
                                key: c.payload.key
                              }, c.payload.val());
                            });
                          })).subscribe(function (res) {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                              var discount;
                              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      discount = 1 - res[res.length - 1].discountAll / 100;
                                      console.log('discount', discount);

                                      if (discount < 1) {
                                        this.UpdateUSerPoints(-(this.point * discount));
                                      } else {
                                        this.UpdateUSerPoints(-this.point);
                                      }

                                    case 3:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              }, _callee3, this);
                            }));
                          });
                        }
                      } else {
                        _this3.UpdateUSerPoints(-_this3.point);
                      }
                    }); //  

                    this.route.navigate(['']);
                    _context4.next = 19;
                    break;

                  case 17:
                    _title2 = this.translate.instant('please play your video');
                    this.presentAlert(_title2);

                  case 19:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "changeStatus",
        value: function changeStatus($event) {
          var _this4 = this;

          this.duration = $event.target.playerInfo.duration;
          setInterval(function () {
            if (_this4.status == false) {
              if ($event.target.playerInfo.currentTime > 0) {
                console.log('event is', $event.target.playerInfo.currentTime);
                _this4.status = true;
              }
            }
          }, 1000);
        }
      }, {
        key: "UpdateUSerPoints",
        value: function UpdateUSerPoints(points) {
          var _this5 = this;

          var lenOfComp;
          console.log('updatePoint', points);
          var user = this.firebaseService.getDataOfUser(this.user.uid).then(function (e) {
            console.log('user before edit', e.docs[0].data());
            var UserEdited = Object.assign({}, e.docs[0].data(), {
              point: e.docs[0].data().point + points
            });
            console.log('user Edit', UserEdited);

            _this5.firebaseService.updateUser(UserEdited);

            _this5.comp.createcamping(_this5.camping);

            var title = _this5.translate.instant('Added success');

            _this5.presentAlert(title);
          });
          this.comp.getcampingsList(function (res) {
            return res.orderByChild('ownerId').equalTo(_this5.user.uid);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (c) {
              return Object.assign({
                key: c.payload.key
              }, c.payload.val());
            });
          })).subscribe(function (e) {
            lenOfComp = e.length;

            if (lenOfComp == 5) {
              var title = _this5.translate.instant('You have maximum Of compaign');

              _this5.presentAlert(title);
            }
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(title) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      // subHeader: 'Subtitle',
                      message: title,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return CreateCompPage;
    }();

    CreateCompPage.ctorParameters = function () {
      return [{
        type: src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
      }, {
        type: src_app_firebase_campings_service__WEBPACK_IMPORTED_MODULE_3__["CampingsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
      }, {
        type: src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: src_app_firebase_setting_service__WEBPACK_IMPORTED_MODULE_10__["SettingService"]
      }];
    };

    CreateCompPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-comp',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-comp.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/create-comp/create-comp.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-comp.page.scss */
      "./src/app/create-comp/create-comp.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], src_app_firebase_campings_service__WEBPACK_IMPORTED_MODULE_3__["CampingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], src_app_firebase_setting_service__WEBPACK_IMPORTED_MODULE_10__["SettingService"]])], CreateCompPage);
    /***/
  }
}]);
//# sourceMappingURL=create-comp-create-comp-module-es5.js.map