import React from 'react'

import { settings as appSettings, version } from 'appSettings.json'

const SettingsStore = React.createContext()

export function SettingsProvider({ children }) {
    let settings
    while (!settings) {
        const dataFromStorage = JSON.parse(localStorage.getItem(version))
        if (dataFromStorage) {
            settings = dataFromStorage
            break
        } else {
            const dataToStore = {}
            for (const title in appSettings) {
                dataToStore[title] = appSettings[title].default
            }
            localStorage.setItem(version, JSON.stringify(dataToStore))
        }
    }
    console.log('settings', settings)
    return (
        <SettingsStore.Provider value={settings}>
            {children}
        </SettingsStore.Provider>
    )
}

export function useSettings() {
    const dataFromContext = React.useContext(SettingsStore)
    function save(settings) {
        localStorage.setItem(version, JSON.stringify(settings))
    }
    return [dataFromContext, save]
}
