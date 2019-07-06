import React from 'react'
import styled from 'styled-components'
import ContentContainer from 'components/ContentContainer'
import ExternalLink from './ExternalLink'

const Footer = styled.footer`
    text-align: center;
`

function AppFooter() {
    return (
        <Footer>
            <ContentContainer>
                <p>
                    Made by{' '}
                    <ExternalLink to="https://seanmcp.com">
                        SeanMcP
                    </ExternalLink>
                </p>
            </ContentContainer>
        </Footer>
    )
}

export default AppFooter
