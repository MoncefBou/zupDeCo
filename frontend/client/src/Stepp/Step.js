import React from 'react';
import '../Css/Stepper.css'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '../pages/Card'
import Levels from '../pages/Levels'
import Recap from '../pages/Recap'

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



export default function HorizontalLabelPositionBelowStepper() {
    const [available, setAvailable] = React.useState([])
    const [students, setStudents] = React.useState([]) 
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const getAvailable = (data = {}) => {
        if (data){
            const newAvailable = [...available, data];
            setAvailable(newAvailable)
        }
    }

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <Levels getAvailable = {getAvailable} />;
            case 1:
                return (
                    <div style={{ textAlign: "center"}}>
                        <Card setStudents = {setStudents}/> 
                    </div>
                )
            case 2:
                return <Recap available = {available} students = {students}/>
            default:
                return 'Unknown stepIndex';
        }
    }
    console.log('stepper available :',available);
    console.log('stepper students :',students);
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
                    <div>
                        <Typography className={classes.instructions}>Toute les etapes sont selectionner</Typography>
                        <Button onClick={handleReset}>Annuler</Button>
                    </div>
                ) : (
                    <div className='step'>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
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
