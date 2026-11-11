/**
 * Global site settings. Everything personal lives here so it can be edited in one place.
 * Items marked TODO are placeholders — replace them before going live.
 */

export const SITE = {
	name: 'WEBHKP',
	title: 'WEBHKP — Solution Architecture & Software Consulting',
	description:
		'Solution architect and independent software consultant: cloud architecture, Kubernetes platforms, backend systems and developer education. Creator of BigBoxCode.',
	email: 'hello@example.com', // TODO: your public contact email
	location: 'Remote · Worldwide', // TODO
	responseTime: 'Replies within 1 business day',
	bookingUrl: '', // TODO: Cal.com / Calendly link (leave empty to hide "Book a call")
	availability: {
		open: true,
		label: 'Available for new engagements',
		note: 'Booking from Q1 2027', // TODO
	},
} as const;

export type Social = {
	label: string;
	handle: string;
	href: string;
	icon: 'github' | 'linkedin' | 'youtube' | 'x' | 'mail';
};

// TODO: confirm each URL / handle.
export const SOCIALS: Social[] = [
	{ label: 'LinkedIn', handle: 'in/webhkp', href: 'https://www.linkedin.com/in/webhkp', icon: 'linkedin' },
	{ label: 'YouTube', handle: '@webhkp', href: 'https://www.youtube.com/@webhkp', icon: 'youtube' },
	{ label: 'X / Twitter', handle: '@webhkp', href: 'https://x.com/webhkp', icon: 'x' },
	{ label: 'GitHub', handle: 'webhkp', href: 'https://github.com/webhkp', icon: 'github' },
];

export const NAV = [
	{ label: 'About', href: '/about' },
	{ label: 'Services', href: '/services' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'Certifications', href: '/certifications' },
	{ label: 'Blogs', href: '/blogs' },
];

/** Words cycled in the home hero: "I build ___ that scale." */
export const HERO_ROTATOR = [
	'cloud platforms',
	'backend systems',
	'AI-powered apps',
	'K8s platforms',
	'APIs & services',
	'data pipelines',
];

/** Home page stats. `value` is animated; numbers derived from data are passed in at render time. */
export const STATS = {
	yearsExperience: 10, // TODO
	clientsServed: 30, // TODO
	tutorialsPublished: 238, // From bigboxcode.com (Nov 2026)
};
