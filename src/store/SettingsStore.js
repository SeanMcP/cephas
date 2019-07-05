import React from 'react'

import { settings as appSettings, version } from 'appSettings.json'

const SettingsStore = React.createContext()

export function SettingsProvider({ children }) {
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
        <SettingsStore.Provider value={[value, setter]}>
            {children}
        </SettingsStore.Provider>
    )
}

export function useSettings() {
    const dataFromContext = React.useContext(SettingsStore)
    if (!dataFromContext) {
        throw new Error('No data from `localStorage`')
    }
    return dataFromContext
}
