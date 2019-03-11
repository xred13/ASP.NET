import React from 'react';

export const RightArrow = () => {
    return (
        <div className="nextArrow" onClick={checkPropTypes.goToNextSlide}>
            <i className="fa fa-arrow-right" fa-2x aria-hidden="true">
            </i>
        </div>
    );
}

export const LeftArrow = () => {
    return (
        <div className="blackArrow" onClick={checkPropTypes.goToPrevSlide}>
            <i className="fa fa-arrow-left" fa-2x aria-hidden="true">
            </i>
        </div>
    );
}