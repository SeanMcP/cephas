import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'
import AppHeaderBackButtonLink from 'components/AppHeaderBackButtonLink'
import IconLink from 'components/IconLink'
import APP from 'constants/app'
import PATH from 'constants/path'
import { flexCenterCenter } from 'styles/mixins'

const Container = styled.div`
    ${flexCenterCenter}
    height: 48px;
    position: relative;
`

const HomeLink = styled(Link)`
    font-weight: bold;

    &:not(:hover) {
        text-decoration: none;
    }
`

const SettingsIconLink = styled(IconLink)`
    position: absolute;
    right: 0;
    top: 0;
`

function AppHeader({ backTo }) {
    const { pathname } = window.location
    const isRoot = pathname === PATH.ROOT
    return (
        <header>
            <Container>
                <AppHeaderBackButtonLink backTo={backTo} isRoot={isRoot} />
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
