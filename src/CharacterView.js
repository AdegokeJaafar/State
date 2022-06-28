/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';


const CharacterView = ({ match }) => {
    const [character, setCharacter] = useState({});

    useEffect(() => {     
        fetch(endpoint + '/characters' + match.params.id)
            .then(response => response.json())
            .then(response => setCharacter(response.character));

    }, [match.params.id]);

    console.log(character);

    return (
        <section className='CharacterView'>
            <h2>{character.name}</h2>
            <ul className='CharacterDetails'>
                <li>
                    <strong>Birth Year</strong>: {character.birthYear}
                </li>
                <li>
                    <strong>Eye Color</strong>: {character.eyeColor}
                </li>
                <li>
                    <strong>Hair Color</strong>: {character.hairColor}
                </li>
            </ul>
        </section>
    )
}
