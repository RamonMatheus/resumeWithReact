import React from 'react';

export default function Header({ title, description }) {



    return (

        <div >
            <div>
                <div className="col-header">
                    <h2>{title}<br />{description}</h2>
                </div>
            </div>
        </div>
    )
}