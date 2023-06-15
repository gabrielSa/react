import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css"
import logo from "../../img/coin.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container min-height">



                <Link to="/">
                    <img src={logo} alt="Costs" />
                </Link>
                <ul className="list">
                    <li className="item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="item">
                        <Link to="contacts">Contato</Link>
                    </li>
                    <li className="item">
                        <Link to="company">Empresa</Link>
                    </li>
                    <li className="item">
                        <Link to="newprojects">Projetos</Link>
                    </li>
                </ul>

            </div>


        </nav>
    );
};

export default Navbar;