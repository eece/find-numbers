(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Find Numbers</title>\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link href=\"https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap\" rel=\"stylesheet\">\n</head>\n<body>\n  <div class=\"status\">\n    <div class=\"score\">Score:{{score}}</div>\n    <div class=\"score\">Guess:{{guess}}</div>\n  </div>\n  <div class=\"boxes\">\n    <div class=\"box\" *ngFor=\"let box of boxes; let i = index\" (click)=\"showBox(i)\">\n      <div class=\"inner\" *ngIf=\"box['visible']\" id=\"{{box['id']}}\">{{box['label']}}</div>\n    </div>\n  </div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: 'Shadows Into Light', cursive; }\n\n.status {\n  text-align: center;\n  border-bottom: 4px solid #000;\n  padding: 0 60px;\n  margin: 0 auto;\n  margin-bottom: 15px;\n  display: table; }\n\n.status > div {\n    display: inline-block;\n    margin: 15px;\n    font-size: 48px;\n    line-height: 52px; }\n\n.boxes {\n  display: flex;\n  margin: 0 auto;\n  flex-wrap: wrap;\n  width: 480px;\n  border: 2px solid #000;\n  max-width: 100%; }\n\n.boxes .box {\n    border: 2px solid #000;\n    box-sizing: border-box;\n    height: 120px;\n    width: 120px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-width: 25%; }\n\n.boxes .box .inner {\n      font-size: 48px;\n      line-height: 52px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGNhbGlzbWFsYXJcXGJ1bFxcZmluZC1udW1iZXJzL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQ0FBMEMsRUFDM0M7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsOEJBQTRCO0VBQzVCLGdCQUFjO0VBQ2QsZUFBYTtFQUNiLG9CQUFtQjtFQUNuQixlQUFjLEVBT2Y7O0FBYkQ7SUFRSSxzQkFBcUI7SUFDckIsYUFBVztJQUNYLGdCQUFlO0lBQ2Ysa0JBQWlCLEVBQ2xCOztBQUVIO0VBQ0UsY0FBYTtFQUNiLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGFBQVc7RUFDWCx1QkFBcUI7RUFDckIsZ0JBQWMsRUFlZjs7QUFyQkQ7SUFRSSx1QkFBcUI7SUFDckIsdUJBQXNCO0lBQ3RCLGNBQWE7SUFDYixhQUFXO0lBQ1gsY0FBYTtJQUNiLHdCQUF1QjtJQUN2QixvQkFBbUI7SUFDbkIsZUFBYyxFQUtmOztBQXBCSDtNQWlCTSxnQkFBZTtNQUNmLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnU2hhZG93cyBJbnRvIExpZ2h0JywgY3Vyc2l2ZTtcclxufVxyXG4uc3RhdHVzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTo0cHggc29saWQgIzAwMDtcclxuICBwYWRkaW5nOjAgNjBweDtcclxuICBtYXJnaW46MCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgJiA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46MTVweDtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xyXG4gIH1cclxufVxyXG4uYm94ZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOjQ4MHB4O1xyXG4gIGJvcmRlcjoycHggc29saWQgIzAwMDtcclxuICBtYXgtd2lkdGg6MTAwJTtcclxuICAuYm94IHtcclxuICAgIGJvcmRlcjoycHggc29saWQgIzAwMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgd2lkdGg6MTIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiAyNSU7XHJcbiAgICAuaW5uZXIge1xyXG4gICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Find Numbers';
        this.boxes = new Array();
        this.openedBoxes = new Array();
        this.score = 0;
        this.guess = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.generateBoxes('');
        this.generateBoxes('-2');
        this.boxes = this.Shuffle(this.boxes);
    };
    AppComponent.prototype.showBox = function (index) {
        if (!this.boxes[index].visible) {
            this.guess++;
            if (this.openedBoxes.length < 2) {
                this.addToOpened(index);
                if (this.openedBoxes.length == 2) {
                    this.checkOpenedBoxes();
                }
            }
            else { // 2 opened items
                console.log(this.openedBoxes);
                this.closeOpenedNonFoundBoxes();
                this.addToOpened(index);
            }
        }
    };
    AppComponent.prototype.closeOpenedNonFoundBoxes = function () {
        this.boxes.filter(function (item) { return item.visible == true && item.found == false; }).forEach(function (item) {
            item.visible = false;
        });
        this.openedBoxes = [];
    };
    AppComponent.prototype.checkOpenedBoxes = function () {
        var _this = this;
        if (this.openedBoxes[0].label == this.openedBoxes[1].label) { // Found Items
            this.boxes.filter(function (item) { return item.label == _this.openedBoxes[0].label; }).forEach(function (item) {
                item.found = true;
            });
            this.score++;
        }
    };
    AppComponent.prototype.addToOpened = function (index) {
        this.boxes[index].visible = true;
        this.openedBoxes.push(this.boxes[index]);
    };
    AppComponent.prototype.Shuffle = function (d) {
        var _a;
        var m = d.length, i;
        while (m) {
            i = (Math.random() * m--) >>> 0;
            _a = [d[i], d[m]], d[m] = _a[0], d[i] = _a[1];
        }
        return d;
    };
    AppComponent.prototype.generateBoxes = function (id) {
        for (var i = 1; i < 9; i++) {
            this.boxes.push({ id: i + id, label: i.toString(), visible: false, found: false });
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\calismalar\bul\find-numbers\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map