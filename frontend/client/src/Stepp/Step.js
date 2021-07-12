import React from 'react';
import { useEffect } from 'react';
import '../Css/Step.css'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '../pages/Card'
import Levels from '../pages/Levels'
import Recap from '../pages/Recap'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Disponibilité', 'Élève', 'Récapitulatif'];
}



export default function HorizontalLabelPositionBelowStepper() {
    const [level, setLevel] = React.useState([])
    const [students, setStudents] = React.useState([])
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [selected, setSelected] = React.useState([]);
    const [dataToRecap, setDataToRecap] = React.useState([]);
    let history = useHistory()


    useEffect(() => {

        const token = localStorage.getItem("token") || false

        if (!token) {
            history.push('/')
        }
    }, [])

    const handleChange = (event, levelChoose) => {

        if (level.indexOf(levelChoose) === -1) {
            setLevel([...level, levelChoose])
        } else {
            const index = level.indexOf(levelChoose)
            const newLevel = level

            newLevel.splice(index, 1)
            setLevel(newLevel)
        }
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = students.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleNext = async () => {

        if (activeStep === 0) {
            // CODER ICI POUR ENVOYER AVAILABLE AVEC AXIOS ET LA ROUTE 

            const response = await axios.post('http://localhost:8000/volunteers/filter/schoolDegree', {
                schoolDegree: level
            })

            let studentNumber = 0
            const newArray = response.data.map(elem => {
                studentNumber = studentNumber + 1
                return {
                    name: `Élève ${studentNumber}`,
                    gender: elem.gender,
                    class: elem.schoolLevel.class,
                    available: elem.available,
                    id: elem._id
                }
            })

            setStudents(newArray)

        } else if (activeStep === 1) {
            const studentsMatch = []

            selected.forEach(element => {

                const newArray = students.filter(elem => {
                    return elem.name === element
                })

                if (newArray) {
                    studentsMatch.push(...newArray)
                }

            });

            setDataToRecap(studentsMatch)

        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);


    };

    const getStepContent = (stepIndex) => {

        switch (stepIndex) {
            case 0:
                return <Levels handleChange={handleChange} />;
            case 1:
                return (
                    <div style={{ textAlign: "center" }}>
                        <Card handleSelectAllClick={handleSelectAllClick} selected={selected} students={students} setStudents={setStudents} handleClick={handleClick} />
                    </div>
                )
            case 2:
                return <Recap dataToRecap={dataToRecap} />
            default:
                return 'Unknown stepIndex';
        }
    }

    return (
        <div className={classes.root, 'stepper'}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div className="messageEnd">
                        <Typography className={classes.instructions}>Les données sont enregistrées, merci !</Typography>
                    </div>
                ) : (
                    <div className='step'>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div className='box-step'>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Précédent
                            </Button>
                            <Button
                                variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Valider' : 'Suivant'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
