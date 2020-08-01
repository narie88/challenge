import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Name = styled.strong`
	display: block;
	font-weight: bold;
	font-size: 15px;
`;
const Descript = styled.p`
	width: 400px;
	text-overflow: ellipsis;
	overflow: hidden;
	margin-top: 10px;
	margin-bottom: 10px;
	white-space: nowrap;
`;
const Linker = styled.a`
	display: block;
	margin-bottom: 20px;
	color: blue;
	text-decoration: underline;
`;

const ExchageItem = ({ name, description, isWebsite, website }) => (
	<Fragment>
		<Name>{name}</Name>
		{/* <Descript> {description.slice(0, 20)} </Descript> */}
		<Descript> {description} </Descript>
		{isWebsite && (
			<Linker href={website} target="_blank">
				{website}
			</Linker>
		)}
	</Fragment>
);

ExchageItem.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string,
	website: PropTypes.string,
	isWebsite: PropTypes.bool.isRequired,
};

export default ExchageItem;
