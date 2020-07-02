import React from 'react';

const Search = (props) => {
	return (
		<div className='input-group'>
			<input type='text' className='form-control' value={props.searchValue ? props.searchValue : ''} />
			<span className='input-group-btn'>
				<button className='btn btn-primary' type='button' onClick={props.searchClick}>
					<i className='fa fa-search'></i>
				</button>
			</span>
		</div>
	);
};
export default Search;
