const express = require('express')
const axios = require('axios')

const router = express.Router()

router.get('/headline', async (req, res) => {
  try {
    const {
      data: { articles },
    } = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=id&apiKey=ead2f99074434828bee8a8b8c41df290',
      {
        headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
      }
    )

    return res.json(articles)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.get('/news/:keyword', async (req, res) => {
  try {
    const {
      data: { articles },
    } = await axios.get(
      `https://newsapi.org/v2/everything?q=${req.params.keyword}&apiKey=ead2f99074434828bee8a8b8c41df290`,
      {
        headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
      }
    )

    return res.json(articles)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
