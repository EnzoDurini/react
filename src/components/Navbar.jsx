import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faCartShopping} from '@fortawesome/free-solid-svg-icons';
import CartWidget from './CartWidget';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menu
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Products</a></li>
                                <li><a className="dropdown-item" href="#">Promotions</a></li>
                                <li><a className="dropdown-item" href="#">About us</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contac us</a>
                        </li>
                    </ul>
                    <div>
                    <button className="btn btn-outline-success"><CartWidget numero={4}/></button>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar