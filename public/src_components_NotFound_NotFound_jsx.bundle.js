(self["webpackChunkcar_service"] = self["webpackChunkcar_service"] || []).push([["src_components_NotFound_NotFound_jsx"],{

/***/ "./src/components/NotFound/NotFound.jsx":
/*!**********************************************!*\
  !*** ./src/components/NotFound/NotFound.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _assets_img_parking_notFound_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/parking_notFound.gif */ "./src/assets/img/parking_notFound.gif");
/* harmony import */ var _assets_css_NotFound_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/css/NotFound.styles.scss */ "./src/assets/css/NotFound.styles.scss");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");





var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)(function (theme) {
  return {
    root: {
      flexGrow: 1
    }
  };
});

var NotFound = function NotFound() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, {
    container: true,
    spacing: 0,
    className: "not_found"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg",
    style: {
      backgroundImage: "url(".concat(_assets_img_parking_notFound_gif__WEBPACK_IMPORTED_MODULE_1__.default, ")")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "code"
  }, "404"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "texto"
  }, "Pagina No Encontrada"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "volver"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
    variant: "contained",
    color: "primary",
    size: "small",
    style: {
      marginLeft: 2,
      marginTop: 20
    },
    href: "/HomePage"
  }, "Volver a Inicio")))));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/NotFound.styles.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/NotFound.styles.scss ***!
  \**************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Alfa+Slab+One);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".not_found {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: #2f2f2f;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .not_found .bg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-size: cover;\n    mix-blend-mode: overlay; }\n  .not_found .code {\n    font-family: 'Alfa Slab One', cursive;\n    font-size: 120px;\n    height: auto;\n    color: white;\n    width: 100%;\n    display: flex;\n    background-position-x: center;\n    background-position-y: center;\n    align-items: center;\n    background-size: cover;\n    justify-content: center; }\n  .not_found .texto {\n    font-family: 'Alfa Slab One', cursive;\n    font-size: 50px;\n    height: auto;\n    color: white;\n    width: 100%;\n    display: flex;\n    text-align: center;\n    background-position-x: center;\n    background-position-y: center;\n    align-items: center;\n    background-size: cover;\n    justify-content: center; }\n  .not_found .volver {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: 'pointer'; }\n", "",{"version":3,"sources":["webpack://./src/assets/css/NotFound.styles.scss"],"names":[],"mappings":"AAEA;EACC,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,uBAAuB,EAAA;EATxB;IAYE,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB,EAAA;EAlBzB;IAsBE,qCAAqC;IACrC,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,6BAA6B;IAC7B,mBAAmB;IACnB,sBAAsB;IACtB,uBAAuB,EAAA;EAhCzB;IAmCE,qCAAqC;IACrC,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,6BAA6B;IAC7B,6BAA6B;IAC7B,mBAAmB;IACnB,sBAAsB;IACtB,uBAAuB,EAAA;EA9CzB;IAiDE,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBACD,EAAA","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Alfa+Slab+One');\r\n\r\n.not_found {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tbackground: #2f2f2f;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\t\r\n\t.bg {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100vw;\r\n\t\theight: 100vh;\r\n\t\tbackground-size: cover;\r\n\t\tmix-blend-mode: overlay;\r\n\t}\r\n\t\r\n\t.code {\r\n\t\tfont-family: 'Alfa Slab One', cursive;\r\n\t\tfont-size: 120px;\r\n\t\theight: auto;\r\n\t\tcolor: white;\r\n\t\twidth: 100%;\r\n\t\tdisplay: flex;\r\n\t\tbackground-position-x: center;\r\n\t\tbackground-position-y: center;\r\n\t\talign-items: center;\r\n\t\tbackground-size: cover;\r\n\t\tjustify-content: center;\r\n\t}\r\n\t.texto {\r\n\t\tfont-family: 'Alfa Slab One', cursive;\r\n\t\tfont-size: 50px;\r\n\t\theight: auto;\r\n\t\tcolor: white;\r\n\t\twidth: 100%;\r\n\t\tdisplay: flex;\r\n\t\ttext-align: center;\r\n\t\tbackground-position-x: center;\r\n\t\tbackground-position-y: center;\r\n\t\talign-items: center;\r\n\t\tbackground-size: cover;\r\n\t\tjustify-content: center;\r\n\t}\r\n\t.volver {\r\n\t\twidth: 100%;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tcursor: 'pointer'\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/img/parking_notFound.gif":
/*!*********************************************!*\
  !*** ./src/assets/img/parking_notFound.gif ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b56a413c7aeaa8b550dbf1210823aaa5.gif");

/***/ }),

/***/ "./src/assets/css/NotFound.styles.scss":
/*!*********************************************!*\
  !*** ./src/assets/css/NotFound.styles.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_NotFound_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./NotFound.styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/NotFound.styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_NotFound_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_NotFound_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_components_NotFound_NotFound_jsx.bundle.js.map