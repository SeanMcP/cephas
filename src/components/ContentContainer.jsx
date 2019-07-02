import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const styles = css`
    margin: 1rem auto;
    max-width: ${p => p.theme.max_width};
    width: 100%;

    @media screen and (max-width: calc(${p => p.theme.max_width} + 2rem)) {
        margin-left: 1rem;
        margin-right: 1rem;
        width: initial;
    }

    ${p =>
        p.squash &&
        css`
            margin-bottom: 0;
            margin-top: 0;
        `}
`

function ContentContainer({
    as = 'section',
    children,
    squash = false,
    ...props
}) {
    const Element = styled[as]`
        ${styles}
    `
    return (
        <Element {...props} squash={squash}>
            {children}
        </Element>
    )
}

ContentContainer.propTypes = {
    as: PropTypes.string
}

export default ContentContainer
