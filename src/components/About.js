import "../styles/About.css";
import chefs from "../assets/chefs.jpg";
import restaurant from "../assets/restaurant.jpg";

function About() {
    return (
        <>
        <section id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col md-6">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <div className="mt-4 mb-3">
                            <p><b>Hours:</b></p>
                            <p>11:00 A.M. - 10:00 P.M.</p>
                        </div>
                        <p>Growing up surrounded by the rich flavors and traditions of the Mediterranean, Adrian and Mario dreamed of sharing their favorite recipes with the world. That dream became reality when they opened Little Lemon, a cozy neighborhood spot where freshness, hospitality, and heritage come together. Every dish is inspired by the brothers’ upbringing, using time-honored recipes and wholesome ingredients to create vibrant, modern meals. Whether you're here for a leisurely dinner, a quick lunch, or just a taste of home, Little Lemon welcomes you with open arms and full plates.</p>
                    </div>
                    <div className="col md-6">
                        <div className="about-img-wrapper">
                            <img src={chefs} alt="chefs talking" className="about-img top-img"/>
                        </div>
                        <div className="about-img-wrapper">
                            <img src={restaurant} alt="Restaurant" className="about-img bottom-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default About;