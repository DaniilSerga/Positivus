import React, {FC} from 'react';
import {ButtonProps} from './type';
import styles from './Button.module.scss';

const Button: FC<ButtonProps> = ({color, label, onClick}) => {
	return (
		<button
			onClick={onClick}
			className={color === 'primary' ? styles.primary : styles.secondary}
		>
			{label}
		</button>
	);
};

export default Button;
