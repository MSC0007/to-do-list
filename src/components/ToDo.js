// Importation de la classe React
import React from "react";


// Ce type de composant (classe) doit avoir une methode "render" qui retourne "return"
// quelque chose(souvent du code JSX). 
class ToDo extends React.Component {

    // Pour créer de l'interactivité dans notre application, nous aurons besoins des "states"
    // Alors, on va activer le petit bouton associé a chaque tache permettant de specifier que
    // la tache est terminée.

    // Declaration d'un "state" ou état. Les states(etats) sont des "objets" dans lesquels on 
    // va pouvoir mettre des "propriétés". Pour cela, nous allons utiliser la fonction 
    // "setState()" qui est la fonction de React qui nous permet de créer de nouvelles versions
    // de nos etats. Cette fonction "setStat()", elle à acces à l'ancienne version de l'etat
    // (prevState). Avec "prevState()" nous allons créer une fonction et cette fonction 
    // va nous renvoyer un nouvel objet(un nouveau state) et dans ce nouveau state, la 
    // proprieté completed sera egale à l'inverse de sa valeur actuelle.
    state = {
        completed: this.props.task.completed
    }

    // Creation d'une variable "toggleCompleted" qui est égale à une "fonction" permettant de 
    // changer la valeur de la proprieté "completed". Cette fonction n'a ni nom, ni parametres.
    toggleCompleted = () => {
        this.setState(prevState => ({
            completed: !prevState.completed

        }))
    }


    render() {
        return (
            // Ajout d'une classe supplementaire pour afficher des informations à l'ecran.
            // Verification de la valeur de completed: si c'est égale à "true" on ajoute la
            // classe bootstrap "bg-succes", sinon on ne fait rien "null". Pour la verification, 
            // ici nous utilisons une instruction ternaire. En fonction de la valeur de notre
            // etat "completed", nous ajoutons et retirons des classes à notre element, ce qui
            // nous permet d'avoir un feedback à l'ecran sur l'action que l'on entreprend.
            <li className={"list-group-item d-flex align-tiems-center " + (this.state.completed ? 'bg-success' : null)}>
                {this.props.task.name}
                < button className={"btn btn-sm ml-auto " + (this.state.completed ? 'btn-success' : 'btn-outline-success')} onClick={() => this.toggleCompleted()
                }>&#x2713;</button >
            </li >
        )
    }
}

// Rendre ce composant disponible au reste de l'application
export default ToDo