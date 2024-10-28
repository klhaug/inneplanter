import React, { useState } from "react";
import './Form.css';
import { Link } from "react-router-dom";
import './FormMediaQueries.css';
import { useRevalidation } from "../../containers/Revalidate/Revalidate";
import { useNavigate } from "react-router-dom";
import { useDatabaseSearch } from "../Database/DatabaseSearchProvider";
import {v4 as uuidv4} from 'uuid';


function Form ({onPlantAdded}) {
  const [navn, setNavn] = useState("");
  const [planteslekt, setPlanteslekt] = useState("");
  const [vann, setVann] = useState("");
  const [giftig, setGiftig] = useState("");
  const [info, setInfo] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

const revalidate = useRevalidation();
const navigate = useNavigate();
const generateUniqueId = () => uuidv4();

const {isOpen, setIsOpen, databaseSearch, setDatabaseSearch } = useDatabaseSearch();


const handleImageUpload = (event) => {
  const file = event.target.files[0];

  if (file) {
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result); 
    };
    reader.readAsDataURL(file);
  }
};


const formData = new FormData();
  formData.append('navn', navn);
  formData.append('slekt', planteslekt);
  formData.append('vann', vann);
  formData.append('giftig', giftig);
  formData.append('beskrivelse', info);
  formData.append('bilde', selectedFile);
  formData.append('id', generateUniqueId())



const handleSubmit = (event) => {
  event.preventDefault();
  // LAG EN BEDRE IF HER
  if (navn.length > 0) {
        fetch('https://inneplanter-96dc16623a17.herokuapp.com/upload', {
            method: 'POST',
            body: formData,
            credentials: 'include',
            mode: 'no-cors'
          })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(onPlantAdded)
        .then(() => revalidate())
        .then(() => setDatabaseSearch(''))
        .then(() => setIsOpen(false))
        .then(() => navigate('/inneplanter/database/new-plant-added'))
        .then(() => revalidate())
  } else {
    alert('Please enter information')
  }
}

const handleChange = (event) => {
    event.target.blur()
    setGiftig(event.target.value)} ;
   
    return(
      <div className="hero-wrapper">
        <div className="form-container">
            <form className="add-form"method="post" encType="multipart/form-data">
                <div className="form-fields-container">
            <div className="form-header-container">
                <h1 className="form-header">Legg til <u>din</u> plante!</h1>
            </div>
                    {/* Navn */}
                  <input
                    required
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
                  <div className="mobile-input-image-container">
                    {selectedFile === null ? <div className="input-image-container2">
                    <label for="file-upload" class="custom-file-upload">
                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 0.363632C6.34329 0.363632 0.534912 6.02472 0.534912 13C0.534912 19.9753 6.34329 25.6364 13.5 25.6364C20.6568 25.6364 26.4651 19.9753 26.4651 13C26.4651 6.02472 20.6568 0.363632 13.5 0.363632ZM19.9826 14.2636H14.7965V19.3182H12.2035V14.2636H7.01747V11.7364H12.2035V6.68181H14.7965V11.7364H19.9826V14.2636Z" fill="white"/>
                    </svg>
                    </label>
                    <input 
                        className="input-image-button" 
                        type="file" 
                        id="file-upload" 
                        name="uploaded_file" 
                        accept="image/png, image/jpeg, image/webp" 
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
                  <div className="form-button-container">
                  <Link onClick={handleSubmit} className="form-submit-button">
                      Legg til
                      </Link>
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
                    {selectedFile === null ? <div className="input-image-container2">
                    <label for="file-upload" class="custom-file-upload">
                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 0.363632C6.34329 0.363632 0.534912 6.02472 0.534912 13C0.534912 19.9753 6.34329 25.6364 13.5 25.6364C20.6568 25.6364 26.4651 19.9753 26.4651 13C26.4651 6.02472 20.6568 0.363632 13.5 0.363632ZM19.9826 14.2636H14.7965V19.3182H12.2035V14.2636H7.01747V11.7364H12.2035V6.68181H14.7965V11.7364H19.9826V14.2636Z" fill="white"/>
                    </svg>
                    </label>
                    <input 
                        className="input-image-button" 
                        type="file" 
                        id="file-upload" 
                        name="uploaded_file" 
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
        </div>

    );
}


export default Form;