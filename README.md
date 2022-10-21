# mfe-project

micro front end with Nx and Webpack module federation

# Env requirements:

Node >= 16.18.0

# Running instructions

1. git clone
2. cd to "mfe-project" folder, and run: npm i
3. run the main app from "mfe-project" folder with "npm start" and browse to http://localhost:4200
   other apps are on ports: 4201-4
4. to run a spesific app, cd to "mfe-project" and: nx run [appName]:serve ex: nx run grid-app:serve
