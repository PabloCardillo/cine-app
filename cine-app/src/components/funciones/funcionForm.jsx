import { useState } from 'react';

export default function FuncionForm({ onSubmit }) {
  const [pelicula, setPelicula] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sala, setSala] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ pelicula, fecha, hora, sala });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Película" value={pelicula} onChange={e => setPelicula(e.target.value)} required />
      <input type="date" value={fecha} onChange={e => setFecha(e.target.value)} required />
      <input type="time" value={hora} onChange={e => setHora(e.target.value)} required />
      <input placeholder="Sala" value={sala} onChange={e => setSala(e.target.value)} required />
      <button type="submit">Guardar</button>
    </form>
  );
}