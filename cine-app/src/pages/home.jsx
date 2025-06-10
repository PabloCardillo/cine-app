import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h1>Bienvenido al Cine Online</h1>
      <p>Gestiona películas, funciones, usuarios y reservas desde un solo lugar.</p>
      <div style={{ marginTop: 30 }}>
        <Link to="/peliculas" style={{ margin: 10 }}>Películas</Link>
        <Link to="/funciones" style={{ margin: 10 }}>Funciones</Link>
        <Link to="/usuarios" style={{ margin: 10 }}>Usuarios</Link>
        <Link to="/reservas" style={{ margin: 10 }}>Reservas</Link>
      </div>
    </div>
  );
}