//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import Section from '../Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
//Utils
import { v4 as uuid } from 'uuid';
//Styles
import './App.module.css';

export class App extends Component {
	static propTypes = {};

	state = {
		contacts: [],
		filter: '',
	};

	addContact = (name, number) => {
		const contact = {
			id: uuid(),
			name,
			number,
		};

		this.setState(prevState => {
			return {
				contacts: [...prevState.contacts, contact],
			};
		});
	};

	removeContact = contactId => {
		this.setState(prevState => {
			return {
				contacts: prevState.contacts.filter(({ id }) => id !== contactId),
			};
		});
	};

	handleChangeFilter = filter => {
		this.setState({ filter });
	};

	getVisibleContacts = () => {
		const { contacts, filter } = this.state;

		return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
	};

	render() {
		const { contacts, filter } = this.state;

		const visibleContact = this.getVisibleContacts();

		return (
			<>
				<Section title="Phonebook">
					<ContactForm onAddContact={this.addContact} />
				</Section>

				<Section title="Contacts">
					{contacts.length > 1 && (
						<Filter
							title="Find contacts by name"
							value={filter}
							onChangeFilter={this.handleChangeFilter}
						/>
					)}

					{contacts.length > 0 && (
						<ContactList contacts={visibleContact} onRemoveContact={this.removeContact} />
					)}
				</Section>
			</>
		);
	}
}

export default App;
