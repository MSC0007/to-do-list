import React, { Fragment } from "react";
// Creation d'un composant fonctionnel "ToDoList" qui sera utilisé en tant que module.
// Notre fonction ToDoList sera egale à une fonction qui nous renvoi du code 
// JSX(Ici: elle nous renvoi la liste non-ordonée "ul")
const ToDoList = () => (
    // <React.Fragment> est un composant qui nous est offert par la bibliotheque React
    // afin d'embaler nos elements adjacents dans un composant React qui par defaut ne peut
    // contenir qu'un seul element meme si ce dernier est composée de plusieurs sous-elements 
    // Ecrire <React.Fragment> est assez long, on peut tout simplement ecrire a la place:
    //  <> elmt1, elmt2, elmtn </>.
    <React.Fragment>
        <h1 className="m-3">Liste de tâches</h1>
        <ul className="list-group m-3">
            <li className="list-group-item d-flex align-tiems-center">
                Ranger la vaisselle
                <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex align-tiems-center">
                Répondre appel d'offres
                <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex align-tiems-center">
                Signer contrat
                <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex align-tiems-center">
                Ranger le salon
                <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
        </ul>
    </React.Fragment>
)

// Exportation de notre composant fonctionnel
export default ToDoList