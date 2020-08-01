import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;
const Title = styled.span``;
const Grid = styled.div``;

const Section = ({ name, children }) => (
	<Container>
		<Title>{name}</Title>
		<Grid>{children}</Grid>
	</Container>
);

Section.PropTypes = {
	name: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([React.PropTypes.arrayOf(React.PropTypes.node), React.PropTypes.node]),
};

export default Section;
