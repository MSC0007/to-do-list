// Grace aux proprietés(props) et aux états(states) React nous permet
// d'avoir des données dynamiques et de l'intéractivité dans notre application.
// Création de la variable "initialData" qui est égale à un tableau conteant 4 objets.
// Chaque objet représente une tache et chaque tache à un identifiant unique, un nom et 
// une proprieté booleene "completed".

let initialData = [
    { id: 'jsertu7a', name: 'Ranger la vaisselle', completed: false },
    { id: 'jseruo7l', name: 'Répondre appel d\'offres', completed: false },
    { id: 'jseruy2q', name: 'Signer contrat', completed: false },
    { id: 'jserv4sw', name: 'Aspirer le salon', completed: false }
]

// Exportation de nos données pour les rendre disponible aux autres composants.
// Ces données, vont etre utilisées par le composant "ToDoList" 
export default initialData;