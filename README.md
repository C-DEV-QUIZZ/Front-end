## Comment lancer le projet ???

* Install node.js sur ce site => https://nodejs.org/en/download/


* une fois node installé, lancer un invité de commande et faite :
```
    npm install -g @angular/cli
```
*Cela installe **angular cli** sur votre machine. 
Ce dernier permet de créer et gérer un projet ainsi que d'ajouter simplement des composants en les déclarants à tout les endroits nécessaires.*

* Une fois angular installé, déplacé vous avec votre invite de commande à la racine du projet en utilisant sur windows la commande :

```
    cd chemin/ou/vous/souhaité/aller
```
* Une fois à la racine du projet (ici front-end) qui doit être composer des dossiers et fichiers nommé: 

```
    |e2e  
    |src  
    |.browserslistrc  
    |.editorconfig  
    |.gitignore  
    |angular.json  
    |...  
```
* Faite la commande :

```
    npm install
```
*qui permettra l'installation toutes les dépendances nécessaires au projet:*

Une fois cette commande terminé il reste à lancer le serveur avec cette commande :

```
    ng serve
```

* une fois le serveur démarré (laissé toujours l'invité ouvert) vous devriez voir :

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

**Ouvrez votre navigateur rendre a l'adresse **http://localhost:4200/** et faite vos tests.**

Cdlt

---





This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
