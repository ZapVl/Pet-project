import React from 'react';
import './Error.css'
function Error(props) {
    return (
        <div>
            <div className="error-container">
                <div className="error">
                    <img src="https://icons.iconarchive.com/icons/artua/star-wars/256/Death-Star-icon.png" alt="death-star" />
                </div>
                <div>
                   <h3> Boom!</h3>
                    <p>Unable to fetch user list</p>
                </div>
            </div>
        </div>
    );
}

export default Error;