import logo from "../../assets/img/logo.svg"
import { InputSearch } from "../Input"
import { Container, Header } from "./style"


export const HeaderSite = ({products, setProducts, allProducts }) => {
  return (
    <Container>
        <Header>
            <img src={logo} alt="logo" onClick={() => setProducts(allProducts)}/>
            <InputSearch products={products} setProducts={setProducts} allProducts={allProducts}/>
        </Header>
    </Container>
  )
}
