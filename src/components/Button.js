import React from 'react';
import { useHistory } from 'react-router-dom';

export const Button = ({ path, message, buttonClass }) => {
	const history = useHistory();

	const handleCLick = () => {
		history.push(`/${path}`);
	};
	return (
		<button className={`btn btn-${buttonClass}`} onClick={handleCLick}>
			{message}
		</button>
	);
};
