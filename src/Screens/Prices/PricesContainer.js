import React from 'react';
import PricesPresenter from './PricesPresenter';
import { getItem } from '../../api';

//상태값state를 가진 모든 리액트 컴포넌트

export default class extends React.Component {
	state = {
		tickers: null,
		error: null,
		loading: true,
	};

	async componentDidMount() {
		try {
			const { data } = await getItem.tickersApi();

			this.setState({
				tickers: data,
			});
		} catch {
			this.setState({
				error: 'ERROR!',
			});
		} finally {
			this.setState({
				loading: false,
			});
		}
	}

	render() {
		const { tickers, error, loading } = this.state;

		return <PricesPresenter tickers={tickers} error={error} loading={loading} />;
	}
}
