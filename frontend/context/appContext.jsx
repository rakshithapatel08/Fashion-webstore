import { createContext, useContext, useState } from "react";
import toast from 'react-hot-toast';

const AppContext = createContext();

const AppContextWrapper = ({ children }) => {

    const [showCart, setShowCart] = useState(false);
    const [qty, setQty] = useState(1);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartData, setCartData ] = useState([]);

    const handleInc = (product) => {
      product.quantity += 1;

      const newCartData = cartData?.map(cartItem => cartItem._id === product._id ? product : cartItem);

      setCartData(newCartData);
      setTotalQty(totalQty + 1)
      setTotalPrice(totalPrice + product.price);
      
    }

    const handleDec = (product) => {
        if( product.quantity <= 1 ){
            return;
        }

        product.quantity -= 1;
        const newCartData = cartData?.map(cartItem => cartItem._id === product._id ? product : cartItem);
  
        setCartData(newCartData);
        setTotalQty(totalQty - 1)
        setTotalPrice(totalPrice - product.price);
    }

    const handleAdd = (product, qty) => {
        setShowCart(true)
        setTotalQty(totalQty + qty)
        setTotalPrice(totalPrice + ( qty * product.price ));

        // isInCart?

        const inCartProduct = cartData?.find(cartItem => cartItem._id === product._id);

        if(inCartProduct) {

            // creating new quantity 
            inCartProduct.quantity += qty;

            const newCartData = cartData?.map(cartItem => cartItem._id === inCartProduct._id ? inCartProduct : cartItem);

            setCartData(newCartData);
        }
        else {
            // not In Cart?
            product.quantity = qty;

            const newCartData = [ ...cartData, product]

            setCartData(newCartData);
        }

        toast.success(`${product.name} added successfully`);
    }

    return (
        <AppContext.Provider value={{
            showCart,
            setShowCart,
            qty,
            setQty,
            totalPrice,
            setTotalPrice,
            totalQty,
            setTotalQty,
            cartData, 
            setCartData,
            handleAdd,
            handleInc,
            handleDec
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useCustomContext = () => {
    return useContext(AppContext);
}

export default AppContextWrapper;