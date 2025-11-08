import React, {FC} from 'react';
import {Button} from 'components';
import speakerImage from 'assets/images/speaker.webp';
import {Companies} from './Companies';
import styles from './Head.module.scss';

const Head: FC = () => {
	return (
		<section className={styles.sectionContainer}>
			<div className={styles.headWrapper}>
				<div className={styles.headLabel}>
					<h1>Navigating the digital landscape for success</h1>
					<p>
						Our digital marketing agency helps businesses grow and succeed
						online through a range of services including SEO, PPC, social media
						marketing, and content creation.
					</p>
					<Button
						color="primary"
						label="Book a consultation"
						onClick={() => console.log('asd')}
					/>
				</div>
				<img
					src={speakerImage}
					alt=""
				/>
			</div>
			<Companies />
		</section>
	);
};

export default Head;
