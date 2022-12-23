const express = require('express')

const newsRouter = require('./routes/newsRoute')

express.json()

const app = express()

app.use('/api/', newsRouter)

const PORT = 5000
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
