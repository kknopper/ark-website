import styles from "./contact.module.css";
import Section from '../section';
import Waves from "../waves";
import { Fragment } from "react";
import Button from "../button";

export default function Contact() {
	return (
		<Fragment>
			<Waves />
			<Section customClass={`section-contact ${styles.contact}`} id="contact">
				<h2 className={styles.headline}>Contact</h2>
				<form name="contact" method="POST" data-netlify="true" className={styles.form}>
					<p>
						<label className={styles.label}>Your Name: <input className={styles.input} type="text" name="name" /></label>
					</p>
					<p>
						<label className={styles.label}>Your Email: <input className={styles.input} type="email" name="email" /></label>
					</p>
					<p>
						<label className={styles.label}>Your Company: <input className={styles.input} type="text" name="company" /></label>
					</p>
					<p>
						<label className={styles.label}>Message: <textarea className={styles.textarea} name="message"></textarea></label>
					</p>
					<p>
						<Button action="submit" theme="blue" className={styles.button}>Submit</Button>
					</p>
				</form>
			</Section>
		</Fragment>
	);
}