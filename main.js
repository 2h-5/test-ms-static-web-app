"use strict";
(self["webpackChunkangular_app"] = self["webpackChunkangular_app"] || []).push([["main"],{

/***/ 6954:
/*!************************************!*\
  !*** ./src/app/about.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AboutComponent {
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 13,
    vars: 0,
    consts: [[1, "content-container"], [1, "content-title-group", "not-found"], [1, "title"], ["href", "https://github.com/MicrosoftDocs/mslearn-staticwebapp"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Product Wish List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " This project was created to help represent a fundamental app written with Angular. The shopping theme is used throughout the app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul")(10, "li")(11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Code in GitHub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent),
/* harmony export */   Customer: () => (/* binding */ Customer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_components_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/components/nav.component */ 9990);
/* harmony import */ var _core_components_header_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/components/header-bar.component */ 8502);




class Customer {}
class AppComponent {
  constructor() {
    this.customers = [{
      id: 1,
      name: 'john'
    }];
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 6,
    vars: 0,
    consts: [[1, "section", "columns"], [1, "column", "is-2"], [1, "column"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _core_components_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _core_components_header_bar_component__WEBPACK_IMPORTED_MODULE_1__.HeaderBarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ 4602);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _store_store_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/store.module */ 6771);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ 6954);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _build_specific__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./build-specific */ 2415);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-in-memory-web-api */ 5402);
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./in-memory-data.service */ 9719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_components_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/nav.component */ 9990);
/* harmony import */ var _core_components_header_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/header-bar.component */ 8502);
/* harmony import */ var _core_components_header_bar_brand_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/header-bar-brand.component */ 2651);
/* harmony import */ var _core_components_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/not-found.component */ 7105);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store-devtools */ 448);


















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    providers: [{
      provide: _in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__.InMemoryDataService,
      useExisting: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_11__.InMemoryDbService
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(_router__WEBPACK_IMPORTED_MODULE_0__.routes, {
      useHash: true
    }), _store_store_module__WEBPACK_IMPORTED_MODULE_2__.AppStoreModule, _build_specific__WEBPACK_IMPORTED_MODULE_4__.externalModules, angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_11__.HttpClientInMemoryWebApiModule.forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__.InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, _core_components_nav_component__WEBPACK_IMPORTED_MODULE_6__.NavComponent, _core_components_header_bar_component__WEBPACK_IMPORTED_MODULE_7__.HeaderBarComponent, _core_components_header_bar_brand_component__WEBPACK_IMPORTED_MODULE_8__.HeaderBarBrandComponent, _core_components_not_found_component__WEBPACK_IMPORTED_MODULE_9__.NotFoundComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule,
    // Switch to hash routing
    _store_store_module__WEBPACK_IMPORTED_MODULE_2__.AppStoreModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__.StoreDevtoolsModule, angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_11__.HttpClientInMemoryWebApiModule]
  });
})();

/***/ }),

/***/ 2415:
/*!*****************************************!*\
  !*** ./src/app/build-specific/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   externalModules: () => (/* binding */ externalModules)
/* harmony export */ });
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store-devtools */ 448);

/**
 * Put dev specific code here, and prod specific code in index.prod.ts
 * https://ngrx.io/guide/store-devtools/recipes/exclude
 */
const externalModules = [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_0__.StoreDevtoolsModule.instrument({
  maxAge: 25
})];

/***/ }),

