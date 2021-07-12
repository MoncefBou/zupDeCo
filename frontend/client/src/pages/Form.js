import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
// import CheckMatieres from "./components/CheckMatieres";
// import CheckHoraires from "./components/CheckHoraires";
// import DatePickers from "./components/DatePickers";
// import Gender from "./components/Gender";
// import DatePickers from "./components/DatePickers";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useForm } from "react-hook-form";

// Text Input
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex"
    }
  }
}));

// Genre

const gender = [
  {
    value: "male",
    label: "Homme"
  },
  {
    value: "female",
    label: "Femme"
  }
];

const classroom = [
  {
    value: "3",
    label: "3e"
  },
  {
    value: "4",
    label: "4e"
  }
];

export default function FormPropsTextFields() {
  const classes = useStyles();

  const [currency, setCurrency] = useState("");
  // const [value, setValue] = useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
    // console.log(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
    //   if (data) {

    //     console.log(data);
    //   } else {

    //     console.log(errors);
    //   }
    // };
  };

  return (
    <div
      onSubmit={handleSubmit(onSubmit)}
      className="container"
      style={{ marginLeft: "60px" }}
    >
      <h1
        style={{
          marginLeft: "68px"
        }}
      >
        FORMULAIRE
      </h1>
      <form
        // onSubmit={handleSubmit(onSubmit)}
        style={{
          marginLeft: "60px",
          display: "flex",
          flexDirection: "row"
        }}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "30px"
            }}
          >
            <TextField
              {...register("firstName", {})}
              id="firstName"
              label="Prénom de l'élève"
              variant="filled"
            />
            <TextField
              {...register("lastName", {})}
              id="lastName"
              label="Nom de l'élève"
              variant="filled"
            />
          </div>

          {/* Genre */}

          {/* <Gender /> */}
          {/* <form className="gender" noValidate autoComplete="off"> */}
          <div>
            {/* <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "30px"
                }}
              > */}
            {/* <TextField
                  {...register("gender", {})}
                  // id="filled-select-currency"
                  id="gender"
                  select
                  label="Genre"
                  value={currency}
                  onChange={handleChange}
                  variant="filled"
                >
                  {gender.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField> */}

            {/* </div> */}
            {/* <DatePickers /> */}

            <TextField
              {...register("street", {})}
              style={{ width: "auto" }}
              id="street"
              label="Adresse postal"
              variant="filled"
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "30px"
              }}
            >
              <TextField
                {...register("cp", {})}
                id="cp"
                label="Code postal"
                variant="filled"
              />
              <TextField
                {...register("city", {})}
                id="city"
                label="Ville"
                variant="filled"
              />
            </div>
            <TextField
              {...register("schoolName", {})}
              style={{ width: "auto" }}
              id="schoolName"
              label="Nom établissement scolaire"
              variant="filled"
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "30px"
              }}
            >
              <TextField
                {...register("schoolCity", {})}
                id="schoolCity"
                label="Ville établissement scolaire"
                variant="filled"
              />

              {/* <form className="classroom" noValidate autoComplete="off">
                  <TextField
                    // id="filled-select-currency"
                    id="class"
                    select
                    label="Classe"
                    value={currency}
                    onChange={handleChange}
                    variant="filled"
                  >
                    {classroom.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </form> */}
            </div>
          </div>
          {/* </form> */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "30px"
            }}
          >
            <TextField
              {...register("email", {})}
              id="email"
              label="Adresse email"
              variant="filled"
            />
            <TextField
              {...register("phoneNumber", {})}
              id="phoneNumber"
              label="Numéro de téléphone"
              variant="filled"
            />
          </div>
        </div>
        {/* <TextareaAutosize
        style={{
          padding: "15px",
          marginLeft: "68px",
          width: "800px",
          height: "100px"
        }}
        aria-label="maximum height"
        placeholder="Message"
      ></TextareaAutosize> */}
        {/* </form> */}
      </form>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "68px",
          width: "50%"
        }}
      >
        <div>
          <h3>Matières dans lesquelles l'élève souhaite progresser</h3>
          <CheckMatieres />
        </div>
        <div>
          <h3>
            Disponibilité de l'élève pour les cours en ligne <br></br> (durée
            session 1h)
          </h3>
          <CheckHoraires />
        </div>
      </div> */}
      <form>
        <TextareaAutosize
          style={{
            padding: "15px",
            marginLeft: "68px",
            width: "800px",
            height: "100px"
          }}
          {...register("message", {})}
          aria-label="maximum height"
          placeholder="Message"
        ></TextareaAutosize>

        <button
          style={{
            color: "blue",
            border: "2px solid blue",
            cursor: "pointer",
            // marginLeft: "850px",
            marginLeft: "68px",
            height: "30px"
          }}
        >
          Envoi
        </button>
      </form>
    </div>
  );
}
