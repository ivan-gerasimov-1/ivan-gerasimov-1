export type TMainContent = {
	name: string;
	role: string;
	description: string;
	email: {
		to: string;
		label: string;
	};
	cv: {
		link: string;
		label: string;
	};
	socialLinks: {
		linkedin: {
			link: string;
			label: string;
		};
		github: {
			link: string;
			label: string;
		};
	};
	companies: {
		id:
			| "apliteni"
			| "fundraiseUp"
			| "connio"
			| "arm"
			| "efResearch"
			| "postcardAndTag";
		name: string;
		years: string;
	}[];
};
