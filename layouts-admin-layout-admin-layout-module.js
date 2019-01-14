(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _edit_user_details_edit_user_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-user-details/edit-user-details.component */ "./src/app/components/edit-user-details/edit-user-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _edit_user_details_edit_user_details_component__WEBPACK_IMPORTED_MODULE_7__["EditUserDetailsComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/edit-user-details/edit-user-details.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/edit-user-details/edit-user-details.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content   card card-stats\">\r\n  <div class=\"card-header card-header-rose card-header-icon\">\r\n    <div class=\"card-icon\">\r\n      <i class=\"material-icons\">add_to_photos\r\n      </i>\r\n    </div>\r\n    <h3 class=\"card-title\"><b>Account Setting</b></h3>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div>\r\n          <span><b>Name : </b></span>\r\n          <span *ngIf=\"!(toBeEdit === 'Name')\">\r\n            &nbsp; &nbsp;{{editManagerDetails.name}} &nbsp; &nbsp; &nbsp; <i class=\" tiny material-icons editAccount\"\r\n              (click)=\"toEdit('Name')\">create</i>\r\n          </span>\r\n          <form #editForm=\"ngForm\" *ngIf=\"showForm\" style=\"display: inline-block;\">\r\n            <div class=\"row\" *ngIf=\"toBeEdit==='Name'\">\r\n\r\n\r\n\r\n              <span>\r\n                <input type=\"text\" required class=\"form-control padding-left\" id=\"name\" name=\"name\" [ngModel]=\"toBeEditValue\"\r\n                  #name=\"ngModel\"> <br />\r\n\r\n\r\n                <div [hidden]=\"name.valid || name.untouched\" style=\"color: red\">\r\n                  Name is required\r\n                </div>\r\n\r\n              </span>\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"resetForm()\"><i class=\"material-icons\">\r\n                  clear\r\n                </i></button>\r\n              <button *ngIf=\"!(formButtonHide || toBeEdit=='Profile Picture')\" type=\"submit\" (click)=\"editValue(editForm.value)\"\r\n                [disabled]=\"!editForm.valid\" class=\"btn btn-rose\"><i class=\"material-icons\">\r\n                  done\r\n                </i></button>\r\n              <br />\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"(editManagerDetails.userName)\"><b>User Name : </b>\r\n          &nbsp; &nbsp;{{editManagerDetails.userName}}\r\n        </div>\r\n\r\n        <div *ngIf=\"(editManagerDetails.userType)\"><b>User Type : </b>\r\n          &nbsp; &nbsp;{{editManagerDetails.userType}}\r\n        </div>\r\n        <!-- <email edit> -->\r\n        <div>\r\n          <span><b>Email : </b></span>\r\n          <span *ngIf=\"!(toBeEdit === 'Email')\">\r\n\r\n            &nbsp; &nbsp;{{editManagerDetails.email}} &nbsp; &nbsp; &nbsp;\r\n            <i class=\" tiny material-icons\" (click)=\"toEdit('Email')\">create</i>\r\n          </span>\r\n          <form #editForm=\"ngForm\" *ngIf=\"showForm\" style=\"display: inline-block;\">\r\n            <div class=\"row\" *ngIf=\"toBeEdit==='Email'\">\r\n              <span>\r\n                <input type=\"email\" required [ngModel]=\"toBeEditValue\" name=\"email\" id=\"email\" class=\"form-control padding-left \"\r\n                  #email=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}\">\r\n                <div [hidden]=\"email.valid || email.untouched\" style=\"color: red\">\r\n                  Email Id is required\r\n                </div>\r\n              </span>\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"resetForm()\"><i class=\"material-icons\">\r\n                  clear\r\n                </i></button>\r\n              <button *ngIf=\"!(formButtonHide || toBeEdit=='Profile Picture')\" type=\"submit\" (click)=\"editValue(editForm.value)\"\r\n                [disabled]=\"!editForm.valid\" class=\"btn btn-rose\"><i class=\"material-icons\">\r\n                  done\r\n                </i></button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <!-- <Phone edit>  -->\r\n        <div>\r\n          <span><b>Phone No : </b></span>\r\n          <span *ngIf=\"!(toBeEdit === 'Contact No')\">\r\n            &nbsp; &nbsp;{{editManagerDetails.contactNo}} &nbsp; &nbsp; &nbsp; <i class=\" tiny material-icons\" (click)=\"toEdit('Contact No')\">create</i></span>\r\n          <form #editForm=\"ngForm\" *ngIf=\"showForm\" style=\"display: inline-block;\">\r\n            <div class=\"row\" *ngIf=\"toBeEdit==='Contact No'\">\r\n              <span>\r\n                <input type=\"number\" required pattern=\".{10,10}\" class=\"form-control padding-left\" id=\"contactNo\" name=\"contactNo\"\r\n                  [(ngModel)]=\"toBeEditValue\" #contactNo=\"ngModel\">\r\n                <div [hidden]=\"contactNo.valid || contactNo.untouched\" style=\"color: red\">\r\n                  Contect No. is required\r\n                </div>\r\n              </span>\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"resetForm()\"><i class=\"material-icons\">\r\n                  clear\r\n                </i></button>\r\n              <button *ngIf=\"!(formButtonHide)\" type=\"submit\" (click)=\"editValue(editForm.value)\" [disabled]=\"!editForm.valid\"\r\n                class=\"btn btn-rose\"><i class=\"material-icons\">\r\n                  done\r\n                </i></button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <span><b>Profile Picture:</b> \r\n                      </span>\r\n            <br>\r\n\r\n            <img \r\n            class=\"userImage\" [src]=\" editManagerDetails.pic!=='null'? editManagerDetails.pic:'assets/img/avatar.png'\" />\r\n          </div>\r\n          \r\n        \r\n          <div *ngIf=\"urlTOShowImg\" class=\"col-md-6\">\r\n            <span><b> Selected Profile Picture:</b></span>\r\n            <br>\r\n\r\n            <img [src]=\"urlTOShowImg\" class=\"userImage\">\r\n          </div>\r\n<br>\r\n</div>\r\n            <span style=\"margin-left: 100px\" *ngIf=\"!(toBeEdit === 'Profile Picture')\" >\r\n              <i style=\"margin-top: -7px\" class=\" tiny material-icons\" (click)=\"toEdit('Profile Picture')\">create</i></span>\r\n\r\n        <form #editForm=\"ngForm\" *ngIf=\"showForm\" style=\"display: inline-block;\">\r\n          <div class=\"row\" *ngIf=\"toBeEdit==='Profile Picture'\">\r\n            <span>\r\n              <input type=\"file\" required (change)=\"onSelectFile($event)\" name=\"pic\" placeholder=\"pic\">\r\n            </span>\r\n\r\n\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"resetForm()\"><i class=\"material-icons\">\r\n                clear\r\n              </i></button>\r\n            <button *ngIf=\"!(formButtonHide)\" type=\"submit\" (click)=\"changePicture()\" [disabled]=\"!editForm.valid\"\r\n              class=\"btn btn-rose\"><i class=\"material-icons\">\r\n                done\r\n              </i></button>\r\n\r\n            <button *ngIf=\"formButtonHide\" type=\"button\" class=\"btn btn-default\"> <i class=\"fa fa-spinner fa-spin mainColor\"></i>submitting</button>\r\n\r\n          </div>\r\n        </form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        \r\n\r\n\r\n      </div>\r\n      <button type=\"button\" data-toggle=\"modal\" data-target=\"#changePasswordModal\" class=\"btn btn-rose  btn-lg\"> Change\r\n        Password\r\n      </button>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n    <!-- change password model start here  img-->\r\n\r\n    <div class=\"modal fade\" id=\"changePasswordModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"changePasswordModal\"\r\n      aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content card \">\r\n          <div class=\"card-header card-header-danger card-header-icon\">\r\n            <div class=\"card-icon\">\r\n              <i class=\"material-icons\">close</i>\r\n            </div>\r\n            <h3 class=\"card-title\">Change Password</h3>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n\r\n            <form #changePasswordForm=\"ngForm\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"comment\">Enter your Old Password</label>\r\n                    <br>\r\n                    <input type=\"password\" required class=\"form-control\" id=\"oldPassword\" name=\"oldPassword\"\r\n                      [(ngModel)]=\"changePassword.oldPassword\" #oldPassword=\"ngModel\"> </div>\r\n                  <h5 [hidden]=\"oldPassword.valid || oldPassword.untouched\" style=\"color: red\">\r\n                    Password minimum length 6\r\n                  </h5>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"comment\">Enter your New Password</label>\r\n                    <br>\r\n                    <input type=\"password\" required class=\"form-control\" id=\"newPassword\" name=\"newPassword\"\r\n                      [(ngModel)]=\"changePassword.newPassword\" #newPassword=\"ngModel\"> </div>\r\n                  <h5 [hidden]=\"newPassword.valid || newPassword.untouched\" style=\"color: red\">\r\n                    New Password minimum length 6\r\n                  </h5>\r\n                </div>\r\n\r\n\r\n\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button *ngIf=\"!passwordFormShow\" type=\"submit\" (click)=\"PasswordForm()\" [disabled]=\"!changePasswordForm.valid\"\r\n                  class=\"btn btn-danger\">Change\r\n                  Password</button>\r\n                <button *ngIf=\"passwordFormShow\" type=\"button\" class=\"btn btn-default\"> <i class=\"fa fa-spinner fa-spin\"></i>submitting</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- change password model end here -->"

/***/ }),

