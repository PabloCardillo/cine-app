import { useState, useEffect } from 'react';
import PeliculaList from '../components/peliculas/PeliculaList';
import PeliculaForm from '../components/peliculas/PeliculaForm';

export default function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);

  // Obtener películas al montar el componente
  useEffect(() => {
    fetch('http://localhost:4000/api/peliculas')
      .then(res => res.json())
      .then(data => setPeliculas(data));
  }, []);

  const agregarPelicula = (nueva) => {
    fetch('http://localhost:4000/api/peliculas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nueva)
    })
      .then(res => res.json())
      .then(data => setPeliculas([...peliculas, data]));
  };

  const cambiarEstado = (id, nuevoEstado) => {
    fetch(`http://localhost:4000/api/peliculas/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ estado: nuevoEstado })
    })
      .then(res => res.json())
      .then(() => {
        setPeliculas(peliculas.map(p =>
          p.id === id ? { ...p, estado: nuevoEstado } : p
        ));
      });
  };
  const eliminarPelicula = (id) => {
    if (!window.confirm("¿Estás seguro de que deseas eliminar esta película?")) return;
    fetch(`http://localhost:4000/api/peliculas/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => {
        setPeliculas(peliculas.filter(p => p.id !== id));
      });
  };

  return (
    <div className="container mt-5">
      <h1>Gestión de Películas</h1>
      <PeliculaForm onSubmit={agregarPelicula} />
      <ul>
        {peliculas.map(peli => (
          <li key={peli.id}>
            <img
              src={`/imagenes/${peli.imagen}`}
              alt={peli.titulo}
              style={{ width: 80, marginRight: 10 }}
              onError={e => e.target.src = '/imagenes/default.png'} // default.jpg debe estar en public/imagenes
            />
            <strong>{peli.titulo}</strong> - {peli.genero} - {peli.duracion} min - {peli.estado}
            <br />
            <em>{peli.sinopsis}</em>
            <br />
            Estado:
            <select
              value={peli.estado}
              onChange={e => cambiarEstado(peli.id, e.target.value)}
              style={{ marginLeft: 10 }}
            >
              <option value="activa">Activa</option>
              <option value="inactiva">Inactiva</option>
            </select>
            <button
              onClick={() => eliminarPelicula(peli.id)}
              style={{ marginLeft: 10, color: "white", background: "red", border: "none", borderRadius: 4, padding: "0.3em 1em" }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}