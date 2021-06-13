import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Checkout from './Checkout';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51IBsffCncMgsTThkX15mz7WnI6nz5hJYQR3fzgpyQ5nbrKc4VaFX0zDQn9O8lHwWEWNR7wuq4eI7c5GPH4MJYLxC00qTMpewCP"
);

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //Will only loads once the component loads..

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>>>', authUser);

      if (authUser) {
        //The user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //THe user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (

    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>

          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
