(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-brandManager-brand-manager-module"],{

/***/ "./src/app/Modules/brandManager/brand-manager.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Modules/brandManager/brand-manager.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header card-header-primary\">\r\n        <div class=\"d-flex justify-content-between\">\r\n            <h4 class=\"card-title \">Brand Manager</h4>\r\n            <div class=\"dropdown\">\r\n                <a class=\"nav-link \">\r\n                    <!-- <i class=\"material-icons\" (click)=\"managerForm.reset()\" data-toggle=\"modal\" data-target=\"#ManagerFormModal\"> add_to_photos</i> -->\r\n                    <button class=\"btn btn-primary transparent\" (click)=\"managerForm.reset()\" data-toggle=\"modal\"\r\n                        data-target=\"#ManagerFormModal\"><i class=\"material-icons\" style=\"font-size: 30px;\">\r\n                            person_add\r\n                        </i></button>\r\n                </a>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"card-body\">\r\n\r\n        <div class=\"table-responsive\" id=\"coll\">\r\n            <table class=\"table table-hover \">\r\n\r\n                <thead class=\" text-primary\">\r\n\r\n                    <th *ngFor=\"let head of headerRow\">{{ head }}</th>\r\n\r\n                </thead>\r\n                <tbody *ngFor=\"let row of dataRows let i =index\">\r\n\r\n\r\n                    <tr>\r\n                        <td>\r\n                            <b> {{i+1}} </b>\r\n                        </td>\r\n\r\n                        <td>\r\n                            <img *ngIf=\"row.picUrl\" style=\"width: 45px;height: 45px;border-radius: 25px;\" src=\"{{row.picUrl}}\">\r\n                            &nbsp;\r\n                            <i *ngIf=\"!row.picUrl\" style=\"width: 45px;height: 45px;border-radius: 25px;\" class=\"material-icons mainColor\">person</i>\r\n\r\n                            {{row.name}}\r\n                        </td>\r\n                        <td>\r\n                            <b>{{row.username}}</b>\r\n                        </td>\r\n                        <td>\r\n                            <b>{{row.email}}</b>\r\n                        </td>\r\n                        <td>\r\n                            <b>{{row.contactNo}}</b>\r\n                        </td>\r\n                        <td class=\"change-icon\">\r\n\r\n                            <i (click)=\"getId(row.id)\" data-toggle=\"modal\" data-target=\"#deleteModal\" class=\"material-icons mainColor deleteIcon\">delete</i>\r\n\r\n                            <i (click)=\"getId(row.id)\" data-toggle=\"modal\" data-target=\"#deleteModal\" class=\"material-icons mainColor deleteChange-icon\">delete_forever</i>\r\n\r\n                        </td>\r\n\r\n\r\n\r\n                    </tr>\r\n\r\n\r\n\r\n                </tbody>\r\n                <tfoot>\r\n                    <tr>\r\n                        <td colspan=\"9\" style=\"font-size: 70px; text-align: center;\">\r\n                            <i *ngIf=\"isDataLoad\" class=\"fa fa-spinner fa-spin mainColor\"></i>\r\n                        </td>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- barand manager form -->\r\n\r\n<div class=\"modal fade\" id=\"ManagerFormModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ManagerFormModal\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content   card card-stats\">\r\n            <div class=\"card-header card-header-success card-header-icon\">\r\n                <div class=\"card-icon\">\r\n                    <i class=\"material-icons\">person_add\r\n                    </i>\r\n                </div>\r\n                <h3 class=\"card-title\">ADD MANAGER</h3>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"onSubmit()\" #managerForm=\"ngForm\">\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"name\"> Name <span style=\"color: red;\">*</span></label>\r\n                                <br>\r\n                                <input type=\"text\" required class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"managerDetails.name\"\r\n                                    #name=\"ngModel\">\r\n                                <small [hidden]=\"name.valid || name.untouched\" style=\"color: red\">\r\n                                    Name is required\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <label>Profile Picture</label>\r\n                            <input type=\"file\" (change)=\"onSelectFile($event)\" name=\"pic\" id=\"pic\" class=\"form-control \">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Email Id <span style=\"color: red;\">*</span> </label>\r\n                                <input type=\"email\" required [(ngModel)]=\"managerDetails.email\" name=\"email\" id=\"email\"\r\n                                    class=\"form-control \" #email=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}\">\r\n                                <small [hidden]=\"email.valid || email.untouched\" style=\"color: red\">\r\n                                    Email Id is required\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"userName\">User Name <span style=\"color: red;\">*</span></label>\r\n                                <br>\r\n                                <input type=\"text\" required minlength=\"4\" maxlength=\"20\" class=\"form-control\" id=\"userName\"\r\n                                    name=\"userName\" [(ngModel)]=\"managerDetails.username\" #userName=\"ngModel\">\r\n                                <small [hidden]=\"userName.valid || userName.untouched\" style=\"color: red\">\r\n                                    User Name is required at\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"password\">Password <span style=\"color: red;\">*</span></label>\r\n                                <br>\r\n                                <input type=\"password\" required class=\"form-control\" id=\"password\" name=\"password\"\r\n                                    [(ngModel)]=\"managerDetails.password\" #password=\"ngModel\">\r\n                                <small [hidden]=\"password.valid || password.untouched\" style=\"color: red\">\r\n                                    password is required with minimum length 6\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"contactNo\">Contact No <span style=\"color: red;\">*</span></label>\r\n\r\n                                <input type=\"number\" required minlength=\"10\" maxlength=\"13\" class=\"form-control\" id=\"contactNo\"\r\n                                    name=\"contactNo\" [(ngModel)]=\"managerDetails.contactNo\" #contactNo=\"ngModel\">\r\n                                <small [hidden]=\"contactNo.valid || contactNo.untouched\" style=\"color: red\">\r\n                                    Contect No. is required\r\n                                </small>\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"exampleFormControlSelect1\">Brand Id</label>\r\n                                <select class=\"form-control  selectpicker\" name=\"brnad\" [(ngModel)]=\"managerDetails.brandId\"\r\n                                    #brand=\"ngModel\" id=\"exampleFormControlSelect1\">\r\n                                    <option *ngFor=\"let brand of brands\" [value]=\"brand.id\"> {{brand.name}} </option>\r\n\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"modal-footer\">\r\n\r\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                        <button type=\"submit\" [disabled]=\"!managerForm.valid\" class=\"btn btn-success\">Submit</button>\r\n                    </div>\r\n                </form>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- brand manager form end -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- delete modal for brand manager -->\r\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content   card card-stats\">\r\n            <div class=\"card-header card-header-success card-header-icon\">\r\n                <div class=\"card-icon\">\r\n                    <i class=\"material-icons\">delete_outline\r\n                    </i>\r\n                </div>\r\n                <h3 class=\"card-title\">Delete</h3>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <h3>\"Are you sure you want to delete this Manager?\",\r\n                </h3>\r\n                <div class=\"modal-footer\">\r\n\r\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancle</button>\r\n                    <button type=\"submit\" (click)=\"deleteManager()\" class=\"btn btn-success\">Delete</button>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- delete modal end here -->"

/***/ }),

