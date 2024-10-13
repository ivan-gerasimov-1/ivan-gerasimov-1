import styles from './photo.module.css';

export function Photo() {
	return (
		<img
			className={styles.photo}
			src="/ivan-gerasimov_photo.webp"
			alt="Ivan Gerasimov | Иван Герасимов"
			width="130"
			height="130"
		/>
	);
}
