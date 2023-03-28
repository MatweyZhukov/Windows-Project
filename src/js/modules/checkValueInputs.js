const checkValueInputs = (trigger) => {
	const numInputs = document.querySelectorAll(trigger);

	numInputs.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/, '')
		});
	});
};

export default checkValueInputs;