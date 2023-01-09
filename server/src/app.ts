import "reflect-metadata"
import "express-async-errors"
import cors from 'cors'
import express from 'express'
import productRoutes from "./routes/products.routes"
import userRoutes from "./routes/users.routes"
import commentRoutes from "./routes/comments.routes"

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/comments', commentRoutes)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000 | Server running on port 3000")
})

export default app