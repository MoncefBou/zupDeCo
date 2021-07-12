import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import CheckboxesSexes from "../components/CheckboxesSexes";
import DatePickers from "../components/DatePickers";
import CheckboxesHoraires from "../components/CheckboxesHoraires";
import SelectedCheckboxes from "../components/SelectedCheckboxes";
// import CheckDisponibilities from "./components/CheckDisponibilities";
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';
import NavBar2 from '../components/Nav/NavBar2'

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
  const [submit, setSubmit] = useState(false)

  // Radio
  const handleChange = (event) => {
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

  if (submit === true) {

    return (
      <div>
        <NavBar2 />
        <h4 style={{ textAlign: 'center' }}>Vos données ont bien été enregistrées, merci !</h4>
      </div>
    )
  } else {
    return (
      <div>
        <NavBar2 />
        <h2 style={{textAlign:'center'}}>Formulaire élève</h2>
        <div
          className="container"
          onSubmit={handleSubmit(onSubmit)}
          style={{ marginLeft: "60px" }}
        >
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                {...register("lastName", {})}
                required
                id="filled-required"
                label="NOM élève"
                variant="filled"
              />
              <TextField
                {...register("firstName", {})}
                required
                id="filled-required"
                label="Prénom élève"
                variant="filled"
              />

              {/* <h3>Sexe</h3> */}
              <FormControl component="fieldset">
                <FormLabel
                  required
                  component="legend"
                  style={{ color: "black", marginBottom: "30px" }}
                >
                  Genre ?
                </FormLabel>
                <RadioGroup
                  aria-label="access"
                  name="access"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    {...register("gender", {})}
                    value="F"
                    control={<Radio />}
                    label="F"
                  />
                  <FormControlLabel
                    {...register("gender", {})}
                    value="H"
                    control={<Radio />}
                    label="H"
                  />
                </RadioGroup>
              </FormControl>

              {/* <h3>Date de naissance</h3> */}
              <DatePickers />

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
                    onChange={handleChange}
                  >
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

              <br></br>
              <h2>Parent référent</h2>

              {/* <h3>Qualité</h3> */}
              <div
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
                    onChange={handleChange}
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
              </div>

              <TextField
                {...register("parentLastName", {})}
                required
                id="filled-required"
                label="Nom référent"
                variant="filled"
              />
              <TextField
                {...register("parentFirstName", {})}
                required
                id="filled-required"
                label="Prénom référent"
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
                label="Code postal"
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
              />
            </div>
            {/* </form> */}
            <h2>Disponibilités</h2>
            <div
              style={{
                border: "1px solid black",
                marginTop: "35px",
                marginLeft: "8px",
                width: "50%"
              }}
            >
              <div className="checkbox_horaires">
                {/* <DatePickers/> */}
                <h3 style={{ width: "auto", padding: "20px 0 10px 25px" }}>
                  ZUPdeCOURS - En individuel, en visio, avec un(e) étudiant(e)
                  bénévole de l'association ZUPdeCO - Pendant l'année scolaire et
                  petites vacances. Plusieurs choix possibles.
                </h3>
                <SelectedCheckboxes />

                {/* <CheckboxesHoraires /> */}
              </div>
            </div>
            <br></br>
            <br></br>
            <h3>
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
            >
              {/* <DatePickers/> */}
              <div className="offre">
                <h4 style={{ width: "auto", padding: "20px 0 10px 25px" }}>
                  Ce complément Acadomia est une offre réservée aux élèves de 3e
                  uniquement - <br></br>
                  Le choix est sur 1 seule matière (français OU mathémathiques). En
                  petit groupe de même niveau avec un professeur, toujours à
                  distance, 1h40 par semaine.
                </h4>
              </div>
              {/* <CheckboxesHoraires /> */}
            </div>

            <br></br>
            <br></br>

            <h2>Message</h2>

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

            <div
              className="your_message"
              style={{
                marginTop: "35px",
                marginLeft: "8px",
                display: "inline-block"
              }}
            >
              <TextField
                {...register("message", {})}
                id="filled-required"
                label="Votre message"
                variant="filled"
              />
            </div>
            <Button onClick={(e) => setSubmit(true)} variant="contained" color="primary">Envoyer</Button>
          </form>
        </div>
      </div>
    );
  }
}
