import React, {Component} from "react";
import Producto from "./Producto"
import axios from "axios";
import Categoria from "../categorias/Categoria";

class Productos extends Component {


    state = {
        productos: [],
        loader: false,
        //urlProductos: "http://127.0.0.1:8000/api/productos"
        urlProductos: "https://cbarreto-api-laravel-test.herokuapp.com/api/productos"
    };

    getProductos = async () => {
        this.state.loader = true;
        const productos = await axios.get(this.state.urlProductos);
        this.setState({productos: productos.data, loader: false});
    }

    componentDidMount() {
        this.getProductos();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.getProductos();
        }
    };

    onDeleteProducto = (id) => {
        const opt = window.confirm("Esta seguro de eliminar el producto?");
        if (opt === true) {
            this.deleteProducto(id);
        }
    };

    deleteProducto = async (id) => {
        this.setState({loader: true})
        await axios.delete(this.state.urlProductos + "/" + id);
        this.getProductos();
    };


    render() {
        const productosList = this.state.productos
        const categoriaId = this.props.categoriaId;
        return (
            <div>
                <div className={"table-responsive"}>
                    <table className="table table-hover text-center">
                        <thead className={"thead-dark"}>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">SKU</th>
                            <th scope="col">Creado</th>
                            <th scope="col">Borrar</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            productosList.map((listaProductos) => {
                                return (
                                    <Producto
                                        producto={listaProductos}
                                        key={listaProductos.id}
                                        categoriaId={categoriaId}
                                        onDeleteProducto={this.onDeleteProducto}
                                    />
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default Productos;
