import express from "express";
import Modell from "./model/user.js";
import conect from "./Dbconfig/db.js";
import router from "./Routers/routes.js";
import bodyParser from "body-parser";
import cors from 'cors';
import path from 'path'



const app = express();
app.use(cors());
app.use("/uploads", express.static('./Routers/uploads'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", router);
app.listen(4000, () => {
    console.log("servar Starded");

})
