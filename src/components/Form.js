import React from 'react';

export default function Form() {
    return (
        <div className="row justify-content-center">
            <div class="form-group">
                <label for="usr">Nombre y Apellido:</label>
                <input type="text" class="form-control" />
            </div>
            <div class="form-group">
                <label for="pwd">Email:</label>
                <input type="email" class="form-control" />
            </div>
            <div class="form-group">
                <label for="pwd">Teléfono:</label>
                <input type="phone" class="form-control" />
            </div>
            <div class="form-group">
                <label for="comment">Comentarios:</label>
                <textarea class="form-control" rows="5" id="comment">
                </textarea>
            </div>
            <div class="container text-center">
                <button type="button" class="btn btn-info" style={{ width: 200, height: 80 }}>Enviar</button>
            </div>
        </div>


    )
}