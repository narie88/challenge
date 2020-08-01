import React from 'react';
import ExchangesPresenter from './ExchangesPresenter';
import { getItem } from '../../api';

//상태값state를 가진 모든 리액트 컴포넌트

export default class extends React.Component {
	state = {
		data: null,
		error: null,
		loading: true,
	};

	async componentDidMount() {
		try {
			const { data } = await getItem.exchangesApi();
			// console.log(data);
			this.setState({
				data,
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
		const { data, error, loading } = this.state;
		return <ExchangesPresenter data={data} error={error} loading={loading} />;
	}
}
