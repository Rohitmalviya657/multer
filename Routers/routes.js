import express from 'express';
import { create, deletee, get, update } from '../controller/controller.js';
import multer from 'multer';
import storage from '../controller/storage.js';
const upload = multer({ storage: storage });
const router = express.Router();
router.post("/create", upload.single("image"), create);
router.get("/get", get);
router.post("/delete", deletee);
router.put("/update", update)
export default router;