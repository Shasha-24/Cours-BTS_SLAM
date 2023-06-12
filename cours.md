# Introduction a React

Une bibliothèque open-source qui permet la construction d'interfaces graphiques avec HTML, CSS et JavaScript.

Dans cette intro nous allons: - Comprendre les avantages apportés par React - découvrir le 
**JSX** --> pour JavaScript XML, qui est une extension de JavaScript - Créer les 
**composants** --> Une fonction qui retourne du JSX - Comprendre les imports et les exports - Utiliser des 
**props** - Utiliser le State - Utiliser les events en React

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

React est une bibliothèque JavaScript populaire pour la création d'interfaces utilisateur. Il permet de construire des composants réutilisables et de gérer facilement l'état de l'application. React utilise un modèle de programmation basé sur les composants, ce qui facilite la création d'interfaces réactives et dynamiques

React 2 bibliothèque js qui permet de creer une interface utilisateur, faire vivre, comme Netflix, les réseaux sociaux:

- React
- React-dom/client

React DOM utilise root pour racine, indique le point d'entrée de l'application

```js
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

```ts
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
  d'état et une fonction pour la mettre a jour.
  const [state, setState]= useState(initialState)

**handler**

Fonction qui va te laisser t'occuper de tout 

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

## Condition ternaire

En JSX il n'est pas possible d'écrire des conditions sur plusieurs ligne, on utilise donc des condition ternaire:

```jsx
// une condition ternaire
// type === 'warning' ? 'Warning' : 'Information'

//equivalente a
if (type === "warning") {
  return "Warning";
} else {
  return "Information";
}

```

# Les Hooks

## Quelques regles a respecter pour les hooks en React:

  - Les hooks ne peuvent être appeles qu'au niveau le plus haut d'un composant. Les Hooks ne peuvent pas être eppeles au sein de boucle ou au sein d'event handler.
  - Un hook ne peut pas être appeles conditionnellement
  - Les hooks ne peuvent être appeles qu'à l'interieur de composant donction et pas dans un composant classe




## Hook useContext

Un Hook est une fonction.

Le Hook useEffect (en anglais : sideEffect) permet de gerer les effets de bords en React
Comme vous le savez, votre application React est une fonction qui affiche du contenu à un endroit très percis du DOM (un element HTML DONT L'id est root...)
Placer pour gerer les effets de bords

La syntaxe du hook useEffect est la suivante:

```ts
function unComponent() {

  useEffect(() => {
       console.log("passage par le hook useEffect");
         return () => {};
    }, []);

  return <>Hello World!</>;
}
```

Le premier parametre est une fonction.

Le second est un tableau de dependances, si ce dernier est vide, la fonction passee en premier paramètre du hook useEffect est execute a chaque rendu du composant a l'écran.

Si un element (une dependance)
 est present dans ce tableau, on passera dans le hook useEffect a chaque mise a jour de cet element.





## Fonction pure

Fonction pure qui avec les argument donner retournera tout le temps le même resultat

Tout ce qu'on a aborder jusque ici:

- React JS
- TypeScript
- Vite
- ESlint/ Prettier
- Les composants
- les props
- le hook d'Etat useState
- affichage conditionnel
- les ternaires en JSX
- Les events (onClick) et les handlers

Rest a voir en REACT:

- qlqs hooks
- CSS et REACT
- Routing avec REACT
- Afficher du contenu dynamique
- travailler avec les formulaires en React
- (State managment)
- Interagir avec une API Rest



Pour promise aller voir mdn doc



```tsx

import { useEffect, useState } from 'react';
import { getPerson } from './getPerson';

export function PersonScore() {
  // on utilise | pour definir une union de type, name peut etre de type undefined ou string
  const [name, setName] = useState<string | undefined>();

  useEffect(() => {
    getPerson().then(
      (person) => {
        console.log(person);
        setName(person.name);
      },

      () => {},
    );
  }, []);

  return <div>Hello {name}</div>;
}

```




# CSS Module 


https://create-react-app.dev/



# TailwindCSS

Il s'agit d'un collection de classe CSS preconstruites et pertes a l'emploi. Pour faire un bon usage de tailwinde et tirer pleinement profit des classes fournies, il faut avoir des bases solides en CSS 


# Routeur


Cette commande  installe react-routeur-dom une lib de routing pour React. Un routeur permet de selectionner le conteny a afficher pour un chemin donné ex: '/dashboard'
Pour toute application  React qui contient plusieurs pages un router est essentiel.

```
npm i react-router-dom

``` 


