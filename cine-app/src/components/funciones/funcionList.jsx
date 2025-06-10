export default function FuncionList({ funciones }) {
  return (
    <div>
      <h2>Funciones</h2>
      <ul>
        {funciones.map((func) => (
          <li key={func.id}>
            {func.pelicula} - {func.fecha} - {func.hora} - Sala: {func.sala}
          </li>
        ))}
      </ul>
    </div>
  );
}