import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@material-ui/core";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import IsiIdentitas from "./IsiIdentitas";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    alignItems: "center",
  },
  label: {
    color: "#3d3d3d",
    fontSize: 15,
    marginBottom: 12,
  },
  formGroup: {
    marginBottom: 10,
    marginTop: 10,
  },
}));

const IsiTable = ({ identitas }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TableContainer className={classes.container}>
            <Table
              stickyHeader
              aria-label="sticky table"
              style={{ backgroundColors: "red !important" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>Nama</TableCell>
                  <TableCell>Kelamin</TableCell>
                  <TableCell>Agama</TableCell>
                  <TableCell>Alamat</TableCell>
                  <TableCell>Opsi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {identitas &&
                  identitas.map((identitas) => (
                    <IsiIdentitas identitas={identitas} />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const identitas = state.firestore.ordered.identitas;
  return {
    identitas: identitas,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "identitas" }])
)(IsiTable);
