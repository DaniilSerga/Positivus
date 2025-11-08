import React, {FC} from 'react'
import styles from './Header.module.scss'
import {ReactComponent as Logo} from 'assets/icons/logo.svg'

const Header: FC = () => {
    return (
        <header className={styles.headerContainer}>
            <Logo />
            <nav className={styles.navigationBar}>
                <li>
                    <a href="#about-us" className={styles.link}>
                        About us
                    </a>
                </li>
                <li>
                    <a href="#services" className={styles.link}>
                        Services
                    </a>
                </li>
                <li>
                    <a href="#use-cases" className={styles.link}>
                        Use Cases
                    </a>
                </li>
                <li>
                    <a href="#pricing" className={styles.link}>
                        Pricing
                    </a>
                </li>
                <li>
                    <a href="#blog" className={styles.link}>
                        Blog
                    </a>
                </li>
                <li>
                    <button className={styles.requestQuoteButton}>
                        Request a quote
                    </button>
                </li>
            </nav>
        </header>
    )
}

export default Header
