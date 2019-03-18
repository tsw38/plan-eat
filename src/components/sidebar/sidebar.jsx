import React from "react";
import classNames from 'classnames';
import Link from "components/common/Link/Link";

import {Sidebar as StyledSidebar, LinkWrapper, StyledLink} from "components/sidebar/sidebar.styles";

class Sidebar extends React.Component {
    hideSidebar = () => {
        const {
            location
        } = this.props;

        switch (location.pathname){
            case '/signin':
                return true;
            default:
                return false;
        }
    }

    render() {
        return (
            <StyledSidebar className={classNames(
                'Sidebar',
                {'Sidebar--Hidden': this.hideSidebar()}
            )}>
                <LinkWrapper>
                    <h2 className="Sidebar--header">Dashboard</h2>
                    <StyledLink>
                        <Link to="/">Overview</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/meal-prep">Meal Prep</Link>
                    </StyledLink>
                </LinkWrapper>

                <LinkWrapper>
                    <h2 className="Sidebar--header">Extras</h2>
                    <StyledLink>
                        <Link to="/recipes">Recipes</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/cart">Cart</Link>
                    </StyledLink>

                    <StyledLink>
                        <Link to="/signin">Signin</Link>
                    </StyledLink>

                    <StyledLink>
                        <Link to="/add-ingredient">Add Ingredient</Link>
                    </StyledLink>

                    <StyledLink>
                        <Link to="/add-recipe">Add Recipe</Link>
                    </StyledLink>

                    <StyledLink>
                        <Link to="/recipe/lemon-thyme-chicken-pasta-with-asparagus">Recipe Page - Lemon Thyme</Link>
                    </StyledLink>

                    <StyledLink>
                        <Link to="/recipe/garlic-brown-sugar-glazed-salmon">Recipe Page - Garlic Salmon</Link>
                    </StyledLink>


                    <StyledLink>
                        <Link to="/style-guide">Style Guide</Link>
                    </StyledLink>
                </LinkWrapper>
        </StyledSidebar>
    );
  }
}

export default Sidebar;
