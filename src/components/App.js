import React from "react";
import NavBar from "./NavBar";
//Importation de notre composant ToDoList
import ToDoList from "./ToDoList";

class App extends React.Component {
    render() {
        return (
            <section id="todo">
                <h1 className="m-3">Liste de tâches</h1>
                <ToDoList />
                <NavBar />
            </section>
        )



    }

}

// Dans chaque module, nous devons definir ce que nous exportons(c - a - d: ce qui
// est importable dans les autres fichiers ou modules).
// Cette instruction permet d'exporter le fichier App.js en tant que module:
export default App