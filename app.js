const cardElement = document.querySelector('.birthdayCard')
const playVideoBtn = document.getElementById('playVideo')
const videoYT = document.querySelector('.video')

playVideoBtn.addEventListener('click', () => {
    videoYT.style.display = 'inherit'
    cardElement.style.display = 'none'
})