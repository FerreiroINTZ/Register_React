import React, { useEffect, useState } from "react";
import cancelar from "../../imgs/cancelar.png";
import editar from "../../imgs/botao-editar.png";

const Row = (props, { id, nome, e_mail, idade, sexo, estado, municipio }) => {
  const keys = Object.keys(props);
  console.log(keys);
  return (
    <>
      {keys.map((x) => (
        <div className="field" title={props[x]}>
          <span className="meta-data">{x}:</span>
          <span className="data">{props[x]}</span>
        </div>
      ))}
    </>
  );
};

function list({ reg, setRegisters, filter }) {
  const deletando = (id) => {
    const new_registers = reg.filter((x) => x.id !== id);
    console.log(new_registers);
    setRegisters(new_registers);
  };
  useEffect(() => {
    console.log(filter);
  }, []);

  return (
    <div className="list-background">
      {reg
        .filter((x) =>
          filter.nome
            ? x.nome.toLowerCase().includes(filter.nome.toLowerCase())
              ? true
              : false
            : true
        )
        .filter(x => filter.min 
          ? x.idade >= filter.min ? true : false
          : true
        )
        .filter(x => filter.max 
          ? x.idade <= filter.max ? true : false
          : true
        )
        .filter((x) =>
          filter.sexo ? (x.sexo === filter.sexo ? true : false) : true
        )
        .map((x, index) => (
          <>
            <div className="row">
              <Row
                key={x.id}
                id={x.id}
                nome={x.nome}
                e_mail={x.e_mail}
                idade={x.idade}
                sexo={x.sexo}
                estado={x.estado}
                municipio={x.municipio}
              />
              <div className="actions">
                <div className="editar">
                  <img src={editar} alt="editar" />
                </div>
                <div className="cancelar" onClick={() => deletando(index)}>
                  <img src={cancelar} alt="cancelar" />
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}

export default list;
