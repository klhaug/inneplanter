import React from "react";
import './Form.css'

function Form () {
    return(
        <div className="form-container">
            <h1>Legg til <u>din</u> plante!</h1>
            <form className="add-form"method="post">
                <div className="form-fields-container">
                  <input className="form-field"  type="text" placeholder="Navn*"/>
                  <input className="form-field" type="text" placeholder="Planteslekt*" />
                  <input className="form-field" type="text" placeholder="Vann/Næring*"/>
                  <select className="form-field" placeholder="Navn">
                    <option value="">Giftig:</option>
                    <option value="">Ja</option>
                    <option value="">Nei</option>
                    </select> 
                  <input className="form-field" type="textarea" placeholder="Mer info"/>
                  <button type="submit">Legg til</button>
                  <button type="reset">Nullstill</button>
                </div>
                <div className="input-image-container">
                    <label for="file-upload" class="custom-file-upload">

                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 0.363632C6.34329 0.363632 0.534912 6.02472 0.534912 13C0.534912 19.9753 6.34329 25.6364 13.5 25.6364C20.6568 25.6364 26.4651 19.9753 26.4651 13C26.4651 6.02472 20.6568 0.363632 13.5 0.363632ZM19.9826 14.2636H14.7965V19.3182H12.2035V14.2636H7.01747V11.7364H12.2035V6.68181H14.7965V11.7364H19.9826V14.2636Z" fill="white"/>
                    </svg>
                    </label>
                    <input className="input-image-button" type="file" id="file-upload" name="avatar" accept="image/png, image/jpeg" />
                </div>
            </form>
        </div>
    );
}


export default Form;