/***/ "./src/app/components/edit-user-details/edit-user-details.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/edit-user-details/edit-user-details.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cursor {\n  cursor: pointer; }\n\n.padding-left {\n  padding-left: 20px; }\n\n.userImage {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/components/edit-user-details/edit-user-details.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/edit-user-details/edit-user-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditUserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserDetailsComponent", function() { return EditUserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_tost_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/tost.service */ "./src/app/providers/tost.service.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/components/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditUserDetailsComponent = /** @class */ (function () {
    function EditUserDetailsComponent(tostservice, loginService) {
        this.tostservice = tostservice;
        this.loginService = loginService;
        this.editManagerDetails = {};
        this.formButtonHide = false;
        this.showForm = false;
        this.changePassword = {
            newPassword: '',
            oldPassword: ''
        };
        this.passwordFormShow = false;
    }
    EditUserDetailsComponent.prototype.ngOnInit = function () {
        this.getManagerDetails();
    };
    EditUserDetailsComponent.prototype.getManagerDetails = function () {
        this.editManagerDetails.name = localStorage.getItem("name");
        this.editManagerDetails.pic = typeof localStorage.getItem("picUrl") === 'object' ? 'null' : localStorage.getItem("picUrl");
        this.editManagerDetails.email = localStorage.getItem("email");
        this.editManagerDetails.contactNo = localStorage.getItem("contactNo");
        this.editManagerDetails.userName = localStorage.getItem("username");
        this.editManagerDetails.userType = localStorage.getItem("roles");
    };
    EditUserDetailsComponent.prototype.setManagerDetails = function (data) {
        if (this.toBeEdit == 'Name') {
            this.loginService.updateUsername(data.name);
        }
        if (this.toBeEdit == 'Email') {
            this.loginService.updateUserEmail(data.email);
        }
        if (this.toBeEdit == 'Contact No') {
            this.loginService.updateUserContactNo(data.contactNo);
        }
        this.getManagerDetails();
    };
    EditUserDetailsComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            this.imgfile = event.target.files[0];
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (event) {
                _this.urlTOShowImg = event.target.result;
            };
        }
    };
    EditUserDetailsComponent.prototype.editValue = function (data) {
        var _this = this;
        this.formButtonHide = true;
        console.log(data);
        if (data.contactNo) {
            data.contactNo = data.contactNo.toString();
        }
        this.loginService.editManagerdetails(data)
            .subscribe(function (res) {
            console.log(res);
            _this.setManagerDetails(data);
            _this.closeFormModal();
            _this.resetForm();
            _this.tostservice.showNotificationSuccess("change successfuly");
            _this.formButtonHide = false;
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
            _this.formButtonHide = false;
        });
    };
    EditUserDetailsComponent.prototype.toEdit = function (val) {
        this.toBeEdit = val;
        this.showForm = true;
        if (this.toBeEdit == 'Name') {
            this.toBeEditValue = this.editManagerDetails.name;
        }
        if (this.toBeEdit == 'Email') {
            this.toBeEditValue = this.editManagerDetails.email;
        }
        if (this.toBeEdit == 'Contact No') {
            this.toBeEditValue = this.editManagerDetails.contactNo;
        }
    };
    EditUserDetailsComponent.prototype.resetForm = function () {
        this.imgfile = null;
        this.urlTOShowImg = null;
        this.formButtonHide = false;
        this.closeFormModal();
        this.toBeEdit = '';
    };
    EditUserDetailsComponent.prototype.PasswordForm = function () {
        var _this = this;
        this.passwordFormShow = true;
        this.loginService.changeManagerPassword({ "oldPassword": this.changePassword.oldPassword, "newPassword": this.changePassword.newPassword })
            .subscribe(function (res) {
            _this.closePasswordFormModal();
            _this.tostservice.showNotificationSuccess("Password Successfuly Change");
            _this.passwordFormShow = false;
            _this.changePassword.oldPassword = '';
            _this.changePassword.newPassword = '';
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
            _this.passwordFormShow = false;
        });
    };
    EditUserDetailsComponent.prototype.changePicture = function () {
        var _this = this;
        this.formButtonHide = true;
        var fd = new FormData();
        fd.append("picture", this.imgfile);
        this.loginService.changePicture(fd)
            .subscribe(function (res) {
            _this.loginService.updateUserPicture(res.picUrl);
            _this.editManagerDetails.pic = localStorage.getItem("picUrl");
            _this.setManagerDetails(_this.imgfile);
            _this.closeFormModal();
            _this.resetForm();
            _this.tostservice.showNotificationSuccess("Profile Picture Change Successfuly");
            _this.formButtonHide = false;
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
            _this.formButtonHide = false;
        });
    };
    EditUserDetailsComponent.prototype.closeFormModal = function () {
        this.showForm = false;
        $('#editFormModel').modal('hide');
    };
    EditUserDetailsComponent.prototype.closePasswordFormModal = function () {
        this.passwordFormShow = false;
        $('#changePasswordModal').modal('hide');
    };
    EditUserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-engineer',
            template: __webpack_require__(/*! ./edit-user-details.component.html */ "./src/app/components/edit-user-details/edit-user-details.component.html"),
            styles: [__webpack_require__(/*! ./edit-user-details.component.scss */ "./src/app/components/edit-user-details/edit-user-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_tost_service__WEBPACK_IMPORTED_MODULE_1__["TostService"],
            _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], EditUserDetailsComponent);
    return EditUserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"https://www.nxtlifetechnologies.com\">\n                        NxtLife Technologies\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        About Us\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy; 2018, developed by\n            <a href=\"https://www.nxtlifetechnologies.com\" target=\"_blank\">NxtLife Technologies</a> for a better\n            experience.\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "            <!-- Navbar -->\r\n            <nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\r\n              <div class=\"container-fluid\">\r\n                  <div class=\"navbar-wrapper\">\r\n                      <a class=\"navbar-brand\" href=\"#\">\r\n                          <span *ngIf=\"role=='superadmin'\">\r\n                            Super Admin Panel\r\n                        </span>\r\n                      \r\n                      </a>\r\n                  </div>\r\n\r\n                  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                      <span class=\"sr-only\">Toggle navigation</span>\r\n                      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n                      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n                      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n                  </button>\r\n                  <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n                      \r\n                      <ul class=\"navbar-nav\">\r\n                       \r\n                          <li *ngIf=\"role=='management'\" class=\"nav-item dropdown\">\r\n                              <a class=\"nav-link\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                  <i class=\"material-icons\">notifications</i>\r\n                                  <span class=\"notification\"> {{totalCount}} </span>\r\n                                  <p>\r\n                                      <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n                                  </p>\r\n                              </a>\r\n                              \r\n                              <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                                <div *ngFor=\"let status of countStatus\"> \r\n                                  <a class=\"dropdown-item hoverColor\" (click)=gotoIncidents(status.id) > {{status.name}} Incidents<span class=\"notification\">{{status.count}}</span></a>\r\n                                  \r\n                              </div>\r\n                              </div>\r\n                          </li>\r\n\r\n                          <!-- user details  starts here -->\r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\"   id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                  <i class=\"material-icons hover-cursor\" >person</i>\r\n                                  <p>\r\n                                      <span class=\"d-lg-none d-md-block\">Account</span>\r\n                                  </p>\r\n                              </a>\r\n                              \r\n                              <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                            \r\n                            <div class=\"user\">\r\n                                \r\n                                <div class=\"d-flex\">\r\n                                    <div>\r\n                                            <img class=\"userImage\" [src]=\" picUrl!=='null'? picUrl:'assets/img/avatar.png'\"/>\r\n                                           \r\n                                    </div>\r\n\r\n                                    <div style=\"padding: 28px;font-size: 14px;\"> \r\n                                        <div style=\"font-weight: 700;font-size: 14px; margin-top:-5px;\" >{{userType}}</div>\r\n\r\n                                        <div style=\"font-weight: 700\"><b>{{name}}</b></div>\r\n                                        \r\n                                        <div *ngIf=\" email !=='null'\"> {{email}} </div>\r\n                                       \r\n                                        <div *ngIf=\" contactNo !=='null'\"> {{contactNo}} </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div>\r\n                                    \r\n                                        <button style=\"float: left; margin:20px;\" (click)= \"accountSetting()\" class=\"btn btn-primary btn-sm btn-round\">\r\n                                                <i class=\"material-icons\">settings</i> Account\r\n                                              </button>\r\n                                              \r\n                                              <button style=\"float: right;margin: 20px;\" (click)=\"logout()\" class=\"btn btn-primary btn-sm btn-round\">\r\n                                                    <i class=\"material-icons\"> power_settings_new</i> Logout\r\n                                                  </button>\r\n                                    </div>\r\n                                \r\n                        </div>\r\n                              </div>\r\n                            \r\n                          </li>\r\n                       <!-- user details ends here -->\r\n\r\n                      </ul>\r\n                  </div>\r\n              </div>\r\n          </nav>\r\n          <!-- End Navbar -->"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userImage {\n  width: 100px;\n  height: 100px;\n  margin: 20px;\n  border-radius: 50%; }\n\n@media (min-width: 992px) {\n  .navbar-expand-lg .navbar-nav .dropdown-menu-right {\n    right: 50px;\n    left: auto;\n    top: 50px; } }\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Modules_incidents_incidents_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Modules/incidents/incidents.service */ "./src/app/Modules/incidents/incidents.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.service */ "./src/app/components/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(incidentService, router, loginService) {
        this.incidentService = incidentService;
        this.router = router;
        this.loginService = loginService;
        this.role = localStorage.getItem("currentUserName");
        this.totalCount = 0;
        this.countStatus = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.name = localStorage.getItem("name");
        this.picUrl = typeof localStorage.getItem("picUrl") === 'object' ? 'null' : localStorage.getItem("picUrl");
        //  for management logging
        if (localStorage.getItem("currentUserName") == 'management') {
            this.email = localStorage.getItem("email");
            this.username = localStorage.getItem("username");
            this.contactNo = localStorage.getItem("contactNo");
            this.userType = localStorage.getItem("roles");
            this.getStatusCount();
        }
        this.subscribeUserContactNoChanges();
        this.subscribeUserEmailChanges();
        this.subscribeUsernameChanges();
        this.subscribeUserPictureChanges();
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    //  get   incidents count
    NavbarComponent.prototype.getStatusCount = function () {
        var _this = this;
        this.incidentService.getStatusByCount()
            .subscribe(function (res) {
            _this.countStatus = res;
            _this.countStatus.forEach(function (element) {
                _this.totalCount = _this.totalCount + element.count;
            });
        });
    };
    NavbarComponent.prototype.gotoIncidents = function (id) {
        this.router.navigate(["/incidents"], { queryParams: { sId: id } });
    };
    NavbarComponent.prototype.accountSetting = function () {
        this.router.navigate(["/edit"]);
    };
    NavbarComponent.prototype.subscribeUsernameChanges = function () {
        var _this = this;
        this.loginService.username.asObservable()
            .subscribe(function (updatedName) { return _this.name = updatedName; });
    };
    NavbarComponent.prototype.subscribeUserPictureChanges = function () {
        var _this = this;
        this.loginService.userpicture.asObservable()
            .subscribe(function (updatedPicture) {
            _this.picUrl = updatedPicture;
            console.log(_this.picUrl);
        });
    };
    NavbarComponent.prototype.subscribeUserEmailChanges = function () {
        var _this = this;
        this.loginService.useremail.asObservable()
            .subscribe(function (updatedEmail) { return _this.email = updatedEmail; });
    };
    NavbarComponent.prototype.subscribeUserContactNoChanges = function () {
        var _this = this;
        this.loginService.usercontactno.asObservable()
            .subscribe(function (updatedContactNo) { return _this.contactNo = updatedContactNo; });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_Modules_incidents_incidents_service__WEBPACK_IMPORTED_MODULE_1__["IncidentsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" data-color=\"purple\">\r\n    <div style=\"background-color: #000000b0;height: 100%;\">\r\n        <div class=\"logo text-center\">\r\n            <a href=\"#\" class=\"simple-text logo-normal \" class=\"lightColor\">\r\n                iServe\r\n            </a>\r\n        </div>\r\n        <div class=\"sidebar-wrapper\">\r\n            <div class=\"user\">\r\n                <div class=\"d-flex\">\r\n                    <div>\r\n                        <img [src]=\" picUrl!=='null'? picUrl:'assets/img/avatar.png'\" />\r\n\r\n                    </div>\r\n                    <span class=\"lightColor\" style=\" padding: .5rem 15px;\">{{name}}</span>\r\n                </div>\r\n\r\n            </div>\r\n            <ul class=\"nav\">\r\n\r\n\r\n                <li routerLinkActive=\"active\" class=\"nav-item\" *ngFor=\"let page of list\">\r\n                    <a class=\"nav-link\" [routerLink]=\"page.route\">\r\n                        <i class=\"material-icons\">{{ page.icon }}</i>\r\n                        <p>{{ page.name }}</p>\r\n                    </a>\r\n                </li>\r\n\r\n\r\n                <li class=\"nav-item \">\r\n                    <a class=\"nav-link\" (click)=\"logout()\">\r\n                        <i class=\"material-icons\">\r\n                            power_settings_new\r\n                        </i>\r\n                        <p>Logout</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item active-pro\">\r\n                    <a class=\"simple-text logo-normal lightColor nav-link\" href=\"#\">\r\n                        <i class=\"material-icons\">public</i>\r\n                        Visit Website\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  background-image: url(\"/assets/img/sidebar.jpg\"); }\n  .sidebar li a {\n    color: white; }\n  .sidebar .nav i {\n    color: white; }\n  .sidebar .user {\n    margin: 18px;\n    border-bottom: 1px solid gray;\n    padding-bottom: 15px; }\n  .sidebar .user img {\n      width: 35px;\n      height: 35px;\n      border-radius: 50%;\n      margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/components/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.name = localStorage.getItem("name");
        this.picUrl = typeof localStorage.getItem("picUrl") === 'object' ? 'null' : localStorage.getItem("picUrl");
        this.subscribeUsernameChanges();
        this.subscribeUserPictureChanges();
        if (localStorage.getItem("currentUserName") === 'management') {
            this.list = [
                {
                    name: 'Dashboard',
                    icon: 'dashboard',
                    route: '/dashboard'
                },
                {
                    name: 'Incidents',
                    icon: 'description',
                    route: '/incidents'
                },
                {
                    name: 'installation',
                    icon: 'build',
                    route: '/installation'
                }
            ];
        }
        if (localStorage.getItem("currentUserName") === 'superadmin') {
            this.list = [
                {
                    name: 'Dashboard',
                    icon: 'dashboard',
                    route: '/dashboard'
                },
                {
                    name: 'Service Engineer',
                    icon: 'build',
                    route: '/engineer'
                },
                {
                    name: 'Brand Manager',
                    icon: 'dashboard',
                    route: '/manager'
                }
            ];
        }
    };
    SidebarComponent.prototype.subscribeUsernameChanges = function () {
        var _this = this;
        this.loginService.username.asObservable()
            .subscribe(function (updatedName) { return _this.name = updatedName; });
    };
    SidebarComponent.prototype.subscribeUserPictureChanges = function () {
        var _this = this;
        this.loginService.userpicture.asObservable()
            .subscribe(function (updatedPicture) { return _this.picUrl = updatedPicture; });
    };
    SidebarComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"heading\">Dashboard</h4>\r\n<div *ngIf=\"role=='management'\" class=\"card  card-plain\" style=\"margin-top: 27px;\">\r\n  <div class=\"card-header card-header-primary dekstopHeader\" style=\"margin-bottom:20px; \">\r\n    <div class=\"nav-tabs-navigation\">\r\n      <div class=\"nav-tabs-wrapper space-between\">\r\n        <div class=\"addBar\">\r\n          <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\r\n            <li class=\"nav-item hover-cursor\">\r\n              <a class=\"nav-link active show \" (click)=\"dashboardFilterByDate('today')\" data-toggle=\"tab\">Today</a>\r\n            </li>\r\n            <li class=\"nav-item hover-cursor\">\r\n              <a class=\"nav-link \" (click)=\"dashboardFilterByDate('week')\" data-toggle=\"tab\">This Week</a>\r\n            </li>\r\n            <li class=\"nav-item hover-cursor\">\r\n              <a class=\"nav-link\" (click)=\"dashboardFilterByDate('month')\" data-toggle=\"tab\"> This month</a>\r\n\r\n            </li>\r\n            <li class=\"nav-item hover-cursor\">\r\n              <a class=\"nav-link\" (click)=\"dashboardFilterByDate('year')\" data-toggle=\"tab\">This year</a>\r\n            </li>\r\n            <li class=\"nav-item hover-cursor\">\r\n              <a class=\"nav-link\" (click)=\"dashboardFilterByRange()\" data-toggle=\"tab\">Range</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item hover-cursor \" *ngIf=\"showRange\">\r\n              <div class=\"input-group input-daterange\">\r\n\r\n                <input type=\"date\" class=\"form-control\" min=\"1899-01-01\" max=\"{{ today | date: 'y-MM-dd'}}\" required\r\n                  name=\"startDate\" id=\"startDate\" [(ngModel)]=\"dateRange.startDate\" #startDate=\"ngModel\" style=\"color: white;width: 142px;\">\r\n                <p class=\"input-group-addon \" style=\"margin:10px; \">To</p>\r\n                <input type=\"date\" class=\"form-control\" [disabled]=\"!dateRange.startDate\" min=\"{{dateRange.startDate}}\"\r\n                  max=\"{{ today | date: 'y-MM-dd'}}\" required name=\"endDate\" id=\"endDate\" [(ngModel)]=\"dateRange.endDate\"\r\n                  #userName=\"ngModel\" style=\"color: white;width: 142px;\">\r\n\r\n                <button (click)=\"filterByRange('byRange')\" class=\"btn btn-primary btn-sm chkBtn\" [disabled]=\"!dateRange.endDate\">\r\n                  <i class=\"material-icons hover-cursor\">\r\n                    check_circle\r\n                  </i>\r\n                </button>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div>\r\n          <ul class=\"nav \" data-tabs=\"tabs\" style=\"font-weight: 500; width: 190px;\">\r\n            <li class=\"nav-item hover-cursor \">\r\n\r\n              <a id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\r\n                <div class=\"nav-link active  dropdown-toggle \" [class.active]=\"categoryName !='ALL APPLIANCES'\">{{categoryName}}</div>\r\n              </a>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                <a (click)=\"forAllProduct('ALL APPLIANCES')\" class=\"dropdown-item  hoverColor\">All Appliances</a>\r\n                <a *ngFor=\"let Category of productCategoryName\" (click)=\"filterByProduct(Category)\" class=\"dropdown-item  hoverColor\">{{Category.name}}</a>\r\n\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-header card-header-primary printHeader\" style=\"margin-bottom:20px; display: none; \">\r\n    <div class=\"nav-tabs-navigation\">\r\n      <div class=\"nav-tabs-wrapper space-between\">\r\n        <div class=\"addBar\">\r\n          <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\r\n            <li class=\"nav-item hover-cursor\">\r\n              <a class=\"nav-link active show \" data-toggle=\"tab\">{{filterByDate}}</a>\r\n            </li>\r\n\r\n\r\n            <li class=\"nav-item hover-cursor \" *ngIf=\"showRange\">\r\n              <div class=\"input-group input-daterange\">\r\n                Range {{dateRange.startDate}} To {{dateRange.endDate}}\r\n\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div>\r\n          <ul class=\"nav \" data-tabs=\"tabs\" style=\"font-weight: 500; width: 190px;\">\r\n            <li class=\"nav-item hover-cursor \">\r\n\r\n              <a id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\r\n                <div class=\"nav-link active  dropdown-toggle \" [class.active]=\"categoryName !='ALL APPLIANCES'\">{{categoryName}}</div>\r\n              </a>\r\n\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n<!-- <div style=\"background-color: #ffffff\" class=\"row\">\r\n  <div class=\"col-md-12 col-sm-6\">\r\n    <div>\r\n        <div *ngIf=\"true\" class=\"addBar\">\r\n            <ul style=\"list-style-type: none; margin: 0; padding: 0;\" *ngFor=\"let element of ProCategoryName\" class=\"nav nav-tabs\" data-tabs=\"tabs\">\r\n              <li style=\"display: inline\"  class=\"nav-item hover-cursor\">\r\n                   {{element.color}}  {{element.name}}\r\n              </li>\r\n            </ul>\r\n            \r\n          </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div> -->\r\n\r\n\r\n  <div class=\"card-header  \" style=\"margin-bottom:13px;height: 36px;  background-color: #ffffff \">\r\n      <div class=\"nav-tabs-navigation\">\r\n        <div class=\"nav-tabs-wrapper space-between\">\r\n          <div *ngIf=\"!showCategory\" style=\"width: 100% ; text-align: center\">\r\n            <ul *ngFor=\"let element of ProCategoryName\" style=\"display: inline-block; \" class=\"nav nav-tabs\" data-tabs=\"tabs\">\r\n              <li style=\"display: inline-block ; margin-left: 20px; margin-right: 20px;\" class=\"nav-item hover-cursor\">\r\n               <button class=\"colorButton\" [style.background]=\"element.color\" > </button>   {{   element.name }}&nbsp;\r\n              </li>\r\n            </ul>\r\n            \r\n          </div>\r\n          <div *ngIf=\"showCategory\" style=\"width: 100% ; text-align: center\">\r\n              <ul *ngFor=\"let element of showcolor\" class=\"nav nav-tabs\" style=\"display: inline-block;\">\r\n                  <li style=\"display: inline-block ; margin-left: 20px; margin-right: 20px;\" class=\"nav-item hover-cursor\">\r\n                    <button class=\"colorButton\" [style.background]=\"element.color\" > </button>  {{   element.name }}  &nbsp;\r\n                  </li>\r\n                </ul>\r\n              \r\n            </div>\r\n        \r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  <div class=\"container-fluid\" style=\"z-index: 0;\">\r\n    <div *ngIf=\"role=='management'\" class=\"row\">\r\n\r\n      <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"card card-stats padding\">\r\n          <div class=\"card-header card-header-primary card-header-icon \">\r\n            <div class=\"card-icon printCard\">\r\n              <div id=\"CarryForward_Chart\"> </div>\r\n            </div>\r\n            <p class=\"card-category\">Carry Forward</p>\r\n            <h3 class=\"card-title\">{{statusCarryForward}}</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"card card-stats padding\">\r\n          <div class=\"card-header card-header-primary card-header-icon\">\r\n            <div class=\"card-icon printCard\">\r\n\r\n              <div id=\"New_Chart\">\r\n              </div>\r\n\r\n            </div>\r\n            <p class=\"card-category\">New</p>\r\n            <h3 class=\"card-title\">{{statusNew}}</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"card card-stats padding\">\r\n          <div class=\"card-header card-header-primary card-header-icon\">\r\n            <div class=\"card-icon printCard\">\r\n\r\n              <div id=\"Fixed_Chart\">\r\n\r\n              </div>\r\n            </div>\r\n            <p class=\"card-category\">Fixed</p>\r\n            <h3 class=\"card-title\">{{statusFixed}}</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n        <div class=\"card card-stats padding\">\r\n          <div class=\"card-header card-header-primary card-header-icon\">\r\n            <div class=\"card-icon printCard\">\r\n\r\n              <div id=\"Rejected_Chart\">\r\n\r\n              </div>\r\n            </div>\r\n            <p class=\"card-category\">Rejected</p>\r\n            <h3 class=\"card-title\">{{statusRejected}}</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- Chart Cards -->\r\n      <div class=\"row\">\r\n\r\n        <ng-container>\r\n\r\n          <!-- rating chart -->\r\n\r\n          <div (window:resize)=\"getCharts()\" class=\"col-md-6 col-sm-12\">\r\n            <div class=\"card card-chart\">\r\n              <div class=\"card-header card-header-primary cardHeaderPrint\">\r\n\r\n                <div id=\"Rating_Chart\"></div>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <h4 class=\"card-title\"> Feedback </h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n    <!--  time chart chart -->\r\n    <div class=\"col-md-6 col-sm-12\">\r\n      <div class=\"card card-chart\">\r\n        <div class=\"card-header card-header-primary cardHeaderPrint\">\r\n          <div id=\"Time_chart\"></div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\"> Repair v/s Purchase Cost Insights (in years)</h4>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n          <!-- incident age chart -->\r\n          <!-- <div class=\"col-md-6 col-sm-12\">\r\n            <div class=\"card card-chart\">\r\n              <div class=\"card-header card-header-primary cardHeaderPrint\">\r\n                <div id=\"Product_Incident_Age\"></div>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <h4 class=\"card-title\"> Open Incidents Age (In Days)</h4>\r\n              </div>\r\n\r\n            </div>\r\n          </div> -->\r\n\r\n          <!-- status chart -->\r\n          <!-- <div class=\"col-md-6 col-sm-12\">\r\n            <div class=\"card card-chart\">\r\n              <div class=\"card-header card-header-primary cardHeaderPrint\">\r\n                <div id=\"product_status_Chart\"></div>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Incidents </h4>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n\r\n\r\n          <!-- mttr chart -->\r\n          <div class=\"col-md-6 col-sm-12\">\r\n            <div class=\"card card-chart\">\r\n              <div class=\"card-header card-header-primary cardHeaderPrint\">\r\n                <div id=\"repair_time\"></div>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Mean Time To Repair (in days)</h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- avg chart -->\r\n          <div class=\"col-md-6 col-sm-12\">\r\n            <div class=\"card card-chart\">\r\n              <div class=\"card-header card-header-primary cardHeaderPrint\">\r\n                <div id=\"time_to_repair\"></div>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <h4 class=\"card-title\"> Time To Repair</h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <!-- warrenty chart -->\r\n\r\n          <div class=\"col-md-6 col-sm-12\">\r\n              <div class=\"card \">\r\n                <div class=\"card-header card-header-primary cardHeaderPrint\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n  \r\n                      <div id=\"out_Warranty_Status\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <div id=\"in_Warranty_Status\"></div>\r\n  \r\n                    </div>\r\n                  </div>\r\n  \r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">Open Incidents</h4>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          <!-- regional chart -->\r\n          <div class=\"col-md-6 col-sm-12\">\r\n            <div class=\"card card-chart\">\r\n              <div class=\"card-header card-header-primary cardHeaderPrint\">\r\n                <div id=\"regions_chart\"></div>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <h4 class=\"card-title\"> Open Incidents</h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n        \r\n        </ng-container>\r\n\r\n      </div>\r\n\r\n\r\n\r\n      <!-- end of chart cards -->\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feedback-chart {\n  display: flex;\n  justify-content: space-around; }\n  .feedback-chart .card-title {\n    position: absolute;\n    bottom: -80px;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    text-align: center;\n    width: 100%; }\n  .feedback-chart .card-title h3 {\n      margin: 0px; }\n  /* Smiley */\n  .smiley {\n  margin-top: 80PX;\n  background: linear-gradient(135deg, #ffe919 0%, #fbc000 100%);\n  border-radius: 100%;\n  padding: 1px;\n  position: relative;\n  width: 75px;\n  height: 75px;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateX(-50%) translateY(calc(-50% - 121px));\n          transform: translateX(-50%) translateY(calc(-50% - 121px));\n  box-shadow: rgba(0, 0, 0, 0.09) 0px 30px 30px 1px, #0000001a 0px 20px 10px 1px; }\n  .mouth {\n  width: 60%;\n  height: 30%;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 100px;\n  border-bottom-right-radius: 100px;\n  box-sizing: border-box;\n  position: absolute;\n  bottom: 18%;\n  left: 50%;\n  margin-left: -30%;\n  background: #B57700;\n  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .eyes {\n  width: 100%;\n  margin-top: 15%;\n  box-sizing: border-box;\n  padding: 0 5px;\n  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .eyes .eye {\n  width: 20px;\n  height: 20px;\n  background: #B57700;\n  float: left;\n  border-radius: 100%;\n  position: relative; }\n  .eyes .eye:nth-of-type(2) {\n  float: right; }\n  .eyes .eye::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0%;\n  height: 0%;\n  background: #fed800;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  top: -15px;\n  left: 5px;\n  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .eyes .eye:first-of-type::after {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  left: auto;\n  right: 5px; }\n  /* Normal animation */\n  .smiley.normal .mouth,\n#normal[type=radio]:checked ~ .smiley .mouth {\n  border-top-left-radius: 100px;\n  border-top-right-radius: 100px;\n  border-bottom-left-radius: 100px;\n  border-bottom-right-radius: 100px;\n  height: 10%;\n  width: 40%;\n  bottom: 25%;\n  margin-left: -20%; }\n  .smiley.normal .eyes,\n#normal[type=radio]:checked ~ .smiley .eyes {\n  margin-top: 30%; }\n  /* angry animation */\n  .smiley.angry .mouth,\n#angry[type=radio]:checked ~ .smiley .mouth {\n  width: 40%;\n  height: 20%;\n  border-top-left-radius: 100%;\n  border-top-right-radius: 100%;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  bottom: 18%;\n  left: 50%;\n  margin-left: -20%;\n  border-bottom: 0; }\n  .smiley.angry .eyes,\n#angry[type=radio]:checked ~ .smiley .eyes {\n  margin-top: 35%; }\n  .smiley.angry .eye::after,\n#angry[type=radio]:checked ~ .smiley .eye::after {\n  width: 120%;\n  height: 50%;\n  -webkit-transform: rotate(-35deg);\n          transform: rotate(-35deg);\n  top: -3px;\n  left: -5px;\n  border-radius: 0; }\n  .smiley.angry .eye:first-of-type::after,\n#angry[type=radio]:checked ~ .smiley .eye:first-of-type::after {\n  -webkit-transform: rotate(35deg);\n          transform: rotate(35deg);\n  left: auto;\n  right: -5px; }\n  /* */\n  .smiley.happy .mouth,\n#happy[type=radio]:checked ~ .smiley .mouth {\n  -webkit-animation: infinite move-mouth-down 3s;\n          animation: infinite move-mouth-down 3s;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n  @-webkit-keyframes move-mouth-down {\n  0% {\n    bottom: 18%; }\n  20% {\n    bottom: 16%; }\n  40% {\n    bottom: 16%; }\n  60% {\n    bottom: 18%; }\n  100% { } }\n  @keyframes move-mouth-down {\n  0% {\n    bottom: 18%; }\n  20% {\n    bottom: 16%; }\n  40% {\n    bottom: 16%; }\n  60% {\n    bottom: 18%; }\n  100% { } }\n  .smiley.happy .eyes,\n#happy[type=radio]:checked ~ .smiley .eyes {\n  -webkit-animation: infinite move-eyes-down 3s;\n          animation: infinite move-eyes-down 3s;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n  @-webkit-keyframes move-eyes-down {\n  0% {\n    margin-top: 15%; }\n  20% {\n    margin-top: 19%; }\n  40% {\n    margin-top: 19%; }\n  60% {\n    margin-top: 15%; }\n  100% { } }\n  @keyframes move-eyes-down {\n  0% {\n    margin-top: 15%; }\n  20% {\n    margin-top: 19%; }\n  40% {\n    margin-top: 19%; }\n  60% {\n    margin-top: 15%; }\n  100% { } }\n  .smiley.happy .eye:nth-of-type(2),\n#happy[type=radio]:checked ~ .smiley .eye:nth-of-type(2) {\n  height: 20px;\n  margin-top: 0;\n  -webkit-animation: infinite wink 3s;\n          animation: infinite wink 3s;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n  @-webkit-keyframes wink {\n  0% {\n    height: 20px;\n    margin-top: 0; }\n  20% {\n    height: 3px;\n    margin-top: 8px; }\n  40% {\n    height: 3px;\n    margin-top: 8px; }\n  60% {\n    height: 20px;\n    margin-top: 0; }\n  100% { } }\n  @keyframes wink {\n  0% {\n    height: 20px;\n    margin-top: 0; }\n  20% {\n    height: 3px;\n    margin-top: 8px; }\n  40% {\n    height: 3px;\n    margin-top: 8px; }\n  60% {\n    height: 20px;\n    margin-top: 0; }\n  100% { } }\n  .smiley.normal .eye,\n#normal[type=radio]:checked ~ .smiley .eye {\n  height: 20px;\n  margin-top: 0;\n  -webkit-animation: infinite blink 3s;\n          animation: infinite blink 3s;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n  @-webkit-keyframes blink {\n  0% {\n    height: 20px;\n    margin-top: 0; }\n  10% {\n    height: 2px;\n    margin-top: 8px; }\n  20% {\n    height: 20px;\n    margin-top: 0; }\n  30% {\n    height: 2px;\n    margin-top: 8px; }\n  40% {\n    height: 20px;\n    margin-top: 0; }\n  100% { } }\n  @keyframes blink {\n  0% {\n    height: 20px;\n    margin-top: 0; }\n  10% {\n    height: 2px;\n    margin-top: 8px; }\n  20% {\n    height: 20px;\n    margin-top: 0; }\n  30% {\n    height: 2px;\n    margin-top: 8px; }\n  40% {\n    height: 20px;\n    margin-top: 0; }\n  100% { } }\n  .smiley.angry .eyes,\n.smiley.angry .mouth,\n#angry[type=radio]:checked ~ .smiley .eyes,\n#angry[type=radio]:checked ~ .smiley .mouth {\n  -webkit-animation: infinite move-angry-head 6s;\n          animation: infinite move-angry-head 6s;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n  @-webkit-keyframes move-angry-head {\n  0% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%); }\n  10% {\n    -webkit-transform: translateX(-20%);\n            transform: translateX(-20%); }\n  20% {\n    -webkit-transform: translateX(15%);\n            transform: translateX(15%); }\n  30% {\n    -webkit-transform: translateX(-20%);\n            transform: translateX(-20%); }\n  40% {\n    -webkit-transform: translateX(5%);\n            transform: translateX(5%); }\n  50% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%); }\n  100% { } }\n  @keyframes move-angry-head {\n  0% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%); }\n  10% {\n    -webkit-transform: translateX(-20%);\n            transform: translateX(-20%); }\n  20% {\n    -webkit-transform: translateX(15%);\n            transform: translateX(15%); }\n  30% {\n    -webkit-transform: translateX(-20%);\n            transform: translateX(-20%); }\n  40% {\n    -webkit-transform: translateX(5%);\n            transform: translateX(5%); }\n  50% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%); }\n  100% { } }\n  .padding {\n  padding-bottom: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: white !important; }\n  .text-right {\n  text-align: right; }\n  .addBar {\n  border-right: 1px solid white;\n  padding-right: 32px; }\n  .printCard {\n  background: white !important;\n  border: 10px solid #9d36b3 !important; }\n  .chkBtn {\n  text-align: center;\n  padding: 7px;\n  background: transparent; }\n  .chkBtn i {\n    font-size: 24px; }\n  .colorButton {\n  background: #e91e63;\n  width: 25px;\n  height: 18px;\n  border: none; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _providers_tost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/tost.service */ "./src/app/providers/tost.service.ts");
/* harmony import */ var _interface_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interface/user */ "./src/app/interface/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardservice, tostservice, router) {
        this.dashboardservice = dashboardservice;
        this.tostservice = tostservice;
        this.router = router;
        this.valFalse = false;
        this.showCategory = false;
        this.statusByProductCat = [];
        this.stateCount = [];
        this.mttrTillDate = [];
        this.meanTiming = [];
        this.inWarranty = [];
        this.outOfWarranty = [];
        this.totalOutOfWarranty = 0;
        this.totalInWarranty = 0;
        this.incidentAge = [];
        this.filter = {};
        this.filterByDate = "today";
        this.showRange = false;
        this.rating = [];
        this.ratingId = [];
        this.avgId = [];
        this.mttrId = [];
        this.inWarrantyId = [];
        this.outWarrantyId = [];
        this.statusIdChart = [];
        this.incidentId = [];
        this.carryforwardChart = [];
        this.newChart = [];
        this.rejectedChart = [];
        this.fixedChart = [];
        this.statusType = ['CARRYFORWARD', 'NEW', 'FIXED', 'REJECTED',];
        this.dateRange = new _interface_user__WEBPACK_IMPORTED_MODULE_3__["DateRange"];
        this.showRatingChart = true;
        this.categoryName = 'ALL APPLIANCES';
        this.categoryType = 'parent';
        this.statusByProductCatIds = [];
        this.ProCategoryName = [];
        this.proSubCatName = [];
        this.colors = ['#e91e63', '#01adc2', '#fd9710', '#4ba64f', '#9d36b3', '#FFFF00', '#AA00FF', '#9E9D24'];
    }
    DashboardComponent.prototype.dashboardFilterByDate = function (value) {
        this.showRange = false;
        this.dateRange = new _interface_user__WEBPACK_IMPORTED_MODULE_3__["DateRange"]();
        this.filterByDate = value;
        this.getFilter();
        this.getCharts();
    };
    DashboardComponent.prototype.forAllProduct = function (value) {
        this.showCategory = false;
        console.log(this.filterId);
        this.filterId = null;
        console.log(this.filterId);
        this.categoryName = value;
        // console.log(this.filterId)
        this.getFilter();
        this.getCharts();
    };
    DashboardComponent.prototype.filterByRange = function (value) {
        this.filterByDate = value;
        this.getFilter();
        this.getCharts();
    };
    DashboardComponent.prototype.getFilter = function () {
        this.filter = {};
        if (this.filterByDate) {
            this.filter["duration"] = this.filterByDate;
            if (this.filterByDate === "byRange") {
                this.filter["startDate"] = this.dateRange.startDate;
                this.filter["endDate"] = this.dateRange.endDate;
            }
        }
        if (this.filterId) {
            console.log(this.filterId);
            // console.log(this.filterId)
            this.filter["categoryId"] = this.filterId;
            this.categoryType = 'child';
        }
        else {
            this.categoryType = 'parent';
        }
    };
    DashboardComponent.prototype.filterByProduct = function (Category) {
        // this.getFilter(id)
        this.showCategory = true;
        this.categoryName = Category.name;
        this.filterId = Category.id;
        this.categoryType = 'child';
        this.proSubCatName = this.proSubCatName.filter(function (element) { return element.categoryId === Category.id; });
        for (var k = 0; k < this.proSubCatName.length; k++) {
            this.proSubCatName[k]['color'] = this.colors[k];
        }
        this.showcolor = this.proSubCatName;
        console.log(this.proSubCatName);
        this.getFilter();
        this.getCharts();
    };
    DashboardComponent.prototype.dashboardFilterByRange = function () {
        this.showRange = true;
    };
    DashboardComponent.prototype.getProductCategorys = function () {
        var _this = this;
        this.dashboardservice.getProductCategory()
            .subscribe(function (res) {
            _this.proSubCatName = [];
            _this.ProCategoryName = [];
            _this.productCategoryName = res;
            // res.forEach(element => {
            for (var i = 0; i < res.length; i++) {
                _this.ProCategoryName.push({ "name": res[i].name, "id": res[i].id, "color": _this.colors[i] });
                res[i].childCategory.forEach(function (element) {
                    _this.proSubCatName.push(element);
                });
                // });
            }
            // for (let i = 0; i < res.length; i++) {
            //   for (let j = 0; j < res[i].childCategory.length; j++) {
            //   }
            // }
        });
    };
    DashboardComponent.prototype.getDashboardDetails = function () {
        var _this = this;
        this.dashboardservice.getDashbord(this.filter)
            .subscribe(function (res) {
            // console.log(res);
            _this.statusCarryForward = res.CARRYFORWARD;
            _this.statusFixed = res.FIXED;
            _this.statusNew = res.NEW;
            _this.statusRejected = res.REJECTED;
        });
    };
    DashboardComponent.prototype.routeToIncidents = function (pc, gtype, type, stid, wrnty, rating) {
        this.router.navigate(['/incidents'], { queryParams: { duration: this.filterByDate, cType: this.categoryType, pcId: pc, gType: gtype, Type: type, stId: stid, warranty: wrnty, rating: rating, start: this.dateRange.startDate, end: this.dateRange.endDate, } });
    };
    DashboardComponent.prototype.get_product_rating_chart = function () {
        var _this = this;
        this.rating = [[]];
        this.dashboardservice.getProductRating(this.filter, this.valFalse)
            .subscribe(function (res) {
            _this.rating = [[]];
            _this.ratingId = [[]];
            _this.rating[0].push('rating');
            for (var i = 0; i < res[0].ratingInfo.length; i++) {
                _this.rating[0].push(res[0].ratingInfo[i].name);
            }
            for (var k = 0; k < res[0].ratingInfo.length; k++) {
                _this.ratingId.push(res[0].ratingInfo[k].id);
            }
            for (var i = 0; i < res.length; i++) {
                _this.rating[i + 1] = [];
                _this.rating[i + 1].push(res[i].rating);
                for (var j = 0; j < res[i].ratingInfo.length; j++) {
                    _this.rating[i + 1].push(res[i].ratingInfo[j].count);
                }
            }
            _this.draw_rating_chart();
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    DashboardComponent.prototype.draw_rating_chart = function () {
        var _this = this;
        var data = google.visualization.arrayToDataTable(this.rating);
        var options = {
            height: 200,
            // chartArea:{
            //   height:200,
            //   width:120,
            // },
            seriesType: 'bars',
            series: { 6: { type: 'line' } },
            // bar: { groupWidth: '75%' },
            legend: { position: 'none', maxLines: 6 },
            // isStacked: true,
            colors: ['#e91e63', '#01adc2', '#fd9710', '#4ba64f', '#9d36b3', '#FFFF00', '#AA00FF', '#9E9D24'],
            animation: {
                "startup": true,
                duration: 600,
                easing: 'in-out'
            }
        };
        var chart = new google.visualization.ComboChart(document.getElementById('Rating_Chart'));
        google.visualization.events.addListener(chart, 'select', function () {
            var selectedItem = chart.getSelection()[0];
            if (selectedItem) {
                _this.routeToIncidents(_this.ratingId[selectedItem.column], 'rating', '', '', '', selectedItem.row);
            }
        });
        chart.draw(data, options);
    };
    //  incidents weekly report statrs here
    DashboardComponent.prototype.get_Product_Status = function () {
        var _this = this;
        this.statusByProductCat = [];
        this.dashboardservice.get_Product_Status(this.filter, this.valFalse)
            .subscribe(function (res) {
            _this.statusIdChart = [];
            _this.carryforwardChart = [];
            _this.newChart = [];
            _this.rejectedChart = [];
            _this.fixedChart = [];
            _this.statusByProductCatIds = [];
            _this.carryforwardChart.push(['Product Category', 'Carryforward']);
            _this.newChart.push(['Product Category', 'New']);
            _this.rejectedChart.push(['Product Category', 'Rejected']);
            _this.fixedChart.push(['Product Category', 'Fixed']);
            _this.statusByProductCat.push(['Appliances', 'Carry Forward', 'New', 'Fixed', 'Rejected',]);
            res.forEach(function (element) {
                _this.statusByProductCat.push([element.name, element.CARRYFORWARD, element.NEW, element.FIXED, element.REJECTED,]);
                _this.statusIdChart.push([element.id]);
                _this.carryforwardChart.push([element.name, element.CARRYFORWARD]);
                _this.newChart.push([element.name, element.NEW]);
                _this.rejectedChart.push([element.name, element.REJECTED]);
                _this.fixedChart.push([element.name, element.FIXED]);
                _this.statusByProductCatIds.push(element.id);
                // console.log(this.statusByProductCatIds);
            });
            // this.product_status_Chart();
            _this.carryFroward_Chart();
            _this.New_chart();
            _this.rejected_Chart();
            _this.fixed_Chard();
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    // product_status_Chart() {
    //   let data = google.visualization.arrayToDataTable(this.statusByProductCat);
    //   let options = {
    //     height: 200,
    //     seriesType: 'bars',
    //     series: { 6: { type: 'line' } },
    //     vAxis: {
    //     },
    //     legend: { position: 'top', maxLines: 3 },
    //     colors: ['#e91e63', '#01adc2', '#fd9710', '#4ba64f', '#9d36b3', '#FFFF00', '#AA00FF', '#9E9D24'],
    //     animation: {
    //       "startup": true,
    //       duration: 600,
    //       easing: 'in-out'
    //     }
    //   };
    //   let chart = new google.visualization.ComboChart(document.getElementById('product_status_Chart'));
    //   google.visualization.events.addListener(chart, 'select', () => {
    //     var selectedItem = chart.getSelection()[0];
    //     if (selectedItem) {
    //       this.routeToIncidents(this.statusIdChart[selectedItem.row], 'status', this.statusType[selectedItem.column - 1], '', '', '');
    //     }
    //   });
    //   google.visualization.events.addListener(chart, 'onmouseover', () => {
    //     document.getElementById('product_status_Chart').style.cursor = "pointer";
    //   });
    //   google.visualization.events.addListener(chart, 'select', () => {
    //   });
    //   chart.draw(data, options);
    // }
    DashboardComponent.prototype.carryFroward_Chart = function () {
        var _this = this;
        var data = google.visualization.arrayToDataTable(this.carryforwardChart);
        var options = {
            chartArea: {
                width: 100,
                height: 100,
            },
            width: 80,
            height: 80,
            // top: 50,
            // is3D: true,
            legend: { position: 'none', maxLines: 8 },
            // pieSliceText:"value",
            colors: ['#e91e63', '#01adc2', '#fd9710', '#4ba64f', '#9d36b3', '#FFFF00', '#AA00FF', '#9E9D24'],
        };
        var chart = new google.visualization.PieChart(document.getElementById('CarryForward_Chart'));
        google.visualization.events.addListener(chart, 'select', function () {
            var selectedItem = chart.getSelection()[0];
            if (selectedItem) {
                _this.routeToIncidents(_this.statusIdChart[selectedItem.row], 'status', 'CARRYFORWARD', '', '', '');
            }
        });
        chart.draw(data, options);
    };
    DashboardComponent.prototype.New_chart = function () {
        var _this = this;
        var data = google.visualization.arrayToDataTable(this.newChart);
        var options = {
            chartArea: {
                width: 120,
                height: 120,
            },
            width: 80,
            height: 80,
            legend: { position: 'none', maxLines: 8 },
            colors: ['#e91e63', '#01adc2', '#fd9710', '#4ba64f', '#9d36b3', '#FFFF00', '#AA00FF', '#9E9D24'],
        };
        var chart = new google.visualization.PieChart(document.getElementById('New_Chart'));
        google.visualization.events.addListener(chart, 'select', function () {
            var selectedItem = chart.getSelection()[0];
            if (selectedItem) {
                _this.routeToIncidents(_this.statusIdChart[selectedItem.row], 'status', 'NEW', '', '', '');
            }
        });
        chart.draw(data, options);
    };
    DashboardComponent.prototype.fixed_Chard = function () {
        var _this = this;
        var data = google.visualization.arrayToDataTable(this.fixedChart);
        var options = {
            chartArea: {
                width: 120,
                height: 120,
            },
            width: 80,
            height: 80,
            legend: { position: 'none', maxLines: 8 },
            colors: ['#e91e63', '#01adc2', '#fd9710', '#4ba64f', '#9d36b3', '#FFFF00', '#AA00FF', '#9E9D24'],
        };
        var chart = new google.visualization.PieChart(document.getElementById('Fixed_Chart'));
        google.visualization.events.addListener(chart, 'select', function () {
            var selectedItem = chart.getSelection()[0];
            if (selectedItem) {
                _this.routeToIncidents(_this.statusIdChart[selectedItem.row], 'status', 'FIXED', '', '', '');
            }
        });
        chart.draw(data, options);
    };
    DashboardComponent.prototype.rejected_Chart = function () {
        var _this = this;
        var data = google.visualization.arrayToDataTable(this.rejectedChart);
        var options = {
            chartArea: {
                width: 120,
                height: 120,
            },
            width: 80,
            height: 80,
            legend: { position: 'none', maxLines: 8 },
            colors: ['#e91e63', '#01adc2', '#fd9710', '#4ba64f', '#9d36b3', '#FFFF00', '#AA00FF', '#9E9D24'],
        };
        var chart = new google.visualization.PieChart(document.getElementById('Rejected_Chart'));
        google.visualization.events.addListener(chart, 'select', function () {
            var selectedItem = chart.getSelection()[0];
            if (selectedItem) {
                _this.routeToIncidents(_this.statusIdChart[selectedItem.row], 'status', 'REJECTED', '', '', '');
            }
        });
        chart.draw(data, options);
    };
    DashboardComponent.prototype.getStatusByState = function () {
        var _this = this;
        this.stateCount = [];
        this.dashboardservice.getStateByStatus(this.filter, this.valFalse)
            .subscribe(function (res) {
            // console.log(res)
            _this.stateCount = [];
            _this.stateCount.push(['provinces', 'Open Incidents']);
            res.forEach(function (element) {
                _this.stateCount.push([element.state, element.count]);
            });
            _this.regions_chart();
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    DashboardComponent.prototype.regions_chart = function () {
        var _this = this;
        {
            var data = google.visualization.arrayToDataTable(this.stateCount);
            var options = {
                height: 300,
                chartArea: {
                    height: 320,
                },
                region: 'IN',
                resolution: 'provinces',
                colorAxis: { colors: ['#9c27b0'] },
                animation: {
                    "startup": true,
                    duration: 600,
                    easing: 'in-out'
                }
            };
            var chart_1 = new google.visualization.GeoChart(document.getElementById('regions_chart'));
            google.visualization.events.addListener(chart_1, 'select', function () {
                var selectedItem = chart_1.getSelection()[0];
                console.log(selectedItem);
                if (selectedItem) {
                    _this.routeToIncidents(_this.filterId || 0, 'region', '', _this.stateCount[selectedItem.row + 1][0], '', '');
                }
            });
            chart_1.draw(data, options);
        }
    };
    DashboardComponent.prototype.get_MeanTime_Till_Date = function () {
        var _this = this;
        this.mttrTillDate = [];
        this.dashboardservice.getAVG(this.filter, this.valFalse)
            .subscribe(function (res) {
            _this.mttrTillDate = [];
            _this.avgId = [];
            _this.mttrTillDate.push(['Appliances', 'Customer', 'Engineer', 'Repair', 'avg']);
            res[0]["avgResolveTimeInfo"].forEach(function (element) {
                _this.avgId.push([element.id]);
                _this.mttrTillDate.push([element.name, parseFloat(element.customer), parseFloat(element.engineer), parseFloat(element.repair), parseFloat(element.avgResolveTime)]);
                //  }
            });
            _this.repair_time_Till_Date();
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    DashboardComponent.prototype.repair_time_Till_Date = function () {
        var _this = this;
        var data = google.visualization.arrayToDataTable(this.mttrTillDate);
        var options = {
            height: 200,
            seriesType: 'bars',
            series: { 3: { type: 'line' } },
            legend: { position: 'top', maxLines: 3 },
            bar: { groupWidth: '80%' },
            // isStacked: true,
            colors: ['#e91e63', '#01adc2', '#fd9710', '#4ba64f', '#9d36b3', '#FFFF00', '#AA00FF', '#9E9D24'],
            animation: {
                "startup": true,
                duration: 600,
                easing: 'in-out'
            }
        };
        var chart = new google.visualization.ComboChart(document.getElementById('repair_time'));
        google.visualization.events.addListener(chart, 'select', function () {
            var selectedItem = chart.getSelection()[0];
            console.log(selectedItem);
            if (selectedItem) {
                // routeToIncidents(pc?,gtype?,type?,stid?,wrnty?,rating?) {
                _this.routeToIncidents(_this.avgId[selectedItem.row], 'avg', '', '', '', '');
            }
        });
        chart.draw(data, options);
    };
    DashboardComponent.prototype.get_Out_Warranty_Status = function () {
        var _this = this;
        this.dashboardservice.getProductWarrantyStatus(this.filter, this.valFalse)
            .subscribe(function (res) {
            _this.outOfWarranty = [];
            _this.outWarrantyId = [];
            _this.totalOutOfWarranty = 0;
            _this.outOfWarranty.push(["Product Name", "Count"]);
            res[1]["warrantyInfo"].forEach(function (element) {
                _this.outWarrantyId.push([element.id]);
                _this.totalOutOfWarranty = _this.totalOutOfWarranty + element.count;
                _this.outOfWarranty.push([element.name, element.count]);
            });
            _this.inWarranty = [];
            _this.inWarrantyId = [];
            _this.totalInWarranty = 0;
            _this.inWarranty.push(["Product Name", "Count"]);
            res[0]["warrantyInfo"].forEach(function (element) {
                _this.inWarrantyId.push([element.id]);
                _this.inWarranty.push([element.name, element.count]);
                _this.totalInWarranty = _this.totalInWarranty + element.count;
            });
            _this.In_Warranty_Status_chart();
            _this.Out_Warranty_Status_chart();
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    DashboardComponent.prototype.Out_Warranty_Status_chart = function () {
        var _this = this;
        var data = google.visualization.arrayToDataTable(this.outOfWarranty);
        var options = {
            height: 300,
            title: "" + this.totalOutOfWarranty + '    out of warranty  ',
            // is3D: true,
            chartArea: {
                height: 200,
                width: 200,
            },
            legend: { position: 'none', },
            // pieSliceText:"value",
            colors: ['#e91e63', '#01adc2', '#fd9710', '#4ba64f', '#9d36b3', '#FFFF00', '#AA00FF', '#9E9D24'],
            animation: {
                "startup": true,
                duration: 600,
                easing: 'in-out'
            }
        };
        var chart = new google.visualization.PieChart(document.getElementById('out_Warranty_Status'));
        google.visualization.events.addListener(chart, 'select', function () {
            var selectedItem = chart.getSelection()[0];
            console.log(selectedItem);
            if (selectedItem) {
                // routeToIncidents(pc?,gtype?,type?,stid?,wrnty?,rating?) {
                _this.routeToIncidents(_this.outWarrantyId[selectedItem.row], 'warranty', '', '', 'outsideWarranty', '');
            }
        });
        chart.draw(data, options);
    };
    DashboardComponent.prototype.In_Warranty_Status_chart = function () {
        var _this = this;
        var data = google.visualization.arrayToDataTable(this.inWarranty);
        var options = {
            title: this.totalInWarranty + " " + '      In warranty   ',
            height: 300,
            chartArea: {
                height: 200,
                width: 200,
            },
            // is3D: true,
            legend: { position: 'none', maxLines: 7 },
            // pieSliceText: "value",
            colors: ['#e91e63', '#01adc2', '#fd9710', '#4ba64f', '#9d36b3', '#FFFF00', '#AA00FF', '#9E9D24'],
        };
        var chart = new google.visualization.PieChart(document.getElementById('in_Warranty_Status'));
        google.visualization.events.addListener(chart, 'select', function () {
            var selectedItem = chart.getSelection()[0];
            console.log(selectedItem);
            if (selectedItem) {
                // routeToIncidents(pc?,gtype?,type?,stid?,wrnty?,rating?) {
                _this.routeToIncidents(_this.inWarrantyId[selectedItem.row], 'warranty', '', '', 'inWarranty', '');
            }
        });
        chart.draw(data, options);
    };
    // get_Product_Incident_Age() {
    //   this.dashboardservice.getProductIncidentAge(this.filter, this.valFalse)
    //     .subscribe((res: any) => {
    //       this.Product_Incident_Age_chart(res);
    //     }, (err) => {
    //       this.tostservice.showNotificationFailure(err)
    //     }
    //     );
    // }
    // Product_Incident_Age_chart(data: any[]) {
    //   this.incidentId = [];
    //   var dataTable: any = [[]];
    //   dataTable[0].push('range');
    //   for (let i = 0; i < data[0].ageInfo.length; i++) {
    //     dataTable[0].push(data[0].ageInfo[i].name);
    //   }
    //   for (let k = 0; k < data[0].ageInfo.length; k++) {
    //     this.incidentId.push(data[0].ageInfo[k].id);
    //   }
    //   for (let i = 0; i < data.length; i++) {
    //     dataTable[i + 1] = [];
    //     dataTable[i + 1].push(data[i].range);
    //     for (let j = 0; j < data[i].ageInfo.length; j++) {
    //       dataTable[i + 1].push(data[i].ageInfo[j].count);
    //     }
    //   }
    //   var data1 = google.visualization.arrayToDataTable(dataTable);
    //   var options = {
    //     height: 200,
    //     seriesType: 'bars',
    //     legend: { position: 'none', },
    //     colors: ['#e91e63', '#01adc2', '#fd9710', '#4ba64f', '#9d36b3', '#FFFF00', '#AA00FF', '#9E9D24'],
    //     animation: {
    //       "startup": true,
    //       duration: 600,
    //       easing: 'in-out'
    //     }
    //   };
    //   var chart = new google.visualization.ComboChart(document.getElementById('Product_Incident_Age'));
    //   google.visualization.events.addListener(chart, 'select', () => {
    //     var selectedItem = chart.getSelection()[0];
    //     console.log(selectedItem)
    //     if (selectedItem) {
    //       console.log(this.incidentId[selectedItem.column - 1]);
    //       this.routeToIncidents(this.incidentId[selectedItem.column - 1], 'incident-age', dataTable[selectedItem.row + 1][0], '', '', '');
    //     }
    //   });
    //   chart.draw(data1, options);
    // }
    DashboardComponent.prototype.get_time_Chart = function () {
        var _this = this;
        this.incidentAge = [];
        this.dashboardservice.getTimeChart(this.filter, this.valFalse)
            .subscribe(function (res) {
            console.log(res);
            _this.Time_Chart(res);
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    DashboardComponent.prototype.Time_Chart = function (data) {
        var _this = this;
        this.incidentAge = [];
        var dataTable = [[]];
        dataTable[0].push('range');
        for (var i = 0; i < data[0].productAgeInfo.length; i++) {
            dataTable[0].push(data[0].productAgeInfo[i].name);
        }
        for (var k = 0; k < data[0].productAgeInfo.length; k++) {
            this.incidentAge.push(data[0].productAgeInfo[k].id);
        }
        for (var i = 0; i < data.length; i++) {
            dataTable[i + 1] = [];
            dataTable[i + 1].push(data[i].range);
            for (var j = 0; j < data[i].productAgeInfo.length; j++) {
                dataTable[i + 1].push(data[i].productAgeInfo[j].count);
            }
        }
        var data1 = google.visualization.arrayToDataTable(dataTable);
        var options = {
            height: 200,
            seriesType: 'bars',
            legend: { position: 'none', },
            colors: ['#e91e63', '#01adc2', '#fd9710', '#4ba64f', '#9d36b3', '#FFFF00', '#AA00FF', '#9E9D24'],
            animation: {
                "startup": true,
                duration: 600,
                easing: 'in-out'
            }
        };
        var chart = new google.visualization.ComboChart(document.getElementById('Time_chart'));
        google.visualization.events.addListener(chart, 'select', function () {
            var selectedItem = chart.getSelection()[0];
            console.log(selectedItem);
            if (selectedItem) {
                console.log(_this.incidentAge[selectedItem.column - 1]);
                _this.routeToIncidents(_this.incidentAge[selectedItem.column - 1], 'time', dataTable[selectedItem.row + 1][0], '', '', '');
            }
        });
        chart.draw(data1, options);
    };
    // mean time to repair start here
    DashboardComponent.prototype.getMeanTime = function () {
        var _this = this;
        this.meanTiming = [[]];
        this.dashboardservice.getMTTR(this.filter, this.valFalse)
            .subscribe(function (res) {
            _this.mttrId = [];
            _this.meanTiming = [[]];
            _this.meanTiming[0].push('avg');
            for (var i = 0; i < res[0].mttrInfo.length; i++) {
                _this.meanTiming[0].push(res[0].mttrInfo[i].name);
            }
            for (var k = 0; k < res[0].mttrInfo.length; k++) {
                _this.mttrId.push(res[0].mttrInfo[k].id);
            }
            for (var i = 0; i < res.length; i++) {
                _this.meanTiming[i + 1] = [];
                _this.meanTiming[i + 1].push(res[i].range);
                for (var j = 0; j < res[i].mttrInfo.length; j++) {
                    _this.meanTiming[i + 1].push(res[i].mttrInfo[j].count);
                }
            }
            _this.repair_time();
        });
    };
    DashboardComponent.prototype.repair_time = function () {
        var _this = this;
        var data = google.visualization.arrayToDataTable(this.meanTiming);
        var options = {
            height: 200,
            // chartArea: {
            //   left: 80,
            // },
            legend: { position: 'none', maxLines: 7 },
            seriesType: 'bars',
            isStacked: true,
            colors: ['#e91e63', '#01adc2', '#fd9710', '#4ba64f', '#9d36b3', '#FFFF00', '#AA00FF', '#9E9D24'],
            animation: {
                "startup": true,
                duration: 600,
                easing: 'in-out'
            }
        };
        var chart = new google.visualization.BarChart(document.getElementById('time_to_repair'));
        google.visualization.events.addListener(chart, 'select', function () {
            var selectedItem = chart.getSelection()[0];
            if (selectedItem) {
                _this.routeToIncidents(_this.mttrId[selectedItem.column - 1], 'mttr', _this.meanTiming[selectedItem.row + 1][0], '', '', '');
            }
        });
        chart.draw(data, options);
    };
    // mean time to repair end here
    //  all managent charts load on managment loggin
    DashboardComponent.prototype.getAllManagmentCharts = function () {
        var _this = this;
        google.charts.load('current', { packages: ['corechart', 'bar'] });
        google.charts.setOnLoadCallback(function () {
            _this.getCharts();
        });
    };
    DashboardComponent.prototype.getCharts = function () {
        // this.get_Product_Incident_Age();
        this.getMeanTime();
        this.getDashboardDetails();
        this.get_Product_Status();
        this.getStatusByState();
        this.get_Out_Warranty_Status();
        this.get_MeanTime_Till_Date();
        this.getProductCategorys();
        this.get_product_rating_chart();
        this.get_time_Chart();
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.role = localStorage.getItem("currentUserName");
        this.getFilter();
        this.today = new Date();
        this.today.setDate(this.today.getDate() + 1);
        this.dashboardservice.loadScript().subscribe(function (res) { }, function (err) { }, function () {
            if (_this.role == 'management') {
                _this.getAllManagmentCharts();
            }
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")],
        }),
        __metadata("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"],
            _providers_tost_service__WEBPACK_IMPORTED_MODULE_2__["TostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <app-sidebar></app-sidebar>\n    <div class=\"main-panel\">\n      <app-navbar ></app-navbar>\n      <div  class=\"content\">\n      <router-outlet></router-outlet>\n      </div>\n      <app-footer></app-footer>\n    </div>\n    \n    </div>"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
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

var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
    };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var _admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _providers_auth1_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../providers/auth1.guard */ "./src/app/providers/auth1.guard.ts");
/* harmony import */ var _providers_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../providers/auth.guard */ "./src/app/providers/auth.guard.ts");
/* harmony import */ var _providers_authDashboard_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../providers/authDashboard.guard */ "./src/app/providers/authDashboard.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            ],
            declarations: [
                _admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            ],
            providers: [_providers_auth1_guard__WEBPACK_IMPORTED_MODULE_8__["Auth1Guard"], _providers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"], _providers_authDashboard_guard__WEBPACK_IMPORTED_MODULE_10__["AuthDashboardGuard"]]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _providers_auth1_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/auth1.guard */ "./src/app/providers/auth1.guard.ts");
/* harmony import */ var _providers_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/auth.guard */ "./src/app/providers/auth.guard.ts");
/* harmony import */ var _providers_authDashboard_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/authDashboard.guard */ "./src/app/providers/authDashboard.guard.ts");
/* harmony import */ var _components_edit_user_details_edit_user_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/edit-user-details/edit-user-details.component */ "./src/app/components/edit-user-details/edit-user-details.component.ts");






var AdminLayoutRoutes = [
    {
        path: '', component: _admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [
            { path: "edit", component: _components_edit_user_details_edit_user_details_component__WEBPACK_IMPORTED_MODULE_5__["EditUserDetailsComponent"] },
            {
                path: 'incidents', loadChildren: '../../Modules/incidents/incidents.module#IncidentsModule',
                canActivate: [_providers_auth1_guard__WEBPACK_IMPORTED_MODULE_2__["Auth1Guard"]]
            },
            {
                path: 'installation', loadChildren: '../../Modules/installation/installation.module#InstallationModule',
                canActivate: [_providers_auth1_guard__WEBPACK_IMPORTED_MODULE_2__["Auth1Guard"]]
            },
            {
                path: 'manager', loadChildren: '../../Modules/brandManager/brand-manager.module#BrandManagerModule',
                canActivate: [_providers_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'engineer', loadChildren: '../../Modules/serviceEngineer/service-engineer.module#ServiceEngineerModule',
                canActivate: [_providers_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
                canActivate: [_providers_authDashboard_guard__WEBPACK_IMPORTED_MODULE_4__["AuthDashboardGuard"]]
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/providers/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/providers/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/login/login.service */ "./src/app/components/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(loginservice, router) {
        this.loginservice = loginservice;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.loginservice.isLoggedIn() && (localStorage.getItem("currentUserName") == "superadmin")) {
            return true;
        }
        else
            (!this.loginservice.isLoggedIn());
        {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_components_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/providers/auth1.guard.ts":
/*!******************************************!*\
  !*** ./src/app/providers/auth1.guard.ts ***!
  \******************************************/
/*! exports provided: Auth1Guard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth1Guard", function() { return Auth1Guard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/login/login.service */ "./src/app/components/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Auth1Guard = /** @class */ (function () {
    function Auth1Guard(loginservice, router) {
        this.loginservice = loginservice;
        this.router = router;
    }
    Auth1Guard.prototype.canActivate = function (next, state) {
        if (this.loginservice.isLoggedIn() && (localStorage.getItem("currentUserName") == "management")) {
            return true;
        }
        else
            (!this.loginservice.isLoggedIn());
        {
            this.router.navigate(['/login']);
            return false;
        }
    };
    Auth1Guard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_components_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Auth1Guard);
    return Auth1Guard;
}());



/***/ }),

/***/ "./src/app/providers/authDashboard.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/providers/authDashboard.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthDashboardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthDashboardGuard", function() { return AuthDashboardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/login/login.service */ "./src/app/components/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthDashboardGuard = /** @class */ (function () {
    function AuthDashboardGuard(loginservice, router) {
        this.loginservice = loginservice;
        this.router = router;
    }
    AuthDashboardGuard.prototype.canActivate = function (next, state) {
        if (this.loginservice.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthDashboardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_components_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthDashboardGuard);
    return AuthDashboardGuard;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map