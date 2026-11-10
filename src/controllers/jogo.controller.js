import { jogosServices } from '../services/jogo.service.js';

class JogoController {
    async getAll(req, res) {
        try {
            return res.json(await jogosServices.getall());
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao procurar Jogo.' });
        }
    }

    async getById(req, res) {
        try {
            const Jogos = await jogosServices.getById(req.params.id);
            if (!Jogos) return res.status(404).json({ erro: 'Jogo não encontrado.' });
            return res.json(Jogos);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao buscar Jogo.' });
        }
    }

    async create(req, res) {
        try {
            return res.status(201).json(await jogosServices.create(req.body));
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao inserir o Jogo.' });
        }
    }

    async update(req, res) {
        try {
            const Jogos = await jogosServices.update(req.params.id, req.body);
            if (!Jogos) return res.status(404).json({ erro: 'Jogo não encontrado.' });
            return res.json(Jogos);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao atualizar o Jogo.' });
        }
    }

    async delete(req, res) {
        try {
            const Jogos = await jogosServices.delete(req.params.id);
            if (!Jogos) return res.status(404).json({ erro: 'Jogo não encontrado.' });
            return res.json(Jogos);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao excluir Jogo.' });
        }
    }

}

export const jogoController = new JogoController();