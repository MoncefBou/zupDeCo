import React from 'react';
import NavBar from './components/Nav/NavBar';
import Step from './Stepp/Step'
import './App.css'

function Mom() {
    return (
        <div>
            <NavBar />
            <div>
                <Step />
            </div>
        </div>
    );
}

export default Mom;