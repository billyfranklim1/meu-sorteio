import React, { useState, useEffect } from 'react';
import Cadastro from './components/Cadastro';
import Sorteio from './components/Sorteio';
import ListaDePessoas from './components/ListaDePessoas';
import './App.css';

function App() {
  const [pessoas, setPessoas] = useState([]);
  const [sorteados, setSorteados] = useState([]);

  // Dentro do componente App

const adicionarPessoa = (nome) => {
  if (nome && !pessoas.includes(nome)) {
    setPessoas([...pessoas, nome]);
  }
};

// Dentro do componente App

const realizarSorteio = () => {
  const naoSorteados = pessoas.filter((pessoa) => !sorteados.includes(pessoa));

  if (naoSorteados.length === 0) {
    // Reinicia o ciclo
    setSorteados([]);
    alert('Todos já foram sorteados! Reiniciando o ciclo.');
  } else {
    const indiceAleatorio = Math.floor(Math.random() * naoSorteados.length);
    const sorteado = naoSorteados[indiceAleatorio];
    setSorteados([...sorteados, sorteado]);
    alert(`A pessoa sorteada é: ${sorteado}`);
  }
};

  // Carrega os dados do localStorage ao montar o componente
  useEffect(() => {
    const pessoasSalvas = JSON.parse(localStorage.getItem('pessoas')) || [];
    const sorteadosSalvos = JSON.parse(localStorage.getItem('sorteados')) || [];
    setPessoas(pessoasSalvas);
    setSorteados(sorteadosSalvos);
  }, []);

  // Salva os dados no localStorage sempre que pessoas ou sorteados mudarem
  useEffect(() => {
    localStorage.setItem('pessoas', JSON.stringify(pessoas));
    localStorage.setItem('sorteados', JSON.stringify(sorteados));
  }, [pessoas, sorteados]);

  // Funções para adicionar pessoas e atualizar sorteados serão adicionadas aqui

  return (
    <div className="App">
      <h1>Sistema de Sorteio Diário</h1>
      <Cadastro adicionarPessoa={adicionarPessoa} />
      <Sorteio pessoas={pessoas} sorteados={sorteados} realizarSorteio={realizarSorteio} />
      <ListaDePessoas pessoas={pessoas} sorteados={sorteados} />
    </div>
  );
}

export default App;