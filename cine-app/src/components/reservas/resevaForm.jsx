import { useState } from 'react';

export default function ReservaForm({ onSubmit }) {
  const [usuario, setUsuario] = useState('');
  const [funcion, setFuncion] = useState('');
  const [cantidad_entradas, setCantidadEntradas] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ usuario, funcion, cantidad_entradas });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)} required />
      <input placeholder="Función" value={funcion} onChange={e => setFuncion(e.target.value)} required />
      <input type="number" min="1" value={cantidad_entradas} onChange={e => setCantidadEntradas(e.target.value)} required />
      <button type="submit">Reservar</button>
    </form>
  );
}