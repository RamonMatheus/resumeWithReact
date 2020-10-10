import React from 'react';

export default function Description({ title, title1, description1 }) {
    return (

        <div className="container">
            <div className="row row-title justify-content-center">
                <h1><b>{title}</b></h1>
            </div>
            <div className="row ">
                <div className="col col-description">
                    <h3>{title1}</h3>
                    <p>{description1}</p>
                </div>
            </div>
        </div>
    )
}