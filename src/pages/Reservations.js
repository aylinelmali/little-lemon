import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import BookingSlot from "../components/BookingSlot";

function Reservations() {
    const initializeTimes = () => {
        return [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        ];
    };
    const updateTimes = (state, action) => {
        const selectedDate = action.date;
        return [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        ];
    };
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    return (
        <>
        <div className="container">
            <h1>Book A Reservation</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}></BookingForm>
        </div>
        </>
    );
}

export default Reservations;