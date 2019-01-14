(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-serviceEngineer-service-engineer-module"],{

/***/ "./src/app/Modules/serviceEngineer/service-engineer.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Modules/serviceEngineer/service-engineer.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header card-header-primary\">\r\n    <div class=\"d-flex justify-content-between\">\r\n      <h4 class=\"card-title \">Service Engineer</h4>\r\n\r\n      <div class=\"dropdown\">\r\n        <a class=\"nav-link \">\r\n          <button class=\"btn btn-primary transparent \" (click)=\"engineerForm.reset()\" data-toggle=\"modal\" data-target=\"#EngineerFormModal\"><i\r\n              class=\"material-icons\" style=\"font-size: 30px;\">\r\n              person_add\r\n            </i></button>\r\n        </a>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"card-body\">\r\n    <div class=\"table-responsive\" id=\"coll\">\r\n      <table class=\"table table-hover\">\r\n        <thead class=\" text-primary\">\r\n          <th *ngFor=\"let head of headerRow\">\r\n            {{head}}\r\n          </th>\r\n        </thead>\r\n        <tbody *ngFor=\"let row of dataRows let i =index\">\r\n          <tr>\r\n            <td data-toggle=\"collapse\" (click)=\"setId( row)\" attr.href=\"#collapseExample{{i}}\"><b>{{i+1}}</b></td>\r\n            <td data-toggle=\"collapse\" (click)=\"setId( row)\" attr.href=\"#collapseExample{{i}}\">{{row.name}}</td>\r\n            <td data-toggle=\"collapse\" (click)=\"setId( row)\" attr.href=\"#collapseExample{{i}}\">{{row.username}}</td>\r\n            <td data-toggle=\"collapse\" (click)=\"setId( row)\" attr.href=\"#collapseExample{{i}}\">{{row.email}}</td>\r\n            <td data-toggle=\"collapse\" (click)=\"setId( row)\" attr.href=\"#collapseExample{{i}}\">{{row.contactNo}}</td>\r\n            <td data-toggle=\"collapse\" (click)=\"setId( row)\" attr.href=\"#collapseExample{{i}}\">{{row.specialist}}</td>\r\n            <td class=\"change-icon\">\r\n              <i class=\"material-icons mainColor deleteIcon\">delete</i>\r\n              <i (click)=\"setId(row)\" data-toggle=\"modal\" data-target=\"#deleteModal\" class=\"material-icons mainColor deleteChange-icon\">delete_forever</i>\r\n            </td>\r\n          </tr>\r\n          <tr class=\"collapse\" data-parent=\"#coll\" attr.id=\"collapseExample{{i}}\">\r\n            <td colspan=7 class=\" incident-details\" style=\"background: whitesmoke;\">\r\n              <div class=\"row\" style=\"margin-top: 20px;\">\r\n\r\n                <div class=\"card card-nav-tabs margin-top\" style=\"width: 45%; margin-left: 50px; \">\r\n                  <div>\r\n                    <div class=\"card-header card-header-info float-right\" style=\"width:150px;\">\r\n                      Pincodes\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\r\n                    <div style=\"margin-top: -19px;\">\r\n\r\n                      <form class=\"form-inline ml-auto\">\r\n                        <div class=\" no-border\">\r\n                          <input type=\"text\" class=\"form-control\"  name=\"search\" [(ngModel)]=\"searchPin\" placeholder=\"search text goes here\">\r\n                        </div>\r\n                        <button type=\"submit\" class=\"btn btn-just-icon btn-round \" style=\"background: purple\">\r\n                          <i class=\"material-icons\">search</i>\r\n                        </button>\r\n                      </form>\r\n                    </div>\r\n                    <div class=\"space-between\">\r\n                      <div class=\"activePin\">Active</div>\r\n                      <div class=\"InactivePin\">Inactive</div>\r\n                    </div>\r\n                    <div class=\"row scroll\" style=\"padding-top: 13px;\">\r\n                      <div class=\"col-md-6\">\r\n\r\n                        <ul *ngFor=\"let pin of assignpincode | filterSearch : searchPin\">\r\n\r\n                          <li class=\"badge badge-pill badge-primary\" style=\"position: relative;    width: 87px;\">\r\n                            {{pin}}\r\n                            <i *ngIf=\"editPinShow\" (click)=\"removePincode(pin)\" class=\"material-icons iconPosition\">\r\n                              remove_circle\r\n                            </i>\r\n                          </li>\r\n                        </ul>\r\n\r\n                      </div>\r\n                      <div class=\"col-md-6\" *ngIf=\"editPinShow\">\r\n                        <ul *ngFor=\"let pin of editpins | filterSearch : searchPin\">\r\n\r\n                          <li class=\"badge badge-pill badge-primary\" style=\"position: relative;    width: 87px;\">{{pin}}\r\n                            <i (click)=\"addPin(pin)\" class=\"material-icons iconPosition\">\r\n                              add_circle\r\n                            </i>\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n\r\n                    </div>\r\n                    <div> <button *ngIf=\"!editPinShow\" (click)=\"showEditPin()\" class=\" btn btn-outline-info btn-sm  editBtn float-right\"\r\n                        type=\"button\">Edit</button></div>\r\n                    <div *ngIf=\"editPinShow\" class=\"modal-footer float-right\" style=\"padding: 0;border: 0;\">\r\n                      <div style=\"margin: auto;\">\r\n                        <button (click)=\"canclePinchanges(row)\" class=\"btn btn-outline-danger\" style=\"padding: 5px;margin-right: 12px;\">Cancle</button>\r\n                        <button *ngIf=\"!pinChangeSuccessfuly\" type=\"submit\" (click)=\"changePincode()\" class=\"btn btn-outline-success\"\r\n                          style=\"padding: 5px;\">Save\r\n                          Changes\r\n                        </button>\r\n                        <button *ngIf=\"pinChangeSuccessfuly \" type=\"button\" class=\"btn btn-outline-success\" style=\"padding: 5px;\">\r\n                          <i class=\"fa fa-spinner fa-spin\"></i>submitting\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card card-nav-tabs margin-top\" style=\"width: 45%; margin-left: 20px; \">\r\n                  <div>\r\n                    <div class=\"card-header card-header-info float-right\" style=\"width:200px;\">\r\n                      Engineer Details\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\" style=\"padding:15px;\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 col-lg-4 col-sm-4 \">\r\n                        <img *ngIf=\"row.picUrl\" class=\"product-image\" src=\"{{row.picUrl}}\">\r\n                        <img *ngIf=\"!row.picUrl \" class=\"product-image\" src=\"/assets/img/user.png\">\r\n                      </div>\r\n\r\n                      <div class=\"col-md-6 col-lg-6 col-sm-6 col-xs-6\">\r\n                        <div *ngIf=\" row.name \">\r\n                          <i class=\"fa fa-user details-icon\" aria-hidden=\"true\"></i> <b>{{ row.name }}</b>\r\n                        </div>\r\n                        <div *ngIf=\"row.contactNo\">\r\n                          <i class=\"fa fa-phone details-icon\" aria-hidden=\"true\"></i> {{ row.contactNo }}\r\n                        </div>\r\n                        <div *ngIf=\" row.email \">\r\n                          <i class=\"fa fa-envelope details-icon\" aria-hidden=\"true\"></i> {{ row.email}}\r\n                        </div>\r\n                        <div>\r\n                          <i class=\"fa fa-home details-icon\" aria-hidden=\"true\" style=\"font-size: 18px;\"></i>\r\n                          {{row.city}} , {{row.state}} ,\r\n                          {{row.country}}, , {{row.postalCode}}\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                </div>\r\n\r\n\r\n              </div>\r\n\r\n\r\n              <div class=\"card card-nav-tabs margin-top\" style=\"width: 95%; margin-left: 25px;\">\r\n                <div>\r\n                  <div class=\"card-header card-header-info float-right\" style=\"width:150px;\">\r\n                    Product Category\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\">\r\n                  <div class=\"space-between\">\r\n                    <button *ngIf=\"!removeCatShow\" (click)=\"editProductCategory('add')\" class=\" btn btn-primary btn-sm backgroundColor editBtn\"\r\n                      type=\"button\">Add</button>\r\n                    <button *ngIf=\"!addCatShow\" (click)=\"editProductCategory('remove')\" class=\" btn btn-primary btn-sm backgroundColor editBtn\"\r\n                      type=\"button\">Remove</button>\r\n                    <form class=\"form-inline ml-auto\">\r\n                      \r\n                      \r\n                      <div class=\" no-border\">\r\n\r\n                        <input type=\"text\" class=\"form-control\"  name=\"search\" [(ngModel)]=\"searchText\" placeholder=\"search text goes here\">\r\n                      </div>\r\n                      <button type=\"submit\" class=\"btn btn-just-icon btn-round \" style=\"background: purple\">\r\n                        <i class=\"material-icons\">search</i>\r\n                      </button>\r\n                    </form>\r\n                  </div>\r\n                  <div class=\"space-between\">\r\n                    <div class=\"activePin\">Active</div>\r\n                    <div class=\"InactivePin\">Inactive</div>\r\n                  </div>\r\n                  <div class=\"row \" style=\"padding-top: 13px;\">\r\n                    <div *ngIf=\"!addCatShow\" class=\"col-md-6 scroll\">\r\n\r\n                      <ul *ngFor=\"let type of assignedProductType | filterSearch : searchText\">\r\n\r\n                        <li class=\"badge badge-pill badge-primary\" style=\"position: relative;  height: 21px;  width: 200px;\">\r\n                          <p> {{type.name }}\r\n                          </p>\r\n                          <i *ngIf=\"removeCatShow\" (click)=\"removeCategory(type)\" class=\"material-icons iconPosition\">\r\n                            remove_circle\r\n                          </i>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                       <!-- <ul>\r\n                        <li *ngFor=\"let c of typeName | filterSearch : searchText\">\r\n                          {{c}}\r\n                        </li>\r\n                      </ul>  -->\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div *ngIf=\"addCatShow\" class=\"col-md-12\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <label> Select Product Categories <span style=\"color: red;\">*</span>\r\n                            </label>\r\n                            <select class=\"form-control selectHieght\" id=\"changeProSubCat\" required multiple\r\n                              [(ngModel)]=\"selectedProductCategories\" name=\"changeProSubCat\" #changeProSubCat=\"ngModel\"\r\n                              (ngModelChange)=\"onProductTypeIdChange()\">\r\n                              <option *ngFor=\"let product of productCategory\" [ngValue]=\"product\">{{product.name}}</option>\r\n                            </select>\r\n                            <small [hidden]=\"changeProSubCat.valid || changeProSubCat.untouched\" style=\"color: red\">\r\n                              Product Type options is required\r\n                            </small>\r\n\r\n                          </div>\r\n\r\n                        </div>\r\n                        <div *ngIf=\"selectedProductCategoryChildren?.length > 0\" class=\"col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <label> Select Product Sub-Categories <span style=\"color: red;\">*</span>\r\n                            </label>\r\n                            <button *ngIf=\"pinIstrue\" type=\"button\" class=\"buttonload\">\r\n                              <i class=\"fa fa-spinner fa-spin\"></i>\r\n                            </button>\r\n                            <select class=\"form-control selectHieght\" id=\"changeProdType\" required multiple [(ngModel)]=\"ProductCategoryTypeIds\"\r\n                              name=\"changeProdType\" #changeProdType=\"ngModel\">\r\n                              <option *ngFor=\"let product of selectedProductCategoryChildren\" [value]=\"product.id\">{{product.name}}</option>\r\n                            </select>\r\n                            <small [hidden]=\"changeProdType.valid || changeProdType.untouched\" style=\"color: red\">\r\n                              Product Type options is required\r\n                            </small>\r\n                            <button (click)=\"getProdutId()\"> click</button>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"productType?.length > 0\" class=\"col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <label> Select Product Type Ids <span style=\"color: red;\">*</span>\r\n                            </label>\r\n\r\n                            <select class=\"form-control selectHieght\" id=\"changeProdTypeId\" required multiple\r\n                              [(ngModel)]=\"addCategoryTypeId\" name=\"changeProdTypeId\" #changeProdTypeId=\"ngModel\">\r\n                              <option *ngFor=\"let product of productType\" [value]=\"product.id\">{{product.name}}</option>\r\n                            </select>\r\n                            <small [hidden]=\"changeProdTypeId.valid || changeProdTypeId.untouched\" style=\"color: red\">\r\n                              Product Type options is required\r\n                            </small>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n\r\n                  </div>\r\n                  <div *ngIf=\"removeCatShow || addCatShow\" class=\"modal-footer\">\r\n                    <div style=\"margin: auto;\">\r\n                      <button (click)=\"cancleChange(row)\" class=\"btn btn-outline-danger\" style=\"padding: 5px;margin-right: 12px;\">Cancle</button>\r\n                      <button *ngIf=\"!categoryChangeSuccessfuly\" type=\"submit\" (click)=\"changeCategory()\" class=\"btn btn-outline-success\"\r\n                        style=\"padding: 5px;\">Save\r\n                        Changes\r\n                      </button>\r\n                      <button *ngIf=\"categoryChangeSuccessfuly \" type=\"button\" class=\"btn btn-outline-success\" style=\"padding: 5px;\">\r\n                        <i class=\"fa fa-spinner fa-spin\"></i>submitting\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <td colspan=\"9\" style=\"font-size: 70px; text-align: center;\">\r\n              <i *ngIf=\"isDataLoad\" class=\"fa fa-spinner fa-spin mainColor\"></i>\r\n            </td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Service engineer form -->\r\n\r\n<div class=\"modal fade bd-example-modal-lg\" id=\"EngineerFormModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"EngineerFormModal\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content   card \">\r\n      <div class=\"card-header card-header-success card-header-icon\">\r\n        <div class=\"card-icon\">\r\n          <i class=\"material-icons\"> person_add\r\n          </i>\r\n        </div>\r\n        <h3 class=\"card-title\">ADD SERVICE ENGINEER</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <form #engineerForm=\"ngForm\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"name\"> Name <span style=\"color: red;\">*</span>\r\n\r\n                </label>\r\n                <input type=\"text\" required minlength=\"4\" class=\"form-control \" [(ngModel)]=\"engineerDetails.name\" name=\"name\"\r\n                  id=\"name\" #name=\"ngModel\">\r\n                <small [hidden]=\"name.valid || name.untouched\" style=\"color: red\">\r\n                  Name is required\r\n                </small>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Username <span style=\"color: red;\">*</span>\r\n                </label>\r\n                <input type=\"text\" minlength=\"4\" maxlength=\"20\" required [(ngModel)]=\"engineerDetails.username\" name=\"username\"\r\n                  id=\"username\" class=\"form-control \" #username=\"ngModel\">\r\n\r\n                <small [hidden]=\"username.valid || username.untouched\" style=\"color: red\">\r\n                  Username should consist of minimum 6 characters\r\n                </small>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Contact No <span style=\"color: red;\">*</span>\r\n                </label>\r\n                <input type=\"number\" pl required pattern=\".{10,11}\" class=\"form-control \" [(ngModel)]=\"engineerDetails.contactNo\"\r\n                  name=\"contactNo\" id=\"contactNo\" #contactNo=\"ngModel\">\r\n                <small [hidden]=\"contactNo.valid || contactNo.untouched\" style=\"color: red\">\r\n                  Contact No is required\r\n                </small>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Email Id<span style=\"color: red;\">*</span>\r\n                </label>\r\n                <input type=\"email\" required [(ngModel)]=\"engineerDetails.email\" name=\"email\" id=\"email\" class=\"form-control \"\r\n                  #email=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}\">\r\n\r\n                <small [hidden]=\"email.valid || email.untouched\" style=\"color: red\">\r\n                  Email Id is required\r\n                </small>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\" style=\"padding: 9px;\">\r\n              <label>Profile Picture\r\n              </label>\r\n              <input type=\"file\" (change)=\"onSelectFile($event)\" name=\"pic\" id=\"pic\" class=\"form-control \">\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Specialization<span style=\"color: red;\">*</span>\r\n                </label>\r\n                <input type=\"text\" required class=\"form-control  \" [(ngModel)]=\"engineerDetails.specialist\" name=\"specialist\"\r\n                  id=\"specialist\" #specialist=\"ngModel\">\r\n                <small [hidden]=\"specialist.valid || specialist.untouched\" style=\"color: red\">\r\n                  Specialization is required\r\n                </small>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label>Password <span style=\"color: red;\">*</span></label>\r\n                <input type=\"password\" required minlength=\"6\" class=\"form-control  \" [(ngModel)]=\"engineerDetails.password\"\r\n                  name=\"password\" id=\"password\" #password=\"ngModel\">\r\n                <small [hidden]=\"password.valid || password.untouched\" style=\"color: red\">\r\n                  Password should consist of minimum 6 characters\r\n                </small>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label> Select Pin Codes <span style=\"color: red;\">*</span>\r\n                </label>\r\n                <button *ngIf=\"pinIstrue\" type=\"button\" class=\"buttonload\">\r\n                  <i class=\"fa fa-spinner fa-spin\"></i>\r\n                </button>\r\n                <select class=\"form-control selectHieght\" required multiple [(ngModel)]=\"engineerDetails.pincodes\" name=\"pincode\"\r\n                  #pincode=\"ngModel\">\r\n                  <option *ngFor=\"let pin of pins\" [value]=\"pin.pincode\">{{pin.pincode}}</option>\r\n                </select>\r\n                <small [hidden]=\"pincode.valid || pincode.untouched\" style=\"color: red\">\r\n                  Pincode is required\r\n                </small>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label> Select Product Categories <span style=\"color: red;\">*</span>\r\n                </label>\r\n                <button *ngIf=\"pinIstrue\" type=\"button\" class=\"buttonload\">\r\n                  <i class=\"fa fa-spinner fa-spin\"></i>\r\n                </button>\r\n                <select class=\"form-control selectHieght\" id=\"proSubCat\" required multiple [(ngModel)]=\"selectedProductCategories\"\r\n                  name=\"proSubCat\" #proSubCat=\"ngModel\" (ngModelChange)=\"onProductTypeIdChange()\">\r\n                  <option *ngFor=\"let product of productCategory\" [ngValue]=\"product\">{{product.name}}</option>\r\n                </select>\r\n                <small [hidden]=\"proSubCat.valid || proSubCat.untouched\" style=\"color: red\">\r\n                  Product Type options is required\r\n                </small>\r\n\r\n              </div>\r\n\r\n            </div>\r\n            <div *ngIf=\"selectedProductCategoryChildren?.length > 0\" class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label> Select Product Sub-Categories <span style=\"color: red;\">*</span>\r\n                </label>\r\n                <button *ngIf=\"pinIstrue\" type=\"button\" class=\"buttonload\">\r\n                  <i class=\"fa fa-spinner fa-spin\"></i>\r\n                </button>\r\n                <select class=\"form-control selectHieght\" id=\"prodTypeOptions\" required multiple [(ngModel)]=\"ProductCategoryTypeIds\"\r\n                  name=\"prodType\" #prodType=\"ngModel\">\r\n                  <option *ngFor=\"let product of selectedProductCategoryChildren\" [value]=\"product.id\">{{product.name}}</option>\r\n                </select>\r\n                <small [hidden]=\"prodType.valid || prodType.untouched\" style=\"color: red\">\r\n                  Product Type options is required\r\n                </small>\r\n                <div class=\"arrow bounce\">\r\n                  <button class=\"btn btn-primary btn-sm float-right \" (click)=\"getProdutId()\"><i class=\"material-icons\">\r\n                      arrow_forward\r\n                    </i></button>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"productType?.length > 0\" class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label> Select Product Type Ids <span style=\"color: red;\">*</span>\r\n                </label>\r\n\r\n                <select class=\"form-control selectHieght\" id=\"prodTypeId\" required multiple [(ngModel)]=\"engineerDetails.productTypeIds\"\r\n                  name=\"prodTypeId\" #prodTypeId=\"ngModel\">\r\n                  <option *ngFor=\"let product of productType\" [ngValue]=\"product.id\">{{product.name}}</option>\r\n                </select>\r\n                <small [hidden]=\"prodTypeId.valid || prodTypeId.untouched\" style=\"color: red\">\r\n                  Product Type options is required\r\n                </small>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-10\">\r\n              <div class=\"form-group\">\r\n                <label>Address Line <span style=\"color: red;\">*</span>\r\n                </label>\r\n                <input type=\"text\" required class=\"form-control \" [(ngModel)]=\"engineerDetails.address.address\" name=\"addres\"\r\n                  #addres=\"ngModel\">\r\n                <small [hidden]=\"addres.valid || addres.untouched\" style=\"color: red;\">\r\n                  Address Line is required\r\n                </small>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label> City <span style=\"color: red;\">*</span>\r\n                </label>\r\n                <input type=\"text\" required class=\"form-control \" [(ngModel)]=\"engineerDetails.address.city\" name=\"city\"\r\n                  id=\"city\" #city=\"ngModel\">\r\n                <small [hidden]=\"city.valid || city.untouched\" style=\"color: red\">\r\n                  City is required\r\n                </small>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label> State <span style=\"color: red;\">*</span>\r\n                </label>\r\n                <input type=\"text\" required class=\"form-control \" [(ngModel)]=\"engineerDetails.address.state\" name=\"state\"\r\n                  id=\"state\" #state=\"ngModel\">\r\n                <small [hidden]=\"state.valid || state.untouched\" style=\"color: red\">\r\n                  State Name is required\r\n                </small>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Country <span style=\"color: red;\">*</span>\r\n                </label>\r\n                <input type=\"text\" required class=\"form-control \" pl [(ngModel)]=\"engineerDetails.address.country\" name=\"country\"\r\n                  id=\"country\" #country=\"ngModel\">\r\n                <small [hidden]=\"country.valid || country.untouched\" style=\"color: red\">\r\n                  Country Name is required\r\n                </small>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Postel Code <span style=\"color: red;\">*</span>\r\n                </label>\r\n                <input type=\"text\" required class=\"form-control \" [(ngModel)]=\"engineerDetails.address.postalCode\" name=\"postalcode\"\r\n                  id=\"postalcode\" #postalcode=\"ngModel\">\r\n                <small [hidden]=\"postalcode.valid || postalcode.untouched\" style=\"color: red\">\r\n                  Postal code is required\r\n                </small>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Select Address Type <span style=\"color: red;\">*</span>\r\n                </label>\r\n                <select class=\"form-control\" required [(ngModel)]=\"engineerDetails.address.addressType\" name=\"addressType\"\r\n                  #addressType=\"ngModel\" style=\"height: px;\">\r\n                  <option *ngFor=\"let addr of addressTypeOptions\" [value]=\"addr\">{{addr}}</option>\r\n                </select>\r\n                <small [hidden]=\"addressType.valid || addressType.untouched\" style=\"color: red\">\r\n                  Address type is required\r\n                </small>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"button\" *ngIf=\"!loadingButton\" (click)=\"creatEngineer()\" [disabled]=\"!engineerForm.valid\" class=\"btn btn-success\">Submit</button>\r\n          <button type=\"button\" *ngIf=\"loadingButton\" class=\"btn btn-success\">submitting</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Service Engineer form end -->\r\n\r\n\r\n<!-- delete service engineer model start here  -->\r\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModal\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content   card card-stats\">\r\n      <div class=\"card-header card-header-success card-header-icon\">\r\n        <div class=\"card-icon\">\r\n          <i class=\"material-icons\">delete_outline\r\n          </i>\r\n        </div>\r\n        <h3 class=\"card-title\">Delete</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <h3>\"Are you sure you want to delete this Service Engineer?\",\r\n        </h3>\r\n        <div class=\"modal-footer\">\r\n\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancle</button>\r\n          <button type=\"submit\" (click)=\"deleteEngineer()\" class=\"btn btn-success\">Delete</button>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- delete service engineer model end here  -->"

/***/ }),

