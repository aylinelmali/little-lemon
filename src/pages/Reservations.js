import BookingForm from "../components/BookingForm";
import "../styles/Reservations.css";

const Reservations = (props) => {

    return (
        <>
        <section className="text-light heading">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <h1>Little Lemon</h1>
                        <h2>Reservations</h2>
                        <p>Choose your date, time, party size, and let us know if you're celebrating any special occasions!</p>
                        <p>Your table is just a few clicks away!</p>
                    </div>
                </div>
            </div>
        </section>
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}></BookingForm>
        </>
    );
}

export default Reservations;