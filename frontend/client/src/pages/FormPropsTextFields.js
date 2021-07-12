import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
// import CheckboxesSexes from "./components/CheckboxesSexes";
// import DatePickers from "./components/DatePickers";
// import Parent from "./components/Parent";
// import CheckboxesHoraires from "./components/CheckboxesHoraires";
// import SelectedCheckboxes from "./components/SelectedCheckboxes";
// import CheckDisponibilities from "./components/CheckDisponibilities";
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

export default function FormPropsTextFields() {
  const classes = useStyles();

  const [value, setValue] = useState("");

  // Radio
  const handleChangeAccess = (event) => {
    setValue(event.target.value);
  };

  const handleChangeGrade = (event) => {
    setValue(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <div
      className="container"
      onSubmit={handleSubmit(onSubmit)}
      style={{ marginLeft: "60px" }}
    >
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            {...register("firstName", {})}
            required
            id="filled-required"
            label="Prénom élève"
            variant="filled"
          />
          <TextField
            {...register("lastName", {})}
            required
            id="filled-required"
            label="Nom élève"
            variant="filled"
          />

          {/* <h3>Sexe</h3> */}
          {/* <CheckboxesSexes /> */}

          {/* <h3>Date de naissance</h3> */}
          {/* <DatePickers /> */}

          <TextField
            {...register("schoolName", {})}
            required
            id="filled-required"
            label="Nom établissement"
            variant="filled"
          />
          <TextField
            {...register("schoolCity", {})}
            required
            id="filled-required"
            label="Ville établissement"
            variant="filled"
          />
          <TextField
            {...register("class", {})}
            required
            id="filled-required"
            label="Classe"
            variant="filled"
          />
          <TextField
            {...register("email", {})}
            id="filled-required"
            label="Mail élève (facultatif)"
            variant="filled"
          />

          <div
            style={{
              border: "1px solid black",
              width: "390px",
              marginLeft: "8px",
              marginTop: "15px",
              padding: "30px",
              color: "black"
            }}
          >
            {/* Radio */}
            <FormControl component="fieldset">
              <FormLabel
                required
                component="legend"
                style={{ color: "black", marginBottom: "30px" }}
              >
                A t'il/elle accès à un ordinateur ?
              </FormLabel>
              <RadioGroup
                aria-label="access"
                name="access"
                value={value}
                onChange={handleChangeAccess}
              >
                {/* <div></div> */}
                <FormControlLabel
                  {...register("computer", {})}
                  value="yes"
                  control={<Radio />}
                  label="Oui"
                />
                <FormControlLabel
                  {...register("computer", {})}
                  value="no"
                  control={<Radio />}
                  label="Non"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>

        <br></br>
        {/* <h2>Parent référend</h2> */}

        {/* <h3>Qualité</h3> */}
        {/* <div
          style={{
            border: "1px solid black",
            width: "390px",
            marginLeft: "8px",
            marginTop: "15px",
            padding: "30px"
          }}
        >
          <FormControl component="fieldset">
            <FormLabel
              required
              component="legend"
              style={{ color: "black", marginBottom: "30px" }}
            >
              Qualité
            </FormLabel>
            <RadioGroup
              aria-label="quality"
              name="quality"
              value={value}
              onChange={handleChangeGrade}
            >
              <FormControlLabel
                {...register("grade", {})}
                value="father"
                control={<Radio />}
                label="Père"
              />
              <FormControlLabel
                {...register("grade", {})}
                value="mother"
                control={<Radio />}
                label="Mère"
              />
              <FormControlLabel
                {...register("grade", {})}
                value="other"
                control={<Radio />}
                label="Autre"
              />
            </RadioGroup>
          </FormControl>
        </div> */}

        {/* <TextField
          {...register("parentLastName", {})}
          required
          id="filled-required"
          label="Nom référend"
          variant="filled"
        />
        <TextField
          {...register("parentFirstName", {})}
          required
          id="filled-required"
          label="Prénom référend"
          variant="filled"
        />
        <TextField
          {...register("parentEmail", {})}
          required
          id="filled-required"
          label="Mail"
          variant="filled"
        />
        <TextField
          {...register("street", {})}
          id="filled-required"
          label="Adresse postale"
          variant="filled"
        />
        <TextField
          {...register("cp", {})}
          id="filled-required"
          label="Code postale"
          variant="filled"
        />
        <TextField
          {...register("city", {})}
          required
          id="filled-required"
          label="Ville"
          variant="filled"
        />
        <TextField
          {...register("phoneNumber", {})}
          required
          id="filled-required"
          label="Téléphone"
          variant="filled"
        /> */}
        {/* </div> */}
        {/* </form> */}
        {/* <h2>Disponibilités</h2> */}
        {/* <div
          style={{
            border: "1px solid black",
            marginTop: "35px",
            marginLeft: "8px",
            width: "50%"
          }}
        >
          <div className="checkbox_horaires">
            <h3 style={{ width: "auto", padding: "20px 0 10px 25px" }}>
              ZUPdeCOURS - En individuel, en visio, avec un(e) étudiant(e)
              bénévole de l'association ZUPdeCO - Pendant l'année scolaire et
              petites vacances. Plusieurs choix possibles.
            </h3>
            <CheckboxesHoraires />
          </div>
        </div> */}
        {/* <br></br> */}
        {/* <br></br> */}
        {/* <h3>
          Si votre enfant est élève de 3e, une préparation supplémentaire avec
          Acadomia
        </h3>
        <div
          style={{
            border: "1px solid black",
            marginTop: "35px",
            marginLeft: "8px",
            width: "50%"
          }}
        > */}
        {/* <DatePickers/> */}
        {/* <div className="offre">
            <h4 style={{ width: "auto", padding: "20px 0 10px 25px" }}>
              Ce complément Acadomia est une offre réservée aux élèves de 3e
              uniquement - <br></br>
              Le choix est sur 1 seule matière (français OU mathémathiques). En
              petit groupe de même niveau avec un professeur, toujours à
              distance, 1h40 par semaine.
            </h4>
          </div> */}
        {/* <CheckboxesHoraires /> */}
        {/* </div>

        <br></br> */}

        {/* <SelectedCheckboxes /> */}

        {/* <br></br> */}

        {/* <h2>Message</h2>

        <div
          className="message"
          style={{
            border: "1px solid black",
            marginLeft: "8px",
            width: "50%"
          }}
        >
          <h4 style={{ paddingLeft: "25px" }}>
            Votre enfant est en difficulté dans sa scolarité ? Vous habitez dans
            une zone d'éducation prioritaire ? Votre enfant est élève boursier ?
            Merci de parler de vos besoins.
          </h4>
        </div>
*/}
        <div
          className="your_message"
          style={{
            marginTop: "35px",
            margin: "5px 0 0 auto",
            display: "inline-block"
          }}
        >
          <TextField
            style={{ width: "754px" }}
            {...register("message", {})}
            id="filled-required"
            label="Votre message"
            variant="filled"
          />
        </div>
        <br></br>
        {/* <Parent /> */}
        <button style={{ margin: "18px 0 0 8px" }}>Valider</button>
      </form>
    </div>
  );
}