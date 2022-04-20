import React from "react";

class AddTask extends React.Component {

    // Creation de la fonction handleSubmit pour pouvoir créer de nouvelle tache.
    // Cette fonction doit etre executée au moment de la soumission du formulaire,
    // donc au niveau de l'element <form>, nous avons besoin de l'attribut "onSubmit". 
    // Et avec "onSubmit", nous allons executer une petite fonction qui prend en entrée 
    // l'evenement "e" et executer en sortie "this.handleSubmit(e)"

    // Pour pouvoir recuperer les données du champ <input>, React nous propose un mechanisme appelé 
    // les references "ref={input => this.newTask = input}". L'attribut "ref" va nous créer une nouvelle 
    // variable(newTask) à l'interieur de notre composant "AddTask". Cette variable va contenir le champ
    // "input".
    // Nous allons utiliser la proprieté value de notre champ "input" pour recuperer le texte de notre
    // champ(this.newTask.value)

    // Grace aux references, nous avons un mechanisme relativement simple pour pouvoir recuperer des 
    // données saisies dans notre formulaire. Et nous allons nous servir de ces données pour créer de
    // nouvelles taches.

    handleSubmit = (e) => {
        // Pour empecher le mechanisme par defaut de soumission du formulaire.
        e.preventDefault()
        //console.log(this.newTask)

        // Affichage de la valeur de notre de texte(input)
        // console.log(this.newTask.value)

        //Recuperation de la fonction onAddTask qui etait passée en proprieté. 
        this.props.onAddTask(this.newTask.value)

        // Utilisation de la proprieté "push" de l'objet "history" qui est lui meme 
        // une proprieté injecté par React-Router dans notre composant.
        // "push" nous permet de rediriger vers la liste des taches aprés l'ajout d'une
        // nouvelle tache. "Push" est une sous-proprieté de la proprieté history.
        this.props.history.push('/')
    }

    render() {
        return (
            // Ici, nous avons un formulaire avec un champ de saisie et un bouton
            <section>
                <h1 className="m-3">Nouvelle tâche</h1>
                <div className="card mx-3">
                    <form className="card-body" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label form="taskName">Nom de la tâche</label>
                            <input type="text" className="form-control" name="taskName" id="taskName" required ref={input => this.newTask = input} />
                        </div>
                        <button type="submit" className="btn btn-primary">Créer</button>
                    </form>
                </div>
            </section>
        )
    }

}

export default AddTask