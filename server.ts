import express from "express";

const app = express();
const PORT = 3000;

// Rota de integridade do sistema (Health Check)
app.get("/api/health", (req, res) => {
    res.json({status: "ok", message: "Servidor do Gestor de Tarefas ativo!"});
});

// Rota de versão da aplicação
app.get("/api/version", (req, res) => {
    res.json({appName: "Gerenciador de Tarefas Multi-Usuário", version: "1.0.0"});
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});