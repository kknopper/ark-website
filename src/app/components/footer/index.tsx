import { Fragment } from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Waves from "../waves";

export default function Footer() {
	return (
		<Fragment>
			<Waves />
			<footer className={styles.footer}>
					<Image src="/ark-logo-wordmark.svg" alt='ark' width={148} height={150} className={styles.ark}
					style={{
						height: 'auto',
					}}
					/>
				<p className={styles.copyright}>&copy; {new Date().getFullYear() }</p>
			</footer>
		</Fragment>
	);
}