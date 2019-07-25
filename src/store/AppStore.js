import React from 'react'
import { initialState, reducer } from 'store/AppReducer'

const AppStoreContext = React.createContext()

export const AppStoreProvider = ({ children }) => {
    const value = React.useReducer(reducer, initialState)
    return (
        <AppStoreContext.Provider value={value}>
            {children}
        </AppStoreContext.Provider>
    )
}

export const useAppStore = () => {
    const context = React.useContext(AppStoreContext)
    if (!context)
        throw new Error(
            'Cannot call `useAppStore()` outside of `AppStoreProvider`'
        )
    return context
}
