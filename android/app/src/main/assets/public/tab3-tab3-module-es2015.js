(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" >\n    <ion-toolbar color=\"tertiary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>{{ 'Fog tube' | translate}}\n<strong id=\"point\" >{{showPoint}}</strong>\n\n        \n      </ion-title>\n      \n    </ion-toolbar>\n  </ion-header>\n\n<ion-content [fullscreen]=\"true\" >\n  <!-- suggestedQuality=\"default\" -->\n<div *ngIf=\"!noVideos\" class=\"video\">\n  <ion-card click=\"StartTimer()\">\n    <youtube-player \n    [videoId]=\"videoId\"\n    (change)=\"change($event)\"\n    [height]=\"370\"\n    [width]=\"400\"\n    [startSeconds]=\"0\"\n    [endSeconds]=\"3600\"\n    (ready)=\"savePlayer($event)\"\n    suggestedQuality=\"medium\"\n    \n    > \n    <!-- -->\n  </youtube-player>\n</ion-card>\n<ion-item class=\"main\"  lines=\"none\">\n  <label class=\"left\">\n     <p *ngIf=\"hidevalue==false\" class=\"sec\"> {{maxTime - passedTIme}}</p>\n    {{ 'Second' | translate}}\n</label>\n<div class=\"vl\"></div>\n<label class=\"right\">\n    <p class=\"sec\"> {{points - (points* 0.2)}}</p>\n  {{ 'Points' | translate}}\n      </label>\n</ion-item>\n<button (click)=\"showMore()\">\n  {{ 'Show more' | translate}}\n</button>\n</div>\n\n<div *ngIf=\"noVideos\" style=\"\nwidth: text-a;\ntext-align: center;\nmargin-top: 103px;\n\" >\n  <p> {{ 'There is no channel' | translate}}</p>\n  <button  (click)=\"Reload()\">\n    {{ 'Reloading' | translate}}\n  </button>\n</div>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/fesm2015/youtube-player.js");










