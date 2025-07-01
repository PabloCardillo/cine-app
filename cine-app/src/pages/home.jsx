import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ color: "#007bff" }}>¡Bienvenido a Cine Alberdi!</h1>
        <p className="lead">Disfruta de los mejores estrenos y vive la experiencia del cine en tu ciudad.</p>
        <Link to="/cartelera" className="btn btn-primary btn-lg m-2">Ver Cartelera</Link>
        <Link to="/reservas" className="btn btn-outline-primary btn-lg m-2">Reservar Entradas</Link>
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <h3>Contacto</h3>
          <ul className="list-unstyled">
            <li><strong>Teléfono:</strong> (011) 1234-5678</li>
            <li><strong>Email:</strong> contacto@cinealberdi.com</li>
            <li><strong>Dirección:</strong> Av. Alberdi 123, Ciudad</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3>Horarios</h3>
          <ul>
            <li>Lunes a Viernes: 16:00 a 23:00</li>
            <li>Sábados y Domingos: 12:00 a 01:00</li>
          </ul>
        </div>
      </div>

      <div className="text-center mb-5">
        <h4>¿Tienes dudas?</h4>
        <p>Visita nuestra sección de Preguntas Frecuentes o contáctanos.</p>
      </div>

      {/* Preguntas Frecuentes */}
      <div className="mb-5">
        <h3 className="mb-3 text-primary">Preguntas Frecuentes</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>¿Cómo reservo una entrada?</strong><br />
            Debes iniciar sesión, ir a la sección <strong>Reservar</strong>, elegir la película, función y cantidad de entradas, y luego realizar el pago.
          </li>
          <li className="list-group-item">
            <strong>¿Puedo cancelar o cambiar mi reserva?</strong><br />
            Las reservas no se pueden cancelar ni modificar desde la web. Para consultas, comunícate con nosotros por teléfono o email.
          </li>
          <li className="list-group-item">
            <strong>¿Cómo recibo mi entrada?</strong><br />
            Al finalizar el pago, verás tu entrada digital con un código único. Preséntalo en la boletería para ingresar.
          </li>
          <li className="list-group-item">
            <strong>¿Qué métodos de pago aceptan?</strong><br />
            Aceptamos tarjetas de crédito y débito Visa, Mastercard y MercadoPago.
          </li>
        </ul>
      </div>
    </div>
  );
}