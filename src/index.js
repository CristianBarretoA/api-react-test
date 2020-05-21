import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./components/App";
import Productos from "./components/productos/Productos"


//const container = document.getElementById("root")
//ReactDOM.render(<Productos />, container );

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route path="/productos" component={Productos}/>
                <Route path="/" component={App} exact/>
            </Switch>
        </div>
    </Router>,
    document.getElementById('root')
);