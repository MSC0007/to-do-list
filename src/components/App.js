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
// Imporatation de la dependance "uniqueid"
import uniqueId from "uniqueid";
// Importation du composant "Fetching"
import Fetching from "./Fetching";



// NB: Dans react - router - dom v6, "Switch" à été remplacée par "Routes",
// donc l'import sera  { BrowserRouter, Routes, Route } 
// au lieu de { BrowserRouter, Switch, Route }


class App extends React.Component {
    // Pour rendre persistent la liste de nos taches marquées comme completes,
    // nous allons devoir dans le composant "App" faire quelques manipulations

    // Creation d'un objet state ayant une propriete "tasks" ayant comme valeur
    // initialData. 
    // Nous allons egalement utiliser(this.state.tasks) dans la declaration de la 
    // route pour envoyer les taches dans le composant ToDoList
    state = {
        // Nos taches 'tasks' sont une array vide au depart (chargement à distance des données) 
        tasks: [],
        // tasks: initialData,
        // Ajout d'un etat supplementaire (proprieté supplementaire)
        fetching: true
    }


    componentDidMount = () => {
        // 'delay' (Delai aleatoire entre 1 et 5s)
        let delay = Math.floor(Math.random() * 5000)

        // Ici, on utilise 'setTimeout' pour simuler le chargement de nos données,
        // dans la pratique il faudra eviter cette methode car elle pose des problemes de performances. 
        setTimeout(() => {
            this.setState({
                fetching: false,
                tasks: initialData
            })
        }
            , delay)

    }

    // La variable "onToggleCompleted" est egale à une fonction qui prend en parametre
    // l'identifiant de la tache. En sortie, cette fonction va créer une variable(taskToUpdate)
    // qui va recevoir la tache(find(task)) dont l'identifiant est égale à "taskId" (task.id === taskId)

    // Modification de l'etat de la tache grace à "setState".
    // On passe la fonction "onToggleCompleted" comme proprieté pour pouvoir y acceder dans le
    // composant ToDoList lorsque l'on cliquera sur le bouton.
    onToggleCompleted = (taskId) => {
        let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
        taskToUpdate.completed = !taskToUpdate.completed

        this.setState(prevState => (

            prevState.tasks.map(task => {
                return task.id === taskId ? taskToUpdate : task
            })
        ))

    }

    // Creation d'une nouvelle fonction "onAddTask", cette fonction va recevoir le nom de la 
    // nouvelle tache "newTaskName" et en sortie, elle va créer une nouvelle tache
    onAddTask = (newTaskName) => {
        // Creation d'une variable de type tache(un objet). Une tache à trois proprietes:
        // l'identifiant, le nom et sa description. Pour generer un identifiant unique pour
        // chaque tache, nous allons installer une dependance (npm install uniqueid --save).
        // L'option(--save) permet d'inscrire la dependance dans le "package.json".
        let newTask = {
            //Utilisation de la fonction uniqueid() pour generer un identifiant unique
            id: uniqueId(),
            name: newTaskName,
            completed: false

        }
        // Pour injecter cette nouvelle tache dans la liste des taches(dans le state).
        // On recupere grace au Spread Operator(...) la liste des taches actuelles(prevState.tasks)
        // a laquelle on vient ajouter la nouvelle tache (newTask). 
        // On va devoir passer en proprieté la fonction "onAddTask" lorsque l'on soumet notre
        // formulaire.
        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask]
        }))
    }

    // Pour finaliser notre application, il ne nous reste qu'a créer une nouvelle fonction pour
    // gerer la suppression de nos taches. Cette fonction "osnDeleteCompleted" est égale à une 
    // fonction anonyme qui ne recoit aucun parametres et qui modifie le state(la liste des taches) 
    onDeleteCompleted = () => {
        this.setState(prevState => {
            let newState = prevState.tasks.filter(task => !task.completed)
            return {
                tasks: newState
            }
        })

    }

    // Experimenter avec les methodes du cycle de vie de nos composants. 
    // Dans la console, nous pouvons voir les differents methodes du cycle 
    // de vie de nos composants en faisant simplement un "console.log":
    // 1. La methode "shouldComponentUpdate"
    shouldComponentUpdate = () => {
        console.log('Bonjour de shouldComponentUpdate')
        return true
    }

    // 2. La methode "componentDidMount"
    // componentDidMount = () => {
    //     console.log('Bonjour de componentDidMount')
    // }

    // 3. La methode "componentDidUpdate"
    componentDidUpdate = () => {
        console.log('Bonjour de componentDidUpdate')
    }

    // 4. La methode "getSnapshotBeforeUpdate"
    getSnapshotBeforeUpdate = () => {
        console.log('Bonjour de getSnapshotBeforeUpdate')
    }

    render() {
        console.log('Bonjour de render')
        return (

            <section id="todo">
                {this.state.fetching ? <Fetching /> : null}
                <BrowserRouter>
                    <Switch>
                        {/* <Route path="/add-task" component={AddTask} /> */}
                        <Route path="/add-task" render={(props) => <AddTask {...props} onAddTask={this.onAddTask} />} />
                        <Route path="/:filter?" render={(props) => <ToDoList  {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />} />
                    </Switch>

                    {/* Passage de la fonction "onDeleteCompleted" comme propriete au composant "NavBar.js" */}
                    <NavBar onDeleteCompleted={this.onDeleteCompleted} />
                </BrowserRouter>
            </section>
        )
    }
}

// Dans chaque module, nous devons definir ce que nous exportons(c - a - d: ce qui
// est importable dans les autres fichiers ou modules).
// Cette instruction permet d'exporter le fichier App.js en tant que module:
export default App