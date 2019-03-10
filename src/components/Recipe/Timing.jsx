import React from "react";
import {connect} from 'react-redux';

const Timing = ({
    prepTime,
    cookTime
}) => {
    return (
    <div className="Recipe--Time">
        <div className="Recipe--Time--Prep">
            <h6>Prep Time</h6>
            <h5>{prepTime} minutes</h5>
        </div>
        <div className="Recipe--Time--Cook">
            <h6>Cook Time</h6>
            <h5>{cookTime} minutes</h5>
        </div>
    </div>
    );
}

const mapStateToProps = ({recipes, user, ingredients}, props) => ({
});

const mapDispatchToProps = {
};

Timing.defaultProps = {
};

Timing.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Timing);