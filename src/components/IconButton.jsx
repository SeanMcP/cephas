import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'components/Icon'

const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    height: 48px;
    width: 48px;
`

function IconButton({ icon, iconColor, iconSize, label, ...props }) {
    const iconProps = {
        color: iconColor,
        icon,
        size: iconSize
    }
    return (
        <Button aria-label={label} {...props}>
            <Icon {...iconProps} />
        </Button>
    )
}

IconButton.propTypes = {
    label: PropTypes.string.isRequired
}

export default IconButton
