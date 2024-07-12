import { useState, useEffect, useRef } from "react";
import Header from "./components/header/header";
import Register from "./components/register/register";
import List_registers from "./components/list-registers/list-registers";

function App() {
  const [theme, setTheme] = useState(true);

  const [registers, setRegisters] = useState([
    {
      id: 0,
      nome: "Nimgém",
      e_mail: "nimgem@gmail.com",
      sexo: "masculino",
      idade: 18,
      estado: "SP",
      municipio: "Sumaré",
    },
    {
      id: 1,
      nome: "Renan",
      e_mail: "renan@gmail.com",
      sexo: "masculino",
      idade: 27,
      estado: "AC",
      municipio: "Assis Brasil",
    },
    {
      id: 2,
      nome: "Victoria",
      e_mail: "vixtoria@hotmail.com",
      sexo: "feminino",
      idade: 23,
      estado: "DF",
      municipio: "Brasília",
    },
    {
      id: 3,
      nome: "Matheus",
      e_mail: "matheus@matheus.com",
      sexo: "masculino",
      idade: 14,
      estado: "BA",
      municipio: "Gandu",
    },
  ]);

  const [page, setPage] = useState(false);

  return (
    <div id="body" style={{ background: theme ? "#303336" : "#D9D9D9" }}>
      <input type="checkbox" id="theme" />
      <Header theme={theme} chTheme={setTheme} />

      <Register
        page={page}
        setRegisters={setRegisters}
        setPage={setPage}
        registers={registers}
      />

        <List_registers
          registers={registers}
          setRegisters={setRegisters}
          setPage={setPage}
          page={page}
        />
    </div>
  );
}

export default App;
