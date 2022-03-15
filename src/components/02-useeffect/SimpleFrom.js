import React, { useEffect } from 'react';

export default function SimpleFrom() {
	useEffect(() => {
		console.log('hey');
	}, []);

	return (
		<>
			<h3>SimpleFrom</h3>
		</>
	);
}
