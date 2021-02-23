import React, {useState, useEffect } from 'react';
import { commerce } from './lib/commerce'; //completely does backend for me
import { Products, Navbar } from './components';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list(); 

        setProducts(data);

    }


    //use the useEffect hook instead of componentDidMount; dependency array set to empty so it only runs at the start
    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products);


    return (
        <div>
            <Navbar />
            <Products products={products} />
        </div>
    )
}

export default App
