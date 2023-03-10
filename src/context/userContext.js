import React, { createContext } from "react";


const UserContext = createContext()

const Wrapper = (props) => {

    const [greeting,changeGreeting] = "Hello"
  
    return (
        <UserContext.Provider value={{ greeting, changeGreeting }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { Wrapper, UserContext }