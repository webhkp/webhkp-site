import { initHeroGrid } from './hero-grid';
import { initPalette } from './palette';
import { copyText, toggleTheme } from './theme';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Theme ---------- */
document.querySelectorAll('[data-theme-toggle]').forEach((btn) => btn.addEventListener('click', toggleTheme));

/* ---------- Platform-aware shortcut label ---------- */
const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
document.querySelectorAll('[data-mod-key]').forEach((el) => (el.textContent = isMac ? '⌘K' : 'Ctrl K'));

/* ---------- Header: scrolled state + mobile menu ---------- */
const header = document.querySelector<HTMLElement>('[data-header]');
if (header) {
	const onScroll = () => header.toggleAttribute('data-scrolled', window.scrollY > 12);
	onScroll();
	window.addEventListener('scroll', onScroll, { passive: true });

	const toggle = header.querySelector<HTMLButtonElement>('[data-menu-toggle]');
	const menu = header.querySelector<HTMLElement>('[data-mobile-menu]');
	const setOpen = (open: boolean) => {
		header.toggleAttribute('data-menu-open', open);
		toggle?.setAttribute('aria-expanded', String(open));
		toggle?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
		if (menu) menu.hidden = !open;
		document.body.style.overflow = open ? 'hidden' : '';
	};
	toggle?.addEventListener('click', () => setOpen(!header.hasAttribute('data-menu-open')));
	menu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && header.hasAttribute('data-menu-open')) setOpen(false);
	});
	window.matchMedia('(min-width: 961px)').addEventListener('change', (e) => e.matches && setOpen(false));
}

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window && !reduceMotion) {
	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					io.unobserve(entry.target);
				}
			}
		},
		{ rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
	);
	revealEls.forEach((el) => io.observe(el));
} else {
	revealEls.forEach((el) => el.classList.add('is-visible'));
}

/* ---------- Spotlight cards ---------- */
document.querySelectorAll<HTMLElement>('.spot').forEach((el) => {
	el.addEventListener('pointermove', (e) => {
		const r = el.getBoundingClientRect();
		el.style.setProperty('--mx', `${e.clientX - r.left}px`);
		el.style.setProperty('--my', `${e.clientY - r.top}px`);
	});
});

/* ---------- Tilt (subtle 3D on hover) ---------- */
if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
	document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
		el.addEventListener('pointermove', (e) => {
			const r = el.getBoundingClientRect();
			const px = (e.clientX - r.left) / r.width - 0.5;
			const py = (e.clientY - r.top) / r.height - 0.5;
			el.style.transform = `perspective(900px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg)`;
		});
		el.addEventListener('pointerleave', () => (el.style.transform = ''));
	});
}

/* ---------- Animated counters ---------- */
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
if (counters.length && !reduceMotion && 'IntersectionObserver' in window) {
	const animate = (el: HTMLElement) => {
		const target = Number(el.dataset.count);
		const suffix = el.dataset.suffix ?? '';
		const duration = 1600;
		const t0 = performance.now();
		const step = (t: number) => {
			const p = Math.min(1, (t - t0) / duration);
			const eased = 1 - Math.pow(1 - p, 4);
			el.textContent = `${Math.round(target * eased)}${suffix}`;
			if (p < 1) requestAnimationFrame(step);
		};
		requestAnimationFrame(step);
	};
	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					animate(entry.target as HTMLElement);
					io.unobserve(entry.target);
				}
			}
		},
		{ threshold: 0.5 },
	);
	counters.forEach((el) => io.observe(el));
}

/* ---------- Word rotator ---------- */
document.querySelectorAll<HTMLElement>('[data-rotator]').forEach((root) => {
	const words = Array.from(root.querySelectorAll<HTMLElement>('.rotator-word'));
	if (words.length < 2 || reduceMotion) return;
	let i = 0;
	setInterval(() => {
		words[i].classList.remove('is-active');
		words[i].classList.add('is-leaving');
		const prev = words[i];
		setTimeout(() => prev.classList.remove('is-leaving'), 700);
		i = (i + 1) % words.length;
		words[i].classList.add('is-active');
	}, 2600);
});

/* ---------- Filters (projects, certifications) ---------- */
document.querySelectorAll<HTMLElement>('[data-filter-root]').forEach((root) => {
	const buttons = root.querySelectorAll<HTMLButtonElement>('[data-filter]');
	const items = root.querySelectorAll<HTMLElement>('[data-filter-item]');
	const counter = root.querySelector<HTMLElement>('[data-filter-count]');
	buttons.forEach((btn) =>
		btn.addEventListener('click', () => {
			const value = btn.dataset.filter!;
			buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
			let shown = 0;
			items.forEach((item) => {
				const match = value === 'all' || (item.dataset.filterItem ?? '').split('|').includes(value);
				item.hidden = !match;
				if (match) {
					shown++;
					item.classList.remove('is-visible');
					requestAnimationFrame(() => item.classList.add('is-visible'));
				}
			});
			if (counter) counter.textContent = String(shown);
		}),
	);
});

/* ---------- Copy buttons ---------- */
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
	const label = btn.querySelector<HTMLElement>('[data-copy-label]');
	const original = label?.textContent ?? '';
	btn.addEventListener('click', async () => {
		const ok = await copyText(btn.dataset.copy!);
		if (label) {
			label.textContent = ok ? 'Copied!' : 'Copy failed';
			setTimeout(() => (label.textContent = original), 1800);
		}
	});
});

/* ---------- Contact form → mailto (no backend required) ---------- */
const form = document.querySelector<HTMLFormElement>('[data-mailto-form]');
if (form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		if (!form.reportValidity()) return;
		const data = new FormData(form);
		const services = data.getAll('services').join(', ') || 'Not specified';
		const subject = `Project inquiry from ${data.get('name')}${data.get('company') ? ` (${data.get('company')})` : ''}`;
		const body = [
			`Name: ${data.get('name')}`,
			`Email: ${data.get('email')}`,
			`Company: ${data.get('company') || '-'}`,
			`Interested in: ${services}`,
			`Budget: ${data.get('budget') || '-'}`,
			`Timeline: ${data.get('timeline') || '-'}`,
			'',
			String(data.get('message') ?? ''),
		].join('\n');
		window.location.href = `mailto:${form.dataset.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		const status = form.querySelector<HTMLElement>('[data-form-status]');
		if (status) {
			status.hidden = false;
			status.textContent = 'Opening your email app… If nothing happens, email me directly.';
		}
	});
}

/* ---------- Hero grid + command palette ---------- */
const heroCanvas = document.querySelector<HTMLCanvasElement>('[data-hero-grid]');
if (heroCanvas) initHeroGrid(heroCanvas);
initPalette();
