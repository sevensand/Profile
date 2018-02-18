webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_contactus_contactus_component__ = __webpack_require__("../../../../../src/app/components/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_services_services_component__ = __webpack_require__("../../../../../src/app/components/services/services.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_4__components_about_about_component__["a" /* AboutComponent */],
    },
    {
        path: 'portfolio',
        component: __WEBPACK_IMPORTED_MODULE_5__components_portfolio_portfolio_component__["a" /* PortfolioComponent */]
    },
    {
        path: 'contactus',
        component: __WEBPACK_IMPORTED_MODULE_6__components_contactus_contactus_component__["a" /* ContactusComponent */]
    },
    {
        path: 'services',
        component: __WEBPACK_IMPORTED_MODULE_7__components_services_services_component__["a" /* ServicesComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*ICON IN TOOLBAR*/\r\n.fixed-header {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 2;\r\n    width: 100%  !important;\r\n}\r\n.icon-spacer{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topheader></app-topheader>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider_profile_profile_service__ = __webpack_require__("../../../../../src/app/provider/profile/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(profileProvider) {
        var _this = this;
        this.profileProvider = profileProvider;
        this.profileProvider.getName()
            .subscribe(function (res) { return _this.name = res; });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__provider_profile_profile_service__["a" /* ProfileProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__provider_profile_profile_service__["a" /* ProfileProvider */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__provider_profile_profile_service__ = __webpack_require__("../../../../../src/app/provider/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sidemenu_sidemenu_component__ = __webpack_require__("../../../../../src/app/sidemenu/sidemenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__topheader_topheader_component__ = __webpack_require__("../../../../../src/app/topheader/topheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_contactus_contactus_component__ = __webpack_require__("../../../../../src/app/components/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_fusioncharts__ = __webpack_require__("../../../../angular2-fusioncharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_fusioncharts__ = __webpack_require__("../../../../fusioncharts/fusioncharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_fusioncharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_fusioncharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_fusioncharts_fusioncharts_charts__ = __webpack_require__("../../../../fusioncharts/fusioncharts.charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_fusioncharts_fusioncharts_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_fusioncharts_fusioncharts_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_fusioncharts_themes_fusioncharts_theme_fint__ = __webpack_require__("../../../../fusioncharts/themes/fusioncharts.theme.fint.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_fusioncharts_themes_fusioncharts_theme_fint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_fusioncharts_themes_fusioncharts_theme_fint__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_services_services_component__ = __webpack_require__("../../../../../src/app/components/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_message_message_component__ = __webpack_require__("../../../../../src/app/components/message/message.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























__WEBPACK_IMPORTED_MODULE_16_angular2_fusioncharts__["a" /* FusionChartsModule */].fcRoot(__WEBPACK_IMPORTED_MODULE_17_fusioncharts__, __WEBPACK_IMPORTED_MODULE_18_fusioncharts_fusioncharts_charts__, __WEBPACK_IMPORTED_MODULE_19_fusioncharts_themes_fusioncharts_theme_fint__);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__sidemenu_sidemenu_component__["a" /* SidemenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__topheader_topheader_component__["a" /* TopheaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_portfolio_portfolio_component__["a" /* PortfolioComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_contactus_contactus_component__["a" /* ContactusComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_services_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_dialog_dialog_component__["a" /* DialogComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_message_message_component__["a" /* MessageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["q" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["v" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["z" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["n" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["p" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["l" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["t" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["s" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["u" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["w" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["A" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["r" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["x" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["y" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_13__app_routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_16_angular2_fusioncharts__["a" /* FusionChartsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MatDialogModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_21__components_dialog_dialog_component__["a" /* DialogComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_message_message_component__["a" /* MessageComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_9__sidemenu_sidemenu_component__["a" /* SidemenuComponent */], __WEBPACK_IMPORTED_MODULE_10__topheader_topheader_component__["a" /* TopheaderComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__provider_profile_profile_service__["a" /* ProfileProvider */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about_body{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n}\r\n.about_body{\r\nmargin-top: 64px;\r\n}\r\n.about_body .about_content {\r\n  width: 100%;\r\n}\r\n.about_body .about_skills {\r\n  width: 33%;\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  .about_body {\r\n    display: block;\r\n  }\r\n  .about_body .about_content {\r\n    width: 100%;\r\n    margin: 0 0 10px;\r\n  }\r\n}\r\n.mat-card {\r\n  top: 5px;\r\n}\r\n\r\n.image_about {\r\n  position: relative;\r\n  margin-top: -90px;\r\n  width: 150px;\r\n  height: 150px;\r\n  background-size: cover;\r\n\r\n}\r\n\r\n\r\n/* SKILLLS */\r\n\r\n.about_skills_body {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n}\r\n\r\n .about_skills_body .about_skills {\r\n  width: 100%;\r\n  padding: 5px;\r\n}\r\n@media (max-width: 1200px) {\r\n  .about_skills {\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .about_skills_body {\r\n    display: block;\r\n  }\r\n  .about_skills {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n\r\n.about_skills .skills_content {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.skills_icon {\r\n  font-size: 30px;\r\n}\r\n.skills-icon {\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about_body\">\n  <div class=\"about_content\">\n    <mat-card>\n    <mat-card-content>\n\n<mat-card class=\"matcard-slunt\">\n  <mat-card-content>\n    <img mat-card-image src=\"assets/qatarn.jpg\" alt=\"\">\n            <div mat-card-avatar class=\"image_about\" style=\"background-image:url('assets/profile.jpg')\"></div>\n    <p>\n    <strong class=\"mat-h2\">Bryan Yabut Mesias</strong>\n    <br>\n    <strong>Full Stack Developer</strong>\n    <br>\n  <strong>  Nabco - Doha, Qatar</strong>\n</p>\n\n    <div class=\"proj\">\n      <h2 class=\"mat-h2\">About</h2>\n      <h3 class=\"mat-h3\">Let me introduce myself.</h3>\n      <p>\n        Full Stack Developer, specialized in everything from front-end to back-end, have specialized knowledge in all stages of web/software development.\n      </p>\n      <p>\n        An experienced PHP and Javascript developer with 6+ year’s relevant experience in web applications and systems development with extensive experience in different technologies like in HTML5, HTML, CSS, JQuery, REST APIs, NodeJS, AngualarJs, ExpressJS, VueJs, Laravel, MongoDB, NoSQL, MYSQL, ORACLE and various web scripting technologies.\n      </p>\n    </div>\n\n    <h3 class=\"mat-h3\">CV</h3>\n    <h3 class=\"mat-h3\">More of my credentials</h3>\n    <p>Although i have 6 year's in Web Development, I feel that no matter how much i make, it was not be enough, i need something new, something to improved.</p>\n\n<!-- WORK EXPERIENCE -->\n    <h3 class=\"mat-h3\">Work Experience</h3>\n    <h3 class=\"mat-h3\">Web Developer - Nabco, Doha Qatar</h3>\n    <p>\n        <li>Develop, implement and maintain object oriented backend application</li>\n        <li>Modify and manage web content for end users.</li>\n        <li>Code, Test and Implement.</li>\n        <li>Manage programming and scripting duties.</li>\n        <li>Manage documentation for usability and application solutions.</li>\n        <li>Debug errors and problems within database and application.</li>\n        <li>Integrate database with web content management system.</li>\n    </p>\n\n    <h3 class=\"mat-h3\">Web Developer - STORM MI SOLUTIONS, Philippines</h3>\n    <p>\n    <li>\tCollaborate with designers to create interfaces.</li>\n    <li>\tDevelop projects concept and maintain optimal workflow.</li>\n    <li>\tCompleting small and medium sized projects depend upon the functionality of the project.</li>\n    <li>\tCoordinate and work with team members on the web application projects.</li>\n    <li>\tCode, test and implement the requirements of the project.</li>\n    <li>\tContribute to team discussions</li>\n  </p>\n\n  <h3 class=\"mat-h3\">Web Developer - PhilinterLife, Philippines</h3>\n  <p>\n    <li>\tWork with senior developer to manage, complex design projects for corporation</li>\n    <li>\tDeveloped projects concept and maintain optimal workflow</li>\n    <li>\tComplete detailed programming and development tasks.</li>\n</p>\n\n\n<!-- WORK EXPERIENCE -->\n\n<!-- SKILLS -->\n      <h2 class=\"mat-h2\">SKILLS</h2>\n      <p>I Started Coding since 2011</p>\n    <div class=\"about_skills_body\">\n      <div class=\"about_skills\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n              <h2 class=\"mat-h2\">PHP</h2>\n          </mat-card-title>\n          <mat-card-content>\n            <div class=\"skills_content\">\n              <h1 class=\"skills_icon\"><img src=\"assets/expirenced.png\" class=\"skills-icon\"/> 90%</h1>\n            </div>\n          </mat-card-content>\n            <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n        </mat-card>\n      </div>\n      <div class=\"about_skills\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n              <h2 class=\"mat-h2\">Javascript</h2>\n          </mat-card-title>\n          <mat-card-content>\n      <div class=\"skills_content\">\n        <h1 class=\"skills_icon\"><img src=\"assets/expirenced.png\" class=\"skills-icon\"/> 90%</h1>\n      </div>\n          </mat-card-content>\n            <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n        </mat-card>\n      </div>\n\n      <div class=\"about_skills\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n              <h2 class=\"mat-h2\">HTML5</h2>\n          </mat-card-title>\n          <mat-card-content>\n      <div class=\"skills_content\">\n        <h1 class=\"skills_icon\"><img src=\"assets/expirenced.png\" class=\"skills-icon\"/> 90%</h1>\n      </div>\n          </mat-card-content>\n            <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n        </mat-card>\n      </div>\n\n      <div class=\"about_skills\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n              <h2 class=\"mat-h2\">CSS3</h2>\n          </mat-card-title>\n          <mat-card-content>\n      <div class=\"skills_content\">\n        <h1 class=\"skills_icon\"><img src=\"assets/expirenced.png\" class=\"skills-icon\"/> 90%</h1>\n      </div>\n          </mat-card-content>\n            <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n        </mat-card>\n      </div>\n      <div class=\"about_skills\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n              <h2 class=\"mat-h2\">EXPRESS JS</h2>\n          </mat-card-title>\n          <mat-card-content>\n      <div class=\"skills_content\">\n        <h1 class=\"skills_icon\"><img src=\"assets/expirenced.png\" class=\"skills-icon\"/> 90%</h1>\n      </div>\n          </mat-card-content>\n            <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n        </mat-card>\n      </div>\n    </div>\n<!-- SECOND COLUMNS -->\n    <div class=\"about_skills_body\">\n      <div class=\"about_skills\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n              <h2 class=\"mat-h2\">NODEJS</h2>\n          </mat-card-title>\n          <mat-card-content>\n            <div class=\"skills_content\">\n              <h1 class=\"skills_icon\"><img src=\"assets/expirenced.png\" class=\"skills-icon\"/> 70%</h1>\n            </div>\n          </mat-card-content>\n            <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n        </mat-card>\n      </div>\n      <div class=\"about_skills\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n              <h2 class=\"mat-h2\">ANGULAR JS 2/4</h2>\n          </mat-card-title>\n          <mat-card-content>\n      <div class=\"skills_content\">\n        <h1 class=\"skills_icon\"><img src=\"assets/expirenced.png\" class=\"skills-icon\"/> 70%</h1>\n      </div>\n          </mat-card-content>\n            <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n        </mat-card>\n      </div>\n\n      <div class=\"about_skills\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n              <h2 class=\"mat-h2\">VUE JS 1/2</h2>\n          </mat-card-title>\n          <mat-card-content>\n      <div class=\"skills_content\">\n        <h1 class=\"skills_icon\"><img src=\"assets/expirenced.png\" class=\"skills-icon\"/> 75%</h1>\n      </div>\n          </mat-card-content>\n            <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n        </mat-card>\n      </div>\n\n      <div class=\"about_skills\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n              <h2 class=\"mat-h2\">IONIC 2</h2>\n          </mat-card-title>\n          <mat-card-content>\n      <div class=\"skills_content\">\n        <h1 class=\"skills_icon\"><img src=\"assets/expirenced.png\" class=\"skills-icon\"/> 70%</h1>\n      </div>\n          </mat-card-content>\n            <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n        </mat-card>\n      </div>\n\n      <div class=\"about_skills\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n              <h2 class=\"mat-h2\">LARAVEL</h2>\n          </mat-card-title>\n          <mat-card-content>\n      <div class=\"skills_content\">\n        <h1 class=\"skills_icon\"><img src=\"assets/expirenced.png\" class=\"skills-icon\"/> 90%</h1>\n      </div>\n          </mat-card-content>\n            <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n        </mat-card>\n      </div>\n    </div>\n<!-- THIRD COLUMNS -->\n\n<div class=\"about_skills_body\">\n  <div class=\"about_skills\">\n    <mat-card class=\"matcard-slunt\">\n      <mat-card-title class=\"title-head\">\n          <h2 class=\"mat-h2\">REST API</h2>\n      </mat-card-title>\n      <mat-card-content>\n        <div class=\"skills_content\">\n          <h1 class=\"skills_icon\"><img src=\"assets/expirenced.png\" class=\"skills-icon\"/> 80%</h1>\n        </div>\n      </mat-card-content>\n        <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n    </mat-card>\n  </div>\n  <div class=\"about_skills\">\n    <mat-card class=\"matcard-slunt\">\n      <mat-card-title class=\"title-head\">\n          <h2 class=\"mat-h2\">NOSQL</h2>\n      </mat-card-title>\n      <mat-card-content>\n  <div class=\"skills_content\">\n    <h1 class=\"skills_icon\"><img src=\"assets/expirenced.png\" class=\"skills-icon\"/> 70%</h1>\n  </div>\n      </mat-card-content>\n        <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n    </mat-card>\n  </div>\n\n  <div class=\"about_skills\">\n    <mat-card class=\"matcard-slunt\">\n      <mat-card-title class=\"title-head\">\n          <h2 class=\"mat-h2\">MYSQL</h2>\n      </mat-card-title>\n      <mat-card-content>\n  <div class=\"skills_content\">\n    <h1 class=\"skills_icon\"><img src=\"assets/expirenced.png\" class=\"skills-icon\"/> 75%</h1>\n  </div>\n      </mat-card-content>\n        <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n    </mat-card>\n  </div>\n\n  <div class=\"about_skills\">\n    <mat-card class=\"matcard-slunt\">\n      <mat-card-title class=\"title-head\">\n          <h2 class=\"mat-h2\">ORACLE</h2>\n      </mat-card-title>\n      <mat-card-content>\n  <div class=\"skills_content\">\n    <h1 class=\"skills_icon\"><img src=\"assets/expirenced.png\" class=\"skills-icon\"/> 70%</h1>\n  </div>\n      </mat-card-content>\n        <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n    </mat-card>\n  </div>\n\n  <div class=\"about_skills\">\n    <mat-card>\n      <mat-card-title class=\"title-head\">\n          <h2 class=\"mat-h2\">Cordova</h2>\n      </mat-card-title>\n      <mat-card-content>\n  <div class=\"skills_content\">\n    <h1 class=\"skills_icon\"><img src=\"assets/expirenced.png\" class=\"skills-icon\"/> 90%</h1>\n  </div>\n      </mat-card-content>\n        <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n    </mat-card>\n  </div>\n</div>\n\n\n\n      <!-- <mat-slider [max]=\"100\" [value]=\"90\" disabled=\"true\"></mat-slider>\n      <h4><img src=\"assets/js.png\" style=\"width:50px;height:50px;\" /></h4>\n      <mat-slider [max]=\"100\" [value]=\"88\" disabled=\"true\"></mat-slider>\n      <h4> <img src=\"assets/html5.png\" style=\"width:50px;height:50px;\" /></h4>\n      <mat-slider [max]=\"100\" [value]=\"95\" disabled=\"true\"></mat-slider>\n      <h4> <img src=\"assets/css3.png\" style=\"width:50px;height:50px;\" /></h4>\n      <mat-slider [max]=\"100\" [value]=\"85\" disabled=\"true\"></mat-slider>\n      <h4> <img src=\"assets/node.png\" style=\"width:50px;height:50px;\" /></h4>\n      <mat-slider [max]=\"100\" [value]=\"75\" disabled=\"true\"></mat-slider>\n      <h4><img src=\"assets/angular.png\" style=\"width:50px;height:50px;\" /></h4>\n      <mat-slider [max]=\"100\" [value]=\"70\" disabled=\"true\"></mat-slider>\n      <h4> <img src=\"assets/ionic.png\" style=\"width:50px;height:50px;\" /></h4>\n      <mat-slider [max]=\"100\" [value]=\"70\" disabled=\"true\"></mat-slider>\n      <h4> <img src=\"assets/vue.png\" style=\"width:50px;height:50px;\" /></h4>\n      <mat-slider [max]=\"100\" [value]=\"75\" disabled=\"true\"></mat-slider>\n      <h4> <img src=\"assets/express.png\" style=\"width:50px;height:50px;\" /></h4>\n      <mat-slider [max]=\"100\" [value]=\"70\" disabled=\"true\"></mat-slider> -->\n  <!-- SKILLS -->\n\n  </mat-card-content>\n</mat-card>\n\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\">View More..</button>\n      <button mat-raised-button color=\"primary\">Hired Me</button>\n    </mat-card-actions>\n  </mat-card>\n  </div>\n</div>\n<!-- <div class=\"about_skills\">\n  <mat-card class=\"matcard-slunt\">\n    <mat-card-content>\n\n        <h2 class=\"mat-h2\">SKILLS</h2>\n        <p>I Started Coding and Design in 2011</p>\n        <h4><img src=\"assets/php.png\" style=\"width:50px;height:50px;\" /></h4>\n        <mat-slider [max]=\"100\" [value]=\"90\" disabled=\"true\"></mat-slider>\n        <h4><img src=\"assets/js.png\" style=\"width:50px;height:50px;\" /></h4>\n        <mat-slider [max]=\"100\" [value]=\"88\" disabled=\"true\"></mat-slider>\n        <h4> <img src=\"assets/html5.png\" style=\"width:50px;height:50px;\" /></h4>\n        <mat-slider [max]=\"100\" [value]=\"95\" disabled=\"true\"></mat-slider>\n        <h4> <img src=\"assets/css3.png\" style=\"width:50px;height:50px;\" /></h4>\n        <mat-slider [max]=\"100\" [value]=\"85\" disabled=\"true\"></mat-slider>\n        <h4> <img src=\"assets/node.png\" style=\"width:50px;height:50px;\" /></h4>\n        <mat-slider [max]=\"100\" [value]=\"75\" disabled=\"true\"></mat-slider>\n        <h4><img src=\"assets/angular.png\" style=\"width:50px;height:50px;\" /></h4>\n        <mat-slider [max]=\"100\" [value]=\"70\" disabled=\"true\"></mat-slider>\n        <h4> <img src=\"assets/ionic.png\" style=\"width:50px;height:50px;\" /></h4>\n        <mat-slider [max]=\"100\" [value]=\"70\" disabled=\"true\"></mat-slider>\n        <h4> <img src=\"assets/vue.png\" style=\"width:50px;height:50px;\" /></h4>\n        <mat-slider [max]=\"100\" [value]=\"75\" disabled=\"true\"></mat-slider>\n        <h4> <img src=\"assets/express.png\" style=\"width:50px;height:50px;\" /></h4>\n        <mat-slider [max]=\"100\" [value]=\"70\" disabled=\"true\"></mat-slider>\n    </mat-card-content>\n  </mat-card>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/contactus/contactus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contactus_top {\r\n  margin-top: 64px;\r\n}\r\n.contactus_container {\r\n  padding-top: 15px;\r\n}\r\n.contactus_row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n}\r\n\r\n.contactus_row .contactus_col {\r\n  width: 50%;\r\n}\r\n.contactus_col {\r\n  margin-right: 5px;\r\n}\r\n\r\n\r\n.form_container {\r\ndisplay: -webkit-box;\r\ndisplay: -ms-flexbox;\r\ndisplay: flex;\r\n-webkit-box-orient: vertical;\r\n-webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\nwidth: 100%;\r\n}\r\n.mat-form-field {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contactus/contactus.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contactus_top\">\n  <div class=\"contactus_container\">\n    <div class=\"contactus_row\">\n\n      <div class=\"contactus_col\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n            <h2 class=\"mat-h2\">CONTACT ME</h2>\n          </mat-card-title>\n          <mat-card-content>\n            <p>Email: bryanmesias@yahoo.com, sevensand29@gmail.com</p>\n            <p>Skype: sevensand29</p>\n            <p>Mobile No: +974 331 69174</p>\n            <p>Viber: +974 331 69174</p>\n            <p>LinkedIn: https://www.linkedin.com/in/bryan-mesias-257176102/</p>\n          </mat-card-content>\n        </mat-card>\n      </div>\n\n      <div class=\"contactus_col\">\n      <mat-card class=\"matcard-slunt\">\n        <mat-card-title class=\"title-head\">\n          <h2 class=\"mat-h2\">EMAIL FORM</h2>\n        </mat-card-title>\n        <mat-card-content>\n      <div class=\"form_container\">\n        <mat-form-field>\n          <input matInput placeholder=\"Name\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n          <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Subject\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <textarea matInput placeholder=\"Textarea\"></textarea>\n        </mat-form-field>\n      </div>\n      <button mat-raised-button color=\"primary\">Send</button>\n      <button mat-raised-button color=\"primary\">Clear</button>\n        </mat-card-content>\n      </mat-card>\n    </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/contactus/contactus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactusComponent = (function () {
    function ContactusComponent() {
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]);
    }
    ContactusComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    ContactusComponent.prototype.ngOnInit = function () {
    };
    return ContactusComponent;
}());
ContactusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contactus',
        template: __webpack_require__("../../../../../src/app/components/contactus/contactus.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/contactus/contactus.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactusComponent);

//# sourceMappingURL=contactus.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top-dashboard {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n}\r\n.dashboard_body{\r\nmargin-top: 5px;\r\n}\r\n.top-dashboard .dash-top {\r\n  width: 100%;\r\n}\r\n.dash_tophead {\r\n  margin-top: 63px;\r\n}\r\n\r\n\r\n@media(max-width:800px) {\r\n  .top-dashboard {\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  .top-dashboard {\r\n    display: block;\r\n  }\r\n  .top-dashboard .dash-top {\r\n    width: 100%;\r\n    margin: 0 0 10px;\r\n  }\r\n}\r\n.dash-top {\r\n  padding: 5px;\r\n}\r\n.proj {\r\n  text-align: center;\r\n}\r\n.proj-cont {\r\n  font-size: 40px;\r\n  font-weight: 400;\r\n}\r\n.proj-weather {\r\n  /*top: 0px;\r\n  display: inline-block;\r\n  width: auto;\r\n  max-width: 220px;\r\n  position:absol:;ute;*/\r\n}\r\n.mat-list-item {\r\n  width: 100%;\r\n}\r\n.material-icons {\r\n  font-size: 40px;\r\n}\r\n\r\n.matcard-slunt {\r\n  -webkit-transform: skewX(-20);\r\n          transform: skewX(-20);\r\n    border-radius: 24px 0px;\r\n}\r\n.matcard-slunt-1 {\r\n  -webkit-transform: skewX(-20);\r\n          transform: skewX(-20);\r\n    border-radius: 24px 0px;\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/sky.jpg") + ");\r\n}\r\n.matcard-slunt-2{\r\n  -webkit-transform: skewX(-20);\r\n          transform: skewX(-20);\r\n    border-radius: 24px 0px;\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/philippines.jpg") + ");\r\n}\r\n\r\nmat-slider {\r\n  width: 100%;\r\n}\r\n.top-icon {\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n.img_xmas {\r\n  width: 90px;\r\n  height: 70px;\r\n  padding-top: 3px;\r\n}\r\n\r\nmat-row:nth-child(even){\r\n background-color:#726f6f;\r\n}\r\nmat-row:nth-child(odd){\r\nbackground-color:#424242;\r\n}\r\n.mat-table::-webkit-scrollbar {\r\nwidth: 10px;\r\nbackground-color: #b50e39;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 360px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard_body dash_tophead\">\n<div class=\"top-dashboard\" >\n<div class=\"dash-top\">\n  <mat-card class=\"matcard-slunt\">\n    <mat-card-title class=\"title-head\">\n        <h2 class=\"mat-h2\">PROJECTS</h2>\n    </mat-card-title>\n    <mat-card-content>\n  <div class=\"proj\">\n    <h1 class=\"proj-cont\"><img src=\"assets/global.png\" class=\"top-icon\"/> 78</h1>\n  </div>\n    </mat-card-content>\n      <mat-progress-bar mode=\"indeterminate\" color=\"\"></mat-progress-bar>\n  </mat-card>\n</div>\n<div class=\"dash-top\">\n  <mat-card class=\"matcard-slunt\">\n    <mat-card-title class=\"title-head\">\n        <h2 class=\"mat-h2\">CODE LINES</h2>\n    </mat-card-title>\n    <mat-card-content>\n<div class=\"proj\">\n  <h1 class=\"proj-cont\"><img src=\"assets/tv.png\" class=\"top-icon\"/> 98,000</h1>\n</div>\n  <mat-progress-bar mode=\"indeterminate\" color=\"\"></mat-progress-bar>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n<div class=\"dash-top\">\n  <mat-card class=\"matcard-slunt\">\n    <mat-card-title class=\"title-head\">\n        <h2 class=\"mat-h2\">EXPERIENCE</h2>\n    </mat-card-title>\n    <mat-card-content>\n<div class=\"proj\">\n  <h1 class=\"proj-cont\"><img src=\"assets/expirenced.png\" class=\"top-icon\"/> 6</h1>\n</div>\n    </mat-card-content>\n      <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n  </mat-card>\n</div>\n\n<div class=\"dash-top\">\n  <mat-card class=\"matcard-slunt\">\n    <mat-card-title class=\"title-head\">\n        <h2 class=\"mat-h2\">TECHNOLOGIES</h2>\n    </mat-card-title>\n    <mat-card-content>\n<div class=\"proj\">\n      <h1 class=\"proj-cont\"><img src=\"assets/connected.png\" class=\"top-icon\"/> 24</h1>\n</div>\n    </mat-card-content>\n      <mat-progress-bar mode=\"indeterminate\" color=\"\"></mat-progress-bar>\n  </mat-card>\n</div>\n</div>\n</div>\n\n\n<div class=\"dashboard_body\">\n<div class=\"top-dashboard\" >\n  <div class=\"dash-top\">\n    <mat-card class=\"matcard-slunt-1\">\n      <mat-card-title class=\"title-head\">\n          <div *ngFor=\"let item of weathercountry\">\n            <h3>{{ item.name }}</h3>\n            <h3 class=\"mat-h3\" style=\"margin-top:-20px;\">{{today | date:'fullDate'}}</h3>\n          </div>\n      </mat-card-title>\n      <mat-card-content>\n        <div class=\"proj-weather\">\n          <div *ngFor=\"let item of weathercountry\">\n              <div class=\"proj\">\n                <div *ngFor=\"let newitem of item.weather\">\n                  <img src=\"http://openweathermap.org/img/w/{{newitem.icon}}.png\"  width=\"80px\" height=\"80px;\"/><h1> {{ item.main.temp - 273.15 }}&#8451;</h1><h1>{{ newitem.main }}</h1>\n                </div>\n                <h3 class=\"proj-cont\"></h3>\n              </div>\n          </div>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n\n\n  <div class=\"dash-top\">\n    <mat-card class=\"matcard-slunt\">\n      <mat-card-content>\n        <img mat-card-image src=\"assets/philworldtour.jpg\" alt=\"\">\n        <h2 class=\"mat-h2\">What Can I Do For You?</h2>\n\n          <p>Full Stack Developer is a someone who is able to work on both side front-end and back-end portions of an application.  Front-end generally refers to the portion of an application the user will see or interact with, and the back-end is the part of the application that handles the logic, database interactions, user authentication, server configuration.</p>\n\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-raised-button color=\"primary\">View More..</button>\n        <button mat-raised-button color=\"primary\">Hired Me</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n\n  <div class=\"dash-top\">\n    <mat-card class=\"matcard-slunt\">\n      <mat-card-header>\n\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"proj-weather\">\n          <h1>\n            {{title}}\n          </h1>\n          <fusioncharts\n              width=\"100%\"\n              height=\"350\"\n              type=\"pie3d\"\n              dataFormat=\"JSON\"\n              [dataSource]=\"dataChart\"\n          ></fusioncharts>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div class=\"dash-top\">\n    <mat-card class=\"matcard-slunt\">\n      <mat-card-content>\n        <h2 class=\"mat-h2\">MY BLOG</h2>\n        <div class=\"proj\">\n          <div class=\"example-container mat-elevation-z8\">\n            <mat-table #table [dataSource]=\"dataSource\">\n\n              <ng-container matColumnDef=\"image\">\n                <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n                <mat-cell *matCellDef=\"let user\"> <img src=\"assets/{{user.img}}\" class=\"img_xmas\" />  </mat-cell>\n              </ng-container>\n              <div mat-card-avatar class=\"image-profile\" style=\"background-image:url('assets/profile.jpg')\"></div>\n              <ng-container matColumnDef=\"title\">\n                <mat-header-cell *matHeaderCellDef>  <h3>Topics</h3> </mat-header-cell>\n                <mat-cell *matCellDef=\"let user\"> {{user.title}} </mat-cell>\n              </ng-container>\n\n              <ng-container matColumnDef=\"mydate\">\n                <mat-header-cell *matHeaderCellDef>  </mat-header-cell>\n                <mat-cell *matCellDef=\"let user\"> {{user.idate}} </mat-cell>\n              </ng-container>\n\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n            </mat-table>\n          </div>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* unused harmony export MyDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider_profile_profile_service__ = __webpack_require__("../../../../../src/app/provider/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(profileProvider) {
        var _this = this;
        this.profileProvider = profileProvider;
        this.today = Date.now();
        this.dataSource = new MyDataSource(this.profileProvider);
        this.displayedColumns = ['image', 'title', 'mydate'];
        this.weathercountry = [];
        this.profileProvider.getWeather()
            .subscribe(function (res) {
            _this.weathercountry.push(JSON.parse(res));
        });
        this.title = "";
        this.dataChart = {
            "chart": {
                "caption": "SITE VISITS",
                "bgColor": "#424242",
                "bgAlpha": "100",
                "bgImageDisplayMode": "stretch",
                "theme": "fint",
                "baseFontColor": "#0066cc",
                "outCnvBaseFontColor": "#0066cc",
            },
            "data": [{
                    "label": "ASIA",
                    "value": "175"
                }, {
                    "label": "EUROPE",
                    "value": "52"
                }, {
                    "label": "AMERICA",
                    "value": "87"
                }, {
                    "label": "AUSTRALIA",
                    "value": "23"
                }, {
                    "label": "AFRICA",
                    "value": "15"
                }]
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__provider_profile_profile_service__["a" /* ProfileProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__provider_profile_profile_service__["a" /* ProfileProvider */]) === "function" && _a || Object])
], DashboardComponent);

var MyDataSource = (function (_super) {
    __extends(MyDataSource, _super);
    function MyDataSource(profileProvider) {
        var _this = _super.call(this) || this;
        _this.profileProvider = profileProvider;
        return _this;
    }
    MyDataSource.prototype.connect = function () {
        return this.profileProvider.getBlog();
    };
    MyDataSource.prototype.disconnect = function () { };
    return MyDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["a" /* DataSource */]));

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dialog/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<h2 mat-dialog-title>About this Apps</h2>\n  <h3>Version 0.0.1</h3>\n<mat-dialog-content>\n  <li>Node js</li>\n  <li>Express js</li>\n  <li>Angular js 4</li>\n  <li>Angular Material 2</li>\n  <li>CSS</li>\n  <li>HTML</li>\n  <li>Rest API</li>\n  <li>NoSQL</li>\n  <li>MLAB</li>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button color=\"primary\" (click)=\"onCloseCancel()\">Close</button>\n</mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogComponent = (function () {
    function DialogComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Confirm');
    };
    return DialogComponent;
}());
DialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dialog',
        template: __webpack_require__("../../../../../src/app/components/dialog/dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dialog/dialog.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */]) === "function" && _a || Object, Object])
], DialogComponent);

var _a;
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/message/message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<h2 mat-dialog-title>Message</h2>\n<form>\n  <mat-dialog-content>\n    <mat-form-field>\n      <input matInput placeholder=\"Name\" name=\"sender\" [(ngModel)] = \"sender\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Subject\" name=\"subject\" [(ngModel)] = \"subject\">\n    </mat-form-field>\n    <mat-form-field>\n      <textarea matInput placeholder=\"Message\" name=\"message\" [(ngModel)] = \"message\"></textarea>\n    </mat-form-field>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-raised-button color=\"primary\" (click)=\"sendMessage(event)\">Send</button>\n    <button mat-raised-button color=\"primary\" (click)=\"onCloseCancel()\">Close</button>\n  </mat-dialog-actions>\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* unused harmony export Inbox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider_profile_profile_service__ = __webpack_require__("../../../../../src/app/provider/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MessageComponent = (function () {
    function MessageComponent(profileProvider, thisDialogRef, data) {
        this.profileProvider = profileProvider;
        this.thisDialogRef = thisDialogRef;
        this.data = data;
        this.Inbox = [];
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent.prototype.sendMessage = function (event) {
        var _this = this;
        var data = {
            sender: this.sender,
            subject: this.subject,
            message: this.message
        };
        this.profileProvider.getInbox(data)
            .subscribe(function (res) {
            _this.Inbox.push(res);
        });
        this.thisDialogRef.close('Confirm');
    };
    MessageComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Confirm');
    };
    return MessageComponent;
}());
MessageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-message',
        template: __webpack_require__("../../../../../src/app/components/message/message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/message/message.component.css")]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__provider_profile_profile_service__["a" /* ProfileProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__provider_profile_profile_service__["a" /* ProfileProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogRef */]) === "function" && _b || Object, Object])
], MessageComponent);

