import '../styles/globals.css'
import styled from 'styled-components'
import Header from '../components/Header'

const BaseContainer = styled.div`
    padding: 0 2rem;
`

function MyApp({ Component, pageProps }) {
    return (
        <BaseContainer>
            <Header />
            <Component {...pageProps} />
        </BaseContainer>
    )
}

export default MyApp
