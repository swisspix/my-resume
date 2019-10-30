import React, {useState, createContext} from 'react'

export const LoadedContext = createContext()

export const LoadedProvider = props => {
    const [headerReady, setHeaderReady] = useState(false)
    const [aboutReady, setAboutReady] = useState(false)
    const [portfolioReady, setPortfolioReady] = useState(false)

    return (
    <LoadedContext.Provider value={'Hello'}>
        {props.children}
    </LoadedContext.Provider>)
}