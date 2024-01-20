import React, { useState } from "react";
import Title from "../components/Title";

export default function Esignature() {
  const [name, setName] = useState("your signature");
  const [date, setDate] = useState("select date");

  const handleNameChange = (e) => {
    // console.log(e.target.value)
    setName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0",
  };

  document.body.style.background = "#eee";
  return (
    <div className="container text-center">
      <Title classes={"title"} text={name} />
      <Title classes={"main-title mb-4"} text={!date ? "Dob" : date} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At labore
        dolor veniam ipsa excepturi molestias amet? Dolores illo delectus
        excepturi.
      </p>
      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "40vh",
        }}
      >
        <input type="date" value={date} style={inputStyle}  onChange={handleDateChange}></input>
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        ></input>
      </footer>
    </div>
  );
}
