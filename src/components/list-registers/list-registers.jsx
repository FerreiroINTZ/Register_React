import React, { useEffect, useState, useReducer } from "react";
import Filters from "./filters";
import List from "./list";

function list_registers({ page, registers, setRegisters, setPage }) {
  

  // o Sistema foi preciso por causo do checkbox de genero.
  function fillFilters(val, e){
    if(e.target.type != "checkbox"){
      return {...val, [e.target.name]: e.target.value}
    }else{
      if(e.target.checked){
        if(e.target.value === "1"){
          return {...val, [e.target.name]: "masculino"}
        }else{
          return {...val, [e.target.name]: "feminino"}
        }
      }else{
        return {...val, [e.target.name]: null}
      }

    }
  }

  const [filterParams, setFilterParams] = useReducer(fillFilters,
    {
      nome: null,
      min: null,
      max: null,
      sexo: null,
      estado: null,
      municipio: null,
    }
  )

  useEffect(() =>{
    console.log(filterParams)
  }, [filterParams])

  if (!page) {
    return (
      <section id="list-registers">
        <Filters 
          setFilterParams={setFilterParams}
          registers={registers}
          setPage={setPage}
          />
        <hr />
        <List 
          filter={filterParams}
          reg={registers}
          setRegisters={setRegisters} />
      </section>
    );
  }
}

export default list_registers;
