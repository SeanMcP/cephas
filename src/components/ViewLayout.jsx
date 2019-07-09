import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AppFooter from 'components/AppFooter'
import AppHeader from 'components/AppHeader'
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

function ViewLayout({ backTo, children, title }) {
    React.useEffect(() => {
        document.title = `${title} - ${APP.title}`
    }, [title])
    return (
        <Container>
            <AppHeader backTo={backTo} />
            <Main role="main" id="main">
                {children}
            </Main>
            <AppFooter />
        </Container>
    )
}

ViewLayout.propTypes = {
    title: PropTypes.string.isRequired
}

export default ViewLayout
