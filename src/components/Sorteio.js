// components/Sorteio.js

import React from 'react';

function Sorteio({ pessoas, sorteados, realizarSorteio }) {
  return (
    <div>
      <button onClick={realizarSorteio} disabled={pessoas.length === 0}>
        Realizar Sorteio
      </button>
    </div>
  );
}

export default Sorteio;