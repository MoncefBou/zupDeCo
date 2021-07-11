import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavBar from '../components/Nav/NavBar';
import '../Css/HomeAdmin.css'


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className="homeAdmin">
            <NavBar />
            <div className="cardHomeAdmin">

                <Button size="small">
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h7" component="h2">
                                Élèves
                            </Typography>
                            <Typography variant="h7" className={classes.pos} color="textSecondary">
                                Accéder à la liste des élèves
                            </Typography>
                        </CardContent>
                    </Card>
                </Button>

                <Button size="small">
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h7" component="h2">
                                Tuteurs
                            </Typography>
                            <Typography variant="h7" className={classes.pos} color="textSecondary">
                                Accéder à la liste des tuteurs
                            </Typography>
                        </CardContent>
                    </Card>
                </Button>
            </div>
        </div>
    );
}
