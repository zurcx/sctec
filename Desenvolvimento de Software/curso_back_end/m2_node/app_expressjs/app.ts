import express from "express";
import clientsRouter from "./Router/clients"
import path from "path";

const app = express()
app.use(clientsRouter)
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "Views")); // observe: 'Views' ou 'views' dependendo da sua pasta

// Rotas('views', './Views')


app.listen(3000, () => {
  console.log("Servidor Criado!")
})