/***/ "./src/app/Modules/serviceEngineer/service-engineer.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/Modules/serviceEngineer/service-engineer.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-results {\n  height: auto;\n  overflow: scroll; }\n\n.loadingPage {\n  font-size: 100px;\n  padding-top: 150px;\n  color: #851aa1;\n  text-align: center; }\n\n.action-buttons i {\n  position: relative;\n  z-index: 2; }\n\n.action-buttons i:before {\n    position: absolute;\n    content: '';\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    width: 0px;\n    height: 0px;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    border-radius: 50%;\n    background: rgba(0, 0, 0, 0.1);\n    transition: 0.1s; }\n\n.action-buttons i:hover {\n    color: #de2768;\n    cursor: pointer; }\n\n.action-buttons i:hover:before {\n      width: 35px;\n      height: 35px;\n      z-index: 1; }\n\n.new {\n  background: #f1c40f; }\n\n.not-fixed {\n  background: #f44336; }\n\n.fixed {\n  background: #4caf50; }\n\n.scheduled {\n  background: #03a9f4; }\n\n.assigned {\n  background: #3f51b5; }\n\n.rotate {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  transition: 0.5s ease-in-out; }\n\n.re-open {\n  background: #9c27b0; }\n\ntr:hover {\n  cursor: pointer; }\n\ntr:hover .collapse-icon {\n    color: #de2768; }\n\n.incident-details .product-image {\n  width: inherit; }\n\n.incident-details .btn {\n  background: white; }\n\n.assign-form .material-icons {\n  color: #4caf50; }\n\n.incident-detail-box {\n  transition: 0.2s ease-in box-shadow; }\n\n.incident-detail-box:hover {\n    background: white;\n    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1); }\n\n.incident-detail-box .alertred {\n    color: red; }\n\n.selectHieght {\n  height: 61px; }\n\nul#menu li {\n  display: inline; }\n\n.assignPin {\n  display: flex;\n  position: relative; }\n\n.assignPin .editPin {\n    margin-top: 0px;\n    padding-top: 10px;\n    padding-bottom: 10px; }\n\n.assignPin .removePin {\n    left: 37px;\n    position: absolute;\n    top: -12px; }\n\n.margin-top {\n  margin-top: 30px !important; }\n\n.iconPosition {\n  color: #e8e8e8;\n  position: absolute;\n  top: -10px;\n  background: gray;\n  border-radius: 50%;\n  border: 1px solid gray; }\n\n.editBtn {\n  padding-top: 0;\n  padding-left: 18px;\n  padding-right: 18px;\n  padding-bottom: 0;\n  height: 25px;\n  margin-top: 18px; }\n\n.activePin {\n  font-weight: 500;\n  color: gray;\n  padding-left: 57px; }\n\n.InactivePin {\n  font-weight: 500;\n  color: gray;\n  padding-right: 90px; }\n\n.product-image {\n  width: 96px; }\n\n.bounce {\n  -webkit-animation: bounce 2s infinite;\n          animation: bounce 2s infinite; }\n\n@-webkit-keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  40% {\n    -webkit-transform: translateX(-30px);\n            transform: translateX(-30px); }\n  60% {\n    -webkit-transform: translateX(-15px);\n            transform: translateX(-15px); } }\n\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  40% {\n    -webkit-transform: translateX(-30px);\n            transform: translateX(-30px); }\n  60% {\n    -webkit-transform: translateX(-15px);\n            transform: translateX(-15px); } }\n\n@media only screen and (max-width: 1125px) {\n  .InactivePin {\n    padding-right: 47px; } }\n"