/***/ 2651:
/*!***************************************************************!*\
  !*** ./src/app/core/components/header-bar-brand.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderBarBrandComponent: () => (/* binding */ HeaderBarBrandComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class HeaderBarBrandComponent {
  static #_ = this.ɵfac = function HeaderBarBrandComponent_Factory(t) {
    return new (t || HeaderBarBrandComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderBarBrandComponent,
    selectors: [["app-header-bar-brand"]],
    decls: 10,
    vars: 0,
    consts: [[1, "navbar-brand"], ["href", "https://angular.io/", "target", "_blank", "rel", "noopener noreferrer", 1, "navbar-item"], ["aria-hidden", "true", 1, "fab", "js-logo", "fa-angular", "fa-2x"], ["router-link", "/", 1, "navbar-item", "nav-home"], [1, "brand-first"], [1, "brand-second"], [1, "brand-third"]],
    template: function HeaderBarBrandComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SHOPPING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 8502:
/*!*********************************************************!*\
  !*** ./src/app/core/components/header-bar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderBarComponent: () => (/* binding */ HeaderBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _header_bar_brand_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-bar-brand.component */ 2651);


class HeaderBarComponent {
  static #_ = this.ɵfac = function HeaderBarComponent_Factory(t) {
    return new (t || HeaderBarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HeaderBarComponent,
    selectors: [["app-header-bar"]],
    decls: 3,
    vars: 0,
    consts: [["role", "navigation", "aria-label", "main navigation", 1, "navbar", "has-background-dark", "is-dark"]],
    template: function HeaderBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header")(1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-header-bar-brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_header_bar_brand_component__WEBPACK_IMPORTED_MODULE_0__.HeaderBarBrandComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8763:
/*!******************************************!*\
  !*** ./src/app/core/components/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderBarBrandComponent: () => (/* reexport safe */ _header_bar_brand_component__WEBPACK_IMPORTED_MODULE_1__.HeaderBarBrandComponent),
/* harmony export */   HeaderBarComponent: () => (/* reexport safe */ _header_bar_component__WEBPACK_IMPORTED_MODULE_0__.HeaderBarComponent),
/* harmony export */   NavComponent: () => (/* reexport safe */ _nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent),
/* harmony export */   NotFoundComponent: () => (/* reexport safe */ _not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent),
/* harmony export */   declarations: () => (/* binding */ declarations)
/* harmony export */ });
/* harmony import */ var _header_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-bar.component */ 8502);
/* harmony import */ var _header_bar_brand_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-bar-brand.component */ 2651);
/* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.component */ 9990);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found.component */ 7105);








const declarations = [_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent, _header_bar_component__WEBPACK_IMPORTED_MODULE_0__.HeaderBarComponent, _header_bar_brand_component__WEBPACK_IMPORTED_MODULE_1__.HeaderBarBrandComponent, _not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent];

/***/ }),

/***/ 9990:
/*!**************************************************!*\
  !*** ./src/app/core/components/nav.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavComponent: () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class NavComponent {
  static #_ = this.ɵfac = function NavComponent_Factory(t) {
    return new (t || NavComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavComponent,
    selectors: [["app-nav"]],
    decls: 10,
    vars: 0,
    consts: [[1, "menu"], [1, "menu-label"], [1, "menu-list"], ["routerLink", "/products", "routerLinkActive", "router-link-active"], ["routerLink", "/about", "routerLinkActive", "router-link-active"]],
    template: function NavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2)(4, "a", 3)(5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4)(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7105:
/*!********************************************************!*\
  !*** ./src/app/core/components/not-found.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class NotFoundComponent {
  static #_ = this.ɵfac = function NotFoundComponent_Factory(t) {
    return new (t || NotFoundComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NotFoundComponent,
    selectors: [["app-not-found"]],
    decls: 6,
    vars: 0,
    consts: [[1, "content-container"], [1, "content-title-group", "not-found"], ["aria-hidden", "true", 1, "fas", "fa-exclamation-triangle"], [1, "title"]],
    template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "These aren't the bits you're looking for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 9076:
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderBarBrandComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.HeaderBarBrandComponent),
/* harmony export */   HeaderBarComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.HeaderBarComponent),
/* harmony export */   NavComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.NavComponent),
/* harmony export */   NotFoundComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent),
/* harmony export */   Product: () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_1__.Product),
/* harmony export */   declarations: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.declarations)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 8763);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ 7507);



/***/ }),

/***/ 7507:
/*!*************************************!*\
  !*** ./src/app/core/model/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Product: () => (/* reexport safe */ _product__WEBPACK_IMPORTED_MODULE_0__.Product)
/* harmony export */ });
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ 5135);


/***/ }),

/***/ 5135:
/*!***************************************!*\
  !*** ./src/app/core/model/product.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Product: () => (/* binding */ Product)
/* harmony export */ });
class Product {}

/***/ }),

