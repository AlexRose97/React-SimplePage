import Button from "@material-ui/core/Button";
import React from "react";

export class Err404 extends React.Component {
  render() {
    const irInicio = () => {
      this.props.history.push("/Inicio");
    };
    return (
      <div
        className="App"
        style={{
          flexDirection: "column",
          alignContent: "center",
          background: "black",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ color: "white" }}>RUTA NO VALIDA</h1>
        <Button onClick={irInicio} variant="contained" color="primary">
          F
        </Button>
      </div>
    );
  }
}
