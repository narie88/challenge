import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PricesPresenter = ({ tickers, error, loading }) =>
	loading ? (
		<span>Loading...</span>
	) : (
		<Fragment>
			{tickers && tickers.length > 0 && (
				<Fragment>
					{tickers.map((ticker, index) => (
						<div key={index}>
							<span>{ticker.name} /</span>
							<span>{ticker.symbol} :</span>
							<span>${ticker.quotes.USD.price}</span>
						</div>
					))}
				</Fragment>
			)}
		</Fragment>
	);

PricesPresenter.propTypes = {
	tickers: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			symbol: PropTypes.string.isRequired,
			//price ....?
		})
	),
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired,
};

export default PricesPresenter;
