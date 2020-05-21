import React, {Component} from "react";

class Footer extends Component {

    render() {
        return (
            <div>
                <footer className="page-footer font-small teal pt-4">
                    <hr/>
                    <div className="footer-copyright text-center py-3">© 2020 Powered by:
                        <a href="https://www.linkedin.com/in/cristianhbarretoa" target={"_blank"}
                           rel="noopener noreferrer"> Cristian H Barreto</a>
                    </div>
                </footer>
            </div>
        );
    };
}

export default Footer;