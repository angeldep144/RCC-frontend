"use strict";
(self["webpackChunkproject3_frontend"] = self["webpackChunkproject3_frontend"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_admin_new_product_admin_new_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/admin-new-product/admin-new-product.component */ 4644);
/* harmony import */ var _pages_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/admin-page/admin-page.component */ 2480);
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/cart/cart.component */ 6236);
/* harmony import */ var _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/checkout/checkout.component */ 1541);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/main/main.component */ 440);
/* harmony import */ var _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/product-page/product-page.component */ 6768);
/* harmony import */ var _pages_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/receipt/receipt.component */ 3398);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/register/register.component */ 6698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);












const routes = [
    {
        path: "login",
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent
    },
    {
        path: "admin/:id",
        component: _pages_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_1__.AdminPageComponent
    },
    {
        path: "admin-new-product",
        component: _pages_admin_new_product_admin_new_product_component__WEBPACK_IMPORTED_MODULE_0__.AdminNewProductComponent
    },
    {
        path: "product/:productId",
        component: _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__.ProductPageComponent
    },
    {
        path: "cart",
        component: _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__.CartComponent
    },
    {
        path: "checkout",
        component: _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__.CheckoutComponent
    },
    {
        path: "register",
        component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__.RegisterComponent
    },
    {
        path: "receipt/:transactionId",
        component: _pages_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_7__.ReceiptComponent
    },
    {
        path: "**",
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_5__.MainComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    constructor() {
        this.title = 'project3-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["id", "container", 1, "flexColumn"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["#container[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/main/main.component */ 440);
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/cart/cart.component */ 6236);
/* harmony import */ var _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/checkout/checkout.component */ 1541);
/* harmony import */ var _pages_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/receipt/receipt.component */ 3398);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product/product.component */ 3995);
/* harmony import */ var _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/product-page/product-page.component */ 6768);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/register/register.component */ 6698);
/* harmony import */ var _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cart-item/cart-item.component */ 1872);
/* harmony import */ var _pages_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/admin-page/admin-page.component */ 2480);
/* harmony import */ var _pages_admin_new_product_admin_new_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/admin-new-product/admin-new-product.component */ 4644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__.MainComponent,
        _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__.CartComponent,
        _pages_register_register_component__WEBPACK_IMPORTED_MODULE_10__.RegisterComponent,
        _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__.CheckoutComponent,
        _pages_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_6__.ReceiptComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent,
        _components_product_product_component__WEBPACK_IMPORTED_MODULE_8__.ProductComponent,
        _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_9__.ProductPageComponent,
        _pages_register_register_component__WEBPACK_IMPORTED_MODULE_10__.RegisterComponent,
        _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_11__.CartItemComponent,
        _pages_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_12__.AdminPageComponent,
        _pages_admin_new_product_admin_new_product_component__WEBPACK_IMPORTED_MODULE_13__.AdminNewProductComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule] }); })();


/***/ }),

/***/ 1872:
/*!*************************************************************!*\
  !*** ./src/app/components/cart-item/cart-item.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartItemComponent": () => (/* binding */ CartItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);





function CartItemComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 20);
} }
function CartItemComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r1.cartItem.product.price));
} }
function CartItemComponent_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r2.cartItem.product.price));
} }
class CartItemComponent {
    constructor(apiService, dataService) {
        this.apiService = apiService;
        this.dataService = dataService;
        this.cartItem = {};
        this.onQuantityInput = (event) => {
            //todo allow backspacing but when unfocus set to 1 if still blank
            //todo quantityInput should be updated automatically
            event.target.value = Math.min(this.cartItem.product.stock, Math.max(1, event.target.value));
            this.cartItem.quantity = event.target.value;
            this.apiService.updateCartItem(this.cartItem.id, this.cartItem.quantity);
        };
        this.removeFromCart = () => {
            this.apiService.deleteCartItem(this.cartItem.id, (body) => {
                this.dataService.user.cart.splice(this.dataService.user.cart.indexOf(this.cartItem), 1);
                this.dataService.updateUser(this.dataService.user);
            });
        };
    }
    ngOnInit() {
    }
}
CartItemComponent.ɵfac = function CartItemComponent_Factory(t) { return new (t || CartItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService)); };
CartItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CartItemComponent, selectors: [["app-cart-item"]], hostAttrs: [2, "width", "100%"], inputs: { cartItem: "cartItem" }, decls: 34, vars: 15, consts: [["id", "desktop-view", 1, "cartItem", "flex"], [1, "cartItemInfo", "flexLeft", "extraLargeGap"], [1, "productImageContainer", "flex"], [1, "productImage", 3, "src"], ["class", "saleRibbon", "src", "assets/img/saleRibbon.png", 4, "ngIf"], [1, "productInfo", "flexColumnLeft", "smallGap"], [1, "mediumFont"], [1, "flex", "mediumGap"], [1, "largeFont"], ["class", "oldPrice largeFont", 4, "ngIf"], [1, "flex", "largeGap"], ["type", "number", 1, "quantityInput", "foregroundElement", "mediumFont", 3, "ngModel", "ngModelChange", "input"], [1, "mediumFont", 3, "click"], ["id", "mobile-view", 1, "cartItem-mobile", "flex"], ["id", "cartItemInfo-mobile", 1, "cartItemInfo", "flexLeft", "largeGap"], [1, "productImageContainer-mobile", "flex"], [1, "productImage-mobile", 3, "src"], [1, "mobile-view-info"], ["id", "info-mobile", 1, "productInfo", "flexColumnLeft", "smallGap"], ["id", "trash-mobile", 1, "flex", "mediumGap"], ["src", "assets/img/saleRibbon.png", 1, "saleRibbon"], [1, "oldPrice", "largeFont"]], template: function CartItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CartItemComponent_img_4_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CartItemComponent_p_12_Template, 3, 3, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CartItemComponent_Template_input_ngModelChange_14_listener($event) { return ctx.cartItem.quantity = $event; })("input", function CartItemComponent_Template_input_input_14_listener($event) { return ctx.onQuantityInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartItemComponent_Template_a_click_15_listener() { return ctx.removeFromCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\uD83D\uDDD1\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, CartItemComponent_p_29_Template, 3, 3, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CartItemComponent_Template_input_ngModelChange_31_listener($event) { return ctx.cartItem.quantity = $event; })("input", function CartItemComponent_Template_input_input_31_listener($event) { return ctx.onQuantityInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartItemComponent_Template_a_click_32_listener() { return ctx.removeFromCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\uD83D\uDDD1\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.cartItem.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cartItem.product.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.cartItem.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 11, ctx.cartItem.product.salePrice ? ctx.cartItem.product.salePrice : ctx.cartItem.product.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cartItem.product.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.cartItem.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.cartItem.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.cartItem.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 13, ctx.cartItem.product.salePrice ? ctx.cartItem.product.salePrice : ctx.cartItem.product.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cartItem.product.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.cartItem.quantity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe], styles: [".cartItem[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 225px;\r\n\tbackground: var(--theme-color-2);\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n\tjustify-content: space-between;\r\n\tpadding: 15px;\r\n}\r\n\r\n.cartItemInfo[_ngcontent-%COMP%] {\r\n\theight: 100%;\r\n}\r\n\r\n.productImageContainer[_ngcontent-%COMP%] {\r\n\theight: 75%;\r\n\tposition: relative;\r\n\tbackground: rgba(0, 0, 0, .2);\r\n}\r\n\r\n.productImage[_ngcontent-%COMP%] {\r\n\theight: 100%;\r\n\tmax-width: 100%;\r\n\tobject-fit: contain;\r\n}\r\n\r\n.saleRibbon[_ngcontent-%COMP%] {\r\n\ttop: 5px;\r\n\tright: 5px;\r\n\twidth: 40px;\r\n\tposition: absolute;\r\n}\r\n\r\n#cartItemInfo-mobile[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\theight: 100%;\r\n}\r\n\r\n.mobile-view-info[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n}\r\n\r\n.productImage-mobile[_ngcontent-%COMP%]{\r\n\tmax-width: 100%;\r\n\tmax-height: 50%;\r\n\tobject-fit: contain;\r\n}\r\n\r\n.cartItem-mobile[_ngcontent-%COMP%] {\r\n\tbackground: var(--theme-color-2);\r\n\tborder-radius: 4px;\r\n\tpadding: 15px;\r\n}\r\n\r\n#info-mobile[_ngcontent-%COMP%]{\r\n\tmargin-right: 8px;\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n\t#mobile-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t#desktop-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: flex;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n\t#mobile-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: inherit;\r\n\t}\r\n\t\r\n\t#desktop-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: none;\r\n\t}\r\n\t\r\n\t.productImageContainer[_ngcontent-%COMP%] {\r\n\t\twidth: 100%;\r\n\t\theight: 140px;\r\n\t\tposition: relative;\r\n\t\tbackground: rgba(0, 0, 0, .2);\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixnQ0FBZ0M7Q0FDaEMsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQiw4QkFBOEI7Q0FDOUIsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFFBQVE7Q0FDUixVQUFVO0NBQ1YsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0NBQWdDO0NBQ2hDLGtCQUFrQjtDQUNsQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQztFQUNDLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLGFBQWE7Q0FDZDtBQUNEOztBQUVBO0NBQ0M7RUFDQyxnQkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7O0NBRUE7RUFDQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw2QkFBNkI7Q0FDOUI7QUFDRCIsImZpbGUiOiJjYXJ0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0SXRlbSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAyMjVweDtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvci0yKTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0cGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmNhcnRJdGVtSW5mbyB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZHVjdEltYWdlQ29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDc1JTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMik7XHJcbn1cclxuXHJcbi5wcm9kdWN0SW1hZ2Uge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0b2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLnNhbGVSaWJib24ge1xyXG5cdHRvcDogNXB4O1xyXG5cdHJpZ2h0OiA1cHg7XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4jY2FydEl0ZW1JbmZvLW1vYmlsZXtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubW9iaWxlLXZpZXctaW5mb3tcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5wcm9kdWN0SW1hZ2UtbW9iaWxle1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRtYXgtaGVpZ2h0OiA1MCU7XHJcblx0b2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLmNhcnRJdGVtLW1vYmlsZSB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3ItMik7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbiNpbmZvLW1vYmlsZXtcclxuXHRtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjUwcHgpIHtcclxuXHQjbW9iaWxlLXZpZXcge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblxyXG5cdCNkZXNrdG9wLXZpZXcge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcblx0I21vYmlsZS12aWV3IHtcclxuXHRcdGRpc3BsYXk6IGluaGVyaXQ7XHJcblx0fVxyXG5cdFxyXG5cdCNkZXNrdG9wLXZpZXcge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0XHJcblx0LnByb2R1Y3RJbWFnZUNvbnRhaW5lciB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTQwcHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4yKTtcclxuXHR9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function HeaderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\uD83D\uDED2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_6_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.dataService.user.firstName, " ", ctx_r0.dataService.user.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.dataService.user.cart.length);
} }
function HeaderComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(router, apiService, dataService) {
        this.router = router;
        this.apiService = apiService;
        this.dataService = dataService;
        this.darkTheme = false;
        this.logout = () => {
            this.apiService.deleteSession((body) => {
                this.dataService.updateUser({});
            });
        };
        this.setDarkTheme = (enabled) => {
            this.darkTheme = enabled;
            localStorage["darkTheme"] = enabled;
            document.documentElement.style.setProperty("--theme-color-1", this.darkTheme ? "#333" : "#EEE");
            document.documentElement.style.setProperty("--theme-color-2", this.darkTheme ? "rgba(0, 0, 0, .3)" : "rgba(255, 255, 255, .75)");
            document.documentElement.style.setProperty("--theme-color-3", this.darkTheme ? "#444" : "white");
            document.documentElement.style.setProperty("--theme-color-3-outline", this.darkTheme ? "" : "1px solid #DDD");
            document.documentElement.style.setProperty("--theme-color-4", this.darkTheme ? "white" : "black");
        };
    }
    ngOnInit() {
        this.setDarkTheme(localStorage["darkTheme"] === "true");
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 3, consts: [["id", "header", 1, "flexLeft"], ["routerLink", "/", "id", "desktop-view", 1, "extraLargeFont", "flex"], ["routerLink", "/", "id", "mobile-view", 1, "extraLargeFont", "flex"], [1, "flex", "mediumGap"], ["class", "flex largeGap", 4, "ngIf"], [3, "click"], [1, "flex", "largeGap"], ["id", "cart-btn", "routerLink", "/cart", 1, "flex", "smallGap"], ["id", "logout-btn", 3, "click"], ["id", "register-btn", "routerLink", "/register"], ["id", "login-btn", "routerLink", "/login"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Revature Courseware Cornucopia");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "RCC");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HeaderComponent_div_6_Template, 10, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HeaderComponent_div_7_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_8_listener() { return ctx.setDarkTheme(!ctx.darkTheme); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dataService.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.dataService.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.darkTheme ? "\uD83C\uDF19" : "\u2600\uFE0F");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], styles: ["#header[_ngcontent-%COMP%] {\r\n\twidth: 100vw;\r\n\theight: 7.5vh;\r\n\tpadding: 10px 30px;\r\n\tbox-sizing: border-box;\r\n\tbackground: var(--theme-color-2);\r\n\tjustify-content: space-between;\r\n}\r\n\r\n#header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child {\r\n\tfont-family: Mea Culpa;\r\n}\r\n\r\n#header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: var(--theme-color-4);\r\n}\r\n\r\n#cart-btn[_ngcontent-%COMP%] {\r\n\tcursor: pointer;\r\n\toutline: none;\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n\t#mobile-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t#desktop-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: inherit;\r\n\t\tfont-family: Mea Culpa;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n\t#mobile-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: inherit;\r\n\t\tfont-family: Mea Culpa;\r\n\t}\r\n\t\r\n\t#desktop-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: none;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLGdDQUFnQztDQUNoQyw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsYUFBYTtBQUNkOztBQUVBO0NBQ0M7RUFDQyxhQUFhO0NBQ2Q7O0NBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsc0JBQXNCO0NBQ3ZCO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLGdCQUFnQjtFQUNoQixzQkFBc0I7Q0FDdkI7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7QUFDRCIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkZXIge1xyXG5cdHdpZHRoOiAxMDB2dztcclxuXHRoZWlnaHQ6IDcuNXZoO1xyXG5cdHBhZGRpbmc6IDEwcHggMzBweDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yLTIpO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuI2hlYWRlciA+IGE6Zmlyc3QtY2hpbGQge1xyXG5cdGZvbnQtZmFtaWx5OiBNZWEgQ3VscGE7XHJcbn1cclxuXHJcbiNoZWFkZXIgYSB7XHJcblx0Y29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLTQpO1xyXG59XHJcblxyXG4jY2FydC1idG4ge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xyXG5cdCNtb2JpbGUtdmlldyB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHJcblx0I2Rlc2t0b3AtdmlldyB7XHJcblx0XHRkaXNwbGF5OiBpbmhlcml0O1xyXG5cdFx0Zm9udC1mYW1pbHk6IE1lYSBDdWxwYTtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcblx0I21vYmlsZS12aWV3IHtcclxuXHRcdGRpc3BsYXk6IGluaGVyaXQ7XHJcblx0XHRmb250LWZhbWlseTogTWVhIEN1bHBhO1xyXG5cdH1cclxuXHRcclxuXHQjZGVza3RvcC12aWV3IHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG59Il19 */"] });


/***/ }),

/***/ 3995:
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductComponent": () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



const _c0 = function (a0) { return { "grayedOut": a0 }; };
function ProductComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.product.stock < 1));
} }
function ProductComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Out of stock!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.product.price));
} }
class ProductComponent {
    constructor() {
        this.product = {};
    }
    ngOnInit() { }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], inputs: { product: "product" }, decls: 16, vars: 14, consts: [[1, "product", "flexColumn", "mediumGap", 3, "routerLink", "id"], [1, "productImageContainer", "flex"], [1, "productImage", 3, "ngClass", "src"], ["class", "saleRibbon", "src", "assets/img/saleRibbon.png", 3, "ngClass", 4, "ngIf"], ["class", "outOfStockMessage mediumFont errorMessage", 4, "ngIf"], [1, "productInfo", "flexColumn", "smallGap"], [1, "mediumFont"], [1, "flex", "mediumGap"], [1, "largeFont"], ["class", "oldPrice largeFont", 4, "ngIf"], [1, "flex"], [1, "productDescription", "smallFont"], ["src", "assets/img/saleRibbon.png", 1, "saleRibbon", 3, "ngClass"], [1, "outOfStockMessage", "mediumFont", "errorMessage"], [1, "oldPrice", "largeFont"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductComponent_img_3_Template, 1, 3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductComponent_p_4_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductComponent_p_12_Template, 3, 3, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/product/", ctx.product.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "product#", ctx.product.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.product.stock < 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.stock < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, ctx.product.salePrice ? ctx.product.salePrice : ctx.product.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.description);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe], styles: [".product[_ngcontent-%COMP%] {\r\n\twidth: 250px;\r\n\theight: 275px;\r\n\tbackground: var(--theme-color-2);\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n\tcursor: pointer;\r\n\toverflow: hidden;\r\n\toutline: none;\r\n}\r\n\r\n.productImageContainer[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 140px;\r\n\tposition: relative;\r\n\tbackground: rgba(0, 0, 0, .2);\r\n}\r\n\r\n.productImage[_ngcontent-%COMP%] {\r\n\theight: 100%;\r\n\tmax-width: 100%;\r\n\tobject-fit: contain;\r\n}\r\n\r\n.saleRibbon[_ngcontent-%COMP%] {\r\n\ttop: 5px;\r\n\tright: 5px;\r\n\twidth: 40px;\r\n\tposition: absolute;\r\n}\r\n\r\n.grayedOut[_ngcontent-%COMP%] {\r\n\topacity: .2;\r\n}\r\n\r\n.outOfStockMessage[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n}\r\n\r\n.productInfo[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tpadding: 5px;\r\n\tflex-grow: 1;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.productDescription[_ngcontent-%COMP%] {\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-line-clamp: 2;\r\n\t-webkit-box-orient: vertical;\r\n\toverflow-wrap: anywhere;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsZ0NBQWdDO0NBQ2hDLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFFBQVE7Q0FDUixVQUFVO0NBQ1YsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osWUFBWTtDQUNaLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkIsb0JBQW9CO0NBQ3BCLHFCQUFxQjtDQUNyQiw0QkFBNEI7Q0FDNUIsdUJBQXVCO0FBQ3hCIiwiZmlsZSI6InByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0IHtcclxuXHR3aWR0aDogMjUwcHg7XHJcblx0aGVpZ2h0OiAyNzVweDtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvci0yKTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ucHJvZHVjdEltYWdlQ29udGFpbmVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDE0MHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4yKTtcclxufVxyXG5cclxuLnByb2R1Y3RJbWFnZSB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4uc2FsZVJpYmJvbiB7XHJcblx0dG9wOiA1cHg7XHJcblx0cmlnaHQ6IDVweDtcclxuXHR3aWR0aDogNDBweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5ncmF5ZWRPdXQge1xyXG5cdG9wYWNpdHk6IC4yO1xyXG59XHJcblxyXG4ub3V0T2ZTdG9ja01lc3NhZ2Uge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnByb2R1Y3RJbmZvIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0ZmxleC1ncm93OiAxO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5wcm9kdWN0RGVzY3JpcHRpb24ge1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0LXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG5cdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0b3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 4644:
/*!************************************************************************!*\
  !*** ./src/app/pages/admin-new-product/admin-new-product.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminNewProductComponent": () => (/* binding */ AdminNewProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);






function AdminNewProductComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errMessage, "\n");
} }
function AdminNewProductComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 33);
} }
function AdminNewProductComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 34);
} }
function AdminNewProductComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", ctx_r3.newProduct.price, "");
} }
class AdminNewProductComponent {
    constructor(apiService, dataService, activatedRoute, router) {
        this.apiService = apiService;
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.newProduct = {};
        this.product = {};
        this.id = 0;
        this.imgInput = {};
        this.errMessage = '';
        this.onPriceInput = (event) => {
            //todo allow backspacing but when unfocus set to minimum if still blank
            event.target.value = Math.max(event.target.min, event.target.value);
            this.newProduct.price = event.target.value;
        };
        this.onSalePriceInput = (event) => {
            //todo allow backspacing but when unfocus set to minimum if still blank
            event.target.value = Math.max(event.target.min, event.target.value);
            this.newProduct.salePrice = event.target.value;
        };
        this.onStockInput = (event) => {
            //todo allow backspacing but when unfocus set to minimum if still blank
            event.target.value = Math.max(event.target.min, event.target.value);
            this.newProduct.stock = event.target.value;
        };
    }
    ngOnInit() {
        var _a, _b;
        if (((_b = (_a = this.dataService.user) === null || _a === void 0 ? void 0 : _a.role) === null || _b === void 0 ? void 0 : _b.role) != "ADMIN") {
            this.router.navigate(["/"]);
        }
    }
    fileInput(event) {
        this.imgInput = event.target.files;
    }
    createProduct() {
        var formData = new FormData();
        let file = this.imgInput[0];
        if (this.newProduct.salePrice) {
            this.newProduct.salePrice = +this.newProduct.salePrice.toFixed(2);
        }
        if (this.newProduct.price) {
            this.newProduct.price = +this.newProduct.price.toFixed(2);
        }
        else {
            this.newProduct.price = 0.93;
        }
        formData.append("name", this.newProduct.name);
        formData.append("description", this.newProduct.description);
        formData.append("price", JSON.stringify(this.newProduct.price));
        if (this.newProduct.salePrice) {
            formData.append("salePrice", JSON.stringify(this.newProduct.salePrice));
        }
        if (this.newProduct.stock) {
            formData.append("stock", JSON.stringify(this.newProduct.stock));
        }
        formData.append("imageUrl", this.newProduct.imageUrl);
        formData.append("file", file);
        if (this.newProduct.price < this.newProduct.salePrice) {
            this.errMessage = "Sale price cannot be higher than price.";
        }
        if ((this.newProduct.price < 0) || (this.newProduct.salePrice < 0) || (this.newProduct.stock < 0)) {
            this.errMessage = "Values cannot be less than 0.";
        }
        else {
            this.apiService.createNewProduct(formData);
        }
    }
}
AdminNewProductComponent.ɵfac = function AdminNewProductComponent_Factory(t) { return new (t || AdminNewProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AdminNewProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminNewProductComponent, selectors: [["app-admin-new-product"]], decls: 59, vars: 20, consts: [["id", "errMessage", "class", "largeFont", 4, "ngIf"], ["id", "FlexBox"], ["id", "product-preview", 1, "product", "flexColumn", "mediumGap"], [1, "extraLargeFont"], [1, "productImageContainer", "flex"], [1, "productImage", 3, "src"], ["class", "productImage", "src", "../../../assets/img/placeholder.png", 4, "ngIf"], ["class", "saleRibbon", "src", "../../../assets/img/saleRibbon.png", 4, "ngIf"], [1, "productInfo", "flexColumn", "smallGap"], [1, "flex", "smallGap"], [1, "mediumFont"], ["class", "oldPrice mediumFont", 4, "ngIf"], [1, "flex"], [1, "productDescription", "smallFont"], ["id", "new product"], [1, "largeFont"], [1, "product"], ["ngNativeValidate", "", 3, "ngSubmit"], ["type", "file", "name", "productImage", "id", "productImageInput", "name", "productImage", 3, "change"], ["for", "sale-price"], ["type", "text", "id", "productName", "name", "productName", "placeholder", "Name of product", "required", "", 1, "edit", "price-input", 3, "ngModel", "value", "ngModelChange"], ["type", "text", "id", "productDescription", "cols", "40", "maxlength", "255", "name", "productDescription", "placeholder", "Descripton of product here.", "required", "", 1, "edit", "description-input", 3, "ngModel", "value", "ngModelChange"], [1, ""], ["for", "price-input", 1, "usd-sign"], ["type", "number", "id", "productPrice", "min", "0.01", "step", "0.01", "name", "productPrice", "placeholder", "0.00", "required", "required", 1, "edit", "price-input", 3, "value", "ngModel", "ngModelChange"], ["for", "sale-input"], ["for", "sale-input", 1, "usd-sign"], ["type", "number", "id", "salePrice", "min", "0.01", "step", "0.01", "placeholder", "0.00", "name", "productSalePrice", 1, "edit", "sale-input", 3, "max", "value", "ngModel", "ngModelChange"], ["for", "product-inventory"], ["type", "number", "id", "product-inventory", "min", "0", "step", "1", "placeholder", "Inventory in stock", "name", "productStock", 1, "edit", "stock-input", 3, "value", "ngModel", "ngModelChange"], ["id", "btn-container"], ["type", "submit"], ["id", "errMessage", 1, "largeFont"], ["src", "../../../assets/img/placeholder.png", 1, "productImage"], ["src", "../../../assets/img/saleRibbon.png", 1, "saleRibbon"], [1, "oldPrice", "mediumFont"]], template: function AdminNewProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AdminNewProductComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Product Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AdminNewProductComponent_img_7_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AdminNewProductComponent_img_8_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AdminNewProductComponent_p_15_Template, 2, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Create New Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AdminNewProductComponent_Template_form_ngSubmit_26_listener() { return ctx.createProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminNewProductComponent_Template_input_change_27_listener($event) { return ctx.fileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminNewProductComponent_Template_input_ngModelChange_31_listener($event) { return ctx.newProduct.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Product Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminNewProductComponent_Template_textarea_ngModelChange_35_listener($event) { return ctx.newProduct.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Regular Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminNewProductComponent_Template_input_ngModelChange_42_listener($event) { return ctx.newProduct.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Sale Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminNewProductComponent_Template_input_ngModelChange_49_listener($event) { return ctx.newProduct.salePrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Product in Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminNewProductComponent_Template_input_ngModelChange_54_listener($event) { return ctx.newProduct.stock = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Create new product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.product.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.newProduct.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", ctx.newProduct.salePrice ? ctx.newProduct.salePrice : ctx.newProduct.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.newProduct.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.newProduct.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Stock Amount: ", ctx.newProduct.stock, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProduct.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProduct.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.product.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProduct.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("max", ctx.newProduct.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.product.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProduct.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.product.stock);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProduct.stock);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxValidator], styles: [".product[_ngcontent-%COMP%] {\r\n\tmargin-top: 15px;\r\n\tbackground: var(--theme-background-color);\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding-bottom: 0;\r\n}\r\n\r\n.usd-sign[_ngcontent-%COMP%]{\r\n\t\r\n\tpadding: 3px 8px 6px 0px;\r\n\tfont-size: x-large;\r\n}\r\n\r\n.productImageContainer[_ngcontent-%COMP%] {\r\n\tpadding: 10px;\r\n\tposition: relative;\r\n}\r\n\r\n.productImage[_ngcontent-%COMP%] {\r\n\tobject-fit: contain;\r\n\twidth: 100%;\r\n\theight: auto;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.saleRibbon[_ngcontent-%COMP%] {\r\n\ttop: 5px;\r\n\tright: 5px;\r\n\twidth: 40px;\r\n\tposition: absolute;\r\n}\r\n\r\n.productInfo[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tpadding: 5px 5px 5px 5px;\r\n\tflex-grow: 1;\r\n\tbox-sizing: border-box;\r\n\tbackground: var(--theme-color-2);\r\n}\r\n\r\n\r\n\r\n.edit[_ngcontent-%COMP%]{\r\n\tbackground: var(--theme-color-2);\r\n\tcolor: var(--theme-color-4);\r\n}\r\n\r\n#FlexBox[_ngcontent-%COMP%] {\r\n\tmargin-top: 5px;\r\n    display: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: space-around;\r\n}\r\n\r\n#product-preview[_ngcontent-%COMP%] {\r\n\tmargin: 10px;\r\n}\r\n\r\n.product[_ngcontent-%COMP%] {\r\n\tmargin: 10px;\r\n\tpadding: 5px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n.product[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n\tpadding-bottom: 5px;\r\n}\r\n\r\n#errMessage[_ngcontent-%COMP%]{\r\n\tbackground-color: rgb(206, 98, 98);\r\n\tcolor: whitesmoke;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tpadding: 4px;\r\n\tmargin-top: 15px;\r\n}\r\n\r\n#btn-container[_ngcontent-%COMP%]{\r\n\tpadding: 4px;\r\n\tmargin: 4px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLW5ldy1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIseUNBQXlDO0NBQ3pDLHNCQUFzQjtDQUN0QixrQkFBa0I7SUFDZixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTs7Q0FFQyx3QkFBd0I7Q0FDeEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsWUFBWTtDQUNaLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFFBQVE7Q0FDUixVQUFVO0NBQ1YsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCx3QkFBd0I7Q0FDeEIsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixnQ0FBZ0M7QUFDakM7O0FBRUEsa0RBQWtEOztBQUVsRDtDQUNDLGdDQUFnQztDQUNoQywyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxlQUFlO0lBQ1osYUFBYTtDQUNoQixlQUFlO0NBQ2YsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msa0NBQWtDO0NBQ2xDLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLGFBQWE7Q0FDYix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkIiLCJmaWxlIjoiYWRtaW4tbmV3LXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0IHtcclxuXHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWJhY2tncm91bmQtY29sb3IpO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4udXNkLXNpZ257XHJcblx0XHJcblx0cGFkZGluZzogM3B4IDhweCA2cHggMHB4O1xyXG5cdGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuLnByb2R1Y3RJbWFnZUNvbnRhaW5lciB7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9kdWN0SW1hZ2Uge1xyXG5cdG9iamVjdC1maXQ6IGNvbnRhaW47XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnNhbGVSaWJib24ge1xyXG5cdHRvcDogNXB4O1xyXG5cdHJpZ2h0OiA1cHg7XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ucHJvZHVjdEluZm8ge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxuXHRmbGV4LWdyb3c6IDE7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvci0yKTtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tQURNSU4gVEVBTSBBRERJVElPTlMgLS0tLS0tLS0tLS0tICovXHJcblxyXG4uZWRpdHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvci0yKTtcclxuXHRjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItNCk7XHJcbn1cclxuXHJcbiNGbGV4Qm94IHtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuI3Byb2R1Y3QtcHJldmlldyB7XHJcblx0bWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdCB7XHJcblx0bWFyZ2luOiAxMHB4O1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZHVjdCBmb3JtIGxhYmVsIHtcclxuXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4jZXJyTWVzc2FnZXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCA5OCwgOTgpO1xyXG5cdGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0cGFkZGluZzogNHB4O1xyXG5cdG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbiNidG4tY29udGFpbmVye1xyXG5cdHBhZGRpbmc6IDRweDtcclxuXHRtYXJnaW46IDRweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5mb3JtIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmZvcm0gc3BhbiB7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59Il19 */"] });


/***/ }),

/***/ 2480:
/*!**********************************************************!*\
  !*** ./src/app/pages/admin-page/admin-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageComponent": () => (/* binding */ AdminPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);






function AdminPageComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 23);
} }
function AdminPageComponent_img_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 23);
} }
class AdminPageComponent {
    constructor(apiService, dataService, activatedRoute, router) {
        this.apiService = apiService;
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.product = {};
        this.id = 0;
        this.errMessage = '';
        this.imageUrl = '';
        this.newProduct = {};
        this.imgInput = {};
        this.onPriceInput = (event) => {
            //todo allow backspacing but when unfocus set to minimum if still blank
            event.target.value = Math.max(event.target.min, event.target.value);
            this.newProduct.price = event.target.value;
        };
        this.onSalePriceInput = (event) => {
            //todo allow backspacing but when unfocus set to minimum if still blank
            event.target.value = Math.max(event.target.min, event.target.value);
            this.newProduct.salePrice = event.target.value;
        };
        this.onStockInput = (event) => {
            //todo allow backspacing but when unfocus set to minimum if still blank
            event.target.value = Math.max(event.target.min, event.target.value);
            this.newProduct.stock = event.target.value;
        };
    }
    ngOnInit() {
        var _a, _b;
        if (((_b = (_a = this.dataService.user) === null || _a === void 0 ? void 0 : _a.role) === null || _b === void 0 ? void 0 : _b.role) != "ADMIN") {
            this.router.navigate(["/"]);
        }
        this.activatedRoute.params.subscribe(parameters => {
            this.id = parameters['id'];
            this.apiService.getProduct(parseInt(parameters["id"]), (body) => {
                this.product = body.data;
                this.newProduct = body.data;
            });
        });
    }
    fileInput(event) {
        this.imgInput = event.target.files;
    }
    updateProduct() {
        var formData = new FormData();
        let file = this.imgInput[0];
        if (this.newProduct.salePrice) {
            this.newProduct.salePrice = +this.newProduct.salePrice.toFixed(2);
        }
        if (this.newProduct.price < this.newProduct.salePrice) {
            this.errMessage = "Sale price cannot be higher than price.";
        }
        if ((this.newProduct.price < 0) || (this.newProduct.salePrice < 0) || (this.newProduct.stock < 0)) {
            this.errMessage = "Values cannot be less than 0.";
        }
        if (this.newProduct.price) {
            this.newProduct.price = +this.newProduct.price.toFixed(2);
        }
        else {
            this.newProduct.price = 0.93;
        }
        formData.append("name", this.newProduct.name);
        formData.append("description", this.newProduct.description);
        formData.append("price", JSON.stringify(this.newProduct.price));
        if (this.newProduct.salePrice) {
            formData.append("salePrice", JSON.stringify(this.newProduct.salePrice));
        }
        if (this.newProduct.stock) {
            formData.append("stock", JSON.stringify(this.newProduct.stock));
        }
        formData.append("imageUrl", this.newProduct.imageUrl);
        formData.append("file", file);
        formData.append("id", JSON.stringify(this.newProduct.id));
        this.apiService.updateProductItem(formData);
    }
}
AdminPageComponent.ɵfac = function AdminPageComponent_Factory(t) { return new (t || AdminPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AdminPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminPageComponent, selectors: [["app-admin-page"]], decls: 78, vars: 28, consts: [["id", "desktop-view", 1, "product"], [1, "productImageContainer"], [1, "productImage", 3, "src"], ["class", "saleRibbon", "src", "assets/img/saleRibbon.png", 4, "ngIf"], [1, "productInfo", "flexColumn", "smallGap"], [1, "extraLargeFont"], ["ngNativeValidate", "", 3, "ngSubmit"], ["type", "file", "name", "productImage", "id", "productImageInput", "name", "productImage", 1, "edit", 3, "change"], ["for", "sale-price"], ["type", "text", "id", "productName", "name", "productName", "required", "", 1, "edit", "name-input", 3, "ngModel", "value", "ngModelChange"], ["type", "text", "id", "productDescription", "cols", "40", "maxlength", "255", "name", "productDescription", "required", "", 1, "edit", "description-input", 3, "ngModel", "value", "ngModelChange"], ["for", "price-input", 1, "usd-sign"], ["type", "number", "id", "productPrice", "min", "0.01", "step", "0.01", "name", "productPrice", "required", "", 1, "edit", "price-input", 3, "value", "ngModel", "ngModelChange"], ["for", "sale-input"], ["for", "sale-input", 1, "usd-sign"], ["type", "number", "id", "salePrice", "min", "0.01", "step", "0.01", "placeholder", "No current sale", "name", "productSalePrice", 1, "edit", "sale-input", 3, "max", "value", "ngModel", "ngModelChange"], ["for", "product-inventory"], ["type", "number", "id", "product-inventory", "min", "0", "step", "1", "placeholder", "Inventory in stock", "name", "productStock", 1, "edit", "stock-input", 3, "value", "ngModel", "ngModelChange"], ["id", "btn-container"], ["type", "submit", "id", "update-btn"], ["id", "mobile-view", 1, "product"], ["id", "price-container"], ["id", "price-input-container"], ["src", "assets/img/saleRibbon.png", 1, "saleRibbon"]], template: function AdminPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AdminPageComponent_img_3_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AdminPageComponent_Template_form_ngSubmit_7_listener() { return ctx.updateProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminPageComponent_Template_input_change_8_listener($event) { return ctx.fileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminPageComponent_Template_input_ngModelChange_12_listener($event) { return ctx.newProduct.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Product Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminPageComponent_Template_textarea_ngModelChange_16_listener($event) { return ctx.newProduct.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Regular Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminPageComponent_Template_input_ngModelChange_23_listener($event) { return ctx.newProduct.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Sale Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminPageComponent_Template_input_ngModelChange_30_listener($event) { return ctx.newProduct.salePrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Product in Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminPageComponent_Template_input_ngModelChange_34_listener($event) { return ctx.newProduct.stock = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Update product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, AdminPageComponent_img_41_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AdminPageComponent_Template_form_ngSubmit_45_listener() { return ctx.updateProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminPageComponent_Template_input_change_46_listener($event) { return ctx.fileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminPageComponent_Template_input_ngModelChange_50_listener($event) { return ctx.newProduct.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Product Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminPageComponent_Template_textarea_ngModelChange_54_listener($event) { return ctx.newProduct.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminPageComponent_Template_input_ngModelChange_62_listener($event) { return ctx.newProduct.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Sale Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminPageComponent_Template_input_ngModelChange_70_listener($event) { return ctx.newProduct.salePrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Product in Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminPageComponent_Template_input_ngModelChange_74_listener($event) { return ctx.newProduct.stock = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Update product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProduct.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProduct.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.product.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProduct.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("max", ctx.newProduct.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.product.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProduct.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.product.stock);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProduct.stock);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProduct.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProduct.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.product.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProduct.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("max", ctx.newProduct.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.product.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProduct.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.product.stock);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProduct.stock);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxValidator], styles: ["#desktop-view[_ngcontent-%COMP%] {\r\n\tmargin-top: 15px;\r\n\tbackground: var(--theme-background-color);\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n    justify-content: space-between;\r\n    padding-bottom: 0;\r\n}\r\n\r\n#mobile-view[_ngcontent-%COMP%] {\r\n\tmargin-top: 15px;\r\n\tbackground: var(--theme-background-color);\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding-bottom: 0;\r\n}\r\n\r\n#price-input-container[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n#price-container[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\tflex-direction: row;\r\n}\r\n\r\n.usd-sign[_ngcontent-%COMP%]{\r\n\tmargin-left: 8\u00C7px;\r\n\tpadding: 8px 1px 6px 0px;\r\n\t\r\n}\r\n\r\n.productImageContainer[_ngcontent-%COMP%] {\r\n\tpadding: 5px;\r\n\tposition: relative;\r\n\tmax-width: 350px;\r\n\tmax-height: 350px;\r\n}\r\n\r\n.productImage[_ngcontent-%COMP%] {\r\n\tobject-fit: contain;\r\n\twidth: 100%;\r\n\theight: auto;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.saleRibbon[_ngcontent-%COMP%] {\r\n\ttop: 5px;\r\n\tright: 5px;\r\n\twidth: 40px;\r\n\tposition: absolute;\r\n}\r\n\r\n.productInfo[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tpadding: 5px 5px 5px 5px;\r\n\tflex-grow: 1;\r\n\tbox-sizing: border-box;\r\n\toutline: 2px solid var(--theme-color-3-outline);\r\n\tbackground: var(--theme-color-2);\r\n}\r\n\r\n\r\n\r\n.edit[_ngcontent-%COMP%]{\r\n\tbackground: var(--theme-color-2);\r\n\tcolor: var(--theme-color-4);\r\n}\r\n\r\n.price-input[_ngcontent-%COMP%], .sale-input[_ngcontent-%COMP%], .stock-input[_ngcontent-%COMP%] {\r\n\twidth: 8em;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n\tpadding: 2px;\r\n}\r\n\r\n#FlexBox[_ngcontent-%COMP%] {\r\n\tmargin-top: 5px;\r\n    display: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: space-around;\r\n}\r\n\r\n#product-preview[_ngcontent-%COMP%] {\r\n\tmargin: 10px;\r\n}\r\n\r\n.product[_ngcontent-%COMP%] {\r\n\tmargin: 10px;\r\n\tpadding: 5px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n#btn-container[_ngcontent-%COMP%]{\r\n\tpadding: 4px;\r\n\tmargin: 4px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n\r\n.product[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n\tpadding-bottom: 5px;\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n\t#mobile-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t#desktop-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: inherit;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n\t \r\n\t#mobile-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: inherit;\r\n\t}\r\n\t\r\n\t#desktop-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: none;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtDQUNoQix5Q0FBeUM7Q0FDekMsc0JBQXNCO0NBQ3RCLGtCQUFrQjtJQUNmLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIseUNBQXlDO0NBQ3pDLHNCQUFzQjtDQUN0QixrQkFBa0I7SUFDZixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsNkJBQTZCO0NBQzdCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQix3QkFBd0I7O0FBRXpCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsUUFBUTtDQUNSLFVBQVU7Q0FDVixXQUFXO0NBQ1gsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsV0FBVztDQUNYLHdCQUF3QjtDQUN4QixZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLCtDQUErQztDQUMvQyxnQ0FBZ0M7QUFDakM7O0FBRUEsa0RBQWtEOztBQUVsRDtDQUNDLGdDQUFnQztDQUNoQywyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGVBQWU7SUFDWixhQUFhO0NBQ2hCLGVBQWU7Q0FDZiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLGFBQWE7Q0FDYix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLGFBQWE7Q0FDYix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQztFQUNDLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLGdCQUFnQjtDQUNqQjtBQUNEOztBQUVBOztDQUVDO0VBQ0MsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsYUFBYTtDQUNkO0FBQ0QiLCJmaWxlIjoiYWRtaW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Rlc2t0b3AtdmlldyB7XHJcblx0bWFyZ2luLXRvcDogMTVweDtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4jbW9iaWxlLXZpZXcge1xyXG5cdG1hcmdpbi10b3A6IDE1cHg7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tdGhlbWUtYmFja2dyb3VuZC1jb2xvcik7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbiNwcmljZS1pbnB1dC1jb250YWluZXJ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuI3ByaWNlLWNvbnRhaW5lcntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi51c2Qtc2lnbntcclxuXHRtYXJnaW4tbGVmdDogOMOHcHg7XHJcblx0cGFkZGluZzogOHB4IDFweCA2cHggMHB4O1xyXG5cdFxyXG59XHJcblxyXG4ucHJvZHVjdEltYWdlQ29udGFpbmVyIHtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1heC13aWR0aDogMzUwcHg7XHJcblx0bWF4LWhlaWdodDogMzUwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0SW1hZ2Uge1xyXG5cdG9iamVjdC1maXQ6IGNvbnRhaW47XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnNhbGVSaWJib24ge1xyXG5cdHRvcDogNXB4O1xyXG5cdHJpZ2h0OiA1cHg7XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ucHJvZHVjdEluZm8ge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxuXHRmbGV4LWdyb3c6IDE7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRvdXRsaW5lOiAycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3ItMy1vdXRsaW5lKTtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvci0yKTtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tQURNSU4gVEVBTSBBRERJVElPTlMgLS0tLS0tLS0tLS0tICovXHJcblxyXG4uZWRpdHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvci0yKTtcclxuXHRjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItNCk7XHJcbn1cclxuXHJcbi5wcmljZS1pbnB1dCwgLnNhbGUtaW5wdXQsIC5zdG9jay1pbnB1dCB7XHJcblx0d2lkdGg6IDhlbTtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuXHRwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbiNGbGV4Qm94IHtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuI3Byb2R1Y3QtcHJldmlldyB7XHJcblx0bWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdCB7XHJcblx0bWFyZ2luOiAxMHB4O1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jYnRuLWNvbnRhaW5lcntcclxuXHRwYWRkaW5nOiA0cHg7XHJcblx0bWFyZ2luOiA0cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5mb3JtIHNwYW4ge1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnByb2R1Y3QgZm9ybSBsYWJlbCB7XHJcblx0cGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjUwcHgpIHtcclxuXHQjbW9iaWxlLXZpZXcge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblxyXG5cdCNkZXNrdG9wLXZpZXcge1xyXG5cdFx0ZGlzcGxheTogaW5oZXJpdDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcblx0IFxyXG5cdCNtb2JpbGUtdmlldyB7XHJcblx0XHRkaXNwbGF5OiBpbmhlcml0O1xyXG5cdH1cclxuXHRcclxuXHQjZGVza3RvcC12aWV3IHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG59Il19 */"] });


/***/ }),

/***/ 6236:
/*!**********************************************!*\
  !*** ./src/app/pages/cart/cart.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/cart-item/cart-item.component */ 1872);






function CartComponent_app_cart_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-cart-item", 12);
} if (rf & 2) {
    const cartItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cartItem", cartItem_r6);
} }
function CartComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Sales:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx_r1.dataService.cartSales), "");
} }
function CartComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CartComponent_app_cart_item_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-cart-item", 12);
} if (rf & 2) {
    const cartItem_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cartItem", cartItem_r7);
} }
function CartComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Sales:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx_r4.dataService.cartSales), "");
} }
function CartComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor(dataService, apiService, router) {
        this.dataService = dataService;
        this.apiService = apiService;
        this.router = router;
    }
    ngDoCheck() {
        this.dataService.updateCartTotals();
    }
    ngOnInit() {
        if (this.dataService.user.username === undefined) {
            this.router.navigate(["/"]);
            return;
        }
        this.apiService.getCartItems((body) => {
            this.dataService.user.cart = body.data;
            this.dataService.updateCartTotals();
            //todo refactor
            this.dataService.updateUser(this.dataService.user);
        });
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
CartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], hostAttrs: [1, "page", "flexColumnTop", "extraLargeGap"], decls: 40, vars: 18, consts: [["id", "desktop-view", 1, "flexTop", "largeGap"], ["id", "cartItems", 1, "flexColumnTop", "mediumGap"], [3, "cartItem", 4, "ngFor", "ngForOf"], ["id", "cartTotals", 1, "flexColumnTop", "mediumGap"], [1, "fullWidth", "flex", "smallGap"], [1, "mediumFont"], ["class", "fullWidth flex smallGap", 4, "ngIf"], ["class", "cartControls fullWidth", 4, "ngIf"], ["routerLink", "/", 1, "foregroundElement", "fullWidth", "mediumFont"], ["id", "mobile-view", 1, "flexTop", "largeGap"], ["id", "cartItems-mobile", 1, "flexColumnTop", "mediumGap"], ["id", "cartTotals-mobile", 1, "flexColumnTop", "mediumGap"], [3, "cartItem"], [1, "cartControls", "fullWidth"], ["type", "button", "routerLink", "/checkout", 1, "cartButton", "fullWidth", "mediumFont"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CartComponent_app_cart_item_2_Template, 1, 1, "app-cart-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Subtotal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CartComponent_div_10_Template, 6, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CartComponent_div_17_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Continue Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, CartComponent_app_cart_item_22_Template, 1, 1, "app-cart-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Subtotal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, CartComponent_div_30_Template, 6, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, CartComponent_div_37_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Continue Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.dataService.user.cart);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 10, ctx.dataService.cartSubtotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dataService.cartSales > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 12, ctx.dataService.cartTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dataService.user.cart.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.dataService.user.cart);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 14, ctx.dataService.cartSubtotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dataService.cartSales > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 16, ctx.dataService.cartTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dataService.user.cart.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_2__.CartItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe], styles: ["#cartItems[_ngcontent-%COMP%] {\r\n\twidth: 700px;\r\n\theight: 80%;\r\n}\r\n\r\n#cartTotals[_ngcontent-%COMP%] {\r\n\twidth: 300px;\r\n\tpadding: 15px;\r\n\tbackground: var(--theme-color-2);\r\n\tborder-radius: 4px;\r\n}\r\n\r\n#cartTotals[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n\tjustify-content: space-between;\r\n}\r\n\r\n#mobile-view[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n#cartTotals-mobile[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\tpadding: 15px;\r\n\tbackground: var(--theme-color-2);\r\n\tborder-radius: 4px;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n\t#mobile-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t#desktop-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: inherit;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n\t \r\n\t#mobile-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: inherit;\r\n\t}\r\n\t\r\n\t#desktop-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: none;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGdDQUFnQztDQUNoQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixnQ0FBZ0M7Q0FDaEMsa0JBQWtCO0NBQ2xCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDO0VBQ0MsYUFBYTtDQUNkOztDQUVBO0VBQ0MsZ0JBQWdCO0NBQ2pCO0FBQ0Q7O0FBRUE7O0NBRUM7RUFDQyxnQkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7QUFDRCIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2FydEl0ZW1zIHtcclxuXHR3aWR0aDogNzAwcHg7XHJcblx0aGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbiNjYXJ0VG90YWxzIHtcclxuXHR3aWR0aDogMzAwcHg7XHJcblx0cGFkZGluZzogMTVweDtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvci0yKTtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbiNjYXJ0VG90YWxzID4gZGl2IHtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiNtb2JpbGUtdmlld3tcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiNjYXJ0VG90YWxzLW1vYmlsZXtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiAxNXB4O1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yLTIpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xyXG5cdCNtb2JpbGUtdmlldyB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHJcblx0I2Rlc2t0b3AtdmlldyB7XHJcblx0XHRkaXNwbGF5OiBpbmhlcml0O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuXHQgXHJcblx0I21vYmlsZS12aWV3IHtcclxuXHRcdGRpc3BsYXk6IGluaGVyaXQ7XHJcblx0fVxyXG5cdFxyXG5cdCNkZXNrdG9wLXZpZXcge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 1541:
/*!******************************************************!*\
  !*** ./src/app/pages/checkout/checkout.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutComponent": () => (/* binding */ CheckoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






function CheckoutComponent_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](state_r2.name);
} }
function CheckoutComponent_div_43_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](state_r4.name);
} }
function CheckoutComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Billing Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, CheckoutComponent_div_43_option_33_Template, 2, 1, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "ZIP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.states);
} }
class CheckoutComponent {
    constructor(dataService, apiService, router) {
        this.dataService = dataService;
        this.apiService = apiService;
        this.router = router;
        this.hideBillingAddress = false;
        this.states = [
            {
                "name": "Alabama",
                "abbreviation": "AL"
            },
            {
                "name": "Alaska",
                "abbreviation": "AK"
            },
            {
                "name": "American Samoa",
                "abbreviation": "AS"
            },
            {
                "name": "Arizona",
                "abbreviation": "AZ"
            },
            {
                "name": "Arkansas",
                "abbreviation": "AR"
            },
            {
                "name": "California",
                "abbreviation": "CA"
            },
            {
                "name": "Colorado",
                "abbreviation": "CO"
            },
            {
                "name": "Connecticut",
                "abbreviation": "CT"
            },
            {
                "name": "Delaware",
                "abbreviation": "DE"
            },
            {
                "name": "District Of Columbia",
                "abbreviation": "DC"
            },
            {
                "name": "Federated States Of Micronesia",
                "abbreviation": "FM"
            },
            {
                "name": "Florida",
                "abbreviation": "FL"
            },
            {
                "name": "Georgia",
                "abbreviation": "GA"
            },
            {
                "name": "Guam",
                "abbreviation": "GU"
            },
            {
                "name": "Hawaii",
                "abbreviation": "HI"
            },
            {
                "name": "Idaho",
                "abbreviation": "ID"
            },
            {
                "name": "Illinois",
                "abbreviation": "IL"
            },
            {
                "name": "Indiana",
                "abbreviation": "IN"
            },
            {
                "name": "Iowa",
                "abbreviation": "IA"
            },
            {
                "name": "Kansas",
                "abbreviation": "KS"
            },
            {
                "name": "Kentucky",
                "abbreviation": "KY"
            },
            {
                "name": "Louisiana",
                "abbreviation": "LA"
            },
            {
                "name": "Maine",
                "abbreviation": "ME"
            },
            {
                "name": "Marshall Islands",
                "abbreviation": "MH"
            },
            {
                "name": "Maryland",
                "abbreviation": "MD"
            },
            {
                "name": "Massachusetts",
                "abbreviation": "MA"
            },
            {
                "name": "Michigan",
                "abbreviation": "MI"
            },
            {
                "name": "Minnesota",
                "abbreviation": "MN"
            },
            {
                "name": "Mississippi",
                "abbreviation": "MS"
            },
            {
                "name": "Missouri",
                "abbreviation": "MO"
            },
            {
                "name": "Montana",
                "abbreviation": "MT"
            },
            {
                "name": "Nebraska",
                "abbreviation": "NE"
            },
            {
                "name": "Nevada",
                "abbreviation": "NV"
            },
            {
                "name": "New Hampshire",
                "abbreviation": "NH"
            },
            {
                "name": "New Jersey",
                "abbreviation": "NJ"
            },
            {
                "name": "New Mexico",
                "abbreviation": "NM"
            },
            {
                "name": "New York",
                "abbreviation": "NY"
            },
            {
                "name": "North Carolina",
                "abbreviation": "NC"
            },
            {
                "name": "North Dakota",
                "abbreviation": "ND"
            },
            {
                "name": "Northern Mariana Islands",
                "abbreviation": "MP"
            },
            {
                "name": "Ohio",
                "abbreviation": "OH"
            },
            {
                "name": "Oklahoma",
                "abbreviation": "OK"
            },
            {
                "name": "Oregon",
                "abbreviation": "OR"
            },
            {
                "name": "Palau",
                "abbreviation": "PW"
            },
            {
                "name": "Pennsylvania",
                "abbreviation": "PA"
            },
            {
                "name": "Puerto Rico",
                "abbreviation": "PR"
            },
            {
                "name": "Rhode Island",
                "abbreviation": "RI"
            },
            {
                "name": "South Carolina",
                "abbreviation": "SC"
            },
            {
                "name": "South Dakota",
                "abbreviation": "SD"
            },
            {
                "name": "Tennessee",
                "abbreviation": "TN"
            },
            {
                "name": "Texas",
                "abbreviation": "TX"
            },
            {
                "name": "Utah",
                "abbreviation": "UT"
            },
            {
                "name": "Vermont",
                "abbreviation": "VT"
            },
            {
                "name": "Virgin Islands",
                "abbreviation": "VI"
            },
            {
                "name": "Virginia",
                "abbreviation": "VA"
            },
            {
                "name": "Washington",
                "abbreviation": "WA"
            },
            {
                "name": "West Virginia",
                "abbreviation": "WV"
            },
            {
                "name": "Wisconsin",
                "abbreviation": "WI"
            },
            {
                "name": "Wyoming",
                "abbreviation": "WY"
            }
        ];
        this.checkout = () => {
            if (this.dataService.user.cart.length > 0) {
                this.apiService.createTransaction((body) => {
                    this.dataService.user.cart = [];
                    this.dataService.updateUser(this.dataService.user);
                    this.router.navigate(["/receipt/" + body.data.id]);
                });
            }
        };
    }
    ngOnInit() {
        if (this.dataService.user.username === undefined || this.dataService.user.cart.length < 1) {
            this.router.navigate(["/"]);
            return;
        }
        this.dataService.updateCartTotals();
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
CheckoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], hostAttrs: [1, "page", "flexColumnTop", "extraLargeGap"], decls: 86, vars: 6, consts: [[1, "extraLargeFont"], [1, "formContainer", "flexColumn", "largeGap"], [1, "largeFont"], [1, "fullWidth", "flexColumnLeft", "largeGap"], [1, "fullWidth", "flexColumnLeft", "smallGap"], [1, "mediumFont"], ["type", "email", 1, "fullWidth", "foregroundElement", "mediumFont"], [1, "fullWidth", "flex", "smallGap"], [1, "fullWidth", "foregroundElement", "mediumFont"], ["placeholder", "1234 Main St", 1, "fullWidth", "foregroundElement", "mediumFont"], ["placeholder", "Apartment, studio, or floor", 1, "fullWidth", "foregroundElement", "mediumFont"], [1, "flex", "smallGap"], ["class", "mediumFont", 4, "ngFor", "ngForOf"], [1, "flexLeft", "smallGap"], ["type", "checkbox", 1, "mediumFont", "foregroundElement", 3, "ngModel", "ngModelChange"], ["class", "formContainer flexColumn largeGap", 4, "ngIf"], ["type", "tel", "inputmode", "numeric", "pattern", "[0-9\\s]{13,19}", "autocomplete", "cc-number", "maxlength", "19", "placeholder", "xxxx xxxx xxxx xxxx", 1, "fullWidth", "foregroundElement", "mediumFont"], ["placeholder", "MM", "type", "tel", "inputmode", "numeric", 1, "fullWidth", "foregroundElement", "mediumFont"], ["placeholder", "YY", "type", "tel", "inputmode", "numeric", 1, "fullWidth", "foregroundElement", "mediumFont"], ["type", "tel", "inputmode", "numeric", 1, "fullWidth", "foregroundElement", "mediumFont"], [1, "formContainer", "largeGap"], ["id", "totalCost", 1, "mediumFont"], [1, "cartControls"], ["type", "button", 1, "cartButton", "fullWidth", "mediumFont", 3, "click"], [1, "flexColumn", "largeGap"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Shipping Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, CheckoutComponent_option_34_Template, 2, 1, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "ZIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_40_listener($event) { return ctx.hideBillingAddress = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Use shipping address as billing address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, CheckoutComponent_div_43_Template, 38, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Card Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Expiration Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "CVV");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "ZIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](82, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutComponent_Template_button_click_84_listener() { return ctx.checkout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Confirm Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.hideBillingAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideBillingAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](82, 4, ctx.dataService.cartTotal));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 4902:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);






function LoginComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class LoginComponent {
    constructor(apiServ, dataService) {
        this.apiServ = apiServ;
        this.dataService = dataService;
        this.identifierInput = "";
        this.passwordInput = "";
        this.errorMessage = "";
        this.onKeyDown = (event) => {
            if (event.key === "Enter") {
                this.login();
            }
        };
        this.login = () => {
            this.apiServ.createSession(this.identifierInput, this.passwordInput, (body) => {
                this.dataService.updateUser(body.data);
            }, (body) => {
                this.errorMessage = body.message;
            });
        };
    }
    ngOnInit() { }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], hostAttrs: [1, "page", "flexColumnTop", "extraLargeGap"], decls: 16, vars: 3, consts: [[1, "formContainer", "flexColumn", "largeGap"], [1, "extraLargeFont"], [1, "flexColumnLeft", "mediumGap"], [1, "mediumFont"], ["id", "username", 1, "foregroundElement", "mediumFont", 3, "ngModel", "ngModelChange", "keydown"], ["id", "password", "type", "password", 1, "foregroundElement", "mediumFont", 3, "ngModel", "ngModelChange", "keydown"], ["class", "mediumFont errorMessage", "id", "errorMessage", 4, "ngIf"], ["id", "login-form-btn", 1, "foregroundElement", "mediumFont", 3, "click"], ["routerLink", "/register", "id", "register-form-btn", 1, "mediumFont"], ["id", "errorMessage", 1, "mediumFont", "errorMessage"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) { return ctx.identifierInput = $event; })("keydown", function LoginComponent_Template_input_keydown_6_listener($event) { return ctx.onKeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.passwordInput = $event; })("keydown", function LoginComponent_Template_input_keydown_10_listener($event) { return ctx.onKeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, LoginComponent_p_11_Template, 2, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.identifierInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.passwordInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 440:
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/product/product.component */ 3995);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);







function MainComponent_app_product_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-product", 9);
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("product", product_r2);
} }
function MainComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Add New Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class MainComponent {
    constructor(dataService, apiService) {
        this.dataService = dataService;
        this.apiService = apiService;
        this.productsPerPage = 20;
        this.searchQuery = "";
        this.currentPage = 0;
        this.lastPage = false;
        this.onKeyDown = (event) => {
            if (event.key === "Enter") {
                this.search();
            }
        };
        this.search = () => {
            this.currentPage = 0;
            this.dataService.products = [];
            this.getProducts();
        };
        this.getProducts = () => {
            this.apiService.getProducts(this.searchQuery, this.currentPage, (body) => {
                if (body.data.length < this.productsPerPage) {
                    this.lastPage = true;
                }
                this.dataService.products = this.dataService.products.concat(body.data);
            });
        };
        this.onScroll = (event) => {
            if (this.lastPage) {
                //don't try to get more products if we have already loaded the last page
                return;
            }
            const element = event.target;
            //if we are scrolled to the bottom
            if (element.scrollHeight - element.offsetHeight === element.scrollTop) {
                this.currentPage += 1;
                this.getProducts();
            }
        };
    }
    ngOnInit() {
        this.dataService.products = [];
        this.getProducts();
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], hostAttrs: [1, "page", "flexColumnTop", "extraLargeGap"], hostBindings: function MainComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function MainComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, decls: 12, vars: 4, consts: [["id", "search", 1, "flex", "smallGap", "desktop-view"], ["id", "searchInput", "placeholder", "Search...", 1, "mediumFont", "desktop-view", 3, "ngModel", "ngModelChange", "keydown"], ["id", "searchButton", 1, "mediumFont", "desktop-view", 3, "click"], ["id", "search-mobile", 1, "flex", "smallGap", "mobile-view"], ["id", "searchInput", "placeholder", "Search...", 1, "mediumFont", "mobile-view", 3, "ngModel", "ngModelChange", "keydown"], ["id", "searchButton", 1, "mediumFont", "mobile-view", 3, "click"], ["id", "products", 1, "flex", "mediumGap"], [3, "product", 4, "ngFor", "ngForOf"], ["routerLink", "admin-new-product", "id", "new-product", 4, "ngIf"], [3, "product"], ["routerLink", "admin-new-product", "id", "new-product"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_1_listener($event) { return ctx.searchQuery = $event; })("keydown", function MainComponent_Template_input_keydown_1_listener($event) { return ctx.onKeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_Template_button_click_2_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchQuery = $event; })("keydown", function MainComponent_Template_input_keydown_5_listener($event) { return ctx.onKeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_Template_button_click_6_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MainComponent_app_product_9_Template, 1, 1, "app-product", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, MainComponent_button_11_Template, 2, 0, "button", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchQuery);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchQuery);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.dataService.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.dataService.user == null ? null : ctx.dataService.user.role == null ? null : ctx.dataService.user.role.role) == "ADMIN");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _components_product_product_component__WEBPACK_IMPORTED_MODULE_2__.ProductComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink], styles: ["#search[_ngcontent-%COMP%] {\r\n\twidth: 670px;\r\n}\r\n\r\n#searchInput[_ngcontent-%COMP%] {\r\n\tflex-grow: 1;\r\n\tbackground: var(--theme-color-2);\r\n}\r\n\r\n#searchInput-mobile[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\tbackground: var(--theme-color-2);\r\n}\r\n\r\n#searchButton[_ngcontent-%COMP%] {\r\n\theight: 100%;\r\n\tbackground: var(--theme-color-2);\r\n}\r\n\r\n#products[_ngcontent-%COMP%] {\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n#new-product[_ngcontent-%COMP%] {\r\n\tposition: fixed;\r\n\tbottom: 5%;\r\n\tright: 5%;\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n\t.mobile-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.desktop-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: inherit;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n\t \r\n\t.mobile-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: inherit;\r\n\t}\r\n\t\r\n\t.desktop-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: none;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsVUFBVTtDQUNWLFNBQVM7QUFDVjs7QUFFQTtDQUNDO0VBQ0MsYUFBYTtDQUNkOztDQUVBO0VBQ0MsZ0JBQWdCO0NBQ2pCO0FBQ0Q7O0FBRUE7O0NBRUM7RUFDQyxnQkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7QUFDRCIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoIHtcclxuXHR3aWR0aDogNjcwcHg7XHJcbn1cclxuXHJcbiNzZWFyY2hJbnB1dCB7XHJcblx0ZmxleC1ncm93OiAxO1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yLTIpO1xyXG59XHJcblxyXG4jc2VhcmNoSW5wdXQtbW9iaWxle1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yLTIpO1xyXG59XHJcblxyXG4jc2VhcmNoQnV0dG9uIHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3ItMik7XHJcbn1cclxuXHJcbiNwcm9kdWN0cyB7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4jbmV3LXByb2R1Y3Qge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRib3R0b206IDUlO1xyXG5cdHJpZ2h0OiA1JTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjUwcHgpIHtcclxuXHQubW9iaWxlLXZpZXcge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblxyXG5cdC5kZXNrdG9wLXZpZXcge1xyXG5cdFx0ZGlzcGxheTogaW5oZXJpdDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcblx0IFxyXG5cdC5tb2JpbGUtdmlldyB7XHJcblx0XHRkaXNwbGF5OiBpbmhlcml0O1xyXG5cdH1cclxuXHRcclxuXHQuZGVza3RvcC12aWV3IHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG59Il19 */"] });


