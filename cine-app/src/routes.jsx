import { Routes, Route, Navigate } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
/*
import Peliculas from './pages/Peliculas';
import Funciones from './pages/Funciones';
import Reservas from './pages/Reservas';
*/
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/funciones" element={<Funciones />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="*" element={<Navigate to="/" />} />

        </Routes>
    );
}

export default AppRoutes;