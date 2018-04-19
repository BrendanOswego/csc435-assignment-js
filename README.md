# Extra Project


## Introduction
I finished my assignments early and wanted to create a JavaScript version of the web service I made for this semester but integrate personal libraries.

## List of previous assignments on github

1. [Assignment 1](https://github.com/BrendanOswego/csc435-assignment-1) (Tomcat and Web Servlets)
2. [Assignment 2](https://github.com/BrendanOswego/csc435-assignment-2) (Tomcat and Web Servlets with SQL Database)
3. [Assignment 3](https://github.com/BrendanOswego/csc435-assignment-3)  (Tomcat and Web Servlets with persistent SQL Database)
4. [Assignment 4](https://github.com/BrendanOswego/csc435-assignment-4) (Spark Framework)
5. [Assignment 5](https://github.com/BrendanOswego/csc435-assignment-5) (Groovy and Grails using GORM)
6. [Assignment 6](https://github.com/BrendanOswego/csc435-assignment-6) (Dropwizard)

## Design choices
I am used to making NodeJS application so you need NodeJS to run this application.
To install NodeJS visit [here](https://nodejs.org/en/)

I use the [body-parser](https://www.npmjs.com/package/body-parser) module to handle the content types for requests sent to the express server.

I use [pg](https://www.npmjs.com/package/pg) to handle connecting to my postgresql database which is run locally on my machine.

## Important
1. This is nowhere near something I would do for a production level project, I most likely implement OAuth but nothing more than that because out of the scope of this course. 
2. If you want to try and run this application you must have postgresql, and need to edit the `Client` instance configuration in the `server.js` file with credentials for a user and DB that you want to postgres knows about.