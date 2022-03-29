import React from 'react';
import AnimalCard from './AnimalCard';



function AnimalContainer({animals}) {


    const showAnimals = animals.map((oneAnimal) => {
        return <AnimalCard key={oneAnimal.id} oneAnimal={oneAnimal} />
    })

    return (
        <div className='animal-container'>
            <div className='card-holder'>
                {showAnimals}
            </div>
        </div>
    )
}

export default AnimalContainer