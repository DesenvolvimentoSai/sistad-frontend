# SistadFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
### angular.json e protractor.conf.js
  Alterado a port para 3000

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Correção erro sh: 1: node: Permission denied

	Got the same error sh: 1: node: Permission denied
	So this worked for me
	npm config set user 0
	npm config set unsafe-perm true

## ERRO bash: ng: comando não encontrado
	npm install -g @angular/cli

## ERRO System limit for number of file (Error from chokidar)
Erro causado pela baixo limit na abertura dos arquivos iniciais do projeto.
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
