import React, {useState, useEffect } from 'react';
import { commerce } from './lib/commerce'; //completely does backend for me
import { Products, Navbar } from './components';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list(); 

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
      };

      const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
    
        setCart(item.cart);
      };

    //use the useEffect hook instead of componentDidMount; dependency array set to empty so it only runs at the start
    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(products);


    return (
        <div>
            <Navbar />
            <Products products={products} onAddToCart={handleAddToCart}/>
        </div>
    )
}

export default App
