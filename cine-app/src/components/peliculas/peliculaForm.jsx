import { useState } from 'react';

export default function PeliculaForm({ onSubmit }) {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ titulo, genero });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} required />
      <input placeholder="Género" value={genero} onChange={e => setGenero(e.target.value)} required />
      <button type="submit">Guardar</button>
    </form>
  );
}