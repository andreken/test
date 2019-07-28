import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './main.scss';

const Main = function(props){

	// if sidenav is opened move the content to the right, making it visible
	var mainStyle = {
	  marginLeft: props.isSidenavOpen ? '30rem' : '0',
	};

	return (
		<div className='main' style={mainStyle} >
			<div className='header'>
				<span className='header__icon' style={{ display: props.isSidenavOpen ? 'none' : 'block' }} onClick={props.open}><FontAwesomeIcon icon={faBars} /></span>
				<span className='header__title'>Random dog image</span>
			</div>
			<div className='body'>
				<img className='body__img' src={props.srcImg}></img> 
				<div className='body__caption'>{props.breed}</div>
			</div>
		</div>
	)
}

export default Main;