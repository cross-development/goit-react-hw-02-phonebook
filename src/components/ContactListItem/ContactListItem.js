//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onRemove }) => {
	return (
		<li>
			<p className={styles.contact}>
				{name}: {number}
			</p>
			<div className={styles.contactAction}>
				<button type="button" className={styles.contactListButton} onClick={onRemove}>
					Delete
				</button>
			</div>
		</li>
	);
};

ContactListItem.propTypes = {};

export default ContactListItem;
