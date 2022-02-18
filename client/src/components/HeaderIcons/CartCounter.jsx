
import React from 'react'; 

import useCartDetails from '../../hooks/useCartDetails';




const CartCounter = () => { 

    const { productsCounter } = useCartDetails();


    return (
        <>
        {productsCounter !== 0 &&
            <div className='goods-count'>{productsCounter}</div>
        } 
        </>
    )
}


export default CartCounter; 