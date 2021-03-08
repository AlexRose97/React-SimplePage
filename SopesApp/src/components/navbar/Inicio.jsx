import React from "react";
import Navbar from "./Navbar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export class Inicio extends React.Component {
  render() {
    return (
      <div style={{ minWidth: "100%" }}>
        <Navbar props={this.props} tituloP={"System Monitor"} />
        <FullInicio props={this.props} />
      </div>
    );
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  photo: {
    maxWidth: 400,
    maxHeight: 400,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(pid, name, father, status) {
  return { pid, name, father, status };
}
const rows = [
  createData(1, "system", "-", "running"),
  createData(2, "gui", 1, "running"),
  createData(3, "man", 1, "running"),
  createData(4, "make", 1, "running"),
];

export default function FullInicio({ props }) {
  const classes = useStyles();
  const newImage2 =
    "http://static.boredpanda.es/blog/wp-content/uploads/2016/09/divertidos-graficos-circulares-5.jpg";
  const newImage1 =
    "http://4.bp.blogspot.com/-yJ53cinhpZk/VFWKlD-GxjI/AAAAAAAAAW0/5sSwyGmdIs0/s1600/Image125.gif";
  return (
    <div classpid={classes.root}>
      <Grid container>
        <Grid item xs>
          <img className={classes.photo} src={newImage1} />
        </Grid>
        <Grid item xs>
          <img className={classes.photo} src={newImage2} />
        </Grid>
        <Grid item xs={12} style={{ padding: 20 }}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">PID</StyledTableCell>
                  <StyledTableCell align="center">Name</StyledTableCell>
                  <StyledTableCell align="center">Father Pid</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.pid}>
                    <StyledTableCell align="center">{row.pid}</StyledTableCell>
                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.father}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.status}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
