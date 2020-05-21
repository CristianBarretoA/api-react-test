import React, {Component} from "react";
import {Link} from "react-router-dom";
import Productos from "../productos/Productos";

class Categoria extends Component {
    onDelete = () => {
        this.props.onDelete(this.props.categoria.id);
    };

    onEdit = () => {
        this.props.onEdit(this.props.categoria);
    };

    onCreateProducto = () => {
        this.props.onCreateProducto(this.props.categoria.id);
        this.top();
    };

    top = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    render() {
        const {id, nombre, created_at, updated_at} = this.props.categoria;
        const create = new Date(created_at);
        const update = new Date(updated_at);
        return (
            <tr>
                <th scope="row" className={"text-center"}>
                    {id}
                </th>
                <td className={"text-center"}>{nombre}</td>
                <td className={"text-center"}>
                    {new Intl.DateTimeFormat("en-GB", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    }).format(create)}
                </td>
                <td className={"text-center"}>
                    {new Intl.DateTimeFormat("en-GB", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    }).format(update)}
                </td>
                <td className={"text-center align-middle"}>
                    <button type="button"
                            className="btn btn-info btn-sm m-1"
                            onClick={this.onCreateProducto}>
                        Agregar Producto
                    </button>
                    <br/>
                    <button type="button"
                            className="btn btn-primary btn-sm m-1"
                            onClick={this.onEdit}>
                        Editar
                    </button>
                    <br/>
                    <button type="button"
                            className="btn btn-danger btn-sm m-1"
                            onClick={this.onDelete}>
                        Borrar
                    </button>
                </td>
                <td className={"text-center align-middle"}>
                    <Productos
                        categoriaId={id}
                    />
                </td>
            </tr>
        );
    }
}

export default Categoria;
