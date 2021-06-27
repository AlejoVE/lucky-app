import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import ReactLoading from 'react-loading';
import { registerUser } from '../helpers/registerUser';
import { useForm } from '../hooks/useForm';

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
};

export const Form = () => {
	const history = useHistory();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [emailExists, setEmailExists] = useState(false);
	const [formValues, setFormValues] = useForm(initialState);
	const { firstName, lastName, email } = formValues;
	const [isSubscribe, setIsSubscribe] = useState(false);

	const handleSubscribe = ({ target }) => {
		setIsSubscribe(target.checked);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			firstName.trim() === '' ||
			lastName.trim() === '' ||
			email.trim() === ''
		) {
			Swal.fire({
				title: 'Error!',
				text: `Please fill up all the fields!`,
				icon: 'error',
				confirmButtonText: 'ok',
			});
			setError(true);
			setEmailExists(false);
			return;
		}

		setIsLoading(true);
		const { ok, data } = await registerUser(
			firstName,
			lastName,
			email,
			isSubscribe
		);

		if (!ok) {
			setIsLoading(false);
			setEmailExists(true);
			Swal.fire({
				title: 'Error!',
				text: `${data.msg}`,
				icon: 'error',
				confirmButtonText: 'ok',
			});
			return;
		}

		history.push('/thanks');
		return;
	};

	if (isLoading) {
		return (
			<div className='loading-container'>
				<ReactLoading
					className='loading-component'
					type='spinningBubbles'
					color='#282587'
					height='60%'
					width='20%'
				/>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className='form'>
			<div className='form-group'>
				<label htmlFor='firstName'>First Name*</label>
				<input
					className={
						error && firstName.trim() === ''
							? 'form-control error'
							: 'form-control'
					}
					id='firstName'
					placeholder='First Name'
					name='firstName'
					onChange={setFormValues}
					value={firstName}
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='lastName'>Last Name*</label>
				<input
					className={
						error && lastName.trim() === ''
							? 'form-control error'
							: 'form-control'
					}
					id='lastName'
					name='lastName'
					placeholder='Last Name'
					onChange={setFormValues}
					value={lastName}
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='exampleInputEmail1'>Email address*</label>
				<input
					type='email'
					className={emailExists ? 'form-control error' : 'form-control'}
					id='exampleInputEmail1'
					name='email'
					aria-describedby='emailHelp'
					placeholder='Enter email'
					onChange={setFormValues}
					value={email}
					required
				/>
				<small id='emailHelp' className='form-text'>
					We'll never share your email with anyone else.
				</small>
			</div>

			<div className='form-check'>
				<input
					type='checkbox'
					className='form-check-input'
					id='exampleCheck1'
					required
				/>
				<label className='form-check-label' htmlFor='exampleCheck1'>
					Optin TCs*
				</label>
			</div>
			<div className='form-check'>
				<input
					type='checkbox'
					className='form-check-input'
					id='exampleCheck2'
					onChange={handleSubscribe}
				/>
				<label className='form-check-label' htmlFor='exampleCheck2'>
					Optin NewsLetters
				</label>
			</div>
			<button type='submit' className='btn btn-warning button-yellow button'>
				Submit
			</button>
			<h6>Mandatory*</h6>
		</form>
	);
};
