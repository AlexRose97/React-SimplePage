import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";

export class Info extends React.Component {
  render() {
    return (
      <div style={{ minWidth: "100%" }}>
        <Navbar props={this.props} tituloP={"Info"} />
        <InfoFull props={this.props} />
      </div>
    );
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function InfoFull({ props }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Integrantes del Grupo</h1>
      <h2>Alex Rene Lopez Rosa - 201602999</h2>
      <h2>Otro integrante - carnet</h2>
      <h2>Otro integrante - carnet</h2>
      <h2>Otro integrante - carnet</h2>
    </div>
  );
}