/***/ }),

/***/ "./src/app/Modules/serviceEngineer/service-engineer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Modules/serviceEngineer/service-engineer.component.ts ***!
  \***********************************************************************/
/*! exports provided: ServiceEngineerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceEngineerComponent", function() { return ServiceEngineerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_engineer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-engineer.service */ "./src/app/Modules/serviceEngineer/service-engineer.service.ts");
/* harmony import */ var _interface_engineer_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/engineer_details */ "./src/app/interface/engineer_details.ts");
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




var ServiceEngineerComponent = /** @class */ (function () {
    function ServiceEngineerComponent(tostservice, engineerService) {
        this.tostservice = tostservice;
        this.engineerService = engineerService;
        this.editPinShow = false;
        this.addCatShow = false;
        this.removeCatShow = false;
        this.pinChangeSuccessfuly = false;
        this.pinIstrue = true;
        this.loadingButton = false;
        this.categoryChangeSuccessfuly = false;
        this.isDataLoad = true;
        this.productType = [];
        this.assignpincode = [];
        this.editpins = [];
        this.assignedProductType = [];
        this.assignedProductTypeId = [];
        this.addCategoryTypeId = [];
        this.headerRow = ['S.No.', 'Name', 'User Name', 'Email', 'Phone No', 'Specialization', 'Action'];
        this.addressTypeOptions = ['Home', 'Office', 'Permanent'];
        this.engineerDetails = new _interface_engineer_details__WEBPACK_IMPORTED_MODULE_2__["EngineerDetails"];
        //  function trigger when table row click  and store the data related to row
        this.typeName = [];
    }
    ServiceEngineerComponent.prototype.ngOnInit = function () {
        this.getEngineers();
        this.getPincodes();
        this.getProductCategorys();
    };
    // get engineers from server
    ServiceEngineerComponent.prototype.getEngineers = function () {
        var _this = this;
        this.engineerService.getEngineer()
            .subscribe(function (res) {
            _this.dataRows = res;
            _this.isDataLoad = false;
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    // get pincodes from server
    ServiceEngineerComponent.prototype.getPincodes = function () {
        var _this = this;
        this.engineerService.getPincode()
            .subscribe(function (res) {
            _this.pins = res;
            res.forEach(function (element) {
                _this.editpins.push(element.pincode);
                _this.pinIstrue = false;
            });
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    //  get product category from  serve
    ServiceEngineerComponent.prototype.getProductCategorys = function () {
        var _this = this;
        this.engineerService.getProductCategory()
            .subscribe(function (res) {
            _this.productCategory = res;
            _this.selectedProductCategories = res[0];
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    // get product sub category  on the bases of selected product category
    ServiceEngineerComponent.prototype.onProductTypeIdChange = function () {
        var _this = this;
        if (this.selectedProductCategories) {
            this.selectedProductCategoryChildren = [];
            this.selectedProductCategories.forEach(function (product) {
                _this.selectedProductCategoryChildren = _this.selectedProductCategoryChildren.concat(product.childCategory);
            });
        }
    };
    ServiceEngineerComponent.prototype.setId = function (row) {
        var _this = this;
        this.assignpincode = [];
        this.assignedProductTypeId = [];
        this.assignedProductType = [];
        this.selectedProductCategories = [];
        this.selectedProductCategoryChildren = [];
        this.productType = [];
        this.currentRow = row;
        this.addCatShow = false;
        this.removeCatShow = false;
        this.editPinShow = false;
        this.assignedProductType = row.productTypes.slice(0);
        this.assignedProductType.forEach(function (element) {
            _this.assignedProductTypeId.push(element.id);
            _this.typeName.push(element.name);
        });
        this.currentId = row.id;
        this.assignpincode = row.assignPincodes.slice(0);
        this.filterPincode();
    };
    // delete engineer
    ServiceEngineerComponent.prototype.deleteEngineer = function () {
        var _this = this;
        this.engineerService.deleteEngineer(this.currentId)
            .subscribe(function (res) {
            _this.tostservice.showNotificationSuccess("Service Engineer Delete Successfuly");
        }, function (err) {
            _this.tostservice.showNotificationFailure(err);
        });
    };
    // get product type id from server on the bases of selected category or sub category
    ServiceEngineerComponent.prototype.getProdutId = function () {
        var _this = this;
        this.engineerService.getProductTypeIds(this.ProductCategoryTypeIds)
            .subscribe(function (res) {
            _this.productType = res;
            console.log(res);
        });
    };
    //  for  img upload
    ServiceEngineerComponent.prototype.onSelectFile = function (event) {
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
    // creat a new engineer 
    ServiceEngineerComponent.prototype.creatEngineer = function () {
        var _this = this;
        this.loadingButton = true;
        var fd = new FormData();
        for (var key in this.engineerDetails) {
            if (key == "address") {
                for (var key1 in this.engineerDetails.address) {
                    fd.append(key + "." + key1, this.engineerDetails.address[key1]);
                }
            }
            else {
                fd.append(key, this.engineerDetails[key]);
            }
        }
        if (this.imgfile) {
            fd.append("pic", this.imgfile);
        }
        this.engineerService.addEngineer(fd)
            .subscribe(function (res) {
            _this.resetform();
            _this.loadingButton = false;
            _this.closeEngineerFormModal();
            _this.dataRows.unshift(res);
            _this.tostservice.showNotificationSuccess("Service Engineer Creat Successfuly");
        }, function (err) {
            _this.loadingButton = false;
            _this.tostservice.showNotificationFailure(err);
        });
    };
    ////////////////pincode Change start here////////////////
    ServiceEngineerComponent.prototype.showEditPin = function () {
        this.editPinShow = true;
        this.filterPincode();
    };
    ServiceEngineerComponent.prototype.removePincode = function (pin) {
        this.assignpincode = this.assignpincode.filter(function (element) { return element != pin; });
        this.editpins.push(pin);
    };
    ServiceEngineerComponent.prototype.addPin = function (pin) {
        this.editpins = this.editpins.filter(function (element) { return element != pin; });
        this.assignpincode.push(pin);
    };
    ServiceEngineerComponent.prototype.filterPincode = function () {
        var _this = this;
        this.editpins = this.editpins.filter(function (element) { return _this.assignpincode.indexOf(element) == -1; });
    };
    ServiceEngineerComponent.prototype.canclePinchanges = function (row) {
        var _this = this;
        this.assignpincode = [];
        this.assignpincode = row.assignPincodes.slice(0);
        console.log(row);
        this.editpins = [];
        this.pins.forEach(function (element) {
            _this.editpins.push(element.pincode);
        });
        this.filterPincode();
        this.editPinShow = false;
    };
    ServiceEngineerComponent.prototype.changePincode = function () {
        var _this = this;
        this.pinChangeSuccessfuly = true;
        console.log(this.assignpincode);
        this.engineerService.editPincodes({ "pincodes": this.assignpincode, "serviceEngineerId": this.currentId })
            .subscribe(function (res) {
            _this.pinChangeSuccessfuly = false;
            _this.editPinShow = false;
            _this.filterPincode();
            console.log(res);
            _this.tostservice.showNotificationSuccess("change successfuly");
            _this.engineerService.getEngineer()
                .subscribe(function (res) {
                _this.dataRows = res.slice(0);
            }, function (err) {
            });
        }, function (err) {
            _this.pinChangeSuccessfuly = false;
            _this.tostservice.showNotificationFailure(err);
        });
    };
    //////////////pincode change end here/////////////
    //////////product category change start here///////
    ServiceEngineerComponent.prototype.editProductCategory = function (value) {
        this.getProductCategorys();
        if (value === 'add') {
            this.addCatShow = true;
        }
        if (value === 'remove') {
            this.removeCatShow = true;
        }
    };
    ServiceEngineerComponent.prototype.removeCategory = function (type) {
        this.assignedProductType = this.assignedProductType.filter(function (element) { return element.id != type.id; });
        this.assignedProductTypeId = this.assignedProductTypeId.filter(function (element) { return element != type.id; });
    };
    ServiceEngineerComponent.prototype.cancleChange = function () {
        this.setId(this.currentRow);
        this.assignedProductType = this.currentRow.productTypes.slice(0);
        this.addCatShow = false;
        this.removeCatShow = false;
        this.addCategoryTypeId = [];
    };
    ServiceEngineerComponent.prototype.changeCategory = function () {
        var _this = this;
        this.categoryChangeSuccessfuly = true;
        var tempArray;
        tempArray = this.assignedProductTypeId.filter(function (element) { return _this.addCategoryTypeId.indexOf(element) == -1; }).concat(this.addCategoryTypeId);
        console.log(this.assignedProductTypeId);
        console.log(tempArray);
        console.log(this.addCategoryTypeId);
        this.engineerService.editProductCategoryType(tempArray, this.currentId)
            .subscribe(function (res) {
            _this.addCatShow = false;
            _this.removeCatShow = false;
            _this.categoryChangeSuccessfuly = false;
            _this.tostservice.showNotificationSuccess();
            _this.engineerService.getEngineer()
                .subscribe(function (res) {
                _this.dataRows = res.slice(0);
            }, function (err) {
            });
        }, function (err) {
            _this.categoryChangeSuccessfuly = false;
            _this.tostservice.showNotificationFailure(err);
        });
    };
    /////////product categor ends here////////////
    // reset engineer form
    ServiceEngineerComponent.prototype.resetform = function () {
        this.imgfile = null;
        this.engineerDetails = new _interface_engineer_details__WEBPACK_IMPORTED_MODULE_2__["EngineerDetails"]();
    };
    ServiceEngineerComponent.prototype.closeEngineerFormModal = function () {
        $('#EngineerFormModal').modal('hide');
    };
    ServiceEngineerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service-engineer',
            template: __webpack_require__(/*! ./service-engineer.component.html */ "./src/app/Modules/serviceEngineer/service-engineer.component.html"),
            styles: [__webpack_require__(/*! ./service-engineer.component.scss */ "./src/app/Modules/serviceEngineer/service-engineer.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_providers_tost_service__WEBPACK_IMPORTED_MODULE_3__["TostService"],
            _service_engineer_service__WEBPACK_IMPORTED_MODULE_1__["ServiceEngineerService"]])
    ], ServiceEngineerComponent);
    return ServiceEngineerComponent;
}());



/***/ }),

/***/ "./src/app/Modules/serviceEngineer/service-engineer.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/Modules/serviceEngineer/service-engineer.module.ts ***!
  \********************************************************************/
/*! exports provided: ServiceEngineerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceEngineerModule", function() { return ServiceEngineerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_engineer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-engineer.component */ "./src/app/Modules/serviceEngineer/service-engineer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _providers_pipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/pipe.module */ "./src/app/providers/pipe.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ServiceEngineerModule = /** @class */ (function () {
    function ServiceEngineerModule() {
    }
    ServiceEngineerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _providers_pipe_module__WEBPACK_IMPORTED_MODULE_5__["PipeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', component: _service_engineer_component__WEBPACK_IMPORTED_MODULE_2__["ServiceEngineerComponent"], },
                ])
            ],
            declarations: [
                _service_engineer_component__WEBPACK_IMPORTED_MODULE_2__["ServiceEngineerComponent"],
            ]
        })
    ], ServiceEngineerModule);
    return ServiceEngineerModule;
}());



