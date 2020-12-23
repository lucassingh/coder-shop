import React from 'react'

function JumbotronNike() {
    return (
        <>
            <div className="nike-container">
                <div className="nike-sneaker">
                    <div className="nike-circle">
                        <img src="../../../../assets/nike.png" alt="nike-shoes"></img>
                    </div>
                </div>
                <div className="nike-container-info">
                    <h1 className="nike-title">Nike Air Zoom Terre</h1>
                    <p className="nike-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <button className="nike-button-shop">Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default JumbotronNike
