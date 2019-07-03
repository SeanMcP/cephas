import React from 'react'
import StyleProvider from 'styles/StyleProvider'
import Router from './Router'

function App() {
    return (
        <StyleProvider>
            <Router />
        </StyleProvider>
    )
}

export default App
