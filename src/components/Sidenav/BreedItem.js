import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import IconButton from './IconButton'

const BreedItem = function(props){

	// Concatenate breeds selected to have the right path
	const path = props.path + '/' + props.mainBreed

	// Create the list of children to render
	// If the actual node has no children it will render only the actual 'node' in the tree of breeds
	const breedsList = props.subBreeds.map(subBreed => (
  	<BreedItem key={subBreed} mainBreed={subBreed} subBreeds={[]} path={path} getRandomImage={props.getRandomImage} />
	))

	// When clicking the icon, show/hide the submenu
	const toggleVisibility = (e) => {
		e.target.closest("li").lastElementChild.classList.toggle('visible')
	}

	return (
		<li>
			<a href="#" onClick={() => props.getRandomImage(path)}>{props.mainBreed}</a>
			{ /* If the actual node has no children it will render only the actual node in the tree of breeds*/ }
			{ breedsList.length > 0 ? 
				<>
					<IconButton icon1={faChevronRight} icon2={faChevronDown} fnClick={toggleVisibility} />
					<ul className='sub-menu'>{breedsList}</ul>
				</> : null 
			}
		</li>
	)
}

export default BreedItem;