import { Url } from "next/dist/shared/lib/router/router";
import styles from "./button.module.css"
import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	// Additional custom props can be added here
	children: React.ReactNode;
	link?: Url;
	theme?: string;
}


const Button: React.FC<ButtonProps> =
	({ children, link = ":", theme="white", ...rest }) => {

	if (link !== ":") {
		return (
			<Link className={`${styles.button} ${styles[theme]}`} href={link} >
				{children}
			</Link>
		);
	} else {
		return (
			<button {...rest} className={`${styles.button} ${styles[theme]} ${rest.className}`}>
				{children}
			</button>
		)
	}
	}

export default Button;