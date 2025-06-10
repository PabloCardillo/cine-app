import { useState } from 'react';
import PeliculaList from '../components/peliculas/PeliculaList';
import PeliculaForm from '../components/peliculas/PeliculaForm';

export default function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);

  const agregarPelicula = (peli) => setPeliculas([...peliculas, { ...peli, id: Date.now() }]);

  return (
    <div>
      <h1>Gestión de Películas</h1>
      <PeliculaForm onSubmit={agregarPelicula} />
      <PeliculaList peliculas={peliculas} />
    </div>
  );
}