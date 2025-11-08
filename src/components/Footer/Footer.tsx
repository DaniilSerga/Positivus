import React, {FC} from 'react'
import {ReactComponent as Logo} from 'assets/icons/logo.svg'
import {ReactComponent as LinkedInIcon} from 'assets/icons/linkedIn.svg'
import {ReactComponent as FacebookIcon} from 'assets/icons/facebook.svg'
import {ReactComponent as TwitterIcon} from 'assets/icons/twitter.svg'
import styles from './Footer.module.scss'

const Footer: FC = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
                <div className={styles.heading}>
                    <Logo />
                    <ul className={styles.linksContainer}>
                        <li>
                            <a href="#about-us">About Us</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#use-cases">Use Cases</a>
                        </li>
                        <li>
                            <a href="#pricing">Pricing</a>
                        </li>
                        <li>
                            <a href="#blog">Blog</a>
                        </li>
                    </ul>
                    <ul className={styles.networksContainer}>
                        <li>
                            <LinkedInIcon />
                        </li>
                        <li>
                            <FacebookIcon />
                        </li>
                        <li>
                            <TwitterIcon />
                        </li>
                    </ul>
                </div>
                <div className={styles.contactInfoContainer}>
                    <div className={styles.contactUsContainer}>
                        <div className={styles.contactUsLabelWrapper}>
                            <h4>Contact us:</h4>
                        </div>
                        <div className={styles.contactsList}>
                            <p>
                                Email:&nbsp;
                                <a href="mailto:info@positivus.com">
                                    info@positivus.com
                                </a>
                            </p>
                            <p>
                                Phone:&nbsp;
                                <a href="tel:555-567-8901">555-567-8901</a>
                            </p>
                            <p>
                                Address:&nbsp;
                                <a href="https://www.google.com/maps/place/Stardust/@43.6160844,-116.207359,17.07z/data=!4m6!3m5!1s0x54aef92a600758a9:0x91d4eda6fd7036a8!8m2!3d43.6172225!4d-116.20595!16s%2Fg%2F11tp258t_w?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D">
                                    1234 Main St
                                    <br />
                                    Moonstone City, Stardust State 12345
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className={styles.subscriptionFormContainer}>
                        <input id="mail" type="email" placeholder="Email" />
                        <button>Subscribe to news</button>
                    </div>
                </div>
                <div className={styles.privacyPolicyContainer}>
                    <p>© 2023 Positivus. All Rights Reserved.</p>
                    <a href="#privacy-policy">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
