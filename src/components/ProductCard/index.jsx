import { useEffect } from "react"
import { api } from "../../services/api"
import { ProductList, CardProduct } from "./style"

export const ProductsList = ({ products, setProducts, handleClick, setAllProducts}) => {

    useEffect(() => {
        async function getProducts () {
            try {
             const response = await api.get('products')
            
             setAllProducts(response.data)
             
             setProducts(response.data)
            
            } catch (error) {
                console.log(error)
            }
        }
            getProducts()
    }, [])
     
    return (
        <ProductList>
           {
            products.map((item) => {
                return(
                    <CardProduct key={item.name}>
                        <span>
                            <img src={item.img} alt="" />
                        </span>
                        <div>
                            <h4>{item.name}</h4>
                            <p>{item.category}</p>
                            <p>R$ {Number(item.price).toFixed(2).replace(".", ",")}</p>
                            <button onClick={handleClick} id={item.id}>Adicionar</button>
                        </div>
                    </CardProduct>
                )
            })
           }
        </ProductList>
    )
}