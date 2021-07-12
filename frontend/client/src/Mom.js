import React from 'react';
import NavBar from './components/Nav/NavBar';
import Stepper from './Stepp/Stepper'
import './App.css'



function Mom() {

    return (
        <div>
            <NavBar />
            <div>
                <Stepper />
            </div>
        </div>
    );
}

export default Mom;