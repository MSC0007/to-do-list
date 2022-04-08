import React from 'react';
import ReactDOM from 'react-dom';
// Importation de nos modules qu'on vient d'installer
import 'bootstrap/dist/css/bootstrap.min.css';
// Importation de quelques icones de la bibliotheque React Icons.
// "React Icons" va nous fournir ces icones sous la forme de composants React(</>).
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from 'react-icons/fa';

// Ici, notre composant React "App" étend de la classNamee React.Component{} 
// NB: Dans Javascript, le mot clé "className" devient "classNameName", il ne
// faudra pas oublier de remplacer toutes les occurences du mot "class" par "className". 
class App extends React.Component {
    render() {
        return (
            <section id="todo">
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
                <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
                    <div className="btn-group">
                        <a href="#" className="btn btn-outline-dark bg-light"><FaListAlt /></a>
                        <a href="#" className="btn btn-outline-dark bg-light"><FaCheckSquare /></a>
                        <a href="#" className="btn btn-outline-dark bg-light"><FaPlusSquare /></a>
                    </div>
                    {/* Creation d'un bouton supplementaire dans notre composant React */}
                    <button className="btn btn-outline-dark bg-light" ><FaTrash /></button>
                </footer>
            </section >
        )



    }

}
// Affichage de notre composant React "App"
ReactDOM.render(<App />, document.getElementById("root"))
