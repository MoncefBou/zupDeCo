import React from 'react';
import '../Css/Hours.css'
import Monday from '../components/Day/Monday';
import Tuesday from '../components/Day/Tuesday';
import Widnersday from '../components/Day/Widnersday';
import Thursday from '../components/Day/Thursday';
import Friday from '../components/Day/Friday';
import Saturday from '../components/Day/Saturday';




function Hours(props) {
    return (
        <div className="box">
            <Monday getAvailable = {props.getAvailable}/>
            <Tuesday getAvailable = {props.getAvailable}/>
            <Widnersday getAvailable = {props.getAvailable}/>
            <Thursday getAvailable = {props.getAvailable}/>
            <Friday getAvailable = {props.getAvailable}/>
            <Saturday getAvailable = {props.getAvailable}/>
        </div>
    );
}

export default Hours;