var Inbox = (function () {
    function Inbox() {
    }
    return Inbox;
}());

var _a, _b;
//# sourceMappingURL=message.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top-dashboard {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n}\r\n.dashboard_body{\r\nmargin-top: 5px;\r\n}\r\n.top-dashboard .dash-top {\r\n  width: 100%;\r\n}\r\n.dash_tophead {\r\n  margin-top: 63px;\r\n}\r\n\r\n\r\n@media(max-width:800px) {\r\n  .top-dashboard {\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  .top-dashboard {\r\n    display: block;\r\n  }\r\n  .top-dashboard .dash-top {\r\n    width: 100%;\r\n    margin: 0 0 10px;\r\n  }\r\n}\r\n.dash-top {\r\n  padding: 5px;\r\n}\r\n.proj {\r\n  text-align: center;\r\n}\r\n.proj-cont {\r\n  font-size: 40px;\r\n  font-weight: 400;\r\n}\r\n.proj-weather {\r\n  /*top: 0px;\r\n  display: inline-block;\r\n  width: auto;\r\n  max-width: 220px;\r\n  position:absol:;ute;*/\r\n}\r\n.mat-list-item {\r\n  width: 100%;\r\n}\r\n.material-icons {\r\n  font-size: 40px;\r\n}\r\n\r\n.matcard-slunt {\r\n  -webkit-transform: skewX(-20);\r\n          transform: skewX(-20);\r\n    border-radius: 24px 0px;\r\n}\r\n.matcard-slunt-1 {\r\n  -webkit-transform: skewX(-20);\r\n          transform: skewX(-20);\r\n    border-radius: 24px 0px;\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/sky.jpg") + ");\r\n}\r\n.matcard-slunt-2{\r\n  -webkit-transform: skewX(-20);\r\n          transform: skewX(-20);\r\n    border-radius: 24px 0px;\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/philippines.jpg") + ");\r\n}\r\n\r\nmat-slider {\r\n  width: 100%;\r\n}\r\n.top-icon {\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n.img_xmas {\r\n  width: 90px;\r\n  height: 70px;\r\n  padding-top: 3px;\r\n}\r\n\r\nmat-row:nth-child(even){\r\n background-color:#726f6f;\r\n}\r\nmat-row:nth-child(odd){\r\nbackground-color:#424242;\r\n}\r\n.mat-table::-webkit-scrollbar {\r\nwidth: 10px;\r\nbackground-color: #b50e39;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 360px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard_body dash_tophead\">\n<div class=\"top-dashboard\" >\n  <div class=\"dash-top\">\n    <mat-card class=\"matcard-slunt\">\n      <mat-card-content>\n        <img mat-card-image src=\"assets/myworks/philworldtour.jpg\" alt=\"\">\n        <h2 class=\"mat-h2\">PHILIPPINE WORLD TOUR</h2>\n\n          <li>PHP, JAVASCRIPT, LARAVEL</li>\n          <li>VUE JS, VUEX, JQUERY, YARN</li>\n          <li>LARAVEL MIX, BOOTSTRAP-SASS</li>\n          <li>MYSQL, BABEL, AXIOS</li>\n          <li>CSS, HTML, LESS, BLADE</li>\n\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div class=\"dash-top\">\n    <mat-card class=\"matcard-slunt\">\n      <mat-card-content>\n        <img mat-card-image src=\"assets/myworks/dashboard.jpg\" alt=\"\">\n        <h2 class=\"mat-h2\">PHILWORLD TOURS CMS</h2>\n        <li>PHP, JAVASCRIPT, LARAVEL</li>\n        <li>VUE JS, VUEX, JQUERY, YARN</li>\n        <li>LARAVEL MIX, BOOTSTRAP-SASS</li>\n        <li>MYSQL, BABEL, AXIOS</li>\n        <li>CSS, HTML, LESS, BLADE</li>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div class=\"dash-top\">\n    <mat-card class=\"matcard-slunt\">\n      <mat-card-content>\n        <img mat-card-image src=\"assets/myworks/nabcogroup.jpg\" alt=\"\">\n        <h2 class=\"mat-h2\">NABCO FURNITURE</h2>\n\n        <li>PHP, JAVASCRIPT, LARAVEL</li>\n        <li>GULP, BOWER, LESS</li>\n        <li>JQUERY, BOOTSTRAP, BOOTBOX</li>\n        <li>MYSQL, INSTAFEED, PURL</li>\n        <li>CSS, HTML</li>\n\n\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n\n  <div class=\"dash-top\">\n    <mat-card class=\"matcard-slunt\">\n      <mat-card-content>\n        <img mat-card-image src=\"assets/myworks/nabcocms.jpg\" alt=\"\">\n        <h2 class=\"mat-h2\">NABCO FURNITURE CMS</h2>\n\n        <li>PHP, JAVASCRIPT, LARAVEL</li>\n        <li>GULP, BOWER, LESS</li>\n        <li>JQUERY, BOOTSTRAP, BOOTBOX</li>\n        <li>MYSQL, INSTAFEED, PURL</li>\n        <li>CSS, HTML</li>\n\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n</div>\n\n\n\n<div class=\"dashboard_body\">\n<div class=\"top-dashboard\" >\n  <div class=\"dash-top\">\n    <mat-card class=\"matcard-slunt\">\n      <mat-card-content>\n        <img mat-card-image src=\"assets/myworks/sunrise.jpg\" alt=\"\">\n        <h2 class=\"mat-h2\">SUNRISE RESIDENCE</h2>\n\n        <li>PHP, JAVASCRIPT, LARAVEL</li>\n        <li>VUE, VUEX, AXIOS, BABEL</li>\n        <li>JQUERY, BOOTSTRAP-SASS, BOOTBOX</li>\n        <li>MYSQL, LARAVEL-MIX, CROSS-ENV</li>\n        <li>CSS, HTML, WEBPACK</li>\n\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div class=\"dash-top\">\n    <mat-card class=\"matcard-slunt\">\n      <mat-card-content>\n        <img mat-card-image src=\"assets/myworks/sunriseresidence.jpg\" alt=\"\">\n        <h2 class=\"mat-h2\">SUNRISE WEB APPLICATION</h2>\n\n        <li>PHP, JAVASCRIPT, LARAVEL</li>\n        <li>VUE, VUEX, AXIOS, BABEL</li>\n        <li>JQUERY, BOOTSTRAP-SASS, BOOTBOX</li>\n        <li>MYSQL, LARAVEL-MIX, CROSS-ENV</li>\n        <li>CSS, HTML, WEBPACK</li>\n\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div class=\"dash-top\">\n    <mat-card class=\"matcard-slunt\">\n      <mat-card-content>\n        <img mat-card-image src=\"assets/myworks/weplay.jpg\" alt=\"\">\n        <h2 class=\"mat-h2\">WEPLAY MEDIA</h2>\n\n        <li>PHP, JAVASCRIPT</li>\n        <li>JQUERY, MYSQL</li>\n        <li>HTML, AJAX</li>\n        <li>BOOTSTRAP</li>\n        <li>CSS</li>\n\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n\n  <div class=\"dash-top\">\n    <mat-card class=\"matcard-slunt\">\n      <mat-card-content>\n        <img mat-card-image src=\"assets/myworks/championshipquet.jpg\" alt=\"\">\n        <h2 class=\"mat-h2\">CHAMPIONSHIPQUEST</h2>\n\n        <li>PHP, JAVASCRIPT, LARAVEL</li>\n        <li>JQUERY, REST API</li>\n        <li>HTML, MYSQL, AJAX</li>\n        <li>BOOTSTRAP</li>\n        <li>CSS</li>\n\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    return PortfolioComponent;
}());
PortfolioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-portfolio',
        template: __webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PortfolioComponent);

