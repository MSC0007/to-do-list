import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation de nos modules qu'on vient d'installer.
// Importation de nos styles CSS (src/css/toDo.css)
import './css/toDo.css';

// Affichage de notre composant React "App"
ReactDOM.render(<App />, document.getElementById("root"));
