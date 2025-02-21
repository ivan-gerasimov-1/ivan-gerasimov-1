import type { TLink } from "#app/components/navigationBar/types.ts";

export let content = {
	soon: "Soon",
	links: [
		{
			id: "home",
			type: "icon",
			url: "/",
			icon: "home",
			isActive: true,
			isDisabled: false,
		},
		{
			id: "cv",
			type: "text",
			url: "/cv",
			label: "CV",
			isActive: false,
			isDisabled: false,
		},
		{
			id: "blog",
			type: "text",
			url: "/blog",
			label: "Blog",
			isActive: false,
			isDisabled: true,
		},
		{
			id: "playground",
			type: "text",
			url: "/playground",
			label: "Playground",
			isActive: false,
			isDisabled: true,
		},
	] satisfies TLink[],
};
