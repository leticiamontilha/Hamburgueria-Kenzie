import { TotalCart } from "../TotalCart"
import { ValorTotal } from "../TotalCart/style"
import { HeaderCart, BodyCart, LiCard, SectionCart } from "./style"

export const Cart = ({ cartItens, setCartItens}) => {

    const RemoveCard = (item) => {
     
         let filtro = cartItens.filter(elem => elem.id !== item)

            setCartItens(filtro)
        
    }

    return (
        <SectionCart>
                <HeaderCart>
                     <h5>Carrinho de compras</h5>
                </HeaderCart>
                <BodyCart>
                    <ul>
                    { cartItens.length === 0 ? (
                        <div>
                            <h5>Sua sacola está vazia</h5>
                            <p>Adicione itens</p>
                        </div>
                    ) : (
                        <>
                            {
                                cartItens.map(el => {
                                    return (
                                        <LiCard key={el.id}>
                                            <img src={el.img}alt="" />
                                            <div>
                                                <h6>{el.name}</h6>
                                                <p>{el.category}</p>
                                            </div>
                                            <button onClick={() => RemoveCard(el.id)} id={el.id}>Remover</button>
                                        </LiCard>
                                    )
                                })
                            }
                        </>
                    )}
                    </ul>
                </BodyCart>
                { cartItens.length !== 0 ? (<ValorTotal> <TotalCart cartItens={cartItens}/><button onClick={() => setCartItens([])}>Remover Todos</button> </ValorTotal>):(<></>)}
        </SectionCart>
    )
}