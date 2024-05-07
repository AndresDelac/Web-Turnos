import { Router, Request, Response } from "express";
const router: Router = Router()
import routeUser from "./user";
import appointments from "./appointment";



router.get("/", (req: Request, res:Response) => {
    res.status(200).send("wenass")
})

router.use("/users", routeUser)
router.use("/appointments", appointments)


export default router;





