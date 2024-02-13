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
    //product.id = Math.floor(Math.random()*100+1)
    let newProduct={
        title: req.body.title,
        description: req.body.description, 
        price: req.body.price,
        status: req.body.status,
        stock: req.body.stock,
        category: req.body.category,
        thumbnail: req.body.thumbnail,
        code: req.body.code
        id: // add random id
    }

    products.push(newProduct)
    res.json(products)
    
    
})

router.put('/', (req,res)=>{})


router.delete('/', (req,res)=>{})
export default router;

