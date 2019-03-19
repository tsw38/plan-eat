import React from "react";
import { connect, getIn, Field } from 'formik';
import Button from 'components/common/button';

export const ServingSize = ({
    onIncrease,
    onDecrease,
    servingSize,
    formik
}) => {
    return (
        <React.Fragment>
            <div className="Recipe--Serving-Toggle">
                <div className="Toggle">
                    <Button
                        iconName={'minus'}
                        type="button"
                        onClick={() => {
                            onDecrease();

                            if (formik.hasOwnProperty('setFieldValue')) {
                                formik.setFieldValue('servingSize', servingSize > 1 ? servingSize-1 : servingSize, false)
                            }
                        }}
                    />
                    <Button
                        iconName={'plus'}
                        type="button"
                        onClick={() => {
                            onIncrease();

                            if (formik.hasOwnProperty('setFieldValue')) {
                                formik.setFieldValue('servingSize', servingSize+1, false);
                            }
                        }}
                    />
                </div>
                <div className="Serving">
                    <span className="name">Serving Size:</span>
                    <span className="number">{servingSize}</span>
                </div>
            </div>
        </React.Fragment>
    )
}


export default connect(ServingSize);