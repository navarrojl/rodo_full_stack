# RODO FULL STACK EXERCISE

# Requierements

Rodo Full Stack Exercise requieres the following to run: 

* [vue/cli](https://cli.vuejs.org/) 4.0.5+
* [npm](https://www.npmjs.com/)

# Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies:

```
npm install
```

# Run

Use [npm](https://www.npmjs.com/) to run the application: 

```
npm run serve
```

Additional information:

* Application runs in port 8080 by default
* RODO API EXERCISE must be running in localhost:4000 
* By default, api requests are redirected from localhost:8080/api to localhost:4000 to avoid CORS. Reverse proxy configuration is in vue.config.js file
* Rodo Full Stack Exercise requests data to localhost:8080/api by default. Modify "getCarsUrl" param in /src/utils/global-values.js file if other URL is needed 
* In production environments is recommended to add .env files to manage the environment variables. As this is just a coding test, .env files are not included
* In production environment Nginx or similar server would be needed

# Project Architecture

Rodo Full Stack Exercise is divided in the following folders: 
* src/components: Vue.js components
* src/pages: Vue.js pages. In this case there is only one page
* src/plugins: vuetify plugin
* src/utils:
  * APIHandler.js: only GET HTTP request method is implemented
  * global-values.js: global parameters

# Assumtions

* As this is a coding test, production environment deployment is not supported
* Based on information provided, a small data set for makes, models, years and prices are used for the test. In production enviroment, all data set would be included