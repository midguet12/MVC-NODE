import { Router } from "express";
import { getTestObject } from "../Controller/TestController.js";
const router = Router();

router.route("/test")
    .get(getTestObject)

export default router;
