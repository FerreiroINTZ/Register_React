import React from "react";
import goBack from "../../imgs/goBack.png";

function register_text({ setPage }) {
  return (
    <div className="register-text">
      <h1>Ficha de Cadastro</h1>
      <p>
        Preencha os dados na ficha de acordo com sua vonatde. E seu cadastro
        sera realizado!
      </p>
      <button onClick={() => setPage(false)}>
        <img src={goBack} alt="voltar" />
        <p>Voltar</p>
      </button>
    </div>
  );
}

export default register_text;
