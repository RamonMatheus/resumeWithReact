import React from 'react';

export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#/">Menú</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#AboutMe">Sobre Mí</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Education">Educación</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Work">Empleos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#MisRedes">Mis Redes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Contactame">Contáctame</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}