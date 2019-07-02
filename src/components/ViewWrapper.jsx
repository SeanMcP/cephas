import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AppFooter from 'components/AppFooter'
import APP from 'constants/app'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const Main = styled.main`
    flex-grow: 1;
    overflow-y: auto;
`

function ViewWrapper({ children, title }) {
    React.useEffect(() => {
        document.title = `${title} - ${APP.title}`
    }, [title])
    return (
        <Container>
            <Main role="main" id="main">
                {children}
            </Main>
            <AppFooter />
        </Container>
    )
}

ViewWrapper.propTypes = {
    title: PropTypes.string.isRequired
}

export default ViewWrapper
