import React from "react";
import  {Helmet} from "react-helmet";

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

import LinkStyles from 'styles/common/Link';
import * as GlobalStyles from 'styles/global';
import ButtonStyles from 'styles/common/Button';
import * as AppStyles from "styles/components/App";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles.Reset />
        <GlobalStyles.Fonts />
        <GlobalStyles.SVG />
        <LinkStyles />
        <ButtonStyles />
        <AppStyles.App className="App">
          <Helmet
            htmlAttributes={{lang:"en"}}
            titleTemplate="Plan-Eat | %s"
            defaultTitle="Plan-Eat"
            titleAttributes={{itemprop: "name", lang: "en"}}
            link={[
              {rel:"canonical", href: `https://plan-eat.kitchen/`}
            ]}
            meta={[
              {name: "description", content: ""},
              {name: "keywords", content: ""},
              {property: "og:site_name", content: ''},
              {property: "og:type", content: 'website'},
              {property: "og:url", content: 'https://plan-eat.kitchen'},
              {name: "viewport", content: "width=device-width, initial-scale=1,minimum-scale=1"}
            ]} />
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
