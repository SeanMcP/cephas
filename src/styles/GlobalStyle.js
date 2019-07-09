import { createGlobalStyle, css } from 'styled-components'

export const linkStyles = css`
    color: ${p => p.theme.primary};
    text-decoration: none;

    &:hover,
    &:focus {
        filter: brightness(2);
    }

    &:hover {
        text-decoration: underline;
    }

    &:focus {
        box-shadow: 0 0 0 2px ${p => p.theme.primary};
        outline: 2px solid transparent;
        text-decoration: none;
    }

    &:visited {
        filter: brightness(-2);
    }
`

export default createGlobalStyle`
body {
    color: ${p => p.theme.text};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 100%;
    -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

a {
    ${linkStyles}
}
`
