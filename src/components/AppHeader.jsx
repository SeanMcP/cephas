import React from 'react'
import { Link } from '@reach/router'
import styled, { css } from 'styled-components'
import ContentContainer from 'components/ContentContainer'
import Icon from 'components/Icon'
import APP from 'constants/app'

const flexCenterCenter = css`
    align-items: center;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    ${flexCenterCenter}
    height: 48px;
    position: relative;
`

const BackLink = styled(Link)`
    ${flexCenterCenter}
    height: 48px;
    left: -1rem;
    position: absolute;
    top: 0;
    width: 48px;
`

const HomeLink = styled(Link)`
    font-weight: bold;

    &:not(:hover) {
        text-decoration: none;
    }
`

function AppHeader({ backTo = '/' }) {
    const { pathname } = window.location
    return (
        <header>
            <ContentContainer squash>
                <Container>
                    {pathname !== '/' && (
                        <BackLink to={backTo}>
                            <Icon icon="ChevronLeft" label="Back" />
                        </BackLink>
                    )}
                    <HomeLink to="/">{APP.title}</HomeLink>
                </Container>
            </ContentContainer>
        </header>
    )
}

export default AppHeader