/***/ }),

/***/ "./src/app/Modules/serviceEngineer/service-engineer.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Modules/serviceEngineer/service-engineer.service.ts ***!
  \*********************************************************************/
/*! exports provided: ServiceEngineerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceEngineerService", function() { return ServiceEngineerService; });
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


var ServiceEngineerService = /** @class */ (function () {
    function ServiceEngineerService(customHttp) {
        this.customHttp = customHttp;
    }
    //add engineer
    ServiceEngineerService.prototype.addEngineer = function (fd) {
        return this.customHttp.post("/sa/service-engineer", fd);
    };
    // get pincodes from server
    ServiceEngineerService.prototype.getPincode = function () {
        return this.customHttp.get("/sa/pincode-detail");
    };
    // get product category from server
    ServiceEngineerService.prototype.getProductCategory = function () {
        return this.customHttp.get("/sa/product-category");
    };
    // get product type id from server
    ServiceEngineerService.prototype.getProductTypeIds = function (ids) {
        var idss = ids.join(',');
        return this.customHttp.get("/sa/product-type?categoryIds=" + idss);
    };
    //get service engineer details  from server 
    ServiceEngineerService.prototype.getEngineer = function () {
        return this.customHttp.get("/sa/service-engineer");
    };
    //  delete engineer
    ServiceEngineerService.prototype.deleteEngineer = function (delete_id) {
        return this.customHttp.delete("/sa/service-engineer/" + delete_id);
    };
    // change pincode of engineer
    ServiceEngineerService.prototype.editPincodes = function (fd) {
        return this.customHttp.post("/sa/pincode-service-engineer", fd);
    };
    // change product type id of engineer
    ServiceEngineerService.prototype.editProductCategoryType = function (fd, id) {
        return this.customHttp.post("/sa/product-type-service-engineer", { "productTypeIds": fd, "serviceEngineerId": id });
    };
    ServiceEngineerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_providers_custom_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomHttpService"]])
    ], ServiceEngineerService);
    return ServiceEngineerService;
}());



