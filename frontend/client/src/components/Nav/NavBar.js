import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { BrowserRouter, Link } from 'react-router-dom'
import './NavBar.css'
import { useHistory } from "react-router";

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
    let history = useHistory()

const logOut = () => {
    localStorage.clear()
    history.push('/')
}

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={{ background: "#7B0099" }}>
                    <Typography variant="h6" className={classes.title}>
                        HomeClasse
                    </Typography>
                    <Button onClick={(e) => logOut()} color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
