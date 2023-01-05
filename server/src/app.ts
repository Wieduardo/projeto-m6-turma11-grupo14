import "reflect-metadata"
import "express-async-errors"
import cors from 'cors'
import express from 'express'
import productRoutes from "./routes/products.routes"
import userRoutes from "./routes/users.routes"

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.listen(3000, () => {
    console.log("Servidor rodando")
})

export default app