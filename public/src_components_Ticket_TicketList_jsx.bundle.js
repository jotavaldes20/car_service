(self["webpackChunkcar_service"] = self["webpackChunkcar_service"] || []).push([["src_components_Ticket_TicketList_jsx"],{

/***/ "./node_modules/@material-ui/core/esm/CardActions/CardActions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CardActions/CardActions.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var CardActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function CardActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["disableSpacing", "classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 true ? CardActions.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__.default)(styles, {
  name: 'MuiCardActions'
})(CardActions));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 16
  },

  /* Styles applied to the avatar element. */
  avatar: {
    flex: '0 0 auto',
    marginRight: 16
  },

  /* Styles applied to the action element. */
  action: {
    flex: '0 0 auto',
    alignSelf: 'flex-start',
    marginTop: -8,
    marginRight: -8
  },

  /* Styles applied to the content wrapper element. */
  content: {
    flex: '1 1 auto'
  },

  /* Styles applied to the title Typography element. */
  title: {},

  /* Styles applied to the subheader Typography element. */
  subheader: {}
};
var CardHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function CardHeader(props, ref) {
  var action = props.action,
      avatar = props.avatar,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      subheaderProp = props.subheader,
      subheaderTypographyProps = props.subheaderTypographyProps,
      titleProp = props.title,
      titleTypographyProps = props.titleTypographyProps,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["action", "avatar", "classes", "className", "component", "disableTypography", "subheader", "subheaderTypographyProps", "title", "titleTypographyProps"]);

  var title = titleProp;

  if (title != null && title.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__.default && !disableTypography) {
    title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      variant: avatar ? 'body2' : 'h5',
      className: classes.title,
      component: "span",
      display: "block"
    }, titleTypographyProps), title);
  }

  var subheader = subheaderProp;

  if (subheader != null && subheader.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__.default && !disableTypography) {
    subheader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      variant: avatar ? 'body2' : 'body1',
      className: classes.subheader,
      color: "textSecondary",
      component: "span",
      display: "block"
    }, subheaderTypographyProps), subheader);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
    ref: ref
  }, other), avatar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: classes.avatar
  }, avatar), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: classes.content
  }, title, subheader), action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: classes.action
  }, action));
});
 true ? CardHeader.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The action to display in the card header.
   */
  action: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * The Avatar for the Card Header.
   */
  avatar: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * @ignore
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, `subheader` and `title` won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `title` text, and optional `subheader` text
   * with the Typography component.
   */
  disableTypography: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The content of the component.
   */
  subheader: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * These props will be forwarded to the subheader
   * (as long as disableTypography is not `true`).
   */
  subheaderTypographyProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The content of the Card Title.
   */
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * These props will be forwarded to the title
   * (as long as disableTypography is not `true`).
   */
  titleTypographyProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiCardHeader'
})(CardHeader));

/***/ }),

/***/ "./src/components/ErrorBoundary.jsx":
/*!******************************************!*\
  !*** ./src/components/ErrorBoundary.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ErrorBoundary; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/CardContent.js");
/* harmony import */ var _assets_css_ErrorBoundary_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/css/ErrorBoundary.styles.scss */ "./src/assets/css/ErrorBoundary.styles.scss");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/CardActions/CardActions.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var ErrorBoundary = /*#__PURE__*/function (_Component) {
  _inherits(ErrorBoundary, _Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      error: '',
      errorInfo: '',
      hasError: false
    });

    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // eslint-disable-next-line no-console
      //console.log({ error, errorInfo });
      this.setState({
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          hasError = _this$state.hasError,
          errorInfo = _this$state.errorInfo;

      if (hasError) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__.default, {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "A ocurrido un error en el Componente.", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            style: {
              cursor: 'pointer',
              color: '#0077FF'
            },
            onClick: function onClick() {
              window.location.reload();
            }
          }, "Recargar Pagina"), ' ')
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("details", {
          className: "error-details"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("summary", null, "Detalles del Error"), errorInfo && errorInfo.componentStack.toString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
          size: "small",
          color: "primary",
          onClick: function onClick() {
            window.location.reload();
          }
        }, "Recargar pagina")));
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true,
        error: error
      };
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component); //el objeto que puede ser de diferentes tipos, objeto o array, ademas es requerido



ErrorBoundary.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)]).isRequired
};

/***/ }),

/***/ "./src/components/Ticket/TicketList.jsx":
/*!**********************************************!*\
  !*** ./src/components/Ticket/TicketList.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/data-grid */ "./node_modules/@material-ui/data-grid/dist/index-esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/ButtonGroup.js");
