# CustomerSupportApp

This repository contains files for the front and back end of this simple web application. This CustomerSupportApp serves as a way for another future project to interact with a cloud-based MySQL database to access support tickets from users for different programs or platforms developed and deployed. Support tickets can be either Bug or new-feature-related.

## Frontend - ReactJS

To develop the front end, ReactJS was used which can be found in the `customer-support-app` directory with all the components and assets needed to develop it.
Front end components were developed with the help of React-Bootstrap which provides pre-existing Component support for React such as Form validation and logic control for empty states and simple NavBar headers.

### Running the Frontend

In order to run the front end server, you need to open a terminal in the directory of the frontend server and run `npm start` for development mode.

#### Dependencies

- `React`(Standard Dependencies)
- `React-Bootstrap`
- `Bootstrap`

## Backend - ExpressJS

To develop the back end, ExpressJS was utilized to create end points for the front end to interact with the back end without giving access directly to the database to prevent any security issues. The back end files can be found in the `server` directory with the database schema, functions to query the database, and the express functions that create HTTP requests to the respective paths on the local server port 3005.

### Running the Backend

In order to run the back end server, you need to open a terminal in the directory of the backend server and run `npm run dev` for development mode.
This includes nodemon which updates the server when any changes have been made to the code base.

Some additional notes: You NEED a `.env` file in order to use this on your home machine for dev mode. You can set it up using the enivironment variable names in your own `.env` file which should function as necessary but for security reasons there is no database configuration on this public repository.

#### Dependencies

- `Nodemon`
- `ExpressJS`
- `MySQL2`
- `dotenv`
- `cors`

# Future Work

In the future I plan on adding more to the database function in order to create queries that allow another server to interact and make GET requests in order to hook up another front end application to view all the tickets. Additionally, documentation will be provided in part with different status code responses as to not crash the server.
