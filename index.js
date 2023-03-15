// 2.0 connect to the database and start the server

import app from "./server.js" // 2.1 to use the app functionalities (express, cors)
import mongodb from "mongodb"
import dotenv from "dotenv" // 2.2 to acces the env variables
import PlanetsDAO from "./dao/planetsDAO.js"; // 5.0 import planetsDAO file to access the data
dotenv.config(); // 2.2 to load the env variables

const MongoClient = mongodb.MongoClient; // 2.3 access the client

const port = process.env.PORT || 8000; // 2.4 create port variables from "env" file

MongoClient.connect( // 2.5 connect to MongoDBCLient 
    process.env.GUIDESPLANETS_DB_URI,
    // {
    //     maxPoolSize: 50, // 2.6 only 50 people connect at once
    //     wtimeoutMS: 2500, // 2.7 after 2500 ms the request will timeout
    //     useNewUrlParser: true
    // }
)
.catch(err => {
    console.log(err.stack); // 2.8 log the error and exit the process
    process.exit(1);
})
.then(async client => { // 2.9 after we connected the database and check for errors then we start our web server after connecting to DB by listening to the port we assigned
    await PlanetsDAO.injectDB(client); // 5.1 get reference from the planets collection
    app.listen(port, () => {
        console.log(`You are listening on port ${port}`);
    })
})
