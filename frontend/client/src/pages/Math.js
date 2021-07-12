// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import FormLabel from "@material-ui/core/FormLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";

// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: "flex",
//         width: "450px"
//     },
//     formControl: {
//         margin: theme.spacing(3)
//     }
// }));

// export default function CheckMatieres() {
//     const classes = useStyles();
//     const [state, setState] = useState({
//         francais: false,
//         math: false,
//         histgeo: false,
//         anglais: false,
//         sciences: false,
//         others: false
//     });

//     const handleChange = (event) => {
//         setState({ ...state, [event.target.name]: event.target.checked });
//     };

//     const { francais, math, histgeo, anglais, sciences, others } = state;

//     //autre

//     const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <div className={classes.root}>
//             <FormControl component="fieldset" className={classes.formControl}>
//                 <FormLabel
//                     style={{ color: "black", paddingBottom: "15px", width: "100px" }}
//                     component="legend"
//                 >
//                     {/* Matières */}
//                 </FormLabel>
//                 <FormGroup>
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={francais}
//                                 onChange={handleChange}
//                                 name="francais"
//                             />
//                         }
//                         label="Français"
//                     />

//                     <FormControlLabel
//                         control={
//                             <Checkbox checked={math} onChange={handleChange} name="math" />
//                         }
//                         label="Mathématiques"
//                     />

//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={histgeo}
//                                 onChange={handleChange}
//                                 name="histgeo"
//                             />
//                         }
//                         label="Histoire - Géographie"
//                     />

//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={anglais}
//                                 onChange={handleChange}
//                                 name="anglais"
//                             />
//                         }
//                         label="Anglais"
//                     />
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={sciences}
//                                 onChange={handleChange}
//                                 name="sciences"
//                             />
//                         }
//                         label="Sciences (SVT / Physique Chimie ) "
//                     />
//                     {/* <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={others}
//                                 onChange={handleChange}
//                                 name="others"
//                             />
//                         }
//                         label="Autres matières"
//                     /> */}
//                     <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//                         Autre
//                     </Button>
//                     <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//                         <DialogTitle id="form-dialog-title">Autre</DialogTitle>
//                         <DialogContent>
//                             <DialogContentText>
//                                 Afficher la matiere que vous souhaiter
//                             </DialogContentText>
//                             <TextField
//                                 autoFocus
//                                 margin="dense"
//                                 id="name"
//                                 label="Autre matiere"
//                                 type="text"
//                                 fullWidth
//                             />
//                         </DialogContent>
//                         <DialogActions>
//                             <Button onClick={handleClose} color="primary">
//                                 Cancel
//                             </Button>
//                             <Button onClick={handleClose} color="primary">
//                                 confirmer
//                             </Button>
//                         </DialogActions>
//                     </Dialog>
//                 </FormGroup>
//             </FormControl>
//         </div>
//     );
// }