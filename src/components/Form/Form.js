import React from "react";
import './Form.css'

function Form () {
    return(
        <div className="form-container">
            <h1>Legg til <u>din</u> plante!</h1>
            <form>
              <input type="text" /> 
              <input type="text" /> 
              <input type="text" /> 
              <input type="text" /> 
              <input type="text" /> 
            </form>
        </div>
    );
}


export default Form;