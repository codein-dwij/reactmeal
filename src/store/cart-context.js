import React from 'react';

const CartContext= React.createContext({
    items:[],
    addItem: (item) => {},
    totalAmount:0,
    removeItem: (id) => {}
})

export default CartContext;