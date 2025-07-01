import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Peliculas from './pages/Peliculas';
import Funciones from './pages/funciones';
import Usuarios from './pages/Usuarios';
import Reservas from './pages/Reservas';
import Login from './pages/login';
import AdminPanel from './pages/AdminPanel';
import Cartelera from './pages/Cartelera';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './pages/register';
import Pago from './pages/Pago';
import Entrada from './pages/Entrada';
import ValidarEntrada from './pages/ValidarEntrada';
import MisEntradas from './pages/MisEntradas';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Cartelera />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cartelera" element={<Cartelera />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute roles={['admin', 'superadmin']}>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
            <Route
              path="/funciones"
              element={
                <ProtectedRoute roles={['admin']}>
                  <Funciones />
                </ProtectedRoute>
              }
            />
            <Route
              path="/peliculas"
              element={
                <ProtectedRoute roles={['superadmin']}>
                  <Peliculas />
                </ProtectedRoute>
              }
            />
            <Route path="/usuarios/*" element={<Usuarios />} />
            <Route
              path="/reservas/*"
              element={
                <ProtectedRoute roles={['cliente', 'admin', 'superadmin']}>
                  <Reservas />
                </ProtectedRoute>
              }
            />
            <Route path="/pago" element={<Pago />} />
            <Route path="/entrada" element={<Entrada />} />
            <Route path="/validar-entrada" element={<ValidarEntrada />} />
            <Route
              path="/mis-entradas"
              element={
                <ProtectedRoute roles={['cliente', 'admin', 'superadmin']}>
                  <MisEntradas />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
