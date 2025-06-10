import { useState } from 'react';
import FuncionList from '../components/funciones/funcionList';
import FuncionForm from '../components/funciones/funcionForm';

export default function Funciones() {
  const [funciones, setFunciones] = useState([]);

  const agregarFuncion = (func) => setFunciones([...funciones, { ...func, id: Date.now() }]);

  return (
    <div>
      <h1>Gestión de Funciones</h1>
      <FuncionForm onSubmit={agregarFuncion} />
      <FuncionList funciones={funciones} />
    </div>
  );
}