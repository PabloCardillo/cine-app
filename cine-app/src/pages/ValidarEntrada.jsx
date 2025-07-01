import { useState, useRef } from 'react';

export default function ValidarEntrada() {
  const [codigo, setCodigo] = useState('');
  const [entrada, setEntrada] = useState(null);
  const [error, setError] = useState('');
  const qrRef = useRef();

  const buscarEntrada = async (codigoEntrada) => {
    setError('');
    setEntrada(null);
    const res = await fetch(`http://localhost:4000/api/entradas/${codigoEntrada}`);
    if (res.ok) {
      const data = await res.json();
      setEntrada(data);
    } else {
      setError('Entrada no encontrada o código inválido.');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h2>Validar Entrada</h2>
      <form onSubmit={e => { e.preventDefault(); buscarEntrada(codigo); }}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Código de entrada"
          value={codigo}
          onChange={e => setCodigo(e.target.value)}
          required
        />
        <button className="btn btn-primary" type="submit">Validar</button>
      </form>
      <div id="qr-reader" ref={qrRef} style={{ width: 250, margin: "0 auto" }}></div>
      {entrada && (
        <div className="mt-4 p-3 border rounded" style={{ background: "#e9ffe9" }}>
          <h4>✅ Entrada válida</h4>
          <p><strong>Película:</strong> {entrada.pelicula}</p>
          <p><strong>Función:</strong> {entrada.funcion}</p>
          <p><strong>Código:</strong> {entrada.codigo}</p>
          <p><strong>Usuario ID:</strong> {entrada.usuario_id}</p>
        </div>
      )}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
}