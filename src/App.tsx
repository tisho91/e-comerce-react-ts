import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";


import { Switch ,Route } from 'react-router-dom'
import Header from "./componnents/header/header.component";
import UserControl from "./pages/user-control/user-control.component";



function App() {
  return (
    <div >
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/shop' component={ShopPage}/>
            <Route exact path='/sign-in' component={UserControl}/>
        </Switch>
    </div>
  );
}

export default App;
