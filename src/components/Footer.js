import React from 'react';

export default function Footer() {
    return (
        <div className="container-fluid">
            <div className="row row-footer">
                <div className="col col-footer-link pt-3">
                    <li><a style={{ color: "black" }} href="#AboutMe">Sobre Mí</a></li>
                    <li><a style={{ color: "black" }} href="#Education">Educación</a></li>
                    <li><a style={{ color: "black" }} href="#Work">Empleos</a></li>
                    <li><a style={{ color: "black" }} href="#MisRedes">Mis Redes</a></li>
                    <li><a style={{ color: "black" }} href="#Contactame">Contáctame</a></li>
                </div>
                <div className="col">
                    <div className="row justify-content-center">
                        <a target="_blank"
                            href="https://www.linkedin.com/in/ram%C3%B3n-matheus-bastidas-0b5993169?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8JeMAtJDQLG%2BPuR4B0yLVA%3D%3D">
                            <i className="fab fa-linkedin iconos mt-5" style={{ color: "blue" }}></i>
                        </a>
                        <a target="_blank"
                            href="https://github.com/RamonMatheus?tab=repositories">
                            <i className="fab fa-github iconos mt-5" style={{ color: "gray" }}></i>
                        </a>
                        <p style={{ color: "black" }} >Email: ramonmatheus1988@gmail.com</p>
                    </div>
                </div>
                <div className="col mt-5">
                    <p>
                        Copyright © Ramón-Matheus - 2020
                   </p>

                </div>

            </div>
        </div>
    )
}




