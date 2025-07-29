import React, { useState } from 'react';
import NavBar from './components/NavBar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import Cars from './pages/Cars';
import MyBooking from './pages/MyBooking';

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
      {!isOwnerPath && <NavBar setShowLogin={setShowLogin} />
}

      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/car-details/:id' element={<CarDetails/>}/>
          <Route path='/cars' element={<Cars/>}/>
          <Route path='/my-bookings' element={<MyBooking/>}/>
          

      </Routes>

    </>
  );
};

export default App;
