import React from 'react';

export const Form = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submited');
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className='form-group'>
				<label htmlFor='firstName'>First Name</label>
				<input
					className='form-control'
					id='firstName'
					placeholder='First Name'
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='lastName'>Last Name</label>
				<input
					className='form-control'
					id='lastName'
					placeholder='Last Name'
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='exampleInputEmail1'>Email address</label>
				<input
					type='email'
					className='form-control'
					id='exampleInputEmail1'
					aria-describedby='emailHelp'
					placeholder='Enter email'
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
			<button type='submit' className='btn btn-primary'>
				Submit
			</button>
		</form>
	);
};
