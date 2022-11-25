export const TotalCart = ({cartItens}) => {

    let somaValores = cartItens.reduce ((valorAnterior, valorAtual) => {
        
        return valorAnterior + (valorAtual.price)
    }, 0)
    return(
        <div>
            <p>Total</p>
            <span>R$ {Number(somaValores).toFixed(2)}</span>
        </div>
    )
}