(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-installation-installation-module"],{

/***/ "./src/app/Modules/installation/installation.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Modules/installation/installation.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"heading\">Installation</div>\r\n<div class=\"card\">\r\n        <div class=\"card-header card-header-primary\">\r\n          <div class=\"d-flex justify-content-between float-right\">\r\n            <div class=\"dropdown\">\r\n              <a class=\"nav-link  dropdown-toggle\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"material-icons hover-cursor\"> filter_list </i>\r\n              </a>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                <a  *ngIf=\"selectedHeadingId==0\" class=\"dropdown-item hoverColor\" [class.active]=\"sortActive=='status' \"  (click)=\"sortBy('status')\">Status</a>\r\n                <a class=\"dropdown-item hoverColor\" [class.active]=\"sortActive=='createdAt' \" (click)=\"sortBy('createdAt')\">Date</a>\r\n                <a class=\"dropdown-item hoverColor\" [class.active]=\"sortActive=='priority' \" (click)=\"sortBy('priority')\">Priority</a>\r\n                <a class=\"dropdown-item hoverColor\" [class.active]=\"sortActive=='category' \" (click)=\"sortBy('category')\">Category</a>\r\n                <a class=\"dropdown-item hoverColor\" (click)=\"clearSortBy(selectedHeadingId)\">Clear Sorting</a>\r\n              </div>\r\n            </div>\r\n      \r\n          </div>\r\n          <ul class=\"nav nav-tabs\">\r\n            <li class=\"nav-item\" *ngFor=\"let status of statusHeading \" style=\"cursor: pointer;\">\r\n              <a class=\"nav-link active\" \r\n              [class.active]='status.id == selectedHeadingId' \r\n              (click)=\"onHeadingClick(status.id)\">{{status.name}}</a>\r\n            </li>\r\n    \r\n          </ul>\r\n        </div>\r\n      \r\n      \r\n        <div class=\"card-body\">\r\n          <div class=\"search-results\" infiniteScroll [infiniteScrollDistance]=\"1\" [infiniteScrollThrottle]=\"0\" (scrolled)=\"onScroll()\"\r\n            [scrollWindow]=\"false\" style=\"height: 60vh;\">\r\n            <div class=\"table-responsive\" id=\"coll\">\r\n              <table class=\"table table-hover \">\r\n      \r\n                <thead class=\" text-primary\">\r\n      \r\n                  <th *ngFor=\"let head of headerRow\">{{ head }}</th>\r\n      \r\n      \r\n                </thead>\r\n                <tbody *ngFor=\"let row of filterInstallation let i =index\">\r\n      \r\n      \r\n                  <tr (click)=\"setId(row.id, i, row.statusId)\" data-toggle=\"collapse\" \r\n                  attr.href=\"#collapseExample{{i}}\">\r\n                    <td>{{row.number}}</td>\r\n                    <td>{{row.createdAt | date: 'dd MMM, yyyy'}}</td>\r\n                    <td>{{row.productName |fixedLength}}</td>\r\n                    <td>\r\n                      {{row.productCategoryName}}\r\n                    </td>\r\n                    <td>{{row.priority}}</td>\r\n      \r\n                    <td>{{row.description |fixedLength }}</td>\r\n                    <td>\r\n                        <span class=\"badge badge-pill\" [style.background]=\"row.statusColor\"> {{ row.statusName }}</span>\r\n                     \r\n                      <!-- </span> -->\r\n                    </td>\r\n\r\n      \r\n      \r\n                  </tr>\r\n      \r\n                  <tr class=\"collapse tabel-detail col-md-8 col-lg-8\" data-parent=\"#coll\" attr.id=\"collapseExample{{i}}\">\r\n                    <td colspan=8 class=\" incident-details\">\r\n                      <div class=\"row p-2 auto-cursor\">\r\n                        \r\n                        <div class=\"card card-nav-tabs description\"  *ngIf=\"row.description\"  style= \"margin:10px; width:94% ; margin: auto; margin-bottom: 0px;\r\n                       \">\r\n                            <div class=\"card-body\" style=\"padding-bottom: 0px;\">\r\n                               <div class=\"description-heading\">Description</div>\r\n                              <p> {{row.description}} </p>\r\n                              \r\n                            </div>\r\n                          </div>\r\n                        <div class=\"card card-nav-tabs detail-box responsiveCard  \">\r\n                          <div>\r\n                            <div class=\"card-header card-header-info float-right text-right\" style=\"width:150px;\">\r\n                              Product Details\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-body\" style=\"padding:15px;\">\r\n                            <div class=\"row\">\r\n                              <div *ngIf=\"row.registeredProductPicUrl\" class=\"col-md-4 col-lg-4 col-sm-4 \">\r\n                                <img class=\"product-image\" [src]=\"row.registeredProductPicUrl\" />\r\n                              </div>\r\n                              <div class=\"col-md- 6 col-lg-6  col-sm-6\">\r\n                                <!-- <div>product details</div> -->\r\n                                <div *ngIf=\"row.productModelNumber\">\r\n                                  <b>{{ row.productModelNumber }}</b>\r\n                                </div>\r\n                                <div *ngIf=\"row.productModelNumber\">\r\n                                  <b>{{ row.productName }}</b>\r\n                                </div>\r\n      \r\n                                <div *ngIf=\"row.productCategoryName\">\r\n                                  <b>Category:</b> {{ row.productCategoryName }}\r\n                                </div>\r\n                               \r\n                                <div *ngIf=\"row.productWarrantyEnd\">\r\n      \r\n                                 <b> Warranty : </b> {{ row.productWarrantyEnd | date: 'dd MMM, yyyy'}}\r\n      \r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-md-2 col-lg-2 col-sm-2\">\r\n                                <span class=\"badge badge-pill\" [style.background]=\"row.statusColor\">{{row.priority}}</span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n      \r\n      \r\n                        <!-- <customer detail> -->\r\n                        <div class=\"card card-nav-tabs detail-box responsiveCard\" >\r\n                          <div>\r\n                            <div class=\"card-header card-header-info float-right text-right\" style=\"width:150px;\">\r\n                              Customer Details\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-body\" style=\"padding:15px;\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-4 col-lg-4 col-sm-4 \">\r\n                                <img class=\"product-image\" *ngIf=\"row.customerPicUrl\" [src]=\"row.customerPicUrl\" />\r\n                                <img *ngIf=\"!row.customerPicUrl \" class=\"product-image\" src=\"/assets/img/user.png\">\r\n      \r\n                              </div>\r\n                              <div class=\"col-md- 6 col-lg-6  col-sm-6\">\r\n                                <!-- <div>product details</div> -->\r\n                                <div *ngIf=\" row.customerName \">\r\n                                  <i class=\"fa fa-user details-icon\" aria-hidden=\"true\"></i><b>{{ row.customerName }}</b>\r\n                                </div>\r\n                                <div *ngIf=\"row.customerPhone\">\r\n                                  <i class=\"fa fa-phone details-icon\" aria-hidden=\"true\"></i> {{ row.customerPhone }}\r\n                                </div>\r\n      \r\n                                <div *ngIf=\" row.customerEmail \">\r\n                                  <i class=\"fa fa-envelope details-icon\" aria-hidden=\"true\"></i> {{ row.customerEmail }}\r\n                                </div>\r\n                                <div *ngIf=\"row.customerAddress\" class=\"font-size\">\r\n                                  <b>Address:</b> {{ row.customerAddress }} {{ row.customerCity }}, {{ row.customerState }} {{\r\n                                  row.customerPostalCode }} {{ row.customerCountry }}\r\n                                </div>\r\n      \r\n                              </div>\r\n      \r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n      \r\n      \r\n                        <!-- <dealer and assign engineer> -->\r\n                        <div class=\"card card-nav-tabs detail-box responsiveCard\" *ngIf=\"row.dealerName || row.dealerAddress || row.dealerContact || row.dealerEmail\"\r\n                          >\r\n                          <div>\r\n                            <div class=\"card-header card-header-info float-right text-right\" style=\"width:150px;\">\r\n                              Dealer Details\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-body\" style=\"padding:15px;\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-4 col-lg-4 col-sm-4 \">\r\n      \r\n                                <img class=\"product-image\" src=\"/assets/img/user.png\">\r\n      \r\n                              </div>\r\n                              <div class=\"col-md- 6 col-lg-6  col-sm-6\">\r\n                                <!-- <div>product details</div> -->\r\n                                <div *ngIf=\" row.dealerName \">\r\n                                  <i class=\"fa fa-user details-icon\" aria-hidden=\"true\"></i> <b>{{ row.dealerName }}</b>\r\n                                </div>\r\n                                <div *ngIf=\"row.dealerContact\">\r\n                                  <i class=\"fa fa-phone details-icon\" aria-hidden=\"true\"></i> {{ row.dealerContact }}\r\n                                </div>\r\n      \r\n                                <div *ngIf=\"row.dealerEmail \">\r\n                                  <i class=\"fa fa-envelope details-icon\" aria-hidden=\"true\"></i>{{ row.customerEmail}}\r\n                                </div>\r\n                                <div *ngIf=\"row.dealerAddress\">\r\n                                  <b>Address:</b> {{ row.dealerAddress }}\r\n                                </div>\r\n      \r\n                              </div>\r\n      \r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n      \r\n                        <!-- <new>    -->\r\n      \r\n                        <div class=\"card card-nav-tabs detail-box responsiveCard\"\r\n                          >\r\n                          <div>\r\n                            <div class=\"card-header card-header-info float-right text-right\" style=\"width:150px;\">\r\n                              Important Dates\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-body\">\r\n                            <div class=\"row gridrow\">\r\n                              <div class=\"col-md-4 col-lg-4 col-sm-4 border-right\">\r\n                                <b> Purchased</b>\r\n                                <br>{{row.productPurchaseDate | date: 'dd MMM, yyyy'}}\r\n                              </div>\r\n                              <div class=\"col-md-4 col-lg-4 col-sm-4 border-right\">\r\n                                <b>Registered</b>\r\n                                <br> {{row.createdAt | date: 'dd MMM, yyyy'}}\r\n                              </div>\r\n                              <div class=\"col-md-4 col-lg-4 col-sm-4\">\r\n                                <b>Installad</b>\r\n                                <br>\r\n                                <span *ngIf=\"row.productInstallationDateTime \"> {{row.productInstallationDateTime | date: 'dd MMM,\r\n                                  yyyy'}}</span>\r\n                                <span *ngIf=\"!row.productInstallationDateTime \"> Not Installed</span>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row warantyRow\">\r\n                              <div class=\"col-md-6 col-lg-6 col-sm-6 col-xs-6 border-right\">\r\n                                <b>Waranty Start</b>\r\n                                <br> {{row.productWarrantyStart | date: 'dd MMM, yyyy'}}\r\n                              </div>\r\n                              <div class=\"col-md-6 col-lg-6 col-sm-6 col-xs-6\">\r\n                                <b>Waranty End</b>\r\n                                <br> {{row.productWarrantyEnd | date: 'dd MMM, yyyy'}}\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n      \r\n                        <!-- <assigned engineer-->\r\n                        <div class=\"card card-nav-tabs detail-box responsiveCard\" *ngIf=\"!(row.statusName=='New'|| !row.assignedServiceEngineerName)\" >\r\n                            \r\n                          <div> \r\n                            <div class=\"card-header card-header-info float-right text-right\" style=\"width:150px;\">\r\n                              Assigned Engineer\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-body\" style=\"padding:15px;\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-4 col-lg-4 col-sm-4 \">\r\n                                <img class=\"product-image\" *ngIf=\"row.assignedServiceEngineerPicUrl\" [src]=\"row.assignedServiceEngineerPicUrl\" />\r\n                                <img *ngIf=\"!row.assignedServiceEngineerPicUrl \" class=\"product-image\" src=\"/assets/img/user.png\">\r\n      \r\n                              </div>\r\n                              <div class=\"col-md- 6 col-lg-6  col-sm-6\">\r\n                                <!-- <div>product details</div> -->\r\n                                \r\n                                <div *ngIf=\" row.assignedServiceEngineerName  \">\r\n                                  <i class=\"fa fa-user details-icon\" aria-hidden=\"true\"></i>  <b>{{row.assignedServiceEngineerName}}</b>\r\n                                </div>\r\n                                <!-- <button class=\"btn btn-social btn-link btn-linkedin btn-primary\"  data-target=\"#assignModal\" data-toggle=\"modal\" (click)=\"getAssingedId(row.id ,'AssignEngName')\" \r\n                            >\r\n                                    <span><i class=\"material-icons\">\r\n                                        sync\r\n                                        </i></span> \r\n                                       \r\n                                   </button> -->\r\n                               \r\n                                <div *ngIf=\"row.customerPhone\">\r\n                                  <i class=\"fa fa-phone details-icon\" aria-hidden=\"true\"></i>{{ row.assignedServiceEngineerContactNo }}\r\n                                </div>\r\n      \r\n                                <div *ngIf=\"row.assignedServiceEngineerEmail \">\r\n                                  <i class=\"fa fa-envelope details-icon\" aria-hidden=\"true\"></i>{{ row.assignedServiceEngineerEmail }}\r\n                                </div>\r\n\r\n                                \r\n                              <button class=\"btn btn-primary btn-sm changeEng\" data-target=\"#assignModal\" data-toggle=\"modal\" (click)=\"getAssingedId(row.id ,row.assignedServiceEngineerName)\"  >Change Engineer</button>\r\n                              </div>\r\n      \r\n                            </div>\r\n                          </div>\r\n      \r\n                        </div>\r\n      \r\n      \r\n                        <!-- <scheduled case> -->\r\n                        <div class=\"card card-nav-tabs detail-box responsiveCard\" *ngIf=\"!(row.statusName == 'New' || row.statusName == 'Assigned' )\">\r\n                          <div>\r\n                            <div class=\"card-header card-header-info float-right text-right\" style=\"width:150px;\">\r\n                              Scheduled Details\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-body\" style=\"padding:15px;\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-4 col-lg-4 col-sm-4 \">\r\n      \r\n                                <i class=\"material-icons icon\">\r\n                                  access_alarm\r\n                                </i>\r\n      \r\n                              </div>\r\n                              <div class=\"col-md- 6 col-lg-6  col-sm-6\">\r\n      \r\n                                <div *ngIf=\"row.lastScheduleDate\">\r\n                                  <b>Date:</b> {{ row.lastScheduleDate | date: 'dd MMM, yyyy' }}\r\n                                </div>\r\n                                <div *ngIf=\"row.lastScheduleDate\">\r\n                                  <b>Time:</b> {{ row.lastScheduleDate | date: 'hh : mm a' }}\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n      \r\n                        <!-- <fixed details case-->\r\n                        <div class=\"card card-nav-tabs detail-box responsiveCard text-right \" *ngIf=\"row.statusName==='Installed'\" >\r\n                          <div *ngIf=\"row.installationPicUrl\">\r\n                            <div class=\"card-header card-header-info detail-box\" style=\"width:150px;\">\r\n                                    Installed Details\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-body\" *ngIf=\"row.installationPicUrl\" style=\"padding:15px;\">\r\n                            <div class=\"row\">\r\n                              <div *ngIf=\"row.signatureUrl\" class=\"col-md-4 col-lg-4 col-sm-4 \">\r\n      \r\n                                <img class=\"product-image\" [src]=\"row.installationPicUrl\" />\r\n      \r\n                              </div>\r\n                              <div class=\"col-md- 6 col-lg-6  col-sm-6\">\r\n      \r\n                                <!-- <div *ngIf=\"row.name\">\r\n                                  <b>{{comment.name}}</b>\r\n                                </div> -->\r\n                                <div *ngIf=\"row.productInstallationDateTime\">\r\n                                  <b>Date:</b>{{row.productInstallationDateTime| date: 'dd MMM ,yyyy'}}\r\n                                </div>\r\n                                <div *ngIf=\"row.productInstallationDateTime\">\r\n                                  <b>Time:</b>{{row.productInstallationDateTime | date: 'hh : mm a'}}\r\n                                </div>\r\n      \r\n      \r\n                                <div *ngIf=\"row.rating\">\r\n                                  Rating: <b>{{row.rating}}</b>\r\n                                </div>\r\n                                <div *ngIf=\"row.rca\">\r\n                                  Rca: <b>{{row.rca}}</b>\r\n                                </div>\r\n      \r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n      \r\n                        </div>\r\n      \r\n                        <!-- not fin=xed info -->\r\n                        <div *ngIf=\"row.statusName===' OnHold' \" class=\"col-sm-12 col-md-6 col-lg-4 incident-detail-box\">\r\n                          <div class=\"row\">\r\n                            <div class=\"collg-12 col-sm-12\">\r\n                              <h4>\r\n                                <b> OnHold Info</b>\r\n                              </h4>\r\n                            </div>\r\n      \r\n                            <div class=\"col-sm-9 col-md-9 col-lg-9\">\r\n                              <div *ngIf=\"row.lastModifiedAt\">\r\n      \r\n                                <b>Date:</b>>{{row.lastModifiedAt | date: 'dd MMM ,yyyy'}}\r\n                              </div>\r\n                              <div *ngIf=\"row.lastModifiedAt\">\r\n                                <b>Time:</b>\r\n                                {{row.lastModifiedAt | date: 'hh : mm a'}}\r\n                              </div>\r\n      \r\n                            </div>\r\n                            <div class=\"col-sm-3 col-md-3 col-lg-3\">\r\n                              <img class=\"product-image\" src=\"http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-warning-icon.png\" />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"row.rating\" class=\"col-sm-12 col-md-6 col-lg-4 incident-detail-box\">\r\n                          <div class=\"row\">\r\n                            <div class=\"collg-12 col-sm-12\">\r\n                              <h4>\r\n                                <b>Feedback</b>\r\n                              </h4>\r\n                            </div>\r\n      \r\n                            <div class=\"col-sm-9 col-md-9 col-lg-9\">\r\n                              <div>\r\n                                <b>Date:</b>\r\n      \r\n                              </div>\r\n                              <div>\r\n                                <b>Time:</b>\r\n      \r\n                              </div>\r\n                              <div class=\"d-flex\">\r\n                                <i class=\"material-icons\" style=\"color:orange;width: 25px;\"> star_rate </i>\r\n                                <i class=\"material-icons\" style=\"color:orange;width: 25px;\"> star_rate </i>\r\n                                <i class=\"material-icons\" style=\"color:orange;width: 25px;\"> star_rate </i>\r\n                                <i class=\"material-icons\" style=\"color:orange;width: 25px;\"> star_rate </i>\r\n                                <i class=\"material-icons\" style=\"color:gray;width: 25px;\"> star_rate </i>\r\n                              </div>\r\n                              <div>\r\n                                <b>Comment:</b> Skilled person and polite nature.\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3 col-md-3 col-lg-3\">\r\n                              <img class=\"product-image\" src=\"data:image/png;base64,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\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"d-flex justify-content-center\">\r\n                        <button class=\"btn btn-sm btn-outline-success\" *ngIf=\"row.statusName=='New' \" type=\"submit\" data-toggle=\"modal\" data-target=\"#assignModal\"\r\n                          (click)=\"getAssingedId(row.id)\" style=\"margin-right: 10px;\"> \r\n                          <i class=\"material-icons\"> assignment_turned_in </i> Assign</button>\r\n                        <button class=\"btn btn-sm btn-outline-primary\" type=\"submit\" data-toggle=\"modal\" \r\n                        (click)=\" getInstallationsId(row.id)\" data-target=\"#commentModal\">\r\n                        <i class=\"material-icons\">\r\n                          history\r\n                          </i> History</button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n      \r\n                </tbody>\r\n                <div class=\"col-md-8 col-lg-8\" style=\"background: gray\">\r\n      \r\n                </div>\r\n                <tfoot>\r\n                    <tr *ngIf=\"!(filterInstallation?.length > 0|| showLoader)\">\r\n                                        <td colspan=\"9\">\r\n                                          <div class=\"text-center\">\r\n                                            <img src=\"/assets/img/not-found.svg \" >\r\n                                            <h3 class=\"noContent-text\">No content found</h3>\r\n                                          </div>\r\n\r\n                                        </td>\r\n                                    </tr>\r\n                  <tr>\r\n                    <td colspan=\"9\" style=\"font-size: 70px; text-align: center;\">\r\n                      <i *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin mainColor\"></i>\r\n                    </td>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"card-footer moreButton\">\r\n      \r\n          <button type=\"button\" (click)=\"lodeMore()\" class=\"btn btn-defalte\" style=\"margin: auto;\">More</button>\r\n      \r\n        </div> -->\r\n      </div>\r\n      \r\n      \r\n      \r\n      \r\n      <div class=\"modal fade\" id=\"assignModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"assignModal\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content   card card-stats\">\r\n            <div class=\"card-header card-header-success card-header-icon\">\r\n              <div class=\"card-icon\">\r\n                  <i class=\"material-icons\">\r\n                      person_add\r\n                      </i>\r\n              </div>\r\n              <h3 class=\"card-title\">{{assignTitle}}</h3>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form #assignForm=\"ngForm\">\r\n               <div *ngIf=\"listServiceEngineer?.length > 0\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                          <textarea placeholder=\"Comment\" required [(ngModel)]=\"assingedEngineer.comment\" \r\n                          name=\"comment\" class=\"form-control\" #comment=\"ngModel\"></textarea>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n          \r\n                      <div class=\"col-md-12\">\r\n          \r\n                        <div class=\"form-group\" >\r\n                          <label>Select Service Engineer\r\n                          </label>\r\n                          <select class=\"form-control\" required [(ngModel)]=\"assingedEngineer.serviceEngineerId\" \r\n                          name=\"serviceEng\" #serviceEng=\"ngModel\">\r\n                            <option *ngFor=\"let engineer of listServiceEngineer\" \r\n                            [value]=\"engineer.id\">{{engineer.name}}</option>\r\n                          </select>\r\n                          <h5 [hidden]=\"serviceEng.valid || serviceEng.untouched\" style=\"color: red\">\r\n                            Service Engineer is Required\r\n                          </h5>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                   \r\n               </div> \r\n                <div *ngIf=\"!(listServiceEngineer?.length > 0)\">\r\n                    No service Engineer avalable for this Incidents\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n      \r\n                    <button type=\"button\"  class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                    <button *ngIf=\"!assignButtonHide && (listServiceEngineer?.length > 0)\" type=\"button\" (click)=\"assignFormData(assignForm.value)\" [disabled]=\"!assignForm.valid\" class=\"btn btn-success\" >Assign</button>\r\n                    <button *ngIf=\"assignButtonHide\" type=\"button\" class=\"btn btn-default\"> <i class=\"fa fa-spinner fa-spin\"></i>submitting</button>\r\n               </div>\r\n              </form>\r\n      \r\n            </div>\r\n      \r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <!-- Chat Modal -->\r\n      <div class=\"modal fade\" id=\"commentModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"commentModal\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content card card-stats\">\r\n            <div class=\"card-header card-header-primary card-header-icon\">\r\n              <div class=\"card-icon\">\r\n                <i class=\"material-icons\">\r\n                  history\r\n                  </i>\r\n              </div>\r\n              <h3 class=\"card-title\">History</h3>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div *ngIf=\"!loadingHistory\" class=\"text-center\">\r\n                <!-- loader -->\r\n                <i  class=\"fa fa-spinner fa-spin  mainColor\" style=\"font-size:60px; \"></i>\r\n              </div>\r\n              <div *ngIf=\"loadingHistory\">\r\n                <div *ngIf=\"installationsHistory.length==0\">\r\n                  <div class=\"text-center\">\r\n                    <img src=\"/assets/img/not-found.svg\">\r\n                    <p class=\"noContent-text\">No Records Found</p>\r\n                  </div>\r\n                  </div>\r\n             \r\n                <div class=\"timeline\" *ngFor=\"let comment of installationsHistory let i=index \">\r\n                  <div class=\"history\" *ngIf=\"installationsHistory.length!==0\">\r\n                    <div class=\"badge badge-pill status-badge \" [style.background]=\"comment.statusColor\">{{comment.statusName}}</div>\r\n                    \r\n               <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"comment-name col-md-4 col-lg-4 col-sm-4 col-xs-4\">\r\n                    <b class=\"text-captalize\">{{comment.name }}</b><br>\r\n                    <b style=\"color: gray;\">{{comment.comment}}</b>\r\n                  </div>\r\n                  <div class=\"comment col-md- 8 col-lg-8 col-sm-8 col-xs-8\" [style.border-left-color]=\"comment.statusColor\" >\r\n                    <div  *ngIf=\"comment.scheduleDate\" class=\"date\">\r\n                      {{comment.scheduleDate | date: 'dd MMM, yyyy  hh : mm a'}}\r\n                    </div>\r\n                  <div>\r\n                    {{comment.autoComment}}\r\n                  </div>\r\n                \r\n                  <div class=\"date\">\r\n                      {{comment.createdAt | date: 'dd MMM, yyyy  hh : mm a'}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n                  </div>\r\n                  <!-- <div class=\"emptyData\" *ngIf=\"!history || !history.length\">\r\n                      <img src=\"/assets/imgs/notfound.png\">\r\n                     <h2 color=\"gray\">No Records Found</h2>\r\n                    </div> -->\r\n                </div>\r\n      \r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- End of chat modal -->\r\n      \r\n      "

/***/ }),

