import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            console.log(data); // Aquí puedes ver la respuesta del backend

            if (response.ok && data.user) {
                setError('');
                login(data.user); // Guarda solo el usuario en el contexto

                // Redirige según el rol
                if (data.user.rol === "admin" || data.user.rol === "superadmin") {
                    navigate('/admin');
                } else if (data.user.rol === 'cliente') {
                    navigate('/reservas');
                } else {
                    navigate('/');
                }
            } else {
                setError(data.message || 'Error al iniciar sesión');
            }
        } catch (error) {
            setError('Error de conexión con el servidor');
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleLogin} style={{
                maxWidth: "350px",
                margin: "40px auto",
                padding: "2rem",
                background: "#fff",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <h2 style={{ marginBottom: "1rem" }}>Iniciar sesión</h2>
                <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    style={{ marginBottom: "1rem", width: "100%", padding: "0.5rem" }}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    style={{ marginBottom: "1rem", width: "100%", padding: "0.5rem" }}
                />
                <button type="submit" style={{
                    width: "100%",
                    padding: "0.5rem",
                    background: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginBottom: "1rem"
                }}>
                    Iniciar sesión
                </button>
                {error && <p style={{ color: 'red', marginBottom: "1rem" }}>{error}</p>}

                <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
            </form>
        </div>
    );
};

export default Login;
