(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-incidents-incidents-module"],{

/***/ "./src/app/Modules/incidents/incidents.component.html":
/*!************************************************************!*\
  !*** ./src/app/Modules/incidents/incidents.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"heading\">Incidents</h4>\r\n<div class=\"card\">\r\n\r\n  <div *ngIf=\"!showGraphHeader\" class=\"card-header card-header-primary\">\r\n    <div class=\"d-flex justify-content-between float-right\">\r\n      <div class=\"dropdown \">\r\n        <a class=\"nav-link dropdown-toggle\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"false\"\r\n          aria-expanded=\"false\">\r\n          <i class=\"material-icons hover-cursor\"> filter_list </i>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n\r\n          <div style=\"display: flex;background:lightgray; margin-top: -5px;\" class=\"fitlerDiv\">\r\n            <button class=\"btn btn-light btn-sm filterBtn\" [class.active]=\"isAsc\" (click)=\"isAscn(true); filterClick(); \"><i\r\n                class=\"material-icons\">\r\n                arrow_upward\r\n              </i>\r\n            </button>\r\n            <button class=\"btn btn-light btn-sm filterBtn\" [class.active]=\"!isAsc\" (click)=\"isAscn(false) ; filterClick()\"><i\r\n                class=\"material-icons\">\r\n                arrow_downward\r\n              </i>\r\n            </button>\r\n          </div>\r\n\r\n          <a *ngIf=\"selectedHeadingId==0\" class=\"dropdown-item hoverColor\" [class.active]=\"sortActive=='status' \"\r\n            (click)=\"sortBy('status')\">Status</a>\r\n          <a class=\"dropdown-item hoverColor\" [class.active]=\"sortActive=='createdAt' \" (click)=\"sortBy('createdAt')\">Date</a>\r\n          <a class=\"dropdown-item hoverColor\" [class.active]=\"sortActive=='priority' \" (click)=\"sortBy('priority')\">Priority</a>\r\n          <a class=\"dropdown-item hoverColor\" [class.active]=\"sortActive=='category' \" (click)=\"sortBy('category')\">Category</a>\r\n          <a class=\"dropdown-item hoverColor\" (click)=\"clearSortBy(selectedHeadingId)\">Clear Sorting</a>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <ul class=\"nav nav-tabs\">\r\n      <li class=\"nav-item hover-cursor\" *ngFor=\"let status of statusHeading \">\r\n        <a class=\"nav-link active dropdown-item\" [class.active]=\"status.id==selectedHeadingId\" (click)=\"onHeadingClick(status.id)\">{{status.name}}</a>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n  <div *ngIf=\"showGraphHeader\" class=\"card-header card-header-primary\">\r\n    <div class=\"d-flex justify-content-between \">\r\n\r\n      <h4 class=\"card-title \">Incidents Filtered By {{graphType}}</h4>\r\n\r\n      <ul class=\"nav nav-tabs\">\r\n\r\n        <button (click)=\"goto('dashboard')\" class=\"btn  btn-primary  float-right\">\r\n          Go To Dashboard\r\n        </button>\r\n\r\n\r\n        <button (click)=\"goto('incidents')\" class=\"btn  btn-primary  float-right\">\r\n          all Incidents\r\n        </button>\r\n\r\n\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <div class=\"search-results\" infiniteScroll [infiniteScrollDistance]=\"1\" [immediateCheck]=\"true\"\r\n      [infiniteScrollThrottle]=\"0\" (scrolled)=\"onScroll()\" [scrollWindow]=\"false\" style=\"height:58vh;\">\r\n      <div class=\"table-responsive\" id=\"coll\">\r\n        <table class=\"table table-hover \">\r\n\r\n          <thead class=\" text-primary\">\r\n\r\n            <th *ngFor=\"let head of headerRow\">{{ head }}</th>\r\n\r\n\r\n          </thead>\r\n          <tbody *ngFor=\"let row of filtercomplaints let i =index\">\r\n\r\n            <tr (click)=\"setId(row, i )\" id=\"heading{{i}}\" data-toggle=\"collapse\" attr.href=\"#collapseExample{{i}}\">\r\n              <td>\r\n                <span class=\"mainColor\">{{ i+1 }}</span>\r\n\r\n                {{row.number}}</td>\r\n              <td>{{row.createdAt | date: 'dd MMM, yyyy'}}</td>\r\n              <td>{{row.productName |fixedLength}}</td>\r\n              <td>{{row.description| fixedLength }}</td>\r\n              <td>\r\n                {{row.productCategoryName | fixedLength}}\r\n              </td>\r\n              <td>{{row.againstCategoryName}}</td>\r\n              <td>{{row.priority}}</td>\r\n\r\n              <td>\r\n                <span class=\"badge badge-pill\" [style.background]=\"row.statusColor\">{{ row.statusName | fixedLength\r\n                  }}</span>\r\n\r\n\r\n              </td>\r\n\r\n\r\n\r\n            </tr>\r\n\r\n            <tr class=\"collapse tabel-detail col-md-8 col-lg-8 \" data-parent=\"#coll\" attr.id=\"collapseExample{{i}}\">\r\n              <td colspan=8 class=\" incident-details  \">\r\n                <div class=\"row p-2 auto-cursor\">\r\n                  <div class=\"card card-nav-tabs description word-break\" *ngIf=\"row.description\" style=\"margin:10px; width:94% ; margin: auto; margin-bottom: 0px;\">\r\n                    <div class=\"card-body\" style=\"padding-bottom: 0px;\">\r\n                      <div class=\"description-heading\"> Description</div>\r\n                      <p> {{row.description}}</p>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                  <!-- product details -->\r\n\r\n\r\n                  <div class=\"card detail-box responsiveCard\">\r\n                    <div>\r\n                      <div class=\"card-header card-header-info float-right text-right\" style=\"width:150px;\">\r\n                        Product Details\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\" style=\"padding:15px;\">\r\n                      <div class=\"row\">\r\n                        <div *ngIf=\"row.registeredProductPicUrl\" class=\"col-md-4 col-lg-4 col-sm-4 \">\r\n                          <img class=\"product-image\" [src]=\"row.registeredProductPicUrl\" />\r\n                        </div>\r\n                        <div class=\"col-md- 6 col-lg-6 col-sm-6\">\r\n                          <div *ngIf=\"row.productModelNumber\">\r\n                            <b>{{ row.productModelNumber }}</b>\r\n                          </div>\r\n                          <div *ngIf=\"row.productModelNumber\">\r\n                            <b>{{ row.productName }}</b>\r\n                          </div>\r\n                          <div *ngIf=\"row.productCategoryName\">\r\n                            <b>Category : </b> {{ row.productCategoryName }}\r\n                          </div>\r\n                          <div *ngIf=\"row.productWarrantyEnd\">\r\n                            <b>Warranty : </b>{{ row.productWarrantyEnd | date: 'dd MMM, yyyy'}}\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-2 col-lg-2 col-sm-2\">\r\n                          <span class=\"badge badge-pill\" [style.background]=\"row.statusColor\">{{row.priority}}</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                  <!-- <customer detail> -->\r\n                  <div class=\"card detail-box responsiveCard \">\r\n                    <div>\r\n                      <div class=\"card-header card-header-info float-right text-right\" style=\"width:150px;\">\r\n                        Customer Details\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"card-body\" style=\"padding:15px;\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-4 col-lg-4 col-sm-4 \">\r\n                          <img class=\"product-image\" *ngIf=\"row.customerPicUrl\" [src]=\"row.customerPicUrl\" />\r\n                          <img *ngIf=\"!row.customerPicUrl \" class=\"product-image\" src=\"/assets/img/user.png\">\r\n\r\n                        </div>\r\n                        <div class=\"col-md- 6 col-lg-6 col-sm-6\">\r\n                          <div *ngIf=\" row.customerName \">\r\n                            <i class=\"fa fa-user details-icon\" aria-hidden=\"true\"></i> <b>{{ row.customerName }}</b>\r\n                          </div>\r\n                          <div *ngIf=\"row.customerContactNo\">\r\n                            <i class=\"fa fa-phone details-icon\" aria-hidden=\"true\"></i> {{ row.customerContactNo }}\r\n                          </div>\r\n\r\n                          <div *ngIf=\" row.customerEmail \">\r\n                            <i class=\"fa fa-envelope details-icon\" aria-hidden=\"true\"></i> {{ row.customerEmail }}\r\n                          </div>\r\n                          <div *ngIf=\"row.customerAddress\" class=\"font-size\">\r\n                            <i class=\"fa fa-home details-icon\" aria-hidden=\"true\" style=\"font-size: 18px;\"></i> {{\r\n                            row.customerAddress }} {{ row.customerCity }}, {{ row.customerState }} {{\r\n                            row.customerPostalCode }} {{ row.customerCountry }}\r\n                          </div>\r\n\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- <dealer details> -->\r\n                  <div class=\"card card-nav-tabs detail-box responsiveCard\" *ngIf=\"row.dealerName || row.dealerAddress || row.dealerContact || row.dealerEmail\">\r\n                    <div>\r\n                      <div class=\"card-header card-header-info float-right text-right\" style=\"width:150px;\">\r\n                        Dealer Details\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\" style=\"padding:15px;\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-4 col-lg-4 col-sm-4 \">\r\n\r\n                          <img class=\"product-image\" src=\"/assets/img/user.png\">\r\n\r\n                        </div>\r\n                        <div class=\"col-md- 6 col-lg-6 col-sm-6\">\r\n                          <div *ngIf=\" row.dealerName \">\r\n                            <i class=\"fa fa-user details-icon\" aria-hidden=\"true\"></i> <b>{{ row.dealerName }}</b>\r\n                          </div>\r\n                          <div *ngIf=\"row.dealerContact\">\r\n                            <i class=\"fa fa-phone details-icon\" aria-hidden=\"true\"></i> {{ row.dealerContact }}\r\n                          </div>\r\n\r\n                          <div *ngIf=\"row.dealerEmail \">\r\n                            <i class=\"fa fa-envelope details-icon\" aria-hidden=\"true\"></i> {{ row.customerEmail}}\r\n                          </div>\r\n                          <div *ngIf=\"row.dealerAddress\">\r\n                            <b>Address:</b> {{ row.dealerAddress }}\r\n                          </div>\r\n\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- <important dates> -->\r\n\r\n                  <div class=\"card detail-box card-nav-tabs detail-box responsiveCard \">\r\n                    <div>\r\n                      <div class=\"card-header card-header-info float-right text-right\" style=\"width:150px;\">\r\n                        Important Dates\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"card-body\">\r\n                      <div class=\"row gridrow\">\r\n                        <div class=\"col-md-4 col-lg-4 col-sm-4 border-right\">\r\n                          <b> Purchased</b>\r\n                          <br>{{row.productPurchaseDate | date: 'dd MMM, yyyy'}}\r\n                        </div>\r\n                        <div class=\"col-md-4 col-lg-4 col-sm-4 border-right\">\r\n                          <b>Registered</b>\r\n                          <br> {{row.createdAt | date: 'dd MMM, yyyy'}}\r\n                        </div>\r\n                        <div class=\"col-md-4 col-lg-4 col-sm-4\">\r\n                          <b>Installad</b>\r\n                          <br>\r\n                          <span *ngIf=\"row.productInstallationDateTime \"> {{row.productInstallationDateTime | date:\r\n                            'dd\r\n                            MMM, yyyy'}}</span>\r\n                          <span *ngIf=\"!row.productInstallationDateTime \"> Not Installed</span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row warantyRow\">\r\n                        <div class=\"col-md-6 col-lg-6 col-sm-6 col-xs-6 border-right\">\r\n                          <b>Waranty Start</b>\r\n                          <br> {{row.productWarrantyStart | date: 'dd MMM, yyyy'}}\r\n                        </div>\r\n                        <div class=\"col-md-6 col-lg-6 col-sm-6 col-xs-6\">\r\n                          <b>Waranty End</b>\r\n                          <br> {{row.productWarrantyEnd | date: 'dd MMM, yyyy'}}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- <assigned engineer-->\r\n                  <div class=\"card card-nav-tabs detail-box responsiveCard \" *ngIf=\"!(row.statusName == 'New' || row.statusName == 'Rejected')\">\r\n                    <div>\r\n                      <div class=\"card-header card-header-info float-right text-right\" style=\"width:150px;\">\r\n                        Assigned Engineer\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\" style=\"padding:15px;\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-4 col-lg-4 col-sm-4 \">\r\n                          <img class=\"product-image\" *ngIf=\"row.assignedServiceEngineerPicUrl\" [src]=\"row.assignedServiceEngineerPicUrl\" />\r\n                          <img *ngIf=\"!row.assignedServiceEngineerPicUrl \" class=\"product-image\" src=\"/assets/img/user.png\">\r\n\r\n                        </div>\r\n                        <div class=\"col-md- 6 col-lg-6 col-sm-6\">\r\n                          <!-- <div>product details</div> -->\r\n                          <div *ngIf=\" row.assignedServiceEngineerName \">\r\n                            <i class=\"fa fa-user details-icon\" aria-hidden=\"true\"></i> <b>{{row.assignedServiceEngineerName}}</b>\r\n                          </div>\r\n                          <div *ngIf=\"row.assignedServiceEngineerContactNo \">\r\n                            <i class=\"fa fa-phone details-icon\" aria-hidden=\"true\"></i> {{\r\n                            row.assignedServiceEngineerContactNo }}\r\n                          </div>\r\n\r\n                          <div *ngIf=\"row.assignedServiceEngineerEmail \">\r\n                            <i class=\"fa fa-envelope details-icon\" aria-hidden=\"true\"></i> {{\r\n                            row.assignedServiceEngineerEmail }}\r\n                          </div>\r\n                          <!-- <span class\"badge badge-pill badge-success\" data-target=\"#assignModal\" data-toggle=\"modal\" (click)=\"getAssingedId(row.id)\">Edit</span> -->\r\n                          <div *ngIf=\"!(row.statusName =='Fixed' || row.statusName =='Rejected')\">\r\n                            <!-- <span class=\"badge badge-pill badge-primary\" data-target=\"#assignModal\" data-toggle=\"modal\" (click)=\"getAssingedId(row.id,row.assignedServiceEngineerName)\">Edit</span> -->\r\n                            <button class=\"btn btn-primary btn-sm changeEng\" data-target=\"#assignModal\" data-toggle=\"modal\"\r\n                              (click)=\"getAssingedId(row.id,row.assignedServiceEngineerName) ; assignForm.reset()\">\r\n                              Change Engineer</button>\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- <scheduled details> -->\r\n                  <div class=\"card card-nav-tabs detail-box responsiveCard \" *ngIf=\"!(row.statusName == 'New' || row.statusName == 'Assigned Engineer'|| row.statusName == 'Rejected')\">\r\n                    <div>\r\n                      <div class=\"card-header card-header-info float-right text-right\" style=\"width:150px;\">\r\n                        Scheduled Details\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\" style=\"padding:15px;\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-4 col-lg-4 col-sm-4 \">\r\n\r\n                          <i class=\"material-icons icon\">\r\n                            access_alarm\r\n                          </i>\r\n\r\n                        </div>\r\n                        <div class=\"col-md- 6 col-lg-6 col-sm-6\">\r\n\r\n                          <div *ngIf=\"row.lastScheduleDate\">\r\n                            <b>Date:</b> {{ row.lastScheduleDate | date: 'dd MMM, yyyy' }}\r\n                          </div>\r\n                          <div *ngIf=\"row.lastScheduleDate\">\r\n                            <b>Time:</b> {{ row.lastScheduleDate | date: 'hh : mm a' }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- <fixed case> -->\r\n                  <div class=\"card card-nav-tabs detail-box responsiveCard \" *ngIf=\"row.statusName==='Fixed'\">\r\n                    <div>\r\n                      <div class=\"card-header card-header-info float-right text-right\" style=\"width:150px;\">\r\n                        Fixed Details\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\" style=\"padding:15px;\">\r\n                      <div class=\"row\">\r\n                        <div *ngIf=\"row.signatureUrl\" class=\"col-md-4 col-lg-4 col-sm-4 \">\r\n\r\n                          <img class=\"product-image\" [src]=\"row.signatureUrl\" />\r\n\r\n                        </div>\r\n                        <div class=\"col-md- 6 col-lg-6 col-sm-6\">\r\n\r\n                          <div *ngIf=\"row.fixedInfo[0].name\">\r\n                            <b>{{row.fixedInfo[0].name}}</b>\r\n                          </div>\r\n                          <div *ngIf=\"row.fixDate\">\r\n                            <b>Date:</b>{{row.fixedInfo[0].createdAt | date: 'dd MMM ,yyyy'}}\r\n                          </div>\r\n                          <div *ngIf=\"row.fixDate\">\r\n                            <b>Time:</b>{{row.fixedInfo[0].createdAt | date: 'hh : mm a'}}\r\n                          </div>\r\n\r\n\r\n                          <div *ngIf=\"row.fixedInfo[0].comment\">\r\n                            Comment: <b>{{row.fixedInfo[0].comment}}</b>\r\n                          </div>\r\n                          <div *ngIf=\"row.rca\">\r\n                            Rca: <b>{{row.rca}}</b>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                  <!-- not fixed info -->\r\n                  <div class=\"card card-nav-tabs detail-box responsiveCard \" *ngIf=\"row.statusName==='Not Fixed'\">\r\n                    <div>\r\n                      <div class=\"card-header card-header-info float-right text-right\" style=\"width:150px;\">\r\n                        Not Fixed Details\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\" style=\"padding:15px;\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-4 col-lg-4 col-sm-4 \">\r\n                          <img class=\"product-image\" src=\"http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-warning-icon.png\" />\r\n\r\n\r\n                        </div>\r\n                        <div class=\"col-md- 6 col-lg-6 col-sm-6\">\r\n\r\n                          <div *ngIf=\"row.lastModifiedAt\">\r\n\r\n                            <b>Date:</b>{{row.lastModifiedAt | date: 'dd MMM ,yyyy'}}\r\n                          </div>\r\n                          <div *ngIf=\"row.lastModifiedAt\">\r\n                            <b>Time:</b>\r\n                            {{row.lastModifiedAt | date: 'hh : mm a'}}\r\n                          </div>\r\n\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                  <!-- <feedback details> -->\r\n                  <div class=\"card card-nav-tabs detail-box responsiveCard \" *ngIf=\"row.rating\">\r\n                    <div>\r\n                      <div class=\"card-header card-header-info float-right text-right\" style=\"width:150px;\">\r\n                        Feedback Details\r\n                      </div>\r\n                    </div>\r\n                    <div  class=\"card-body\" style=\"padding:15px;\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-4 col-lg-4 col-sm-4 \">\r\n                          <img class=\"product-image\" src=\"assets/img/rating.png\" />\r\n\r\n\r\n                        </div>\r\n                        <div  *ngIf=\"row.fixedInfo?.length>1\" class=\"col-md- 6 col-lg-6 col-sm-6\">\r\n\r\n                          <div *ngIf=\"row.fixedInfo?.length>1\">\r\n\r\n                            <b>Date:</b>{{row.fixedInfo[1].createdAt | date:'dd MMM, yyyy'}}\r\n                          </div>\r\n                          <div *ngIf=\"row.fixedInfo?.length>1\">\r\n                            <b>Time:</b>\r\n                            {{row.fixedInfo[1].createdAt | date: 'hh : mm a'}}\r\n                          </div>\r\n\r\n                          <div class=\"star-rating\">\r\n                            <div class=\"full-star\" [style.width]=\"starWidth\"></div>\r\n                            <div class=\"empty-star\"> </div>\r\n                          </div>\r\n                          <div>\r\n                            <b>Comment:</b> {{row.fixedInfo[1].comment}}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"d-flex justify-content-center\">\r\n                  <button class=\"btn btn-sm btn-outline-success margin-right\" *ngIf=\"row.statusName=='New' \" type=\"submit\"\r\n                    data-toggle=\"modal\" data-target=\"#assignModal\" (click)=\"getAssingedId(row.id); assignForm.reset();\">\r\n                    <i class=\"material-icons\"> assignment_turned_in </i> Assign</button>\r\n                  <button class=\"btn btn-sm btn-outline-primary margin-right\" type=\"submit\" data-toggle=\"modal\" (click)=\" getCommentsId(row.id)\"\r\n                    data-target=\"#commentModal\">\r\n                    <i class=\"material-icons\">\r\n                      history\r\n                    </i> History</button>\r\n                  <button *ngIf=\"row.statusName!=='Rejected' \" class=\"btn btn-sm btn-outline-danger \" type=\"submit\"\r\n                    data-toggle=\"modal\" (click)=\"getRejectId(row.id); rejectForm.reset()\" data-target=\"#rejectModal\">\r\n                    <i class=\"material-icons\"> clear </i> reject</button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n          <div class=\"col-md-8 col-lg-8\" style=\"background: gray\">\r\n\r\n          </div>\r\n          <tfoot>\r\n            <tr *ngIf=\"!(filtercomplaints?.length > 0|| showLoader)\">\r\n\r\n              <td colspan=\"9\">\r\n                <div class=\"text-center\">\r\n                  <img src=\"/assets/img/not-found.svg\">\r\n                  <h3 class=\"noContent-text\">No content found</h3>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td colspan=\"9\" style=\"font-size: 70px; text-align: center;\">\r\n                <i *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin mainColor\"></i>\r\n              </td>\r\n            </tr>\r\n            <tr *ngIf=\"filtercomplaints?.length>11 && showNoMore\">\r\n\r\n              <td colspan=\"9\">\r\n                <div class=\"text-center\">\r\n                  <h3 class=\"noContent-text\">No more content</h3>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- assign engineer model start here  -->\r\n\r\n<div class=\"modal fade\" id=\"assignModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"assignModal\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content card card-stats\">\r\n      <div class=\"card-header card-header-success card-header-icon\">\r\n        <div class=\"card-icon\">\r\n          <i class=\"material-icons\">content_copy</i>\r\n        </div>\r\n        <h3 class=\"card-title\">{{assignTitle}}</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #assignForm=\"ngForm\">\r\n          <div *ngIf=\"listServiceEngineer?.length > 0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                  <textarea placeholder=\"Comment\" [(ngModel)]=\"assingedEngineer.comment\" name=\"comment\" class=\"form-control\"\r\n                    #comment=\"ngModel\"></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                  <label>Select Service Engineer\r\n                  </label>\r\n                  <select class=\"form-control\" required [(ngModel)]=\"assingedEngineer.serviceEngineerId\" name=\"serviceEng\"\r\n                    #serviceEng=\"ngModel\">\r\n                    <option *ngFor=\"let engineer of listServiceEngineer\" [value]=\"engineer.id\">{{engineer.name}}</option>\r\n                  </select>\r\n                  <h5 [hidden]=\"serviceEng.valid || serviceEng.untouched\" style=\"color: red\">\r\n                    Service Engineer is Required\r\n                  </h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div *ngIf=\"!(listServiceEngineer?.length > 0)\">\r\n            No service engineer available for this region/product\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"assignForm.reset()\" data-dismiss=\"modal\">Close</button>\r\n            <button *ngIf=\"!assignButtonHide && (listServiceEngineer?.length > 0)\" type=\"button\" (click)=\"assignFormData(assignForm.value)\"\r\n              [disabled]=\"!assignForm.valid\" class=\"btn btn-success\">Assign</button>\r\n            <button *ngIf=\"assignButtonHide\" type=\"button\" class=\"btn btn-default\"> <i class=\"fa fa-spinner fa-spin mainColor\"></i>submitting</button>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- assign engineer model end here  -->\r\n\r\n\r\n<!-- history  Modal start here -->\r\n<div class=\"modal fade\" id=\"commentModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"commentModal\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content card card-stats\">\r\n      <div class=\"card-header card-header-primary card-header-icon\">\r\n        <div class=\"card-icon\">\r\n          <i class=\"material-icons\">\r\n            history\r\n          </i>\r\n        </div>\r\n        <h3 class=\"card-title\">History</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div *ngIf=\"!loadingHistory\" class=\"text-center\">\r\n          <i class=\"fa fa-spinner fa-spin mainColor\" style=\"font-size:60px; \"></i>\r\n        </div>\r\n        <div *ngIf=\"loadingHistory\">\r\n          <div *ngIf=\"commentsHistory.length==0\">\r\n            <div class=\"text-center\">\r\n              <img src=\"/assets/img/not-found.svg\">\r\n              <p class=\"noContent-text\">No Records Found</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"timeline\" *ngFor=\"let comment of commentsHistory let i=index \">\r\n            <div class=\"history\" *ngIf=\"commentsHistory.length!==0\">\r\n              <div class=\"badge badge-pill status-badge \" [style.background]=\"comment.statusColor\">{{comment.statusName}}</div>\r\n\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"comment-name col-md-4 col-lg-4 col-sm-4 col-xs-4\">\r\n                    <b class=\"text-captalize\">{{comment.name }}</b><br>\r\n                    <b style=\"color: gray;\">{{comment.comment}}</b>\r\n                  </div>\r\n                  <div class=\"comment col-md- 8 col-lg-8 col-sm-8 col-xs-8\" [style.border-left-color]=\"comment.statusColor\">\r\n                    <!-- <div *ngIf=\"comment.scheduleDate\" class=\"date\">\r\n{{comment.scheduleDate | date: 'dd MMM, yyyy hh : mm a'}}\r\n</div> -->\r\n                    <div>\r\n                      {{comment.autoComment}}\r\n                    </div>\r\n\r\n                    <div class=\"date\">\r\n                      {{comment.createdAt | date: 'dd MMM, yyyy hh : mm a'}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<!-- End of chat modal -->\r\n\r\n<!-- Reject Modal  start here -->\r\n<div class=\"modal fade\" id=\"rejectModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"rejectModal\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content card card-stats\">\r\n      <div class=\"card-header card-header-danger card-header-icon\">\r\n        <div class=\"card-icon\">\r\n          <i class=\"material-icons\">\r\n            phonelink_erase\r\n          </i>\r\n        </div>\r\n        <h3 class=\"card-title\">Reject</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <form (ngSubmit)=\"onSubmit()\" #rejectForm=\"ngForm\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"comment\">Add rejection description</label>\r\n                <br>\r\n                <textarea required class=\"form-control\" [(ngModel)]=\"rejectComplaint.comment\" name=\"comment\" #comment=\"ngModel\"\r\n                  id=\"comment\"></textarea>\r\n              </div>\r\n              <div>\r\n                <input type=\"file\" required (change)=\"onSelectFile($event)\" name=\"pic\" placeholder=\"pic\">\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div *ngIf=\"urlTOShowImg\" class=\"col-md-6\">\r\n\r\n              <img [src]=\"urlTOShowImg\" style=\"height: 150px;\">\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"rejectForm.reset()\" data-dismiss=\"modal\">Close</button>\r\n            <button *ngIf=\"!rejectButtonHide\" type=\"submit\" [disabled]=\"!rejectForm.valid\" class=\"btn btn-danger\">Reject</button>\r\n            <button *ngIf=\"rejectButtonHide\" type=\"button\" class=\"btn btn-default\"> <i class=\"fa fa-spinner fa-spin mainColor\"></i>submitting</button>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Reject Modal  end here -->"

/***/ }),

