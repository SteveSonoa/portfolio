import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OptionPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: ''
		};
	}

	handleChange = e => {
		this.setState({
			filter: e.target.value
		});
	};

	handleSelectItem = e => {
		this.props.actionSelect(e.target.id);
	};

	handleUnselectItem = e => {
		this.props.actionUnselect(e.target.id);
	};

	filterOptions = () => {
		const newOptions = this.props.options.filter(option =>
			option.name.toLowerCase().includes(this.state.filter.toLowerCase())
		);
		return newOptions;
	};

	render() {
		let overflowIndicator;
		if (this.filterOptions().length + this.props.selectedOptions.length > 6) {
			overflowIndicator = {
				maxHeight: '200px',
				overflow: 'scroll',
				overflowX: 'hidden'
			};
		}

		const listOptions = (
			<ul>
				{this.filterOptions().map(option => (
					<li
						className="op-li"
						id={option.value}
						onClick={this.handleSelectItem}
						key={option.value}
					>
						{option.name}
					</li>
				))}
			</ul>
		);

		const listSelectedOptions = (
			<ul className="op-ul">
				{this.props.selectedOptions.map(option => (
					<li
						className="op-li checked"
						id={option.value}
						onClick={this.handleUnselectItem}
						key={option.value}
					>
						<i class="fas fa-check" onClick={this.handleSelectItem} id={option.value} />
						{option.name}
					</li>
				))}
			</ul>
		);

		return (
			<div className="op-container" style={overflowIndicator}>
				{listSelectedOptions}
				<input
					type="text"
					value={this.state.filter}
					onChange={this.handleChange}
					className="op-input"
				/>
				{listOptions}
			</div>
		);
	}
}

OptionPanel.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			value: PropTypes.string
		})
	),
	selectedOptions: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			value: PropTypes.string
		})
	),
	actionSelect: PropTypes.func.isRequired,
	actionUnselect: PropTypes.func.isRequired
};

OptionPanel.defaultProps = {
	options: [],
	selectedOptions: []
};

export default OptionPanel;
