import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Pago() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const pelicula = params.get('pelicula');
  const funcion = params.get('funcion');
  const [cantidad, setCantidad] = useState(1);
  const [pagado, setPagado] = useState(false);

  const precioUnitario = 3000;
  const total = cantidad * precioUnitario;

  const handlePagar = (e) => {
    e.preventDefault();
    setPagado(true);
    setTimeout(() => {
      navigate(`/entrada?pelicula=${encodeURIComponent(pelicula)}&funcion=${encodeURIComponent(funcion)}&cantidad=${cantidad}&total=${total}`);
    }, 1500);
  };

  if (pagado) {
    return <div className="container mt-5"><h2>¡Pago realizado con éxito!</h2><p>Redirigiendo a tu entrada...</p></div>;
  }

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h2>Pagar entrada</h2>
      <p><strong>Película:</strong> {pelicula}</p>
      <p><strong>Función:</strong> {funcion}</p>
      <form onSubmit={handlePagar}>
        <label>Cantidad de entradas:</label>
        <input
          type="number"
          min={1}
          value={cantidad}
          onChange={e => setCantidad(Number(e.target.value))}
          className="form-control mb-2"
          required
        />
        <p><strong>Precio unitario:</strong> $3000 ARS</p>
        <p><strong>Total:</strong> ${total} ARS</p>
        <input className="form-control mb-2" type="text" placeholder="Número de tarjeta" required />
        <input className="form-control mb-2" type="text" placeholder="Nombre en la tarjeta" required />
        <input className="form-control mb-2" type="text" placeholder="Vencimiento (MM/AA)" required />
        <input className="form-control mb-2" type="text" placeholder="CVV" required />
        <button className="btn btn-success" type="submit">Pagar</button>
      </form>
    </div>
  );
}