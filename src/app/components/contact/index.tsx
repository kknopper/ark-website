import styles from "./contact.module.css";
import Section from '../section';
import Image from "next/image";
import Waves from "../waves";
import { Fragment } from "react";

export default function Contact() {
	return (
		<Fragment>
			<Waves />
			<Section customClass={`section-contact ${styles.contact}`} id="contact">
				<h2>Contact</h2>
			</Section>
		</Fragment>
	);
}