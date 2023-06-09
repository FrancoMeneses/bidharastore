import { StoreProvider } from '@/context/store'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <StoreProvider>
          <Component {...pageProps} />
      </StoreProvider>
    </>
  )
}
