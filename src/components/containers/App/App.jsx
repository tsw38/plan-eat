import React from "react";
import {Helmet} from "react-helmet";
import {Location} from "@reach/router";
import {connect} from 'react-redux';

// App Level components
import Page from 'components/containers/Page/Page';
import Session from "components/common/Session/Session";
import Header from "components/containers/Header/Header";
import Sidebar from "components/containers/Sidebar/Sidebar";

//Views for each route
import Inbox from 'views/Inbox/Inbox';
import Signin from 'views/User/Signin';
import Recipe from 'views/Recipe/Recipe';
import AddRecipe from 'views/Recipe/Add';
import NotFound from 'views/404/404.jsx';
import Account from 'views/User/Settings';
import Recipes from 'views/Recipes/Recipes';
import Overview from 'views/Overview/Overview';
import MealPrep from 'views/MealPrep/MealPrep';
import StyleGuide from 'views/StyleGuide/StyleGuide';
import AddIngredient from 'views/Temporary/AddIngredient';
import ShoppingCart from 'views/ShoppingCart/ShoppingCart';

//Global Styling
import GlobalStyles from 'components/common/GlobalStyles/GlobalStyles';
import {App as StyledApp, StyledRouter} from "styles/components/App";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyles />

                <Session />
                <StyledApp className="App">
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
                        ]}
                    />
                    <Header />
                    <Sidebar />
                    <Location>
                        {(props) => {
                            return (
                                <StyledRouter location={props.location}>
                                    <Page path="/">
                                        <Overview path="/" />
                                        <MealPrep path="/meal-prep"/>

                                        <Recipes path="/recipes"/>
                                        <Recipe path="/recipe/:recipe"/>
                                        <AddRecipe path="/add-recipe" />

                                        <ShoppingCart path="/cart"/>
                                        <Inbox path="/inbox" />
                                        <StyleGuide path="/style-guide" />
                                        <Signin path="/signin" />
                                        <AddIngredient path="/add-ingredient" />
                                        <Account path="/account" />
                                        <NotFound default />
                                    </Page>
                                </StyledRouter>
                            )
                        }}
                    </Location>
                </StyledApp>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(App);