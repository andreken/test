/*
	Used to show/hide the submenu of breeds
	props.icon1: icon used when submenu is hidden
	props.icon2: icon used when submenu is visible
	props.fnClick: function used to show/hide the submenu
*/

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconButton = function(props){

  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = (e) => {
    setIsOpen(!isOpen);
    props.fnClick(e)
  }

	return (
    <span onClick={toggleVisibility}><FontAwesomeIcon icon={isOpen ? props.icon2 : props.icon1} /></span>
	)
}

export default IconButton;