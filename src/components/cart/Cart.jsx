import PropTypes from 'prop-types'
import './cart.css'
function Cart({cart,handleCartRemove}) {
    const selectCart ={
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
    };
  return (
    <div>
        <h3>Card: {cart.length}</h3>
        <div className="Cart-image">
            {cart.map(bottle => <div style={selectCart} key={bottle.id}>
            <img src={bottle.img} alt="phtot" />
                <button onClick={()=>handleCartRemove(bottle.id)}>Remove</button>
            </div> 
            )}
            {/* <h4>Name: {bottle.name}</h4> */}
        </div>
    </div>
  )
}

Cart.propTypes = {
    cart : PropTypes.array.isRequired,
    handleCartRemove: PropTypes.func.isRequired
}
export default Cart