(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-subscripe-create-subscripe-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-subscripe/create-subscripe.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-subscripe/create-subscripe.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>{{ 'Create Subscribe camping ' | translate}}\n      <strong>{{showPoint}}</strong>\n\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"step == 1\">\n\n    <ion-item>\n      <ion-input #videoEl (ionChange)=\"videoChange($event)\" placeholder=\"Add video Link\"></ion-input>\n      <br>\n\n\n\n\n    </ion-item>\n    <div class=\"channel\" *ngIf=\"userChannel.channel\">\n      <img src=\"{{userChannel.channel.thumbnails.medium.url}}\" alt=\"\">\n      <h3>\n        {{userChannel.channel.title}}\n      </h3>\n    </div>\n    <p>\n      <!-- {{'you must put ' | translate}} -->\n    </p>\n    <ion-item>\n      <label>{{ 'Country' | translate}}</label>\n\n      <ion-select #country placeholder=\"{{'choose' }}\">\n        <div *ngFor=\"let Country of countries\">\n\n          <ion-select-option value={{Country}}>{{Country}}</ion-select-option>\n        </div>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <label>{{ 'Interstates' | translate}}</label>\n\n      <ion-select #video placeholder=\"{{'choose' }}\">\n        <div *ngFor=\"let video of videos\">\n\n          <ion-select-option value={{video}}>{{video}}</ion-select-option>\n        </div>\n      </ion-select>\n    </ion-item>\n    <button class=\"submit\" (click)=\"saveStepOne(video , country)\">\n      {{ 'Add Channel' | translate}}\n    </button>\n    <p style=\"color: #565656;padding: 10px;\">\n      {{\"*Please don't remove this video because we will save it for all your next campings*  \" | translate}}\n    </p>\n  </div>\n\n\n  <div *ngIf=\"step == 2\">\n\n    <div class=\"channel\" *ngIf=\"userChannel.channel\">\n      <img src=\"{{userChannel.channel.thumbnails.medium.url}}\" alt=\"\">\n      <h3>\n        {{userChannel.channel.title}}\n      </h3>\n    </div>\n    <form style=\"margin-top: 20px;\">\n\n\n\n      <ion-item lines=\"none\">\n        <label>{{ 'Number Of Subscribes' | translate}}</label>\n\n        <!-- *ngFor=\"let item of numberOfSubscribers; index as i;\" -->\n        <ion-select  #view (ionChange)=\"onChange(sec , view)\" value=\"10\" >\n          <div *ngFor=\"let view of Views\">\n\n            <ion-select-option value={{view}}>{{view}}</ion-select-option>\n          </div>\n\n        </ion-select>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <label>{{ 'Number Of likes' | translate}}</label>\n\n        <div style=\"\n        width: 192px;\n        background-color: #ddd;\n        padding: 10px;\n    \">\n          10\n        </div>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <label>{{ 'Number Of views' | translate}}</label>\n\n        <div style=\"\n        width: 192px;\n        background-color: #ddd;\n        padding: 10px;\n    \">\n          10\n        </div>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <label>{{ 'Time requird (second)' | translate}}</label>\n\n        <!-- *ngFor=\"let item of numberOfSubscribers; index as i;\" -->\n        <ion-select #sec (ionChange)=\"onChange(sec , view)\" value=\"60\">\n          <div *ngFor=\"let second of seconds\">\n\n            <ion-select-option value={{second}}>{{second}}</ion-select-option>\n          </div>\n        </ion-select>\n      </ion-item>\n      <hr>\n      <ion-item lines=\"none\">\n        <label>{{ 'Vip account (reduce 10%)' | translate}}</label>\n\n        <button style=\"width:70px;font-size: 12px\">\n\n          {{ 'Upgrade' | translate}}\n        </button>\n\n      </ion-item>\n\n      <ion-item lines=\"none\" style=\"color:#4458ba; font-style: bold; font-size: 18px;\">\n        <label>{{ 'Total coins' | translate}}</label>\n\n        <button style=\"color:#4458ba ;font-style: bold; width:70px\">\n          {{points}}\n\n        </button>\n\n      </ion-item>\n      <hr>\n      <button class=\"done\" (click)=\"createComp(sec , view)\">\n        {{ 'Done' | translate}}\n\n      </button>\n    </form>\n\n  </div>\n\n\n\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/create-subscripe/country.ts":
/*!*********************************************!*\
  !*** ./src/app/create-subscripe/country.ts ***!
  \*********************************************/
/*! exports provided: countryList, videos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryList", function() { return countryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videos", function() { return videos; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan (Province of China)",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
];
const videos = [
    "Cars & Vehicles",
    "Comedy",
    "Education",
    "Entertainment",
    "Film & Animation",
    "Gaming",
    "How-to & Style",
    "Music",
    "News & Politics",
    "Non-profits & Activism",
    "People & Blogs",
    "Pets & Animals",
    "Science & Technology",
    "Sport",
    "Travel & Events"
];


/***/ }),

