import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "450px"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function CheckboxesHoraires() {
  const classes = useStyles();
  // const [state, setState] = useState({
  const [state, setState] = useState({
    lundi15: false,
    lundi16: false,
    lundi17: false,
    lundi18: false
    // mardi15: false,
    // mardi16: false,
    // mardi17: false,
    // mardi18: false,
    // mercredi10: false,
    // mercredi11: false,
    // mercredi14: false,
    // mercredi15: false,
    // mercredi16: false,
    // mercredi17: false,
    // mercredi18: false,
    // jeudi15: false,
    // jeudi16: false,
    // jeudi17: false,
    // jeudi18: false,
    // vendredi15: false,
    // vendredi16: false,
    // vendredi17: false,
    // vendredi18: false,
    // samedi11: false,
    // samedi14: false,
    // samedi15: false,
    // samedi16: false,
    // samedi17: false,
    // samedi18: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  // const handleChange = () => {
  //   setState({ ...state, name: checked });
  // };

  const {
    lundi15,
    lundi16,
    lundi17,
    lundi18
    // mardi15,
    // mardi16,
    // mardi17,
    // mardi18,
    // mercredi10,
    // mercredi11,
    // mercredi14,
    // mercredi15,
    // mercredi16,
    // mercredi17,
    // mercredi18,
    // jeudi15,
    // jeudi16,
    // jeudi17,
    // jeudi18,
    // vendredi15,
    // vendredi16,
    // vendredi17,
    // vendredi18,
    // samedi11,
    // samedi14,
    // samedi15,
    // samedi16,
    // samedi17,
    // samedi18
  } = state;
  // const error =
  //   [
  //     lundi15,
  //     lundi16,
  //     lundi17,
  //     lundi18,
  //     mardi15,
  //     mardi16,
  //     mardi17,
  //     mardi18,
  //     mercredi10,
  //     mercredi11,
  //     mercredi14,
  //     mercredi15,
  //     mercredi16,
  //     mercredi17,
  //     mercredi18,
  //     jeudi15,
  //     jeudi16,
  //     jeudi17,
  //     jeudi18,
  //     vendredi15,
  //     vendredi16,
  //     vendredi17,
  //     vendredi18,
  //     samedi11,
  //     samedi14,
  //     samedi15,
  //     samedi16,
  //     samedi17,
  //     samedi18
  //   ].filter((v) => v).length !== 3;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    // event.preventDefault();
    console.log(data);
    console.log(errors);
  };

  return (
    <div onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <FormControl
        // error={error}
        component="fieldset"
        className={classes.formControl}
      >
        <FormLabel
          style={{ color: "black", paddingBottom: "15px" }}
          component="legend"
        >
          {/* Sexe */}
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                {...register("lundi15", {})}
                value="Lundi15"
                checked={lundi15}
                onChange={handleChange}
                name="lundi15"
              />
            }
            label="Lundi 15h-16h"
          />
          <FormControlLabel
            control={
              <Checkbox
                {...register("lundi16", {})}
                value="Lundi16"
                checked={lundi16}
                onChange={handleChange}
                name="lundi16"
              />
            }
            label="Lundi 16h-17h"
          />
          <FormControlLabel
            control={
              <Checkbox
                {...register("lundi17", {})}
                value="Lundi17"
                checked={lundi17}
                onChange={handleChange}
                name="lundi17"
              />
            }
            label="Lundi 17h-18h"
          />
          <FormControlLabel
            control={
              <Checkbox
                {...register("lundi18", {})}
                value="Lundi18"
                checked={lundi18}
                onChange={handleChange}
                name="lundi18"
              />
            }
            label="Lundi 18h-19h"
          />
          {/* <FormControlLabel
            control={
              <Checkbox
                checked={mardi15}
                onChange={handleChange}
                name="mardi15"
              />
            }
            label="Mardi 15h-16h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mardi16}
                onChange={handleChange}
                name="mardi16"
              />
            }
            label="Mardi 16h-17h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mardi17}
                onChange={handleChange}
                name="mardi17"
              />
            }
            label="Mardi 17h-18h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mardi18}
                onChange={handleChange}
                name="mardi18"
              />
            }
            label="Mardi 18h-19h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mercredi10}
                onChange={handleChange}
                name="mercredi10"
              />
            }
            label="Mercredi 10h-11h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mercredi11}
                onChange={handleChange}
                name="mercredi11"
              />
            }
            label="Mercredi 11h-12h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mercredi14}
                onChange={handleChange}
                name="mercredi14"
              />
            }
            label="Mercredi 14h-15h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mercredi15}
                onChange={handleChange}
                name="mercredi15"
              />
            }
            label="Mercredi 15h-16h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mercredi16}
                onChange={handleChange}
                name="mercredi16"
              />
            }
            label="Mercredi 16h-17h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mercredi17}
                onChange={handleChange}
                name="mercredi17"
              />
            }
            label="Mercredi 17h-18h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mercredi18}
                onChange={handleChange}
                name="mercredi18"
              />
            }
            label="Mercredi 18h-19h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={jeudi15}
                onChange={handleChange}
                name="jeudi15"
              />
            }
            label="Jeudi 15h-16h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={jeudi16}
                onChange={handleChange}
                name="jeudi16"
              />
            }
            label="Jeudi 16h-17h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={jeudi17}
                onChange={handleChange}
                name="jeudi17"
              />
            }
            label="Jeudi 17h-18h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={jeudi18}
                onChange={handleChange}
                name="jeudi18"
              />
            }
            label="Jeudi 18h-19h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={vendredi15}
                onChange={handleChange}
                name="vendredi15"
              />
            }
            label="Vendredi 15h-16h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={vendredi16}
                onChange={handleChange}
                name="vendredi16"
              />
            }
            label="Vendredi 16h-17h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={vendredi17}
                onChange={handleChange}
                name="vendredi17"
              />
            }
            label="Vendredi 17h-18h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={vendredi18}
                onChange={handleChange}
                name="vendredi18"
              />
            }
            label="Vendredi 18h-19h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={samedi11}
                onChange={handleChange}
                name="samedi11"
              />
            }
            label="Samedi 11h-12h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={samedi14}
                onChange={handleChange}
                name="samedi14"
              />
            }
            label="Samedi 14h-15h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={samedi15}
                onChange={handleChange}
                name="samedi15"
              />
            }
            label="Samedi 15h-16h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={samedi16}
                onChange={handleChange}
                name="samedi16"
              />
            }
            label="Samedi 16h-17h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={samedi17}
                onChange={handleChange}
                name="samedi17"
              />
            }
            label="Samedi 17h-18h"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={samedi18}
                onChange={handleChange}
                name="samedi18"
              />
            }
            label="Samedi 18h-19h"
          /> */}
        </FormGroup>
        <FormHelperText>Faites trois choix</FormHelperText>
      </FormControl>
    </div>
  );
}