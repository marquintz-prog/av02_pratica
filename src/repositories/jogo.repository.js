
import { knex } from "../database/knex.js";

class jogoRepository {

    async getAll() {
        return knex("Jogos").select("*");
    }

    async getById(id) {
        return knex("Jogos").where({ id }).first();
    }

    async create(dados) {
        const [jogo] = await knex("Jogos")
            .insert(dados)
            .returning("*");

        return jogo;
    }

    async update(id, dados) {
        const [jogo] = await knex("Jogos")
            .where({ id })
            .update(dados)
            .returning("*");

        return jogo;
    }

    async delete(id) {
        const [jogo] = await knex("Jogos")
            .where({ id })
            .delete()
            .returning("*");

        return jogo;
    }
}

export const JogoRepository = new jogoRepository();
