import { copyText, toggleTheme } from './theme';

type Item = {
	label: string;
	group: string;
	href?: string;
	external?: boolean;
	action?: 'theme' | 'copy-email';
	keywords?: string;
	hint?: string;
};

export function initPalette() {
	const dialog = document.getElementById('cmdk') as HTMLDialogElement | null;
	const dataEl = document.getElementById('cmdk-data');
	if (!dialog || !dataEl) return;

	const input = dialog.querySelector<HTMLInputElement>('[data-cmdk-input]')!;
	const list = dialog.querySelector<HTMLUListElement>('[data-cmdk-list]')!;
	const empty = dialog.querySelector<HTMLElement>('[data-cmdk-empty]')!;
	const email = dialog.dataset.email ?? '';
	const items: Item[] = JSON.parse(dataEl.textContent || '[]');

	let filtered: Item[] = items;
	let active = 0;

	const optionId = (i: number) => `cmdk-opt-${i}`;

	function setActive(i: number, scroll = true) {
		const options = list.querySelectorAll<HTMLElement>('[role="option"]');
		if (!options.length) return;
		active = (i + options.length) % options.length;
		options.forEach((el, idx) => el.setAttribute('aria-selected', String(idx === active)));
		input.setAttribute('aria-activedescendant', optionId(active));
		if (scroll) options[active].scrollIntoView({ block: 'nearest' });
	}

	function render() {
		list.replaceChildren();
		empty.hidden = filtered.length > 0;
		let lastGroup = '';
		filtered.forEach((item, i) => {
			if (item.group !== lastGroup) {
				lastGroup = item.group;
				const heading = document.createElement('li');
				heading.className = 'cmdk-group';
				heading.setAttribute('role', 'presentation');
				heading.textContent = item.group;
				list.append(heading);
			}
			const li = document.createElement('li');
			li.id = optionId(i);
			li.className = 'cmdk-item';
			li.setAttribute('role', 'option');
			li.setAttribute('aria-selected', 'false');

			const label = document.createElement('span');
			label.className = 'cmdk-label';
			label.textContent = item.label;
			li.append(label);

			const hint = document.createElement('span');
			hint.className = 'cmdk-hint';
			hint.textContent = item.hint ?? (item.external ? '↗' : '↵');
			li.append(hint);

			li.addEventListener('mousemove', () => {
				if (active !== i) setActive(i, false);
			});
			li.addEventListener('click', () => run(item));
			list.append(li);
		});
		setActive(0, false);
	}

	function filter() {
		const q = input.value.trim().toLowerCase();
		filtered = q
			? items.filter((it) => `${it.label} ${it.group} ${it.keywords ?? ''}`.toLowerCase().includes(q))
			: items;
		render();
	}

	function open() {
		if (dialog!.open) return;
		input.value = '';
		filter();
		dialog!.showModal();
		input.focus();
	}

	function close() {
		dialog!.close();
	}

	async function run(item: Item) {
		close();
		if (item.action === 'theme') return toggleTheme();
		if (item.action === 'copy-email') {
			await copyText(email);
			return;
		}
		if (!item.href) return;
		if (item.external) window.open(item.href, '_blank', 'noopener');
		else window.location.href = item.href;
	}

	input.addEventListener('input', filter);
	input.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			setActive(active + 1);
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			setActive(active - 1);
		} else if (e.key === 'Enter') {
			e.preventDefault();
			const item = filtered[active];
			if (item) run(item);
		}
	});

	dialog.addEventListener('click', (e) => {
		if (e.target === dialog) close();
	});

	document.addEventListener('keydown', (e) => {
		const target = e.target as HTMLElement;
		const typing = target.closest('input, textarea, select, [contenteditable="true"]');
		if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
			e.preventDefault();
			dialog.open ? close() : open();
		} else if (e.key === '/' && !typing && !dialog.open) {
			e.preventDefault();
			open();
		}
	});

	document.querySelectorAll('[data-cmdk-open]').forEach((btn) => btn.addEventListener('click', open));
}
