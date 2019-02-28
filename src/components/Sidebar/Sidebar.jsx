import React from "react";
import Link from "../../common/Link/Link";

import * as SidebarStyles from "../../styles/components/Sidebar";

class Sidebar extends React.Component {
  render() {
    return (
      <SidebarStyles.Sidebar>
        <SidebarStyles.LinkWrapper>
          <SidebarStyles.StyledLink>
            <Link to="/">Overview</Link>
          </SidebarStyles.StyledLink>
          <SidebarStyles.StyledLink>
            <Link to="/meal-prep">Meal Prep</Link>
          </SidebarStyles.StyledLink>
          <SidebarStyles.StyledLink>
            <Link to="/recipes">Recipes</Link>
          </SidebarStyles.StyledLink>
          <SidebarStyles.StyledLink>
            <Link to="/cart">Cart</Link>
          </SidebarStyles.StyledLink>
        </SidebarStyles.LinkWrapper>
      </SidebarStyles.Sidebar>
    );
  }
}

export default Sidebar;
