import React from 'react'
import PropTypes from 'prop-types'
import { Link as _Link } from '@reach/router'
import styled from 'styled-components'
import Icon from 'components/Icon'

const Link = styled(_Link)`
    align-items: center;
    display: flex;
    height: 48px;
    justify-content: center;
    text-decoration: none;
    width: 48px;
`

function IconLink({ icon, iconColor, iconSize, label, ...props }) {
    const iconProps = {
        color: iconColor,
        icon,
        size: iconSize
    }
    return (
        <Link aria-label={label} {...props}>
            <Icon {...iconProps} />
        </Link>
    )
}

IconLink.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

export default IconLink
