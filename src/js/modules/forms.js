import checkValueInputs from "./checkValueInputs";

const forms = (formSelector, inputSelector, phoneInputsSelector, state) => {
	const form = document.querySelectorAll(formSelector),
		input = document.querySelectorAll(inputSelector);

	checkValueInputs(phoneInputsSelector);

	const message = {
		loading: 'Loading...',
		success: 'Спасибо, с вами скоро свяжутся!',
		failure: 'Произошла ошибка...'
	};

	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;

		let res = await fetch(url, {
			method: 'POST',
			body: data
		});

		return await res.text();
	};

	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.appendChild(statusMessage);

			const formData = new FormData(item);

			if (item.getAttribute('data-calc') === 'end') {
				for (let key in state) {
					formData.append(key, state[key]);
					delete state[key];
				}

				setTimeout(() => {
					document.querySelector('.popup_calc_end').style.display = 'none';
				}, 3000)
			}

			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
					statusMessage.textContent = message.success;
				})
				.catch(err => {
					console.log(err);
					statusMessage.textContent = message.failure;
				})
				.finally(() => {
					input.forEach(item => {
						item.value = '';
					});
					setTimeout(() => {
						statusMessage.remove();
					}, 3000)
				});
		});
	});
};

export default forms;