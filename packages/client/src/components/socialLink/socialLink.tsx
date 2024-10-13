import { Icon } from '@/components/icon/icon';
import styles from './socialLink.module.css';

type TSocialLinkProps = {
	name: 'github' | 'linkedIn';
	url: string;
	ariaLabel: string;
};

export function SocialLink(props: TSocialLinkProps) {
	return (
		<a
			className={styles.socialLink}
			href={props.url}
			target="_blank"
			rel="noopener"
			aria-label={props.ariaLabel}
		>
			<Icon name={props.name} />
		</a>
	);
}