/***/ }),

/***/ "./src/app/interface/engineer_details.ts":
/*!***********************************************!*\
  !*** ./src/app/interface/engineer_details.ts ***!
  \***********************************************/
/*! exports provided: EngineerDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineerDetails", function() { return EngineerDetails; });
var EngineerDetails = /** @class */ (function () {
    function EngineerDetails() {
        this.userType = "ServiceEngineer";
        this.address = {
            address: "",
            city: "",
            state: "",
            country: "",
            postalCode: "",
            addressType: "",
        };
        this.pincodes = [];
    }
    return EngineerDetails;
}());



/***/ }),

/***/ "./src/app/providers/filter.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/providers/filter.pipe.ts ***!
  \******************************************/
/*! exports provided: FilterSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterSearch", function() { return FilterSearch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterSearch = /** @class */ (function () {
    function FilterSearch() {
    }
    FilterSearch.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        if (items[0].name) {
            return items.filter(function (element) {
                return element.name.toLowerCase().includes(searchText);
            });
        }
        else {
            return items.filter(function (element) {
                return element.toLowerCase().includes(searchText);
            });
        }
    };
    FilterSearch = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterSearch'
        })
    ], FilterSearch);
    return FilterSearch;
}());



/***/ }),

/***/ "./src/app/providers/length.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/providers/length.pipe.ts ***!
  \******************************************/
/*! exports provided: FixedLengthPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedLengthPipe", function() { return FixedLengthPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FixedLengthPipe = /** @class */ (function () {
    function FixedLengthPipe() {
    }
    FixedLengthPipe.prototype.transform = function (value) {
        if (value.length > 15) {
            value = value.substring(0, 15) + "...";
        }
        return value;
    };
    FixedLengthPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'fixedLength'
        })
    ], FixedLengthPipe);
    return FixedLengthPipe;
}());



/***/ }),

/***/ "./src/app/providers/pipe.module.ts":
/*!******************************************!*\
  !*** ./src/app/providers/pipe.module.ts ***!
  \******************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _length_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./length.pipe */ "./src/app/providers/length.pipe.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/providers/filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _length_pipe__WEBPACK_IMPORTED_MODULE_2__["FixedLengthPipe"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterSearch"]
            ],
            exports: [_length_pipe__WEBPACK_IMPORTED_MODULE_2__["FixedLengthPipe"], _filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterSearch"]],
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ })

}]);
//# sourceMappingURL=Modules-serviceEngineer-service-engineer-module.js.map