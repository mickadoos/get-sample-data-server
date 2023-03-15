// 3.0 create this file to define all routes

import express from "express"
import PlanetsCtrl from "./planets.controller.js" // 7.0 import the PlanetsCtrl to get the api requests and use them in the routes

const router = express.Router(); // 3.1 Router() functio to create a new router object to handle requests

// router.route("/").get((req, res) => res.send("This is the main route")); // 3.2 demonstration route
// router.route("/hello").get((req, res) => res.send("Hello Earth")); // 3.2 demonstration route

router.route("/").get(PlanetsCtrl.apiGetPlanets); // 7.1 on the main route, will return the api request of all the planets from the db

export default router; // 3.3 export it 