import React from 'react';

export const Form = () => {
	return (
		<form>
			<div class='form-group'>
				<label for='firstName'>First Name</label>
				<input
					class='form-control'
					id='firstName'
					placeholder='First Name'
				/>
			</div>
			<div class='form-group'>
				<label for='lastName'>Last Name</label>
				<input class='form-control' id='lastName' placeholder='Last Name' />
			</div>
			<div class='form-group'>
				<label for='exampleInputEmail1'>Email address</label>
				<input
					type='email'
					class='form-control'
					id='exampleInputEmail1'
					aria-describedby='emailHelp'
					placeholder='Enter email'
				/>
				<small id='emailHelp' class='form-text text-muted'>
					We'll never share your email with anyone else.
				</small>
			</div>

			<div class='form-check'>
				<input
					type='checkbox'
					class='form-check-input'
					id='exampleCheck1'
				/>
				<label class='form-check-label' for='exampleCheck1'>
					Optin TCs*
				</label>
			</div>
			<div class='form-check'>
				<input
					type='checkbox'
					class='form-check-input'
					id='exampleCheck2'
				/>
				<label class='form-check-label' for='exampleCheck2'>
					Optin NewsLetters
				</label>
			</div>
			<button type='submit' class='btn btn-primary'>
				Submit
			</button>
		</form>
	);
};
