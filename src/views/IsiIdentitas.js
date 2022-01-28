import React, { useState } from "react";
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
import { removeIdentitas } from "../store/actions/identitasActions";
import { connect } from "react-redux";

const IsiIdentitas = ({ identitas, removeIdentitas }) => {
  const handleRemove = (identitas) => {
    removeIdentitas(identitas);
  };

  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={identitas.id}>
      <TableCell>{identitas.name}</TableCell>
      <TableCell>{identitas.kelamin}</TableCell>
      <TableCell>{identitas.agama}</TableCell>
      <TableCell>{identitas.alamat}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleRemove(identitas)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeIdentitas: (identitas) => dispatch(removeIdentitas(identitas)),
  };
};

export default connect(null, mapDispatchToProps)(IsiIdentitas);
