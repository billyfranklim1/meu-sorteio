// components/ListaDePessoas.js

import React from 'react';

function ListaDePessoas({ pessoas, sorteados }) {
  return (
    <ul>
      {pessoas.map((pessoa, index) => (
        <li key={index}>
          {pessoa} {sorteados.includes(pessoa) && '✅'}
        </li>
      ))}
    </ul>
  );
}

export default ListaDePessoas;