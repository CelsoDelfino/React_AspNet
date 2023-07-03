import React from "react";
import Atividade from "../Atividade/index";

export default function AtividadeLista(props) {
  return (
    <>
      <div className="mt-3">
        {props.atividades.map((item) => (
          <Atividade
            key={item.id}
            item={item}
            deletarAtividade={props.deletarAtividade}
            pegarAtividade={props.pegarAtividade}
          />
        ))}
      </div>
    </>
  );
}
