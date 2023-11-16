import multer from 'multer'
import multerConfig from '../config/multerConfig'

import Foto from '../models/Foto'
import Aluno from '../models/Aluno'

const upload = multer(multerConfig).single('foto')

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        })
      }

      try {
        const { originalname, filename } = req.file
        const { aluno_id } = req.body
        const aluno = await Aluno.findByPk(aluno_id)
        const foto = await Foto.create({ originalname, filename, aluno_id })
        return res.json(`Imagem: ${foto.filename} enviado para ${aluno.nome}`)
        // return res.json(foto)
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        })
      }
    })
  }
}

export default new FotoController()
