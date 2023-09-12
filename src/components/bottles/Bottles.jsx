import { useEffect, useState } from "react"
import Bottle from "../botle/Bottle"
import './bottles.css';
import { addTolocalStorage, getStoredCard, removeFromLocalStorage } from "../../Utilities/LocalStorage";
import Cart from "../cart/Cart";
function Bottles() {
    const [bottles,setBottles] = useState([]);
    const [card,setCard] = useState([]);

    useEffect(()=>{
        fetch('Bottle.json')
        .then(res =>res.json())
        .then(data=>setBottles(data))
    },[])
    // load cart from local storage 
    useEffect(()=>{
      // console.log('called the use effects',bottles.length)
      if (bottles.length > 0){
      const storageCartId = getStoredCard()
      // console.log(storageCartId,bottles)

const saveCart = [];

      for(const id of storageCartId){
        // console.log(id)
        const bottle = bottles.find(bottle => bottle.id === id) ;
        if(bottle){
          saveCart.push(bottle)
        }
      }
     console.log(saveCart);
      setCard(saveCart);
      }
    },[bottles])

const handleAddToCard =(bottle)=>{
  // console.log('bottle going to added')
  const newCard = [...card, bottle];
  setCard(newCard);
  addTolocalStorage(bottle.id)
}

const handleCartRemove =(id)=>{
    // visual cart remove from browser
    const remianingCart = card.filter(bottle => bottle.id !== id) ;
    setCard(remianingCart)
    // remove from local storage
  removeFromLocalStorage(id)
}

  return (
    <div>
        <h2>Bottles Available: {bottles.length}</h2>

        <Cart cart={card} handleCartRemove={handleCartRemove}></Cart>

       <div className="bottles-container">
       {
          bottles.map(bottle=> <Bottle
          key={bottle.id}
          bottle={bottle}
          handleAddToCard={handleAddToCard}
          ></Bottle>)
        }
       </div>
    </div>
  )
}

export default Bottles