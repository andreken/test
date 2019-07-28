import React from 'react';
// Enable fetch on browsers which don't support it natively
import 'whatwg-fetch';

import Sidenav from './Sidenav/Sidenav'
import Main from './Main/Main'

// shortcut icon
import '../img/paw.png'
import './global.scss'

class App extends React.Component {

	/*
		breeds: the object returned by the API containing all breeds
		srcImg: link to a random image of a dog
		breed: breed selected in the sidenav and showed in main component
		isSidenavOpen: true when sidenav is opened, false otherwise
	*/

	state = {
		breeds: {},
		scrImg: '',
		breed: '',
		isSidenavOpen: window.innerWidth > 600 ? true : false
	}

	// Load initial data from api
	componentDidMount(){
		const url = 'https://dog.ceo/api/breeds/list/all'
		fetch(url)
			.then(res => res.json())
			.then(res => {
				this.setState({ breeds: res.message })
			})
	}

	// Get a random image from the breed selected
	// on small devices, after selecting the breed i close the nav
	getRandomImage = async (path) => {
		const currentPath = `https://dog.ceo/api/breed${path}/images/random`
		let res = await fetch(currentPath)
		try { 
			res = await res.json() 
		} catch(e) { 
			res = {message: ''} 
		}
		let imageUrl = res.message
		this.setState({
			srcImg: imageUrl,
			breed: path.split('/').join(' '),
			isSidenavOpen: window.innerWidth > 600 ? true : false
		})
	}

	// Open the sidenav when hamburger icon is clicked
	// Close the sidenac when 'X' icon is clicked
	toggleSidenavVisibility = () => {
		this.setState(prevState => ({
			isSidenavOpen: !prevState.isSidenavOpen
		}))
	}

	render() {
		const { breeds, srcImg, breed, isSidenavOpen } = this.state;
		return (
			<>
				<Sidenav breeds={breeds} getRandomImage={this.getRandomImage} isSidenavOpen={isSidenavOpen} close={this.toggleSidenavVisibility} />
				<Main srcImg={srcImg} isSidenavOpen={isSidenavOpen} open={this.toggleSidenavVisibility} breed={breed} />
			</>
		)
	}
}

export default App;