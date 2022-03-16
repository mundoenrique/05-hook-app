import { useCounter } from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

export default function MultipleCustomHooks() {
	const { counter, increment } = useCounter(1);
	const { loading, data } = useFetch(
		`https://breakingbadapi.com/api/quotes/${counter}`
	);
	const { author, quote } = !!data && data[0];

	return (
		<>
			<h3>Custom hooks</h3>
			<h4>Custom hooks</h4>
			<br />
			{loading ? (
				<div className="alert alert-info text-center">loading...</div>
			) : (
				<blockquote className="blockquote text-end">
					<p className="mb-2">{quote}</p>
					<footer className="blockquote-footer">{author}</footer>
				</blockquote>
			)}
			<button className="btn btn-outline-primary" onClick={() => increment()}>
				Siguiente frase
			</button>
		</>
	);
}
