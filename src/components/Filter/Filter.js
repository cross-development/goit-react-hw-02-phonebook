//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Filter.module.css';

const Filter = ({ title, value, onChangeFilter }) => {
	return (
		<div>
			<label>
				{title}
				<input
					className={styles.phonebookInput}
					type="text"
					value={value}
					onChange={e => onChangeFilter(e.target.value)}
				/>
			</label>
		</div>
	);
};

Filter.defaultProps = {
	title: '',
};

Filter.propTypes = {};

export default Filter;
