import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <Link to="/"><img src="../assets/logo.jpg" alt="little lemon"/></Link>
        </header>
    );
}

export default Header;