/* harmony import */ var _Ticket_VerTicket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Ticket/VerTicket */ "./src/components/Ticket/VerTicket.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader/Loader */ "./src/components/Loader/Loader.jsx");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ErrorBoundary */ "./src/components/ErrorBoundary.jsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var currencyFormatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'CLP'
});
var CLP = {
  type: 'number',
  width: 130,
  valueFormatter: function valueFormatter(_ref) {
    var value = _ref.value;
    return currencyFormatter.format(Number(value));
  },
  cellClassName: 'font-tabular-nums'
};
var columns = [{
  field: 'ticket_id',
  headerName: 'ID',
  width: 100,
  hide: true
}, {
  field: 'patente',
  headerName: 'Patente',
  width: 130
}, {
  field: 'fecha_ingreso',
  headerName: 'Fecha Ingreso',
  width: 210
}, {
  field: 'fecha_retiro',
  headerName: 'Fecha Retiro',
  width: 210
}, _objectSpread({
  field: 'monto_cobro',
  headerName: 'Monto Cobrado',
  width: 200
}, CLP), {
  field: 'tiempo_cobro',
  headerName: 'Tiempo (min)',
  width: 200
}, {
  field: 'accion',
  headerName: 'accion',
  renderCell: function renderCell(params) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Ticket_VerTicket__WEBPACK_IMPORTED_MODULE_2__.default, params.row)));
  },
  width: 200
}];
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.default)(function (theme) {
  return {
    root: {
      flexGrow: 1,
      '& .font-tabular-nums': {
        fontVariantNumeric: 'tabular-nums'
      }
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  };
});

var TicketList = function TicketList() {
  var classes = useStyles();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var tickets = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.tickets_list;
  });
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.authentication.user;
  });
  var funcionError = {
    function: 'Error Provocado de manera manual'
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(JSON.stringify(funcionError)),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    //console.log(user.empresa_id)
    var empresa_id = user.empresa_id;
    var user_id = user.user_id;
    dispatch(_actions__WEBPACK_IMPORTED_MODULE_3__.ticketActions.tickets_list(empresa_id, user_id));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      setText(funcionError);
    }
  }, "Probar ErrorBoundary (reemplazar string por objeto)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Al hacer clic en este bot\xF3n se reemplazar\xE1 el ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "string"), " del objeto,", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, text), ",con el objeto original. Esto Provocara un error de renderizado"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
    container: true,
    spacing: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Lista Tickets Cerrados"), tickets.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_4__.default, null)), tickets.items && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      height: "100%",
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      flexGrow: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_10__.DataGrid, {
    rows: tickets.items,
    columns: columns,
    getRowId: function getRowId(row) {
      return row.ticket_id;
    },
    pageSize: 10,
    autoHeight: true,
    disableColumnMenu: true,
    components: {
      Toolbar: _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_10__.GridToolbar
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TicketList);

/***/ }),

/***/ "./src/components/Ticket/VerTicket.jsx":
/*!*********************************************!*\
  !*** ./src/components/Ticket/VerTicket.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");
var _excluded = ["id"];

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var VerTicket = function VerTicket(_ref) {
  var id = _ref.id,
      props = _objectWithoutProperties(_ref, _excluded);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleOpen = function handleOpen() {
    setOpen(!open);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var patente = props.patente,
      fecha_ingreso = props.fecha_ingreso,
      num_ticket = props.num_ticket,
      monto_cobrado = props.monto_cobrado;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
    variant: "contained",
    color: "primary",
    size: "small",
    style: {
      marginLeft: 2
    },
    onClick: handleOpen
  }, "Ver"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__.default, {
    onClose: handleClose,
    "aria-labelledby": "simple-dialog-title",
    open: open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4__.default, {
    id: "simple-dialog-title"
  }, "Datos Ticket patente: ", patente), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Patente: ", patente)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Fecha de ingreso: ", fecha_ingreso)), num_ticket && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Num Ticket: ", num_ticket)), monto_cobrado && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "cobro: $ ", monto_cobrado)))));
}; // prototype: components documentation


VerTicket.propTypes = {
  patente: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  fecha_ingreso: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  num_ticket: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
/* harmony default export */ __webpack_exports__["default"] = (VerTicket);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/ErrorBoundary.styles.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/ErrorBoundary.styles.scss ***!
  \*******************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".error-details {\n  white-space: pre-wrap; }\n", "",{"version":3,"sources":["webpack://./src/assets/css/ErrorBoundary.styles.scss"],"names":[],"mappings":"AAAA;EACE,qBAAqB,EAAA","sourcesContent":[".error-details {\r\n  white-space: pre-wrap;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/css/ErrorBoundary.styles.scss":
/*!**************************************************!*\
  !*** ./src/assets/css/ErrorBoundary.styles.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ErrorBoundary_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./ErrorBoundary.styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/ErrorBoundary.styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ErrorBoundary_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ErrorBoundary_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_components_Ticket_TicketList_jsx.bundle.js.map