import { useEffect, useState } from 'react';

export default function Message() {
	const [coorsd, setCoorsd] = useState({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		console.log('componente montado');
		const mouseMove = (e) => {
			const coors = { x: e.y, y: e.y };
			console.log(coors);
			setCoorsd({
				x: e.x,
				y: e.y,
			});
		};

		window.addEventListener('mousemove', mouseMove);

		return () => {
			console.log('componente desmontado');
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);

	return (
		<div>
			<h3>Coordenas del mouse</h3>
			<pre>{JSON.stringify(coorsd)}</pre>
		</div>
	);
}
