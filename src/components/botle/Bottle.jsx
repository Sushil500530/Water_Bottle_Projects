import PropTypes from 'prop-types'
import './bottle.css'
function Bottle({bottle,handleAddToCard}) {
    const {name,img,price} = bottle;
    // console.log(bottle)
  return (
    <div className="bottle">
        <img src={img} alt="" />
        <h2>Bottle: {name}</h2>
        <p>Price: ${price}</p>
        <button onClick={()=>handleAddToCard(bottle)}>Add to Card</button>
    </div>
  )
}
Bottle.propTypes = {
    bottle : PropTypes.object.isRequired,
    handleAddToCard : PropTypes.func.isRequired
}
export default Bottle