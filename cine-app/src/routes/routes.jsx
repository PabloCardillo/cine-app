import { Routes, Route, Navigate } from "react-router";
import Login from "../pages/login";
import Home from "../pages/Home";
import Peliculas from './pages/Peliculas';
import Funciones from './pages/Funciones';
import Reservas from './pages/Reservas';
import Cartelera from './pages/Cartelera';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/funciones" element={<Funciones />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/cartelera" element={<Cartelera />} />
            <Route path="*" element={<Navigate to="/" />} />

        </Routes>
    );
}

export default AppRoutes;