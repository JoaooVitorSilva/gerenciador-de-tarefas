import express from "express";
import { title } from "node:process";

const app = express();
const PORT = 3000;

// Middleware para ler o corpo das requisições em formato JSON
app.use(express.json());

// Banco de dados provisório em RAM
let bancoDeDadosProvisorio = [
    { id: 1, title: "Estudar arquitetura REST", status: "pendente" }
];

// Rota de integridade do sistema (Health Check)
app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Servidor do Gestor de Tarefas ativo!" });
});

// Rota de versão da aplicação
app.get("/api/version", (req, res) => {
    res.json({ appName: "Gerenciador de Tarefas Multi-Usuário", version: "1.0.0" });
});

app.get("/api/tasks", (req, res) => {
    res.json(bancoDeDadosProvisorio);
});

app.post("/api/tasks", (req, res) => {
    const { title } = req.body;
    const novaTarefa = {
        id: Date.now(),
        title,
        status: "pendente"
    };
    bancoDeDadosProvisorio.push(novaTarefa)
    res.status(201).json(novaTarefa)
});

app.delete("/api/tasks/:id", (req, res) => {
    const idParaDeletar = parseInt(req.params.id);
    const tarefaExiste = bancoDeDadosProvisorio.some(t => t.id === idParaDeletar);
    if (!tarefaExiste) {
        return res.status(404).json({ message: "Tarefa não encontrada!" });
    }
    bancoDeDadosProvisorio = bancoDeDadosProvisorio.filter(t => t.id !== idParaDeletar);
    res.json({ message: "Tarefa removida com sucesso!" });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});