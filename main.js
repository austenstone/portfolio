"use strict";
(self["webpackChunkausten_stone"] = self["webpackChunkausten_stone"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resume/resume.component */ 29);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: 'resume',
  component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_1__.ResumeComponent
}, {
  path: '**',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  constructor() {
    this.title = 'austen-stone';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _home_github_corner_github_corner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/github-corner/github-corner.component */ 5857);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _home_special_button_special_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/special-button/special-button.component */ 5176);
/* harmony import */ var _home_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/header/header.component */ 4989);
/* harmony import */ var _home_weather_weather_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/weather/weather.component */ 5454);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resume/resume.component */ 29);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material-module */ 828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _material_module__WEBPACK_IMPORTED_MODULE_9__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__.AppRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _home_github_corner_github_corner_component__WEBPACK_IMPORTED_MODULE_2__.GithubCornerComponent, _home_special_button_special_button_component__WEBPACK_IMPORTED_MODULE_4__.SpecialButtonComponent, _home_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _home_weather_weather_component__WEBPACK_IMPORTED_MODULE_6__.WeatherComponent, _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__.ResumeComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _material_module__WEBPACK_IMPORTED_MODULE_9__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_8__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 5857:
/*!***************************************************************!*\
  !*** ./src/app/home/github-corner/github-corner.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GithubCornerComponent: () => (/* binding */ GithubCornerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class GithubCornerComponent {
  constructor() {}
  static #_ = this.ɵfac = function GithubCornerComponent_Factory(t) {
    return new (t || GithubCornerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GithubCornerComponent,
    selectors: [["app-github-corner"]],
    decls: 10,
    vars: 0,
    consts: [["href", "https://github.com/austenstone", "aria-label", "View me on GitHub", 1, "github-corner"], ["width", "80", "height", "80", "viewBox", "0 0 250 250", "aria-hidden", "true", 2, "position", "absolute", "top", "0", "border", "0", "right", "0"], ["d", "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"], ["d", "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2", "fill", "currentColor", 1, "octo-arm", 2, "transform-origin", "130px 106px"], ["d", "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z", "fill", "currentColor", 1, "octo-body"]],
    template: function GithubCornerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */", ".github-corner[_ngcontent-%COMP%]:hover   .octo-arm[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_octocat-wave 560ms ease-in-out\n  }\n\n  @keyframes _ngcontent-%COMP%_octocat-wave {\n\n    0%,\n    100% {\n      transform: rotate(0)\n    }\n\n    20%,\n    60% {\n      transform: rotate(-25deg)\n    }\n\n    40%,\n    80% {\n      transform: rotate(10deg)\n    }\n  }\n\n  @media (max-width:500px) {\n    .github-corner[_ngcontent-%COMP%]:hover   .octo-arm[_ngcontent-%COMP%] {\n      animation: none\n    }\n\n    .github-corner[_ngcontent-%COMP%]   .octo-arm[_ngcontent-%COMP%] {\n      animation: _ngcontent-%COMP%_octocat-wave 560ms ease-in-out\n    }\n  }"]
  });
}

/***/ }),

/***/ 4989:
/*!*************************************************!*\
  !*** ./src/app/home/header/header.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typed.js */ 92);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


