(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../../Modules/brandManager/brand-manager.module": [
		"./src/app/Modules/brandManager/brand-manager.module.ts",
		"Modules-brandManager-brand-manager-module"
	],
	"../../Modules/incidents/incidents.module": [
		"./src/app/Modules/incidents/incidents.module.ts",
		"Modules-incidents-incidents-module~Modules-installation-installation-module",
		"common",
		"Modules-incidents-incidents-module"
	],
	"../../Modules/installation/installation.module": [
		"./src/app/Modules/installation/installation.module.ts",
		"Modules-incidents-incidents-module~Modules-installation-installation-module",
		"common",
		"Modules-installation-installation-module"
	],
	"../../Modules/serviceEngineer/service-engineer.module": [
		"./src/app/Modules/serviceEngineer/service-engineer.module.ts",
		"common",
		"Modules-serviceEngineer-service-engineer-module"
	],
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"common",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"wrapper\">\n  <app-sidebar ></app-sidebar>\n  <div class=\"main-panel\">\n    <app-navbar ></app-navbar>\n    <div class=\"content\">\n      <router-outlet></router-outlet>\n    </div>\n    <app-footer></app-footer>\n  </div>\n\n</div> -->\n<router-outlet></router-outlet>"

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
        this.title = 'iServe';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _providers_custom_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/custom-http.service */ "./src/app/providers/custom-http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_login_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.service */ "./src/app/components/login/login.service.ts");