//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".services_top {\r\n  margin-top: 64px;\r\n}\r\n.services_container {\r\n  width: 100%;\r\n  padding-top: 15px;\r\n  padding-right: 5px;\r\n}\r\n.services_row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n  margin-top: 5px;\r\n}\r\n\r\n.services_row .services_col {\r\nwidth: 100%;\r\n}\r\n.services_col {\r\n  padding-right: 5px;\r\n}\r\n.top-icon {\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n@media(max-width:800px) {\r\n  .services_row {\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  .services_row {\r\n    display: block;\r\n  }\r\n  .services_row .services_col {\r\n    width: 100%;\r\n    margin: 0px 0 5px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"services_top\">\n  <div class=\"services_container\">\n    <div class=\"services_row\">\n      <div class=\"services_col\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n              <h2 class=\"mat-h2\">WEB DESIGN & DEVELOPMENT</h2>\n          </mat-card-title>\n          <mat-card-content>\n        <div class=\"proj\">\n          <h1 class=\"proj-cont\"><img src=\"assets/developed.png\" class=\"top-icon\"/></h1>\n          <p>why you need website? yes for your marketing, online brochure, more customers thru online, business value. </p>\n        </div>\n          </mat-card-content>\n            <mat-progress-bar mode=\"indeterminate\" color=\"\"></mat-progress-bar>\n        </mat-card>\n      </div>\n      <div class=\"services_col\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n              <h2 class=\"mat-h2\">WEBSITE REDESIGN</h2>\n          </mat-card-title>\n          <mat-card-content>\n        <div class=\"proj\">\n          <h1 class=\"proj-cont\"><img src=\"assets/brash.png\" class=\"top-icon\"/></h1>\n          <p>i can help you to enchance the original design of your website, outdate content and poor search engine ranking in google.</p>\n        </div>\n          </mat-card-content>\n            <mat-progress-bar mode=\"indeterminate\" color=\"\"></mat-progress-bar>\n        </mat-card>\n      </div>\n      <div class=\"services_col\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n              <h2 class=\"mat-h2\">WORDPRESS DEVELOPMENT</h2>\n          </mat-card-title>\n          <mat-card-content>\n        <div class=\"proj\">\n          <h1 class=\"proj-cont\"><img src=\"assets/wordpress.png\" class=\"top-icon\"/></h1>\n           <p>i can help you to specializes in developing custom WordPress CMS Websites like Personal blog,  business or enterprise level. </p>\n        </div>\n          </mat-card-content>\n            <mat-progress-bar mode=\"indeterminate\" color=\"\"></mat-progress-bar>\n        </mat-card>\n      </div>\n      <div class=\"services_col\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n              <h2 class=\"mat-h2\">WEBSITE MAINTENANCE</h2>\n          </mat-card-title>\n          <mat-card-content>\n        <div class=\"proj\">\n          <h1 class=\"proj-cont\"><img src=\"assets/maintenance.png\" class=\"top-icon\"/></h1>\n          <p>i can help you to update your website and make sure it is kept up to update and relevant content.</p>\n        </div>\n          </mat-card-content>\n            <mat-progress-bar mode=\"indeterminate\" color=\"\"></mat-progress-bar>\n        </mat-card>\n      </div>\n    </div>\n\n    <div class=\"services_row\">\n      <div class=\"services_col\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n              <h2 class=\"mat-h2\">WEB BASED APPLICATION</h2>\n          </mat-card-title>\n          <mat-card-content>\n        <div class=\"proj\">\n          <h1 class=\"proj-cont\"><img src=\"assets/global.png\" class=\"top-icon\"/></h1>\n          <p>web base application are bulit in PHP, JavaScript, MYSQL, Angular JS, NodeJS, VueJS and other modern technology</p>\n        </div>\n          </mat-card-content>\n            <mat-progress-bar mode=\"indeterminate\" color=\"\"></mat-progress-bar>\n        </mat-card>\n      </div>\n\n      <div class=\"services_col\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n              <h2 class=\"mat-h2\">SEARCH ENGINE OPTIMIZATION</h2>\n          </mat-card-title>\n          <mat-card-content>\n        <div class=\"proj\">\n          <h1 class=\"proj-cont\"><img src=\"assets/bino.png\" class=\"top-icon\"/></h1>\n          <p>helps to ensure your website is accessible and to get web page high search engine ranking in google</p>\n        </div>\n          </mat-card-content>\n            <mat-progress-bar mode=\"indeterminate\" color=\"\"></mat-progress-bar>\n        </mat-card>\n      </div>\n\n      <div class=\"services_col\">\n        <mat-card class=\"matcard-slunt\">\n          <mat-card-title class=\"title-head\">\n              <h2 class=\"mat-h2\">MOBILE APPLICATION</h2>\n          </mat-card-title>\n          <mat-card-content>\n        <div class=\"proj\">\n          <h1 class=\"proj-cont\"><img src=\"assets/mobile.png\" class=\"top-icon\"/></h1>\n          <p>creating mobile apps for your business, accelerate product inovation, strengthen your brand name, boost your website traffic</p>\n        </div>\n          </mat-card-content>\n            <mat-progress-bar mode=\"indeterminate\" color=\"\"></mat-progress-bar>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-services',
        template: __webpack_require__("../../../../../src/app/components/services/services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/services/services.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ServicesComponent);

//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/app/provider/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileProvider = (function () {
    function ProfileProvider(http) {
        this.http = http;
    }
    ProfileProvider.prototype.getName = function () {
        var _this = this;
        return this.http.get('pController')
            .map(function (result) { return _this.result = result.json(); });
    };
    ProfileProvider.prototype.getWeather = function () {
        var _this = this;
        return this.http.get('weather')
            .map(function (result) { return _this.result = result.json(); });
    };
    ProfileProvider.prototype.getBlog = function () {
        var _this = this;
        return this.http.get('myblogs')
            .map(function (result) { return _this.result = result.json(); });
    };
    ProfileProvider.prototype.getMessage = function () {
        var _this = this;
        return this.http.get('message')
            .map(function (result) { return _this.result = result.json(); });
    };
    ProfileProvider.prototype.getInbox = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('messagepost', JSON.stringify(data), { headers: headers })
            .map(function (result) { return _this.result = result.json(); });
    };
    return ProfileProvider;
}());
ProfileProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProfileProvider);

