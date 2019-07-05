import React from 'react'
import { Link } from '@reach/router'
import styled, { css } from 'styled-components'
import Icon from 'components/Icon'
import _IconLink from 'components/IconLink'
import APP from 'constants/app'
import PATH from 'constants/path'

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
    left: 0;
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

const IconLink = styled(_IconLink)`
    position: absolute;
    right: 0;
    top: 0;
`

function AppHeader({ backTo = PATH.ROOT }) {
    return (
        <header>
            <Container>
                {window.location.pathname !== PATH.ROOT && (
                    <BackLink to={backTo}>
                        <Icon icon="ChevronLeft" label="Back" />
                    </BackLink>
                )}
                <HomeLink to={PATH.ROOT}>{APP.title}</HomeLink>
                <IconLink
                    to={PATH.SETTINGS}
                    icon="Settings"
                    label="App settings"
                />
            </Container>
        </header>
    )
}

export default AppHeader
