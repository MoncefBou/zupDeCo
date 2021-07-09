import React from 'react';
import '../Css/Levels.css'
import Primaire from '../components/Level/Primaire';
import College from '../components/Level/College';
import Lycee from '../components/Level/Lycee';


function Hours(props) {
    return (
        <div className="box-levels">
            <Primaire getAvailable = {props.getAvailable}/>
            <College getAvailable = {props.getAvailable}/>
            <Lycee getAvailable = {props.getAvailable}/>
        </div>
    );
}

export default Hours;