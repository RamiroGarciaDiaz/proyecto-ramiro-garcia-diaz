import React from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <button className="cart-button">
            <ShoppingCartIcon color="success" fontSize="large"/>
        </button> 
    )
}

export default CartWidget