const firstPage = document.querySelector('.container-rating')
const secondPage = document.querySelector('.container-cheers')
const submitBtn = document.querySelector('.submit')
const inputs = document.querySelectorAll('input')
const score = document.querySelector('.rating-score')

const changesActiveClass = e => {
	for (let i = 0; i < inputs.length; i++) {
		const input = inputs[i]
		input.classList.remove('active')
	}
	e.target.classList.add('active')
	console.log(e.target)
}

const sendBtn = () => {
	secondPage.style.display = 'block'
	firstPage.style.display = 'none'
	inputs.forEach(el => {
		if (el.classList.contains('active')) {
			score.textContent = el.value
		}
	})
}
for (let i = 0; i < inputs.length; i++) {
	const input = inputs[i]
	input.addEventListener('click', changesActiveClass)
}
submitBtn.addEventListener('click', sendBtn)
