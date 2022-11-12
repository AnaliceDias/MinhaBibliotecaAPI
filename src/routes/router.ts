import { Router } from "express";
import { estanteRouter } from "./estante";


const router = Router();

router.use(estanteRouter);

export default router;