import React from "react";
//Importation de notre composant NavBar
import NavBar from "./NavBar";
//Importation de notre composant ToDoList
import ToDoList from "./ToDoList";
// Importation du composant AddTask
import AddTask from "./AddTask";
// Imporatation de trois composants de "React Router"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Importation du module "initialData"
import initialData from "../initialData";


// NB: Dans react - router - dom v6, "Switch" à été remplacée par "Routes",
// donc l'import sera  { BrowserRouter, Routes, Route } 
// au lieu de { BrowserRouter, Switch, Route }


class App extends React.Component {
    render() {
        return (

            <section id="todo">
                <BrowserRouter>
                    <Switch>
                        <Route path="/add-task" component={AddTask} />
                        <Route path="/:filter?" render={(props) => <ToDoList  {...props} tasks={initialData} />} />
                    </Switch>
                    <NavBar />
                </BrowserRouter>
            </section>
        )
    }
}

// Dans chaque module, nous devons definir ce que nous exportons(c - a - d: ce qui
// est importable dans les autres fichiers ou modules).
// Cette instruction permet d'exporter le fichier App.js en tant que module:
export default App