/***/ "./src/app/create-subscripe/create-subscripe-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/create-subscripe/create-subscripe-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CreateSubscripePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubscripePageRoutingModule", function() { return CreateSubscripePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _create_subscripe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-subscripe.page */ "./src/app/create-subscripe/create-subscripe.page.ts");




const routes = [
    {
        path: '',
        component: _create_subscripe_page__WEBPACK_IMPORTED_MODULE_3__["CreateSubscripePage"]
    }
];
let CreateSubscripePageRoutingModule = class CreateSubscripePageRoutingModule {
};
CreateSubscripePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateSubscripePageRoutingModule);



/***/ }),

/***/ "./src/app/create-subscripe/create-subscripe.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/create-subscripe/create-subscripe.module.ts ***!
  \*************************************************************/
/*! exports provided: CreateSubscripePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubscripePageModule", function() { return CreateSubscripePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _create_subscripe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-subscripe-routing.module */ "./src/app/create-subscripe/create-subscripe-routing.module.ts");
/* harmony import */ var _create_subscripe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-subscripe.page */ "./src/app/create-subscripe/create-subscripe.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









let CreateSubscripePageModule = class CreateSubscripePageModule {
};
CreateSubscripePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _create_subscripe_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateSubscripePageRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        declarations: [_create_subscripe_page__WEBPACK_IMPORTED_MODULE_6__["CreateSubscripePage"]]
    })
], CreateSubscripePageModule);



/***/ }),

/***/ "./src/app/create-subscripe/create-subscripe.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/create-subscripe/create-subscripe.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr {\n  border-top: 1.5px solid #A2A2A2;\n  width: 90%;\n  margin-right: 5%;\n  margin-left: 5%;\n}\n\nion-card {\n  height: 25%;\n  width: 90%;\n  margin-right: 5%;\n  margin-left: 5%;\n}\n\nlabel {\n  width: 70%;\n}\n\n.header {\n  width: 90%;\n  margin-right: 5%;\n  margin-left: 5%;\n  margin-top: 10%;\n}\n\ninput {\n  width: 35%;\n  float: right;\n  margin-right: 5px;\n  margin-left: 5px;\n  padding: 5px;\n  border-radius: 10%;\n}\n\nion-select-option {\n  width: 10%;\n}\n\nbutton {\n  padding: 10px;\n  float: right;\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #696C6B;\n}\n\n.submit {\n  width: 20%;\n  color: #FFFFFF;\n  float: left;\n  margin-right: 3px;\n  margin-left: 3px;\n  font-style: bold;\n  text-transform: uppercase;\n  font-size: 12px;\n  background: #fd4081;\n  border-radius: 5%;\n  width: 50%;\n  margin: auto;\n  display: block;\n  margin-top: 11px;\n  float: none;\n}\n\nion-select {\n  display: inline;\n  width: 200px;\n  height: 40px;\n  color: #696C6B;\n  background: #D0D0D0;\n  margin-left: 3%;\n}\n\n.done {\n  text-transform: uppercase;\n  width: 90%;\n  margin-left: 5%;\n  margin-right: 5%;\n  color: black;\n}\n\nstrong {\n  float: right;\n}\n\n.channel {\n  padding: 10px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 80%;\n  margin: auto;\n  margin-top: 13px;\n  box-shadow: 1px 1px 12px 5px #00000030;\n}\n\n.channel img {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZGVyL0RvY3VtZW50cy90dWJlLWFwcC90dXBlL3NyYy9hcHAvY3JlYXRlLXN1YnNjcmlwZS9jcmVhdGUtc3Vic2NyaXBlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY3JlYXRlLXN1YnNjcmlwZS9jcmVhdGUtc3Vic2NyaXBlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREVFO0VBQ0ksV0FBQTtFQUNGLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFRTtFQUNJLFVBQUE7QUNDTjs7QURDQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLFVBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNLSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNLSjs7QURIQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNNSjs7QURKQTtFQUNJLFlBQUE7QUNPSjs7QURKRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtBQ09KOztBRE5JO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ1FSIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXN1YnNjcmlwZS9jcmVhdGUtc3Vic2NyaXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaHIge1xuICAgIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkICNBMkEyQTI7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxuICBpb24tY2FyZHtcbiAgICAgIGhlaWdodDogMjUlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAvLyBwb2ludGVyLWV2ZW50czogbm9uZSAvL1RoaXMgbGluZSBpcyB0aGUga2V5IVxuICB9XG4gIGxhYmVse1xuICAgICAgd2lkdGg6IDcwJTtcbiAgfVxuLmhlYWRlcntcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cbmlucHV0IHtcbiAgICB3aWR0aDogMzUlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgLy8gYmFja2dyb3VuZDogI2Q2ZDhkNztcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuaW9uLXNlbGVjdC1vcHRpb257XG4gICAgd2lkdGg6IDEwJTtcbn1cbmJ1dHRvbntcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6ICM2OTZDNkI7XG59XG4uc3VibWl0e1xuICAgIHdpZHRoOiAyMCU7IFxuICAgIGNvbG9yOiNGRkZGRkY7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICBmb250LXN0eWxlOiBib2xkO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZDQwODE7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICBmbG9hdDogbm9uZTtcbn1cblxuaW9uLXNlbGVjdHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgd2lkdGg6MjAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGNvbG9yOiAjNjk2QzZCO1xuICAgIGJhY2tncm91bmQ6ICNEMEQwRDA7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xufVxuLmRvbmV7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbnN0cm9uZ3tcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cblxuICAuY2hhbm5lbCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggNXB4ICMwMDAwMDAzMDtcbiAgICBpbWd7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cbiAgfVxuXG4gICIsImhyIHtcbiAgYm9yZGVyLXRvcDogMS41cHggc29saWQgI0EyQTJBMjtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG5pb24tY2FyZCB7XG4gIGhlaWdodDogMjUlO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbmxhYmVsIHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmhlYWRlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAzNSU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuXG5pb24tc2VsZWN0LW9wdGlvbiB7XG4gIHdpZHRoOiAxMCU7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICM2OTZDNkI7XG59XG5cbi5zdWJtaXQge1xuICB3aWR0aDogMjAlO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBmb250LXN0eWxlOiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZDQwODE7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBmbG9hdDogbm9uZTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjNjk2QzZCO1xuICBiYWNrZ3JvdW5kOiAjRDBEMEQwO1xuICBtYXJnaW4tbGVmdDogMyU7XG59XG5cbi5kb25lIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnN0cm9uZyB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNoYW5uZWwge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggNXB4ICMwMDAwMDAzMDtcbn1cbi5jaGFubmVsIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/create-subscripe/create-subscripe.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/create-subscripe/create-subscripe.page.ts ***!
  \***********************************************************/
