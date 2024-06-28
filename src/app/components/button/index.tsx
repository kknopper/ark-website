import { Url } from "next/dist/shared/lib/router/router";
import styles from "./button.module.css"
import Link from "next/link";

export default function Button(
	{ children, link=":"}: Readonly<{ children: React.ReactNode; link: Url}>
	)
{

	if (link !== ":") {
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