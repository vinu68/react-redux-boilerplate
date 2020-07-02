import React from 'react';

const Card = (props) => {
	return (
		<div className='card'>
			<img className='card-img-top img-fluid' src={props.data.image} alt='Card image cap' width='400' />
			<div className='card-body'>
				<h4 className='card-title'>{props.data.name}</h4>
				<p className='card-text'>{props.data.species}</p>
			</div>
		</div>
	);
};

export default Card;
