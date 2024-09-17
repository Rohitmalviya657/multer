import mongoose from "mongoose";
import Modell from "../model/user.js";
const conect = mongoose.connect("mongodb://localhost:27017/imagee", {

}).then(() => {
    console.log("database connected");

}).catch((e) => {
    console.log("something rong");

})
export default conect;