import React from 'react';
import ExchangesPresenter from './ExchangesPresenter';
import { getItem } from '../../api';

//상태값state를 가진 모든 리액트 컴포넌트

export default class extends React.Component {
	state = {
		data: null,
		name: null,
		decription: null,
		website: null,
		error: null,
		loading: true,
	};
	async componentDidMount() {
		try {
			const { data } = await getItem.exchangesApi();

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
		const { data, name, description, website, error, loading } = this.state;
		return (
			<ExchangesPresenter
				data={data}
				description={description}
				name={name}
				website={website}
				error={error}
				loading={loading}
			/>
		);
	}
}