var _a;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/sidemenu/sidemenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-sidenav-fab-container {\r\n  width: 500px;\r\n  height: 300px;\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.example-sidenav-fab-container mat-sidenav {\r\n  max-width: 200px;\r\n}\r\n\r\n.example-sidenav-fab-container .mat-sidenav-content,\r\n.example-sidenav-fab-container mat-sidenav {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  overflow: visible;\r\n}\r\n\r\n.example-scrolling-content {\r\n  overflow: auto;\r\n  height: 100%;\r\n}\r\n\r\n.example-fab.mat-mini-fab {\r\n  position: absolute;\r\n  right: 20px;\r\n  bottom: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidemenu/sidemenu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <mat-sidenav-container class=\"example-sidenav-fab-container\">\r\n  <mat-sidenav #sidenav mode=\"side\" opened=\"true\">\r\n    <button mat-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n    <div class=\"example-scrolling-content\">\r\n      Lorem ipsum dolor sit amet, pede a libero aenean phasellus, lectus metus sint ut risus,\r\n      fusce vel in pellentesque. Nisl rutrum etiam morbi consectetuer tempor magna, aenean nullam\r\n      nunc id, neque vivamus interdum sociis nulla scelerisque sem, dolor id wisi turpis magna\r\n      aliquam magna. Risus accumsan hac eget etiam donec sed, senectus erat mattis quam, tempor\r\n      vel urna occaecat cras, metus urna augue nec at. Et morbi amet dui praesent, nec eu at,\r\n      ligula ipsum dui sollicitudin, quis nisl massa viverra ligula, mauris fermentum orci arcu\r\n      enim fringilla. Arcu erat nulla in aenean lacinia ullamcorper, urna ante nam et sagittis,\r\n      tristique vehicula nibh ipsum vivamus, proin proin. Porta commodo nibh quis libero amet.\r\n      Taciti dui, sapien consectetuer.\r\n    </div>\r\n  </mat-sidenav>\r\n  <button mat-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\">\r\n    <mat-icon>add</mat-icon>\r\n  </button>\r\n  <div class=\"example-scrolling-content\">\r\n    Lorem ipsum dolor sit amet, pede a libero aenean phasellus, lectus metus sint ut risus, fusce\r\n    vel in pellentesque. Nisl rutrum etiam morbi consectetuer tempor magna, aenean nullam nunc id,\r\n    neque vivamus interdum sociis nulla scelerisque sem, dolor id wisi turpis magna aliquam magna.\r\n    Risus accumsan hac eget etiam donec sed, senectus erat mattis quam, tempor vel urna occaecat\r\n    cras, metus urna augue nec at. Et morbi amet dui praesent, nec eu at, ligula ipsum dui\r\n    sollicitudin, quis nisl massa viverra ligula, mauris fermentum orci arcu enim fringilla. Arcu\r\n    erat nulla in aenean lacinia ullamcorper, urna ante nam et sagittis, tristique vehicula nibh\r\n    ipsum vivamus, proin proin. Porta commodo nibh quis libero amet. Taciti dui, sapien\r\n    consectetuer.\r\n  </div>\r\n</mat-sidenav-container> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/sidemenu/sidemenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidemenuComponent = (function () {
    function SidemenuComponent() {
    }
    SidemenuComponent.prototype.ngOnInit = function () {
    };
    return SidemenuComponent;
}());
SidemenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sidemenu',
        template: __webpack_require__("../../../../../src/app/sidemenu/sidemenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidemenu/sidemenu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidemenuComponent);

//# sourceMappingURL=sidemenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/topheader/topheader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*TOPHEADER*/\r\n.fixed-header {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 2;\r\n    width: 100%  !important;\r\n}\r\n.icon-spacer{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n/*SIDENAVBAR*/\r\n.mainContent {\r\n  position: fixed;\r\n  left: 0;\r\n  z-index: 1;\r\n  height: 100% !important;\r\n  border: 0px solid rgba(0, 0, 0, 0.5);\r\n}\r\n@media (max-width: 600px) {\r\n  .mainContent {\r\n    position: fixed;\r\n    top: 50px;\r\n  }\r\n}\r\n\r\n\r\n.mainContent mat-sidenav {\r\n  max-width: 320px;\r\n  background-color: #424242;\r\n}\r\n\r\n.mainContent .mat-sidenav-content, .mainContent mat-sidenav {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  overflow: visible;\r\n}\r\n\r\n.sideiconmenu {\r\n  height: 100%;\r\n}\r\n.profile_side {\r\n  width: 260px;\r\n  background-color: #424242;\r\n}\r\n.dashboard_content {\r\n  margin: 25px;\r\n}\r\n.image-profile {\r\n  width: 150px;\r\n  height: 150px;\r\n  margin-left: 32px;\r\n  background-size: cover;\r\n}\r\n/*.profile_side .mat-card {\r\n  background-color: rgba(0, 0, 0, 0.98);\r\n}*/\r\n.p {\r\n  font-size: 12px;\r\n}\r\n\r\n.mat-icon{\r\n  color: #fff;\r\n}\r\n.mat-card {\r\n  height: 100%;\r\n}\r\n\r\n.example-sidenav-content {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 100%;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.badge {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  font-size: 12px;\r\n  line-height: 13px;\r\n  border-radius: 50%;\r\n  width: 13px;\r\n  height: 13px;\r\n  background-color: #ff0000;\r\n  border: 4px solid #ff0000;\r\n  color: #ffffff;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topheader/topheader.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"fixed-header\">\n  <button mat-button (click)=\"sidenav.toggle()\" ><mat-icon class=\"toolbar-icon\" >menu</mat-icon></button>\n  <span class=\"icon-spacer\"></span>\r\n  <button mat-button (click)=\"sendMessage()\"><mat-icon class=\"toolbar-icon\" >mail</mat-icon></button>\n  <button mat-button><mat-icon class=\"toolbar-icon\" data-badge=\"4\">notifications_none</mat-icon><span class=\"badge\" >{{message?.length || '0'}}</span></button>\n  <button mat-button (click)=\"openDialog()\"><mat-icon class=\"toolbar-icon\" >info</mat-icon></button>\n</mat-toolbar>\r\n\r\n\r\n<mat-sidenav-container class=\"mainContent\">\r\n  <mat-sidenav #sidenav mode=\"side\" opened=\"true\">\r\n    <div class=\"sideiconmenu\">\r\n      <mat-list dense>\r\n        <mat-list-item><a routerLink=\"\" matTooltip=\"Dashboard\"><mat-icon class=\"toolbar-icon\">view_quilt</mat-icon></a></mat-list-item>\r\n        <mat-list-item><a routerLink=\"/about\" matTooltip=\"About\"><mat-icon>portrait</mat-icon></a></mat-list-item>\r\n        <mat-list-item><a href=\"\" matTooltip=\"Resume\"><mat-icon>insert_drive_file</mat-icon></a></mat-list-item>\r\n        <mat-list-item><a routerLink=\"/portfolio\" matTooltip=\"Portfolio\"><mat-icon>library_books</mat-icon></a></mat-list-item>\r\n        <mat-list-item><a routerLink=\"/services\" matTooltip=\"Services\"><mat-icon>build</mat-icon></a></mat-list-item>\r\n        <mat-list-item><a routerLink=\"/contactus\" matTooltip=\"Contact Me\"><mat-icon>phone</mat-icon></a></mat-list-item>\r\n        <mat-list-item><a href=\"\" matTooltip=\"Settings\"><mat-icon>settings</mat-icon></a></mat-list-item>\r\n      </mat-list>\r\n    </div>\r\n    <div class=\"profile_side\">\r\n      <mat-card>\r\n        <mat-card-header>\r\n          <div mat-card-avatar class=\"image-profile\" style=\"background-image:url('assets/profile.jpg')\"></div>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"text-name\">\r\n\r\n          <br />\r\n\r\n\r\n      <p *ngFor=\"let profile of name\">\r\n\r\n          <strong>Full Name:</strong> {{ profile.name }}\r\n          <br /><br />\r\n          <strong>Birth Date:</strong> {{ profile.bdate }}\r\n          <br /><br />\r\n          <strong>Job:</strong> {{ profile.job }}\r\n          <br /><br />\r\n          <strong>Email:</strong> {{ profile.email }}\r\n          <br /><br />\r\n          <strong>Website: </strong> {{ profile.website }}\r\n          <br /><br />\r\n          <strong>From: </strong> {{ profile.from }}\r\n          <br /><br />\r\n          <strong>Current Location: </strong> {{ profile.loc }}\r\n      </p>\r\n\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n\r\n  </mat-sidenav>\r\n\r\n\r\n  <!-- <div class=\"example-sidenav-content\">\r\n  <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n    Toggle sidenav\r\n  </button>\r\n</div> -->\r\n</mat-sidenav-container>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/topheader/topheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopheaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_profile_profile_service__ = __webpack_require__("../../../../../src/app/provider/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message_message_component__ = __webpack_require__("../../../../../src/app/components/message/message.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TopheaderComponent = (function () {
    function TopheaderComponent(profileProvider, dialog) {
        var _this = this;
        this.profileProvider = profileProvider;
        this.dialog = dialog;
        this.date = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](new Date());
        this.dialogResult = "";
        this.dialogMessage = "";
        this.profileProvider.getName()
            .subscribe(function (res) {
            _this.name = res;
        });
        this.profileProvider.getMessage()
            .subscribe(function (res) {
            _this.message = res;
        });
    }
    TopheaderComponent.prototype.ngOnInit = function () {
    };
    TopheaderComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogref = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__components_dialog_dialog_component__["a" /* DialogComponent */], {
            width: '600px'
        });
        dialogref.afterClosed().subscribe(function (result) {
            _this.dialogResult = result;
        });
    };
    TopheaderComponent.prototype.sendMessage = function () {
        var _this = this;
        var dialogMess = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__components_message_message_component__["a" /* MessageComponent */], {
            width: '600px'
        });
        dialogMess.afterClosed().subscribe(function (result) {
            _this.dialogMessage = result;
        });
    };
    return TopheaderComponent;
}());
TopheaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-topheader',
        template: __webpack_require__("../../../../../src/app/topheader/topheader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topheader/topheader.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__provider_profile_profile_service__["a" /* ProfileProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__provider_profile_profile_service__["a" /* ProfileProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDialog */]) === "function" && _b || Object])
], TopheaderComponent);

var _a, _b;
//# sourceMappingURL=topheader.component.js.map

/***/ }),

/***/ "../../../../../src/assets/philippines.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "philippines.a02888d7402f52d50e4c.jpg";

/***/ }),

/***/ "../../../../../src/assets/sky.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sky.62154bf108e160a1730b.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map