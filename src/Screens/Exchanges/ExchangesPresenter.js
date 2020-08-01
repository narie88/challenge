import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ExchangeItem from './ExchangeItem';

const ExchangesPresenter = ({ data, error, loading }) =>
	loading ? (
		<span>Loading...</span>
	) : (
		<Fragment>
			{data && data.length > 0 && (
				<Fragment>
					{data.map((item, index) => (
						<div key={index}>
							<ExchangeItem
								name={item.name}
								description={item.description}
								isWebsite={item.website_status}
								website={item.website_status && item.links.website}
							/>
						</div>
					))}
				</Fragment>
			)}
		</Fragment>
	);

ExchangesPresenter.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			description: PropTypes.string,
			links: PropTypes.objectOf(
				PropTypes.shape({
					website: PropTypes.array,
				})
			),
		})
	),
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired,
};

export default ExchangesPresenter;
