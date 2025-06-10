import { useState } from 'react';
import ReservaList from '../components/reservas/ReservaList';
import ReservaForm from '../components/reservas/resevaForm';

export default function Reservas() {
  const [reservas, setReservas] = useState([]);

  const agregarReserva = (res) => setReservas([...reservas, { ...res, id: Date.now() }]);

  return (
    <div>
      <h1>Gestión de Reservas</h1>
      <ReservaForm onSubmit={agregarReserva} />
      <ReservaList reservas={reservas} />
    </div>
  );
}