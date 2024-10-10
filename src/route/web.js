import express from "express";
import homecontroller from "../controllers/homeControlle";
import homeControlle from "../controllers/homeControlle";
let router = express.Router();

let initWebRoutes = (app) =>{
    router.get('/', homeControlle.getHomePage);
    router.get('/about', homeControlle.getAboutPage);
    return app.use("/", router)
}

module.exports = initWebRoutes;