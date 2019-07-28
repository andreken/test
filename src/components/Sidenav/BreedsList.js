import React from 'react';

import BreedItem from './BreedItem'

const BreedList = function(props){

	// Create the list of breeds, given by the api call
	let mainBreeds = [];
	for (const [key, value] of Object.entries(props.breeds)) {
	  mainBreeds.push(<BreedItem key={key} mainBreed={key} subBreeds={value} path={''} getRandomImage={props.getRandomImage} />)
	}	

	return (
		<nav className='list-group'>
			{mainBreeds}
		</nav>
	)
}

export default BreedList;