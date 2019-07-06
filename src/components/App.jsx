import React from 'react'
import StyleProvider from 'styles/StyleProvider'
import { SettingsProvider } from 'store/SettingsStore'
import SkipLink from 'components/SkipLink'
import Router from './Router'

function App() {
    return (
        <SettingsProvider>
            <StyleProvider>
                <SkipLink />
                <Router />
            </StyleProvider>
        </SettingsProvider>
    )
}

export default App
