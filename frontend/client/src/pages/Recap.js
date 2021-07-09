import React from 'react'
import secondToHour from '../utils/utils'

function Recap(props) {
    console.log("available", props.dataToRecap.available);
    return (
        <div>
            <div>
                <h2>Eleves selectionner :</h2>
                <ul>
                    {props.dataToRecap.map((elem) => {
                        return (
                            <div>

                                <h3>{elem.name}</h3>
                                <ul>
                                    <li>Genre : {elem.gender}</li>
                                    <li>Classe : {elem.class}</li>
                                    <li>
                                        {elem.available.map((element, index) => {
                                            const hourInSecond = element.timeBegin
                                            const hours = secondToHour(hourInSecond)

                                            return <span>{`${element.day} ${hours}${index === (elem.available.length-1)? '' : ' - '}`} </span>
                                        })}
                                    </li>
                                </ul>
                            </div>
                        )
                    })}
                </ul>
            </div>
            {/* <div>
                <h2>Horraire selectionner :</h2>
                <ul>
                    {props.available.map((elem) => {
                        return <li>
                            <p>{elem.day}</p>
                            <p>{elem.available.join('')}</p>
                        </li>
                    })}
                </ul>
            </div> */}
        </div>
    )
}

export default Recap
