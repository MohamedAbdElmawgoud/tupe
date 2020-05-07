(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reedem-invite-reedem-invite-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reedem-invite/reedem-invite.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reedem-invite/reedem-invite.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>reedem-invite</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/reedem-invite/reedem-invite-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/reedem-invite/reedem-invite-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ReedemInvitePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReedemInvitePageRoutingModule", function() { return ReedemInvitePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reedem_invite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reedem-invite.page */ "./src/app/reedem-invite/reedem-invite.page.ts");




const routes = [
    {
        path: '',
        component: _reedem_invite_page__WEBPACK_IMPORTED_MODULE_3__["ReedemInvitePage"]
    }
];
let ReedemInvitePageRoutingModule = class ReedemInvitePageRoutingModule {
};
ReedemInvitePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReedemInvitePageRoutingModule);



/***/ }),

/***/ "./src/app/reedem-invite/reedem-invite.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/reedem-invite/reedem-invite.module.ts ***!
  \*******************************************************/
/*! exports provided: ReedemInvitePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReedemInvitePageModule", function() { return ReedemInvitePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _reedem_invite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reedem-invite-routing.module */ "./src/app/reedem-invite/reedem-invite-routing.module.ts");
/* harmony import */ var _reedem_invite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reedem-invite.page */ "./src/app/reedem-invite/reedem-invite.page.ts");







let ReedemInvitePageModule = class ReedemInvitePageModule {
};
ReedemInvitePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reedem_invite_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReedemInvitePageRoutingModule"]
        ],
        declarations: [_reedem_invite_page__WEBPACK_IMPORTED_MODULE_6__["ReedemInvitePage"]]
    })
], ReedemInvitePageModule);



/***/ }),

/***/ "./src/app/reedem-invite/reedem-invite.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/reedem-invite/reedem-invite.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZWRlbS1pbnZpdGUvcmVlZGVtLWludml0ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/reedem-invite/reedem-invite.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/reedem-invite/reedem-invite.page.ts ***!
  \*****************************************************/
/*! exports provided: ReedemInvitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReedemInvitePage", function() { return ReedemInvitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReedemInvitePage = class ReedemInvitePage {
    constructor() { }
    ngOnInit() {
    }
};
ReedemInvitePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reedem-invite',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reedem-invite.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reedem-invite/reedem-invite.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reedem-invite.page.scss */ "./src/app/reedem-invite/reedem-invite.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ReedemInvitePage);



/***/ })

}]);
//# sourceMappingURL=reedem-invite-reedem-invite-module-es2015.js.map