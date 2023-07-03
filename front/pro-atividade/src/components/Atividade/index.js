import React from "react";

export default function Atividade(props) {
  function prioridadeLabel(param) {
    switch (param) {
      case "1":
        return "Baixa";
      case "2":
        return "Normal";
      case "3":
        return "Alta";
      default:
        return "Não definido";
    }
  }

  function prioridadeStyle(param, icone) {
    switch (param) {
      case "1":
        return icone ? "smile" : "success";
      case "2":
        return icone ? "meh" : "dark";
      case "3":
        return icone ? "frown" : "warning";
      default:
        return "Não definido";
    }
  }

  return (
    <>
      <div
        className={
          "card shadow border-" + prioridadeStyle(props.item.prioridade)
        }
        style={{ width: "30rem" }}
      >
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5>
              <span className="badge text-bg-secondary me-1">
                {props.item.id}
              </span>
              - {props.item.titulo}
            </h5>

            <h6>
              Prioridade:
              <span
                className={
                  "ms-1 text-" + prioridadeStyle(props.item.prioridade)
                }
              >
                <i
                  className={
                    "me-1 far fa-" +
                    prioridadeStyle(props.item.prioridade, true)
                  }
                ></i>
              </span>
              {prioridadeLabel(props.item.prioridade)}
            </h6>
          </div>
          <p className="card-text">{props.item.descricao}</p>
          <div className="d-flex justify-content-end border-top pt-2">
            <button className="me-2 btn-sm btn btn-outline-primary">
              <i
                className="fas fa-pen me-2"
                onClick={() => props.pegarAtividade(props.item.id)}
              ></i>
              Editar
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => props.deletarAtividade(props.item.id)}
            >
              <i className="fas fa-trash me-2"></i>
              Deletar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
