export default function ReservaList({ reservas }) {
  return (
    <div>
      <h2>Reservas</h2>
      <ul>
        {reservas.map((res) => (
          <li key={res.id}>
            {res.usuario} - {res.funcion} - {res.cantidad_entradas} entradas
          </li>
        ))}
      </ul>
    </div>
  );
}