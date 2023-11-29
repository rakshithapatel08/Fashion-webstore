import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppContextWrapper = ({ children }) => {

    const [showCart, setShowCart] = useState(false);

    return (
        <AppContext.Provider value={{
            showCart,
            setShowCart
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useCustomContext = () => {
    return useContext(AppContext);
}

export default AppContextWrapper;