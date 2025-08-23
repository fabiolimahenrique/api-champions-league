import express, {json} from 'express'

const app = express()

app.use(json())

app.get('/', (req, res) => {
  res.status(200).json({
    jogado: "Lima",
    numero: 10
  })
})

const PORTA = process.env.PORT;

app.listen(PORTA, () => {
   console.log(`Servidor escutando http:localhost:${PORTA}`)
})