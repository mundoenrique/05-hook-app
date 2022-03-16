import { useEffect } from 'react';

export default function Message() {
	useEffect(() => {
		console.log('Componente montado');
		return () => {
			console.log('Componente desmontado');
		};
	}, []);

	return (
		<div>
			<h3>eres Genial</h3>
		</div>
	);
}
