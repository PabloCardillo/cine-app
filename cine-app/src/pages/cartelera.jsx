import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BotonReservar from '../components/reservas/botonReservar';
import { useNavigate } from 'react-router-dom';

export default function Cartelera() {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/api/peliculas')
      .then(res => res.json())
      .then(data => setPeliculas(data));
  }, []);

  // Filtrar solo películas activas y por búsqueda
  const peliculasFiltradas = peliculas.filter(
    peli =>
      peli.estado === 'activa' &&
      peli.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleReservar = (peli) => {
    // Redirige a /reservas pasando el id o título como query param
    navigate(`/reservas?pelicula=${encodeURIComponent(peli.titulo)}`);
  };

  return (
    <div className="container mt-5">
      <h1>Cartelera</h1>
      <p>Aquí puedes ver las películas disponibles para reservar.</p>
      <br />
      <input
        type="text"
        placeholder="Buscar película..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
        className="form-control mb-4"
        style={{ maxWidth: 400, margin: "0 auto" }}
      />
      <div className="row">
        {peliculasFiltradas.map(peli => (
          <div key={peli.id} className="col-12 col-md-8 offset-md-2 mb-5">
            <div className="card flex-row align-items-center" style={{ minHeight: 320 }}>
              <img
                src={`/imagenes/${peli.imagen}`}
                alt={peli.titulo}
                style={{ width: 250, height: 320, objectFit: "cover", borderRadius: "8px 0 0 8px" }}
                onError={e => e.target.src = '/imagenes/default.png'}
              />
              <div className="card-body d-flex flex-column justify-content-between" style={{ flex: 1 }}>
                <div>
                  <h3 className="card-title">{peli.titulo}</h3>
                  <p><strong>Género:</strong> {peli.genero}</p>
                  <p><strong>Duración:</strong> {peli.duracion} min</p>
                  <p className="card-text"><em>{peli.sinopsis}</em></p>
                </div>
                <button
                  className="btn btn-primary btn-lg mt-3 align-self-end"
                  onClick={() => handleReservar(peli)}
                >
                  Reservar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {peliculasFiltradas.length === 0 && (
        <p>No hay películas activas que coincidan con la búsqueda.</p>
      )}
    </div>
  );
}