/***/ "./src/app/Modules/brandManager/brand-manager.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Modules/brandManager/brand-manager.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-results {\n  height: auto;\n  overflow: scroll; }\n\n.loadingPage {\n  font-size: 100px;\n  padding-top: 150px;\n  color: #851aa1;\n  text-align: center; }\n\n.action-buttons i {\n  position: relative;\n  z-index: 2; }\n\n.action-buttons i:before {\n    position: absolute;\n    content: '';\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    width: 0px;\n    height: 0px;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    border-radius: 50%;\n    background: rgba(0, 0, 0, 0.1);\n    transition: 0.1s; }\n\n.action-buttons i:hover {\n    color: #de2768;\n    cursor: pointer; }\n\n.action-buttons i:hover:before {\n      width: 35px;\n      height: 35px;\n      z-index: 1; }\n\n.new {\n  background: #f1c40f; }\n\n.not-fixed {\n  background: #f44336; }\n\n.fixed {\n  background: #4caf50; }\n\n.scheduled {\n  background: #03a9f4; }\n\n.assigned {\n  background: #3f51b5; }\n\n.rotate {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  transition: 0.5s ease-in-out; }\n\n.re-open {\n  background: #9c27b0; }\n\ntr:hover {\n  cursor: pointer; }\n\ntr:hover .collapse-icon {\n    color: #de2768; }\n\n.incident-details .product-image {\n  width: inherit; }\n\n.incident-details .btn {\n  background: white; }\n\n.assign-form .material-icons {\n  color: #4caf50; }\n\n.incident-detail-box {\n  transition: 0.2s ease-in box-shadow; }\n\n.incident-detail-box:hover {\n    background: white;\n    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1); }\n\n.selectpicker {\n  -webkit-appearance: menulist !important;\n  height: auto !important; }\n"

