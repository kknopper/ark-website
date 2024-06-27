import styles from "./services.module.css";
import Section from '../section';
import ServiceBlock from "./servicesBlock";
import {services} from './data';

export default function Services() {
	return (
		<Section customClass={`section-services ${styles.section} fullWidth`} id="services">
			<h2 className={styles.headline}>Services</h2>
			<div className={styles.serviceGrid}>

				{services.map((block, i) => (
					<ServiceBlock key={i}  faIcon={block.faIcon} title={block.title} copy={block.copy} />
				))}
			</div>
		</Section>
	);
}