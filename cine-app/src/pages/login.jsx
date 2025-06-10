import { useState } from "react";
import { useNavigate } from "react-router";

const Login = ({ onLogin }) => {
    const navigate = useNavigate;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
/*
        if (!email || !password) {
            setError('Todos los campos son obligatorios.');
            return;
        }
        
        try {
            const response 
        } catch (error) {
            
        }
     */   
    }
}
    