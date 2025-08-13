import { Link } from "react-router-dom"
import salad from "../assets/salad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import feta from "../assets/feta.jpg";
import "../styles/Specials.css";

function Specials() {
    return (
        <>
            <section className="specials">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h1>This Week's Specials!</h1>
                        <Link to="/menu"><button className="btn menu-btn">Full Menu</button></Link>
                    </div>
                    <div className="row">
                        <div className="col md-4 mb-4">
                            <div className="card h-100 bg-light">
                                <img className="card-img-top" src={salad} alt="Salad"/>
                                <div className="card-body">
                                    <h5 className="card-title">Greek Salad</h5>
                                    <p className="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                                    <Link to="/order-online"><button className="order-btn btn text-light">Order a Delivery</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col md-4 mb-4">
                            <div className="card h-100 bg-light">
                                <img className="card-img-top" src={bruschetta} alt="Bruschetta"/>
                                <div className="card-body">
                                    <h5 className="card-title">Bruschetta</h5>
                                    <p className="card-text">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                                    <Link to="/order-online"><button className="order-btn btn text-light">Order a Delivery</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col md-4 mb-4">
                            <div className="card h-100 bg-light">
                                <img className="card-img-top" src={feta} alt="Phyllo Wrapped feta cheese"/>
                                <div className="card-body">
                                    <h5 className="card-title">Phyllo Wrapped Feta</h5>
                                    <p className="card-text">Our delicious French Feta is fried and wrapped in a savory phyllo dough, and topped with sesame seeds and a touch of Greek honey.</p>
                                    <Link to="/order-online"><button className="order-btn btn text-light">Order a Delivery</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Specials;