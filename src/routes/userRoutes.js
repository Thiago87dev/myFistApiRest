import { Router } from 'express'
import userController from '../controllers/UserController'

const router = new Router()

router.post('/', userController.store)

export default router

/*
index -> lista todos os usuarios     -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario           -> DELETE
show -> mostra um usuario            -> GET
update -> atualiza um usuario        -> PATCH(somente o valor) ou PUT(todo o objeto)
*/
