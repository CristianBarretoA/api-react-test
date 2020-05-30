import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App";

const container = document.getElementById("root");
ReactDOM.render(<App />, container);

/*
ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route path="/" component={App} exact/>
            </Switch>
        </div>
    </Router>,
    document.getElementById('root')
);*/
