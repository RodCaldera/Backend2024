import {Router} from 'express';
import {ProductManager} from
 "/ProductManager.js" 
const router = Router();
const bodyParser=require('body-parser')
router.use (express.json())
router.use (express.urlencoded({extended:true}))
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:false}))



router.get('/', (req,res)=>{
    let allProducts=ProductManager.getProducts 
    let limit=req.query.limit
    if(!limit) {return res.send({allProducts})}
    else{
        let limitedProducts=allProducts.slice(0,parseInt(limit,10))
        res.send(limitedProducts)
    }
})

//Revisar si en la entrega anterior se pedían params o algo para esto
router.get('/:pid', (req,res)=>{
    let pid=ProductManager.getProductById
    res.send(pid)
    }
)

router.post('/', (req,res)=>{
    let newProduct={
        title:String,
        description: String, 
        price: Number,
        status: Boolean,
        Stock: Number,
        Category: String,
        thumbnail: Array,
        code: String
        id: // add random id
    }
    let product = request.body
    product.id = Math.floor(Math.random()*100+1)
})

router.put('/', (req,res)=>{})


router.delete('/', (req,res)=>{})
export default router;

