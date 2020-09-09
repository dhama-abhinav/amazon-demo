import React from 'react'
import './Subtotal.css' 
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'

export const Subtotal = () => {
    const [{basket},dispatch] =useStateValue()
    const proceedToCheckout = ()=>{

    }
    return (
        <div className='subtotal'>
            {/* <h3>Subtotal ( {basket.length} items ) : $212 </h3> */}
            {/* <Checkbox>This order contais a gift</Checkbox> */}

            <CurrencyFormat 

            renderText = { (value)=>(
                <>
                <p>
                Subtotal ( {basket.length} items ) : <strong>  {`${value}`} </strong>
                </p>
                <small className='subtotal__gift' >
                    <input type='checkbox' /> This order contais a gift
                </small>
                </>
            )}

            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₹'}
            />
            <button onClick={proceedToCheckout} >Proceed to checkout</button>
        </div>
    )
}
