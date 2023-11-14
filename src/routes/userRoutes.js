import { Router } from 'express'
import userController from '../controllers/UserController'
import loginRequired from '../middlewares/loginRequired'

const router = new Router()

// Não deveria existir
// router.get('/', userController.index) // listar usuários
// router.get('/:id', userController.show) // listar usuário

router.post('/', userController.store)
router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

export default router

/*
index -> lista todos os usuarios     -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario           -> DELETE
show -> mostra um usuario            -> GET
update -> atualiza um usuario        -> PATCH(somente o valor) ou PUT(todo o objeto)
*/
