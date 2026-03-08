import { Request, Response } from "express"
import { Iclients } from "../models/clients"
import clientsModel from "../models/clientsModel"
import { redirect } from "next/navigation";
import { error } from "console";
import { Error, where, Op } from "sequelize";

async function index(req: Request, res: Response, next: any) {
  //res.render('index')
  const clients = await clientsModel.findAll();
  res.json(clients)

}

async function show(req: Request, res: Response, next: any) {

  const id = Number(req.params.id)

  if (!id) {
    return res.status(400).json({ error: "ID invalido!" })
  }

  const client = await clientsModel.findByPk(id)

  if (!client) {
    return res.status(404).json({ error: "Cliente nao encontrado!" })
  }

  res.json(client)
}

async function edit(req: Request, res: Response, next: any) {

  const id = Number(req.params.id)

  if (!id) {
    return res.status(400).json({ error: "ID invalido!" })
  }

  const client = await clientsModel.findByPk(id)

  if (!client) {
    return res.status(404).json({ error: "Cliente nao encontrado!" })
  }

  res.render("edit", { client: client })
}

async function update(req: Request, res: Response, next: any) {
  await clientsModel.update(
    req.body as Iclients, {
    where: {
      id: req.params.id
    }
  })
  res.redirect('/')
}

async function del(req: Request, res: Response, next: any) {
  await clientsModel.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  )
  res.redirect('/')
}

function create(req: Request, res: Response, next: any) {
  res.render('create')
}

async function store(req: Request, res: Response, next: any) {
  let client = req.body as Iclients
  await clientsModel.create({ ...client })
  console.log(req.body)
  res.redirect('/')
}

function tecnologia(req: Request, res: Response, next: any) {
  res.render('tecnologia')
}

function contatos(req: Request, res: Response, next: any) {
  res.render('contato')
}

async function search(req: Request, res: Response, next: any) {
  const { nome, email } = req.query

  const where: any = {}

  if (nome) {
    where.nome = {
      [Op.like]: '%${nome}%'
    }
  }

  if (email) {
    where.email = {
      [Op.like]: '%${email}%'
    }
  }
}



export default { index, create, tecnologia, contatos, store, show, edit, update, del, search }
