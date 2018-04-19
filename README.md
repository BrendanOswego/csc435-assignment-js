## Extra Project

I finished my assignments early and wanted to create a JavaScript version of the web service I made for this semester.

I am used to making NodeJS application so you need NodeJS to run this application.
To install NodeJS visit [here](https://nodejs.org/en/)

I use the [body-parser](https://www.npmjs.com/package/body-parser) module to handle the content types for requests sent to the express server.

I use [pg](https://www.npmjs.com/package/pg) to handle connecting to my postgresql database which is run locally on my machine.

## Important
If you want to try and run this application you must have postgresql, and need to edit the `Client` instance configuration in the `server.js` file with credentials for a user and DB that you want to use.