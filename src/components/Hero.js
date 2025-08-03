import { Link } from "react-router-dom"
import hero from "../assets/bread.jpg";
import "../styles/Hero.css";

function Hero() {
    return (
        <section className="hero text-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col md-6 mb-4 mb-md-0">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <Link to="/reservations"><button className="hero-btn btn">Reserve a Table</button></Link>
                    </div>
                    <div className="col md-6 text-center">
                        <img className="hero-img" src={hero} alt="Bruschetta" style={{ height: '400px' }}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;