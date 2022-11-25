import { ButtonPesq, Form, Input } from "./style"

export const InputSearch = ({products, setProducts, allProducts}) => {

    function handleSubmit(event) {
        event.preventDefault();
        
        const valueInput = event.target[0].value.trim()

        const filtro = allProducts.filter((elem) => elem.category.toLowerCase().includes(valueInput.toLowerCase()) || elem.name.toLowerCase().includes(valueInput.toLowerCase()))
        
        if(filtro.lenght === 0 ){
            setProducts(allProducts)

        } else {
            setProducts(filtro)
            
        }
        
    }

    return (
        <Form onSubmit={(event) => handleSubmit(event)}>
            <Input type="search" placeholder="Digitar Pesquisa" />
            <ButtonPesq type="submit">Pesquisar</ButtonPesq>
        </Form>
    )
}