const cardRating = document.querySelector('.card'),
    cardThanks = document.querySelector(".card--back"),
    form = document.querySelector('form'),
    inputs = document.querySelectorAll("input"),
    btnSubmit = document.querySelector('button'),
    btnReset = document.getElementById('rating-reset'),
    ratingText = document.getElementById('rating-text')

inputs.forEach((e) => e.addEventListener('change', ({ target }) => {

    btnSubmit.removeAttribute('disabled');

    let rating = target.value;


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        changeCard(rating)

    })

}))

const changeCard = (rating) => {

    cardRating.style.display = 'none'
    cardRating.classList.add("card--hidden")


    cardThanks.classList.add("card--center")
    cardThanks.style.display = 'flex'


    ratingText.innerHTML = rating



    btnReset.addEventListener('click', () => {
        cardRating.style.display = 'flex'
        cardThanks.style.display = 'none'

        cardRating.classList.remove("card--hidden")
        cardThanks.classList.add("card--top")
        cardRating.classList.add("card--show")

    })

}
