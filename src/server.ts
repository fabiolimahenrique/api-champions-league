import createApp from "./app";

const app = createApp()

const PORTA = process.env.PORT;

app.listen(PORTA, () => {
   console.log(`Servidor escutando http:localhost:${PORTA}`)
})