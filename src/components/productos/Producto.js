import React, { Component } from "react";

class Producto extends Component {
  onDeleteProducto = () => {
    this.props.onDeleteProducto(this.props.producto.id);
  };

  render() {
    const {
      id,
      categoria_id,
      nombre,
      precio,
      sku,
      created_at,
    } = this.props.producto;
    const categoriaIdPadre = this.props.categoriaId;
    const create = new Date(created_at);
    if (categoriaIdPadre === categoria_id) {
      return (
        <tr>
          <th scope="row">{id}</th>
          <td>{nombre}</td>
          <td>
            <span>$ </span>
            {Number(precio).toLocaleString("en")}
          </td>
          <td>{sku}</td>
          <td>
            {new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }).format(create)}
          </td>
          <td>
            <button
              type="button"
              className="btn btn-danger btn-sm m-1"
              onClick={this.onDeleteProducto}
            >
              Borrar
            </button>
          </td>
        </tr>
      );
    } else {
      return <tr></tr>;
    }
  }
}

export default Producto;
