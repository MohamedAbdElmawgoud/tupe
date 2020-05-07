function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"tertiary\">\n    \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <!-- <p class=\"point\">{{points}}</p> -->\n    \n    <ion-title>{{ 'Fog tube' | translate}}\n\n        <strong>{{showPoint}}</strong>\n    </ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" dir=\"ltr\">\n  <!-- <div *ngFor=\"let data of createdDate\">\n  {{data  | date:'yyyy-MM-dd'}}\n  </div> -->\n  \n  \n  <div > \n<ion-card  *ngFor=\"let data of compaignValue; index as i\" >\n  <ion-card-title (click)=\"getDetailsOfComp(data)\">\n      \n    <img src=\"{{data.image}}\" >\n    <p class=\"view\" style=\"display:flex\">\n       \n       <strong> {{data.viewStat}} </strong> <strong>{{ 'view' | translate}}</strong>\n        <ion-icon name=\"checkmark-circle\" class=\"mark\"></ion-icon> \n       </p>\n      \n       <hr>\n</ion-card-title>\n</ion-card>\n\n<ion-card *ngFor=\"let data of compaignView; index as i\">\n  <ion-card-title (click)=\"getDetailsOfComp(data)\">\n\n    <img src=\"{{data.image}}\" >\n    <p class=\"view\" style=\"display:flex\">\n\n       <strong> {{data.viewStat}} </strong> <strong>{{ 'view' | translate}}</strong>\n        <ion-icon name=\"checkmark-circle\" class=\"mark\"></ion-icon> \n       </p>\n\n     <hr>\n  </ion-card-title>\n  </ion-card>\n  </div>\n  <div *ngIf=\"!compaignValue\">\n  <ion-icon name=\"home\" class=\"icon\"></ion-icon>\n    <p>{{ 'There is no campaign' | translate}}</p>\n  \n</div>\n<button (click)=\"createCompinge()\">\n    <ion-icon name=\"add\"></ion-icon>\n</button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/fesm2015/angular-fire.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/admob-pro/ngx */
    "./node_modules/@ionic-native/admob-pro/ngx/index.js");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], // CreateCompPageModule,
      _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["config"]), _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
      }])],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]],
      providers: [_ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_11__["AdMobPro"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.icon {\n  text-align: center;\n  font-size: 40px;\n  margin-top: 200px;\n  margin-right: 45%;\n  margin-left: 45%;\n}\n\nbutton {\n  float: left;\n  background: #fd4081;\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  margin-top: 30%;\n  margin-left: 40px;\n  margin-right: 40px;\n  color: white;\n  font-size: 25px;\n  font-style: bold;\n}\n\np {\n  text-align: center;\n  font-size: 12px;\n}\n\n.logIn {\n  width: 80px;\n  height: 80px;\n}\n\n.point {\n  display: inline;\n  margin-left: 80%;\n}\n\nion-card {\n  height: 100px;\n}\n\nimg {\n  width: 80px;\n  height: 80px;\n  float: left;\n  margin-left: 75%;\n  margin-top: -8%;\n  position: absolute;\n}\n\n.view {\n  text-align: left;\n  margin-left: 46%;\n  margin-top: 10%;\n  font-size: 15px;\n}\n\n.mark {\n  color: #2BC568;\n  font-size: 15px;\n  margin-top: 2%;\n  margin-right: 17%;\n  margin-left: 2%;\n}\n\nhr {\n  border-top: 4px solid #fd4081;\n  width: 58%;\n  margin-right: 18%;\n  margin-left: 13%;\n}\n\n.flex {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\nstrong {\n  float: right;\n  margin-right: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZGVyL0RvY3VtZW50cy90dWJlLWFwcC90dXBlL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUVFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0dGOztBREFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0lGOztBREZBO0VBQ0UsYUFBQTtBQ0tGOztBREhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURIQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ01GOztBREhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDTUY7O0FESkE7RUFDRSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDT0Y7O0FETEE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUNRRjs7QURMQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ1FGIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cbi5pY29ue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG4gIG1hcmdpbi1yaWdodDogNDUlO1xuICBtYXJnaW4tbGVmdDogNDUlO1xufVxuYnV0dG9ue1xuICBcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmZDQwODE7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXRvcDogMzAlO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC1zdHlsZTogYm9sZDtcbn1cbnB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBcbn1cbi5sb2dJbntcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5wb2ludHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tbGVmdDogODAlO1xufVxuaW9uLWNhcmR7XG4gIGhlaWdodDogMTAwcHg7XG59XG5pbWd7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNzUlO1xuICBtYXJnaW4tdG9wOiAtOCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXG59XG4udmlld3tcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDQ2JTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC8vZGlzcGxheTogaW5saW5lO1xufVxuLm1hcmt7XG4gIGNvbG9yOiAjMkJDNTY4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tcmlnaHQ6IDE3JTtcbiAgbWFyZ2luLWxlZnQ6MiVcbn1cbmhyIHtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNmZDQwODE7XG4gIHdpZHRoOiA1OCU7XG4gIG1hcmdpbi1yaWdodDogMTglO1xuICBtYXJnaW4tbGVmdDogMTMlO1xufVxuLmZsZXh7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAvLyBtYXJnaW4tcmlnaHQ6IDQwJVxufVxuc3Ryb25ne1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMyU7XG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0NSU7XG4gIG1hcmdpbi1sZWZ0OiA0NSU7XG59XG5cbmJ1dHRvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZmQ0MDgxO1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IDMwJTtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG59XG5cbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmxvZ0luIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLnBvaW50IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tbGVmdDogODAlO1xufVxuXG5pb24tY2FyZCB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNzUlO1xuICBtYXJnaW4tdG9wOiAtOCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnZpZXcge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNDYlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm1hcmsge1xuICBjb2xvcjogIzJCQzU2ODtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNyU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuaHIge1xuICBib3JkZXItdG9wOiA0cHggc29saWQgI2ZkNDA4MTtcbiAgd2lkdGg6IDU4JTtcbiAgbWFyZ2luLXJpZ2h0OiAxOCU7XG4gIG1hcmdpbi1sZWZ0OiAxMyU7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG5zdHJvbmcge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMyU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab1/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/firebase/firebase.service */
    "./src/app/firebase/firebase.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_firebase_campings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/firebase/campings.service */
    "./src/app/firebase/campings.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _storageService_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../storageService/storage.service */
    "./src/app/storageService/storage.service.ts");
    /* harmony import */


    var _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/admob-pro/ngx */
    "./node_modules/@ionic-native/admob-pro/ngx/index.js");
    /* harmony import */


    var _firebase_subscripe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../firebase/subscripe */
    "./src/app/firebase/subscripe.ts");

    var Tab1Page = /*#__PURE__*/function () {
      function Tab1Page(platform, firebase, translate, campingsService, alertController, storage, admob, subscribes, router) {
        _classCallCheck(this, Tab1Page);

        this.platform = platform;
        this.firebase = firebase;
        this.translate = translate;
        this.campingsService = campingsService;
        this.alertController = alertController;
        this.storage = storage;
        this.admob = admob;
        this.subscribes = subscribes;
        this.router = router;
        this.compaignView = [];
        this.view = [];
        this.viewer = [];
        this.done = 0;
        this.createdDate = [];
        this.compaignValue = [];
        this.userProfile = null;
        this.compaign = false;
      }

      _createClass(Tab1Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var status;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.getPoint();
                    this.getUserId();
                    _context.next = 4;
                    return this.storage.getUserId();

                  case 4:
                    this.user = _context.sent;
                    status = false;
                    this.firebase.getDataOfUser(this.user).then(function (user) {
                      status = user.docs[0].data().vip.status;
                      console.log('vip is ', status);

                      if (status == false) {
                        _this.admob.createBanner({
                          adId: "ca-app-pub-3736449894948823/3846950634"
                        }).then(function () {
                          _this.admob.showBanner(_this.admob.AD_POSITION.BOTTOM_CENTER);
                        });
                      }
                    });

                  case 7:
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
        key: "googleSignin",
        value: function googleSignin() {
          this.firebase.googleSignin();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getCompinge();
          this.getPoint();
        }
      }, {
        key: "getCompinge",
        value: function getCompinge() {
          var _this3 = this;

          var done = 0;
          this.storage.getUserId().then(function (user) {
            if (!user) {
              console.log('go to logIn');

              _this3.router.navigate(['log-in']);
            } else {
              _this3.subscribes.getsubscribesList(function (res) {
                return res.orderByChild('ownerId').equalTo(user);
              }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (changes) {
                return changes.map(function (c) {
                  return Object.assign({
                    key: c.payload.key
                  }, c.payload.val());
                });
              })).subscribe(function (subscribes) {
                _this3.compaignValue = [];
                subscribes.forEach(function (ele) {
                  var views = "".concat(ele.view, "/").concat(ele.done ? ele.done.length : 0);
                  ele['viewStat'] = views;
                  ele['type'] = 'subscribe';
                  ele['image'] = ele.channel.channel.thumbnails["default"].url;

                  _this3.compaignValue.push(ele);
                });
                console.log(_this3.compaignValue);
              });

              _this3.campingsService.getcampingsList(function (res) {
                return res.orderByChild('ownerId').equalTo(user);
              }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (changes) {
                return changes.map(function (c) {
                  return Object.assign({
                    key: c.payload.key
                  }, c.payload.val());
                });
              })).subscribe(function (comp) {
                _this3.compaignView = [];
                comp.forEach(function (ele) {
                  var views = "".concat(ele.view, "/").concat(ele.done ? ele.done.length : 0);
                  ele['viewStat'] = views;

                  _this3.compaignView.push(ele);
                });
                console.log('compaignView is', _this3.compaignView);
              });
            } //return user;

          });
        }
      }, {
        key: "getDetailsOfComp",
        value: function getDetailsOfComp(createdate) {
          this.router.navigate(['details-campaign'], {
            queryParams: {
              data: createdate.key,
              type: createdate.type
            }
          });
        }
      }, {
        key: "getUserId",
        value: function getUserId() {}
      }, {
        key: "createCompinge",
        value: function createCompinge() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var status, alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.firebase.getDataOfUser(this.user).then(function (status) {
                      status = (status.docs[0].data().vip || {}).status;

                      if (status) {
                        console.log('status for vip', status);

                        if (_this4.compaignValue.length >= 20) {
                          var header = _this4.translate.instant('you have reached your limit');

                          _this4.presentAlert(header);

                          return;
                        } else {
                          if (_this4.compaignValue.length >= 5) {
                            var _header = _this4.translate.instant('you have reached your limit');

                            _this4.presentAlert(_header);

                            return;
                          }
                        }
                      }
                    });

                  case 2:
                    _context2.next = 4;
                    return this.alertController.create({
                      header: this.translate.instant('select the camping type'),
                      inputs: [{
                        name: 'view for you video',
                        type: 'radio',
                        label: this.translate.instant('view for your video'),
                        value: 'video'
                      }, {
                        name: 'radio6',
                        type: 'radio',
                        label: this.translate.instant('likes or subscribes'),
                        value: 'channel'
                      }],
                      buttons: [{
                        text: this.translate.instant("select")
                      }]
                    });

                  case 4:
                    alert = _context2.sent;
                    _context2.next = 7;
                    return alert.present();

                  case 7:
                    alert.onDidDismiss().then(function (e) {
                      if (e.data) {
                        if (e.data.values == 'channel') {
                          _this4.router.navigate(['create-subscripe'], {
                            queryParams: {
                              type: e.data.values
                            }
                          });
                        } else {
                          _this4.router.navigate(['create-comp'], {
                            queryParams: {
                              type: e.data.values
                            }
                          });
                        }
                      }
                    }); // this.presentModal();

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(title) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      // subHeader: 'Subtitle',
                      message: title,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context3.sent;
                    setTimeout(function () {
                      _this5.alertController.dismiss();
                    }, 3000);
                    _context3.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: src_app_firebase_campings_service__WEBPACK_IMPORTED_MODULE_6__["CampingsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _storageService_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
      }, {
        type: _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_9__["AdMobPro"]
      }, {
        type: _firebase_subscripe__WEBPACK_IMPORTED_MODULE_10__["subscribesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tab1/tab1.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], src_app_firebase_campings_service__WEBPACK_IMPORTED_MODULE_6__["CampingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _storageService_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"], _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_9__["AdMobPro"], _firebase_subscripe__WEBPACK_IMPORTED_MODULE_10__["subscribesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map