
import { JogoRepository } from "../repositories/jogo.repository.js";

class JogosServices {
    async getall() {
        return JogoRepository.getAll()
    }

    async getById(id) {
        return JogoRepository.getById(id)
    }

    async create(dados) {
        return JogoRepository.create(dados)
    }

    async update(id, dados) {

        return JogoRepository.update(id, dados)
    }

    async delete(id) {

        return JogoRepository.delete(id)
    }
}

export const jogosServices= new JogosServices();