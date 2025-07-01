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
          <h3 className="mt-4">Síguenos</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
            <i className="bi bi-facebook" style={{ fontSize: 24 }}></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram" style={{ fontSize: 24 }}></i>
          </a>
        </div>
      </div>

      <div className="text-center mb-5">
        <h4>¿Tienes dudas?</h4>
        <p>Visita nuestra sección de <Link to="/faq">Preguntas Frecuentes</Link> o contáctanos.</p>
      </div>

      {/* Preguntas Frecuentes */}
      <div className="mb-5">
        <h3 className="mb-3 text-primary">Preguntas Frecuentes</h3>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq1">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                ¿Cómo reservo una entrada?
              </button>
            </h2>
            <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Debes iniciar sesión, ir a la sección <strong>Reservar</strong>, elegir la película, función y cantidad de entradas, y luego realizar el pago.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                ¿Puedo cancelar o cambiar mi reserva?
              </button>
            </h2>
            <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Las reservas no se pueden cancelar ni modificar desde la web. Para consultas, comunícate con nosotros por teléfono o email.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq3">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                ¿Cómo recibo mi entrada?
              </button>
            </h2>
            <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Al finalizar el pago, verás tu entrada digital con un código único. Preséntalo en la boletería para ingresar.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq4">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4">
                ¿Qué métodos de pago aceptan?
              </button>
            </h2>
            <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Aceptamos tarjetas de crédito y débito Visa, Mastercard y MercadoPago.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}