let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__["YouTubePlayerModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]],
        providers: [
        // Storage
        ]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-card {\n  height: 70%;\n  --background: black;\n}\n\n.vl {\n  border-left: 2px solid #C6C6C6;\n  height: 40px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.left {\n  width: 230px;\n  float: left;\n  text-align: center;\n}\n\n.right {\n  width: 230px;\n  float: right;\n  text-align: center;\n}\n\n.main {\n  font-size: 20px;\n  text-align: center;\n}\n\nhr {\n  border-top: 4px solid #fd4081;\n  width: 90%;\n  margin-right: 5%;\n  margin-left: 5%;\n}\n\np {\n  margin-right: 10px;\n  margin-left: 10px;\n  display: absolute;\n}\n\nbutton {\n  background: #fd4081;\n  margin-top: 20px;\n  margin-right: 5%;\n  margin-left: 5%;\n  color: white;\n  font-size: 15px;\n  display: inline-block;\n  padding: 10px;\n  width: 90%;\n}\n\n.sec {\n  display: inline;\n}\n\n.video {\n  height: 100%;\n}\n\nstrong {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZGVyL0RvY3VtZW50cy90dWJlLWFwcC90dXBlL3NyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNFQTs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtFQUdBLGdCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURLQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUlNLGVBQUE7RUFDQSxrQkFBQTtBQ0xOOztBRE9BO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSkY7O0FEUUE7RUFFRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNORjs7QURRQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNMRjs7QURPQTtFQUNBLGVBQUE7QUNKQTs7QURNQTtFQUNFLFlBQUE7QUNIRjs7QURLQTtFQUNFLFlBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5pb24tY2FyZHtcbmhlaWdodDogNzAlO1xuLS1iYWNrZ3JvdW5kOiBibGFjaztcbi8vcG9pbnRlci1ldmVudHM6IG5vbmUgLy9UaGlzIGxpbmUgaXMgdGhlIGtleSFcblxufVxuLnZsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjQzZDNkM2O1xuICBoZWlnaHQ6IDQwcHg7XG4gLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAvL2xlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gLy8gdG9wOiAwO1xufVxuLmxlZnR7XG4gIHdpZHRoOjIzMHB4O1xuICBmbG9hdDpsZWZ0O1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgLy8gbWFyZ2luLWxlZnQ6IDE1cHg7IFxuICBcbiAgfVxuLnJpZ2h0e1xuICB3aWR0aDoyMzBweDtcbiAgZmxvYXQ6cmlnaHQ7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICAvL21hcmdpbi1yaWdodDogMTVweDsgXG4gIH1cbi5tYWlue1xuICAgICAgLy8gd2lkdGg6OTAlO1xuICAgICAgLy8gbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICAgIC8vIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmhyIHtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNmZDQwODE7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuXG5we1xuICAvL21hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGFic29sdXRlXG59XG5idXR0b257XG4gIGJhY2tncm91bmQ6ICNmZDQwODE7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIG1hcmdpbi1sZWZ0OjUlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTAlO1xufVxuLnNlY3tcbmRpc3BsYXk6IGlubGluZTtcbn1cbi52aWRlb3tcbiAgaGVpZ2h0OiAxMDAlO1xufVxuc3Ryb25ne1xuICBmbG9hdDogcmlnaHQ7XG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5pb24tY2FyZCB7XG4gIGhlaWdodDogNzAlO1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4udmwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNDNkM2QzY7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5sZWZ0IHtcbiAgd2lkdGg6IDIzMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmlnaHQge1xuICB3aWR0aDogMjMwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5ociB7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjZmQ0MDgxO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbnAge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBhYnNvbHV0ZTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2ZkNDA4MTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTAlO1xufVxuXG4uc2VjIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4udmlkZW8ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbnN0cm9uZyB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_firebase_campings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/firebase/campings.service */ "./src/app/firebase/campings.service.ts");
/* harmony import */ var src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/firebase/firebase.service */ "./src/app/firebase/firebase.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









let Tab3Page = class Tab3Page {
    constructor(comp, alertController, firebaseService, storage, translate, route) {
        this.comp = comp;
        this.alertController = alertController;
        this.firebaseService = firebaseService;
        this.storage = storage;
        this.translate = translate;
        this.route = route;
        this.needed = 15;
        this.lengthOfArrayOfVideo = -1;
        this.videoUrls = [];
        this.points = 0;
        this.hidevalue = false;
        this.hidePoint = false;
        // timer: NodeJS.Timer;
        this.status = false;
        this.time = 30;
        this.passedTIme = 0;
        this.lastTime = 0;
        this.noVideos = false;
        this.clickViewTime = 0;
    }
    play(player) {
        this.player = player;
        //this.StartTimer()
        console.log('player is ', player);
    }
    change(event) {
        console.log('player state is ', event.data);
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.route.events.subscribe(event => {
                if (this.event && event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationStart"]) {
                    this.event.target.pauseVideo();
                }
            });
            const tag = document.createElement('script');
            this.user = yield this.storage.get('User');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(tag);
            this.getVideoID();
            this.getPoint();
        });
    }
    savePlayer($event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.event = $event;
            if (!$event) {
                return;
            }
            this.interval = setInterval(() => {
                if (this.lastTime != $event.target.playerInfo.currentTime.toFixed(0)) {
                    this.passedTIme++;
                    this.lastTime = $event.target.playerInfo.currentTime.toFixed(0);
                }
                //&& !this.lock
                if ((this.maxTime - this.passedTIme) == 0 && !this.lock) {
                    this.updateCamping(Object.assign({}, this.video));
                    this.getPoint();
                    this.lock = true;
                    clearInterval(this.interval);
                }
            }, 1000);
        });
    }
    getVideoID() {
        this.comp.getcampingsList((res => res.orderByChild('expired').equalTo(null))).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((changes) => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe((camping) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.camping = camping;
            this.videoUrls = camping.filter(ele => {
                if (!ele.done)
                    return ele;
                if (ele.done.indexOf(this.user) == -1)
                    return ele;
                return null;
            });
            yield this.showMore();
        }));
    }
    showMore() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.lengthOfArrayOfVideo++;
            let video = this.videoUrls[this.lengthOfArrayOfVideo];
            if (video != undefined) {
                this.video = video;
                this.lock = false;
                this.videoId = video.videoUrl;
                this.points = +video.second;
                this.maxTime = +video.second;
                this.passedTIme = 0;
                this.lastTime = 0;
                this.savePlayer(this.event);
            }
            else {
                this.noVideos = true;
            }
        });
    }
    UpdateUSerPoints(points) {
        let user = this.firebaseService.getDataOfUser(this.user).then(e => {
            let UserEdited = Object.assign({}, e.docs[0].data(), { point: e.docs[0].data().point + points });
            // e.docs[0].data().point + points;
            this.firebaseService.updateUser(UserEdited);
            // if (this.status){
            this.showPoint = this.showPoint + points;
            let title = this.translate.instant('you have got');
            let point = this.translate.instant('points');
            this.presentAlert(title + points + point);
            this.point = this.showPoint;
            document.getElementById('point').textContent = this.showPoint;
            //   this.showMore()
            // }
        });
    }
    getPoint() {
        this.firebaseService.getDataOfUser(this.user).then(point => {
            this.showPoint = point.docs[0].data().point;
        });
        return this.showPoint;
    }
    updateCamping(video) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            video.done = video.done ? video.done : [];
            video.done.push(this.user);
            if (video.done.length == video.view)
                video.expired = true;
            yield this.comp.updatecamping(video.key, video);
            yield this.UpdateUSerPoints((+video.point / +video.view) - ((+video.point / +video.view) * 0.2));
        });
    }
    presentAlert(title) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                // subHeader: 'Subtitle',
                message: title,
                buttons: ['OK'],
            });
            setTimeout(() => {
                this.alertController.dismiss();
            }, 3000);
            yield alert.present();
        });
    }
    Reload() {
        window.location.reload();
    }
};
Tab3Page.ctorParameters = () => [
    { type: src_app_firebase_campings_service__WEBPACK_IMPORTED_MODULE_3__["CampingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_firebase_campings_service__WEBPACK_IMPORTED_MODULE_3__["CampingsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map