/* harmony import */ var _providers_tost_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./providers/tost.service */ "./src/app/providers/tost.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    {
        path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            providers: [
                _providers_tost_service__WEBPACK_IMPORTED_MODULE_10__["TostService"],
                _components_login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"], _providers_custom_http_service__WEBPACK_IMPORTED_MODULE_5__["CustomHttpService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\r\n    <div class=\"page-header login-page header-filter bg-image\" filter-color=\"black\">\r\n        <div class=\"bg-color\">\r\n            <div class=\"container\">\r\n                <div class=\"navbar-wrapper\" class=\"lightColor\">\r\n                    <h3>iServe</h3>\r\n                </div>\r\n                <!-- login form start here -->\r\n                <div *ngIf=\"login\" class=\"col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto animated bounceInDown\">\r\n                    <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\" class=\"form\">\r\n                        <div class=\"card card-login \">\r\n                            <div class=\"card-header card-header-rose text-center\">\r\n                                <h4 class=\"card-title\">Login</h4>\r\n                            </div>\r\n                            <div class=\"card-body \">\r\n                                <span class=\"bmd-form-group\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"material-icons\">face</i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <input type=\"text\" required class=\"form-control\" id=\"userName\" name=\"userName\"\r\n                                            [(ngModel)]=\"user.name\" #userName=\"ngModel\">\r\n                                    </div>\r\n                                </span>\r\n                                <span class=\"bmd-form-group\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"material-icons\">lock_outline</i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"user.password\"\r\n                                            id=\"pwd\" name=\"password\" #password=\"ngModel\">\r\n                                        <span><i class=\"material-icons\" style=\"padding-top:18px;\">visibility</i></span>\r\n                                    </div>\r\n                                </span>\r\n                                <span class=\"bmd-form-group\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"material-icons\">\r\n                                                    supervised_user_circle\r\n                                                </i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n\r\n                                        <select required class=\"form-control selectpicker\" data-style=\"btn btn-link\"\r\n                                            [(ngModel)]=\"user.userType\" name=\"userType\" #userType=\"ngModel\">\r\n                                            <option *ngFor=\"let type of userTypes\" [value]=\"type\"> {{type}} </option>\r\n\r\n                                        </select>\r\n\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"card-footer justify-content-center\">\r\n                                <button *ngIf=\"!submitButton\" type=\"submit\" [disabled]=\"!loginForm.form.valid\" class=\"btn btn-rose btn-link btn-lg\">Login</button>\r\n                                <button *ngIf=\"submitButton\" type=\"button\" class=\"btn btn-rose btn-link btn-lg\">Submitting\r\n                                    <i class=\"fa fa-spinner fa-spin\" style=\"margin-left:8px;\"></i></button>\r\n                            </div>\r\n                            <span>\r\n                                <button style=\"float: right\" type=\"button\" class=\"btn btn-rose btn-link btn-sm\"><a\r\n                                        (click)=\"forgetPwdCick()\">Forget\r\n                                        Password</a></button>\r\n\r\n                            </span>\r\n\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </div>\r\n                <!-- login form start here -->\r\n\r\n                <!-- forget pasword form start here -->\r\n\r\n                \r\n                <!-- enter user name form start here  -->\r\n                <div *ngIf=\"userFrom\" class=\"col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto animated bounceInDown\">\r\n\r\n                    <form #userForm=\"ngForm\" class=\"form\">\r\n                        <div class=\"card card-login \">\r\n                            <div class=\"card-header card-header-rose text-center\">\r\n                                <h4 class=\"card-title\">Enter User Name</h4>\r\n                            </div>\r\n                            <div class=\"card-body \">\r\n                                <span class=\"bmd-form-group\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"material-icons\">face</i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <input type=\"text\" required placeholder=\"User Name\" class=\"form-control\" id=\"forgetUserName\"\r\n                                            name=\"forgetUserName\" [(ngModel)]=\"forgetUserName\" #userName=\"ngModel\">\r\n\r\n\r\n                                    </div>\r\n                                </span>\r\n\r\n\r\n\r\n\r\n\r\n                            </div>\r\n                            <div class=\"card-footer justify-content-center\">\r\n                                <button *ngIf=\"!userFormButton\" type=\"button\" [disabled]=\"!userForm.form.valid\" (click)=\"getOtpClick()\"\r\n                                    class=\"btn btn-rose btn-link btn-lg\">Get\r\n                                    Otp </button>\r\n\r\n                                <button *ngIf=\"userFormButton\" type=\"button\" class=\"btn btn-rose btn-link btn-md\">Submitting\r\n                                    <i class=\"fa fa-spinner fa-spin\" style=\"margin-left:8px;\"></i></button>\r\n                            </div>\r\n                            <span>\r\n                                <button style=\"float: right\" type=\"button\" class=\"btn btn-rose btn-link btn-sm\"><a href=\"/login\">Login\r\n                                        Page</a></button>\r\n\r\n                            </span>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </div>\r\n                <!-- enter user name form end  here  -->\r\n\r\n                <!-- enter otp form start here -->\r\n                <div *ngIf=\"otpForm\" class=\"col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto animated bounceInDown\">\r\n\r\n                    <form #otpForm=\"ngForm\" class=\"form\">\r\n                        <div class=\"card card-login \">\r\n                            <div class=\"card-header card-header-rose text-center\">\r\n                                <h4 class=\"card-title\">Enter New Password</h4>\r\n                            </div>\r\n                            <div class=\"card-body \">\r\n                                <span class=\"bmd-form-group\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"material-icons\">face</i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <input type=\"text\" required placeholder=\"User Name\" class=\"form-control\" id=\"forgetName\"\r\n                                            name=\"forgetName\" [(ngModel)]=\"forgetUserName\" #forgetName=\"ngModel\">\r\n\r\n\r\n                                    </div>\r\n                                </span>\r\n\r\n                                <span class=\"bmd-form-group\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"material-icons\">lock_outline</i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <input type=\"password\" class=\"form-control\" placeholder=\"Enter New Password\"\r\n                                            [(ngModel)]=\"forgetPassword\" id=\"Password\" name=\"Password\" #Password=\"ngModel\">\r\n                                        <span><i class=\"material-icons\" style=\"padding-top:18px;\">visibility</i></span>\r\n                                    </div>\r\n                                </span>\r\n                                <span class=\"bmd-form-group\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"material-icons\">lock_outline</i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"O T P\" [(ngModel)]=\"otp\"\r\n                                            id=\"otp1\" name=\"otp1\" #otp1=\"ngModel\">\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n\r\n                            <div class=\"card-footer justify-content-center\">\r\n                                <button *ngIf=\"!otpFormButton\" type=\"button\" [disabled]=\"!otpForm.form.valid\" (click)=\"passwordChangeClick()\"\r\n                                    class=\"btn btn-rose btn-link btn-lg\">Change\r\n                                    Password </button>\r\n\r\n                                <button *ngIf=\"otpFormButton\" type=\"button\" class=\"btn btn-rose btn-link btn-md\">Submitting\r\n                                    <i class=\"fa fa-spinner fa-spin\" style=\"margin-left:8px;\"></i></button>\r\n                            </div>\r\n                            <span>\r\n                                <button style=\"float: right\" type=\"button\" class=\"btn btn-rose btn-link btn-sm\"><a href=\"/login\">Login\r\n                                        Page</a></button>\r\n\r\n                            </span>\r\n\r\n\r\n\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </div>\r\n                <!-- enter otp form end here -->\r\n\r\n\r\n                <!-- forget pasword form start here -->\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<footer class=\"footer \">\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"https://www.nxtlifetechnologies.com\">\r\n                        NxtLife Technologies\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        About Us\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Licenses\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <div class=\"copyright pull-right\">\r\n            &copy; 2018, developed by\r\n            <a href=\"https://www.nxtlifetechnologies.com\" target=\"_blank\" class=\"secondaryColor\">NxtLife Technologies</a>\r\n            for a better experience.\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-image {\n  background-image: url(\"/assets/img/cover.jpg\");\n  height: 100vh;\n  background-size: cover; }\n\n.bg-color {\n  background: #080808b0;\n  height: 100vh; }\n\n.container {\n  padding-top: 20px;\n  padding-bottom: 200px; }\n\nselect,\nselect.form-control {\n  -webkit-appearance: menulist !important; }\n\nfooter {\n  color: white;\n  position: absolute;\n  bottom: 0;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_tost_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/tost.service */ "./src/app/providers/tost.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/components/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interface_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interface/user */ "./src/app/interface/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, tostservice, loginservice) {
        var _this = this;
        this.router = router;
        this.tostservice = tostservice;
        this.loginservice = loginservice;
        this.userTypes = ["management", "superadmin"];
        this.user = new _interface_user__WEBPACK_IMPORTED_MODULE_4__["User"]("Rajesh@123", "Abc@123", "");
        this.submitted = false;
        this.submitButton = false;
        this.login = true;
        this.userFrom = false;
        this.otpForm = false;
        this.userFormButton = false;
        this.otpFormButton = false;
        // store user information at a time of login
        this.storeInfo = function (res) {
            var success = _this.loginservice.storeUserInfo(res);
            success.subscribe(function (msg) {
                _this.navigateTo();
            }, function (err) {
                _this.tostservice.showNotificationFailure(err);
            });
        };
        if (this.loginservice.isLoggedIn()) {
            this.navigateTo();
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // user click on forget password
    LoginComponent.prototype.forgetPwdCick = function () {
        this.login = false;
        this.userFrom = true;
    };
    // request for otp or otp will be  send on user register phn no 
    LoginComponent.prototype.getOtpClick = function () {
        var _this = this;
        this.userFormButton = true;
        this.loginservice.getOtp(this.forgetUserName)
            .subscribe(function (res) {
            _this.userFrom = false;
            _this.userFormButton = false;
            _this.otpForm = true;
            _this.tostservice.showNotificationSuccess("Otp sent to register Phone No");
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
            _this.userFrom = true;
            _this.userFormButton = false;
        });
    };
    //  otp enter by user and request for password change by this function
    LoginComponent.prototype.passwordChangeClick = function () {
        var _this = this;
        this.otpFormButton = true;
        this.loginservice.forgetPwdChange({ "otp": this.otp, "username": this.forgetUserName, "password": this.forgetPassword })
            .subscribe(function (res) {
            _this.otpForm = false;
            _this.otpFormButton = false;
            _this.login = true;
            _this.tostservice.showNotificationSuccess("Password Change Successfuly");
        }, function (err) {
            _this.otpFormButton = false;
            _this.otpForm = true;
            _this.tostservice.showNotificationFailure(err);
        });
    };
    // user loging function
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitButton = true;
        this.loginservice.login(this.user)
            .subscribe(function (res) {
            localStorage.setItem("access_token", res.access_token);
            if (localStorage.getItem("currentUserName") == "management") {
                _this.loginservice.getUserInfo()
                    .subscribe(function (res) {
                    _this.storeInfo(res);
                    _this.tostservice.showNotificationSuccess("Login successfuly");
                }, function (err) {
                    _this.tostservice.showNotificationFailure(err);
                });
            }
            else {
                _this.navigateTo();
            }
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
            _this.submitButton = false;
        });
    };
    // navigate on the basis of user type
    LoginComponent.prototype.navigateTo = function () {
        if (localStorage.getItem("currentUserName") == "management") {
            this.router.navigate(['/dashboard']);
        }
        else if (localStorage.getItem("currentUserName") == "superadmin") {
            this.router.navigate(['/engineer']);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_providers_tost_service__WEBPACK_IMPORTED_MODULE_1__["TostService"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.service.ts":
/*!***************************************************!*\
  !*** ./src/app/components/login/login.service.ts ***!
  \***************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_custom_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/custom-http.service */ "./src/app/providers/custom-http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(customHttp) {
        this.customHttp = customHttp;
        this.username = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.useremail = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.usercontactno = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.userpicture = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isLoggedIn = function () {
            return localStorage.getItem('access_token') ? true : false;
        };
        //store user info in local storage
        this.storeUserInfo = function (userInfo) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                Object.keys(userInfo).forEach(function (key, index) {
                    localStorage.setItem(key, userInfo[key]);
                });
                observer.next('success');
                observer.complete();
            });
        };
    }
    LoginService.prototype.login = function (data) {
        localStorage.setItem("currentUserName", data.userType);
        localStorage.setItem("name", data.name);
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
            .set('x-account', data.userType);
        var login_api = "/oauth/token?grant_type=password&username=" + data.name + "&password=" + data.password;
        return this.customHttp.post(login_api, {}, header);
    };
    //get user info after login 
    LoginService.prototype.getUserInfo = function () {
        var userInfo_api = "/user-info";
        return this.customHttp.get(userInfo_api);
    };
    //delete access token from local storage
    LoginService.prototype.logout = function () {
        return localStorage.clear();
    };
    //whenever manager change his name its reflect to its subscribers
    LoginService.prototype.updateUsername = function (updateName) {
        localStorage.setItem("name", updateName);
        this.username.next(updateName);
    };
    //whenever manager change his email id its reflect to its subscribers
    LoginService.prototype.updateUserEmail = function (updateEmail) {
        localStorage.setItem("email", updateEmail);
        this.useremail.next(updateEmail);
    };
    //whenever manager change his phone no its reflect to its subscribers
    LoginService.prototype.updateUserContactNo = function (updateContactNo) {
        localStorage.setItem("contactNo", updateContactNo);
        this.usercontactno.next(updateContactNo);
    };
    //whenever manager change his  picture its reflect to its subscribers
    LoginService.prototype.updateUserPicture = function (updatePicture) {
        localStorage.setItem("picUrl", updatePicture);
        this.userpicture.next(updatePicture);
    };
    // edit brand manager details
    LoginService.prototype.editManagerdetails = function (fd) {
        return this.customHttp.put("/m", fd);
    };
    // for change profile pic
    LoginService.prototype.changePicture = function (fd) {
        return this.customHttp.post("/m/picture", fd);
    };
    // for change password
    LoginService.prototype.changeManagerPassword = function (fd) {
        return this.customHttp.put("/m/password", fd);
    };
    //  for get otp on register phn no.
    LoginService.prototype.getOtp = function (username) {
        return this.customHttp.get("/generate-otp/" + username);
    };
    //  forget password click request form change by entering username 
    LoginService.prototype.forgetPwdChange = function (fd) {
        return this.customHttp.put("/forgot-password", fd);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_providers_custom_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomHttpService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/interface/user.ts":
/*!***********************************!*\
  !*** ./src/app/interface/user.ts ***!
  \***********************************/
/*! exports provided: User, Token, UserInfo, AssingedEngineer, RejectComplaint, RejectInstallation, DateRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssingedEngineer", function() { return AssingedEngineer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectComplaint", function() { return RejectComplaint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectInstallation", function() { return RejectInstallation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRange", function() { return DateRange; });
var User = /** @class */ (function () {
    function User(name, password, userType) {
        this.name = name;
        this.password = password;
        this.userType = userType;
    }
    return User;
}());

var Token = /** @class */ (function () {
    function Token() {
    }
    return Token;
}());

var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

var AssingedEngineer = /** @class */ (function () {
    function AssingedEngineer() {
        this.updateInfo = "assignedServiceEngineer";
    }
    return AssingedEngineer;
}());

var RejectComplaint = /** @class */ (function () {
    function RejectComplaint() {
        this.updateInfo = "reject";
    }
    return RejectComplaint;
}());

var RejectInstallation = /** @class */ (function () {
    function RejectInstallation() {
        this.updateInfo = "reject";
    }
    return RejectInstallation;
}());

var DateRange = /** @class */ (function () {
    function DateRange() {
    }
    return DateRange;
}());



/***/ }),

