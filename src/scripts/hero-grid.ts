/**
 * Interactive "big box" field behind the home hero: a grid of tiles that swell and
 * light up around the pointer, with a slow ambient wave. Pauses when off-screen.
 */
export function initHeroGrid(canvas: HTMLCanvasElement) {
	const ctx = canvas.getContext('2d');
	if (!ctx) return;

	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const CELL = 34;
	const RADIUS = 240;

	let w = 0;
	let h = 0;
	let dpr = 1;
	let base = '238,240,244';
	let accent = '200,255,61';
	let pointer = { x: -9999, y: -9999 };
	let smooth = { x: -9999, y: -9999 };
	let visible = true;
	let raf = 0;

	function readColors() {
		const cs = getComputedStyle(canvas);
		base = cs.getPropertyValue('--grid-base').trim() || base;
		accent = cs.getPropertyValue('--grid-accent').trim() || accent;
	}

	function resize() {
		const rect = canvas.getBoundingClientRect();
		dpr = Math.min(window.devicePixelRatio || 1, 2);
		w = rect.width;
		h = rect.height;
		canvas.width = Math.round(w * dpr);
		canvas.height = Math.round(h * dpr);
		ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
		if (reduce) draw(0);
	}

	function draw(t: number) {
		ctx!.clearRect(0, 0, w, h);
		smooth.x += (pointer.x - smooth.x) * 0.12;
		smooth.y += (pointer.y - smooth.y) * 0.12;

		const cols = Math.ceil(w / CELL) + 1;
		const rows = Math.ceil(h / CELL) + 1;
		const offX = (w % CELL) / 2;

		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < cols; c++) {
				const x = offX + c * CELL;
				const y = r * CELL;
				const dx = x - smooth.x;
				const dy = y - smooth.y;
				const d = Math.sqrt(dx * dx + dy * dy);
				const near = Math.max(0, 1 - d / RADIUS);
				const ease = near * near * (3 - 2 * near);
				const wave = reduce ? 0.5 : (Math.sin(x * 0.011 + y * 0.008 + t * 0.0011) + 1) / 2;
				const size = 2 + wave * 1.5 + ease * 13;
				const alpha = 0.07 + wave * 0.07 + ease * 0.7;
				ctx!.fillStyle = ease > 0.04 ? `rgba(${accent},${alpha})` : `rgba(${base},${alpha})`;
				const half = size / 2;
				ctx!.beginPath();
				ctx!.roundRect(x - half, y - half, size, size, Math.min(4, size / 3));
				ctx!.fill();
			}
		}
	}

	function loop(t: number) {
		draw(t);
		raf = visible && !document.hidden ? requestAnimationFrame(loop) : 0;
	}

	function start() {
		if (!raf && !reduce) raf = requestAnimationFrame(loop);
	}

	window.addEventListener(
		'pointermove',
		(e) => {
			const rect = canvas.getBoundingClientRect();
			pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
		},
		{ passive: true },
	);
	document.documentElement.addEventListener('pointerleave', () => (pointer = { x: -9999, y: -9999 }));

	new ResizeObserver(resize).observe(canvas);
	new MutationObserver(() => {
		readColors();
		if (reduce) draw(0);
	}).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

	new IntersectionObserver(([entry]) => {
		visible = entry.isIntersecting;
		if (visible) start();
	}).observe(canvas);

	document.addEventListener('visibilitychange', () => {
		if (!document.hidden) start();
	});

	readColors();
	resize();
	start();
}
