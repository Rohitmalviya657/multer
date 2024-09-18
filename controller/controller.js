import Modell from "../model/user.js";
import bcrypt from 'bcryptjs';
import Joi from 'joi';
const studentValidationSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string().uri().optional(),
});
export const create = async (req, res) => {
    const { error } = studentValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {

        let { name, password, email } = req.body;
        let image = req.file;
        console.log(image);

        const hass = await bcrypt.hash(password, 10);
        const user = await Modell.create({ name, password: hass, image: image.filename, email })
        if (user) {
            res.status(200).json({ msg: "user saved", user });

        }
        else {
            res.status(400).json({ err: "something rong" })
        }


    } catch (error) {
        console.log("error");


    }
}
export const get = async (req, res) => {
    try {
        const user = await Modell.find();
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const deletee = async (req, res) => {
    try {
        let { email } = req.body;
        const user = await Modell.findOneAndDelete({ email });
        console.log(email);

        if (user) {
            res.status(200).json({ msag: "update success", user })




        }
        else {
            res.status(500).json({ err: "error" })
        }

    }

    catch (e) {
        res.status(500).json({ err: " invalid error" })

    }
};
export const update = async (req, res) => {
    try {
        let { email, emaill, name } = req.body;
        // const upp = await Modell.findOne({ email });
        // if (upp) {
        const upda = await Modell.updateMany({ email }, { name })
        if (upda) {
            res.status(200).json({ msg: "user updated", upda })

        }
        else {
            res.status(400).json({ err: "error" })
        }


        // }


    } catch (error) {
        res.status(501).json({ err: "err" })

    }
}