/***/ "./src/app/Modules/installation/installation.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/Modules/installation/installation.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-results {\n  height: auto;\n  overflow: scroll; }\n\n.action-buttons i {\n  position: relative;\n  z-index: 2; }\n\n.action-buttons i:before {\n    position: absolute;\n    content: '';\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    width: 0px;\n    height: 0px;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    border-radius: 50%;\n    background: rgba(0, 0, 0, 0.1);\n    transition: 0.1s; }\n\n.action-buttons i:hover {\n    color: #de2768;\n    cursor: pointer; }\n\n.action-buttons i:hover:before {\n      width: 35px;\n      height: 35px;\n      z-index: 1; }\n\n.new {\n  background: #f1c40f; }\n\n.not-fixed {\n  background: #f44336; }\n\n.fixed {\n  background: #4caf50; }\n\n.scheduled {\n  background: #03a9f4; }\n\n.assigned {\n  background: #3f51b5; }\n\n.rotate {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  transition: 0.5s ease-in-out; }\n\n.re-open {\n  background: #9c27b0; }\n\ntr:hover {\n  cursor: pointer; }\n\ntr:hover .collapse-icon {\n    color: #de2768; }\n\n.incident-details .product-image {\n  width: inherit; }\n\n.incident-details .btn {\n  background: white; }\n\n.assign-form .material-icons {\n  color: #4caf50; }\n\n.tabel-detail {\n  background: #f2f2f2; }\n\n.margin-right {\n  margin-right: 25px; }\n\n.product-image {\n  width: 110px !important; }\n\n.border-bottom {\n  border-bottom: 1px solid #f2f2f2; }\n\n.font-size {\n  font-size: 14px; }\n\n.margin-top {\n  margin-top: 10px !important; }\n\n.detail-box {\n  margin-left: 28px;\n  margin-right: 18px; }\n\n.gridrow {\n  padding-bottom: 13px;\n  text-align: center;\n  position: relative; }\n\n.gridrow:before {\n    position: absolute;\n    content: '';\n    width: 50%;\n    border-bottom: 1px solid #f2f2f2;\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translatex(-50%);\n            transform: translatex(-50%); }\n\n.warantyRow {\n  text-align: center; }\n\n.border-right {\n  position: relative; }\n\n.border-right:before {\n    position: absolute;\n    content: '';\n    height: 50px;\n    border-right: 1px solid #f2f2f2;\n    right: 0;\n    top: 50%;\n    -webkit-transform: translatey(-50%);\n            transform: translatey(-50%); }\n\n.assignDates {\n  width: 45%;\n  margin: auto;\n  margin-top: 20px !important;\n  padding: 10px; }\n\n.icon {\n  font-size: 7em;\n  color: #03a9f4; }\n\n.timeline {\n  padding: 5px;\n  margin-bottom: 3px; }\n\n.timeline .history {\n    margin-top: -16px; }\n\n.timeline .history .status {\n      padding: 1px 5px;\n      border-radius: 25px;\n      background: yellow;\n      display: -webkit-inline-box; }\n\n.timeline .history .status-badge {\n      margin-left: 110px; }\n\n.timeline .history .comment-name {\n      text-align: right;\n      padding-right: 24px;\n      padding-top: 20px;\n      padding-bottom: 11px; }\n\n.timeline .history .comment {\n      border-left: 2px solid #03a9f4;\n      padding: 20px 0 20px 5px;\n      margin-left: -16px;\n      position: relative; }\n\n.timeline .history .comment p {\n        margin: 0px; }\n\n.timeline .history .comment .date {\n        color: slategray;\n        font-weight: 500;\n        font-size: 12px; }\n\n.timeline:last-child:after {\n    position: absolute;\n    content: '';\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    background: #03a9f4;\n    left: 154px; }\n\n.text-center {\n  text-align: center; }\n\n.text-center img {\n    width: 250px; }\n\n.changeEng {\n  background: #962daf !important; }\n"

