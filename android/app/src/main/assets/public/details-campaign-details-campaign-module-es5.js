function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-campaign-details-campaign-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/details-campaign/details-campaign.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-campaign/details-campaign.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailsCampaignDetailsCampaignPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'Details Campaign' | translate}}\n    <strong>{{showPoint}}</strong>\n  </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content dir=\"ltr\">\n  <ion-card>\n    <p>\n      {{ 'created Time' | translate}}\n    </p>\n    <h3>\n      {{compdata  | date:'yyyy-MM-dd'}}\n\n    </h3>\n    <h2>\n      <ion-icon name=\"checkmark-circle\" class=\"mark\"></ion-icon>\n      {{view}}/{{done}} {{ 'view' | translate}}\n\n    </h2>\n    <hr>\n\n  </ion-card>\n\n  <h5>{{ 'list of people watched your video' | translate}}</h5>\n  <div *ngFor=\"let user of viewers\">\n\n    <h4> {{user.displayName}}\n    </h4>\n    <img src=\"{{user.photoURL || 'https://fogtube.store/profile.svg'}}\">\n\n  </div>\n\n\n<button (click)=\"deleteComp()\"> delete</button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/details-campaign/details-campaign-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/details-campaign/details-campaign-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: DetailsCampaignPageRoutingModule */

  /***/
  function srcAppDetailsCampaignDetailsCampaignRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsCampaignPageRoutingModule", function () {
      return DetailsCampaignPageRoutingModule;
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


    var _details_campaign_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./details-campaign.page */
    "./src/app/details-campaign/details-campaign.page.ts");

    var routes = [{
      path: '',
      component: _details_campaign_page__WEBPACK_IMPORTED_MODULE_3__["DetailsCampaignPage"]
    }];

    var DetailsCampaignPageRoutingModule = function DetailsCampaignPageRoutingModule() {
      _classCallCheck(this, DetailsCampaignPageRoutingModule);
    };

    DetailsCampaignPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailsCampaignPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/details-campaign/details-campaign.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/details-campaign/details-campaign.module.ts ***!
    \*************************************************************/

  /*! exports provided: DetailsCampaignPageModule */

  /***/
  function srcAppDetailsCampaignDetailsCampaignModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsCampaignPageModule", function () {
      return DetailsCampaignPageModule;
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


    var _details_campaign_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details-campaign-routing.module */
    "./src/app/details-campaign/details-campaign-routing.module.ts");
    /* harmony import */


    var _details_campaign_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./details-campaign.page */
    "./src/app/details-campaign/details-campaign.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var DetailsCampaignPageModule = function DetailsCampaignPageModule() {
      _classCallCheck(this, DetailsCampaignPageModule);
    };

    DetailsCampaignPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _details_campaign_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsCampaignPageRoutingModule"]],
      declarations: [_details_campaign_page__WEBPACK_IMPORTED_MODULE_6__["DetailsCampaignPage"]]
    })], DetailsCampaignPageModule);
    /***/
  },

  /***/
  "./src/app/details-campaign/details-campaign.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/details-campaign/details-campaign.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailsCampaignDetailsCampaignPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  width: 60px;\n  height: 60px;\n  margin-left: 5%;\n}\n\nhr {\n  border-top: 4px solid #1C8646;\n  width: 90%;\n  margin-right: 5%;\n  margin-left: 5%;\n}\n\n.mark {\n  color: #2BC568;\n  font-size: 12px;\n  margin-top: 12%;\n}\n\nh3, h2 {\n  margin-left: 5%;\n  margin-right: 5%;\n  font-size: 12px;\n}\n\np {\n  margin-left: 5%;\n  font-size: 15px;\n}\n\nh2 {\n  margin-top: -10%;\n}\n\nh4 {\n  margin-left: 10px;\n  margin-right: 10px;\n  font-size: 15px;\n}\n\ndiv {\n  display: flex;\n  flex-direction: row-reverse;\n  width: 100%;\n  justify-content: flex-end;\n}\n\nh5 {\n  margin: 5%;\n}\n\nbutton {\n  text-transform: uppercase;\n  width: 90%;\n  margin-left: 5%;\n  margin-right: 5%;\n  color: black;\n  padding: 10px;\n}\n\nstrong {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZGVyL0RvY3VtZW50cy90dWJlLWFwcC90dXBlL3NyYy9hcHAvZGV0YWlscy1jYW1wYWlnbi9kZXRhaWxzLWNhbXBhaWduLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGV0YWlscy1jYW1wYWlnbi9kZXRhaWxzLWNhbXBhaWduLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBS0YsZUFBQTtBQ0pGOztBRE9BO0VBQ0ksNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSko7O0FETUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNISjs7QURNRTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNKTjs7QURNRTtFQUNFLGVBQUE7RUFFQSxlQUFBO0FDSko7O0FETUU7RUFDRSxnQkFBQTtBQ0hKOztBREtFO0VBRUksaUJBQUE7RUFDQSxrQkFBQTtFQUNELGVBQUE7QUNITDs7QURPRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0pKOztBRFdFO0VBQ0ksVUFBQTtBQ1JOOztBRFdFO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNSSjs7QURVQTtFQUNFLFlBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtY2FtcGFpZ24vZGV0YWlscy1jYW1wYWlnbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltZ3tcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIC8vICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgLy8gZmxvYXQ6IGxlZnQ7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC8vbWFyZ2luLXJpZ2h0OjgwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIFxufVxuaHIge1xuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMUM4NjQ2O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cbiAgLm1hcmt7XG4gICAgY29sb3I6ICMyQkM1Njg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDEyJTtcbiAgLy8gIG1hcmdpbi1yaWdodDogMTAlXG4gIH1cbiAgaDMgLCBoMntcbiAgICAvLyAgbWFyZ2luLXRvcDogLTEwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgcHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAvLyBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBoMntcbiAgICBtYXJnaW4tdG9wOiAtMTAlO1xuICB9XG4gIGg0e1xuICAgICAvLyBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBtYXJnaW4tbGVmdDogIDEwcHg7IFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAgICAgICAgICAgXG4gICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIC8vd2lkdGg6IDEwMCVcbiAgfVxuICBcbiAgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gIC8vICBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgLy8gICBtYXJnaW4tbGVmdDogNSU7XG4gICAvLyB3aWR0aDogODAlO1xuICAvLyAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgaDV7XG4gICAgICBtYXJnaW46IDUlO1xuICB9XG5cbiAgYnV0dG9ue1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbnN0cm9uZ3tcbiAgZmxvYXQ6IHJpZ2h0O1xufSIsImltZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuaHIge1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzFDODY0NjtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4ubWFyayB7XG4gIGNvbG9yOiAjMkJDNTY4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEyJTtcbn1cblxuaDMsIGgyIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbnAge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaDIge1xuICBtYXJnaW4tdG9wOiAtMTAlO1xufVxuXG5oNCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuaDUge1xuICBtYXJnaW46IDUlO1xufVxuXG5idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuc3Ryb25nIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/details-campaign/details-campaign.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/details-campaign/details-campaign.page.ts ***!
    \***********************************************************/

  /*! exports provided: DetailsCampaignPage */

  /***/
  function srcAppDetailsCampaignDetailsCampaignPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsCampaignPage", function () {
      return DetailsCampaignPage;
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


    var src_app_firebase_campings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/firebase/campings.service */
    "./src/app/firebase/campings.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/firebase/firebase.service */
    "./src/app/firebase/firebase.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _firebase_subscripe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../firebase/subscripe */
    "./src/app/firebase/subscripe.ts");

    var DetailsCampaignPage = /*#__PURE__*/function () {
      function DetailsCampaignPage(firebase, router, translate, alertController, campingsService, route, subscribes, storage) {
        _classCallCheck(this, DetailsCampaignPage);

        this.firebase = firebase;
        this.router = router;
        this.translate = translate;
        this.alertController = alertController;
        this.campingsService = campingsService;
        this.route = route;
        this.subscribes = subscribes;
        this.storage = storage;
        this.createdata = 1587206533125;
        this.photoUrl = 'https://lh3.googleusercontent.com/a-/AOh14Git2em9CyfYQAcZGc3EvPs189RFj551ZRkJvDXrjw';
        this.displayName = 'Nader Medhat';
        this.viewers = [];
      }

      _createClass(DetailsCampaignPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.storage.get('User');

                  case 2:
                    this.user = _context.sent;
                    this.getPoint();
                    this.data = this.route.queryParamMap.subscribe(function (v) {
                      _this.campId = v.get('data');
                      console.log(v.get('data'));
                      _this.type = v.get('type');

                      _this.getCompain(v.get('data'), v.get('type'));
                    });

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
          var _this2 = this;

          this.firebase.getDataOfUser(this.user).then(function (point) {
            _this2.showPoint = point.docs[0].data().point;
          });
          return this.showPoint;
        }
      }, {
        key: "getCompain",
        value: function getCompain(createdata, type) {
          var _this3 = this;

          if (type == 'subscribe') {
            this.subscribes.getsubscribesList(function (res) {
              return res.orderByChild('key');
            }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
              return changes.map(function (c) {
                return Object.assign({
                  key: c.payload.key
                }, c.payload.val());
              });
            })).subscribe(function (comp) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _iterator, _step, ele, user;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.compInfo = comp.filter(function (ele) {
                          return ele.key == createdata;
                        })[0];
                        this.campId = createdata;
                        this.getUser(this.compInfo.ownerId);
                        this.done = (this.compInfo.done || []).length;
                        this.compdata = this.compInfo.createdData;
                        this.key = this.compInfo.key;
                        this.view = this.compInfo.view; // comp[0].done.forEach( async (ele) => {

                        _iterator = _createForOfIteratorHelper(this.compInfo.done);
                        _context2.prev = 8;

                        _iterator.s();

                      case 10:
                        if ((_step = _iterator.n()).done) {
                          _context2.next = 19;
                          break;
                        }

                        ele = _step.value;
                        console.log(ele);
                        _context2.next = 15;
                        return this.getUser(ele);

                      case 15:
                        user = _context2.sent;

                        if (user.docs[0]) {
                          this.viewers.push(user.docs[0].data());
                        }

                      case 17:
                        _context2.next = 10;
                        break;

                      case 19:
                        _context2.next = 24;
                        break;

                      case 21:
                        _context2.prev = 21;
                        _context2.t0 = _context2["catch"](8);

                        _iterator.e(_context2.t0);

                      case 24:
                        _context2.prev = 24;

                        _iterator.f();

                        return _context2.finish(24);

                      case 27:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this, [[8, 21, 24, 27]]);
              }));
            });
          } else {
            this.campingsService.getcampingsList(function (res) {
              return res.orderByChild('key');
            }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
              return changes.map(function (c) {
                return Object.assign({
                  key: c.payload.key
                }, c.payload.val());
              });
            })).subscribe(function (comp) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _iterator2, _step2, ele, user;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        this.compInfo = comp.filter(function (ele) {
                          return ele.key == createdata;
                        })[0];
                        this.campId = createdata;
                        this.getUser(this.compInfo.ownerId);
                        this.done = (this.compInfo.done || []).length;
                        this.compdata = this.compInfo.createdData;
                        this.key = this.compInfo.key;
                        this.view = this.compInfo.view; // comp[0].done.forEach( async (ele) => {

                        _iterator2 = _createForOfIteratorHelper(comp[0].done);
                        _context3.prev = 8;

                        _iterator2.s();

                      case 10:
                        if ((_step2 = _iterator2.n()).done) {
                          _context3.next = 19;
                          break;
                        }

                        ele = _step2.value;
                        console.log(ele);
                        _context3.next = 15;
                        return this.getUser(ele);

                      case 15:
                        user = _context3.sent;

                        if (user.docs[0]) {
                          this.viewers.push(user.docs[0].data());
                        }

                      case 17:
                        _context3.next = 10;
                        break;

                      case 19:
                        _context3.next = 24;
                        break;

                      case 21:
                        _context3.prev = 21;
                        _context3.t0 = _context3["catch"](8);

                        _iterator2.e(_context3.t0);

                      case 24:
                        _context3.prev = 24;

                        _iterator2.f();

                        return _context3.finish(24);

                      case 27:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this, [[8, 21, 24, 27]]);
              }));
            });
          }
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return this.firebase.getDataOfUser(id);
        }
      }, {
        key: "deleteComp",
        value: function deleteComp() {
          if (this.type == 'subscribe') {
            this.subscribes.deleteSubscripe(this.campId);
          } else {
            this.campingsService.deletecamping(this.campId);
          }

          var text = this.translate.instant('compaign deleted');
          this.presentAlert(text);
          this.router.navigate(['']);
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(title) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      // subHeader: 'Subtitle',
                      message: title,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return DetailsCampaignPage;
    }();

    DetailsCampaignPage.ctorParameters = function () {
      return [{
        type: src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: src_app_firebase_campings_service__WEBPACK_IMPORTED_MODULE_3__["CampingsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _firebase_subscripe__WEBPACK_IMPORTED_MODULE_9__["subscribesService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }];
    };

    DetailsCampaignPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-details-campaign',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./details-campaign.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/details-campaign/details-campaign.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./details-campaign.page.scss */
      "./src/app/details-campaign/details-campaign.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], src_app_firebase_campings_service__WEBPACK_IMPORTED_MODULE_3__["CampingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _firebase_subscripe__WEBPACK_IMPORTED_MODULE_9__["subscribesService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])], DetailsCampaignPage);
    /***/
  }
}]);
//# sourceMappingURL=details-campaign-details-campaign-module-es5.js.map