/***/ }),

/***/ "./src/app/Modules/brandManager/brand-manager.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Modules/brandManager/brand-manager.component.ts ***!
  \*****************************************************************/
/*! exports provided: BrandManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandManagerComponent", function() { return BrandManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _brand_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brand-manager.service */ "./src/app/Modules/brandManager/brand-manager.service.ts");
/* harmony import */ var _interface_manager_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/manager_details */ "./src/app/interface/manager_details.ts");
/* harmony import */ var src_app_providers_tost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/tost.service */ "./src/app/providers/tost.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrandManagerComponent = /** @class */ (function () {
    function BrandManagerComponent(brandService, tostservice) {
        this.brandService = brandService;
        this.tostservice = tostservice;
        this.isDataLoad = true;
        this.loadingButton = false;
        this.isBrandId = false;
        this.submitButtonHide = false;
        this.headerRow = ['S.No.', 'Name', 'User Name', 'Email', 'Phone No', "Action"];
        this.managerDetails = new _interface_manager_details__WEBPACK_IMPORTED_MODULE_2__["ManagerDetails"];
    }
    BrandManagerComponent.prototype.ngOnInit = function () {
        this.getManagers();
        this.getBrandIds();
    };
    BrandManagerComponent.prototype.getManagers = function () {
        var _this = this;
        this.brandService.getManager()
            .subscribe(function (res) {
            _this.dataRows = res;
            _this.isDataLoad = false;
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    BrandManagerComponent.prototype.getBrandIds = function () {
        var _this = this;
        this.brandService.getBrandIds()
            .subscribe(function (res) {
            _this.brands = res;
            _this.isBrandId = false;
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    // upload manager img 
    BrandManagerComponent.prototype.onSelectFile = function (event) {
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
    // creat new manager
    BrandManagerComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitButtonHide = true;
        this.loadingButton = true;
        var fd = new FormData();
        for (var key in this.managerDetails) {
            fd.append(key, this.managerDetails[key]);
            if (this.imgfile) {
                fd.append("pic", this.imgfile);
            }
        }
        this.brandService.addManager(fd)
            .subscribe(function (res) {
            _this.resetform();
            _this.closeManagerFormModal();
            _this.dataRows.unshift(res);
            _this.tostservice.showNotificationSuccess("Manager add successfuly");
        }, function (err) {
            _this.loadingButton = false;
            _this.tostservice.showNotificationFailure(err);
        });
    };
    BrandManagerComponent.prototype.getId = function (id) {
        this.currentId = id;
    };
    // delete manager 
    BrandManagerComponent.prototype.deleteManager = function () {
        var _this = this;
        this.brandService.deleteManager(this.currentId)
            .subscribe(function (res) {
            _this.tostservice.showNotificationSuccess("Manager Delete successfuly");
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    // reset manager form
    BrandManagerComponent.prototype.resetform = function () {
        this.imgfile = null;
        this.managerDetails = new _interface_manager_details__WEBPACK_IMPORTED_MODULE_2__["ManagerDetails"]();
    };
    BrandManagerComponent.prototype.closeManagerFormModal = function () {
        $('#ManagerFormModal').modal('hide');
    };
    BrandManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brand-manager',
            template: __webpack_require__(/*! ./brand-manager.component.html */ "./src/app/Modules/brandManager/brand-manager.component.html"),
            styles: [__webpack_require__(/*! ./brand-manager.component.scss */ "./src/app/Modules/brandManager/brand-manager.component.scss")]
        }),
        __metadata("design:paramtypes", [_brand_manager_service__WEBPACK_IMPORTED_MODULE_1__["BrandManagerService"],
            src_app_providers_tost_service__WEBPACK_IMPORTED_MODULE_3__["TostService"]])
    ], BrandManagerComponent);
    return BrandManagerComponent;
}());



/***/ }),

/***/ "./src/app/Modules/brandManager/brand-manager.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/Modules/brandManager/brand-manager.module.ts ***!
  \**************************************************************/
/*! exports provided: BrandManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandManagerModule", function() { return BrandManagerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _brand_manager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brand-manager.component */ "./src/app/Modules/brandManager/brand-manager.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BrandManagerModule = /** @class */ (function () {
    function BrandManagerModule() {
    }
    BrandManagerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _brand_manager_component__WEBPACK_IMPORTED_MODULE_2__["BrandManagerComponent"] },
                ])
            ],
            declarations: [
                _brand_manager_component__WEBPACK_IMPORTED_MODULE_2__["BrandManagerComponent"],
            ]
        })
    ], BrandManagerModule);
    return BrandManagerModule;
}());



