import React from 'react';
import claim from '../assets/images/luckytest-claim.png';
import button from '../assets/images/luckytest-button.png';
import { Logo } from './Logo';
import { useHistory } from 'react-router-dom';

export const HomePage = () => {
	const history = useHistory();
	const handleCLick = () => {
		history.push('/register');
	};
	return (
		<div className='homepage-container'>
			<Logo />
			<img src={claim} alt='claim' />
			<button type='button' onClick={handleCLick}>
				<img src={button} alt='play button'></img>
			</button>
		</div>
	);
};
