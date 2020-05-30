import React, { Component } from "react";
import axios from "axios";
import CategoriaForm from "./categorias/CategoriaForm";
import CategoriasList from "./categorias/CategoriasList";
import Footer from "./Footer";
import Loader from "./Loader";
import "./css/app.css";
import ProductoForm from "./productos/ProductoForm";

class App extends Component {
  state = {
    categorias: [],
    categoria: {},
    loader: false,
    formProducto: false,
    categoria_id: 0,
    //urlCategorias: "http://127.0.0.1:8000/api/categorias",
    urlCategorias:
      "https://cbarreto-api-laravel-test.herokuapp.com/api/categorias",
    //urlProductos: "http://127.0.0.1:8000/api/productos"
    urlProductos:
      "https://cbarreto-api-laravel-test.herokuapp.com/api/productos",
  };

  getCategorias = async () => {
    this.state.loader = true;
    const categorias = await axios.get(this.state.urlCategorias);
    this.setState({ categorias: categorias.data, loader: false });
  };

  componentDidMount() {
    this.getCategorias();
  }

  deleteCategoria = async (id) => {
    this.setState({ loader: true });
    await axios.delete(this.state.urlCategorias + "/" + id);
    this.getCategorias();
  };

  createCategoria = async (data) => {
    this.setState({ loader: true });

    await axios.post(this.state.urlCategorias, {
      nombre: data.nombre,
    });
    this.getCategorias();
  };

  editCategoria = async (data) => {
    this.setState({ categoria: {}, loader: true });

    await axios.put(this.state.urlCategorias + "/" + data.id, {
      nombre: data.nombre,
      updated_at: data.updated_at,
    });
    this.getCategorias();
  };

  createProducto = async (data) => {
    //console.log(data)
    this.setState({ loader: true });
    let msj = await axios.post(this.state.urlProductos, {
      categoria_id: data.categoriaId,
      nombre: data.nombreProd,
      precio: data.precioProd,
      sku: data.sku,
    });
    if (msj.data.sku[0].includes("The sku")) {
      alert("Ya existe en SKU registrado, por favor intente con otro");
    }
    this.getCategorias();
  };

  onDelete = (id) => {
    //console.log("app ", id);
    const opt = window.confirm("Esta seguro de eliminar la categoria?");
    if (opt === true) {
      this.deleteCategoria(id);
    }
  };

  onEdit = (data) => {
    this.setState({ categoria: data });
  };

  onCreateProducto = (id) => {
    this.setState({ formProducto: true, categoria_id: id });
  };

  onCancelCreateProducto = () => {
    this.setState({ formProducto: false, categoria_id: 0 });
  };

  onFormSubmit = (data) => {
    if (data.isEdit) {
      this.editCategoria(data);
    } else {
      this.createCategoria(data);
    }
  };

  onFormSubmitProducto = (data) => {
    this.createProducto(data);
  };

  render() {
    return (
      <div>
        <div className={"row"}>
          <div className={"col"}>
            <nav className={"navbar navbar-dark bg-dark"}>
              <a href={"/"} className={"navbar-brand"}>
                Control de Productos
              </a>
            </nav>
          </div>
        </div>

        <div className={"row cont"}>
          <div className={"col"}>
            <CategoriaForm
              categoria={this.state.categoria}
              onFormSubmit={this.onFormSubmit}
            />
            {this.state.formProducto ? (
              <ProductoForm
                categoria_id={this.state.categoria_id}
                onFormSubmitProducto={this.onFormSubmitProducto}
                onCancelCreateProducto={this.onCancelCreateProducto}
              />
            ) : (
              ""
            )}
            <br />
            {this.state.loader ? <Loader /> : ""}
            <CategoriasList
              categorias={this.state.categorias}
              onDelete={this.onDelete}
              onEdit={this.onEdit}
              onCreateProducto={this.onCreateProducto}
              doCreateProducto={this.createProducto}
            />
          </div>
        </div>
        <div className={"footer"}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
