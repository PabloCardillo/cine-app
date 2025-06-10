import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
//import Navbar from './components/Navbar';
//import Home from './pages/Home';
import Peliculas from './pages/Peliculas';
import Funciones from './pages/Funciones';
import Usuarios from './pages/Usuarios';
import Reservas from './pages/Reservas';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      {/* <Navbar /> */}
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* Rutas protegidas por rol */}
            <Route element={<ProtectedRoute roles={['admin', 'superadmin']} />}>
              <Route path="/peliculas/*" element={<Peliculas />} />
              <Route path="/funciones/*" element={<Funciones />} />
            </Route>
            <Route element={<ProtectedRoute roles={['superadmin']} />}>
              <Route path="/usuarios/*" element={<Usuarios />} />
            </Route>
            <Route element={<ProtectedRoute roles={['cliente']} />}>
              <Route path="/reservas/*" element={<Reservas />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
