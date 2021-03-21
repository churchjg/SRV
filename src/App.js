import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce"; //completely does backend for me
import { Products, Navbar, Cart, Checkout } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Homepage from "./components/Homepage/Homepage";
import Gallery from "./components/Gallery/Gallery";
import Event from "./components/Events/Events";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      
      refreshCart();

      
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  //use the useEffect hook instead of componentDidMount; dependency array set to empty so it only runs at the start
  useEffect(() => {
    fetchProducts();
    fetchCart();
    // fetchLiveCart();
  }, []);

  return (
    <Router>
      <div>
        {/* <Navbar totalItems={cart.total_items} /> */}
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/products">
            {" "}
            {/*this will eventually turn into  <Route path="/products" */}
            <Products products={products} onAddToCart={handleAddToCart} />
            <Navbar totalItems={cart.total_items} />
          </Route>
          <Route path="/gallery" render={() => <Gallery />} exact />
          <Route path="/contact" render={() => <Contact />} exact />
          <Route path="/about" render={() => <About />} exact />
          <Route path="/event" render={() => <Event />} exact />
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
            <Navbar totalItems={cart.total_items} />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              
              error={errorMessage}
              
            />
            <Navbar totalItems={cart.total_items} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