/***/ }),

/***/ 6768:
/*!**************************************************************!*\
  !*** ./src/app/pages/product-page/product-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageComponent": () => (/* binding */ ProductPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);






function ProductPageComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 19);
} }
function ProductPageComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r1.product.price));
} }
function ProductPageComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("In Stock: ", ctx_r2.product.stock, "");
} }
function ProductPageComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Out of stock!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductPageComponent_ng_template_17_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductPageComponent_ng_template_17_div_0_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r14.quantityInput = $event; })("input", function ProductPageComponent_ng_template_17_div_0_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r16.onQuantityInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductPageComponent_ng_template_17_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.addToCart(ctx_r17.quantityInput); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r12.quantityInput);
} }
function ProductPageComponent_ng_template_17_div_1_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Added to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductPageComponent_ng_template_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Go to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProductPageComponent_ng_template_17_div_1_p_3_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.cartMessage);
} }
function ProductPageComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductPageComponent_ng_template_17_div_0_Template, 4, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductPageComponent_ng_template_17_div_1_Template, 4, 1, "div", 24);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.inCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.inCart);
} }
function ProductPageComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductPageComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.editProduct(ctx_r19.product.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Edit Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductPageComponent_img_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 33);
} }
function ProductPageComponent_p_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r7.product.price));
} }
function ProductPageComponent_p_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("In Stock: ", ctx_r8.product.stock, "");
} }
function ProductPageComponent_p_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Out of stock!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductPageComponent_ng_template_38_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductPageComponent_ng_template_38_div_0_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r23.quantityInput = $event; })("input", function ProductPageComponent_ng_template_38_div_0_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r25.onQuantityInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductPageComponent_ng_template_38_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r26.addToCart(ctx_r26.quantityInput); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.quantityInput);
} }
function ProductPageComponent_ng_template_38_div_1_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Added to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductPageComponent_ng_template_38_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Go to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProductPageComponent_ng_template_38_div_1_p_3_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r22.cartMessage);
} }
function ProductPageComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductPageComponent_ng_template_38_div_0_Template, 4, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductPageComponent_ng_template_38_div_1_Template, 4, 1, "div", 24);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r10.inCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.inCart);
} }
function ProductPageComponent_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductPageComponent_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.editProduct(ctx_r28.product.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Edit Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ProductPageComponent {
    constructor(activatedRoute, apiService, dataService, router) {
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.dataService = dataService;
        this.router = router;
        this.product = {};
        this.quantityInput = 1;
        this.cartMessage = false;
        this.inCart = false;
        this.onQuantityInput = (event) => {
            //todo allow backspacing but when unfocus set to 1 if still blank
            //todo quantityInput should be updated automatically
            event.target.value = Math.min(this.product.stock, Math.max(1, event.target.value));
            this.quantityInput = event.target.value;
        };
        this.addToCart = (quantityInput) => {
            this.inCart = true;
            this.apiService.createCartItem(this.product.id, this.quantityInput, () => {
                this.dataService.user.cart.push({
                    product: {
                        id: this.product.id
                    },
                    quantity: this.quantityInput
                });
                //todo refactor
                this.dataService.updateUser(this.dataService.user);
                this.cartMessage = true;
                setTimeout(() => {
                    this.cartMessage = false;
                }, 3000);
            });
        };
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(paramaters => {
            this.apiService.getProduct(parseInt(paramaters["productId"]), (body) => {
                this.product = body.data;
                if (this.dataService.user.username) {
                    for (let i = 0; i < this.dataService.user.cart.length; i++) {
                        if (this.product.id === this.dataService.user.cart[i].product.id) {
                            this.inCart = true;
                            break;
                        }
                    }
                }
            });
        });
    }
    /* ADMIN TEAM ADDITION */
    editProduct(id) {
        this.router.navigate([`/admin/${this.product.id}`]);
    }
}
ProductPageComponent.ɵfac = function ProductPageComponent_Factory(t) { return new (t || ProductPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ProductPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductPageComponent, selectors: [["app-product-page"]], hostAttrs: [1, "page", "flexColumnTop"], decls: 42, vars: 24, consts: [["id", "desktop-view", 1, "product", "flex"], [1, "productImageContainer", "flex"], [1, "productImage", 3, "src"], ["class", "saleRibbon", "src", "assets/img/saleRibbon.png", 4, "ngIf"], [1, "productInfo", "flexColumn", "mediumGap"], [1, "extraLargeFont"], [1, "flex", "mediumGap"], [1, "largeFont"], ["class", "oldPrice largeFont", 4, "ngIf"], [1, "productDescription", "mediumFont"], ["class", "mediumFont", 4, "ngIf"], ["class", "errorMessage largeFont", 4, "ngIf"], [1, "cartControls", "flexColumn", "smallGap"], [3, "ngIf"], ["routerLink", "/", "id", "ContShopBtn", 1, "foregroundElement", "fullWidth", "mediumFont"], ["id", "edit-btn", "type", "button", 3, "click", 4, "ngIf"], ["id", "mobile-view", 1, "product", "flex"], [1, "productImageContainer-mobile", "flex"], ["class", "saleRibbon-mobile", "src", "assets/img/saleRibbon.png", 4, "ngIf"], ["src", "assets/img/saleRibbon.png", 1, "saleRibbon"], [1, "oldPrice", "largeFont"], [1, "mediumFont"], [1, "errorMessage", "largeFont"], ["class", "flex fullWidth smallGap", 4, "ngIf"], ["class", "flexColumn fullWidth smallGap", 4, "ngIf"], [1, "flex", "fullWidth", "smallGap"], ["type", "number", 1, "quantityInput", "foregroundElement", "mediumFont", 3, "ngModel", "ngModelChange", "input"], [1, "cartButton", "mediumFont", 3, "click"], [1, "flexColumn", "fullWidth", "smallGap"], ["routerLink", "/cart", 1, "cartButton", "fullWidth", "mediumFont"], ["id", "cartMessage", 4, "ngIfMediumFont", "ngIf"], ["id", "cartMessage"], ["id", "edit-btn", "type", "button", 3, "click"], ["src", "assets/img/saleRibbon.png", 1, "saleRibbon-mobile"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProductPageComponent_img_3_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ProductPageComponent_p_11_Template, 3, 3, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProductPageComponent_p_14_Template, 2, 1, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ProductPageComponent_p_15_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ProductPageComponent_ng_template_17_Template, 2, 2, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Continue Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ProductPageComponent_button_20_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ProductPageComponent_img_24_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, ProductPageComponent_p_32_Template, 3, 3, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ProductPageComponent_p_35_Template, 2, 1, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ProductPageComponent_p_36_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, ProductPageComponent_ng_template_38_Template, 2, 2, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Continue Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, ProductPageComponent_button_41_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 20, ctx.product.salePrice ? ctx.product.salePrice : ctx.product.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.stock > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.stock == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.stock > 0 && ctx.dataService.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.dataService.user == null ? null : ctx.dataService.user.role == null ? null : ctx.dataService.user.role.role) == "ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 22, ctx.product.salePrice ? ctx.product.salePrice : ctx.product.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.salePrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.stock > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.stock == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.stock > 0 && ctx.dataService.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.dataService.user == null ? null : ctx.dataService.user.role == null ? null : ctx.dataService.user.role.role) == "ADMIN");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe], styles: [".product[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tbackground: var(--theme-color-2);\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n\tpadding: 15px;\r\n}\r\n\r\n.productImageContainer[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 320px;\r\n\tposition: relative;\r\n\tbackground: rgba(0, 0, 0, .2);\r\n}\r\n\r\n.productImage[_ngcontent-%COMP%] {\r\n\theight: 100%;\r\n\tmax-width: 100%;\r\n\tobject-fit: contain;\r\n}\r\n\r\n.saleRibbon[_ngcontent-%COMP%] {\r\n\ttop: 5px;\r\n\tright: 5px;\r\n\twidth: 50px;\r\n\tposition: absolute;\r\n}\r\n\r\n.productInfo[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tpadding: 5px 5px 5px 5px;\r\n\tflex-grow: 1;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n#cartMessage[_ngcontent-%COMP%] {\r\n\tmargin: 10px 0;\r\n}\r\n\r\n#mobile-view[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n.productImageContainer-mobile[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tpadding: 4px;\r\n\tposition: relative;\r\n\tbackground: rgba(0, 0, 0, .2);\r\n}\r\n\r\n.saleRibbon-mobile[_ngcontent-%COMP%] {\r\n\ttop: 5px;\r\n\tright: 5px;\r\n\twidth: 40px;\r\n\tposition: absolute;\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n\t#mobile-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t#desktop-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: inherit;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n\t \r\n\t#mobile-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: inherit;\r\n\t}\r\n\t\r\n\t#desktop-view[_ngcontent-%COMP%] {\r\n\t\tdisplay: none;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztDQUNYLGdDQUFnQztDQUNoQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsUUFBUTtDQUNSLFVBQVU7Q0FDVixXQUFXO0NBQ1gsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsV0FBVztDQUNYLHdCQUF3QjtDQUN4QixZQUFZO0NBQ1osc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osWUFBWTtDQUNaLGtCQUFrQjtDQUNsQiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxRQUFRO0NBQ1IsVUFBVTtDQUNWLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQztFQUNDLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLGdCQUFnQjtDQUNqQjtBQUNEOztBQUVBOztDQUVDO0VBQ0MsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsYUFBYTtDQUNkO0FBQ0QiLCJmaWxlIjoicHJvZHVjdC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3ItMik7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0cGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnByb2R1Y3RJbWFnZUNvbnRhaW5lciB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAzMjBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMik7XHJcbn1cclxuXHJcbi5wcm9kdWN0SW1hZ2Uge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0b2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLnNhbGVSaWJib24ge1xyXG5cdHRvcDogNXB4O1xyXG5cdHJpZ2h0OiA1cHg7XHJcblx0d2lkdGg6IDUwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ucHJvZHVjdEluZm8ge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxuXHRmbGV4LWdyb3c6IDE7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuI2NhcnRNZXNzYWdlIHtcclxuXHRtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuI21vYmlsZS12aWV3IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wcm9kdWN0SW1hZ2VDb250YWluZXItbW9iaWxlIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0cGFkZGluZzogNHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4yKTtcclxufVxyXG5cclxuLnNhbGVSaWJib24tbW9iaWxlIHtcclxuXHR0b3A6IDVweDtcclxuXHRyaWdodDogNXB4O1xyXG5cdHdpZHRoOiA0MHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjUwcHgpIHtcclxuXHQjbW9iaWxlLXZpZXcge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblxyXG5cdCNkZXNrdG9wLXZpZXcge1xyXG5cdFx0ZGlzcGxheTogaW5oZXJpdDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcblx0IFxyXG5cdCNtb2JpbGUtdmlldyB7XHJcblx0XHRkaXNwbGF5OiBpbmhlcml0O1xyXG5cdH1cclxuXHRcclxuXHQjZGVza3RvcC12aWV3IHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG59Il19 */"] });


/***/ }),

/***/ 3398:
/*!****************************************************!*\
  !*** ./src/app/pages/receipt/receipt.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptComponent": () => (/* binding */ ReceiptComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function ReceiptComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cartItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cartItem_r1.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Quantity: ", cartItem_r1.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 3, (cartItem_r1.product.salePrice || cartItem_r1.product.price) * cartItem_r1.quantity), "");
} }
class ReceiptComponent {
    constructor(activatedRoute, apiService, dataService, router) {
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.dataService = dataService;
        this.router = router;
        this.transaction = {};
    }
    ngOnInit() {
        if (this.dataService.user.username === undefined) {
            this.router.navigate(["/"]);
            return;
        }
        this.activatedRoute.params.subscribe(paramaters => {
            this.apiService.getTransaction(parseInt(paramaters["transactionId"]), (body) => {
                body.data.items = JSON.parse(body.data.items);
                this.transaction = body.data;
            });
        });
    }
}
ReceiptComponent.ɵfac = function ReceiptComponent_Factory(t) { return new (t || ReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ReceiptComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReceiptComponent, selectors: [["app-receipt"]], hostAttrs: [1, "page", "flexColumnTop", "extraLargeGap"], decls: 10, vars: 5, consts: [[1, "flexColumn", "mediumGap"], [1, "largeFont"], [1, "flexColumnRight", "smallGap"], [1, "fullWidth", "largeFont"], ["class", "flex extraLargeGap", 4, "ngFor", "ngForOf"], [1, "flex", "extraLargeGap"]], template: function ReceiptComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Items:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ReceiptComponent_div_9_Template, 8, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Transaction ID: ", ctx.transaction.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, ctx.transaction.total), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.transaction.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNlaXB0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6698:
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





function RegisterComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class RegisterComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.firstNameInput = "";
        this.lastNameInput = "";
        this.emailInput = "";
        this.usernameInput = "";
        this.passwordInput = "";
        this.errorMessage = "";
        this.onKeyDown = (event) => {
            if (event.key === "Enter") {
                this.register();
            }
        };
        this.register = () => {
            this.apiService.createUser({
                firstName: this.firstNameInput,
                lastName: this.lastNameInput,
                email: this.emailInput,
                username: this.usernameInput,
                password: this.passwordInput
            }, undefined, (body) => {
                this.errorMessage = body.message;
            });
        };
    }
    ngOnInit() { }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], hostAttrs: [1, "page", "flexColumnTop", "extraLargeGap"], decls: 28, vars: 6, consts: [[1, "formContainer", "flexColumn", "largeGap"], [1, "extraLargeFont"], [1, "flexColumnLeft", "mediumGap"], [1, "mediumFont"], ["id", "firstname", 1, "foregroundElement", "mediumFont", 3, "ngModel", "ngModelChange", "keydown"], ["id", "lastname", 1, "foregroundElement", "mediumFont", 3, "ngModel", "ngModelChange", "keydown"], ["id", "email", "type", "email", 1, "foregroundElement", "mediumFont", 3, "ngModel", "ngModelChange", "keydown"], ["id", "username", 1, "foregroundElement", "mediumFont", 3, "ngModel", "ngModelChange", "keydown"], ["id", "password", "type", "password", 1, "foregroundElement", "mediumFont", 3, "ngModel", "ngModelChange", "keydown"], ["class", "mediumFont errorMessage", 4, "ngIf"], ["id", "register-form-btn", 1, "foregroundElement", "mediumFont", 3, "click"], ["routerLink", "/login", "id", "login-form-btn", 1, "mediumFont"], [1, "mediumFont", "errorMessage"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_6_listener($event) { return ctx.firstNameInput = $event; })("keydown", function RegisterComponent_Template_input_keydown_6_listener($event) { return ctx.onKeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) { return ctx.lastNameInput = $event; })("keydown", function RegisterComponent_Template_input_keydown_10_listener($event) { return ctx.onKeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) { return ctx.emailInput = $event; })("keydown", function RegisterComponent_Template_input_keydown_14_listener($event) { return ctx.onKeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_18_listener($event) { return ctx.usernameInput = $event; })("keydown", function RegisterComponent_Template_input_keydown_18_listener($event) { return ctx.onKeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_22_listener($event) { return ctx.passwordInput = $event; })("keydown", function RegisterComponent_Template_input_keydown_22_listener($event) { return ctx.onKeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RegisterComponent_p_23_Template, 2, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_24_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.firstNameInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.lastNameInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.emailInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.usernameInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.passwordInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5146:
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var C_Users_brady_dev_projects_project3_project3_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data.service */ 9244);






class ApiService {
  constructor(httpClient, router, dataService) {
    var _this = this;

    this.httpClient = httpClient;
    this.router = router;
    this.dataService = dataService; //handle response is used to manage all http requests/responses
    //all requests should be sent with a call to handleResponse using one of the get/post/etc. methods in the ApiService
    //handleResponse uses the JsonResponse sent from the backend to handle the response
    //if success is true in the JsonResponse, the callback is called
    //if success is false, an alert is shown, unless errorCallback is defined
    //if errorCallback is defined, it is called instead of the alert showing

    this.handleResponse = /*#__PURE__*/function () {
      var _ref = (0,C_Users_brady_dev_projects_project3_project3_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, callback, errorCallback) {
        const handler = /*#__PURE__*/function () {
          var _ref2 = (0,C_Users_brady_dev_projects_project3_project3_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (body) {
            //todo remove, for debugging/presentation
            console.log(body);

            if (body.success) {
              if (typeof callback !== "undefined") {
                yield callback(body);
              }
            } else {
              if (typeof errorCallback !== "undefined") {
                errorCallback(body);
              } else {
                alert(body.message);
              } // Session is stale or server restarted, delete user information from data service and local storage
              // This is a 401 error created by throwing "UnauthorizedException" on backend which will redirect frontend to login page


              if (body.message == "Error! Unauthorized") {
                _this.dataService.updateUser({});
              }
            }

            if (body.redirect !== undefined && body.redirect !== null) {
              _this.router.navigate([body.redirect]);
            }
          });

          return function handler(_x4) {
            return _ref2.apply(this, arguments);
          };
        }(); //send body from response to handler (HttpErrorResponses keep body in error.error)


        response.subscribe({
          next: handler,
          error: error => {
            handler(error.error);
          }
        });
      });

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }();

    this.get = path => {
      return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + path, {
        withCredentials: true
      });
    };

    this.post = (path, body) => {
      return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + path, body, {
        withCredentials: true
      });
    };

    this.put = (path, body) => {
      return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + path, body, {
        withCredentials: true
      });
    };

    this.patch = (path, body) => {
      return this.httpClient.patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + path, body, {
        withCredentials: true
      });
    };

    this.delete = path => {
      return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl + path, {
        withCredentials: true
      });
    }; //session


    this.createSession = (identifier, password, callback, errorCallback) => {
      this.handleResponse(this.post("session", {
        identifier: identifier,
        password: password
      }), callback, errorCallback);
    };

    this.deleteSession = (callback, errorCallback) => {
      this.handleResponse(this.delete("session"), callback, errorCallback);
    }; //product


    this.getProducts = (searchQuery, page, callback, errorCallback) => {
      this.handleResponse(this.get("product?searchQuery=" + searchQuery + "&page=" + page), callback, errorCallback);
    };

    this.getProduct = (id, callback, errorCallback) => {
      this.handleResponse(this.get("product/" + id), callback, errorCallback);
    }; //user


    this.createUser = (user, callback, errorCallback) => {
      this.handleResponse(this.post("user", {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        password: user.password
      }), callback, errorCallback);
    }; //cartitem


    this.createCartItem = (productId, quantity, callback, errorCallback) => {
      this.handleResponse(this.post("cartitem", {
        productId: productId,
        quantity: quantity
      }), callback, errorCallback);
    };

    this.getCartItems = (callback, errorCallback) => {
      this.handleResponse(this.get("cartitem"), callback, errorCallback);
    };

    this.updateCartItem = (id, quantity, callback, errorCallback) => {
      this.handleResponse(this.put("cartitem/" + id, {
        quantity: quantity
      }), callback, errorCallback);
    };

    this.deleteCartItem = (id, callback, errorCallback) => {
      this.handleResponse(this.delete("cartitem/" + id), callback, errorCallback);
    }; //transaction


    this.createTransaction = (callback, errorCallback) => {
      this.handleResponse(this.post("transaction", {}), callback, errorCallback);
    };

    this.getTransaction = (id, callback, errorCallback) => {
      this.handleResponse(this.get("transaction/" + id), callback, errorCallback);
    };
  }

  updateProductItem(formData, callback, errorCallback) {
    this.handleResponse(this.patch("product", formData), callback, errorCallback);
  } //Admin team addition


  createNewProduct(formData, callback, errorCallback) {
    this.handleResponse(this.post("product", formData), callback, errorCallback);
  }

}

