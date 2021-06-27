import React from 'react';
import { Button } from './Button';
import { Logo } from './Logo';

export const ThankYouPage = () => {
	return (
		<div className='thanks-container container animate__animated animate__fadeIn'>
			<Logo />
			<div className='alert alert-success ' role='alert'>
				<h2>Your application has been registered, thank you for participating!</h2>
			</div>
			<Button path='home' message='Back to Home' buttonClass='warning' />
		</div>
	);
};
