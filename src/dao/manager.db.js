import {promises as fs  } from "fs";

class CollectionManager{
    
    constructor(path){
        this.products = [];
        this.path = path;
    }
    
    
    addProduct = async (name,description,thumbnail,price,stock,code)=>{
        try {
            if(!name|| !description || !thumbnail || ! price || !stock || !code ) {
                console.log("Falta completar campos")
            }else{
                const newProduct = {
                    title:"",
                    description:"",
                    price:1200,
                    thumbnail:"",
                    stock:10,
                    code:"ABC123",
                }

                this.products.push(newProduct)
                console.log(this.products, "Nuevos productos agregados")

        }
        } catch (error) {
            console.log(error)
        }
        
    }

    getProducts = async (limit) => {
        try {
            const data = await fs.promises.readFile(this.path,"utf-8")
            const parseData = JSON.parse(data)
            if(limit){
               return parseData.slice(0,limit)
            }else{
                return parseData
            }   
        } catch (error) {
            console.log(error)
        }
    }



    deleteProduct= async (id)=>{
        try {
            const data = JSON.parse(await fs.promises.readFile(this.path,"utf-8"))
            let delProdct = data.find((data)=> data.code === id)
            if(delProdct){
                let newArray = data.filter((elemento)=> elemento.id !== id)
                await fs.promises.writeFile(this.path,JSON.stringify(newArray,null,1))
                console.log("Confirmacion")
            }else{
                console.log("Denegado")
            }
        } catch (error) {
            console.log(error)
        }
    }


    updateProduct= async (id,price,stock)=>{
        try {
            const data = JSON.parse(await fs.promises.readFile(this.path,"utf-8"))
            let prodUpdate = data.find((data)=>data.code === id)
            const index = data.indexOf(prodUpdate)
            if(index> -1){
                data[index].price = price,
                data[index].stock = stock
            }
            if(prodUpdate){
                await fs.promises.writeFile(this.path,JSON.stringify(data,null,1))
                console.log("Updated")
            }else{
                console.log("No Update")
            }
        } catch (error) {
            console.log(error)
        }
    }

    getProductById= async(code)=>{
        try {
            const data = await fs.promises.readFile(this.path,"utf-8")
            const parseData = JSON.parse(data)
            let filteredProduct = parseData.find((product)=> product.code === code)
            if(filteredProduct){
                console.log(filteredProduct)
                return filteredProduct
            }else{
                return console.log("Producto no encontrado");
            }
        } catch (error) {
            console.log(error)
        }
    }
}


const productManager = new CollectionManager("product.manager.js");
const testeo = async ()=> {
    await CollectionManager.addProduct("producto1","desc","img",200,ABC123)
    await CollectionManager.getProducts()
    await CollectionManager.updateProduct(1,300,7)
    await CollectionManager.getProductById(1)
}    
testeo()
export default CollectionManager;