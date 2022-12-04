import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';

import { Home, Products, SingleProduct, About, Checkout, Cart, Error, PrivateRoute } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />} />
        <PrivateRoute exact path="/checkout">
          <Checkout />
        </PrivateRoute>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
