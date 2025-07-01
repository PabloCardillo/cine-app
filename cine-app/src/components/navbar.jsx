import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          {/* Cambia la ruta del logo si es necesario */}
          <img src="/imagenes/logoDeCine.jpg" alt="Cine Alberdi" style={{ height: 40, marginRight: 10 }} />
          Cine Alberdi
        </Link>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link text-white" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/cartelera">Cartelera</Link></li>
            {user && (
              <>
                <li className="nav-item"><Link className="nav-link text-white" to="/reservas">Reservar</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/mis-entradas">Mis Entradas</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/validar-entrada">Validar Entrada</Link></li>
                {(user.rol === 'admin' || user.rol === 'superadmin') && (
                  <>
                    <li className="nav-item"><Link className="nav-link text-white" to="/admin">Panel Admin</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white" to="/funciones">Funciones</Link></li>
                  </>
                )}
                {user.rol === 'superadmin' && (
                  <li className="nav-item"><Link className="nav-link text-white" to="/peliculas">Películas</Link></li>
                )}
                <li className="nav-item">
                  <button className="btn btn-link nav-link text-white" onClick={handleLogout}>Cerrar sesión</button>
                </li>
              </>
            )}
            {!user && (
              <>
                <li className="nav-item"><Link className="nav-link text-white" to="/login">Iniciar sesión</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/register">Registrarse</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}