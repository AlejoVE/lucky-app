import React from 'react';
import claim from '../assets/images/luckytest-claim.png';
import button from '../assets/images/luckytest-button.png';
import { Logo } from './Logo';

export const HomePage = () => {
	const handleCLick = () => {
		console.log('click');
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
