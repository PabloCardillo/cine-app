import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function MisEntradas() {
  const { user } = useAuth();
  const [entradas, setEntradas] = useState([]);

  useEffect(() => {
    if (user?.id) {
      fetch(`http://localhost:4000/api/entradas/usuario/${user.id}`)
        .then(res => res.json())
        .then(data => setEntradas(data));
    }
  }, [user]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Mis Entradas</h2>
      {entradas.length === 0 ? (
        <div className="alert alert-info">No tienes entradas reservadas.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-primary">
              <tr>
                <th>Película</th>
                <th>Función</th>
                <th>Cantidad</th>
                <th>Código</th>
              </tr>
            </thead>
            <tbody>
              {entradas.map(e => (
                <tr key={e.codigo}>
                  <td>{e.pelicula}</td>
                  <td>{e.funcion}</td>
                  <td>{e.cantidad}</td>
                  <td style={{ fontFamily: "monospace" }}>{e.codigo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}