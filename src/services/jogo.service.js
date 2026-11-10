
import { JogoRepository } from "../repository/jogo.repository.js";

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

    async update(id) {

        return JogoRepository.update(id)
    }

    async delete(id) {

        return JogoRepository.delete(id)
    }
}

export const JogosServices= new JogosServices();