import GitHub from './icons/github.svg';
import LinkedIn from './icons/linkedin.svg';

export type TIconName = 'github' | 'linkedIn';

export const EIcon = {
	github: GitHub,
	linkedIn: LinkedIn,
};

type TIconProps = {
	name: TIconName;
};

export function getIcon(name: TIconName) {
	return EIcon[name];
}

export function Icon(props: TIconProps) {
	const Icon = getIcon(props.name);

	return <Icon />;
}
