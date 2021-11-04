# PlanIt / Planning-App-Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.


## Getting Started

First step: ng new new-app-name --no-strict

Second step: npm install --save bootstrap@3 (for this project)

Third step: angular.json add "node_modules/bootstrap/dist/css/bootstrap.min.css" under styles to bring it into project

## Creating new file with folder structure 

ng g c componentName

"ng g c componentName --skipTests true" will create folder structure without the test file attached

"ng g c folderName/componentName" will place files in subfolder


## Getting production ready app

 ng build --prod



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