/***/ "./src/app/Modules/incidents/incidents.component.scss":
/*!************************************************************!*\
  !*** ./src/app/Modules/incidents/incidents.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-results {\n  height: 100vh;\n  overflow: scroll; }\n\n.action-buttons i {\n  position: relative;\n  z-index: 2; }\n\n.action-buttons i:before {\n    position: absolute;\n    content: '';\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    width: 0px;\n    height: 0px;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    border-radius: 50%;\n    background: rgba(0, 0, 0, 0.1);\n    transition: 0.1s; }\n\n.action-buttons i:hover {\n    color: #de2768;\n    cursor: pointer; }\n\n.action-buttons i:hover:before {\n      width: 35px;\n      height: 35px;\n      z-index: 1; }\n\n.new {\n  background: #f1c40f; }\n\n.not-fixed {\n  background: #f44336; }\n\n.fixed {\n  background: #4caf50; }\n\n.scheduled {\n  background: #03a9f4; }\n\n.assigned {\n  background: #3f51b5; }\n\n.rotate {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  transition: 0.5s ease-in-out; }\n\n.re-open {\n  background: #9c27b0; }\n\ntr:hover {\n  cursor: pointer; }\n\ntr:hover .collapse-icon {\n    color: #de2768; }\n\n.incident-details .product-image {\n  width: 96px; }\n\n.incident-details .btn {\n  background: white; }\n\n.assign-form .material-icons {\n  color: #4caf50; }\n\n.margin-right {\n  margin-right: 25px; }\n\n.border-bottom {\n  border-bottom: 1px solid #f2f2f2; }\n\n.font-size {\n  font-size: 14px; }\n\n.margin-top {\n  margin-top: 10px !important; }\n\n.detail-box {\n  margin-left: 28px;\n  margin-right: 18px; }\n\n.gridrow {\n  padding-bottom: 13px;\n  text-align: center;\n  position: relative; }\n\n.gridrow:before {\n    position: absolute;\n    content: '';\n    width: 50%;\n    border-bottom: 1px solid #f2f2f2;\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translatex(-50%);\n            transform: translatex(-50%); }\n\n.warantyRow {\n  text-align: center; }\n\n.border-right {\n  position: relative; }\n\n.border-right:before {\n    position: absolute;\n    content: '';\n    height: 50px;\n    border-right: 1px solid #f2f2f2;\n    right: 0;\n    top: 50%;\n    -webkit-transform: translatey(-50%);\n            transform: translatey(-50%); }\n\n.assignDates {\n  width: 45%;\n  margin: auto;\n  margin-top: 20px !important;\n  padding: 10px; }\n\n.icon {\n  font-size: 7em;\n  color: #03a9f4; }\n\n.timeline {\n  padding: 5px;\n  margin-bottom: 3px; }\n\n.timeline .history {\n    margin-top: -16px; }\n\n.timeline .history .status {\n      padding: 1px 5px;\n      border-radius: 25px;\n      background: yellow;\n      display: -webkit-inline-box; }\n\n.timeline .history .status-badge {\n      margin-left: 110px; }\n\n.timeline .history .comment-name {\n      text-align: right;\n      padding-right: 24px;\n      padding-top: 20px;\n      padding-bottom: 11px; }\n\n.timeline .history .comment {\n      border-left: 2px solid #03a9f4;\n      padding: 20px 0 20px 5px;\n      margin-left: -16px;\n      position: relative; }\n\n.timeline .history .comment p {\n        margin: 0px; }\n\n.timeline .history .comment .date {\n        color: slategray;\n        font-weight: 500;\n        font-size: 12px; }\n\n.timeline:last-child:after {\n    position: absolute;\n    content: '';\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    background: #03a9f4;\n    left: 154px; }\n\n.text-center {\n  text-align: center; }\n\n.text-center img {\n    width: 250px; }\n\n.margin-right {\n  margin-right: 10px; }\n\n.changeEng {\n  background: #962daf !important; }\n\n.assendingBtn {\n  margin-bottom: 8px;\n  margin-top: -5px;\n  display: flex;\n  background: lightgray; }\n\n.margin {\n  margin-left: 0;\n  margin-right: 0; }\n\n.filterBtn {\n  border-radius: 0;\n  background: transparent;\n  margin-top: 0;\n  width: 50%;\n  margin-bottom: 0;\n  margin-left: 0; }\n\n.btn-light:not(:disabled):not(.disabled).active, .btn-light:not(:disabled):not(.disabled):active, .show > .btn-light.dropdown-toggle {\n  color: white;\n  background-color: #972faf;\n  border-color: #972faf; }\n\n.star-rating {\n  height: 30px;\n  width: 150px;\n  background-color: white;\n  position: relative; }\n\n.full-star {\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  background-image: url(\"http://www.solidsignal.com/images%5CReviewStars5.png\");\n  background-size: 147px 28px; }\n\n.empty-star {\n  width: 100%;\n  height: 100%;\n  background-image: url(\"http://fitchespresso.com.au/wp-content/uploads/2013/07/5-stars.jpg\");\n  background-size: 150px 30px; }\n"

/***/ }),

