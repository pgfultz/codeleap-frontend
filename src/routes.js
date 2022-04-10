import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';

function PrivateRoute({ children }) {
    const user = localStorage.getItem('user');
    
    return user ? children : <Navigate to="/signup" />;
  }

export default function RoutesNavigation(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}