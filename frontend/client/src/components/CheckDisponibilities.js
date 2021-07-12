import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "450px"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function CheckDisponibilities() {
  const classes = useStyles();
  const [state, setState] = useState({
    francais: false,
    math: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { francais, math } = state;
  const error = [francais, math].filter((v) => v).length !== 1;

  return (
    <div className={classes.root}>
      <FormControl
        error={error}
        component="fieldset"
        className={classes.formControl}
      >
        <FormLabel
          style={{ color: "black", paddingBottom: "15px", width: "100px" }}
          component="legend"
        >
          {/* Sexe */}
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={francais}
                onChange={handleChange}
                name="francais"
              />
            }
            label="Français / Mercredi 17h30 - 19h10"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={francais}
                onChange={handleChange}
                name="francais"
              />
            }
            label="Français / Samedi 11h30 - 13h10"
          />
          <FormControlLabel
            control={
              <Checkbox checked={math} onChange={handleChange} name="math" />
            }
            label="Maths / Mercredi 09h30 - 11h10"
          />
          <FormControlLabel
            control={
              <Checkbox checked={math} onChange={handleChange} name="math" />
            }
            label="Maths / Mercredi 17h30 - 19h10"
          />
        </FormGroup>
        <FormHelperText>Faites un choix</FormHelperText>
      </FormControl>
    </div>
  );
}