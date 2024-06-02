import { Photo } from '@/components/photo/photo';
import { SocialLink } from '@/components/socialLink/socialLink';

import styles from './index.module.css';

export const config = {
	unstable_runtimeJS: false,
};

export default function Index() {
	return (
		<main className={styles.page}>
			<div className={styles.description}>
				<div className={styles.mainPhotoContainer}>
					<Photo />
				</div>

				<div className={styles.info}>
					<h1 className={styles.name}>Ivan Gerasimov</h1>

					<span className={styles.section}>Fullstack JavaScript developer</span>
				</div>
			</div>

			<section className={styles.profileLinksContainer}>
				<SocialLink
					name="linkedIn"
					url="https://linkedin.com/in/ivan-gerasimov"
					ariaLabel="LinkedIn profile"
				/>

				<SocialLink
					name="github"
					url="https://github.com/ivan-gerasimov-1"
					ariaLabel="GitHub profile"
				/>
			</section>

			<section className={styles.section}>
				<a className={styles.link} href="mailto:ivan@gerasimov.dev">
					ivan@gerasimov.dev
				</a>
			</section>
		</main>
	);
}
