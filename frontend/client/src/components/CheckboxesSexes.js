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
    border: "1px solid black",
    width: "450px",
    marginLeft: "8px"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function CheckboxesSexes() {
  const classes = useStyles();
  const [state, setState] = useState({
    male: true,
    female: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { male, female } = state;
  const error = [male, female].filter((v) => v).length !== 1;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <div onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <FormControl
        required
        error={error}
        component="fieldset"
        className={classes.formControl}
      >
        <FormLabel
          style={{ color: "black", paddingBottom: "15px" }}
          component="legend"
        >
          Sexe
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                {...register("male", {})}
                value="M"
                checked={male}
                onChange={handleChange}
                name="male"
              />
            }
            label="H"
          />
          <FormControlLabel
            control={
              <Checkbox
                {...register("female", {})}
                value="F"
                checked={female}
                onChange={handleChange}
                name="female"
              />
            }
            label="F"
          />
        </FormGroup>
        <FormHelperText>Faites un choix</FormHelperText>
      </FormControl>
    </div>
  );
}
