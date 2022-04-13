const products= [
    {
        id:1 , 
        name:"Samsung Galaxy S22 Ultra", 
        price: "230.000", 
        category:"celular",
        img:"https://img.global.news.samsung.com/ar/wp-content/uploads/2022/02/Samsung_Galaxy-S22-Ultra_Green.jpg",
        stock:15,
        description:"Descripcion de Samsung Galaxy S22 Ultra",
    },
    {
        id:2,
        name:"Xiaomi Pad Keyboard",
        price: "24.000",
        category:"tablet",
        img:"https://www.powerplanetonline.com/cdnassets/funda_smart_case_con_teclado_xiaomi_pad_5_negro_01_l.jpg",
        stock:50,
        description:"Descripcion de Xiaomi Pad Keyboard",
    },
    {
        id:3,
        name:"Notebook HP 240",
        price:"50.000",
        category:"notebook",
        img:"https://www.computershopping.com.ar/Images/Productos/Grandes/HP-240-G7_Foto0g.jpg",
        stock:"25",
        description:"Descripcion de Notebook HP 240",
    }
]
const categories = [
    {id: 'celular', description: 'Celular'},
    {id: 'tablet', description: 'Tablet'},
    {id: 'notebook', description: 'Notebook'}
]

export const getCategories = () =>{
    return new Promise(resolve => {
        setTimeout( () =>{
            resolve(categories)
        }, 500)
    })
}

export const getProducts = (categoryId) =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(categoryId ? products.filter(prod => prod.category === categoryId):products)
        }, 500)
    })
}

export const getProductsById = (id) =>{
    return new Promise (resolve=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 500)
    })
}