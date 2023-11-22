const mainCard = document.querySelector('.main-card')
const buttons = document.querySelectorAll('.btns-wrapper__btn')
const submitBtn = document.querySelector('.submit-button')
const thankCard = document.querySelector('.thank-card')
const thankText = document.querySelector('.field__text')

let number

const submit = () => {
	if (number >= 0) {
		thankText.textContent = `You selected ${number} out of 5`
		mainCard.style.display = 'none'
		thankCard.style.display = 'block'
	} else {
		mainCard.style.display = 'block'
		thankCard.style.display = 'none'
	}
}

buttons.forEach(el => {
	el.addEventListener('click', e => {
		number = e.target.textContent
	})
})

submitBtn.addEventListener('click', submit)
