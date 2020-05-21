import React, {Component} from "react";

class CategoriaForm extends Component {

    state = {
        form: {nombreProd: "", precioProd: "", sku: "", categoriaId: ""}
    };

    handleChange = event => {
        const {name, value} = event.target;
        let form = this.state.form;
        form[name] = value;
        this.setState({form});
    };

    onFormSubmitProducto = event => {
        event.preventDefault();

        if (this.validaciones()) {
            this.props.onFormSubmitProducto(this.state.form);
            this.reset();
        }

    };

    reset = () => {
        this.setState({
            form: {nombreProd: "", precioProd: "", sku: ""}
        });
        document.querySelector(".form").reset();
    };

    validaciones = () => {
        if (document.getElementsByName("nombreProd")[0].value === "") {
            alert('Por favor ingrese un nombre de producto');
            return false;
        }
        if (document.getElementsByName("precioProd")[0].value === "") {
            alert('Por favor ingrese el precio');
            return false;
        }
        if (isNaN(document.getElementsByName("precioProd")[0].value)) {
            alert('Por favor ingrese valores numericos');
            return false;
        }
        if (document.getElementsByName("sku")[0].value === "") {
            alert('Por favor el sku del producto');
            return false;
        }
        return true;
    };

    onCancelCreateProducto = () => {
        this.reset();
        this.props.onCancelCreateProducto();
    };

    render() {
        const categoria = this.props.categoria_id;
        {
            this.state.form.categoriaId = categoria
        }
        return (
            <div>
                <hr/>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="nombreProd">Nombre</label>
                            <input type="text" className="form-control" id="nombreProd" name={"nombreProd"}
                                   value={this.state.form.nombreProd} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="precioProd">Precio</label>
                            <input type="text" className="form-control" id="precioProd" name={"precioProd"}
                                   value={this.state.form.precioProd} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="sku">SKU</label>
                            <input type="text" className="form-control" id="sku" name={"sku"}
                                   maxLength={"10"} value={this.state.form.sku} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-3 text-center">
                            <button type="submit" className="btn btn-primary form-control m-1"
                                    onClick={this.onFormSubmitProducto}>
                                Guardar Producto
                            </button>
                            <button type="reset"
                                    className="btn btn-secondary form-control m-1"
                                    onClick={this.reset}>
                                Reset
                            </button>
                        </div>
                        <div className="form-group col-md-3 text-center">
                            <button type="button"
                                    className="btn btn-info form-control m-1"
                                    onClick={this.onCancelCreateProducto}>
                                Cancelar registro
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CategoriaForm;