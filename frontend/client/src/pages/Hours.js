import React from 'react';
import '../Css/Hours.css'
import Monday from '../components/Day/Monday';
import Tuesday from '../components/Day/Tuesday';
import Widnersday from '../components/Day/Widnersday';
import Thursday from '../components/Day/Thursday';
import Friday from '../components/Day/Friday';
import Saturday from '../components/Day/Saturday';




function Hours() {
    return (
        <div className="box">
            <Monday />
            <Tuesday />
            <Widnersday />
            <Thursday/>
            <Friday/>
            <Saturday/>
        </div>
    );
}

export default Hours;