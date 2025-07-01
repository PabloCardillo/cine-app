import { useAuth } from "../../context/AuthContext";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function ReservaForm({ onSubmit, funciones, reservas = [] }) {
  const { user } = useAuth();
  const [funcionId, setFuncionId] = useState('');
  const [cantidadEntradas, setCantidadEntradas] = useState(1);

  const navigate = useNavigate();

  if (!user) return <p>Debes iniciar sesión para reservar.</p>;

  // Calcula el máximo de entradas disponibles para la función seleccionada
  const funcion = funciones.find(f => String(f.id) === String(funcionId));
  const reservadas = reservas
    .filter(r => String(r.funcion_id) === String(funcionId))
    .reduce((acc, r) => acc + Number(r.cantidad_entradas), 0);

  // Capacidad según sala
  let capacidad = 1;
  if (funcion) {
    if (funcion.sala === "Sala 1") capacidad = 120;
    else if (funcion.sala === "Sala 2") capacidad = 110;
    else if (funcion.sala === "Sala 3") capacidad = 100;
  }
  const maxEntradas = funcion ? capacidad - reservadas : 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!funcionId) return;
    const funcion = funciones.find(f => String(f.id) === String(funcionId));
    if (!funcion) return;
    navigate(`/pago?pelicula=${encodeURIComponent(funcion.pelicula)}&funcion=${encodeURIComponent(funcion.fecha + ' ' + funcion.hora)}`);
    onSubmit({
      usuario_id: user.id,
      funcion_id: funcionId,
      cantidad_entradas: cantidadEntradas
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Función:</label>
      <select
        value={funcionId}
        onChange={e => setFuncionId(e.target.value)}
        required
      >
        <option value="">Selecciona una función</option>
        {funciones.map(f => (
          <option key={f.id} value={f.id}>
            {f.fecha} - {f.hora} - {f.sala} - {f.pelicula}
          </option>
        ))}
      </select>
      <input
        type="number"
        min="1"
        max={maxEntradas}
        value={cantidadEntradas}
        onChange={e => setCantidadEntradas(e.target.value)}
        required
        placeholder="Cantidad de entradas"
        disabled={!funcion}
      />
      {funcion && (
        <small>
          Entradas disponibles: {maxEntradas}
        </small>
      )}
      <button type="submit" disabled={!funcion || maxEntradas < 1}>Reservar</button>
    </form>
  );
}