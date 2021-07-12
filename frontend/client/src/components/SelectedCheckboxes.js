// import React, { Component } from "react";
import React from "react";
import Checkbox from "./Checkbox";

// const items = ["Lundi 15h-16h", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
const items = [
  "lundi 18h-19h",
  "lundi 19h-20h",
  "mardi 18h-19h",
  "mardi 19h-20h",
  "mercredi 14h-15h",
  "mercredi 15h-16h",
  "mercredi 16h-17h",
  "mercredi 17h-18h",
  "mercredi 18h-19h",
  "mercredi 19h-20h",
  "jeudi 18h-19h",
  "jeudi 19h-20h",
  "vendredi 18h-19h",
  "vendredi 19h-20h",
  "samedi 08h-09h",
  "samedi 09h-10h",
  "samedi 10h-11h",
  "samedi 11h-12h",
  "samedi 12h-13h",
  "samedi 14h-15h",
  "samedi 15h-16h",
  "samedi 16h-17h",
  "samedi 17h-18h",
  "samedi 18h-19h",
  "samedi 19h-20h"
];

// const error = [
//   "lundi 15h-16h",
//   "lundi 16h-17h",
//   "lundi 17h-18h",
//   "lundi 18h-19h",
//   "mardi 15h-16h",
//   "mardi 16h-17h",
//   "mardi 17h-18h",
//   "mardi 18h-19h",
//   "mercredi 10h-11h",
//   "mercredi 11h-12h",
//   "mercredi 14h-15h",
//   "mercredi 15h-16h",
//   "mercredi 16h-17h",
//   "mercredi 17h-18h",
//   "mercredi 18h-19h",
//   "jeudi 15h-16h",
//   "jeudi 16h-17h",
//   "jeudi 17h-18h",
//   "jeudi 18h-19h",
//   "vendredi 15h-16h",
//   "vendredi 16h-17h",
//   "vendredi 17h-18h",
//   "vendredi 18h-19h",
//   "samedi 11h-12h",
//   "samedi 14h-15h",
//   "samedi 15h-16h",
//   "samedi 16h-17h",
//   "samedi 17h-18h",
//   "samedi 18h-19h"
// ];
// .filter((v) => v).length !== 3;

// if (items.length < 2) {
//   //show error
//   console.log("Nope Man");
// } else {
//   //no error
//   console.log("Yes");
// }

// const error = items.filter((v) => v).length !== 3;

class SelectedCheckboxes extends React.Component {
  componentWillMount = () => {
    // this.selectedCheckboxes = new Set(items);
    this.selectedCheckboxes = new Set();
  };
  toggleCheckbox = (label) => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  };

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      // console.log(checkbox);
      // if (items.length < 2) {
      if (this.selectedCheckboxes.length < 2) {
        //show error
        console.error("Nope Man");
      } else {
        //no error
        console.log(checkbox);
      }
    }
  };

  createCheckbox = (label) => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
      // error={error}
    />
  );

  createCheckboxes = () => items.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form
            style={{ fontSize: "18px", marginLeft: "50px", paddingBottom: "40px" }}
              // error={error}
              onSubmit={this.handleFormSubmit}
            >
              {this.createCheckboxes()}

              {/* <button className="btn btn-default" type="submit"> */}
              {/* Save */}
              {/* Valider */}
              {/* </button> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectedCheckboxes;