/***/ 9719:
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InMemoryDataService: () => (/* binding */ InMemoryDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class InMemoryDataService {
  constructor() {
    /** True if in-mem service is intercepting; all requests pass thru when false. */
    this.active = true;
    /** In-memory database data */
    this.db = {};
  }
  /** Create the in-memory database on start or by command */
  createDb(reqInfo) {
    this.db = getDbData();
    if (reqInfo) {
      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
      if (body.clear === true) {
        // tslint:disable-next-line:forin
        for (const coll in this.db) {
          this.db[coll].length = 0;
        }
      }
      this.active = !!body.active;
    }
    return this.db;
  }
  /**
   * Override `parseRequestUrl`
   * Manipulates the request URL or the parsed result.
   * If in-mem is inactive, clear collectionName so that service passes request thru.
   * If in-mem is active, after parsing with the default parser,
   * @param url from request URL
   * @param utils for manipulating parsed URL
   */
  parseRequestUrl(url, utils) {
    const parsed = utils.parseRequestUrl(url);
    parsed.collectionName = this.active ? mapCollectionName(parsed.collectionName) : undefined;
    return parsed;
  }
  static #_ = this.ɵfac = function InMemoryDataService_Factory(t) {
    return new (t || InMemoryDataService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: InMemoryDataService,
    factory: InMemoryDataService.ɵfac
  });
}
/**
 * Remap a known singular collection name ("hero")
 * to the plural collection name ("heroes"); else return the name
 * @param name - collection name from the parsed URL
 */
function mapCollectionName(name) {
  return {
    hero: 'heroes',
    villain: 'villains'
  }[name] || name;
}
/**
 * Development data
 */
function getDbData() {
  const products = [{
    id: 10,
    name: 'Strawberries',
    description: '16oz package of fresh organic strawberries',
    quantity: '1'
  }, {
    id: 20,
    name: 'Sliced bread',
    description: 'Loaf of fresh sliced wheat bread',
    quantity: 1
  }, {
    id: 30,
    name: 'Apples',
    description: 'Bag of 7 fresh McIntosh apples',
    quantity: 1
  }];
  return {
    products
  };
}

/***/ }),

/***/ 4602:
/*!***************************!*\
  !*** ./src/app/router.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ 6954);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ 9076);


const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'products'
}, {
  path: 'products',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_products_products_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./products/products.module */ 4813)).then(m => m.ProductsModule)
}, {
  path: 'about',
  component: _about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
}, {
  path: '**',
  component: _core__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent
}];

/***/ }),

/***/ 6203:
/*!*********************************!*\
  !*** ./src/app/store/config.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultDataServiceConfig: () => (/* binding */ defaultDataServiceConfig)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ 553);

const root = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API || 'api';
const defaultDataServiceConfig = {
  root,
  entityHttpResourceUrls: {
    Product: {
      // You must specify the root as part of the resource URL.
      entityResourceUrl: `${root}/products/`,
      collectionResourceUrl: `${root}/products/`
    }
  }
};

/***/ }),

/***/ 8005:
/*!******************************************!*\
  !*** ./src/app/store/entity-metadata.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   entityConfig: () => (/* binding */ entityConfig)
/* harmony export */ });
const entityMetadata = {
  Product: {}
};
const entityConfig = {
  entityMetadata
};

/***/ }),

/***/ 6771:
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppStoreModule: () => (/* binding */ AppStoreModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/data */ 8147);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ 6203);
/* harmony import */ var _entity_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity-metadata */ 8005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);









class AppStoreModule {
  static #_ = this.ɵfac = function AppStoreModule_Factory(t) {
    return new (t || AppStoreModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppStoreModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    providers: [{
      provide: _ngrx_data__WEBPACK_IMPORTED_MODULE_3__.DefaultDataServiceConfig,
      useValue: _config__WEBPACK_IMPORTED_MODULE_0__.defaultDataServiceConfig
    }],
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreModule.forRoot({}), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsModule.forRoot([]), _ngrx_data__WEBPACK_IMPORTED_MODULE_3__.EntityDataModule.forRoot(_entity_metadata__WEBPACK_IMPORTED_MODULE_1__.entityConfig)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppStoreModule, {
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsRootModule, _ngrx_data__WEBPACK_IMPORTED_MODULE_3__.EntityDataModule]
  });
})();

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  API: 'api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map