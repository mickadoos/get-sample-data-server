import PlanetsDAO from "../dao/planetsDAO.js"; // 6.0 create the controller file to define the methods that will do the api calls to the db
                                               // 6.0 import DAO file

export default class PlanetsController {
    static async apiGetPlanets(req, res, next) {
        const { planetsList, totalNumPlanets } = await PlanetsDAO.getPlanets(); // 6.1 this method will use a promise to call the getPlanets() method and return a list of planets 
                                                                                // that will be stored in the variables planetsList 
        let response = {
            planets: planetsList,
            total_results: totalNumPlanets
        };
        res.json(response); // 6.2 will send a json reponse with info (planets and number of planets found) to the client
    }
}