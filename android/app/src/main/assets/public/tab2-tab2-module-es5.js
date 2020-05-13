function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"tertiary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ 'Fog tube' | translate}}\n      <strong>{{showPoint}}</strong>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div *ngIf=\"noVideos\">\n    <ion-icon name=\"person\" class=\"icon\"></ion-icon>\n    <p> {{ 'There is no channel' | translate}}</p>\n    <button (click)=\"Reload()\">\n      {{ 'Reloading' | translate}}\n    </button>\n    <button class=\"btn\" (click)=\"ShowVideo()\">\n      {{ 'watch video to earn point' | translate}}\n    </button>\n  </div>\n\n\n  <div *ngIf=\"!noVideos\">\n    <div style=\"margin-top: 35%;\" *ngIf=\"step == 1\">\n      <div class=\"channel\" *ngIf=\"channel\">\n        <img src=\"{{channel.channel.channel.thumbnails.medium.url}}\" alt=\"\">\n        <h3>\n          {{channel.channel.channel.title}}\n        </h3>\n  \n  \n      </div>\n      <button class=\"btn\" (click)=\"subscribe()\">\n        {{ 'subscribe' | translate}}\n      </button>\n      <button class=\"btn\" (click)=\"showMore()\">\n        {{ 'Show more' | translate}}\n      </button>\n\n      <p style=\"padding: 20px;\" >\n        {{'* note if you remove the like or the subscribe we will block your account *' | translate}}\n      </p>\n    </div>\n\n    <div  *ngIf=\"step == 2\">\n      <ion-card click=\"StartTimer()\">\n        <youtube-player \n        [videoId]=\"channel.channel.video\"\n        suggestedQuality=\"medium\"\n    [endSeconds]=\"3600\"\n        (change)=\"change($event)\"\n        [height]=\"430\"\n        [width]=\"390\"\n        [startSeconds]=\"0\"\n        (ready)=\"savePlayer($event)\"\n        > \n        <!-- [endSeconds]=\"60\" -->\n      </youtube-player>\n    </ion-card>\n    <ion-item class=\"main\"  lines=\"none\">\n      <label class=\"left\">\n         <p  class=\"sec\"> {{+channel.second - passedTIme}}</p>\n        {{ 'Second' | translate}}\n    </label>\n    <div class=\"vl\"></div>\n    <label class=\"right\">\n        <p class=\"sec\"> {{(channel.point / channel.view )- ((channel.point / channel.view )* 0.2)}}</p>\n      {{ 'Points' | translate}}\n          </label>\n    </ion-item>\n\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
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


    var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/youtube-player */
    "./node_modules/@angular/youtube-player/fesm2015/youtube-player.js");

    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__["YouTubePlayerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
      }])],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.icon {\n  text-align: center;\n  font-size: 40px;\n  margin-top: 200px;\n  margin-right: 42%;\n  margin-left: 42%;\n}\n\nbutton {\n  background: #fd4081;\n  margin-top: 20px;\n  margin-right: 37.5%;\n  margin-left: 37.5%;\n  color: white;\n  font-size: 12px;\n  display: inline-block;\n  padding: 10px;\n  width: 25%;\n}\n\np {\n  text-align: center;\n}\n\n.btn {\n  margin-top: 10px;\n  margin-right: 28%;\n  margin-left: 28%;\n  width: 44%;\n}\n\nstrong {\n  float: right;\n}\n\n.channel {\n  padding: 10px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 80%;\n  margin: auto;\n  margin-top: 13px;\n  box-shadow: 1px 1px 12px 5px #00000030;\n}\n\n.channel img {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-card {\n  height: 70%;\n  --background: black;\n}\n\n.vl {\n  border-left: 2px solid #C6C6C6;\n  height: 40px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.left {\n  width: 230px;\n  float: left;\n  text-align: center;\n}\n\n.right {\n  width: 230px;\n  float: right;\n  text-align: center;\n}\n\n.main {\n  font-size: 20px;\n  text-align: center;\n}\n\nhr {\n  border-top: 4px solid #fd4081;\n  width: 90%;\n  margin-right: 5%;\n  margin-left: 5%;\n}\n\np {\n  margin-right: 10px;\n  margin-left: 10px;\n  display: absolute;\n}\n\nbutton {\n  background: #fd4081;\n  margin-top: 20px;\n  margin-right: 5%;\n  margin-left: 5%;\n  color: white;\n  font-size: 15px;\n  display: inline-block;\n  padding: 10px;\n  width: 90%;\n}\n\n.sec {\n  display: inline;\n}\n\n.video {\n  height: 100%;\n}\n\nstrong {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZGVyL0RvY3VtZW50cy90dWJlLWFwcC90dXBlL3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtBQ0lGOztBREFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0dGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0FDRUY7O0FEREU7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDR047O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBREFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDR0E7O0FEQ0E7RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFHQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQUY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFJTSxlQUFBO0VBQ0Esa0JBQUE7QUNKTjs7QURNQTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRE9BO0VBRUUsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDTEY7O0FET0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDSkY7O0FETUE7RUFDQSxlQUFBO0FDSEE7O0FES0E7RUFDRSxZQUFBO0FDRkY7O0FESUE7RUFDRSxZQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuLmljb257XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MiU7XG4gIG1hcmdpbi1sZWZ0OiA0MiU7XG59XG5idXR0b257XG4gIGJhY2tncm91bmQ6ICNmZDQwODE7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMzcuNSU7XG4gIG1hcmdpbi1sZWZ0OiAzNy41JTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDI1JTtcbn1cbnB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gXG59XG4uYnRueyBcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyOCU7XG4gIG1hcmdpbi1sZWZ0OiAyOCU7XG4gIHdpZHRoOiA0NCU7XG4gIFxufVxuXG5zdHJvbmd7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNoYW5uZWwge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggNXB4ICMwMDAwMDAzMDtcbiAgaW1ne1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5pb24tY2FyZHtcbmhlaWdodDogNzAlO1xuLS1iYWNrZ3JvdW5kOiBibGFjaztcbi8vcG9pbnRlci1ldmVudHM6IG5vbmUgLy9UaGlzIGxpbmUgaXMgdGhlIGtleSFcblxufVxuLnZsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjQzZDNkM2O1xuICBoZWlnaHQ6IDQwcHg7XG4gLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAvL2xlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gLy8gdG9wOiAwO1xufVxuLmxlZnR7XG4gIHdpZHRoOjIzMHB4O1xuICBmbG9hdDpsZWZ0O1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgLy8gbWFyZ2luLWxlZnQ6IDE1cHg7IFxuICBcbiAgfVxuLnJpZ2h0e1xuICB3aWR0aDoyMzBweDtcbiAgZmxvYXQ6cmlnaHQ7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICAvL21hcmdpbi1yaWdodDogMTVweDsgXG4gIH1cbi5tYWlue1xuICAgICAgLy8gd2lkdGg6OTAlO1xuICAgICAgLy8gbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICAgIC8vIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmhyIHtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNmZDQwODE7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuXG5we1xuICAvL21hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGFic29sdXRlXG59XG5idXR0b257XG4gIGJhY2tncm91bmQ6ICNmZDQwODE7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIG1hcmdpbi1sZWZ0OjUlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTAlO1xufVxuLnNlY3tcbmRpc3BsYXk6IGlubGluZTtcbn1cbi52aWRlb3tcbiAgaGVpZ2h0OiAxMDAlO1xufVxuc3Ryb25ne1xuICBmbG9hdDogcmlnaHQ7XG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MiU7XG4gIG1hcmdpbi1sZWZ0OiA0MiU7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmZDQwODE7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMzcuNSU7XG4gIG1hcmdpbi1sZWZ0OiAzNy41JTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDI1JTtcbn1cblxucCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMjglO1xuICBtYXJnaW4tbGVmdDogMjglO1xuICB3aWR0aDogNDQlO1xufVxuXG5zdHJvbmcge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jaGFubmVsIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IDVweCAjMDAwMDAwMzA7XG59XG4uY2hhbm5lbCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5pb24tY2FyZCB7XG4gIGhlaWdodDogNzAlO1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4udmwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNDNkM2QzY7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5sZWZ0IHtcbiAgd2lkdGg6IDIzMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmlnaHQge1xuICB3aWR0aDogMjMwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5ociB7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjZmQ0MDgxO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbnAge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBhYnNvbHV0ZTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2ZkNDA4MTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTAlO1xufVxuXG4uc2VjIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4udmlkZW8ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbnN0cm9uZyB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
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


    var src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/firebase/firebase.service */
    "./src/app/firebase/firebase.service.ts");
    /* harmony import */


    var _firebase_subscripe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../firebase/subscripe */
    "./src/app/firebase/subscripe.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _firebase_valdaite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../firebase/valdaite.service */
    "./src/app/firebase/valdaite.service.ts");
    /* harmony import */


    var _firebase_youtube__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../firebase/youtube */
    "./src/app/firebase/youtube.ts");
    /* harmony import */


    var _storageService_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../storageService/storage.service */
    "./src/app/storageService/storage.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var Tab2Page = /*#__PURE__*/function () {
      function Tab2Page(router, firebaseService, subscribes, ValdaiteService, YoutubeService, storage, alertController) {
        _classCallCheck(this, Tab2Page);

        this.router = router;
        this.firebaseService = firebaseService;
        this.subscribes = subscribes;
        this.ValdaiteService = ValdaiteService;
        this.YoutubeService = YoutubeService;
        this.storage = storage;
        this.alertController = alertController;
        this.noVideos = false;
        this.lengthOfArrayOfVideo = -1;
        this.passedTIme = 0;
        this.lastTime = 0;
      }

      _createClass(Tab2Page, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.isSubscribe();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.storage.storage.get('User');

                  case 2:
                    this.user = _context3.sent;
                    this.subscribes.getsubscribesList(function (res) {
                      return res.orderByChild('expired').equalTo(null);
                    }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
                      return changes.map(function (c) {
                        return Object.assign({
                          key: c.payload.key
                        }, c.payload.val());
                      });
                    })).subscribe(function (camping) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var _this2 = this;

                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                // this.camping = camping;
                                this.campings = camping.filter(function (ele) {
                                  if (!ele.done) return ele;
                                  if (ele.done.indexOf(_this2.user) == -1) return ele;
                                  return null;
                                });

                                if (this.campings.length == 0) {
                                  this.noVideos = true;
                                }

                                console.log(this.campings, this.noVideos);
                                _context2.next = 5;
                                return this.showMore();

                              case 5:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });
                    this.getPoint();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "savePlayer",
        value: function savePlayer($event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.interval = setInterval(function () {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        var _this4 = this;

                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                if (this.lastTime != $event.target.playerInfo.currentTime.toFixed(0)) {
                                  this.passedTIme++;
                                  this.lastTime = $event.target.playerInfo.currentTime.toFixed(0);
                                }

                                if (!(+this.channel.second - this.passedTIme == 0)) {
                                  _context5.next = 9;
                                  break;
                                }

                                this.passedTIme = 0;
                                clearInterval(this.interval);
                                this.interval = setInterval(function () {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                      while (1) {
                                        switch (_context4.prev = _context4.next) {
                                          case 0:
                                            _context4.next = 2;
                                            return this.isSubscribe();

                                          case 2:
                                          case "end":
                                            return _context4.stop();
                                        }
                                      }
                                    }, _callee4, this);
                                  }));
                                }, 1000); // alert('fff')

                                _context5.next = 7;
                                return this.storage.storage.set('channel', this.channel.key);

                              case 7:
                                window.open('https://www.youtube.com/watch?v=' + this.channel.channel.video);
                                this.showMore();

                              case 9:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    }, 1000);

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "showMore",
        value: function showMore() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var channel;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.lengthOfArrayOfVideo++;
                    channel = this.campings[this.lengthOfArrayOfVideo];
                    this.step = 1;

                    if (channel != undefined) {
                      this.channel = channel;
                    } else {
                      // window.location.reload();
                      this.noVideos = true;
                    }

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "getPoint",
        value: function getPoint() {
          var _this5 = this;

          this.firebaseService.getDataOfUser(this.user).then(function (point) {
            _this5.showPoint = point.docs[0].data().point;
          });
          return this.showPoint;
        }
      }, {
        key: "ShowVideo",
        value: function ShowVideo() {
          this.router.navigate(['tabs/tab3']);
        }
      }, {
        key: "subscribe",
        value: function subscribe() {
          this.step = 2;
        }
      }, {
        key: "Reload",
        value: function Reload() {
          window.location.reload();
        }
      }, {
        key: "isSubscribe",
        value: function isSubscribe() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this6 = this;

            var lastChannel;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.subscribes.getsubscribesList(function (res) {
                      return res.orderByChild('expired').equalTo(null);
                    }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
                      return changes.map(function (c) {
                        return Object.assign({
                          key: c.payload.key
                        }, c.payload.val());
                      });
                    })).subscribe(function (camping) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                        var camp, channels, isSubscribes;
                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                _context8.next = 2;
                                return this.storage.storage.get('channel');

                              case 2:
                                lastChannel = _context8.sent;
                                camp = camping.filter(function (ele) {
                                  return ele.key == lastChannel;
                                });

                                if (!camp[0]) {
                                  _context8.next = 15;
                                  break;
                                }

                                _context8.next = 7;
                                return this.YoutubeService.getUserChannels();

                              case 7:
                                channels = _context8.sent.items;
                                isSubscribes = channels.filter(function (element) {
                                  return element.snippet.resourceId.channelId == camp[0].channel.channelId;
                                })[0];

                                if (!(isSubscribes && lastChannel)) {
                                  _context8.next = 15;
                                  break;
                                }

                                clearInterval(this.interval);
                                _context8.next = 13;
                                return this.storage.storage.remove('channel');

                              case 13:
                                _context8.next = 15;
                                return this.updateCamping(camp[0]);

                              case 15:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "updateCamping",
        value: function updateCamping(video) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    video.done = video.done ? video.done : [];
                    video.done.push(this.user);
                    if (video.done.length == video.view) video.expired = true;
                    _context10.next = 5;
                    return this.subscribes.updateSubscripe(video.key, video);

                  case 5:
                    _context10.next = 7;
                    return this.UpdateUSerPoints(+video.point / +video.view - +video.point / +video.view * 0.2, video.channel.channelId);

                  case 7:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "UpdateUSerPoints",
        value: function UpdateUSerPoints(point, video) {
          var _this7 = this;

          this.firebaseService.getDataOfUser(this.user).then(function (e) {
            var user = e.docs[0].data();

            if (video) {
              user.videos = user.videos ? user.videos : [];
              user.videos.push(video);
              user.points = user.points ? user.points : {};
              user.points[video] = point;
            }

            var UserEdited = Object.assign({}, user, {
              point: e.docs[0].data().point + point
            }); // document.getElementById('point').textContent = e.docs[0].data().point + point;
            // e.docs[0].data().point + points;

            _this7.firebaseService.updateUser(UserEdited);

            _this7.presentAlert("you have got " + point + " points");
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(title) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var alert;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      message: title
                    });

                  case 2:
                    alert = _context11.sent;
                    _context11.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }]);

      return Tab2Page;
    }();

    Tab2Page.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }, {
        type: _firebase_subscripe__WEBPACK_IMPORTED_MODULE_4__["subscribesService"]
      }, {
        type: _firebase_valdaite_service__WEBPACK_IMPORTED_MODULE_6__["ValdaiteService"]
      }, {
        type: _firebase_youtube__WEBPACK_IMPORTED_MODULE_7__["YoutubeService"]
      }, {
        type: _storageService_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
      }];
    };

    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _firebase_subscripe__WEBPACK_IMPORTED_MODULE_4__["subscribesService"], _firebase_valdaite_service__WEBPACK_IMPORTED_MODULE_6__["ValdaiteService"], _firebase_youtube__WEBPACK_IMPORTED_MODULE_7__["YoutubeService"], _storageService_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]])], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map