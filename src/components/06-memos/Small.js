import { memo } from 'react';

export default memo(function Small({ value }) {
	console.log('hjkhkhkhkh');
	return <small>{value}</small>;
});
