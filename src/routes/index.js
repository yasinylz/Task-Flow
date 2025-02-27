import express from "express"
const router=express.Router();
import user from "./userRoutes.js"
import task from "./taskRoutes.js"


router.use("/user",user)
router.use("/task",task)

export default router;




