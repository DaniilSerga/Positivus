import React, {FC} from 'react';
import {COMPANIES} from './data';
import styles from './Companies.module.scss';

const Companies: FC = () => {
	return (
		<ul className={styles.companiesList}>
			{COMPANIES.map(({id, Logo}) => (
				<li key={id}>
					<Logo />
				</li>
			))}
		</ul>
	);
};

export default Companies;
