import { useState } from "react";

export default function useCliente() {
  const [cliente, setCliente] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  return { cliente, handleInputChange };
}