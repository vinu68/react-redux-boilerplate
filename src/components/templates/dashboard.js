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
	const [filters, setFilters] = useState([]);
	const [filterCounter, setFilterCount] = useState(0);
	const [searchedValue, setsearchedValue] = useState();
	const [page, setPage] = useState(1);

	useEffect(() => {
		props.fetchData();
	}, []);

	useEffect(() => {
		let queryString = filters
			.map((data) => {
				return data.type + '=' + data.value;
			})
			.join('&');
		props.fetchData(page, queryString, searchedValue);
	}, [filterCounter]);

	const renderListItems = () => {
		if (props.data && props.data.length) {
			return <ResultList resultItem={props.data} />;
		} else {
			return <p className='noresults'> No Results Found</p>;
		}
	};

	const getNextPageRecords = (event) => {
		let nextPage = event.target.dataset.page;
		setPage(nextPage);
		let queryString =
			filters.length &&
			filters
				.map((data) => {
					return data.type + '=' + data.value;
				})
				.join('&');
		props.fetchData(nextPage, queryString, searchedValue);
	};

	const _applyFilters = (event) => {
		let selectedFilters = filters;
		let counter = filterCounter;
		if (event.target.checked) {
			let typeIndex =
				selectedFilters &&
				selectedFilters.findIndex(
					(data) => data.type.toLowerCase() === event.target.dataset.filtertype.toLowerCase()
				);
			if (typeIndex >= 0) {
				selectedFilters[typeIndex] = {
					...selectedFilters[typeIndex],
					...{ type: event.target.dataset.filtertype, value: event.target.value },
				};
			} else {
				selectedFilters = [
					...selectedFilters,
					{ type: event.target.dataset.filtertype, value: event.target.value },
				];
			}

			//selectedFilters.push({ type: event.target.dataset.filtertype, value: event.target.value });
			++counter;
		} else {
			selectedFilters = selectedFilters.filter((item) => {
				return item.type !== event.target.dataset.filtertype && item.value !== event.target.value;
			});
			--counter;
		}
		setFilters(selectedFilters);
		setFilterCount(counter);
	};

	const search = (event) => {
		let queryString =
			filters.length &&
			filters
				.map((data) => {
					return data.type + '=' + data.value;
				})
				.join('&');
		props.fetchData(page, queryString, searchedValue);
	};

	const onInputChange = (event) => {
		let searchData = event.target.value;
		setsearchedValue(searchData);
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
								<Filters checkboxClick={_applyFilters} selectedFilters={filters} />
								{/* END FILTERS */}
								{/* BEGIN RESULT */}
								<div className='col-md-9 float-left'>
									<h2>
										<i className='fa fa-file-o'></i>
										{'Result'}
									</h2>
									<hr />
									{/* BEGIN SEARCH INPUT */}
									<Search searchClick={search} searchValue={searchedValue} onChange={onInputChange} />
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
											pageClick={getNextPageRecords}
										/>
									) : null}
									{/* pageClick={this._getNextPageRecords}*/}
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
	info: state.dashboard.info,
	asyncInProgress: state.dashboard.asyncInProgress,
});

export default connect(mapStatetoProps, { fetchData })(Dashboard);
