import React from 'react'
import StyleProvider from 'styles/StyleProvider'
import { SettingsStoreProvider } from 'store/SettingsStore'
import { AppStoreProvider } from 'store/AppStore'
import SkipLink from 'components/SkipLink'
import Router from './Router'

function App() {
    return (
        <AppStoreProvider>
            <SettingsStoreProvider>
                <StyleProvider>
                    <SkipLink />
                    <Router />
                </StyleProvider>
            </SettingsStoreProvider>
        </AppStoreProvider>
    )
}

export default App
