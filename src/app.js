import express from express
import productsRoutes from './routes/products.router.js'
import cartsRoutes from './routes/carts.router.js'

const app = express()
app.use{express.json}



app.use('api/products', productsRoutes)
app.use('api/carts', cartsRoutes)

//Esto se va a mover?

app.get('/products/', (req, res)=> {
   
const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})