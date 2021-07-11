import React from 'react'
import secondToHour from '../utils/utils'
import '../Css/Recap.css'

function Recap(props) {

    return (
        <div>
            <h2 className="h2Recap">Élève(s) sélectionné(s) :</h2>
            <div className="recap">

                <ul>
                    {props.dataToRecap.map((elem) => {
                        return (
                            <div className="cardRecap">

                                <h3>{elem.name}</h3>
                                <ul>
                                    <li><strong>Genre :</strong> {elem.gender}</li>
                                    <li><strong>Classe :</strong> {elem.class}</li>
                                    <li><strong>Disponibilité :</strong>
                                         {elem.available.map((element, index) => {
                                            const hourInSecond = element.timeBegin
                                            const hours = secondToHour(hourInSecond)

                                            return <span> {`${element.day} ${hours}${index === (elem.available.length - 1) ? '' : ' - '}`} </span>
                                        })}
                                    </li>
                                </ul>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Recap
