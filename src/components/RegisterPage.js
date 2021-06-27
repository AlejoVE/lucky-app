import React from 'react';
import { Form } from './Form';
import { Logo } from './Logo';

export const RegisterPage = () => {
	return (
		<div className='register-container animate__animated animate__fadeIn'>
			<Logo />
			<Form />
		</div>
	);
};
