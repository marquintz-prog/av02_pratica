import { JogoServices } from '../service/Jogo.service.js';

class JogoController {
    async getAll(req, res) {
        try {
            return res.json(await JogosServices.getall());
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao procurar Jogo.' });
        }
    }

    async getById(req, res) {
        try {
            const Jogo = await JogoServices.getById(req.params.id);
            if (!Jogo) return res.status(404).json({ erro: 'Jogo não encontrado.' });
            return res.json(Jogo);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao buscar Jogo.' });
        }
    }

    async create(req, res) {
        try {
            return res.status(201).json(await JogosServices.create(req.body));
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao inserir o Jogo.' });
        }
    }

    async update(req, res) {
        try {
            const Jogo = await JogoServices.update(req.params.id, req.body);
            if (!Jogo) return res.status(404).json({ erro: 'Jogo não encontrado.' });
            return res.json(Jogo);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao atualizar o Jogo.' });
        }
    }

    async delete(req, res) {
        try {
            const Jogo = await JogoServices.delete(req.params.id);
            if (!Jogo) return res.status(404).json({ erro: 'Jogo não encontrado.' });
            return res.json(Jogo);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao excluir Jogo.' });
        }
    }

}

export const JogoController = new JogoController();