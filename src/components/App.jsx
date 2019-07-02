import React from 'react'
import StyleProvider from 'styles/StyleProvider'
import ViewWrapper from 'components/ViewWrapper'

function App() {
    return (
        <StyleProvider>
            <ViewWrapper title="Home">
                <div>Hello from Cephas</div>
            </ViewWrapper>
        </StyleProvider>
    )
}

export default App