const ets = emoji => {
  let emojiHex = '';
  if (emoji.length === 2) {
    emojiHex = emoji;
  } else {
    let comp = (emoji.charCodeAt(0) - 0xD800) * 0x400 + (emoji.charCodeAt(1) - 0xDC00) + 0x10000;
    if (comp < 0) {
      emojiHex = emoji;
    }
    emojiHex = emoji;
    return `&#x${emojiHex.codePointAt(0).toString(16)};&#x${emojiHex.codePointAt(2).toString(16)};&#x${emojiHex.codePointAt(3).toString(16)};`;
  }
  return `&#x${emojiHex.codePointAt(0).toString(16)};`;
};
class HeaderComponent {
  constructor() {}
  ngOnInit() {
    const typed = new typed_js__WEBPACK_IMPORTED_MODULE_0__["default"]('.skills', {
      strings: [`Solutions Engineer `, `Solutions Engineer ${ets('🚀')}`, `Software Engineer ${ets('👨‍💻')}`, `Developer &amp; UI/UX Creator ${ets('🔨')}`, `App Creator ${ets('🔨')}`, `App Designer 🎨`, `Internet Of Things Maker ${ets('🔧')}`, `Internet Of Things Connector ${ets('🌐')}`, `Angular Developer`, `Angular Dev`, `Web Developer`],
      typeSpeed: 50,
      backSpeed: 40,
      smartBackspace: true,
      loop: true,
      startDelay: 200
    });
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 7,
    vars: 0,
    consts: [[1, "title", "hack-font"], [1, "sub-title", "hack-font"], [1, "skills"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "<Austen Stone>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin-bottom: 100px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 5.5em;\n  font-weight: 700;\n  margin-bottom: 0;\n  line-height: initial;\n  white-space: nowrap;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: 3em;\n  font-weight: 400;\n  margin-left: 1em;\n  margin-top: 0;\n}\n\n.skills-container[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.skills[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n@media only screen and (max-width: 600px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 8vw;\n  }\n  .sub-title[_ngcontent-%COMP%] {\n    font-size: 4vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsY0FBQTtFQUNBLG9CQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsY0FBQTtFQUFGO0VBRUE7SUFDRSxjQUFBO0VBQUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLy8gbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDUuNWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uc2tpbGxzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnNraWxscyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogOHZ3O1xuICB9XG4gIC5zdWItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6459:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _github_corner_github_corner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-corner/github-corner.component */ 5857);
/* harmony import */ var _special_button_special_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./special-button/special-button.component */ 5176);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 4989);
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather/weather.component */ 5454);









class HomeComponent {
  constructor(domSanitizer) {
    this.domSanitizer = domSanitizer;
  }
  ngOnInit() {
    console.log(`%c⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠋⠉⠉⠉⠙⠛⠻⢶⣤⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⡆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣠⣴⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡟⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⠶⠟⠛⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡟⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣴⠾⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡶⠛⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠞⠋⠀⠀⠀⠀⣠⣴⠶⠶⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣄⣀⣀⣤⡴⠟⠋⠀⠀⠀⠘⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣟⠉⠙⢷⣄⠀⠀⠀⠀⠀⠀⠘⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣷⡀⠀⠹⣧⡀⠀⠀⠀⠀⠀⣼⠃⠀⠀⠀⠀⠀⠀⠀⢀⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣷⡀⠀⠈⠛⣷⣤⣴⠶⠟⠃⠀⠀⠀⠀⠀⠀⠀⢀⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣷⡀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⠟⠛⣻⡿⠀⠀⠀⠀⠀⢀⣤⡾⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⠀⠀⠀⢀⣴⠟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠟⠀⠀⠀⠀⣠⣾⡿⠁⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠏⠀⠀⠀⢀⡾⢫⣿⠁⠀⣼⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠃⠀⠀⢀⣴⠟⢡⡟⣿⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠟⠁⠀⠀⣰⠟⠁⢠⡿⠀⢿⡄⢰⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠏⠀⠀⢠⣾⠋⠀⢀⡿⠁⠀⠈⠛⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡏⠀⠀⣴⢿⡟⠀⠀⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⣄⣾⠋⠘⣧⡀⢰⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀⠈⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`, "font-family:serif; font-size: 9px");
    //   new Typed.default('#about-title', {
    //     strings: [
    //       `About`
    //     ],
    //     typeSpeed: 50,
    //     backSpeed: 40,
    //     smartBackspace: true,
    //     showCursor: false,
    //     loop: false,
    //     onComplete: () => {
    //       new Typed.default('#main-projects-title', {
    //         strings: [
    //           `\<MainProjects\>`
    //         ],
    //         typeSpeed: 50,
    //         backSpeed: 40,
    //         smartBackspace: true,
    //         showCursor: false,
    //         loop: false,
    //         startDelay: 200
    //       });
    //     }
    //   });
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 288,
    vars: 33,
    consts: [[1, "wrapper", "easy-read"], [1, ""], ["id", "about"], [1, "portrait-container"], [1, "portrait", "mat-elevation-z8"], [1, "typed-title"], [1, "links"], [3, "text", "href", "img"], [1, "project-container"], [1, "project-info"], [1, "mat-elevation-z8"], ["mat-raised-button", "", "color", "primary", "href", "https://oauth.gvm-chart.com/copilot", "target", "_blank", "rel", "noopener"], ["mat-raised-button", "", "color", "primary", "href", "https://github.com/austenstone/github-value", "target", "_blank", "rel", "noopener"], ["href", "https://oauth.gvm-chart.com/copilot", "target", "_blank", "rel", "noopener", 1, "project-image", "elev-hover"], ["src", "https://github.com/user-attachments/assets/09c494cd-fbdb-4b8e-9cb3-696371e9487a", "alt", "GitHub Value", "aria-label", "GitHub Value"], ["id", "github-actions", 1, "project-container"], ["mat-raised-button", "", "color", "primary", "href", "https://github.com/marketplace?query=austenstone", "target", "_blank", "rel", "noopener"], ["href", "https://github.com/marketplace?query=austenstone", "target", "_blank", "rel", "noopener", 1, "project-image", "elev-hover"], ["src", "assets/screenshots/chrome_nSvEKPj2YO.png", "alt", "deviceWISE View", "aria-label", "deviceWISE View"], ["mat-raised-button", "", "color", "primary", "href", "https://view.devicewise.com/login?user=demo&pass=demo", "target", "_blank", "rel", "noopener"], ["mat-raised-button", "", "color", "primary", "href", "https://docs.devicewise.com/Content/Products/GatewayDevelopersGuide/deviceWISE_View/deviceWISE-View.htm", "target", "_blank", "rel", "noopener"], ["mat-raised-button", "", "color", "primary", "href", "https://youtu.be/Gh3EXo6ZuYE", "target", "_blank", "rel", "noopener"], ["href", "https://view.devicewise.com/login?user=demo&pass=demo", "target", "_blank", "rel", "noopener", 1, "project-image", "elev-hover"], ["src", "assets/screenshots/chrome_EWhfXl9Ecn.png", "alt", "deviceWISE View", "aria-label", "deviceWISE View"], ["mat-raised-button", "", "color", "primary", "href", "https://austenstone.github.io/github-actions-usage-report/", "target", "_blank", "rel", "noopener"], ["mat-raised-button", "", "color", "primary", "href", "https://github.com/austenstone/github-actions-usage-report", "target", "_blank", "rel", "noopener"], ["mat-raised-button", "", "color", "primary", "href", "https://youtu.be/VSrB4Qhqgs8", "target", "_blank", "rel", "noopener"], ["src", "assets/screenshots/chrome_xebwmFt39a.png", "alt", "Github Actions Usage Report", "aria-label", "Github Actions Usage Report"], [3, "text", "icon", "href"], [3, "text", "href", "icon"], ["src", "https://github.com/sponsors/austenstone/card", "title", "Sponsor austenstone", "height", "225", "width", "600", 2, "border", "0"], [1, "wrapper"], ["target", "_blank", "href", "https://www.strava.com/athletes/4518741", "aria-label", "Strava", "rel", "noopener"], ["src", "assets/icons/bike.svg", "alt", "bike", 1, "bike"], ["href", "https://www.passmark.com/baselines/V10/display.php?id=147458042732"], ["src", "https://www.passmark.com/baselines/V10/images/147458042732.png", "alt", "PassMark Rating", "border", "0"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\n          About\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\n          Hey\uD83D\uDC4B, I'm Austen. I write code and solve people's business problems.\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "app-special-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "app-special-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\n      MainProjects\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "GitHub Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "\n          GitHub Value is a free and open-source application designed to help measure the adoption, value, and impact of GitHub features.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "\n            Demo\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "\n            Source\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "\n    \n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "GitHub Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "\n            Marketplace\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](95, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "deviceWISE View");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "\n          A powerful no-code dashboard builder.\n          Visualize your data or create UI's by simply dragging and dropping widgets into a canvas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116, "\n            Demo\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, "\n            Docs\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, "videocam");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, "\n            Video\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](134, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, "Github Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](145, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, "Usage Report Viewer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149, "\n          Visualize a Github Actions usage report entirely client side.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](150, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](152, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](156, "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](157, "\n            Link\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](158, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](163, "\n            Source\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](166, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, "videocam");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](169, "\n            Video\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](170, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](171, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](174, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](175, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](176, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](177, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](179, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](181, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](183, "OtherProjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](184, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](186, "The Game of Life");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](189, "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John\n      Horton\n      Conway in 1970.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](190, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](192, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "app-special-button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](194, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](195, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](196, "app-special-button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](197, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](198, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](199, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](201, "Spotify Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](202, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](204, "Share your liked Spotify songs with others.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](205, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](207, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](208, "app-special-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](209, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](210, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "app-special-button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](212, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](213, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](214, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](215, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](216, "Audi Car Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](217, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](219, "I backwards engineered Audi's website so I could find the cheapest certified pre owned vehicle in America.\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](220, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](221, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](222, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](223, "app-special-button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](224, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](225, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](226, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](227, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](228, "React Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](229, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](230, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](231, "Simple chatroom using Firebase and React.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](232, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](233, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](234, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "app-special-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](236, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](237, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](238, "app-special-button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](239, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](240, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](241, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](242, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](243, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](244, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](245, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](246, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](247, "ContactMe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](248, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](249, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](250, "Have more questions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](251, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](252, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](253, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](254, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](255, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](256, "app-special-button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](257, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](258, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](259, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](260, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](261, "Want to work together?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](262, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](263, "app-special-button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](264, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](265, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](266, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](267, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](268, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](269, "iframe", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](270, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](271, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](272, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](273, "footer", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](274, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](275, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](276, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](277, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](278, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](279, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](280, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](281, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](282, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](283, "app-weather");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](284, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](285, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](286, "app-github-corner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](287, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "GitHub")("href", "https://github.com/austenstone")("img", "https://cdn-icons-png.flaticon.com/512/25/25231.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "LinkedIn")("href", "https://www.linkedin.com/in/austenstone")("img", "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](167);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Life")("icon", "group_work")("href", "https://life.austen.info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Code")("href", "https://github.com/austenstone/game-of-life")("icon", "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Spotify Share")("href", "https://spotify-share.austen.info")("img", "assets/img/spotify-logo-png-7057.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Code")("href", "https://github.com/austenstone/spotify-share")("icon", "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Code")("href", "https://github.com/austenstone/audi-car-search")("icon", "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "React Chat")("href", "https://chat.austen.info")("img", "https://chat.austen.info/logo192.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Code")("href", "https://github.com/austenstone/react-chat")("icon", "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Email")("href", "mailto:hi@austen.info")("icon", "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Resume")("href", "/resume")("icon", "history_edu");
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _github_corner_github_corner_component__WEBPACK_IMPORTED_MODULE_0__.GithubCornerComponent, _special_button_special_button_component__WEBPACK_IMPORTED_MODULE_1__.SpecialButtonComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _weather_weather_component__WEBPACK_IMPORTED_MODULE_3__.WeatherComponent],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1075px;\n  margin: auto;\n  padding: 16px;\n  box-sizing: border-box;\n}\n\n.contact[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  width: 150px;\n}\n\n@media (max-width: 1024px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 9vw;\n  }\n  .sub-title[_ngcontent-%COMP%] {\n    font-size: 6vw;\n    margin-left: 5vw;\n  }\n}\nsection[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n  max-width: 100%;\n}\n\n.links[_ngcontent-%COMP%] {\n  margin: 20px 0 20px 0;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.links[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 10px 10px 0;\n}\n\n  .mat-tooltip {\n  white-space: pre-line;\n}\n\n.bike[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 25px;\n  transform: scaleX(-1);\n  max-width: 300px;\n}\n\n@media only screen and (max-width: 1000px) {\n  .bike[_ngcontent-%COMP%] {\n    position: initial;\n  }\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: 400;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 28px;\n}\n\n.home-header[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.project-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 40px;\n}\n.project-container[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%] {\n  grid-column: 1/8;\n  grid-area: 1/5/1/-1;\n  max-width: 100%;\n  max-height: 100%;\n  position: relative;\n  cursor: pointer;\n  border-radius: 4px;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n}\n.project-container[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  width: 100%;\n  height: 100%;\n}\n.project-container[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%]::after {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  mix-blend-mode: screen;\n  content: \"\";\n  transition: ease-in-out 0.2s;\n}\n.project-container[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%]:hover::after {\n  background: black;\n}\n.project-container[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%] {\n  z-index: 2;\n  grid-column: 6/-1;\n  grid-area: 1/1/-1/-7;\n}\n.project-container[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 24px;\n  padding: 20px;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 10px 0px 40px;\n  font-size: 36px;\n  font-weight: 400;\n  letter-spacing: -0.25px;\n  line-height: 44px;\n  margin-left: -17px;\n}\n\nh1[_ngcontent-%COMP%]:before {\n  content: \"<\";\n}\n\nh1[_ngcontent-%COMP%]:after {\n  content: \">\";\n}\n\n.portrait[_ngcontent-%COMP%] {\n  float: right;\n  width: 300px;\n  height: 300px;\n  background-image: url(\"https://avatars.githubusercontent.com/u/22425467?v=4\");\n  background-size: cover;\n  background-position: center;\n  border-radius: 50%;\n}\n\n#about[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 50px;\n}\n#about[_ngcontent-%COMP%]   .portrait-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media (max-width: 700px) {\n  #about[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: auto;\n  }\n  .project-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 1fr);\n  }\n  .project-container[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%] {\n    grid-area: 4/1/7/1;\n  }\n  .project-container[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%] {\n    grid-area: 1/1/5/1;\n  }\n}\n@media (max-width: 1100px) {\n  h1[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n.typed-title[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBQTtFQUNGO0VBQ0E7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxpQkFBQTtFQURGO0FBQ0Y7QUFJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBRUEsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFMRjtBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxzQkFBQTtFQUNBLDJCQUFBO0FBTko7QUFPSTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMTjtBQVFJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FBTk47QUFTSTtFQUNFLGlCQUFBO0FBUE47QUFXRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBVEo7QUFXSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFUTjs7QUFjQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBWEY7O0FBY0E7RUFDRSxZQUFBO0FBWEY7O0FBYUE7RUFDRSxZQUFBO0FBVkY7O0FBYUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2RUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQVZGOztBQWFBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtBQVZGO0FBV0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVEo7O0FBYUE7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtFQVZGO0VBWUE7SUFDRSwwQkFBQTtJQUNBLGtDQUFBO0VBVkY7RUFZRTtJQUNFLGtCQUFBO0VBVko7RUFZRTtJQUNFLGtCQUFBO0VBVko7QUFDRjtBQWNBO0VBQ0U7SUFDRSxjQUFBO0VBWkY7QUFDRjtBQWVBO0VBQ0UsYUFBQTtBQWJGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ud3JhcHBlciB7XG4gIG1heC13aWR0aDogMTA3NXB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb250YWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiA5dnc7XG4gIH1cbiAgLnN1Yi10aXRsZSB7XG4gICAgZm9udC1zaXplOiA2dnc7XG4gICAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgfVxufVxuXG5zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmxpbmtzIHtcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5saW5rcyA+ICoge1xuICBtYXJnaW46IDAgMTBweCAxMHB4IDA7XG59XG5cbjo6bmctZGVlcCAubWF0LXRvb2x0aXAge1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG5cbi5iaWtlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAyNXB4O1xuICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSg5MCk7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmJpa2Uge1xuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICB9XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuaDMge1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cblxuLmhvbWUtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG5cbiAgLnByb2plY3QtaW1hZ2Uge1xuICAgIGdyaWQtY29sdW1uOiAxLzg7XG4gICAgZ3JpZC1hcmVhOiAxLzUvMS8tMTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaW1nIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4ycztcbiAgICB9XG5cbiAgICAmOmhvdmVyOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICB9XG4gIH1cblxuICAucHJvamVjdC1pbmZvIHtcbiAgICB6LWluZGV4OiAyO1xuICAgIGdyaWQtY29sdW1uOiA2Ly0xO1xuICAgIGdyaWQtYXJlYTogMS8xLy0xLy03O1xuXG4gICAgbWF0LWNhcmQge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG5oMSB7XG4gIG1hcmdpbjogMTBweCAwcHggNDBweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjVweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTdweDtcbn1cblxuaDE6YmVmb3JlIHtcbiAgY29udGVudDogXCI8XCI7XG59XG5oMTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiPlwiO1xufVxuXG4ucG9ydHJhaXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzIyNDI1NDY3P3Y9NFwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbiNhYm91dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGdhcDogNTBweDtcbiAgLnBvcnRyYWl0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgI2Fib3V0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgfVxuICAucHJvamVjdC1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7XG5cbiAgICAucHJvamVjdC1pbWFnZSB7XG4gICAgICBncmlkLWFyZWE6IDQvMS83LzE7XG4gICAgfVxuICAgIC5wcm9qZWN0LWluZm8ge1xuICAgICAgZ3JpZC1hcmVhOiAxLzEvNS8xO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIGgxIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG4udHlwZWQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5176:
/*!*****************************************************************!*\
  !*** ./src/app/home/special-button/special-button.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpecialButtonComponent: () => (/* binding */ SpecialButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 6515);




function SpecialButtonComponent_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function SpecialButtonComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n      ", ctx_r1.icon, "\n    ");
  }
}
class SpecialButtonComponent {
  constructor() {}
  static #_ = this.ɵfac = function SpecialButtonComponent_Factory(t) {
    return new (t || SpecialButtonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SpecialButtonComponent,
    selectors: [["app-special-button"]],
    inputs: {
      href: "href",
      img: "img",
      icon: "icon",
      text: "text"
    },
    decls: 10,
    vars: 4,
    consts: [["target", "_blank", "rel", "noopener", "mat-stroked-button", "", 3, "href"], [3, "src", 4, "ngIf"], [4, "ngIf"], [3, "src"]],
    template: function SpecialButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpecialButtonComponent_img_4_Template, 1, 1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SpecialButtonComponent_ng_container_6_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n  ", ctx.text, "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
    styles: ["[_nghost-%COMP%] {\n  \n\n}\n\n[_nghost-%COMP%]  a .mat-button-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n[_nghost-%COMP%]  a .mat-button-wrapper mat-icon {\n  margin-right: 5px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9zcGVjaWFsLWJ1dHRvbi9zcGVjaWFsLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC8qIGRpc3BsYXk6IGNvbnRlbnRzOyAqL1xufVxuXG46aG9zdDo6bmctZGVlcCBhIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuOmhvc3Q6Om5nLWRlZXAgYSAubWF0LWJ1dHRvbi13cmFwcGVyIG1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5454:
/*!***************************************************!*\
  !*** ./src/app/home/weather/weather.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherComponent: () => (/* binding */ WeatherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.service */ 7902);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function WeatherComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("It's ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 4, ctx_r0.fahrenheit, "1.0-0"), "\u00B0F with ", ctx_r0.weather.weather[0].description, " in ", ctx_r0.weather.name, ". ", ctx_r0.weatherThought, "!");
  }
}
class WeatherComponent {
  constructor(weatherService) {
    this.weatherService = weatherService;
    this.fahrenheit = 0;
    this.weatherThought = 'Not bad...';
  }
  ngOnInit() {
    this.weatherService.getWeather$().subscribe(weather => {
      if (weather) {
        this.weather = weather;
        this.fahrenheit = this.kelvinToFahrenheit(this.weather.main.temp);
        if (this.weather.weather[0].description.includes('cloud')) {
          this.weatherThought = 'Bring out the sun ⛅';
        } else if (this.weather.weather[0].description.includes('storm')) {
          this.weatherThought = 'Batten down the hatches ⚡';
        } else if (this.weather.weather[0].description.includes('rain')) {
          this.weatherThought = 'That\'s Florida for you ☔';
        } else {
          if (this.fahrenheit > 90) {
            this.weatherThought = 'It\'s hot 🔥';
          } else if (this.fahrenheit > 80) {
            this.weatherThought = 'It\'s pretty warm 🌞';
          } else if (this.fahrenheit > 70) {
            this.weatherThought = 'It\'s perfect weather 👌';
          } else if (this.fahrenheit > 65) {
            this.weatherThought = 'It\'s a little chilly for Florida 😮';
          } else {
            this.weatherThought = 'It\'s freezing 🥶';
          }
        }
      }
    });
  }
  kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
  }
  static #_ = this.ɵfac = function WeatherComponent_Factory(t) {
    return new (t || WeatherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_weather_service__WEBPACK_IMPORTED_MODULE_0__.WeatherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: WeatherComponent,
    selectors: [["app-weather"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"]],
    template: function WeatherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WeatherComponent_div_0_Template, 6, 7, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fahrenheit);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7902:
/*!*************************************************!*\
  !*** ./src/app/home/weather/weather.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);



class WeatherService {
  constructor(http) {
    this.http = http;
    this.weather$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.OPEN_WEATHER_APP_ID = 'ff89e06fe8436ab85a00774b6af92d87';
    this.COUNTRY = 'us';
    this.ZIP_CODE = 33487;
    this._get_weather().subscribe(weather => {
      this.weather = weather;
      this.weather$.next(this.weather);
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(60000).subscribe(() => this._get_weather().subscribe(weather => {
      this.weather = weather;
      this.weather$.next(this.weather);
    }));
  }
  getWeather() {
    return this.weather;
  }
  getWeather$() {
    return this.weather$.asObservable();
  }
  _get_weather() {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?zip=${this.ZIP_CODE},${this.COUNTRY}&APPID=${this.OPEN_WEATHER_APP_ID}`);
  }
  static #_ = this.ɵfac = function WeatherService_Factory(t) {
    return new (t || WeatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: WeatherService,
    factory: WeatherService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 828:
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ 1757);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);





class MaterialModule {
  static #_ = this.ɵfac = function MaterialModule_Factory(t) {
    return new (t || MaterialModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MaterialModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule]
  });
})();

/***/ }),

/***/ 29:
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeComponent: () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ 1757);



