import React from 'react'
import styled from 'styled-components'
import ContentContainer from 'components/ContentContainer'

const Footer = styled.footer`
    text-align: center;
`

function AppFooter() {
    return (
        <Footer>
            <ContentContainer>
                <p>
                    Made by{' '}
                    <a
                        href="https://seanmcp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SeanMcP
                    </a>
                </p>
            </ContentContainer>
        </Footer>
    )
}

export default AppFooter
