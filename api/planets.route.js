// 3.0 create this file to define all routes

import express from "express"

const router = express.Router(); // 3.1 Router() functio to create a new router object to handle requests

router.route("/").get((req, res) => res.send("This is the main route")); // 3.2 demonstration route
router.route("/hello").get((req, res) => res.send("Hello Earth")); // 3.2 demonstration route

export default router; // 3.3 export it 