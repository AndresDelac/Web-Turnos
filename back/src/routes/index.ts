import { Router, Request, Response } from "express";
const router: Router = Router()
import routeUser from "./user";
import appointments from "./appointment";
import serviceRoute from "./service";


router.get("/", (req: Request, res:Response) => {
    res.status(200).send("wenass")
})

router.use("/users", routeUser)
router.use("/appointments", appointments)
router.use("/services", serviceRoute)

export default router;





