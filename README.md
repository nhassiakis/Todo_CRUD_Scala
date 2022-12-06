### Objective
Create a to-do list application using Scala.
### How to start the application
#### Backend api
To run the backend api open up a terminal and locate \classic-todo-internal-exfrey\pagero-todo-app 
When you are in folder pagero-todo-app run in cmd or other terminal 
"sbt run"
#### Fronted web page
To run the web page open up a terminal and locate \classic-todo-internal-exfrey\web\todo-web
When you are in folder todo-web run in cmd or other terminal 
"npm install" If this is the first time running. After use 
"npm start" to start the web service.
### Run api and API routes available
open file location for pagero-todo-app in any console and write "sbt run", you can now access the application with the link localhost:9000/

Routes: 
GET /api/todos   
GET /api/todos/:id   
POST /api/todos/add  
PUT /api/todos/update/:id   
DELETE /api/todos/delete/:id

full link: http://localhost:9000/....
    
---

### Brief

To better organize your daily objectives, you are going to create a to-do list application. To make it slightly more interesting, you will add functionality to track
your progress over time! This will help you answer questions such as: How many tasks have you finished over a period of time? What is your most productive day of the week? How many minutes/hours/days do you need to complete a task on average?

### Summary of web application

    -   Language: **Scala**
    -   Framework: **Play framework**
	-   Frontend Framework: **React**
### Note
Frontend: using moment.js for date formatting, tailwindcss for styling and reactrouter for browserRouter.
Backend: 
using package com.google.inject Google Guice (pronounced "juice") is an ultra-lightweight dependency injection framework. https://google.github.io/guice/api-docs/latest/javadoc/index.html?com/google/inject/Module.html
### Database

Using Hsqldb, setting up with Slick in application.conf using Akka/Play
### Frontend

Using ReactJs as frontend framework with axios for web hooks and tailwindscss for easier design.
