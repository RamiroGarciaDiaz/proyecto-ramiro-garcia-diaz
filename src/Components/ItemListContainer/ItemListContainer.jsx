import React from "react"
import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({greeting}) => {
    return (
        <>
        <div className="landing">
            <span>{greeting}</span>
        </div>
        <ItemCount stock="15" name="Pelota" price="1500"/>
        </>
    )
}

export default ItemListContainer