/***/ }),

/***/ "./src/app/Modules/installation/installation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Modules/installation/installation.component.ts ***!
  \****************************************************************/
/*! exports provided: InstallationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationComponent", function() { return InstallationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interface_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interface/user */ "./src/app/interface/user.ts");
/* harmony import */ var _installation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./installation.service */ "./src/app/Modules/installation/installation.service.ts");
/* harmony import */ var src_app_providers_tost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/tost.service */ "./src/app/providers/tost.service.ts");
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





var InstallationComponent = /** @class */ (function () {
    function InstallationComponent(installationservice, tostservice, router, activatedRoute) {
        this.installationservice = installationservice;
        this.tostservice = tostservice;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.assignButtonHide = false;
        this.filterBy = {};
        this.filterbysort = {};
        this.loadingHistory = false;
        this.showLoader = false;
        this.filterInstallation = [];
        this.currentPage = 1;
        this.allHeading = [
            {
                name: 'All',
                color: "#FFD600",
                id: 0,
            },
        ];
        this.headerRow = ["Installation No. ", "Date", "Product Name", "Product Category", "Priority", "Comment", "Status",];
        // statusHeading = ["ALL", "New", "Assigned Service Engineer", "Scheduled", "Fixed", "OnHold", "Not Fixed" ,"Rejected"];
        this.selectedHeadingId = 0;
        this.isDown = false;
        this.rejectInstallation = new _interface_user__WEBPACK_IMPORTED_MODULE_1__["RejectInstallation"];
        this.assingedEngineer = new _interface_user__WEBPACK_IMPORTED_MODULE_1__["AssingedEngineer"];
        this.x = false;
    }
    InstallationComponent.prototype.ngOnInit = function () {
        this.getInstallationStatus();
        this.subscribeRouteChanges();
    };
    InstallationComponent.prototype.setId = function (id, i, statusId) {
        this.currentIndex = i;
        this.currentId = id;
        this.currentStatusId = statusId;
    };
    InstallationComponent.prototype.subscribeRouteChanges = function () {
        var _this = this;
        this.activatedRoute.queryParams
            .subscribe(function (e) {
            if (e.sId) {
                _this.statusId = Number(e.sId) || Number(0);
                _this.ProductCategoryId = Number(e.pcId) || Number(0);
                _this.stateId = e.stId || 0;
                _this.getInstallations(_this.statusId);
            }
            else {
                _this.router.navigate(['/installation'], { queryParams: { sId: 0, pcId: 0, stId: 0 } });
            }
        });
    };
    InstallationComponent.prototype.onHeadingClick = function (statusId) {
        this.router.navigate(['/installation'], { queryParams: { sId: statusId, pcId: 0, stId: 0 } });
        this.sortActive = "";
    };
    InstallationComponent.prototype.getInstallations = function (sId) {
        this.selectedHeadingId = sId;
        this.currentPage = 1;
        if (this.statusId == 0 && this.ProductCategoryId == 0 && this.stateId == 0 || "") {
            this.getAllInstallations();
        }
        else {
            this.getFilterInstallations(sId);
        }
    };
    InstallationComponent.prototype.getInstallationStatus = function () {
        var _this = this;
        this.installationservice.getInstallationStatus()
            .subscribe(function (res) {
            res.unshift(_this.allHeading[0]);
            _this.statusHeading = res;
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    InstallationComponent.prototype.getAllInstallations = function () {
        var _this = this;
        this.showLoader = true;
        this.installationservice.getAllInstallation(this.currentPage)
            .subscribe(function (res) {
            // this.Installations = res;
            _this.filterInstallation = res;
            _this.showLoader = false;
        }, function (err) {
            _this.showLoader = false;
            _this.tostservice.showNotificationFailure(err);
        });
    };
    //get filter Installations
    InstallationComponent.prototype.getFilterInstallations = function (sId) {
        var _this = this;
        this.filterInstallation = [];
        this.showLoader = true;
        this.currentPage = 1;
        if (this.ProductCategoryId != 0 || this.statusId != 0 || this.stateId != 0) {
            if (this.statusId || sId) {
                this.filterBy['statusId'] = this.statusId || sId;
            }
            if (this.ProductCategoryId) {
                this.filterBy["categoryId"] = this.ProductCategoryId;
            }
            if (this.stateId != "0" && this.stateId != "") {
                this.filterBy['location'] = this.stateId;
            }
        }
        else {
            this.getAllInstallations();
        }
        this.installationservice.getFillterInstallation(this.filterBy, this.currentPage)
            .subscribe(function (res) {
            _this.filterInstallation = res;
            _this.showLoader = false;
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
            _this.showLoader = false;
        });
    };
    InstallationComponent.prototype.onScroll = function () {
        console.log('scrolled!! ' + this.x);
        if (!this.x) {
            this.x = true;
            this.lodeMore();
        }
        else {
            return;
        }
    };
    InstallationComponent.prototype.lodeMore = function () {
        var _this = this;
        if (this.selectedHeadingId === 0) {
            this.showLoader = true;
            this.installationservice.getAllInstallation(this.currentPage + 1)
                .subscribe(function (res) {
                _this.x = false;
                if (res.length) {
                    _this.filterInstallation = _this.filterInstallation.concat(res);
                    _this.currentPage++;
                }
                _this.showLoader = false;
            }, function (err) {
                _this.x = true;
                _this.showLoader = false;
                _this.tostservice.showNotificationFailure(err);
            });
        }
        else {
            this.showLoader = true;
            this.installationservice.getFillterInstallation(this.selectedHeadingId, this.currentPage + 1)
                .subscribe(function (res) {
                _this.x = false;
                if (res.length) {
                    _this.filterInstallation = _this.filterInstallation.concat(res);
                    _this.currentPage++;
                }
                _this.showLoader = false;
            }, function (err) {
                _this.x = true;
                _this.showLoader = false;
                _this.tostservice.showNotificationFailure(err);
            });
        }
    };
    InstallationComponent.prototype.sortBy = function (val) {
        var _this = this;
        this.currentRouteParams();
        this.sortActive = val;
        this.showLoader = true;
        if (this.statusId == 0 && this.ProductCategoryId == 0 && this.stateId == 0 || "") {
            this.filterInstallation = [];
            this.installationservice.getSorting(val)
                .subscribe(function (res) {
                _this.filterInstallation = res;
                _this.showLoader = false;
            }, function (err) {
                _this.tostservice.showNotificationFailure(err);
                _this.showLoader = true;
            });
        }
        else {
            this.filterInstallation = [];
            this.showLoader = true;
            this.installationservice.getFilterSorting(val, this.filterbysort)
                .subscribe(function (res) {
                _this.filterInstallation = res;
                _this.showLoader = false;
            }, function (err) {
                _this.tostservice.showNotificationFailure(err);
                _this.showLoader = false;
            });
        }
    };
    InstallationComponent.prototype.currentRouteParams = function () {
        var query = this.activatedRoute.snapshot.queryParams;
        for (var key in query) {
            if (key == "sId" && query[key] != "0") {
                this.filterbysort['statusId'] = query[key];
            }
            if (key == "pcId" && query[key] != "0") {
                this.filterbysort['categoryId'] = query[key];
            }
            if (key == "stId" && query[key] != "0" || "") {
                this.filterbysort['location'] = query[key];
            }
            console.log(query[key]);
            console.log(this.filterbysort);
        }
    };
    InstallationComponent.prototype.clearSortBy = function (i) {
        console.log(i);
        this.getFilterInstallations(i);
        this.sortActive = "";
    };
    InstallationComponent.prototype.getAssingedId = function (id, AssignEngName) {
        var _this = this;
        if (AssignEngName) {
            this.assignTitle = "Change";
        }
        else {
            this.assignTitle = "Assign";
        }
        this.installationservice.getServiceEngAgainstInstallationId(id)
            .subscribe(function (res) {
            console.log(res);
            _this.listServiceEngineer = res.filter(function (element) { return element.name != AssignEngName; });
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    InstallationComponent.prototype.getInstallationsId = function (id) {
        var _this = this;
        this.loadingHistory = false;
        this.installationservice.getInstallationsHistory(id)
            .subscribe(function (res) {
            _this.loadingHistory = true;
            _this.installationsHistory = res;
            console.log(res);
        }, function (err) {
            _this.loadingHistory = true;
            _this.tostservice.showNotificationFailure(err);
        });
    };
    InstallationComponent.prototype.getRejectId = function (id) {
        this.resetform();
        this.RejectId = id;
    };
    InstallationComponent.prototype.onSelectFile = function (event) {
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
    InstallationComponent.prototype.onSubmit = function () {
        var _this = this;
        var fd = new FormData();
        fd.append("comment", this.rejectInstallation.comment);
        fd.append("pic", this.imgfile);
        fd.append("updateInfo ", "reject");
        this.installationservice.rejectInstallation(fd, this.currentId)
            .subscribe(function (res) {
            _this.resetform();
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    InstallationComponent.prototype.resetform = function () {
        this.comment = "";
        this.imgfile = null;
        this.urlTOShowImg = "";
        this.rejectInstallation = new _interface_user__WEBPACK_IMPORTED_MODULE_1__["RejectInstallation"]();
        this.assingedEngineer = new _interface_user__WEBPACK_IMPORTED_MODULE_1__["AssingedEngineer"]();
    };
    //assign engineer 
    InstallationComponent.prototype.assignFormData = function () {
        var _this = this;
        this.assignButtonHide = true;
        var fd = new FormData();
        for (var key in this.assingedEngineer)
            fd.append(key, this.assingedEngineer[key]);
        this.installationservice.assignEngineer(fd, this.currentId)
            .subscribe(function (res) {
            _this.assignButtonHide = false;
            if (_this.filterInstallation[_this.currentIndex].statusName != 'New') {
                _this.filterInstallation[_this.currentIndex] = res;
                console.log("if condition");
            }
            else {
                _this.getFilterInstallations(_this.currentStatusId);
            }
            _this.closeAssignModal();
            _this.showNotification("Engineer Change successfuly");
            _this.resetform();
        }, function (err) {
            _this.assignButtonHide = false;
            _this.tostservice.showNotificationFailure(err);
        });
    };
    InstallationComponent.prototype.closeAssignModal = function () {
        $('#assignModal').modal('hide');
    };
    InstallationComponent.prototype.showNotification = function (msg) {
        $.notify({
            icon: "add_alert",
            message: msg || "Installation Assign successfuly"
        }, {
            type: 'success',
            timer: 1000,
            placement: {
                from: "top",
                align: "right"
            }
        });
    };
    InstallationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-installation',
            template: __webpack_require__(/*! ./installation.component.html */ "./src/app/Modules/installation/installation.component.html"),
            styles: [__webpack_require__(/*! ./installation.component.scss */ "./src/app/Modules/installation/installation.component.scss")]
        }),
        __metadata("design:paramtypes", [_installation_service__WEBPACK_IMPORTED_MODULE_2__["InstallationService"],
            src_app_providers_tost_service__WEBPACK_IMPORTED_MODULE_3__["TostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], InstallationComponent);
    return InstallationComponent;
}());



/***/ }),

/***/ "./src/app/Modules/installation/installation.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/Modules/installation/installation.module.ts ***!
  \*************************************************************/
/*! exports provided: InstallationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationModule", function() { return InstallationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _installation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./installation.component */ "./src/app/Modules/installation/installation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _providers_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/pipe.module */ "./src/app/providers/pipe.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var InstallationModule = /** @class */ (function () {
    function InstallationModule() {
    }
    InstallationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _providers_pipe_module__WEBPACK_IMPORTED_MODULE_6__["PipeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', component: _installation_component__WEBPACK_IMPORTED_MODULE_2__["InstallationComponent"] },
                ])
            ],
            declarations: [
                _installation_component__WEBPACK_IMPORTED_MODULE_2__["InstallationComponent"],
            ]
        })
    ], InstallationModule);
    return InstallationModule;
}());



/***/ }),

/***/ "./src/app/Modules/installation/installation.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/Modules/installation/installation.service.ts ***!
  \**************************************************************/
/*! exports provided: InstallationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationService", function() { return InstallationService; });
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


var InstallationService = /** @class */ (function () {
    function InstallationService(customHttp) {
        this.customHttp = customHttp;
    }
    //get installe details
    InstallationService.prototype.getInstallation = function (i) {
        // let header = this.getAccessToken();
        var Installation_api = "/m/installation/page/" + i;
        return this.customHttp.get(Installation_api);
    };
    // // get installations history
    // getInstallationHistory(i){
    // //   // let header = this.getAccessToken();
    // //   const InstallationHistory_api = `/m/installation/${i}/history`
    // //   return this.customHttp.get(InstallationHistory_api)
    // // }
    // // getServiceEngAgainstinstallationId(i){
    // //   // let header = this.getAccessToken();
    // //   const Installation_api = `/m/installation/${i}/service-engineer`
    // //   return this.customHttp.get(Installation_api)
    // // }
    // // assingEngineer(fd,id){
    // //   // let header = this.getAccessToken();
    // //   const Installation_api = `/m/installation/${id}`
    // //   return this.customHttp.put(Installation_api, fd)
    // // }
    //get installations details
    InstallationService.prototype.getAllInstallation = function (i) {
        // let header = this.getAccessToken();
        var complaint_api = "/m/installation/page/" + i;
        return this.customHttp.get(complaint_api);
    };
    InstallationService.prototype.getFillterInstallation = function (fd, pageNo) {
        var filter_api = "/m/installation/filter/page/" + pageNo;
        return this.customHttp.post(filter_api, fd);
    };
    // get installations history
    InstallationService.prototype.getInstallationsHistory = function (i) {
        // let header = this.getAccessToken();
        var complaintHistory_api = "/m/installation/" + i + "/history";
        return this.customHttp.get(complaintHistory_api);
    };
    //reject installations put request
    InstallationService.prototype.rejectInstallation = function (fd, complaintId) {
        var rejectComplaint_api = "/m/installation/" + complaintId;
        return this.customHttp.put(rejectComplaint_api, fd);
    };
    InstallationService.prototype.getServiceEngAgainstInstallationId = function (i) {
        // let header = this.getAccessToken();
        var Installation_api = "/m/installation/" + i + "/service-engineer";
        return this.customHttp.get(Installation_api);
    };
    //assign Engineer for installation
    InstallationService.prototype.assignEngineer = function (fd, id) {
        // let header = this.getAccessToken();
        var Installation_api = "/m/installation/" + id;
        return this.customHttp.put(Installation_api, fd);
    };
    InstallationService.prototype.getChartData = function () {
        // const I_api = `/m/status/installation`
        var I_api = "/m/installation/graph/status";
        // const I_api = `/m/installation/graph/product`
        // const I_api = ` /m/installation/graph/category`
        // const I_api = `/m/installation/graph/product-status`
        // const I_api = `/m/installation/graph/category-status`
        return this.customHttp.get(I_api);
    };
    // status heading from backend
    InstallationService.prototype.getInstallationStatus = function () {
        var status = "/m/status/installation";
        return this.customHttp.get(status);
    };
    InstallationService.prototype.getSorting = function (sort) {
        var sort_api = "/m/installation/sort/" + sort + "/true";
        return this.customHttp.get(sort_api);
    };
    // sorting by status, priority, category filter by status id
    InstallationService.prototype.getFilterSorting = function (sort, filter) {
        var filterSort_api = "/m/installation/filter-sort/" + sort + "/true";
        return this.customHttp.post(filterSort_api, filter);
    };
    InstallationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_providers_custom_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomHttpService"]])
    ], InstallationService);
    return InstallationService;
}());



/***/ })

}]);
//# sourceMappingURL=Modules-installation-installation-module.js.map