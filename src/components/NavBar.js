import React from "react";
// Importation de quelques icones de la bibliotheque React Icons.
// "React Icons" va nous fournir ces icones sous la forme de composants React(</>).
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from 'react-icons/fa';
// Importation du composant "NavLink" qui provient de "react-router-dom"
import { NavLink } from "react-router-dom";

// Creation d'un composant React fonctionnel(une fonction) appelée:
// "NavBar". Notre composant sera egale à une fonction 
// qui renvoie du code JSX 
const NavBar = () => (

    <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
        <div className="btn-group">
            <NavLink to="/" className="btn btn-outline-dark bg-light"><FaListAlt /></NavLink>
            <NavLink to="/completed" className="btn btn-outline-dark bg-light"><FaCheckSquare /></NavLink>
            <NavLink to="/add-task" className="btn btn-outline-dark bg-light"><FaPlusSquare /></NavLink>
        </div>
        {/* Creation d'un bouton supplementaire dans notre composant React */}
        <button className="btn btn-outline-dark bg-light" ><FaTrash /></button>
    </footer>

)

// Exportation de notre composant "NavBar" en module
export default NavBar