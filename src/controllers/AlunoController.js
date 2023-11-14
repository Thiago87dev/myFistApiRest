import Aluno from '../models/Aluno'

class AlunoController {
  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body)
      return res.json(aluno)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  async index(req, res) {
    try {
      const alunos = await Aluno.findAll()
      return res.json(alunos)
    } catch (e) {
      return res.json(null)
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        })
      }
      const aluno = await Aluno.findByPk(id)

      if (!aluno) {
        return res.status(400).json({
          errors: ['student does not exist'],
        })
      }

      return res.json(aluno)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        })
      }
      const aluno = await Aluno.findByPk(id)

      if (!aluno) {
        return res.status(400).json({
          errors: ['student does not exist'],
        })
      }

      const alunoAtualizado = await aluno.update(req.body)

      return res.json(alunoAtualizado)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        })
      }
      const aluno = await Aluno.findByPk(id)

      if (!aluno) {
        return res.status(400).json({
          errors: ['student does not exist'],
        })
      }

      await aluno.destroy()
      return res.json('Aluno apagado com sucesso')
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }
}

export default new AlunoController()
