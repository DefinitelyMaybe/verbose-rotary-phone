export function pannable(node) {
	let x;
	let y;

	async function handlePointerdown(event) {
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('panstart', {
			detail: { x, y }
		}));

		window.addEventListener('pointermove', handlePointerMove);
		window.addEventListener('pointerup', handlePointerup);
	}

	async function handlePointerMove(event) {
		const dx = event.clientX - x;
		const dy = event.clientY - y;
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('panmove', {
			detail: { x, y, dx, dy }
		}));
	}

	async function handlePointerup(event) {
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('panend', {
			detail: { x, y }
		}));

		window.removeEventListener('pointermove', handlePointerMove);
		window.removeEventListener('pointerup', handlePointerup);
	}

	node.addEventListener('pointerdown', handlePointerdown);

	return {
		destroy() {
			node.removeEventListener('pointerdown', handlePointerdown);
		}
	};
}