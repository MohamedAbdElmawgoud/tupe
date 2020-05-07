(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vip-account-vip-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vip-account/vip-account.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vip-account/vip-account.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"tertiary\">\n        <ion-title>{{ 'Vip Account' | translate}}\n            <strong>{{showPoint}}</strong>\n        </ion-title>\n        <ion-buttons slot=\"start\">\n                <ion-back-button ></ion-back-button>\n              </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card class=\"hederCard\">\n <ion-card-title *ngFor=\"let item of Addvatage;\">\n  - {{item}}\n </ion-card-title>\n</ion-card>\n\n<ion-card class=\"card\">\n    <ion-card-title >\n        {{ 'A week' | translate}}\n    </ion-card-title>\n   </ion-card>\n   \n \n   <ion-card class=\"card\">\n      <ion-card-title >\n        {{ 'A month' | translate}}\n      </ion-card-title>\n     </ion-card>\n\n\n     <ion-card class=\"card\">\n        <ion-card-title >\n            {{ '3 month' | translate}}\n        </ion-card-title>\n       </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/vip-account/vip-account-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/vip-account/vip-account-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: VipAccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VipAccountPageRoutingModule", function() { return VipAccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _vip_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vip-account.page */ "./src/app/vip-account/vip-account.page.ts");




const routes = [
    {
        path: '',
        component: _vip_account_page__WEBPACK_IMPORTED_MODULE_3__["VipAccountPage"]
    }
];
let VipAccountPageRoutingModule = class VipAccountPageRoutingModule {
};
VipAccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VipAccountPageRoutingModule);



/***/ }),

/***/ "./src/app/vip-account/vip-account.module.ts":
/*!***************************************************!*\
  !*** ./src/app/vip-account/vip-account.module.ts ***!
  \***************************************************/
/*! exports provided: VipAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VipAccountPageModule", function() { return VipAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _vip_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vip-account-routing.module */ "./src/app/vip-account/vip-account-routing.module.ts");
/* harmony import */ var _vip_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vip-account.page */ "./src/app/vip-account/vip-account.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let VipAccountPageModule = class VipAccountPageModule {
};
VipAccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _vip_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["VipAccountPageRoutingModule"]
        ],
        declarations: [_vip_account_page__WEBPACK_IMPORTED_MODULE_6__["VipAccountPage"]]
    })
], VipAccountPageModule);



/***/ }),

/***/ "./src/app/vip-account/vip-account.page.scss":
/*!***************************************************!*\
  !*** ./src/app/vip-account/vip-account.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hederCard {\n  width: 90%;\n  margin: 5%;\n  height: 25%;\n}\n\nion-card-title {\n  padding: 5px;\n  color: #696C6B;\n}\n\n.card {\n  padding: 10px;\n}\n\nstrong {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZGVyL0RvY3VtZW50cy90dWJlLWFwcC90dXBlL3NyYy9hcHAvdmlwLWFjY291bnQvdmlwLWFjY291bnQucGFnZS5zY3NzIiwic3JjL2FwcC92aXAtYWNjb3VudC92aXAtYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNBQTs7QURHQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC92aXAtYWNjb3VudC92aXAtYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5oZWRlckNhcmR7XG53aWR0aDogOTAlO1xubWFyZ2luOiA1JTtcbmhlaWdodDogMjUlO1xuXG59XG5pb24tY2FyZC10aXRsZXtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6ICM2OTZDNkI7XG59XG4uY2FyZHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIFxufVxuc3Ryb25ne1xuICAgIGZsb2F0OiByaWdodDtcbiAgfSIsIi5oZWRlckNhcmQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDUlO1xuICBoZWlnaHQ6IDI1JTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiAjNjk2QzZCO1xufVxuXG4uY2FyZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbnN0cm9uZyB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/vip-account/vip-account.page.ts":
/*!*************************************************!*\
  !*** ./src/app/vip-account/vip-account.page.ts ***!
  \*************************************************/
/*! exports provided: VipAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VipAccountPage", function() { return VipAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/firebase/firebase.service */ "./src/app/firebase/firebase.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");




let VipAccountPage = class VipAccountPage {
    constructor(firebaseService, storage) {
        this.firebaseService = firebaseService;
        this.storage = storage;
        this.Addvatage = ['Remove ads', 'Remove 10% cost', 'Remove Countdown timer'];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
VipAccountPage.ctorParameters = () => [
    { type: src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
VipAccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vip-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vip-account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vip-account/vip-account.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vip-account.page.scss */ "./src/app/vip-account/vip-account.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
], VipAccountPage);



/***/ })

}]);
//# sourceMappingURL=vip-account-vip-account-module-es2015.js.map