import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar({ props, tituloP }) {
  const classes = useStyles();
  const [openDraw, setopenDraw] = useState(false);
  const [anchor, setAnchor] = useState("left");

  const abrirMenu = () => {
    setAnchor("left");
    setopenDraw(true);
  };
  const irInicio = () => {
    props.history.push("/Inicio");
  };
  const irInfo = () => {
    props.history.push("/Info");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={abrirMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {tituloP}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={anchor}
        open={openDraw}
        onClose={() => setopenDraw(false)}
      >
        <div
          style={{
            width: "250px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <Button style={{ width: "100%" }} onClick={irInicio}>
              System Monitor
            </Button>
            <Button style={{ width: "100%" }} onClick={irInfo}>
              Info
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
