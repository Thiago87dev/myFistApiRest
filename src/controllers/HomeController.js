import Aluno from '../models/Aluno'

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Oliveira',
      email: 'mariaOliv@gmail.com',
      idade: 22,
      peso: 60,
      altura: 1.68,
    })
    res.json(novoAluno)
  }
}

export default new HomeController()
