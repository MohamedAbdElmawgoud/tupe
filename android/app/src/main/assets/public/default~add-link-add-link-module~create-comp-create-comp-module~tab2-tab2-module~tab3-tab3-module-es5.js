function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-link-add-link-module~create-comp-create-comp-module~tab2-tab2-module~tab3-tab3-module"], {
  /***/
  "./node_modules/@angular/youtube-player/fesm2015/youtube-player.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@angular/youtube-player/fesm2015/youtube-player.js ***!
    \*************************************************************************/

  /*! exports provided: YouTubePlayer, YouTubePlayerModule */

  /***/
  function node_modulesAngularYoutubePlayerFesm2015YoutubePlayerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YouTubePlayer", function () {
      return YouTubePlayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YouTubePlayerModule", function () {
      return YouTubePlayerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/youtube-player/youtube-player.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_PLAYER_WIDTH = 640;
    /** @type {?} */

    var DEFAULT_PLAYER_HEIGHT = 390;
    /**
     * @record
     */

    function Player() {}

    if (false) {}
    /**
     * Object used to store the state of the player if the
     * user tries to interact with the API before it has been loaded.
     * @record
     */


    function PendingPlayerState() {}

    if (false) {}
    /**
     * Angular component that renders a YouTube player via the YouTube player
     * iframe API.
     * @see https://developers.google.com/youtube/iframe_api_reference
     */


    var YouTubePlayer = /*#__PURE__*/function () {
      /**
       * @param {?} _ngZone
       * @param {?=} platformId
       */
      function YouTubePlayer(_ngZone,
      /**
       * @deprecated `platformId` parameter to become required.
       * @breaking-change 10.0.0
       */
      platformId) {
        _classCallCheck(this, YouTubePlayer);

        this._ngZone = _ngZone;
        this._videoId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._height = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](DEFAULT_PLAYER_HEIGHT);
        this._width = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](DEFAULT_PLAYER_WIDTH);
        this._startSeconds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._endSeconds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._suggestedQuality = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        /**
         * Outputs are direct proxies from the player itself.
         */

        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.apiChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.playbackQualityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.playbackRateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._youtubeContainer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // @breaking-change 10.0.0 Remove null check for `platformId`.

        this._isBrowser = platformId ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId) : typeof window === 'object' && !!window;
      }
      /**
       * YouTube Video ID to view
       * @return {?}
       */


      _createClass(YouTubePlayer, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this = this;

          // Don't do anything if we're not in a browser environment.
          if (!this._isBrowser) {
            return;
          }
          /** @type {?} */


          var iframeApiAvailableObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);

          if (!window.YT) {
            if (this.showBeforeIframeApiLoads) {
              throw new Error('Namespace YT not found, cannot construct embedded youtube player. ' + 'Please install the YouTube Player API Reference for iframe Embeds: ' + 'https://developers.google.com/youtube/iframe_api_reference');
            }
            /** @type {?} */


            var iframeApiAvailableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this._existingApiReadyCallback = window.onYouTubeIframeAPIReady;

            window.onYouTubeIframeAPIReady =
            /**
            * @return {?}
            */
            function () {
              if (_this._existingApiReadyCallback) {
                _this._existingApiReadyCallback();
              }

              _this._ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return iframeApiAvailableSubject.next(true);
              });
            };

            iframeApiAvailableObs = iframeApiAvailableSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(false));
          } // An observable of the currently loaded player.

          /** @type {?} */


          var playerObs = createPlayerObservable(this._youtubeContainer, this._videoId, iframeApiAvailableObs, this._width, this._height, this.createEventsBoundInZone(), this._ngZone).pipe(waitUntilReady(
          /**
          * @param {?} player
          * @return {?}
          */
          function (player) {
            // Destroy the player if loading was aborted so that we don't end up leaking memory.
            if (!playerIsReady(player)) {
              player.destroy();
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["publish"])()); // Set up side effects to bind inputs to the player.

          playerObs.subscribe(
          /**
          * @param {?} player
          * @return {?}
          */
          function (player) {
            _this._player = player;

            if (player && _this._pendingPlayerState) {
              _this._initializePlayer(player, _this._pendingPlayerState);
            }

            _this._pendingPlayerState = undefined;
          });
          bindSizeToPlayer(playerObs, this._width, this._height);
          bindSuggestedQualityToPlayer(playerObs, this._suggestedQuality);
          bindCueVideoCall(playerObs, this._videoId, this._startSeconds, this._endSeconds, this._suggestedQuality, this._destroyed); // After all of the subscriptions are set up, connect the observable.

          /** @type {?} */
          playerObs.connect();
        }
        /**
         * @return {?}
         */

      }, {
        key: "createEventsBoundInZone",
        value: function createEventsBoundInZone() {
          var _this2 = this;

          /** @type {?} */
          var output = {};
          /** @type {?} */

          var events = new Map([['onReady', this.ready], ['onStateChange', this.stateChange], ['onPlaybackQualityChange', this.playbackQualityChange], ['onPlaybackRateChange', this.playbackRateChange], ['onError', this.error], ['onApiChange', this.apiChange]]);
          events.forEach(
          /**
          * @param {?} emitter
          * @param {?} name
          * @return {?}
          */
          function (emitter, name) {
            // Since these events all trigger change detection, only bind them if something is subscribed.
            if (emitter.observers.length) {
              output[name] = _this2._runInZone(
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return emitter.emit(event);
              });
            }
          });
          return output;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._youtubeContainer.next(this.youtubeContainer.nativeElement);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._player) {
            this._player.destroy();

            window.onYouTubeIframeAPIReady = this._existingApiReadyCallback;
          }

          this._videoId.complete();

          this._height.complete();

          this._width.complete();

          this._startSeconds.complete();

          this._endSeconds.complete();

          this._suggestedQuality.complete();

          this._youtubeContainer.complete();

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * @private
         * @template T
         * @param {?} callback
         * @return {?}
         */

      }, {
        key: "_runInZone",
        value: function _runInZone(callback) {
          var _this3 = this;

          return (
            /**
            * @param {...?} args
            * @return {?}
            */
            function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              return _this3._ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return callback.apply(void 0, args);
              });
            }
          );
        }
        /** Proxied methods. */

        /**
         * See https://developers.google.com/youtube/iframe_api_reference#playVideo
         * @return {?}
         */

      }, {
        key: "playVideo",
        value: function playVideo() {
          if (this._player) {
            this._player.playVideo();
          } else {
            this._getPendingState().playbackState = 1
            /* PLAYING */
            ;
          }
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#pauseVideo
         * @return {?}
         */

      }, {
        key: "pauseVideo",
        value: function pauseVideo() {
          if (this._player) {
            this._player.pauseVideo();
          } else {
            this._getPendingState().playbackState = 2
            /* PAUSED */
            ;
          }
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#stopVideo
         * @return {?}
         */

      }, {
        key: "stopVideo",
        value: function stopVideo() {
          if (this._player) {
            this._player.stopVideo();
          } else {
            // It seems like YouTube sets the player to CUED when it's stopped.
            this._getPendingState().playbackState = 5
            /* CUED */
            ;
          }
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#seekTo
         * @param {?} seconds
         * @param {?} allowSeekAhead
         * @return {?}
         */

      }, {
        key: "seekTo",
        value: function seekTo(seconds, allowSeekAhead) {
          if (this._player) {
            this._player.seekTo(seconds, allowSeekAhead);
          } else {
            this._getPendingState().seek = {
              seconds: seconds,
              allowSeekAhead: allowSeekAhead
            };
          }
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#mute
         * @return {?}
         */

      }, {
        key: "mute",
        value: function mute() {
          if (this._player) {
            this._player.mute();
          } else {
            this._getPendingState().muted = true;
          }
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#unMute
         * @return {?}
         */

      }, {
        key: "unMute",
        value: function unMute() {
          if (this._player) {
            this._player.unMute();
          } else {
            this._getPendingState().muted = false;
          }
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#isMuted
         * @return {?}
         */

      }, {
        key: "isMuted",
        value: function isMuted() {
          if (this._player) {
            return this._player.isMuted();
          }

          if (this._pendingPlayerState) {
            return !!this._pendingPlayerState.muted;
          }

          return false;
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#setVolume
         * @param {?} volume
         * @return {?}
         */

      }, {
        key: "setVolume",
        value: function setVolume(volume) {
          if (this._player) {
            this._player.setVolume(volume);
          } else {
            this._getPendingState().volume = volume;
          }
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#getVolume
         * @return {?}
         */

      }, {
        key: "getVolume",
        value: function getVolume() {
          if (this._player) {
            return this._player.getVolume();
          }

          if (this._pendingPlayerState && this._pendingPlayerState.volume != null) {
            return this._pendingPlayerState.volume;
          }

          return 0;
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#setPlaybackRate
         * @param {?} playbackRate
         * @return {?}
         */

      }, {
        key: "setPlaybackRate",
        value: function setPlaybackRate(playbackRate) {
          if (this._player) {
            return this._player.setPlaybackRate(playbackRate);
          } else {
            this._getPendingState().playbackRate = playbackRate;
          }
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#getPlaybackRate
         * @return {?}
         */

      }, {
        key: "getPlaybackRate",
        value: function getPlaybackRate() {
          if (this._player) {
            return this._player.getPlaybackRate();
          }

          if (this._pendingPlayerState && this._pendingPlayerState.playbackRate != null) {
            return this._pendingPlayerState.playbackRate;
          }

          return 0;
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#getAvailablePlaybackRates
         * @return {?}
         */

      }, {
        key: "getAvailablePlaybackRates",
        value: function getAvailablePlaybackRates() {
          return this._player ? this._player.getAvailablePlaybackRates() : [];
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#getVideoLoadedFraction
         * @return {?}
         */

      }, {
        key: "getVideoLoadedFraction",
        value: function getVideoLoadedFraction() {
          return this._player ? this._player.getVideoLoadedFraction() : 0;
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#getPlayerState
         * @return {?}
         */

      }, {
        key: "getPlayerState",
        value: function getPlayerState() {
          if (!this._isBrowser || !window.YT) {
            return undefined;
          }

          if (this._player) {
            return this._player.getPlayerState();
          }

          if (this._pendingPlayerState && this._pendingPlayerState.playbackState != null) {
            return this._pendingPlayerState.playbackState;
          }

          return -1
          /* UNSTARTED */
          ;
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#getCurrentTime
         * @return {?}
         */

      }, {
        key: "getCurrentTime",
        value: function getCurrentTime() {
          if (this._player) {
            return this._player.getCurrentTime();
          }

          if (this._pendingPlayerState && this._pendingPlayerState.seek) {
            return this._pendingPlayerState.seek.seconds;
          }

          return 0;
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#getPlaybackQuality
         * @return {?}
         */

      }, {
        key: "getPlaybackQuality",
        value: function getPlaybackQuality() {
          return this._player ? this._player.getPlaybackQuality() : 'default';
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#getAvailableQualityLevels
         * @return {?}
         */

      }, {
        key: "getAvailableQualityLevels",
        value: function getAvailableQualityLevels() {
          return this._player ? this._player.getAvailableQualityLevels() : [];
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#getDuration
         * @return {?}
         */

      }, {
        key: "getDuration",
        value: function getDuration() {
          return this._player ? this._player.getDuration() : 0;
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#getVideoUrl
         * @return {?}
         */

      }, {
        key: "getVideoUrl",
        value: function getVideoUrl() {
          return this._player ? this._player.getVideoUrl() : '';
        }
        /**
         * See https://developers.google.com/youtube/iframe_api_reference#getVideoEmbedCode
         * @return {?}
         */

      }, {
        key: "getVideoEmbedCode",
        value: function getVideoEmbedCode() {
          return this._player ? this._player.getVideoEmbedCode() : '';
        }
        /**
         * Gets an object that should be used to store the temporary API state.
         * @private
         * @return {?}
         */

      }, {
        key: "_getPendingState",
        value: function _getPendingState() {
          if (!this._pendingPlayerState) {
            this._pendingPlayerState = {};
          }

          return this._pendingPlayerState;
        }
        /**
         * Initializes a player from a temporary state.
         * @private
         * @param {?} player
         * @param {?} state
         * @return {?}
         */

      }, {
        key: "_initializePlayer",
        value: function _initializePlayer(player, state) {
          var playbackState = state.playbackState,
              playbackRate = state.playbackRate,
              volume = state.volume,
              muted = state.muted,
              seek = state.seek;

          switch (playbackState) {
            case 1
            /* PLAYING */
            :
              player.playVideo();
              break;

            case 2
            /* PAUSED */
            :
              player.pauseVideo();
              break;

            case 5
            /* CUED */
            :
              player.stopVideo();
              break;
          }

          if (playbackRate != null) {
            player.setPlaybackRate(playbackRate);
          }

          if (volume != null) {
            player.setVolume(volume);
          }

          if (muted != null) {
            muted ? player.mute() : player.unMute();
          }

          if (seek != null) {
            player.seekTo(seek.seconds, seek.allowSeekAhead);
          }
        }
      }, {
        key: "videoId",
        get: function get() {
          return this._videoId.value;
        }
        /**
         * @param {?} videoId
         * @return {?}
         */
        ,
        set: function set(videoId) {
          this._videoId.next(videoId);
        }
        /**
         * Height of video player
         * @return {?}
         */

      }, {
        key: "height",
        get: function get() {
          return this._height.value;
        }
        /**
         * @param {?} height
         * @return {?}
         */
        ,
        set: function set(height) {
          this._height.next(height || DEFAULT_PLAYER_HEIGHT);
        }
        /**
         * Width of video player
         * @return {?}
         */

      }, {
        key: "width",
        get: function get() {
          return this._width.value;
        }
        /**
         * @param {?} width
         * @return {?}
         */
        ,
        set: function set(width) {
          this._width.next(width || DEFAULT_PLAYER_WIDTH);
        }
        /**
         * The moment when the player is supposed to start playing
         * @param {?} startSeconds
         * @return {?}
         */

      }, {
        key: "startSeconds",
        set: function set(startSeconds) {
          this._startSeconds.next(startSeconds);
        }
        /**
         * The moment when the player is supposed to stop playing
         * @param {?} endSeconds
         * @return {?}
         */

      }, {
        key: "endSeconds",
        set: function set(endSeconds) {
          this._endSeconds.next(endSeconds);
        }
        /**
         * The suggested quality of the player
         * @param {?} suggestedQuality
         * @return {?}
         */

      }, {
        key: "suggestedQuality",
        set: function set(suggestedQuality) {
          this._suggestedQuality.next(suggestedQuality);
        }
      }]);

      return YouTubePlayer;
    }();

    YouTubePlayer.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'youtube-player',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        // This div is *replaced* by the YouTube player embed.
        template: '<div #youtubeContainer></div>'
      }]
    }];
    /** @nocollapse */

    YouTubePlayer.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }];
    };

    YouTubePlayer.propDecorators = {
      videoId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      height: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      width: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      startSeconds: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      endSeconds: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      suggestedQuality: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showBeforeIframeApiLoads: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ready: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      stateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      error: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      apiChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      playbackQualityChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      playbackRateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      youtubeContainer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['youtubeContainer']
      }]
    };

    if (false) {}
    /**
     * Listens to changes to the given width and height and sets it on the player.
     * @param {?} playerObs
     * @param {?} widthObs
     * @param {?} heightObs
     * @return {?}
     */


    function bindSizeToPlayer(playerObs, widthObs, heightObs) {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([playerObs, widthObs, heightObs]).subscribe(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref) {
        var _ref2 = _slicedToArray(_ref, 3),
            player = _ref2[0],
            width = _ref2[1],
            height = _ref2[2];

        return player && player.setSize(width, height);
      });
    }
    /**
     * Listens to changes from the suggested quality and sets it on the given player.
     * @param {?} playerObs
     * @param {?} suggestedQualityObs
     * @return {?}
     */


    function bindSuggestedQualityToPlayer(playerObs, suggestedQualityObs) {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([playerObs, suggestedQualityObs]).subscribe(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            player = _ref4[0],
            suggestedQuality = _ref4[1];

        return player && suggestedQuality && player.setPlaybackQuality(suggestedQuality);
      });
    }
    /**
     * Returns an observable that emits the loaded player once it's ready. Certain properties/methods
     * won't be available until the iframe finishes loading.
     * @param {?} onAbort Callback function that will be invoked if the player loading was aborted before
     * it was able to complete. Can be used to clean up any loose references.
     * @return {?}
     */


    function waitUntilReady(onAbort) {
      return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(
      /**
      * @param {?} player
      * @return {?}
      */
      function (player) {
        if (!player) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        }

        if (playerIsReady(player)) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(
          /** @type {?} */
          player);
        } // Since removeEventListener is not on Player when it's initialized, we can't use fromEvent.
        // The player is not initialized fully until the ready is called.


        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} emitter
        * @return {?}
        */
        function (emitter) {
          /** @type {?} */
          var aborted = false;
          /** @type {?} */

          var resolved = false;
          /** @type {?} */

          var onReady =
          /**
          * @param {?} event
          * @return {?}
          */
          function onReady(event) {
            resolved = true;

            if (!aborted) {
              event.target.removeEventListener('onReady', onReady);
              emitter.next(event.target);
            }
          };

          player.addEventListener('onReady', onReady);
          return (
            /**
            * @return {?}
            */
            function () {
              aborted = true;

              if (!resolved) {
                onAbort(player);
              }
            }
          );
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(undefined));
      });
    }
    /**
     * Create an observable for the player based on the given options.
     * @param {?} youtubeContainer
     * @param {?} videoIdObs
     * @param {?} iframeApiAvailableObs
     * @param {?} widthObs
     * @param {?} heightObs
     * @param {?} events
     * @param {?} ngZone
     * @return {?}
     */


    function createPlayerObservable(youtubeContainer, videoIdObs, iframeApiAvailableObs, widthObs, heightObs, events, ngZone) {
      /** @type {?} */
      var playerOptions = videoIdObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([widthObs, heightObs])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            videoId = _ref6[0],
            _ref6$ = _slicedToArray(_ref6[1], 2),
            width = _ref6$[0],
            height = _ref6$[1];

        return videoId ? {
          videoId: videoId,
          width: width,
          height: height,
          events: events
        } : undefined;
      }));
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([youtubeContainer, playerOptions, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(ngZone)]).pipe(skipUntilRememberLatest(iframeApiAvailableObs), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(syncPlayerState, undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
    }
    /**
     * Skips the given observable until the other observable emits true, then emit the latest.
     * @template T
     * @param {?} notifier
     * @return {?}
     */


    function skipUntilRememberLatest(notifier) {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(notifier), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skipWhile"])(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            _ = _ref8[0],
            doneSkipping = _ref8[1];

        return !doneSkipping;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 1),
            value = _ref10[0];

        return value;
      }));
    }
    /**
     * Destroy the player if there are no options, or create the player if there are options.
     * @param {?} player
     * @param {?} __1
     * @return {?}
     */


    function syncPlayerState(player, _ref11) {
      var _ref12 = _slicedToArray(_ref11, 3),
          container = _ref12[0],
          videoOptions = _ref12[1],
          ngZone = _ref12[2];

      if (!videoOptions) {
        if (player) {
          player.destroy();
        }

        return;
      }

      if (player) {
        return player;
      } // Important! We need to create the Player object outside of the `NgZone`, because it kicks
      // off a 250ms setInterval which will continually trigger change detection if we don't.

      /** @type {?} */


      var newPlayer = ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        return new YT.Player(container, videoOptions);
      }); // Bind videoId for future use.

      newPlayer.videoId = videoOptions.videoId;
      return newPlayer;
    }
    /**
     * Call cueVideoById if the videoId changes, or when start or end seconds change. cueVideoById will
     * change the loaded video id to the given videoId, and set the start and end times to the given
     * start/end seconds.
     * @param {?} playerObs
     * @param {?} videoIdObs
     * @param {?} startSecondsObs
     * @param {?} endSecondsObs
     * @param {?} suggestedQualityObs
     * @param {?} destroyed
     * @return {?}
     */


    function bindCueVideoCall(playerObs, videoIdObs, startSecondsObs, endSecondsObs, suggestedQualityObs, destroyed) {
      /** @type {?} */
      var cueOptionsObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([startSecondsObs, endSecondsObs]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref13) {
        var _ref14 = _slicedToArray(_ref13, 2),
            startSeconds = _ref14[0],
            endSeconds = _ref14[1];

        return {
          startSeconds: startSeconds,
          endSeconds: endSeconds
        };
      })); // Only respond to changes in cue options if the player is not running.

      /** @type {?} */

      var filteredCueOptions = cueOptionsObs.pipe(filterOnOther(playerObs,
      /**
      * @param {?} player
      * @return {?}
      */
      function (player) {
        return !!player && !hasPlayerStarted(player);
      })); // If the video id changed, there's no reason to run 'cue' unless the player
      // was initialized with a different video id.

      /** @type {?} */

      var changedVideoId = videoIdObs.pipe(filterOnOther(playerObs,
      /**
      * @param {?} player
      * @param {?} videoId
      * @return {?}
      */
      function (player, videoId) {
        return !!player && player.videoId !== videoId;
      })); // If the player changed, there's no reason to run 'cue' unless there are cue options.

      /** @type {?} */

      var changedPlayer = playerObs.pipe(filterOnOther(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([videoIdObs, cueOptionsObs]),
      /**
      * @param {?} __0
      * @param {?} player
      * @return {?}
      */
      function (_ref15, player) {
        var _ref16 = _slicedToArray(_ref15, 2),
            videoId = _ref16[0],
            cueOptions = _ref16[1];

        return !!player && (videoId != player.videoId || !!cueOptions.startSeconds || !!cueOptions.endSeconds);
      }));
      Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(changedPlayer, changedVideoId, filteredCueOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([playerObs, videoIdObs, cueOptionsObs, suggestedQualityObs])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref17) {
        var _ref18 = _slicedToArray(_ref17, 2),
            _ = _ref18[0],
            values = _ref18[1];

        return values;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(destroyed)).subscribe(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref19) {
        var _ref20 = _slicedToArray(_ref19, 4),
            player = _ref20[0],
            videoId = _ref20[1],
            cueOptions = _ref20[2],
            suggestedQuality = _ref20[3];

        if (!videoId || !player) {
          return;
        }

        player.videoId = videoId;
        player.cueVideoById(Object.assign({
          videoId: videoId,
          suggestedQuality: suggestedQuality
        }, cueOptions));
      });
    }
    /**
     * @param {?} player
     * @return {?}
     */


    function hasPlayerStarted(player) {
      /** @type {?} */
      var state = player.getPlayerState();
      return state !== -1
      /* UNSTARTED */
      && state !== 5
      /* CUED */
      ;
    }
    /**
     * @param {?} player
     * @return {?}
     */


    function playerIsReady(player) {
      return 'getPlayerStatus' in player;
    }
    /**
     * Combines the two observables temporarily for the filter function.
     * @template R, T
     * @param {?} otherObs
     * @param {?} filterFn
     * @return {?}
     */


    function filterOnOther(otherObs, filterFn) {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(otherObs), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref21) {
        var _ref22 = _slicedToArray(_ref21, 2),
            value = _ref22[0],
            other = _ref22[1];

        return filterFn(other, value);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref23) {
        var _ref24 = _slicedToArray(_ref23, 1),
            value = _ref24[0];

        return value;
      }));
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/youtube-player/youtube-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var COMPONENTS = [YouTubePlayer];

    var YouTubePlayerModule = function YouTubePlayerModule() {
      _classCallCheck(this, YouTubePlayerModule);
    };

    YouTubePlayerModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: COMPONENTS,
        exports: COMPONENTS
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/youtube-player/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=youtube-player.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~add-link-add-link-module~create-comp-create-comp-module~tab2-tab2-module~tab3-tab3-module-es5.js.map