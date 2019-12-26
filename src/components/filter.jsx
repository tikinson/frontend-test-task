import React from 'react';
import './filter.css';

const Filter = () => {
	return (
	<div className='filter'> 

		<div className='text'>
			количество пересадок
		</div>
		<div className='textAll'>
			все
		</div>
		<div className='textNoTrans'>
			без пересадок
		</div>
		<div className='textOneTrans'>
			1 пересадка
		</div>
		<div className='textTwoTrans'>
			2 пересадки
		</div>
		<div className='textThreeTrans'>
			3 пересадки
		</div>
    </div> 
	);
}

export default Filter;