function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy-point-buy-point-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/buy-point/buy-point.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buy-point/buy-point.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBuyPointBuyPointPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>{{ 'buy Points' | translate}} \n      <strong>{{showPoint}}</strong>\n\n    </ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-back-button ></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"main\" *ngFor=\"let offer of AllOffers\">\n    <label class=\"left\">\n        {{ offer.point}}  {{ 'Points' | translate}}\n      \n    </label>\n    <label class=\"right\">\n        {{ offer.cash}} $\n    </label>\n  </ion-card>\n\n\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Observer.js":
  /*!************************************************!*\
    !*** ./node_modules/rxjs/internal/Observer.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObserverJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var hostReportError_1 = __webpack_require__(
    /*! ./util/hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    exports.empty = {
      closed: true,
      next: function next(value) {},
      error: function error(err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError_1.hostReportError(err);
        }
      },
      complete: function complete() {}
    }; //# sourceMappingURL=Observer.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subscriber.js":
  /*!**************************************************!*\
    !*** ./node_modules/rxjs/internal/Subscriber.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isFunction_1 = __webpack_require__(
    /*! ./util/isFunction */
    "./node_modules/rxjs/internal/util/isFunction.js");

    var Observer_1 = __webpack_require__(
    /*! ./Observer */
    "./node_modules/rxjs/internal/Observer.js");

    var Subscription_1 = __webpack_require__(
    /*! ./Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../internal/symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var hostReportError_1 = __webpack_require__(
    /*! ./util/hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    var Subscriber = function (_super) {
      __extends(Subscriber, _super);

      function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;

        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;

        switch (arguments.length) {
          case 0:
            _this.destination = Observer_1.empty;
            break;

          case 1:
            if (!destinationOrNext) {
              _this.destination = Observer_1.empty;
              break;
            }

            if (typeof destinationOrNext === 'object') {
              if (destinationOrNext instanceof Subscriber) {
                _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this.destination = destinationOrNext;
                destinationOrNext.add(_this);
              } else {
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext);
              }

              break;
            }

          default:
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
            break;
        }

        return _this;
      }

      Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return this;
      };

      Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
      };

      Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
          this._next(value);
        }
      };

      Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
          this.isStopped = true;

          this._error(err);
        }
      };

      Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
          this.isStopped = true;

          this._complete();
        }
      };

      Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
          return;
        }

        this.isStopped = true;

        _super.prototype.unsubscribe.call(this);
      };

      Subscriber.prototype._next = function (value) {
        this.destination.next(value);
      };

      Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
      };

      Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
      };

      Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
      };

      return Subscriber;
    }(Subscription_1.Subscription);

    exports.Subscriber = Subscriber;

    var SafeSubscriber = function (_super) {
      __extends(SafeSubscriber, _super);

      function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;

        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;

        if (isFunction_1.isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error = observerOrNext.error;
          complete = observerOrNext.complete;

          if (observerOrNext !== Observer_1.empty) {
            context = Object.create(observerOrNext);

            if (isFunction_1.isFunction(context.unsubscribe)) {
              _this.add(context.unsubscribe.bind(context));
            }

            context.unsubscribe = _this.unsubscribe.bind(_this);
          }
        }

        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
      }

      SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
          var _parentSubscriber = this._parentSubscriber;

          if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._next, value);
          } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;

          if (this._error) {
            if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._error, err);

              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, this._error, err);

              this.unsubscribe();
            }
          } else if (!_parentSubscriber.syncErrorThrowable) {
            this.unsubscribe();

            if (useDeprecatedSynchronousErrorHandling) {
              throw err;
            }

            hostReportError_1.hostReportError(err);
          } else {
            if (useDeprecatedSynchronousErrorHandling) {
              _parentSubscriber.syncErrorValue = err;
              _parentSubscriber.syncErrorThrown = true;
            } else {
              hostReportError_1.hostReportError(err);
            }

            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.complete = function () {
        var _this = this;

        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;

          if (this._complete) {
            var wrappedComplete = function wrappedComplete() {
              return _this._complete.call(_this._context);
            };

            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(wrappedComplete);

              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, wrappedComplete);

              this.unsubscribe();
            }
          } else {
            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
          fn.call(this._context, value);
        } catch (err) {
          this.unsubscribe();

          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError_1.hostReportError(err);
          }
        }
      };

      SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw new Error('bad call');
        }

        try {
          fn.call(this._context, value);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
          } else {
            hostReportError_1.hostReportError(err);
            return true;
          }
        }

        return false;
      };

      SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;

        _parentSubscriber.unsubscribe();
      };

      return SafeSubscriber;
    }(Subscriber);

    exports.SafeSubscriber = SafeSubscriber; //# sourceMappingURL=Subscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subscription.js":
  /*!****************************************************!*\
    !*** ./node_modules/rxjs/internal/Subscription.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubscriptionJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isArray_1 = __webpack_require__(
    /*! ./util/isArray */
    "./node_modules/rxjs/internal/util/isArray.js");

    var isObject_1 = __webpack_require__(
    /*! ./util/isObject */
    "./node_modules/rxjs/internal/util/isObject.js");

    var isFunction_1 = __webpack_require__(
    /*! ./util/isFunction */
    "./node_modules/rxjs/internal/util/isFunction.js");

    var UnsubscriptionError_1 = __webpack_require__(
    /*! ./util/UnsubscriptionError */
    "./node_modules/rxjs/internal/util/UnsubscriptionError.js");

    var Subscription = function () {
      function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;

        if (unsubscribe) {
          this._unsubscribe = unsubscribe;
        }
      }

      Subscription.prototype.unsubscribe = function () {
        var errors;

        if (this.closed) {
          return;
        }

        var _a = this,
            _parentOrParents = _a._parentOrParents,
            _unsubscribe = _a._unsubscribe,
            _subscriptions = _a._subscriptions;

        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;

        if (_parentOrParents instanceof Subscription) {
          _parentOrParents.remove(this);
        } else if (_parentOrParents !== null) {
          for (var index = 0; index < _parentOrParents.length; ++index) {
            var parent_1 = _parentOrParents[index];
            parent_1.remove(this);
          }
        }

        if (isFunction_1.isFunction(_unsubscribe)) {
          try {
            _unsubscribe.call(this);
          } catch (e) {
            errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
          }
        }

        if (isArray_1.isArray(_subscriptions)) {
          var index = -1;
          var len = _subscriptions.length;

          while (++index < len) {
            var sub = _subscriptions[index];

            if (isObject_1.isObject(sub)) {
              try {
                sub.unsubscribe();
              } catch (e) {
                errors = errors || [];

                if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                  errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                } else {
                  errors.push(e);
                }
              }
            }
          }
        }

        if (errors) {
          throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
      };

      Subscription.prototype.add = function (teardown) {
        var subscription = teardown;

        if (!teardown) {
          return Subscription.EMPTY;
        }

        switch (typeof teardown) {
          case 'function':
            subscription = new Subscription(teardown);

          case 'object':
            if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
              return subscription;
            } else if (this.closed) {
              subscription.unsubscribe();
              return subscription;
            } else if (!(subscription instanceof Subscription)) {
              var tmp = subscription;
              subscription = new Subscription();
              subscription._subscriptions = [tmp];
            }

            break;

          default:
            {
              throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }

        var _parentOrParents = subscription._parentOrParents;

        if (_parentOrParents === null) {
          subscription._parentOrParents = this;
        } else if (_parentOrParents instanceof Subscription) {
          if (_parentOrParents === this) {
            return subscription;
          }

          subscription._parentOrParents = [_parentOrParents, this];
        } else if (_parentOrParents.indexOf(this) === -1) {
          _parentOrParents.push(this);
        } else {
          return subscription;
        }

        var subscriptions = this._subscriptions;

        if (subscriptions === null) {
          this._subscriptions = [subscription];
        } else {
          subscriptions.push(subscription);
        }

        return subscription;
      };

      Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;

        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);

          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };

      Subscription.EMPTY = function (empty) {
        empty.closed = true;
        return empty;
      }(new Subscription());

      return Subscription;
    }();

    exports.Subscription = Subscription;

    function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function (errs, err) {
        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
      }, []);
    } //# sourceMappingURL=Subscription.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/config.js":
  /*!**********************************************!*\
    !*** ./node_modules/rxjs/internal/config.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalConfigJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    exports.config = {
      Promise: undefined,

      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error = new Error();
          console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }

        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },

      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }

    }; //# sourceMappingURL=config.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/operators/map.js":
  /*!*****************************************************!*\
    !*** ./node_modules/rxjs/internal/operators/map.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalOperatorsMapJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics2 = function extendStatics(d, b) {
        _extendStatics2 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics2(d, b);
      };

      return function (d, b) {
        _extendStatics2(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ../Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    function map(project, thisArg) {
      return function mapOperation(source) {
        if (typeof project !== 'function') {
          throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }

        return source.lift(new MapOperator(project, thisArg));
      };
    }

    exports.map = map;

    var MapOperator = function () {
      function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
      }

      MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
      };

      return MapOperator;
    }();

    exports.MapOperator = MapOperator;

    var MapSubscriber = function (_super) {
      __extends(MapSubscriber, _super);

      function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;

        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
      }

      MapSubscriber.prototype._next = function (value) {
        var result;

        try {
          result = this.project.call(this.thisArg, value, this.count++);
        } catch (err) {
          this.destination.error(err);
          return;
        }

        this.destination.next(result);
      };

      return MapSubscriber;
    }(Subscriber_1.Subscriber); //# sourceMappingURL=map.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSymbolRxSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.rxSubscriber = function () {
      return typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
    }();

    exports.$$rxSubscriber = exports.rxSubscriber; //# sourceMappingURL=rxSubscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
  /*!****************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilUnsubscriptionErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var UnsubscriptionErrorImpl = function () {
      function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
          return i + 1 + ") " + err.toString();
        }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
      }

      UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
      return UnsubscriptionErrorImpl;
    }();

    exports.UnsubscriptionError = UnsubscriptionErrorImpl; //# sourceMappingURL=UnsubscriptionError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/hostReportError.js":
  /*!************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilHostReportErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function hostReportError(err) {
      setTimeout(function () {
        throw err;
      }, 0);
    }

    exports.hostReportError = hostReportError; //# sourceMappingURL=hostReportError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isArray.js":
  /*!****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isArray.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsArrayJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.isArray = function () {
      return Array.isArray || function (x) {
        return x && typeof x.length === 'number';
      };
    }(); //# sourceMappingURL=isArray.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/isFunction.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsFunctionJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isFunction(x) {
      return typeof x === 'function';
    }

    exports.isFunction = isFunction; //# sourceMappingURL=isFunction.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isObject.js":
  /*!*****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isObject.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsObjectJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isObject(x) {
      return x !== null && typeof x === 'object';
    }

    exports.isObject = isObject; //# sourceMappingURL=isObject.js.map

    /***/
  },

  /***/
  "./src/app/buy-point/buy-point-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/buy-point/buy-point-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: BuyPointPageRoutingModule */

  /***/
  function srcAppBuyPointBuyPointRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuyPointPageRoutingModule", function () {
      return BuyPointPageRoutingModule;
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


    var _buy_point_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./buy-point.page */
    "./src/app/buy-point/buy-point.page.ts");

    var routes = [{
      path: '',
      component: _buy_point_page__WEBPACK_IMPORTED_MODULE_3__["BuyPointPage"]
    }];

    var BuyPointPageRoutingModule = function BuyPointPageRoutingModule() {
      _classCallCheck(this, BuyPointPageRoutingModule);
    };

    BuyPointPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BuyPointPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/buy-point/buy-point.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/buy-point/buy-point.module.ts ***!
    \***********************************************/

  /*! exports provided: BuyPointPageModule */

  /***/
  function srcAppBuyPointBuyPointModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuyPointPageModule", function () {
      return BuyPointPageModule;
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


    var _buy_point_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./buy-point-routing.module */
    "./src/app/buy-point/buy-point-routing.module.ts");
    /* harmony import */


    var _buy_point_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./buy-point.page */
    "./src/app/buy-point/buy-point.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var BuyPointPageModule = function BuyPointPageModule() {
      _classCallCheck(this, BuyPointPageModule);
    };

    BuyPointPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _buy_point_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyPointPageRoutingModule"]],
      declarations: [_buy_point_page__WEBPACK_IMPORTED_MODULE_6__["BuyPointPage"]]
    })], BuyPointPageModule);
    /***/
  },

  /***/
  "./src/app/buy-point/buy-point.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/buy-point/buy-point.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppBuyPointBuyPointPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  padding: 20px;\n}\n\n.left {\n  width: 75%;\n  float: left;\n  text-align: left;\n}\n\n.main {\n  width: 90%;\n  margin-right: 5%;\n  margin-left: 5%;\n  font-size: 20px;\n}\n\n.lastLabel {\n  width: 220px;\n}\n\nstrong {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZGVyL0RvY3VtZW50cy90dWJlLWFwcC90dXBlL3NyYy9hcHAvYnV5LXBvaW50L2J1eS1wb2ludC5wYWdlLnNjc3MiLCJzcmMvYXBwL2J1eS1wb2ludC9idXktcG9pbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREtBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7QUNGSjs7QURJQTtFQUNJLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2J1eS1wb2ludC9idXktcG9pbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbi5sZWZ0e1xuICAgIHdpZHRoOjc1JTtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICB9XG4vLyAucmlnaHR7XG4vLyAgICAgd2lkdGg6MTEwcHg7XG4vLyAgICAgZmxvYXQ6cmlnaHQ7XG4vLyAgICAgdGV4dC1hbGlnbjpyaWdodDtcbi8vICAgICB9XG4ubWFpbntcbiAgICB3aWR0aDo5MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubGFzdExhYmVse1xuICAgIHdpZHRoOjIyMHB4O1xufVxuc3Ryb25ne1xuICAgIGZsb2F0OiByaWdodDtcbiAgfSIsImlvbi1jYXJkIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmxlZnQge1xuICB3aWR0aDogNzUlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm1haW4ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmxhc3RMYWJlbCB7XG4gIHdpZHRoOiAyMjBweDtcbn1cblxuc3Ryb25nIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/buy-point/buy-point.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/buy-point/buy-point.page.ts ***!
    \*********************************************/

  /*! exports provided: BuyPointPage */

  /***/
  function srcAppBuyPointBuyPointPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuyPointPage", function () {
      return BuyPointPage;
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


    var src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/firebase/firebase.service */
    "./src/app/firebase/firebase.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _firebase_offers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../firebase/offers.service */
    "./src/app/firebase/offers.service.ts");
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/internal/operators/map */
    "./node_modules/rxjs/internal/operators/map.js");
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__);

    var BuyPointPage = /*#__PURE__*/function () {
      function BuyPointPage(firebaseService, offersService, storage) {
        _classCallCheck(this, BuyPointPage);

        this.firebaseService = firebaseService;
        this.offersService = offersService;
        this.storage = storage;
      }

      _createClass(BuyPointPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.getOffers();
                    _context.next = 3;
                    return this.storage.get('User');

                  case 3:
                    this.user = _context.sent;
                    this.getPoint();

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

          this.firebaseService.getDataOfUser(this.user).then(function (point) {
            _this2.showPoint = point.docs[0].data().point;
          });
          return this.showPoint;
        }
      }, {
        key: "getOffers",
        value: function getOffers() {
          var _this3 = this;

          this.offersService.getoffersList(function (res) {
            return res.orderByChild('point');
          }).snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            return changes.map(function (c) {
              return Object.assign({
                key: c.payload.key
              }, c.payload.val());
            });
          })).subscribe(function (offer) {
            _this3.AllOffers = offer;
            console.log(_this3.AllOffers);
          });
        }
      }]);

      return BuyPointPage;
    }();

    BuyPointPage.ctorParameters = function () {
      return [{
        type: src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: _firebase_offers_service__WEBPACK_IMPORTED_MODULE_4__["OffersService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    BuyPointPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-buy-point',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./buy-point.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/buy-point/buy-point.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./buy-point.page.scss */
      "./src/app/buy-point/buy-point.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _firebase_offers_service__WEBPACK_IMPORTED_MODULE_4__["OffersService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])], BuyPointPage);
    /***/
  },

  /***/
  "./src/app/firebase/offers.service.ts":
  /*!********************************************!*\
    !*** ./src/app/firebase/offers.service.ts ***!
    \********************************************/

  /*! exports provided: OffersService */

  /***/
  function srcAppFirebaseOffersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersService", function () {
      return OffersService;
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


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");

    var OffersService = /*#__PURE__*/function () {
      function OffersService(db) {
        _classCallCheck(this, OffersService);

        this.db = db;
        this.dbPath = '/offers';
        this.offersRef = null;
        this.offersRef = db.list(this.dbPath);
      }

      _createClass(OffersService, [{
        key: "getoffersList",
        value: function getoffersList(query) {
          return this.db.list(this.dbPath, query);
        }
      }, {
        key: "getAlloffers",
        value: function getAlloffers() {
          return this.db.list(this.dbPath);
        }
      }]);

      return OffersService;
    }();

    OffersService.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }];
    };

    OffersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])], OffersService);
    /***/
  }
}]);
//# sourceMappingURL=buy-point-buy-point-module-es5.js.map