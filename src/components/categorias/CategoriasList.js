import React, {Component} from "react";
import Categoria from "./Categoria";

class CategoriasList extends Component {

    onDelete = id => {
        this.props.onDelete(id);
    };

    onEdit = data => {
        this.props.onEdit(data);
    };

    onCreateProducto = (id) => {
        this.props.onCreateProducto(id);
    };

    onCancelCreateProducto=()=>{
        this.props.onCancelCreateProducto();
    };

    render() {
        const categoriasList = this.props.categorias;
        //console.log(categoriasList)
        return (
            <div className={"table-responsive"}>
                <table className={"table table-hover"}>
                    <thead className={"thead-dark"}>
                    <tr>
                        <th scope="col" className={"text-center"}>#</th>
                        <th scope="col" className={"text-center"}>Nombre</th>
                        <th scope="col" className={"text-center"}>Creada</th>
                        <th scope="col" className={"text-center"}>Actualizado</th>
                        <th scope="col" className={"text-center"}>Acciones</th>
                        <th scope="col" className={"text-center"}>Productos</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        categoriasList.map((categoriasList) => {
                            return (
                                <Categoria
                                    categoria={categoriasList}
                                    key={categoriasList.id}
                                    onDelete={this.onDelete}
                                    onEdit={this.onEdit}
                                    onCreateProducto={this.onCreateProducto}
                                    onCancelCreateProducto={this.onCancelCreateProducto}
                                />
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>

        );
    };

}

export default CategoriasList;