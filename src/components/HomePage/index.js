import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../actions';

const HomePage=()=> {
    const user = useSelector(state => state.authentication.user);
    console.log("user: ",user)

    return (
        <div>
            <p>Este es el Home Page</p>
        </div>
    );
}

export default HomePage;