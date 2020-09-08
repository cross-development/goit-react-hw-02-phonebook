//Core
import React, { Component } from 'react';
//Components
import Filter from '../Filter';
import Section from '../Section';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
//Utils
import { v4 as uuid } from 'uuid';

export class App extends Component {
	state = {
		contacts: [],
		filter: '',
	};

	addContact = (name, number) => {
		const { contacts } = this.state;

		const isContactExists = contacts.find(
			contact => contact.name.toLowerCase() === name.toLowerCase(),
		);

		if (isContactExists) {
			return alert(`${name} is already in contacts`);
		}

		const contact = {
			id: uuid(),
			name,
			number,
		};

		this.setState(prevState => ({ contacts: [...prevState.contacts, contact] }));
	};

	getVisibleContacts = () => {
		const { contacts, filter } = this.state;

		return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
	};

	removeContact = contactId => {
		this.setState(({ contacts }) => ({
			contacts: contacts.filter(({ id }) => id !== contactId),
		}));
	};

	handleChangeFilter = filter => this.setState({ filter });

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
							value={filter}
							title="Find contacts by name"
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
