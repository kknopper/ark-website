import Link from 'next/link';
import Image from 'next/image';
import styles from "./navigation.module.css"

export default function Navigation() {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Link href="/" className={styles.logo}>
					<Image src="/ark-logo.svg" width="100" height='100' alt='ark logo' />
				</Link>

				<ul className={styles.links}>
					<li className={styles.link}>
						<Link href="#services" scroll={true}>Services</Link>
					</li>
					<li className={styles.link}>
						<Link href="#about" scroll={true}>About</Link>
					</li>
					<li className={styles.link}>
						<Link href="#contact" scroll={true}>Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}