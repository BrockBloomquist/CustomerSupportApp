# CustomerSupportApp

This repository contains files for the front and back end of this simple web application. This CustomerSupportApp serves as a way for another future project to interact with a cloud-based MySQL database to access support tickets from users for different programs or platforms developed and deployed. Support tickets can be either Bug or new-feature-related.

### Frontend - ReactJS

To develop the front end, ReactJS was used which can be found in the `customer-support-app` directory with all the components and assets needed to develop it.
Front end components were developed with the help of React-Bootstrap which provides pre-existing Component support for React such as Form validation and logic control for empty states and simple NavBar headers.

### Backend - ExpressJS

To develop the back end, ExpressJS was utilized to create end points for the front end to interact with the back end without giving access directly to the database to prevent any security issues. The back end files can be found in the `server` directory with the database schema, functions to query the database, and the express functions that create HTTP requests to the respective paths on the local server port 3005.
