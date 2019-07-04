import React from 'react'
import StyleProvider from 'styles/StyleProvider'
import { SettingsProvider } from 'store/SettingsStore'
import Router from './Router'

function App() {
    return (
        <SettingsProvider>
            <StyleProvider>
                <Router />
            </StyleProvider>
        </SettingsProvider>
    )
}

export default App
