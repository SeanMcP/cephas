import React from 'react'
import ContentContainer from 'components/ContentContainer'
import ViewWrapper from 'components/ViewWrapper'

function HomeView(props) {
    return (
        <ViewWrapper title="Home">
            <ContentContainer>
                <h1>Home</h1>
                <p>Hello from ⛰ Cephas!</p>
            </ContentContainer>
        </ViewWrapper>
    )
}

export default HomeView
