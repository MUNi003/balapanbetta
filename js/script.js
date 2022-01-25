const burgerList = document.querySelector('.slideBurgerMenu')
const burgerButton = document.querySelector('.burgerButton') 
const close = document.querySelector('.close') 
const container = document.querySelector('.inlineBestsellers')


burgerButton.addEventListener('click' , e =>{
    e.preventDefault();

    burgerList.classList.toggle('active')
})

close.addEventListener('click' , e =>{
    e.preventDefault();

    burgerList.classList.remove('active')
})
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111

const data = JSON.stringify(localStorage.getItem('product'))

function CardTemplate(base){
    const card = base.map({price,productName,linkPhoto})
    return`
        <div class="mainCard">
            <div class="cardImage">
                <img src="${linkPhoto}" alt="">
            </div>
            <div class="cardBody">
                <h2 class="price">${price} сом</h2>
                <p class="companyAndProductName">${productName}</p>
            </div>
        </div>
    `
}
CardTemplate(data)

container.innerHTML = CardTemplate