/*! exports provided: CreateSubscripePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubscripePage", function() { return CreateSubscripePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/firebase.service */ "./src/app/firebase/firebase.service.ts");
/* harmony import */ var _firebase_youtube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/youtube */ "./src/app/firebase/youtube.ts");
/* harmony import */ var _firebase_subscripe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/subscripe */ "./src/app/firebase/subscripe.ts");
/* harmony import */ var _country__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./country */ "./src/app/create-subscripe/country.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_firebase_setting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/firebase/setting.service */ "./src/app/firebase/setting.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");












let CreateSubscripePage = class CreateSubscripePage {
    constructor(userService, youtube, alertController, subscribes, route, translate, setting, storage) {
        this.userService = userService;
        this.youtube = youtube;
        this.alertController = alertController;
        this.subscribes = subscribes;
        this.route = route;
        this.translate = translate;
        this.setting = setting;
        this.storage = storage;
        this.step = 0;
        this.countries = _country__WEBPACK_IMPORTED_MODULE_5__["countryList"];
        this.videos = _country__WEBPACK_IMPORTED_MODULE_5__["videos"];
        this.userChannel = {};
        this.Views = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
        this.seconds = [45,
            60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450,
            480, 510, 540, 570, 600, 900, 1200, 1500, 1800,
            2100, 2400, 2700, 3000, 3300, 3600
        ];
        this.points = 3000;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = (yield this.userService.getDataOfUser()).docs[0].data();
            this.user.channel = null;
            if (!this.user.channel) {
                this.step = 1;
            }
            else {
                this.userChannel = this.user.channel;
            }
        });
    }
    videoChange(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let scrubbed = e.target.value.slice(e.target.value.indexOf('=') + 1);
            if (e.target.value.search('=') == -1) {
                scrubbed = e.target.value.slice(e.target.value.indexOf('be/') + 3);
            }
            let videoData = yield this.youtube.getVideoData(scrubbed);
            console.log("videoData", videoData);
            this.userChannel.video = scrubbed;
            if (videoData.items[0]) {
                let channelData = yield this.youtube.getChannelData(videoData.items[0].snippet.channelId);
                this.userChannel.channelId = videoData.items[0].snippet.channelId;
                this.durations = this.convert_time(videoData.items[0].contentDetails.duration);
                this.userChannel.channel = channelData.items[0].snippet;
            }
            else {
                this.presentAlert('Please add a valid video');
            }
        });
    }
    convert_time(duration) {
        var a = duration.match(/\d+/g);
        if (duration.indexOf('M') >= 0 && duration.indexOf('H') == -1 && duration.indexOf('S') == -1) {
            a = [0, a[0], 0];
        }
        if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1) {
            a = [a[0], 0, a[1]];
        }
        if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1 && duration.indexOf('S') == -1) {
            a = [a[0], 0, 0];
        }
        duration = 0;
        if (a.length == 3) {
            duration = duration + parseInt(a[0]) * 3600;
            duration = duration + parseInt(a[1]) * 60;
            duration = duration + parseInt(a[2]);
        }
        if (a.length == 2) {
            duration = duration + parseInt(a[0]) * 60;
            duration = duration + parseInt(a[1]);
        }
        if (a.length == 1) {
            duration = duration + parseInt(a[0]);
        }
        return duration;
    }
    saveStepOne(c, v) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.userChannel.channel) {
                let user = this.userService.getDataOfUser(this.user.uid).then(e => {
                    let UserEdited = Object.assign({}, e.docs[0].data(), { channel: this.userChannel });
                    this.userService.updateUser(UserEdited);
                    this.step = 2;
                });
            }
            else {
            }
        });
    }
    createComp(sec, view) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.user.point < this.points) {
                this.presentAlert("You don't have enough points");
                return;
            }
            if (this.durations < +sec.el.value) {
                this.presentAlert(this.translate.instant("You must choose valid duration"));
                return;
            }
            let user = yield this.user;
            this.camping = {
                view: view.el.value,
                ListOfUserDoneIt: [],
                second: sec.el.value,
                point: this.points,
                channel: this.userChannel,
                createdData: Date.now(),
                ownerId: user.uid,
                type: 'sub'
            };
            user = yield this.storage.get('User');
            let status;
            this.userService.getDataOfUser(user).then(status => {
                if (status.docs[0].data().vip) {
                    console.log('account is vip');
                    if (!status) {
                        this.setting.getsettingsList((res => res)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((changes) => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            let discountVip = 1 - (res[res.length - 1].discountVip / 100 + res[res.length - 1].discountAll / 100);
                            this.UpdateUSerPoints(-(this.points * discountVip));
                        }));
                    }
                    if (!status) {
                        this.setting.getsettingsList((res => res)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((changes) => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            let discount = 1 - res[res.length - 1].discountAll / 100;
                            if (discount < 1) {
                                this.UpdateUSerPoints(-(this.points * discount));
                            }
                            else {
                                this.UpdateUSerPoints(-this.points);
                                console.log('first statement');
                            }
                        }));
                    }
                }
                else {
                    this.UpdateUSerPoints(-this.points);
                    console.log('second statement');
                }
            });
            //  
            this.route.navigate(['']);
        });
    }
    onChange(sec, view) {
        console.log(sec.el.value, view.el.value);
        this.points = +(sec.el.value * view.el.value * 0.1 * 5) + (view.el.value * 270);
    }
    presentAlert(title) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                // subHeader: 'Subtitle',
                message: title,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    UpdateUSerPoints(points) {
        console.log('updatePoint', points);
        let user = this.userService.getDataOfUser(this.user.uid).then(e => {
            let UserEdited = Object.assign({}, e.docs[0].data(), { point: e.docs[0].data().point + points });
            this.userService.updateUser(UserEdited);
            this.subscribes.createSubscribe(this.camping);
            this.presentAlert('Added success');
        });
    }
};
CreateSubscripePage.ctorParameters = () => [
    { type: _firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _firebase_youtube__WEBPACK_IMPORTED_MODULE_3__["YoutubeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _firebase_subscripe__WEBPACK_IMPORTED_MODULE_4__["subscribesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: src_app_firebase_setting_service__WEBPACK_IMPORTED_MODULE_9__["SettingService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"] }
];
CreateSubscripePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-subscripe',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-subscripe.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-subscripe/create-subscripe.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-subscripe.page.scss */ "./src/app/create-subscripe/create-subscripe.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _firebase_youtube__WEBPACK_IMPORTED_MODULE_3__["YoutubeService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _firebase_subscripe__WEBPACK_IMPORTED_MODULE_4__["subscribesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
        src_app_firebase_setting_service__WEBPACK_IMPORTED_MODULE_9__["SettingService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"]])
], CreateSubscripePage);



/***/ })

}]);
//# sourceMappingURL=create-subscripe-create-subscripe-module-es2015.js.map