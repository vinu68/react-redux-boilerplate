import React from 'react';
import Cards from '../molecules/cards';

const ResultList = (props) => {
	return (
		<div className='row mb-2'>
			{props.resultItem.map((data, index) => {
				return (
					<div className='col-sm-6 col-md-4 col-lg-4 mt-4' key={index}>
						<Cards data={data} />
					</div>
				);
			})}
		</div>
	);
};

export default ResultList;
