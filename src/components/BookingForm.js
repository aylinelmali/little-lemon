import { useState } from 'react';
import "../styles/BookingForm.css";

const BookingForm = ({ availableTimes, dispatch }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('None');
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({type: 'UPDATE_TIMES', date:selectedDate});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({date, time, guests, occasion});
        alert('Reservation submitted!');
    };

    return (
        <form onSubmit={handleSubmit} className='p-4 rounded bg-light shadow-sm'>
            <div className='mb-3'>
                <label htmlFor="res-date" className="form-label">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange} required/>
            </div>
            <div className='mb-3'>
                <label htmlFor="res-time" className="form-label">Choose time</label>
                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                    <option value="">-- Select a time --</option>
                    {availableTimes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>
            </div>
            <div className='mb-3'>
                <label htmlFor="guests" className="form-label">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))} required/>
            </div>
            <div className='mb-4'>
                <label htmlFor="occasion" className="form-label">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option value="None">None</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Make Your Reservation</button>
        </form>
    );
}


export default BookingForm;