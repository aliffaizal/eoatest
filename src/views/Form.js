import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Container,
  Button,
  MenuItem,
  Select,
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Card,
  CardContent,
  CardActions,
  FormGroup,
  FormHelperText,
} from "@material-ui/core";

import { addIdentitas } from "../store/actions/identitasActions";
import { connect } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, useParams } from "react-router";
import { firestoreConnect } from "react-redux-firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
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

const Form = ({ addIdentitas, identitas }) => {
  const classes = useStyles();

  let validationSchema = yup.object().shape({
    name: yup.string().required("Wajib diisi"),
    alamat: yup.string().required("Wajib diisi"),
    kelamin: yup.string().required("Wajib diisi"),
    agama: yup.string().required("Wajib diisi"),
  });

  const { errors, register, handleSubmit, setValue, control } = useForm({
    resolver: yupResolver(validationSchema),
    shouldUnregister: false,
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    addIdentitas(data);
    document.getElementById("addIdentitasForm").reset();
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} id={"addIdentitasForm"}>
                <FormGroup>
                  <label className={classes.label} htmlFor="name">
                    Nama
                  </label>
                  <TextField
                    inputRef={register}
                    id="name"
                    fullWidth
                    type="text"
                    name="name"
                    placeholder="Nama lengkap"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    variant="outlined"
                  />
                </FormGroup>

                <FormGroup className={classes.formGroup}>
                  <label className={classes.label} htmlFor="alamat">
                    Alamat
                  </label>
                  <TextField
                    fullWidth
                    id="alamat"
                    name="alamat"
                    type="alamat"
                    placeholder="Alamat"
                    inputRef={register}
                    error={!!errors.alamat}
                    helperText={errors.alamat?.message}
                    variant="outlined"
                  />
                </FormGroup>
                <Controller
                  name="agama"
                  defaultValue=""
                  control={control}
                  render={({ onChange, ref, value }) => (
                    <FormControl fullWidth>
                      <label htmlFor="agama" className={classes.label}>
                        Agama
                      </label>
                      <Select
                        labelId="agama"
                        id="agama"
                        displayEmpty
                        fullWidth
                        select="true"
                        inputRef={ref}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        error={!!errors.agama}
                        variant="outlined"
                      >
                        <MenuItem value="">
                          <em>Pilih Agama</em>
                        </MenuItem>
                        <MenuItem value="Islam">Islam</MenuItem>
                        <MenuItem value="Kristen">Kristen</MenuItem>
                        <MenuItem value="Hindu">Hindu</MenuItem>
                        <MenuItem value="Budha">Budha</MenuItem>
                        <MenuItem value="Konghucu">Konghucu</MenuItem>
                      </Select>
                      <FormHelperText error>
                        {errors.agama?.message}
                      </FormHelperText>
                    </FormControl>
                  )}
                />
                <Controller
                  name="kelamin"
                  defaultValue=""
                  control={control}
                  render={({ onChange, ref, value }) => (
                    <FormControl fullWidth>
                      <label htmlFor="kelamin" className={classes.label}>
                        Kelamin
                      </label>
                      <RadioGroup
                        onChange={(e) => onChange(e.target.value)}
                        aria-label="kelamin"
                        name="kelamin"
                        value={value}
                      >
                        <FormControlLabel
                          value="Laki Laki"
                          control={<Radio />}
                          label="Laki Laki"
                        />
                        <FormControlLabel
                          value="Perempuan"
                          control={<Radio />}
                          label="Perempuan"
                        />
                      </RadioGroup>
                      <FormHelperText error>
                        {errors.kelamin?.message}
                      </FormHelperText>
                    </FormControl>
                  )}
                />
                <CardActions>
                  <Button variant="contained" color="primary" type="submit">
                    Simpan
                  </Button>
                </CardActions>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIdentitas: (identitas) => dispatch(addIdentitas(identitas)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
