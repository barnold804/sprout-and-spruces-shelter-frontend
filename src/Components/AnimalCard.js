import React from 'react';
import Comments from './Comments'


function AnimalCard({oneAnimal}) {

    return (
        <div>
            <div className="card">
                <img src={oneAnimal.image} alt={oneAnimal.name}></img>
                <h2>Name: {oneAnimal.animal_name}</h2>
                <h2>Breed: {oneAnimal.breed}</h2>
                <h3>Age: {oneAnimal.age}</h3>
            </div>
                <Comments />
        </div>
    )
}

export default AnimalCard
