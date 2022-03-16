import { memo } from 'react';

export default memo(function Small({ value }) {
	return <small>{value}</small>;
});
