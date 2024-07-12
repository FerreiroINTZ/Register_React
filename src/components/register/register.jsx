import React from "react";
import Register_body from "./register_body";
import Register_text from "./register_text";

function register({ page, setRegisters, registers, setPage }) {
  if (page) {
    return (
      <section id="register">
        <Register_text setPage={setPage} />
        <Register_body
          registers={registers}
          page={page}
          setRegisters={setRegisters}
          setPage={setPage}
        />
      </section>
    );
  }
}

export default register;
