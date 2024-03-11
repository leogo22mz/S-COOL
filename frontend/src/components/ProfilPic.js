import React, { useState } from 'react';

import './ProfilPic.css';
import IconCamera from './IconCamera';
   
function ProfilPic() { 
    const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
        const selectedImage = event.target.files[0];  
        setImage(URL.createObjectURL(selectedImage));
    };

    return (
        <div className="image-upload">
            <label htmlFor="image" className="image-label">
                {image ? <img src={image} alt="Preview" /> : <div className="circle"> <IconCamera /> </div>}
            </label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} style={{display: 'none'}} />
        </div>
    );
}

export default ProfilPic;
