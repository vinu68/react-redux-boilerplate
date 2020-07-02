import React, { Fragment } from 'react';
import constants from '../../config';
//import { Col, Form } from 'react-bootstrap';

const Filter = (props) => {
	return (
		<div className='col-md-3 float-left'>
			<h2 className='grid-title'>
				<i className='fa fa-filter'></i>Filters
			</h2>
			<hr />
			{Object.keys(constants.FILTERS).map((filterHeading, filterHeadingIndex) => {
				return (
					<Fragment key={filterHeadingIndex}>
						<h4>{filterHeading}</h4>
						{constants.FILTERS[filterHeading].map((data, index) => {
							return (
								<div className='checkbox' key={index}>
									<label>
										<input
											type='radio'
											className='icheck'
											value={data.value}
											data-filtertype={filterHeading.toLowerCase()}
											checked={
												(props.selectedFilters.length &&
													props.selectedFilters.some(
														(el) =>
															el.type.toLowerCase() === filterHeading.toLowerCase() &&
															el.value.toLowerCase() === data.value.toLowerCase()
													)) ||
												(!props.selectedFilters.length && data.label === 'All')
											}
											onChange={props.checkboxClick}
										/>
										{data.label}
									</label>
								</div>
							);
						})}
						<div className='padding'></div>
					</Fragment>
				);
			})}
		</div>
	);
};

export default Filter;
