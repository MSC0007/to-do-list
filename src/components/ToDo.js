// Importation de la classe React
import React from "react";


// Ce type de composant (classe) doit avoir une methode "render" qui retourne "return"
// quelque chose(souvent du code JSX). 
class ToDo extends React.Component {
    render() {
        return (
            <li className="list-group-item d-flex align-tiems-center">
                {this.props.task.name}
                <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
        )
    }
}

// Rendre ce composant disponible au reste de l'application
export default ToDo