import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function AdminPanel() {
  const { user } = useAuth();

  return (
    <div className='container mt-5'>
      <h1>Panel de Administración</h1>
      <p>Bienvenido, {user?.nombre} ({user?.rol})</p>
      <ul>
        <li><Link to="/peliculas">Gestionar Películas</Link></li>
        <li><Link to="/funciones">Gestionar Funciones</Link></li>
        {user?.rol === 'superadmin' && (
          <li><Link to="/usuarios">Gestionar Usuarios</Link></li>
        )}
      </ul>
    </div>
  );
}