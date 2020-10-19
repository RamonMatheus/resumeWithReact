import React from 'react';
import axios from 'axios';

export default class PostForm extends React.Component {


    state = {

        webForm: []

    }

    onChangenameForm = (e) => {
        this.setState({
            nameForm: e.target.value
        });
    }
    onChangenameForm = (e) => {
        this.setState({
            emailForm: e.target.value
        });
    }
    onChangenameForm = (e) => {
        this.setState({
            phoneForm: e.target.value
        });
    }
    onChangenameForm = (e) => {
        this.setState({
            messageForm: e.target.value
        });
    }

    onSubmitWebForm = async (e) => {

        const response = await axios.post(`/contactForm/save`, {
            nameForm: this.state.nameForm,
            emailForm: this.state.emailForm,
            phoneForm: this.state.phoneForm,
            messageForm: this.state.messageForm
        })
        this.setState({
            nameForm: '',
            emailForm: '',
            phoneForm: '',
            messageForm: ''
        })

        console.log(response);
    }

    render() {
        return (
            <div>

                <form onSubmit={this.onSubmitWebForm}>
                    <div className="row justify-content-center">
                        <div class="form-group">
                            <label for="usr">Nombre y Apellido:</label>
                            <input type="text" name="nameForm" onChange={this.onChangenameForm} class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="pwd">Email:</label>
                            <input type="email" name="emailForm" onChange={this.onChangeemailForm} class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="pwd">Teléfono:</label>
                            <input type="phone" name="phoneForm" onChange={this.onChangephoneForm} class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="comment">Comentarios:</label>
                            <textarea class="form-control" name="messageForm" onChange={this.onChangemessageForm} rows="5" id="comment">
                            </textarea>
                        </div>
                        <div class="container text-center">
                            <button type="submit" class="btn btn-info" style={{ width: 200, height: 80 }}>Enviar</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }

}