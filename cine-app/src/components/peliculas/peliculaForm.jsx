import { useState } from 'react';

export default function PeliculaForm({ onSubmit, pelicula }) {
  const [titulo, setTitulo] = useState(pelicula?.titulo ||"");
  const [genero, setGenero] = useState(pelicula?.genero ||"");
  const [duracion, setDuracion] = useState(pelicula?.duracion || "");
  const [sinopsis, setSinopsis] = useState(pelicula?.sinopsis || "");
  const [imagen, setImagen] = useState(pelicula?.imagen || "");
  const [estado, setEstado] = useState(pelicula?.estado || "activa");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ titulo, genero, duracion, sinopsis, imagen, estado });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
        required
        className="form-control mb-2"
      />
      <input
        type="text"
        placeholder="Género"
        value={genero}
        onChange={e => setGenero(e.target.value)}
        required
        className="form-control mb-2"
      />
      <input
        type="number"
        placeholder="Duración (minutos)"
        value={duracion}
        onChange={e => setDuracion(e.target.value)}
        required
        className="form-control mb-2"
      />
      <textarea
        placeholder="Sinopsis"
        value={sinopsis}
        onChange={e => setSinopsis(e.target.value)}
        required
        className="form-control mb-2"
      />
      <input
        type="text"
        placeholder="Nombre de la imagen (ej: matrix.jpg)"
        value={imagen}
        onChange={e => setImagen(e.target.value)}
        required
        className="form-control mb-2"
      />
      <select
        value={estado}
        onChange={e => setEstado(e.target.value)}
        className="form-control mb-2"
      >
        <option value="activa">Activa</option>
        <option value="inactiva">Inactiva</option>
      </select>
      <button type="submit" className="btn btn-success">Guardar</button>
    </form>
  );
}