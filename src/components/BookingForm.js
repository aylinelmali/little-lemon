import { useEffect, useState } from 'react';

const BookingForm = (props) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('None');
    const [formValid, setFormValid] = useState(false);

    const handleDateChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const today = new Date().toISOString().split("T")[0];

    useEffect(() => {
        const nameOk = name.trim().length > 0;
        const dateOk = date !== '';
        const timeOk = time !== '';
        const guestsNum = Number(guests);
        const guestsOk = Number.isInteger(guestsNum) && guestsNum >= 1 && guestsNum <= 10;
        setFormValid(nameOk && dateOk && timeOk && guestsOk);
    }, [name, date, time, guests, occasion]);

    return (
        <form onSubmit={handleSubmit} className='p-4 rounded bg-light shadow-sm'>
            <div className='mb-3'>
                <div>
                    <label htmlFor='res-name' className='form-label'>Name <span className='req'>*</span></label>
                </div>
                <input className="form-control" type="text" id="res-name" value={name} onChange={(e) => setName(e.target.value)} required/>
            </div>
            <div className='mb-3'>
                <div>
                    <label htmlFor="res-date" className="form-label">Choose Date <span className='req'>*</span></label>
                </div>
                <input className="form-control" type="date" id="res-date" value={date} min={today} onChange={(e) => handleDateChange(e.target.value)} required/>
            </div>
            <div className='mb-3'>
                <div>
                    <label htmlFor="res-time" className="form-label">Choose Time <span className='req'>*</span></label>
                </div>
                <select className="form-control" id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                    <option value="">-- Select a time --</option>
                    {props.availableTimes.availableTimes.map(availableTimes => {return <option key=
                        {availableTimes} value={availableTimes}>{availableTimes}</option>})
                    }
                </select>
            </div>
            <div className='mb-3'>
                <div>
                    <label htmlFor="guests" className="form-label">Number of Guests <span className='req'>*</span></label>
                </div>
                <input className="form-control" type="number" placeholder="1" min="1" max="10" id="guests" value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))} required/>
            </div>
            <div className='mb-4'>
                <div>
                    <label htmlFor="occasion" className="form-label">Occasion</label>
                </div>
                <select className="form-control" id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option value="None">None</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            <button type="submit" className="btn reserve-btn" disabled={!formValid}>Make Your Reservation</button>
        </form>
    );
}

export default BookingForm;