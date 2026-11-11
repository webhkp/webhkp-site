export type Service = {
	id: string;
	icon: string;
	title: string;
	summary: string;
	deliverables: string[];
	tags: string[];
};

export const SERVICES: Service[] = [
	{
		id: 'cloud-architecture',
		icon: 'cloud',
		title: 'Solution & Cloud Architecture',
		summary:
			'End-to-end solution design and secure, cost-aware cloud architectures built for the next 10× of growth, not just this quarter’s launch.',
		deliverables: [
			'Architecture review & Well-Architected assessment',
			'Solution blueprint & migration roadmap',
			'Cost optimization & FinOps guardrails',
			'Security baseline: IAM, networking, encryption',
		],
		tags: ['AWS', 'GCP', 'Serverless', 'FinOps'],
	},
	{
		id: 'kubernetes-platforms',
		icon: 'kubernetes',
		title: 'Kubernetes & Platform Engineering',
		summary: 'Production-grade clusters and internal developer platforms your teams actually enjoy using.',
		deliverables: [
			'EKS / GKE cluster design and hardening',
			'GitOps delivery with Argo CD',
			'Golden-path templates & self-service tooling',
			'Autoscaling, policy and multi-tenancy',
		],
		tags: ['Kubernetes', 'Helm', 'Argo CD', 'Istio'],
	},
	{
		id: 'backend-development',
		icon: 'server',
		title: 'Backend & API Engineering',
		summary: 'High-throughput services and clean APIs in Java, Go, Node.js and Python, built to be maintained.',
		deliverables: [
			'Service & domain design',
			'REST / gRPC / event-driven APIs',
			'Performance profiling & tuning',
			'Database modelling and migrations',
		],
		tags: ['Java', 'Spring', 'Go', 'Kafka'],
	},
	{
		id: 'devops',
		icon: 'infinity',
		title: 'DevOps & Automation',
		summary: 'Pipelines, infrastructure as code and observability, so shipping becomes boring in the best way.',
		deliverables: [
			'CI/CD pipelines with quality gates',
			'Terraform modules & environments',
			'Logging, metrics, tracing and alerting',
			'Incident response runbooks',
		],
		tags: ['Terraform', 'GitHub Actions', 'Prometheus', 'Grafana'],
	},
	{
		id: 'advisory',
		icon: 'compass',
		title: 'Technical Advisory',
		summary: 'Fractional tech leadership: architecture decisions, roadmaps and hiring for founders and CTOs.',
		deliverables: [
			'Architecture decision records',
			'Technical due diligence',
			'Engineering roadmap & team structure',
			'Interviewing and hiring support',
		],
		tags: ['Fractional CTO', 'Due Diligence', 'Strategy'],
	},
	{
		id: 'training',
		icon: 'presentation',
		title: 'Training & Workshops',
		summary:
			'Hands-on workshops for engineering teams, from the same teaching approach behind 238+ BigBoxCode tutorials.',
		deliverables: [
			'Kubernetes & cloud bootcamps',
			'Design patterns and clean architecture',
			'Data structures & algorithms for interviews',
			'Custom curriculum and lab environments',
		],
		tags: ['Workshops', 'Mentoring', 'Curriculum'],
	},
];

export const ENGAGEMENTS = [
	{
		name: 'Advisory',
		cadence: 'Hourly or sprint-based',
		description: 'Expert input exactly when you need it: architecture reviews, design sessions and second opinions.',
		points: ['Async + live sessions', 'Architecture & code reviews', 'Written recommendations'],
		highlight: false,
	},
	{
		name: 'Project',
		cadence: 'Fixed scope, 4–12 weeks',
		description: 'A well-defined outcome, delivered end to end, with documentation and a clean hand-off.',
		points: ['Discovery & scoping included', 'Weekly demos', 'Hand-off & knowledge transfer'],
		highlight: true,
	},
	{
		name: 'Retainer',
		cadence: 'Monthly, ongoing',
		description: 'A senior engineer embedded with your team, steering architecture and unblocking delivery.',
		points: ['Reserved capacity each month', 'Slack / Teams access', 'Quarterly roadmap reviews'],
		highlight: false,
	},
];

export const PROCESS = [
	{
		title: 'Discover',
		text: 'We map goals, constraints and the current system. You get a clear problem statement and success metrics.',
	},
	{
		title: 'Design',
		text: 'Architecture options with honest trade-offs, a recommended path and a delivery plan you can hold me to.',
	},
	{
		title: 'Build',
		text: 'Iterative delivery with weekly demos, infrastructure as code and tests from day one.',
	},
	{
		title: 'Hand-off & scale',
		text: 'Documentation, runbooks and team enablement, so the system keeps improving after I step back.',
	},
];

export const FAQ = [
	{
		q: 'What size of company do you work with?',
		a: 'Mostly seed-to-Series-C startups and product teams inside larger companies: teams that need senior engineering depth without a full-time hire.',
	},
	{
		q: 'Do you work hands-on or only advise?',
		a: 'Both. I work as a solution architect, but most engagements mix architecture work with hands-on implementation: writing Terraform, building services and pairing with your engineers.',
	},
	{
		q: 'How do you price engagements?',
		a: 'Advisory is billed hourly or per sprint; projects are fixed-price after a short paid discovery; retainers are a monthly fee for reserved capacity.',
	},
	{
		q: 'Can you work in our time zone?',
		a: 'I work remotely with teams worldwide and keep a guaranteed overlap window with your core hours.',
	},
	{
		q: 'Do you sign NDAs?',
		a: 'Yes. Happy to sign your NDA before we discuss anything sensitive.',
	},
];

// DEMO DATA — placeholder testimonials. Replace with real, attributed quotes before launch.
export const TESTIMONIALS = [
	{
		quote:
			'Our AWS bill dropped by a third and deploys went from weekly to daily. The architecture docs alone were worth the engagement.',
		name: 'Client Name',
		role: 'CTO · Fintech scale-up',
	},
	{
		quote:
			'Took our Kubernetes setup from fragile to boring. The team finally trusts the platform and ships without fear.',
		name: 'Client Name',
		role: 'VP Engineering · SaaS company',
	},
	{
		quote:
			'The workshop was the most practical training our team has had. Clear explanations, real-world labs and zero fluff.',
		name: 'Client Name',
		role: 'Engineering Manager · E-commerce',
	},
];
