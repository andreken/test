import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import BreedList from './BreedsList'
import './sidenav.scss';

const Sidenav = function(props){

	return (
		<div className={'sidenav ' + (props.isSidenavOpen ? '' : 'hideSidenav')}>
			<div className='header'>
				<span className='header__title'>Breeds list</span>
				<span className='header__icon' onClick={props.close}><FontAwesomeIcon icon={faTimes} /></span>
			</div>
			<BreedList breeds={props.breeds} getRandomImage={props.getRandomImage} />
		</div>
	)
}

export default Sidenav;
