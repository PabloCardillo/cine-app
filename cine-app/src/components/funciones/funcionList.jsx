import BotonReservar from "../reservas/botonReservar";

export default function FuncionList({ funciones }) {
  return (
    <div>
      <h2>Funciones</h2>
      <ul>
        {funciones.map((func) => (
          <li key={func.id}>
            {func.pelicula} - {func.fecha} - {func.hora} - Sala: {func.sala}
            <BotonReservar funcionId={func.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}