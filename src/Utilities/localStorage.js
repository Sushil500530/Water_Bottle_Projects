// jokhone akta item click korbo tokhne seta local storage a save kore rakhbo
 
const getStoredCard=()=>{
    const getStoredCardString = localStorage.getItem('cart');
    if(getStoredCardString){
        return JSON.parse(getStoredCardString)
    }
    return [];
}
// save to local Storage
const saveCardToLocalStorage = cart =>{
    const cartStringified = JSON.stringify(cart) ;
    localStorage.setItem('cart', cartStringified)
}

const addTolocalStorage =(id) =>{
    const cart = getStoredCard()
    cart.push(id)
    // save to local Storage
    saveCardToLocalStorage(cart)
}

const removeFromLocalStorage =(id) =>{
    // akhane array ta pailam delete korar jonno 
    const cart = getStoredCard();
    // removing every id 
    const remaining = cart.filter(newId => newId !== id);
    saveCardToLocalStorage(remaining)
}

export {addTolocalStorage, getStoredCard, removeFromLocalStorage}