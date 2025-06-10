import { useState } from 'react';

export default function UsuarioForm({ onSubmit }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('cliente');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, email, rol });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <select value={rol} onChange={e => setRol(e.target.value)}>
        <option value="cliente">Cliente</option>
        <option value="admin">Admin</option>
        <option value="superadmin">Superadmin</option>
      </select>
      <button type="submit">Guardar</button>
    </form>
  );
}