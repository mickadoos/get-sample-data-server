// 4.0 DAO = Data Access Object

let planets; // 4.1 variable with reference to database

export default class PlanetsDAO { // 4.2 class object to access data from database
    static async injectDB(conn) { // 4.2 The first method is "injectDB", how we initially connect to db, its called at the start of the server, we get a reference to our database
        if(planets) {
            return;
        }
        try {
            planets = await conn.db(process.env.GUIDESPLANETS_NS).collection("planets");
        } catch (e) {
            console.error(`Unable to establish a collection handle in planetsDAO: ${e}`);
        }
    }

    static async getPlanets() { // 4.3 second method is to get all the planets from the planets collection in the db
        let cursor;

        try {
            cursor = await planets.find(); // 4.4 find all the restaurants in the db without query
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { planetsList: [], totalNumPlanets: 0 };
        }

        try {
            const planetsList = await cursor.toArray(); // 4.5 make a list with the list of the planets converted to an array
            const totalNumPlanets = await planets.countDocuments(); // 4.6 count and show how many documents have been found

            return { planetsList, totalNumPlanets };
        } catch (e) {
            console.error(`Unable to convert cursor to an array or problem counting documents, ${e}`);
            return { planetsList: [], totalNumPlanets: 0 };
        }
        // const displayCursor = cursor.limit()
    }
}