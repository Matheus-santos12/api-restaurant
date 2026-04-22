import express from "express";

const PORT = 3333;
const app = express();
app.use(express.json());

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));
