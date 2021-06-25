import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
};

export const Form = () => {
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		return;
		history.push('/thanks');
	};

	const [formValues, setFormValues] = useForm(initialState);
	const { firstName, lastName, email } = formValues;
    
	return (
		<form onSubmit={handleSubmit}>
			<div className='form-group'>
				<label htmlFor='firstName'>First Name</label>
				<input
					className='form-control'
					id='firstName'
					placeholder='First Name'
					name='firstName'
					onChange={setFormValues}
					value={firstName}
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='lastName'>Last Name</label>
				<input
					className='form-control'
					id='lastName'
					name='lastName'
					placeholder='Last Name'
					onChange={setFormValues}
					value={lastName}
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='exampleInputEmail1'>Email address</label>
				<input
					type='email'
					className='form-control'
					id='exampleInputEmail1'
					name='email'
					aria-describedby='emailHelp'
					placeholder='Enter email'
					onChange={setFormValues}
					value={email}
					required
				/>
				<small id='emailHelp' className='form-text text-muted'>
					We'll never share your email with anyone else.
				</small>
			</div>

			<div className='form-check'>
				<input
					type='checkbox'
					className='form-check-input'
					id='exampleCheck1'
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
				/>
				<label className='form-check-label' htmlFor='exampleCheck2'>
					Optin NewsLetters
				</label>
			</div>
			<button type='submit' className='btn btn-warning'>
				Submit
			</button>
		</form>
	);
};
