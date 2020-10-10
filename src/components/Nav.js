import React from 'react';

export default function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#/">Menú</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#AboutMe">Sobre Mí</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Education">Educación</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Work">Empleos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#MisRedes">Mis Redes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Contactame">Contáctame</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}