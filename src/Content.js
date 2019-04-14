import React from "react";
import styles from "./Content.module.css";
import hotelImage from "./images/hotelexterior.jpg";

export const Content = (props) => {
	return(
		<div className={styles.contentWrapper}>
			<section className={styles.heroBanner}>
				<img src={hotelImage} alt="hotel exterior"></img>
			</section>
			<section className={styles.location}>
				<h3>Hilton Chicago</h3>
				<address>
					720 South Michicagn Avenue
				</address>
				<address>
					Chicago, Illinois, 60605
				</address>
				<a href="tel:13129224400">1-312-922-4400</a>
			</section>
			<section className={styles.menu}>
				<ul onClick={menuClickHandler}>
					<li data-item="map">
						<span>Map</span>
						<span className={styles.angleRight}>›</span>
					</li>
					<li data-item="gallery">
						<span>Photo Gallery</span>
						<span className={styles.angleRight}>›</span>
					</li>
					<li data-item="amenities">
						<span>Amenities</span>
						<span className={styles.angleRight}>›</span>
					</li>
				</ul>
			</section>
		</div>
	);
}

//helpter functions
const menuClickHandler = ($event) => {
	console.log(`You clicked on ${$event.target.dataset["item"]} option.`);
}