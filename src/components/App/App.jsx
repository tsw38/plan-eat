import React from "react";

import { Router } from "@reach/router";

import Overview from '../../views/Overview/Overview';
import MealPrep from '../../views/MealPrep/MealPrep';
import Recipes from '../../views/Recipes/Recipes';
import Recipe from '../../views/Recipe/Recipe';
import ShoppingCart from '../../views/ShoppingCart/ShoppingCart';


import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import * as AppStyles from "../../styles/common/App";

class App extends React.Component {
  render() {
    return (
      <AppStyles.App className="App">
        <Header />
        <Sidebar />
        <Router>
          <Overview path="/" />
          <MealPrep path="/meal-prep"/>
          <Recipes path="/recipes"/>
          <Recipe path="/recipes/:recipe"/>
          <ShoppingCart path="/cart"/>
        </Router>
      </AppStyles.App>
    );
  }
}

export default App;
