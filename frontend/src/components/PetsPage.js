import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PetsPage() {
  const [pets, setPets] = useState([]);
  const [sortOrder, setSortOrder] = useState('name'); // Default sorting by name

  // Fetch pets from the database on component mount
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pets'); // Replace with your API endpoint
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching pets', error);
      }
    };
    fetchPets();
  }, []);

  // Sort pets by name (A-Z) or by age
  const sortPets = (a, b) => {
    if (sortOrder === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === 'age') {
      return a.age - b.age;
    }
  };

  return (
    <div>
      <h1>Pets Available for Adoption</h1>
      <div>
        <label>Sort by: </label>
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="name">Name (A-Z)</option>
          <option value="age">Age</option>
        </select>
      </div>
      <ul>
        {pets.sort(sortPets).map((pet) => (
          <li key={pet._id}>
            <h2>{pet.name}</h2>
            <p>Age: {pet.age}</p>
            <p>{pet.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PetsPage;
