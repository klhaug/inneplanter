import React, { useState } from "react";
import './Form.css'
import './FormMediaQueries.css'


function Form ({onPlantAdded}) {
const [navn, setNavn] = useState("");
const [planteslekt, setPlanteslekt] = useState("");
const [vann, setVann] = useState("");
const [giftig, setGiftig] = useState("");
const [info, setInfo] = useState("");
const [selectedFile, setSelectedFile] = useState(null);
const [imagePreview, setImagePreview] = useState(null);

const handleImageUpload = (event) => {
  const file = event.target.files[0];

  if (file) {
    setSelectedFile(file);

    // Create image preview
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result); // Set image preview URL
    };
    reader.readAsDataURL(file);
  }
};




const handleSubmit = (event) => {
    event.preventDefault();
        fetch('http://localhost:3000/submit', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                navn: navn,
                slekt: planteslekt,
                vann: vann,
                giftig: giftig,
                beskrivelse: info,
                bilde: selectedFile
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(onPlantAdded)
}

// onSubmitSignIn = () => {
//     fetch('https://polar-fjord-45385-a0c6e73396d4.herokuapp.com/signin', {
//         method: 'post',
//         headers: {'Content-type': 'application/json'},
//         body: JSON.stringify({
//             email: this.state.signInEmail,
//             password: this.state.signInPassword
//         })
//     })
//         .then(response => response.json())
//         .then(user => {
//             if (user.id) {
//                 this.props.loadUser(user)
//                 this.props.onRouteChange("home")
//             }
//         })
// }

const handleChange = (event) => {
    event.target.blur()
    setGiftig(event.target.value)} ;
   
    return(
        <div className="form-container">
            <div className="form-header-container">
                <h1 className="form-header">Legg til <u>din</u> plante!</h1>
            </div>
            <form className="add-form"method="post">
                <div className="form-fields-container">
                    {/* Navn */}
                  <input
                    className="form-field"  
                    type="text" 
                    placeholder="Navn*"
                    onChange={(e) => setNavn(e.target.value)}
                    />
                    {/* Planteslekt */}
                  <input 
                    className="form-field" 
                    type="text" 
                    placeholder="Planteslekt*"
                    onChange = {(e) => setPlanteslekt(e.target.value)}
                    />
                  <div className="form-field-wrap">
                    {/* Vann/Næring */} 
                      <input 
                        className="form-field" 
                        type="text" 
                        placeholder="Vann/Næring*"
                        onChange={(e) => setVann(e.target.value)}
                        />
                    {/* Giftig */}
                      <select 
                        onChange={handleChange} 
                        className="form-field"  
                        required
                        >
                            <option value="" selected>Giftig:</option>
                            <option value="Ja">Ja</option>
                            <option value="Nei">Nei</option>
                        </select>
                  </div>
                  {/* Mer info */}
                  <textarea 
                    className="form-field textarea" 
                    type="textarea" 
                    rows="4" 
                    cols="34" 
                    placeholder="Mer info"
                    onChange={(e) => setInfo(e.target.value)}
                    />
                  <div className="form-button-container">
                      <button 
                        className="form-submit-button" 
                        type="submit"
                        onClick={handleSubmit}
                        >
                            Legg til
                        </button>
                      <button 
                        className="form-reset-button" 
                        type="reset"
                        onClick={() => setSelectedFile(null)}
                        >
                            Nullstill
                        </button>
                  </div>
                </div>
                <div className="input-image-container">
                    {selectedFile === null ? <div>
                    <label for="file-upload" class="custom-file-upload">
                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 0.363632C6.34329 0.363632 0.534912 6.02472 0.534912 13C0.534912 19.9753 6.34329 25.6364 13.5 25.6364C20.6568 25.6364 26.4651 19.9753 26.4651 13C26.4651 6.02472 20.6568 0.363632 13.5 0.363632ZM19.9826 14.2636H14.7965V19.3182H12.2035V14.2636H7.01747V11.7364H12.2035V6.68181H14.7965V11.7364H19.9826V14.2636Z" fill="white"/>
                    </svg>
                    </label>
                    <input 
                        className="input-image-button" 
                        type="file" 
                        id="file-upload" 
                        name="avatar" 
                        accept="image/png, image/jpeg" 
                        onChange={handleImageUpload}
                        />
                    <p>Knips et nytt bilde, eller last opp et ekstrabilde</p>
                    </div>
                    :
                    <div className="image-preview-container">
                        <img className="image-preview" src={imagePreview}/>
                        <p>{selectedFile.name}</p>
                    </div>
                    
                    }
                </div>
            </form>
        </div>
    );
}


export default Form;