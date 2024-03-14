const getStoredCart= ()=>{
    const storedStringify= localStorage.getItem('cart')
    if(storedStringify){
        return JSON.parse(storedStringify)
    }
    return [];
}
const addToLS=id=>{
    const cart= getStoredCart()
    cart.push(id)
    setToLS(cart)
}

const setToLS=(cart)=>{
const cartstringify= JSON.stringify(cart)
localStorage.setItem('cart',cartstringify)
}
export{addToLS}
