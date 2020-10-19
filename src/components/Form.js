import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {


    state = {
        webForm: []
    }

    componentDidMount() {
        axios.get('/contactForm/save')
            .then(response => {
                this.state({ webForm: response.data });
            })
    }

    render() {
        return (
            <div>
                {

                    this.state.webForm.map(webForm =>
                        <div>
                            <h4>{webForm.nameForm}</h4>
                            <h4>{webForm.emailForm}</h4>
                            <h4>{webForm.phoneForm}</h4>
                            <h4>{webForm.messageForm}</h4>
                        </div>

                    )

                }


            </div>


        )
    }
}