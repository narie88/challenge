import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ExchangeItem from './ExchangeItem';

const ExchangesPresenter = ({ exchanges, error, loading }) =>
	loading ? (
		<span>Loading...</span>
	) : (
		<Fragment>
			{exchanges && exchanges.length > 0 && (
				<Fragment>
					{exchanges.map((exchange, index) => (
						<div key={index}>
							<ExchangeItem
								name={exchange.name}
								description={exchange.description}
								isWebsite={exchange.website_status}
								website={exchange.website_status && exchange.links.website}
							/>
						</div>
					))}
				</Fragment>
			)}
		</Fragment>
	);

ExchangesPresenter.propTypes = {
	exchanges: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			description: PropTypes.string,
			// links: PropTypes.objectOf(
			// 	PropTypes.shape({
			// 		website: PropTypes.string,
			// 	})
			// ),
		})
	),
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired,
};

export default ExchangesPresenter;
