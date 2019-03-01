import React from "react";

import Page from 'components/Page/Page';
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";

import Inbox from 'views/Inbox/Inbox';
import Recipe from 'views/Recipe/Recipe';
import NotFound from 'views/404/404.jsx';
import Recipes from 'views/Recipes/Recipes';
import Overview from 'views/Overview/Overview';
import MealPrep from 'views/MealPrep/MealPrep';
import ShoppingCart from 'views/ShoppingCart/ShoppingCart';

import * as GlobalStyles from 'styles/global';
import * as AppStyles from "styles/components/App";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles.Reset />
        <GlobalStyles.Fonts />
        <GlobalStyles.SVG />
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
              <NotFound default />
            </Page>
          </AppStyles.StyledRouter>
        </AppStyles.App>
      </React.Fragment>
    );
  }
}

export default App;
