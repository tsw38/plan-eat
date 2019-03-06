import React from "react";
import {Helmet} from "react-helmet";
import {Location} from "@reach/router";
import {connect} from 'react-redux';

import Page from 'components/Page/Page';
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";

import Inbox from 'views/Inbox/Inbox';
import Recipe from 'views/Recipe/Recipe';
import NotFound from 'views/404/404.jsx';
import Recipes from 'views/Recipes/Recipes';
import Overview from 'views/Overview/Overview';
import MealPrep from 'views/MealPrep/MealPrep';
import StyleGuide from 'views/StyleGuide/StyleGuide';
import ShoppingCart from 'views/ShoppingCart/ShoppingCart';

import LinkStyles from 'styles/common/Link';
import * as GlobalStyles from 'styles/global';
import ButtonStyles from 'styles/common/Button';
import * as AppStyles from "styles/components/App";

import {onLocationChange} from 'actions/AppActions';

class App extends React.Component {
    state = {
        location: ''
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // this.props.onLocationChange(prevProps, this.props);
    }

    componentDidUpdate(prevProps) {
        console.warn(prevProps);
    }

    handleLocationChange = (location) => {
        this.setState({
            location
        })
    }

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
                        ]}
                    />
                    <Header />
                    <Sidebar />
                    <Location>
                        {(props) => {
                            // this.handleLocationChange(props.location);

                            return (
                                <AppStyles.StyledRouter location={props.location}>
                                    <Page path="/">
                                        <Overview path="/" />
                                        <MealPrep path="/meal-prep"/>
                                        <Recipes path="/recipes"/>
                                        <Recipe path="/recipes/:recipe"/>
                                        <ShoppingCart path="/cart"/>
                                        <Inbox path="/inbox" />
                                        <StyleGuide path="/style-guide" />
                                        <NotFound default />
                                    </Page>
                                </AppStyles.StyledRouter>
                            )
                        }}
                    </Location>
                </AppStyles.App>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.warn('maping state to prop', state)
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    onLocationChange
}


export default connect(mapStateToProps, mapDispatchToProps)(App);