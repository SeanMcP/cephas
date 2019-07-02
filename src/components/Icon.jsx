import React from 'react'
import PropTypes from 'prop-types'
import * as Feather from 'react-feather'

function Icon({ icon, ...props }) {
    const FeatherIcon = Feather[icon]
    return <FeatherIcon {...props} />
}

Icon.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.oneOf(Object.keys(Feather)).isRequired,
    size: PropTypes.number
}

export default Icon
