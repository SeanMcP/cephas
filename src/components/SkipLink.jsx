import React from 'react'
import styled from 'styled-components'

const A = styled.a`
    bottom: 100%;
    padding: 1rem 2rem;
    position: absolute;
    right: 100%;

    &:focus {
        bottom: initial;
        background: ${p => p.theme.primary};
        color: white;
        left: 0;
        top: 0;
        right: initial;
    }
`

function SkipLink() {
    return <A href="#main">Skip to main content</A>
}

export default SkipLink
