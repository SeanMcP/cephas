import React from 'react'
import ContentContainer from 'components/ContentContainer'
import ViewWrapper from 'components/ViewWrapper'
import { Link } from '@reach/router'

function HomeView(props) {
    return (
        <ViewWrapper title="Home">
            <ContentContainer>
                <p>Hello from home!</p>
                <p>
                    <Link to="/settings">Settings</Link>
                </p>
            </ContentContainer>
        </ViewWrapper>
    )
}

export default HomeView
