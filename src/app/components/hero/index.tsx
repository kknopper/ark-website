import Image from 'next/image';
import styles from "./hero.module.css";
import Button from '../button';
import Section from '../section';


export default function Hero() {
	return (
		<Section customClass={`section-hero ${styles.hero}`} id="hero">
			<h1 className={styles.headline}>Your IT Sanctuary</h1>
			<p className={styles.intro}>ARK is a Managed Service Provider, ready to bring your business to the next level. We provide Networking, VOIP, Helpdesk, Cybersecurity and more.</p>
			<p className={styles.intro}>Stop drowning in IT bottlenecks, and board with ARK.</p>
			<Button link={false}>Board the Ark</Button>
			<Image src="/ark.png" alt='ark' width={315} height={368} className={styles.ark}
				style={{
					height: 'auto',
				}}
			/>
		</Section>
	);
}