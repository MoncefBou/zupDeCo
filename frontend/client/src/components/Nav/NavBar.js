import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { BrowserRouter, Link } from 'react-router-dom'
import './NavBar.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={{ background: "#7B0099" }}>
                    <Typography variant="h6" className={classes.title}>
                        Zupdeco
                    </Typography>
                        <nav className = 'nav-bar'>
                            <ul>
                                <li><Link to="/">FORMULAIRE</Link></li>
                            </ul>
                        </nav>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
