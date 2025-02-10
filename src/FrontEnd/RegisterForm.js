import React,{useState} from 'react';
import { Footer, NavBar } from './home';
import '../Css/ReservationForm.css';
import { useNavigate } from 'react-router-dom';

export const ReservationForm = () =>{
    const[formData,setFormData] = useState({name:'',email:'',phone:'',date:'',time:'',numberOfGuests:''});

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    
    const [showForm, setShowForm] = useState(true);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const reservations = JSON.parse(localStorage.getItem("reservationData")) || []
        reservations.push(formData)
        localStorage.setItem('reservationData',JSON.stringify(reservations))
        
        alert(`Reservation for ${formData.name} has been confirmed`)
        setShowForm(false);
    
    }


    return(
        <>
        <NavBar/>
        <div className='reservation-form-container'>
            {showForm ? (
                <>
                <h2>Reserve your seat</h2>
            <form onSubmit={handleSubmit} className='reservation-form'>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder='Enter Your Name'                    
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder='Enter Your Email'                    
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='phone'>Phone No</label>
                    <input 
                        type='tel'
                        id='phone-number'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder='Enter Your phone number'                    
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='date'>Date</label>
                    <input 
                        type='date'
                        id='date'
                        name='date'
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className='form-group'>
                    <label htmlFor='Time'>Time</label>
                    <input 
                        type='time'
                        id='time'
                        name='time'
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className='form-group'>
                    <label htmlFor='numberOfGuests'>Number Of Guests</label>
                    <input 
                        type='text'
                        id='numberOfGuests'
                        name='numberOfGuests'
                        value={formData.numberofGuests}
                        onChange={handleChange}
                        required
                    />

                </div>
                <button type="submit" className="reserve-button">Confirm Reservation</button>

            </form>
                </>
            ):(
                <>
                <button onClick={()=>navigate("/reservations")} className="show-reservations-button">
                            Show Reservations
                        </button>
                </>
            )}
            
        </div>
            <Footer></Footer>
        </>
    )

}