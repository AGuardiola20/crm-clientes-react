import React from "react";
import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente }) => {
  const { nombre, empresa, email, telefono, id } = cliente;

  const navigate = useNavigate();
  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-800 font-bold">
          Email: 
          <span className="text-gray-600 uppercase">{email}</span>
        </p>
        <p className="text-gray-800 font-bold">
          Tel: 
          <span className="text-gray-600 uppercase">{telefono}</span>
        </p>
      </td>
      <td className="p-6 flex gap-3 justify-center">
        <button className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>
        <button className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
