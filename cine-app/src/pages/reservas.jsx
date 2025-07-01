import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReservaList from '../components/reservas/ReservaList';
import ReservaForm from '../components/reservas/resevaForm';

export default function Reservas() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const peliculaSeleccionada = params.get('pelicula'); // Título de la película

  const [pelicula, setPelicula] = useState(peliculaSeleccionada);
  const [reservas, setReservas] = useState([]);
  const [funciones, setFunciones] = useState([]);

  const funcionesFiltradas = pelicula
  ? funciones.filter(f => f.pelicula === pelicula)
  : funciones;

  useEffect(() => {
    fetch('http://localhost:4000/api/funciones')
      .then(res => res.json())
      .then(data => setFunciones(data));
  }, []);

  const agregarReserva = (res) => setReservas([...reservas, { ...res, id: Date.now() }]);

  return (
    <div className="container reservas-container">
      <label>Película:</label>
      <select
        className="form-select mb-2"
        value={pelicula || ""}
        onChange={e => setPelicula(e.target.value)}
        required
        disabled={!!peliculaSeleccionada}
      >
        <option value="">Selecciona una película</option>
        {[...new Set(funciones.map(f => f.pelicula))].map((titulo, idx) => (
          <option key={idx} value={titulo}>{titulo}</option>
        ))}
      </select>
      <h1>Gestión de Reservas</h1>
      <ReservaForm funciones={funcionesFiltradas} reservas={reservas} onSubmit={agregarReserva} />
      <ReservaList reservas={reservas} />
    </div>
  );
}