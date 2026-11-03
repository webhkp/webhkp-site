// DEMO DATA — replace with your real certifications, dates and credential URLs.

export type Certification = {
	title: string;
	issuer: string;
	code: string;
	year: number;
	category: 'Cloud' | 'Containers' | 'Languages' | 'Infrastructure as Code';
	credentialId: string;
	url: string;
	color: string;
	featured?: boolean;
};

export const CERTIFICATIONS: Certification[] = [
	{
		title: 'AWS Certified Solutions Architect – Professional',
		issuer: 'Amazon Web Services',
		code: 'SAP-C02',
		year: 2025,
		category: 'Cloud',
		credentialId: 'DEMO-AWS-SAP',
		url: '#',
		color: '#ff9900',
		featured: true,
	},
	{
		title: 'AWS Certified Security – Specialty',
		issuer: 'Amazon Web Services',
		code: 'SCS-C02',
		year: 2025,
		category: 'Cloud',
		credentialId: 'DEMO-AWS-SCS',
		url: '#',
		color: '#ff9900',
	},
	{
		title: 'AWS Certified Developer – Associate',
		issuer: 'Amazon Web Services',
		code: 'DVA-C02',
		year: 2023,
		category: 'Cloud',
		credentialId: 'DEMO-AWS-DVA',
		url: '#',
		color: '#ff9900',
	},
	{
		title: 'Certified Kubernetes Administrator',
		issuer: 'CNCF · Linux Foundation',
		code: 'CKA',
		year: 2024,
		category: 'Containers',
		credentialId: 'DEMO-LF-CKA',
		url: '#',
		color: '#4d9bff',
		featured: true,
	},
	{
		title: 'Certified Kubernetes Application Developer',
		issuer: 'CNCF · Linux Foundation',
		code: 'CKAD',
		year: 2023,
		category: 'Containers',
		credentialId: 'DEMO-LF-CKAD',
		url: '#',
		color: '#4d9bff',
	},
	{
		title: 'Oracle Certified Professional: Java SE 17 Developer',
		issuer: 'Oracle',
		code: '1Z0-829',
		year: 2023,
		category: 'Languages',
		credentialId: 'DEMO-ORA-829',
		url: '#',
		color: '#f0503c',
		featured: true,
	},
	{
		title: 'Spring Certified Professional',
		issuer: 'VMware Tanzu',
		code: '2V0-72.22',
		year: 2022,
		category: 'Languages',
		credentialId: 'DEMO-SPR-PRO',
		url: '#',
		color: '#6db33f',
	},
	{
		title: 'HashiCorp Certified: Terraform Associate',
		issuer: 'HashiCorp',
		code: 'TA-003',
		year: 2024,
		category: 'Infrastructure as Code',
		credentialId: 'DEMO-HC-TF',
		url: '#',
		color: '#9b6cff',
	},
	{
		title: 'Google Cloud Professional Cloud Architect',
		issuer: 'Google Cloud',
		code: 'PCA',
		year: 2022,
		category: 'Cloud',
		credentialId: 'DEMO-GCP-PCA',
		url: '#',
		color: '#34a853',
	},
];
