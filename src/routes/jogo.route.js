import { Router } from 'express';
import { jogoController } from '../controllers/jogo.controller.js';

export const jogosRouter = Router();

jogosRouter.get('/', jogoController.getAll);
jogosRouter.get('/:id', jogoController.getById);
jogosRouter.post('/', jogoController.create);
jogosRouter.put('/:id', jogoController.update);
jogosRouter.delete('/:id', jogoController.delete);