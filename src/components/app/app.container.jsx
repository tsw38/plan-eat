import React from "react";
import {Helmet} from "react-helmet";
import {Location} from "@reach/router";
import {connect} from 'react-redux';
import classNames from 'classnames';

// App Level components
import Modals from 'components/modal';
import Loader from  "components/loader";
import Page from 'components/page/page.container';
import Session from "components/session/session.controller";

import Header from "components/header";
import Sidebar from "components/sidebar/sidebar";

//Views for each route
import AddRecipe from 'components/recipe/addRecipe';
import AddIngredient from 'components/addIngredient';


import Inbox from 'components/inbox/inbox.view';
import Recipe from 'components/recipe/recipe.view';
import Recipes from 'components/recipes/recipes.view';
import NotFound from 'components/notFound/notFound.view';
import Overview from 'components/overview/overview.view';
import Signin from 'components/user/signIn/userSignIn.view';
import Account from 'components/user/settings/userSettings.view';

import MealPrep from 'components/mealPrep/mealPrep.view';
import StyleGuide from 'components/styleGuide/styleGuide.view';
import ShoppingCart from 'components/shoppingCart/shoppingCart.view';

//Global Styling
import GlobalStyles from 'components/common/GlobalStyles/GlobalStyles';
import {App as StyledApp, StyledRouter} from "components/app/app.styles";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Session />
                <GlobalStyles />
                <Loader />
                <Modals />
                <StyledApp
                    className={classNames(
                        'App',
                        {'App--Loading': !!this.props.app.loading}
                    )}>
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

                    <Location>
                        {(props) => {
                            return (
                                <React.Fragment>
                                    <Header />
                                    <Sidebar location={props.location} />
                                    <StyledRouter location={props.location}>
                                        <Page path="/">
                                            <Overview path="/" />
                                            <MealPrep path="/meal-prep"/>

                                            <Recipes path="/recipes"/>
                                            <Recipe path="/recipe/:recipeSlug"/>
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
                                </React.Fragment>
                            )
                        }}
                    </Location>
                </StyledApp>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({app}, ownProps) => ({
    app
})

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(App);