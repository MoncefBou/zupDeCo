import React from 'react';
import NavBar from './components/Nav/NavBar';
import Stepper from './Stepper'
import './App.css'



function Mom() {

    return (
        <div>
            <NavBar />
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            </div>
            <div>
                <Stepper />
            </div>
        </div>
    );
}

export default Mom;