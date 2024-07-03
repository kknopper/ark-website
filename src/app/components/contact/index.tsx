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
					<input type="hidden" name="form-name" value="contact" />
					<p>
						<label className={styles.label} htmlFor="name">Name: <input className={styles.input} type="text" name="name" /></label>
					</p>
					<p>
						<label className={styles.label} htmlFor="email">Email: <input className={styles.input} type="email" name="email" /></label>
					</p>
					<p>
						<label className={styles.label} htmlFor="company">Company: <input className={styles.input} type="text" name="company" /></label>
					</p>
					<p>
						<label className={styles.label} htmlFor="message">Message: <textarea className={styles.textarea} name="message"></textarea></label>
					</p>
					<p>
						<Button type="submit" theme="blue" className={styles.button}>Submit</Button>
					</p>
				</form>
			</Section>
		</Fragment>
	);
}