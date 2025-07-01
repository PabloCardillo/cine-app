import { useState } from 'react';
import UsuarioList from '../components/usuarios/usuarioList';
import UsuarioForm from '../components/usuarios/usuarioForm';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  const agregarUsuario = (user) => setUsuarios([...usuarios, { ...user, id: Date.now() }]);

  return (
    <div className='container mt-5'>
      <h1>Gestión de Usuarios</h1>
      <UsuarioForm onSubmit={agregarUsuario} />
      <UsuarioList usuarios={usuarios} />
    </div>
  );
}