function ResumeComponent_blockquote_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.description);
  }
}
function ResumeComponent_mat_chip_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "accent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n            ", skill_r3, "\n          ");
  }
}
function ResumeComponent_div_85_a_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const experience_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", experience_r4.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r4.name);
  }
}
function ResumeComponent_div_85_h2_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const experience_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r4.name);
  }
}
function ResumeComponent_div_85_li_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bullet_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bullet_r10);
  }
}
function ResumeComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResumeComponent_div_85_a_9_Template, 5, 2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResumeComponent_div_85_h2_11_Template, 2, 1, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ResumeComponent_div_85_li_27_Template, 2, 1, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const experience_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r4.href);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !experience_r4.href);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n            ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 6, experience_r4.dateStart, "y"), " - ", experience_r4.dateEnd ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 9, experience_r4.dateEnd, "y") : "Present", "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", experience_r4.bullets);
  }
}
class ResumeComponent {
  constructor() {
    this.name = 'Austen Stone';
    this.title = 'Software Engineer';
    this.description = 'Passionate developer focused on using cutting edge technology to solve business problems.';
    this.skills = ['C', 'C++', 'Typescript', 'JavaScript', 'Angular', 'React', 'PWAs', 'Node', 'Git', 'Bash', 'Docker', 'Electron', 'Continuous integration', 'SCM', 'Object Oriented Design', 'Deployment'];
    this.workExperiences = [{
      title: 'Senior Solutions Engineer',
      name: 'GitHub',
      href: 'https://github.com/',
      dateStart: new Date('Mar 1, 2024'),
      dateEnd: null,
      bullets: []
    }, {
      title: 'Solutions Engineer',
      name: 'GitHub',
      href: 'https://github.com/',
      dateStart: new Date('Jan 11, 2021'),
      dateEnd: new Date('Mar 1, 2024'),
      bullets: ['Creator of GitHub Usage Report Viewer, a tool to visualize and analyze GitHub usage data.', 'Ran GitHub Actions roundtable for 100+ attendees to discuss best practices and new features.', 'Traveled to multiple hackathons, customer onsites, and conferences to represent GitHub and help developers.', 'Was GitHub Actions SME for the Solutions Engineering team.', 'developed internal tools to help the team be more efficient and effective.', 'Created countless GitHub Actions for customers and the community', 'FY23 Revenue Club Winner', 'FY23 Managers Choice Worldwide SE award winner']
    }, {
      title: 'Solutions Expert',
      name: 'Telit',
      href: 'https://www.telit.com/',
      dateStart: new Date('Dec 1, 2020'),
      dateEnd: new Date('Jan 10, 2021'),
      bullets: ['Creator of deviceWISE View, a drag/drop dashboard builder that has generated over $1m+ in revenue.', 'Worked collaboratively with the open source community on GitHub and Stack Overflow to add features or solve issues in third party libraries.', 'Gathered requirements and created proposals for clients outlining project scope and timeline.', 'Developed internal applications to evolve our processes and increase productivity such as a License Server, Tunneling Client, and modern CI/CD pipelines.', 'Worked between product management, developers, and sales team to solve problems and prioritize work.', 'Successfully delivered 100s of live demonstrations to customers including IBM, Siemens, Amazon, Dell, Lenovo, Coke, Ford, Honda, Caterpillar, Deloitte, Medtronic, Furuno.']
    }, {
      title: 'Solutions Engineer',
      name: 'Telit',
      href: 'https://www.telit.com/',
      dateStart: new Date('April 1, 2018'),
      dateEnd: new Date('Dec 1, 2020'),
      bullets: ['Creator of industrial C drivers: FANUC CNC, CAN Bus, Modbus, TCP, etc.', 'Creator of C extensions such as Siemens Mindsphere, Azure IoT Hub, AWS Sitewise, AWS IoT Core, IBM Maximo, etc.', 'Lead a large scale development for Foxconn to connect and visualize data from entire factory. In-person in Shenzhen, China.', 'Created and delivered J1939 CANbus solution with AT&T for Halliburton Company USA. Monitor and manage 1000\'s of fracking trucks remotely.', 'Matched customer problems to product features. Developed missing features by extending or creating new products.']
    }, {
      title: 'Engineer Intern',
      name: 'Telit',
      href: 'https://www.telit.com/',
      dateStart: new Date('October 1, 2016'),
      dateEnd: new Date('April 1, 2018')
    }, {
      title: 'Owner',
      name: 'Austen Stone Tech',
      dateStart: new Date('January 1, 2013'),
      dateEnd: new Date('January 1, 2019')
    }, {
      title: 'IT & Computer Graphics Specialist',
      name: 'JRPR Public Relations',
      dateStart: new Date('August 1, 2013'),
      dateEnd: new Date('December 1, 2016')
    }];
  }
  static #_ = this.ɵfac = function ResumeComponent_Factory(t) {
    return new (t || ResumeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ResumeComponent,
    selectors: [["app-resume"]],
    decls: 96,
    vars: 5,
    consts: [["id", "resume-container"], ["id", "resume"], ["id", "header"], [1, "no-margin"], ["id", "side-header"], [4, "ngIf"], ["id", "side"], [1, "side-section"], [1, "contact"], ["target", "_blank", "href", "mailto:hi@austen.info"], ["target", "_blank", "href", "https://austen.info/"], ["target", "_blank", "href", "https://www.linkedin.com/in/austenstone"], [1, "skill-chips"], [3, "color", 4, "ngFor", "ngForOf"], ["target", "_blank", "href", "https://www.fau.edu/"], [1, "education"], [1, "title"], [1, "accent-light"], ["id", "content"], [1, "banner"], ["class", "experience", 4, "ngFor", "ngForOf"], [1, "display-none", "print-only"], ["target", "_blank", "href", "https://austen.info/resume"], [3, "color"], [1, "experience"], [1, "experience-header"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "primary-light", 4, "ngIf"], [1, "flexer"], [1, "date", "primary-light"], [4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"], [1, "company-name", "primary-light"], [1, "primary-light"]],
    template: function ResumeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResumeComponent_blockquote_15_Template, 2, 1, "blockquote", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "hi@austen.info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "austen.info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "linkedin.com/in/austenstone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-chip-set", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ResumeComponent_mat_chip_54_Template, 2, 2, "mat-chip", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Florida Atlantic University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Bachelors of Science in Computer Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, ResumeComponent_div_85_Template, 31, 12, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\n          View online at: austen.info/resume\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.workExperiences);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__.MatChip, _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__.MatChipSet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  min-height: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: auto;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n}\n\n#resume-container[_ngcontent-%COMP%] {\n  max-width: 1250px;\n  margin: auto;\n  display: block;\n  width: 100%;\n  padding: 30px;\n  box-sizing: border-box;\n}\n\n#resume[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: auto 1fr;\n  grid-template-areas: \"header side-header\" \"content side\" \"content side\";\n  width: 100%;\n  box-sizing: border-box;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n@media only screen and (max-width: 1024px) {\n  #resume[_ngcontent-%COMP%] {\n    grid-template-columns: auto;\n    grid-template-rows: auto;\n    grid-template-areas: \"header\" \"side-header\" \"content\" \"side\";\n  }\n  blockquote[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media (max-width: 512px) {\n  #resume-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.no-margin[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n#header[_ngcontent-%COMP%] {\n  grid-area: header;\n  padding: 20px 30px;\n}\n\n#side-header[_ngcontent-%COMP%] {\n  grid-area: side-header;\n  padding: 20px 30px;\n}\n\n#side[_ngcontent-%COMP%] {\n  grid-area: side;\n  padding: 20px 30px;\n}\n#side[_ngcontent-%COMP%]   .side-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n#content[_ngcontent-%COMP%] {\n  grid-area: content;\n  padding: 20px 30px;\n}\n\nblockquote[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n\n.experience[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.experience[_ngcontent-%COMP%]   .experience-header[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 10px;\n}\n.experience[_ngcontent-%COMP%]   .experience-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  line-height: initial;\n  margin-bottom: 0;\n}\n.experience[_ngcontent-%COMP%]   .experience-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  line-height: initial;\n  margin-bottom: 0;\n  font-weight: 400;\n}\n.experience[_ngcontent-%COMP%]   .experience-header[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  white-space: pre;\n}\n\n.education[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  line-height: initial;\n  margin-bottom: 0;\n}\n.education[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  line-height: initial;\n  margin-bottom: 0;\n  font-weight: 400;\n}\n\nh1.banner[_ngcontent-%COMP%] {\n  font-size: 1.75em;\n}\n\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .print-only[_ngcontent-%COMP%] {\n    display: block;\n  }\n  [_nghost-%COMP%] {\n    display: block;\n    width: auto;\n    height: auto;\n    overflow: visible;\n    position: static;\n  }\n  #resume-container[_ngcontent-%COMP%] {\n    padding: 0 !important;\n    width: 100%;\n    height: 100%;\n  }\n  #resume[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n  blockquote[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n.skill-chips[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1RUFDRTtFQUdGLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHdFQUFBO0FBREY7O0FBR0E7RUFDRTtJQUNFLDJCQUFBO0lBQ0Esd0JBQUE7SUFDQSw0REFDRTtFQURKO0VBTUE7SUFDRSxTQUFBO0VBSkY7QUFDRjtBQU9BO0VBQ0U7SUFDRSxVQUFBO0VBTEY7QUFDRjtBQU9BO0VBQ0UsU0FBQTtBQUxGOztBQU9BO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU1BO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBSEY7QUFLRTtFQUNFLG1CQUFBO0FBSEo7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjtBQUlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRko7QUFJTTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUZSO0FBSU07RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUZSO0FBS0k7RUFDRSxnQkFBQTtBQUhOOztBQVNFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBTko7QUFRRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTko7O0FBYUE7RUFDRSxpQkFBQTtBQVZGOztBQWFBO0VBQ0U7SUFDRSxhQUFBO0VBVkY7RUFhQTtJQUNFLGNBQUE7RUFYRjtFQWFBO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQVhGO0VBYUE7SUFDRSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBWEY7RUFhQTtJQUNFLGdCQUFBO0VBWEY7RUFhQTtJQUNFLFNBQUE7RUFYRjtBQUNGO0FBY0E7RUFDRSx5QkFBQTtVQUFBLGlCQUFBO0FBWkYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbn1cbiNyZXN1bWUtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jcmVzdW1lIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiaGVhZGVyIHNpZGUtaGVhZGVyXCJcbiAgICBcImNvbnRlbnQgc2lkZVwiXG4gICAgXCJjb250ZW50IHNpZGVcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICNyZXN1bWUge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgIFwiaGVhZGVyXCJcbiAgICAgIFwic2lkZS1oZWFkZXJcIlxuICAgICAgXCJjb250ZW50XCJcbiAgICAgIFwic2lkZVwiO1xuICB9XG4gIGJsb2NrcXVvdGUge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTEycHgpIHtcbiAgI3Jlc3VtZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbi5uby1tYXJnaW4ge1xuICBtYXJnaW46IDA7XG59XG4jaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbn1cbiNzaWRlLWhlYWRlciB7XG4gIGdyaWQtYXJlYTogc2lkZS1oZWFkZXI7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgLy8gYmFja2dyb3VuZDogIzJlMzg5NDtcbn1cbiNzaWRlIHtcbiAgZ3JpZC1hcmVhOiBzaWRlO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIC8vIGJhY2tncm91bmQ6ICMwMzRjOWQ7XG4gIC5zaWRlLXNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbiNjb250ZW50IHtcbiAgZ3JpZC1hcmVhOiBjb250ZW50O1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG59XG5cbmJsb2NrcXVvdGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmV4cGVyaWVuY2Uge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAuZXhwZXJpZW5jZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAudGl0bGUge1xuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gICAgfVxuICAgIC5kYXRlIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgfVxuICB9XG59XG5cbi5lZHVjYXRpb24ge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxufVxuXG4uY29udGFjdCB7XG59XG5cbmgxLmJhbm5lciB7XG4gIGZvbnQtc2l6ZTogMS43NWVtO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAubm8tcHJpbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucHJpbnQtb25seSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG4gICNyZXN1bWUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gICNyZXN1bWUge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgYmxvY2txdW90ZSB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5za2lsbC1jaGlwcyB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

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
  production: false
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