import { useAuth } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';

function BotonReservar({ funcionId }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleReservar = () => {
    if (!user) {
      navigate('/login', { state: { from: `/reservas/${funcionId}` } });
    } else {
      navigate(`/reservas/${funcionId}`);
    }
  };

  return <button onClick={handleReservar}>Reservar</button>;
}

export default BotonReservar;