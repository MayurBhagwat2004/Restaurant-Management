import React from "react";
import { NavBar } from "./home";
import { useNavigate } from "react-router-dom";
import '../Css/reservations.css';
import { Footer } from "./home";
export const ReservationsPage = () => {
    const navigate = useNavigate();
    const reservations = JSON.parse(localStorage.getItem("reservationData")) || [];

    const handleBack = () => {
        navigate('/');
    };

    return (
        <>
            <NavBar />
            <div className="reservations-page-container">
                <br></br>
                <br></br>
                <br></br>

                <h2>Reservations Made</h2>
                {reservations.length === 0 ? (
                    <p>No reservations made</p>
                ) : (
                    <div className="table-div">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Guests</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservations.map((reservation, index) => (
                                <tr key={index}>
                                    <td>{reservation.name}</td>
                                    <td>{reservation.email}</td>
                                    <td>{reservation.phone}</td>
                                    <td>{reservation.date}</td>
                                    <td>{reservation.time}</td>
                                    <td>{reservation.numberOfGuests}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                    
                )}
                <button onClick={handleBack} className="back-button">Back</button>
            </div>
                        <Footer></Footer>
            
        </>
    );
};
