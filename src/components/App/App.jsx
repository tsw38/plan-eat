import React from "react";

import Page from '../Page/Page';
import Overview from '../../views/Overview/Overview';
import MealPrep from '../../views/MealPrep/MealPrep';
import Recipes from '../../views/Recipes/Recipes';
import Recipe from '../../views/Recipe/Recipe';
import ShoppingCart from '../../views/ShoppingCart/ShoppingCart';
import Inbox from '../../views/Inbox/Inbox';

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import * as GlobalStyles from '../../styles/global';

import * as AppStyles from "../../styles/components/App";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles.Reset />
        <GlobalStyles.Fonts />
        <AppStyles.App className="App">
          <Header />
          <Sidebar />
          <AppStyles.StyledRouter>
            <Page path="/">
              <Overview path="/" />
              <MealPrep path="/meal-prep"/>
              <Recipes path="/recipes"/>
              <Recipe path="/recipes/:recipe"/>
              <ShoppingCart path="/cart"/>
              <Inbox path="/inbox" />
            </Page>
          </AppStyles.StyledRouter>
        </AppStyles.App>
      </React.Fragment>
    );
  }
}

export default App;
