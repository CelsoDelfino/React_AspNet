import React, { useState } from "react";
import "./App.css";
import AtividadeForm from "./components/AtividadeForm";
import Atividade from "./components/Atividade";
import AtividadeLista from "./components/AtividadeLista";

function App() {
  const initialState = [
    {
      id: 1,
      descricao: "Primeira atividade",
      titulo: "Titulo 1",
      prioridade: "1",
    },
    {
      id: 2,
      descricao: "Segunda atividade",
      titulo: "Titulo 2",
      prioridade: "2",
    },
  ];

  const [atividades, setAtividades] = useState(initialState);
  const [atividade, setAtividade] = useState(initialState);

  function addAtividade(e) {
    e.preventDefault();

    const ativi = {
      id: Math.max.apply(Math, atividades.map((item) => item.id)) + 1,
      descricao: document.getElementById("descricao").value,
      titulo: document.getElementById("titulo").value,
      prioridade: document.getElementById("prioridade").value,
    };

    atividades.push(ativi);
    

    setAtividades([...atividades], { ... ativi });
  }

  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(
      (atividade) => atividade.id !== id
    );
    setAtividades([...atividadesFiltradas]);
  }

  function pegarAtividade(id) {
    const atividade = atividades.filter((atividade) => atividade.id === id);
    setAtividade(atividade[0]);
  }

  return (
    <>
      <AtividadeForm
        addAtividade={addAtividade}
        atividades={atividades}
        atividadeSelecionada={atividade}
      />
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />
    </>
  );
}

export default App;
