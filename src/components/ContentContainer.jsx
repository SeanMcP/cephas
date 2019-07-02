import React from 'react'
import styled, { css } from 'styled-components'

const styles = css`
    margin: 1rem auto;
    max-width: ${p => p.theme.max_width};
    width: 100%;

    @media screen and (max-width: calc(${p => p.theme.max_width} + 2rem)) {
        margin-left: 1rem;
        margin-right: 1rem;
        width: initial;
    }
`

function ContentContainer({ as = 'section', children, ...props }) {
    const Element = styled[as]`
        ${styles}
    `
    return <Element {...props}>{children}</Element>
}

ContentContainer.propTypes = {
    as: PropTypes.string
}

export default ContentContainer
