export default function PeliculaList({ peliculas }) {
  return (
    <div>
      <h2>Películas</h2>
      <ul>
        {peliculas.map((peli) => (
          <li key={peli.id}>{peli.titulo} - {peli.genero}</li>
        ))}
      </ul>
    </div>
  );
}