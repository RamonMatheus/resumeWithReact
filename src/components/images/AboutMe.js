/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';


export default class AboutMe extends Component {

    render() {
        return (

            <div className="container aboutMe">
                <div className="text-center row-title" id="AboutMe">
                    <h1><b> Un poco sobre mí ✍</b></h1>
                </div>
                <div className="row mt4">
                    <div className="col text-center">
                        <h2> Soy Yó 😎</h2>
                        <img src={require('../images/fotocv.jpg')} className="rounded-circle" />
                    </div>
                    <div className="col">
                        <h2 className="text-center">Sobre mí:</h2>
                        <div className="row row-flex justify-content-center">
                            <p className="border border-info p-3"> Soy estudiante de Análisis de Sistemas, apasionado a la tecnología. Durante mi tiempo libre me dedico a 👨‍💻 aprender cosas nuevas y actualizar el conocimiento de las tecnologías ya aprendidas.</p>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}