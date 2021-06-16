import React from 'react'
import "../../assets/css/Loader.scss"
import loaderGif from "../../assets/img/LoaderCarService2.gif"

const Loader = () => (
    <div className="loader">
        <img className="loader-img" src={loaderGif} alt="Loading" width="300" />
        <span className="loader-text">Cargando...</span>
    </div>
);

export default Loader
