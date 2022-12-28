import "reflect-metadata"
import "express-async-errors"
import cors from 'cors'
import express from 'express'
import productRoutes from "./routes/products.routes"

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/products', productRoutes)

app.listen(3000, () => {
    console.log("Servidor rodando")
})

export default app