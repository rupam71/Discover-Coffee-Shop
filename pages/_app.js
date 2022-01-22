// import context
import StoreProvider from '../store/store-context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  //warp context
  return <StoreProvider>
    <Component {...pageProps} />
  </StoreProvider>
}

export default MyApp
