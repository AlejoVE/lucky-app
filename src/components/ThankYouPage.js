import React from 'react';
import { Logo } from './Logo';

export const ThankYouPage = () => {
	return (
		<div>
			<Logo />
			<h2>Thank you for your participation!</h2>
			<button type='button' className='btn btn-warning'>
				Back to Home
			</button>
		</div>
	);
};
