import React from "react";
import styles from "./Header.module.css";
import logo from "./images/hilton_logo_small.jpg";


const Header = ({onBackButtonClicked}) => {
	return (
		<header className={styles.header}>
			<button className={styles.button} onClick={onBackButtonClicked}>
			<span>{"< "}</span> Back</button>
			<span>Hotel Details</span>
			<span className={styles.logo}>
				<img src={logo} alt="hilton_hotel_logo"/>
			</span>
		</header>
	)
}

export default Header;