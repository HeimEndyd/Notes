const { Router } = require('express')
const config = require('config')
const shortid = require('shortid')
const Note = require('../models/Note')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/generate', auth, async (req, res) => {
  try {
    const baseUrl = config.get('baseUrl')
    const { text } = req.body

    const code = shortid.generate()

    const existing = await Note.findOne({ text })

    if (existing) {
      return res.json({ note: existing })
    }

    const note = new Note({
      text,
      code,
      owner: req.user.userId,
    })

    await note.save()

    res.status(201).json({ note })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/', auth, async (req, res) => {
  try {
    const notes = await Note.find({ owner: req.user.userId })
    res.json(notes)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/:id', auth, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)
    res.json(note)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router
