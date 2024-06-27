import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./services.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServiceBlock({ faIcon, title, copy }: Readonly<{ faIcon: IconProp; title: string, copy: string;}>) {
	return (
		<div className={styles.serviceBlock}>
			<FontAwesomeIcon icon={faIcon} size="2x" className={styles.icon} />
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.copy}>{copy}</p>
		</div>
	);
}