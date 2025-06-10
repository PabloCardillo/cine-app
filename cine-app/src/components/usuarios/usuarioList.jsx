export default function UsuarioList({ usuarios }) {
  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {usuarios.map((user) => (
          <li key={user.id}>
            {user.nombre} - {user.email} - {user.rol}
          </li>
        ))}
      </ul>
    </div>
  );
}