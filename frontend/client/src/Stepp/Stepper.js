import React from 'react';
import '../Css/Stepper.css'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '../pages/Card'
import Hours from '../pages/Hours'
import Buttons from '../Button/Buttons'
import axios from 'axios'

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
    return ['Dispo', 'Eleve', 'recap'];
}

function getStepContent(stepIndex, getAvailable) {
    switch (stepIndex) {
        case 0:
            return <Hours getAvailable={getAvailable} />;
        case 1:
            return (
                <div style={{ textAlign: "center" }}>
                    <Card />
                    <Buttons />
                </div>
            )
        case 2:
            return 'ce que tu a selectionner';
        default:
            return 'Unknown stepIndex';
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const [available, setAvailable] = React.useState([])
    const [dataStudentAvailable, setDataStudentAvailable] = React.useState()
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = async () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // CODER ICI POUR ENVOYER AVAILABLE AVEC AXIOS ET LA ROUTE 
        const arrayToSend = []
        const dataToSend = available.map(elem => {

            const day = elem.day
            const available = elem.available[0].map(element => {
                arrayToSend.push(`${day} ${element}`)
            })
        })

        const response = await axios.post('http://localhost:8000/volunteers/filter/available', {
            available: arrayToSend
        })
        setDataStudentAvailable(response.data)
        console.log("response of axios", response.data);


    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const getAvailable = (data = {}) => {
        if (data) {
            const newAvailable = [...available, data];
            setAvailable(newAvailable)
        }
    }

    return (
        <div className={classes.root, 'stepper'}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label} dataStudentAvailable={dataStudentAvailable}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>Toute les etapes sont selectionner</Typography>
                        <Button onClick={handleReset}>Annuler</Button>
                    </div>
                ) : (
                    <div className='step'>
                        <Typography className={classes.instructions}>{getStepContent(activeStep, getAvailable)}</Typography>
                        <div className='box-stepper'>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Precedent
                            </Button>
                            <Button
                                variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