/***/ "./src/app/Modules/incidents/incidents.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Modules/incidents/incidents.component.ts ***!
  \**********************************************************/
/*! exports provided: IncidentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentsComponent", function() { return IncidentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _incidents_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incidents.service */ "./src/app/Modules/incidents/incidents.service.ts");
/* harmony import */ var _interface_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/user */ "./src/app/interface/user.ts");
/* harmony import */ var src_app_providers_tost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/tost.service */ "./src/app/providers/tost.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dashboard/dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IncidentsComponent = /** @class */ (function () {
    function IncidentsComponent(incidentService, tostservice, router, activatedRoute, dashboardService) {
        this.incidentService = incidentService;
        this.tostservice = tostservice;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dashboardService = dashboardService;
        this.loadingHistory = false;
        this.assignButtonHide = false;
        this.rejectButtonHide = false;
        this.valTrue = true;
        this.showGraphHeader = false;
        this.showLoader = false;
        this.showNoMore = false;
        this.isAsc = true;
        this.filterDashboardIncidents = {};
        this.filterBy = {};
        this.filterbysort = {};
        this.filtercomplaints = [];
        this.currentPage = 1;
        this.allHeading = [{ name: 'All', color: "#FFD600", id: 0, },];
        this.headerRow = ["Incident_No. ", "Date", "Name", "Description", "Category", "Incident_Category", "Priority", "Status"];
        this.rejectComplaint = new _interface_user__WEBPACK_IMPORTED_MODULE_2__["RejectComplaint"];
        this.assingedEngineer = new _interface_user__WEBPACK_IMPORTED_MODULE_2__["AssingedEngineer"];
        this.x = false;
    }
    IncidentsComponent.prototype.ngOnInit = function () {
        this.getComplaintStatus();
        this.subscribeRouteChanges();
    };
    IncidentsComponent.prototype.setId = function (row, i) {
        this.currentIndex = i;
        this.currentId = row.id;
        this.currentStatusId = row.statusId;
        this.starWidth = row.rating * 20 + "%";
    };
    IncidentsComponent.prototype.goto = function (place) {
        this.router.navigate(["/" + place]);
        this.showGraphHeader = false;
    };
    IncidentsComponent.prototype.filterClick = function () {
        $('.fitlerDiv').on('click', function (e) {
            e.stopPropagation();
        });
    };
    IncidentsComponent.prototype.subscribeRouteChanges = function () {
        var _this = this;
        this.activatedRoute.queryParams
            .subscribe(function (e) {
            if (e.sId || e.duration || e.pcId) {
                _this.statusId = Number(e.sId);
                _this.ProductCategoryId = Number(e.pcId) || Number(0);
                _this.graphType = e.gType || "";
                _this.stateId = e.stId || "";
                _this.duration = e.duration || "";
                _this.type = e.Type || "";
                _this.categoryType = e.cType || "";
                _this.warranty = e.warranty || "";
                _this.rating = parseFloat(e.rating);
                _this.startDate = e.start || '';
                _this.endDate = e.end || '';
                if (e.sId) {
                    _this.getComplaints(_this.statusId);
                }
                if (e.duration) {
                    _this.showGraphHeader = true;
                    _this.getDashboardIncidents();
                }
            }
            else {
                _this.router.navigate(['/incidents'], { queryParams: { sId: 0, } });
            }
        });
    };
    // filter by status headings
    IncidentsComponent.prototype.onHeadingClick = function (statusId) {
        this.router.navigate(['/incidents'], { queryParams: { sId: statusId, } });
        this.sortActive = "";
    };
    IncidentsComponent.prototype.getDashboardIncidents = function () {
        var _this = this;
        this.filterDashboardIncidents = {};
        if (this.duration === "byRange") {
            this.filterDashboardIncidents['startDate'] = this.startDate;
            this.filterDashboardIncidents['endDate'] = this.endDate;
        }
        this.filterDashboardIncidents["duration"] = this.duration;
        this.filterDashboardIncidents["graphType"] = this.graphType;
        this.filterDashboardIncidents["categoryType"] = this.categoryType;
        if (this.ProductCategoryId) {
        }
        this.filterDashboardIncidents["categoryId"] = this.ProductCategoryId;
        if (this.type) {
            this.filterDashboardIncidents["type"] = this.type;
        }
        if (this.rating || this.rating == 0) {
            this.filterDashboardIncidents["rating"] = this.rating;
        }
        if (this.warranty) {
            this.filterDashboardIncidents["warrantyStatus"] = this.warranty;
        }
        if (this.stateId) {
            this.filterDashboardIncidents["state"] = this.stateId;
        }
        this.showLoader = true;
        if (this.graphType === "warranty") {
            this.dashboardService.getProductWarrantyStatus(this.filterDashboardIncidents, this.valTrue)
                .subscribe(function (res) {
                _this.showLoader = false;
                _this.showNoMore = false;
                _this.filtercomplaints = res;
            }, function (err) {
                _this.showLoader = false;
                _this.tostservice.showNotificationFailure(err);
            });
        }
        if (this.graphType === "rating") {
            this.dashboardService.getProductRating(this.filterDashboardIncidents, this.valTrue)
                .subscribe(function (res) {
                _this.showLoader = false;
                _this.showNoMore = true;
                _this.filtercomplaints = res;
            }, function (err) {
                _this.tostservice.showNotificationFailure(err);
                _this.showLoader = false;
            });
        }
        if (this.graphType === "region") {
            this.dashboardService.getStateByStatus(this.filterDashboardIncidents, this.valTrue)
                .subscribe(function (res) {
                _this.showLoader = false;
                _this.showNoMore = true;
                _this.filtercomplaints = res;
            }, function (err) {
                _this.tostservice.showNotificationFailure(err);
                _this.showLoader = false;
            });
        }
        if (this.graphType === "status") {
            this.dashboardService.get_Product_Status(this.filterDashboardIncidents, this.valTrue)
                .subscribe(function (res) {
                _this.showLoader = false;
                _this.showNoMore = true;
                _this.filtercomplaints = res;
            }, function (err) {
                _this.tostservice.showNotificationFailure(err);
                _this.showLoader = false;
            });
        }
        if (this.graphType === "incident-age") {
            this.dashboardService.getProductIncidentAge(this.filterDashboardIncidents, this.valTrue)
                .subscribe(function (res) {
                _this.showLoader = false;
                _this.showNoMore = true;
                _this.filtercomplaints = res;
            }, function (err) {
                _this.tostservice.showNotificationFailure(err);
                _this.showLoader = false;
            });
        }
        if (this.graphType === "time") {
            this.dashboardService.getTimeChart(this.filterDashboardIncidents, this.valTrue)
                .subscribe(function (res) {
                _this.showLoader = false;
                _this.showNoMore = true;
                _this.filtercomplaints = res;
            }, function (err) {
                _this.tostservice.showNotificationFailure(err);
                _this.showLoader = false;
            });
        }
        if (this.graphType === "avg") {
            this.dashboardService.getAVG(this.filterDashboardIncidents, this.valTrue)
                .subscribe(function (res) {
                _this.showLoader = false;
                _this.showNoMore = true;
                _this.filtercomplaints = res;
            }, function (err) {
                _this.tostservice.showNotificationFailure(err);
                _this.showLoader = false;
            });
        }
        if (this.graphType === "mttr") {
            this.dashboardService.getMTTR(this.filterDashboardIncidents, this.valTrue)
                .subscribe(function (res) {
                _this.showLoader = false;
                _this.showNoMore = true;
                _this.filtercomplaints = res;
            }, function (err) {
                _this.tostservice.showNotificationFailure(err);
                _this.showLoader = false;
            });
        }
    };
    IncidentsComponent.prototype.getComplaints = function (sId) {
        this.selectedHeadingId = sId;
        this.currentPage = 1;
        if (this.statusId == 0) {
            this.getAllComplaints();
        }
        else {
            this.getFilterComplants(this.stateId);
        }
    };
    IncidentsComponent.prototype.getComplaintStatus = function () {
        var _this = this;
        this.incidentService.getCompStatus()
            .subscribe(function (res) {
            res.unshift(_this.allHeading[0]);
            _this.statusHeading = res;
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    IncidentsComponent.prototype.getAllComplaints = function () {
        var _this = this;
        this.showLoader = true;
        this.showNoMore = false;
        this.incidentService.getAllComplaint(this.currentPage)
            .subscribe(function (res) {
            // this.complaints = res;
            _this.filtercomplaints = res;
            _this.showLoader = false;
        }, function (err) {
            _this.showLoader = false;
            _this.tostservice.showNotificationFailure(err);
        });
    };
    //get filter complaints
    IncidentsComponent.prototype.getFilterComplants = function (sId) {
        var _this = this;
        this.filtercomplaints = [];
        this.showLoader = true;
        this.showNoMore = false;
        this.currentPage = 1;
        if (this.statusId) {
            this.filterBy['statusId'] = this.statusId || sId;
        }
        this.incidentService.getFillterComplaint(this.filterBy, this.currentPage)
            .subscribe(function (res) {
            console.log(res);
            _this.filtercomplaints = res;
            _this.showLoader = false;
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
            _this.showLoader = false;
        });
    };
    IncidentsComponent.prototype.onScroll = function () {
        console.log('scrolled!! ' + this.x);
        if (!this.x) {
            this.x = true;
            this.lodeMore();
        }
        else {
            return;
        }
    };
    IncidentsComponent.prototype.lodeMore = function () {
        var _this = this;
        this.showLoader = true;
        this.showNoMore = false;
        if (this.duration) {
            this.getDashboardIncidents();
        }
        else {
            if (this.selectedHeadingId === 0) {
                this.incidentService.getAllComplaint(this.currentPage + 1)
                    .subscribe(function (res) {
                    _this.x = false;
                    if (res.length) {
                        _this.filtercomplaints = _this.filtercomplaints.concat(res);
                        _this.currentPage++;
                    }
                    else {
                        _this.showNoMore = true;
                    }
                    _this.showLoader = false;
                }, function (err) {
                    _this.x = true;
                    _this.showLoader = false;
                    _this.showNoMore = false;
                    _this.tostservice.showNotificationFailure(err);
                });
            }
            else {
                this.incidentService.getFillterComplaint({ "statusId": this.statusId }, this.currentPage + 1)
                    .subscribe(function (res) {
                    _this.x = false;
                    _this.showLoader = false;
                    if (res.length) {
                        _this.filtercomplaints = _this.filtercomplaints.concat(res);
                        _this.currentPage++;
                    }
                    else {
                        _this.showNoMore = true;
                    }
                }, function (err) {
                    _this.x = true;
                    _this.showNoMore = false;
                    _this.showLoader = false;
                    _this.tostservice.showNotificationFailure(err);
                });
            }
        }
    };
    IncidentsComponent.prototype.isAscn = function (val) {
        this.isAsc = val;
        if (this.sortActive) {
            this.sortBy(this.sortActive);
        }
    };
    IncidentsComponent.prototype.sortBy = function (val) {
        var _this = this;
        this.currentRouteParams();
        this.sortActive = val;
        this.showLoader = true;
        if (this.statusId == 0 && this.ProductCategoryId == 0 && this.stateId == 0 || "") {
            this.filtercomplaints = [];
            this.incidentService.getSorting(val, this.isAsc)
                .subscribe(function (res) {
                _this.filtercomplaints = res;
                _this.showLoader = false;
            }, function (err) {
                _this.tostservice.showNotificationFailure(err);
                _this.showLoader = false;
            });
        }
        else {
            this.filtercomplaints = [];
            this.showLoader = true;
            this.incidentService.getFilterSorting(val, this.filterbysort, this.isAsc)
                .subscribe(function (res) {
                _this.filtercomplaints = res;
                _this.showLoader = false;
            }, function (err) {
                _this.tostservice.showNotificationFailure(err);
                _this.showLoader = false;
            });
        }
    };
    IncidentsComponent.prototype.currentRouteParams = function () {
        var query = this.activatedRoute.snapshot.queryParams;
        for (var key in query) {
            if (key == "sId" && query[key] != "0") {
                this.filterbysort['statusId'] = query[key];
            }
            console.log(query[key]);
            console.log(this.filterbysort);
        }
    };
    IncidentsComponent.prototype.clearSortBy = function (i) {
        this.getFilterComplants(i);
        this.sortActive = "";
    };
    // get service engineer against incidents
    IncidentsComponent.prototype.getAssingedId = function (id, AssignEngName) {
        var _this = this;
        if (AssignEngName) {
            this.assignTitle = "Change";
        }
        else {
            this.assignTitle = "Assign";
        }
        this.resetform();
        this.incidentService.getServiceEngAgainstComplaindId(id)
            .subscribe(function (res) {
            console.log(res);
            _this.listServiceEngineer = res.filter(function (element) { return element.name != AssignEngName; });
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    // get comment history of a incidents or complaint
    IncidentsComponent.prototype.getCommentsId = function (id) {
        var _this = this;
        this.loadingHistory = false;
        this.incidentService.getComplaintsHistory(id)
            .subscribe(function (res) {
            _this.commentsHistory = res;
            _this.loadingHistory = true;
        }, function (err) {
            _this.loadingHistory = true;
            _this.tostservice.showNotificationFailure(err);
        });
    };
    IncidentsComponent.prototype.getRejectId = function (id) {
        this.resetform();
    };
    // upload img 
    IncidentsComponent.prototype.onSelectFile = function (event) {
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
    // incident reject form submit
    IncidentsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.rejectButtonHide = true;
        var fd = new FormData();
        fd.append("comment", this.rejectComplaint.comment);
        fd.append("pic", this.imgfile);
        fd.append("updateInfo ", "reject");
        this.incidentService.rejectComplaint(fd, this.currentId)
            .subscribe(function (res) {
            _this.rejectButtonHide = false;
            _this.filtercomplaints.splice(_this.currentIndex, 1);
            _this.closeRejectModal();
            _this.showNotification("Incident Reject successfuly");
            _this.resetform();
        }, function (err) {
            _this.rejectButtonHide = true;
            _this.tostservice.showNotificationFailure(err);
        });
    };
    IncidentsComponent.prototype.resetform = function () {
        this.comment = "";
        this.imgfile = null;
        this.urlTOShowImg = "";
        this.rejectComplaint = new _interface_user__WEBPACK_IMPORTED_MODULE_2__["RejectComplaint"]();
        this.assingedEngineer = new _interface_user__WEBPACK_IMPORTED_MODULE_2__["AssingedEngineer"]();
    };
    //assign engineer 
    IncidentsComponent.prototype.assignFormData = function () {
        var _this = this;
        this.assignButtonHide = true;
        var fd = new FormData();
        for (var key in this.assingedEngineer)
            fd.append(key, this.assingedEngineer[key]);
        this.incidentService.assignEngineer(fd, this.currentId)
            .subscribe(function (res) {
            _this.assignButtonHide = false;
            if (_this.filtercomplaints[_this.currentIndex].statusName != 'New') {
                _this.filtercomplaints[_this.currentIndex] = res;
                console.log("if condition");
            }
            else {
                _this.getFilterComplants(_this.currentStatusId);
            }
            _this.closeAssignModal();
            _this.showNotification();
            _this.resetform();
        }, function (err) {
            _this.assignButtonHide = false;
            _this.tostservice.showNotificationFailure(err);
        });
    };
    IncidentsComponent.prototype.closeAssignModal = function () {
        $('#assignModal').modal('hide');
    };
    IncidentsComponent.prototype.closeRejectModal = function () {
        $('#rejectModal').modal('hide');
    };
    IncidentsComponent.prototype.showNotification = function (msg) {
        $.notify({
            icon: "add_alert",
            message: msg || "Incident Assign successfuly"
        }, {
            type: 'success',
            timer: 1000,
            placement: {
                from: "top",
                align: "right"
            }
        });
    };
    IncidentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incidents',
            template: __webpack_require__(/*! ./incidents.component.html */ "./src/app/Modules/incidents/incidents.component.html"),
            styles: [__webpack_require__(/*! ./incidents.component.scss */ "./src/app/Modules/incidents/incidents.component.scss")]
        }),
        __metadata("design:paramtypes", [_incidents_service__WEBPACK_IMPORTED_MODULE_1__["IncidentsService"],
            src_app_providers_tost_service__WEBPACK_IMPORTED_MODULE_3__["TostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]])
    ], IncidentsComponent);
    return IncidentsComponent;
}());



/***/ }),

/***/ "./src/app/Modules/incidents/incidents.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Modules/incidents/incidents.module.ts ***!
  \*******************************************************/
/*! exports provided: IncidentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentsModule", function() { return IncidentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _incidents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incidents.component */ "./src/app/Modules/incidents/incidents.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _providers_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/pipe.module */ "./src/app/providers/pipe.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var IncidentsModule = /** @class */ (function () {
    function IncidentsModule() {
    }
    IncidentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__["InfiniteScrollModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _providers_pipe_module__WEBPACK_IMPORTED_MODULE_6__["PipeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', component: _incidents_component__WEBPACK_IMPORTED_MODULE_2__["IncidentsComponent"] },
                ])
            ],
            declarations: [
                _incidents_component__WEBPACK_IMPORTED_MODULE_2__["IncidentsComponent"],
            ]
        })
    ], IncidentsModule);
    return IncidentsModule;
}());



/***/ })

}]);
//# sourceMappingURL=Modules-incidents-incidents-module.js.map