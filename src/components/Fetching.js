import React from 'react';
// Importation de l'icone spinner(animation de chargement) de la bibliotheque 'react-icons'
import { FaSpinner } from 'react-icons/fa';


// Creation d'un composant fonctionnel (fonction) qui ne prend aucun parametres
// et qui nous renvoit un DIV. Les classes (fetching et spinner) sont definies dans 
// la feuille de style CSS qui accompagen notre application.
const Fetching = () => (
    <div className='fetching'>
        <FaSpinner className='spinner' />

    </div>
)

// Exportation de notre composant en module
export default Fetching