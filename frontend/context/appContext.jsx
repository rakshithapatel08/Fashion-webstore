import { createContext, useContext, useState } from "react";
import toast from 'react-hot-toast';

const AppContext = createContext();

const AppContextWrapper = ({ children }) => {

    const [showCart, setShowCart] = useState(false);
    const [qty, setQty] = useState(1);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartData, setCartData ] = useState([]);
    const [data, setData] = useState({});
    const [isFemale, setIsFemale] = useState(true);

    const handleInc = (product) => {
      product.quantity += 1;

      const newCartData = cartData?.map(cartItem => cartItem._id === product._id ? product : cartItem);

      setCartData(newCartData);
      setTotalQty(totalQty + 1)
      setTotalPrice(totalPrice + product.price);
      localStorage.setItem("cart", JSON.stringify(newCartData));
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
        localStorage.setItem("cart", JSON.stringify(newCartData));
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

            localStorage.setItem("cart", JSON.stringify(newCartData));
        }
        else {
            // not In Cart?
            product.quantity = qty;

            const newCartData = [ ...cartData, product]

            setCartData(newCartData);

            localStorage.setItem("cart", JSON.stringify(newCartData));
        }

        toast.success(`${product.name} added successfully`);
    }

    const removeItem = (cartProduct) =>{
        const newCartData = cartData.filter((cartItem)=> cartItem._id !== cartProduct._id);
        setCartData(newCartData);
        setTotalQty(totalQty - cartProduct.quantity)
        setTotalPrice(totalPrice - cartProduct.quantity * cartProduct.price)
        localStorage.setItem("cart", JSON.stringify(newCartData));
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
            handleDec,
            removeItem,
            data,
            setData,
            isFemale,
            setIsFemale
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useCustomContext = () => {
    return useContext(AppContext);
}

export default AppContextWrapper;