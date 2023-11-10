"use client";

import { createContext, useState } from "react";

export interface ProductCart {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

interface ProductCartItem {
    id: number;
    title: string;
    price: number;
}

interface ProductCartContext {
    cartProducts: ProductCart[];
    addCartProducts: (product: ProductCartItem) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    totalQuantityProduct: number;
    totalPriceProduct: number;
}

interface Props {
    children: React.ReactNode;
}

export const cartContext = createContext({} as ProductCartContext);

const CartProvider = ({children}: Props) => {
    const [cartProducts, setCartProducts] = useState<ProductCart[]>([])

    const productExist = (id: number) => {
        return cartProducts.find(product => product.id === id)
    }

    const isTheLastUnit = (id: number) => {
        if(cartProducts.find((product) => (product.id === id))?.quantity === 1) {
            return true;
        } else {
            return false;
        }
    }

    const increaseQuantity = (id: number) => { 
        setCartProducts(
            cartProducts.map((product) => {
                if(product.id === id) {
                    return {...product, quantity: product.quantity + 1};
                }else{
                    return product;
                }
            })
        )
     }

    const addCartProducts = ({id, title, price}: ProductCartItem) => {
        if(cartProducts.length === 0) {
            return setCartProducts([{id, title, price, quantity: 1}])
        }

        if(!productExist(id)) {
            return setCartProducts([...cartProducts, {id, title, price, quantity: 1}])
        }

        increaseQuantity(id);
    }

    const decreaseQuantity = (id: number) => { 

        if(isTheLastUnit(id)) {
            return setCartProducts(cartProducts.filter((product) => product.id != id));
        };

        setCartProducts(
            cartProducts.map((product) => {
                if(product.id === id) {
                    return {...product, quantity: product.quantity - 1};
                } else{
                    return product;
                }
            })
        )
     }

    const totalQuantityProduct = cartProducts.reduce((acc, product) => (acc + product.quantity), 0);
    const totalPriceProduct = cartProducts.reduce((acc, product) => (acc + product.price*product.quantity), 0);

    return (
        <cartContext.Provider value={{ cartProducts, addCartProducts, increaseQuantity, decreaseQuantity, totalQuantityProduct, totalPriceProduct }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider