/**
 * About-page content. The bio and timeline are DRAFTS written from what the site knows
 * (your blogs, certifications and services). Edit freely to match your real story.
 */

export const BIO = {
	headline: 'Engineer, consultant & educator.',
	intro:
		'I’m the engineer behind WEBHKP, an independent consultancy that helps teams design, build and scale software systems that hold up in production.',
	paragraphs: [
		'For more than a decade I’ve worked across the stack: backend services in Java, Go, Node.js and Python; cloud infrastructure on AWS and Google Cloud; and the Kubernetes platforms that tie it all together. I like problems where architecture, performance and developer experience meet.',
		'Teaching is the other half of what I do. I run the BigBox network of learning sites. BigBoxCode is the flagship, with 238+ tutorials on data structures, algorithms, design patterns and programming languages. BigBoxSystems, BigBoxCognition, BigBoxCipher and BigBoxQuantum cover system design, AI, security and quantum computing. Writing for thousands of developers keeps my explanations sharp, and it’s the same clarity I bring to client work.',
		'Today I partner with founders, CTOs and engineering teams as a hands-on consultant: reviewing architecture, building platforms, mentoring engineers and leaving every codebase better documented than I found it.',
	],
	currently: [
		{ label: 'Building', value: 'Tejanto & BigBoxCode Labs' },
		{ label: 'Writing', value: 'System design deep dives' },
		{ label: 'Learning', value: 'eBPF & platform observability' },
	],
};

export const PRINCIPLES = [
	{ icon: 'layers', title: 'Simple over clever', text: 'The best architecture is the one your team can operate at 3 a.m.' },
	{ icon: 'shield', title: 'Secure by default', text: 'Least privilege, encrypted everything and audit trails from day one.' },
	{ icon: 'zap', title: 'Measure, then optimize', text: 'Decisions backed by profiles, load tests and real cost data.' },
	{ icon: 'book', title: 'Leave it documented', text: 'Runbooks, ADRs and diagrams so knowledge outlives the engagement.' },
];

/** Tech stack, grouped. `level` 1–3 (3 = deep production experience) drives the strength meter. */
export const STACK: { group: string; icon: string; items: { name: string; level: 1 | 2 | 3 }[] }[] = [
	{
		group: 'Languages',
		icon: 'code',
		items: [
			{ name: 'Java', level: 3 },
			{ name: 'Go', level: 3 },
			{ name: 'TypeScript', level: 3 },
			{ name: 'JavaScript', level: 3 },
			{ name: 'Python', level: 3 },
			{ name: 'PHP', level: 3 },
			{ name: 'SQL', level: 3 },
			{ name: 'Bash', level: 2 },
			{ name: 'Rust', level: 1 },
		],
	},
	{
		group: 'Frameworks',
		icon: 'layers',
		items: [
			{ name: 'Spring Boot', level: 3 },
			{ name: 'Laravel', level: 3 },
			{ name: 'Node.js', level: 3 },
			{ name: 'Express / Fastify', level: 2 },
			{ name: 'FastAPI', level: 2 },
			{ name: 'React', level: 2 },
			{ name: 'Next.js', level: 2 },
			{ name: 'Astro', level: 2 },
		],
	},
	{
		group: 'Cloud & Platform',
		icon: 'cloud',
		items: [
			{ name: 'AWS', level: 3 },
			{ name: 'Kubernetes', level: 3 },
			{ name: 'Docker', level: 3 },
			{ name: 'Terraform', level: 3 },
			{ name: 'Helm', level: 3 },
			{ name: 'Argo CD', level: 2 },
			{ name: 'Google Cloud', level: 2 },
			{ name: 'Istio', level: 1 },
		],
	},
	{
		group: 'Data & Messaging',
		icon: 'server',
		items: [
			{ name: 'PostgreSQL', level: 3 },
			{ name: 'MySQL', level: 3 },
			{ name: 'Redis', level: 3 },
			{ name: 'Kafka', level: 2 },
			{ name: 'MongoDB', level: 2 },
			{ name: 'Elasticsearch', level: 2 },
			{ name: 'RabbitMQ', level: 2 },
		],
	},
	{
		group: 'DevOps & Observability',
		icon: 'infinity',
		items: [
			{ name: 'GitHub Actions', level: 3 },
			{ name: 'GitLab CI', level: 2 },
			{ name: 'Prometheus', level: 3 },
			{ name: 'Grafana', level: 3 },
			{ name: 'OpenTelemetry', level: 2 },
			{ name: 'Linux', level: 3 },
			{ name: 'Nginx', level: 3 },
		],
	},
];

// DEMO DATA — placeholder career timeline. Replace with your real history.
export const EXPERIENCE = [
	{
		period: '2021 — Now',
		role: 'Independent Consultant',
		org: 'WEBHKP',
		text: 'Cloud architecture, Kubernetes platforms and backend engineering for startups and product teams worldwide.',
	},
	{
		period: '2019 — Now',
		role: 'Creator & Author',
		org: 'The BigBox network',
		text: 'Building five learning sites, from BigBoxCode’s 238+ tutorials to system design, AI, security and quantum computing.',
	},
	{
		period: '2017 — 2021',
		role: 'Lead Software Engineer',
		org: 'SaaS company',
		text: 'Led a platform team migrating a monolith to containerized services on AWS; introduced IaC and GitOps.',
	},
	{
		period: '2014 — 2017',
		role: 'Software Engineer',
		org: 'Product studio',
		text: 'Built web applications and APIs in PHP, Java and JavaScript for clients across e-commerce and media.',
	},
];
