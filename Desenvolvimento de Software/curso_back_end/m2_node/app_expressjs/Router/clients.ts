import { Router } from "express"
import clientsController from "../Controller/clientsController";

const router = Router();


router.get('/', clientsController.index)
router.get('/sobrenos', clientsController.sobrenos)
router.get('/tecnologias', clientsController.tecnologia)
router.get('/contato', clientsController.contatos)

export default router