/***/ "./src/app/providers/app.constants.ts":
/*!********************************************!*\
  !*** ./src/app/providers/app.constants.ts ***!
  \********************************************/
/*! exports provided: BASEURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASEURL", function() { return BASEURL; });
var BASEURL = "http://suvidha.us-east-2.elasticbeanstalk.com";


/***/ }),

/***/ "./src/app/providers/custom-http.service.ts":
/*!**************************************************!*\
  !*** ./src/app/providers/custom-http.service.ts ***!
  \**************************************************/
/*! exports provided: CustomHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpService", function() { return CustomHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.constants */ "./src/app/providers/app.constants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomHttpService = /** @class */ (function () {
    function CustomHttpService(httpClient) {
        this.httpClient = httpClient;
    }
    CustomHttpService.prototype.getAccessToken = function () {
        var basicToken = "nxtlifecustomersupport:suvidha";
        return localStorage.getItem('access_token') ? 'Bearer ' + localStorage.getItem('access_token') : 'Basic ' + btoa(basicToken);
    };
    CustomHttpService.prototype.addHeaders = function (optionalHeaders) {
        var requestHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', this.getAccessToken()).set("isWeb", "true");
        if (optionalHeaders) {
            for (var _i = 0, _a = optionalHeaders.keys(); _i < _a.length; _i++) {
                var header = _a[_i];
                requestHeaders = requestHeaders.append(header, optionalHeaders.get(header));
            }
        }
        return requestHeaders;
    };
    CustomHttpService.prototype.get = function (url, options) {
        var headers = this.addHeaders(options);
        return this.httpClient.get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["BASEURL"] + url, { headers: headers, observe: 'response' })
            .map(this.extractData)
            .catch(this.handleError);
    };
    CustomHttpService.prototype.post = function (url, body, options) {
        var headers = this.addHeaders(options);
        return this.httpClient.post(_app_constants__WEBPACK_IMPORTED_MODULE_2__["BASEURL"] + url, body, { headers: headers, observe: 'response' })
            .map(this.extractData)
            .catch(this.handleError);
    };
    CustomHttpService.prototype.postForRegister = function (url, body) {
        // no header is required for register 
        return this.httpClient.post(_app_constants__WEBPACK_IMPORTED_MODULE_2__["BASEURL"] + url, body, { observe: 'response' })
            .map(this.extractData)
            .catch(this.handleError);
    };
    CustomHttpService.prototype.put = function (url, body, options) {
        var headers = this.addHeaders(options);
        return this.httpClient.put(_app_constants__WEBPACK_IMPORTED_MODULE_2__["BASEURL"] + url, body, { headers: headers, observe: 'response' })
            .map(this.extractData)
            .catch(this.handleError);
    };
    CustomHttpService.prototype.delete = function (url, options) {
        var headers = this.addHeaders(options);
        return this.httpClient.delete(_app_constants__WEBPACK_IMPORTED_MODULE_2__["BASEURL"] + url, { headers: headers, observe: 'response' })
            .map(this.extractData)
            .catch(this.handleError);
    };
    CustomHttpService.prototype.extractData = function (res) {
        // console.log('inside extract data', res);
        return res.body || res.status;
    };
    CustomHttpService.prototype.handleError = function (err) {
        console.log('inside custom http', err);
        var errorInfo = {};
        console.log(err instanceof Error);
        if (err instanceof Error || err.error instanceof ProgressEvent) {
            /**A client-side or network error occurred. Handle it accordingly.*/
            // console.log('An error occurred:', );'
            errorInfo.status = err.status;
            errorInfo.status == 0 ? errorInfo.msg = "Can't connect to the Server please Try again later" : errorInfo.msg = err.message || 'Some Error Occured';
        }
        else {
            /**The backend returned an unsuccessful response code.*/
            // console.log('Server occurred:', error);
            errorInfo.status = err.status;
            errorInfo.msg = err.error.message;
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errorInfo);
    };
    CustomHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomHttpService);
    return CustomHttpService;
}());



/***/ }),

/***/ "./src/app/providers/tost.service.ts":
/*!*******************************************!*\
  !*** ./src/app/providers/tost.service.ts ***!
  \*******************************************/
/*! exports provided: TostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TostService", function() { return TostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TostService = /** @class */ (function () {
    function TostService() {
    }
    TostService.prototype.showNotificationSuccess = function (message) {
        $.notify({
            icon: "add_alert",
            message: message || "Successfull"
        }, {
            type: 'success',
            timer: 1000,
            placement: {
                from: "top",
                align: "right"
            }
        });
    };
    TostService.prototype.showNotificationFailure = function (err) {
        $.notify({
            icon: "error_outline",
            message: err.status + " " + err.msg,
        }, {
            type: 'danger',
            timer: 5000,
            placement: {
                from: "top",
                align: "right"
            }
        });
    };
    TostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TostService);
    return TostService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\iServe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map