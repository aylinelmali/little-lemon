import { useEffect, useState } from 'react';

const BookingForm = (props) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('None');
    const [formValid, setFormValid] = useState(false);

    const [touched, setTouched] = useState({
        name: false,
        date: false,
        time: false,
        guests: false
    });

    const handleDateChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const today = new Date().toISOString().split("T")[0];

    const nameOk = name.trim().length > 0;
    const dateOk = date !== '';
    const timeOk = time !== '';
    const guestsNum = Number(guests);
    const guestsOk = Number.isInteger(guestsNum) && guestsNum >= 1 && guestsNum <= 10;

    useEffect(() => {
        setFormValid(nameOk && dateOk && timeOk && guestsOk);
    }, [nameOk, dateOk, timeOk, guestsOk]);

    const getValidationClass = (fieldValid, fieldName) => {
        if (!touched[fieldName]) return '';
        return fieldValid ? 'is-valid' : 'is-invalid';
    };


    return (
        <form onSubmit={handleSubmit} className='p-4 rounded bg-light shadow-sm needs-validation'>
            <div className='mb-3'>
                <div>
                    <label htmlFor='res-name' className='form-label'>Name <span className='req'>*</span></label>
                </div>
                <input className={`form-control ${getValidationClass(nameOk, 'name')}`}
                type="text" id="res-name" value={name} onChange={(e) => setName(e.target.value)}
                onBlur={() => setTouched({ ...touched, name: true })} required aria-required="true"/>
                <div className="invalid-feedback">Please enter your name.</div>
            </div>
            <div className='mb-3'>
                <div>
                    <label htmlFor="res-date" className="form-label">Choose Date <span className='req'>*</span></label>
                </div>
                <input className={`form-control ${getValidationClass(dateOk, 'date')}`}
                type="date" id="res-date" value={date} min={today} onChange={(e) => handleDateChange(e.target.value)}
                onBlur={() => setTouched({ ...touched, date: true })} required aria-required="true"/>
                <div className="invalid-feedback">Please select a date.</div>
            </div>
            <div className='mb-3'>
                <div>
                    <label htmlFor="res-time" className="form-label">Choose Time <span className='req'>*</span></label>
                </div>
                <select className={`form-control ${getValidationClass(timeOk, 'time')}`}
                id="res-time" value={time} onChange={(e) => setTime(e.target.value)}
                onBlur={() => setTouched({ ...touched, time: true })} required aria-required="true">
                    <option value="">-- Select a time --</option>
                    {(props.availableTimes?.availableTimes ?? []).map(availableTimes => {return <option key=
                        {availableTimes} value={availableTimes}>{availableTimes}</option>})
                    }
                </select>
                <div className="invalid-feedback">Please select a time.</div>
            </div>
            <div className='mb-3'>
                <div>
                    <label htmlFor="guests" className="form-label">Number of Guests <span className='req'>*</span></label>
                </div>
                <input className={`form-control ${getValidationClass(guestsOk, 'guests')}`}
                type="number" placeholder="1" min="1" max="10" id="guests" value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                onBlur={() => setTouched({ ...touched, guests: true })} required aria-required="true"/>
                <div className="invalid-feedback">Guests must be between 1 and 10.</div>
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
            <div className='text-center'>
                <button type="submit" className="btn reserve-btn" disabled={!formValid} aria-disabled={!formValid}>Make Your Reservation</button>
            </div>
        </form>
    );
}

export default BookingForm;