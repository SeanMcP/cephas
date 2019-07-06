import React from 'react'
import { Link } from '@reach/router'
import styled, { css } from 'styled-components'
import _IconLink from 'components/IconLink'
import APP from 'constants/app'
import PATH from 'constants/path'
import IconButton from './IconButton'

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

const BackButton = styled(IconButton)`
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

const SettingsIconLink = styled(_IconLink)`
    position: absolute;
    right: 0;
    top: 0;
`

function AppHeader({ backTo = PATH.ROOT }) {
    const { pathname } = window.location
    return (
        <header>
            <Container>
                {pathname !== PATH.ROOT && (
                    <BackButton
                        onClick={() => window.history.go(-1)}
                        icon="ChevronLeft"
                        label="Back"
                    />
                )}
                <HomeLink to={PATH.ROOT}>{APP.title}</HomeLink>
                {pathname !== PATH.SETTINGS && (
                    <SettingsIconLink
                        to={PATH.SETTINGS}
                        icon="Settings"
                        label="App settings"
                    />
                )}
            </Container>
        </header>
    )
}

export default AppHeader
