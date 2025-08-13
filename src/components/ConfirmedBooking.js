import { Link } from "react-router-dom"
import "../styles/ConfirmedBooking.css";

function ConfirmedBooking() {
    return (
        <>
            <div className="container text-center">
                <div className="alert alert-success" role="alert">
                    <h1>Booking has been confirmed!</h1>
                </div>
                <Link to="/"><button className="btn back-btn">Back to Home</button></Link>
            </div>
        </>
    );
}

export default ConfirmedBooking;