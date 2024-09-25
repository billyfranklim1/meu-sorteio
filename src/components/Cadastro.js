// components/Cadastro.js

import React, { useState } from 'react';

function Cadastro({ adicionarPessoa }) {
  const [nome, setNome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarPessoa(nome.trim());
    setNome('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome da pessoa"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button type="submit">Adicionar Pessoa</button>
    </form>
  );
}

export default Cadastro;