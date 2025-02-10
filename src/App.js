import './App.css';
import React from 'react';
import { NavBar, StaffSection,ReservationBlock,MenuTable } from './FrontEnd/home';
import {LoginForm} from '../src/FrontEnd/LoginPage';
import ErrorBoundary from '../src/FrontEnd/ErrorBoundary'; 
import { Routes, Route } from 'react-router-dom';
import { ReservationForm } from './FrontEnd/RegisterForm';
import { ReservationsPage } from './FrontEnd/Reservations';
import {About} from '../src/FrontEnd/About';
function App() {
  return (
    <div className="App">
    <ErrorBoundary>
        <Routes>
          <Route path="/" element={
            <>
              <NavBar />
              <ReservationBlock />
              <StaffSection />
              
            </>
          } />

          <Route path="/reserve" element={<ReservationForm />} />
          <Route path='/reservations' element={<ReservationsPage/>}></Route>
          <Route path='/menu' element={<MenuTable/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<LoginForm/>}></Route>
        </Routes>

    </ErrorBoundary>

    </div>
  );
}

export default App;
