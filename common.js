(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/Modules/incidents/incidents.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Modules/incidents/incidents.service.ts ***!
  \********************************************************/
/*! exports provided: IncidentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentsService", function() { return IncidentsService; });
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


var IncidentsService = /** @class */ (function () {
    function IncidentsService(customHttp) {
        this.customHttp = customHttp;
    }
    //get complaints details
    IncidentsService.prototype.getAllComplaint = function (pageNo) {
        var complaint_api = "/m/complaint/page/" + pageNo;
        return this.customHttp.get(complaint_api);
    };
    // get filter complaints
    IncidentsService.prototype.getFillterComplaint = function (fd, pageNo) {
        var filter_api = "/m/complaint/filter/page/" + pageNo;
        return this.customHttp.post(filter_api, fd);
    };
    // get complaints history
    IncidentsService.prototype.getComplaintsHistory = function (i) {
        var complaintHistory_api = "/m/complaint/" + i + "/history";
        return this.customHttp.get(complaintHistory_api);
    };
    //reject complaints put request
    IncidentsService.prototype.rejectComplaint = function (fd, complaintId) {
        var rejectComplaint_api = "/m/complaint/" + complaintId;
        return this.customHttp.put(rejectComplaint_api, fd);
    };
    // get  list of engineer for perticuler type of  complaints
    IncidentsService.prototype.getServiceEngAgainstComplaindId = function (i) {
        var Installation_api = "/m/complaint/" + i + "/service-engineer";
        return this.customHttp.get(Installation_api);
    };
    //assign Engineer for complaint
    IncidentsService.prototype.assignEngineer = function (fd, id) {
        var Installation_api = "/m/complaint/" + id;
        return this.customHttp.put(Installation_api, fd);
    };
    // get incidents count by status
    IncidentsService.prototype.getStatusByCount = function () {
        return this.customHttp.get("/m/complaint/graph/status");
    };
    // status heading from backend
    IncidentsService.prototype.getCompStatus = function () {
        var status = "/m/status/complaint";
        return this.customHttp.get(status);
    };
    // sorting against diffrent value
    IncidentsService.prototype.getSorting = function (sort, isAsc) {
        var sort_api = "/m/complaint/sort/" + sort + "/" + isAsc;
        return this.customHttp.get(sort_api);
    };
    // sorting by status, priority, category filter by status id
    IncidentsService.prototype.getFilterSorting = function (sort, filter, isAsc) {
        var filterSort_api = "/m/complaint/filter-sort/" + sort + "/" + isAsc;
        return this.customHttp.post(filterSort_api, filter);
    };
    IncidentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_providers_custom_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomHttpService"]])
    ], IncidentsService);
    return IncidentsService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_custom_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/custom-http.service */ "./src/app/providers/custom-http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = /** @class */ (function () {
    function DashboardService(customHttp) {
        this.customHttp = customHttp;
        this.script = {
            name: 'GoogleCharts',
            src: 'https://www.gstatic.com/charts/loader.js'
        };
        // this.loadScript();
    }
    DashboardService.prototype.loadScript = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            if (document.getElementById(_this.script.name) == null) {
                var node = document.createElement('script');
                node.src = _this.script.src;
                node.type = 'text/javascript';
                node.async = false;
                node.charset = 'utf-8';
                node.id = _this.script.name;
                document.getElementsByTagName('head')[0].appendChild(node);
                node.onload = function () {
                    observer.complete();
                };
            }
            else {
                observer.complete();
            }
        });
    };
    // compaints status count of products
    DashboardService.prototype.getStatusCount = function () {
        var I_api = "/m/complaint/graph/product";
        // this.getsubCatCount()
        return this.customHttp.get(I_api);
    };
    // compaints status count of products
    DashboardService.prototype.getSubCatCount = function (id) {
        //  console.log("hell0o")
        var I_api = "/m/complaint/graph/product-status/" + id;
        return this.customHttp.get(I_api);
    };
    DashboardService.prototype.getProductCategory = function () {
        return this.customHttp.get("/m/product-category");
    };
    DashboardService.prototype.getDashbord = function (fd) {
        return this.customHttp.post("/m/complaint/dashboard/card", fd);
    };
    // state by status of complaints
    DashboardService.prototype.getStateByStatus = function (fd, x) {
        var I_api = "/m/complaint/dashboard/region/" + x;
        return this.customHttp.post(I_api, fd);
    };
    // product status vs category
    DashboardService.prototype.get_Product_Status = function (fd, x) {
        return this.customHttp.post("/m/complaint/dashboard/status/" + x, fd);
    };
    DashboardService.prototype.getProductIncidentAge = function (fd, x) {
        return this.customHttp.post("/m/complaint/dashboard/incident-age/" + x, fd);
    };
    DashboardService.prototype.getProductRating = function (fd, x) {
        return this.customHttp.post("/m/complaint/dashboard/rating/" + x, fd);
    };
    DashboardService.prototype.getTimeChart = function (fd, x) {
        return this.customHttp.post("/m/complaint/dashboard/time/" + x, fd);
    };
    DashboardService.prototype.getProductWarrantyStatus = function (fd, x) {
        return this.customHttp.post("/m/complaint/dashboard/warranty/" + x, fd);
    };
    DashboardService.prototype.getAVG = function (fd, x) {
        var I_api = "/m/complaint/dashboard/avg/" + x;
        return this.customHttp.post(I_api, fd);
    };
    DashboardService.prototype.getMTTR = function (fd, x) {
        var I_api = "/m/complaint/dashboard/mttr/" + x;
        return this.customHttp.post(I_api, fd);
    };
    // current incident new, fixed, inprogress,
    DashboardService.prototype.getCurrentIncident = function () {
        var I_api = "/m/complaint/graph/product-status";
        // const I_api = `/m/complaint/graph/category-status`
        return this.customHttp.get(I_api);
    };
    DashboardService.prototype.getCurrentInstallation = function () {
        // const I_api = `/m/installation/graph/product-status`
        return this.customHttp.get("/m/installation/graph/product-status");
    };
    // state by status of installation
    DashboardService.prototype.getInstallationStateByStatus = function () {
        var I_api = "/m/installation/graph/state-status";
        return this.customHttp.get(I_api);
    };
    //  incidents weekly report
    DashboardService.prototype.getIncidentWeeklyReport = function () {
        var I_api = "/m/complaint/graph/incident-weekly-report";
        return this.customHttp.get(I_api);
    };
    DashboardService.prototype.getCategoryCounts = function () {
        var I_api = "/m/complaint/graph/category";
        return this.customHttp.get(I_api);
    };
    DashboardService.prototype.getCategoryStatus = function () {
        var I_api = "/m/complaint/graph/category-status";
        return this.customHttp.get(I_api);
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_providers_custom_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomHttpService"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map