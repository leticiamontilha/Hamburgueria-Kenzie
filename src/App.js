import { useState } from 'react';
import { Cart } from './components/Cart';
import { HeaderSite } from './components/Header';
import { ProductsList } from './components/ProductCard';
import { MainSite } from './styled';
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { SiteFooter } from "./components/Footer"

function App() {

  const [allProducts, setAllProducts] = useState([])
  const [products, setProducts] = useState([])
  const [cartItens, setCartItens] = useState([])

  const handleClick  = (event) => {
    const result = Number(event.target.id)
    const item = products.find(el => el.id === result)
    const alredyExist = cartItens.some(el => el.id === item.id)
    
    if(alredyExist){
      toast.error("Produto ja adicionado")
    } else {

      setCartItens([...cartItens, item])
    }

  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GlobalStyle/>
      <HeaderSite products={products} setProducts={setProducts} allProducts={allProducts} />
      <MainSite products={products} setProducts={setProducts} handleClick={handleClick} allProducts={allProducts} setAllProducts={setAllProducts} >
        <ProductsList products={products} setProducts={setProducts} handleClick={handleClick} allProducts={allProducts} setAllProducts={setAllProducts} />
        <Cart cartItens={cartItens} setCartItens={setCartItens} handleClick={handleClick}/>
      </MainSite>
      <SiteFooter></SiteFooter>
    </>
  );
}

export default App;
