import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String

    },
    image: {
        type: String

    },
    email: {
        type: String
    }

}, {
    timestamps: true
});
const Modell = mongoose.model("userr", schema);
export default Modell;