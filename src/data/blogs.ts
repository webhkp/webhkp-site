export type Blog = {
	name: string;
	url: string;
	domain: string;
	tagline: string;
	description: string;
	topics: string[];
	stat?: { value: string; label: string };
	accent: string;
	icon: string;
	flagship?: boolean;
};

/**
 * The BigBox network. Taglines/descriptions for everything except BigBoxCode are drafts
 * inferred from each site's name — edit them to match the real focus of each site.
 */
export const BLOGS: Blog[] = [
	{
		name: 'BigBoxCode',
		url: 'https://bigboxcode.com',
		domain: 'bigboxcode.com',
		tagline: 'Code with purpose. Build with passion.',
		description:
			'Developer tutorials on data structures, algorithms, design patterns and design principles, with hands-on guides for Python, JavaScript, PHP and Laravel.',
		topics: ['Data Structures', 'Algorithms', 'Design Patterns', 'Python', 'JavaScript', 'PHP', 'Laravel'],
		stat: { value: '238+', label: 'tutorials' },
		accent: 'var(--accent)',
		icon: 'code',
		flagship: true,
	},
	{
		name: 'BigBoxSystems',
		url: 'https://bigboxsystems.com',
		domain: 'bigboxsystems.com',
		tagline: 'Systems, explained from the inside out.',
		description:
			'Deep dives into system design, distributed systems and cloud infrastructure, and the trade-offs behind every decision.',
		topics: ['System Design', 'Distributed Systems', 'Cloud', 'Databases', 'Scalability'],
		accent: '#7c83db',
		icon: 'server',
	},
	{
		name: 'BigBoxCognition',
		url: 'https://bigboxcognition.com',
		domain: 'bigboxcognition.com',
		tagline: 'AI and machine learning for builders.',
		description:
			'Machine learning, LLMs and applied AI explained for engineers: the concepts, the math and the code to put them to work.',
		topics: ['Machine Learning', 'LLMs', 'Deep Learning', 'MLOps', 'Data Science'],
		accent: '#c77dba',
		icon: 'sparkle',
	},
	{
		name: 'BigBoxCipher',
		url: 'https://bigboxcipher.com',
		domain: 'bigboxcipher.com',
		tagline: 'Security and cryptography, decoded.',
		description:
			'Cryptography, application security and secure system design: how attacks work and how to build defenses that hold.',
		topics: ['Cryptography', 'AppSec', 'Encryption', 'Authentication', 'Zero Trust'],
		accent: '#3fa7a0',
		icon: 'shield',
	},
	{
		name: 'BigBoxQuantum',
		url: 'https://bigboxquantum.com',
		domain: 'bigboxquantum.com',
		tagline: 'Quantum computing, one qubit at a time.',
		description:
			'An approachable path into quantum computing: qubits, gates, algorithms and the tooling to run real quantum circuits.',
		topics: ['Quantum Computing', 'Qubits', 'Quantum Algorithms', 'Qiskit', 'Post-Quantum Crypto'],
		accent: '#d4a24c',
		icon: 'atom',
	},
];
