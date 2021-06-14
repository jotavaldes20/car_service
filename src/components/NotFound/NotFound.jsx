import React from 'react';
import { Icon, Input, Paper, Typography } from '@material-ui/core';
import FuseAnimate from "../../@fuse/FuseAnimate/FuseAnimate";
import { Link } from 'react-router-dom';
import NotFoundParking from "../../assets/img/parking_notFound.gif";
import "../../assets/css/NotFound/NotFound.styles.scss"
const NotFound = () => {
    return (
        <div className="not_found">
				<div className="bg" style={{ backgroundImage: `url(${NotFoundParking})`}}></div>
				<div className="code">404</div>
			</div>
    );
}

export default NotFound
