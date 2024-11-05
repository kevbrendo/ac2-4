const alunoModel = require('../models/aluno');

// Lógica para obter todos os usuários
exports.obterTodos = async (req, res) => {
    try {
        const alunos = await alunoModel.find();
        res.status(200).json(alunos);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

exports.obterPorRa = async (req, res) => {
    try {
        const alunos = await alunoModel.findOne({ ra: req.params.ra });
        res.status(200).json(alunos);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};