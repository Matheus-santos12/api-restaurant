import express from "express";
import { routes } from "./routes";

const PORT = 3333;
const app = express();
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));
