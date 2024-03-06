import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Image.css';

function Image() {
    const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(URL.createObjectURL(selectedImage));
    };

    return (
        <div className="image-upload">
            <label htmlFor="image" className="image-label">
                {image ? <img src={image} alt="Preview" /> : <div className="circle"><FontAwesomeIcon icon={faPlus} size="3x" color="#555" /></div>}
                {/*  "+"will be display if there is no selected img */}
            </label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} style={{display: 'none'}} />
        </div>
    );
}

export default Image;
