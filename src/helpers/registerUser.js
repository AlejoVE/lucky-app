export const registerUser = async (firstName, lastName, email, subscribe) => {
	try {
		const response = await fetch(process.env.REACT_APP_API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ firstName, lastName, email, subscribe }),
		});

		const data = await response.json();

		if (response.status !== 201) {
			return { ok: false, data };
		}

		return { ok: true };
	} catch (error) {
		console.log(error);
		return { ok: false };
	}
};
