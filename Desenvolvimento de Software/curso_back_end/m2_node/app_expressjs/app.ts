import express from "express";
import clientsRouter from "./Router/clients"
import path from "path";
import db from "./db"
import { useRouter } from "next/router";

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(clientsRouter)
app.use(useRouter)
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "Views")); // observe: 'Views' ou 'views' dependendo da sua pasta

// Rotas('views', './Views')

db.sync().then(() => {
  console.log("Conectado com o Banco: " + process.env.DB_NAME)
}).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Servidor Criado!")
  })

})

