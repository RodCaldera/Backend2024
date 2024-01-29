const fs = require('fs')
class ProductManager{
    static lastID=0
    constructor(){
         this.products=[]
         this.path
    
    addProduct(title, description, price, thumbnail, code,stock) {
        let newProduct={
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: ++ProductManager.lastID,
        }
        console.log (newProduct)
        if (products.includes(this.code)){
            console.log("Error! Code already exists. Please replace code.")
            }
         else{products.push(newProduct)}
    }

    getProducts();{
        if (this.products.length===0){
            console.log("Error: There are no products available.")
        }
        else{
            console.log("List of Products:")
            this.products.forEach(product=>{
                console.log(`ID:${product.id}, Title:${product.title}, Description:${product.description}, Price:${product.price}, Thumbnail:${product.thumbnail}, Code:${product.code}, Stock:${product.stock}`)
            })
        }
    }
    getProductById(id);{
        const product = this.products.some(product=> product.id===id)
        if (product){
            console.log(`Product Found - ID: ${product.id}, Title: ${product.title}, Price: $${product.price.toFixed(2)}, Stock: ${product.stock}`)
        } 
        else{
            console.log(`Error: Product with ID ${id} not found`)
        } 
    }
}
}


let newProduct = new ProductManager();

newProduct.addProduct("Producto Prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)

