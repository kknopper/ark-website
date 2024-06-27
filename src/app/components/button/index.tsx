import styles from "./button.module.css"
import Link from "next/link";

export default function Button(
	{ children, link = false }: Readonly<{ children: React.ReactNode; link: boolean | URL}>
	)
{

	if (link) {
		return (
			<Link className={styles.button} href={link} >
				{children}
			</Link>
		);
	} else {
		return (
			<button className={styles.button} >
				{children}
			</button>
		)
	}
}