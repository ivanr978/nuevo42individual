"use strict";

//require("core-js/modules/web.dom-collections.iterator.js");
//require("core-js/modules/es.symbol.description.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Proveedor = /*#__PURE__*/function () {
  function Proveedor(nombre, email, telefono) {
    _classCallCheck(this, Proveedor);
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
  }
  _createClass(Proveedor, [{
    key: "getInfoProveedor",
    value: function getInfoProveedor() {
      return "Proveedor: ".concat(this.nombre, ", tel\xE9fono: ").concat(this.telefono);
    }
  }, {
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  }, {
    key: "email",
    get: function get() {
      return this._email;
    },
    set: function set(nuevoEmail) {
      this._email = nuevoEmail;
    }
  }, {
    key: "telefono",
    get: function get() {
      return this._telefono;
    },
    set: function set(nuevoTelefono) {
      this._telefono = nuevoTelefono;
    }
  }]);
  return Proveedor;
}();
var Articulo = /*#__PURE__*/function () {
  function Articulo(nombre, tipo, precio) {
    _classCallCheck(this, Articulo);
    this.nombre = nombre;
    this.tipo = tipo;
    this.precio = precio;
  }
  _createClass(Articulo, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  }, {
    key: "tipo",
    get: function get() {
      return this._tipo;
    },
    set: function set(nuevoTipo) {
      this._tipo = nuevoTipo;
    }
  }, {
    key: "precio",
    get: function get() {
      return this._precio;
    },
    set: function set(nuevoPrecio) {
      this._precio = nuevoPrecio;
    }
  }]);
  return Articulo;
}();
function calcularImpuestoTotal(proveedor, precioArticulo) {
  var impuesto = 0.19; // 16% de impuesto
  var total = precioArticulo * (1 + impuesto);
  return "Precio total (incluyendo impuestos) a pagar al proveedor ".concat(proveedor.nombre, ": $").concat(total);
}
function mostrarResultados() {
  var nombreProveedor = document.getElementById("nombre-proveedor").value;
  var emailProveedor = document.getElementById("email-proveedor").value;
  var telefonoProveedor = document.getElementById("telefono-proveedor").value;
  var nombreArticulo = document.getElementById("nombre-articulo").value;
  var tipoArticulo = document.getElementById("tipo").value;
  var precioArticulo = Number(document.getElementById("precio").value);
  var proveedor = new Proveedor(nombreProveedor, emailProveedor, telefonoProveedor);
  var articulo = new Articulo(nombreArticulo, tipoArticulo, precioArticulo);
  var resultados = document.getElementById("resultados");
  var infoProveedor = document.getElementById("info-proveedor");
  var impuestoTotal = document.getElementById("impuesto-total");
  infoProveedor.textContent = proveedor.getInfoProveedor();
  impuestoTotal.textContent = calcularImpuestoTotal(proveedor, precioArticulo);
}
