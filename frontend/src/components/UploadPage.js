import React, { useState } from 'react';
import axios from 'axios';

function UploadPage() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data for the pet
    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('description', description);
    formData.append('file', file);

    try {
      // Send POST request to the backend to upload pet details
      await axios.post('http://localhost:5000/api/pets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Pet uploaded successfully!');
    } catch (error) {
      console.error('Error uploading pet', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pet Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <textarea
        placeholder="Pet Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <button type="submit">Upload Pet</button>
    </form>
  );
}

export default UploadPage;
