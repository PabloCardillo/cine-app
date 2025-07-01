import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Entrada() {
  const params = new URLSearchParams(useLocation().search);
  const pelicula = params.get('pelicula');
  const funcion = params.get('funcion');
  const cantidad = params.get('cantidad') || 1;
  const total = params.get('total') || 3000;
  const codigo = btoa(`${pelicula}-${funcion}-${Date.now()}`).slice(0, 12).toUpperCase();
  const { user } = useAuth();

  useEffect(() => {
    fetch('http://localhost:4000/api/entradas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        codigo,
        pelicula,
        funcion,
        cantidad,
        total,
        usuario_id: user?.id || null
      })
    });
  }, [codigo, pelicula, funcion, cantidad, total, user]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh", background: "#f4f8fb" }}>
      <div className="card shadow-lg" style={{ maxWidth: 420, width: "100%", borderRadius: 20 }}>
        <div className="card-body">
          <h2 className="text-center mb-4" style={{ color: "#007bff", fontWeight: 700 }}>🎟️ Entrada Digital</h2>
          <hr />
          <p><strong>Nombre:</strong> {user?.nombre || "Invitado"}</p>
          <p><strong>Película:</strong> {pelicula}</p>
          <p><strong>Función:</strong> {funcion}</p>
          <p><strong>Cantidad de entradas:</strong> {cantidad}</p>
          <p><strong>Total pagado:</strong> <span className="text-success">${total} ARS</span></p>
          <div className="my-3 text-center">
            <span style={{ fontFamily: "monospace", fontSize: 22, letterSpacing: 2, background: "#e9ecef", padding: "8px 16px", borderRadius: 8 }}>
              {codigo}
            </span>
          </div>
          <div className="alert alert-success text-center mb-0" style={{ fontWeight: 500 }}>
            ¡Entrada válida! Presenta este código en la boletería.
          </div>
        </div>
      </div>
    </div>
  );
}