/***/ }),

/***/ "./src/app/Modules/brandManager/brand-manager.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/Modules/brandManager/brand-manager.service.ts ***!
  \***************************************************************/
/*! exports provided: BrandManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandManagerService", function() { return BrandManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_custom_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/custom-http.service */ "./src/app/providers/custom-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrandManagerService = /** @class */ (function () {
    function BrandManagerService(customHttp) {
        this.customHttp = customHttp;
    }
    //add manager
    BrandManagerService.prototype.addManager = function (fd) {
        return this.customHttp.post("/sa/employee", fd);
    };
    //get brand id
    BrandManagerService.prototype.getBrandIds = function () {
        return this.customHttp.get("/sa/brand");
    };
    //get manager details
    BrandManagerService.prototype.getManager = function () {
        return this.customHttp.get("/sa/brand-manager/page/1");
    };
    // delete Manager
    BrandManagerService.prototype.deleteManager = function (delete_id) {
        return this.customHttp.delete("/sa/employee/" + delete_id);
    };
    BrandManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_providers_custom_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomHttpService"]])
    ], BrandManagerService);
    return BrandManagerService;
}());



/***/ }),

/***/ "./src/app/interface/manager_details.ts":
/*!**********************************************!*\
  !*** ./src/app/interface/manager_details.ts ***!
  \**********************************************/
/*! exports provided: ManagerDetails, EditManagerDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerDetails", function() { return ManagerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditManagerDetails", function() { return EditManagerDetails; });
var ManagerDetails = /** @class */ (function () {
    function ManagerDetails() {
        this.userType = "BrandManager";
    }
    return ManagerDetails;
}());

var EditManagerDetails = /** @class */ (function () {
    function EditManagerDetails() {
    }
    return EditManagerDetails;
}());



/***/ })

}]);
//# sourceMappingURL=Modules-brandManager-brand-manager-module.js.map