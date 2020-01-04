import React from 'react';
import './filter.css';

const Filter = () => {
    return (
    <div className='filter'> 
    	
    	<div className='header'>количество пересадок </div>

		<div className='container'>    
		<div className='checkbox'></div>
		<div className='text'>Все </div>
		</div>

		<div className='container'>    
		<div className='checkbox'></div>
		<div className='text'>Без пересадок </div>
		</div>

		<div className='container'>    
		<div className='checkbox'></div>
		<div className='text'>1 пересадка </div>
		</div>

		<div className='container'>    
		<div className='checkbox'></div>
		<div className='text'>2 пересадки </div>
		</div>

		<div className='container'>    
		<div className='checkbox'></div>
		<div className='text'>3 пересадки </div>
		</div>

		
    </div>
    );
}

export default Filter;