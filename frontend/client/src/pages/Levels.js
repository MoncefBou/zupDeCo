import React from 'react';
import '../Css/Levels.css'
import Primaire from '../components/Level/Primaire';
import College from '../components/Level/College';
import Lycee from '../components/Level/Lycee';


function Hours() {
    return (
        <div className="box-levels">
            <Primaire/>
            <College />
            <Lycee/>
        </div>
    );
}

export default Hours;