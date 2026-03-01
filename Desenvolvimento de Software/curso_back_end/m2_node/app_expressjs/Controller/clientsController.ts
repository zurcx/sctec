import { Request, Response } from "express"

function index(req: Request, res: Response, next: any) {
  res.render('index')
}

function sobrenos(req: Request, res: Response, next: any) {
  res.render('sobrenos')
}

function tecnologia(req: Request, res: Response, next: any) {
  res.render('tecnologia')
}

function contatos(req: Request, res: Response, next: any) {
  res.render('contato')

}


export default { index, sobrenos, tecnologia, contatos }
