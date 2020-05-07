function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["currency-currency-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/currency/currency.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/currency/currency.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCurrencyCurrencyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" >\n    <ion-toolbar color=\"tertiary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons> \n      <ion-title>{{ 'Fog tube' | translate}}\n            <strong id=\"point\" >{{showPoint}}</strong>\n      </ion-title>\n      \n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <!--  -->\n    <ion-card (click)=\"share()\">\n        <img src=\"assets\\icon\\share.png\">\n        <ion-card-title>  {{ 'invite friend' | translate}}</ion-card-title>\n        <br>\n        <p>{{ 'Earn 1000 point from your friends' | translate}}</p>\n    </ion-card>\n    \n\n    <ion-card (click)=\"ShowVideo()\">\n        <img src=\"assets\\icon\\play.png\">\n        <ion-card-title>{{ 'watch video' | translate}}</ion-card-title> \n        <br>\n        <p>{{ 'watch video to earn point' | translate}}</p>\n    </ion-card>\n\n\n    <ion-card (click)=\"buy()\">\n        <img src=\"assets\\icon\\cart.png\">\n        <ion-card-title>{{ 'buy points' | translate}}</ion-card-title>\n      \n    </ion-card>\n\n    <ion-card *ngIf=\"!invited\" (click)=\"redeem()\">\n      <ion-icon  style=\"color: #000; font-size: 30px; margin: 0 10px;\" name=\"cash-outline\"></ion-icon>\n            <ion-card-title>{{ 'invite points' | translate}}</ion-card-title>\n    \n  </ion-card>\n\n    \n    <ion-card (click)=\"subscribe()\">\n        <img src=\"assets\\icon\\play.png\">\n        <ion-card-title>{{ 'Review subscription' | translate}}</ion-card-title>\n        <br>\n        <p>{{ 'Review subscription to channels' | translate}}</p>\n    </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/currency/currency-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/currency/currency-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: CurrencyPageRoutingModule */

  /***/
  function srcAppCurrencyCurrencyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyPageRoutingModule", function () {
      return CurrencyPageRoutingModule;
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


    var _currency_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./currency.page */
    "./src/app/currency/currency.page.ts");

    var routes = [{
      path: '',
      component: _currency_page__WEBPACK_IMPORTED_MODULE_3__["CurrencyPage"]
    }];

    var CurrencyPageRoutingModule = function CurrencyPageRoutingModule() {
      _classCallCheck(this, CurrencyPageRoutingModule);
    };

    CurrencyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CurrencyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/currency/currency.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/currency/currency.module.ts ***!
    \*********************************************/

  /*! exports provided: CurrencyPageModule */

  /***/
  function srcAppCurrencyCurrencyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyPageModule", function () {
      return CurrencyPageModule;
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


    var _currency_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./currency-routing.module */
    "./src/app/currency/currency-routing.module.ts");
    /* harmony import */


    var _currency_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./currency.page */
    "./src/app/currency/currency.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/admob-pro/ngx */
    "./node_modules/@ionic-native/admob-pro/ngx/index.js");

    var CurrencyPageModule = function CurrencyPageModule() {
      _classCallCheck(this, CurrencyPageModule);
    };

    CurrencyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _currency_routing_module__WEBPACK_IMPORTED_MODULE_5__["CurrencyPageRoutingModule"]],
      declarations: [_currency_page__WEBPACK_IMPORTED_MODULE_6__["CurrencyPage"]],
      providers: [_ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_8__["AdMobPro"]]
    })], CurrencyPageModule);
    /***/
  },

  /***/
  "./src/app/currency/currency.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/currency/currency.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCurrencyCurrencyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  text-align: center;\n  font-size: 40px;\n}\n\nion-card {\n  padding: 10px;\n}\n\nimg {\n  width: 25px;\n  height: 25px;\n  display: inline;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\nion-card-title {\n  position: absolute;\n  display: inline;\n  margin-left: 10px;\n  color: #3f51b5;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\np {\n  display: inline;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n}\n\nstrong {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZGVyL0RvY3VtZW50cy90dWJlLWFwcC90dXBlL3NyYy9hcHAvY3VycmVuY3kvY3VycmVuY3kucGFnZS5zY3NzIiwic3JjL2FwcC9jdXJyZW5jeS9jdXJyZW5jeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFRTtFQUNJLGFBQUE7QUNDTjs7QURDRTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFTjs7QURBRTtFQUNJLGtCQUFBO0VBQ0YsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURFRTtFQUNFLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2N1cnJlbmN5L2N1cnJlbmN5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICBcbiAgfVxuICBpb24tY2FyZHtcbiAgICAgIHBhZGRpbmc6IDEwcHhcbiAgfVxuICBpbWd7XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIGlvbi1jYXJkLXRpdGxle1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjogIzNmNTFiNTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBcbiAgfVxuICBwe1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDsgXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgXG4gICAgXG4gICBcbiAgfVxuICBzdHJvbmd7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9IiwiaW9uLWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuaW9uLWNhcmQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5pbWcge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogIzNmNTFiNTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5wIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5zdHJvbmcge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/currency/currency.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/currency/currency.page.ts ***!
    \*******************************************/

  /*! exports provided: CurrencyPage */

  /***/
  function srcAppCurrencyCurrencyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyPage", function () {
      return CurrencyPage;
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


    var _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/admob-pro/ngx */
    "./node_modules/@ionic-native/admob-pro/ngx/index.js");
    /* harmony import */


    var _firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../firebase/firebase.service */
    "./src/app/firebase/firebase.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _firebase_invite_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../firebase/invite-service.service */
    "./src/app/firebase/invite-service.service.ts");

    var CurrencyPage = /*#__PURE__*/function () {
      function CurrencyPage(router, admob, storage, firebaseService, alertController, inviteServiceService) {
        _classCallCheck(this, CurrencyPage);

        this.router = router;
        this.admob = admob;
        this.storage = storage;
        this.firebaseService = firebaseService;
        this.alertController = alertController;
        this.inviteServiceService = inviteServiceService;
      }

      _createClass(CurrencyPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getPoint();
        }
      }, {
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
                    this.getPoint();

                  case 4:
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
          var _this = this;

          this.firebaseService.getDataOfUser(this.user).then(function (point) {
            _this.showPoint = point.docs[0].data().point;
            _this.invited = point.docs[0].data().invited; // console.log();
          });
          return this.showPoint;
        }
      }, {
        key: "share",
        value: function share() {
          this.router.navigate(['invite-friends']);
        }
      }, {
        key: "buy",
        value: function buy() {
          this.router.navigate(['buy-point']);
        }
      }, {
        key: "subscribe",
        value: function subscribe() {
          this.router.navigate(['subscription']);
        }
      }, {
        key: "ShowVideo",
        value: function ShowVideo() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var lastClick, passed;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.storage.get('last click');

                  case 2:
                    lastClick = _context3.sent;

                    if (lastClick) {
                      passed = (+new Date() - +new Date(lastClick)) / 1000;
                    } else {
                      passed = 3001;
                    }

                    if (!(passed >= 300)) {
                      _context3.next = 10;
                      break;
                    }

                    _context3.next = 7;
                    return this.storage.set('last click', new Date());

                  case 7:
                    this.admob.prepareRewardVideoAd({
                      adId: "ca-app-pub-3736449894948823/7211480575"
                    }).then(function () {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                this.admob.showRewardVideoAd();

                              case 1:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });
                    _context3.next = 11;
                    break;

                  case 10:
                    alert('you must wait ' + (300 - passed).toFixed(0) + ' second to try agian');

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "redeem",
        value: function redeem() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: 'Redeem you prize ',
                      inputs: [{
                        type: 'text',
                        placeholder: 'Add your invite links'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Ok',
                        handler: function handler() {
                          console.log('Confirm Ok');
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    alert.onDidDismiss().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        var ref;
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                if (!data.data.values["0"]) {
                                  _context4.next = 6;
                                  break;
                                }

                                ref = data.data.values["0"];
                                _context4.next = 4;
                                return this.inviteServiceService.inviteWithRef(ref);

                              case 4:
                                _context4.next = 6;
                                break;

                              case 6:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    });
                    _context5.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return CurrencyPage;
    }();

    CurrencyPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_3__["AdMobPro"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _firebase_invite_service_service__WEBPACK_IMPORTED_MODULE_7__["InviteServiceService"]
      }];
    };

    CurrencyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-currency',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./currency.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/currency/currency.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./currency.page.scss */
      "./src/app/currency/currency.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_3__["AdMobPro"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _firebase_invite_service_service__WEBPACK_IMPORTED_MODULE_7__["InviteServiceService"]])], CurrencyPage);
    /***/
  },

  /***/
  "./src/app/firebase/invite-service.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/firebase/invite-service.service.ts ***!
    \****************************************************/

  /*! exports provided: InviteServiceService */

  /***/
  function srcAppFirebaseInviteServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InviteServiceService", function () {
      return InviteServiceService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var InviteServiceService = /*#__PURE__*/function () {
      function InviteServiceService(firebaseService, alertController, storage) {
        _classCallCheck(this, InviteServiceService);

        this.firebaseService = firebaseService;
        this.alertController = alertController;
        this.storage = storage;
      }

      _createClass(InviteServiceService, [{
        key: "inviteWithRef",
        value: function inviteWithRef(ref) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            var userId;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    ref = ref.split('ref=')[1] || ref; // if(!ref)

                    _context6.next = 3;
                    return this.storage.get('User');

                  case 3:
                    userId = _context6.sent;

                    if (ref == userId) {
                      this.presentAlert('you can\'t invite your self ');
                    } else {
                      this.firebaseService.getDataOfUser(userId).then(function (e) {
                        var user = e.docs[0].data();

                        var _UserEdited = Object.assign({}, user, {
                          point: e.docs[0].data().point + 1000,
                          invited: true
                        });

                        if (user) {
                          _this4.firebaseService.getDataOfUser(ref).then(function (e) {
                            if (e.docs[0].data().uid == ref) {
                              var _user = e.docs[0].data();

                              _user.invitedUser = _user.invitedUser ? _user.invitedUser : [];

                              _user.invitedUser.push(userId);

                              var UserEdited = Object.assign({}, _user, {
                                point: e.docs[0].data().point + 1000
                              });

                              _this4.firebaseService.updateUser(UserEdited);

                              _this4.firebaseService.updateUser(_UserEdited);

                              _this4.presentAlert('you have got 1000 point');
                            } else {
                              _this4.presentAlert('code is wrong');
                            }
                          });
                        }
                      });
                    }

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(title) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      message: title
                    });

                  case 2:
                    alert = _context7.sent;
                    _context7.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return InviteServiceService;
    }();

    InviteServiceService.ctorParameters = function () {
      return [{
        type: _firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    InviteServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])], InviteServiceService);
    /***/
  }
}]);
//# sourceMappingURL=currency-currency-module-es5.js.map