ApiService.ɵfac = function ApiService_Factory(t) {
  return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService));
};

ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ApiService,
  factory: ApiService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 9244:
/*!***********************************************!*\
  !*** ./src/app/services/data/data.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DataService {
    constructor() {
        this.products = [];
        this.user = {};
        this.cartSubtotal = 0;
        this.cartSales = 0;
        this.cartTotal = 0;
        this.updateUser = (user) => {
            this.user = user;
            localStorage["user"] = JSON.stringify(user);
        };
        this.updateCartTotals = () => {
            this.cartSubtotal = 0;
            this.cartSales = 0;
            this.cartTotal = 0;
            for (let i = 0; i < this.user.cart.length; i++) {
                if (this.user.cart[i].product.salePrice) {
                    this.cartSales += (this.user.cart[i].product.price - this.user.cart[i].product.salePrice) * this.user.cart[i].quantity;
                }
                this.cartSubtotal += this.user.cart[i].product.price * this.user.cart[i].quantity;
                this.cartTotal += (this.user.cart[i].product.salePrice || this.user.cart[i].product.price) * this.user.cart[i].quantity;
            }
        };
        if (localStorage["user"] !== undefined) {
            this.user = JSON.parse(localStorage["user"]);
        }
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: "http://localhost:81/"
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));
console.log("██████╗░███████╗██╗░░░██╗░█████╗░████████╗██╗░░░██╗██████╗░███████╗\n" + "██╔══██╗██╔════╝██║░░░██║██╔══██╗╚══██╔══╝██║░░░██║██╔══██╗██╔════╝\n" + "██████╔╝█████╗░░╚██╗░██╔╝███████║░░░██║░░░██║░░░██║██████╔╝█████╗░░\n" + "██╔══██╗██╔══╝░░░╚████╔╝░██╔══██║░░░██║░░░██║░░░██║██╔══██╗██╔══╝░░\n" + "██║░░██║███████╗░░╚██╔╝░░██║░░██║░░░██║░░░╚██████╔╝██║░░██║███████╗\n" + "╚═╝░░╚═╝╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚══════╝\n" + "\n" + "░█████╗░░█████╗░██╗░░░██╗██████╗░░██████╗███████╗░██╗░░░░░░░██╗░█████╗░██████╗░███████╗\n" + "██╔══██╗██╔══██╗██║░░░██║██╔══██╗██╔════╝██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔════╝\n" + "██║░░╚═╝██║░░██║██║░░░██║██████╔╝╚█████╗░█████╗░░░╚██╗████╗██╔╝███████║██████╔╝█████╗░░\n" + "██║░░██╗██║░░██║██║░░░██║██╔══██╗░╚═══██╗██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗██╔══╝░░\n" + "╚█████╔╝╚█████╔╝╚██████╔╝██║░░██║██████╔╝███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║███████╗\n" + "░╚════╝░░╚════╝░░╚═════╝░╚═╝░░╚═╝╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝\n" + "\n" + "░█████╗░░█████╗░██████╗░███╗░░██╗██╗░░░██╗░█████╗░░█████╗░██████╗░██╗░█████╗░\n" + "██╔══██╗██╔══██╗██╔══██╗████╗░██║██║░░░██║██╔══██╗██╔══██╗██╔══██╗██║██╔══██╗\n" + "██║░░╚═╝██║░░██║██████╔╝██╔██╗██║██║░░░██║██║░░╚═╝██║░░██║██████╔╝██║███████║\n" + "██║░░██╗██║░░██║██╔══██╗██║╚████║██║░░░██║██║░░██╗██║░░██║██╔═══╝░██║██╔══██║\n" + "╚█████╔╝╚█████╔╝██║░░██║██║░╚███║╚██████╔╝╚█████╔╝╚█████╔╝██║░░░░░██║██║░░██║\n" + "░╚════╝░░╚════╝░╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚═╝░░╚═╝");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map