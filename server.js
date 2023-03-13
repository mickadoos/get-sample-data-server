// 0.0 installed: express cors mongodb dotenv. installed nodemon "npm i -g nodemon" (latest version)
// 0.1 using ES6 modifying the "package.json" file --> "type": "module" to use "import" instead of "require" to import the modules and tools
import express from "express" // 1.0 import express and cors to use in the app
import cors from "cors"
import planets from "./api/planets.route.js" // 3.4 import the routes from the file

const app = express(); // 1.1 creating the app that will use express

app.use(cors()); // 1.2 cors: It helps websites decide which information they want to share with other websites. CORS helps these websites communicate with each other and decide which information can be shared
app.use(express.json()); // 1.2 parse the json files

// app.use("/api/v1/planets", (req, res) => res.send("Welcome to Planet Guides")); // 1.4 set the main route
app.use("/api/v1/planets", planets); // 3.5 use the main route and pass the routes file to access all the routes defined in the file
app.use("*", (req, res) => res.status(404).json({ error: "not found" })); // 1.5 set the "*" that will send and error not found if any user tries to acces to a non-existing route you defined

export default app; // 1.6 export the app to use it on another files