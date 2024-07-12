import React, { useEffect, useState, useReducer, createContext } from "react";

function register_body({ page, setRegisters, registers, setPage }) {
  const [estados, setEtados] = useState();
  const [municipios, setMunicipios] = useState();

  // Preenche os campos.
  function fillFields(val, e) {
    return { ...val, [e.target.name]: e.target.value };
  }

  const [fields, setFileds] = useReducer(fillFields, {
    id: registers.length,
    nome: "",
    e_mail: "",
    sexo: "",
    idade: "",
    estado: "...",
    municipio: "...",
  });

  // Verifica se os dados náo esta vazios para serem enviados.
  useEffect(() => {
    const x = fields;
    console.log(fields);

    if (
      x.nome != "" &&
      x.e_mail != "" &&
      x.sexo != "" &&
      x.idade > 0 &&
      x.estado != "..." &&
      x.municipio != "..."
    ) {
      setSave(true);
      console.log("Pode Salvar!");
    } else {
      console.log("Náo pode Salvar!");
      setSave(false);
    }

    console.log("========================")
    console.log(registers)
    console.log("========================")
  }, [fields]);

  // Busca os estados
  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((x) => x.json())
      .then((x) => setEtados(x));

    console.log(page);
  }, []);

  // Busca os municipios apos o estado ser selecionado.
  function fillState(curState) {
    const state = estados.filter((x) => x.sigla === curState);

    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state[0].id}/municipios`
    )
      .then((x) => x.json())
      .then((x) => setMunicipios(x));
  }

  const [save, setSave] = useState(false);

  // Salva os dados.
  function salvar() {
    console.log("Salvo!");
    setRegisters((x) => {
      return [...x, fields];
    });
    setPage(!page);
  }

  useEffect(() =>{
    console.log(fields)
  }, [fields])

  ///Renderisaçáo do componente.

  return (
    <div className="register-body">
      <h2>Cadastrar</h2>
      <form className="fields">
        <div className="field">
          <input
            type="text"
            id="name"
            name="nome"
            required
            onChange={(e) => setFileds(e)}
          />
          <label htmlFor="name">Nome:</label>
        </div>

        <div className="field">
          <input
            type="e-mail"
            id="e-mail"
            name="e_mail"
            required
            onChange={(e) => setFileds(e)}
          />
          <label htmlFor="e-mail">E-mail:</label>
        </div>

        <div className="field">
          <div className="register-field-radio">
            <input
              type="radio"
              name="sexo"
              id="sexo-feminino"
              value="Feminino"
              required
              onChange={(e) => setFileds(e)}
            />
            <label htmlFor="sexo-feminino">Masculino</label>
          </div>
          <div className="register-field-radio">
            <input
              type="radio"
              name="sexo"
              id="sexo-masculino"
              value="Masculino"
              required
              onChange={(e) => setFileds(e)}
            />
            <label htmlFor="sexo-masculino">Masculino</label>
          </div>
          <label htmlFor="sexo">Sexo:</label>
        </div>

        <div className="field">
          <input
            type="number"
            id="idade"
            name="idade"
            required
            onChange={(e) => setFileds(e)}
          />
          <label htmlFor="idade">Idade:</label>
        </div>

        <div className="field field_estado-municipio">
          <label htmlFor="munucipio">Estado:</label>
          <select
            name="estado"
            id="estado"
            required
            onChange={(e) => {
              // setEtado(x.target.value)
              setFileds(e);
              fillState(e.target.value);
            }}
          >
            {estados?.map((x, index) =>
              index === 0 ? (
                <>
                  <option>...</option> <option>{x.sigla}</option>
                </>
              ) : (
                <option>{x.sigla}</option>
              )
            )}
          </select>

          <label htmlFor="munucipio">Municipio:</label>
          <select
            name="municipio"
            id="munucipio"
            required
            onChange={(e) => setFileds(e)}
          >
            {municipios?.map((x, index) =>
              index === 0 ? (
                <>
                  <option>...</option> <option>{x.nome}</option>
                </>
              ) : (
                <option>{x.nome}</option>
              )
            )}
          </select>
        </div>

        <div className="terms">
          <div>
            <input type="checkbox" id="box1" required />
            <label id="gabriel" for="box1">
              Declaro que estou ciente de que meus dados serão usados para
              fornecer a melhor experiencia possivel.
            </label>
          </div>

          <div>
            <input type="checkbox" id="box2" />
            <label id="gabriel" for="box2">
              Receber Novas atualizações sobre produtos novos e atualizações.
            </label>
          </div>

          <div>
            <input type="checkbox" id="box3" required />
            <label id="gabriel" for="box3">
              Sou maior de 18 anos e estou ciente das minhas consequencias nesta
              plataforma.
            </label>
          </div>
        </div>
        <button
          style={{ opacity: save ? "1" : ".5" }}
          onClick={(e) => (save ? salvar() : console.log("Náo Salvo!"))}
        >
          Salvar
        </button>
      </form>
    </div>
  );
}

export default register_body;
