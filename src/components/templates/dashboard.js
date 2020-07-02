import React, { Component, Fragment, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import constants from '../../config';
import Filters from '../organisms/filter';
import ResultList from '../organisms/resultList';
import Search from '../molecules/search';
import Pagination from '../organisms/pagination';

import { connect } from 'react-redux';
import { fetchData } from '../../actions/dashboard';

const Dashboard = (props) => {
	console.log('props', props);
	const [filters, setFilters] = useState([]);
	const [searchedValue, setsearchedValue] = useState();
	const [page, setPage] = useState(1);

	useEffect(() => {
		console.log('valled');
		props.fetchData();
	}, []);

	const renderListItems = () => {
		if (props.data && props.data.length) {
			return <ResultList resultItem={props.data} />;
		} else {
			return <p className='noresults'> No Results Found</p>;
		}
	};

	const _applyFilters = (event) => {
		let selectedFilters = filters;
		if (event.target.checked) {
			selectedFilters.push({ type: event.target.dataset.filtertype, value: event.target.value });
		} else {
			selectedFilters = selectedFilters.filter((item) => {
				return item.type !== event.target.dataset.filtertype && item.value !== event.target.value;
			});
		}
		setFilters(selectedFilters);
		//this.setState({ selectFilters: selectedFilters });
	};

	const search = (event) => {
		setsearchedValue({ searchValue: event.target.value });
	};

	return (
		<div className='container'>
			<div className='row'>
				{/* BEGIN SEARCH RESULT */}
				<div className='col-md-12'>
					<div className='grid search'>
						<div className='grid-body'>
							<div className='row'>
								{/* BEGIN FILTERS */}
								<Filters checkboxClick={_applyFilters} />
								{/* END FILTERS */}
								{/* BEGIN RESULT */}
								<div className='col-md-9 float-left'>
									<h2>
										<i className='fa fa-file-o'></i>
										{'Result'}
									</h2>
									<hr />
									{/* BEGIN SEARCH INPUT */}
									<Search searchClick={search} searchValue={searchedValue} />
									{/* END SEARCH INPUT */}
									<p>{''}</p>

									<div className='padding'></div>

									<div className='row'>
										{/* BEGIN ORDER RESULT */}
										<div className='col-sm-6'>
											<div className='btn-group dropdown'>
												<button
													type='button'
													className='btn btn-default dropdown-toggle'
													data-toggle='dropdown'>
													Order by
												</button>
												<ul className='dropdown-menu' role='menu'>
													<li>
														<a href='#'>Name</a>
													</li>
													<li>
														<a href='#'>Date</a>
													</li>
													<li>
														<a href='#'>View</a>
													</li>
													<li>
														<a href='#'>Rating</a>
													</li>
												</ul>
											</div>
										</div>
										{/* END ORDER RESULT */}
									</div>

									{/*  BEGIN TABLE RESULT */}
									{props.asyncInProgress ? (
										<div className='row align-items-center justify-content-center'>
											<div className='overlay'>
												<div className='spinnerWrapper'>
													<Spinner animation='border' role='status'>
														<span className='sr-only'>Loading...</span>
													</Spinner>
													<p>LOADING...</p>
												</div>
											</div>
										</div>
									) : null}
									{renderListItems()}

									{/* END TABLE RESULT */}
									{/* BEGIN PAGINATION */}
									{props.data.length ? (
										<Pagination
											count={props.info && props.info.count}
											totalPage={props.info && props.info.pages}
											page={page}
										/>
									) : null}

									{/*  END PAGINATION */}
								</div>
								{/* END RESULT */}
							</div>
						</div>
					</div>
				</div>
				{/* END SEARCH RESULT */}
			</div>
		</div>
	);
};

const mapStatetoProps = (state) => ({
	data: state.dashboard.data,
	info: state.dashboard.state,
	asyncInProgress: state.dashboard.asyncInProgress,
});

export default connect(mapStatetoProps, { fetchData })(Dashboard);
