import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Rank = styled.span`
	font-weight: bold;
`;
const CoinsPresenter = ({ coins, error, loading }) =>
	loading ? (
		<span>Loading...</span>
	) : (
		<Fragment>
			{coins && coins.length > 0 && (
				<Fragment>
					{coins.map((coin, index) => (
						<div key={index}>
							<Rank>#{coin.rank} </Rank>
							{coin.name} / {coin.symbol}
						</div>
					))}
				</Fragment>
			)}
		</Fragment>
	);

CoinsPresenter.propTypes = {
	exchanges: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			symbol: PropTypes.string.isRequired,
			rank: PropTypes.number.isRequired,
		})
	),
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired,
};

export default CoinsPresenter;
