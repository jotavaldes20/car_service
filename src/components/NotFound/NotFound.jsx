import React from 'react';
import NotFoundParking from "../../assets/img/parking_notFound.gif";
import "../../assets/css/NotFound.styles.scss"
const NotFound = () => {
    return (
        <div className="not_found">
				<div className="bg" style={{ backgroundImage: `url(${NotFoundParking})`}}></div>
				<div className="code">404</div>
			</div>
    );
}

export default NotFound
