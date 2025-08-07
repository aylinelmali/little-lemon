import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import "../styles/Reservations.css";

const Reservations = (props) => {

    return (
        <>
        <div className="container">
            <h1>Book A Reservation</h1>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}></BookingForm>
        </div>
        </>
    );
}

export default Reservations;