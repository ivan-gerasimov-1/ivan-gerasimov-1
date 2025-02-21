export type TLink = {
	id: string;
	type: "text" | "icon";
	url: string;
	icon?: string | never;
	label?: string | never;
	isActive: boolean;
	isDisabled: boolean;
} & (
	| {
			type: "icon";
			icon: "home";
			label?: never;
	  }
	| {
			type: "text";
			icon?: never;
			label: "CV" | "About" | "Blog" | "Playground";
	  }
);
