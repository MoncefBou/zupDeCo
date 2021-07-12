import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "410px",
    border: "1px solid black",
    padding: "20px",
    marginTop: "15px",
    marginLeft: "8px",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function DatePickers() {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classes.container}
      noValidate
    >
      <TextField
        {...register("dateOfBirth", {})}
        required
        id="date"
        label="Date de naissance"
        type="date"
        defaultValue="2011-05-08"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}
