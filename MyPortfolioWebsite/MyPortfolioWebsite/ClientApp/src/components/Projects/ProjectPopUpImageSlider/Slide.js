import React from 'react';

export const Slide = ({ image }) => {
    const styles = {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 60%"
    }

    return (
        <div className="slide" style={styles}>
            <img alt="Project slider" src={`data:image/jpeg;base64,${image}`} />
        </div>
    );
}