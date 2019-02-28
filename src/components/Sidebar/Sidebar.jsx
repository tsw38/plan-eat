import React from "react";
import { Link } from "@reach/router";

class Sidebar extends React.Component {
  render() {
    return (
      <aside>
        <Link to="/">Overview</Link>
        <Link to="/meal-prep">Meal Prep</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/cart">Cart</Link>
      </aside>
    );
  }
}

export default Sidebar;
