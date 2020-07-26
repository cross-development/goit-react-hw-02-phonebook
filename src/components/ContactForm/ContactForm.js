//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './ContactForm.module.css';

export class ContactForm extends Component {
	static propTypes = {
		onAddContact: PropTypes.func.isRequired,
	};

	state = {
		name: '',
		number: '',
	};

	handleChange = e => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();

		this.props.onAddContact(this.state.name, this.state.number);
		this.setState({ name: '', number: '' });
	};

	render() {
		const { name, number } = this.state;

		return (
			<form className={styles.form} onSubmit={this.handleSubmit}>
				<label>
					Name
					<input
						className={styles.input}
						type="text"
						name="name"
						autoComplete="off"
						value={name}
						onChange={this.handleChange}
					/>
				</label>

				<label>
					Number
					<input
						className={styles.input}
						type="text"
						name="number"
						autoComplete="off"
						value={number}
						onChange={this.handleChange}
					/>
				</label>

				<button className={styles.button} type="submit">
					Add contact
				</button>
			</form>
		);
	}
}

export default ContactForm;
