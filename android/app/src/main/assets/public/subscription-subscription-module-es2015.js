(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscription-subscription-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subscription/subscription.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscription/subscription.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>{{ 'subscribe' | translate}}\n\n      <strong>{{showPoint}}</strong>\n    </ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-back-button ></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-item lines=\"none\">\n    <ion-icon name=\"checkmark-circle\"></ion-icon>    \n   <p> 0 {{ 'channel' | translate}}</p>\n  </ion-item> -->\n  <hr>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/subscription/subscription-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/subscription/subscription-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SubscriptionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPageRoutingModule", function() { return SubscriptionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _subscription_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription.page */ "./src/app/subscription/subscription.page.ts");




const routes = [
    {
        path: '',
        component: _subscription_page__WEBPACK_IMPORTED_MODULE_3__["SubscriptionPage"]
    }
];
let SubscriptionPageRoutingModule = class SubscriptionPageRoutingModule {
};
SubscriptionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubscriptionPageRoutingModule);



/***/ }),

/***/ "./src/app/subscription/subscription.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/subscription/subscription.module.ts ***!
  \*****************************************************/
/*! exports provided: SubscriptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPageModule", function() { return SubscriptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _subscription_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription-routing.module */ "./src/app/subscription/subscription-routing.module.ts");
/* harmony import */ var _subscription_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscription.page */ "./src/app/subscription/subscription.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let SubscriptionPageModule = class SubscriptionPageModule {
};
SubscriptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subscription_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscriptionPageRoutingModule"]
        ],
        declarations: [_subscription_page__WEBPACK_IMPORTED_MODULE_6__["SubscriptionPage"]]
    })
], SubscriptionPageModule);



/***/ }),

/***/ "./src/app/subscription/subscription.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/subscription/subscription.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vl {\n  border-left: 2px solid #C6C6C6;\n  height: 40px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.left {\n  width: 230px;\n  float: left;\n  text-align: center;\n}\n\n.right {\n  width: 230px;\n  float: right;\n  text-align: center;\n}\n\n.main {\n  font-size: 20px;\n  text-align: center;\n  margin-top: 30%;\n}\n\nhr {\n  border-top: 4px solid #fd4081;\n  width: 90%;\n  margin-right: 5%;\n  margin-left: 5%;\n}\n\np {\n  margin-right: 10px;\n  margin-left: 10px;\n  display: absolute;\n}\n\nion-icon {\n  color: #2BC568;\n  font-size: 18px;\n}\n\nstrong {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZGVyL0RvY3VtZW50cy90dWJlLWFwcC90dXBlL3NyYy9hcHAvc3Vic2NyaXB0aW9uL3N1YnNjcmlwdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0VBR0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREtBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBSVEsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0xSOztBRE9FO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSko7O0FEUUU7RUFFRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURRQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDTEo7O0FET0E7RUFDSSxZQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9zdWJzY3JpcHRpb24vc3Vic2NyaXB0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52bCB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjQzZDNkM2O1xuICAgIGhlaWdodDogNDBweDtcbiAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvL2xlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgLy8gdG9wOiAwO1xuICB9XG4gIC5sZWZ0e1xuICAgIHdpZHRoOjIzMHB4O1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDE1cHg7IFxuICAgIFxuICAgIH1cbi5yaWdodHtcbiAgICB3aWR0aDoyMzBweDtcbiAgICBmbG9hdDpyaWdodDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAvL21hcmdpbi1yaWdodDogMTVweDsgXG4gICAgfVxuLm1haW57XG4gICAgICAgIC8vIHdpZHRoOjkwJTtcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMzAlO1xuICB9XG4gIGhyIHtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgI2ZkNDA4MTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG5cblxuICBwe1xuICAgIC8vbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogYWJzb2x1dGVcbn1cbmlvbi1pY29ue1xuICAgIGNvbG9yOiAjMkJDNTY4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbnN0cm9uZ3tcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH0iLCIudmwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNDNkM2QzY7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5sZWZ0IHtcbiAgd2lkdGg6IDIzMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmlnaHQge1xuICB3aWR0aDogMjMwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMCU7XG59XG5cbmhyIHtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNmZDQwODE7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxucCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGFic29sdXRlO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjMkJDNTY4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbnN0cm9uZyB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/subscription/subscription.page.ts":
/*!***************************************************!*\
  !*** ./src/app/subscription/subscription.page.ts ***!
  \***************************************************/
/*! exports provided: SubscriptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPage", function() { return SubscriptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/firebase/firebase.service */ "./src/app/firebase/firebase.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _firebase_valdaite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/valdaite.service */ "./src/app/firebase/valdaite.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let SubscriptionPage = class SubscriptionPage {
    constructor(firebaseService, ValdaiteService, storage, router) {
        this.firebaseService = firebaseService;
        this.ValdaiteService = ValdaiteService;
        this.storage = storage;
        this.router = router;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.ValdaiteService.validate();
            this.router.navigate(['tabs/currency']);
            this.user = yield this.storage.get('User');
            this.getPoint();
        });
    }
    getPoint() {
        this.firebaseService.getDataOfUser(this.user).then(point => {
            this.showPoint = point.docs[0].data().point;
        });
        return this.showPoint;
    }
};
SubscriptionPage.ctorParameters = () => [
    { type: src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _firebase_valdaite_service__WEBPACK_IMPORTED_MODULE_4__["ValdaiteService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SubscriptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subscription',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subscription.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subscription/subscription.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./subscription.page.scss */ "./src/app/subscription/subscription.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _firebase_valdaite_service__WEBPACK_IMPORTED_MODULE_4__["ValdaiteService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], SubscriptionPage);



/***/ })

}]);
//# sourceMappingURL=subscription-subscription-module-es2015.js.map