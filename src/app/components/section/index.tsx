import styles from "./section.module.css"

export default function Section(
	{ children, customClass, id }: Readonly<{ children: React.ReactNode; customClass: string, id: string }>
	)
{
	return (
		<section className={`${styles.section} ${customClass}`} id={id}>
			<div className={styles.content}>
				{children}
			</div>
		</section>
	);
}