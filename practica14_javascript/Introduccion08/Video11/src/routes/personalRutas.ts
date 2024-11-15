import express, { Request, Response } from 'express';
import * as personalServices from '../services/personalServices';
//Con esto activamos las rutas
const router = express.Router();

//http://localhost:3001/api/personal
router.get('/', async (_req: Request, res: Response) => {
    let personal = await personalServices.obtenerPersonal();
    res.send(personal);
})

export default router;