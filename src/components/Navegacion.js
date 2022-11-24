import React from "react";
import {Link} from "react-router-dom";
import Naruto12 from "../img/naruto1.jpg";
import Naruto22 from "../img/naruto2.jpg";
import Naruto32 from "../img/naruto3.jpg";
import Naruto42 from "../img/naruto4.jpg";
import Naruto52 from "../img/naruto5.jpg";
import Naruto62 from "../img/naruto6.jpg";

const Navegacion = () => {
    return (
        <div className="container mt-3 padre">

            <Link to="/Naruto1" className="links">
                <figure>
                    <img src={Naruto12} alt="" className="tamaño-img" />
                    <figcaption>Naruto1</figcaption>
                </figure>
            </Link>

            <Link to="/Naruto2" className="links">
                <figure>
                    <img src={Naruto22} alt="" className="tamaño-img" />
                    <figcaption>Naruto2</figcaption>
                </figure>
            </Link>

            <Link to="/Naruto3" className="links">
                <figure>
                    <img src={Naruto32} alt="" className="tamaño-img" />
                    <figcaption>Naruto3</figcaption>
                </figure>
            </Link>

            <Link to="/Naruto4" className="links">
                <figure>
                    <img src={Naruto42} alt="" className="tamaño-img" />
                    <figcaption>Naruto4</figcaption>
                </figure>
            </Link>

            <Link to="/Naruto5" className="links">
                <figure>
                    <img src={Naruto52} alt="" className="tamaño-img" />
                    <figcaption>Naruto5</figcaption>
                </figure>
            </Link>

            <Link to="/Naruto6" className="links">
                <figure>
                    <img src={Naruto62} alt="" className="tamaño-img" />
                    <figcaption>Naruto6</figcaption>
                </figure>
            </Link>

        </div>
    );
};

export default Navegacion;
