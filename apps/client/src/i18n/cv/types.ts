export type TCVContent = {
	name: string;
	occupation: string;
	about: string;
	location: string;
	links: {
		url: string;
		title: string;
	}[];
	contacts: {
		label: string;
		contact: string;
		url: string;
	}[];
	languages: {
		name: string;
		level?: string;
	}[];
	skills: string[];
	employmentHistory: {
		company: string;
		position: string;
		years: string;
		additional: string;
		summary: string;
		achievements: string[];
		skills: string;
	}[];
	additionalActivities: {
		company: string;
		position: string;
		years: string;
		summary: string;
	}[];
	education: {
		institution: string;
		years: string;
	}[];
};

export type TSectionTitle = Record<
	| "about"
	| "languages"
	| "employmentHistory"
	| "skills"
	| "education"
	| "additionalActivities",
	string
>;
