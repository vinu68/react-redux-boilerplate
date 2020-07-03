import React from 'react';
import styled from 'styled-components';

const CardTitle = styled.h4`
	margin-bottom: 0.75rem;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	font-weight: bold;
	color: black;
	max-width: 150px;
`;
const CardText = styled.div`
	margin-bottom: 5px;
	display: block;
`;
const CardTextBold = styled.span`
	margin-right: 5px;
	font-weight: bold;
`;
const Inner = styled.div`
	overflow: hidden;
	img {
		-webkit-transition: all 1.5s ease;
		-moz-transition: all 1.5s ease;
		transition: all 1.5s ease;
	}
	&:hover img {
		transform: scale(1.5);
	}
`;

const Card = (props) => {
	return (
		<div className='card'>
			<Inner>
				<img className='card-img-top img-fluid' src={props.data.image} alt='Card image cap' width='400' />
			</Inner>
			<div className='card-body'>
				<CardTitle>{props.data.name}</CardTitle>
				<CardText>
					<CardTextBold>Species</CardTextBold>
					<span>{props.data.species}</span>
				</CardText>
				<CardText>
					<CardTextBold>Status</CardTextBold>
					<span>{props.data.status}</span>
				</CardText>
				<CardText>
					<CardTextBold>Gender</CardTextBold>
					<span>{props.data.gender}</span>
				</CardText>
			</div>
		</div>
	);
};

export default Card;
