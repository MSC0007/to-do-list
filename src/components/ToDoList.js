import React from "react";
// Creation d'un composant fonctionnel "ToDoList" qui sera utilisé en tant que module.
// Notre fonction ToDoList sera egale à une fonction qui nous renvoi du code 
// JSX(Ici: elle nous renvoi la liste non-ordonée "ul")
// Importation du composant ToDo
import ToDo from "./ToDo";


const ToDoList = ({ tasks, match, onToggleCompleted }) => {

    // Creation d'une variable pour les taches filtrées
    let filteredTasks
    switch (match.params.filter) {
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed)
            break;

        default:
            filteredTasks = tasks
    }

    if (filteredTasks.length === 0) {
        return (
            <>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    <li className="list-group-item" >Aucune Tache à afficher</li>
                </ul>
            </>
        )
    }

    else {
        return (
            // <React.Fragment> est un composant qui nous est offert par la bibliotheque React
            // afin d'embaler nos elements adjacents dans un composant React qui par defaut ne peut
            // contenir qu'un seul element meme si ce dernier est composée de plusieurs sous-elements 
            // Ecrire <React.Fragment> est assez long, on peut tout simplement ecrire a la place:
            //  <> elmt1, elmt2, elmtn </>.
            //<React.Fragment>

            // Nous allons appliquer la fonction map() à notre propriete "tasks".
            // Cette fonction "map" prend en parametre une fonction "(task)" et cette derniere 
            // fonction renvoit notre composant ToDo avec une tache(task) qui sera dans ce composant
            // "Todo". Et cette tache ce sera la tache sur laquelle on sera en train de boucler(c-a-d: task).

            <>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    {

                        filteredTasks.map((task) => <ToDo task={task} key={task.id} onToggleCompleted={onToggleCompleted} />)
                    }
                </ul>
            </>
        )
    }
}



// Exportation de notre composant fonctionnel
export default ToDoList