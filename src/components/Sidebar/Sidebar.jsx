import React from "react";

import Link from "common/Link/Link";

import {Sidebar as StyledSidebar, LinkWrapper, StyledLink} from "styles/components/Sidebar";

class Sidebar extends React.Component {
  render() {
    return (
      <StyledSidebar>
        <Link
            universal={false}
            className="Link--Sitename"
            to="/">
            Plan.Eat
        </Link>

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
        </LinkWrapper>
      </StyledSidebar>
    );
  }
}

export default Sidebar;
