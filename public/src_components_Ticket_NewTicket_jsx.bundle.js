(self["webpackChunkcar_service"] = self["webpackChunkcar_service"] || []).push([["src_components_Ticket_NewTicket_jsx"],{

/***/ "./src/components/Ticket/CerrarTicket.jsx":
/*!************************************************!*\
  !*** ./src/components/Ticket/CerrarTicket.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/red.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 //para documentar Componente CerrarTicket











var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.default)(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    form: {
      width: "100%",
      // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  };
});
var ColorButton = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.default)(function (theme) {
  return {
    root: {
      color: "#fffff",
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.default[700],
      '&:hover': {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.default[900]
      }
    }
  };
})(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__.default);

var CerrarTicket = function CerrarTicket(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var classes = useStyles();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.authentication.user;
  });
  var datos_tickets = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.sacar_patente;
  });
  var empresa_id = user.empresa_id,
      username = user.username,
      emisor_dte = user.emisor_dte;
  var patente = props.patente;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch(_actions__WEBPACK_IMPORTED_MODULE_3__.ticketActions.fetchStateCerrarTicket());
  }, []);

  var handleOpen = function handleOpen(e) {
    e.preventDefault();

    if (!patente == "") {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_3__.ticketActions.sacar_patente(empresa_id, patente));
      setOpen(!open);
    }
  };

  var handleClose = function handleClose() {
    setOpen(!open); //localStorage.removeItem("sacar_patente");
  };

  var pagar = function pagar(ticket_id) {
    dispatch(_actions__WEBPACK_IMPORTED_MODULE_3__.ticketActions.pagar(empresa_id, ticket_id, username, emisor_dte));
    setOpen(!open);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__.default, {
    container: true,
    spacing: 0,
    direction: "column",
    alignItems: "center",
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__.default, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColorButton, {
    variant: "contained",
    color: "primary",
    size: "small",
    fullWidth: true,
    style: {
      marginLeft: 2
    },
    onClick: handleOpen
  }, "Cerrar Ticket"), datos_tickets.success && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__.default, {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__.default, {
    onClose: handleClose,
    "aria-labelledby": "simple-dialog-title",
    open: open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__.default, {
    id: "simple-dialog-title"
  }, "Monto pagar patente ", patente), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.default, {
    fullWidth: true,
    className: classes.margin,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.default, {
    htmlFor: "nueva-patente"
  }, "Monto Pagar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.default, {
    id: "patente",
    label: "Nueva Patente",
    variant: "outlined",
    type: "text",
    value: datos_tickets.item[0].monto_pagar,
    inputProps: {
      min: 0,
      style: {
        textAlign: 'center'
      }
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.default, {
      position: "start"
    }, "$"),
    autoFocus: true,
    disabled: true,
    margin: "dense"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__.default, {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    onClick: function onClick() {
      return pagar(datos_tickets.item[0].ticket_id);
    }
  }, "Pagar"))))))));
}; //Indica que debe recibir una variable de tipo String llamada Patente y es requerida


CerrarTicket.propTypes = {
  patente: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (CerrarTicket);

/***/ }),

/***/ "./src/components/Ticket/NewTicket.jsx":
/*!*********************************************!*\
  !*** ./src/components/Ticket/NewTicket.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader/Loader */ "./src/components/Loader/Loader.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
/* harmony import */ var _CerrarTicket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CerrarTicket */ "./src/components/Ticket/CerrarTicket.jsx");
var _excluded = ["inputRef"];

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.default)(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    margin: {
      margin: theme.spacing(1)
    }
  };
});

function TextMaskCustom(props) {
  var inputRef = props.inputRef,
      other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_text_mask__WEBPACK_IMPORTED_MODULE_3___default()), _extends({}, other, {
    ref: function ref(_ref) {
      inputRef(_ref ? _ref.inputElement : null);
    },
    mask: [/[a-z]/, /[a-z]/, /\w/, /\w/, /\d/, /\d/],
    placeholderChar: "*",
    guide: true,
    showMask: false
  }));
}

TextMaskCustom.propTypes = {
  inputRef: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};

var NewTicket = function NewTicket() {
  var classes = useStyles();
  var valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(''); //crear una referencia para el componente TextField

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var ingreso = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.ingresar_patente;
  });

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.authentication.user;
  }),
      empresa_id = _useSelector.empresa_id,
      username = _useSelector.username;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      patenteSalida = _useState2[0],
      setpatenteSalida = _useState2[1];

  function IngresarPatente(e) {
    e.preventDefault();

    if (!valueRef.current.value == "") {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_5__.ticketActions.ingresar_patente(empresa_id, valueRef.current.value, username));

      if (ingreso.success) {//setear valor del input
      }
    }
  }

  function key_enter_entrada(e) {
    if (e.key === 'Enter') {
      IngresarPatente(e);
    }
  }

  var patenteSalidaChange = function patenteSalidaChange(event) {
    setpatenteSalida(event.target.value);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch(_actions__WEBPACK_IMPORTED_MODULE_5__.ticketActions.fetchState());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__.default, {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__.default, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Nuevo Ticket")), ingreso.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_4__.default, null)), !ingreso.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__.default, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__.default, {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Ingresar Patente"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    fullWidth: true,
    className: classes.margin,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.default, {
    htmlFor: "nueva-patente"
  }, "Nueva Patente"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, {
    id: "patente_nueva",
    label: "Nueva Patente",
    variant: "outlined",
    type: "text",
    inputRef: valueRef,
    inputComponent: TextMaskCustom,
    inputProps: {
      min: 0,
      style: {
        textAlign: 'center'
      }
    },
    fullWidth: true,
    autoFocus: true,
    margin: "dense",
    labelWidth: 100,
    onKeyDown: key_enter_entrada
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__.default, {
    id: "ingresar",
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    onClick: IngresarPatente
  }, "Ingresar")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__.default, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__.default, {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Salida"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    fullWidth: true,
    className: classes.margin,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.default, {
    htmlFor: "salida-patente"
  }, "Salida Patente"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, {
    id: "patente_salida",
    label: "Salida Patente",
    variant: "outlined",
    type: "text",
    inputRef: valueRef,
    inputComponent: TextMaskCustom,
    inputProps: {
      min: 0,
      style: {
        textAlign: 'center'
      }
    },
    fullWidth: true,
    margin: "dense",
    labelWidth: 100,
    onChange: patenteSalidaChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CerrarTicket__WEBPACK_IMPORTED_MODULE_6__.default, {
    patente: patenteSalida
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NewTicket);

/***/ })

}]);
//# sourceMappingURL=src_components_Ticket_NewTicket_jsx.bundle.js.map