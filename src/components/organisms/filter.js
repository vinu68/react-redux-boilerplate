import React, { Fragment } from 'react';
import constants from '../../config';
//import { Col, Form } from 'react-bootstrap';

const Filter = (props) => {
	console.log('filters props', props);
	return (
		<div className='col-md-3 float-left'>
			<h2 className='grid-title'>
				<i className='fa fa-filter'></i>Filters
			</h2>
			<hr />
			{Object.keys(constants.FILTERS).map((filterHeading, filterHeadingIndex) => {
				return (
					<>
						<h4>{filterHeading}</h4>
						{constants.FILTERS[filterHeading].map((data, index) => {
							return (
								<div className='checkbox' key={index}>
									<label>
										<input
											type='checkbox'
											className='icheck'
											value={data.value}
											data-filtertype={filterHeading.toLowerCase()}
											onClick={props.checkboxClick}
										/>
										{data.label}
									</label>
								</div>
							);
						})}
						<div className='padding'></div>
					</>
				);
			})}
		</div>
	);
};

export default Filter;
