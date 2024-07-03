import { Url } from "next/dist/shared/lib/router/router";
import styles from "./button.module.css"
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";


export default function Button(
	{ children, action = "button", link = ":", theme="white" }: Readonly<{ children: React.ReactNode; action: ButtonHTMLAttributes; link: Url, theme: string}>
	)
{

	if (link !== ":") {
		return (
			<Link className={`${styles.button} ${styles[theme]}`} href={link} >
				{children}
			</Link>
		);
	} else {
		return (
			<button type={action} className={`${styles.button} ${styles[theme]}`} >
				{children}
			</button>
		)
	}
}