import React from 'react'
import PropTypes from 'prop-types'

function ExternalLink({ children, to, ...props }) {
    return (
        <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    )
}

ExternalLink.propTypes = {
    to: PropTypes.string.isRequired
}

export default ExternalLink
