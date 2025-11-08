import React, {FC} from 'react';
import {SectionHeadingProps} from './type';
import styles from './SectionHeading.module.scss';

const SectionHeading: FC<SectionHeadingProps> = ({heading, subheading}) => {
	return (
		<div className={styles.headingContainer}>
			<div className={styles.headingWrapper}>
				<h2>{heading}</h2>
			</div>
			<h4>{subheading}</h4>
		</div>
	);
};

export default SectionHeading;
