import React, {Component} from "react";

class CategoriaForm extends Component {

    state = {
        form: {nombre: "", isEdit: false},
        btnName: 'Registrar',
        btnClass: 'btn btn-primary m-1 form-control'
    };

    handleChange = event => {
        const {name, value} = event.target;
        let form = this.state.form;
        form[name] = value;
        this.setState({form});
    };

    onFormSubmit = event => {
        event.preventDefault();

        if (this.validaciones()) {
            this.props.onFormSubmit(this.state.form);
        }

        this.reset();
    };

    reset = () => {
        this.setState({
            form: {nombre: "", isEdit: false},
            btnName: 'Registrar',
            btnClass: 'btn btn-primary m-1 form-control'
        });
        document.querySelector(".form").reset();
    };

    validaciones = () => {
        if (document.getElementsByName("nombre")[0].value === "") {
            alert('Por favor ingrese un nombre de categoria');
            return false;
        }
        return true;
    };

    render() {
        return (
            <div className={"cont"}>
                <form className={"form"}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" className="form-control" id="nombre" name="nombre"
                                   placeholder="Nombre de la categoria" value={this.state.form.nombre}
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="from-group col-md-3">
                            <button type="submit"
                                    className={this.state.btnClass}
                                    onClick={this.onFormSubmit}>
                                {this.state.btnName}
                            </button>
                            <button type="reset"
                                    className={'btn btn-secondary m-1 form-control'}
                                    onClick={this.reset}>
                                Reset
                            </button>
                        </div>
                    </div>


                </form>
            </div>

        );
    }
}

export default CategoriaForm;