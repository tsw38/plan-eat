import React from "react";

import Button from 'components/common/button';

export default ({
    onIncrease,
    onDecrease,
    servingSize
}) => {
    return (
        <React.Fragment>
            <div className="Recipe--Serving-Toggle">
                <div className="Toggle">
                    <Button iconName={'minus'}
                        onClick={onDecrease}
                    />
                    <Button iconName={'plus'}
                        onClick={onIncrease}
                    />
                </div>
                <span>Serving Size: {servingSize}</span>
            </div>
        </React.Fragment>
    )
}

