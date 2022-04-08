import React from "react";
// Creation d'un composant fonctionnel "ToDoList" qui sera utilisé en tant que module.
// Notre fonction ToDoList sera egale à une fonction qui nous renvoi du code 
// JSX(Ici: elle nous renvoi la liste non-ordonée "ul")
const ToDoList = () => (
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
)

// Exportation de notre composant fonctionnel
export default ToDoList