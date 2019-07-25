import React from 'react'

import { settings as appSettings, version } from 'appSettings.json'

const SettingsStoreContext = React.createContext()

export function SettingsStoreProvider({ children }) {
    const [value, setValue] = React.useState(() => {
        let dataFromStorage
        while (!dataFromStorage) {
            const readFromStorage = JSON.parse(localStorage.getItem(version))
            if (readFromStorage) {
                dataFromStorage = readFromStorage
                break
            } else {
                const dataToStore = {}
                for (const title in appSettings) {
                    dataToStore[title] = appSettings[title].default
                }
                localStorage.setItem(version, JSON.stringify(dataToStore))
            }
        }
        return dataFromStorage
    })
    function setter(newValue) {
        try {
            localStorage.setItem(version, JSON.stringify(newValue))
            const dataFromStorage = JSON.parse(localStorage.getItem(version))
            setValue(dataFromStorage)
        } catch (err) {
            console.error('Error saving data to `localStorage`:', err)
        }
    }
    return (
        <SettingsStoreContext.Provider value={[value, setter]}>
            {children}
        </SettingsStoreContext.Provider>
    )
}

export function useSettings() {
    const dataFromContext = React.useContext(SettingsStoreContext)
    if (!dataFromContext) {
        throw new Error('No data from `localStorage`')
    }
    return dataFromContext
}
