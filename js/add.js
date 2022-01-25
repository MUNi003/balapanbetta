const price = document.querySelector('.price')
const productName = document.querySelector('.productName')
const linkPhoto = document.querySelector('.linkPhoto')
const addButton = document.querySelector('.addPerson')
const container = document.querySelector('.mainRightBlock')
console.log(price);

window.addEventListener('load' , () =>{
    if(!localStorage.getItem('product')){
        localStorage.setItem('product' , JSON.stringify([]))
    }else{
        const data = JSON.parse(localStorage.getItem('product'))
        console.log(data);
        const newDataWithId = data.map((item , index) =>{
            return{
                ...item,
                id:index
            }
        })

        localStorage.setItem('product' , JSON.stringify([...newDataWithId]))

        const newData = JSON.parse(localStorage.getItem('product'))
        console.log(newData);

        const template = newData.reduce((total, {price , productName , linkPhoto ,id})=>
        {
            return total + CardTemplate(price , productName , linkPhoto ,id)
        }, '')

        container.innerHTML = template
    }
})

addButton.addEventListener('click' ,  e=>{
    e.preventDefault()
    if(price.value !== '' &&  productName.value !== '' && linkPhoto.value !== ''){
        const product = JSON.parse(localStorage.getItem('product'))
        localStorage.setItem('product' , JSON.stringify(
            [
                ...product,
                {
                    price:price.value,
                    productName:productName.value,
                    linkPhoto:linkPhoto.value
                }
            ]
        ))
    }
    window.location.reload()
})

function CardTemplate(price , productName , linkPhoto ,id){
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

function Delete(id){
    const base = JSON.parse(localStorage.getItem('product'))
    const deleteBase = base.filter(item => item.id !==id)

    localStorage.setItem('product' , JSON.stringify([...deleteBase]))
    window.location.reload()
}

function More(id){
    const base = JSON.parse(localStorage.getItem('product'))
    localStorage.setItem('singleBase' , JSON.stringify(base[id]))
}