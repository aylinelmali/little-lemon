import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import logo from "../assets/logo.jpg";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} alt="little lemon" className="img-fluid" style={{ height: '50px' }}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to="/#about">About</HashLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/menu">Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reservations">Reservations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/order-online">Order Online</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;