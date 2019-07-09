import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { flexCenterCenter } from 'styles/mixins'
import { linkStyles } from 'styles/GlobalStyle'
import IconButton from 'components/IconButton'
import IconLink from 'components/IconLink'

const shared = {
    icon: 'ChevronLeft',
    label: 'Back'
}

const backStyles = css`
    ${flexCenterCenter}
    height: 48px;
    left: 0;
    position: absolute;
    top: 0;
    width: 48px;
`

const BackIconButton = styled(IconButton)`
    ${backStyles}
    ${linkStyles}
`

const BackIconLink = styled(IconLink)`
    ${backStyles}
`

function AppHeaderBackButtonLink({ backTo, isRoot }) {
    if (isRoot) {
        return null
    }
    if (backTo) {
        return <BackIconLink to={backTo} {...shared} />
    }
    return <BackIconButton onClick={() => window.history.go(-1)} {...shared} />
}

AppHeaderBackButtonLink.propTypes = {
    backTo: PropTypes.string,
    isRoot: PropTypes.bool.isRequired
}

export default AppHeaderBackButtonLink
