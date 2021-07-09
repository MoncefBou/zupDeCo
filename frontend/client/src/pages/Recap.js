import React from 'react'

function Recap(props) {
    return (
        <div>
            <div>
                <h2>Eleves selectionner :</h2>
                <ul>
                    {props.students.map((elem) => {
                        return <li>{elem}</li>
                    })}
                </ul>
            </div>
            <div>
                <h2>Horraire selectionner :</h2>
                <ul>
                    {props.available.map((elem) => {
                        return <li>
                            <p>{elem.day}</p>
                            <p>{elem.available.join('')}</p>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Recap
