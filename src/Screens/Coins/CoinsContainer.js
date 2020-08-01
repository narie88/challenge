import React from 'react';
import CoinsPresenter from './CoinsPresenter';
import { getItem } from '../../api';

//상태값state를 가진 모든 리액트 컴포넌트

export default class extends React.Component {
	state = {
		coins: null,
		error: null,
		loading: true,
	};

	async componentDidMount() {
		try {
			const { data } = await getItem.coinsApi();

			this.setState({
				coins: data,
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
		const { coins, error, loading } = this.state;
		return <CoinsPresenter coins={coins} error={error} loading={loading} />;
	}
}
