import React, { memo } from 'react';

export default memo(function ShowIncrement({ incremement }) {
	console.log('aquí vamos');
	return (
		<button
			className="btn btn-primary"
			onClick={() => {
				incremement(5);
			}}
		>
			incrementar
		</button>
	);
});
