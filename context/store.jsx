import { createContext, useState } from "react";

// Se crea el contexto
export const StoreContext = createContext()

// Se crea el proveedor del contexto
export function StoreProvider({ children }) {

  const [cart, setCart] = useState([])

  return(
    <StoreContext.Provider
    value={{
      test: '1'
    }
      }>
    </StoreContext.Provider>
  )
}