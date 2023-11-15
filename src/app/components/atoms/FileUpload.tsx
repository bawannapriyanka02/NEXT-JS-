// components/FileUpload.tsx

import React, { useState, ChangeEvent } from 'react';

const FileUpload: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file && file.type.startsWith('image/')) {
            // Check if the selected file is an image
            setSelectedFile(file);

            // Use FileReader to read and display the image
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            // Reset selected file and preview if it's not an image
            setSelectedFile(null);
            setPreviewImage(null);
            console.log('Please select a valid image file.');
        }
    };

    const handleUpload = () => {
        // Handle the file upload logic here
        if (selectedFile) {
            console.log('Uploading image:', selectedFile);
            // You can send the image to a server or perform any other logic here
        } else {
            console.log('No image selected.');
        }
    };

    return (
        <div>

            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>

            {previewImage && (
                <div>
                    <p>Selected Image:</p>
                    <img src={previewImage} alt="Selected" style={{ maxWidth: '100%' }} />
                </div>
            )}
        </div>
    );
};

export default FileUpload;
