import React from 'react';
import {Footer, Head, Header, Services} from 'components';
import styles from './App.module.scss';

const App = () => {
	return (
		<>
			<Header />
			<main className={styles.sectionsWrapper}>
				<Head />
				<Services />
			</main>
			<Footer />
		</>
	);
};

export default App;
