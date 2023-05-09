class Proveedor {
    constructor(nombre, email, telefono) {
      this.nombre = nombre;
      this.email = email;
      this.telefono = telefono;
    }

    getInfoProveedor() {
      return `Proveedor: ${this.nombre}, teléfono: ${this.telefono}`;
    }

    get nombre() {
      return this._nombre;
    }

    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }

    get email() {
      return this._email;
    }

    set email(nuevoEmail) {
      this._email = nuevoEmail;
    }

    get telefono() {
      return this._telefono;
    }

    set telefono(nuevoTelefono) {
      this._telefono = nuevoTelefono;
    }
  }

  class Articulo {
    constructor(nombre, tipo, precio)
    {
  this.nombre = nombre;
  this.tipo = tipo;
  this.precio = precio;
}

get nombre() {
  return this._nombre;
}

set nombre(nuevoNombre) {
  this._nombre = nuevoNombre;
}

get tipo() {
  return this._tipo;
}

set tipo(nuevoTipo) {
  this._tipo = nuevoTipo;
}

get precio() {
  return this._precio;
}

set precio(nuevoPrecio) {
  this._precio = nuevoPrecio;
}
}

function calcularImpuestoTotal(proveedor, precioArticulo) {
const impuesto = 0.19; // 16% de impuesto
const total = precioArticulo * (1 + impuesto);
return `Precio total (incluyendo impuestos) a pagar al proveedor ${proveedor.nombre}: $${total}`;
}

function mostrarResultados() {
const nombreProveedor = document.getElementById("nombre-proveedor").value;
const emailProveedor = document.getElementById("email-proveedor").value;
const telefonoProveedor = document.getElementById("telefono-proveedor").value;
const nombreArticulo = document.getElementById("nombre-articulo").value;
const tipoArticulo = document.getElementById("tipo").value;
const precioArticulo = Number(document.getElementById("precio").value);

const proveedor = new Proveedor(nombreProveedor, emailProveedor, telefonoProveedor);
const articulo = new Articulo(nombreArticulo, tipoArticulo, precioArticulo);

const resultados = document.getElementById("resultados");
const infoProveedor = document.getElementById("info-proveedor");
const impuestoTotal = document.getElementById("impuesto-total");

infoProveedor.textContent = proveedor.getInfoProveedor();
impuestoTotal.textContent = calcularImpuestoTotal(proveedor, precioArticulo);
}