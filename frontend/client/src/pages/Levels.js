import React from 'react';
import '../Css/Levels.css'
import Primaire from '../components/Level/Primaire';
import College from '../components/Level/College';
import Lycee from '../components/Level/Lycee';

import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';






// function Levels(props) {
//     return (
//         <div className="box-levels">
//             {/* <Primaire getLevel = {props.getLevel}/>
//             <College getLevel = {props.getLevel}/>
//             <Lycee getLevel = {props.getLevel}/> */}

//             <FormControlLabel
//                 control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
//                 label="Custom color"
//             />
//         </div>
//     );
// }


const GreenCheckbox = withStyles({
    root: {
        color: purple[400],
        '&$checked': {
            color: purple[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Levels(props) {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true
    });


    return (
        <FormGroup row >
                <FormControlLabel
                    control={<GreenCheckbox checked={state.checkedG} onChange={(e) => props.handleChange(e, "Primaire")} name="checkedA" />}
                    label="Primaire"
                />

                <FormControlLabel
                    control={<GreenCheckbox checked={state.checkedG} onChange={(e) => props.handleChange(e, "Collège")} name="checkedB" />}
                    label="Collège"
                />

                <FormControlLabel
                    control={<GreenCheckbox checked={state.checkedG} onChange={(e) => props.handleChange(e, "Lycée")} name="checkedC" />}
                    label="Lycée"
                />
        </FormGroup>
    );
}

