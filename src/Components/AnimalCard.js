import React from 'react';

function AnimalCard({oneAnimal}) {

    return (
        <div>
            <div className="card">
                <img src={oneAnimal.image} alt={oneAnimal.name}></img>
                <h2>Name: {oneAnimal.animal_name}</h2>
                <h2>Type: {oneAnimal.animal_type}</h2>
                <h2>Breed: {oneAnimal.breed}</h2>
                <h2>Age: {oneAnimal.age}</h2>
            </div>
        </div>
    )
}

export default AnimalCard
