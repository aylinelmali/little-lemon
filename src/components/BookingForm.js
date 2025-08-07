import { useState } from 'react';

const BookingForm = (props) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('None');
    const handleDateChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    return (
        <form onSubmit={handleSubmit} className='p-4 rounded bg-light shadow-sm'>
            <div className='mb-3'>
                <div>
                    <label htmlFor='res-name' className='form-label'>Name</label>
                </div>
                <input type="text" id="res-name" value={name} onChange={(e) => setName(e.target.value)} required/>
            </div>
            <div className='mb-3'>
                <div>
                    <label htmlFor="res-date" className="form-label">Choose Date</label>
                </div>
                <input type="date" id="res-date" value={date} onChange={(e) => handleDateChange(e.target.value)} required/>
            </div>
            <div className='mb-3'>
                <div>
                    <label htmlFor="res-time" className="form-label">Choose Time</label>
                </div>
                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                    <option value="">-- Select a time --</option>
                    {
                        props.availableTimes.availableTimes.map(availableTimes => {return <option key=
                            {availableTimes}>{availableTimes}</option>})
                    }
                </select>
            </div>
            <div className='mb-3'>
                <div>
                    <label htmlFor="guests" className="form-label">Number of guests</label>
                </div>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))} required/>
            </div>
            <div className='mb-4'>
                <div>
                    <label htmlFor="occasion" className="form-label">Occasion</label>
                </div>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option value="None">None</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            <button type="submit" className="btn reserve-btn">Make Your Reservation</button>
        </form>
    );
}

export default BookingForm;