import React, { useState, useRef } from "react";

function filters({ setFilterParams, registers, setPage }) {
  const [radioSelected, setRadioSelected] = useState(0);

  const checkBox1 = useRef()
  const checkBox2 = useRef()

  const checkBox = (e) =>{
    if(e.target.value != 1){
      checkBox1.current.checked = false
    }else{
      checkBox2.current.checked = false
    }
    setFilterParams(e)
    console.log(e.target.name)
  }

  return (
    <div className="filter-background">
      <div className="filters">
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            onChange={(e) => setFilterParams(e)}
          />
        </div>

        <div>
          <label htmlFor="estado">Estado:</label>
          <select
            name="estado"
            id="estado"
            onChange={(e) => setFilterParams(e)}
          >
            <option value="...">...</option>
          </select>
        </div>

        <div className="sexo">
          <label htmlFor="nome">Sexo:</label>
          <div className="masculino">
            <input
              type="checkbox"
              id="masculino"
              name="sexo"
              value="1"
              ref={checkBox1}
              onChange={checkBox}
              />
            <label htmlFor="masculino">Masculino</label>
          </div>
          <div className="feminino">
            <input
              type="checkbox"
              id="feminino"
              name="sexo"
              value="2"
              ref={checkBox2}
              onChange={checkBox}
            />
            <label htmlFor="feminino">Feminino</label>
          </div>
        </div>

        <div className="filter-idade">
          <div>
            <label htmlFor="idade">Idade</label>
          </div>
          <div>
            <label htmlFor="min">Min:</label>
            <input
              type="number"
              name="min"
              id="min"
              onChange={(e) => setFilterParams(e)}
            />
          </div>
          <div>
            <label htmlFor="max">Max:</label>
            <input
              type="number"
              name="max"
              id="max"
              onChange={(e) => setFilterParams(e)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="municipio">Municipio:</label>
          <select
            name="municipio"
            id="municipio"
            onChange={(e) => setFilterParams(e)}
          >
            <option value="...">...</option>
          </select>
        </div>

          <button onClick={() => setPage(true)}>Novo Cadastro</button>
      </div>
      <div className="total-registers">
        <span>Cadastros</span>
        <p>{registers.length}</p>
      </div>
    </div>
  );
}

export default filters;
