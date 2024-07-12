import React, { useRef } from "react";

function header({ theme, chTheme }) {
  const nada = useRef();

  function change_class() {
    if (theme) {
      nada.current.classList.add("social-light");
      nada.current.classList.remove("social-darck");
    } else {
      nada.current.classList.add("social-darck");
      nada.current.classList.remove("social-light");
    }
  }
  return (
    <header>
      <ul className="ul-social social-darck" ref={nada}>
        <li>
          <a href="#">Portfólio</a>
        </li>
        <li>
          <a href="#">Linkedin</a>
        </li>
        <li>
          <a href="https://github.com/FerreiroINTZ" target="_blanck">
            Git Hub
          </a>
        </li>
      </ul>
      <label
        htmlFor="theme"
        style={{ background: theme ? "#D9D9D9" : "#303336" }}
        onMouseDown={() => {
          chTheme(!theme);
          change_class();
        }}
      >
        <div></div>
      </label>
    </header>
  );
}

export default header;
