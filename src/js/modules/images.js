const images = () => {
	const imgModal = document.createElement('div'),
		workSection = document.querySelector('.works'),
		bigImage = document.createElement('img');

	imgModal.classList.add('popup'),
		workSection.appendChild(imgModal),
		imgModal.style.justifyContent = 'center',
		imgModal.style.alignItems = 'center',
		imgModal.style.display = 'none',
		imgModal.appendChild(bigImage);

	bigImage.classList.add('opened_img');

	workSection.addEventListener('click', (e) => {
		e.preventDefault();

		const target = e.target;

		if (target && target.classList.contains('preview')) {
			imgModal.style.display = 'flex',
				document.body.style.overflow = 'hidden';
			const path = target.parentNode.getAttribute('href');
			bigImage.setAttribute('src', path);
		}

		if (target && target.matches('div.popup')) {
			imgModal.style.display = 'none',
				document.body.style.overflow = '';
		}
	});
};

export default images;