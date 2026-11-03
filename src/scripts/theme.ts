const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function toggleTheme() {
	const root = document.documentElement;
	const next = root.dataset.theme === 'light' ? 'dark' : 'light';
	const apply = () => {
		root.dataset.theme = next;
		try {
			localStorage.setItem('theme', next);
		} catch {
			/* storage unavailable */
		}
	};
	if (document.startViewTransition && !prefersReducedMotion()) {
		document.startViewTransition(apply);
	} else {
		apply();
	}
}

export async function copyText(text: string): Promise<boolean> {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		return false;
	}
}
