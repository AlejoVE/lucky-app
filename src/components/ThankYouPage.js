import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from './Button';
import { Logo } from './Logo';

export const ThankYouPage = () => {
	return (
		<div>
			<Logo />
			<h2>Thank you for your participation!</h2>
			<Button path='home' message='Back to Home' buttonClass='warning' />
		</div>
	);
};
