// Les imports et les exports permettent de structurer les fichiers js en module

/* Par défaut JavaScript execute ce qu'on appelle la 'global scope' (la porté globale). Le contenu du code
provenant d'un fichier est automatiquement disponible au sein d'un autre fichier */

/* .js = javascript  
.ts = type script 
.jsx = javascript xml 
.tsx = type script xml 

On peut considerer qu'un fichier js est un module est lors qu'il contient un 'export' */

function myFuncA() {
    console.log('A')
   
}

function myFuncB() {
    console.log('B')
}

function myFuncC() {
    console.log('C')
}

export { myFuncA, myFuncC }; //syntaxe de l'export nommée 

export default myFuncA