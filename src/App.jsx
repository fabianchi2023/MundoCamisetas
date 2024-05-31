import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CartContextProvider from "./components/context/CartContext"
import Cart from "./components/Cart"
import CheckOut from "./components/CheckOut"


function App() {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />}></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>

  )
}

export default App
