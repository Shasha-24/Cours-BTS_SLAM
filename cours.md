# Introduction a React

Une bibliothèque open-source qui permet la construction d'interfaces graphiques avec HTML, CSS et JavaScript.

Dans cette intro nous allons:
    - Comprendre les avantages apportés par React
    - découvrir le **JSX** --> pour JavaScript XML, qui est une extension de JavaScript 
    - Créer les **composants** --> Une fonction qui retourne du JSX
    - Comprendre les imports et les exports 
    - Utiliser des **props**
    - Utiliser le State 
    - Utiliser les events en React 

React --> framework en JS 

JavaScript permet de manipuler le DOM : c'est le représentation 'objet' des element HTML qui constitue une page web. Autrement dit, c'est une interface qui permet d'interagir avec la structure des pages web.

Définition de DOM : https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model

React utilise un DOM virtuel pour afficher ses composants (virtual DOM, shadow DOM), car manipuler le DOM directement peut être très couteux.

## JSX

- Le JSX ressemble a de l'HTML mais ce n'est pas de l'HTML
- le JSX c'est pas de l'HTML ni du JS mais un mélange des 2 
- ex: 'class' en HTML est remplacée par 'className' dans le JSX

Le JSX n'est pas directement execute par les navigateurs Web
Transpiler (compiler); l'outil pour transpiler c'est **babel** (https://babeljs.io/repl)

codesandbow: https://codesandbox.io/


# REACT 

React 2 bibliothèque js qui permet de creer une interface utilisateur, faire vivre, comme Netflix, les réseaux sociaux: 
 - React 
 - React-dom/client

React DOM utilise root pour racine, indique le point d'entrée de l'application 


```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

```

## Imports/Exports

Les imports et les exports en JS :
 - Les exports/imports nommes
 - L'export default 

vite outils qui va permettre de faire plusieurs chose rapidement, ça fonctionne avec react mais pas que avec plusieurs autre bibliothèque.


## Vite 

```
npm create vite my-react-app -- --template react
cd my-vue-app
npm install
npm run dev

```

## pour node_module

```
npm install
```

A chaque fois qu'on met un dossier, le fichier mettre une masjuscule


## ES7+ React/Redux/React-Native snippets

Installer, rfc etc...

attribus jsx 

Les porps correspond 


creer un composant qui affiche les alerte 

childrens permet d'afficher les elements du composants 

## exemple alerte 

```
function App() {

const [count, setCount] = useState(0)

  return (
    <>
      <h1>Alert</h1>

      <Alert message={'test'} type={'Warning'} />
    </>
  )
}
export default App

```

## Le state 

L'etat d'un composant designe une variable speciale qui contient des informations sur le contenu actuel du composant. Par exemple, un composant peut être en état d'erreur ou de chargement.
Un changement de cet état va entraîner ce qu'on appelle comunement un : 're-ender'

- useSate est un hook d'état qui fournit une variable 
  d'état et une fonction pour la mettre  a jour.
  const [state, setState]= useState(initialState)

**handler** fonction qui va te laisser t'occuper de tout 

# Typescript

- installation de manière global : npm install -g typescript 
- tsc = pour pvr l'utiliser sur les navigateur
- npm init 
- cd ./typescript
- npm init 
- npm install
- npm run dev

Une variable peut avoir plusieurs types.


## Interface

interfaces utiliser pour typer une variable.
On peut comparer une interface a un contrat, implementer une interface c'est s'engager a posseder toutes les proprietes presentees dans l'interfaces


## Class
mode d'emplois, avec leur propres interface, qui vont être 'autonome'.
Class => categorie 

## tsconfig.json

configurer typescript 
include = le dossier cible a transformer en JS 

-D = installer dans les dépendence de développement sinon dans les dependencies 


tsc = transfromes le ts en js 



## Prettier

 Prettier sert a mettre en forme.

Formatage de code automatique avec:

```
npm i -D prettier

```

Créer un fichier:

```
touch .prettierrc.json

```
Dans le fichier créer, mettre cette config:

```
{
    "printWidth": 100,
    "singleQuote": true,
    "semi": true,
    "tabWith": 2,
    "trailingComa": "all",
    "endOfline": "auto"
}

```

- Installer Prettier dans les plugin 
- Dans setting ecrire format on save cocher la case 
- Encore dans settings ecrire default formatter et mettre ' Prettier - Code formatter

Docs : Comment configurer Prettier : https://prettier.io/docs/en/options.html

## Eslint

eslint: harmoniser le code mpour la lecture, pour que tout le monde ai la même, travailler en groupe plus efficacement 

```

npm add -D eslint-config-prettier eslint-plugin-prettier

```
On peut installer plusieur paquet en même temps

## npm-lock.yaml

lister des dependance dans une version arreter, faire une install depuis les fichier log, permet de gerer plus precisemment.

## Setting 

" ctrl + , "


**chmod** modifier les permission, **777** open bar pour tout le monde 

Pour apporter les fonctionnaliter de typage dans un fichier TS.

# Composants 

composant c'est un fonction qui etourne du jsx 

# Props

props c'est custom ça permet de passer de composant parents a composant enfants 

parametre optionnel qu'on peut passer a un composant react 




